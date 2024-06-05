'use client';

import { useFormState } from 'react-dom';
import { createTask } from '@/app/lib/actions/task';

const initialState = {
  message: '',
};

export function Form() {
  const [state, dispatch] = useFormState(createTask, initialState);

  return (
    <form className="join" action={dispatch}>
      <input
        type="text"
        placeholder="Task..."
        className="input join-item input-bordered"
        name="content"
      />
      <button className="btn btn-primary join-item">Create Task</button>
    </form>
  );
}
