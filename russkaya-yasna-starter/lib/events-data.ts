export type EventTag =
  | "Бесплатно"
  | "Платно"
  | "Для новичков"
  | "С детьми"
  | "Онлайн"
  | "Москва"
  | "Санкт-Петербург"
  | "Прогулка"
  | "Теплоход"
  | "Игра"
  | "Лекция";

export type EventOrganizer = {
  name: string;
  role: string;
  photo?: string;
};

export type EventItem = {
  id: string;
  date: string;
  time: string;
  title: string;
  direction: string;
  directionColor: string;
  location: string;
  description: string;
  capacity?: number | null;
  registered?: number;
  registrationRequired: boolean;
  tags: EventTag[];
  price?: string;
  link?: string;
  organizer: EventOrganizer;
  meetingNote?: string;
};

export const eventsData: EventItem[] = [
  {
    id: "event-litprosvet-1",
    date: "2025-01-23",
    time: "19:00",
    title: "Читательский клуб ЛитПроСвета: Разбор «Капитанской дочки»",
    direction: "ЛитПроСвет",
    directionColor: "#8B4513",
    location: "Онлайн (Zoom)",
    description:
      "Разбираем композицию, символы и исторический контекст повести Пушкина. Участие бесплатное.",
    capacity: null,
    registrationRequired: false,
    tags: ["Бесплатно", "Онлайн", "Для новичков"],
    link: "https://zoom.us/",
    organizer: {
      name: "Екатерина Власова",
      role: "Куратор ЛитПроСвета",
      photo: "/images/avatar-placeholder.svg",
    },
    meetingNote: "Ссылка будет опубликована в Telegram за 2 часа до встречи.",
  },
  {
    id: "event-neglinka-1",
    date: "2025-01-25",
    time: "14:00",
    title: "Натурный урок: Кремль и его астрономический символизм",
    direction: "Неглинка",
    directionColor: "#2B7A78",
    location: "Москва, Красная площадь (у памятника Минину и Пожарскому)",
    description: "Изучаем связь архитектуры Кремля с созвездиями. Прогулка 2-3 часа.",
    capacity: 20,
    registered: 15,
    registrationRequired: true,
    tags: ["Офлайн", "Москва", "Прогулка"],
    price: "Бесплатно",
    link: "https://forms.gle/",
    organizer: {
      name: "Алексей Широков",
      role: "Координатор Неглинки",
      photo: "/images/avatar-placeholder.svg",
    },
    meetingNote: "Встречаемся у памятника, просим прийти за 10 минут.",
  },
  {
    id: "event-marshruty-1",
    date: "2025-01-28",
    time: "15:00",
    title: "Речная прогулка: Монастыри-корабли Москвы",
    direction: "Ясные маршруты",
    directionColor: "#06A77D",
    location: "Москва, причал «Парк Горького»",
    description: "Теплоходная экскурсия по Москва-реке. Рассматриваем монастыри и их роль.",
    capacity: 30,
    registered: 22,
    registrationRequired: true,
    tags: ["Офлайн", "Москва", "Теплоход"],
    price: "500₽",
    link: "https://example.com",
    organizer: {
      name: "Ирина Лукина",
      role: "Наводчик маршрутов",
      photo: "/images/avatar-placeholder.svg",
    },
  },
  {
    id: "event-school-1",
    date: "2025-02-01",
    time: "20:00",
    title: "Встреча у костра Коломна: Ясные загадки",
    direction: "Ясна-Школа",
    directionColor: "#4169E1",
    location: "Онлайн (обучающая платформа)",
    description: "Интерактивная игра с загадками о русском языке и истории.",
    registrationRequired: false,
    tags: ["Бесплатно", "Онлайн", "Игра"],
    organizer: {
      name: "Дарья Максимова",
      role: "Куратор Ясна-Школы",
      photo: "/images/avatar-placeholder.svg",
    },
  },
  {
    id: "event-prazdniki-1",
    date: "2025-02-14",
    time: "18:00",
    title: "Зимний бал в честь Сретения",
    direction: "Праздники",
    directionColor: "#DC143C",
    location: "Москва, усадьба Коломенское",
    description: "Традиционный бал с историческими танцами, угощениями и играми.",
    capacity: 50,
    registered: 38,
    registrationRequired: true,
    tags: ["Офлайн", "Платно", "Праздник"],
    price: "1500₽",
    link: "https://example.com",
    organizer: {
      name: "Марина Гусева",
      role: "Организатор праздников",
      photo: "/images/avatar-placeholder.svg",
    },
  },
  {
    id: "event-astronevod-1",
    date: "2025-02-18",
    time: "19:30",
    title: "Астроневод: Небесные карты Древней Руси",
    direction: "Астроневод",
    directionColor: "#191970",
    location: "Онлайн (Zoom)",
    description: "Смотрим, как древние карты неба отражались в архитектуре.",
    registrationRequired: true,
    tags: ["Онлайн", "Лекция", "Для новичков"],
    link: "https://zoom.us/",
    organizer: {
      name: "Семен Белов",
      role: "Наводчик Астроневода",
      photo: "/images/avatar-placeholder.svg",
    },
    meetingNote: "Запись появится на следующий день после встречи.",
  },
  {
    id: "event-izvod-1",
    date: "2025-02-20",
    time: "18:30",
    title: "Извод: мастерская этимологии",
    direction: "Извод",
    directionColor: "#4A5568",
    location: "Онлайн (Zoom)",
    description: "Разбираем происхождение 15 ключевых слов из лексикона обрядов.",
    registrationRequired: false,
    tags: ["Онлайн", "Бесплатно", "Лекция"],
    organizer: {
      name: "Светлана Нестерова",
      role: "Куратор Извода",
      photo: "/images/avatar-placeholder.svg",
    },
  },
  {
    id: "event-dzhiva-1",
    date: "2025-02-22",
    time: "11:00",
    title: "Джива: язык тела и энергия слов",
    direction: "Джива",
    directionColor: "#E63946",
    location: "Онлайн (Zoom)",
    description: "Вебинар о том, как язык описывает здоровье и силу тела.",
    registrationRequired: true,
    tags: ["Онлайн", "Для новичков"],
    link: "https://zoom.us/",
    organizer: {
      name: "Андрей Осипов",
      role: "Куратор Дживы",
      photo: "/images/avatar-placeholder.svg",
    },
  },
  {
    id: "event-teremok-1",
    date: "2025-02-25",
    time: "17:00",
    title: "Теремок тайн: звездные истории для детей",
    direction: "Теремок тайн",
    directionColor: "#FF6B6B",
    location: "Онлайн (Zoom)",
    description: "Урок для детей 7-12 лет о звездах и созвездиях через сказки.",
    registrationRequired: true,
    tags: ["Онлайн", "С детьми", "Для новичков"],
    link: "https://zoom.us/",
    organizer: {
      name: "Юлия Крылова",
      role: "Куратор Теремка",
      photo: "/images/avatar-placeholder.svg",
    },
  },
  {
    id: "event-neglinka-2",
    date: "2025-03-02",
    time: "12:00",
    title: "Неглинка: прогулка по Замоскворечью",
    direction: "Неглинка",
    directionColor: "#2B7A78",
    location: "Москва, метро «Третьяковская»",
    description: "Исследуем скрытые коды улиц и связь с водой.",
    capacity: 25,
    registered: 18,
    registrationRequired: true,
    tags: ["Москва", "Прогулка", "Офлайн"],
    price: "Бесплатно",
    link: "https://forms.gle/",
    organizer: {
      name: "Алексей Широков",
      role: "Координатор Неглинки",
      photo: "/images/avatar-placeholder.svg",
    },
  },
  {
    id: "event-litprosvet-2",
    date: "2025-03-06",
    time: "19:00",
    title: "ЛитПроСвет: как писать без штампов",
    direction: "ЛитПроСвет",
    directionColor: "#8B4513",
    location: "Санкт-Петербург, библиотека им. Маяковского",
    description: "Встреча с практиками письма и редактуры, разбор домашних текстов.",
    registrationRequired: true,
    tags: ["Санкт-Петербург", "Лекция"],
    link: "https://example.com",
    organizer: {
      name: "Екатерина Власова",
      role: "Куратор ЛитПроСвета",
      photo: "/images/avatar-placeholder.svg",
    },
  },
  {
    id: "event-marshruty-2",
    date: "2025-03-10",
    time: "10:00",
    title: "Ясные маршруты: ВДНХ и символика павильонов",
    direction: "Ясные маршруты",
    directionColor: "#06A77D",
    location: "Москва, ВДНХ",
    description: "Гуляем по ВДНХ и читаем смыслы павильонов.",
    capacity: 20,
    registered: 12,
    registrationRequired: true,
    tags: ["Москва", "Прогулка", "Офлайн"],
    price: "Бесплатно",
    link: "https://example.com",
    organizer: {
      name: "Ирина Лукина",
      role: "Наводчик маршрутов",
      photo: "/images/avatar-placeholder.svg",
    },
  },
  {
    id: "event-school-2",
    date: "2025-03-15",
    time: "16:00",
    title: "Ясна-Школа: открытый модуль «Основы мировидения»",
    direction: "Ясна-Школа",
    directionColor: "#4169E1",
    location: "Онлайн (платформа Ясна)",
    description: "Открытый вводный модуль для тех, кто хочет глубже понять подход.",
    registrationRequired: false,
    tags: ["Онлайн", "Бесплатно", "Для новичков"],
    organizer: {
      name: "Дарья Максимова",
      role: "Куратор Ясна-Школы",
      photo: "/images/avatar-placeholder.svg",
    },
  },
];
