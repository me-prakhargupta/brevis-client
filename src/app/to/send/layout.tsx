import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Send a Message - Brevis",
  description: "Send a one-way message without replies, profiles, or an account.",
};

export default function SendMessageLayout({
    children,
} : {children: React.ReactNode;
}) {
    return <>{children}</>
}