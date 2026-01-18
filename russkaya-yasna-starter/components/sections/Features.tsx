"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Star,
  Calendar,
  Heart,
  Map,
  FileText,
  Home,
} from "lucide-react";
import Link from "next/link";

const directions = [
  {
    name: "Неглинка",
    description: "Исследование русского языка и его глубинных смыслов",
    icon: BookOpen,
    href: "/neglinka",
    color: "bg-primary-50 text-primary",
  },
  {
    name: "Литпросвет",
    description: "Русская литература и её духовные основы",
    icon: FileText,
    href: "/litprosvet",
    color: "bg-secondary-50 text-secondary-700",
  },
  {
    name: "Астроневод",
    description: "Космология и астрономия в русской традиции",
    icon: Star,
    href: "/astronevod",
    color: "bg-accent-50 text-accent",
  },
  {
    name: "Праздники",
    description: "Русский календарь и народные праздники",
    icon: Calendar,
    href: "/prazdniki",
    color: "bg-primary-50 text-primary",
  },
  {
    name: "Джива",
    description: "Традиционное здоровье и образ жизни",
    icon: Heart,
    href: "/dzhiva",
    color: "bg-secondary-50 text-secondary-700",
  },
  {
    name: "Маршруты",
    description: "Путешествия по святым местам России",
    icon: Map,
    href: "/marshruty",
    color: "bg-accent-50 text-accent",
  },
  {
    name: "Извод",
    description: "Родословие и генеалогические исследования",
    icon: Users,
    href: "/izvod",
    color: "bg-primary-50 text-primary",
  },
  {
    name: "Теремок",
    description: "Традиционный быт и домоводство",
    icon: Home,
    href: "/teremok",
    color: "bg-secondary-50 text-secondary-700",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            8 направлений исследований
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Каждое направление — это глубокое погружение в определённый аспект
            русской культуры и традиций
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {directions.map((direction) => {
            const Icon = direction.icon;
            return (
              <motion.div key={direction.name} variants={itemVariants}>
                <Link
                  href={direction.href}
                  className="block p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-primary-200 transition-all duration-300 group h-full"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${direction.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {direction.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{direction.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
