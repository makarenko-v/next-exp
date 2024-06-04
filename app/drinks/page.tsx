import { Drink } from '@/app/lib/types';
import Link from 'next/link';
import Image from 'next/image';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

async function fetchDrinks(url: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return (await response.json()) as { drinks: Drink[] };
}

export default async function Page() {
  const { drinks } = await fetchDrinks(URL);

  return (
    <div>
      <h1 className="text-7xl">
        <ul className="mt mt-6 grid gap-6 sm:grid-cols-2">
          {drinks.map((drink) => (
            <li key={drink.idDrink}>
              <Link
                className="text-xl font-medium"
                href={`/drinks/${drink.idDrink}`}
              >
                <div className="relative mb-4 h-48">
                  <Image
                    className="rounded-md object-cover"
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw)"
                    fill
                  />
                </div>
                {drink.strDrink}
              </Link>
            </li>
          ))}
        </ul>
      </h1>
    </div>
  );
}
