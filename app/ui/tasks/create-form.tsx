'use client';

import { useFormStatus, useFormState } from 'react-dom';
import { createTask } from '@/app/lib/actions/task';

const initialState = {
  message: '',
};

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      className="btn btn-primary join-item"
      type="submit"
      disabled={pending}
    >
      {pending ? 'Pending...' : 'Create Task'}
    </button>
  );
}

export function CreateForm() {
  const [state, dispatch] = useFormState(createTask, initialState);

  return (
    <form className="join w-full" action={dispatch}>
      <input
        type="text"
        placeholder="Task..."
        className="input join-item input-bordered w-full"
        name="content"
      />
      <Button />
    </form>
  );
}
