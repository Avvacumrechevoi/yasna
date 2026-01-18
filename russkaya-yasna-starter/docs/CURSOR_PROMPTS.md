# Промпты для Cursor: Создание сайта "Русская Ясна"

## ⚠️ ВАЖНО: Начни с ПРОМПТА 0!

Если Cursor пишет "This repository is empty. Please commit a file before running Agent", 
сначала выполни **ПРОМПТ 0** (файл `prompt_0_init.md`) - там инструкция по инициализации Git.

---

## 🎯 Общая концепция
Создаем лендинг для образовательного сообщества с 8 направлениями деятельности. Фокус на JBTD (Jobs To Be Done) - показываем конкретные боли, сценарии использования и результаты. Современный дизайн, отличный UX, быстрая загрузка.

**Стек:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion

---

## ПРОМПТ 1: Инициализация проекта и базовая структура

```
Create a new Next.js 14 project with TypeScript and Tailwind CSS for "Russkaya Yasna" educational community website.

Project requirements:
- Next.js 14 with App Router
- TypeScript with strict mode
- Tailwind CSS with custom color palette
- Framer Motion for animations
- React Hook Form for forms
- Lucide React for icons

Setup:
1. Initialize Next.js project with TypeScript
2. Configure Tailwind with custom colors:
   - primary: #2B4570 (dark blue)
   - secondary: #C8A882 (gold)
   - accent: #4169E1 (bright blue)
   - background: #FAF9F6 (warm white)
   - text: #1A1A1A (dark gray)

3. Create folder structure:
   /app
     /page.tsx (main page)
     /layout.tsx
     /(directions) - route group
       /neglinka
       /litprosvet
       /astronevod
       /prazdniki
       /dzhiva
       /marshruty
       /izvod
       /teremok
   /components
     /ui (buttons, inputs, etc.)
     /sections (hero, features, etc.)
     /layout (header, footer)
   /lib (utilities)
   /public/images

4. Install dependencies:
   - framer-motion
   - react-hook-form
   - lucide-react
   - @hookform/resolvers
   - zod (for validation)

5. Create base layout with:
   - Custom font (Inter for body, Playfair Display for headings)
   - Global styles
   - Metadata configuration
   - Basic SEO setup

6. Create reusable Button component with variants:
   - primary (filled blue)
   - secondary (outlined gold)
   - ghost (text only)
   - Include hover states and loading state
```

---

## ПРОМПТ 2: Header и Navigation

```
Create a responsive header component for the Russkaya Yasna website.

Requirements:

1. Header component (/components/layout/Header.tsx):
   - Sticky on scroll
   - Logo on the left (text "Русская Ясна" + tagline "Русское учение о жизни")
   - Navigation menu in center:
     * О проекте
     * Направления (dropdown with 8 directions)
     * Как участвовать
     * Мероприятия
     * Вступить (CTA button)
   - Semi-transparent background with backdrop blur when scrolled
   - Smooth scroll to sections
   - Active state for current section

2. Mobile menu:
   - Hamburger icon (transforms to X)
   - Full-screen overlay with slide-in animation
   - Large tap targets (min 44x44px)
   - Close on outside click or ESC key

3. Dropdown for "Направления":
   - Opens on hover (desktop) / click (mobile)
   - Shows all 8 directions with icons:
     * Неглинка / 38 Меридиан (🗺️ map icon)
     * ЛитПроСвет (📖 book icon)
     * Астроневод (🌟 star icon)
     * Праздники / Красота (🎭 masks icon)
     * Джива (❤️ heart icon)
     * Ясные маршруты (🚶 walking icon)
     * Извод (🔍 magnifying glass icon)
     * Теремок тайн (🏰 castle icon)
   - Each item shows icon + name + short tagline (one line)
   - Smooth fade-in animation

4. Styling:
   - Max-width container (1280px)
   - Padding: 1rem on mobile, 2rem on desktop
   - Logo: font size 1.5rem, bold
   - Nav items: 0.95rem, medium weight
   - CTA button: primary color, rounded

5. Animations:
   - Logo fade-in on mount
   - Menu items stagger animation
   - Smooth height transition for dropdown
   - Micro-interactions on hover

Use TypeScript, Tailwind, Framer Motion. Make it accessible (ARIA labels, keyboard navigation).
```

---

## ПРОМПТ 3: Hero Section (главный экран)

```
Create a compelling hero section for the main page that addresses user pain points.

Requirements:

1. Component: /components/sections/Hero.tsx

2. Layout:
   - Full viewport height on desktop, auto on mobile
   - Two-column grid on desktop (60/40 split)
   - Single column on mobile

3. Left side - Content:
   - Eyebrow text (small, uppercase, gold color):
     "СООБЩЕСТВО ИССЛЕДОВАТЕЛЕЙ РУССКОЙ КУЛЬТУРЫ"
   
   - Main headline (large, bold, dark blue):
     "Хватит жить по чужим правилам и смыслам"
   
   - Subheadline (medium, gray):
     "Верните себе понимание родной культуры через язык"
   
   - Description (2-3 paragraphs, regular weight):
     "Русская Ясна — это сообщество людей, которые исследуют настоящие смыслы слов, 
     восстанавливают подлинную историю и возвращают традиции в свою жизнь.
     
     Мы не пересказываем учебники. Мы идем в архивы, анализируем язык и находим 
     логику там, где официальная версия молчит."
   
   - Two CTA buttons:
     * Primary: "Выбрать направление" (scroll to directions section)
     * Secondary: "Как это работает" (scroll to how-it-works section)
   
   - Trust indicators (small icons + text):
     * "8 направлений исследований"
     * "200+ активных участников"
     * "5 лет работы"

4. Right side - Visual:
   - Abstract illustration or image representing:
     * Books, scrolls, old maps
     * Golden/blue color scheme
     * Subtle animation (floating elements)
   - Alternative: Grid of small photos from events/meetings
   - Use placeholder for now, add proper image later

5. Background:
   - Subtle gradient (white to very light blue)
   - Optional: Decorative pattern (low opacity)
   - Decorative accent elements (circles, lines) in brand colors

6. Animations:
   - Headline: Slide up + fade in (stagger by word)
   - Description: Fade in with slight delay
   - Buttons: Fade in + scale from 0.9 to 1
   - Trust indicators: Slide in from bottom
   - Image: Fade in with parallax effect on scroll

7. Responsive:
   - Mobile: Stack vertically, image after text
   - Tablet: Similar to mobile but larger spacing
   - Desktop: Side by side

8. Accessibility:
   - Proper heading hierarchy (h1 for headline)
   - Alt text for images
   - Focus states for buttons
   - Reduced motion support

Use TypeScript, Tailwind CSS, Framer Motion. Follow the brand color palette.
```

---

## ПРОМПТ 4: "Для кого это" Section

```
Create a "Who is this for" section that identifies target audience segments with their pain points.

Requirements:

1. Component: /components/sections/WhoIsThisFor.tsx

2. Section heading:
   - Centered alignment
   - "Вы здесь, если:" (large, bold)
   - Subheading: "Найдите себя среди наших участников"

3. Grid of 5 persona cards:
   - Responsive grid: 1 column (mobile), 2-3 columns (tablet/desktop)
   - Each card contains:
     * Icon/emoji (large, 3rem)
     * Headline (pain point or desire)
     * Description (2-3 sentences)
     * Related directions (tags)

4. Persona cards content:

   Card 1:
   Icon: 🎓
   Headline: "Чувствуете, что современное образование оторвано от корней"
   Description: "Вы хотите дать детям настоящие знания о родной культуре, но не знаете, где их взять. 
   Школьные учебники не отвечают на ваши вопросы."
   Tags: ["Теремок тайн", "Ясна-Школа", "ЛитПроСвет"]

   Card 2:
   Icon: 📚
   Headline: "Устали от искаженной истории и штампов"
   Description: "Вы чувствуете, что что-то не так в официальной версии истории. 
   Ищете первоисточники и логику, а не мифы и легенды."
   Tags: ["38 Меридиан", "Извод", "Астроневод"]

   Card 3:
   Icon: 🎭
   Headline: "Чувствуете пустоту в праздниках и традициях"
   Description: "Современные праздники стали формальностью. Вы хотите вернуть смысл 
   в семейные события и понять, как праздновали предки."
   Tags: ["Праздники", "Красота", "ЛитПроСвет"]

   Card 4:
   Icon: 🔍
   Headline: "Интересуетесь этимологией и смыслами слов"
   Description: "Вы чувствуете, что многие слова потеряли изначальный смысл. 
   Хотите понимать, как устроен русский язык на глубоком уровне."
   Tags: ["Извод", "ЛитПроСвет", "Джива"]

   Card 5:
   Icon: 🤝
   Headline: "Хотите найти единомышленников"
   Description: "Вы устали быть одиноким в своих интересах. Ищете сообщество 
   думающих людей, с которыми можно исследовать и создавать."
   Tags: ["Все направления"]

5. Card styling:
   - White background with subtle shadow
   - Rounded corners (12px)
   - Padding: 2rem
   - Hover effect: slight lift + shadow increase
   - Icon: Gradient background circle
   - Tags: Small pills with light blue background

6. Interactions:
   - Hover: Card lifts up slightly
   - Click on tag: Smooth scroll to that direction
   - Entrance animation: Stagger fade-in from bottom

7. Bottom CTA:
   - Centered button: "Выбрать направление"
   - Secondary text: "или узнать больше о каждом"

8. Styling:
   - Background: Light gradient (white to light blue)
   - Section padding: 5rem top/bottom
   - Max-width container: 1280px

Use TypeScript, Tailwind CSS, Framer Motion. Ensure mobile-friendly card sizes.
```

---

## ПРОМПТ 5: Карточки направлений (Directions Cards)

```
Create reusable direction card components that follow the JBTD (Jobs To Be Done) framework.

Requirements:

1. Base component: /components/directions/DirectionCard.tsx

2. Props interface:
   - id: string
   - name: string
   - icon: ReactNode
   - tagline: string (one line)
   - forWhom: string[] (3-4 bullet points)
   - activities: string[] (what you'll do)
   - results: TestimonialType[] (participant stories)
   - format: FormatType (time commitment, frequency)
   - resources: ResourceType[] (Telegram, site, etc.)
   - color: string (accent color for this direction)

3. Card layout (expanded view):
   - Header:
     * Icon (large, colored circle background)
     * Name (h2, bold)
     * Tagline (italic, gray)
     * Quick stats (participants count, active years)
   
   - Section 1: "Для кого" (For whom)
     * List of 3-4 pain points/desires with checkmark icons
     * Example: "✓ Вы любите гулять по городу..."
   
   - Section 2: "Что вы будете делать" (Activities)
     * 4-5 specific activities with icons
     * Example: "🗺️ Участвовать в натурных уроках"
   
   - Section 3: "Результаты участников" (Results)
     * 2-3 testimonial cards:
       - Quote (italic)
       - Name, age, profession
       - Small avatar/photo placeholder
     * Carousel on mobile, grid on desktop
   
   - Section 4: "Формат участия" (Format)
     * Time commitment icon + text
     * Frequency icon + text  
     * Location (online/offline/hybrid)
   
   - Section 5: "Ресурсы" (Resources)
     * Links to Telegram, VK, website, Dzen
     * Icons + platform names
   
   - CTA buttons:
     * Primary: "Присоединиться" (opens form modal)
     * Secondary: "Узнать подробнее" (goes to detailed page)

4. Card variants:
   - Compact (for grid view):
     * Icon + Name + Tagline
     * 2-3 key points
     * Single CTA button
   - Expanded (for individual pages or modals)
     * Full content as described above

5. Styling:
   - White background with border
   - Border-left: 4px solid [direction color]
   - Rounded corners
   - Shadow on hover
   - Section dividers (subtle lines)
   - Responsive padding

6. Animations:
   - Entrance: Fade + slide from bottom
   - Hover: Slight scale (1.02)
   - Section reveals: Stagger children on scroll into view
   - Button hover: Color transition

7. Interactions:
   - Click anywhere on card: Expand to modal or navigate to page
   - Click CTA: Show signup form
   - Click testimonial: Show full story in modal
   - Click resource link: Open in new tab

8. Accessibility:
   - Semantic HTML (article, section, ul)
   - ARIA labels for icons
   - Focus visible states
   - Keyboard navigation support

Create the base DirectionCard component with TypeScript types. We'll populate with actual content in next prompt.
```

---

## ПРОМПТ 6: Секция с направлениями (Directions Section)

```
Create the main directions showcase section using the DirectionCard component.

Requirements:

1. Component: /components/sections/DirectionsSection.tsx

2. Section structure:
   - Heading: "Направления исследований" (centered, large)
   - Subheading: "8 направлений — от изучения языка до космоса. Выберите своё."
   - Filter/tabs (optional): "Все", "Для начинающих", "С детьми", "Онлайн", "В Москве"
   - Grid of direction cards
   - Bottom CTA: "Не можете выбрать? Пройдите тест"

3. Directions data (create /lib/directions-data.ts):

   DIRECTION 1: Неглинка / 38 Меридиан
   - Icon: Map icon
   - Color: #2B7A78 (teal)
   - Tagline: "Расшифровываем архитектурные и географические коды Москвы"
   - ForWhom:
     * "Вы любите гулять по городу и хотите видеть больше, чем туристы"
     * "Вам интересна настоящая история, не официальные версии"
     * "Вы хотите понимать, как устроена Москва и почему"
   - Activities:
     * "Участвовать в натурных уроках (прогулки, теплоходы)"
     * "Изучать архивные карты и документы"
     * "Исследовать связь названий рек, улиц с историей"
     * "Разгадывать архитектурные символы"
   - Results:
     * Quote: "Теперь каждая прогулка — это открытие новых смыслов"
       Name: Мария, 34 года
     * Quote: "Понял логику застройки Москвы — теперь вижу систему"
       Name: Сергей, 45 лет
   - Format:
     * Time: "2-4 часа в неделю"
     * Type: "Дистанционно + встречи в Москве"
     * Frequency: "Натурные уроки 1-2 раза в месяц"
   - Resources:
     * Telegram: t.me/neglinka78
     * Site: [link]

   DIRECTION 2: ЛитПроСвет
   - Icon: Book icon
   - Color: #8B4513 (brown)
   - Tagline: "Учимся читать между строк и создавать тексты с глубоким смыслом"
   - ForWhom:
     * "Вы читаете классику, но чувствуете, что упускаете скрытые смыслы"
     * "Хотите научиться писать осмысленные тексты"
     * "Интересуетесь, какие ценности заложены в произведениях"
   - Activities:
     * "Разбирать классику по композиции и символам"
     * "Участвовать в читательском клубе (каждый четверг)"
     * "Учиться писать на курсах 'Пиши легко'"
     * "Создавать собственные тексты"
   - Results:
     * Quote: "Написала первый рассказ, опубликованный в альманахе"
       Name: Елена, 42 года
     * Quote: "Открыл для себя Пушкина заново — увидел уровни смыслов"
       Name: Дмитрий, 37 лет
   - Format:
     * Time: "2-3 часа в неделю"
     * Type: "Офлайн в Москве + онлайн"
     * Frequency: "Клуб каждый четверг, курсы по расписанию"

   DIRECTION 3: Астроневод
   - Icon: Star icon
   - Color: #191970 (midnight blue)
   - Tagline: "Исследуем космос и архитектуру через призму русской традиции"
   - ForWhom:
     * "Вы увлекаетесь астрономией, но научный подход упускает символизм"
     * "Интересуетесь связью неба и земли"
     * "Хотите понимать глубокие смыслы за звездами"
   - Activities:
     * "Изучать астрономические основы древних сооружений"
     * "Исследовать связь созвездий с русской мистикой"
     * "Разбирать символизм Кремля, монастырей"
     * "Проводить наблюдения неба"
   - Results:
     * Quote: "Понял, как Кремль связан с созвездиями — это система"
       Name: Игорь, 40 лет
   - Format:
     * Time: "1-2 часа в неделю"
     * Type: "Онлайн + редкие встречи"

   DIRECTION 4: Праздники / Красота
   - Icon: Sparkles icon
   - Color: #DC143C (crimson)
   - Tagline: "Возвращаем смысл в праздники и создаем настоящие традиции"
   - ForWhom:
     * "Вам скучно на формальных праздниках"
     * "Хотите, чтобы семейные события были наполнены смыслом"
     * "Интересуетесь, как праздновали предки"
   - Activities:
     * "Изучать кологодные праздники"
     * "Участвовать в организации балов, встреч"
     * "Проводить семейные праздники по традициям"
     * "Готовить традиционные блюда"
   - Results:
     * Quote: "Провели Купалу — дети в восторге, все наконец понятно"
       Name: Ольга, 38 лет
   - Format:
     * Time: "Гибко, зависит от праздника"
     * Type: "Офлайн мероприятия"
     * Frequency: "4-6 праздников в год"

   DIRECTION 5: Джива (Медицина)
   - Icon: Heart icon
   - Color: #E63946 (red)
   - Tagline: "Изучаем устройство тела через русский язык"
   - ForWhom:
     * "Интересуетесь медициной, но чувствуете ограничения"
     * "Хотите понимать тело не только как механизм"
     * "Ищете связь между названиями органов и функциями"
   - Activities:
     * "Изучать русскую анатомию"
     * "Разбирать традиционные подходы к здоровью"
     * "Исследовать связь языка и медицины"
   - Format:
     * Time: "2-3 часа в неделю"
     * Type: "Онлайн встречи"

   DIRECTION 6: Ясные маршруты
   - Icon: Navigation icon
   - Color: #06A77D (green)
   - Tagline: "Гуляем по городам с новым пониманием"
   - ForWhom:
     * "Живете в Москве/Питере и хотите знать город глубже"
     * "Любите пешие и водные прогулки"
     * "Хотите видеть не туристические маршруты"
   - Activities:
     * "Участвовать в натурных уроках"
     * "Гулять на теплоходе по Москва-реке"
     * "Открывать символизм ВДНХ, Лефортово, Коломенского"
   - Results:
     * Quote: "Прошел 5 маршрутов — теперь вижу Москву иначе"
       Name: Андрей, 41 год
   - Format:
     * Time: "2-4 часа на прогулку"
     * Frequency: "1-2 раза в месяц"

   DIRECTION 7: Извод
   - Icon: Search icon
   - Color: #4A5568 (gray)
   - Tagline: "Исследуем происхождение слов и находим утерянные смыслы"
   - ForWhom:
     * "Интересна этимология"
     * "Чувствуете, что слова потеряли смысл"
     * "Хотите понимать логику образования слов"
   - Activities:
     * "Изучать корни слов"
     * "Находить связи между языками"
     * "Разбирать официальную этимологию"
   - Format:
     * Type: "Чтение статей + редкие встречи"

   DIRECTION 8: Теремок тайн
   - Icon: Castle icon
   - Color: #FF6B6B (light red)
   - Tagline: "Учим детей видеть мир глазами предков"
   - ForWhom:
     * "У вас есть дети 7-16 лет"
     * "Хотите альтернативу поверхностному образованию"
     * "Ищете развивающие занятия с смыслом"
   - Activities:
     * "Изучать астрономию через образы"
     * "Разбирать стихии"
     * "Узнавать о русских художниках"
   - Format:
     * Time: "1-2 часа в неделю для детей"
     * Type: "Онлайн + встречи"

4. Grid layout:
   - Desktop: 2 columns (large cards)
   - Tablet: 2 columns (medium cards)
   - Mobile: 1 column (compact cards)
   - Gap: 2rem

5. Animations:
   - Cards entrance: Stagger from bottom
   - Hover: Slight lift
   - Filter change: Fade out/in

6. Filtering:
   - Show all by default
   - Filter by tags when selected
   - Smooth transition

Export directions data as constant array. Use in DirectionsSection component with grid layout and animations.
```

---

## ПРОМПТ 7: "Как участвовать" Section (Сценарии)

```
Create a "How to participate" section with 4 clear user journey scenarios.

Requirements:

1. Component: /components/sections/HowToParticipate.tsx

2. Section heading:
   - "Как начать заниматься"
   - Subheading: "Выберите сценарий, который вам подходит"

3. Create 4 scenario cards with step-by-step flows:

   SCENARIO 1: "Я хочу просто попробовать"
   - Icon: 👀 Eye icon
   - Tagline: "Для тех, кто не уверен, своё это или нет"
   - Time: "1-2 недели на знакомство"
   - Steps:
     1. "Подпишитесь на Telegram-канал интересующего направления"
        - Icon: Telegram icon
        - Note: "Получите доступ к материалам"
     2. "Прочитайте 2-3 статьи, посмотрите видео"
        - Icon: Book icon
        - Note: "Почувствуйте атмосферу"
     3. "Придите на открытую встречу или натурный урок"
        - Icon: Users icon
        - Note: "Без регистрации, бесплатно"
     4. "Решите, хотите ли продолжить"
        - Icon: Check icon
        - Note: "Никаких обязательств"
   - CTA: "Посмотреть открытые мероприятия"

   SCENARIO 2: "Я хочу изучать одно направление"
   - Icon: 🎯 Target icon
   - Tagline: "Для тех, у кого есть четкий интерес"
   - Time: "От 2 часов в неделю"
   - Steps:
     1. "Оставьте заявку на сайте, укажите направление"
        - Icon: Form icon
        - Note: "2 минуты"
     2. "Мы свяжемся с вами в течение 2-3 дней"
        - Icon: Message icon
        - Note: "Координатор направления"
     3. "Получите доступ к материалам и чатам"
        - Icon: Folder icon
        - Note: "Статьи, видео, архивы"
     4. "Начните участвовать в регулярных встречах"
        - Icon: Calendar icon
        - Note: "Еженедельно или по расписанию"
     5. "По желанию — присоединитесь к исследованиям"
        - Icon: Search icon
        - Note: "Практика в команде"
   - CTA: "Оставить заявку"

   SCENARIO 3: "Я хочу глубоко погрузиться"
   - Icon: 🚀 Rocket icon
   - Tagline: "Для тех, кто готов серьезно учиться"
   - Time: "4-6 часов в неделю + самостоятельная работа"
   - Steps:
     1. "Запишитесь в Ясна-Школу"
        - Icon: School icon
        - Note: "Базовый курс основ Ясны"
     2. "Пройдите базовый курс"
        - Icon: Book-open icon
        - Note: "Видеоуроки + вебинары"
     3. "Выберите специализацию (1-2 направления)"
        - Icon: Compass icon
        - Note: "Углубленное изучение"
     4. "Станьте активным участником управления"
        - Icon: Users icon
        - Note: "Работа в команде"
     5. "Создавайте собственные исследования"
        - Icon: Edit icon
        - Note: "Публикации, уроки, статьи"
   - CTA: "Записаться в школу"

   SCENARIO 4: "Я хочу прийти на мероприятие"
   - Icon: 🎪 Tent icon
   - Tagline: "Для тех, кому нужен живой опыт"
   - Time: "Разовые события 2-4 часа"
   - Steps:
     1. "Выберите мероприятие в календаре"
        - Icon: Calendar icon
        - Note: "Натурные уроки, праздники, балы"
     2. "Зарегистрируйтесь по ссылке"
        - Icon: Link icon
        - Note: "Или придите без регистрации"
     3. "Придите и познакомьтесь с участниками"
        - Icon: Heart icon
        - Note: "Дружелюбная атмосфера"
     4. "После — решите, хотите ли углубиться"
        - Icon: Arrow-right icon
        - Note: "Выберите другой сценарий"
   - CTA: "Смотреть календарь"

4. Card layout:
   - Grid: 2x2 on desktop, 1 column on mobile
   - Each card:
     * Icon (large, colored)
     * Tagline
     * Time estimate (small badge)
     * Expandable steps (accordion or always visible)
     * CTA button at bottom
   - Styling:
     * Light background with border
     * Hover: Shadow increase
     * Different accent color for each scenario

5. Step component:
   - Number badge (1, 2, 3...)
   - Icon (small)
   - Title (bold)
   - Note (small, gray, italic)
   - Connection line between steps

6. Interactions:
   - Click card: Expand to show all steps
   - Click CTA: Navigate to form/calendar/school page
   - Hover step: Highlight with accent color

7. Bottom section:
   - Heading: "Не знаете, что выбрать?"
   - Description: "Ответьте на 5 вопросов, и мы подскажем"
   - CTA button: "Пройти тест" (opens quiz modal)

8. Animations:
   - Cards: Stagger fade-in from bottom
   - Steps: Stagger reveal with connection line draw
   - Hover: Smooth scale

Use TypeScript, Tailwind, Framer Motion. Mobile-first approach. Clear visual hierarchy.
```

---

## ПРОМПТ 8: Истории участников (Testimonials)

```
Create a testimonials section with participant stories that prove results.

Requirements:

1. Component: /components/sections/Testimonials.tsx

2. Section structure:
   - Heading: "Истории участников"
   - Subheading: "Как Ясна изменила их жизнь"
   - Filter tabs: "Все истории", "Неглинка", "ЛитПроСвет", etc. (by direction)
   - Testimonial cards (carousel on mobile, grid on desktop)
   - Navigation arrows and dots
   - CTA: "Поделиться своей историей"

3. Testimonial card component (/components/testimonials/TestimonialCard.tsx):
   - Photo (circular avatar, 80px)
   - Name, age, profession
   - Direction badge (colored pill)
   - Quote (italic, 3-5 sentences, truncated with "Read more")
   - Before/After indicators:
     * "Было: ..."
     * "Стало: ..."
   - Time in project (e.g., "С проектом 1.5 года")
   - Social proof: "Провел 12 натурных уроков" or similar achievement

4. Sample testimonials data (/lib/testimonials-data.ts):

   Testimonial 1:
   - Photo: [placeholder]
   - Name: "Сергей"
   - Age: 38
   - Profession: "Программист"
   - Direction: "Неглинка"
   - Quote: "Я пришел в Неглинку год назад, просто из любопытства. Думал — схожу на одну прогулку и всё. Но когда прошел первый натурный урок по Москва-реке, понял — это совсем другой уровень понимания города. Сейчас я сам провожу исследования по Замоскворечью и готовлю материал для публикации."
   - Before: "Гулял по городу и видел только красивые здания"
   - After: "Вижу систему, понимаю символизм, провожу свои экскурсии"
   - Time: "С проектом 1 год"
   - Achievement: "Провел 8 натурных уроков"

   Testimonial 2:
   - Name: "Елена"
   - Age: 42
   - Profession: "Преподаватель"
   - Direction: "ЛитПроСвет"
   - Quote: "Всю жизнь читала классику, но чувствовала, что упускаю что-то важное. В читательском клубе ЛитПроСвета открыла для себя многоуровневые смыслы. Написала свой первый рассказ, который опубликовали в альманахе проекта. Теперь веду курсы для школьников."
   - Before: "Читала, но не понимала глубину"
   - After: "Разбираю композицию, учу других, пишу сама"
   - Achievement: "Опубликовала 3 рассказа"

   Testimonial 3:
   - Name: "Мария"
   - Age: 34
   - Profession: "Дизайнер"
   - Direction: "Праздники"
   - Quote: "Современные праздники для меня были пустой формальностью. После встречи с направлением 'Красота' провели Купалу всей семьей — дети в восторге, муж удивлен. Теперь каждый праздник — это событие со смыслом. Учусь организовывать балы."
   - Before: "Праздники были скучной обязаловкой"
   - After: "Семейные традиции, дети вовлечены, смысл в каждом событии"
   - Achievement: "Организовала 2 семейных праздника"

   Testimonial 4:
   - Name: "Андрей"
   - Age: 41
   - Profession: "Инженер"
   - Direction: "Ясные маршруты"
   - Quote: "Живу в Москве 20 лет, думал, что знаю город. Но после первой прогулки с Ясными маршрутами понял — не знал ничего. Прошел уже 5 маршрутов, каждый раз — откровение. Планирую пройти все и потом водить друзей."
   - Before: "Знал только центр и свой район"
   - After: "Вижу Москву как систему, понимаю логику застройки"
   - Achievement: "Прошел 5 маршрутов"

   Testimonial 5:
   - Name: "Ольга"
   - Age: 38
   - Profession: "Маркетолог"
   - Direction: "Теремок тайн"
   - Quote: "Искала для дочери (10 лет) альтернативу школьному образованию. В Теремке тайн она изучает астрономию через образы, стихии, русских художников. Ребенок стал задавать глубокие вопросы, на которые я сама не всегда могу ответить."
   - Before: "Дочь зубрила учебники без интереса"
   - After: "Ребенок увлечен, задает вопросы, хочет больше знать"
   - Achievement: "Дочь прошла 2 курса"

5. Layout:
   - Desktop: 3 columns grid, show 6 at once
   - Tablet: 2 columns
   - Mobile: 1 column, swipeable carousel
   - Spacing: 2rem gap

6. Card styling:
   - White background
   - Border-left: 4px solid [direction color]
   - Rounded corners (12px)
   - Shadow on hover
   - Photo: Circular, 80px diameter
   - Quote: Max 4 lines, "..." with expand button
   - Before/After: Small gray boxes with arrow between

7. Interactions:
   - Click card: Expand to show full quote in modal
   - Click direction badge: Filter by that direction
   - Hover: Slight lift + shadow increase
   - Swipe on mobile: Navigate between testimonials
   - Navigation arrows: Smooth slide transition

8. Carousel controls (mobile):
   - Previous/Next arrows (subtle, appear on hover)
   - Dots indicator at bottom
   - Auto-play with 5s interval (pause on hover)
   - Swipe gestures support

9. Filter functionality:
   - Tabs at top to filter by direction
   - "Все истории" shows all
   - Smooth fade transition when filtering
   - Count badge on each tab: "ЛитПроСвет (3)"

10. Bottom CTA:
    - "Поделиться своей историей"
    - Opens form modal for testimonial submission
    - Fields: Name, Direction, Story, Photo upload

11. Animations:
    - Entrance: Stagger cards from bottom
    - Filter: Fade out old, fade in new
    - Carousel: Smooth slide with easing

Use TypeScript, Tailwind, Framer Motion. Create reusable TestimonialCard component. Use react-multi-carousel or Swiper for carousel functionality.
```

---

## ПРОМПТ 9: Форма заявки (Signup Form)

```
Create a conversion-optimized signup form with multiple submission points.

Requirements:

1. Components:
   - /components/forms/SignupForm.tsx (main form)
   - /components/forms/SignupModal.tsx (modal wrapper)
   - /components/forms/FormSuccess.tsx (success state)

2. Form layout (SignupForm):
   - Heading: "Оставьте заявку — мы расскажем о следующих шагах"
   - Subheading: "Никакого спама, только полезная информация"
   
   - Fields:
     * Имя (required, text input)
       Placeholder: "Как к вам обращаться?"
       Validation: Min 2 chars
     
     * Контакт (required, text input)
       Placeholder: "Telegram, WhatsApp или Email"
       Validation: Must be valid format (regex)
       Helper text: "Выберите удобный способ связи"
     
     * Что вас привело к Ясне? (optional, textarea)
       Placeholder: "Расскажите в свободной форме..."
       Max: 500 chars
       Char counter at bottom
     
     * Интересующие направления (checkboxes)
       List all 8 directions with small icons
       Helper: "Можно выбрать несколько"
     
     * Как узнали о нас? (dropdown)
       Options:
       - От друзей/знакомых
       - Из социальных сетей
       - Из поиска (Google, Yandex)
       - Случайно наткнулся
       - Другое
   
   - Trust indicators (below form):
     ✓ Мы ответим в течение 2-3 дней
     ✓ Вы получите ссылки на материалы
     ✓ Сможете задать любые вопросы
     ✓ Никакой спам — только по вашему запросу
   
   - Submit button: "Отправить заявку"
     States: Default, Loading, Success, Error
   
   - Privacy note (small, gray):
     "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности"

3. Form validation (use react-hook-form + zod):
   - Real-time validation on blur
   - Error messages below each field (red text)
   - Disable submit if form invalid
   - Show field-level errors
   - Highlight invalid fields with red border

4. Form submission flow:
   - Show loading spinner on button
   - Disable form inputs during submission
   - On success:
     * Replace form with success message
     * Show confetti animation
     * Display next steps
     * Auto-close modal after 5s (if in modal)
   - On error:
     * Show error message at top
     * Keep form data
     * Allow resubmission

5. Success state component:
   - Icon: Green checkmark (large, animated)
   - Heading: "Заявка отправлена!"
   - Message: "Мы свяжемся с вами в течение 2-3 дней через указанный контакт"
   - Next steps:
     * "Пока ждёте, подпишитесь на наши каналы:"
     * Links to Telegram, VK, Dzen
   - Button: "Вернуться на главную"

6. Modal wrapper (SignupModal):
   - Trigger: Multiple CTAs across site
   - Backdrop: Dark overlay (rgba(0,0,0,0.7))
   - Modal: Centered, max-width 600px
   - Close button: X in top-right
   - Close on:
     * Click backdrop
     * Press ESC key
     * Click close button
     * Successful submission (after 5s)
   - Animation: Fade in backdrop, scale modal from 0.95 to 1

7. Multiple form placements:
   - Fixed CTA button in header (always visible after scroll)
   - At end of each direction card
   - In "How to participate" section (Scenario 2)
   - Floating action button on mobile (bottom-right)
   - At bottom of page

8. Styling:
   - Clean, minimal design
   - White background
   - Input fields:
     * Border: 1px solid light gray
     * Rounded corners (8px)
     * Padding: 0.75rem
     * Focus: Blue border, subtle shadow
     * Error: Red border
   - Checkboxes: Custom styled with brand colors
   - Button: Full width, primary color, hover effect
   - Responsive: Full width on mobile, max-width on desktop

9. Accessibility:
   - Proper labels for all inputs
   - ARIA attributes for validation messages
   - Focus management (first field on open)
   - Keyboard navigation support
   - Screen reader friendly

10. Form state management:
    - Use React Hook Form for validation
    - Zod schema for validation rules
    - Local storage: Save draft if user closes modal
    - Restore draft on reopen

11. Analytics/tracking:
    - Track form open event
    - Track field interactions
    - Track submission attempts
    - Track successful submissions
    - Track which CTA triggered form

Create the form with proper TypeScript types, validation, and all states. Use Framer Motion for animations.
```

---

## ПРОМПТ 10: FAQ Section

```
Create an FAQ section to address common questions and reduce friction.

Requirements:

1. Component: /components/sections/FAQ.tsx

2. Section structure:
   - Heading: "Частые вопросы"
   - Subheading: "Не нашли ответ? Напишите нам"
   - FAQ items (accordion)
   - Bottom CTA: "Задать свой вопрос"

3. FAQ data (/lib/faq-data.ts) - 10-12 questions:

   Q1: "Это платно или бесплатно?"
   A: "Большинство материалов и встреч бесплатны. Открытые мероприятия, Telegram-каналы, статьи доступны всем. Некоторые курсы в Ясна-Школе и специальные мероприятия (например, балы) могут быть платными, но это всегда указано заранее."

   Q2: "Сколько времени нужно уделять?"
   A: "Это зависит от вас. Можно просто читать материалы (1-2 часа в неделю), можно участвовать в регулярных встречах (2-4 часа в неделю), можно вести собственные исследования (от 5 часов в неделю). Вы сами выбираете уровень вовлеченности."

   Q3: "Я живу не в Москве, смогу ли участвовать?"
   A: "Да! Многие направления работают онлайн: ЛитПроСвет, Извод, Джива, Астроневод. Встречи проходят в Zoom, материалы доступны всем. Некоторые направления (Неглинка, Ясные маршруты) проводят натурные уроки в Москве, но вы можете смотреть отчеты и изучать материалы дистанционно."

   Q4: "Нужны ли какие-то специальные знания?"
   A: "Нет, начать можно с нуля. Мы объясняем все с основ. Главное — интерес и открытость к новым знаниям."

   Q5: "Это секта или религиозная организация?"
   A: "Нет. Ясна — это образовательное сообщество, которое изучает язык, историю и культуру. Мы опираемся на факты, логику и исследования, а не на веру или догматы. У нас нет гуру, иерархии или обязательных ритуалов."

   Q6: "Можно ли участвовать в нескольких направлениях?"
   A: "Конечно! Многие участники интересуются 2-3 направлениями одновременно. Направления часто пересекаются: например, ЛитПроСвет и Извод, или Неглинка и Астроневод."

   Q7: "Что делать после первой заявки?"
   A: "После заявки координатор направления свяжется с вами в течение 2-3 дней, расскажет о ближайших встречах, добавит вас в чаты и пришлет материалы для изучения. Вы сможете задать любые вопросы."

   Q8: "Можно ли привести ребенка?"
   A: "Для детей 7-16 лет есть направление 'Теремок тайн'. На некоторые мероприятия (праздники, натурные уроки) можно приходить с детьми, но лучше уточнить заранее."

   Q9: "Я хочу помочь проекту, но не знаю как"
   A: "Есть много способов: делиться материалами в соцсетях, помогать с организацией мероприятий, писать статьи, проводить исследования, поддержать финансово. Напишите координатору вашего направления."

   Q10: "Какие результаты я получу через полгода?"
   A: "Зависит от направления и вашей активности. Например, в Неглинке — поймете логику застройки Москвы, пройдете 5-10 маршрутов. В ЛитПроСвете — научитесь разбирать классику, может быть, напишете свой первый рассказ. В любом случае — найдете единомышленников и углубите понимание родной культуры."

   Q11: "У вас есть сертификаты или дипломы?"
   A: "Мы не выдаем официальные дипломы государственного образца, потому что не являемся учебным заведением. Но после прохождения курсов в Ясна-Школе вы получаете сертификат участника, который подтверждает ваши знания."

   Q12: "Можно сначала посмотреть, как это работает?"
   A: "Конечно! Подпишитесь на Telegram-канал интересующего направления, почитайте статьи, посмотрите видео. Приходите на открытые встречи и натурные уроки без регистрации. Так вы поймете, ваше это или нет."

4. Accordion component (/components/ui/Accordion.tsx):
   - Question: Bold, clickable, with chevron icon
   - Answer: Hidden by default, expands on click
   - Animation: Smooth height transition
   - Only one item open at a time (or allow multiple?)
   - Icon rotation: Chevron rotates 180° when open

5. Layout:
   - Two-column grid on desktop (2 questions per row)
   - Single column on mobile
   - Alternating background colors for rows
   - Max-width: 1200px

6. Styling:
   - Question:
     * Font size: 1.1rem
     * Font weight: 600
     * Color: Dark blue
     * Padding: 1.5rem
     * Cursor: pointer
     * Hover: Background lightens
   - Answer:
     * Font size: 1rem
     * Color: Gray
     * Padding: 1.5rem
     * Line height: 1.6
   - Border between items
   - Rounded corners on first/last items

7. Interactions:
   - Click question: Toggle answer
   - Keyboard: Space/Enter to toggle
   - Focus visible state
   - Smooth animation (framer-motion)

8. Bottom section:
   - Centered text: "Не нашли ответ на свой вопрос?"
   - Button: "Написать нам" (opens contact form or mailto)
   - Small text: "Отвечаем в течение суток"

9. Search functionality (optional, nice to have):
   - Search input above questions
   - Filter questions by keyword
   - Highlight matching text
   - Show "No results" if nothing found

10. Animations:
    - FAQ items: Stagger fade-in on scroll
    - Answer expand: Smooth height + fade
    - Chevron: Rotate 180° smoothly

Create accordion component with proper TypeScript types and accessibility. Use Framer Motion for animations.
```

---

## ПРОМПТ 11: Календарь событий (Events Calendar)

```
Create an events calendar component to showcase upcoming activities.

Requirements:

1. Component: /components/sections/EventsCalendar.tsx

2. Section structure:
   - Heading: "Ближайшие события"
   - Subheading: "Открытые встречи, натурные уроки, праздники"
   - Filter tabs: "Все", "Эта неделя", "Этот месяц", by direction
   - Event cards (list view or calendar view toggle)
   - Pagination or "Load more"
   - CTA: "Смотреть полное расписание"

3. Event card component (/components/events/EventCard.tsx):
   - Date badge (day + month, prominent)
   - Time (with clock icon)
   - Event title (bold, clickable)
   - Direction badge (colored pill)
   - Location (with pin icon): "Онлайн" / "Москва, адрес" / "Санкт-Петербург"
   - Short description (2-3 lines)
   - Capacity indicator: "Осталось 5 мест" or "Регистрация не требуется"
   - Tags: "Бесплатно", "Для новичков", "С детьми"
   - CTA button: "Зарегистрироваться" or "Узнать подробнее"

4. Sample events data (/lib/events-data.ts):

   Event 1:
   - Date: "2025-01-23"
   - Time: "19:00"
   - Title: "Читательский клуб ЛитПроСвета: Разбор 'Капитанской дочки'"
   - Direction: "ЛитПроСвет"
   - Location: "Онлайн (Zoom)"
   - Description: "Разбираем композицию, символы и исторический контекст повести Пушкина. Участие бесплатное."
   - Capacity: null (unlimited)
   - Registration: false
   - Tags: ["Бесплатно", "Онлайн", "Для новичков"]
   - Link: "https://zoom.us/..."

   Event 2:
   - Date: "2025-01-25"
   - Time: "14:00"
   - Title: "Натурный урок: Кремль и его астрономический символизм"
   - Direction: "Неглинка"
   - Location: "Москва, Красная площадь (у памятника Минину и Пожарскому)"
   - Description: "Изучаем связь архитектуры Кремля с созвездиями. Прогулка 2-3 часа."
   - Capacity: 20
   - Registered: 15
   - Registration: true
   - Tags: ["Офлайн", "Москва", "Прогулка"]
   - Price: "Бесплатно"

   Event 3:
   - Date: "2025-01-28"
   - Time: "15:00"
   - Title: "Речная прогулка: Монастыри-корабли Москвы"
   - Direction: "Ясные маршруты"
   - Location: "Москва, причал 'Парк Горького'"
   - Description: "Теплоходная экскурсия по Москва-реке. Рассматриваем монастыри и их роль."
   - Capacity: 30
   - Registered: 22
   - Registration: true
   - Tags: ["Офлайн", "Москва", "Теплоход"]
   - Price: "500₽"

   Event 4:
   - Date: "2025-02-01"
   - Time: "20:00"
   - Title: "Встреча у костра Коломна: Ясные загадки"
   - Direction: "Ясна-Школа"
   - Location: "Онлайн (обучающая платформа)"
   - Description: "Интерактивная игра с загадками о русском языке и истории."
   - Registration: false
   - Tags: ["Бесплатно", "Онлайн", "Игра"]

   Event 5:
   - Date: "2025-02-14"
   - Time: "18:00"
   - Title: "Зимний бал в честь Сретения"
   - Direction: "Праздники"
   - Location: "Москва, усадьба Коломенское"
   - Description: "Традиционный бал с историческими танцами, угощениями и играми."
   - Capacity: 50
   - Registered: 38
   - Registration: true
   - Tags: ["Офлайн", "Платно", "Праздник"]
   - Price: "1500₽"

   Create 8-10 more events for different directions and dates

5. Layout options (toggle):
   - List view (default):
     * Vertical list of event cards
     * 1 column on mobile, 2 on tablet, 3 on desktop
   - Calendar view:
     * Month grid with event dots on dates
     * Click date to see events for that day
     * Different colors for different directions

6. Filtering:
   - Tabs at top: "Все", "Эта неделя", "Этот месяц"
   - Direction filter (dropdown or pills)
   - Location filter: "Все", "Онлайн", "Москва", "Санкт-Петербург"
   - Tag filter: "Бесплатно", "Для новичков", etc.
   - Filter combinations work together (AND logic)
   - Show count: "Найдено 5 событий"

7. Event card styling:
   - White background with border
   - Date badge: Colored circle, white text
   - Direction badge: Small pill, direction color
   - Capacity indicator: Progress bar or text with color
     * Green: >50% spots available
     * Yellow: 20-50%
     * Red: <20%
     * Gray: Registration closed
   - Hover: Lift + shadow increase
   - Click: Expand to show more details (or open modal)

8. Event details modal (opens on card click):
   - Full event information
   - Larger description
   - Organizer info (coordinator name, photo)
   - Map (if offline event)
   - Related events: "Вам также может понравиться"
   - Share buttons (Telegram, VK, copy link)
   - Registration form or button to external link

9. Registration flow:
   - Button: "Зарегистрироваться"
   - If internal: Opens inline form
     * Name, Contact, "Как узнали"
     * Submit to add to waitlist
   - If external: Opens link in new tab
   - After registration: Show confirmation
     * "Вы зарегистрированы!"
     * Instructions how to join (Zoom link, meeting point, etc.)
     * Add to calendar button (iCal)

10. Empty states:
    - No events found: "В выбранном периоде нет событий"
    - Suggest: "Посмотрите события в других направлениях"
    - CTA: "Подпишитесь на уведомления"

11. Interactions:
    - Hover event card: Show more details (preview)
    - Click card: Open modal or navigate to event page
    - Click direction badge: Filter by that direction
    - Click tags: Add to filter
    - Pagination: Load more events smoothly

12. Calendar view component:
    - Month grid (7 columns for days)
    - Event dots on dates (color by direction)
    - Click date: Show events in sidebar
    - Navigation: Previous/Next month buttons
    - Today indicator: Highlighted

13. Animations:
    - Events entrance: Stagger from bottom
    - Filter change: Fade out/in
    - Modal: Scale from card position
    - Calendar dots: Pulse animation

14. Accessibility:
    - Proper date formatting for screen readers
    - ARIA labels for buttons and filters
    - Keyboard navigation for calendar
    - Focus management in modal

Create EventCard and EventsCalendar components with proper TypeScript types. Use date-fns for date handling. Consider using react-big-calendar or similar library for calendar view.
```

---

## ПРОМПТ 12: Footer

```
Create a comprehensive footer with navigation, social links, and additional information.

Requirements:

1. Component: /components/layout/Footer.tsx

2. Footer structure (4 columns on desktop, stack on mobile):

   Column 1: О проекте
   - Logo and tagline
   - Short description (2-3 sentences):
     "Русская Ясна — образовательное сообщество, которое изучает язык, 
     историю и культуру. Мы восстанавливаем утерянные смыслы и 
     возвращаем традиции в жизнь."
   - Social links (icons):
     * Telegram (main channel)
     * VK
     * Dzen
     * YouTube
     * Odnoklassniki
   - Each icon: Circle background, hover effect

   Column 2: Направления
   - Links to all 8 directions:
     * Неглинка / 38 Меридиан
     * ЛитПроСвет
     * Астроневод
     * Праздники / Красота
     * Джива
     * Ясные маршруты
     * Извод
     * Теремок тайн
   - Link to: "Все направления"

   Column 3: Участие
   - "Как участвовать"
   - "Мероприятия"
   - "Ясна-Школа"
   - "Вступить" (CTA)
   - "Часто задаваемые вопросы"
   - "Контакты"

   Column 4: Ресурсы
   - "О проекте"
   - "История Ясны"
   - "Команда"
   - "Публикации"
   - "Видеобиблиотека"
   - "Поддержать проект"

3. Bottom bar:
   - Copyright: "© 2025 Русская Ясна. Все права защищены."
   - Legal links:
     * Политика конфиденциальности
     * Пользовательское соглашение
     * Согласие на обработку данных
   - Made by: "Сделано с ❤️ для сохранения культуры"

4. Newsletter subscription (above columns):
   - Heading: "Подписаться на новости"
   - Description: "Раз в неделю — дайджест событий и материалов"
   - Input field: Email
   - Button: "Подписаться"
   - Note: "Без спама, можно отписаться в любой момент"

5. Styling:
   - Background: Dark blue (#1A2332) or dark gray
   - Text: Light gray / white
   - Links: Light gray, hover to white
   - Section dividers: Subtle lines
   - Max-width container: 1280px
   - Padding: 4rem top/bottom, 2rem sides
   - Bottom bar: Darker background, smaller text

6. Responsive:
   - Desktop: 4 columns
   - Tablet: 2 columns
   - Mobile: 1 column, stack all
   - Newsletter: Full width on all devices

7. Social icons:
   - Circle background with brand colors
   - Icon white/gray
   - Hover: Lift + color change
   - Size: 40x40px
   - Gap: 0.5rem

8. Links:
   - No underline by default
   - Underline on hover
   - Smooth color transition
   - Visited links: Same color

9. Newsletter form:
   - Input: White background, dark text
   - Button: Accent color (gold)
   - Success state: Green checkmark + message
   - Error state: Red text below input
   - Loading state: Spinner in button

10. Animations:
    - Links: Underline slide in from left
    - Social icons: Scale on hover
    - Newsletter submit: Button pulse
    - Section entrance: Fade in on scroll

11. Accessibility:
    - All links have proper text or aria-labels
    - Social icons have accessible names
    - Newsletter form has proper labels
    - Focus visible states
    - Keyboard navigation

12. Back to top button:
    - Fixed position, bottom-right
    - Appears after scrolling down
    - Smooth scroll to top on click
    - Circle with arrow icon
    - Hide on top of page

Create Footer component with proper structure and styling. Use Tailwind for responsive design. Include all social links and navigation.
```

---

## ПРОМПТ 13: Индивидуальные страницы направлений

```
Create detailed individual pages for each direction using dynamic routes.

Requirements:

1. File structure:
   - /app/(directions)/[slug]/page.tsx (dynamic route)
   - /lib/directions-data.ts (already exists, expand)
   - /components/direction-page/DirectionHero.tsx
   - /components/direction-page/DirectionContent.tsx
   - /components/direction-page/DirectionCTA.tsx

2. Page layout:
   - Hero section (direction-specific)
   - Detailed content sections
   - Team members
   - Resources and channels
   - Related directions
   - FAQ for this direction
   - CTA to join

3. Hero section (DirectionHero):
   - Background: Direction accent color (gradient)
   - Icon: Large, centered or left-aligned
   - Name: h1, large, bold
   - Tagline: Larger than on cards
   - Quick stats:
     * Active participants: "200+ участников"
     * Years active: "Работаем 3 года"
     * Content: "150+ материалов"
   - Breadcrumb: Home > Направления > [Direction Name]
   - CTA button: "Присоединиться"

4. Content sections:
   - "О направлении" (About):
     * Detailed description (3-5 paragraphs)
     * Mission and goals
     * What makes this direction unique
   
   - "Для кого" (expanded from card):
     * Detailed pain points/desires
     * Who benefits most
     * Prerequisites (if any)
   
   - "Чем занимаемся" (Activities):
     * Detailed list with examples
     * Regular activities (weekly, monthly)
     * Special projects
     * Sample materials/results
   
   - "Формат работы" (Format):
     * Time commitment breakdown
     * Schedule (specific days/times if available)
     * Location details
     * Online/offline mix
     * Tools used (Telegram, Zoom, etc.)
   
   - "Результаты участников" (Results):
     * Extended testimonials (more than on cards)
     * Before/after stories
     * Achievements and milestones
     * Photo gallery from events
   
   - "Команда направления" (Team):
     * Coordinator(s) photo + bio
     * Active contributors
     * "Присоединиться к команде" CTA
   
   - "Материалы для изучения" (Resources):
     * Featured articles (3-5)
     * Popular videos
     * Downloadable guides
     * Archive access
   
   - "Связанные направления" (Related):
     * 2-3 related directions with brief description
     * "Многие участники также интересуются..."
   
   - "Частые вопросы" (FAQ):
     * Direction-specific questions
     * 5-7 questions

5. Team member card:
   - Photo (circular, 100px)
   - Name
   - Role (e.g., "Координатор", "Ведущий исследователь")
   - Short bio (2-3 sentences)
   - Contact link (Telegram)

6. Resource card:
   - Thumbnail image or icon
   - Title
   - Type badge: "Статья", "Видео", "Гайд"
   - Publish date
   - Reading time / video duration
   - Link to resource

7. Sidebar (desktop only):
   - Sticky on scroll
   - Quick navigation:
     * О направлении
     * Для кого
     * Результаты
     * Команда
     * Вопросы
   - CTA card:
     * "Готовы начать?"
     * Button: "Оставить заявку"
   - Contact card:
     * "Есть вопросы?"
     * Coordinator contact
     * Telegram/email

8. Bottom CTA section:
   - Full-width, colored background (direction color)
   - Heading: "Начните прямо сейчас"
   - Two buttons:
     * "Оставить заявку" (primary)
     * "Посмотреть мероприятия" (secondary)
   - Trust indicator: "Присоединяйтесь к [X] участникам"

9. SEO optimization:
   - Dynamic metadata (title, description, og:image)
   - Structured data (Organization, Event, Course)
   - Canonical URL
   - Social meta tags

10. Example route params:
    - /neglinka → Неглинка / 38 Меридиан
    - /litprosvet → ЛитПроСвет
    - /astronevod → Астроневод
    - /prazdniki → Праздники / Красота
    - /dzhiva → Джива
    - /marshruty → Ясные маршруты
    - /izvod → Извод
    - /teremok → Теремок тайн

11. Page transitions:
    - Smooth fade-in on route change
    - Sections animate on scroll
    - Hero parallax effect (subtle)

12. Responsive design:
    - Mobile: Single column, no sidebar
    - Tablet: Similar to mobile, larger spacing
    - Desktop: Two-column with sticky sidebar

13. Breadcrumb component:
    - Home icon > Направления > Current
    - Clickable links
    - Current page: Not clickable, different color
    - Mobile: Abbreviated

Create dynamic route page with proper TypeScript types. Use directions-data.ts for content. Implement smooth scroll navigation for sidebar.
```

---

## ПРОМПТ 14: Мобильная адаптация и оптимизация

```
Optimize the entire website for mobile devices and performance.

Requirements:

1. Mobile-first approach review:
   - Check all components for mobile breakpoints
   - Ensure touch targets are at least 44x44px
   - Remove hover-only interactions
   - Add tap/swipe gestures where appropriate

2. Mobile navigation improvements:
   - Hamburger menu: Full-screen overlay
   - Large, tappable menu items
   - Close on link click (navigate to section)
   - Swipe to close support
   - Lock body scroll when menu open

3. Mobile-specific components:

   a) Floating Action Button (FAB):
      - Fixed position, bottom-right
      - Icon: Plus or arrow-up
      - Appears after scroll
      - Opens quick actions menu:
        * Оставить заявку
        * Смотреть мероприятия
        * Подписаться на Telegram
      - Smooth animation (fade + scale)

   b) Bottom navigation (optional, if needed):
      - Fixed at bottom
      - 4-5 main items:
        * Главная
        * Направления
        * События
        * Вступить
      - Active state indicator
      - Icons + text

   c) Mobile drawer for filters:
      - Slide up from bottom
      - Filter options for events, directions
      - Apply/Reset buttons
      - Backdrop blur

4. Touch gestures:
   - Swipe left/right on carousels (testimonials, events)
   - Pull to refresh (if dynamic content)
   - Swipe to close modals
   - Pinch to zoom on images (if applicable)

5. Performance optimization:

   a) Image optimization:
      - Use Next.js Image component everywhere
      - Lazy loading for images below fold
      - WebP format with fallbacks
      - Responsive images (srcset)
      - Placeholder blur while loading

   b) Code splitting:
      - Dynamic imports for heavy components
      - Load modals/forms only when needed
      - Separate chunks for each direction page

   c) Font optimization:
      - Subset fonts (only used characters)
      - Font display: swap
      - Preload critical fonts

   d) Critical CSS:
      - Inline critical CSS for above-fold
      - Defer non-critical CSS

6. Responsive typography:
   - Fluid font sizes using clamp()
   - Scale down on mobile, up on desktop
   - Maintain readability on all devices
   - Line height adjustments for mobile

7. Responsive spacing:
   - Reduce padding/margins on mobile
   - Touch-friendly spacing between interactive elements
   - Max-width containers scale properly

8. Mobile forms optimization:
   - Larger input fields (min 44px height)
   - Proper input types (email, tel, url)
   - Autocomplete attributes
   - Show/hide password toggle
   - Floating labels or placeholders
   - Reduce fields on mobile (only essentials)

9. Modal behavior on mobile:
   - Full-screen or near full-screen
   - Slide up from bottom (not center)
   - Handle keyboard appearance (adjust layout)
   - Close button: Top-left or floating

10. Scroll behavior:
    - Smooth scroll everywhere
    - Scroll to top button (only on mobile)
    - Snap scroll for carousels
    - Prevent horizontal scroll

11. Mobile menu interactions:
    - Direction dropdown: Accordion instead of hover
    - Nested menus: Slide to side
    - Back button in nested menus
    - Search in menu (optional)

12. Loading states:
    - Skeleton screens for content
    - Loading spinner for forms
    - Progressive image loading
    - Optimistic UI updates

13. Offline support (optional, PWA):
    - Service worker for caching
    - Offline page
    - Background sync for form submissions
    - Add to home screen prompt

14. Performance metrics to achieve:
    - Lighthouse score: >90 (mobile)
    - First Contentful Paint: <1.5s
    - Largest Contentful Paint: <2.5s
    - Cumulative Layout Shift: <0.1
    - Time to Interactive: <3.5s

15. Testing:
    - Test on actual devices (iOS, Android)
    - Test on slow 3G network
    - Test with screen readers
    - Test landscape orientation
    - Test different screen sizes (small phones, tablets)

16. Mobile-specific styling utilities:
    - Create Tailwind utilities for touch targets
    - Add iOS safe area insets
    - Handle notch/camera cutouts
    - Consider fold on foldable devices

Review all components and update for mobile. Add performance monitoring with Vercel Analytics or similar. Test thoroughly on real devices.
```

---

## ПРОМПТ 15: Анимации и микроинтеракции

```
Add polished animations and micro-interactions throughout the site to improve UX.

Requirements:

1. Global animation settings:
   - Create /lib/animation-config.ts with presets:
     * Duration: 'fast' (200ms), 'normal' (300ms), 'slow' (500ms)
     * Easing: 'easeIn', 'easeOut', 'easeInOut', 'spring'
     * Stagger: 0.1s (for lists)
   - Respect user's motion preferences (prefers-reduced-motion)
   - Fallback to instant transitions if reduced motion

2. Page transitions:
   - Route change: Fade out → Fade in
   - Direction: Fade old content, wait, fade new content
   - Duration: 300ms
   - Use Next.js layout animations

3. Section entrance animations:
   - Fade in + slide up from bottom
   - Trigger when section is 20% in viewport
   - Stagger children (cards, items) by 100ms
   - Use Framer Motion or Intersection Observer

4. Button interactions:
   - Hover: Scale 1.05 + shadow increase
   - Active: Scale 0.95
   - Ripple effect on click (Material-like)
   - Loading: Spinner + disable pointer events
   - Success: Check icon + green color + scale pulse

5. Card interactions:
   - Hover: 
     * Lift (translateY: -8px)
     * Shadow increase
     * Border color change
   - Click: Scale down (0.98) then back
   - Entrance: Fade + slide up with stagger

6. Form interactions:
   - Input focus:
     * Border color change (300ms)
     * Label float (if floating labels)
     * Subtle shadow
   - Input error:
     * Shake animation (horizontal)
     * Red border slide in
   - Input success:
     * Green border
     * Check icon fade in
   - Submit:
     * Button loading state
     * Form fade out → Success message fade in

7. Modal animations:
   - Open:
     * Backdrop fade in (200ms)
     * Modal scale from 0.9 to 1 (300ms)
     * Content fade in with stagger
   - Close:
     * Modal scale to 0.9 (200ms)
     * Backdrop fade out (300ms)
   - Mobile: Slide up from bottom instead of scale

8. Navigation animations:
   - Header scroll:
     * Shadow fade in
     * Background opacity increase
     * Height reduce (if needed)
   - Menu open:
     * Items stagger from top (100ms delay)
     * Hamburger → X transform
   - Dropdown:
     * Height grow (300ms)
     * Items fade + slide (stagger)

9. Hero section animations:
   - On load (sequence):
     1. Logo fade in (500ms)
     2. Headline words stagger (100ms each)
     3. Subheadline fade in (300ms)
     4. Buttons scale in (200ms, stagger)
     5. Image parallax on scroll
   - Background: Subtle gradient shift

10. Testimonial carousel:
    - Slide transition: Smooth ease-out
    - Auto-play: Fade between slides
    - Dots: Scale active dot
    - Navigation arrows: Hover bounce

11. FAQ accordion:
    - Question hover: Background lighten
    - Answer expand:
      * Height animation (400ms)
      * Content fade in (300ms, delay 100ms)
      * Icon rotate 180°
    - Multiple opens: Smooth height transitions

12. Calendar interactions:
    - Date hover: Background color fade
    - Date click: Ripple from center
    - Events appear: Slide in from right
    - Month change: Fade + slide

13. Scroll-triggered animations:
    - Parallax background elements
    - Counter animations (number count up)
    - Progress bars fill
    - Fade in text blocks

14. Loading states:
    - Skeleton screens:
      * Shimmer animation (left to right)
      * Pulse opacity
    - Spinners: Smooth rotation
    - Progress bars: Width transition

15. Micro-interactions:
    - Social icons:
      * Scale on hover (1.1)
      * Color shift
      * Bounce on click
    - Links:
      * Underline slide in from left
      * Color transition
    - Tags/badges:
      * Hover: Lighten background
      * Click: Quick scale
    - Images:
      * Lazy load: Blur → Clear
      * Hover: Slight zoom (scale 1.05)

16. Success animations:
    - Form submission:
      * Confetti burst (react-confetti)
      * Check icon draw animation
      * Success message scale in
    - Calendar registration:
      * Badge: "Зарегистрирован" fade in
      * Celebration icon bounce

17. Error animations:
    - Form error:
      * Field shake (horizontal wiggle)
      * Error message slide down
      * Icon pulse (red)
    - Network error:
      * Retry button pulse
      * Toast notification slide in

18. Hover states library:
    Create reusable animation variants in /lib/animation-variants.ts:
    - fadeInUp
    - fadeInDown
    - fadeIn
    - slideInLeft
    - slideInRight
    - scaleIn
    - staggerChildren
    - listItemVariants
    - cardVariants
    - buttonVariants

19. Animation performance:
    - Use transform and opacity (GPU-accelerated)
    - Avoid animating width, height, left, top
    - Use will-change sparingly
    - Remove animations on low-end devices (check navigator.hardwareConcurrency)

20. Testing:
    - Test all animations on mobile devices
    - Test with reduced motion enabled
    - Ensure animations don't block interactions
    - Check animation timing feels natural

Implement animations systematically across all components. Use Framer Motion for complex animations, CSS transitions for simple ones. Create a cohesive animation system that feels smooth and professional.
```

---

## ПРОМПТ 16: SEO и мета-теги

```
Implement comprehensive SEO optimization and meta tags.

Requirements:

1. Root layout metadata (/app/layout.tsx):
   - Basic metadata:
     * Title template: "%s | Русская Ясна"
     * Default title: "Русская Ясна — Русское учение о жизни"
     * Description: "Образовательное сообщество для изучения русского языка, истории и культуры. 8 направлений исследований, встречи, натурные уроки, курсы. Присоединяйтесь!"
     * Keywords: "русская культура, русский язык, история России, традиции, образование, ясна"
   
   - Open Graph (Facebook, Telegram):
     * og:title
     * og:description
     * og:image (1200x630px)
     * og:url
     * og:type: "website"
     * og:locale: "ru_RU"
   
   - Twitter Cards:
     * twitter:card: "summary_large_image"
     * twitter:title
     * twitter:description
     * twitter:image
   
   - Additional:
     * Canonical URL
     * Alternate languages (if any)
     * Robots: index, follow
     * Viewport config
     * Theme color

2. Home page metadata (/app/page.tsx):
   - Title: "Главная | Русская Ясна"
   - Description: Rich, keyword-optimized
   - Structured data (JSON-LD):
     * Organization schema
     * WebSite schema
     * BreadcrumbList

3. Direction pages metadata (/app/[slug]/page.tsx):
   - Dynamic title: "[Direction Name] | Русская Ясна"
   - Dynamic description based on direction
   - Unique OG image for each direction
   - Structured data:
     * Organization
     * Course schema (if applicable)
     * BreadcrumbList

4. Structured data examples:

   Organization schema:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Organization",
     "name": "Русская Ясна",
     "url": "https://yasna.ru",
     "logo": "https://yasna.ru/logo.png",
     "description": "...",
     "sameAs": [
       "https://t.me/yasna_official",
       "https://vk.com/yasna",
       "https://dzen.ru/yasna"
     ]
   }
   ```

   Course schema (for Yasna School):
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Course",
     "name": "Ясна-Школа",
     "description": "...",
     "provider": {
       "@type": "Organization",
       "name": "Русская Ясна"
     }
   }
   ```

   Event schema (for events):
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Event",
     "name": "Натурный урок: Кремль",
     "startDate": "2025-01-25T14:00",
     "location": {
       "@type": "Place",
       "name": "Красная площадь",
       "address": {
         "@type": "PostalAddress",
         "addressLocality": "Москва",
         "addressCountry": "RU"
       }
     },
     "organizer": {
       "@type": "Organization",
       "name": "Русская Ясна"
     }
   }
   ```

5. Sitemap generation:
   - Create /app/sitemap.ts
   - Include:
     * Home page
     * All direction pages
     * Static pages (About, Contact, FAQ)
     * Recent events (if applicable)
   - Update frequency and priority

6. Robots.txt:
   - Create /app/robots.ts
   - Allow all pages
   - Point to sitemap
   - Block if needed (admin, drafts)

7. Image optimization for SEO:
   - All images have alt text (descriptive)
   - OG images for social sharing (1200x630)
   - Direction-specific images for cards
   - Compress images (WebP with fallback)
   - Lazy loading below fold

8. Internal linking:
   - Link between related directions
   - Link from home to all main sections
   - Breadcrumbs on all pages
   - Footer links to all pages
   - Contextual links in content

9. URL structure:
   - Clean URLs (no query params for content)
   - Direction slugs: /neglinka, /litprosvet
   - Events: /events/[slug] or /events/[id]
   - Blog/articles: /articles/[slug]
   - Consistent trailing slashes (or no slashes)

10. Performance SEO:
    - Ensure fast loading (Core Web Vitals)
    - Mobile-friendly (Google Mobile-First)
    - HTTPS (should be by default on Vercel)
    - No broken links
    - No duplicate content

11. Analytics setup:
    - Google Analytics 4
    - Yandex.Metrika (for Russian audience)
    - Track key events:
      * Page views
      * Button clicks (CTA)
      * Form submissions
      * Scroll depth
      * Time on page

12. Tracking events (example with GA4):
    - "view_item" for direction pages
    - "select_content" for direction cards
    - "begin_checkout" for signup form start
    - "purchase" for form submission (conversion)
    - Custom events: "join_direction", "register_event"

13. Canonical URLs:
    - Set canonical URL on every page
    - Avoid duplicate content issues
    - Handle trailing slashes consistently

14. Hreflang tags (if multi-language):
    - Not needed if only Russian
    - If adding English: Add hreflang tags

15. RSS feed (optional):
    - Create /app/feed.xml/route.ts
    - Include recent events and articles
    - Auto-update when content changes

16. Social media meta:
    - Telegram: Supports OG tags
    - VK: OG tags + vk:image
    - Dzen: OG tags
    - Ensure images are optimal size

17. Mobile SEO:
    - Viewport meta tag
    - Touch icons (apple-touch-icon)
    - Web app manifest (/app/manifest.ts)
    - Theme color
    - No intrusive interstitials

18. Local SEO (if applicable):
    - Address markup (if physical location)
    - Google My Business (if applicable)
    - Local event schema

19. Monitoring:
    - Google Search Console
    - Yandex.Webmaster
    - Track:
      * Indexing status
      * Search queries
      * Click-through rates
      * Mobile usability
      * Core Web Vitals

20. Checklist:
    - [ ] All pages have unique titles
    - [ ] All pages have descriptions
    - [ ] All images have alt text
    - [ ] Sitemap generated and submitted
    - [ ] Robots.txt configured
    - [ ] Structured data implemented
    - [ ] OG images for all pages
    - [ ] Canonical URLs set
    - [ ] Analytics tracking working
    - [ ] No broken links
    - [ ] Mobile-friendly test passed
    - [ ] Core Web Vitals good

Implement all SEO best practices. Use Next.js built-in features for metadata, sitemap, robots. Test with Google's Rich Results Test and Mobile-Friendly Test.
```

---

## ПРОМПТ 17: Финальная интеграция и полировка

```
Final integration, testing, and polish for the complete website.

Requirements:

1. Final review checklist:
   - [ ] All sections completed:
     * Hero
     * Who is this for
     * Directions showcase
     * How to participate
     * Testimonials
     * Events calendar
     * FAQ
     * Footer
     * Direction pages
   - [ ] All forms working:
     * Signup form
     * Newsletter subscription
     * Event registration
     * Contact form (if any)
   - [ ] All navigation working:
     * Header menu
     * Footer links
     * Internal links
     * Breadcrumbs
     * Back to top
   - [ ] All animations smooth
   - [ ] Mobile fully responsive
   - [ ] SEO implemented

2. Cross-browser testing:
   - Test on:
     * Chrome (latest)
     * Firefox (latest)
     * Safari (latest)
     * Edge (latest)
   - Check:
     * Layout consistency
     * Animation performance
     * Form submissions
     * Modal behavior

3. Device testing:
   - Test on:
     * iPhone (Safari)
     * Android (Chrome)
     * iPad (Safari)
     * Desktop (1920x1080, 1440x900, 1366x768)
   - Check:
     * Touch interactions
     * Scroll behavior
     * Image loading
     * Text readability

4. Accessibility audit:
   - Run Lighthouse accessibility test (>90)
   - Check:
     * All images have alt text
     * All buttons/links have labels
     * Color contrast meets WCAG AA
     * Keyboard navigation works
     * Screen reader compatibility
     * Focus visible on all interactive elements
   - Use axe DevTools for detailed scan

5. Performance optimization:
   - Run Lighthouse performance test (>90)
   - Optimize:
     * Images (compress, WebP, lazy load)
     * Fonts (subset, preload)
     * JavaScript (code split, tree shake)
     * CSS (purge unused, critical CSS)
   - Check bundle sizes (analyze with @next/bundle-analyzer)
   - Target:
     * FCP < 1.5s
     * LCP < 2.5s
     * CLS < 0.1
     * TTI < 3.5s

6. Error handling:
   - Add error boundaries for React errors
   - Create custom error pages:
     * 404 (Not Found)
     * 500 (Server Error)
     * Network error page
   - Handle form submission errors gracefully
   - Add error tracking (Sentry or similar)

7. Loading states:
   - Skeleton screens for:
     * Direction cards while loading
     * Events while loading
     * Testimonials while loading
   - Loading spinners for:
     * Form submissions
     * Data fetching
     * Page transitions
   - Progress indicators where appropriate

8. Empty states:
   - No events found
   - No search results
   - No testimonials for direction
   - Empty form fields
   - Design friendly, helpful empty states with actions

9. Success states:
   - Form submission success
   - Newsletter signup success
   - Event registration confirmation
   - Use positive colors, icons, animations

10. Content management preparation:
    - Organize data files clearly:
      * /lib/directions-data.ts
      * /lib/events-data.ts
      * /lib/testimonials-data.ts
      * /lib/faq-data.ts
    - Add comments for easy editing
    - Consider headless CMS integration later (Sanity, Contentful)

11. Configuration files:
    - Update next.config.js:
      * Image domains
      * Bundle analyzer
      * Compression
      * Redirects (if needed)
    - Update tailwind.config.js:
      * Custom colors
      * Custom fonts
      * Custom breakpoints
    - Update tsconfig.json:
      * Path aliases
      * Strict mode settings

12. Environment variables:
    - Create .env.example with:
      * NEXT_PUBLIC_SITE_URL
      * NEXT_PUBLIC_GA_ID
      * NEXT_PUBLIC_YANDEX_METRIKA_ID
      * EMAIL_SERVICE_API_KEY (if using)
    - Document each variable

13. Documentation:
    - Create README.md with:
      * Project overview
      * Setup instructions
      * Development commands
      * Deployment guide
      * Content editing guide
      * Troubleshooting
    - Add inline code comments where needed

14. Git setup:
    - Initialize git repository
    - Create .gitignore (Next.js template)
    - Ignore:
      * node_modules
      * .next
      * .env.local
      * .vercel
    - Create meaningful commit messages

15. Deployment preparation:
    - Choose platform (Vercel recommended for Next.js)
    - Configure:
      * Environment variables
      * Custom domain
      * SSL certificate
      * Analytics
    - Set up CI/CD (auto-deploy on push)
    - Configure caching
    - Set up error monitoring

16. Testing suite (optional but recommended):
    - Unit tests for utilities
    - Integration tests for forms
    - E2E tests for critical paths:
      * User signup flow
      * Event registration
      * Direction page navigation
    - Use Jest + React Testing Library + Playwright

17. Security checks:
    - No exposed API keys
    - HTTPS only
    - Content Security Policy headers
    - XSS protection
    - Form validation (client + server)
    - Rate limiting on forms (to prevent spam)

18. Final polish:
    - Consistent spacing throughout
    - Consistent colors (match brand)
    - Consistent typography
    - Consistent button styles
    - Consistent hover states
    - Smooth transitions everywhere
    - No console errors/warnings
    - Remove debug code
    - Optimize SVG icons

19. Pre-launch checklist:
    - [ ] All content in Russian (correct grammar)
    - [ ] All links tested (no broken links)
    - [ ] All forms tested (submissions work)
    - [ ] All images optimized
    - [ ] All pages load fast (<3s)
    - [ ] Mobile-friendly
    - [ ] SEO tags correct
    - [ ] Analytics installed
    - [ ] Favicons added
    - [ ] Social share images correct
    - [ ] Legal pages (Privacy, Terms) if needed

20. Launch:
    - Deploy to production
    - Test production URL
    - Submit sitemap to Google/Yandex
    - Monitor analytics
    - Monitor error logs
    - Gather user feedback
    - Plan iterations

Run through all checks systematically. Fix any issues found. Document everything for future maintenance. Create a polished, professional website ready for launch.
```

---

## Порядок выполнения

Выполняйте промпты **последовательно**, начиная с 1 и заканчивая 17. Каждый промпт строится на предыдущем.

**Общие рекомендации:**

1. Используйте TypeScript строго
2. Следуйте Next.js 14 best practices
3. Пишите чистый, читаемый код
4. Используйте Tailwind для всех стилей
5. Делайте компоненты переиспользуемыми
6. Тестируйте после каждого промпта
7. Коммитьте код после каждого этапа

**Примерная оценка времени:**
- Промпты 1-6: 2-3 дня (основа)
- Промпты 7-12: 2-3 дня (детализация)
- Промпты 13-17: 2-3 дня (доработка и оптимизация)

**Итого:** Полноценный сайт за 6-9 дней работы с Cursor.

Удачи! 🚀
