export const SITE = {
  name: "Summit Climate Co.",
  tagline: "Denver's premium heating & cooling experts",
  phone: "(720) 555-0140",
  phoneHref: "tel:+17205550140",
  email: "service@summitclimate.co",
  address: {
    street: "4180 W 38th Ave, Suite 220",
    city: "Denver",
    state: "CO",
    zip: "80212",
  },
  hours: "Mon–Sun · 24/7 Emergency Service",
  license: "CO MASTER MECHANICAL LIC #ME.00128443",
  established: 2011,
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    google: "https://google.com",
  },
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/emergency", label: "24/7 Emergency" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICE_AREAS = [
  "Denver", "Aurora", "Lakewood", "Centennial", "Westminster",
  "Arvada", "Thornton", "Boulder", "Englewood", "Littleton",
  "Highlands Ranch", "Wheat Ridge", "Broomfield", "Golden", "Parker",
  "Castle Rock", "Commerce City", "Northglenn", "Louisville", "Superior",
];