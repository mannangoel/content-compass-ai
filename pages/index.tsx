import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import ContentGenerator from '@/components/ContentGenerator';
import BoxReveal from '@/components/BoxReveal';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Content Compass</title>
        <meta name="description" content="AI-powered content generation tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto space-y-8">
        <BoxReveal boxColor="#3b82f6" duration={0.5}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Content Compass
          </h1>
        </BoxReveal>

        <BoxReveal boxColor="#3b82f6" duration={0.5}>
          <p className="text-lg text-gray-300 max-w-2xl">
            Your AI-powered compass for navigating content creation. Generate high-quality blog posts, social media content, emails, and product descriptions in seconds.
          </p>
        </BoxReveal>

        <div className="mt-12">
          <ContentGenerator />
        </div>
      </div>
    </Layout>
  );
}