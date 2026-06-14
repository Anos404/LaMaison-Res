import { MenuCategory } from './types';

export const menuCategories: MenuCategory[] = [
  {
    id: 'appetizers',
    title: 'Appetizers',
    icon: 'Leaf',
    items: [
      {
        name: 'Escargots de Bourgogne',
        price: '18',
        description: 'Snails in garlic-parsley butter, served with freshly baked baguette.',
        isChefRecommendation: true,
        isGlutenFree: true // Gluten-free option available
      },
      {
        name: "Soupe à l'Oignon",
        price: '12',
        description: 'Classic French onion soup with caramelized onions, rich beef broth, and gruyère crouton.',
        isVegetarian: true
      },
      {
        name: 'Foie Gras de Canard',
        price: '24',
        description: 'House-made duck foie gras terrine with brioche toast, fig jam, and mixed greens.'
      },
      {
        name: 'Salade Niçoise',
        price: '16',
        description: 'Traditional salad with tuna, hard-boiled eggs, green beans, potatoes, olives, and anchovy vinaigrette.',
        isVegetarian: true // vegetarian option available
      }
    ]
  },
  {
    id: 'mains',
    title: 'Main Courses',
    icon: 'Utensils',
    items: [
      {
        name: 'Coq au Vin',
        price: '29',
        description: 'Braised chicken in a rich burgundy wine sauce with pearl onions, mushrooms, and lardons, served with mashed potatoes.'
      },
      {
        name: 'Boeuf Bourguignon',
        price: '36',
        description: 'Slow-cooked beef stewed in red wine with pearl onions, carrots, and mushrooms, served with buttered egg noodles.',
        isChefRecommendation: true,
        isGlutenFree: true
      },
      {
        name: 'Bouillabaisse',
        price: '38',
        description: 'Traditional Provençal seafood stew with market-fresh fish, mussels, clams, and shrimp in a saffron-infused broth.',
        isSpicy: true
      },
      {
        name: 'Ratatouille',
        price: '24',
        description: 'Classic Provençal vegetable stew with eggplant, zucchini, bell peppers, and tomatoes, served with herb rice.',
        isVegetarian: true,
        isGlutenFree: true
      }
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    icon: 'CakeSlice',
    items: [
      {
        name: 'Crème Brûlée',
        price: '10',
        description: 'Classic Madagascar vanilla bean custard with a perfectly caramelized sugar top.',
        isGlutenFree: true
      },
      {
        name: 'Tarte Tatin',
        price: '14',
        description: 'Upside-down caramelized apple tart served warm with a scoop of vanilla bean ice cream.',
        isChefRecommendation: true
      },
      {
        name: 'Chocolate Soufflé',
        price: '16',
        description: 'Light and airy dark chocolate soufflé topped with a warm chocolate ganache (please allow 20 minutes).'
      },
      {
        name: 'Assiette de Fromages',
        price: '18',
        description: 'Selection of five artisanal French cheeses served with dried fruits, nuts, and honey.',
        isGlutenFree: true // option available
      }
    ]
  },
  {
    id: 'beverages',
    title: 'Beverages',
    icon: 'Wine',
    items: [
      {
        name: 'French Wine Selection',
        price: 'Varies',
        description: 'Extensive collection of wines from all regions of France. Please ask your server for our wine list.'
      },
      {
        name: 'Café au Lait',
        price: '5',
        description: 'Strong freshly brewed coffee with steamed milk.'
      }
    ]
  },
  {
    id: 'children',
    title: "Children's Menu",
    icon: 'Baby',
    items: [
      {
        name: 'Petit Poulet',
        price: '12',
        description: 'Tender grilled chicken breast served with mashed potatoes and green beans.'
      },
      {
        name: 'Mini Croque Monsieur',
        price: '10',
        description: 'Classic French grilled ham and cheese sandwich, served with fresh fruit.'
      }
    ]
  }
];

export const specialsData = {
  dailyFeatures: [
    {
      title: 'Weekday Lunch Special',
      time: 'Mon-Fri 11:30 AM - 2:30 PM',
      description: '3-course prix fixe menu of curated micro-dishes accompanied by a glass of house wine.',
      price: '45',
      image: 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Wine Pairing Thursday',
      time: 'Every Thursday evening',
      description: '4-course gourmet tasting menu with curated French wines matching regional notes.',
      price: '85',
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80'
    }
  ],
  seasonalSpecialties: [
    {
      name: 'Autumn Truffle Risotto',
      price: '42',
      description: 'Acquerello carnaroli rice with shaved Périgord black truffles, Parmigiano-Reggiano, and white truffle oil cream.'
    },
    {
      name: 'Pumpkin Crème Caramel',
      price: '14',
      description: 'Velvety spiced pumpkin custard with burnt amber caramel, chantilly cream, and light pepita crunch.'
    }
  ]
};

export const eventsData = [
  {
    title: 'Live Jazz Night',
    badge: 'Exclusive Experience',
    date: 'November 18th, 7:00 PM',
    description: 'Enjoy an evening of smooth classical jazz with our special 5-course tasting menu.',
    price: '85',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Wine Tasting Workshop',
    badge: 'Educational Event',
    date: 'December 2nd, 5:00 PM',
    description: 'Sommelier-led tasting of fine French regional wines with perfectly paired artisanal appetizers.',
    price: '75',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80'
  }
];
