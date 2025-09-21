import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container py-8 space-y-8">
        <section className="grid gap-4 md:grid-cols-3">
          <article className="md:col-span-2 card overflow-hidden">
            <div className="relative aspect-[16/9]">
              <Image src="https://images.pexels.com/photos/8068355/pexels-photo-8068355.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop" alt="Hero" fill sizes="(max-width:768px) 100vw, 800px" className="object-cover" />
            </div>
            <div className="p-5">
              <span className="text-[11px] font-semibold text-ink/90">ROBÓTICA</span>
              <h1 className="mt-2 text-2xl font-extrabold">Robôs domésticos começam a ser adotados para tarefas diárias.</h1>
            </div>
          </article>
          <div className="grid gap-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <Link key={i} href="#" className="card grid grid-cols-[120px_1fr] overflow-hidden">
                <div className="relative h-24">
                  <Image src={`https://picsum.photos/seed/${i+1}/400/300`} alt="" fill sizes="200px" className="object-cover" />
                </div>
                <div className="p-3">
                  <span className="text-[11px]">INTERNET</span>
                  <p className="mt-1 text-sm text-ink/90 line-clamp-2">Novas redes ampliam cobertura em metrópoles brasileiras.</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}


