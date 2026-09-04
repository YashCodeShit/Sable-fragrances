import verinag from './assets/images/verinag.jpg';
import homecoming from './assets/images/homecoming.jpg';
import theFirstDew from './assets/images/the_first_dew.jpg';
import dachigam from './assets/images/dachigam.jpg';
import theSunsetIris from './assets/images/the_sunset_iris.jpg';
import theBookmark from './assets/images/the_bookmark.jpg';
import theDeparture from './assets/images/the_departure.jpg';
import theWatchmaker from './assets/images/the_watchmaker.jpg';
import theAlibi from './assets/images/the_alibi.jpg';
import longShadows from './assets/images/long_shadows.jpg';
import pasbaan from './assets/images/pasbaan.jpg';
import theLastLetter from './assets/images/the_last_letter.jpg';
import deodarImg from './assets/images/sable_deodar_1788547950593.jpg';
import nubraImg from './assets/images/sable_nubra_1788547966312.jpg';
import lidderImg from './assets/images/sable_lidder_1788547981252.jpg';
import discoverySetImg from './assets/images/sable_discovery_set_1788547995747.jpg';
import { Perfume } from './types';

export const DISCOVERY_SET_HERO_IMAGE = discoverySetImg;

export const SABLE_EDITIONS_DATA: Perfume[] = [
  {
    id: 'deodar',
    name: 'DEODAR',
    chapter: 'SABLE EDITIONS',
    description: 'Radiant spices and sharp mountain air cut through deep, luminous woods.',
    price: 3190,
    image: deodarImg,
    occasions: ['Special Occasions', 'Evening', 'Signature', 'All Seasons'],
    olfactoryProfile: 'Woody • Radiant • Aromatic Spice',
    topNotes: ['Thai Basil', 'Nepalese Timut Pepper', 'Bergamot'],
    heartNotes: ['Himalayan Deodar Cedar', 'Haitian Vetiver', 'Floral Accents'],
    baseNotes: ['Akigalawood', 'Kashmiri Cedarwood', 'Ambrofix'],
    story: [
      'Long before our ancestors walked these mountains, the Deodar was already standing.',
      'Known in Kashmir’s oldest whispers as the Wood of the Gods, these silent giants do not measure time in years, but in centuries.',
      'They have watched kingdoms rise and fade, winter snows give way to spring water, and generation after generation pass beneath their ancient canopies. Yet through every storm, they remain unmoved holding the memory, air, and dignity of the land deep within their bark.',
      'Deodar is a fragrance crafted for the enduring.',
      'Radiant spices and sharp mountain air cut through deep, luminous woods, creating a presence that feels both modernly magnetic and timelessly immortal.',
      'We do not wear Deodar to be noticed today. We wear it to leave something behind that lasts forever.'
    ]
  },
  {
    id: 'nubra',
    name: 'NUBRA',
    chapter: 'SABLE EDITIONS',
    description: 'Luminous fruit and velvet florals surrender to a deep, sun-warmed amber.',
    price: 3090,
    image: nubraImg,
    occasions: ['Daywear', 'Evening', 'All Seasons', 'Warm Sanctuary'],
    olfactoryProfile: 'Fruity • Floral Amber • Luminous Wood',
    topNotes: ['Blackcurrant', 'Bergamot', 'Rose'],
    heartNotes: ['Patchouli', 'Earthy Notes', 'Jasmine'],
    baseNotes: ['Amber', 'Musk', 'Woody Accents'],
    story: [
      'High above the world lies a desert carved by wind and framed by ice.',
      'In the Nubra Valley, golden dunes ripple beneath an endless blue sky — a breathtaking contrast where sun-baked earth meets the crisp, biting cold of the mountain air.',
      'For centuries, caravans paused along these sands, leaving behind whispers of rare spices, precious resins, and warmth carried from distant lands.',
      'Nubra is the scent of that golden horizon.',
      'Luminous fruit and velvet florals surrender to a deep, sun-warmed amber, capturing the rare magic of a high-altitude sanctuary where time stands still and the sand glows like gold.',
      'Not all deserts are barren. Some hold the warm heart of the mountains.'
    ]
  },
  {
    id: 'lidder',
    name: 'LIDDER',
    chapter: 'SABLE EDITIONS',
    description: 'Crisp citrus and luminous aquatic air surrender to the chill of glacial waters.',
    price: 2790,
    image: lidderImg,
    occasions: ['Daywear', 'Summer', 'Fresh Mineral', 'Raw Vitality'],
    olfactoryProfile: 'Aquatic • Fresh Mineral • Citrus',
    topNotes: ['Bergamot', 'Sea Salt', 'Crisp Green Apple'],
    heartNotes: ['Glacial Water Notes', 'Rosemary', 'Geranium'],
    baseNotes: ['Cedarwood', 'Patchouli', 'Mineral Amber'],
    story: [
      'In the quiet shadows of Pahalgam, the Lidder river speaks in a whisper before it breaks into song.',
      'Carried down from the melting heart of glaciers, its turquoise spray dances through the pine-scented air — a cold, electric rush that leaves its soft mist lingering upon warm skin like an unforgotten touch.',
      'To stand together on its banks is to forget the world beyond the mountains.',
      'Lidder is the scent of unspoken longing and raw vitality.',
      'Crisp citrus and luminous aquatic air surrender to the chill of glacial waters, anchored by the deep, enduring warmth of wet earth and pine.',
      'Like a mountain stream chasing the valley below, some passions are simply impossible to tame.'
    ]
  }
];

export const DISCOVERY_SETS_DATA: Perfume[] = [
  {
    id: 'discovery-the-prelude',
    name: 'THE PRELUDE',
    chapter: 'DISCOVERY SET',
    description: 'An elegant trio introducing the evocative beginnings of the Sable world.',
    price: 890,
    image: discoverySetImg,
    isDiscoverySet: true,
    occasions: ['Discovery', 'Gifting', 'Travel', 'Exploration'],
    olfactoryProfile: '3 × 10 ml · ₹890',
    itemsInside: [
      'The First Dew — 10 ml',
      'The Departure — 10 ml',
      'The Bookmark — 10 ml'
    ],
    topNotes: ['The First Dew (10 ml)'],
    heartNotes: ['The Departure (10 ml)'],
    baseNotes: ['The Bookmark (10 ml)']
  },
  {
    id: 'discovery-the-midnight-trail',
    name: 'THE MIDNIGHT TRAIL',
    chapter: 'DISCOVERY SET',
    description: 'Dusk falls over mountain trails, nocturnal secrets, and midnight springs.',
    price: 890,
    image: discoverySetImg,
    isDiscoverySet: true,
    occasions: ['Evening', 'Mystery', 'Travel', 'Night Out'],
    olfactoryProfile: '3 × 10 ml · ₹890',
    itemsInside: [
      'The Departure — 10 ml',
      'The Alibi — 10 ml',
      'Verinag — 10 ml'
    ],
    topNotes: ['The Departure (10 ml)'],
    heartNotes: ['The Alibi (10 ml)'],
    baseNotes: ['Verinag (10 ml)']
  },
  {
    id: 'discovery-the-landscape-series',
    name: 'THE LANDSCAPE SERIES',
    chapter: 'SABLE EDITIONS',
    description: 'The untamed terrains of Deodar, Lidder, and Nubra captured in travel flacons.',
    price: 990,
    image: discoverySetImg,
    isDiscoverySet: true,
    occasions: ['Sable Editions', 'Exploration', 'High Altitude', 'Signature'],
    olfactoryProfile: 'SABLE EDITIONS · 3 × 10 ml · ₹990',
    itemsInside: [
      'Deodar — 10 ml',
      'Lidder — 10 ml',
      'Nubra — 10 ml'
    ],
    topNotes: ['Deodar — 10 ml (Wood of the Gods)'],
    heartNotes: ['Lidder — 10 ml (Glacial Turquoise)'],
    baseNotes: ['Nubra — 10 ml (High Desert Gold)']
  },
  {
    id: 'discovery-the-sable-archive',
    name: 'THE SABLE ARCHIVE',
    chapter: 'DISCOVERY SET',
    description: 'The comprehensive vault of five defining Sable chapters in signature travel format.',
    price: 1490,
    image: discoverySetImg,
    isDiscoverySet: true,
    occasions: ['Collector', 'Connoisseur', 'Complete Vault', 'Gifting'],
    olfactoryProfile: '5 × 10 ml · ₹1,490',
    itemsInside: [
      'The Alibi — 10 ml',
      'Verinag — 10 ml',
      'The Bookmark — 10 ml',
      'The Departure — 10 ml',
      'The Last Letter — 10 ml'
    ],
    topNotes: ['The Alibi (10 ml)', 'Verinag (10 ml)'],
    heartNotes: ['The Bookmark (10 ml)', 'The Departure (10 ml)'],
    baseNotes: ['The Last Letter (10 ml)']
  }
];

export const PERFUMES_DATA: Perfume[] = [
  {
    id: 'verinag',
    name: 'VERINAG',
    chapter: 'CHAPTER I',
    description: 'Every river begins with a single spring.',
    price: 2590,
    size: '100 ML',
    availableSizes: [
      { size: '30ml', label: '30 ML', price: 1190 },
      { size: '100ml', label: '100 ML', price: 2590 }
    ],
    image: verinag,
    occasions: ['Daywear', 'Office', 'Summer', 'Travel'],
    topNotes: ['Bergamot', 'Neroli', 'Ginger'],
    heartNotes: ['Tea', 'Green Apple', 'Orange Blossom'],
    baseNotes: ['Ambroxan', 'Musk', 'Sandalwood']
  },
  {
    id: 'homecoming',
    name: 'HOMECOMING',
    chapter: 'CHAPTER II',
    description: 'Before you see home, you breathe it.',
    price: 2690,
    size: '100 ML',
    image: homecoming,
    occasions: ['Daywear', 'Office', 'All Seasons', 'Smart Casual'],
    topNotes: ['Bergamot', 'Blackcurrant', 'Apple', 'Pineapple'],
    heartNotes: ['Birch', 'Patchouli', 'Jasmine', 'Rose'],
    baseNotes: ['Musk', 'Oakmoss', 'Ambroxan', 'Cedarwood']
  },
  {
    id: 'the-first-dew',
    name: 'THE FIRST DEW',
    chapter: 'CHAPTER III',
    description: 'Every spring, Kashmir remembers how to bloom.',
    price: 2790,
    size: '100 ML',
    availableSizes: [
      { size: '30ml', label: '30 ML', price: 1349 },
      { size: '100ml', label: '100 ML', price: 2790 }
    ],
    image: theFirstDew,
    occasions: ['Daywear', 'Casual', 'Spring', 'Summer'],
    topNotes: ['Passionfruit', 'Grapefruit', 'Pineapple'],
    heartNotes: ['Peony', 'Vanilla Orchid', 'Red Berries'],
    baseNotes: ['Musk', 'Woody Notes']
  },
  {
    id: 'dachigam',
    name: 'DACHIGAM',
    chapter: 'CHAPTER IV',
    description: 'Somewhere, between the cedar shadows, the Hangul is still counting seasons.',
    price: 2890,
    size: '100 ML',
    image: dachigam,
    occasions: ['Daywear', 'Office', 'All Seasons'],
    topNotes: ['Apple', 'Plum', 'Bergamot', 'Lemon'],
    heartNotes: ['Cinnamon', 'Mahogany', 'Carnation'],
    baseNotes: ['Sandalwood', 'Cedar', 'Vetiver', 'Olive Tree']
  },
  {
    id: 'the-sunset-iris',
    name: 'THE SUNSET IRIS',
    chapter: 'CHAPTER V',
    description: 'Uncultivated and Enduring.',
    price: 2790,
    size: '100 ML',
    availableSizes: [
      { size: '30ml', label: '30 ML', price: 1349 },
      { size: '100ml', label: '100 ML', price: 2790 }
    ],
    image: theSunsetIris,
    occasions: ['Evening', 'Dates', 'Autumn', 'Winter'],
    topNotes: ['Violet', 'Aldehydes'],
    heartNotes: ['Orris', 'Iris', 'Rose'],
    baseNotes: ['Musk', 'Amber', 'Sandalwood']
  },
  {
    id: 'the-bookmark',
    name: 'THE BOOKMARK',
    chapter: 'CHAPTER VI',
    description: 'Because some pages deserve another life.',
    price: 2490,
    size: '100 ML',
    availableSizes: [
      { size: '30ml', label: '30 ML', price: 1049 },
      { size: '100ml', label: '100 ML', price: 2490 }
    ],
    image: theBookmark,
    occasions: ['Daywear', 'Casual', 'Attire', 'All Seasons'],
    topNotes: ['Pear', 'Red Berries'],
    heartNotes: ['Gardenia', 'Frangipani', 'Jasmine'],
    baseNotes: ['Patchouli', 'Brown Sugar']
  },
  {
    id: 'the-departure',
    name: 'THE DEPARTURE',
    chapter: 'CHAPTER VII',
    description: 'Where will today take you?',
    price: 2490,
    size: '100 ML',
    availableSizes: [
      { size: '30ml', label: '30 ML', price: 1049 },
      { size: '100ml', label: '100 ML', price: 2490 }
    ],
    image: theDeparture,
    occasions: ['Day & Night', 'Travel', 'Weekends', 'Dates'],
    topNotes: ['Lavender', 'Mandarin', 'Blackcurrant'],
    heartNotes: ['Orange Blossom', 'Jasmine'],
    baseNotes: ['Vanilla', 'Musk', 'Cedar', 'Ambergris']
  },
  {
    id: 'the-watchmaker',
    name: 'THE WATCHMAKER',
    chapter: 'CHAPTER VIII',
    description: 'Some things should never be rushed.',
    price: 2590,
    size: '100 ML',
    image: theWatchmaker,
    occasions: ['Evening', 'Formal', 'Winter'],
    topNotes: ['Saffron', 'Raspberry', 'Thyme'],
    heartNotes: ['Olibanum', 'Jasmine'],
    baseNotes: ['Leather', 'Suede', 'Amber', 'Woody Notes']
  },
  {
    id: 'the-alibi',
    name: 'THE ALIBI',
    chapter: 'CHAPTER IX',
    description: 'Every secret begins with a good story.',
    price: 2690,
    size: '100 ML',
    image: theAlibi,
    occasions: ['Night Out', 'Parties', 'Winter'],
    topNotes: ['Cardamom'],
    heartNotes: ['Toffee', 'Lavender'],
    baseNotes: ['Amberwood', 'Vetiver']
  },
  {
    id: 'long-shadows',
    name: 'LONG SHADOWS',
    chapter: 'CHAPTER X',
    description: 'Some journeys begin after sunset.',
    price: 2890,
    size: '100 ML',
    image: longShadows,
    occasions: ['Evening', 'Winter', 'Special Occasions'],
    topNotes: ['Raspberry', 'Saffron'],
    heartNotes: ['Incense', 'Rose', 'Birch'],
    baseNotes: ['Amberwood', 'Oud', 'Leather', 'Benzoin']
  },
  {
    id: 'pasbaan',
    name: 'PASBAAN',
    chapter: 'CHAPTER XI',
    description: 'The strongest guardians are rarely seen.',
    price: 2590,
    size: '100 ML',
    image: pasbaan,
    occasions: ['Evening', 'Winter', 'Moments of Strength'],
    topNotes: ['Green Notes', 'Cannabis'],
    heartNotes: ['Incense', 'Resin', 'Woody Notes'],
    baseNotes: ['Agarwood (Oud)', 'Tobacco', 'Coffee']
  },
  {
    id: 'the-last-letter',
    name: 'THE LAST LETTER',
    chapter: 'CHAPTER XII',
    description: 'Some words arrive long after they\'re written.',
    price: 2690,
    size: '100 ML',
    availableSizes: [
      { size: '30ml', label: '30 ML', price: 1290 },
      { size: '100ml', label: '100 ML', price: 2690 }
    ],
    image: theLastLetter,
    occasions: ['Daywear', 'Casual', 'Spring', 'Autumn'],
    topNotes: ['Strawberry', 'Raspberry', 'Cherry', 'Blackberry'],
    heartNotes: ['Peony', 'Violet', 'Jasmine'],
    baseNotes: ['Musk', 'Amber', 'Woody Notes']
  }
];
