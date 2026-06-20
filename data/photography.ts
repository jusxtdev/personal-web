export type Photo = {
  src: string;
  alt: string;
  title: string;
  date: string;
  caption?: string;
  href?: string;
};

export const photos: Photo[] = [
  { src: "/photos/morningWalk.png", alt: "Morning Walk", title: "Morning Walk", date: "2024-03-10" },
  { src: "/photos/ganesh.png", alt: "Ganesh", title: "Ganesh Chaturthi", date: "2025-08-27" },
  { src: "/photos/kitty.png", alt: "Kitty", title: "Kitty cat", date: "2024-11-18" },
  { src: "/photos/eveningCrane.png", alt: "Evening Crane", title: "Evening Crane", date: "2025-01-16" },
];
