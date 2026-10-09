export interface ClientLogo {
  name: string;
  id: string;
}

export interface ServiceItem {
  id: string;
  kicker: string;
  title: string;
  description: string;
  capabilities: string[];
  ctaText: string;
  ctaHref: string;
  visualType: "strategy" | "identity" | "digital" | "campaign";
  imageSrc: string;
}


export interface SiteContent {
  meta: {
    title: string;
    description: string;
    canonicalUrl: string;
    ogImage: string;
  };
  navigation: {
    brandName: string;
    contactButtonText: string;
    contactHref: string;
  };
  hero: {
    headlineTop: string;
    headlineMiddle: string;
    headlineBottom: string;
    leftNote1: {
      line1: string;
      line2: string;
      circledWord: string;
    };
    leftNote2: {
      items: string[];
      underlinedWord: string;
    };
    rightNote: {
      line1: string;
      line2: string;
      underlinedPhrase: string;
    };
    bustImage: {
      src: string;
      modelSrc?: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  socialProof: {
    statNumber: string;
    statLabel: string;
    clients: ClientLogo[];
  };
  services: {
    sectionBadge: string;
    items: ServiceItem[];
  };
  footer: {
    headlineWord1: string;
    headlineWord2: string;
    symbolImage: string;
    channels: Array<{
      title: string;
      url: string;
      description: string;
      email: string;
    }>;
    newsletter: {
      heading: string;
      consentText: string;
      placeholder: string;
      buttonText: string;
      successMessage: string;
    };
    tagline: string;
    socialLinks: Array<{ label: string; href: string }>;
    legalLinks: Array<{ label: string; href: string }>;
    copyright: string;
  };

}

export const siteContent: SiteContent = {
  meta: {
    title: "Upthrust — BOLD DESIGN That Performs",
    description:
      "Upthrust is a strategic design and digital experience agency crafting identities, digital products, and motion that drive high-impact business growth.",
    canonicalUrl: "https://upthrust.agency",
    ogImage: "/pic2.png",
  },
  navigation: {
    brandName: "Upthrust",
    contactButtonText: "CONTACT US",
    contactHref: "#contact",
  },
  hero: {
    headlineTop: "BOLD DESIGN",
    headlineMiddle: "THAT",
    headlineBottom: "PERFORMS",
    leftNote1: {
      line1: "STRATEGY IS",
      line2: "CHEAPER",
      circledWord: "CHEAPER",
    },
    leftNote2: {
      items: ["IDENTITY", "EXPERIENCE", "MOTION"],
      underlinedWord: "MOTION",
    },
    rightNote: {
      line1: "COMFORTABLE",
      line2: "IS EXPENSIVE",
      underlinedPhrase: "IS EXPENSIVE",
    },
    bustImage: {
      src: "/pic2.png",
      modelSrc: "/statue.glb",
      alt: "Upthrust iridescent neoclassical Venus bust",
      width: 600,
      height: 750,
    },
  },
  socialProof: {
    statNumber: "100+",
    statLabel: "Brands trusted us to define how they're seen.",
    clients: [
      { name: "zomato", id: "zomato" },
      { name: "BOSCH", id: "bosch" },
      { name: "L'ORÉAL", id: "loreal" },
      { name: "VEGA", id: "vega" },
      { name: "DELL", id: "dell" },
      { name: "L'ORÉAL", id: "loreal-2" },
    ],
  },
  services: {
    sectionBadge: "SERVICES",
    items: [
      {
        id: "strategy-insight",
        kicker: "WHAT CAN WE DO FOR YOU",
        title: "Strategy and Insight",
        description:
          "We interrogate what others assume. Then we build the brief behind the brief.",
        capabilities: [
          "Brand strategy & positioning",
          "Messaging & tone of voice",
          "Audience & competitor research",
          "Workshops & creative sprints",
        ],
        ctaText: "CONTACT",
        ctaHref: "#contact",
        visualType: "strategy",
        imageSrc: "/pasted_svg_5_render.png",
      },

      {
        id: "brand-identity",
        kicker: "WHAT CAN WE DO FOR YOU",
        title: "Brand & visual identity",
        description:
          "We build systems, not just logos. So you own the category, not just the conversation.",
        capabilities: [
          "Brand identity & visual language",
          "Guidelines & naming",
          "Illustration & iconography",
          "Brand architecture & systems",
        ],
        ctaText: "CONTACT",
        ctaHref: "#contact",
        visualType: "identity",
        imageSrc: "/pasted_svg_6_render.png",
      },
      {
        id: "product-digital",
        kicker: "WHAT CAN WE DO FOR YOU",
        title: "Product & digital experience",
        description:
          "We design for humans and metrics. So users stay, engage, and come back.",
        capabilities: [
          "UI/UX & website design",
          "Design systems & prototyping",
          "User research & testing",
          "Motion graphics & micro-interactions",
        ],
        ctaText: "CONTACT",
        ctaHref: "#contact",
        visualType: "digital",
        imageSrc: "/pasted_svg_3_render.png",
      },
      {
        id: "creative-campaign",
        kicker: "WHAT CAN WE DO FOR YOU",
        title: "Creative & campaign production",
        description:
          "We turn attention into action. Then we prove it worked.",
        capabilities: [
          "Campaign creative & social content",
          "Presentations & pitch decks",
          "Marketing collateral & ad creative",
          "Spatial & physical experiences (exhibitions, placemaking & branded environments)",
        ],
        ctaText: "CONTACT",
        ctaHref: "#contact",
        visualType: "campaign",
        imageSrc: "/service-mockup-4.png",
      },
    ],
  },
  footer: {
    headlineWord1: "UPTHRUST",
    headlineWord2: "DESIGN",
    symbolImage: "/pic3.png",
    channels: [
      {
        title: "upthrust.agency",
        url: "https://upthrust.agency",
        description: "add description here",
        email: "hello@upthrust.agency",
      },
      {
        title: "upthrust.io",
        url: "https://upthrust.io",
        description: "add description here",
        email: "hello@upthrust.io",
      },
    ],
    newsletter: {
      heading: "Sign up for our emails",
      consentText:
        "By checking this box sign up for our newsletter and receive marketing emails and updates on our services. You can unsubscribe at any time.",
      placeholder: "typehere@youremail.com",
      buttonText: "Submit",
      successMessage: "Thank you for subscribing! Your email has been saved.",
    },
    tagline: "Lorem ipsum dolor sit amet consectetur",
    socialLinks: [
      { label: "Instagram, LinkedIn", href: "https://instagram.com" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "#privacy" },
    ],
    copyright: "© Upthrust Design",
  },
};
