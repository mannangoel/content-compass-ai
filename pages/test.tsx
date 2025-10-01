import React from 'react';
import Head from 'next/head';
import Input from '@/components/Input';
import BoxReveal from '@/components/BoxReveal';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black p-8">
      <Head>
        <title>Test Components</title>
        <meta name="description" content="Test page for components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-4xl mx-auto space-y-8">
        <BoxReveal boxColor="#3b82f6" duration={0.5}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Component Test Page
          </h1>
        </BoxReveal>

        <BoxReveal boxColor="#3b82f6" duration={0.5}>
          <p className="text-lg text-gray-300 max-w-2xl">
            Testing the Input component and BoxReveal animation
          </p>
        </BoxReveal>

        <div className="mt-12 p-6 bg-black/30 rounded-xl border border-cyan-800/30">
          <h2 className="text-2xl font-bold text-white mb-4">Input Component Test</h2>
          <Input 
            placeholder="Enter some text here..." 
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}