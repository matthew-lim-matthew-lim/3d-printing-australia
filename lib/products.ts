export type Category = "FDM" | "Resin";
export type Brand = "Bambu Lab" | "Creality" | "Prusa Research" | "Elegoo" | "Anycubic";

export interface Product {
  slug: string;
  brand: Brand;
  name: string;
  category: Category;
  rrp: number; // AUD inc GST
  price: number; // sale price AUD inc GST
  /**
   * Image path. Put the official product photo at
   * public/products/<slug>.jpg (or set a full https:// URL here).
   * A clean branded placeholder shows if the file is missing.
   */
  image?: string;
  summary: string;
  highlights: string[];
  specs: Record<string, string>;
  inBox: string[];
  stock: number;
  featured?: boolean;
}

// NOTE: prices are indicative placeholders — check current AU pricing
// and your supplier costs before going live.
export const products: Product[] = [
  // ---------------- Bambu Lab ----------------
  {
    slug: "bambu-lab-a1-mini",
    brand: "Bambu Lab",
    name: "A1 mini",
    category: "FDM",
    rrp: 349, price: 279,
    summary: "Compact, quiet and fully automatic. The easiest way into high-speed 3D printing.",
    highlights: ["Full auto calibration", "Active flow-rate compensation", "Quick-swap nozzle", "Multi-colour ready with AMS lite"],
    specs: { "Build volume": "180 × 180 × 180 mm", "Max speed": "500 mm/s", "Max acceleration": "10,000 mm/s²", "Hotend max temp": "300 °C", "Enclosure": "Open frame", "Connectivity": "Wi-Fi, Bambu Handy, microSD" },
    inBox: ["A1 mini printer", "Spool holder", "Starter filament", "Tool kit", "Quick start guide"],
    stock: 42, featured: true,
  },
  {
    slug: "bambu-lab-a1-mini-combo",
    brand: "Bambu Lab", name: "A1 mini Combo", category: "FDM",
    rrp: 549, price: 439,
    summary: "A1 mini bundled with AMS lite for four-colour printing straight out of the box.",
    highlights: ["Includes AMS lite (4 spools)", "Full auto calibration", "Quiet mode under 48 dB", "Quick-swap nozzle"],
    specs: { "Build volume": "180 × 180 × 180 mm", "Max speed": "500 mm/s", "Colours": "Up to 4 with AMS lite", "Hotend max temp": "300 °C", "Enclosure": "Open frame", "Connectivity": "Wi-Fi, microSD" },
    inBox: ["A1 mini printer", "AMS lite", "4 × filament samples", "Tool kit", "Quick start guide"],
    stock: 31,
  },
  {
    slug: "bambu-lab-a1",
    brand: "Bambu Lab", name: "A1", category: "FDM",
    rrp: 599, price: 479,
    summary: "Full-size bed slinger with Bambu's auto everything. 256 mm cube build volume.",
    highlights: ["256 mm³ build volume", "Auto bed levelling & vibration compensation", "Nozzle clog detection", "AMS lite compatible"],
    specs: { "Build volume": "256 × 256 × 256 mm", "Max speed": "500 mm/s", "Max acceleration": "10,000 mm/s²", "Hotend max temp": "300 °C", "Enclosure": "Open frame", "Connectivity": "Wi-Fi, microSD" },
    inBox: ["A1 printer", "Spool holder", "Starter filament", "Tool kit", "Quick start guide"],
    stock: 28,
  },
  {
    slug: "bambu-lab-a1-combo",
    brand: "Bambu Lab", name: "A1 Combo", category: "FDM",
    rrp: 849, price: 679,
    summary: "A1 with AMS lite included for vibrant four-colour prints at full size.",
    highlights: ["Includes AMS lite", "256 mm³ build volume", "Full auto calibration", "Quiet operation"],
    specs: { "Build volume": "256 × 256 × 256 mm", "Max speed": "500 mm/s", "Colours": "Up to 4 with AMS lite", "Hotend max temp": "300 °C", "Enclosure": "Open frame", "Connectivity": "Wi-Fi, microSD" },
    inBox: ["A1 printer", "AMS lite", "4 × filament samples", "Tool kit", "Quick start guide"],
    stock: 24, featured: true,
  },
  {
    slug: "bambu-lab-p1s",
    brand: "Bambu Lab", name: "P1S", category: "FDM",
    rrp: 999, price: 799,
    summary: "Enclosed CoreXY workhorse that handles PLA, PETG, ABS and ASA with ease.",
    highlights: ["Fully enclosed CoreXY", "20,000 mm/s² acceleration", "Carbon filter & aux cooling fan", "AMS compatible"],
    specs: { "Build volume": "256 × 256 × 256 mm", "Max speed": "500 mm/s", "Max acceleration": "20,000 mm/s²", "Hotend max temp": "300 °C", "Enclosure": "Fully enclosed", "Connectivity": "Wi-Fi, microSD" },
    inBox: ["P1S printer", "Textured PEI plate", "Starter filament", "Tool kit", "Quick start guide"],
    stock: 19,
  },
  {
    slug: "bambu-lab-p1s-combo",
    brand: "Bambu Lab", name: "P1S Combo", category: "FDM",
    rrp: 1399, price: 1099,
    summary: "P1S with the 4-slot AMS for multi-material printing in an enclosed chamber.",
    highlights: ["Includes AMS (4 slots)", "Fully enclosed CoreXY", "Prints engineering filaments", "Up to 16 colours with 4 × AMS"],
    specs: { "Build volume": "256 × 256 × 256 mm", "Max speed": "500 mm/s", "Colours": "Up to 16 with AMS", "Hotend max temp": "300 °C", "Enclosure": "Fully enclosed", "Connectivity": "Wi-Fi, microSD" },
    inBox: ["P1S printer", "AMS", "Textured PEI plate", "Filament samples", "Tool kit"],
    stock: 15, featured: true,
  },
  {
    slug: "bambu-lab-p2s",
    brand: "Bambu Lab", name: "P2S", category: "FDM",
    rrp: 1149, price: 949,
    summary: "The next-generation P series with a touchscreen, smarter sensors and faster prints.",
    highlights: ["5\" touchscreen", "Upgraded extruder & cooling", "Built-in camera with AI monitoring", "AMS 2 Pro compatible"],
    specs: { "Build volume": "256 × 256 × 256 mm", "Max speed": "600 mm/s", "Max acceleration": "20,000 mm/s²", "Hotend max temp": "300 °C", "Enclosure": "Fully enclosed", "Connectivity": "Wi-Fi, USB" },
    inBox: ["P2S printer", "Textured PEI plate", "Starter filament", "Tool kit", "Quick start guide"],
    stock: 14,
  },
  {
    slug: "bambu-lab-p2s-combo",
    brand: "Bambu Lab", name: "P2S Combo", category: "FDM",
    rrp: 1599, price: 1319,
    summary: "P2S bundled with AMS 2 Pro for heated, drying multi-colour material handling.",
    highlights: ["Includes AMS 2 Pro with filament drying", "5\" touchscreen", "AI print monitoring", "Fully enclosed"],
    specs: { "Build volume": "256 × 256 × 256 mm", "Max speed": "600 mm/s", "Colours": "Up to 24 with AMS", "Hotend max temp": "300 °C", "Enclosure": "Fully enclosed", "Connectivity": "Wi-Fi, USB" },
    inBox: ["P2S printer", "AMS 2 Pro", "Filament samples", "Tool kit", "Quick start guide"],
    stock: 11,
  },
  {
    slug: "bambu-lab-x1-carbon",
    brand: "Bambu Lab", name: "X1-Carbon", category: "FDM",
    rrp: 1849, price: 1499,
    summary: "Lidar-calibrated flagship with a hardened steel hotend for carbon and glass-fibre filaments.",
    highlights: ["Micro lidar first-layer inspection", "Hardened steel nozzle & extruder", "7\" touchscreen", "AMS compatible"],
    specs: { "Build volume": "256 × 256 × 256 mm", "Max speed": "500 mm/s", "Max acceleration": "20,000 mm/s²", "Hotend max temp": "300 °C", "Enclosure": "Fully enclosed", "Connectivity": "Wi-Fi, LAN, microSD" },
    inBox: ["X1-Carbon printer", "Textured PEI plate", "Engineering plate", "Tool kit", "Quick start guide"],
    stock: 9,
  },
  {
    slug: "bambu-lab-x1-carbon-combo",
    brand: "Bambu Lab", name: "X1-Carbon Combo", category: "FDM",
    rrp: 2199, price: 1749,
    summary: "The X1-Carbon with AMS: the original pro multi-material desktop machine.",
    highlights: ["Includes AMS", "Micro lidar", "Hardened steel hotend", "Up to 16 colours"],
    specs: { "Build volume": "256 × 256 × 256 mm", "Max speed": "500 mm/s", "Colours": "Up to 16 with AMS", "Hotend max temp": "300 °C", "Enclosure": "Fully enclosed", "Connectivity": "Wi-Fi, LAN, microSD" },
    inBox: ["X1-Carbon printer", "AMS", "Filament samples", "Tool kit", "Quick start guide"],
    stock: 7,
  },
  {
    slug: "bambu-lab-x1e",
    brand: "Bambu Lab", name: "X1E", category: "FDM",
    rrp: 3699, price: 3199,
    summary: "Enterprise-grade X1 with an actively heated chamber, Ethernet and enhanced security.",
    highlights: ["Active chamber heating to 60 °C", "320 °C hotend", "Ethernet & LAN-only mode", "HEPA + activated carbon filtration"],
    specs: { "Build volume": "256 × 256 × 256 mm", "Max speed": "500 mm/s", "Chamber temp": "Up to 60 °C", "Hotend max temp": "320 °C", "Enclosure": "Heated enclosure", "Connectivity": "Wi-Fi, Ethernet" },
    inBox: ["X1E printer", "Engineering plate", "Tool kit", "Quick start guide"],
    stock: 4,
  },
  {
    slug: "bambu-lab-h2s",
    brand: "Bambu Lab", name: "H2S", category: "FDM",
    rrp: 1999, price: 1699,
    summary: "Single-nozzle H2 platform with a large 340 mm build volume and heated chamber.",
    highlights: ["340 × 320 × 340 mm volume", "Active chamber heating", "Vision encoder motion accuracy", "AMS 2 Pro & AMS HT compatible"],
    specs: { "Build volume": "340 × 320 × 340 mm", "Max speed": "1000 mm/s", "Chamber temp": "Up to 65 °C", "Hotend max temp": "350 °C", "Enclosure": "Heated enclosure", "Connectivity": "Wi-Fi, Ethernet, USB" },
    inBox: ["H2S printer", "Textured PEI plate", "Tool kit", "Quick start guide"],
    stock: 8,
  },
  {
    slug: "bambu-lab-h2d",
    brand: "Bambu Lab", name: "H2D", category: "FDM",
    rrp: 3099, price: 2699,
    summary: "Dual-nozzle flagship for multi-material printing with minimal purge waste.",
    highlights: ["Dual nozzles — less waste, faster colour changes", "350 °C hotends", "Optional laser & cutting modules", "Heated chamber"],
    specs: { "Build volume": "325 × 320 × 325 mm (single)", "Max speed": "1000 mm/s", "Chamber temp": "Up to 65 °C", "Hotend max temp": "350 °C", "Enclosure": "Heated enclosure", "Connectivity": "Wi-Fi, Ethernet, USB" },
    inBox: ["H2D printer", "Textured PEI plate", "Tool kit", "Quick start guide"],
    stock: 6, featured: true,
  },
  {
    slug: "bambu-lab-h2c",
    brand: "Bambu Lab", name: "H2C", category: "FDM",
    rrp: 3499, price: 3099,
    summary: "H2 platform with a rapid nozzle-changing system for many-colour, low-waste prints.",
    highlights: ["Automatic hotend changing", "Up to 7 hotends", "Heated chamber", "Minimal purge waste"],
    specs: { "Build volume": "325 × 320 × 325 mm", "Max speed": "1000 mm/s", "Chamber temp": "Up to 65 °C", "Hotend max temp": "350 °C", "Enclosure": "Heated enclosure", "Connectivity": "Wi-Fi, Ethernet, USB" },
    inBox: ["H2C printer", "Textured PEI plate", "Tool kit", "Quick start guide"],
    stock: 3,
  },

  // ---------------- Creality ----------------
  {
    slug: "creality-ender-3-v3-se",
    brand: "Creality", name: "Ender-3 V3 SE", category: "FDM",
    rrp: 329, price: 249,
    summary: "The budget classic, reborn with auto levelling and 250 mm/s speeds.",
    highlights: ["CR Touch auto levelling", "Sprite direct-drive extruder", "250 mm/s max speed", "Assembles in about 20 minutes"],
    specs: { "Build volume": "220 × 220 × 250 mm", "Max speed": "250 mm/s", "Hotend max temp": "260 °C", "Enclosure": "Open frame", "Connectivity": "USB, microSD" },
    inBox: ["Ender-3 V3 SE printer", "PEI build plate", "Tool kit", "Sample filament", "Quick start guide"],
    stock: 55, featured: true,
  },
  {
    slug: "creality-ender-3-v3-ke",
    brand: "Creality", name: "Ender-3 V3 KE", category: "FDM",
    rrp: 449, price: 359,
    summary: "Klipper-powered Ender with Wi-Fi, a touchscreen and 500 mm/s prints.",
    highlights: ["Creality OS (Klipper)", "500 mm/s max speed", "Wi-Fi + Creality Cloud", "4.3\" touchscreen"],
    specs: { "Build volume": "220 × 220 × 240 mm", "Max speed": "500 mm/s", "Hotend max temp": "300 °C", "Enclosure": "Open frame", "Connectivity": "Wi-Fi, LAN, USB" },
    inBox: ["Ender-3 V3 KE printer", "PEI build plate", "Tool kit", "Sample filament"],
    stock: 33,
  },
  {
    slug: "creality-ender-3-v3",
    brand: "Creality", name: "Ender-3 V3", category: "FDM",
    rrp: 599, price: 469,
    summary: "CoreXZ Ender with 600 mm/s speeds and a die-cast frame.",
    highlights: ["CoreXZ motion", "600 mm/s max speed", "Auto levelling & input shaping", "Die-cast aluminium frame"],
    specs: { "Build volume": "220 × 220 × 250 mm", "Max speed": "600 mm/s", "Hotend max temp": "300 °C", "Enclosure": "Open frame", "Connectivity": "Wi-Fi, USB" },
    inBox: ["Ender-3 V3 printer", "PEI build plate", "Tool kit", "Sample filament"],
    stock: 21,
  },
  {
    slug: "creality-ender-3-v3-plus",
    brand: "Creality", name: "Ender-3 V3 Plus", category: "FDM",
    rrp: 749, price: 589,
    summary: "The big CoreXZ Ender: 300 × 300 × 330 mm build volume at 600 mm/s.",
    highlights: ["Large 300 mm build plate", "CoreXZ motion", "600 mm/s max speed", "Auto levelling"],
    specs: { "Build volume": "300 × 300 × 330 mm", "Max speed": "600 mm/s", "Hotend max temp": "300 °C", "Enclosure": "Open frame", "Connectivity": "Wi-Fi, USB" },
    inBox: ["Ender-3 V3 Plus printer", "PEI build plate", "Tool kit", "Sample filament"],
    stock: 17,
  },
  {
    slug: "creality-hi-combo",
    brand: "Creality", name: "Hi Combo", category: "FDM",
    rrp: 799, price: 629,
    summary: "Creality's bed-slinger with the CFS lite system for four-colour printing.",
    highlights: ["Includes CFS lite (4 colours)", "Full auto calibration", "500 mm/s max speed", "Tri-metal nozzle"],
    specs: { "Build volume": "260 × 260 × 300 mm", "Max speed": "500 mm/s", "Colours": "Up to 4 with CFS lite", "Hotend max temp": "300 °C", "Enclosure": "Open frame", "Connectivity": "Wi-Fi, USB" },
    inBox: ["Hi printer", "CFS lite", "Filament samples", "Tool kit"],
    stock: 16,
  },
  {
    slug: "creality-k1-se",
    brand: "Creality", name: "K1 SE", category: "FDM",
    rrp: 549, price: 429,
    summary: "Entry-level CoreXY speed demon — 600 mm/s at a bed-slinger price.",
    highlights: ["CoreXY at 600 mm/s", "20,000 mm/s² acceleration", "Hands-free auto levelling", "Quick-swap hotend"],
    specs: { "Build volume": "220 × 220 × 250 mm", "Max speed": "600 mm/s", "Hotend max temp": "300 °C", "Enclosure": "Open-top frame", "Connectivity": "Wi-Fi, USB" },
    inBox: ["K1 SE printer", "PEI build plate", "Tool kit", "Sample filament"],
    stock: 22,
  },
  {
    slug: "creality-k1c",
    brand: "Creality", name: "K1C", category: "FDM",
    rrp: 799, price: 599,
    summary: "Enclosed CoreXY with a hardened nozzle, ready for carbon-fibre filaments.",
    highlights: ["Enclosed CoreXY", "Hardened steel tri-metal nozzle", "AI camera monitoring", "600 mm/s max speed"],
    specs: { "Build volume": "220 × 220 × 250 mm", "Max speed": "600 mm/s", "Hotend max temp": "300 °C", "Enclosure": "Fully enclosed", "Connectivity": "Wi-Fi, USB" },
    inBox: ["K1C printer", "PEI build plate", "Tool kit", "Sample filament"],
    stock: 18, featured: true,
  },
  {
    slug: "creality-k1-max",
    brand: "Creality", name: "K1 Max", category: "FDM",
    rrp: 1199, price: 899,
    summary: "Large-format enclosed CoreXY with AI lidar and a 300 mm build volume.",
    highlights: ["300 × 300 × 300 mm volume", "AI lidar first-layer check", "AI camera", "600 mm/s max speed"],
    specs: { "Build volume": "300 × 300 × 300 mm", "Max speed": "600 mm/s", "Hotend max temp": "300 °C", "Enclosure": "Fully enclosed", "Connectivity": "Wi-Fi, LAN, USB" },
    inBox: ["K1 Max printer", "PEI build plate", "Tool kit", "Sample filament"],
    stock: 10,
  },
  {
    slug: "creality-k2-combo",
    brand: "Creality", name: "K2 Combo", category: "FDM",
    rrp: 1149, price: 949,
    summary: "The compact K2 with CFS for 4–16 colour enclosed printing.",
    highlights: ["Includes CFS (4 slots)", "Enclosed CoreXY", "Up to 16 colours", "AI camera"],
    specs: { "Build volume": "260 × 260 × 260 mm", "Max speed": "600 mm/s", "Colours": "Up to 16 with CFS", "Hotend max temp": "300 °C", "Enclosure": "Fully enclosed", "Connectivity": "Wi-Fi, USB" },
    inBox: ["K2 printer", "CFS", "Filament samples", "Tool kit"],
    stock: 12,
  },
  {
    slug: "creality-k2-pro-combo",
    brand: "Creality", name: "K2 Pro Combo", category: "FDM",
    rrp: 1599, price: 1299,
    summary: "Mid-size K2 with active chamber heating and CFS multi-colour system.",
    highlights: ["Active chamber heating", "Includes CFS", "Step-servo motors", "300 mm build volume"],
    specs: { "Build volume": "300 × 300 × 300 mm", "Max speed": "600 mm/s", "Chamber temp": "Up to 60 °C", "Hotend max temp": "350 °C", "Enclosure": "Heated enclosure", "Connectivity": "Wi-Fi, LAN, USB" },
    inBox: ["K2 Pro printer", "CFS", "Filament samples", "Tool kit"],
    stock: 8,
  },
  {
    slug: "creality-k2-plus-combo",
    brand: "Creality", name: "K2 Plus Combo", category: "FDM",
    rrp: 2299, price: 1899,
    summary: "Creality's flagship: 350 mm cube, heated chamber and 16-colour CFS.",
    highlights: ["350 × 350 × 350 mm volume", "Active chamber heating to 60 °C", "Includes CFS", "Dual AI cameras"],
    specs: { "Build volume": "350 × 350 × 350 mm", "Max speed": "600 mm/s", "Chamber temp": "Up to 60 °C", "Hotend max temp": "350 °C", "Enclosure": "Heated enclosure", "Connectivity": "Wi-Fi, LAN, USB" },
    inBox: ["K2 Plus printer", "CFS", "Filament samples", "Tool kit"],
    stock: 6, featured: true,
  },
  {
    slug: "creality-cr-10-se",
    brand: "Creality", name: "CR-10 SE", category: "FDM",
    rrp: 649, price: 499,
    summary: "Large 220 × 220 × 265 mm Klipper machine with a nozzle-based auto levelling system.",
    highlights: ["Klipper firmware", "600 mm/s max speed", "Strain-gauge auto levelling", "Dual Z-axis"],
    specs: { "Build volume": "220 × 220 × 265 mm", "Max speed": "600 mm/s", "Hotend max temp": "300 °C", "Enclosure": "Open frame", "Connectivity": "Wi-Fi, USB" },
    inBox: ["CR-10 SE printer", "PEI build plate", "Tool kit", "Sample filament"],
    stock: 9,
  },
  {
    slug: "creality-halot-mage-s",
    brand: "Creality", name: "HALOT-MAGE S 14K", category: "Resin",
    rrp: 699, price: 529,
    summary: "10.3\" 14K mono LCD resin printer for ultra-fine miniatures and jewellery.",
    highlights: ["14K resolution (16.8 µm XY)", "Integral light source", "Air purifier built in", "Wi-Fi printing"],
    specs: { "Build volume": "228 × 128 × 230 mm", "Screen": "10.3\" 14K mono LCD", "Max speed": "150 mm/h", "Connectivity": "Wi-Fi, USB" },
    inBox: ["HALOT-MAGE S printer", "Resin vat", "Build plate", "Tool kit"],
    stock: 12,
  },

  // ---------------- Other brands ----------------
  {
    slug: "prusa-core-one",
    brand: "Prusa Research", name: "CORE One", category: "FDM",
    rrp: 2199, price: 1949,
    summary: "Prusa's enclosed CoreXY with active chamber temperature control. Made in Europe.",
    highlights: ["Enclosed CoreXY steel frame", "Chamber temperature control", "Nextruder with load-cell levelling", "Open-source firmware"],
    specs: { "Build volume": "250 × 220 × 270 mm", "Max speed": "Up to 600 mm/s travel", "Hotend max temp": "290 °C", "Enclosure": "Fully enclosed", "Connectivity": "Wi-Fi, Ethernet, USB" },
    inBox: ["CORE One printer (assembled)", "Satin sheet", "Tool kit", "Sample filament"],
    stock: 5,
  },
  {
    slug: "elegoo-centauri-carbon",
    brand: "Elegoo", name: "Centauri Carbon", category: "FDM",
    rrp: 549, price: 449,
    summary: "Enclosed CoreXY that prints carbon-fibre filaments out of the box at a great price.",
    highlights: ["Enclosed CoreXY", "Hardened steel nozzle", "Built-in camera", "Auto levelling"],
    specs: { "Build volume": "256 × 256 × 256 mm", "Max speed": "500 mm/s", "Hotend max temp": "320 °C", "Enclosure": "Fully enclosed", "Connectivity": "Wi-Fi, USB" },
    inBox: ["Centauri Carbon printer", "PEI build plate", "Tool kit", "Sample filament"],
    stock: 20,
  },
  {
    slug: "anycubic-kobra-s1-combo",
    brand: "Anycubic", name: "Kobra S1 Combo", category: "FDM",
    rrp: 899, price: 699,
    summary: "Enclosed CoreXY with the ACE Pro drying multi-colour unit included.",
    highlights: ["Includes ACE Pro (4 colours + drying)", "Enclosed CoreXY", "600 mm/s max speed", "Built-in camera"],
    specs: { "Build volume": "250 × 250 × 250 mm", "Max speed": "600 mm/s", "Colours": "Up to 8 with 2 × ACE Pro", "Hotend max temp": "320 °C", "Enclosure": "Fully enclosed", "Connectivity": "Wi-Fi, USB" },
    inBox: ["Kobra S1 printer", "ACE Pro", "Filament samples", "Tool kit"],
    stock: 14,
  },
];

export const brands: Brand[] = ["Bambu Lab", "Creality", "Prusa Research", "Elegoo", "Anycubic"];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const discountPct = (p: Product) => Math.round((1 - p.price / p.rrp) * 100);
export const imageFor = (p: Product) => p.image ?? `/products/${p.slug}.jpg`;
export const aud = (n: number) =>
  new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(n);
export const brandSlug = (b: string) => b.toLowerCase().replace(/\s+/g, "-");
