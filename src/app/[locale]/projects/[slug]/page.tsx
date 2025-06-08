import { notFound } from "next/navigation";
import ProjetoPageContent from "@/components/projetos/ProjetoPageContent";
import { projects } from "@/data/projects";

//pega o slug por parametro
export default async function ProjetoPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  //busca o slug corespondente no data do projects
  const projeto = projects.find((p) => p.slug === resolvedParams.slug);
  // se nao achar 404
  if (!projeto) return notFound();
  //se achar retorna a pagina padrao dos projetos com todas as props do projeto encontrado no data
  return (
    <main className="max-w-7xl mx-auto px-4">
      <ProjetoPageContent {...projeto} />
    </main>
  );
}
