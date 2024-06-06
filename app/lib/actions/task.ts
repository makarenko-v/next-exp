'use server';

import db from '@/db/drizzle';
import { task } from '@/db/schema';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

export type State = {
  message: string | null;
};

export async function createTask(prevState: State, formData: FormData) {
  const content = formData.get('content') as string;

  await db.insert(task).values({
    content,
  });

  revalidatePath('/tasks');

  return { message: 'Success!' };
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
