'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-700 rounded-full text-sm font-medium mb-6">
              Образовательное сообщество
            </span>
          </motion.div>

          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Русская Ясна
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Русское учение о жизни
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            8 направлений исследований, встречи, натурные уроки, курсы. 
            Погрузитесь в мир русской культуры, языка и традиций вместе с нами.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg">
              Присоединиться
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="secondary" size="lg">
              Узнать больше
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
