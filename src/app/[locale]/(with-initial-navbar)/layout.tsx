import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

//layout com a navegação principal
export default function LayoutWithInitialNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-bg-primary dark:bg-bg-dark text-text-primary dark:text-text-dark transition-colors duration-300">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
