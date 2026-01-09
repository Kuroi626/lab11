'use client';

const caracteristicas = [
    'JSX, sintaxe que mistura HTML e JS.',
    'Componentes, funções que retornam JSX.',
    'Componentes Reutilizáveis e Modulares.',
    'Roteamento Automático e APIs.',
    'Hooks: useState, useEffect e useSWR.',
    'Renderização Rápida e SEO Friendly.',
    'TypeScript Seguro e Escalável.',
    'Comunidade Ativa e Popularidade.'
];

export default function CaracteristicasPage() {
    const handleClick = () => {
        alert('React e Next.js são incríveis 🚀');
    };

    return (
        <main style={{ padding: '2rem' }}>
            <h2>Características do React e Next.js</h2>

            <ul>
                {caracteristicas.map((caracteristica, i) => (
                    <li key={i}>{caracteristica}</li>
                ))}
            </ul>

            <button onClick={handleClick}>
                Mostrar mensagem
            </button>
        </main>
    );
}
