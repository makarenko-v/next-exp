import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1 className="text-7xl">Info</h1>
      <Link className="text-xl" href="/">
        Home
      </Link>
      <Link className="text-xl" href="/about">
        About
      </Link>
    </div>
  );
}
