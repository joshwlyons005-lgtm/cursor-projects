export type PlayerCategory = "pitchers" | "catchers" | "infield" | "outfield";

export interface Player {
  id: string;
  name: string;
  number: number;
  position: string;
  category: PlayerCategory;
  profile: string;
  imageSeed: string;
}

export interface FeaturedPlayer extends Player {
  keyStat: string;
  keyStatLabel: string;
  writeup: string;
}

export interface Game {
  id: string;
  opponent: string;
  opponentAbbr: string;
  date: string;
  time: string;
  location: string;
  isHome: boolean;
  tv: string;
}

export type NewsCategory =
  | "Game Recap"
  | "Trade"
  | "Injury"
  | "Feature"
  | "Prospect";

export interface NewsArticle {
  id: string;
  headline: string;
  excerpt: string;
  category: NewsCategory;
  date: string;
  readTime: string;
  imageSeed: string;
  featured?: boolean;
}

export interface StandingsRow {
  team: string;
  abbr: string;
  w: number;
  l: number;
  pct: string;
  gb: string;
  home: string;
  away: string;
  l10: string;
  streak: string;
  isBlueJays?: boolean;
}

export interface TeamStatLine {
  label: string;
  value: string;
  rank: string;
}

export interface GalleryItem {
  id: string;
  caption: string;
  imageSeed: string;
}

export const teamRecord = {
  wins: 89,
  losses: 73,
  pct: ".549",
};

export const tickerStats: { label: string; value: string }[] = [
  { label: "Record", value: `${teamRecord.wins}-${teamRecord.losses}` },
  { label: "AL East", value: "3rd" },
  { label: "Team AVG", value: ".248" },
  { label: "Team OBP", value: ".325" },
  { label: "Team SLG", value: ".421" },
  { label: "Team ERA", value: "3.82" },
  { label: "Runs / G", value: "4.7" },
  { label: "Opp. AVG", value: ".236" },
];

export const featuredPlayers: FeaturedPlayer[] = [
  {
    id: "vlad",
    name: "Vladimir Guerrero Jr.",
    number: 27,
    position: "1B / DH",
    category: "infield",
    profile: "Corner power anchor and lineup engine.",
    imageSeed: "vlad-jr",
    keyStat: ".264",
    keyStatLabel: "AVG (2025 est.)",
    writeup:
      "The heart of Toronto’s order — elite barrel rates, clutch moments, and a presence that fills Rogers Centre every night.",
  },
  {
    id: "bo",
    name: "Bo Bichette",
    number: 11,
    position: "SS",
    category: "infield",
    profile: "Aggressive contact and premium bat speed up the middle.",
    imageSeed: "bo-bichette",
    keyStat: ".297",
    keyStatLabel: "AVG (2025 est.)",
    writeup:
      "A spark at shortstop with a hitter’s mentality — turning pressure into production when the city watches.",
  },
  {
    id: "gausman",
    name: "Kevin Gausman",
    number: 34,
    position: "RHP",
    category: "pitchers",
    profile: "Split-heavy ace with swing-and-miss upside.",
    imageSeed: "gausman",
    keyStat: "3.42",
    keyStatLabel: "ERA (2025 est.)",
    writeup:
      "Sets the tone on the bump — command, swing-miss, and big-game poise for a rotation built to chase October.",
  },
];

export const roster: Player[] = [
  ...featuredPlayers.map((p) => ({
    id: p.id,
    name: p.name,
    number: p.number,
    position: p.position,
    category: p.category,
    profile: p.profile,
    imageSeed: p.imageSeed,
  })),
  {
    id: "kirk",
    name: "Alejandro Kirk",
    number: 30,
    position: "C",
    category: "catchers",
    profile: "Elite plate discipline; quiet receiver with a big stick.",
    imageSeed: "kirk",
  },
  {
    id: "jansen",
    name: "Danny Jansen",
    number: 9,
    position: "C",
    category: "catchers",
    profile: "Veteran presence; power from the catching spot.",
    imageSeed: "jansen",
  },
  {
    id: "springer",
    name: "George Springer",
    number: 4,
    position: "OF / DH",
    category: "outfield",
    profile: "Leadoff pedigree; championship experience.",
    imageSeed: "springer",
  },
  {
    id: "varsho",
    name: "Daulton Varsho",
    number: 5,
    position: "OF / C",
    category: "outfield",
    profile: "Versatile defender with sneaky pop.",
    imageSeed: "varsho",
  },
  {
    id: "kiermaier",
    name: "Kevin Kiermaier",
    number: 39,
    position: "OF",
    category: "outfield",
    profile: "Gold-glove range; energy on the grass.",
    imageSeed: "kiermaier",
  },
  {
    id: "schneider",
    name: "Davis Schneider",
    number: 36,
    position: "2B / OF",
    category: "infield",
    profile: "Patient at-bats; sneaky power to all fields.",
    imageSeed: "schneider",
  },
  {
    id: "clement",
    name: "Ernie Clement",
    number: 22,
    position: "UTIL",
    category: "infield",
    profile: "Contact-first utility with defensive flexibility.",
    imageSeed: "clement",
  },
  {
    id: "roman",
    name: "Jordan Romano",
    number: 68,
    position: "RHP",
    category: "pitchers",
    profile: "Late-inning heat; closer mentality.",
    imageSeed: "romano",
  },
  {
    id: "green",
    name: "Chad Green",
    number: 57,
    position: "RHP",
    category: "pitchers",
    profile: "Multi-inning leverage arm.",
    imageSeed: "green",
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: "n1",
    headline: "Blue Jays rally late in front of a packed Rogers Centre",
    excerpt:
      "Toronto’s lineup turned pressure into runs in the 8th — another electric night under the dome.",
    category: "Game Recap",
    date: "Apr 12, 2026",
    readTime: "4 min",
    imageSeed: "jays-recap-1",
    featured: true,
  },
  {
    id: "n2",
    headline: "Rotation depth chart: who’s trending up this week",
    excerpt:
      "A look at the arms pushing for leverage innings and spot starts as the schedule tightens.",
    category: "Feature",
    date: "Apr 11, 2026",
    readTime: "6 min",
    imageSeed: "jays-pitching",
  },
  {
    id: "n3",
    headline: "Trade buzz: how the front office could add a bench bat",
    excerpt:
      "Names and fits — what a small move could unlock for late-game matchups.",
    category: "Trade",
    date: "Apr 10, 2026",
    readTime: "5 min",
    imageSeed: "jays-trade",
  },
  {
    id: "n4",
    headline: "Injury update: day-to-day status for key contributor",
    excerpt:
      "The club is optimistic after early tests — a timeline for return is taking shape.",
    category: "Injury",
    date: "Apr 9, 2026",
    readTime: "2 min",
    imageSeed: "jays-injury",
  },
  {
    id: "n5",
    headline: "Prospect spotlight: a fast riser turning heads in Triple-A",
    excerpt:
      "Plate discipline, bat speed, and a defensive home — why the buzz is real.",
    category: "Prospect",
    date: "Apr 8, 2026",
    readTime: "7 min",
    imageSeed: "jays-prospect",
  },
  {
    id: "n6",
    headline: "Defensive clinic: outfield range steals a win on the road",
    excerpt:
      "A diving catch and a perfect relay — Toronto’s defense flips the script.",
    category: "Game Recap",
    date: "Apr 7, 2026",
    readTime: "3 min",
    imageSeed: "jays-defense",
  },
];

export const upcomingGames: Game[] = [
  {
    id: "g1",
    opponent: "New York Yankees",
    opponentAbbr: "NYY",
    date: "Apr 16, 2026",
    time: "7:07 PM ET",
    location: "Rogers Centre · Toronto, ON",
    isHome: true,
    tv: "TV: SNET",
  },
  {
    id: "g2",
    opponent: "Boston Red Sox",
    opponentAbbr: "BOS",
    date: "Apr 17, 2026",
    time: "7:07 PM ET",
    location: "Rogers Centre · Toronto, ON",
    isHome: true,
    tv: "TV: SNET",
  },
  {
    id: "g3",
    opponent: "Tampa Bay Rays",
    opponentAbbr: "TB",
    date: "Apr 19, 2026",
    time: "1:07 PM ET",
    location: "Rogers Centre · Toronto, ON",
    isHome: true,
    tv: "TV: SNET",
  },
  {
    id: "g4",
    opponent: "Tampa Bay Rays",
    opponentAbbr: "TB",
    date: "Apr 20, 2026",
    time: "7:07 PM ET",
    location: "Rogers Centre · Toronto, ON",
    isHome: true,
    tv: "TV: SNET",
  },
  {
    id: "g5",
    opponent: "Houston Astros",
    opponentAbbr: "HOU",
    date: "Apr 22, 2026",
    time: "8:10 PM ET",
    location: "Minute Maid Park · Houston, TX",
    isHome: false,
    tv: "TV: SNET",
  },
  {
    id: "g6",
    opponent: "Houston Astros",
    opponentAbbr: "HOU",
    date: "Apr 23, 2026",
    time: "8:10 PM ET",
    location: "Minute Maid Park · Houston, TX",
    isHome: false,
    tv: "TV: SNET",
  },
  {
    id: "g7",
    opponent: "Houston Astros",
    opponentAbbr: "HOU",
    date: "Apr 24, 2026",
    time: "2:10 PM ET",
    location: "Minute Maid Park · Houston, TX",
    isHome: false,
    tv: "TV: SNET",
  },
  {
    id: "g8",
    opponent: "Baltimore Orioles",
    opponentAbbr: "BAL",
    date: "Apr 26, 2026",
    time: "7:07 PM ET",
    location: "Rogers Centre · Toronto, ON",
    isHome: true,
    tv: "TV: SNET",
  },
];

export const alEastStandings: StandingsRow[] = [
  {
    team: "New York Yankees",
    abbr: "NYY",
    w: 98,
    l: 64,
    pct: ".605",
    gb: "—",
    home: "52-29",
    away: "46-35",
    l10: "7-3",
    streak: "W2",
  },
  {
    team: "Baltimore Orioles",
    abbr: "BAL",
    w: 92,
    l: 70,
    pct: ".568",
    gb: "6.0",
    home: "48-33",
    away: "44-37",
    l10: "6-4",
    streak: "L1",
  },
  {
    team: "Toronto Blue Jays",
    abbr: "TOR",
    w: 89,
    l: 73,
    pct: ".549",
    gb: "9.0",
    home: "47-34",
    away: "42-39",
    l10: "5-5",
    streak: "W1",
    isBlueJays: true,
  },
  {
    team: "Tampa Bay Rays",
    abbr: "TB",
    w: 86,
    l: 76,
    pct: ".531",
    gb: "12.0",
    home: "45-36",
    away: "41-40",
    l10: "4-6",
    streak: "L2",
  },
  {
    team: "Boston Red Sox",
    abbr: "BOS",
    w: 82,
    l: 80,
    pct: ".506",
    gb: "16.0",
    home: "44-37",
    away: "38-43",
    l10: "3-7",
    streak: "W3",
  },
];

export const teamKeyStats: TeamStatLine[] = [
  { label: "AVG", value: ".248", rank: "AL 8th" },
  { label: "OBP", value: ".325", rank: "AL 8th" },
  { label: "SLG", value: ".421", rank: "AL 8th" },
  { label: "ERA", value: "3.82", rank: "AL 8th" },
  { label: "WHIP", value: "1.18", rank: "AL 8th" },
];

export const galleryItems: GalleryItem[] = [
  { id: "gal1", caption: "Vlad Jr. — barreled swing, loud contact", imageSeed: "gal-vlad" },
  { id: "gal2", caption: "Bo Bichette — up the middle in a hurry", imageSeed: "gal-bo" },
  { id: "gal3", caption: "Rogers Centre — lights, noise, energy", imageSeed: "gal-rc" },
  { id: "gal4", caption: "George Springer — postseason poise", imageSeed: "gal-springer" },
  { id: "gal5", caption: "Kevin Gausman — splitter for a punchout", imageSeed: "gal-gaus" },
  { id: "gal6", caption: "Outfield defense — range that flips innings", imageSeed: "gal-of" },
  { id: "gal7", caption: "Dugout intensity — Toronto’s edge", imageSeed: "gal-dugout" },
  { id: "gal8", caption: "City Series — Toronto shows up", imageSeed: "gal-fans" },
  { id: "gal9", caption: "Late innings — pressure is the point", imageSeed: "gal-late" },
];

export function imageUrl(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

