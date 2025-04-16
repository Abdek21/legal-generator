'use client';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiBriefcase, FiStar, FiChevronRight } from 'react-icons/fi';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 sm:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-indigo-600"
          >
            LegalGen
          </motion.div>
          <ThemeToggle />
        </header>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-6 leading-tight"
          >
            Générez vos documents légaux <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
              en moins de 2 minutes
            </span> ⚡
          </motion.h1>
          
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Conformité RGPD garantie pour votre site web ou e-commerce. 
            <span className="block sm:inline"> Essayez notre générateur gratuit avant de passer à la version Pro.</span>
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Link
              href="/generate"
              className="relative group bg-indigo-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Commencer gratuitement
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
            </Link>
            <Link
              href="/pro"
              className="px-8 py-4 rounded-xl border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition duration-300"
            >
              Découvrir la version Pro
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400"
          >
            <div className="flex items-center gap-1">
              <FiCheckCircle className="text-green-500" />
              <span>Aucune connaissance juridique requise</span>
            </div>
            <div className="flex items-center gap-1">
              <FiCheckCircle className="text-green-500" />
              <span>Conforme aux dernières réglementations</span>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">Tous vos documents légaux en un seul endroit</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Mentions légales",
                description: "Obligatoires pour tout site web, conformes à la loi française",
                icon: <FiBriefcase className="text-2xl" />,
                href: "/generate",
                color: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300"
              },
              {
                title: "CGV",
                description: "Conditions Générales de Vente pour votre e-commerce",
                icon: <FiBriefcase className="text-2xl" />,
                href: "/cgv",
                color: "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300"
              },
              {
                title: "Politique de confidentialité",
                description: "Conforme RGPD pour la protection des données",
                icon: <FiBriefcase className="text-2xl" />,
                href: "/rgpd",
                color: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300"
              },
              {
                title: "Politique de cookies",
                description: "Respect des directives européennes sur les cookies",
                icon: <FiBriefcase className="text-2xl" />,
                href: "/cookies",
                color: "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${feature.color}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${feature.color} bg-opacity-30`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                    <Link 
                      href={feature.href} 
                      className="inline-flex items-center text-sm font-medium hover:underline"
                    >
                      Générer maintenant <FiChevronRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">Ils nous font confiance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Un gain de temps incroyable pour mon entreprise. Mes documents sont prêts en quelques clics !",
                author: "Marie D., E-commerçante",
                rating: 5
              },
              {
                quote: "Enfin un générateur qui parle clairement et simplement. Parfait pour les indépendants comme moi.",
                author: "Thomas L., Freelance",
                rating: 5
              },
              {
                quote: "La version Pro m'a sauvé la vie pour mon audit RGPD. Je recommande à 100%.",
                author: "Sophie R., Startup",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="fill-current" />
                  ))}
                </div>
                <blockquote className="italic text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-gray-500 dark:text-gray-400">
                  — {testimonial.author}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Prêt à sécuriser votre site web ?</h2>
            <p className="mb-6 text-indigo-100 max-w-2xl mx-auto">
              Essayez notre générateur gratuitement dès maintenant ou découvrez les avantages de la version Pro.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/generate"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
              >
                Commencer gratuitement
              </Link>
              <Link
                href="/pro"
                className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition duration-300"
              >
                Voir les tarifs Pro
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}