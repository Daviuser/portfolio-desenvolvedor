"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType } from "react";

export default function RevealText({
  text,
  as = "h2",
  className = "",
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as ElementType;
  return (
    <Tag ref={ref} aria-label={text} className={`rt ${on ? "is-visible" : ""} ${className}`}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="w">
            <span style={{ "--d": `${i * 45}ms` } as CSSProperties}>{w}</span>
          </span>{" "}
        </span>
      ))}
    </Tag>
  );
}
