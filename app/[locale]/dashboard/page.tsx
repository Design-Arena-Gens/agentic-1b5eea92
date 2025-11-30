'use client';

import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import { BarChart3, Package, ShoppingCart, Users, TrendingUp, DollarSign } from 'lucide-react';

export default function Dashboard() {
  const t = useTranslations('dashboard');

  const stats = [
    { label: t('stats.revenue'), value: '$125,430', icon: DollarSign, change: '+12.5%', color: 'bg-green-500' },
    { label: t('stats.orders'), value: '342', icon: ShoppingCart, change: '+8.2%', color: 'bg-blue-500' },
    { label: t('stats.products'), value: '1,234', icon: Package, change: '+3.1%', color: 'bg-purple-500' },
    { label: t('stats.customers'), value: '856', icon: Users, change: '+15.3%', color: 'bg-orange-500' },
  ];

  const recentOrders = [
    { id: '#12345', customer: 'أحمد محمد', product: 'معدات صناعية', status: 'مكتمل', amount: '$2,400' },
    { id: '#12346', customer: 'Sarah Johnson', product: 'Heavy Machinery', status: 'معلق', amount: '$5,800' },
    { id: '#12347', customer: 'محمد علي', product: 'مواد خام', status: 'قيد المعالجة', amount: '$1,200' },
    { id: '#12348', customer: 'Marie Dubois', product: 'Outils Industriels', status: 'مكتمل', amount: '$3,600' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('title')}</h1>
          <p className="text-gray-600 mt-2">{t('overview')}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart3 className="text-primary-600" />
              {t('reports')}
            </h2>
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
              <p className="text-gray-600">تقارير المبيعات الشهرية</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="text-green-600" />
              نمو الإيرادات
            </h2>
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <p className="text-gray-600">مخطط نمو الإيرادات</p>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t('orders')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">رقم الطلب</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">العميل</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">المنتج</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">الحالة</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">المبلغ</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-primary-600 font-semibold">{order.id}</td>
                    <td className="py-3 px-4">{order.customer}</td>
                    <td className="py-3 px-4">{order.product}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'مكتمل' ? 'bg-green-100 text-green-700' :
                        order.status === 'معلق' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
