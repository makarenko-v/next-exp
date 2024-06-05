import { unstable_noStore as noStore } from 'next/cache';

import db from '@/db/drizzle';
import { task } from '@/db/schema';
import { desc } from 'drizzle-orm';

export async function fetchAllTasks() {
  noStore();

  return db.select().from(task).orderBy(desc(task.createdAt));
}
