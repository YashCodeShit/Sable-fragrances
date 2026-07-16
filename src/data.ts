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
import { Perfume } from './types';

export const PERFUMES_DATA: Perfume[] = [
  {
    id: 'verinag',
    name: 'VERINAG',
    chapter: 'CHAPTER I',
    description: 'Every river begins with a single spring.',
    price: 2590,
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
    image: theLastLetter,
    occasions: ['Daywear', 'Casual', 'Spring', 'Autumn'],
    topNotes: ['Strawberry', 'Raspberry', 'Cherry', 'Blackberry'],
    heartNotes: ['Peony', 'Violet', 'Jasmine'],
    baseNotes: ['Musk', 'Amber', 'Woody Notes']
  }
];
