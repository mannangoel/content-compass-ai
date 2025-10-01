import React from 'react';
import Head from 'next/head';
import ContentGenerator from '@/components/ContentGenerator';

export default function GeneratorTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black p-8">
      <Head>
        <title>Content Generator Test</title>
        <meta name="description" content="Test page for content generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Content Generator Test</h1>
        <ContentGenerator />
      </div>
    </div>
  );
}