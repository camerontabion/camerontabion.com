import { useEffect, useRef } from "react";
import { Star } from "~/components/Star";

// Offset the trail toward the bottom-right of the cursor.
const OFFSET_X = 18;
const OFFSET_Y = 18;

// Lead star that rides the cursor.
const LEAD_SIZE = 16;
const LEAD_OPACITY = 0.5;

// Trail particles that get dropped along the path and fade in place.
const POOL_SIZE = 18;
const PARTICLE_LIFETIME = 450; // ms until a dropped star fully fades out
const SPAWN_DISTANCE = 22; // px the cursor must travel before dropping a star
const PARTICLE_SIZE = 12;
const PARTICLE_OPACITY = 0.38;
const PARTICLE_DRIFT = 14; // max px a dropped star drifts over its lifetime

type Particle = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  born: number;
  active: boolean;
};

export const CursorStar = () => {
  const leadRef = useRef<HTMLDivElement | null>(null);
  const poolRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const lead = leadRef.current;
    const pool = poolRefs.current;
    if (!lead || pool.some((p) => !p)) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduceMotion || !finePointer) return;

    const particles: Particle[] = Array.from({ length: POOL_SIZE }, () => ({
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      born: 0,
      active: false,
    }));
    let next = 0;
    let lastSpawnX = window.innerWidth / 2;
    let lastSpawnY = window.innerHeight / 2;
    let leadVisible = false;
    let raf = 0;

    const setLeadVisible = (visible: boolean) => {
      if (leadVisible === visible) return;
      leadVisible = visible;
      lead.style.opacity = visible ? String(LEAD_OPACITY) : "0";
    };

    const spawn = (x: number, y: number) => {
      const p = particles[next];
      p.x = x;
      p.y = y;
      // Pick a random direction/distance for a subtle scatter as it fades.
      const angle = Math.random() * Math.PI * 2;
      const dist = PARTICLE_DRIFT * (0.4 + Math.random() * 0.6);
      p.dx = Math.cos(angle) * dist;
      p.dy = Math.sin(angle) * dist;
      p.born = performance.now();
      p.active = true;
      next = (next + 1) % POOL_SIZE;
    };

    const onMove = (event: MouseEvent) => {
      const x = event.clientX + OFFSET_X;
      const y = event.clientY + OFFSET_Y;

      // Lead star tracks the cursor with no lag.
      lead.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      setLeadVisible(true);

      // Drop a fading star each time the cursor travels far enough.
      const dx = x - lastSpawnX;
      const dy = y - lastSpawnY;
      if (dx * dx + dy * dy >= SPAWN_DISTANCE * SPAWN_DISTANCE) {
        spawn(x, y);
        lastSpawnX = x;
        lastSpawnY = y;
      }
    };

    const onLeave = () => setLeadVisible(false);

    const tick = () => {
      const now = performance.now();
      particles.forEach((p, i) => {
        const el = pool[i];
        if (!el) return;
        if (!p.active) {
          el.style.opacity = "0";
          return;
        }
        const t = (now - p.born) / PARTICLE_LIFETIME;
        if (t >= 1) {
          p.active = false;
          el.style.opacity = "0";
          return;
        }
        // Drift in its random direction, fade out, and gently shrink.
        const scale = 1 - t * 0.5;
        const px = p.x + p.dx * t;
        const py = p.y + p.dy * t;
        el.style.transform = `translate3d(${px}px, ${py}px, 0) scale(${scale})`;
        el.style.opacity = String(PARTICLE_OPACITY * (1 - t));
      });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div
        ref={leadRef}
        className="pointer-events-none fixed top-0 left-0 z-[90] opacity-0 transition-opacity duration-300 ease-out will-change-transform"
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <Star
            className="text-primary-soft"
            style={{ width: LEAD_SIZE, height: LEAD_SIZE }}
          />
        </div>
      </div>

      {Array.from({ length: POOL_SIZE }, (_, i) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: fixed static pool
          key={i}
          ref={(el) => {
            poolRefs.current[i] = el;
          }}
          className="pointer-events-none fixed top-0 left-0 z-[90] opacity-0 will-change-transform"
        >
          <div className="-translate-x-1/2 -translate-y-1/2">
            <Star
              className="text-primary-soft"
              style={{ width: PARTICLE_SIZE, height: PARTICLE_SIZE }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
