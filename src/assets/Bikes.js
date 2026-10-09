// ---------- 10 motorcycles ----------
// Specs come from Honda Philippines listings (via hondaph.com and dealer mirrors) and press coverage.
// Values can differ by variant and model year, so the "variant" line says which one was used.
// Put each photo in public/bikes/ using the file name shown in "image".
// To add or fix a spec, just edit the lists below. Anything you leave out is simply not shown.
export const bikes = [
  {
    name: "Click 125", type: "Scooter", group: "Scooters", cc: 125, cooling: "Liquid-cooled", transmission: "Automatic (V-Matic)",
    image: "/bikes/click-125.jpg",
    variant: "Click125 (2023 specification)",
    highlights: ["All-LED lighting", "Full digital meter panel", "USB charging port", "Combi-brake system (no ABS)", "18 L under-seat storage", "Secure key shutter"],
    specs: {
      Engine: {
        "Engine type": "4-stroke, 2-valve, SOHC, liquid-cooled, eSP", "Displacement": "125 cc", "Bore × stroke": "52.4 × 57.9 mm", "Compression ratio": "11.0 : 1",
        "Fuel system": "PGM-Fi", "Starting system": "Electric (ACG starter)", "Max power": "8.2 kW @ 8,500 rpm", "Max torque": "10.8 Nm @ 5,000 rpm",
        "Fuel consumption": "50.3 km/L (WMTC)", "Transmission": "Automatic (V-Matic)", "Ignition": "Full transistorized", "Engine oil": "0.9 L", "Fuel tank": "5.5 L", "Battery": "12 V 5 Ah (MF)"
      },
      Chassis: {
        "Front suspension": "Telescopic", "Rear suspension": "Unit swing", "Front brake": "Hydraulic disc", "Rear brake": "Mechanical leading-trailing drum",
        "Front tire": "90/80-14 M/C 43P (tubeless)", "Rear tire": "100/80-14 M/C 48P (tubeless)", "Wheels": "Cast"
      },
      Dimensions: {
        "Length × width × height": "1,918 × 679 × 1,066 mm", "Wheelbase": "1,280 mm", "Seat height": "769 mm", "Ground clearance": "131 mm", "Curb weight": "112 kg"
      }
    }
  },
  {
    name: "Click 160", type: "Scooter", group: "Scooters", cc: 157, cooling: "Liquid-cooled", transmission: "Automatic (V-Matic)",
    image: "/bikes/click-160.jpg",
    variant: "The New Click160",
    highlights: ["Full digital meter panel", "Smart Key with anti-theft alarm and answer-back", "USB charger", "All-LED lighting", "Large luggage box", "Combined Braking System (CBS)", "Idling Stop System", "Park brake lock"],
    specs: {
      Engine: {
        "Engine type": "4-stroke, 4-valve, SOHC, liquid-cooled, eSP+", "Displacement": "157 cc", "Bore × stroke": "60.0 × 55.5 mm", "Compression ratio": "12.0 : 1",
        "Fuel system": "PGM-FI", "Starting system": "Electric (ACG starter)", "Max power": "11.3 kW @ 8,500 rpm", "Max torque": "13.8 Nm @ 7,000 rpm",
        "Fuel consumption": "46.7 km/L (WMTC)", "Transmission": "Automatic (V-Matic)", "Ignition": "Full transistorized", "Engine oil": "0.9 L", "Fuel tank": "5.5 L", "Battery": "12 V 5 Ah (MF)"
      },
      Chassis: {
        "Front suspension": "Telescopic", "Rear suspension": "Unit swing", "Front brake": "Hydraulic disc", "Rear brake": "Mechanical leading-trailing drum",
        "Front tire": "100/80-14 M/C 48P (tubeless)", "Rear tire": "120/70-14 M/C 61P (tubeless)", "Wheels": "Cast"
      },
      Dimensions: {
        "Length × width × height": "1,929 × 678 × 1,088 mm", "Wheelbase": "1,278 mm", "Seat height": "778 mm", "Ground clearance": "138 mm", "Curb weight": "116 kg"
      }
    }
  },
  {
    name: "PCX160", type: "Premium Scooter", group: "Scooters", cc: 157, cooling: "Liquid-cooled", transmission: "Automatic (CVT)",
    image: "/bikes/pcx160.jpg",
    variant: "PCX160 Standard (current model). Length, width, wheelbase and rear brake were not in the listing I used.",
    highlights: ["TFT meter panel with RoadSync", "Honda Smart Key system", "All-LED lighting", "USB Type-C charger", "30 L luggage box", "Idling Stop System", "Multi-function switch"],
    specs: {
      Engine: {
        "Engine type": "4-stroke, 4-valve, SOHC, liquid-cooled, eSP+", "Displacement": "157 cc", "Bore × stroke": "60.0 × 55.5 mm", "Compression ratio": "12.0 : 1",
        "Fuel system": "PGM-FI", "Starting system": "Electric", "Max power": "11.8 kW @ 8,500 rpm", "Max torque": "14.7 Nm @ 6,500 rpm",
        "Fuel consumption": "46.0 km/L", "Transmission": "Automatic (CVT)", "Ignition": "Full transistorized", "Engine oil": "0.9 L", "Fuel tank": "8.1 L", "Battery": "12 V 5 Ah (MF)"
      },
      Chassis: {
        "Front suspension": "Telescopic", "Rear suspension": "Twin shock", "Front brake": "Hydraulic disc",
        "Front tire": "110/70-14 M/C 50P (tubeless)", "Rear tire": "130/70-13 M/C 63P (tubeless)", "Wheels": "Cast"
      },
      Dimensions: { "Curb weight": "132 kg" }
    }
  },
  {
    name: "ADV160", type: "Adventure Scooter", group: "Scooters", cc: 157, cooling: "Liquid-cooled", transmission: "Automatic (CVT)",
    image: "/bikes/adv160.jpg",
    variant: "ADV160 (refreshed model, 2026). Weight and some chassis details were not published in the sources I used.",
    highlights: ["5-inch TFT meter", "USB Type-C charger", "Idling Stop System", "Honda Smart Key", "ABS", "Anti-theft alarm"],
    specs: {
      Engine: {
        "Engine type": "4-stroke, 4-valve, SOHC, liquid-cooled, eSP+", "Displacement": "157 cc", "Max power": "11.8 kW @ 8,500 rpm", "Max torque": "14.7 Nm @ 6,500 rpm",
        "Fuel consumption": "45.0 km/L (WMTC)", "Transmission": "Automatic (CVT)", "Fuel tank": "8.1 L"
      },
      Chassis: { "Front brake": "Disc with ABS", "Tires": "Radial, tubeless" },
      Dimensions: { "Length": "1,950 mm", "Seat height": "780 mm", "Ground clearance": "165 mm" }
    }
  },
  {
    name: "Beat", type: "Scooter", group: "Scooters", cc: 110, cooling: "Air-cooled", transmission: "Automatic (V-Matic)",
    image: "/bikes/beat.jpg",
    variant: "The All-New BeAT (Premium)",
    highlights: ["Semi-digital meter panel", "LED headlight", "ACC power socket", "Secure key shutter with integrated seat opener", "12 L luggage box", "Tubeless tires"],
    specs: {
      Engine: {
        "Engine type": "4-stroke, SOHC, air-cooled, eSP", "Displacement": "110 cc", "Bore × stroke": "47.0 × 63.1 mm", "Compression ratio": "10.0 : 1",
        "Fuel system": "PGM-Fi", "Starting system": "Electric and kick (ACG starter)", "Max power": "6.63 kW @ 7,500 rpm", "Max torque": "9.3 Nm @ 6,000 rpm",
        "Fuel consumption": "58.2 km/L", "Transmission": "Automatic (V-Matic)", "Ignition": "Full transistorized", "Engine oil": "0.8 L", "Fuel tank": "4.2 L", "Battery": "12 V 3 Ah (MF)"
      },
      Chassis: {
        "Front suspension": "Telescopic fork", "Rear suspension": "Mono shock, unit swing", "Front brake": "Hydraulic disc", "Rear brake": "Mechanical leading-trailing drum",
        "Front tire": "80/90-14 M/C 40P (tubeless)", "Rear tire": "90/90-14 M/C 46P (tubeless)", "Wheels": "Cast"
      },
      Dimensions: {
        "Length × width × height": "1,877 × 669 × 1,074 mm", "Wheelbase": "1,255 mm", "Seat height": "742 mm", "Ground clearance": "147 mm", "Curb weight": "90 kg"
      }
    }
  },
  {
    name: "Wave RSX", type: "Underbone", group: "Underbones & Utility", cc: 109, cooling: "Air-cooled", transmission: "4-speed manual",
    image: "/bikes/wave-rsx.jpg",
    variant: "The New Wave RSX Disc. The Drum variant has a front drum brake.",
    highlights: ["PGM-FI engine", "Fuel efficiency up to 69.5 km/L", "Pass switch", "Anti-rust key system", "Sporty graphics"],
    specs: {
      Engine: {
        "Engine type": "4-stroke, SOHC, air-cooled", "Displacement": "109 cc", "Bore × stroke": "50.0 × 55.6 mm", "Compression ratio": "9.3 : 1",
        "Fuel system": "PGM-Fi", "Starting system": "Electric and kick", "Max power": "6.46 kW @ 7,500 rpm", "Max torque": "8.70 Nm @ 6,000 rpm",
        "Transmission": "4-speed constant mesh, manual", "Ignition": "Full transistorized", "Engine oil": "1.0 L", "Fuel tank": "4.0 L", "Battery": "12 V 3 Ah (MF)"
      },
      Chassis: {
        "Front suspension": "Telescopic", "Rear suspension": "Twin shock", "Front brake": "Hydraulic disc", "Rear brake": "Mechanical leading-trailing drum",
        "Front tire": "70/90-17 M/C 38P (tube type)", "Rear tire": "80/90-17 M/C 50P (tube type)", "Wheels": "Spoke"
      },
      Dimensions: {
        "Length × width × height": "1,921 × 709 × 1,081 mm", "Wheelbase": "1,227 mm", "Seat height": "760 mm", "Ground clearance": "135 mm", "Curb weight": "97 kg"
      }
    }
  },
  {
    name: "XRM125", type: "Underbone", group: "Underbones & Utility", cc: 125, cooling: "Air-cooled", transmission: "4-speed manual",
    image: "/bikes/xrm125.jpg",
    variant: "XRM125 DS (base variant). The Motard and DSX variants differ in wheels, tires, rear brake and weight.",
    highlights: ["CRF-inspired headlight and winker design", "Digital meter panel", "Under cowl protection", "Muffler", "PGM-Fi engine (Euro-3 compliant)"],
    specs: {
      Engine: {
        "Engine type": "4-stroke, SOHC, air-cooled", "Displacement": "125 cc", "Bore × stroke": "52.4 × 57.9 mm", "Compression ratio": "9.3 : 1",
        "Fuel system": "PGM-Fi (Euro-3 compliant)", "Starting system": "Electric and kick", "Max power": "7.12 kW @ 7,500 rpm", "Max torque": "9.55 Nm @ 6,500 rpm",
        "Transmission": "4-speed constant mesh, manual (N-1-2-3-4 rotary)", "Ignition": "Full transistorized", "Engine oil": "0.9 L", "Fuel tank": "3.9 L", "Battery": "12 V 3 Ah (MF)"
      },
      Chassis: {
        "Front suspension": "Telescopic", "Rear suspension": "Twin shock", "Front brake": "Disc", "Rear brake": "Drum",
        "Front tire": "2.50-17 43L (tube type)", "Rear tire": "2.50-17 43L (tube type)", "Wheels": "Wire spoke"
      },
      Dimensions: {
        "Length × width × height": "1,933 × 833 × 1,049 mm", "Wheelbase": "1,239 mm", "Seat height": "775 mm", "Ground clearance": "145 mm", "Curb weight": "102 kg"
      }
    }
  },
  {
    name: "TMX125 Alpha", type: "Utility", group: "Underbones & Utility", cc: 125, cooling: "Air-cooled", transmission: "5-speed manual",
    image: "/bikes/tmx125-alpha.jpg",
    variant: "TMX125 Alpha (standard)",
    highlights: ["Overhead-valve (OHV) engine", "38T rear sprocket for daily commuting", "Café-racer-inspired design", "Automatic headlight on", "Electric starter", "18-inch tires"],
    specs: {
      Engine: {
        "Engine type": "4-stroke, overhead valve (OHV), air-cooled", "Displacement": "125 cc", "Bore × stroke": "56.5 × 49.5 mm", "Compression ratio": "9.0 : 1",
        "Fuel system": "Carburetor", "Starting system": "Electric and kick", "Max power": "7.16 kW @ 8,000 rpm", "Max torque": "9.1 Nm @ 6,500 rpm",
        "Fuel consumption": "62.5 km/L (at 45 km/h constant speed)", "Transmission": "5-speed constant mesh, manual", "Ignition": "AC-CDI", "Engine oil": "1.1 L", "Fuel tank": "8.6 L", "Battery": "12 V 5 Ah (MF)"
      },
      Chassis: {
        "Front suspension": "Telescopic fork", "Rear suspension": "Twin shock", "Front brake": "Mechanical leading-trailing drum", "Rear brake": "Mechanical leading-trailing drum",
        "Front tire": "2.50-18 40L (with tube)", "Rear tire": "2.75-18 48P (with tube)", "Wheels": "Wire spoke"
      },
      Dimensions: {
        "Length × width × height": "1,904 × 754 × 1,026 mm", "Wheelbase": "1,226 mm", "Seat height": "759 mm", "Ground clearance": "156 mm", "Curb weight": "113 kg"
      }
    }
  },
  {
    name: "CB150X", type: "Street", group: "Street & Trail", cc: 149, cooling: "Liquid-cooled", transmission: "6-speed manual",
    image: "/bikes/cb150x.jpg",
    variant: "CB150X (standard)",
    highlights: ["Adventure styling inspired by the CB500X", "Tall windscreen and bash plate", "Fully digital meter panel", "All-LED lighting", "Tapered handlebar", "Long suspension stroke"],
    specs: {
      Engine: {
        "Engine type": "4-stroke, 4-valve, DOHC, liquid-cooled", "Displacement": "149 cc", "Bore × stroke": "57.30 × 57.84 mm",
        "Fuel system": "PGM-FI", "Starting system": "Electric", "Max power": "11.5 kW @ 9,000 rpm", "Max torque": "13.8 Nm @ 7,000 rpm",
        "Fuel consumption": "38.0 km/L", "Transmission": "6-speed, manual", "Fuel tank": "12 L", "Battery": "12 V 5 Ah (MF)"
      },
      Chassis: {
        "Front brake": "Hydraulic disc", "Rear brake": "Hydraulic disc",
        "Front tire": "100/80-17 M/C 52P (tubeless)", "Rear tire": "130/70-17 M/C 62P (tubeless)", "Wheels": "Cast"
      },
      Dimensions: { "Length × width × height": "2,031 × 796 × 1,309 mm", "Seat height": "817 mm", "Ground clearance": "181 mm", "Curb weight": "140 kg" }
    }
  },
  {
    name: "CRF150L", type: "Dual-Sport", group: "Street & Trail", cc: 149, cooling: "Air-cooled", transmission: "5-speed manual",
    image: "/bikes/crf150l.jpg",
    variant: "CRF150L (standard). Power and torque are third-party figures without rpm; confirm with Honda.",
    highlights: ["CRF250R-inspired design", "Digital meter panel", "Showa inverted front fork", "Pro-Link rear suspension", "Lower seat height for Filipino riders"],
    specs: {
      Engine: {
        "Engine type": "4-stroke, 2-valve, SOHC, air-cooled", "Displacement": "149 cc",
        "Fuel system": "PGM-FI", "Starting system": "Electric and kick", "Max power": "12.2 hp (approx.)", "Max torque": "11.94 Nm (approx.)",
        "Transmission": "5-speed, manual (1-N-2-3-4-5)", "Fuel tank": "7.2 L", "Battery": "12 V 3.5 Ah (MF)"
      },
      Chassis: {
        "Front suspension": "Showa inverted fork", "Rear suspension": "Pro-Link", "Front brake": "Hydraulic disc", "Rear brake": "Hydraulic disc",
        "Front tire": "70/100-21", "Rear tire": "90/100-18", "Wheels": "Spoke"
      },
      Dimensions: { "Length × width × height": "2,119 × 793 × 1,153 mm", "Seat height": "863 mm", "Ground clearance": "285 mm", "Curb weight": "122 kg" }
    }
  }
];

// Looks up one spec, e.g. spec(bike, "Engine", "Max power"). Returns undefined when it isn't listed.
export const spec = (bike, section, key) => bike.specs?.[section]?.[key];