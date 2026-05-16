export default function Hero() {
    return (
        <section className="bg-emerald-600 text-white grid md:grid-cols-2 gap-10 px-8 py-20 items-center">
            <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-200 mb-4">Carrying her legacy forward</p>
                <h2 className="font-serif text-5xl leading-tight mb-6">
                    Rooted in compassion, <br />
                    <span className="italic text-emerald-100 font-light text-4xl">growing through service.</span>
                </h2>
                <p className="text-emerald-50 text-sm leading-relaxed max-w-md mb-10 opacity-90">
                    Honoring the spirit of Anthonia Oluwakemi Adedapo-Joshua through maternal health, grief counselling, and women's empowerment across Nigeria.
                </p>
                <div className="flex gap-4">
                    <button className="bg-white text-emerald-700 px-8 py-3 rounded text-xs font-bold shadow-lg">Explore Our Work</button>
                    <button className="border border-dashed border-emerald-300 text-white px-8 py-3 rounded text-xs">Our Story →</button>
                </div>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden border-2 border-dashed border-emerald-400/40 relative">
                <img
                    src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1000"
                    alt="African mother and child"
                    className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </section>
    );
}