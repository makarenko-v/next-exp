'use server';

import db from '@/db/drizzle';
import { task } from '@/db/schema';
import { revalidatePath } from 'next/cache';

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
