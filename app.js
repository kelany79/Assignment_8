"use strict";

// RECIPE DATA: Each object below describes one recipe.
const recipes = [
  {
    "id": "creamy-spaghetti-carbonara",
    "title": "Creamy Spaghetti Carbonara",
    "description": "A classic Italian pasta dish with eggs, cheese, and pancetta",
    "image": "carbonara.jpg",
    "category": "Italian",
    "difficulty": "Easy",
    "prep": 15,
    "cook": 20,
    "servings": 4,
    "rating": 4.8,
    "reviews": 234,
    "ingredients": [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water"
    ],
    "instructions": [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"
    ],
    "nutrition": {
      "Calories": "520 kcal",
      "Protein": "28g",
      "Carbohydrates": "62g",
      "Fat": "18g",
      "Fiber": "3g",
      "Sodium": "680mg"
    },
    "tips": [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only"
    ]
  },
  {
    "id": "honey-garlic-salmon",
    "title": "Honey Garlic Salmon",
    "description": "Pan-seared salmon with a sweet and savory glaze",
    "image": "salmon.jpg",
    "category": "Seafood",
    "difficulty": "Easy",
    "prep": 10,
    "cook": 15,
    "servings": 2,
    "rating": 4.9,
    "reviews": 187,
    "ingredients": [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced"
    ],
    "instructions": [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."
    ],
    "nutrition": {
      "Calories": "380 kcal",
      "Protein": "35g",
      "Carbohydrates": "28g",
      "Fat": "14g",
      "Fiber": "0g",
      "Sodium": "720mg"
    },
    "tips": [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal"
    ]
  },
  {
    "id": "thai-green-curry",
    "title": "Thai Green Curry",
    "description": "Vibrant and aromatic curry with vegetables and coconut milk",
    "image": "curry.jpg",
    "category": "Asian",
    "difficulty": "Intermediate",
    "prep": 15,
    "cook": 25,
    "servings": 4,
    "rating": 4.7,
    "reviews": 312,
    "ingredients": [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves"
    ],
    "instructions": [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."
    ],
    "nutrition": {
      "Calories": "420 kcal",
      "Protein": "26g",
      "Carbohydrates": "22g",
      "Fat": "26g",
      "Fiber": "5g",
      "Sodium": "890mg"
    },
    "tips": [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce"
    ]
  },
  {
    "id": "classic-beef-burger",
    "title": "Classic Beef Burger",
    "description": "Juicy homemade burger with all the fixings",
    "image": "burger.jpg",
    "category": "American",
    "difficulty": "Easy",
    "prep": 15,
    "cook": 20,
    "servings": 4,
    "rating": 4.6,
    "reviews": 421,
    "ingredients": [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments"
    ],
    "instructions": [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."
    ],
    "nutrition": {
      "Calories": "650 kcal",
      "Protein": "38g",
      "Carbohydrates": "42g",
      "Fat": "35g",
      "Fiber": "2g",
      "Sodium": "920mg"
    },
    "tips": [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor"
    ]
  },
  {
    "id": "mediterranean-quinoa-bowl",
    "title": "Mediterranean Quinoa Bowl",
    "description": "Healthy bowl with quinoa, vegetables, and tahini dressing",
    "image": "quinoa.jpg",
    "category": "Mediterranean",
    "difficulty": "Easy",
    "prep": 20,
    "cook": 35,
    "servings": 2,
    "rating": 4.5,
    "reviews": 156,
    "ingredients": [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing"
    ],
    "instructions": [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
    ],
    "nutrition": {
      "Calories": "480 kcal",
      "Protein": "18g",
      "Carbohydrates": "58g",
      "Fat": "20g",
      "Fiber": "10g",
      "Sodium": "540mg"
    },
    "tips": [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein"
    ]
  },
  {
    "id": "chicken-tikka-masala",
    "title": "Chicken Tikka Masala",
    "description": "Rich and creamy Indian curry with tender chicken pieces",
    "image": "chicken-tikka-masala.jpg",
    "category": "Asian",
    "difficulty": "Intermediate",
    "prep": 20,
    "cook": 30,
    "servings": 4,
    "rating": 4.7,
    "reviews": 389,
    "ingredients": [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish"
    ],
    "instructions": [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."
    ],
    "nutrition": {
      "Calories": "450 kcal",
      "Protein": "38g",
      "Carbohydrates": "24g",
      "Fat": "22g",
      "Fiber": "4g",
      "Sodium": "760mg"
    },
    "tips": [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice"
    ]
  },
  {
    "id": "margherita-pizza",
    "title": "Margherita Pizza",
    "description": "Classic Italian pizza with fresh mozzarella and basil",
    "image": "pizza.jpg",
    "category": "Italian",
    "difficulty": "Intermediate",
    "prep": 90,
    "cook": 12,
    "servings": 2,
    "rating": 4.9,
    "reviews": 512,
    "ingredients": [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping"
    ],
    "instructions": [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."
    ],
    "nutrition": {
      "Calories": "580 kcal",
      "Protein": "24g",
      "Carbohydrates": "68g",
      "Fat": "22g",
      "Fiber": "4g",
      "Sodium": "920mg"
    },
    "tips": [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture"
    ]
  },
  {
    "id": "beef-tacos",
    "title": "Beef Tacos",
    "description": "Flavorful Mexican tacos with seasoned ground beef",
    "image": "beef-tacos.jpg",
    "category": "American",
    "difficulty": "Easy",
    "prep": 15,
    "cook": 20,
    "servings": 4,
    "rating": 4.6,
    "reviews": 278,
    "ingredients": [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa"
    ],
    "instructions": [
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
      "Add diced onion and cook until softened, about 5 minutes.",
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately."
    ],
    "nutrition": {
      "Calories": "420 kcal",
      "Protein": "26g",
      "Carbohydrates": "32g",
      "Fat": "20g",
      "Fiber": "4g",
      "Sodium": "780mg"
    },
    "tips": [
      "Drain excess fat from beef for healthier tacos",
      "Warm shells in oven for better texture",
      "Prepare all toppings before cooking beef",
      "Use ground turkey for a lighter option"
    ]
  },
  {
    "id": "caesar-salad",
    "title": "Caesar Salad",
    "description": "Classic salad with crispy romaine and creamy dressing",
    "image": "caesar-salad.jpg",
    "category": "Mediterranean",
    "difficulty": "Easy",
    "prep": 15,
    "cook": 0,
    "servings": 2,
    "rating": 4.4,
    "reviews": 198,
    "ingredients": [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper"
    ],
    "instructions": [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Add croutons and half the parmesan cheese. Toss gently.",
      "Top with remaining parmesan shavings and anchovies if using.",
      "Serve immediately with lemon wedges and fresh black pepper."
    ],
    "nutrition": {
      "Calories": "320 kcal",
      "Protein": "12g",
      "Carbohydrates": "18g",
      "Fat": "22g",
      "Fiber": "3g",
      "Sodium": "680mg"
    },
    "tips": [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve"
    ]
  },
  {
    "id": "pad-thai",
    "title": "Pad Thai",
    "description": "Popular Thai stir-fried noodles with shrimp and peanuts",
    "image": "pad-thai.jpg",
    "category": "Asian",
    "difficulty": "Intermediate",
    "prep": 20,
    "cook": 15,
    "servings": 2,
    "rating": 4.8,
    "reviews": 445,
    "ingredients": [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro"
    ],
    "instructions": [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Toss everything together.",
      "Serve topped with crushed peanuts, lime wedges, and cilantro."
    ],
    "nutrition": {
      "Calories": "540 kcal",
      "Protein": "32g",
      "Carbohydrates": "62g",
      "Fat": "16g",
      "Fiber": "4g",
      "Sodium": "1120mg"
    },
    "tips": [
      "Don't oversoak noodles or they'll be mushy",
      "Cook on high heat for authentic wok flavor",
      "Balance sweet, sour, and salty flavors",
      "Prepare all ingredients before starting to cook"
    ]
  },
  {
    "id": "french-onion-soup",
    "title": "French Onion Soup",
    "description": "Rich beef broth with caramelized onions and melted cheese",
    "image": "french-onion-soup.jpg",
    "category": "Mediterranean",
    "difficulty": "Intermediate",
    "prep": 15,
    "cook": 60,
    "servings": 4,
    "rating": 4.7,
    "reviews": 267,
    "ingredients": [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated"
    ],
    "instructions": [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."
    ],
    "nutrition": {
      "Calories": "380 kcal",
      "Protein": "18g",
      "Carbohydrates": "36g",
      "Fat": "18g",
      "Fiber": "4g",
      "Sodium": "980mg"
    },
    "tips": [
      "Patience is key - don't rush the onion caramelization",
      "Use good quality beef broth for best flavor",
      "Gruyère can be substituted with Swiss cheese",
      "Watch carefully when broiling to avoid burning"
    ]
  },
  {
    "id": "chicken-stir-fry",
    "title": "Chicken Stir-Fry",
    "description": "Quick and healthy stir-fry with colorful vegetables",
    "image": "chicken-stir-fry.jpg",
    "category": "Asian",
    "difficulty": "Easy",
    "prep": 15,
    "cook": 15,
    "servings": 4,
    "rating": 4.5,
    "reviews": 324,
    "ingredients": [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated"
    ],
    "instructions": [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve immediately over steamed rice or noodles."
    ],
    "nutrition": {
      "Calories": "320 kcal",
      "Protein": "34g",
      "Carbohydrates": "18g",
      "Fat": "12g",
      "Fiber": "5g",
      "Sodium": "840mg"
    },
    "tips": [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch"
    ]
  },
  {
    "id": "lasagna-bolognese",
    "title": "Lasagna Bolognese",
    "description": "Layered Italian pasta with rich meat sauce and béchamel",
    "image": "lasagna-bolognese.jpg",
    "category": "Italian",
    "difficulty": "Intermediate",
    "prep": 30,
    "cook": 90,
    "servings": 4,
    "rating": 4.9,
    "reviews": 478,
    "ingredients": [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned tomatoes",
      "1 onion, diced",
      "2 carrots, diced",
      "500ml béchamel sauce",
      "200g mozzarella, grated",
      "100g parmesan cheese",
      "Fresh basil"
    ],
    "instructions": [
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
      "Cook lasagna sheets according to package directions. Drain and set aside.",
      "Preheat oven to 180°C (350°F).",
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
      "Top final layer with béchamel, mozzarella, and parmesan cheese.",
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."
    ],
    "nutrition": {
      "Calories": "680 kcal",
      "Protein": "42g",
      "Carbohydrates": "58g",
      "Fat": "28g",
      "Fiber": "6g",
      "Sodium": "920mg"
    },
    "tips": [
      "Make bolognese sauce a day ahead for better flavor",
      "Don't skip the resting time after baking",
      "Use fresh pasta sheets for best texture",
      "Freeze leftovers in individual portions"
    ]
  },
  {
    "id": "shrimp-scampi",
    "title": "Shrimp Scampi",
    "description": "Garlicky shrimp in white wine butter sauce",
    "image": "shrimp-scampi.jpg",
    "category": "Seafood",
    "difficulty": "Easy",
    "prep": 10,
    "cook": 15,
    "servings": 2,
    "rating": 4.8,
    "reviews": 356,
    "ingredients": [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes"
    ],
    "instructions": [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately."
    ],
    "nutrition": {
      "Calories": "520 kcal",
      "Protein": "36g",
      "Carbohydrates": "54g",
      "Fat": "18g",
      "Fiber": "3g",
      "Sodium": "620mg"
    },
    "tips": [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste"
    ]
  },
  {
    "id": "vegetable-curry",
    "title": "Vegetable Curry",
    "description": "Hearty vegetarian curry with coconut milk",
    "image": "vegetable-curry.jpg",
    "category": "Asian",
    "difficulty": "Easy",
    "prep": 20,
    "cook": 30,
    "servings": 4,
    "rating": 4.6,
    "reviews": 289,
    "ingredients": [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "2 carrots, sliced",
      "1 can chickpeas",
      "400ml coconut milk",
      "3 tablespoons curry powder",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "Fresh spinach"
    ],
    "instructions": [
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
      "Add potatoes and carrots, cook for 5 minutes.",
      "Pour in coconut milk and 1 cup water. Bring to simmer.",
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
      "Stir in fresh spinach and cook until wilted.",
      "Serve hot over basmati rice or with naan bread."
    ],
    "nutrition": {
      "Calories": "380 kcal",
      "Protein": "14g",
      "Carbohydrates": "48g",
      "Fat": "16g",
      "Fiber": "12g",
      "Sodium": "480mg"
    },
    "tips": [
      "Add vegetables in order of cooking time needed",
      "Adjust curry powder amount to taste",
      "Use full-fat coconut milk for creamier curry",
      "Add protein like tofu or paneer if desired"
    ]
  },
  {
    "id": "bbq-pulled-pork",
    "title": "BBQ Pulled Pork",
    "description": "Slow-cooked tender pork in smoky barbecue sauce",
    "image": "bbq-pulled-pork.jpg",
    "category": "American",
    "difficulty": "Easy",
    "prep": 15,
    "cook": 240,
    "servings": 4,
    "rating": 4.7,
    "reviews": 412,
    "ingredients": [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving"
    ],
    "instructions": [
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top."
    ],
    "nutrition": {
      "Calories": "620 kcal",
      "Protein": "48g",
      "Carbohydrates": "52g",
      "Fat": "22g",
      "Fiber": "3g",
      "Sodium": "1180mg"
    },
    "tips": [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months"
    ]
  },
  {
    "id": "greek-moussaka",
    "title": "Greek Moussaka",
    "description": "Traditional layered eggplant casserole with lamb",
    "image": "greek-moussaka.jpg",
    "category": "Mediterranean",
    "difficulty": "Intermediate",
    "prep": 30,
    "cook": 60,
    "servings": 4,
    "rating": 4.8,
    "reviews": 234,
    "ingredients": [
      "3 large eggplants, sliced",
      "500g ground lamb",
      "400g canned tomatoes",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "500ml béchamel sauce",
      "100g parmesan cheese",
      "Cinnamon and oregano",
      "Olive oil"
    ],
    "instructions": [
      "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      "Brush eggplant slices with olive oil, grill or bake until softened.",
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      "Preheat oven to 180°C (350°F).",
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving."
    ],
    "nutrition": {
      "Calories": "580 kcal",
      "Protein": "36g",
      "Carbohydrates": "32g",
      "Fat": "32g",
      "Fiber": "8g",
      "Sodium": "820mg"
    },
    "tips": [
      "Salt eggplant to remove bitterness",
      "Don't skip the resting time - it helps set the layers",
      "Use ground beef if lamb is unavailable",
      "Make ahead and reheat for easier serving"
    ]
  },
  {
    "id": "teriyaki-chicken-bowl",
    "title": "Teriyaki Chicken Bowl",
    "description": "Sweet and savory chicken over rice with vegetables",
    "image": "teriyaki-chicken-bowl.jpg",
    "category": "Asian",
    "difficulty": "Easy",
    "prep": 15,
    "cook": 20,
    "servings": 2,
    "rating": 4.7,
    "reviews": 367,
    "ingredients": [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil"
    ],
    "instructions": [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed vegetables.",
      "Garnish with sesame seeds and green onions. Serve hot."
    ],
    "nutrition": {
      "Calories": "540 kcal",
      "Protein": "42g",
      "Carbohydrates": "58g",
      "Fat": "14g",
      "Fiber": "4g",
      "Sodium": "1240mg"
    },
    "tips": [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead"
    ]
  },
  {
    "id": "caprese-sandwich",
    "title": "Caprese Sandwich",
    "description": "Fresh Italian sandwich with mozzarella, tomato, and basil",
    "image": "caprese-sandwich.jpg",
    "category": "Italian",
    "difficulty": "Easy",
    "prep": 10,
    "cook": 5,
    "servings": 2,
    "rating": 4.5,
    "reviews": 189,
    "ingredients": [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper"
    ],
    "instructions": [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      "Close sandwich, cut in half, and serve immediately."
    ],
    "nutrition": {
      "Calories": "480 kcal",
      "Protein": "22g",
      "Carbohydrates": "48g",
      "Fat": "22g",
      "Fiber": "3g",
      "Sodium": "680mg"
    },
    "tips": [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich"
    ]
  }
];

// WEBSITE BEHAVIOR: The functions below display recipes and handle clicks.
// These variables remember what the visitor is currently doing.
let currentRecipe = null;
let currentTab = "ingredients";
let selectedCategory = "All";
let savedRecipeIds = loadRecipeIds("wfd-saved");
let historyRecipeIds = loadRecipeIds("wfd-history");
let pickerMode = loadFromStorage("wfd-picker", "random");
let toastTimer;

// ---------- Small helpers ----------

function getElement(id) {
  return document.getElementById(id);
}

function findRecipe(id) {
  for (const recipe of recipes) {
    if (recipe.id === id) return recipe;
  }
  return null;
}

function loadFromStorage(key, defaultValue) {
  try {
    const savedText = localStorage.getItem(key);
    if (savedText === null) return defaultValue;
    return JSON.parse(savedText);
  } catch (error) {
    return defaultValue;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // The page still works if the browser does not allow storage.
  }
}

function loadRecipeIds(key) {
  const storedIds = loadFromStorage(key, []);
  const validIds = [];
  if (!Array.isArray(storedIds)) return validIds;

  for (const id of storedIds) {
    if (typeof id === "string" && findRecipe(id) && !validIds.includes(id)) {
      validIds.push(id);
    }
  }
  return validIds;
}

function createIcon(name) {
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-" + name;
  icon.setAttribute("aria-hidden", "true");
  return icon;
}

function showMessage(message) {
  const toast = getElement("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
}

// ---------- Display the selected recipe ----------

function showRecipe(id, options = {}) {
  const recipe = findRecipe(id);
  if (recipe === null) return;

  currentRecipe = recipe;
  if (!options.keepTab) currentTab = "ingredients";
  showRecipePhotoAndFacts(recipe);
  showRecipeHeading(recipe);
  updateSavedButton();
  showCurrentTab();
  addToHistory(recipe.id);
  updateRecipeInAddress(recipe.id);

  if (!options.keepScroll) {
    document.querySelector(".recipe-details").scrollTop = 0;
  }
  if (options.scrollToCard) {
    document.querySelector(".recipe-card").scrollIntoView({ behavior: "smooth" });
  }
}

function showRecipePhotoAndFacts(recipe) {
  const photo = getElement("recipe-image");
  photo.src = recipe.image;
  photo.alt = recipe.title + " ready to serve";
  getElement("rating-average").textContent = recipe.rating.toFixed(1);
  getElement("rating-reviews").textContent = "(" + recipe.reviews + " reviews)";
  getElement("prep-time").textContent = recipe.prep + " min";
  getElement("cook-time").textContent = recipe.cook + " min";
  getElement("servings").textContent = recipe.servings + " people";
}

function showRecipeHeading(recipe) {
  getElement("difficulty").textContent = recipe.difficulty;
  getElement("category").textContent = recipe.category;
  getElement("recipe-title").textContent = recipe.title;
  getElement("recipe-description").textContent = recipe.description;
  const totalMinutes = recipe.prep + recipe.cook;
  getElement("time-warning").hidden = totalMinutes <= 45;
}

function updateRecipeInAddress(id) {
  // Shared links have ?recipe=... . Ordinary visits remain random on reload.
  try {
    const address = new URL(window.location.href);
    if (address.searchParams.has("recipe")) {
      address.searchParams.set("recipe", id);
      window.history.replaceState(null, "", address);
    }
  } catch (error) {
    // Opening the HTML file directly can prevent address changes.
  }
}

// ---------- The four information tabs ----------

function createNumberedList(items, listType) {
  const list = document.createElement("ol");
  list.className = "step-list " + listType;
  for (let index = 0; index < items.length; index++) {
    const row = document.createElement("li");
    const number = document.createElement("span");
    const text = document.createElement("span");
    number.className = "step-number";
    number.textContent = index + 1;
    text.textContent = items[index];
    row.append(number, text);
    list.append(row);
  }
  return list;
}

function showNumberedTab(panel, items, listType) {
  const box = document.createElement("div");
  box.className = "content-box";
  box.append(createNumberedList(items, listType));
  panel.append(box);
}

function showNutritionTab(panel) {
  const grid = document.createElement("div");
  grid.className = "nutrition-grid";
  const iconNames = {
    Calories: "fire",
    Protein: "dumbbell",
    Carbohydrates: "wheat-awn",
    Fat: "droplet",
    Fiber: "seedling",
    Sodium: "cube"
  };

  for (const label of Object.keys(currentRecipe.nutrition)) {
    const item = document.createElement("div");
    const labelGroup = document.createElement("div");
    const iconBox = document.createElement("span");
    const name = document.createElement("span");
    const amount = document.createElement("strong");
    item.className = "nutrition-item";
    labelGroup.className = "nutrition-label";
    iconBox.className = "nutrition-icon nutrition-" + label.toLowerCase();
    iconBox.append(createIcon(iconNames[label] || "chart-pie"));
    name.textContent = label;
    amount.textContent = currentRecipe.nutrition[label];
    labelGroup.append(iconBox, name);
    item.append(labelGroup, amount);
    grid.append(item);
  }
  panel.append(grid);
}

function showTipsTab(panel) {
  const box = document.createElement("div");
  const list = document.createElement("ul");
  box.className = "content-box";
  list.className = "tip-list";
  for (const tip of currentRecipe.tips) {
    const row = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = tip;
    row.append(createIcon("circle-check"), text);
    list.append(row);
  }
  box.append(list);
  panel.append(box);
}

function showCurrentTab() {
  const panel = getElement("recipe-panel");
  const tabs = document.querySelectorAll(".tab");
  for (const tab of tabs) {
    const isSelected = tab.dataset.tab === currentTab;
    tab.classList.toggle("active", isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
  }
  panel.setAttribute("aria-labelledby", "tab-" + currentTab);
  panel.replaceChildren();

  if (currentTab === "ingredients") {
    showNumberedTab(panel, currentRecipe.ingredients, "ingredients-list");
  } else if (currentTab === "instructions") {
    showNumberedTab(panel, currentRecipe.instructions, "instructions-list");
  } else if (currentTab === "nutrition") {
    showNutritionTab(panel);
  } else {
    showTipsTab(panel);
  }
}

function selectTab(name, focusTab = false) {
  const tabNames = ["ingredients", "instructions", "nutrition", "tips"];
  if (!tabNames.includes(name)) return;
  currentTab = name;
  showCurrentTab();
  if (focusTab) getElement("tab-" + name).focus();
}

function handleTabKeys(event) {
  const tabNames = ["ingredients", "instructions", "nutrition", "tips"];
  let index = tabNames.indexOf(currentTab);
  if (event.key === "ArrowRight") index = (index + 1) % tabNames.length;
  else if (event.key === "ArrowLeft") index = (index - 1 + tabNames.length) % tabNames.length;
  else if (event.key === "Home") index = 0;
  else if (event.key === "End") index = tabNames.length - 1;
  else return;
  event.preventDefault();
  selectTab(tabNames[index], true);
}

// ---------- Choosing, saving, and remembering recipes ----------

function showNextRecipe() {
  const currentIndex = recipes.indexOf(currentRecipe);
  let nextIndex;
  if (pickerMode === "sequential") {
    nextIndex = (currentIndex + 1) % recipes.length;
  } else {
    // Start at 1 so random mode never repeats the current recipe.
    const stepsForward = 1 + Math.floor(Math.random() * (recipes.length - 1));
    nextIndex = (currentIndex + stepsForward) % recipes.length;
  }
  showRecipe(recipes[nextIndex].id, {
    keepTab: true,
    keepScroll: true,
    scrollToCard: true
  });
}

function updateSavedButton() {
  const isSaved = savedRecipeIds.includes(currentRecipe.id);
  const button = getElement("save-recipe-button");
  const label = isSaved ? "Remove saved recipe" : "Save recipe";
  button.setAttribute("aria-pressed", String(isSaved));
  button.setAttribute("aria-label", label);
  button.title = label;
  getElement("saved-dot").hidden = savedRecipeIds.length === 0;
}

function updateSavedRecipes() {
  saveToStorage("wfd-saved", savedRecipeIds);
  updateSavedButton();
  showSavedRecipes();
}

function removeSavedRecipe(id) {
  savedRecipeIds = savedRecipeIds.filter(function (savedId) {
    return savedId !== id;
  });
  updateSavedRecipes();
  showMessage("Removed from saved recipes");
}

function toggleSavedRecipe() {
  if (savedRecipeIds.includes(currentRecipe.id)) {
    removeSavedRecipe(currentRecipe.id);
  } else {
    savedRecipeIds.unshift(currentRecipe.id);
    updateSavedRecipes();
    showMessage("Recipe saved for later");
  }
}

function addToHistory(id) {
  historyRecipeIds = historyRecipeIds.filter(function (oldId) {
    return oldId !== id;
  });
  historyRecipeIds.unshift(id);
  historyRecipeIds = historyRecipeIds.slice(0, 20);
  saveToStorage("wfd-history", historyRecipeIds);
}

// ---------- Recipe lists and search ----------

function createRecipeRow(recipe, canRemove) {
  const row = document.createElement("div");
  const image = document.createElement("img");
  const openButton = document.createElement("button");
  const title = document.createElement("strong");
  const details = document.createElement("span");
  row.className = "recipe-list-item";
  image.src = recipe.image;
  image.alt = "";
  image.loading = "lazy";
  openButton.type = "button";
  openButton.className = "list-item-main";
  title.textContent = recipe.title;
  details.textContent = recipe.category + " · " + (recipe.prep + recipe.cook) + " min · " + recipe.difficulty;
  openButton.append(title, details);

  openButton.addEventListener("click", function () {
    const dialog = row.closest("dialog");
    dialog.dataset.triggerId = "";
    dialog.close();
    showRecipe(recipe.id, { scrollToCard: true });
    getElement("recipe-title").tabIndex = -1;
    getElement("recipe-title").focus({ preventScroll: true });
  });
  row.append(image, openButton);

  if (canRemove) {
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "list-delete";
    removeButton.setAttribute("aria-label", "Remove " + recipe.title + " from saved recipes");
    removeButton.append(createIcon("trash"));
    removeButton.addEventListener("click", function () {
      removeSavedRecipe(recipe.id);
    });
    row.append(removeButton);
  }
  return row;
}

function showRecipeList(listId, recipeList, emptyMessage, emptyIcon, canRemove = false) {
  const container = getElement(listId);
  container.replaceChildren();
  if (recipeList.length === 0) {
    const empty = document.createElement("div");
    const text = document.createElement("span");
    empty.className = "empty-state";
    text.textContent = emptyMessage;
    empty.append(createIcon(emptyIcon), text);
    container.append(empty);
    return;
  }
  for (const recipe of recipeList) {
    container.append(createRecipeRow(recipe, canRemove));
  }
}

function recipesFromIds(ids) {
  const foundRecipes = [];
  for (const id of ids) {
    const recipe = findRecipe(id);
    if (recipe !== null) foundRecipes.push(recipe);
  }
  return foundRecipes;
}

function showSavedRecipes() {
  showRecipeList("saved-list", recipesFromIds(savedRecipeIds),
    "No saved recipes yet. Tap the bookmark on a dish you love.", "bookmark", true);
}

function showHistory() {
  showRecipeList("history-list", recipesFromIds(historyRecipeIds),
    "Recipes you view will appear here.", "clock-rotate-left");
}

function showCategoryButtons() {
  const container = getElement("category-filters");
  const categories = ["All"];
  container.replaceChildren();
  for (const recipe of recipes) {
    if (!categories.includes(recipe.category)) categories.push(recipe.category);
  }
  for (const category of categories) {
    const button = document.createElement("button");
    const isSelected = category === selectedCategory;
    button.type = "button";
    button.className = isSelected ? "filter-chip active" : "filter-chip";
    button.setAttribute("aria-pressed", String(isSelected));
    button.textContent = category;
    button.addEventListener("click", function () {
      selectedCategory = category;
      showCategoryButtons();
      showBrowseResults();
    });
    container.append(button);
  }
}

function showBrowseResults() {
  const searchText = getElement("recipe-search").value.trim().toLowerCase();
  const matchingRecipes = [];
  for (const recipe of recipes) {
    const correctCategory = selectedCategory === "All" || recipe.category === selectedCategory;
    const searchableText = (recipe.title + " " + recipe.description + " " + recipe.ingredients.join(" ")).toLowerCase();
    const matchesSearch = searchableText.includes(searchText);
    if (correctCategory && matchesSearch) matchingRecipes.push(recipe);
  }
  showRecipeList("browse-list", matchingRecipes,
    "No recipes match that search. Try another ingredient or category.", "magnifying-glass");
}

// ---------- Dialogs, sharing, and settings ----------

function openDialog(dialogId, triggerButton) {
  const dialog = getElement(dialogId);
  dialog.dataset.triggerId = triggerButton.id;
  if (dialogId === "saved-dialog") showSavedRecipes();
  if (dialogId === "history-dialog") showHistory();
  if (dialogId === "browse-dialog") {
    showCategoryButtons();
    showBrowseResults();
  }
  dialog.showModal();
  if (dialogId === "browse-dialog") getElement("recipe-search").focus();
}

async function shareCurrentRecipe() {
  const address = new URL(window.location.href);
  address.searchParams.set("recipe", currentRecipe.id);
  if (navigator.share) {
    try {
      await navigator.share({ title: currentRecipe.title, text: currentRecipe.description, url: address.href });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  try {
    await navigator.clipboard.writeText(address.href);
    showMessage("Recipe link copied");
  } catch (error) {
    // Some browsers block the clipboard on local files.
    window.prompt("Copy this recipe link:", address.href);
  }
}

function applyTheme(useDarkMode) {
  if (useDarkMode) document.documentElement.dataset.theme = "dark";
  else document.documentElement.dataset.theme = "light";
  getElement("dark-mode").checked = useDarkMode;
  saveToStorage("wfd-theme", useDarkMode ? "dark" : "light");
}

function setMobileMenu(isOpen) {
  const menu = getElement("mobile-menu");
  const button = getElement("mobile-menu-button");
  const icon = button.querySelector("i");
  menu.hidden = !isOpen;
  button.setAttribute("aria-expanded", String(isOpen));
  button.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

function connectMobileDialogButton(buttonId, dialogId) {
  getElement(buttonId).addEventListener("click", function () {
    setMobileMenu(false);
    openDialog(dialogId, getElement("mobile-menu-button"));
  });
}

// ---------- Connect HTML controls to the functions above ----------

function connectButtons() {
  for (const tab of document.querySelectorAll(".tab")) {
    tab.addEventListener("click", function () { selectTab(tab.dataset.tab); });
  }
  document.querySelector(".tabs").addEventListener("keydown", handleTabKeys);
  getElement("another-button").addEventListener("click", showNextRecipe);
  getElement("save-recipe-button").addEventListener("click", toggleSavedRecipe);
  getElement("share-button").addEventListener("click", shareCurrentRecipe);
  getElement("recipe-search").addEventListener("input", showBrowseResults);

  getElement("saved-button").addEventListener("click", function (event) {
    openDialog("saved-dialog", event.currentTarget);
  });
  getElement("history-button").addEventListener("click", function (event) {
    openDialog("history-dialog", event.currentTarget);
  });
  getElement("settings-button").addEventListener("click", function (event) {
    openDialog("settings-dialog", event.currentTarget);
  });
  getElement("about-button").addEventListener("click", function (event) {
    openDialog("about-dialog", event.currentTarget);
  });
  getElement("about-browse-button").addEventListener("click", function () {
    getElement("about-dialog").close();
    const trigger = window.innerWidth < 768 ? getElement("mobile-menu-button") : getElement("about-button");
    openDialog("browse-dialog", trigger);
  });

  getElement("mobile-menu-button").addEventListener("click", function () {
    setMobileMenu(getElement("mobile-menu").hidden);
  });
  connectMobileDialogButton("mobile-saved-button", "saved-dialog");
  connectMobileDialogButton("mobile-history-button", "history-dialog");
  connectMobileDialogButton("mobile-settings-button", "settings-dialog");
  connectMobileDialogButton("mobile-about-button", "about-dialog");
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) setMobileMenu(false);
  });

  getElement("clear-history-button").addEventListener("click", function () {
    historyRecipeIds = [];
    saveToStorage("wfd-history", historyRecipeIds);
    showHistory();
    showMessage("Recipe history cleared");
  });
  getElement("dark-mode").addEventListener("change", function (event) {
    applyTheme(event.target.checked);
  });
  getElement("picker-mode").addEventListener("change", function (event) {
    pickerMode = event.target.value;
    saveToStorage("wfd-picker", pickerMode);
  });
}

function connectDialogs() {
  for (const dialog of document.querySelectorAll(".app-dialog")) {
    dialog.querySelector(".dialog-close").addEventListener("click", function () {
      dialog.close();
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", function () {
      // Do not move focus out of another dialog that just opened.
      if (document.querySelector("dialog[open]")) return;
      const triggerId = dialog.dataset.triggerId;
      if (triggerId) getElement(triggerId).focus();
    });
  }
}

function startApp() {
  connectButtons();
  connectDialogs();
  applyTheme(loadFromStorage("wfd-theme", "light") === "dark");
  if (pickerMode !== "sequential") pickerMode = "random";
  getElement("picker-mode").value = pickerMode;

  const requestedId = new URLSearchParams(window.location.search).get("recipe");
  let firstRecipeId;
  if (findRecipe(requestedId)) {
    firstRecipeId = requestedId;
  } else {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    firstRecipeId = recipes[randomIndex].id;
  }
  showRecipe(firstRecipeId);

  window.addEventListener("load", function () {
    document.querySelector(".recipe-card").scrollIntoView({ behavior: "smooth" });
  }, { once: true });
}

startApp();
