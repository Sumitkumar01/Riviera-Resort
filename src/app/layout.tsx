import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import RivieraLogo from "../../public/RivieraLogo.png";
import RivieraLogoFooter from "../../public/RivieraLogo.png";
import Script from "next/script";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Riviera Resort Rishikesh | Luxury Stays in Nature's Lap",
  description: "Experience unparalleled comfort and luxury at Riviera Resort Rishikesh. Nestled in the serene landscapes of Rishikesh, our resort offers premium accommodations, stunning views, and exceptional service.",
  keywords: ["Riviera Resort Rishikesh", "Luxury resort in Rishikesh", "Nature stay Rishikesh", "Best resort in Rishikesh", "Premium accommodations Rishikesh", "Best resorts near Ganges"],
  alternates: {
    canonical: "https://rivierastrokes.com",
    languages: {
      "en-US": "https://rivierastrokes.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Riviera Resort Rishikesh | Luxury Stays in Nature's Lap",
    description: "Experience unparalleled comfort and luxury at Riviera Resort Rishikesh. Nestled in the serene landscapes of Rishikesh, our resort offers premium accommodations, stunning views, and exceptional service.",
    url: "https://rivierastrokes.com",
    siteName: "Riviera Resort Rishikesh",
    
    images: [
      {
        url: "https://rivierastrokes.com/og-image.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const HeaderData = {
  logo: {
    src: RivieraLogo,
    alt: "RivieraLogo",
  },
  contact: {
    label: "916398421691",
    href: "tel:+916398421691", // Corrected to tel: protocol
  },
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Rooms", href: "/rooms" },
    { label: "Gallery", href: "/gallery" },
    { label: "Events", href: "/events" },
    { label: "Wedding", href: "/wedding" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const FooterData = {
  logo: {
    src: RivieraLogoFooter,
    alt: "wabi-sabi-logo",
  },
  description: "Highest Rated Resort In Rishikesh, India.",
  getInTouch: {
    address: {
      label: "Rattanpani, Neelkanth Road, Rishikesh, India",
      href: "https://www.google.com/maps/place/Wabi-Sabi+Resort/@19.852701,73.638693,16z/data=!4m9!3m8!1s0x3bdd8d3a9975f549:0x43e791e38e708b2!5m2!4m1!1i2!8m2!3d19.8527005!4d73.6386926!16s%2Fg%2F11hf9gpmdq?hl=en&entry=ttu",
    },
    contact1: {
      label: "+916398421691",
      href: "tel:+916398421691", // Corrected to tel: protocol
    },
    contact2: {
      label: "+917817897700",
      href: "tel:+917817897700", // Corrected to tel: protocol
    },
    mail: {
      label: "rivieraresortrishikesh@gmail.com",
      href: "mailto:rivieraresortrishikesh@gmail.com", // Corrected to mailto: protocol
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
           !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=‘2.0’;
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,‘script’,
‘https://connect.facebook.net/en_US/fbevents.js’);
fbq(‘init’, ‘449577564181208’);
fbq(‘track’, ‘PageView’);
          `,
          }}
        />
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=449577564181208&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header {...HeaderData} />
        {children}
        <Footer {...FooterData} />
      </body>
    </html>
  );
}
