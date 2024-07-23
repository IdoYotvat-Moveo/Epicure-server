import { EiconMeaning } from "./api/v1/enum/icon"

const chefsData = [
  { name: 'Ran Shmueli', bio: 'Top chef in Tel Aviv', image: 'placeholder.png', isChefOfTheWeek: false },
  { name: 'Meir Adoni', bio: 'Famous chef known for his unique dishes', image: 'placeholder.png', isChefOfTheWeek: false },
  { name: 'Yanir Green', bio: 'Renowned chef with a passion for cooking', image: 'placeholder.png', isChefOfTheWeek: false },
  { name: 'Yossi Shitrit', bio: 'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades...', image: 'placeholder.png', isChefOfTheWeek: true }
]


const restaurantsData = [
  { name: 'Claro', chef: null, image: 'claro.png', rating: 4, dishes: [], isPopular: true },
  { name: 'Lumina', chef: null, image: 'Lumina.png', rating: 3, dishes: [], isPopular: false },
  { name: 'Tiger Lilly', chef: null, image: 'tiger-lily.png', rating: 4, dishes: [], isPopular: true },
  { name: 'onza', chef: null, image: 'onza.png', rating: 4, dishes: [], isPopular: true },
  { name: 'kitchen market', chef: null, image: 'kithcenMarket.png', rating: 4, dishes: [], isPopular: false },
  { name: 'mashya', chef: null, image: 'mashya.png', rating: 4, dishes: [], isPopular: true }
]

const dishesData = [
  {
    title: 'Pad Ki Mao',
    image: 'kiMao.png',
    ingredients: ['shrimps', 'glass noodles', 'kemiri nuts', 'shallots', 'lemon grass', 'magic chilli brown coconut'],
    price: 88,
    restaurant: null,
    icons: [EiconMeaning.SPICY],
    isActive: true
  },
  {
    title: 'Garbanzo Frito',
    image: 'garbanzo.png',
    ingredients: ['polenta fingers', 'veal cheek', 'magic chilli', 'cured lemon cream', 'yellow laska'],
    price: 98,
    restaurant: null,
    icons: [EiconMeaning.VEGETERIAN],
    isActive: true
  },
  {
    title: 'Smoked Pizza',
    image: 'smokedPizza.png',
    ingredients: ['basil dough', 'cashew "butter"', 'demi-glace', 'bison & radish'],
    price: 65,
    restaurant: null,
    icons: [EiconMeaning.VEGAN],
    isActive: true
  },
  {
    title: 'Spicy Ramen',
    image: 'spicyRamen.png',
    ingredients: ['ramen noodles', 'pork belly', 'soft-boiled egg', 'bamboo shoots', 'spring onions', 'spicy miso broth'],
    price: 78,
    restaurant: null,
    icons: [EiconMeaning.SPICY],
    isActive: true
  },
  {
    title: 'Mango Sorbet',
    image: 'mangoSorbet.png',
    ingredients: ['mango', 'sugar', 'lemon juice', 'water'],
    price: 45,
    restaurant: null,
    icons: [EiconMeaning.VEGAN],
    isActive: true
  },
  {
    title: 'Grilled Octopus',
    image: 'grilledOctopus.png',
    ingredients: ['octopus', 'olive oil', 'lemon', 'garlic', 'parsley', 'sea salt'],
    price: 95,
    restaurant: null,
    icons: [EiconMeaning.SPICY],
    isActive: true
  }
]

// Fixing missing fields and adjusting references






