import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Castle,
  Map,
  Navigation2,
  Search,
  Sparkles,
  Star,
  Heart,
  Send,
  Globe,
} from "lucide-react";

export type DirectionFilter =
  | "all"
  | "beginner"
  | "children"
  | "online"
  | "moscow";

export type DirectionTestimonial = {
  id: string;
  quote: string;
  name: string;
  age?: string;
  profession?: string;
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
  icon?: ReactNode;
};

export type DirectionData = {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  tagline: string;
  forWhom: string[];
  activities: string[];
  results: DirectionTestimonial[];
  format: DirectionFormat;
  resources: DirectionResource[];
  filters: DirectionFilter[];
  href: string;
};

export const directionFilters: { id: DirectionFilter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "beginner", label: "Для начинающих" },
  { id: "children", label: "С детьми" },
  { id: "online", label: "Онлайн" },
  { id: "moscow", label: "В Москве" },
];

export const directionsData: DirectionData[] = [
  {
    id: "direction-neglinka",
    name: "Неглинка / 38 Меридиан",
    icon: Map,
    color: "#2B7A78",
    tagline: "Расшифровываем архитектурные и географические коды Москвы",
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
        icon: <Send className="h-4 w-4" aria-hidden="true" />,
      },
      {
        id: "neglinka-site",
        label: "Сайт",
        href: "https://example.com",
        icon: <Globe className="h-4 w-4" aria-hidden="true" />,
      },
    ],
    filters: ["all", "moscow", "online"],
    href: "/neglinka",
  },
  {
    id: "direction-litprosvet",
    name: "ЛитПроСвет",
    icon: BookOpen,
    color: "#8B4513",
    tagline: "Учимся читать между строк и создавать тексты с глубоким смыслом",
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
    resources: [],
    filters: ["all", "beginner", "online", "moscow"],
    href: "/litprosvet",
  },
  {
    id: "direction-astronevod",
    name: "Астроневод",
    icon: Star,
    color: "#191970",
    tagline: "Исследуем космос и архитектуру через призму русской традиции",
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
  },
  {
    id: "direction-prazdniki",
    name: "Праздники / Красота",
    icon: Sparkles,
    color: "#DC143C",
    tagline: "Возвращаем смысл в праздники и создаем настоящие традиции",
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
  },
  {
    id: "direction-dzhiva",
    name: "Джива (Медицина)",
    icon: Heart,
    color: "#E63946",
    tagline: "Изучаем устройство тела через русский язык",
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
  },
  {
    id: "direction-marshruty",
    name: "Ясные маршруты",
    icon: Navigation2,
    color: "#06A77D",
    tagline: "Гуляем по городам с новым пониманием",
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
  },
  {
    id: "direction-izvod",
    name: "Извод",
    icon: Search,
    color: "#4A5568",
    tagline: "Исследуем происхождение слов и находим утерянные смыслы",
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
  },
  {
    id: "direction-teremok",
    name: "Теремок тайн",
    icon: Castle,
    color: "#FF6B6B",
    tagline: "Учим детей видеть мир глазами предков",
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
  },
];
