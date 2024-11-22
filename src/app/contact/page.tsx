import React from "react";
import Banner from "@/components/banner/banner";
import ContactBackground from "../../../public/Photos/DSC01690_11zon.webp";
import ContactForm from "./components/contact-form";
import Makeroomforadventure from "../(home)/components/makeroomforadventure";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Contact Riviera Resort Rishikesh | Get in Touch",
  description: "Reach out to Riviera Resort Rishikesh for bookings, inquiries, and more. We're here to assist you in planning your perfect getaway.",
  keywords: ["Contact Riviera Resort Rishikesh", "Bookings", "Inquiries", "Bookings at Riviera Resort", "Contact luxury resorts Rishikesh", "Riviera Resort support"],
  alternates: {
    canonical: "https://rivierastrokes.com/contact/",
    languages: {
      "en-US": "https://rivierastrokes.com/contact/",
    }
  },
  openGraph: {
    title: "Contact Riviera Resort Rishikesh | Get in Touch",
    description: "Reach out to Riviera Resort Rishikesh for bookings, inquiries, and more. We're here to assist you in planning your perfect getaway.",
    url: "https://rivierastrokes.com/contact/",
    siteName: "Riviera Resort Rishikesh",

    images: [
      {
        url: "https://rivierastrokes.com/contact/og-image.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const BannerData = {
  subtitle: "",
  title: "",
  image: {
    src: ContactBackground,
    alt: "event-bg-image",
  },
};

function page() {
  return (
    <section>
      <Banner {...BannerData} />

      <div className="py-12">
        <ContactForm />
      </div>

      <div className="py-12">
        <Makeroomforadventure />
      </div>
    </section>
  );
}

export default page;
