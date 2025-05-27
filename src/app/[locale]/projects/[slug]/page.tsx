import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

// inporta os componentes dinamicamente para mais performace
const projetoComponents: Record<string, React.ComponentType> = {
  "Projeto-1": dynamic(
    () => import("../../../../components/projetos/Projeto-1")
  )
};

export default function ProjetoPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  //passa o componente dinamicamente baseado no slug
  const ProjetoComponent = projetoComponents[params.slug];
  //se nao tiver o componente volta 404
  if (!ProjetoComponent) return notFound();
  //se tiver o componente renderiza ele
  return (
   <main className="max-w-7xl mx-auto px-4">
      <ProjetoComponent />
    </main>
  );
}
