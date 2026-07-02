/* Stellas Deutsch — авто-сборка. Постеры: Wikipedia. Не редактировать вручную. */
const FILMS = [
  {
    "id": "shaun",
    "title": "Барашек Шон",
    "titleDe": "Shaun das Schaf",
    "year": 2007,
    "level": "A0",
    "kind": "Мультсериал",
    "genre": [
      "Комедия",
      "Для малышей"
    ],
    "rating": 4.8,
    "duration": "≈7 мин",
    "review": "Слов нет совсем. Только блеянье и музыка. Шон хитрый. Ферма живая. Смешно без перевода.",
    "why": "Речи ноль. Понятно всем.",
    "poster": {
      "icon": "🐑",
      "grad": "linear-gradient(160deg,#6f9bff,#1b3a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/0/01/Shaun_the_Sheep_MoviePoster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Shaun%20das%20Schaf"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Shaun%20das%20Schaf%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "maulwurf",
    "title": "Кротик",
    "titleDe": "Der kleine Maulwurf",
    "year": 1957,
    "level": "A0",
    "kind": "Мультсериал",
    "genre": [
      "Приключения",
      "Для малышей"
    ],
    "rating": 4.6,
    "duration": "≈10 мин",
    "review": "Маленький крот. Большое сердце. Говорит редко. Всё показывает мимикой. Добрая классика.",
    "why": "Почти без диалогов. Одни картинки.",
    "poster": {
      "icon": "🐭",
      "grad": "linear-gradient(160deg,#8e5bef,#3a1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/4/4a/Krtek_%28The_Little_Mole%29.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20kleine%20Maulwurf"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20kleine%20Maulwurf%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "maja",
    "title": "Пчёлка Майя",
    "titleDe": "Die Biene Maja",
    "year": 1975,
    "level": "A0",
    "kind": "Мультсериал",
    "genre": [
      "Приключения",
      "Для малышей"
    ],
    "rating": 4.4,
    "duration": "≈25 мин",
    "review": "Майя летает по лугу. Знакомится с жуками. Задаёт вопросы. Речь медленная и ясная.",
    "why": "Простые фразы. Медленный темп.",
    "poster": {
      "icon": "🐝",
      "grad": "linear-gradient(160deg,#ef9a5b,#8f4a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/7/78/Maya_the_Bee_Movie.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Die%20Biene%20Maja"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Die%20Biene%20Maja%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "peppa",
    "title": "Свинка Пеппа",
    "titleDe": "Peppa Wutz",
    "year": 2004,
    "level": "A0",
    "kind": "Мультсериал",
    "genre": [
      "Для малышей"
    ],
    "rating": 4.3,
    "duration": "≈5 мин",
    "review": "Маленькие серии. Простые фразы. Семья, лужи, друзья. Дети учат язык именно так.",
    "why": "Короткие предложения. Повтор слов.",
    "poster": {
      "icon": "🐷",
      "grad": "linear-gradient(160deg,#5bef8e,#1b8f52)",
      "img": "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Peppa_Pig_logo.svg/500px-Peppa_Pig_logo.svg.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Peppa%20Wutz"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Peppa%20Wutz%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "sandmann",
    "title": "Песочный человечек",
    "titleDe": "Das Sandmännchen",
    "year": 1959,
    "level": "A0",
    "kind": "Мультсериал",
    "genre": [
      "Спокойное",
      "Для малышей"
    ],
    "rating": 4.2,
    "duration": "≈6 мин",
    "review": "Сказка перед сном. Тихо и мягко. Короткие истории. Голос спокойный. Немецкий как колыбельная.",
    "why": "Спокойный голос. Простые сказки.",
    "poster": {
      "icon": "🌙",
      "grad": "linear-gradient(160deg,#ff5b9c,#8f1b52)",
      "img": "https://upload.wikimedia.org/wikipedia/en/3/30/Unser_Sandm%C3%A4nnchen_cover_crop.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Das%20Sandm%C3%A4nnchen"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Das%20Sandm%C3%A4nnchen%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "pettson",
    "title": "Петсон и Финдус",
    "titleDe": "Pettersson und Findus",
    "year": 1999,
    "level": "A0",
    "kind": "Мультфильм",
    "genre": [
      "Семейное",
      "Для малышей"
    ],
    "rating": 4.4,
    "duration": "≈80 мин",
    "review": "Старик и котёнок. Домик в деревне. Тёплые истории. Ничего не спешит. Уютно, как плед.",
    "why": "Медленный темп. Чёткая речь.",
    "poster": {
      "icon": "🐱",
      "grad": "linear-gradient(160deg,#5bd6ef,#1b6f8f)",
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/90/Pettson_och_Findus.JPG"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Pettersson%20und%20Findus"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Pettersson%20und%20Findus%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "gruffelo",
    "title": "Груффало",
    "titleDe": "Der Grüffelo",
    "year": 2011,
    "level": "A0",
    "kind": "Мультфильм",
    "genre": [
      "Сказка",
      "Для малышей"
    ],
    "rating": 4.7,
    "duration": "≈27 мин",
    "review": "Мышонок идёт по лесу. Придумывает монстра. Монстр оказался настоящим. Всё в рифму.",
    "why": "Стихи и рифмы. Легко запомнить.",
    "poster": {
      "icon": "🌲",
      "grad": "linear-gradient(160deg,#efc15b,#8f6a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/f/f2/The_Gruffalo_%28film%29_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20Gr%C3%BCffelo"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20Gr%C3%BCffelo%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "pingu",
    "title": "Пингу",
    "titleDe": "Pingu",
    "year": 1986,
    "level": "A0",
    "kind": "Мультсериал",
    "genre": [
      "Комедия",
      "Для малышей"
    ],
    "rating": 4.3,
    "duration": "≈5 мин",
    "review": "Пингвинёнок Пингу. Язык выдуманный. Всё понятно по действиям. Ноот-ноот! Мило и смешно.",
    "why": "Настоящих слов нет. Одни эмоции.",
    "poster": {
      "icon": "🐧",
      "grad": "linear-gradient(160deg,#c15bef,#5f1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/1/1b/Pingu_Logo.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Pingu"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Pingu%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "bluey",
    "title": "Блуи",
    "titleDe": "Bluey",
    "year": 2018,
    "level": "A0",
    "kind": "Мультсериал",
    "genre": [
      "Семейное",
      "Для малышей"
    ],
    "rating": 4.9,
    "duration": "≈8 мин",
    "review": "Щенок Блуи играет. Папа рядом. Игры простые. Слова тоже. Тепло и по-доброму.",
    "why": "Бытовые сценки. Ясная речь.",
    "poster": {
      "icon": "🐶",
      "grad": "linear-gradient(160deg,#ff8e5b,#8f3a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/4/48/Bluey_%282018_TV_series%29_title_card.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Bluey"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Bluey%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "masha",
    "title": "Маша и Медведь",
    "titleDe": "Mascha und der Bär",
    "year": 2009,
    "level": "A0",
    "kind": "Мультсериал",
    "genre": [
      "Комедия",
      "Для малышей"
    ],
    "rating": 4.2,
    "duration": "≈7 мин",
    "review": "Девочка и медведь. Много действия. Мало слов. Немецкий дубляж простой. Хаос и смех.",
    "why": "Действие важнее слов.",
    "poster": {
      "icon": "🐻",
      "grad": "linear-gradient(160deg,#5b6eef,#1b2a8f)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Mascha%20und%20der%20B%C3%A4r"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Mascha%20und%20der%20B%C3%A4r%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "paw-patrol",
    "title": "Щенячий патруль",
    "titleDe": "Paw Patrol",
    "year": 2013,
    "level": "A0",
    "kind": "Мультсериал",
    "genre": [
      "Приключения",
      "Для малышей"
    ],
    "rating": 4,
    "duration": "≈11 мин",
    "review": "Щенки спасают город. Каждый со своим делом. Фразы повторяются. Просто и бодро.",
    "why": "Повтор фраз. Понятные задачи.",
    "poster": {
      "icon": "🐕",
      "grad": "linear-gradient(160deg,#2ec5b6,#0a5d54)",
      "img": "https://upload.wikimedia.org/wikipedia/en/5/5f/PAW_Patrol_Logo.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Paw%20Patrol"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Paw%20Patrol%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "bob",
    "title": "Строитель Боб",
    "titleDe": "Bob der Baumeister",
    "year": 1998,
    "level": "A0",
    "kind": "Мультсериал",
    "genre": [
      "Для малышей"
    ],
    "rating": 4.1,
    "duration": "≈10 мин",
    "review": "Боб строит. Machen wir das? Ja! Простые вопросы и ответы. Идеально для первых слов.",
    "why": "Диалоги-шаблоны. Много повтора.",
    "poster": {
      "icon": "👷",
      "grad": "linear-gradient(160deg,#ef5b5b,#8f1b3a)",
      "img": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Bob_the_Builder_logo.svg/500px-Bob_the_Builder_logo.svg.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Bob%20der%20Baumeister"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Bob%20der%20Baumeister%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "lauras-stern",
    "title": "Звезда Лауры",
    "titleDe": "Lauras Stern",
    "year": 2004,
    "level": "A0",
    "kind": "Мультфильм",
    "genre": [
      "Сказка",
      "Для малышей"
    ],
    "rating": 4.3,
    "duration": "≈75 мин",
    "review": "Лаура нашла звезду. Подружилась. Заботится о ней. Тихая сказка. Речь мягкая и простая.",
    "why": "Спокойный сюжет. Простые слова.",
    "poster": {
      "icon": "⭐",
      "grad": "linear-gradient(160deg,#8eef5b,#4a8f1b)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Lauras%20Stern"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Lauras%20Stern%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "regenbogenfisch",
    "title": "Радужная рыбка",
    "titleDe": "Der Regenbogenfisch",
    "year": 1997,
    "level": "A0",
    "kind": "Мультфильм",
    "genre": [
      "Сказка",
      "Для малышей"
    ],
    "rating": 4.2,
    "duration": "≈25 мин",
    "review": "Рыбка с блестящей чешуёй. Учится делиться. Море красивое. История короткая и добрая.",
    "why": "Короткая сказка. Ясная мораль.",
    "poster": {
      "icon": "🐟",
      "grad": "linear-gradient(160deg,#b06ab3,#3a1b6e)",
      "img": "https://upload.wikimedia.org/wikipedia/en/9/9e/Rainbow_fish_original_cover.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20Regenbogenfisch"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20Regenbogenfisch%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "janosch",
    "title": "Ах, как чудесна Панама",
    "titleDe": "Oh, wie schön ist Panama",
    "year": 2006,
    "level": "A0",
    "kind": "Мультфильм",
    "genre": [
      "Приключения",
      "Для малышей"
    ],
    "rating": 4.4,
    "duration": "≈75 мин",
    "review": "Медвежонок и Тигрёнок ищут Панаму. Идут долго. Возвращаются домой. Тёплая история дружбы.",
    "why": "Медленное путешествие. Простая речь.",
    "poster": {
      "icon": "🐯",
      "grad": "linear-gradient(160deg,#6f9bff,#1b3a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/f/f0/The_Trip_to_Panama_Poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Oh%2C%20wie%20sch%C3%B6n%20ist%20Panama"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Oh%2C%20wie%20sch%C3%B6n%20ist%20Panama%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "sesamstrasse",
    "title": "Улица Сезам",
    "titleDe": "Sesamstraße",
    "year": 1973,
    "level": "A0",
    "kind": "Передача",
    "genre": [
      "Познавательное",
      "Для малышей"
    ],
    "rating": 4.3,
    "duration": "≈25 мин",
    "review": "Куклы учат буквы и числа. Играют и поют. Немецкая версия своя. Учит с самого нуля.",
    "why": "Учебная по задумке. Очень наглядно.",
    "poster": {
      "icon": "🧸",
      "grad": "linear-gradient(160deg,#8e5bef,#3a1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sesamstrasse_Logo.svg/960px-Sesamstrasse_Logo.svg.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Sesamstra%C3%9Fe"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Sesamstra%C3%9Fe%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "fireman-sam",
    "title": "Пожарный Сэм",
    "titleDe": "Feuerwehrmann Sam",
    "year": 1987,
    "level": "A0",
    "kind": "Мультсериал",
    "genre": [
      "Приключения",
      "Для малышей"
    ],
    "rating": 4,
    "duration": "≈10 мин",
    "review": "Сэм тушит пожары. Спасает соседей. Каждая серия про одно дело. Речь спокойная и чёткая.",
    "why": "Простые истории. Понятные слова.",
    "poster": {
      "icon": "🚒",
      "grad": "linear-gradient(160deg,#ef9a5b,#8f4a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/9/98/Fireman_Sam_logo.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Feuerwehrmann%20Sam"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Feuerwehrmann%20Sam%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "teletubbies",
    "title": "Телепузики",
    "titleDe": "Teletubbies",
    "year": 1997,
    "level": "A0",
    "kind": "Передача",
    "genre": [
      "Для малышей"
    ],
    "rating": 3.9,
    "duration": "≈25 мин",
    "review": "Для самых-самых маленьких. Слов мало. Всё медленно. Повтор постоянный. Спорно, но работает.",
    "why": "Максимально просто. Много повтора.",
    "poster": {
      "icon": "📺",
      "grad": "linear-gradient(160deg,#5bef8e,#1b8f52)",
      "img": "https://upload.wikimedia.org/wikipedia/en/5/5a/Teletubbies_Logo.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Teletubbies"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Teletubbies%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "mullewapp",
    "title": "Маленькая овечка Клара",
    "titleDe": "Mullewapp",
    "year": 2009,
    "level": "A0",
    "kind": "Мультфильм",
    "genre": [
      "Приключения",
      "Для малышей"
    ],
    "rating": 4.1,
    "duration": "≈75 мин",
    "review": "Овечка, поросёнок и мышонок. Друзья с фермы. Спасают друга. Немецкий добрый и ясный.",
    "why": "Простая дружба. Спокойный темп.",
    "poster": {
      "icon": "🐑",
      "grad": "linear-gradient(160deg,#ff5b9c,#8f1b52)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Mullewapp"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Mullewapp%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "kleiner-eisbaer",
    "title": "Маленький белый медвежонок",
    "titleDe": "Der kleine Eisbär",
    "year": 2001,
    "level": "A0",
    "kind": "Мультфильм",
    "genre": [
      "Приключения",
      "Для малышей"
    ],
    "rating": 4.2,
    "duration": "≈78 мин",
    "review": "Медвежонок Лары на льдине. Ищет друзей. Север белый и тихий. Речь простая, сердце большое.",
    "why": "Спокойный сюжет. Понятные слова.",
    "poster": {
      "icon": "🐻‍❄️",
      "grad": "linear-gradient(160deg,#5bd6ef,#1b6f8f)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20kleine%20Eisb%C3%A4r"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20kleine%20Eisb%C3%A4r%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "benjamin",
    "title": "Слонёнок Бенджамин",
    "titleDe": "Benjamin Blümchen",
    "year": 1977,
    "level": "A1",
    "kind": "Мультсериал",
    "genre": [
      "Приключения",
      "Семейное"
    ],
    "rating": 4.3,
    "duration": "≈25 мин",
    "review": "Говорящий слон живёт в зоопарке. Töröö! Помогает друзьям. Речь чистая и добрая.",
    "why": "Ясная дикция. Простые истории.",
    "poster": {
      "icon": "🐘",
      "grad": "linear-gradient(160deg,#efc15b,#8f6a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/commons/5/55/Benjamin_Blumchen_-_Swietochlowice.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Benjamin%20Bl%C3%BCmchen"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Benjamin%20Bl%C3%BCmchen%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "bibi",
    "title": "Ведьмочка Бибби",
    "titleDe": "Bibi Blocksberg",
    "year": 1980,
    "level": "A1",
    "kind": "Мультсериал",
    "genre": [
      "Магия",
      "Семейное"
    ],
    "rating": 4.2,
    "duration": "≈25 мин",
    "review": "Маленькая ведьма и метла. Eene meene — и магия! Сюжеты простые. Речь бодрая.",
    "why": "Понятные диалоги. Повтор заклинаний.",
    "poster": {
      "icon": "🧹",
      "grad": "linear-gradient(160deg,#c15bef,#5f1b8f)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Bibi%20Blocksberg"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Bibi%20Blocksberg%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "heidi",
    "title": "Хайди",
    "titleDe": "Heidi",
    "year": 1974,
    "level": "A1",
    "kind": "Аниме",
    "genre": [
      "Драма",
      "Семейное"
    ],
    "rating": 4.6,
    "duration": "≈25 мин",
    "review": "Девочка в Альпах. Дедушка, козы, горы. Дубляж чистый. История трогает. Тёплая классика.",
    "why": "Медленная речь. Понятные эмоции.",
    "poster": {
      "icon": "⛰️",
      "grad": "linear-gradient(160deg,#ff8e5b,#8f3a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/3/3a/Heidi_DVD_1.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Heidi"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Heidi%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "wickie",
    "title": "Вики и его друзья",
    "titleDe": "Wickie und die starken Männer",
    "year": 1974,
    "level": "A1",
    "kind": "Аниме",
    "genre": [
      "Приключения",
      "Семейное"
    ],
    "rating": 4.1,
    "duration": "≈25 мин",
    "review": "Маленький викинг. Большая голова. Хитрые идеи. Приключения на море. Добрый и понятный.",
    "why": "Ясная речь. Простые слова.",
    "poster": {
      "icon": "⛵",
      "grad": "linear-gradient(160deg,#5b6eef,#1b2a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/a/a2/Vicky_the_Viking_2019_DVD_Vol._1.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Wickie%20und%20die%20starken%20M%C3%A4nner"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Wickie%20und%20die%20starken%20M%C3%A4nner%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "nils",
    "title": "Путешествие Нильса",
    "titleDe": "Nils Holgersson",
    "year": 1980,
    "level": "A1",
    "kind": "Аниме",
    "genre": [
      "Приключения"
    ],
    "rating": 4.3,
    "duration": "≈25 мин",
    "review": "Мальчик стал крошечным. Улетел с гусями. Видит страну сверху. Речь ясная, приключение большое.",
    "why": "Понятный рассказ. Спокойный темп.",
    "poster": {
      "icon": "🦢",
      "grad": "linear-gradient(160deg,#2ec5b6,#0a5d54)",
      "img": "https://upload.wikimedia.org/wikipedia/commons/a/ab/The_The_Wonderful_Adventures_of_Nils_-_cover_by_Mary_Hamilton_Frye.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Nils%20Holgersson"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Nils%20Holgersson%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "pippi",
    "title": "Пеппи Длинныйчулок",
    "titleDe": "Pippi Langstrumpf",
    "year": 1969,
    "level": "A1",
    "kind": "Мультсериал",
    "genre": [
      "Комедия",
      "Семейное"
    ],
    "rating": 4.4,
    "duration": "≈25 мин",
    "review": "Самая сильная девочка в мире. Живёт без правил. Веселье и хаос. Речь простая и яркая.",
    "why": "Живые диалоги. Понятные ситуации.",
    "poster": {
      "icon": "🧦",
      "grad": "linear-gradient(160deg,#ef5b5b,#8f1b3a)",
      "img": "https://upload.wikimedia.org/wikipedia/en/b/b0/Pippi_Longstocking_%281969_TV_series_-_DVD_box_art%29.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Pippi%20Langstrumpf"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Pippi%20Langstrumpf%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "schluempfe",
    "title": "Смурфики",
    "titleDe": "Die Schlümpfe",
    "year": 1981,
    "level": "A1",
    "kind": "Мультсериал",
    "genre": [
      "Комедия",
      "Приключения"
    ],
    "rating": 4.2,
    "duration": "≈22 мин",
    "review": "Синие человечки в лесу. Гаргамель их ловит. Слово «смурф» вместо всего. Смешно и просто.",
    "why": "Короткие серии. Ясная речь.",
    "poster": {
      "icon": "🔵",
      "grad": "linear-gradient(160deg,#8eef5b,#4a8f1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/a/a1/The_Smurfs_%281981_TV_series%29_title_card.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Die%20Schl%C3%BCmpfe"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Die%20Schl%C3%BCmpfe%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "asterix",
    "title": "Астерикс из Галлии",
    "titleDe": "Asterix der Gallier",
    "year": 1967,
    "level": "A1",
    "kind": "Мультфильм",
    "genre": [
      "Комедия",
      "Приключения"
    ],
    "rating": 4.3,
    "duration": "≈68 мин",
    "review": "Галлы бьют римлян. Волшебное зелье даёт силу. Юмор простой. Немецкий бодрый и весёлый.",
    "why": "Понятный сюжет. Много действия.",
    "poster": {
      "icon": "⚔️",
      "grad": "linear-gradient(160deg,#b06ab3,#3a1b6e)",
      "img": "https://upload.wikimedia.org/wikipedia/en/1/1e/Asterix_the_gaul_french_cover.JPG"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Asterix%20der%20Gallier"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Asterix%20der%20Gallier%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "lucky-luke",
    "title": "Лаки Люк",
    "titleDe": "Lucky Luke",
    "year": 1984,
    "level": "A1",
    "kind": "Мультсериал",
    "genre": [
      "Комедия",
      "Приключения"
    ],
    "rating": 4.2,
    "duration": "≈25 мин",
    "review": "Ковбой стреляет быстрее тени. Дикий Запад. Каждая серия — одно дело. Речь ясная и ровная.",
    "why": "Простые истории. Понятные слова.",
    "poster": {
      "icon": "🤠",
      "grad": "linear-gradient(160deg,#6f9bff,#1b3a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/5/5f/Lucky_Luke_-_1984_series_closing_scene.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Lucky%20Luke"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Lucky%20Luke%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "tim-struppi",
    "title": "Приключения Тинтина",
    "titleDe": "Tim und Struppi",
    "year": 1991,
    "level": "A1",
    "kind": "Мультсериал",
    "genre": [
      "Приключения",
      "Детектив"
    ],
    "rating": 4.4,
    "duration": "≈22 мин",
    "review": "Репортёр и его пёс. Тайны по всему миру. Приключение за приключением. Речь чёткая.",
    "why": "Ясные диалоги. Интрига держит.",
    "poster": {
      "icon": "🐕",
      "grad": "linear-gradient(160deg,#8e5bef,#3a1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/f/f9/The_Adventures_of_Tintin_%28TV%29.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Tim%20und%20Struppi"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Tim%20und%20Struppi%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "pink-panther",
    "title": "Розовая пантера",
    "titleDe": "Der rosarote Panther",
    "year": 1963,
    "level": "A1",
    "kind": "Мультсериал",
    "genre": [
      "Комедия"
    ],
    "rating": 4.3,
    "duration": "≈7 мин",
    "review": "Пантера молчит. Музыка играет. Всё в жестах и трюках. Слов почти нет — а стиль есть.",
    "why": "Мало слов. Много визуала.",
    "poster": {
      "icon": "🐆",
      "grad": "linear-gradient(160deg,#ef9a5b,#8f4a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/b/b6/Pp_show_03.JPEG"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20rosarote%20Panther"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20rosarote%20Panther%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "tom-jerry",
    "title": "Том и Джерри",
    "titleDe": "Tom und Jerry",
    "year": 1940,
    "level": "A1",
    "kind": "Мультсериал",
    "genre": [
      "Комедия"
    ],
    "rating": 4.6,
    "duration": "≈7 мин",
    "review": "Кот гонится за мышью. Вечная война. Слов нет — а смешно всегда. Классика на все времена.",
    "why": "Без слов. Юмор понятен сразу.",
    "poster": {
      "icon": "🐭",
      "grad": "linear-gradient(160deg,#5bef8e,#1b8f52)",
      "img": "https://upload.wikimedia.org/wikipedia/en/b/b4/Tom_and_Jerry_-_The_Movie_Poster.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Tom%20und%20Jerry"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Tom%20und%20Jerry%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "once-upon-man",
    "title": "Жил-был человек",
    "titleDe": "Es war einmal… der Mensch",
    "year": 1978,
    "level": "A1",
    "kind": "Мультсериал",
    "genre": [
      "Познавательное"
    ],
    "rating": 4.5,
    "duration": "≈25 мин",
    "review": "История человечества в мультике. От пещер до космоса. Объясняет спокойно. Учит и развлекает.",
    "why": "Понятный рассказ. Знакомая история помогает.",
    "poster": {
      "icon": "👶",
      "grad": "linear-gradient(160deg,#ff5b9c,#8f1b52)",
      "img": "https://upload.wikimedia.org/wikipedia/en/a/a7/Once_Upon_a_Time..._Man.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Es%20war%20einmal%E2%80%A6%20der%20Mensch"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Es%20war%20einmal%E2%80%A6%20der%20Mensch%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "ronja",
    "title": "Ронья, дочь разбойника",
    "titleDe": "Ronja Räubertochter",
    "year": 2014,
    "level": "A1",
    "kind": "Аниме",
    "genre": [
      "Приключения",
      "Семейное"
    ],
    "rating": 4.4,
    "duration": "≈25 мин",
    "review": "Дочь разбойника в лесу. Дружит с врагом. Природа огромная. Речь спокойная, история сильная.",
    "why": "Медленный темп. Ясные диалоги.",
    "poster": {
      "icon": "🏹",
      "grad": "linear-gradient(160deg,#5bd6ef,#1b6f8f)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Ronja%20R%C3%A4ubertochter"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Ronja%20R%C3%A4ubertochter%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "dschungelbuch-anime",
    "title": "Книга джунглей: Маугли",
    "titleDe": "Das Dschungelbuch",
    "year": 1989,
    "level": "A1",
    "kind": "Аниме",
    "genre": [
      "Приключения"
    ],
    "rating": 4.3,
    "duration": "≈25 мин",
    "review": "Маугли растёт среди волков. Багира и Балу рядом. Шерхан охотится. Речь ясная, джунгли живые.",
    "why": "Понятный сюжет. Простые фразы.",
    "poster": {
      "icon": "🐯",
      "grad": "linear-gradient(160deg,#efc15b,#8f6a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/f/fb/Jungle-Book-Opening.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Das%20Dschungelbuch"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Das%20Dschungelbuch%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "michel",
    "title": "Эмиль из Лённеберги",
    "titleDe": "Michel aus Lönneberga",
    "year": 1975,
    "level": "A1",
    "kind": "Мультсериал",
    "genre": [
      "Комедия",
      "Семейное"
    ],
    "rating": 4.4,
    "duration": "≈25 мин",
    "review": "Мальчик с фермы вечно в проделках. Папа злится. Деревня добрая. Речь простая и тёплая.",
    "why": "Бытовые сценки. Ясные слова.",
    "poster": {
      "icon": "🧑‍🌾",
      "grad": "linear-gradient(160deg,#c15bef,#5f1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/5/5b/EmilIL%C3%B6nneberga.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Michel%20aus%20L%C3%B6nneberga"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Michel%20aus%20L%C3%B6nneberga%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "conni",
    "title": "Конни",
    "titleDe": "Conni",
    "year": 2012,
    "level": "A1",
    "kind": "Мультсериал",
    "genre": [
      "Семейное",
      "Для малышей"
    ],
    "rating": 4.1,
    "duration": "≈13 мин",
    "review": "Девочка Конни в обычной жизни. Школа, зоопарк, врач. Речь очень чистая. Учебно и мило.",
    "why": "Бытовая лексика. Медленная речь.",
    "poster": {
      "icon": "🎀",
      "grad": "linear-gradient(160deg,#ff8e5b,#8f3a1b)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Conni"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Conni%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "kleiner-koenig",
    "title": "Маленький король Матиуш",
    "titleDe": "Der kleine König",
    "year": 2013,
    "level": "A1",
    "kind": "Мультсериал",
    "genre": [
      "Комедия",
      "Для малышей"
    ],
    "rating": 4,
    "duration": "≈9 мин",
    "review": "Крошечный король в большом замке. Играет и шалит. Слов немного. Всё понятно и весело.",
    "why": "Короткие серии. Простая речь.",
    "poster": {
      "icon": "👑",
      "grad": "linear-gradient(160deg,#5b6eef,#1b2a8f)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20kleine%20K%C3%B6nig"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20kleine%20K%C3%B6nig%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "kleines-gespenst",
    "title": "Маленькое привидение",
    "titleDe": "Das kleine Gespenst",
    "year": 2013,
    "level": "A1",
    "kind": "Мультфильм",
    "genre": [
      "Сказка",
      "Семейное"
    ],
    "rating": 4.2,
    "duration": "≈92 мин",
    "review": "Привидение хочет увидеть день. Просыпается не вовремя. Замок, город, дети. Милая сказка.",
    "why": "Ясный сюжет. Понятные слова.",
    "poster": {
      "icon": "👻",
      "grad": "linear-gradient(160deg,#2ec5b6,#0a5d54)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Das%20kleine%20Gespenst"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Das%20kleine%20Gespenst%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "alfred-kwak",
    "title": "Утёнок Альфред Дж. Квак",
    "titleDe": "Alfred J. Kwak",
    "year": 1989,
    "level": "A1",
    "kind": "Аниме",
    "genre": [
      "Приключения",
      "Драма"
    ],
    "rating": 4.3,
    "duration": "≈25 мин",
    "review": "Утёнок растёт один. Учится добру и смелости. Песни простые. История трогает и учит жизни.",
    "why": "Ясная речь. Понятные уроки.",
    "poster": {
      "icon": "🦆",
      "grad": "linear-gradient(160deg,#ef5b5b,#8f1b3a)",
      "img": "https://upload.wikimedia.org/wikipedia/en/d/d8/Alfredjodocuskwak_logo.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Alfred%20J.%20Kwak"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Alfred%20J.%20Kwak%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "loewen",
    "title": "Король Лев",
    "titleDe": "Der König der Löwen",
    "year": 1994,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Драма",
      "Приключения"
    ],
    "rating": 4.9,
    "duration": "88 мин",
    "review": "Симба теряет отца. Убегает. Взрослеет. Возвращается за троном. Дубляж мощный. Легенда Disney.",
    "why": "Известный сюжет. Ясная речь героев.",
    "poster": {
      "icon": "🦁",
      "grad": "linear-gradient(160deg,#8eef5b,#4a8f1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20K%C3%B6nig%20der%20L%C3%B6wen"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20K%C3%B6nig%20der%20L%C3%B6wen%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "eiskoenigin",
    "title": "Холодное сердце",
    "titleDe": "Die Eiskönigin",
    "year": 2013,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Магия",
      "Семейное"
    ],
    "rating": 4.7,
    "duration": "102 мин",
    "review": "Две сестры. Ледяная сила. Одна прячется, другая ищет. Песни знают все. Пой и учи слова.",
    "why": "Знакомая история. Песни помогают.",
    "poster": {
      "icon": "❄️",
      "grad": "linear-gradient(160deg,#b06ab3,#3a1b6e)",
      "img": "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Die%20Eisk%C3%B6nigin"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Die%20Eisk%C3%B6nigin%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "nemo",
    "title": "В поисках Немо",
    "titleDe": "Findet Nemo",
    "year": 2003,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Приключения",
      "Семейное"
    ],
    "rating": 4.8,
    "duration": "100 мин",
    "review": "Папа-рыба ищет сына. Через весь океан. Дори всё забывает. Смешно и трогательно.",
    "why": "Понятный сюжет. Живой юмор.",
    "poster": {
      "icon": "🐠",
      "grad": "linear-gradient(160deg,#6f9bff,#1b3a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Findet%20Nemo"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Findet%20Nemo%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "vaiana",
    "title": "Моана",
    "titleDe": "Vaiana",
    "year": 2016,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Приключения",
      "Магия"
    ],
    "rating": 4.6,
    "duration": "107 мин",
    "review": "Девочка выходит в океан. Ищет полубога. Спасает остров. Море живое, песни цепляют.",
    "why": "Ясная речь. Песни помогают учить.",
    "poster": {
      "icon": "🌺",
      "grad": "linear-gradient(160deg,#8e5bef,#3a1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Vaiana"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Vaiana%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "totoro",
    "title": "Мой сосед Тоторо",
    "titleDe": "Mein Nachbar Totoro",
    "year": 1988,
    "level": "A2",
    "kind": "Аниме",
    "genre": [
      "Магия",
      "Семейное"
    ],
    "rating": 4.8,
    "duration": "86 мин",
    "review": "Две сестры в деревне. Нашли лесного духа. Тихое чудо. Ghibli. Речь спокойная и бытовая.",
    "why": "Медленный темп. Простые диалоги.",
    "poster": {
      "icon": "🌳",
      "grad": "linear-gradient(160deg,#ef9a5b,#8f4a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Mein%20Nachbar%20Totoro"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Mein%20Nachbar%20Totoro%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "zoomania",
    "title": "Зверополис",
    "titleDe": "Zoomania",
    "year": 2016,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Комедия",
      "Детектив"
    ],
    "rating": 4.7,
    "duration": "108 мин",
    "review": "Зайчиха стала полицейским. Лис — напарник. Раскрывают дело. Город зверей огромный. Умно и смешно.",
    "why": "Современная речь. Немного быстрее.",
    "poster": {
      "icon": "🦊",
      "grad": "linear-gradient(160deg,#5bef8e,#1b8f52)",
      "img": "https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Zoomania"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Zoomania%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "toy-story",
    "title": "История игрушек",
    "titleDe": "Toy Story",
    "year": 1995,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Комедия",
      "Приключения"
    ],
    "rating": 4.7,
    "duration": "81 мин",
    "review": "Игрушки живут тайно. Ковбой ревнует к астронавту. Потом дружат. Тёплая история Pixar.",
    "why": "Понятный сюжет. Ясные диалоги.",
    "poster": {
      "icon": "🤠",
      "grad": "linear-gradient(160deg,#ff5b9c,#8f1b52)",
      "img": "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Toy%20Story"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Toy%20Story%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "ratatouille",
    "title": "Рататуй",
    "titleDe": "Ratatouille",
    "year": 2007,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Комедия",
      "Семейное"
    ],
    "rating": 4.7,
    "duration": "111 мин",
    "review": "Крыса мечтает готовить. Париж, кухня, критик. Мечта против правил. Красиво и вкусно.",
    "why": "Понятная мечта. Живая речь.",
    "poster": {
      "icon": "🐀",
      "grad": "linear-gradient(160deg,#5bd6ef,#1b6f8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Ratatouille"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Ratatouille%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "oben",
    "title": "Вверх",
    "titleDe": "Oben",
    "year": 2009,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Драма",
      "Приключения"
    ],
    "rating": 4.7,
    "duration": "96 мин",
    "review": "Старик поднял дом на шарах. Летит к мечте. Мальчик увязался следом. Начало разобьёт сердце.",
    "why": "Сильные эмоции. Ясные диалоги.",
    "poster": {
      "icon": "🎈",
      "grad": "linear-gradient(160deg,#efc15b,#8f6a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Oben"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Oben%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "coco",
    "title": "Тайна Коко",
    "titleDe": "Coco",
    "year": 2017,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Магия",
      "Семейное"
    ],
    "rating": 4.8,
    "duration": "105 мин",
    "review": "Мальчик попал в мир мёртвых. Ищет прадеда. Музыка и память. Ярко, красиво, до слёз.",
    "why": "Понятный сюжет. Тёплые темы.",
    "poster": {
      "icon": "💀",
      "grad": "linear-gradient(160deg,#c15bef,#5f1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Coco"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Coco%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "encanto",
    "title": "Энканто",
    "titleDe": "Encanto",
    "year": 2021,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Магия",
      "Семейное"
    ],
    "rating": 4.6,
    "duration": "102 мин",
    "review": "Волшебная семья в горах. У каждого дар. У Мирабель — нет. Дом трещит. Песни огонь.",
    "why": "Песни для запоминания. Ясная речь.",
    "poster": {
      "icon": "🕯️",
      "grad": "linear-gradient(160deg,#ff8e5b,#8f3a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/8/83/Encanto_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Encanto"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Encanto%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "rapunzel",
    "title": "Рапунцель",
    "titleDe": "Rapunzel – Neu verföhnt",
    "year": 2010,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Магия",
      "Приключения"
    ],
    "rating": 4.6,
    "duration": "100 мин",
    "review": "Девочка с длинными волосами в башне. Вор помогает сбежать. Фонарики в небе. Красивая сказка.",
    "why": "Знакомая сказка. Понятные диалоги.",
    "poster": {
      "icon": "👸",
      "grad": "linear-gradient(160deg,#5b6eef,#1b2a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Rapunzel%20%E2%80%93%20Neu%20verf%C3%B6hnt"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Rapunzel%20%E2%80%93%20Neu%20verf%C3%B6hnt%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "chihiro",
    "title": "Унесённые призраками",
    "titleDe": "Chihiros Reise ins Zauberland",
    "year": 2001,
    "level": "A2",
    "kind": "Аниме",
    "genre": [
      "Магия",
      "Приключения"
    ],
    "rating": 4.8,
    "duration": "125 мин",
    "review": "Девочка попала в мир духов. Родители стали свиньями. Работает, чтобы спастись. Ghibli-шедевр.",
    "why": "Сюжет ведёт. Речь ясная, но длиннее.",
    "poster": {
      "icon": "🏮",
      "grad": "linear-gradient(160deg,#2ec5b6,#0a5d54)",
      "img": "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Chihiros%20Reise%20ins%20Zauberland"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Chihiros%20Reise%20ins%20Zauberland%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "kiki",
    "title": "Ведьмина служба доставки",
    "titleDe": "Kikis kleiner Lieferdienst",
    "year": 1989,
    "level": "A2",
    "kind": "Аниме",
    "genre": [
      "Магия",
      "Семейное"
    ],
    "rating": 4.7,
    "duration": "103 мин",
    "review": "Юная ведьма уехала жить одна. Возит посылки на метле. Учится взрослеть. Тёплое кино Ghibli.",
    "why": "Спокойный темп. Бытовые диалоги.",
    "poster": {
      "icon": "🧹",
      "grad": "linear-gradient(160deg,#ef5b5b,#8f1b3a)",
      "img": "https://upload.wikimedia.org/wikipedia/en/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Kikis%20kleiner%20Lieferdienst"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Kikis%20kleiner%20Lieferdienst%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "dschungelbuch-1967",
    "title": "Книга джунглей",
    "titleDe": "Das Dschungelbuch",
    "year": 1967,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Приключения",
      "Семейное"
    ],
    "rating": 4.6,
    "duration": "78 мин",
    "review": "Маугли живёт в джунглях. Балу учит жить легко. Шерхан рядом. Песни классные. Классика Disney.",
    "why": "Известный сюжет. Ясные песни.",
    "poster": {
      "icon": "🐻",
      "grad": "linear-gradient(160deg,#8eef5b,#4a8f1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/1/1d/Thejunglebook_movieposter.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Das%20Dschungelbuch"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Das%20Dschungelbuch%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "aladdin",
    "title": "Аладдин",
    "titleDe": "Aladdin",
    "year": 1992,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Магия",
      "Приключения"
    ],
    "rating": 4.7,
    "duration": "90 мин",
    "review": "Бедняк находит лампу. Джинн исполняет желания. Любовь и обман. Быстро, ярко, весело.",
    "why": "Известная сказка. Живая речь.",
    "poster": {
      "icon": "🧞",
      "grad": "linear-gradient(160deg,#b06ab3,#3a1b6e)",
      "img": "https://upload.wikimedia.org/wikipedia/en/b/bd/Aladdin_%281992_Disney_film%29_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Aladdin"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Aladdin%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "schoene-biest",
    "title": "Красавица и Чудовище",
    "titleDe": "Die Schöne und das Biest",
    "year": 1991,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Магия",
      "Романтика"
    ],
    "rating": 4.7,
    "duration": "84 мин",
    "review": "Девушка в плену у зверя. Замок живой. Под маской — принц. Роза вянет. Красивая классика.",
    "why": "Знакомый сюжет. Ясные песни.",
    "poster": {
      "icon": "🌹",
      "grad": "linear-gradient(160deg,#6f9bff,#1b3a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/5/5e/Beauty_and_the_Beast_%281991_film%29_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Die%20Sch%C3%B6ne%20und%20das%20Biest"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Die%20Sch%C3%B6ne%20und%20das%20Biest%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "shrek",
    "title": "Шрек",
    "titleDe": "Shrek",
    "year": 2001,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Комедия",
      "Приключения"
    ],
    "rating": 4.7,
    "duration": "90 мин",
    "review": "Огр спасает принцессу. Осёл болтает без конца. Сказка наизнанку. Смешно и по-доброму.",
    "why": "Живой юмор. Понятный сюжет.",
    "poster": {
      "icon": "👹",
      "grad": "linear-gradient(160deg,#8e5bef,#3a1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/7/7b/Shrek_%282001_animated_feature_film%29.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Shrek"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Shrek%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "drachen",
    "title": "Как приручить дракона",
    "titleDe": "Drachenzähmen leicht gemacht",
    "year": 2010,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Приключения",
      "Драма"
    ],
    "rating": 4.8,
    "duration": "98 мин",
    "review": "Викинг подружился с драконом. Все дракона боятся. А он верный. Полёты дух захватывают.",
    "why": "Понятный сюжет. Ясные диалоги.",
    "poster": {
      "icon": "🐉",
      "grad": "linear-gradient(160deg,#ef9a5b,#8f4a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_Poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Drachenz%C3%A4hmen%20leicht%20gemacht"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Drachenz%C3%A4hmen%20leicht%20gemacht%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "inside-out",
    "title": "Головоломка",
    "titleDe": "Alles steht Kopf",
    "year": 2015,
    "level": "A2",
    "kind": "Мультфильм",
    "genre": [
      "Драма",
      "Комедия"
    ],
    "rating": 4.7,
    "duration": "95 мин",
    "review": "Внутри девочки живут эмоции. Радость и Печаль потерялись. Умно про чувства. Трогает взрослых.",
    "why": "Понятные эмоции. Ясная речь.",
    "poster": {
      "icon": "🧠",
      "grad": "linear-gradient(160deg,#5bef8e,#1b8f52)",
      "img": "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Alles%20steht%20Kopf"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Alles%20steht%20Kopf%20trailer%20deutsch"
      }
    ]
  }
];

const LEVELS = {
  "A0": {
    "code": "A0",
    "name": "Первое чудо",
    "tagline": "Ты только начал. Смотри и улыбайся.",
    "desc": "Нулевой уровень. Слов почти нет. Картинка рассказывает сама. Малыши смотрят и всё понимают. Ты тоже сможешь. Здесь не страшно.",
    "grad": "linear-gradient(135deg,#8ec5ff,#c39aff)"
  },
  "A1": {
    "code": "A1",
    "name": "Первые слова",
    "tagline": "Ты знаешь основы. Пора слушать сказки.",
    "desc": "Первый уровень. Уже есть база. Простые диалоги. Волшебство и приключения. Ты ловишь знакомые слова и радуешься. Магия помогает.",
    "grad": "linear-gradient(135deg,#ffd86b,#ff9ad4)"
  },
  "A2": {
    "code": "A2",
    "name": "Большое кино",
    "tagline": "Ты готов к настоящим шедеврам.",
    "desc": "Второй уровень. Полные мультфильмы. Disney, Pixar, Ghibli — в немецком дубляже. Речь живее, эмоции сильнее. Смотри с субтитрами и наслаждайся.",
    "grad": "linear-gradient(135deg,#7fe0c9,#8ec5ff)"
  }
};

const UNITS = ["мультфильм","мультфильма","мультфильмов"];

if (typeof module !== "undefined") module.exports = { FILMS, LEVELS, UNITS };
