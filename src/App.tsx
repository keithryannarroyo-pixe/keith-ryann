import { useEffect, useState } from "react";
import "./App.css";

type Motorcycle = {
  name: string;
  type: string;
  engine: string;
  desc: string;
};

// Edit this list to change the 10 motorcycles
const motorcycles: Motorcycle[] = [
  { name: "Click 125i", type: "Scooter", engine: "125cc", desc: "Fuel-efficient city scooter for daily rides." },
  { name: "Beat", type: "Scooter", engine: "110cc", desc: "Lightweight and easy to handle." },
  { name: "PCX160", type: "Maxi Scooter", engine: "160cc", desc: "Premium comfort with a smooth, powerful ride." },
  { name: "ADV160", type: "Adventure Scooter", engine: "160cc", desc: "Rugged styling for city and light adventure." },
  { name: "TMX 125 Alpha", type: "Utility", engine: "125cc", desc: "Tough, reliable workhorse." },
  { name: "XRM125", type: "Underbone", engine: "125cc", desc: "Popular, sturdy and economical." },
  { name: "Wave RSX", type: "Underbone", engine: "110cc", desc: "Sporty look with great fuel economy." },
  { name: "CB150X", type: "Naked Sport", engine: "150cc", desc: "Adventure-inspired street bike." },
  { name: "CRF150L", type: "Dual Sport", engine: "150cc", desc: "Built for trails and tough roads." },
  { name: "Winner X", type: "Sport", engine: "150cc", desc: "Aggressive styling with sporty performance." },
];

function getStartTheme(): "light" | "dark" {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(getStartTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header className="header">
        <h1>🏍️ Honda Motorcycles</h1>
        <button
          className="theme-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <main>
        <p className="intro">Browse 10 Honda motorcycles.</p>
        <section className="grid">
          {motorcycles.map((bike) => (
            <article className="card" key={bike.name}>
              <div className="card-image">🏍️</div>
              <div className="card-body">
                <h3>{bike.name}</h3>
                <span className="type">{bike.type}</span>
                <p>{bike.desc}</p>
                <p className="engine">Engine: {bike.engine}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Honda Motorcycles Showcase</p>
      </footer>
    </>
  );
}

export default App;