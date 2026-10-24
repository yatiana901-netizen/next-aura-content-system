export type RadarSource = {
  id: string;
  name: string;
  category: string;
  url: string;
  priority: number;
  include: string[];
  exclude?: string[];
};

export const SOURCES: RadarSource[] = [
  {
    id: "bmw-global",
    name: "BMW Group PressClub Global",
    category: "automotive",
    url: "https://www.press.bmwgroup.com/global",
    priority: 10,
    include: ["/global/article/", "/global/pressDetail"],
    exclude: ["art-car", "culture", "golf", "tennis"]
  },
  {
    id: "mercedes-media",
    name: "Mercedes-Benz Media",
    category: "automotive",
    url: "https://media.mercedes-benz.com/en",
    priority: 10,
    include: ["/article/", "/press-release/", "/press-information/"],
    exclude: ["festival", "fashion", "museum"]
  },
  {
    id: "audi-media",
    name: "Audi Media Center",
    category: "automotive",
    url: "https://www.audi.com/en/press-releases",
    priority: 10,
    include: ["/en/press-releases/"],
    exclude: ["partnership", "culture", "ski"]
  },
  {
    id: "porsche-newsroom",
    name: "Porsche Newsroom",
    category: "automotive",
    url: "https://newsroom.porsche.com/en/press-releases.html",
    priority: 10,
    include: ["/en/20"],
    exclude: ["tennis", "festival", "museum"]
  },
  {
    id: "vw-newsroom",
    name: "Volkswagen Newsroom",
    category: "automotive",
    url: "https://www.volkswagen-newsroom.com/en/press-releases",
    priority: 9,
    include: ["/en/press-releases/"],
    exclude: ["football", "culture"]
  },
  {
    id: "continental",
    name: "Continental Press",
    category: "supplier",
    url: "https://www.continental.com/en/press/press-releases/",
    priority: 9,
    include: ["/en/press/press-releases/"],
    exclude: ["biathlon", "cycling", "partnership"]
  },
  {
    id: "zf",
    name: "ZF Press Center",
    category: "supplier",
    url: "https://press.zf.com/press/en/start/homepage.html",
    priority: 9,
    include: ["/press/en/releases/"],
    exclude: ["earnings", "financial"]
  },
  {
    id: "bosch-mobility",
    name: "Bosch Media Service — Mobility",
    category: "supplier",
    url: "https://www.bosch-presse.de/pressportal/de/en/news/press-release/mobility/",
    priority: 9,
    include: ["/pressportal/de/en/press-release-", "/pressportal/de/en/news/"],
    exclude: ["corporate structure", "personnel"]
  },
  {
    id: "brembo",
    name: "Brembo Press Releases",
    category: "supplier",
    url: "https://www.brembogroup.com/en/media/press-releases",
    priority: 8,
    include: ["/en/media/press-releases/", "/en/media/news/"],
    exclude: ["financial", "shareholders"]
  },
  {
    id: "formula1",
    name: "Formula 1 — Latest",
    category: "motorsport",
    url: "https://www.formula1.com/en/latest",
    priority: 8,
    include: ["/en/latest/article/"],
    exclude: ["lifestyle", "quiz", "tickets"]
  }
];

export const DEFAULT_KEYWORDS = [
  "battery", "batterie", "charging", "laden", "800 volt", "high voltage",
  "motor", "inverter", "power electronics", "leistungselektronik",
  "brake", "bremse", "tire", "tyre", "reifen", "suspension", "fahrwerk",
  "steering", "lenkung", "aerodynamic", "aerodynamik", "thermal", "cooling",
  "sensor", "adas", "autonomous", "automated", "robot", "prototype",
  "concept", "record", "world first", "innovation", "engineering",
  "formula 1", "f1", "motorsport", "propulsion", "electric", "hydrogen",
  "azipod", "yacht", "ship", "aircraft", "evtol", "train", "rail"
];
