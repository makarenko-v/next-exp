import { fetchTask } from '@/app/lib/data/task';
import { updateTask } from '@/app/lib/actions/task';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const [task] = await fetchTask(id);

  return (
    <form
      className="flex max-w-xs flex-col gap-6 rounded-lg p-6 shadow-lg"
      action={updateTask}
    >
      <input type="hidden" value={task.id} name="id" />
      <input
        className="input input-bordered w-full"
        type="text"
        defaultValue={task.content}
        name="content"
      />
      <div className="flex items-center justify-between">
        <label htmlFor="completed">Completed:</label>
        <input
          className="checkbox"
          type="checkbox"
          defaultChecked={task.completed!}
          name="completed"
          id="completed"
        />
      </div>
      <button className="btn btn-primary w-full" type="submit">
        Edit
      </button>
    </form>
  );
}
