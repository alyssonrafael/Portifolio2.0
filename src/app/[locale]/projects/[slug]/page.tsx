import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const projetoComponents: Record<string, React.ComponentType> = {
  "Projeto-1": dynamic(() => import("../../../../components/projetos/Projeto-1")),
};

export default async function ProjetoPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const resolvedParams = await params;
  const ProjetoComponent = projetoComponents[resolvedParams.slug];
  
  if (!ProjetoComponent) return notFound();

  return (
    <main className="max-w-7xl mx-auto px-4">
      <ProjetoComponent />
    </main>
  );
}
