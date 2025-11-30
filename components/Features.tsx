'use client';

import { useTranslations } from 'next-intl';
import { Award, Headphones, DollarSign, Briefcase } from 'lucide-react';

export default function Features() {
  const t = useTranslations('features');

  const features = [
    {
      icon: Award,
      title: t('quality.title'),
      description: t('quality.desc'),
    },
    {
      icon: Headphones,
      title: t('support.title'),
      description: t('support.desc'),
    },
    {
      icon: DollarSign,
      title: t('prices.title'),
      description: t('prices.desc'),
    },
    {
      icon: Briefcase,
      title: t('experience.title'),
      description: t('experience.desc'),
    },
  ];

  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-primary-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
