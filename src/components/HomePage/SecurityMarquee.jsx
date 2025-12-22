import { useEffect, useRef, useState } from "react";

const items = [
  { label: "Network Security", link: "/network-security" },
  { label: "Endpoint Protection", link: "/endpoint-protection" },
  { label: "Threat Intelligence", link: "/threat-intelligence" },
  { label: "Penetration Testing", link: "/penetration-testing" },
  { label: "Security Audits", link: "/security-audits" },
];

export default function SecurityMarquee() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    let raf;

    const scroll = () => {
      if (!isPaused && containerRef.current) {
        containerRef.current.scrollLeft += 0.5;
        if (
          containerRef.current.scrollLeft >=
          trackRef.current.scrollWidth / 2
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(scroll);
    };

    raf = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(raf);
  }, [isPaused]);

  /* ================= DRAG SUPPORT ================= */
  const onMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = () => setIsDragging(false);

  return (
    <section className="w-full bg-primary overflow-hidden py-6">
      <div
        ref={containerRef}
        className="flex overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeaveCapture={stopDrag}
      >
        <div
          ref={trackRef}
          className="flex whitespace-nowrap gap-10 px-6"
        >
          {[...items, ...items].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-white text-lg sm:text-xl font-semibold tracking-wide hover:underline transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
