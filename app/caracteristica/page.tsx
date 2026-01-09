import Caracteristica from '@/components/caracteristica';


const caracteristicas = [
'JSX, sintaxe que mistura HTML e JavaScript.',
'Componentes reutilizáveis e modulares.',
'Renderização condicional e listas com map.',
'Uso de hooks como useState e useEffect.',
];


export default function CaracteristicasPage() {
return (
<main className="p-8">
<h1 className="text-2xl font-bold mb-6">Características</h1>


<ul className="space-y-4">
{caracteristicas.map((caracteristica, index) => (
<Caracteristica
key={index}
caracteristica={caracteristica}
/>
))}
</ul>
</main>
);
}