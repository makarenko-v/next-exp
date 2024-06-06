'use server';

import db from '@/db/drizzle';
import { task } from '@/db/schema';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { State, Statuses } from '@/app/lib/types';

const FormSchema = z.object({
  id: z.string(),
  content: z.string().min(5),
  completed: z.enum(['on', 'off']),
  createdAt: z.string(),
});

const CreateTask = FormSchema.omit({
  id: true,
  completed: true,
  createdAt: true,
});

export async function createTask(prevState: State, formData: FormData) {
  const validatedFields = CreateTask.safeParse({
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return { status: Statuses.ERROR };
  }

  const { content } = validatedFields.data;

  try {
    await db.insert(task).values({
      content,
    });
  } catch (_) {
    return { status: Statuses.ERROR };
  }

  revalidatePath('/tasks');

  return { status: Statuses.SUCCESS };
}

export async function deleteTask(formData: FormData) {
  const id = formData.get('id') as string;

  await db.delete(task).where(eq(task.id, id));

  revalidatePath('/tasks');
}

export async function updateTask(formData: FormData) {
  const id = formData.get('id') as string;
  const content = formData.get('content') as string;
  const completed = formData.get('completed') === 'on';

  await db
    .update(task)
    .set({
      content,
      completed,
    })
    .where(eq(task.id, id));

  revalidatePath('/tasks');
  redirect('/tasks');
}
