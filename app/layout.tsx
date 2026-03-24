import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal OS — Alex Morgan",
  description: "A personal operating system for clarity, focus, and intentional living.",
  openGraph: {
    title: "Personal OS — Alex Morgan",
    description: "Goals, projects, habits, and principles — all in one place.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#09090b] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
