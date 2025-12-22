import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { FooterProps, HeaderProps } from '../types';

// Announcement data removed: no longer used

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'About Us',
      href: '/about',
    },
    {
      label: 'News',
      href: '/blog',
    },
    {
      label: 'Specializations',
      href: '#',
    },
    {
      label: 'Contact Us',
      href: '/contact',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
  ],
  columns: [],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Island Spray Professionals © {new Date().getFullYear()}{' '}
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
          href="https://onwidget.com/"
        >
          {' '}
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};
