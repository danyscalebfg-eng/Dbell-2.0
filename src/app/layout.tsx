import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "D.BELL 2.0",
  description: "D.BELL 2.0 Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
