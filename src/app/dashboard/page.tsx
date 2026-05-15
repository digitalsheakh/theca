'use client';

import Link from 'next/link';
import {
  ArrowLeftIcon,
  BookOpenIcon,
  Cog6ToothIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline';

const quickLinks = [
  {
    title: 'Back To Main Site',
    description: 'Return to the public website.',
    icon: ArrowLeftIcon,
    accent: 'from-orange-500 to-orange-600',
    actions: [
      {
        label: 'Go To Site',
        href: '/',
      },
    ],
  },
  {
    title: 'Blog',
    description: 'Open blog management.',
    icon: BookOpenIcon,
    accent: 'from-amber-500 to-orange-500',
    actions: [
      {
        label: 'Add Blog',
        href: '/dashboard/add-blog',
      },
      {
        label: 'Blog List',
        href: '/dashboard/blog-list',
      },
    ],
  },
  {
    title: 'Video',
    description: 'Open video management.',
    icon: PlayCircleIcon,
    accent: 'from-blue-500 to-blue-600',
    actions: [
      {
        label: 'Add Video',
        href: '/dashboard/add-video',
      },
      {
        label: 'Video List',
        href: '/dashboard/video-list',
      },
    ],
  },
  {
    title: 'Setting',
    description: 'Open system settings.',
    icon: Cog6ToothIcon,
    accent: 'from-gray-700 to-gray-900',
    actions: [
      {
        label: 'Open Setting',
        href: '/dashboard/system-setting',
      },
    ],
  },
];

export default function DashboardPage() {
  return (
    <div className="border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100/50 px-6 py-6">
        <h1 className="font-orbitron text-2xl font-bold uppercase tracking-wider text-gray-900 sm:text-3xl">
          Quick Access
        </h1>
        <p className="mt-2 font-rajdhani text-sm text-gray-600">
          Jump straight to the main dashboard sections.
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;

            return (
              <div
                key={link.title}
                className="group overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${link.accent}`} />
                <div className="p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className={`bg-gradient-to-br ${link.accent} p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-rajdhani text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                      Quick Link
                    </span>
                  </div>

                  <h2 className="font-orbitron text-lg font-bold uppercase tracking-wide text-gray-900">
                    {link.title}
                  </h2>
                  <p className="mt-2 min-h-12 font-rajdhani text-sm text-gray-600">
                    {link.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {link.actions.map((action, index) => (
                      <Link
                        key={action.href}
                        href={action.href}
                        className={index === 0
                          ? 'inline-flex items-center justify-center w-full bg-orange-600 px-4 py-2 font-rajdhani text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-orange-700'
                          : 'inline-flex items-center justify-center w-full border border-orange-600 px-4 py-2 font-rajdhani text-sm font-bold uppercase tracking-wider text-orange-600 transition-colors duration-300 hover:bg-orange-50'
                        }
                      >
                        {action.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}