import Banner from "@/components/banner/banner";
import React from "react";
import Roomsandaccomodation from "../(home)/components/roomsandaccomodation";
import Hotelfacilities from "./components/hotelfacilities";

import {
  AirConditioning,
  BedService,
  CardCredit,
  Cloth,
  Cup,
  FoodService,
  FreeWifi,
  Heater,
  HotelFood,
  HouseKeeping,
  Jacuzzi,
  Lotus,
  MiniBaar,
  Parking,
  PlateWithSpoon,
  Verified,
  Wifi,
} from "@/icons/icons";

import Pre1 from "../../../public/Photos/premium/DSC01498-HDR_11zon.jpg";
import Pre2 from "../../../public/Photos/premium/DSC01504-HDR_11zon.jpg";
import Pre3 from "../../../public/Photos/premium/DSC01509-HDR_11zon.jpg";
import Pre4 from "../../../public/Photos/premium/DSC01537_11zon.jpg";

import lux1 from "../../../public/Photos/LuxPre/DSC01591-HDR_11zon.jpg";
import lux2 from "../../../public/Photos/LuxPre/DSC01592-HDR_11zon.jpg";
import lux3 from "../../../public/Photos/LuxPre/DSC01602-HDR_11zon.jpg";
import lux4 from "../../../public/Photos/LuxPre/DSC01607-HDR_11zon.jpg";
import lux5 from "../../../public/Photos/LuxPre/DSC01612-HDR_11zon.jpg";

import sup1 from "../../../public/Photos/suite/DSC01355-HDR_11zon.jpg";
import sup2 from "../../../public/Photos/suite/DSC01366-HDR_11zon.jpg";
import sup3 from "../../../public/Photos/suite/DSC01375-HDR_11zon.jpg";
import sup4 from "../../../public/Photos/suite/DSC01438-HDR_11zon.jpg";
import sup5 from "../../../public/Photos/suite/DSC01459-HDR_11zon.jpg";

import deluxSuite from "../../../public/Photos/DeluxSuite/Suite with Bathtub.webp";

import RoomBackground from "../../../public/Photos/LuxPre/DSC01607-HDR_11zon.webp";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Luxurious Rooms at Riviera Resort Rishikesh | Book Your Stay",
  description: "Explore our elegant rooms at Riviera Resort Rishikesh. From cozy suites to opulent accommodations, find your perfect retreat with premium amenities.",
  keywords: ["Luxurious Rooms", "Riviera Resort Rishikesh", "Book Your Stay", "Cozy Suites", "Opulent Accommodations", "Premium Amenities", "Rooms at Riviera Resort",
    "Luxury suites Rishikesh",
    "Premium accommodations Rishikesh",
    "Comfortable stays near Ganges",
    "Rishikesh resort rooms"],
  alternates: {
    canonical: "https://rivierastrokes.com/rooms/",
    languages: {
      "en-US": "https://rivierastrokes.com/rooms/",
    },
    types: {
      "text/html": "https://rivierastrokes.com/rooms/",
    },
  },

  openGraph: {
    title: "Luxurious Rooms at Riviera Resort Rishikesh | Book Your Stay",
    description: "Explore our elegant rooms at Riviera Resort Rishikesh. From cozy suites to opulent accommodations, find your perfect retreat with premium amenities.",
    url: "https://rivierastrokes.com/rooms/",
    siteName: "Riviera Stokes",
    images: [
      {
        url: "https://rivierastrokes.com/rooms/og-image.png",
        width: 1920,
        height: 1080,
      },
    ],
  },
};

const BannerData = {
  subtitle: "",
  title: "",
  image: {
    src: RoomBackground,
    alt: "room-bg-image",
  },
};

const RoomsAccomodationData = {
  title: "Rooms and Accomodation",
  subtitle: "",
  items: [
    {
      title: "Deluxe Room",
      subtitle:
        "Experience the ultimate blend of comfort and luxury in our Deluxe Rooms at Riviera Resort, Rishikesh. Ideal for couples or small families, these rooms are designed with modern amenities to ensure a relaxing stay amidst the natural beauty of Rishikesh. The rooms feature large, airy windows that bring in plenty of natural light, offering stunning views of the surrounding landscape. Each room is air-conditioned and well-appointed with cozy furnishings, creating a tranquil retreat after a day of exploration.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        {
          src: lux1,
          alt: "document1",
        },
        {
          src: lux2,
          alt: "document1",
        },
        {
          src: lux3,
          alt: "document1",
        },
        {
          src: lux4,
          alt: "document1",
        },
        {
          src: lux5,
          alt: "document1",
        },
      ],

      link: {
        label: "Book now",
        href: "https://engine.eazotel.com/?id=b3818c66-af22-4bb4-8bb6-922fb127d974&hid=35513674",
      },
    },

    {
      title: "Superior Rooms",
      subtitle:
        "Elevate your stay with our Superior Rooms, offering breathtaking views from every angle. These rooms are situated above ground level, providing a serene escape with unobstructed vistas of the surrounding natural beauty. Each room is fully air-conditioned and features a spacious, well-appointed bedroom. The expansive private balcony is the perfect spot to relax and soak in the stunning scenery of the dam and the lush landscape around you. At Riviera Resort, luxury takes on a new meaning with these exceptional accommodations.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        {
          src: sup1,
          alt: "document1",
        },
        {
          src: sup2,
          alt: "document1",
        },
        {
          src: sup3,
          alt: "document1",
        },
        {
          src: sup4,
          alt: "document1",
        },
        {
          src: sup5,
          alt: "document1",
        },
      ],

      link: {
        label: "Book now",
        href: "https://engine.eazotel.com/?id=b3818c66-af22-4bb4-8bb6-922fb127d974&hid=35513674",
      },
    },

    {
      title: "Interconnecting Rooms",
      subtitle:
        "Perfect for families or groups traveling together, our Interconnecting Rooms offer the ideal balance of privacy and togetherness. Elevated above ground level, these rooms provide expansive views of the stunning surroundings. Each room is fully air-conditioned and thoughtfully designed with comfortable furnishings to ensure a relaxing stay. With the convenience of connecting doors, you can enjoy easy access between rooms while still maintaining your own private space. Experience the beauty of nature and the comfort of modern amenities, all from the convenience of your interconnected retreat.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        {
          src: sup1,
          alt: "document1",
        },
        {
          src: sup2,
          alt: "document1",
        },
        {
          src: sup3,
          alt: "document1",
        },
        {
          src: sup4,
          alt: "document1",
        },
        {
          src: sup5,
          alt: "document1",
        },
      ],

      link: {
        label: "Book now",
        href: "https://engine.eazotel.com/?id=b3818c66-af22-4bb4-8bb6-922fb127d974&hid=35513674",
      },
    },

    {
      title: "Suite",
      subtitle:
        "Elevated above ground level to offer panoramic views, our Suites redefine luxury and lifestyle at Riviera Resort, Rishikesh. Each Suite features a fully air-conditioned bedroom, providing a cool and comfortable retreat after a day of exploration. The spacious private balcony and inviting sit-out area are perfect for soaking in the breathtaking views of the dam and the surrounding natural beauty. Whether you’re relaxing indoors or enjoying the outdoor scenery, our Suites offer an exceptional experience where nature meets luxury.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        {
          src: Pre1,
          alt: "document1",
        },
        {
          src: Pre3,
          alt: "document1",
        },
        {
          src: Pre4,
          alt: "document1",
        },
        {
          src: Pre2,
          alt: "document1",
        },
      ],

      link: {
        label: "Book now",
        href: "https://engine.eazotel.com/?id=b3818c66-af22-4bb4-8bb6-922fb127d974&hid=35513674",
      },
    },

    {
      title: "Deluxe Suite",
      subtitle:
        "Elevated above ground level to offer a pleasing view throughout, our Deluxe Suites at Riviera Resort provide a truly luxurious experience. Each suite features a fully air-conditioned bedroom and an expansive private balcony, perfect for enjoying the stunning views of the mountains and the magnificent natural scenery that surrounds you. The well-designed sit-out area offers a tranquil space to unwind and take in the beauty of nature. Here, luxury and lifestyle are redefined, offering a unique blend of comfort and elegance.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        {
          src: deluxSuite,
          alt: "document1",
        },
        {
          src: deluxSuite,
          alt: "document1",
        },
        {
          src: deluxSuite,
          alt: "document1",
        },
        {
          src: deluxSuite,
          alt: "document1",
        },
        {
          src: deluxSuite,
          alt: "document1",
        },
      ],

      link: {
        label: "Book now",
        href: "https://engine.eazotel.com/?id=b3818c66-af22-4bb4-8bb6-922fb127d974&hid=35513674",
      },
    },

    {
      title: "Premium Suite",
      subtitle:
        "Experience the epitome of comfort and luxury in our Premium Suites at Riviera Resort, Rishikesh. These suites offer spacious living and bedroom areas, complete with full-height glass windows and doors that frame stunning views of the surrounding nature. Magnificent furniture, handpicked flooring, and matte-finished sanitary ware combine to create an atmosphere of refined elegance. The thoughtfully designed interiors ensure a cozy, luxurious stay, making your time here truly delightful.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        {
          src: Pre1,
          alt: "document1",
        },
        {
          src: Pre2,
          alt: "document1",
        },
        {
          src: Pre3,
          alt: "document1",
        },
        {
          src: Pre4,
          alt: "document1",
        },
      ],

      link: {
        label: "Book now",
        href: "https://engine.eazotel.com/?id=b3818c66-af22-4bb4-8bb6-922fb127d974&hid=35513674",
      },
    },
  ],
};

const HotelfacilitiesData = {
  title: "Hotel Facilities",
  subtitle: "Discover Unmatched Luxury and Comfort at Riviera Resort Rishikesh",
  items: [
    {
      title: "Private Parking",
      isTrue: true,
      icon: <Parking />,
    },

    {
      title: "Room Service",
      isTrue: true,
      icon: <HotelFood />,
    },
    {
      title: "House Keeping",
      isTrue: true,
      icon: <HouseKeeping />,
    },

    {
      title: "Free Wifi",
      isTrue: true,
      icon: <FreeWifi />,
    },
    {
      title: "Credit Card",
      isTrue: true,
      icon: <CardCredit />,
    },
    {
      title: "Jacuzzi",
      isTrue: true,
      icon: <Jacuzzi />,
    },
    {
      title: "Air Conditioning",
      isTrue: true,
      icon: <AirConditioning />,
    },
    {
      title: "Mini Bar",
      isTrue: true,
      icon: <MiniBaar />,
    },
    {
      title: "Accepts Card",
      isTrue: true,
      icon: <CardCredit />,
    },

    {
      title: "Lorem Ipsum",
      isTrue: true,
      icon: <HotelFood />,
    },
  ],
};

export default function page() {
  return (
    <section>
      <div className="max-w-[1600px] mx-auto">
        <Banner {...BannerData} />
      </div>

      <div className="py-12">
        <Roomsandaccomodation {...RoomsAccomodationData} />
      </div>

      {/* <div className="py-12">
        <Hotelfacilities {...HotelfacilitiesData} />
      </div> */}
    </section>
  );
}
