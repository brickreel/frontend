'use client';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-12">
      {/* Brand/Visual Side */}
      <section className="hidden md:flex md:col-span-5 lg:col-span-7 relative bg-gradient-to-br from-primary to-primary-container items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            alt="Luxury interior"
            className="w-full h-full object-cover mix-blend-overlay"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANAszQ57qkAmbB9EOq9FMi85qnxXQRLCzFlkgHI6bG0QkyZLj_w96Co04QU3pdAAt5PHxEPDsNeUhen6PVojUFXSWx5nIZnUxCkwDZOcla1IPH0z6mm_xSTQaQLclM8oht50tVtxzh4RONAow-jLUGxWWS9RaQAT8UngQIUlOBzrEQD20q8phazeAc5n6uVerwRo8pmSPBFHPUIxh_Mped_38dQW8xhOUsn8KAYCPtMVjetyOOXzroxOVgsgbu3xO2akJs-wGzaWc"
          />
        </div>
        
        <div className="relative z-10 max-w-xl">
          <div className="mb-8">
            <span className="text-3xl font-headline font-extrabold tracking-tighter text-on-primary">
              BrickReel
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-primary leading-none tracking-tighter mb-8">
            Elevating <span className="text-tertiary-fixed-dim">Real Estate</span> Through AI.
          </h1>
          <p className="text-xl text-primary-fixed-dim font-body leading-relaxed max-w-md">
            Transforming raw footage into architectural insights with precision analysis and high-end editorial clarity.
          </p>

          {/* Video Analysis Mockup */}
          <div className="mt-12 glass-panel p-6 rounded-xl border border-outline-variant/10" style={{background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(16px)'}}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-3 w-3 rounded-full bg-error animate-pulse"></div>
              <span className="text-xs font-bold text-on-primary uppercase tracking-widest">Live Analysis</span>
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-tertiary-fixed w-2/3"></div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-16 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-center px-4">
                  <span className="text-[10px] text-primary-fixed-dim uppercase">Scene Score</span>
                  <span className="text-lg font-bold text-on-primary">9.8</span>
                </div>
                <div className="h-16 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-center px-4">
                  <span className="text-[10px] text-primary-fixed-dim uppercase">Clarity</span>
                  <span className="text-lg font-bold text-on-primary">High</span>
                </div>
                <div className="h-16 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-center px-4">
                  <span className="text-[10px] text-primary-fixed-dim uppercase">Lighting</span>
                  <span className="text-lg font-bold text-on-primary">Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer-style Branding */}
        <div className="absolute bottom-12 left-12 flex items-center gap-6 opacity-60">
          <span className="text-xs font-medium text-primary-fixed-dim tracking-widest uppercase">Precision</span>
          <span className="text-xs font-medium text-primary-fixed-dim tracking-widest uppercase">Aesthetics</span>
          <span className="text-xs font-medium text-primary-fixed-dim tracking-widest uppercase">Intelligence</span>
        </div>
      </section>

      {/* Form Side */}
      <section className="col-span-1 md:col-span-7 lg:col-span-5 bg-surface flex items-center justify-center p-6 md:p-12 lg:p-20 overflow-y-auto">
        {children}
      </section>
    </main>
  );
}
