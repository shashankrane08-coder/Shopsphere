import { useEffect, useRef } from "react";

function GoldenBackground() {
  const glowRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      curX += (mouseX - curX) * 0.07;
      curY += (mouseY - curY) * 0.07;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${curX - 100}px, ${curY - 100}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">

      {/* ── Base ── */}
      <div className="absolute inset-0 bg-[#070604]" />

      {/* ── Far ambient blobs ── */}
      <div
        className="absolute rounded-full"
        style={{
          width: 820, height: 820,
          top: -200, left: -160,
          background: "radial-gradient(circle, rgba(180,128,44,0.13) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 680, height: 680,
          bottom: -160, right: -80,
          background: "radial-gradient(circle, rgba(200,152,60,0.10) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      {/* Subtle warm mid-screen accent */}
      <div
        className="absolute rounded-full"
        style={{
          width: 400, height: 400,
          top: "38%", left: "42%",
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, rgba(210,165,72,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Mouse spotlight ── */}
      <div
        ref={glowRef}
        className="absolute rounded-full will-change-transform"
        style={{
          width: 200, height: 200,
          background: "radial-gradient(circle, rgba(240,195,90,0.18) 0%, transparent 70%)",
          filter: "blur(50px)",
          transform: "translate(-9999px,-9999px)",
        }}
      />

      {/* ── Centre radial mesh ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(200,155,55,0.07) 0%, transparent 100%)",
        }}
      />

      {/* ── Diagonal spotlight beams ── */}
      <div
        className="absolute"
        style={{
          left: "6%", top: "-18%",
          width: 200, height: 950,
          transform: "rotate(16deg)",
          background:
            "linear-gradient(to bottom, rgba(210,160,58,0.10), rgba(210,160,58,0.03) 50%, transparent)",
          filter: "blur(110px)",
        }}
      />
      <div
        className="absolute"
        style={{
          right: "4%", top: "-12%",
          width: 160, height: 900,
          transform: "rotate(-16deg)",
          background:
            "linear-gradient(to bottom, rgba(235,190,80,0.08), rgba(235,190,80,0.02) 50%, transparent)",
          filter: "blur(100px)",
        }}
      />

      {/* ── Animated luxury scan light ── */}
      <div
        className="absolute top-0 h-full"
        style={{
          width: 130,
          left: "-30%",
          transform: "rotate(11deg)",
          background:
            "linear-gradient(to right, transparent, rgba(240,195,90,0.08), transparent)",
          filter: "blur(55px)",
          animation: "gbScan 20s linear infinite",
        }}
      />

      {/* ── Hairline guide lines ── */}
      {[
        { left: "16%", top: "33%", width: 460 },
        { left: "20%", top: "47%", width: 560 },
        { left: "14%", top: "60%", width: 500 },
      ].map((l, i) => (
        <div
          key={i}
          className="absolute h-px"
          style={{
            left: l.left, top: l.top, width: l.width,
            background:
              i % 2 === 0
                ? "linear-gradient(to right, transparent, rgba(210,160,58,0.14), transparent)"
                : "linear-gradient(to right, transparent, rgba(235,190,80,0.10), transparent)",
          }}
        />
      ))}

      {/* ── Vertical centre accent ── */}
      <div
        className="absolute left-1/2 top-0 w-px h-full"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(200,155,55,0.10) 40%, rgba(200,155,55,0.10) 60%, transparent)",
        }}
      />

      {/* ── Product-frame zone ── */}
      <div
        className="absolute rounded-[44px]"
        style={{
          right: "4%", top: "10%",
          width: 490, height: 690,
          border: "1px solid rgba(200,155,55,0.06)",
          background:
            "linear-gradient(160deg, rgba(200,155,55,0.04) 0%, transparent 60%)",
        }}
      />

      {/* ── Subtle dot-grid noise ── */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <style>{`
        @keyframes gbScan {
          0%   { transform: translateX(-500px) rotate(11deg); }
          100% { transform: translateX(2400px) rotate(11deg); }
        }
      `}</style>
    </div>
  );
}

export default GoldenBackground;