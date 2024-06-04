import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1 className="text-7xl">About</h1>
      <Link className="text-xl" href="/">
        Home
      </Link>
    </div>
  );
}
