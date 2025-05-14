// app/page.tsx
export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Seção: home */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-start gap-6 py-24"
      >
        <h1 className="text-5xl font-bold">Bem-vindo à nossa plataforma</h1>
        <p className="text-muted-foreground text-lg max-w-xl">
          Uma breve descrição do que fazemos e por que somos a melhor escolha.
        </p>
        <a
          href="#features"
          className="px-6 py-3 bg-primary text-white rounded hover:opacity-90 transition"
        >
          Conheça mais
        </a>
      </section>

      {/* Seção: sobre */}
      <section id="about" className="py-24 min-h-screen">
        <h2 className="text-4xl font-bold mb-4">Funcionalidades</h2>
        <p className="text-muted-foreground max-w-xl mb-6">
          sobrre
        </p>
      </section>

      {/* Seção: tecnologias */}
      <section id="tecnologies" className="py-24 min-h-screen">
        <h2 className="text-4xl font-bold mb-4">Planos e Preços</h2>
        <p className="text-muted-foreground max-w-xl mb-6">
          tecnologias
        </p>
      </section>

      {/* Seção: pojetos */}
      <section id="projects" className="py-24 min-h-screen">
        <h2 className="text-4xl font-bold mb-4">Fale com a gente</h2>
        <p className="text-muted-foreground max-w-xl mb-6">projetos</p>
      </section>
      {/* Seção: contato */}
      <section id="contact" className="py-24 min-h-screen">
        <h2 className="text-4xl font-bold mb-4">Fale com a gente</h2>
        <p className="text-muted-foreground max-w-xl mb-6">
          Formulário ou informações de contato.
        </p>
      </section>
    </div>
  );
}
