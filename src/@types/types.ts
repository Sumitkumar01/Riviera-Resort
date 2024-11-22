import { StaticImageData } from "next/image";
import React from "react";

// @header types****
export interface HeaderProps {
  logo: {
    src: string | StaticImageData;
    alt: string;
  };
  contact: {
    label: string;
    href: string;
  };
  links: {
    label: string;
    href: string;
  }[];
}

// @footer types****
export interface FooterProps {
  logo: {
    src: string | StaticImageData;
    alt: string;
  };
  description?: string;
  getInTouch: {
    address: {
      label: string;
      href: string;
    };
    contact1: {
      label: string;
      href: string;
    };
    contact2: {
      label: string;
      href: string;
    };
    mail: {
      label: string;
      href: string;
    };
  };
}

// @bannerProps ****
export interface BannerProps {
  subtitle: string;
  title: string;
  image?: {
    src: string | StaticImageData;
    alt: string;
  };
  video?: {
    src: string | StaticImageData;
    alt: string;
  };
  embedVideo?: {
    src: string;
    link: string;
  }
}

// @aboutprops***
export interface AboutProps {
  sectionHeading?: string;
  title?: string;
  subtitle?: string;
  para?: string;
  paraTwo?: string;
  images: {
    src: string | StaticImageData;
    alt: string;
  }[];
  link: {
    label: string;
    href: string;
  };
}

// @rooms and accodomation types****
export interface RoomsAndAccomodationProps {
  title: string;
  subtitle: string;
  button?: boolean;
  items: RoomsCardProps[];
}

export interface RoomsCardProps {
  title: string;
  index?: number;
  subtitle: string;
  accomodation: {
    icon: React.ReactNode;
    isTrue: boolean;
  }[];
  link: {
    label: string;
    href: string;
  };
  images: {
    src: string | StaticImageData;
    alt: string;
  }[];
}

// @types customer-reviews props

export interface CustomerReviewsProps {
  title?: string;
  items: {
    heading: string;
    subheading: string;
  }[];
}

// @events types***
export interface EventsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  para?: string;

  image: {
    src: string | StaticImageData;
    alt: string;
  };

  activities?: {
    title: string;
    subtitle: string;
    link: {
      label: string;
      href: string;
    };
  };

  link: {
    label: string;
    href: string;
  };

  items?: {
    src: string | StaticImageData;
    alt: string;
  }[];
}

// @nearbyplaces types***
export interface NearbyPlacesProps {
  title?: string;
  outdoor: boolean,
  items: {
    title: string;
    para: string
    image: {
      src: string;
      alt: string;
    };
  }[];
}

// @hotelfacilites types***
export interface HotelFacilitiesProps {
  title?: string;
  subtitle?: string;
  items: {
    title?: string;
    isTrue: boolean;
    icon: React.ReactNode;
  }[];
}

// @history types***
export interface HistoryProps {
  title: string;
  subtitle?: string;

  image1: {
    src: string | StaticImageData;
    alt: string;
  };
  image2: {
    src: string | StaticImageData;
    alt: string;
  };
  paraone: string;
  paratwo?: string;

  link: {
    label: string;
    href: string;
  };
}
export interface ListDataType {
  head: string;
  para: string;
}

// @ourservices types***
export interface OurServicesProps {
  items: {
    title: string;
    image: {
      src: string | StaticImageData;
      alt: string;
    };
  }[];
}

// @fairytale types***
export interface FairytaleProps {
  title: string;
  subtitle: string;
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  link: {
    label: string;
    href: string;
  };
}

// @wedding card props*****
export interface WeddingEventsProps {
  items: WeddingCardProps[];
}

export interface WeddingCardProps {
  title: string;
  index?: number;
  subtitle: string;
  link: {
    label: string;
    href: string;
  };
  images: {
    src: string | StaticImageData;
    alt: string;
  }[];
}
