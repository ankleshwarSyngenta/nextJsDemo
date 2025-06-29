# 🚀 Ankleshwar Portfolio - Next.js

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS featuring smooth animations and interactive elements.

## ✨ Features

- **Modern Design**: Clean, professional layout with dark theme
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations and transitions
- **Interactive Elements**: Particle background effects and hover animations
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **TypeScript**: Fully typed for better development experience
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🏗️ Project Structure

```plaintext
ankleshwar_portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── about-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── hero-section.tsx
│   │   ├── navigation.tsx
│   │   ├── particles-background.tsx
│   │   ├── project-section.tsx
│   │   └── skill-section.tsx
│   ├── lib/
│   │   └── particles-config.ts
│   └── pages/
│       └── portfolio.tsx
├── assets/
│   ├── dp.jpg
│   ├── Aura.png
│   ├── caripharma.png
│   └── Invisibly.png
└── public/
    └── [static files]
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ankleshwardwivedi/ankleshwar_portfolio.git
   cd ankleshwar_portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Sections

- **Hero**: Introduction with animated text and call-to-action
- **About**: Personal information and professional summary
- **Skills**: Technical skills with animated progress bars
- **Experience**: Work history and achievements
- **Projects**: Showcase of recent work with live demos
- **Contact**: Contact form and social links

## 🎨 Customization

### Updating Personal Information

Edit the component files in `src/components/` to update:

- Personal details in `hero-section.tsx`
- About information in `about-section.tsx`
- Skills in `skill-section.tsx`
- Experience in `experience-section.tsx`
- Projects in `project-section.tsx`
- Contact info in `contact-section.tsx`

### Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles: Within each component file

### Animations

- Particle effects: `src/components/particles-background.tsx`
- Animation configs: `src/lib/particles-config.ts`
- Framer Motion animations: Throughout component files

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Connect your repository** to [Vercel](https://vercel.com)
2. **Configure build settings**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Deploy** automatically on every push

### Other Deployment Options

- **Netlify**: Connect repository and deploy
- **GitHub Pages**: Use `gh-pages` for static export
- **Docker**: Use the included Dockerfile

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

---

⭐ Star this repository if you found it helpful!
