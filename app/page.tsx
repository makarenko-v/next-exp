import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="mb-12 text-5xl font-bold">Next.js tutorial</h1>
      <Link className="btn btn-accent" href="/client">
        Get Started
      </Link>
    </div>
  );
}
