export const Background = () => (
  <div className="-z-10 pointer-events-none fixed inset-0 size-full overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(232,160,106,0.14),transparent_55%)]" />

    <div className="absolute inset-0 opacity-70 motion-reduce:opacity-40">
      <div className="-top-40 -left-32 absolute size-[38rem] animate-drift rounded-full bg-primary/15 blur-[150px] motion-reduce:animate-none" />
      <div className="-right-40 absolute top-1/2 size-[34rem] animate-drift-slow rounded-full bg-accent/10 blur-[160px] motion-reduce:animate-none" />
    </div>

    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
  </div>
);
