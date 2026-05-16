import { STATS } from "./constants";

export default function Stats() {
    return (
        <div className="bg-emerald-800 flex flex-wrap justify-around py-10 border-y border-dashed border-emerald-700">
            {STATS.map((stat, i) => (
                <div key={i} className="text-center px-4 min-w-[150px]">
                    <span className="block font-serif text-3xl text-emerald-200 mb-1">{stat.value}</span>
                    <span className="text-[9px] uppercase tracking-widest text-emerald-400 font-medium">{stat.label}</span>
                </div>
            ))}
        </div>
    );
}