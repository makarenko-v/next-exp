import { CreateForm, List } from '@/app/ui/tasks';

export default function Page() {
  return (
    <div className="max-w-lg">
      <CreateForm />
      <List />
    </div>
  );
}
