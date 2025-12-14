import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // 1. Fontu değiştirdik
import { SafeArea } from "@coinbase/onchainkit/minikit";
import { minikitConfig } from "../minikit.config";
import { RootProvider } from "./rootProvider";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: minikitConfig.miniapp.name,
    description: minikitConfig.miniapp.description,
    other: {
      "fc:frame": JSON.stringify({
        version: minikitConfig.miniapp.version,
        imageUrl: minikitConfig.miniapp.heroImageUrl,
        button: {
          title: `${minikitConfig.miniapp.name}`,
          action: {
            name: `${minikitConfig.miniapp.name}`,
            type: "launch_frame",
          },
        },
      }),
    },
  };
}

// 2. Base ve Coinbase'in çok sevdiği o modern font
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'], // Kalınlık seçenekleri
  variable: "--font-jakarta",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootProvider>
      <html lang="en">
        {/* 3. Fontu tüm gövdeye uyguladık ve 'antialiased' ile keskinleştirdik */}
        <body className={`${jakarta.className} antialiased bg-gray-50`}>
          <SafeArea>{children}</SafeArea>
        </body>
      </html>
    </RootProvider>
  );
}