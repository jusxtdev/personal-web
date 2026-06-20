export type Photo = {
  src: string;
  alt: string;
  title: string;
  date: string;
  caption?: string;
  href?: string;
};

export const photos: Photo[] = [
  { src: "/photos/1.jpg", alt: "Mountain sunrise", title: "Mountain Sunrise", date: "2024-01-15", caption: "Golden hour at the peaksat the peaksat the peaksat the peaksat the peaks" },
  { src: "/photos/2.jpg", alt: "Forest path", title: "Forest Path", date: "2024-02-20", caption: "Morning walk in the woods" },
  { src: "/photos/3.jpg", alt: "City lights", title: "City Lights", date: "2024-03-10", caption: "Urban nightscape" },
];
