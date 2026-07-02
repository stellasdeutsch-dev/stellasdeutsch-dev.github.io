/* Stellas Deutsch — авто-сборка. Постеры: Wikipedia. Не редактировать вручную. */
const FILMS = [
  {
    "id": "emil",
    "title": "Эмиль и сыщики",
    "titleDe": "Emil und die Detektive",
    "year": 2001,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Приключения"
    ],
    "rating": 4.3,
    "duration": "111 мин",
    "review": "Мальчик едет в Берлин. У него крадут деньги. Дети объединяются и ловят вора. Речь ясная, сюжет простой.",
    "why": "Детский язык. Понятная история.",
    "poster": {
      "icon": "🕵️",
      "grad": "linear-gradient(160deg,#6f9bff,#1b3a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/1/18/Poster_Emil.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Emil%20und%20die%20Detektive"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Emil%20und%20die%20Detektive%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "fliegende-klasse",
    "title": "Летающий класс",
    "titleDe": "Das fliegende Klassenzimmer",
    "year": 2003,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Семейное"
    ],
    "rating": 4.2,
    "duration": "113 мин",
    "review": "Интернат, дружба, соперники. Мальчишки готовят спектакль. Всё по-школьному просто. Тёплое кино.",
    "why": "Школьная лексика. Медленная речь.",
    "poster": {
      "icon": "🏫",
      "grad": "linear-gradient(160deg,#8e5bef,#3a1b8f)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Das%20fliegende%20Klassenzimmer"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Das%20fliegende%20Klassenzimmer%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "vorstadtkrokodile",
    "title": "Пригородные крокодилы",
    "titleDe": "Vorstadtkrokodile",
    "year": 2009,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Приключения"
    ],
    "rating": 4.3,
    "duration": "98 мин",
    "review": "Банда детей. Мальчик в коляске становится своим. Вместе ловят воров. Дружба важнее всего.",
    "why": "Простые диалоги. Детский язык.",
    "poster": {
      "icon": "🐊",
      "grad": "linear-gradient(160deg,#ef9a5b,#8f4a1b)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Vorstadtkrokodile"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Vorstadtkrokodile%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "sams",
    "title": "Самс",
    "titleDe": "Das Sams",
    "year": 2001,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Сказка"
    ],
    "rating": 4.1,
    "duration": "100 мин",
    "review": "Странное существо исполняет желания. Хаос в тихой жизни господина Таши. Смешно и по-доброму.",
    "why": "Простые слова. Понятная сказка.",
    "poster": {
      "icon": "🧢",
      "grad": "linear-gradient(160deg,#5bef8e,#1b8f52)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Das%20Sams"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Das%20Sams%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "haende-weg",
    "title": "Руки прочь от Миссисипи",
    "titleDe": "Hände weg von Mississippi",
    "year": 2007,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Приключения"
    ],
    "rating": 4,
    "duration": "98 мин",
    "review": "Девочка спасает лошадь. Деревня, тайны, наследство. Всё медленно и ясно. Доброе детское кино.",
    "why": "Спокойный темп. Простая речь.",
    "poster": {
      "icon": "🐴",
      "grad": "linear-gradient(160deg,#ff5b9c,#8f1b52)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=H%C3%A4nde%20weg%20von%20Mississippi"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=H%C3%A4nde%20weg%20von%20Mississippi%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "jim-knopf",
    "title": "Джим Пуговка",
    "titleDe": "Jim Knopf und Lukas der Lokomotivführer",
    "year": 2018,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Приключения"
    ],
    "rating": 4.3,
    "duration": "110 мин",
    "review": "Мальчик и машинист едут на паровозе. Через моря и драконов. Сказка яркая и добрая.",
    "why": "Понятный сюжет. Детская речь.",
    "poster": {
      "icon": "🚂",
      "grad": "linear-gradient(160deg,#5bd6ef,#1b6f8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/1/18/Jim_Button_and_Luke_the_Engine_Driver_Poster.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Jim%20Knopf%20und%20Lukas%20der%20Lokomotivf%C3%BChrer"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Jim%20Knopf%20und%20Lukas%20der%20Lokomotivf%C3%BChrer%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "bibi-tina",
    "title": "Бибби и Тина",
    "titleDe": "Bibi & Tina",
    "year": 2014,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Семейное",
      "Приключения"
    ],
    "rating": 4.1,
    "duration": "100 мин",
    "review": "Две подруги, лошади, лето, немного магии. Песни запоминаются. Приятно и без напряга.",
    "why": "Ясная речь. Простые истории.",
    "poster": {
      "icon": "🐎",
      "grad": "linear-gradient(160deg,#efc15b,#8f6a1b)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Bibi%20%26%20Tina"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Bibi%20%26%20Tina%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "wickie-film",
    "title": "Вики, маленький викинг",
    "titleDe": "Wickie und die starken Männer",
    "year": 2009,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Приключения"
    ],
    "rating": 4,
    "duration": "88 мин",
    "review": "Хитрый мальчик спасает деревню викингов. Идеи вместо силы. Смешно и наглядно.",
    "why": "Простые слова. Много действия.",
    "poster": {
      "icon": "⛵",
      "grad": "linear-gradient(160deg,#c15bef,#5f1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/4/42/Vicky_and_the_Treasure_of_the_Gods_film_poster.jpg"
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
    "id": "lottchen",
    "title": "Двойная Лотхен",
    "titleDe": "Das doppelte Lottchen",
    "year": 2017,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Семейное"
    ],
    "rating": 4.1,
    "duration": "93 мин",
    "review": "Две девочки-близняшки встретились в лагере. Меняются местами. Хотят вернуть семью. Милая история.",
    "why": "Понятный сюжет. Детская речь.",
    "poster": {
      "icon": "👯",
      "grad": "linear-gradient(160deg,#ff8e5b,#8f3a1b)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Das%20doppelte%20Lottchen"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Das%20doppelte%20Lottchen%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "rico-oskar",
    "title": "Рико, Оскар и тени",
    "titleDe": "Rico, Oskar und die Tieferschatten",
    "year": 2014,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Детектив"
    ],
    "rating": 4.4,
    "duration": "96 мин",
    "review": "Два необычных мальчика. Один боязливый, другой особенный. Вместе раскрывают дело. Тепло и трогательно.",
    "why": "Простая речь героев. Ясный сюжет.",
    "poster": {
      "icon": "🔎",
      "grad": "linear-gradient(160deg,#5b6eef,#1b2a8f)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Rico%2C%20Oskar%20und%20die%20Tieferschatten"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Rico%2C%20Oskar%20und%20die%20Tieferschatten%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "hotzenplotz",
    "title": "Разбойник Хотценплотц",
    "titleDe": "Der Räuber Hotzenplotz",
    "year": 2022,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Сказка"
    ],
    "rating": 4.2,
    "duration": "104 мин",
    "review": "Два мальчика ловят разбойника. Волшебник, фея, погоня. Яркая сказка по классике. Смешно.",
    "why": "Простые слова. Понятная сказка.",
    "poster": {
      "icon": "🦹",
      "grad": "linear-gradient(160deg,#2ec5b6,#0a5d54)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20R%C3%A4uber%20Hotzenplotz"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20R%C3%A4uber%20Hotzenplotz%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "hilfe-lehrerin",
    "title": "На помощь, я уменьшил учительницу",
    "titleDe": "Hilfe, ich habe meine Lehrerin geschrumpft",
    "year": 2015,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Комедия"
    ],
    "rating": 4.1,
    "duration": "98 мин",
    "review": "Строгая директриса вдруг стала крошечной. Дети её прячут. Хаос в школе. Весело и просто.",
    "why": "Школьная лексика. Ясная речь.",
    "poster": {
      "icon": "🔬",
      "grad": "linear-gradient(160deg,#ef5b5b,#8f1b3a)",
      "img": "https://upload.wikimedia.org/wikipedia/en/5/5e/Help%2C_I_Shrunk_My_Teacher_Poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Hilfe%2C%20ich%20habe%20meine%20Lehrerin%20geschrumpft"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Hilfe%2C%20ich%20habe%20meine%20Lehrerin%20geschrumpft%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "wilde-kerle",
    "title": "Дикие футболисты",
    "titleDe": "Die wilden Kerle",
    "year": 2003,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Спорт"
    ],
    "rating": 4,
    "duration": "100 мин",
    "review": "Детская команда играет в футбол. Против взрослых грубиянов. Дружба и голы. Энергично и просто.",
    "why": "Простые фразы. Понятная тема.",
    "poster": {
      "icon": "⚽",
      "grad": "linear-gradient(160deg,#8eef5b,#4a8f1b)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Die%20wilden%20Kerle"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Die%20wilden%20Kerle%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "lauf-junge",
    "title": "Беги, мальчик, беги",
    "titleDe": "Lauf Junge lauf",
    "year": 2013,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "Военное"
    ],
    "rating": 4.4,
    "duration": "108 мин",
    "review": "Мальчик один спасается в войну. Идёт через лес и зиму. Слов мало, действий много. Сильное кино.",
    "why": "Мало сложных слов. История ведёт.",
    "poster": {
      "icon": "🏃",
      "grad": "linear-gradient(160deg,#b06ab3,#3a1b6e)",
      "img": "https://upload.wikimedia.org/wikipedia/en/3/34/Run_Boy_Run_%28film%29_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Lauf%20Junge%20lauf"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Lauf%20Junge%20lauf%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "puenktchen",
    "title": "Точечка и Антон",
    "titleDe": "Pünktchen und Anton",
    "year": 1999,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Семейное"
    ],
    "rating": 4.1,
    "duration": "110 мин",
    "review": "Богатая девочка и бедный мальчик — друзья. Помогают друг другу. Классика Кестнера. Тёплая и ясная.",
    "why": "Понятный сюжет. Детская речь.",
    "poster": {
      "icon": "👧",
      "grad": "linear-gradient(160deg,#6f9bff,#1b3a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/2/25/Annaluise_%26_Anton_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=P%C3%BCnktchen%20und%20Anton"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=P%C3%BCnktchen%20und%20Anton%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "hexe-lilli",
    "title": "Ведьма Лилли",
    "titleDe": "Hexe Lilli",
    "year": 2009,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Сказка"
    ],
    "rating": 3.9,
    "duration": "88 мин",
    "review": "Девочка нашла книгу заклинаний. Дракончик рядом. Магия и ошибки. Простая добрая сказка.",
    "why": "Простые слова. Повтор заклинаний.",
    "poster": {
      "icon": "🐉",
      "grad": "linear-gradient(160deg,#8e5bef,#3a1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/b/b5/Lilly_the_Witch_-_The_Dragon_and_the_Magic_Book_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Hexe%20Lilli"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Hexe%20Lilli%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "tkkg",
    "title": "ТК… отряд сыщиков",
    "titleDe": "TKKG",
    "year": 2019,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Детектив"
    ],
    "rating": 3.9,
    "duration": "96 мин",
    "review": "Четверо друзей раскрывают дело. Погони и загадки. Классические юные детективы. Бодро и ясно.",
    "why": "Простые диалоги. Понятный сюжет.",
    "poster": {
      "icon": "🕶️",
      "grad": "linear-gradient(160deg,#ef9a5b,#8f4a1b)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=TKKG"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=TKKG%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "konferenz-tiere",
    "title": "Союз зверей",
    "titleDe": "Konferenz der Tiere",
    "year": 2010,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Приключения"
    ],
    "rating": 3.9,
    "duration": "93 мин",
    "review": "Звери Африки остались без воды. Собираются вместе против людей. Мультик с простым языком.",
    "why": "Ясная речь. Понятная идея.",
    "poster": {
      "icon": "🦁",
      "grad": "linear-gradient(160deg,#5bef8e,#1b8f52)",
      "img": "https://upload.wikimedia.org/wikipedia/en/4/43/Animals_United_%28Konferenz_der_Tiere%29_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Konferenz%20der%20Tiere"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Konferenz%20der%20Tiere%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "wendy",
    "title": "Венди",
    "titleDe": "Wendy",
    "year": 2017,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Спорт"
    ],
    "rating": 3.9,
    "duration": "106 мин",
    "review": "Девочка и больная лошадь. Ферма, конкур, вера в себя. Спокойное кино для детей. Всё понятно.",
    "why": "Медленный темп. Простые слова.",
    "poster": {
      "icon": "🐴",
      "grad": "linear-gradient(160deg,#ff5b9c,#8f1b52)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Wendy"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Wendy%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "kleiner-rabe",
    "title": "Маленький воронёнок Сокс",
    "titleDe": "Der kleine Rabe Socke",
    "year": 2012,
    "level": "A0",
    "kind": "Фильм",
    "genre": [
      "Детское",
      "Мультфильм"
    ],
    "rating": 4,
    "duration": "75 мин",
    "review": "Хитрый воронёнок теряет плотину. Ищет помощь у друзей. Короткий добрый мультфильм для малышей.",
    "why": "Короткие фразы. Простой сюжет.",
    "poster": {
      "icon": "🐦",
      "grad": "linear-gradient(160deg,#5bd6ef,#1b6f8f)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20kleine%20Rabe%20Socke"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20kleine%20Rabe%20Socke%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "tuerkisch",
    "title": "Турецкий для начинающих",
    "titleDe": "Türkisch für Anfänger",
    "year": 2012,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Семейное"
    ],
    "rating": 4.4,
    "duration": "105 мин",
    "review": "Немецкая и турецкая семьи слились в одну. Остров, ссоры, любовь. Живо, смешно, современно.",
    "why": "Бытовые диалоги. Молодые герои.",
    "poster": {
      "icon": "👨‍👩‍👧‍👦",
      "grad": "linear-gradient(160deg,#efc15b,#8f6a1b)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=T%C3%BCrkisch%20f%C3%BCr%20Anf%C3%A4nger"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=T%C3%BCrkisch%20f%C3%BCr%20Anf%C3%A4nger%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "fack-ju",
    "title": "Училка против",
    "titleDe": "Fack ju Göhte",
    "year": 2013,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия"
    ],
    "rating": 4.4,
    "duration": "119 мин",
    "review": "Бывший вор идёт в школу учителем. Класс — хаос. Шутки резкие, сленг живой. Смешно, но осторожно.",
    "why": "Современная речь. Немного сленга.",
    "poster": {
      "icon": "🎓",
      "grad": "linear-gradient(160deg,#c15bef,#5f1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/2/23/Fack_ju_g%C3%B6hte_movie_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Fack%20ju%20G%C3%B6hte"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Fack%20ju%20G%C3%B6hte%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "fack-ju-2",
    "title": "Училка против 2",
    "titleDe": "Fack ju Göhte 2",
    "year": 2015,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия"
    ],
    "rating": 4.2,
    "duration": "115 мин",
    "review": "Класс едет на экскурсию. Тот же учитель, те же проблемы. Больше хаоса. Смешно как и первый.",
    "why": "Живой разговорный. Знакомые герои.",
    "poster": {
      "icon": "🏫",
      "grad": "linear-gradient(160deg,#ff8e5b,#8f3a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/b/b0/Fack-ju-G%C3%B6hte-2-Poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Fack%20ju%20G%C3%B6hte%202"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Fack%20ju%20G%C3%B6hte%202%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "manitu",
    "title": "Ботинок Маниту",
    "titleDe": "Der Schuh des Manitu",
    "year": 2001,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Вестерн"
    ],
    "rating": 4.3,
    "duration": "87 мин",
    "review": "Пародия на вестерны. Два брата ищут клад. Немецкий юмор во всей красе. Абсурд и хохот.",
    "why": "Простой сюжет. Много визуального юмора.",
    "poster": {
      "icon": "👞",
      "grad": "linear-gradient(160deg,#5b6eef,#1b2a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/a/af/Der-schuh-des-manitu.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20Schuh%20des%20Manitu"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20Schuh%20des%20Manitu%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "keinohrhasen",
    "title": "Безухий заяц",
    "titleDe": "Keinohrhasen",
    "year": 2007,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Романтика"
    ],
    "rating": 4.2,
    "duration": "116 мин",
    "review": "Журналист попал на общественные работы. В детском саду. Встречает старую знакомую. Романтика и смех.",
    "why": "Разговорная речь. Понятный сюжет.",
    "poster": {
      "icon": "🐰",
      "grad": "linear-gradient(160deg,#2ec5b6,#0a5d54)",
      "img": "https://upload.wikimedia.org/wikipedia/en/c/cf/Rabbit_Without_Ears_poster.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Keinohrhasen"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Keinohrhasen%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "honig",
    "title": "Мёд в голове",
    "titleDe": "Honig im Kopf",
    "year": 2014,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "Комедия"
    ],
    "rating": 4.3,
    "duration": "139 мин",
    "review": "Дед теряет память. Внучка везёт его в Венецию. Смех сквозь слёзы. Тёплая семейная история.",
    "why": "Понятные диалоги. Сильные эмоции.",
    "poster": {
      "icon": "🍯",
      "grad": "linear-gradient(160deg,#ef5b5b,#8f1b3a)",
      "img": "https://upload.wikimedia.org/wikipedia/en/a/ac/Honig_im_Kopf_Poster.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Honig%20im%20Kopf"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Honig%20im%20Kopf%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "kokowaeaeh",
    "title": "Коковаа",
    "titleDe": "Kokowääh",
    "year": 2011,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Семейное"
    ],
    "rating": 4.1,
    "duration": "130 мин",
    "review": "Мужчина узнаёт, что у него есть дочь. Жизнь холостяка кончилась. Учится быть отцом. Смешно и мило.",
    "why": "Бытовая речь. Понятный сюжет.",
    "poster": {
      "icon": "👨‍👧",
      "grad": "linear-gradient(160deg,#8eef5b,#4a8f1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/5/58/Kokow%C3%A4%C3%A4h.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Kokow%C3%A4%C3%A4h"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Kokow%C3%A4%C3%A4h%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "almanya",
    "title": "Германия. Добро пожаловать",
    "titleDe": "Almanya – Willkommen in Deutschland",
    "year": 2011,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Драма"
    ],
    "rating": 4.4,
    "duration": "101 мин",
    "review": "Турецкая семья вспоминает переезд в Германию. Три поколения, юмор и тепло. Про дом и корни.",
    "why": "Ясная речь. Знакомая тема миграции.",
    "poster": {
      "icon": "🇩🇪",
      "grad": "linear-gradient(160deg,#b06ab3,#3a1b6e)",
      "img": "https://upload.wikimedia.org/wikipedia/en/e/eb/Almanya_%E2%80%93_Welcome_to_Germany_film_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Almanya%20%E2%80%93%20Willkommen%20in%20Deutschland"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Almanya%20%E2%80%93%20Willkommen%20in%20Deutschland%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "tschick",
    "title": "Чик",
    "titleDe": "Tschick",
    "year": 2016,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "Роуд-муви"
    ],
    "rating": 4.3,
    "duration": "93 мин",
    "review": "Два подростка угнали машину. Едут в никуда летом. Дружба и свобода. Живой молодёжный язык.",
    "why": "Молодёжная речь. Простой сюжет.",
    "poster": {
      "icon": "🚗",
      "grad": "linear-gradient(160deg,#6f9bff,#1b3a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/3/3e/Tschick_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Tschick"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Tschick%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "junge-frische-luft",
    "title": "Мальчику нужен свежий воздух",
    "titleDe": "Der Junge muss an die frische Luft",
    "year": 2018,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "Комедия"
    ],
    "rating": 4.3,
    "duration": "100 мин",
    "review": "Толстый мальчик смешит семью, чтобы спрятать боль. Детство, мама, юмор. Трогает и смешит.",
    "why": "Понятные диалоги. Тёплая история.",
    "poster": {
      "icon": "🎤",
      "grad": "linear-gradient(160deg,#8e5bef,#3a1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/2/2a/All_About_Me_Poster.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20Junge%20muss%20an%20die%20frische%20Luft"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20Junge%20muss%20an%20die%20frische%20Luft%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "schoenste-maedchen",
    "title": "Самая красивая девушка в мире",
    "titleDe": "Das schönste Mädchen der Welt",
    "year": 2018,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Романтика"
    ],
    "rating": 4.2,
    "duration": "103 мин",
    "review": "Стеснительный парень с большим носом умеет читать рэп. Влюбляется. Сирано на новый лад. Молодёжно.",
    "why": "Современная речь. Понятная любовь.",
    "poster": {
      "icon": "💃",
      "grad": "linear-gradient(160deg,#ef9a5b,#8f4a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/1/15/The_Most_Beautiful_Girl_in_the_World_%28film%29_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Das%20sch%C3%B6nste%20M%C3%A4dchen%20der%20Welt"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Das%20sch%C3%B6nste%20M%C3%A4dchen%20der%20Welt%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "kaenguru",
    "title": "Хроники Кенгуру",
    "titleDe": "Die Känguru-Chroniken",
    "year": 2020,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия"
    ],
    "rating": 4.1,
    "duration": "93 мин",
    "review": "Кенгуру-коммунист живёт у обычного парня. Ест блины, спорит о жизни. Абсурд и сатира. Весело.",
    "why": "Живой разговорный. Простые сцены.",
    "poster": {
      "icon": "🦘",
      "grad": "linear-gradient(160deg,#5bef8e,#1b8f52)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Die%20K%C3%A4nguru-Chroniken"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Die%20K%C3%A4nguru-Chroniken%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "25kmh",
    "title": "25 км/ч",
    "titleDe": "25 km/h",
    "year": 2018,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Роуд-муви"
    ],
    "rating": 4.2,
    "duration": "116 мин",
    "review": "Два брата встретились на похоронах отца. Едут через Германию на мопедах. Мирятся в пути. Тепло.",
    "why": "Бытовые диалоги. Понятный сюжет.",
    "poster": {
      "icon": "🏍️",
      "grad": "linear-gradient(160deg,#ff5b9c,#8f1b52)",
      "img": "https://upload.wikimedia.org/wikipedia/en/a/a7/25_kmh_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=25%20km%2Fh"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=25%20km%2Fh%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "hartmanns",
    "title": "Добро пожаловать к Хартманнам",
    "titleDe": "Willkommen bei den Hartmanns",
    "year": 2016,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Драма"
    ],
    "rating": 4.2,
    "duration": "116 мин",
    "review": "Семья принимает беженца. Дом переворачивается вверх дном. Про доброту и предрассудки. Смешно и остро.",
    "why": "Ясная речь. Актуальная тема.",
    "poster": {
      "icon": "🏡",
      "grad": "linear-gradient(160deg,#5bd6ef,#1b6f8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/f/ff/Willkommen_bei_den_Hartmanns_German_Poster.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Willkommen%20bei%20den%20Hartmanns"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Willkommen%20bei%20den%20Hartmanns%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "bibi-tina-2",
    "title": "Бибби и Тина: Заколдованные",
    "titleDe": "Bibi & Tina: Voll verhext!",
    "year": 2014,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Семейное",
      "Магия"
    ],
    "rating": 4,
    "duration": "112 мин",
    "review": "Подруги, лошади и магия снова вместе. Песни, конкурс, приключения. Лёгкое семейное кино. Приятно.",
    "why": "Простые слова. Знакомые герои.",
    "poster": {
      "icon": "🎠",
      "grad": "linear-gradient(160deg,#efc15b,#8f6a1b)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Bibi%20%26%20Tina%3A%20Voll%20verhext!"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Bibi%20%26%20Tina%3A%20Voll%20verhext!%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "vier-gegen-bank",
    "title": "Четверо против банка",
    "titleDe": "Vier gegen die Bank",
    "year": 2016,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Криминал"
    ],
    "rating": 4,
    "duration": "96 мин",
    "review": "Четверо обманутых готовят налёт на банк. План, ошибки, смех. Лёгкая криминальная комедия.",
    "why": "Понятный сюжет. Живые диалоги.",
    "poster": {
      "icon": "🏦",
      "grad": "linear-gradient(160deg,#c15bef,#5f1b8f)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Vier%20gegen%20die%20Bank"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Vier%20gegen%20die%20Bank%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "nightlife",
    "title": "Ночная жизнь",
    "titleDe": "Nightlife",
    "year": 2020,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Романтика"
    ],
    "rating": 4,
    "duration": "115 мин",
    "review": "Свидание превратилось в дикую ночь Берлина. Погони и невезение. Быстрая современная комедия.",
    "why": "Разговорный язык. Много действия.",
    "poster": {
      "icon": "🌃",
      "grad": "linear-gradient(160deg,#ff8e5b,#8f3a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/6/63/Nightlife_Poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Nightlife"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Nightlife%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "hot-dog",
    "title": "Хот-дог",
    "titleDe": "Hot Dog",
    "year": 2018,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Боевик"
    ],
    "rating": 3.9,
    "duration": "105 мин",
    "review": "Два разных спецназовца в одной команде. Задание, хаос, шутки. Пародия на боевики. Тупо и смешно.",
    "why": "Простые фразы. Юмор действия.",
    "poster": {
      "icon": "🌭",
      "grad": "linear-gradient(160deg,#5b6eef,#1b2a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/8/85/Hot_Dog_Poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Hot%20Dog"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Hot%20Dog%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "berlin-berlin",
    "title": "Берлин, Берлин",
    "titleDe": "Berlin, Berlin",
    "year": 2002,
    "level": "A1",
    "kind": "Сериал",
    "genre": [
      "Комедия",
      "Романтика"
    ],
    "rating": 4.3,
    "duration": "≈25 мин",
    "review": "Лолле приехала в Берлин. Работа, любовь, соседи. Голос за кадром объясняет мысли. Слушать легко.",
    "why": "Закадровый голос помогает.",
    "poster": {
      "icon": "🎨",
      "grad": "linear-gradient(160deg,#2ec5b6,#0a5d54)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Berlin%2C%20Berlin"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Berlin%2C%20Berlin%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "vaterfreuden",
    "title": "Радости отцовства",
    "titleDe": "Vaterfreuden",
    "year": 2014,
    "level": "A1",
    "kind": "Фильм",
    "genre": [
      "Комедия"
    ],
    "rating": 3.9,
    "duration": "98 мин",
    "review": "Ловелас теряет шанс стать отцом. И вдруг очень хочет ребёнка. Абсурдная погоня. Немецкая комедия.",
    "why": "Бытовая речь. Понятный сюжет.",
    "poster": {
      "icon": "👶",
      "grad": "linear-gradient(160deg,#ef5b5b,#8f1b3a)",
      "img": "https://upload.wikimedia.org/wikipedia/en/c/c6/Joy_of_Fatherhood_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Vaterfreuden"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Vaterfreuden%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "lenin",
    "title": "Гуд бай, Ленин!",
    "titleDe": "Good Bye, Lenin!",
    "year": 2003,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "Комедия"
    ],
    "rating": 4.8,
    "duration": "121 мин",
    "review": "Стена пала. Мама проспала переворот. Сын врёт, что ГДР жива. Немецкий тёплый и домашний.",
    "why": "Бытовые диалоги. Понятный сюжет.",
    "poster": {
      "icon": "🚩",
      "grad": "linear-gradient(160deg,#8eef5b,#4a8f1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/6/63/Good_Bye_Lenin.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Good%20Bye%2C%20Lenin!"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Good%20Bye%2C%20Lenin!%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "wunder-bern",
    "title": "Чудо Берна",
    "titleDe": "Das Wunder von Bern",
    "year": 2003,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "Спорт"
    ],
    "rating": 4.5,
    "duration": "118 мин",
    "review": "1954 год. Отец вернулся с войны. Сын любит футбол. Германия берёт кубок. Про семью и надежду.",
    "why": "Ясные диалоги. Понятная эпоха.",
    "poster": {
      "icon": "⚽",
      "grad": "linear-gradient(160deg,#b06ab3,#3a1b6e)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Das%20Wunder%20von%20Bern"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Das%20Wunder%20von%20Bern%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "welle",
    "title": "Волна",
    "titleDe": "Die Welle",
    "year": 2008,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "Триллер"
    ],
    "rating": 4.6,
    "duration": "107 мин",
    "review": "Учитель ставит эксперимент. Класс становится движением. Быстро и страшно. Про власть и толпу.",
    "why": "Школьная лексика. Сильный сюжет.",
    "poster": {
      "icon": "🌀",
      "grad": "linear-gradient(160deg,#6f9bff,#1b3a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/d/dc/Diewelle_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Die%20Welle"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Die%20Welle%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "vincent",
    "title": "Винсент хочет к морю",
    "titleDe": "Vincent will Meer",
    "year": 2010,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "Роуд-муви"
    ],
    "rating": 4.2,
    "duration": "96 мин",
    "review": "Трое сбегают из клиники. Едут к морю. У каждого своя боль. Дорога лечит. Тёплая история.",
    "why": "Спокойный темп. Понятные фразы.",
    "poster": {
      "icon": "🌊",
      "grad": "linear-gradient(160deg,#8e5bef,#3a1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/0/03/Vincent_Wants_to_Sea_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Vincent%20will%20Meer"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Vincent%20will%20Meer%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "vorname",
    "title": "Имя",
    "titleDe": "Der Vorname",
    "year": 2018,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Драма"
    ],
    "rating": 4.3,
    "duration": "92 мин",
    "review": "Ужин в кругу семьи. Один вопрос: как назвать сына. И всё взорвалось. Много диалогов в одной комнате.",
    "why": "Разговоры за столом. Чистая речь.",
    "poster": {
      "icon": "🍷",
      "grad": "linear-gradient(160deg,#ef9a5b,#8f4a1b)",
      "img": null
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20Vorname"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20Vorname%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "systemsprenger",
    "title": "Системный вредитель",
    "titleDe": "Systemsprenger",
    "year": 2019,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма"
    ],
    "rating": 4.5,
    "duration": "125 мин",
    "review": "Девочка, которую никто не может удержать. Ярость и нежность. Сильное, тяжёлое, честное кино.",
    "why": "Живая речь. Мощные эмоции.",
    "poster": {
      "icon": "⚡",
      "grad": "linear-gradient(160deg,#5bef8e,#1b8f52)",
      "img": "https://upload.wikimedia.org/wikipedia/en/a/ad/System_Crasher.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Systemsprenger"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Systemsprenger%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "lola",
    "title": "Беги, Лола, беги",
    "titleDe": "Lola rennt",
    "year": 1998,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Триллер",
      "Драма"
    ],
    "rating": 4.6,
    "duration": "81 мин",
    "review": "У Лолы двадцать минут. Спасти любимого. Три версии одного забега. Быстро, дерзко, стильно.",
    "why": "Короткие реплики. Динамика ведёт.",
    "poster": {
      "icon": "🏃‍♀️",
      "grad": "linear-gradient(160deg,#ff5b9c,#8f1b52)",
      "img": "https://upload.wikimedia.org/wikipedia/en/f/f5/Lola_Rennt_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Lola%20rennt"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Lola%20rennt%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "sonnenallee",
    "title": "Солнечная аллея",
    "titleDe": "Sonnenallee",
    "year": 1999,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Драма"
    ],
    "rating": 4.3,
    "duration": "93 мин",
    "review": "Молодёжь в ГДР у самой стены. Музыка, любовь, абсурд системы. Ностальгия с улыбкой.",
    "why": "Разговорный язык. Понятная эпоха.",
    "poster": {
      "icon": "🎸",
      "grad": "linear-gradient(160deg,#5bd6ef,#1b6f8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/4/4a/Sonnenallee_film.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Sonnenallee"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Sonnenallee%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "ballon",
    "title": "Баллон",
    "titleDe": "Ballon",
    "year": 2018,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "Триллер"
    ],
    "rating": 4.5,
    "duration": "125 мин",
    "review": "Две семьи шьют воздушный шар. Чтобы бежать из ГДР. Штази близко. Напряжение до конца.",
    "why": "Ясная речь. Держит в напряжении.",
    "poster": {
      "icon": "🎈",
      "grad": "linear-gradient(160deg,#efc15b,#8f6a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/9/9e/Poster_for_Balloon_%282018%29.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Ballon"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Ballon%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "victoria",
    "title": "Виктория",
    "titleDe": "Victoria",
    "year": 2015,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Триллер",
      "Драма"
    ],
    "rating": 4.4,
    "duration": "140 мин",
    "review": "Ночь в Берлине. Одна девушка, четверо парней, одно ограбление. Снято одним кадром. Смело.",
    "why": "Живая речь улиц. Реальное время.",
    "poster": {
      "icon": "🌃",
      "grad": "linear-gradient(160deg,#c15bef,#5f1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/f/fe/Victoria_%282015_film%29_POSTER.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Victoria"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Victoria%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "oh-boy",
    "title": "Ой, парень",
    "titleDe": "Oh Boy",
    "year": 2012,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "Комедия"
    ],
    "rating": 4.3,
    "duration": "85 мин",
    "review": "Парень бродит по Берлину. Всё идёт не так. Даже кофе не найти. Тихая грустная комедия. Чёрно-белая.",
    "why": "Спокойные диалоги. Городской язык.",
    "poster": {
      "icon": "☕",
      "grad": "linear-gradient(160deg,#ff8e5b,#8f3a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/2/25/A_Coffee_in_Berlin_poster.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Oh%20Boy"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Oh%20Boy%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "toni-erdmann",
    "title": "Тони Эрдманн",
    "titleDe": "Toni Erdmann",
    "year": 2016,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Комедия",
      "Драма"
    ],
    "rating": 4.4,
    "duration": "162 мин",
    "review": "Отец-шутник вторгается в жизнь деловой дочери. Парик, вставная челюсть, абсурд. Смешно и глубоко.",
    "why": "Живой язык. Долго, но понятно.",
    "poster": {
      "icon": "🦷",
      "grad": "linear-gradient(160deg,#5b6eef,#1b2a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/7/78/Toni_Erdmann.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Toni%20Erdmann"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Toni%20Erdmann%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "leben-anderen",
    "title": "Жизнь других",
    "titleDe": "Das Leben der Anderen",
    "year": 2006,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "Триллер"
    ],
    "rating": 4.8,
    "duration": "137 мин",
    "review": "Агент Штази слушает писателя. И меняется сам. ГДР, слежка, совесть. Тихий шедевр. Оскар.",
    "why": "Чёткая речь. Медленный темп.",
    "poster": {
      "icon": "🎧",
      "grad": "linear-gradient(160deg,#2ec5b6,#0a5d54)",
      "img": "https://upload.wikimedia.org/wikipedia/en/9/9f/Leben_der_anderen.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Das%20Leben%20der%20Anderen"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Das%20Leben%20der%20Anderen%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "untergang",
    "title": "Бункер",
    "titleDe": "Der Untergang",
    "year": 2004,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "Военное"
    ],
    "rating": 4.6,
    "duration": "156 мин",
    "review": "Последние дни Гитлера в бункере. Берлин в руинах. История изнутри. Тяжёлое и сильное кино.",
    "why": "Ясная речь. Известная история.",
    "poster": {
      "icon": "🎖️",
      "grad": "linear-gradient(160deg,#ef5b5b,#8f1b3a)",
      "img": "https://upload.wikimedia.org/wikipedia/en/d/dc/Der_Untergang_Downfall_poster.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20Untergang"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20Untergang%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "nirgendwo-afrika",
    "title": "Нигде в Африке",
    "titleDe": "Nirgendwo in Afrika",
    "year": 2001,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма"
    ],
    "rating": 4.4,
    "duration": "141 мин",
    "review": "Еврейская семья бежит из Германии в Кению. Новая земля, новая жизнь. Про дом и чужбину. Оскар.",
    "why": "Спокойные диалоги. Понятная драма.",
    "poster": {
      "icon": "🌍",
      "grad": "linear-gradient(160deg,#8eef5b,#4a8f1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/f/fa/Nirgendwo_in_Afrika.png"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Nirgendwo%20in%20Afrika"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Nirgendwo%20in%20Afrika%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "sophie-scholl",
    "title": "Софи Шолль",
    "titleDe": "Sophie Scholl – Die letzten Tage",
    "year": 2005,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "История"
    ],
    "rating": 4.5,
    "duration": "120 мин",
    "review": "Студентка против нацизма. Допрос, суд, стойкость. Реальная история сопротивления. До мурашек.",
    "why": "Чёткая речь диалогов. Сильная тема.",
    "poster": {
      "icon": "✊",
      "grad": "linear-gradient(160deg,#b06ab3,#3a1b6e)",
      "img": "https://upload.wikimedia.org/wikipedia/en/3/37/SophieScholl.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Sophie%20Scholl%20%E2%80%93%20Die%20letzten%20Tage"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Sophie%20Scholl%20%E2%80%93%20Die%20letzten%20Tage%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "edukators",
    "title": "Воспитатели",
    "titleDe": "Die fetten Jahre sind vorbei",
    "year": 2004,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма"
    ],
    "rating": 4.3,
    "duration": "127 мин",
    "review": "Трое молодых бунтарей пугают богачей. Потом всё выходит из-под контроля. Про идеалы и деньги.",
    "why": "Живая молодёжная речь. Понятный сюжет.",
    "poster": {
      "icon": "🏚️",
      "grad": "linear-gradient(160deg,#6f9bff,#1b3a8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/7/7a/Fetten_jahre_sind_vorbei.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Die%20fetten%20Jahre%20sind%20vorbei"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Die%20fetten%20Jahre%20sind%20vorbei%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "weisse-band",
    "title": "Белая лента",
    "titleDe": "Das weiße Band",
    "year": 2009,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "Триллер"
    ],
    "rating": 4.3,
    "duration": "144 мин",
    "review": "Деревня перед Первой мировой. Странные жестокие события. Чёрно-белая, холодная, тревожная. Каннская.",
    "why": "Медленная ясная речь. Сложнее по смыслу.",
    "poster": {
      "icon": "🎗️",
      "grad": "linear-gradient(160deg,#8e5bef,#3a1b8f)",
      "img": "https://upload.wikimedia.org/wikipedia/en/d/d6/White_ribbon.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Das%20wei%C3%9Fe%20Band"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Das%20wei%C3%9Fe%20Band%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "baader-meinhof",
    "title": "Комплекс Баадера-Майнхоф",
    "titleDe": "Der Baader Meinhof Komplex",
    "year": 2008,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Драма",
      "История"
    ],
    "rating": 4.3,
    "duration": "150 мин",
    "review": "Германия семидесятых. Молодые радикалы и террор. История RAF без прикрас. Жёстко и подробно.",
    "why": "Быстрая речь. Известные события помогают.",
    "poster": {
      "icon": "💥",
      "grad": "linear-gradient(160deg,#ef9a5b,#8f4a1b)",
      "img": "https://upload.wikimedia.org/wikipedia/en/7/7e/Baader_meinhof_komplex.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Der%20Baader%20Meinhof%20Komplex"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Der%20Baader%20Meinhof%20Komplex%20trailer%20deutsch"
      }
    ]
  },
  {
    "id": "barfuss",
    "title": "Босиком по мостовой",
    "titleDe": "Barfuss",
    "year": 2005,
    "level": "A2",
    "kind": "Фильм",
    "genre": [
      "Романтика",
      "Драма"
    ],
    "rating": 4.3,
    "duration": "117 мин",
    "review": "Парень-неудачник и девушка из клиники сбегают вместе. Она боится обуви. Нежная роуд-история о любви.",
    "why": "Понятные диалоги. Тёплый сюжет.",
    "poster": {
      "icon": "👣",
      "grad": "linear-gradient(160deg,#5bef8e,#1b8f52)",
      "img": "https://upload.wikimedia.org/wikipedia/en/f/f9/Barfuss_film.jpg"
    },
    "links": [
      {
        "name": "Где смотреть",
        "url": "https://www.justwatch.com/de/suche?q=Barfuss"
      },
      {
        "name": "Трейлер",
        "url": "https://www.youtube.com/results?search_query=Barfuss%20trailer%20deutsch"
      }
    ]
  }
];

const LEVELS = {
  "A0": {
    "code": "A0",
    "name": "Первый шаг",
    "tagline": "Ты только начал. Смотри и слушай.",
    "desc": "Нулевой уровень. Речь медленная. Слова простые. Картинка объясняет сама. Здесь не страшно ничего не понять — тут понятно почти всё.",
    "grad": "linear-gradient(135deg,#5b8def,#8e5bef)"
  },
  "A1": {
    "code": "A1",
    "name": "Первые слова",
    "tagline": "Ты знаешь основы. Пора слушать истории.",
    "desc": "Первый уровень. Уже есть база. Простые диалоги. Быт и семья. Сюжеты держат внимание. Ты ловишь знакомые слова и радуешься.",
    "grad": "linear-gradient(135deg,#ef8e5b,#ef5bc1)"
  },
  "A2": {
    "code": "A2",
    "name": "Настоящее кино",
    "tagline": "Ты готов к большим фильмам.",
    "desc": "Второй уровень. Речь быстрее. Эмоции сильнее. Настоящие фильмы, а не учебные. Ты уже понимаешь сюжет и характеры. Смотри с субтитрами.",
    "grad": "linear-gradient(135deg,#5bef8e,#5bd6ef)"
  }
};

const UNITS = ["фильм","фильма","фильмов"];

if (typeof module !== "undefined") module.exports = { FILMS, LEVELS, UNITS };
