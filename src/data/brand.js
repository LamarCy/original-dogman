// Original Dogman — every fact on the site comes from here.
//
// The images are vendored into /public/images rather than hotlinked: the brief
// pointed at thesportinglifenotebook.com, and that content is being taken down.

// ── the one thing to change when the list is wired ──────────────────────────
// Supply the Kit (ConvertKit) form ID and the signup posts to Kit. Until then
// every "Get first word" control is a mailto, never a broken form.
export const KIT_FORM_ID = null;

export const brand = {
  name: 'Original Dogman',
  line: 'High-end, functional clothing and accessories for the sporting life. Made in limited runs, released when they’re right.',
  short: 'The clothing side of the notebook, cut for the field first and worn everywhere else after. One release so far. The next is on the bench.',
  founder: 'Durrell Smith — Atlanta, Ga.',
  contact: 'durrell.smith03@gmail.com',
  statement: [
    'Original Dogman is a brand I started a while back, before the notebook had a name for it: high-end, functional clothing and accessories for the sporting life, made in limited runs. It is the clothing side of everything else on these pages, the dogs, the field, the tradition, cut to be worn out there first and everywhere else after.',
    'The rule is the same as the paintings and the songs. Nothing is made in volume. A release is a small run, made right, and when it’s gone it’s gone.',
  ],
  rules: [
    ['Functional first.', 'Built to be hunted in.'],
    ['Limited runs.', 'A release is a small run, made right.'],
    ['When it’s gone, it’s gone.', ''],
    ['Part of The Sporting Life Notebook.', ''],
  ],
  parent: {
    name: 'The Sporting Life Notebook',
    url: 'https://thesportinglifenotebook.com/',
    chapter: 'https://thesportinglifenotebook.com/chapters/original-dogman/',
  },
};

export const releases = [
  {
    num: '01',
    title: 'Original Dogman Waxed Cotton Jacket',
    year: '2021',
    status: 'sold',
    materials: 'Waxed cotton · custom-printed textile lining · sustainable materials',
    description: 'A field-worn waxed cotton hunting jacket, lined with a custom-printed textile that patterns the Original Dogman wordmark with English Pointer silhouettes and bobwhite quail over typewritten field notes. The garment as wearable assemblage, finished by hand, one in a small run.',
    long: 'A field-worn waxed cotton hunting jacket designed by Durrell Smith, lined with a custom-printed textile patterning the Original Dogman wordmark with English Pointer silhouettes and bobwhite quail over typewritten field notes. The piece bridges studio practice and the sporting life: the garment as wearable assemblage, made from sustainable materials, finished by hand. One in a small run.',
    provenance: 'Sold. Displayed as an art piece in a private collection.',
    image: '/images/release-01-jacket.webp',
    detail: '/images/release-01-lining-detail.webp',
    alt: 'Original Dogman Waxed Cotton Jacket, open, showing the custom-printed lining.',
  },
  {
    num: '02',
    title: 'The next release',
    year: '2026',
    status: 'upcoming',
    description: 'On the bench now. A small run, made right, released when it’s ready. Join the list and you’ll hear first.',
  },
];

// The three strands a release can belong to. Order here drives the nav.
export const categories = [
  { slug: 'key-chains', label: 'Key chains',
    lede: 'Small things, carried every day.',
    blurb: 'Nothing has been released here yet. It will be a small run like everything else, and the list hears first.' },
  { slug: 'wearables', label: 'Wearables',
    lede: 'Cut for the field first, worn everywhere else after.',
    blurb: 'The clothing side of the brand \u2014 built to be hunted in, made in small runs, gone when it\u2019s gone.' },
  { slug: 'pet-memorials', label: 'Pet memorials',
    lede: 'One piece, sculpted from your own photographs.',
    blurb: 'Commissioned one at a time and finished by hand in the studio \u2014 not a shape from a catalogue.' },
  { slug: 'ornaments', label: 'Ornaments',
    lede: 'The same hand, cast small enough to hang.',
    blurb: 'Smaller casts made to hang \u2014 the sculpture work at a size that comes out once a year.' },
];

// Sculptures — commissioned one at a time, priced as one piece.
// Sourced from the existing memorials page; confirm the price before launch.
export const sculptures = [
  {
    title: 'Custom Pet Memorial Sculpture',
    price: '$950',
    blurb: 'One price. One piece. Sculpted from your photographs and finished by hand in the studio \u2014 not a shape from a catalogue.',
    status: 'commission',
  },
];

// Durrell's own photographs of a finished commission, carried over from the
// memorials page. Real work, not mockups — the same piece from several angles.
export const memorialGallery = [
  { src: '/images/memorial-01.webp', alt: 'A finished gold goldendoodle sculpture, left profile.' },
  { src: '/images/memorial-02.webp', alt: 'A finished goldendoodle commission from the studio, three-quarter view.' },
  { src: '/images/memorial-03.webp', alt: 'The same goldendoodle commission seen from behind, showing the coat texture.' },
  { src: '/images/memorial-04.webp', alt: 'The goldendoodle sculpture at rest, full length.' },
  { src: '/images/memorial-05.webp', alt: 'A close three-quarter view of the goldendoodle\u2019s head and shoulders.' },
  { src: '/images/memorial-06.webp', alt: 'A finished goldendoodle commission from the studio.' },
  { src: '/images/memorial-07.webp', alt: 'The house gold finish on a finished commission.' },
];

// Cast small enough to hang. Its own strand rather than a stray frame in the
// memorial gallery — it is visibly a different object.
export const ornaments = [
  { src: '/images/memorial-ornament.webp', alt: 'A gold English Setter ornament hanging on a lit tree.' },
];

export const mailto = (subject) =>
  `mailto:${brand.contact}?subject=${encodeURIComponent(subject)}`;
