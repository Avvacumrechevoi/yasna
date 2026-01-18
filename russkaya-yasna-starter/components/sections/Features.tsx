'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Star, 
  MapPin, 
  Calendar, 
  Heart, 
  Compass, 
  ScrollText, 
  Home 
} from 'lucide-react'

const directions = [
  {
    name: 'Неглинка',
    description: 'Изучение русского языка и его истории',
    icon: BookOpen,
    href: '/neglinka',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'Литпросвет',
    description: 'Русская литература и словесность',
    icon: ScrollText,
    href: '/litprosvet',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    name: 'Астроневод',
    description: 'Космология и мироустройство',
    icon: Star,
    href: '/astronevod',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    name: 'Праздники',
    description: 'Традиционный календарь и обряды',
    icon: Calendar,
    href: '/prazdniki',
    color: 'bg-red-50 text-red-600',
  },
  {
    name: 'Джива',
    description: 'Здоровье и традиционные практики',
    icon: Heart,
    href: '/dzhiva',
    color: 'bg-green-50 text-green-600',
  },
  {
    name: 'Маршруты',
    description: 'Путешествия по историческим местам',
    icon: MapPin,
    href: '/marshruty',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    name: 'Извод',
    description: 'Генеалогия и родословная',
    icon: Compass,
    href: '/izvod',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    name: 'Теремок',
    description: 'Детское направление',
    icon: Home,
    href: '/teremok',
    color: 'bg-pink-50 text-pink-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Features() {
  return (
    <section id="directions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Наши направления
          </motion.span>
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            8 направлений исследований
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Каждое направление — это уникальный путь познания русской культуры и традиций
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {directions.map((direction) => (
            <motion.a
              key={direction.name}
              href={direction.href}
              className="group p-6 bg-background rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
            >
              <div className={`w-12 h-12 rounded-lg ${direction.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <direction.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                {direction.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {direction.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
