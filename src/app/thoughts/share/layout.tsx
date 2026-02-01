import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Write - Brevis",
    description: "Write and leave a thought without replies, profiles, or social pressure.",
};

export default function ThoughtsLayout({
    children,
} : {children: React.ReactNode;
}) {
    return <>{children}</>
}