import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FileText, Copy, Download, Trash2, Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HistoryItem {
  id: string;
  prompt: string;
  contentType: string;
  tone: string;
  length: number;
  content: string;
  timestamp: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const router = useRouter();

  // Load history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('contentHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to parse history from localStorage', e);
      }
    }
  }, []);

  const copyToClipboard = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadContent = (content: string, prompt: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated-content-${prompt.replace(/\s+/g, '-').toLowerCase()}-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const deleteItem = (id: string) => {
    const updatedHistory = history.filter(item => item.id !== id);
    setHistory(updatedHistory);
    localStorage.setItem('contentHistory', JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    if (confirm('Are you sure you want to clear all history?')) {
      setHistory([]);
      localStorage.removeItem('contentHistory');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black p-8">
      <Head>
        <title>Content History</title>
        <meta name="description" content="View your generated content history" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Content History</h1>
          {history.length > 0 && (
            <button
              onClick={clearHistory}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <Trash2 size={18} />
              Clear All
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="bg-black/30 border border-cyan-800/30 rounded-xl p-12 text-center">
            <FileText className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">No History Yet</h2>
            <p className="text-gray-400 mb-6">Generate some content to see it appear here</p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all"
            >
              Generate Content
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {[...history].reverse().map((item) => (
              <div key={item.id} className="bg-black/30 border border-cyan-800/30 rounded-xl overflow-hidden">
                <div className="p-4 bg-gray-900/50 border-b border-gray-700 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <FileText size={20} />
                      <span className="font-medium text-white capitalize">{item.contentType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{formatDate(item.timestamp)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock size={16} />
                      <span>{item.length} words</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyToClipboard(item.content, item.id)}
                      className="flex items-center gap-1 px-3 py-1.5 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700"
                    >
                      {copiedId === item.id ? (
                        <>
                          <span className="text-xs">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          <span className="text-xs">Copy</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => downloadContent(item.content, item.prompt)}
                      className="flex items-center gap-1 px-3 py-1.5 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700"
                    >
                      <Download size={16} />
                      <span className="text-xs">Download</span>
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="flex items-center gap-1 px-3 py-1.5 text-gray-400 hover:text-red-400 transition-colors rounded-lg hover:bg-gray-700"
                    >
                      <Trash2 size={16} />
                      <span className="text-xs">Delete</span>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-3">
                    <span className="text-cyan-400 font-medium">Prompt:</span>
                    <span className="text-white ml-2">{item.prompt}</span>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4 max-h-60 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-gray-200 font-sans text-sm">
                      {item.content}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}