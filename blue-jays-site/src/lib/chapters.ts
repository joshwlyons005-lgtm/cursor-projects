export type ChapterStatus = "Active" | "Launching" | "Recruiting";

export interface Chapter {
  id: string;
  brandName: string;
  city: string;
  country: "CA" | "US";
  schools?: string;
  status: ChapterStatus;
  /** Percent positions on the simplified NA map (0–100). */
  mapPosition: { x: number; y: number };
}

export const chapters: Chapter[] = [
  {
    id: "vancouver",
    brandName: "DevNet Vancouver",
    city: "Vancouver",
    country: "CA",
    status: "Launching",
    mapPosition: { x: 14, y: 28 },
  },
  {
    id: "toronto",
    brandName: "DevNet Toronto",
    city: "Toronto",
    country: "CA",
    schools: "UofT / TMU / York",
    status: "Active",
    mapPosition: { x: 72, y: 38 },
  },
  {
    id: "waterloo",
    brandName: "DevNet Waterloo",
    city: "Waterloo",
    country: "CA",
    schools: "University of Waterloo / Laurier",
    status: "Active",
    mapPosition: { x: 71, y: 36 },
  },
  {
    id: "london",
    brandName: "DevNet London",
    city: "London",
    country: "CA",
    schools: "Western University",
    status: "Active",
    mapPosition: { x: 70, y: 39 },
  },
  {
    id: "guelph",
    brandName: "DevNet Guelph",
    city: "Guelph",
    country: "CA",
    status: "Recruiting",
    mapPosition: { x: 71, y: 37 },
  },
  {
    id: "kingston",
    brandName: "DevNet Kingston",
    city: "Kingston",
    country: "CA",
    schools: "Queen’s University",
    status: "Active",
    mapPosition: { x: 74, y: 37 },
  },
  {
    id: "montreal",
    brandName: "DevNet Montréal",
    city: "Montréal",
    country: "CA",
    status: "Launching",
    mapPosition: { x: 76, y: 33 },
  },
  {
    id: "halifax",
    brandName: "DevNet Halifax",
    city: "Halifax",
    country: "CA",
    schools: "Dalhousie University",
    status: "Active",
    mapPosition: { x: 82, y: 34 },
  },
  {
    id: "tucson",
    brandName: "DevNet Tucson",
    city: "Tucson",
    country: "US",
    status: "Recruiting",
    mapPosition: { x: 26, y: 52 },
  },
  {
    id: "los-angeles",
    brandName: "DevNet Los Angeles",
    city: "Los Angeles",
    country: "US",
    status: "Active",
    mapPosition: { x: 18, y: 48 },
  },
  {
    id: "miami",
    brandName: "DevNet Miami",
    city: "Miami",
    country: "US",
    status: "Active",
    mapPosition: { x: 76, y: 62 },
  },
  {
    id: "boston",
    brandName: "DevNet Boston",
    city: "Boston",
    country: "US",
    status: "Active",
    mapPosition: { x: 79, y: 36 },
  },
  {
    id: "new-york-city",
    brandName: "DevNet New York City",
    city: "New York City",
    country: "US",
    status: "Active",
    mapPosition: { x: 77, y: 39 },
  },
];

export function chaptersByCountry(country: "CA" | "US") {
  return chapters.filter((c) => c.country === country);
}
