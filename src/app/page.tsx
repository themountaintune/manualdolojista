import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

type Mini = { title: string; tag: string; img: string };

const rightCards: Mini[] = [
  {
    title: "Novas redes ampliam cobertura em metrópoles brasileiras.",
    tag: "INTERNET",
    img: "https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
  },
  {
    title: "Novas redes ampliam cobertura em metrópoles brasileiras.",
    tag: "INTERNET",
    img: "https://images.pexels.com/photos/258293/pexels-photo-258293.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
  },
];

const midGrid: Mini[] = [
  {
    title: "Protótipo de veículo voador é apresentado.",
    tag: "VEÍCULOS",
    img: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    title: "Plataforma de videoconferência com hologramas.",
    tag: "HOLOGRAMAS",
    img: "https://images.pexels.com/photos/3183206/pexels-photo-3183206.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    title: "Nova geração de consoles é lançada.",
    tag: "REALIDADE VIRTUAL",
    img: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    title: "Internet via satélite chega a áreas remotas.",
    tag: "INTERNET",
    img: "https://images.pexels.com/photos/5860563/pexels-photo-5860563.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
];

function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded px-2 py-1 text-[11px] font-semibold uppercase tracking-wide bg-white/10 text-white/90 border border-white/15">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container py-8 space-y-8">
        <section className="grid gap-4 md:grid-cols-3">
          <article className="md:col-span-2 card overflow-hidden">
            <div className="relative aspect-[16/9]">
              <Image src="https://images.pexels.com/photos/8068355/pexels-photo-8068355.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop" alt="Hero" fill sizes="(max-width:768px) 100vw, 800px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-5">
              <Chip>ROBÓTICA</Chip>
              <h1 className="mt-2 text-[22px] md:text-[28px] leading-[1.3] font-extrabold">Robôs domésticos começam a ser adotados para tarefas diárias.</h1>
            </div>
          </article>
          <div className="grid gap-4">
            {rightCards.map((c) => (
              <Link key={c.title} href="#" className="card grid grid-cols-[120px_1fr] overflow-hidden">
                <div className="relative h-24">
                  <Image src={c.img} alt="" fill sizes="200px" className="object-cover" />
                </div>
                <div className="p-3">
                  <Chip>{c.tag}</Chip>
                  <p className="mt-1 text-sm text-ink/90 line-clamp-2">{c.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white/70">Mais lidas da semana</h3>
            <a href="#" className="text-xs text-muted hover:text-ink">Ver tudo →</a>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {midGrid.map((it) => (
              <Link key={it.title} href="#" className="card overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={it.img} alt="" fill sizes="(max-width:768px) 50vw, 280px" className="object-cover" />
                </div>
                <div className="p-3">
                  <Chip>{it.tag}</Chip>
                  <h4 className="mt-2 text-sm font-semibold line-clamp-2">{it.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-[2fr_1fr]">
          <div className="space-y-3">
            {[1,2,3,4,5].map((i) => (
              <Link key={i} href="#" className="card p-4 grid grid-cols-[100px_1fr] gap-3 items-center">
                <div className="relative h-16 rounded-lg overflow-hidden">
                  <Image src={`https://picsum.photos/seed/${i}/200/120`} alt="" fill sizes="120px" className="object-cover" />
                </div>
                <div>
                  <Chip>TECNOLOGIA</Chip>
                  <h4 className="mt-1 text-sm font-semibold line-clamp-2">Nova pesquisa destaca avanços em interfaces cérebro-computador.</h4>
                </div>
              </Link>
            ))}
          </div>
          <aside className="card p-4">
            <h3 className="text-sm font-semibold text-white/70">Newsletter</h3>
            <p className="mt-1 text-xs text-muted">Receba destaques semanais no seu email.</p>
            <form className="mt-3 space-y-2">
              <input className="w-full h-9 rounded-lg border border-border bg-white/5 px-3 text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand" placeholder="seu@email.com" />
              <button className="btn btn-primary w-full">Inscrever-se</button>
            </form>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}


