import Tecnologia from '@/components/tecnologiacard';
import tecnologias from '@/app/data/tecnologias.json';


export default function TecnologiasPage() {
return (
<main className="p-8">
<h1 className="text-2xl font-bold mb-6">Tecnologias</h1>


<ul className="space-y-4">
{tecnologias.map((tec, index) => (
<Tecnologia key={index} tecnologia={tec} index={index} />
))}
</ul>
</main>
);
}