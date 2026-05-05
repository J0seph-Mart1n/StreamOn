import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VortexStream - Live Now",
  description: "Live streaming platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Spline+Sans:wght@500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md min-h-screen selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}