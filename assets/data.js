/* Stellas Deutsch — подборка мультфильмов для А0–А1–А2.
   Тема Disney. Тексты в стиле Шынгыса. Коротко. По делу. */

const FILMS = [
  /* ---------------- A0 ---------------- */
  {
    id: "shaun-das-schaf",
    title: "Барашек Шон",
    titleDe: "Shaun das Schaf",
    year: 2007,
    level: "A0",
    kind: "Мультсериал",
    genre: ["Комедия", "Для малышей"],
    rating: 4.8,
    duration: "≈7 мин",
    poster: { icon: "🐑", grad: "linear-gradient(160deg,#9fd3a8,#3e7d52)" },
    review:
      "Слов тут нет. Совсем. Только блеянье и музыка. Шон хитрый. Ферма живая. Смешно без перевода. Идеальный старт — язык не мешает.",
    why: "Речи почти ноль. Понятно всем. Смеёшься и расслабляешься.",
    links: [
      { name: "Netflix", url: "https://www.netflix.com/title/70153138" },
      { name: "YouTube", url: "https://www.youtube.com/@ShauntheSheep" }
    ]
  },
  {
    id: "der-kleine-maulwurf",
    title: "Кротик",
    titleDe: "Der kleine Maulwurf",
    year: 1957,
    level: "A0",
    kind: "Мультсериал",
    genre: ["Приключения", "Для малышей"],
    rating: 4.6,
    duration: "≈10 мин",
    poster: { icon: "🐭", grad: "linear-gradient(160deg,#c9a06b,#6b4a2b)" },
    review:
      "Маленький крот. Большое сердце. Говорит редко. Всё показывает мимикой. Добрая классика. Понятно без слов вообще.",
    why: "Почти без диалогов. Одни картинки и эмоции.",
    links: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=der+kleine+maulwurf" }
    ]
  },
  {
    id: "die-biene-maja",
    title: "Пчёлка Майя",
    titleDe: "Die Biene Maja",
    year: 1975,
    level: "A0",
    kind: "Мультсериал",
    genre: ["Приключения", "Для малышей"],
    rating: 4.4,
    duration: "≈25 мин",
    poster: { icon: "🐝", grad: "linear-gradient(160deg,#ffd86b,#e0952b)" },
    review:
      "Майя летает по лугу. Знакомится с жуками. Задаёт вопросы. Речь медленная и ясная. Немецкая классика для самых маленьких.",
    why: "Простые фразы. Медленный темп. Всё про природу.",
    links: [
      { name: "KiKA", url: "https://www.kika.de/die-biene-maja/index.html" },
      { name: "YouTube", url: "https://www.youtube.com/@DieBieneMaja" }
    ]
  },
  {
    id: "peppa-wutz",
    title: "Свинка Пеппа",
    titleDe: "Peppa Wutz",
    year: 2004,
    level: "A0",
    kind: "Мультсериал",
    genre: ["Для малышей"],
    rating: 4.3,
    duration: "≈5 мин",
    poster: { icon: "🐷", grad: "linear-gradient(160deg,#ff9ad4,#b0347c)" },
    review:
      "Маленькие серии. Простые фразы. Семья, лужи, друзья. Дети учат язык именно так. Ты можешь так же. Не стыдно. Работает.",
    why: "Предложения короткие. Темы бытовые. Слова повторяются.",
    links: [
      { name: "YouTube", url: "https://www.youtube.com/@PeppaWutz" }
    ]
  },
  {
    id: "das-sandmaennchen",
    title: "Песочный человечек",
    titleDe: "Das Sandmännchen",
    year: 1959,
    level: "A0",
    kind: "Мультсериал",
    genre: ["Спокойное", "Для малышей"],
    rating: 4.2,
    duration: "≈6 мин",
    poster: { icon: "🌙", grad: "linear-gradient(160deg,#7b8ce0,#2a3374)" },
    review:
      "Сказка перед сном. Тихо. Мягко. Короткие истории. Голос спокойный. Слушаешь и засыпаешь. Немецкий тут как колыбельная.",
    why: "Спокойный голос. Простые сказки. Идеально на ночь.",
    links: [
      { name: "ARD Mediathek", url: "https://www.sandmann.de/" }
    ]
  },
  {
    id: "pettersson-und-findus",
    title: "Петсон и Финдус",
    titleDe: "Pettersson und Findus",
    year: 1999,
    level: "A0",
    kind: "Мультфильм",
    genre: ["Семейное", "Для малышей"],
    rating: 4.4,
    duration: "≈80 мин",
    poster: { icon: "🐱", grad: "linear-gradient(160deg,#ff9d6f,#b0552b)" },
    review:
      "Старик и котёнок. Домик в деревне. Тёплые истории. Ничего не спешит. Речь ясная. Уютно, как плед зимой.",
    why: "Медленный темп. Чёткая речь. Добрый быт.",
    links: [
      { name: "Amazon Prime", url: "https://www.amazon.de/s?k=pettersson+und+findus" }
    ]
  },

  /* ---------------- A1 ---------------- */
  {
    id: "benjamin-bluemchen",
    title: "Слонёнок Бенджамин",
    titleDe: "Benjamin Blümchen",
    year: 1977,
    level: "A1",
    kind: "Мультсериал",
    genre: ["Приключения", "Семейное"],
    rating: 4.3,
    duration: "≈25 мин",
    poster: { icon: "🐘", grad: "linear-gradient(160deg,#8ec5ff,#2a5fb0)" },
    review:
      "Говорящий слон живёт в зоопарке. Töröö! Помогает друзьям. Речь чистая и добрая. Классика немецкого детства. Слушать легко.",
    why: "Ясная дикция. Простые истории. Знакомые слова.",
    links: [
      { name: "Netflix", url: "https://www.netflix.com/search?q=benjamin%20bl%C3%BCmchen" },
      { name: "YouTube", url: "https://www.youtube.com/@BenjaminBluemchen" }
    ]
  },
  {
    id: "bibi-blocksberg",
    title: "Ведьмочка Бибби",
    titleDe: "Bibi Blocksberg",
    year: 1980,
    level: "A1",
    kind: "Мультсериал",
    genre: ["Магия", "Семейное"],
    rating: 4.2,
    duration: "≈25 мин",
    poster: { icon: "🧹", grad: "linear-gradient(160deg,#c39aff,#5f2b9c)" },
    review:
      "Маленькая ведьма. Метла. Заклинания. Eene meene… — и магия! Сюжеты простые. Речь бодрая. Волшебство держит внимание.",
    why: "Понятные диалоги. Весёлый сюжет. Повтор заклинаний.",
    links: [
      { name: "Netflix", url: "https://www.netflix.com/search?q=bibi%20blocksberg" },
      { name: "YouTube", url: "https://www.youtube.com/@BibiBlocksberg" }
    ]
  },
  {
    id: "heidi",
    title: "Хайди",
    titleDe: "Heidi",
    year: 1974,
    level: "A1",
    kind: "Аниме",
    genre: ["Драма", "Семейное"],
    rating: 4.6,
    duration: "≈25 мин",
    poster: { icon: "⛰️", grad: "linear-gradient(160deg,#8fd3a0,#2f7fb0)" },
    review:
      "Девочка в Альпах. Дедушка, козы, горы. Немецкий дубляж чистый. История трогает. Тёплая классика на все времена.",
    why: "Медленная речь. Понятные эмоции. Простая жизнь в горах.",
    links: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=heidi+zeichentrick+deutsch" }
    ]
  },
  {
    id: "wickie",
    title: "Вики и его друзья",
    titleDe: "Wickie und die starken Männer",
    year: 1974,
    level: "A1",
    kind: "Мультсериал",
    genre: ["Приключения", "Семейное"],
    rating: 4.1,
    duration: "≈25 мин",
    poster: { icon: "⛵", grad: "linear-gradient(160deg,#6ea8ef,#1b3a8f)" },
    review:
      "Маленький викинг. Большая голова. Хитрые идеи. Приключения на море. Немецкий тут добрый и понятный. Классика поколений.",
    why: "Приключенческий сюжет. Ясная речь. Простые слова.",
    links: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=wickie+und+die+starken+m%C3%A4nner" }
    ]
  },
  {
    id: "nils-holgersson",
    title: "Путешествие Нильса",
    titleDe: "Nils Holgersson",
    year: 1980,
    level: "A1",
    kind: "Аниме",
    genre: ["Приключения"],
    rating: 4.3,
    duration: "≈25 мин",
    poster: { icon: "🦢", grad: "linear-gradient(160deg,#7fe0c9,#1b7d8f)" },
    review:
      "Мальчик стал крошечным. Улетел с дикими гусями. Видит всю страну сверху. Речь ясная. Приключение большое, слова простые.",
    why: "Понятный рассказ. Спокойный темп. Много действия.",
    links: [
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=nils+holgersson+deutsch" }
    ]
  },
  {
    id: "der-grueffelo",
    title: "Груффало",
    titleDe: "Der Grüffelo",
    year: 2011,
    level: "A1",
    kind: "Мультфильм",
    genre: ["Сказка", "Для малышей"],
    rating: 4.7,
    duration: "≈27 мин",
    poster: { icon: "🌲", grad: "linear-gradient(160deg,#7fb069,#2e5233)" },
    review:
      "Мышонок идёт по лесу. Придумывает монстра. Монстр оказался настоящим. Всё в рифму. Красиво нарисовано. Короткая жемчужина.",
    why: "Стихи и рифмы. Медленно и чётко. Легко запомнить.",
    links: [
      { name: "Amazon Prime", url: "https://www.amazon.de/s?k=der+gr%C3%BCffelo" }
    ]
  },

  /* ---------------- A2 ---------------- */
  {
    id: "der-koenig-der-loewen",
    title: "Король Лев",
    titleDe: "Der König der Löwen",
    year: 1994,
    level: "A2",
    kind: "Мультфильм",
    genre: ["Драма", "Приключения"],
    rating: 4.9,
    duration: "88 мин",
    poster: { icon: "🦁", grad: "linear-gradient(160deg,#ffb347,#a5561b)" },
    review:
      "Симба теряет отца. Убегает. Взрослеет. Возвращается за троном. Немецкий дубляж мощный. Эмоции понятны без слов. Легенда Disney.",
    why: "Известный сюжет. Ясная речь героев. Помогает знание истории.",
    links: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/movies/der-koenig-der-loewen/1HqwiEcje1e0" }
    ]
  },
  {
    id: "die-eiskoenigin",
    title: "Холодное сердце",
    titleDe: "Die Eiskönigin",
    year: 2013,
    level: "A2",
    kind: "Мультфильм",
    genre: ["Магия", "Семейное"],
    rating: 4.7,
    duration: "102 мин",
    poster: { icon: "❄️", grad: "linear-gradient(160deg,#a5d8ff,#4a72c4)" },
    review:
      "Две сестры. Ледяная сила. Одна прячется, другая ищет. Песни знакомы всем. Немецкий дубляж красивый. Пой и учи слова.",
    why: "Знакомая история. Песни для запоминания. Чистый дубляж.",
    links: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/movies/die-eiskoenigin/2Fb0zB9SzPzq" }
    ]
  },
  {
    id: "findet-nemo",
    title: "В поисках Немо",
    titleDe: "Findet Nemo",
    year: 2003,
    level: "A2",
    kind: "Мультфильм",
    genre: ["Приключения", "Семейное"],
    rating: 4.8,
    duration: "100 мин",
    poster: { icon: "🐠", grad: "linear-gradient(160deg,#4fc3f7,#1565c0)" },
    review:
      "Папа-рыба ищет сына. Через весь океан. Дори всё забывает. Смешно и трогательно. Речь живая, но понятная. Pixar в лучшем виде.",
    why: "Понятный сюжет. Много бытовых диалогов. Живой юмор.",
    links: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/movies/findet-nemo/6trFhtazlSLd" }
    ]
  },
  {
    id: "vaiana",
    title: "Моана",
    titleDe: "Vaiana",
    year: 2016,
    level: "A2",
    kind: "Мультфильм",
    genre: ["Приключения", "Магия"],
    rating: 4.6,
    duration: "107 мин",
    poster: { icon: "🌺", grad: "linear-gradient(160deg,#2ec5b6,#0a7d74)" },
    review:
      "Девочка выходит в океан. Ищет полубога. Спасает свой остров. Море живое. Песни цепляют. Немецкий яркий и эмоциональный.",
    why: "Ясная речь. Сильные эмоции. Песни помогают учить.",
    links: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/movies/vaiana/4RLNoK6L2b0y" }
    ]
  },
  {
    id: "mein-nachbar-totoro",
    title: "Мой сосед Тоторо",
    titleDe: "Mein Nachbar Totoro",
    year: 1988,
    level: "A2",
    kind: "Аниме",
    genre: ["Магия", "Семейное"],
    rating: 4.8,
    duration: "86 мин",
    poster: { icon: "🌳", grad: "linear-gradient(160deg,#7fb069,#2e5233)" },
    review:
      "Две сестры переехали в деревню. Нашли лесного духа. Тихое чудо. Ghibli. Речь спокойная и бытовая. Тепло на весь фильм.",
    why: "Медленный темп. Простые семейные диалоги. Мало сложных слов.",
    links: [
      { name: "Netflix", url: "https://www.netflix.com/title/60032294" }
    ]
  },
  {
    id: "zoomania",
    title: "Зверополис",
    titleDe: "Zoomania",
    year: 2016,
    level: "A2",
    kind: "Мультфильм",
    genre: ["Комедия", "Детектив"],
    rating: 4.7,
    duration: "108 мин",
    poster: { icon: "🦊", grad: "linear-gradient(160deg,#ffa26b,#c85a2b)" },
    review:
      "Зайчиха стала полицейским. Лис — её напарник. Вместе раскрывают дело. Город зверей огромный. Речь быстрее, но чёткая. Умно и смешно.",
    why: "Динамичный сюжет. Современная речь. Немного быстрее — для А2 в самый раз.",
    links: [
      { name: "Disney+", url: "https://www.disneyplus.com/de-de/movies/zoomania/4lssnWjyEjMr" }
    ]
  }
];

const LEVELS = {
  A0: {
    code: "A0",
    name: "Первое чудо",
    tagline: "Ты только начал. Смотри и улыбайся.",
    desc: "Нулевой уровень. Слов почти нет. Картинка рассказывает сама. Малыши смотрят и всё понимают. Ты тоже сможешь. Здесь не страшно.",
    grad: "linear-gradient(135deg,#8ec5ff,#c39aff)"
  },
  A1: {
    code: "A1",
    name: "Первые слова",
    tagline: "Ты знаешь основы. Пора слушать сказки.",
    desc: "Первый уровень. Уже есть база. Простые диалоги. Волшебство и приключения. Ты ловишь знакомые слова и радуешься. Магия помогает.",
    grad: "linear-gradient(135deg,#ffd86b,#ff9ad4)"
  },
  A2: {
    code: "A2",
    name: "Большое кино",
    tagline: "Ты готов к настоящим шедеврам.",
    desc: "Второй уровень. Полные мультфильмы. Disney, Pixar, Ghibli — в немецком дубляже. Речь живее, эмоции сильнее. Смотри с субтитрами и наслаждайся.",
    grad: "linear-gradient(135deg,#7fe0c9,#8ec5ff)"
  }
};

if (typeof module !== "undefined") module.exports = { FILMS, LEVELS };
