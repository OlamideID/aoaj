import Navbar from "./components";
import Hero from "./hero";
import Programs from "./programs";
import Stats from "./stats";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Navbar />
      <Hero />
      <Stats />

      {/* Program Section */}
      <Programs />

      {/* About/Legacy Section */}
      <section className="px-8 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="h-[350px] bg-emerald-50 rounded-lg border-2 border-dashed border-emerald-200 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000"
            alt="Legacy"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div>
          <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Her Story</span>
          <h2 className="font-serif text-3xl text-slate-800 mt-4 mb-6">A life of purpose, <br /> a legacy of giving.</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-8">
            Anthonia Oluwakemi Adedapo-Joshua was a woman whose generosity shaped every community she touched.
            This foundation ensures her values—compassion, education, and service—continue to transform lives.
          </p>
          <button className="bg-emerald-600 text-white px-6 py-3 rounded text-xs font-semibold">Read her full story</button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-slate-900 py-12 px-8 text-center border-t border-dashed border-slate-700">
        <p className="text-slate-500 text-[10px] uppercase tracking-widest">
          © 2026 Anthonia Oluwakemi Adedapo-Joshua Memorial Foundation.
        </p>
      </footer>
    </main>
  );
}