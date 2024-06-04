import { Drink } from '@/app/lib/types';
import Image from 'next/image';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

async function fetchDrink(id: string): Promise<{ drinks: Drink[] }> {
  const response = await fetch(URL + id);

  return await response.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const { drinks } = await fetchDrink(id);

  const title = drinks[0]?.strDrink;
  const imgSrc = drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Image
        className="mb-4 rounded-lg shadow-lg"
        src={imgSrc}
        alt={title}
        width={300}
        height={300}
        priority
      />
      <p className="text-xl font-bold">{title}</p>
    </div>
  );
}
