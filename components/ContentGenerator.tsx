'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  FileText, 
  Check, 
  AlertCircle, 
  Zap,
  Palette,
  Code,
  Copy,
  Download,
  RotateCw,
  File,
  Mail,
  MessageSquare,
  ShoppingCart,
  ClipboardCheck,
  FileDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Input from '@/components/Input';

type ContentType = 'blog' | 'social' | 'email' | 'product';
type ToneType = 'professional' | 'casual' | 'persuasive' | 'humorous';

// Define the history item structure
interface HistoryItem {
  id: string;
  prompt: string;
  contentType: ContentType;
  tone: ToneType;
  length: number;
  content: string;
  timestamp: string;
}

export default function ContentGenerator() {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState<ContentType>('blog');
  const [tone, setTone] = useState<ToneType>('professional');
  const [length, setLength] = useState(500);
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Save generated content to history
  const saveToHistory = (content: string) => {
    if (typeof window !== 'undefined') {
      const historyItem: HistoryItem = {
        id: Math.random().toString(36).substring(2, 9),
        prompt,
        contentType,
        tone,
        length,
        content,
        timestamp: new Date().toISOString()
      };

      try {
        const savedHistory = localStorage.getItem('contentHistory');
        const history = savedHistory ? JSON.parse(savedHistory) : [];
        history.push(historyItem);
        localStorage.setItem('contentHistory', JSON.stringify(history));
      } catch (e) {
        console.error('Failed to save to history', e);
      }
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setIsGenerating(true);
    setError('');
    setCopied(false);
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          prompt, 
          contentType, 
          tone, 
          length 
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate content');
      }
      
      const data = await response.json();
      setGeneratedContent(data.content);
      
      // Save to history
      saveToHistory(data.content);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to generate content. Please try again.');
      } else {
        setError('Failed to generate content. Please try again.');
      }
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (generatedContent) {
      navigator.clipboard.writeText(generatedContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const downloadContent = (format: 'txt' | 'docx') => {
    if (!generatedContent) return;
    
    const blob = new Blob([generatedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `content-compass-${new Date().toISOString().slice(0, 10)}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const regenerateContent = () => {
    handleGenerate();
  };

  const getContentTypeIcon = (type: ContentType) => {
    switch (type) {
      case 'blog': return <FileText className="w-5 h-5" />;
      case 'social': return <MessageSquare className="w-5 h-5" />;
      case 'email': return <Mail className="w-5 h-5" />;
      case 'product': return <ShoppingCart className="w-5 h-5" />;
      default: return <File className="w-5 h-5" />;
    }
  };

  const getToneColor = (tone: ToneType) => {
    switch (tone) {
      case 'professional': return 'bg-blue-500';
      case 'casual': return 'bg-green-500';
      case 'persuasive': return 'bg-purple-500';
      case 'humorous': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-black border border-cyan-800/30 rounded-xl overflow-hidden shadow-xl shadow-cyan-900/10">
      <div className="bg-gradient-to-r from-gray-900 to-black border-b border-cyan-900/30 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mr-3">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-white font-bold tracking-wide">CONTENT COMPASS</h2>
        </div>
      </div>

      <div className="p-6">
        {/* Prompt Input */}
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Enter your prompt or topic
          </label>
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Benefits of AI in healthcare, Marketing strategies for 2024..."
            className="w-full"
          />
          {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
        </div>

        {/* Content Type Selection */}
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Content Type
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {(['blog', 'social', 'email', 'product'] as ContentType[]).map((type) => (
              <button
                key={type}
                onClick={() => setContentType(type)}
                className={cn(
                  "flex flex-col items-center justify-center p-4 rounded-lg border transition-all",
                  contentType === type
                    ? "border-cyan-400 bg-cyan-400/10"
                    : "border-gray-700 hover:border-gray-500"
                )}
              >
                <div className="text-cyan-400 mb-2">
                  {getContentTypeIcon(type)}
                </div>
                <span className="text-white capitalize">{type}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tone Selection */}
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Tone
          </label>
          <div className="flex flex-wrap gap-3">
            {(['professional', 'casual', 'persuasive', 'humorous'] as ToneType[]).map((t) => (
              <button
                key={t}
                onClick={() => setTone(t)}
                className={cn(
                  "flex items-center px-4 py-2 rounded-full border transition-all",
                  tone === t
                    ? "border-cyan-400 bg-cyan-400/10"
                    : "border-gray-700 hover:border-gray-500"
                )}
              >
                <span className={cn("w-3 h-3 rounded-full mr-2", getToneColor(t))}></span>
                <span className="text-white capitalize">{t}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Length Slider */}
        <div className="mb-8">
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Length: {length} words
          </label>
          <input
            type="range"
            min="200"
            max="1500"
            step="50"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>200</span>
            <span>1500</span>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full py-3 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Generating Content... (This may take a moment)
            </div>
          ) : (
            "Generate Content"
          )}
        </button>

        {/* Generated Content */}
        {generatedContent && (
          <div className="mt-8 border border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-gray-900 border-b border-gray-700 p-3 flex justify-between items-center">
              <h3 className="text-white font-medium">Generated Content</h3>
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  className="p-2 text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <>
                      <ClipboardCheck size={18} />
                      <span className="text-xs">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      <span className="text-xs">Copy</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => downloadContent('txt')}
                  className="p-2 text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  title="Download as TXT"
                >
                  <FileDown size={18} />
                  <span className="text-xs">Download</span>
                </button>
                <button
                  onClick={regenerateContent}
                  className="p-2 text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  title="Regenerate"
                >
                  <RotateCw size={18} />
                  <span className="text-xs">Regenerate</span>
                </button>
              </div>
            </div>
            <div className="p-4 bg-gray-900/50">
              <pre className="whitespace-pre-wrap text-gray-200 font-sans">
                {generatedContent}
              </pre>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-800/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-cyan-400 mt-1" />
              <div>
                <h3 className="text-white font-semibold">Comprehensive Content</h3>
                <p className="text-gray-400 text-sm">Generate detailed, actionable content that provides real value</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-800/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Palette className="w-6 h-6 text-cyan-400 mt-1" />
              <div>
                <h3 className="text-white font-semibold">Multiple Formats</h3>
                <p className="text-gray-400 text-sm">Blog posts, social media, emails & more with detailed structure</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-cyan-800/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Code className="w-6 h-6 text-cyan-400 mt-1" />
              <div>
                <h3 className="text-white font-semibold">Customizable</h3>
                <p className="text-gray-400 text-sm">Adjust tone, length, and style for your specific needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}