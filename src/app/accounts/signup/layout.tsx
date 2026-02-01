import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Beginning - Brevis",
  description: "A place to begin, so you have somewhere to return to.",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}