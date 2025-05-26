'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Section4() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1]; // extrai a locale da URL, ex: "en" ou "pt"

  return (
    <section id="projects" className="py-24 min-h-screen">
      <h2 className="text-4xl font-bold mb-4">Fale com a gente</h2>
      <p className="text-muted-foreground max-w-xl mb-6">projetos</p>

      <div className="flex flex-col gap-4">
        <Link
          href={`/${locale}/projects/Projeto-1`}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Acessar Projeto 1
        </Link>
        <Link
          href={`/${locale}/projects/Projeto-2`}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Acessar Projeto 2
        </Link>
      </div>
    </section>
  );
}
