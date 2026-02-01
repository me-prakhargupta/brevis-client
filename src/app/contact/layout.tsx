import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - Brevis",
    description: "Contact Brevis for support or general inquiries.",
};

export default function ContactLayout({
    children,
} : {children: React.ReactNode;
}) {
    return <>{children}</>
}