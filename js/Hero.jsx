import { useEffect, useState } from "react";
import "./style.css";

export default function Hero() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">

      {/* 背景画像① */}
      <div className="hero-bg"></div>

      {/* 背景画像② */}
      <div
        className={`hero-overlay ${
          showOverlay ? "visible" : ""
        }`}
      ></div>

      <div className="hero-content">
        <h1>Dream Collection</h1>
        <p>Inspired by Fantasy & Romance</p>
      </div>

    </section>
  );
}