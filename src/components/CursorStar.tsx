import { useEffect, useRef } from "react";
import { Star } from "~/components/Star";

// Each entry is one star in the trail, shrinking and fading down the chain.
const TRAIL = [
  { size: 16, opacity: 0.75 },
  { size: 13, opacity: 0.6 },
  { size: 11, opacity: 0.48 },
  { size: 9, opacity: 0.36 },
  { size: 7, opacity: 0.26 },
  { size: 5, opacity: 0.18 },
];

export const CursorStar = () => {
  const wrapRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const wraps = wrapRefs.current;
    if (wraps.some((w) => !w)) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduceMotion || !finePointer) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    const points = TRAIL.map(() => ({ x: targetX, y: targetY }));
    let visible = false;
    let raf = 0;

    const setVisible = (next: boolean) => {
      if (visible === next) return;
      visible = next;
      wraps.forEach((wrap, i) => {
        if (wrap) wrap.style.opacity = next ? String(TRAIL[i].opacity) : "0";
      });
    };

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      // Lead star sits exactly on the cursor; each following star chases the one ahead.
      points[0].x = targetX;
      points[0].y = targetY;
      for (let i = 1; i < points.length; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.32;
        points[i].y += (points[i - 1].y - points[i].y) * 0.32;
      }

      wraps.forEach((wrap, i) => {
        if (wrap) {
          wrap.style.transform = `translate3d(${points[i].x}px, ${points[i].y}px, 0)`;
        }
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
      {TRAIL.map((star, i) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: fixed static trail
          key={i}
          ref={(el) => {
            wrapRefs.current[i] = el;
          }}
          className="pointer-events-none fixed top-0 left-0 z-[90] opacity-0 transition-opacity duration-500 ease-out will-change-transform"
        >
          <div className="-translate-x-1/2 -translate-y-1/2">
            <Star
              className="text-primary-soft"
              style={{
                width: star.size,
                height: star.size,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
