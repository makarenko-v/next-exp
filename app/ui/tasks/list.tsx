import { fetchAllTasks } from '@/app/lib/data/task';

export async function List() {
  const tasks = await fetchAllTasks();

  console.log(tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.content}</li>
      ))}
    </ul>
  );
}
