'use client';

import { useFormStatus, useFormState } from 'react-dom';
import { createTask } from '@/app/lib/actions/task';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { State, Statuses } from '@/app/lib/types';

const initialState: State = {
  status: null,
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

  useEffect(() => {
    if (state.status === Statuses.ERROR) {
      toast.error('Something went wrong');
    }

    if (state.status === Statuses.SUCCESS) {
      toast.success('Successfully created task');
    }
  }, [state]);

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
