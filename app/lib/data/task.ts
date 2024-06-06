import { unstable_noStore as noStore } from 'next/cache';

import db from '@/db/drizzle';
import { task } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';

export async function fetchAllTasks() {
  noStore();

  return db.select().from(task).orderBy(desc(task.createdAt));
}

export async function fetchTask(id: string) {
  noStore();

  return db.select().from(task).where(eq(task.id, id));
}
