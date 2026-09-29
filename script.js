/* ===============================
   SEARCH FUNCTION
================================= */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

  searchInput.addEventListener("keyup", function () {

    let filter = searchInput.value.toLowerCase();
    let cards = document.querySelectorAll(".recipe-card");
    let noResults = document.getElementById("noResults");

    let visibleCount = 0;

    cards.forEach(function (card) {

      let title = card.querySelector("h2").textContent.toLowerCase();

      if (title.includes(filter)) {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }

    });

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? "block" : "none";
    }

  });

}


/* ===============================
   RECIPE DATABASE
================================= */

const recipes = {

  /* ===== VEG ===== */

  paneer: {
    title: "Paneer Tikka",
    image: "images/paneer.jpg",
    time: "35 min",
    calories: "320 cal",
    ingredients: [
      "200g Paneer (cubed)",
      "1 cup thick Yogurt",
      "1 tsp Red chili powder",
      "1 tsp Turmeric powder",
      "1 tsp Garam masala",
      "1 Capsicum (cubed)",
      "1 Onion (cubed)",
      "2 tbsp Lemon juice",
      "Salt to taste",
      "2 tsp Oil or ghee for grilling"
    ],
    steps: [
      "In a mixing bowl, whisk together yogurt, chili powder, turmeric, garam masala, lemon juice, and salt to create a smooth marinade.",
      "Add paneer cubes, capsicum, and onion to the marinade. Mix gently to coat all pieces evenly.",
      "Cover and refrigerate for at least 30 minutes to allow flavors to infuse.",
      "Preheat the grill or oven to medium-high heat. Thread marinated paneer and vegetables onto skewers.",
      "Grill for 12-15 minutes, turning occasionally until slightly charred and aromatic.",
      "Serve hot garnished with coriander leaves and mint chutney."
    ]
  },

  biryani: {
    title: "Vegetable Biryani",
    image: "images/biryani.jpg",
    time: "50 min",
    calories: "420 cal",
    ingredients: [
      "1.5 cups Basmati rice",
      "1 cup mixed vegetables (carrots, beans, peas, cauliflower)",
      "1 large Onion (thinly sliced)",
      "2 medium Tomatoes (chopped)",
      "2 tbsp Ghee",
      "1 tsp Biryani masala",
      "1 tsp Ginger-garlic paste",
      "Fresh coriander and mint leaves",
      "Salt to taste",
      "Optional: saffron strands soaked in warm milk"
    ],
    steps: [
      "Rinse basmati rice thoroughly and soak for 20 minutes. Cook until 70% done, then drain and set aside.",
      "Heat ghee in a pan, sauté onions until golden brown. Add ginger-garlic paste and cook for 1-2 minutes.",
      "Add chopped tomatoes, cook until soft. Add mixed vegetables, biryani masala, and salt. Cook for 5-7 minutes until veggies are tender-crisp.",
      "Layer the partially cooked rice over the vegetable masala in a heavy-bottomed pot.",
      "Sprinkle coriander, mint, and saffron milk on top. Cover tightly and cook on low flame (dum) for 15-20 minutes.",
      "Gently fluff rice before serving. Serve hot with raita or papad."
    ]
  },

  dosa: {
    title: "Masala Dosa",
    image: "images/dosa.jpg",
    time: "40 min",
    calories: "280 cal",
    ingredients: [
      "Dosa batter (fermented rice and urad dal)",
      "3-4 Potatoes (boiled and mashed)",
      "1 Onion (finely chopped)",
      "1 Green chili (finely chopped, optional)",
      "1/2 tsp Mustard seeds",
      "1/2 tsp Turmeric powder",
      "Salt to taste",
      "Fresh coriander leaves",
      "2 tsp Oil for cooking"
    ],
    steps: [
      "Heat oil in a pan and add mustard seeds. When they crackle, add onions and green chili, sauté until golden brown.",
      "Add turmeric powder and mashed potatoes. Mix thoroughly and cook for 2-3 minutes. Garnish with fresh coriander leaves.",
      "Heat a non-stick pan or tawa. Pour a ladleful of dosa batter and spread thinly in a circular shape.",
      "Place a portion of the potato filling on one side of the dosa and fold it over.",
      "Cook for 1-2 minutes until crispy. Serve hot with coconut chutney and sambar."
    ]
  },

  pasta: {
    title: "Veg Pasta",
    image: "images/pasta.jpg",
    time: "25 min",
    calories: "300 cal",
    ingredients: [
      "200g Pasta of choice",
      "1 cup mixed vegetables (bell peppers, carrots, broccoli, zucchini)",
      "1/2 cup Fresh cream",
      "1/2 cup Grated cheese (cheddar or mozzarella)",
      "2 tbsp Olive oil",
      "1 tsp Italian herbs",
      "Salt and pepper to taste",
      "2 cloves Garlic (minced)"
    ],
    steps: [
      "Boil pasta in salted water until al dente. Drain and set aside.",
      "Heat olive oil in a pan, sauté garlic until fragrant, then add mixed vegetables. Cook for 3-4 minutes until tender-crisp.",
      "Pour in cream, sprinkle Italian herbs, salt, and pepper. Simmer gently for 2 minutes.",
      "Add the cooked pasta to the pan and mix well, ensuring all pasta is coated with the creamy sauce.",
      "Sprinkle grated cheese on top, toss lightly, and serve hot."
    ]
  },

  noodles: {
    title: "Veg Noodles",
    image: "images/noodles.jpg",
    time: "20 min",
    calories: "300 cal",
    ingredients: [
      "200g Noodles",
      "1 cup Mixed vegetables (carrot, bell pepper, beans, cabbage)",
      "2 tbsp Oil",
      "2 tbsp Soy sauce",
      "2 cloves Garlic (chopped)",
      "1/2 tsp Salt",
      "1/4 tsp Pepper",
      "2 Spring onions (chopped)"
    ],
    steps: [
      "Boil noodles according to package instructions. Drain and set aside.",
      "Heat oil in a wok, add garlic and sauté until fragrant.",
      "Add vegetables and stir-fry on high heat for 3-4 minutes until crunchy-tender.",
      "Add noodles to the wok, pour soy sauce, salt, and pepper. Toss well to combine.",
      "Garnish with chopped spring onions and serve hot."
    ]
  },

  dal: {
    title: "Dal Makhani",
    image: "images/dal.jpg",
    time: "60 min",
    calories: "330 cal",
    ingredients: [
      "1 cup Black urad dal (whole black lentils)",
      "1/4 cup Rajma (kidney beans)",
      "2 tbsp Butter",
      "1/4 cup Cream",
      "1 cup Tomato puree",
      "1 tsp Ginger-garlic paste",
      "1 tsp Garam masala",
      "1 tsp Red chili powder",
      "Salt to taste",
      "Fresh coriander leaves for garnish"
    ],
    steps: [
      "Soak urad dal and rajma overnight in water.",
      "Pressure cook the soaked dal and rajma until soft but not mushy.",
      "In a pan, melt butter, add ginger-garlic paste and sauté until fragrant.",
      "Add tomato puree, red chili powder, and garam masala. Cook for 5 minutes.",
      "Add cooked dal, adjust consistency with water, and simmer for 30 minutes on low flame.",
      "Stir in cream before serving. Garnish with coriander leaves and serve hot with naan or rice."
    ]
  },

  vegfriedrice: {
    title: "Veg Fried Rice",
    image: "images/vegfriedrice.jpg",
    time: "20 min",
    calories: "260 cal",
    ingredients: [
      "2 cups Cooked rice (preferably cold rice)",
      "1/2 cup Carrots (chopped)",
      "1/2 cup Beans (chopped)",
      "1/4 cup Spring onion (chopped)",
      "2 cloves Garlic (minced)",
      "2 tbsp Soy sauce",
      "2 tbsp Oil",
      "Salt to taste"
    ],
    steps: [
      "Heat oil in a wok, add minced garlic and sauté until aromatic.",
      "Add carrots and beans, stir-fry for 3-4 minutes until tender-crisp.",
      "Add cooked rice and soy sauce, tossing well to combine all ingredients evenly.",
      "Adjust salt as needed. Sprinkle chopped spring onions on top.",
      "Serve hot as a main dish or side."
    ]
  },

  palakpaneer: {
    title: "Palak Paneer",
    image: "images/palakpaneer.jpg",
    time: "35 min",
    calories: "300 cal",
    ingredients: [
      "200g Paneer (cubed)",
      "3 cups Spinach leaves (washed)",
      "1 Onion (finely chopped)",
      "2 Tomatoes (chopped)",
      "2 tbsp Cream",
      "2 tsp Oil",
      "1/2 tsp Cumin seeds",
      "Salt and Garam masala to taste"
    ],
    steps: [
      "Blanch spinach leaves in boiling water for 2-3 minutes. Drain and blend into a smooth puree.",
      "Heat oil in a pan, add cumin seeds. Once they splutter, sauté onions until golden.",
      "Add tomatoes and cook until soft. Add salt and garam masala.",
      "Pour in spinach puree, mix well, and simmer for 5 minutes.",
      "Add paneer cubes, cook for another 2 minutes.",
      "Drizzle cream on top and serve hot with roti or naan."
    ]
  },

  vegmanchurian: {
    title: "Veg Manchurian",
    image: "images/manchurian.jpg",
    time: "30 min",
    calories: "280 cal",
    ingredients: [
      "1 cup Cabbage (grated)",
      "1/2 cup Carrots (grated)",
      "2 tbsp Corn flour",
      "2 tbsp All-purpose flour",
      "2 tbsp Oil (for frying)",
      "2 tbsp Soy sauce",
      "1 tsp Garlic (minced)",
      "1/4 cup Spring onions (chopped)",
      "Salt and pepper to taste"
    ],
    steps: [
      "Combine grated cabbage, carrots, corn flour, all-purpose flour, salt, and pepper to form a dough. Shape into small balls.",
      "Heat oil in a deep pan and fry the balls until golden brown. Drain on paper towels.",
      "In another pan, heat 1 tsp oil, sauté garlic, then add soy sauce and chopped spring onions.",
      "Add fried balls to the sauce, toss gently to coat evenly.",
      "Serve hot as an appetizer or side dish."
    ]
  },

  cholebhature: {
    title: "Chole Bhature",
    image: "images/cholebhature.jpg",
    time: "45 min",
    calories: "420 cal",
    ingredients: [
      "1 cup Chickpeas (soaked overnight)",
      "1 Onion (chopped)",
      "2 Tomatoes (chopped)",
      "1 tsp Ginger-garlic paste",
      "1 tsp Chole masala",
      "Salt to taste",
      "Oil for frying bhature",
      "2 cups All-purpose flour (for bhature)",
      "1/2 cup Yogurt (for dough)",
      "Water as needed"
    ],
    steps: [
      "Pressure cook soaked chickpeas until soft.",
      "In a pan, heat oil, sauté onions until golden, add ginger-garlic paste and tomatoes. Cook to make masala.",
      "Add cooked chickpeas and chole masala. Simmer for 10-15 minutes.",
      "Prepare bhature dough with flour, yogurt, salt, and water. Knead and let rest for 20 minutes.",
      "Roll dough into discs and deep fry until puffed and golden brown.",
      "Serve hot with chole, onions, and lemon wedges."
    ]
  },

  mushroommasala: {
  title: "Mushroom Masala",
  image: "images/mushroom.jpg",
  time: "30 min",
  calories: "250 cal",
  ingredients: [
    "250g Button mushrooms (sliced)",
    "1 Onion (finely chopped)",
    "2 Tomatoes (chopped)",
    "1 tsp Ginger-garlic paste",
    "1/2 tsp Turmeric powder",
    "1 tsp Red chili powder",
    "1 tsp Garam masala",
    "2 tbsp Oil",
    "Salt to taste",
    "Fresh coriander for garnish"
  ],
  steps: [
    "Heat oil in a pan, sauté onions until golden brown.",
    "Add ginger-garlic paste and cook for 1 minute.",
    "Add tomatoes, turmeric, red chili powder, and salt. Cook until tomatoes soften.",
    "Add mushrooms and cook until tender.",
    "Sprinkle garam masala, garnish with coriander, and serve hot with roti or rice."
  ]
},

stuffedcapsicum: {
  title: "Stuffed Capsicum",
  image: "images/stuffedcapsicum.jpg",
  time: "40 min",
  calories: "280 cal",
  ingredients: [
    "4 Large bell peppers",
    "1 cup Boiled rice",
    "1/2 cup Mixed vegetables (carrot, peas)",
    "1 Onion (chopped)",
    "1 tsp Garam masala",
    "1 tsp Cumin seeds",
    "2 tbsp Oil",
    "Salt to taste",
    "Fresh coriander for garnish"
  ],
  steps: [
    "Cut the tops of bell peppers and remove seeds.",
    "Heat oil, add cumin seeds and onions. Sauté until golden.",
    "Add mixed vegetables, cooked rice, garam masala, and salt. Mix well.",
    "Stuff the mixture into bell peppers and place in a baking dish.",
    "Bake at 180°C for 20 minutes. Garnish with coriander and serve."
  ]
},

  /* ===== NONVEG ===== */

chicken65: {
  title: "Chicken 65",
  image: "images/chicken65.jpg",
  time: "35 min",
  calories: "340 cal",
  ingredients: [
    "500g Chicken (boneless, cut into bite-sized pieces)",
    "1 tsp Red chili powder",
    "1 tsp Turmeric powder",
    "1 tsp Ginger-garlic paste",
    "1 Egg (beaten)",
    "2 tbsp Corn flour",
    "1 tsp Lemon juice",
    "Salt to taste",
    "Oil for deep frying",
    "Curry leaves for garnish",
    "Green chilies sliced (optional)"
  ],
  steps: [
    "Marinate chicken with red chili powder, turmeric, ginger-garlic paste, lemon juice, and salt for 20 minutes.",
    "Add beaten egg and corn flour to the marinated chicken and mix well to coat evenly.",
    "Heat oil in a deep pan for frying. Fry the chicken pieces until golden brown and crispy. Drain on paper towels.",
    "In another small pan, lightly sauté curry leaves and sliced green chilies in a tsp of oil and pour over the fried chicken.",
    "Serve hot as an appetizer or snack."
  ]
},

chickenbiryani: {
  title: "Chicken Biryani",
  image: "images/cbiryani.jpg",
  time: "60 min",
  calories: "550 cal",
  ingredients: [
    "500g Chicken (cut into pieces)",
    "2 cups Basmati rice",
    "1 large Onion (sliced)",
    "2 Tomatoes (chopped)",
    "1/2 cup Yogurt",
    "2 tbsp Biryani masala",
    "1 tsp Ginger-garlic paste",
    "1/2 tsp Turmeric powder",
    "1 tsp Red chili powder",
    "2 tbsp Oil or ghee",
    "Fresh coriander and mint leaves",
    "Salt to taste",
    "Optional: saffron soaked in warm milk"
  ],
  steps: [
    "Rinse and soak rice for 20 minutes.",
    "Heat oil or ghee in a pan, sauté onions until golden. Add ginger-garlic paste and cook for 1 minute.",
    "Add chicken pieces, turmeric, chili powder, and salt. Cook for 5-7 minutes until chicken is lightly browned.",
    "Stir in chopped tomatoes, yogurt, and biryani masala. Cook until chicken is tender and gravy thickens.",
    "Par-cook the rice until 70% done, then drain.",
    "Layer rice over chicken in a heavy-bottomed pot. Sprinkle coriander, mint, and saffron milk if using.",
    "Cover tightly and cook on low flame (dum) for 20 minutes.",
    "Fluff rice gently and serve hot with raita."
  ]
},

roganjosh: {
  title: "Mutton Rogan Josh",
  image: "images/rogan.jpg",
  time: "90 min",
  calories: "450 cal",
  ingredients: [
    "500g Mutton (with bone for flavor)",
    "2 Onions (finely sliced)",
    "2 Tomatoes (pureed)",
    "1 tsp Ginger-garlic paste",
    "1 tsp Red chili powder",
    "1/2 tsp Turmeric powder",
    "1 tsp Garam masala",
    "1/2 cup Yogurt",
    "3 tbsp Oil",
    "Salt to taste",
    "Fresh coriander leaves for garnish"
  ],
  steps: [
    "Heat oil in a pan, sauté onions until golden brown.",
    "Add ginger-garlic paste and sauté for 1-2 minutes.",
    "Add mutton pieces and sear on high heat until lightly browned.",
    "Add turmeric, red chili powder, and salt. Mix well.",
    "Stir in tomato puree and cook until oil separates from the masala.",
    "Lower the flame and add yogurt gradually while stirring to avoid curdling.",
    "Cover and simmer for 60 minutes until mutton is tender.",
    "Sprinkle garam masala and garnish with fresh coriander before serving with rice or naan."
  ]
},

eggfried: {
  title: "Egg Fried Rice",
  image: "images/egg.jpg",
  time: "25 min",
  calories: "380 cal",
  ingredients: [
    "2 cups Cooked rice (preferably cold rice)",
    "2 Eggs",
    "1/2 cup Carrots and beans (chopped)",
    "2 cloves Garlic (minced)",
    "2 tbsp Soy sauce",
    "2 tbsp Oil",
    "1/4 tsp Salt",
    "1/4 tsp Black pepper",
    "2 Spring onions (chopped)"
  ],
  steps: [
    "Heat oil in a wok or large pan over medium flame.",
    "Add minced garlic and sauté until fragrant.",
    "Crack eggs into the pan and scramble until cooked.",
    "Add chopped carrots and beans, cook for 3-4 minutes until tender.",
    "Add cooked rice and soy sauce. Mix gently ensuring rice and eggs are evenly combined.",
    "Season with salt and pepper. Garnish with chopped spring onions and serve hot."
  ]
},

chickenfriedrice: {
  title: "Chicken Fried Rice",
  image: "images/chickenfriedrice.jpg",
  time: "25 min",
  calories: "380 cal",
  ingredients: [
    "2 cups Cooked rice",
    "200g Chicken (cubed)",
    "1/2 cup Mixed vegetables (carrot, beans, capsicum)",
    "2 tbsp Oil",
    "2 tbsp Soy sauce",
    "2 cloves Garlic (minced)",
    "Salt and pepper to taste",
    "Spring onions for garnish"
  ],
  steps: [
    "Heat oil in a wok, sauté garlic until aromatic.",
    "Add chicken pieces and cook until lightly browned.",
    "Add vegetables and cook for 3-4 minutes until tender-crisp.",
    "Add cooked rice and soy sauce, mixing gently to coat all ingredients evenly.",
    "Season with salt and pepper. Garnish with spring onions and serve hot."
  ]
},

butterchicken: {
  title: "Butter Chicken",
  image: "images/butterchicken.jpg",
  time: "40 min",
  calories: "450 cal",
  ingredients: [
    "500g Chicken (boneless, cut into pieces)",
    "2 tbsp Butter",
    "1 cup Tomato puree",
    "1/2 cup Cream",
    "1 tsp Ginger-garlic paste",
    "1 tsp Red chili powder",
    "1 tsp Garam masala",
    "1/2 tsp Turmeric powder",
    "Salt to taste",
    "Fresh coriander for garnish"
  ],
  steps: [
    "Marinate chicken with ginger-garlic paste, red chili powder, turmeric, and salt for 20 minutes.",
    "Heat butter in a pan, sauté marinated chicken until partially cooked.",
    "Add tomato puree and cook for 5-7 minutes until oil separates.",
    "Add cream and garam masala, simmer for 5 more minutes until chicken is tender and gravy thick.",
    "Garnish with coriander leaves and serve hot with naan or rice."
  ]
},

chickencurry: {
  title: "Chicken Curry",
  image: "images/chickencurry.jpg",
  time: "45 min",
  calories: "420 cal",
  ingredients: [
    "500g Chicken (cut into pieces)",
    "1 Onion (chopped)",
    "2 Tomatoes (chopped)",
    "1 tsp Ginger-garlic paste",
    "1/2 tsp Turmeric powder",
    "1 tsp Red chili powder",
    "1 tsp Garam masala",
    "2 tbsp Oil",
    "Salt to taste",
    "Fresh coriander leaves"
  ],
  steps: [
    "Heat oil in a pan, sauté onions until golden brown.",
    "Add ginger-garlic paste and cook for 1 minute.",
    "Add tomatoes, turmeric, chili powder, and salt. Cook until tomatoes soften and oil separates.",
    "Add chicken pieces, cover, and cook for 20 minutes until chicken is cooked through.",
    "Sprinkle garam masala and garnish with coriander. Serve hot with rice or roti."
  ]
},

fishfry: {
  title: "Fish Fry",
  image: "images/fishfry.jpg",
  time: "30 min",
  calories: "350 cal",
  ingredients: [
    "500g Fish fillets (cleaned and cut into pieces)",
    "1 tsp Red chili powder",
    "1/2 tsp Turmeric powder",
    "1 tsp Garlic paste",
    "2 tsp Lemon juice",
    "Salt to taste",
    "Oil for frying"
  ],
  steps: [
    "Marinate fish fillets with red chili powder, turmeric, garlic paste, lemon juice, and salt for 15 minutes.",
    "Heat oil in a frying pan over medium flame.",
    "Fry fish pieces until golden brown and crisp on both sides.",
    "Serve hot with lemon wedges and onion slices."
  ]
},

shrimp: {
  title: "Shrimp Fry",
  image: "images/shrimp.jpg",
  time: "25 min",
  calories: "320 cal",
  ingredients: [
    "500g Shrimp (cleaned and deveined)",
    "2 tbsp Butter",
    "3 cloves Garlic (chopped)",
    "1 tsp Chili flakes",
    "Salt to taste",
    "1 tsp Lemon juice"
  ],
  steps: [
    "Clean and pat dry the shrimp.",
    "Heat butter in a pan, sauté garlic until fragrant.",
    "Add shrimp and chili flakes, cook for 4-5 minutes until pink and cooked through.",
    "Add salt and lemon juice. Toss gently and serve hot."
  ]
},

chickenlollipop: {
  title: "Chicken Lollipop",
  image: "images/chickenlollipop.jpg",
  time: "30 min",
  calories: "360 cal",
  ingredients: [
    "500g Chicken wings (frenched)",
    "2 tbsp Corn flour",
    "1 tbsp All-purpose flour",
    "1 tsp Garlic paste",
    "1 tsp Chili sauce",
    "Salt to taste",
    "Oil for deep frying"
  ],
  steps: [
    "Clean and shape chicken wings into lollipop form.",
    "Marinate with corn flour, all-purpose flour, garlic paste, chili sauce, and salt for 15 minutes.",
    "Heat oil in a deep pan and fry chicken until golden and crispy.",
    "Prepare chili garlic sauce separately, toss fried wings in the sauce, and serve hot."
  ]
},

prawncurry: {
  title: "Prawn Curry",
  image: "images/prawn.jpg",
  time: "35 min",
  calories: "360 cal",
  ingredients: [
    "500g Prawns (cleaned)",
    "1 Onion (chopped)",
    "2 Tomatoes (pureed)",
    "1 tsp Ginger-garlic paste",
    "1 tsp Red chili powder",
    "1/2 tsp Turmeric powder",
    "1 tsp Garam masala",
    "2 tbsp Oil",
    "Salt to taste",
    "Fresh coriander for garnish"
  ],
  steps: [
    "Heat oil, sauté onions until golden brown.",
    "Add ginger-garlic paste and cook for 1 minute.",
    "Add tomato puree, turmeric, chili powder, and salt. Cook for 5 minutes.",
    "Add prawns and cook until they turn pink.",
    "Sprinkle garam masala, garnish with coriander, and serve hot with rice."
  ]
},

eggcurry: {
  title: "Egg Curry",
  image: "images/egg.jpg",
  time: "30 min",
  calories: "330 cal",
  ingredients: [
    "4 Boiled eggs",
    "1 Onion (finely chopped)",
    "2 Tomatoes (pureed)",
    "1 tsp Ginger-garlic paste",
    "1 tsp Red chili powder",
    "1/2 tsp Turmeric powder",
    "1 tsp Garam masala",
    "2 tbsp Oil",
    "Salt to taste",
    "Fresh coriander for garnish"
  ],
  steps: [
    "Heat oil, sauté onions until golden brown.",
    "Add ginger-garlic paste and cook for 1 minute.",
    "Add tomato puree, turmeric, chili powder, and salt. Cook until oil separates.",
    "Add boiled eggs, simmer for 5-7 minutes.",
    "Sprinkle garam masala, garnish with coriander, and serve with rice or roti."
  ]
},


  /* ===== HEALTHY ===== */

  quinoa: {
  title: "Quinoa Power Salad",
  image: "images/quinoa.jpg",
  time: "20 min",
  calories: "220 cal",
  ingredients: [
    "1 cup Quinoa (rinsed and drained)",
    "1 Tomato (diced)",
    "1/2 Cucumber (diced)",
    "1/4 cup Red bell pepper (diced)",
    "2 tbsp Olive oil",
    "1 tsp Lemon juice",
    "Salt and pepper to taste",
    "Fresh parsley or coriander for garnish"
  ],
  steps: [
    "Cook quinoa according to package instructions and let it cool.",
    "Chop all vegetables into small, uniform pieces.",
    "In a large bowl, combine quinoa and vegetables.",
    "Drizzle olive oil and lemon juice. Season with salt and pepper.",
    "Mix gently, garnish with parsley, and serve chilled or at room temperature."
  ]
},

buddhabowl: {
  title: "Buddha Bowl",
  image: "images/buddha.jpg",
  time: "30 min",
  calories: "350 cal",
  ingredients: [
    "1 cup Brown rice (cooked)",
    "1 cup Roasted vegetables (carrot, bell pepper, zucchini)",
    "1/2 cup Chickpeas (cooked or canned)",
    "2 tbsp Tahini sauce",
    "1 tbsp Olive oil",
    "Salt and pepper to taste",
    "Lemon wedge for serving"
  ],
  steps: [
    "Cook brown rice and keep warm.",
    "Roast vegetables in the oven with olive oil, salt, and pepper until tender.",
    "Assemble the bowl by placing rice as the base, then add roasted vegetables and chickpeas.",
    "Drizzle tahini sauce over the top.",
    "Serve with a lemon wedge for extra freshness."
  ]
},

brownrice: {
  title: "Brown Rice Veggie Bowl",
  image: "images/brown.jpg",
  time: "30 min",
  calories: "290 cal",
  ingredients: [
    "1 cup Brown rice (cooked)",
    "1 cup Mixed vegetables (carrot, beans, broccoli)",
    "1 tbsp Olive oil",
    "1/2 tsp Salt",
    "1/4 tsp Black pepper",
    "1 tsp Lemon juice"
  ],
  steps: [
    "Cook brown rice and set aside.",
    "Steam or lightly sauté mixed vegetables in olive oil until tender-crisp.",
    "Combine rice and vegetables in a bowl.",
    "Season with salt, pepper, and lemon juice.",
    "Mix well and serve warm."
  ]
},

acai: {
  title: "Acai Smoothie Bowl",
  image: "images/acai.jpg",
  time: "10 min",
  calories: "180 cal",
  ingredients: [
    "100g Acai puree (frozen)",
    "1 Banana (sliced)",
    "1/4 cup Granola",
    "1/2 cup Milk (or plant-based milk)",
    "Fresh berries for topping",
    "Honey for drizzle"
  ],
  steps: [
    "Blend frozen acai puree with banana and milk until smooth.",
    "Pour smoothie into a bowl.",
    "Top with granola, fresh berries, and a drizzle of honey.",
    "Serve immediately for a refreshing breakfast or snack."
  ]
},

oats: {
  title: "Oats Porridge",
  image: "images/oats.jpg",
  time: "10 min",
  calories: "180 cal",
  ingredients: [
    "1/2 cup Oats",
    "1 cup Milk (or water)",
    "1 tsp Honey",
    "1/4 cup Mixed nuts (almonds, walnuts, cashews)",
    "1/4 cup Fresh fruits (banana, berries)"
  ],
  steps: [
    "Heat milk in a saucepan, add oats and cook on low flame until soft.",
    "Add honey and stir well.",
    "Pour porridge into a bowl and top with nuts and fruits.",
    "Serve warm for a healthy breakfast."
  ]
},

fruitsalad: {
  title: "Fruit Salad",
  image: "images/fruitsalad.jpg",
  time: "10 min",
  calories: "150 cal",
  ingredients: [
    "1 Apple (diced)",
    "1 Banana (sliced)",
    "5 Strawberries (sliced)",
    "1/2 cup Grapes (halved)",
    "1 tbsp Honey",
    "Mint leaves for garnish"
  ],
  steps: [
    "Wash and chop all fruits into bite-sized pieces.",
    "Mix fruits gently in a large bowl.",
    "Drizzle honey on top for natural sweetness.",
    "Garnish with fresh mint leaves and serve chilled."
  ]
},

grilledchicken: {
  title: "Grilled Chicken Salad",
  image: "images/grilledchicken.jpg",
  time: "25 min",
  calories: "280 cal",
  ingredients: [
    "200g Chicken breast (grilled and sliced)",
    "1 cup Lettuce (chopped)",
    "1 Tomato (diced)",
    "1/2 Cucumber (sliced)",
    "1 tbsp Olive oil",
    "Salt and pepper to taste",
    "Lemon wedge (optional)"
  ],
  steps: [
    "Season chicken with salt and pepper and grill until fully cooked.",
    "Chop lettuce, tomato, and cucumber into small pieces.",
    "Slice the grilled chicken and place on top of vegetables.",
    "Drizzle olive oil and serve with a lemon wedge for extra flavor."
  ]
},

vegsoup: {
  title: "Vegetable Soup",
  image: "images/vegsoup.jpg",
  time: "20 min",
  calories: "120 cal",
  ingredients: [
    "1 Carrot (diced)",
    "1/2 cup Beans (chopped)",
    "1/2 cup Cabbage (shredded)",
    "1 clove Garlic (minced)",
    "4 cups Water or vegetable broth",
    "Salt to taste",
    "Black pepper to taste"
  ],
  steps: [
    "Chop all vegetables into small pieces.",
    "Boil water or broth in a saucepan.",
    "Add vegetables and garlic, cook for 10 minutes until tender.",
    "Season with salt and black pepper.",
    "Serve hot, optionally with a sprinkle of herbs on top."
  ]
},

avocado: {
  title: "Avocado Toast",
  image: "images/avocado.jpg",
  time: "10 min",
  calories: "200 cal",
  ingredients: [
    "2 slices Bread (whole wheat or multigrain)",
    "1 Ripe avocado",
    "1 tsp Olive oil",
    "1/4 tsp Salt",
    "1/2 tsp Lemon juice",
    "Optional toppings: cherry tomatoes, seeds, chili flakes"
  ],
  steps: [
    "Toast the bread slices until golden and crispy.",
    "Mash avocado with salt, lemon juice, and olive oil.",
    "Spread avocado mixture evenly on toast.",
    "Top with optional toppings like cherry tomatoes, seeds, or chili flakes.",
    "Serve immediately as a nutritious breakfast or snack."
  ]
},

parfait: {
  title: "Greek Yogurt Parfait",
  image: "images/parfait.jpg",
  time: "10 min",
  calories: "160 cal",
  ingredients: [
    "1 cup Greek yogurt",
    "1/4 cup Granola",
    "1/4 cup Strawberries (chopped)",
    "1/4 cup Blueberries",
    "1 tsp Honey",
    "1 tbsp Nuts (almonds, walnuts)"
  ],
  steps: [
    "Take a glass or bowl for layering.",
    "Add a layer of Greek yogurt at the bottom.",
    "Add a layer of chopped strawberries and blueberries.",
    "Add a layer of granola and sprinkle nuts on top.",
    "Drizzle honey and repeat layers if desired.",
    "Serve chilled as a healthy dessert or breakfast."
  ]
},

chickpeasalad: {
  title: "Chickpea Salad",
  image: "images/chickpea.jpg",
  time: "15 min",
  calories: "200 cal",
  ingredients: [
    "1 cup Boiled chickpeas",
    "1 Tomato (diced)",
    "1/2 Cucumber (diced)",
    "1/4 cup Red onion (chopped)",
    "1 tsp Olive oil",
    "1 tsp Lemon juice",
    "Salt and pepper to taste",
    "Fresh parsley for garnish"
  ],
  steps: [
    "Combine chickpeas, tomato, cucumber, and onion in a bowl.",
    "Drizzle olive oil and lemon juice.",
    "Season with salt and pepper, mix well.",
    "Garnish with fresh parsley and serve chilled."
  ]
},

spinachsmoothie: {
  title: "Spinach Smoothie",
  image: "images/spinach.jpg",
  time: "10 min",
  calories: "150 cal",
  ingredients: [
    "2 cups Spinach leaves",
    "1 Banana",
    "1/2 cup Greek yogurt",
    "1/2 cup Milk (or plant-based milk)",
    "1 tsp Honey",
    "Ice cubes as needed"
  ],
  steps: [
    "Blend spinach, banana, yogurt, milk, and honey until smooth.",
    "Add ice cubes if desired and blend again.",
    "Pour into a glass and serve immediately as a healthy breakfast or snack."
  ]
},

};


/* ===============================
   VIEW RECIPE PAGE
================================= */

document.addEventListener("DOMContentLoaded", function () {

  const backBtn = document.getElementById("backButton");

  if (backBtn) {

    const params = new URLSearchParams(window.location.search);
    const fromPage = params.get("from");

    if (fromPage) {
      backBtn.href = fromPage;
    } else {
      backBtn.href = "index.html";
    }

  }


  const recipeContainer = document.getElementById("recipeDetails");

  if (recipeContainer) {

    const params = new URLSearchParams(window.location.search);
    const recipeName = params.get("recipe");

    if (recipes[recipeName]) {

      const r = recipes[recipeName];

      recipeContainer.innerHTML = `

        <img src="${r.image}" class="recipe-image">

        <h1>${r.title}</h1>

        <p class="recipe-subtitle">
          Delicious homemade recipe prepared with fresh ingredients.
        </p>

        <div class="recipe-meta">
          <span>⏱ ${r.time}</span>
          <span>🔥 ${r.calories}</span>
        </div>

        <div class="recipe-content-grid">

          <div>
            <h2>Ingredients</h2>
            <ul>
              ${r.ingredients.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>

          <div>
            <h2>Preparation</h2>
            <ol>
              ${r.steps.map(step => `<li>${step}</li>`).join("")}
            </ol>
          </div>

        </div>
      `;

    } else {
      recipeContainer.innerHTML =
        `<h2 style="text-align:center">Recipe not found 😕</h2>`;
    }

  }

});
