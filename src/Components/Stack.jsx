import { motion, useMotionValue, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";

/* ─── Individual draggable card wrapper ─────────────────────────────────── */
function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-120, 120], [22, -22]);
  const rotateY = useTransform(x, [-120, 120], [-22, 22]);

  function handleDragEnd(_, info) {
    const dist = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);
    if (dist > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragElastic={0.38}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stack ─────────────────────────────────────────────────────────────── */
export default function Stack({
  cards = [],
  randomRotation = true,
  autoplay = true,
  autoplayDelay = 3800,
  sensitivity = 160,
  pauseOnHover = true,
  sendToBackOnClick = true,
}) {
  const [paused, setPaused] = useState(false);

  /* Stable random rotations per card — recalculated only when card count changes */
  const rotationsRef = useRef([]);
  useEffect(() => {
    rotationsRef.current = cards.map(() =>
      randomRotation ? (Math.random() * 10 - 5) : 0
    );
  }, [cards.length, randomRotation]);

  const [stack, setStack] = useState(() =>
    cards.map((card, i) => ({ id: i, content: card }))
  );

  useEffect(() => {
    setStack(cards.map((card, i) => ({ id: i, content: card })));
  }, [cards]);

  const sendToBack = (id) =>
    setStack((prev) => {
      const next = [...prev];
      const idx = next.findIndex((c) => c.id === id);
      const [card] = next.splice(idx, 1);
      next.unshift(card);
      return next;
    });

  /* Autoplay */
  useEffect(() => {
    if (!autoplay || stack.length <= 1 || paused) return;
    const id = setInterval(() => {
      setStack((prev) => {
        const next = [...prev];
        const [card] = next.splice(next.length - 1, 1);
        next.unshift(card);
        return next;
      });
    }, autoplayDelay);
    return () => clearInterval(id);
  }, [autoplay, autoplayDelay, paused, stack.length]);

  return (
    <div
      className="relative w-full h-full"
      style={{ perspective: 1800 }}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {stack.map((card, index) => {
        /* index 0 = back, stack.length-1 = front */
        const depth = stack.length - 1 - index; /* 0 = front */
        const rz = depth * 4 + (rotationsRef.current[card.id] ?? 0);
        const sc = 1 - depth * 0.05;

        return (
          <CardRotate
            key={card.id}
            sensitivity={sensitivity}
            onSendToBack={() => sendToBack(card.id)}
          >
            <motion.div
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: rz,
                scale: sc,
                transformOrigin: "90% 90%",
              }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="relative h-full w-full overflow-hidden rounded-[28px]"
              style={{
                background: "rgba(255,255,255,0.032)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(210,175,95,0.18)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(210,175,95,0.08) inset",
                willChange: "transform",
              }}
              whileHover={{
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.70), 0 0 48px rgba(210,175,95,0.16)",
              }}
            >
              {/* Gold gradient wash */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(240,200,100,0.12) 0%, transparent 45%, rgba(210,165,70,0.05) 100%)",
                }}
              />

              {/* Shine sweep */}
              <div
                className="absolute top-0 h-full pointer-events-none"
                style={{
                  width: "55%",
                  left: "-150%",
                  background:
                    "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
                  transform: "skewX(-20deg)",
                  animation: "stackShine 9s linear infinite",
                }}
              />

              {/* Top-edge highlight */}
              <div
                className="absolute top-0 left-6 right-6 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(240,200,100,0.30), transparent)",
                }}
              />

              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}

      <style>{`
        @keyframes stackShine {
          0%   { left: -150%; }
          100% { left: 260%;  }
        }
      `}</style>
    </div>
  );
}