'use client';

import { deleteTask } from '@/app/lib/actions/task';
import { useFormStatus } from 'react-dom';

function Button() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-error btn-sm" type="submit" disabled={pending}>
      {pending ? 'Pending...' : 'Delete'}
    </button>
  );
}

export function DeleteForm({ id }: { id: string }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" value={id} name="id" />
      <Button />
    </form>
  );
}
