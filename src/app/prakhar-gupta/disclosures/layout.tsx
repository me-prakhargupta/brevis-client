import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disclosure ",
    description: "Responsible disclosure and security research by Prakhar Gupta. Case studies, findings, and security insights.",
};

export default function DisclosureLayout({
    children,
} : {children: React.ReactNode;
}) {
    return <>{children}</>
}