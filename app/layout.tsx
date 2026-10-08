import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Noto_Sans_Myanmar, Noto_Sans_Thai } from "next/font/google";
import ConversionTracking from "./components/ConversionTracking";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const notoThai = Noto_Sans_Thai({ variable: "--font-thai", subsets: ["thai", "latin"], weight: ["400", "500", "600", "700", "800"] });
const notoMyanmar = Noto_Sans_Myanmar({ variable: "--font-myanmar", subsets: ["myanmar"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "PMC Koh Sirey | Clinic in Phuket",
  description: "PMC Koh Sirey in Phuket. Open daily 9:00 AM–8:00 PM. Contact the clinic by phone, LINE, or WhatsApp for service and appointment information.",
};

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const googleTagId = ga4MeasurementId || googleAdsId;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <head>
        <script async src="https://ob.belvionetta.com/i/4c541fff6854e64402d33d55c856892f.js" className="ct_clicktrue"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoThai.variable} ${notoMyanmar.variable} antialiased`}>
        <noscript dangerouslySetInnerHTML={{ __html: '<iframe src="https://ob.belvionetta.com/ns/4c541fff6854e64402d33d55c856892f.html?ch=" width="0" height="0" style="display:none"></iframe>' }} />
        {googleTagId ? (
          <>
            <Script id="google-tag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; window.gtag = function(){window.dataLayer.push(arguments);}; window.gtag('js', new Date());${ga4MeasurementId ? ` window.gtag('config', '${ga4MeasurementId}');` : ""}${googleAdsId && googleAdsId !== ga4MeasurementId ? ` window.gtag('config', '${googleAdsId}');` : ""}`}
            </Script>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`} strategy="afterInteractive" />
          </>
        ) : null}
        <ConversionTracking />
        {children}
      </body>
    </html>
  );
}
