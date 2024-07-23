

const chefsData = [
  { name: 'Ran Shmueli', bio: 'Top chef in Tel Aviv', image: 'placeholder.png', restaurants: [] },
  { name: 'Meir Adoni', bio: 'Famous chef known for his unique dishes', image: 'placeholder.png', restaurants: [] },
  { name: 'Yanir Green', bio: 'Renowned chef with a passion for cooking', image: 'placeholder.png', restaurants: [] },
  { name: 'Yossi Shitrit', bio: 'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades...', image: 'placeholder.png', restaurants: [] }
]

const restaurantsData = [
  { name: 'Claro', chef: null, image: 'claro.png', rating: 4, dishes: [] },
  { name: 'Lumina', chef: null, image: 'Lumina.png', rating: 3, dishes: [] },
  { name: 'Tiger Lilly', chef: null, image: 'tiger-lily.png', rating: 4, dishes: [] },
  { name: 'onza', chef: null, image: 'onza.png', rating: 4, dishes: [] },
  { name: 'kitchen market', chef: null, image: 'kithcenMarket.png', rating: 4, dishes: [] },
  { name: 'mashya', chef: null, image: 'mashya.png', rating: 4, dishes: [] }
]

const dishesData = [
  {
    title: 'Pad Ki Mao',
    image: 'kiMao.png',
    ingredients: ['shrimps', 'glass noodles', 'kemiri nuts', 'shallots', 'lemon grass', 'magic chilli brown coconut'],
    price: 88,
    restaurant: null,
    icons: [{ type: 'spicy', img: 'spicy.svg' }],
    isActive: true
  },
  {
    title: 'Garbanzo Frito',
    image: 'garbanzo.png',
    ingredients: ['polenta fingers', 'veal cheek', 'magic chilli', 'cured lemon cream', 'yellow laska'],
    price: 98,
    restaurant: null,
    icons: [{ type: 'vegetarian', img: 'vegeterian.svg' }],
    isActive: true
  },
  {
    title: 'Smoked Pizza',
    image: 'smokedPizza.png',
    ingredients: ['basil dough', 'cashew "butter"', 'demi-glace', 'bison & radish'],
    price: 65,
    restaurant: null,
    icons: [{ type: 'vegan', img: 'vegan.svg' }],
    isActive: true
  },
  {
    title: 'Spicy Ramen',
    image: 'spicyRamen.png',
    ingredients: ['ramen noodles', 'pork belly', 'soft-boiled egg', 'bamboo shoots', 'spring onions', 'spicy miso broth'],
    price: 78,
    icons: [{ type: 'spicy', img: 'spicy.svg' }],
    isActive: true
  },
  {
    title: 'Mango Sorbet',
    image: 'mangoSorbet.png',
    ingredients: ['mango', 'sugar', 'lemon juice', 'water'],
    price: 45,
    icons: [{ type: 'vegan', img: 'vegan.svg' }],
    isActive: true
  },
  {
    title: 'Grilled Octopus',
    image: 'grilledOctopus.png',
    ingredients: ['octopus', 'olive oil', 'lemon', 'garlic', 'parsley', 'sea salt'],
    price: 95,
    icons: [{ type: 'spicy', img: 'spicy.svg' }],
    isActive: true
  }
]

