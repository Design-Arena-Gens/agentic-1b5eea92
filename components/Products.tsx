'use client';

import { useTranslations } from 'next-intl';
import { Factory, Hammer, Boxes, Wrench } from 'lucide-react';

export default function Products() {
  const t = useTranslations('products');

  const products = [
    {
      icon: Factory,
      title: t('industrial.title'),
      description: t('industrial.desc'),
      color: 'bg-blue-500',
    },
    {
      icon: Hammer,
      title: t('machinery.title'),
      description: t('machinery.desc'),
      color: 'bg-green-500',
    },
    {
      icon: Boxes,
      title: t('materials.title'),
      description: t('materials.desc'),
      color: 'bg-purple-500',
    },
    {
      icon: Wrench,
      title: t('tools.title'),
      description: t('tools.desc'),
      color: 'bg-orange-500',
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className={`${product.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                <product.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
