import { useEffect, useState } from "react";
import "./App.css";

type Bike = { brand: string; model: string; info: string; file: string };

// Put your transparent side-view PNGs in public/bikes/ with these exact file names.
// Make sure all bikes face the same direction.
const bikes: Bike[] = [
  { brand: "Ducati", model: "Panigale V4", info: "Italy · Superbike", file: "ducati.png" },
  { brand: "Yamaha", model: "YZF-R1", info: "Japan · Sportbike", file: "yamaha.png" },
  { brand: "Harley-Davidson", model: "Fat Boy", info: "USA · Cruiser", file: "harley.png" },
  { brand: "Kawasaki", model: "Ninja H2", info: "Japan · Hyperbike", file: "kawasaki.png" },
  { brand: "Triumph", model: "Speed Triple", info: "UK · Naked bike", file: "triumph.png" },
  { brand: "Royal Enfield", model: "Classic 350", info: "India · Retro", file: "royalenfield.png" },
  { brand: "Honda", model: "CBR1000RR-R", info: "Japan · Superbike", file: "honda.png" },
  { brand: "Aprilia", model: "RSV4", info: "Italy · Superbike", file: "aprilia.png" },
  { brand: "Indian", model: "Scout", info: "USA · Cruiser", file: "indian.png" },
  { brand: "MV Agusta", model: "F3", info: "Italy · Supersport", file: "mvagusta.png" },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [missing, setMissing] = useState(false);
  const bike = bikes[current];

  const select = (i: number) => {
    setMissing(false);
    setCurrent(i);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") select((current + 1) % bikes.length);
      if (e.key === "ArrowLeft") select((current - 1 + bikes.length) % bikes.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  return (
    <main className="app">
      <h1>Choose your motorcycle</h1>

      <div className="scene">
        <div className="stage" aria-hidden="true">
          <i className="base" />
          <i className="mid" />
          <i className="top" />
        </div>

        {missing ? (
          <div className="missing">Add public/bikes/{bike.file}</div>
        ) : (
          <img
            key={bike.file}
            className="bike"
            src={`/bikes/${bike.file}`}
            alt={`${bike.brand} ${bike.model} side view`}
            onError={() => setMissing(true)}
          />
        )}
      </div>

      <div className="info">
        <h2>
          {bike.brand} {bike.model}
        </h2>
        <p>{bike.info}</p>
      </div>

      <div className="picker" role="group" aria-label="Motorcycles">
        {bikes.map((b, i) => (
          <button key={b.file} aria-pressed={i === current} onClick={() => select(i)}>
            {b.brand}
          </button>
        ))}
      </div>
    </main>
  );
}
