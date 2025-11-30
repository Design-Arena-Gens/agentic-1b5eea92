'use client';

import { useTranslations } from 'next-intl';
import { Lightbulb, Settings, Truck, GraduationCap } from 'lucide-react';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      icon: Lightbulb,
      title: t('consulting.title'),
      description: t('consulting.desc'),
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Settings,
      title: t('maintenance.title'),
      description: t('maintenance.desc'),
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Truck,
      title: t('logistics.title'),
      description: t('logistics.desc'),
      color: 'from-green-400 to-green-600',
    },
    {
      icon: GraduationCap,
      title: t('training.title'),
      description: t('training.desc'),
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className={`bg-gradient-to-r ${service.color} p-6`}>
                <service.icon className="text-white" size={48} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
