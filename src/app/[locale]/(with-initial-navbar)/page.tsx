import Section1 from "@/components/sections/section1";
import Section2 from "@/components/sections/section2";
import Section3 from "@/components/sections/section3";
import Section4 from "@/components/sections/section4";
import Section5 from "@/components/sections/section5";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Seção: home */}
      <Section1 />
      {/* Seção: sobre */}
      <Section2 />
      {/* Seção: tecnologias */}
      <Section3 />
      {/* Seção: pojetos */}
      <Section4 />
      {/* Seção: contato */}
      <Section5 />
    </div>
  );
}
