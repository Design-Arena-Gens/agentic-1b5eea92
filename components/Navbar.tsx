'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const currentLocale = pathname.split('/')[1] || 'ar';

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const changeLanguage = (locale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPathname);
    setShowLangMenu(false);
  };

  const navItems = [
    { label: t('home'), href: `/${currentLocale}` },
    { label: t('products'), href: `/${currentLocale}#products` },
    { label: t('services'), href: `/${currentLocale}#services` },
    { label: t('contact'), href: `/${currentLocale}#contact` },
    { label: t('dashboard'), href: `/${currentLocale}/dashboard` },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href={`/${currentLocale}`} className="text-2xl font-bold text-primary-600">
              IndustrialPro
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Globe size={20} />
                <span>{languages.find(l => l.code === currentLocale)?.flag}</span>
              </button>

              {showLangMenu && (
                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg py-2 min-w-[150px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full text-right px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
