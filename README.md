# Content Compass

A full-stack AI Content Generation Web Application using Next.js + TypeScript + Tailwind CSS.

## Features

- Dashboard UI with sidebar and top navigation
- Content Generator with:
  - Prompt/topic/keywords input
  - Content type selection (Blog Post, Social Media, Email, Product Description)
  - Tone/style selection (Professional, Casual, Persuasive, Humorous)
  - Word count adjustment
  - Generate button to produce AI content
- Generated Content Output with options to:
  - Copy to clipboard
  - Download as .txt
  - Regenerate content
- Content History: View and manage previously generated content
- Backend API using Next.js API routes
- Responsive design with Tailwind CSS

## Tech Stack

- Frontend: Next.js + TypeScript + Tailwind CSS + framer-motion + lucide-react
- Backend: Next.js API Routes
- State Management: React hooks
- Styling: Tailwind CSS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5181](http://localhost:5181) in your browser

## Project Structure

```
├── components/
│   ├── ContentGenerator.tsx
│   ├── Input.tsx
│   ├── BoxReveal.tsx
│   └── Layout.tsx
├── lib/
│   └── utils.ts
├── pages/
│   ├── index.tsx
│   ├── _app.tsx
│   ├── test.tsx
│   ├── generator-test.tsx
│   ├── history.tsx
│   └── api/
│       └── generate.ts
├── styles/
│   └── globals.css
├── public/
└── package.json
```

## API Integration

The application includes a mock API endpoint at `/api/generate`. To use a real AI service like OpenAI:

1. Add your API key to `.env.local`:
   ```
   OPENAI_API_KEY=your_openai_api_key
   ```

2. Uncomment the OpenAI API code in `pages/api/generate.ts`

## Deployment

The application can be deployed to Vercel, Netlify, or any other platform that supports Next.js.