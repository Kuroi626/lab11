
import tecnologiasData from '@/app/data/tecnologias.json';
import Image from 'next/image';

const tecnologiasinfo = JSON.parse(JSON.stringify(tecnologiasData));

export default function TecnologiasPage() {
    // Converter JSON para objeto JS (Array)
    const tecnologias = JSON.parse(JSON.stringify(tecnologiasData));


    return (
        <main className="p-8">
            <h2 className="text-2xl font-bold mb-6">Tecnologias Exploradas</h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tecnologias.map((tech: any, index: number) => (
                    <div
                        key={index}
                        className="border rounded-xl shadow-sm p-5 hover:shadow-md transition"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                src={`/tecnologias/${tech.image}`}
                                alt={tech.title}
                                width={50}
                                height={50}
                            />
                            <h3 className="text-lg font-semibold">{tech.title}</h3>
                        </div>


                        <p className="text-sm text-gray-600 mb-4">
                            {tech.description}
                        </p>


                        <div className="flex gap-1">
                            {Array.from({ length: tech.rating }).map((_, i) => (
                                <span key={i}></span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}