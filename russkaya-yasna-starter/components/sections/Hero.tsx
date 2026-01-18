"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-primary-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6">
            Русская Ясна
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-light mb-4">
            Русское учение о жизни
          </p>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Образовательное сообщество для изучения русского языка, истории и
          культуры. 8 направлений исследований, встречи, натурные уроки, курсы.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
            Присоединиться
          </Button>
          <Button variant="secondary" size="lg">
            Узнать больше
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
