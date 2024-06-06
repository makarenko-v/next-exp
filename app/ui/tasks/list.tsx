import { fetchAllTasks } from '@/app/lib/data/task';
import Link from 'next/link';
import { DeleteForm } from '@/app/ui/tasks/delete-form';

export async function List() {
  const tasks = await fetchAllTasks();

  return (
    <ul className="mt-8 flex flex-col gap-6">
      {tasks.map((task) => (
        <li
          className={`flex items-center justify-between rounded-lg border border-base-300 p-4 shadow-lg ${task.completed ? 'line-through' : ''}`}
          key={task.id}
        >
          <p>{task.content}</p>
          <div className="flex gap-4">
            <Link className="btn btn-success btn-sm" href={`/tasks/${task.id}`}>
              Edit
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  );
}
