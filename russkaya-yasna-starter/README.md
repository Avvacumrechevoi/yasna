# Русская Ясна

Официальный сайт образовательного сообщества "Русская Ясна".

## Обзор

Проект реализован на Next.js 14 (App Router) с TypeScript, Tailwind CSS и Framer Motion. В нем есть формы заявки, направления, календарь событий, истории участников и отдельные страницы направлений.

## Быстрый старт

1. Установите зависимости:

```
npm install
```

2. Запустите dev-сервер:

```
npm run dev
```

Сайт будет доступен на http://localhost:3000.

## Переменные окружения

Скопируйте `.env.example` в `.env.local` и заполните значения:

- `NEXT_PUBLIC_SITE_URL` — базовый URL сайта для SEO и шаринга.
- `NEXT_PUBLIC_GA_ID` — Google Analytics ID (если используется).
- `NEXT_PUBLIC_YANDEX_METRIKA_ID` — ID Яндекс.Метрики (если используется).
- `EMAIL_SERVICE_API_KEY` — ключ сервиса отправки писем (если подключен).
- `SENTRY_DSN` — DSN для серверной части Sentry.
- `NEXT_PUBLIC_SENTRY_DSN` — DSN для клиентской части Sentry.

## Скрипты

- `npm run dev` — dev-сервер.
- `npm run build` — production build.
- `npm run start` — production server.
- `npm run lint` — линтинг.
- `ANALYZE=true npm run build` — анализ бандла (Bundle Analyzer).

## Структура проекта

```
app/                  # Next.js App Router
components/           # UI, layout и секции
lib/                  # Данные и утилиты
public/               # Статика
docs/                 # Подсказки и документация
```

## Контент и данные

Файлы данных:

- `lib/directions-data.ts`
- `lib/events-data.ts`
- `lib/testimonials-data.ts`
- `lib/faq-data.ts`

Редактируйте их для обновления контента без изменения компонентов.

## Деплой

Рекомендуется Vercel:

1. Подключите репозиторий.
2. Добавьте переменные окружения из `.env.example`.
3. Проверьте настройку домена и SSL.

Для GitHub Pages используется статическая сборка (`output: "export"`).

## Траблшутинг

- Если формы не отправляются, проверьте переменные окружения сервиса отправки.
- Если аналитика не работает, проверьте IDs в `.env.local`.
- При ошибках сборки проверьте `npm run lint` и зависимости.

## Технологии

- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Lucide React

## Лицензия

Проект "Русская Ясна" © 2025
