import "./globals.css";
import SceneCanvas from "@/components/3D/SceneCanvas";

export const metadata = {
  title: "Yash Dingar — Portfolio",
  description: "Modular portfolio with 3D background and admin control",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        {/* <SceneCanvas /> */}
        {children}
      </body>
    </html>
  );
}
