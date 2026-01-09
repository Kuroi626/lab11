export default function TecnologiaDetailsCard({ tecnologia }: { tecnologia: any }) {
return (
<section className="border p-6 rounded-xl shadow-sm">
<h2 className="text-xl font-bold mb-2">{tecnologia.nome}</h2>


<p className="mb-4 text-gray-700">{tecnologia.descricao}</p>


<p className="font-semibold">Rating: {tecnologia.rating} / 5</p>
</section>
);
}