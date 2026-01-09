import Link from 'next/link';


interface CaracteristicaProps {
caracteristica: string;
}


export default function Caracteristica({ caracteristica }: CaracteristicaProps) {
return (
<li className="border p-4 rounded-lg flex justify-between items-center">
<span>{caracteristica}</span>


<Link
href={`/caracteristicas/${encodeURIComponent(caracteristica)}`}
className="text-blue-600 hover:underline"
>
Ver detalhe
</Link>
</li>
);
}