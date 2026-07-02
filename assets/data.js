/* Stellas Deutsch — подборка фильмов и сериалов для А0–А1–А2.
   Тексты в стиле Шынгыса. Коротко. По делу. */

const FILMS = [
  /* ---------------- A0 ---------------- */
  {
    id: "nicos-weg",
    title: "Дорога Нико",
    titleDe: "Nicos Weg",
    year: 2018,
    level: "A0",
    kind: "Сериал",
    genre: ["Учебный", "Драма"],
    rating: 4.9,
    duration: "≈3 мин / серия",
    poster: { icon: "🧭", grad: "linear-gradient(160deg,#5b8def,#1b3a8f)" },
    review:
      "Нико приехал в Германию. Один. Без языка. Каждая серия короткая. Речь медленная. Слова чёткие. Сделано для тех, кто только начал. Идеальный старт.",
    why: "Речь замедлена специально. Субтитры есть. Ноль стресса.",
    links: [
      { name: "DW Learn German", url: "https://learngerman.dw.com/de/nicos-weg/c-36519789" },
      { name: "YouTube", url: "https://www.youtube.com/playlist?list=PLpbtHNEEz3rjuIrGdvxIZLZQih1Yv7-Ff" }
    ]
  },
  {
    id: "extra-deutsch",
    title: "Extr@ по-немецки",
    titleDe: "Extr@ auf Deutsch",
    year: 2004,
    level: "A0",
    kind: "Ситком",
    genre: ["Комедия", "Учебный"],
    rating: 4.4,
    duration: "≈25 мин",
    poster: { icon: "🛋️", grad: "linear-gradient(160deg,#8e5bef,#3a1b8f)" },
    review:
      "Две девушки. Одна квартира. Гость из-за границы. Всё просто. Всё смешно. Диалоги бытовые. Слова повторяются. Ты понимаешь и смеёшься.",
    why: "Сюжет про быт. Лексика повседневная. Мимика помогает.",
    links: [
      { name: "YouTube", url: "https://www.youtube.com/watch?v=8pWMNznu2Rc" }
    ]
  },
  {
    id: "sendung-mit-der-maus",
    title: "Передача с Мышонком",
    titleDe: "Die Sendung mit der Maus",
    year: 1971,
    level: "A0",
    kind: "Передача",
    genre: ["Детское", "Познавательное"],
    rating: 4.6,
    duration: "≈30 мин",
    poster: { icon: "🐭", grad: "linear-gradient(160deg,#ef9a5b,#8f4a1b)" },
    review:
      "Классика. Смотрят дети. Смотрят взрослые. Объясняют мир простыми словами. Как делают хлеб. Как летит ракета. Картинка объясняет за тебя.",
    why: "Много показа, мало текста. Речь ясная и добрая.",
    links: [
      { name: "ARD Mediathek", url: "https://www.wdrmaus.de/" },
      { name: "YouTube", url: "https://www.youtube.com/@diesendungmitdermaus" }
    ]
  },
  {
    id: "peppa-wutz",
    title: "Свинка Пеппа",
    titleDe: "Peppa Wutz",
    year: 2004,
    level: "A0",
    kind: "Мультсериал",
    genre: ["Детское"],
    rating: 4.3,
    duration: "≈5 мин",
    poster: { icon: "🐷", grad: "linear-gradient(160deg,#ef5b9c,#8f1b52)" },
    review:
      "Маленькие серии. Простые фразы. Семья, лужи, друзья. Дети учат родной язык именно так. Ты можешь так же. Не стыдно. Работает.",
    why: "Предложения короткие. Темы бытовые. Повтор слов постоянный.",
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@PeppaWutz" }
    ]
  },
  {
    id: "loewenzahn",
    title: "Одуванчик",
    titleDe: "Löwenzahn",
    year: 1981,
    level: "A0",
    kind: "Передача",
    genre: ["Детское", "Познавательное"],
    rating: 4.2,
    duration: "≈25 мин",
    poster: { icon: "🌱", grad: "linear-gradient(160deg,#5bef8e,#1b8f4a)" },
    review:
      "Про природу. Про технику. Про жизнь. Ведущий говорит спокойно. Показывает всё руками. Немецкий тут добрый и наглядный.",
    why: "Наглядно и медленно. Хорошо для ушей новичка.",
    links: [
      { name: "ZDF Mediathek", url: "https://www.zdf.de/kinder/loewenzahn" }
    ]
  },
  {
    id: "jojo-sucht-das-glueck",
    title: "ЙоЙо ищет счастье",
    titleDe: "JoJo sucht das Glück",
    year: 2011,
    level: "A0",
    kind: "Телероман",
    genre: ["Драма", "Учебный"],
    rating: 4.5,
    duration: "≈4 мин",
    poster: { icon: "💌", grad: "linear-gradient(160deg,#ef5b5b,#8f1b1b)" },
    review:
      "ЙоЙо приехала из Бразилии. Учиться. Влюбляться. Ошибаться. Сделано DW для начинающих. Короткие сцены. Живой язык. Мягкий вход.",
    why: "Учебный сериал DW. Речь чистая, темп спокойный.",
    links: [
      { name: "DW Learn German", url: "https://learngerman.dw.com/de/jojo-sucht-das-gl%C3%BCck/s-31564677" }
    ]
  },

  /* ---------------- A1 ---------------- */
  {
    id: "tuerkisch-fuer-anfaenger",
    title: "Турецкий для начинающих",
    titleDe: "Türkisch für Anfänger",
    year: 2006,
    level: "A1",
    kind: "Сериал",
    genre: ["Комедия", "Семейное"],
    rating: 4.6,
    duration: "≈25 мин",
    poster: { icon: "👨‍👩‍👧‍👦", grad: "linear-gradient(160deg,#ef8e5b,#8f3a1b)" },
    review:
      "Две семьи стали одной. Немцы и турки под одной крышей. Конфликты. Шутки. Любовь. Язык простой, но живой. Смеёшься и запоминаешь.",
    why: "Бытовые диалоги. Молодые герои. Речь современная.",
    links: [
      { name: "ARD Mediathek", url: "https://www.ardmediathek.de/sendung/tuerkisch-fuer-anfaenger" },
      { name: "Netflix", url: "https://www.netflix.com/title/70213270" }
    ]
  },
  {
    id: "berlin-berlin",
    title: "Берлин, Берлин",
    titleDe: "Berlin, Berlin",
    year: 2002,
    level: "A1",
    kind: "Сериал",
    genre: ["Комедия", "Романтика"],
    rating: 4.3,
    duration: "≈25 мин",
    poster: { icon: "🎨", grad: "linear-gradient(160deg,#5bcfef,#1b5f8f)" },
    review:
      "Лолле приехала в Берлин. Работа, любовь, соседи. Серии лёгкие. Голос за кадром объясняет мысли. Ты слышишь и понимаешь героиню.",
    why: "Закадровый голос помогает следить за сюжетом.",
    links: [
      { name: "ARD Mediathek", url: "https://www.ardmediathek.de/sendung/berlin-berlin" }
    ]
  },
  {
    id: "bibi-und-tina",
    title: "Бибби и Тина",
    titleDe: "Bibi & Tina",
    year: 2014,
    level: "A1",
    kind: "Фильм",
    genre: ["Семейное", "Приключения"],
    rating: 4.1,
    duration: "≈100 мин",
    poster: { icon: "🐴", grad: "linear-gradient(160deg,#8eef5b,#4a8f1b)" },
    review:
      "Две подруги. Лошади. Лето. Немного магии. Фильм для семьи. Слова простые. Песни запоминаются. Приятно и без напряга.",
    why: "Ясная речь. Простые истории. Молодые актёры.",
    links: [
      { name: "Amazon Prime", url: "https://www.amazon.de/dp/B00K19P3VC" }
    ]
  },
  {
    id: "das-haus-anubis",
    title: "Дом Анубис",
    titleDe: "Das Haus Anubis",
    year: 2009,
    level: "A1",
    kind: "Сериал",
    genre: ["Мистика", "Подростковое"],
    rating: 4.0,
    duration: "≈15 мин",
    poster: { icon: "🔺", grad: "linear-gradient(160deg,#c15bef,#5f1b8f)" },
    review:
      "Интернат. Тайна. Пропавшая девочка. Серии короткие. Интрига держит. Хочешь узнать дальше — слушаешь внимательнее. Так учат уши.",
    why: "Короткий формат. Простая лексика. Мотивирует смотреть дальше.",
    links: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=das+haus+anubis" }
    ]
  },
  {
    id: "ku-damm-56",
    title: "Кудам 56",
    titleDe: "Ku'damm 56",
    year: 2016,
    level: "A1",
    kind: "Мини-сериал",
    genre: ["Драма", "История"],
    rating: 4.4,
    duration: "≈90 мин",
    poster: { icon: "💃", grad: "linear-gradient(160deg,#ef5bc1,#8f1b5f)" },
    review:
      "Берлин пятидесятых. Танцшкола. Три сестры. Строгая мать. Красивая картинка. Речь ясная и театральная. Сложнее детского, но всё ещё мягко.",
    why: "Чёткая дикция. Медленные диалоги. Сильные эмоции в кадре.",
    links: [
      { name: "ZDF Mediathek", url: "https://www.zdf.de/serien/kudamm" }
    ]
  },
  {
    id: "wickie",
    title: "Вики и его друзья",
    titleDe: "Wickie und die starken Männer",
    year: 1974,
    level: "A1",
    kind: "Мультсериал",
    genre: ["Детское", "Приключения"],
    rating: 4.0,
    duration: "≈25 мин",
    poster: { icon: "⛵", grad: "linear-gradient(160deg,#5b6eef,#1b2a8f)" },
    review:
      "Маленький викинг. Большая голова. Хитрые идеи. Приключения на море. Немецкий тут добрый и понятный. Классика поколений.",
    why: "Приключенческий сюжет. Ясная речь. Простые слова.",
    links: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=wickie+und+die+starken+m%C3%A4nner" }
    ]
  },

  /* ---------------- A2 ---------------- */
  {
    id: "good-bye-lenin",
    title: "Гуд бай, Ленин!",
    titleDe: "Good Bye, Lenin!",
    year: 2003,
    level: "A2",
    kind: "Фильм",
    genre: ["Драма", "Комедия"],
    rating: 4.8,
    duration: "121 мин",
    poster: { icon: "🚩", grad: "linear-gradient(160deg,#ef5b5b,#8f1b3a)" },
    review:
      "Стена пала. Мама проспала переворот. Сын врёт, что ГДР жива. Немецкий тёплый. Домашний. История трогает. Отличный фильм для А2.",
    why: "Бытовые диалоги. Понятный сюжет. Классика для учащих язык.",
    links: [
      { name: "Amazon Prime", url: "https://www.amazon.de/dp/B00E7YT9DG" },
      { name: "Apple TV", url: "https://tv.apple.com/de/movie/good-bye-lenin/umc.cmc.6y6z8f" }
    ]
  },
  {
    id: "das-wunder-von-bern",
    title: "Чудо Берна",
    titleDe: "Das Wunder von Bern",
    year: 2003,
    level: "A2",
    kind: "Фильм",
    genre: ["Драма", "Спорт"],
    rating: 4.5,
    duration: "118 мин",
    poster: { icon: "⚽", grad: "linear-gradient(160deg,#5bef8e,#1b8f52)" },
    review:
      "1954 год. Отец вернулся с войны. Сын любит футбол. Германия берёт кубок. Про семью. Про надежду. Речь спокойная, эмоции сильные.",
    why: "Ясные диалоги. Понятная эпоха. Много бытовых сцен.",
    links: [
      { name: "Amazon Prime", url: "https://www.amazon.de/dp/B00E7YSY0K" }
    ]
  },
  {
    id: "fack-ju-goehte",
    title: "Училка против",
    titleDe: "Fack ju Göhte",
    year: 2013,
    level: "A2",
    kind: "Фильм",
    genre: ["Комедия"],
    rating: 4.4,
    duration: "119 мин",
    poster: { icon: "🎓", grad: "linear-gradient(160deg,#efc15b,#8f6a1b)" },
    review:
      "Бывший вор идёт в школу. Учителем. Класс — хаос. Шутки резкие. Сленг живой. Смешно. Но осторожно: молодёжный жаргон здесь настоящий.",
    why: "Современный разговорный. Много юмора. Немного сленга.",
    links: [
      { name: "Netflix", url: "https://www.netflix.com/title/70298026" },
      { name: "Amazon Prime", url: "https://www.amazon.de/dp/B00J2F1G3E" }
    ]
  },
  {
    id: "der-vorname",
    title: "Имя",
    titleDe: "Der Vorname",
    year: 2018,
    level: "A2",
    kind: "Фильм",
    genre: ["Комедия", "Драма"],
    rating: 4.3,
    duration: "92 мин",
    poster: { icon: "🍷", grad: "linear-gradient(160deg,#ef5b8e,#8f1b4a)" },
    review:
      "Ужин в кругу семьи. Один вопрос: как назвать сына. И всё взорвалось. Много диалогов. Всё в одной комнате. Слушать легко, следить приятно.",
    why: "Разговоры за столом. Чистая речь. Одна локация.",
    links: [
      { name: "Amazon Prime", url: "https://www.amazon.de/dp/B07MFT9F8L" }
    ]
  },
  {
    id: "vincent-will-meer",
    title: "Винсент хочет к морю",
    titleDe: "Vincent will Meer",
    year: 2010,
    level: "A2",
    kind: "Фильм",
    genre: ["Драма", "Роуд-муви"],
    rating: 4.2,
    duration: "96 мин",
    poster: { icon: "🌊", grad: "linear-gradient(160deg,#5bd6ef,#1b6f8f)" },
    review:
      "Трое сбегают из клиники. Едут к морю. У каждого своя боль. Дорога лечит. Диалоги простые. Тема взрослая, язык доступный.",
    why: "Спокойный темп. Понятные фразы. Тёплая история.",
    links: [
      { name: "Amazon Prime", url: "https://www.amazon.de/dp/B0062TYQ0Q" }
    ]
  },
  {
    id: "die-welle",
    title: "Волна",
    titleDe: "Die Welle",
    year: 2008,
    level: "A2",
    kind: "Фильм",
    genre: ["Драма", "Триллер"],
    rating: 4.6,
    duration: "107 мин",
    poster: { icon: "🌀", grad: "linear-gradient(160deg,#8e8eef,#3a3a8f)" },
    review:
      "Учитель ставит эксперимент. Класс становится движением. Быстро. Страшно. Про власть и толпу. Речь школьная и ясная. Держит до конца.",
    why: "Школьная лексика. Понятная драма. Сильный сюжет.",
    links: [
      { name: "Amazon Prime", url: "https://www.amazon.de/dp/B00E7YSXTC" },
      { name: "Apple TV", url: "https://tv.apple.com/de/movie/die-welle" }
    ]
  }
];

const LEVELS = {
  A0: {
    code: "A0",
    name: "Первый шаг",
    tagline: "Ты только начал. Смотри и слушай.",
    desc: "Нулевой уровень. Речь медленная. Слова простые. Картинка объясняет сама. Здесь не страшно ничего не понять — тут понятно почти всё.",
    grad: "linear-gradient(135deg,#5b8def,#8e5bef)"
  },
  A1: {
    code: "A1",
    name: "Первые слова",
    tagline: "Ты знаешь основы. Пора слушать истории.",
    desc: "Первый уровень. Уже есть база. Простые диалоги. Быт и семья. Сюжеты держат внимание. Ты ловишь знакомые слова и радуешься.",
    grad: "linear-gradient(135deg,#ef8e5b,#ef5bc1)"
  },
  A2: {
    code: "A2",
    name: "Настоящее кино",
    tagline: "Ты готов к большим фильмам.",
    desc: "Второй уровень. Речь быстрее. Эмоции сильнее. Настоящие фильмы, а не учебные. Ты уже понимаешь сюжет и характеры. Смотри с субтитрами.",
    grad: "linear-gradient(135deg,#5bef8e,#5bd6ef)"
  }
};

if (typeof module !== "undefined") module.exports = { FILMS, LEVELS };
