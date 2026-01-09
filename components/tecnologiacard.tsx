import Link from 'next/link';

export default function Tecnologia({ tecnologia, index }: { tecnologia: any; index: number }) {
return (
<li className="border p-4 rounded-lg flex justify-between items-center">
<span className="font-medium">{tecnologia.nome}</span>


<Link
href={`/tecnologias/${index}`}
className="text-blue-600 hover:underline"
>
Ver detalhes
</Link>
</li>
);
}