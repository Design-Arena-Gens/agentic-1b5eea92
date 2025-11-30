'use client';

import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t('name')}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder={t('name')}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t('email')}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder={t('email')}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t('phone')}</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder={t('phone')}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t('message')}</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder={t('message')}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                {t('send')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-4 rounded-lg">
                <MapPin className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('address')}</h3>
                <p className="text-gray-600">123 شارع الصناعة، المنطقة الصناعية، الرياض، المملكة العربية السعودية</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-4 rounded-lg">
                <Phone className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('phone')}</h3>
                <p className="text-gray-600">+966 11 234 5678</p>
                <p className="text-gray-600">+966 50 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-4 rounded-lg">
                <Mail className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('email')}</h3>
                <p className="text-gray-600">info@industrialpro.com</p>
                <p className="text-gray-600">support@industrialpro.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-4 rounded-lg">
                <Clock className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('working')}</h3>
                <p className="text-gray-600">السبت - الخميس: 8:00 ص - 6:00 م</p>
                <p className="text-gray-600">الجمعة: مغلق</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
