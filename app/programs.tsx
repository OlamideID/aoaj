import { PROGRAMS } from "./constants";

export default function Programs() {
    return (
        <section className="py-20 px-8 bg-[#faf9f6]">
            <div className="text-center mb-16">
                <span className="border border-dashed border-slate-300 px-4 py-1 text-[9px] uppercase text-slate-500">Our Pillars</span>
                <h3 className="font-serif text-3xl mt-4 text-slate-800">What we do</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {PROGRAMS.map((p, i) => (
                    <div key={i} className="bg-white p-8 border border-dashed border-emerald-100 rounded-xl hover:border-emerald-500 transition-all group">
                        <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{p.icon}</div>
                        <h4 className="font-serif text-lg text-slate-800 mb-3">{p.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed mb-6">{p.desc}</p>
                        <a href="#" className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest">Learn More →</a>
                    </div>
                ))}
            </div>
        </section>
    );
}