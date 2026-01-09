'use client';


import { useParams, useRouter } from 'next/navigation';


export default function CaracteristicaPage() {
const params = useParams();
const router = useRouter();


const caracteristica = decodeURIComponent(
params.caracteristica as string
);


return (
<main className="min-h-screen flex flex-col justify-center items-center p-8">
<p className="text-xl text-center mb-6">{caracteristica}</p>


<button
onClick={() => router.push('/caracteristicas')}
className="px-4 py-2 bg-gray-800 text-white rounded"
>
Voltar
</button>
</main>
);
}