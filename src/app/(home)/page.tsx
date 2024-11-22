import Banner from "@/components/banner/banner";
import Aboutus from "./components/aboutus";
import Roomsandaccomodation from "./components/roomsandaccomodation";
import Pre1 from "../../../public/Photos/premium/DSC01498-HDR_11zon.jpg";
import Pre2 from "../../../public/Photos/premium/DSC01504-HDR_11zon.jpg";
import Pre3 from "../../../public/Photos/premium/DSC01509-HDR_11zon.jpg";
import Pre4 from "../../../public/Photos/premium/DSC01537_11zon.jpg";
import lux1 from "../../../public/Photos/LuxPre/DSC01591-HDR_11zon.jpg";
import lux2 from "../../../public/Photos/LuxPre/DSC01592-HDR_11zon.jpg";
import lux3 from "../../../public/Photos/LuxPre/DSC01602-HDR_11zon.jpg";
import lux4 from "../../../public/Photos/LuxPre/DSC01607-HDR_11zon.jpg";
import lux5 from "../../../public/Photos/LuxPre/DSC01612-HDR_11zon.jpg";
import HomeBackground from "../../../public/Photos/ResortView/Homebanner_11zon.jpg";
// import Nearby1 from "../../../public/Photos/DSC01391-HDR.jpg";
// import Nearby2 from "../../../public/Photos/DSC01391-HDR.jpg";
// import Nearby3 from "../../../public/Photos/DSC01391-HDR.jpg";
// import Nearby4 from "../../../public/Photos/DSC01391-HDR.jpg";

// import Activities1 from "../../../public/Photos/DSC01391-HDR.jpg";
// import Activities2 from "../../../public/Photos/DSC01391-HDR.jpg";
import {
  BedService,
  Cloth,
  Cup,
  FoodService,
  Heater,
  Lotus,
  PlateWithSpoon,
  Verified,
  Wifi,
  AirConditioning,
  CardCredit,
  FreeWifi,
  HotelFood,
  HouseKeeping,
  Jacuzzi,
  MiniBaar,
  Parking,
  Swimming,
  Restaurant,
} from "@/icons/icons";
import Events from "./components/events";
import Nearby from "./components/nearby";
import Makeroomforadventure from "./components/makeroomforadventure";
import Checkinout from "./components/check-in-out";

import AboutImg from "../../../public/Photos/about_11zon.jpg";
import CustomerReviews from "./components/customer-reviews";
import ExperienceCard from "./components/experienceCard";
import Hotelfacilities from "../rooms/components/hotelfacilities";
import { BannerProps } from "@/@types/types";

const BannerData: BannerProps = {
  title: "We are an Ultimate Stop for Resort in Rishikesh",
  subtitle:
    "Explore the best resorts with us and make your trip a special one for your family",
  // video: {
  //   // src: "https://youtu.be/8K4b7rjYOn4?si=BGUNZ15fN9gNpe6a",
  //   src: "https://youtu.be/BlUhvYchmV4",
  //   alt: "event-bg-image",
  // },
  embedVideo: {
    src: "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/Riviera+Riverside+Resort%2C+Rishikesh.mp4",
    link: "https://youtu.be/BlUhvYchmV4",
  },
  // image: {
  //   src: "",
  //   alt: "event-bg-image",
  // },
};

const AboutData = {
  title: "The ultimate luxury getaway in Rishikesh!",
  subtitle:
    "Welcome to Riviera Resort, a luxurious haven for discerning nature lovers. Nestled at the foot of the Garhwal Himalayas in Rishikesh, our secluded sanctuary celebrates the timeless beauty of the Ganges River. Enjoy spacious, elegantly designed suites adorned with nature-inspired decor, ensuring comfort and serenity. Each room offers breathtaking views of the valley, forest-laden hills, and the majestic river. Our gourmet restaurant serves exquisite meals with stunning nature views. For a luxurious, tranquil retreat amidst nature, look no further than Riviera Resort.",

  link: {
    label: "ABOUT US",
    href: "/about",
  },
  images: [
    {
      src: AboutImg,
      alt: "about-img",
    },
  ],
};

const RoomsAccomodationData = {
  title: "Rooms and Accomodation",
  subtitle:
    "Riviera Resort offers 17 luxurious, spacious suites, each designed for your utmost comfort. Our suites feature king-size beds, modern amenities, and are fully air-conditioned. Enjoy the luxury of a private bathtub in each suite, complemented by panoramic views of the landscaped garden, mountains, and the dam. Experience the ultimate relaxation in a sophisticated, nature-infused ambience.",

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
  button: true,
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
      title: "Swimming Pool",
      isTrue: true,
      icon: <Swimming />,
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
      title: "Restaurant",
      isTrue: true,
      icon: <Restaurant />,
    },
  ],
};

const EventsData = {
  title: "Events",
  subtitle:
    "The very important day of your life needs to be best! Be it Birthday party or a Traditional event, witness a heavenly experience at Wabi-Sabi. While planning an event, convenience is the first thing that enters the check-list. Wabi-Sabi is nestled at a location close to Mumbai and Nashik, with good connectivity to the resort.",
  description:
    "Host your fun-filled affair with complete tailor-made arrangements, flexibly accommodate 75 guests and we would ensure flawless hospitality for your event to be a super remarkable memory.",
  link: {
    label: "Explore",
    href: "/",
  },
  image: {
    src: "",
    alt: "document",
  },

  activities: {
    title: "Activities",
    subtitle:
      "At Wabi-Sabi, we offer a diverse range of activities designed to suit all ages and interests. Enjoy roller skating along our scenic pathways, explore the beautiful surroundings with guided nature walks, or engage in outdoor games on our expansive lawns. Participate in creative workshops such as painting, crafting, and photography, or relax with wellness programs including yoga sessions and guided meditation. Discover the perfect activity to make your visit unforgettable.",
    link: {
      label: "Book Now",
      href: "https://engine.eazotel.com/?id=b3818c66-af22-4bb4-8bb6-922fb127d974&hid=35513674",
    },
  },

  items: [
    {
      src: "",
      alt: "document",
    },
    {
      src: "",
      alt: "document",
    },
  ],
};

const CustomerReviewsData = {
  title: "Customer Reviews",
  items: [
    {
      heading: "Ayu Gupta",
      subheading:
        "We had an amazing stay at Riviera Resort in Rishikesh. The views were incredible, and the riverside location was perfect. The staff was very friendly and made us feel welcome. The food was delicious too",
    },
    {
      heading: "Ananya Gupta",
      subheading:
        "Our time at Riviera Resort in Rishikesh was fantastic. The resort has the best views in Rishikesh, and the riverside location is beautiful. The hospitality was great, with the staff being very helpful and kind",
    },
    {
      heading: "Srishti Tomar",
      subheading:
        "This hotel is situated at a very beautiful place ( the mountains and the adorable ganga river) and the behaviour of whole staff was extremely good, kind and humble. The rooms and washroom were very clean",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <div className="max-w-[1600px] mx-auto">
        <Banner {...BannerData} />
      </div>

      {/* <div className="md:py-12 py-6 px-4">
        <Checkinout />
      </div> */}

      <div className="md:py-12 py-4">
        <Aboutus {...AboutData} />
      </div>

      <div className="md:py-12 py-6">
        <Roomsandaccomodation {...RoomsAccomodationData} />
      </div>

      {/* <div className="md:py-12 py-6">
        <Events {...EventsData} />
      </div> */}
      <div className="md:py-12 py-6">
        <Hotelfacilities {...HotelfacilitiesData} />
      </div>

      <div className="md:py-12 py-6">
        <Nearby />
      </div>
      <div className="md:py-12 py-6">
        <ExperienceCard />
      </div>

      <div className="md:py-12 py-6">
        <CustomerReviews {...CustomerReviewsData} />
      </div>

      {/* <div className="md:py-12 py-6 px-4">
        <Makeroomforadventure />
      </div> */}
    </main>
  );
}
