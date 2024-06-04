'use client';

import { useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h1 className="mb-12 text-7xl">Client</h1>
      <button className="btn btn-secondary" onClick={handleClick}>
        Count: {count}
      </button>
    </div>
  );
}
