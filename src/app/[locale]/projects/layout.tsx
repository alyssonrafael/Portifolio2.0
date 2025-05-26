"use client";

import { useRouter } from "next/navigation";

//layout com a navegação dos projetos
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="bg-bg-primary dark:bg-bg-dark text-text-primary dark:text-text-dark min-h-screen transition-colors duration-300 p-4">
      {/* Nav simples dos projetos */}
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">aqui sera a navbar dos projetos</h1>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Voltar para inicio
        </button>
      </header>
      <main>{children}</main>
    </div>
  );
}
