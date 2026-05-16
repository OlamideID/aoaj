import { NAV_LINKS } from "./constants";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-dashed border-emerald-200">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div className="leading-tight">
                    <h1 className="font-serif text-sm font-semibold text-slate-800">Anthonia Oluwakemi <br /> Adedapo-Joshua</h1>
                    <span className="text-[10px] uppercase tracking-widest text-emerald-600">Memorial Foundation</span>
                </div>
            </div>
            <div className="hidden md:flex gap-6 text-xs text-slate-600 font-medium">
                {NAV_LINKS.map(link => (
                    <a key={link} href="#" className="hover:text-emerald-600 transition-colors">{link}</a>
                ))}
            </div>
            <button className="bg-emerald-600 text-white px-5 py-2 rounded text-[10px] uppercase tracking-widest font-bold">
                Donate Now
            </button>
        </nav>
    );
}