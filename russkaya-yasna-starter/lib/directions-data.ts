// Контент направлений. Обновляйте тексты и списки ниже при смене программы.
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Castle,
  Globe,
  Heart,
  Map,
  Navigation2,
  Search,
  Send,
  Sparkles,
  Star,
} from "lucide-react";

export type DirectionFilter =
  | "all"
  | "beginner"
  | "children"
  | "online"
  | "moscow";

export type DirectionStats = {
  participants: string;
  years: string;
  materials: string;
};

export type DirectionTestimonial = {
  id: string;
  quote: string;
  name: string;
  age?: string;
  profession?: string;
};

export type DirectionStory = {
  id: string;
  quote: string;
  name: string;
  role: string;
  before: string;
  after: string;
  achievement: string;
};

export type DirectionFormat = {
  timeCommitment: string;
  frequency: string;
  location: string;
};

export type DirectionResource = {
  id: string;
  label: string;
  href: string;
  icon?: LucideIcon;
};

export type DirectionTeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
  contact: string;
};

export type DirectionResourceItem = {
  id: string;
  title: string;
  type: "Статья" | "Видео" | "Гайд";
  date: string;
  duration: string;
  href: string;
};

export type DirectionFaq = {
  id: string;
  question: string;
  answer: string;
};

export type DirectionGalleryItem = {
  id: string;
  src: string;
  alt: string;
};

export type DirectionData = {
  id: string;
  slug: string;
  name: string;
  icon: LucideIcon;
  color: string;
  tagline: string;
  stats: DirectionStats;
  forWhom: string[];
  activities: string[];
  results: DirectionTestimonial[];
  format: DirectionFormat;
  resources: DirectionResource[];
  filters: DirectionFilter[];
  href: string;
  seo: {
    title: string;
    description: string;
    ogImage?: string;
  };
  about: string[];
  mission: string;
  uniqueness: string;
  forWhomDetailed: string[];
  prerequisites: string[];
  activitiesDetailed: string[];
  schedule: string[];
  tools: string[];
  resultsExtended: DirectionStory[];
  gallery: DirectionGalleryItem[];
  team: DirectionTeamMember[];
  resourcesDetailed: DirectionResourceItem[];
  relatedSlugs: string[];
  faq: DirectionFaq[];
};

export const directionFilters: { id: DirectionFilter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "beginner", label: "Для начинающих" },
  { id: "children", label: "С детьми" },
  { id: "online", label: "Онлайн" },
  { id: "moscow", label: "В Москве" },
];

const placeholderGallery = [
  {
    id: "gallery-1",
    src: "/images/hero-placeholder.svg",
    alt: "Событие направления",
  },
  {
    id: "gallery-2",
    src: "/images/hero-placeholder.svg",
    alt: "Участники встречи",
  },
  {
    id: "gallery-3",
    src: "/images/hero-placeholder.svg",
    alt: "Материалы и заметки",
  },
];

export const directionsData: DirectionData[] = [
  {
    id: "direction-neglinka",
    slug: "neglinka",
    name: "Неглинка / 38 Меридиан",
    icon: Map,
    color: "#2B7A78",
    tagline: "Расшифровываем архитектурные и географические коды Москвы",
    stats: {
      participants: "200+ участников",
      years: "Работаем 3 года",
      materials: "150+ материалов",
    },
    forWhom: [
      "Вы любите гулять по городу и хотите видеть больше, чем туристы",
      "Вам интересна настоящая история, не официальные версии",
      "Вы хотите понимать, как устроена Москва и почему",
    ],
    activities: [
      "Участвовать в натурных уроках (прогулки, теплоходы)",
      "Изучать архивные карты и документы",
      "Исследовать связь названий рек, улиц с историей",
      "Разгадывать архитектурные символы",
    ],
    results: [
      {
        id: "neglinka-1",
        quote: "Теперь каждая прогулка — это открытие новых смыслов",
        name: "Мария",
        age: "34 года",
      },
      {
        id: "neglinka-2",
        quote: "Понял логику застройки Москвы — теперь вижу систему",
        name: "Сергей",
        age: "45 лет",
      },
    ],
    format: {
      timeCommitment: "2-4 часа в неделю",
      frequency: "Натурные уроки 1-2 раза в месяц",
      location: "Дистанционно + встречи в Москве",
    },
    resources: [
      {
        id: "neglinka-telegram",
        label: "Telegram",
        href: "https://t.me/neglinka78",
        icon: Send,
      },
      {
        id: "neglinka-site",
        label: "Сайт",
        href: "https://example.com",
        icon: Globe,
      },
    ],
    filters: ["all", "moscow", "online"],
    href: "/neglinka",
    seo: {
      title: "Неглинка / 38 Меридиан — Русская Ясна",
      description:
        "Исследуйте Москву через географические и архитектурные коды. Натурные уроки, архивы и новые маршруты.",
      ogImage: "/images/hero-placeholder.svg",
    },
    about: [
      "Неглинка — это направление, где мы смотрим на город как на живой текст. Мы читаем его через реки, улицы, старые планы и знаки архитектуры.",
      "Участники учатся находить связи между географией, историей и современными маршрутами, а также видеть скрытую логику городской ткани.",
      "Мы объединяем работу в архивах, полевые прогулки и коллективные обсуждения, чтобы восстановить историческую картину Москвы.",
    ],
    mission:
      "Помочь людям видеть город глубже, возвращая смысл названиям, формам и пространствам.",
    uniqueness:
      "Мы соединяем архивные исследования с реальными маршрутами и анализом символики.",
    forWhomDetailed: [
      "Тем, кто любит городские исследования и прогулки с фокусом на смыслы",
      "Тем, кто хочет проверить официальные версии и увидеть альтернативы",
      "Тем, кто ищет практику в реальном пространстве, а не только чтение",
      "Тем, кто хочет научиться вести собственные маршруты",
    ],
    prerequisites: [
      "Специальных знаний не требуется",
      "Удобная обувь и готовность к прогулкам",
    ],
    activitiesDetailed: [
      "Натурные уроки по ключевым районам Москвы",
      "Совместное чтение архивных карт и планов",
      "Разбор символики фасадов и городской топонимики",
      "Работа в исследовательских мини-группах",
      "Подготовка личных заметок и маршрутов",
    ],
    schedule: [
      "Еженедельные разборы материалов онлайн",
      "Натурные уроки 1-2 раза в месяц",
      "Спец-проекты в конце каждого сезона",
    ],
    tools: ["Telegram", "Zoom", "Google Drive", "Карты", "Архивы"],
    resultsExtended: [
      {
        id: "neglinka-story-1",
        quote:
          "Я начала видеть связи между улицами и историей. Теперь мои прогулки превращаются в исследование.",
        name: "Мария Р.",
        role: "Участник направления",
        before: "Гуляла без понимания контекста",
        after: "Читаю город как карту смыслов",
        achievement: "Собрала свой первый маршрут",
      },
      {
        id: "neglinka-story-2",
        quote:
          "Нашел ответ на вопросы по застройке Замоскворечья и оформил материал для публикации.",
        name: "Сергей И.",
        role: "Исследователь",
        before: "Не понимал логику районов",
        after: "Выстроил системный взгляд",
        achievement: "Готовит исследование к публикации",
      },
    ],
    gallery: placeholderGallery,
    team: [
      {
        id: "neglinka-team-1",
        name: "Алексей Широков",
        role: "Координатор",
        bio: "Исследователь городской среды, автор маршрутов по Москве.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/neglinka78",
      },
      {
        id: "neglinka-team-2",
        name: "Анна Кулагина",
        role: "Ведущий исследователь",
        bio: "Работает с архивами и сопоставляет топонимику с историей.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/neglinka78",
      },
    ],
    resourcesDetailed: [
      {
        id: "neglinka-resource-1",
        title: "Архивные планы Москвы: путеводитель",
        type: "Гайд",
        date: "2024-12-10",
        duration: "12 стр.",
        href: "https://example.com",
      },
      {
        id: "neglinka-resource-2",
        title: "История Неглинки в документах",
        type: "Статья",
        date: "2024-11-28",
        duration: "8 мин",
        href: "https://example.com",
      },
      {
        id: "neglinka-resource-3",
        title: "Маршрут по Замоскворечью",
        type: "Видео",
        date: "2024-10-05",
        duration: "22 мин",
        href: "https://example.com",
      },
    ],
    relatedSlugs: ["astronevod", "marshruty", "izvod"],
    faq: [
      {
        id: "neglinka-faq-1",
        question: "Нужно ли жить в Москве?",
        answer:
          "Нет, часть материалов доступна онлайн. Натурные уроки проводятся в Москве, но есть записи и отчеты.",
      },
      {
        id: "neglinka-faq-2",
        question: "Сколько длится прогулка?",
        answer: "Обычно 2-3 часа с остановками и обсуждением.",
      },
      {
        id: "neglinka-faq-3",
        question: "Можно ли прийти с ребенком?",
        answer: "Да, если ребенок готов к длительной прогулке.",
      },
      {
        id: "neglinka-faq-4",
        question: "Есть ли архивные материалы?",
        answer: "Да, мы даем доступ к подборкам карт и документов.",
      },
      {
        id: "neglinka-faq-5",
        question: "Как начать?",
        answer: "Оставьте заявку, мы добавим вас в канал и пришлем стартовые материалы.",
      },
    ],
  },
  {
    id: "direction-litprosvet",
    slug: "litprosvet",
    name: "ЛитПроСвет",
    icon: BookOpen,
    color: "#8B4513",
    tagline: "Учимся читать между строк и создавать тексты с глубоким смыслом",
    stats: {
      participants: "140+ участников",
      years: "Работаем 2 года",
      materials: "120+ материалов",
    },
    forWhom: [
      "Вы читаете классику, но чувствуете, что упускаете скрытые смыслы",
      "Хотите научиться писать осмысленные тексты",
      "Интересуетесь, какие ценности заложены в произведениях",
    ],
    activities: [
      "Разбирать классику по композиции и символам",
      "Участвовать в читательском клубе (каждый четверг)",
      "Учиться писать на курсах «Пиши легко»",
      "Создавать собственные тексты",
    ],
    results: [
      {
        id: "litprosvet-1",
        quote: "Написала первый рассказ, опубликованный в альманахе",
        name: "Елена",
        age: "42 года",
      },
      {
        id: "litprosvet-2",
        quote: "Открыл для себя Пушкина заново — увидел уровни смыслов",
        name: "Дмитрий",
        age: "37 лет",
      },
    ],
    format: {
      timeCommitment: "2-3 часа в неделю",
      frequency: "Клуб каждый четверг, курсы по расписанию",
      location: "Офлайн в Москве + онлайн",
    },
    resources: [
      {
        id: "litprosvet-telegram",
        label: "Telegram",
        href: "https://t.me/russkaya_yasna",
        icon: Send,
      },
    ],
    filters: ["all", "beginner", "online", "moscow"],
    href: "/litprosvet",
    seo: {
      title: "ЛитПроСвет — Русская Ясна",
      description:
        "Читательский клуб, разбор классики и авторские тексты с глубоким смыслом.",
      ogImage: "/images/hero-placeholder.svg",
    },
    about: [
      "ЛитПроСвет — пространство для глубокого чтения и осмысленного письма. Мы разбираем тексты, ищем символы и учимся слышать язык.",
      "Участники регулярно встречаются в читательском клубе и проходят практику письма, чтобы не просто читать, а создавать свои тексты.",
      "Мы соединяем литературную традицию и современную практику, чтобы вернуть смысл словам.",
    ],
    mission:
      "Раскрыть глубину русского текста и дать инструменты для собственного письма.",
    uniqueness:
      "Мы рассматриваем литературу как систему смыслов, а не только сюжет.",
    forWhomDetailed: [
      "Тем, кто хочет понимать классику глубже",
      "Тем, кто пишет тексты и ищет смысловую структуру",
      "Тем, кто хочет вести клубы или занятия по литературе",
      "Тем, кто ищет сообщество читающих людей",
    ],
    prerequisites: ["Специальных знаний не нужно", "Готовность читать и обсуждать"],
    activitiesDetailed: [
      "Еженедельный читательский клуб с модератором",
      "Курсы по письму и структуре текстов",
      "Разборы классики и современных авторов",
      "Практика самостоятельного письма",
      "Обратная связь от наставников",
    ],
    schedule: [
      "Читательский клуб — каждый четверг",
      "Курсы письма — 2 раза в месяц",
      "Литературные марафоны — раз в сезон",
    ],
    tools: ["Telegram", "Zoom", "Google Docs"],
    resultsExtended: [
      {
        id: "litprosvet-story-1",
        quote: "Сформировала программу занятий для школьников.",
        name: "Елена В.",
        role: "Преподаватель",
        before: "Не хватало методики разбора",
        after: "Веду курс по чтению",
        achievement: "Опубликовала 3 рассказа",
      },
      {
        id: "litprosvet-story-2",
        quote: "Понял, как строить смысловые слои в тексте.",
        name: "Дмитрий К.",
        role: "Участник клуба",
        before: "Читал без анализа",
        after: "Разбираю структуру и символы",
        achievement: "Создал авторский блог",
      },
    ],
    gallery: placeholderGallery,
    team: [
      {
        id: "lit-team-1",
        name: "Екатерина Власова",
        role: "Координатор",
        bio: "Филолог, ведет клуб и курсы по чтению.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
      {
        id: "lit-team-2",
        name: "Илья Демидов",
        role: "Редактор",
        bio: "Помогает участникам в редактировании и работе с текстами.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
    ],
    resourcesDetailed: [
      {
        id: "lit-resource-1",
        title: "Карта символов в русской классике",
        type: "Гайд",
        date: "2024-11-15",
        duration: "15 стр.",
        href: "https://example.com",
      },
      {
        id: "lit-resource-2",
        title: "Разбор «Капитанской дочки»",
        type: "Видео",
        date: "2024-10-12",
        duration: "28 мин",
        href: "https://example.com",
      },
      {
        id: "lit-resource-3",
        title: "Как писать без штампов",
        type: "Статья",
        date: "2024-09-20",
        duration: "6 мин",
        href: "https://example.com",
      },
    ],
    relatedSlugs: ["izvod", "astronevod", "prazdniki"],
    faq: [
      {
        id: "lit-faq-1",
        question: "Нужно ли литературное образование?",
        answer: "Нет, мы даем основу и сопровождаем каждого участника.",
      },
      {
        id: "lit-faq-2",
        question: "Можно ли участвовать онлайн?",
        answer: "Да, клуб и разборы доступны онлайн.",
      },
      {
        id: "lit-faq-3",
        question: "Есть ли обратная связь по текстам?",
        answer: "Да, редакторы дают комментарии и рекомендации.",
      },
      {
        id: "lit-faq-4",
        question: "Можно ли вести свои занятия?",
        answer: "Да, мы поддерживаем участников, которые хотят делиться знаниями.",
      },
      {
        id: "lit-faq-5",
        question: "Сколько времени нужно?",
        answer: "Достаточно 2-3 часов в неделю.",
      },
    ],
  },
  {
    id: "direction-astronevod",
    slug: "astronevod",
    name: "Астроневод",
    icon: Star,
    color: "#191970",
    tagline: "Исследуем космос и архитектуру через призму русской традиции",
    stats: {
      participants: "90+ участников",
      years: "Работаем 2 года",
      materials: "80+ материалов",
    },
    forWhom: [
      "Вы увлекаетесь астрономией, но научный подход упускает символизм",
      "Интересуетесь связью неба и земли",
      "Хотите понимать глубокие смыслы за звездами",
    ],
    activities: [
      "Изучать астрономические основы древних сооружений",
      "Исследовать связь созвездий с русской мистикой",
      "Разбирать символизм Кремля, монастырей",
      "Проводить наблюдения неба",
    ],
    results: [
      {
        id: "astronevod-1",
        quote: "Понял, как Кремль связан с созвездиями — это система",
        name: "Игорь",
        age: "40 лет",
      },
    ],
    format: {
      timeCommitment: "1-2 часа в неделю",
      frequency: "Редкие встречи",
      location: "Онлайн + редкие встречи",
    },
    resources: [],
    filters: ["all", "online"],
    href: "/astronevod",
    seo: {
      title: "Астроневод — Русская Ясна",
      description:
        "Связь неба и земли, символика созвездий и архитектуры в русской традиции.",
      ogImage: "/images/hero-placeholder.svg",
    },
    about: [
      "Астроневод соединяет исследование космоса и земных архитектурных форм. Мы смотрим, как традиция отражала движение звезд.",
      "Участники работают с картами неба, знакомятся с символическими системами и применяют их к архитектурным объектам.",
      "Мы создаем пространство для наблюдений, обсуждений и практических исследований.",
    ],
    mission:
      "Показать связь космических циклов и культуры, восстановить забытые смыслы.",
    uniqueness:
      "Мы соединяем астронавигацию, символизм и архитектурные исследования.",
    forWhomDetailed: [
      "Тем, кто интересуется астрономией и символикой",
      "Тем, кто хочет понимать циклы природы и календаря",
      "Тем, кто ищет смысловые связи между небом и землей",
    ],
    prerequisites: ["Базовые знания не обязательны", "Интерес к наблюдениям"],
    activitiesDetailed: [
      "Наблюдения неба и разбор созвездий",
      "Лекции о символике архитектуры",
      "Исследования календарных циклов",
      "Совместные проекты с другими направлениями",
    ],
    schedule: [
      "Еженедельные онлайн-встречи",
      "Календарные наблюдения раз в месяц",
      "Сезонные исследования",
    ],
    tools: ["Zoom", "Telegram", "Календарные карты"],
    resultsExtended: [
      {
        id: "astro-story-1",
        quote: "Связал архитектуру Кремля с небесными циклами.",
        name: "Игорь П.",
        role: "Исследователь",
        before: "Изучал звезды отдельно",
        after: "Вижу систему взаимосвязей",
        achievement: "Подготовил доклад",
      },
    ],
    gallery: placeholderGallery,
    team: [
      {
        id: "astro-team-1",
        name: "Семен Белов",
        role: "Координатор",
        bio: "Наводчик Астроневода, исследователь астрономических символов.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
      {
        id: "astro-team-2",
        name: "Надежда Чернышева",
        role: "Исследователь",
        bio: "Работает с календарными циклами и древними текстами.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
    ],
    resourcesDetailed: [
      {
        id: "astro-resource-1",
        title: "Календарные циклы и архитектура",
        type: "Статья",
        date: "2024-12-02",
        duration: "7 мин",
        href: "https://example.com",
      },
      {
        id: "astro-resource-2",
        title: "Небесные карты Руси",
        type: "Видео",
        date: "2024-11-08",
        duration: "18 мин",
        href: "https://example.com",
      },
      {
        id: "astro-resource-3",
        title: "Гайд по наблюдениям",
        type: "Гайд",
        date: "2024-10-01",
        duration: "10 стр.",
        href: "https://example.com",
      },
    ],
    relatedSlugs: ["neglinka", "izvod", "marshruty"],
    faq: [
      {
        id: "astro-faq-1",
        question: "Нужно ли оборудование?",
        answer: "Нет, достаточно базовых наблюдений и материалов.",
      },
      {
        id: "astro-faq-2",
        question: "Есть ли практические задания?",
        answer: "Да, мы предлагаем задания для наблюдений и анализа.",
      },
      {
        id: "astro-faq-3",
        question: "Подходит ли для новичков?",
        answer: "Да, начинаем с основ.",
      },
      {
        id: "astro-faq-4",
        question: "Как часто проходят встречи?",
        answer: "Раз в неделю онлайн + сезонные практики.",
      },
      {
        id: "astro-faq-5",
        question: "Можно ли присоединиться позже?",
        answer: "Да, материалы доступны в архиве.",
      },
    ],
  },
  {
    id: "direction-prazdniki",
    slug: "prazdniki",
    name: "Праздники / Красота",
    icon: Sparkles,
    color: "#DC143C",
    tagline: "Возвращаем смысл в праздники и создаем настоящие традиции",
    stats: {
      participants: "120+ участников",
      years: "Работаем 2 года",
      materials: "90+ материалов",
    },
    forWhom: [
      "Вам скучно на формальных праздниках",
      "Хотите, чтобы семейные события были наполнены смыслом",
      "Интересуетесь, как праздновали предки",
    ],
    activities: [
      "Изучать кологодные праздники",
      "Участвовать в организации балов, встреч",
      "Проводить семейные праздники по традициям",
      "Готовить традиционные блюда",
    ],
    results: [
      {
        id: "prazdniki-1",
        quote: "Провели Купалу — дети в восторге, все наконец понятно",
        name: "Ольга",
        age: "38 лет",
      },
    ],
    format: {
      timeCommitment: "Гибко, зависит от праздника",
      frequency: "4-6 праздников в год",
      location: "Офлайн мероприятия",
    },
    resources: [],
    filters: ["all", "children", "moscow"],
    href: "/prazdniki",
    seo: {
      title: "Праздники / Красота — Русская Ясна",
      description: "Обрядовый круг, семейные традиции и праздники со смыслом.",
      ogImage: "/images/hero-placeholder.svg",
    },
    about: [
      "Направление «Праздники / Красота» возвращает смысл в календарь событий и семейные традиции.",
      "Мы изучаем обряды, музыку, танцы, кухню и собираем живые сценарии для праздников.",
      "Участники получают практику организации событий и создания атмосферы.",
    ],
    mission:
      "Вернуть культуре праздников глубину, смысл и живое участие семей.",
    uniqueness:
      "Мы соединяем исследование традиций с реальной организацией событий.",
    forWhomDetailed: [
      "Тем, кто хочет оживить семейные праздники",
      "Тем, кто ищет единомышленников для больших событий",
      "Тем, кто любит создавать атмосферу",
    ],
    prerequisites: ["Готовность участвовать в мероприятиях"],
    activitiesDetailed: [
      "Подготовка праздничных сценариев",
      "Организация балов и встреч",
      "Работа с музыкой, танцами, костюмами",
      "Семейные практики и традиционные блюда",
    ],
    schedule: [
      "Сезонные встречи по календарю",
      "Подготовительные мастерские раз в месяц",
      "Большие праздники 4-6 раз в год",
    ],
    tools: ["Telegram", "Чат организаторов", "Сценарии", "Списки ролей"],
    resultsExtended: [
      {
        id: "prazd-story-1",
        quote: "Мы провели семейный праздник и почувствовали настоящую близость.",
        name: "Мария К.",
        role: "Участница",
        before: "Праздники были формальностью",
        after: "События стали осмысленными",
        achievement: "Организовала два праздника",
      },
    ],
    gallery: placeholderGallery,
    team: [
      {
        id: "prazd-team-1",
        name: "Марина Гусева",
        role: "Координатор",
        bio: "Организатор балов и традиционных событий.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
      {
        id: "prazd-team-2",
        name: "Полина Лебедева",
        role: "Куратор программ",
        bio: "Отвечает за сценарии и музыкальное сопровождение.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
    ],
    resourcesDetailed: [
      {
        id: "prazd-resource-1",
        title: "Сценарий праздника Купалы",
        type: "Гайд",
        date: "2024-07-12",
        duration: "18 стр.",
        href: "https://example.com",
      },
      {
        id: "prazd-resource-2",
        title: "Традиции зимних праздников",
        type: "Статья",
        date: "2024-12-21",
        duration: "9 мин",
        href: "https://example.com",
      },
      {
        id: "prazd-resource-3",
        title: "Музыка и танцы праздников",
        type: "Видео",
        date: "2024-11-02",
        duration: "24 мин",
        href: "https://example.com",
      },
    ],
    relatedSlugs: ["teremok", "litprosvet", "marshruty"],
    faq: [
      {
        id: "prazd-faq-1",
        question: "Можно ли участвовать всей семьей?",
        answer: "Да, мы поддерживаем семейный формат.",
      },
      {
        id: "prazd-faq-2",
        question: "Нужен ли костюм?",
        answer: "Не обязательно, но приветствуются элементы традиции.",
      },
      {
        id: "prazd-faq-3",
        question: "Сколько времени занимает подготовка?",
        answer: "От нескольких часов до пары недель, зависит от события.",
      },
      {
        id: "prazd-faq-4",
        question: "Есть ли онлайн-формат?",
        answer: "Да, часть мастерских проходит онлайн.",
      },
      {
        id: "prazd-faq-5",
        question: "Можно ли прийти впервые на праздник?",
        answer: "Да, новички всегда приветствуются.",
      },
    ],
  },
  {
    id: "direction-dzhiva",
    slug: "dzhiva",
    name: "Джива",
    icon: Heart,
    color: "#E63946",
    tagline: "Изучаем устройство тела через русский язык",
    stats: {
      participants: "70+ участников",
      years: "Работаем 1 год",
      materials: "60+ материалов",
    },
    forWhom: [
      "Интересуетесь медициной, но чувствуете ограничения",
      "Хотите понимать тело не только как механизм",
      "Ищете связь между названиями органов и функциями",
    ],
    activities: [
      "Изучать русскую анатомию",
      "Разбирать традиционные подходы к здоровью",
      "Исследовать связь языка и медицины",
    ],
    results: [],
    format: {
      timeCommitment: "2-3 часа в неделю",
      frequency: "По расписанию",
      location: "Онлайн встречи",
    },
    resources: [],
    filters: ["all", "online"],
    href: "/dzhiva",
    seo: {
      title: "Джива — Русская Ясна",
      description: "Язык тела, здоровье и традиционные подходы в русском контексте.",
      ogImage: "/images/hero-placeholder.svg",
    },
    about: [
      "Джива исследует тело как часть смысловой системы языка. Мы изучаем, что означает здоровье и как язык описывает органы.",
      "Участники получают новые взгляды на медицину, учатся анализировать термины и практики.",
      "Направление помогает связать физиологию, культуру и историю.",
    ],
    mission: "Раскрыть глубокий смысл здоровья через язык и традицию.",
    uniqueness: "Мы связываем медицину, язык и культурную память.",
    forWhomDetailed: [
      "Тем, кто интересуется телесными практиками",
      "Тем, кто ищет целостный взгляд на здоровье",
      "Тем, кто хочет понять происхождение медицинских терминов",
    ],
    prerequisites: ["Интерес к теме здоровья", "Готовность учиться онлайн"],
    activitiesDetailed: [
      "Разбор русской анатомии и терминологии",
      "Обсуждение традиционных практик",
      "Практики внимания к телу",
    ],
    schedule: ["Онлайн-встречи 2 раза в месяц", "Практикумы по запросу"],
    tools: ["Zoom", "Telegram", "Материалы в PDF"],
    resultsExtended: [
      {
        id: "dzhiva-story-1",
        quote: "Стало понятно, как слова отражают функции органов.",
        name: "Наталья М.",
        role: "Участница",
        before: "Считала тело механикой",
        after: "Вижу связь языка и тела",
        achievement: "Собрала личный словарь",
      },
    ],
    gallery: placeholderGallery,
    team: [
      {
        id: "dzhiva-team-1",
        name: "Андрей Осипов",
        role: "Координатор",
        bio: "Исследователь традиционной медицины.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
      {
        id: "dzhiva-team-2",
        name: "Ольга Никитина",
        role: "Консультант",
        bio: "Помогает участникам применять практики в жизни.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
    ],
    resourcesDetailed: [
      {
        id: "dzhiva-resource-1",
        title: "Словарь здоровья",
        type: "Гайд",
        date: "2024-09-12",
        duration: "14 стр.",
        href: "https://example.com",
      },
      {
        id: "dzhiva-resource-2",
        title: "Этимология органов",
        type: "Статья",
        date: "2024-10-19",
        duration: "6 мин",
        href: "https://example.com",
      },
      {
        id: "dzhiva-resource-3",
        title: "Практика внимания к телу",
        type: "Видео",
        date: "2024-11-01",
        duration: "16 мин",
        href: "https://example.com",
      },
    ],
    relatedSlugs: ["izvod", "litprosvet", "teremok"],
    faq: [
      {
        id: "dzhiva-faq-1",
        question: "Нужны ли медицинские знания?",
        answer: "Нет, мы объясняем все доступно.",
      },
      {
        id: "dzhiva-faq-2",
        question: "Есть ли практики?",
        answer: "Да, мы добавляем мягкие практики внимания.",
      },
      {
        id: "dzhiva-faq-3",
        question: "Можно ли совмещать с другими направлениями?",
        answer: "Да, Джива хорошо сочетается с Изводом и ЛитПроСветом.",
      },
      {
        id: "dzhiva-faq-4",
        question: "Сколько времени нужно?",
        answer: "2-3 часа в неделю достаточно.",
      },
      {
        id: "dzhiva-faq-5",
        question: "Как получить материалы?",
        answer: "После заявки вы получите доступ к чату и архиву.",
      },
    ],
  },
  {
    id: "direction-marshruty",
    slug: "marshruty",
    name: "Ясные маршруты",
    icon: Navigation2,
    color: "#06A77D",
    tagline: "Гуляем по городам с новым пониманием",
    stats: {
      participants: "110+ участников",
      years: "Работаем 2 года",
      materials: "90+ материалов",
    },
    forWhom: [
      "Живете в Москве/Питере и хотите знать город глубже",
      "Любите пешие и водные прогулки",
      "Хотите видеть не туристические маршруты",
    ],
    activities: [
      "Участвовать в натурных уроках",
      "Гулять на теплоходе по Москва-реке",
      "Открывать символизм ВДНХ, Лефортово, Коломенского",
    ],
    results: [
      {
        id: "marshruty-1",
        quote: "Прошел 5 маршрутов — теперь вижу Москву иначе",
        name: "Андрей",
        age: "41 год",
      },
    ],
    format: {
      timeCommitment: "2-4 часа на прогулку",
      frequency: "1-2 раза в месяц",
      location: "Офлайн прогулки",
    },
    resources: [],
    filters: ["all", "moscow", "beginner"],
    href: "/marshruty",
    seo: {
      title: "Ясные маршруты — Русская Ясна",
      description: "Маршруты по городам, символика и новые взгляды на пространство.",
      ogImage: "/images/hero-placeholder.svg",
    },
    about: [
      "Ясные маршруты — практика глубокого путешествия по городу.",
      "Мы изучаем пространство через символику, историю и реальные прогулки.",
      "Участники получают маршруты и навыки самостоятельных исследований.",
    ],
    mission: "Создать маршруты, которые раскрывают смыслы городов.",
    uniqueness: "Мы соединяем практику прогулок с исследовательскими методами.",
    forWhomDetailed: [
      "Тем, кто любит исследовать город пешком",
      "Тем, кто хочет видеть скрытую символику",
      "Тем, кто ищет общение в живом формате",
    ],
    prerequisites: ["Готовность к прогулкам"],
    activitiesDetailed: [
      "Натурные уроки и прогулки",
      "Теплоходные маршруты",
      "Исследование символики районов",
    ],
    schedule: ["1-2 прогулки в месяц", "Онлайн разборы перед маршрутами"],
    tools: ["Telegram", "Карты", "Маршрутные листы"],
    resultsExtended: [
      {
        id: "marshruty-story-1",
        quote: "Открыл для себя новый взгляд на знакомые места.",
        name: "Андрей Л.",
        role: "Участник",
        before: "Знал лишь основные маршруты",
        after: "Создаю свои маршруты",
        achievement: "Провел 2 экскурсии",
      },
    ],
    gallery: placeholderGallery,
    team: [
      {
        id: "marshruty-team-1",
        name: "Ирина Лукина",
        role: "Наводчик маршрутов",
        bio: "Разрабатывает маршруты и проводит прогулки.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
      {
        id: "marshruty-team-2",
        name: "Григорий Савельев",
        role: "Исследователь",
        bio: "Работает с материалами по истории районов.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
    ],
    resourcesDetailed: [
      {
        id: "marshruty-resource-1",
        title: "Маршрут по ВДНХ",
        type: "Гайд",
        date: "2024-08-20",
        duration: "11 стр.",
        href: "https://example.com",
      },
      {
        id: "marshruty-resource-2",
        title: "Символы московских парков",
        type: "Статья",
        date: "2024-09-05",
        duration: "5 мин",
        href: "https://example.com",
      },
      {
        id: "marshruty-resource-3",
        title: "Прогулка по Коломенскому",
        type: "Видео",
        date: "2024-10-17",
        duration: "21 мин",
        href: "https://example.com",
      },
    ],
    relatedSlugs: ["neglinka", "prazdniki", "astronevod"],
    faq: [
      {
        id: "marshruty-faq-1",
        question: "Сколько человек в группе?",
        answer: "Обычно 10-20 участников.",
      },
      {
        id: "marshruty-faq-2",
        question: "Можно ли прийти впервые?",
        answer: "Да, каждый маршрут открыт для новичков.",
      },
      {
        id: "marshruty-faq-3",
        question: "Есть ли онлайн-формат?",
        answer: "Да, разборы маршрутов проходят онлайн.",
      },
      {
        id: "marshruty-faq-4",
        question: "Нужен ли билет?",
        answer: "Информация о платных мероприятиях публикуется заранее.",
      },
      {
        id: "marshruty-faq-5",
        question: "Можно ли вести маршрут самому?",
        answer: "Да, мы поощряем самостоятельные инициативы.",
      },
    ],
  },
  {
    id: "direction-izvod",
    slug: "izvod",
    name: "Извод",
    icon: Search,
    color: "#4A5568",
    tagline: "Исследуем происхождение слов и находим утерянные смыслы",
    stats: {
      participants: "80+ участников",
      years: "Работаем 2 года",
      materials: "70+ материалов",
    },
    forWhom: [
      "Интересна этимология",
      "Чувствуете, что слова потеряли смысл",
      "Хотите понимать логику образования слов",
    ],
    activities: [
      "Изучать корни слов",
      "Находить связи между языками",
      "Разбирать официальную этимологию",
    ],
    results: [],
    format: {
      timeCommitment: "Гибко",
      frequency: "Редкие встречи",
      location: "Чтение статей + редкие встречи",
    },
    resources: [],
    filters: ["all", "online", "beginner"],
    href: "/izvod",
    seo: {
      title: "Извод — Русская Ясна",
      description: "Этимология, смыслообразование и исследование слов.",
      ogImage: "/images/hero-placeholder.svg",
    },
    about: [
      "Извод посвящен глубокому исследованию слов, их происхождению и смысловым корням.",
      "Мы анализируем официальные версии, сопоставляем с другими источниками и строим смысловые карты.",
      "Участники учатся читать слово как исторический документ.",
    ],
    mission: "Вернуть смысл словам и раскрыть их происхождение.",
    uniqueness: "Мы соединяем лингвистику, историю и культурную память.",
    forWhomDetailed: [
      "Тем, кто любит работать со словом и смыслом",
      "Тем, кто интересуется языковой историей",
      "Тем, кто хочет писать и говорить точнее",
    ],
    prerequisites: ["Готовность к чтению и анализу"],
    activitiesDetailed: [
      "Разбор корней и морфем",
      "Сопоставление с другими языками",
      "Проверка источников и словарей",
    ],
    schedule: ["Онлайн-разборы раз в месяц", "Самостоятельные исследования"],
    tools: ["Telegram", "Общие таблицы", "Словари"],
    resultsExtended: [
      {
        id: "izvod-story-1",
        quote: "Стало понятно, как слово несет историю.",
        name: "Светлана Н.",
        role: "Участница",
        before: "Не знала происхождения слов",
        after: "Собрала словарь смыслов",
        achievement: "Подготовила 2 статьи",
      },
    ],
    gallery: placeholderGallery,
    team: [
      {
        id: "izvod-team-1",
        name: "Светлана Нестерова",
        role: "Куратор",
        bio: "Исследователь языка и исторической лексики.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
      {
        id: "izvod-team-2",
        name: "Даниил Романов",
        role: "Редактор",
        bio: "Помогает участникам оформлять исследования.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
    ],
    resourcesDetailed: [
      {
        id: "izvod-resource-1",
        title: "Словарь ключевых корней",
        type: "Гайд",
        date: "2024-08-01",
        duration: "20 стр.",
        href: "https://example.com",
      },
      {
        id: "izvod-resource-2",
        title: "Как читать этимологию",
        type: "Статья",
        date: "2024-09-10",
        duration: "7 мин",
        href: "https://example.com",
      },
      {
        id: "izvod-resource-3",
        title: "Разбор слова «Ясна»",
        type: "Видео",
        date: "2024-10-30",
        duration: "13 мин",
        href: "https://example.com",
      },
    ],
    relatedSlugs: ["litprosvet", "astronevod", "dzhiva"],
    faq: [
      {
        id: "izvod-faq-1",
        question: "Можно ли участвовать без знаний лингвистики?",
        answer: "Да, мы начинаем с базовых понятий.",
      },
      {
        id: "izvod-faq-2",
        question: "Сколько времени занимает разбор?",
        answer: "От 1 часа в неделю по желанию.",
      },
      {
        id: "izvod-faq-3",
        question: "Есть ли домашние задания?",
        answer: "Да, есть небольшие практики для закрепления.",
      },
      {
        id: "izvod-faq-4",
        question: "Можно ли публиковать результаты?",
        answer: "Да, мы поддерживаем публикации.",
      },
      {
        id: "izvod-faq-5",
        question: "Как получить доступ к материалам?",
        answer: "После заявки мы отправим архив.",
      },
    ],
  },
  {
    id: "direction-teremok",
    slug: "teremok",
    name: "Теремок тайн",
    icon: Castle,
    color: "#FF6B6B",
    tagline: "Учим детей видеть мир глазами предков",
    stats: {
      participants: "60+ детей",
      years: "Работаем 1.5 года",
      materials: "50+ материалов",
    },
    forWhom: [
      "У вас есть дети 7-16 лет",
      "Хотите альтернативу поверхностному образованию",
      "Ищете развивающие занятия с смыслом",
    ],
    activities: [
      "Изучать астрономию через образы",
      "Разбирать стихии",
      "Узнавать о русских художниках",
    ],
    results: [],
    format: {
      timeCommitment: "1-2 часа в неделю для детей",
      frequency: "По расписанию",
      location: "Онлайн + встречи",
    },
    resources: [],
    filters: ["all", "children", "online", "beginner"],
    href: "/teremok",
    seo: {
      title: "Теремок тайн — Русская Ясна",
      description: "Детское направление с образами, сказками и символами.",
      ogImage: "/images/hero-placeholder.svg",
    },
    about: [
      "Теремок тайн — детское направление, где мы объясняем сложные темы через образы.",
      "Дети изучают природу, культуру и историю через сказки, игры и творческие задания.",
      "Мы создаем безопасную среду для любопытства и вопросов.",
    ],
    mission: "Помочь детям полюбить культуру и научиться задавать вопросы.",
    uniqueness: "Мы работаем через образы, а не сухие факты.",
    forWhomDetailed: [
      "Семьям с детьми 7-16 лет",
      "Родителям, которые ищут смысловые занятия",
      "Тем, кто хочет развивать любопытство ребенка",
    ],
    prerequisites: ["Возраст 7-16 лет", "Готовность участвовать с родителями"],
    activitiesDetailed: [
      "Сказочные занятия по астрономии",
      "Игры со стихиями и символами",
      "Творческие задания и рисунки",
    ],
    schedule: ["Еженедельные онлайн-встречи", "Творческие задания в чате"],
    tools: ["Zoom", "Telegram", "Материалы для детей"],
    resultsExtended: [
      {
        id: "teremok-story-1",
        quote: "Ребенок стал задавать вопросы и просить новые занятия.",
        name: "Ольга С.",
        role: "Родитель",
        before: "Интерес к учебе был слабым",
        after: "Ребенок увлечен культурой",
        achievement: "Прошел 2 курса",
      },
    ],
    gallery: placeholderGallery,
    team: [
      {
        id: "teremok-team-1",
        name: "Юлия Крылова",
        role: "Куратор",
        bio: "Работает с детьми, создавая игровые программы.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
      {
        id: "teremok-team-2",
        name: "Софья Макарова",
        role: "Педагог",
        bio: "Помогает адаптировать темы для детей.",
        photo: "/images/avatar-placeholder.svg",
        contact: "https://t.me/russkaya_yasna",
      },
    ],
    resourcesDetailed: [
      {
        id: "teremok-resource-1",
        title: "Сказки о звездах",
        type: "Гайд",
        date: "2024-09-18",
        duration: "12 стр.",
        href: "https://example.com",
      },
      {
        id: "teremok-resource-2",
        title: "Игровой урок про стихии",
        type: "Видео",
        date: "2024-10-09",
        duration: "14 мин",
        href: "https://example.com",
      },
      {
        id: "teremok-resource-3",
        title: "Русские художники для детей",
        type: "Статья",
        date: "2024-11-12",
        duration: "5 мин",
        href: "https://example.com",
      },
    ],
    relatedSlugs: ["prazdniki", "litprosvet", "dzhiva"],
    faq: [
      {
        id: "teremok-faq-1",
        question: "Можно ли родителям присутствовать?",
        answer: "Да, мы приветствуем совместное участие.",
      },
      {
        id: "teremok-faq-2",
        question: "Сколько длится занятие?",
        answer: "Обычно 60-90 минут.",
      },
      {
        id: "teremok-faq-3",
        question: "Нужны ли материалы?",
        answer: "Мы заранее сообщаем список.",
      },
      {
        id: "teremok-faq-4",
        question: "Можно ли подключиться позже?",
        answer: "Да, записи доступны.",
      },
      {
        id: "teremok-faq-5",
        question: "Есть ли очные встречи?",
        answer: "Иногда проводим семейные мероприятия.",
      },
    ],
  },
];
