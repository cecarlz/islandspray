import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { findLatestPosts } from '~/utils/posts';
import { newsArticles } from '~/shared/data/news.data';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Home({}) {
  const posts = await findLatestPosts();
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
      <header>
        <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
          Blog
        </h1>
      </header>
      {/* News Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Industry News</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {newsArticles.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border p-6 shadow hover:shadow-lg transition bg-white"
            >
              {article.image && (
                <img src={article.image} alt={article.title} className="mb-4 w-full h-48 object-cover rounded" />
              )}
              <h3 className="text-lg font-bold mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm">{article.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
