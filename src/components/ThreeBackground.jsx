export default function ThreeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,199,109,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_28%),linear-gradient(180deg,_#050816_0%,_#070b18_55%,_#050816_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(246,199,109,0.16),transparent_18%),radial-gradient(circle_at_80%_25%,rgba(96,165,250,0.16),transparent_16%),radial-gradient(circle_at_70%_75%,rgba(255,255,255,0.08),transparent_14%)]" />
      <div className="absolute left-[10%] top-[18%] h-32 w-32 rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.5),transparent_18%),radial-gradient(circle_at_60%_60%,rgba(96,165,250,0.55),rgba(96,165,250,0.08)_48%,transparent_70%)] shadow-[0_0_80px_rgba(96,165,250,0.15)]" />
      <div className="absolute right-[12%] top-[28%] h-44 w-44 rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.45),transparent_20%),radial-gradient(circle_at_60%_60%,rgba(246,199,109,0.55),rgba(246,199,109,0.08)_48%,transparent_70%)] shadow-[0_0_90px_rgba(246,199,109,0.14)]" />
      <div className="absolute left-[38%] bottom-[16%] h-28 w-28 rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.45),transparent_20%),radial-gradient(circle_at_60%_60%,rgba(139,92,246,0.5),rgba(139,92,246,0.08)_48%,transparent_70%)] shadow-[0_0_90px_rgba(139,92,246,0.12)]" />
    </div>
  );
}
