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

To get started with this project, you'll first need to clone the repository and then follow the setup instructions.

### Clone the Repository

```bash
git clone https://github.com/mannangoel/content-compass-ai.git
cd content-compass-ai
```

### Install Dependencies and Run

The project includes a `package.json` file with all required dependencies. To get started on any device:

1. Navigate to the Project 3 directory:
   ```bash
   cd Project\ 3
   ```
   *Note: On Unix-based systems (macOS, Linux), you might need to use `cd Project/3` instead.*

2. Install dependencies using the package.json file:
   ```bash
   npm install
   ```
   *This command works on Windows, macOS, and Linux systems.*

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5181](http://localhost:5181) in your browser

*Note: Make sure you have Node.js and npm installed on your system before running these commands.*

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
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
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