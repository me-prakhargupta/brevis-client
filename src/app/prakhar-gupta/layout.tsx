import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Prakhar Gupta | Full Stack Developer",
    template: "%s | Prakhar Gupta",
  },
  description:
    "Full Stack Developer specializing in Node.js, Express, MongoDB, and Next.js. Building scalable backend systems and production-ready web applications.",
  
  keywords: [
    "Prakhar Gupta",
    "Full Stack Developer",
    "Node.js Developer",
    "Backend Engineer",
    "Next.js Developer",
    "MongoDB",
    "Express.js",
    "Software Engineer Portfolio"
  ],

  authors: [{ name: "Prakhar Gupta" }],

  openGraph: {
    title: "Prakhar Gupta | Full Stack Developer",
    description:
      "Building scalable backend systems and production-ready applications.",
    type: "website",
  },

  metadataBase: new URL("https://brevis-five.vercel.app/prakhar-gupta"),
};

export default function SigninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}