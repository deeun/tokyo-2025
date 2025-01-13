import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/common.css";
import "./styles/mg_pd.css";
import "./styles/flex.css";
import "./styles/font.css";
import ReduxProvider from "../../store/ReduxProvider";
import LayoutWrapper from "@/app/layoutWrapper";
import Script from "next/script";

export const metadata: Metadata = {
  title: "도쿄 2025",
  description: "카피바라 카피바라 카피바라",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body style={{display: 'flex', flexDirection: 'column'}}>
          <LayoutWrapper children={children}/>
        </body>
      </ReduxProvider>
    </html>
  );
}
