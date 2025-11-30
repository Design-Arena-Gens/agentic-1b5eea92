'use client';

import { useTranslations } from 'next-intl';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-400">IndustrialPro</h3>
            <p className="text-gray-400 mb-4">{t('description')}</p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('links')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">{nav('home')}</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-primary-400 transition-colors">{nav('products')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">{nav('services')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">{nav('contact')}</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">{nav('products')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>المعدات الصناعية</li>
              <li>الآلات الثقيلة</li>
              <li>المواد الخام</li>
              <li>الأدوات والمعدات</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">{nav('services')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>الاستشارات الصناعية</li>
              <li>الصيانة والدعم</li>
              <li>الخدمات اللوجستية</li>
              <li>التدريب والتطوير</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 IndustrialPro. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
