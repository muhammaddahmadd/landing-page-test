# KlipAI Landing Page

A modern, responsive landing page for KlipAI built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates pixel-perfect implementation of a Figma design with focus on responsiveness, accessibility, and performance.

## 🚀 Live Demo

[Deploy to Vercel](https://landing-page-test-ai.vercel.app/)

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with TypeScript interfaces
- **Images**: Next.js Image component for optimization
- **Icons**: SVG icons and Lucide React
- **Deployment**: Vercel

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd landing-page-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System & Implementation

### Color Palette
- **Primary Green**: `#12ED39` (CTA buttons)
- **Background**: `#FFFFFF` (white)
- **Text Primary**: `#000000` (black)
- **Text Secondary**: `#6B7280` (neutral-700)
- **Card Background**: `#171717` (neutral-900)
- **Accent Green**: `#119200` (benefit button border)

### Typography
- **Font Family**: Sora (custom font)
- **Headings**: 
  - Hero: `text-[2.8rem] sm:text-5xl font-extrabold`
  - Section: `text-4xl font-bold`
  - Card: `text-[36px] font-normal`
- **Body Text**: `text-base sm:text-lg md:text-xl`

### Spacing System
- **Section Padding**: `py-20`
- **Container Max Width**: `max-w-7xl`
- **Card Border Radius**: `rounded-[20px]`
- **Button Border Radius**: `rounded-[28px]`

### Responsive Breakpoints
- **Mobile**: `375px - 767px`
- **Tablet**: `768px - 1023px`
- **Desktop**: `1024px+`

## 🏗️ Component Architecture

### File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   └── Header.tsx      # Navigation component
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section with floating cards
│   │   ├── Benefits.tsx    # Benefits grid section
│   │   └── Partners.tsx    # Partners logos section
│   └── ui/
│       └── Button.tsx      # Reusable button component
```

### Key Components

#### Header Component
- Sticky navigation with mobile menu
- Responsive logo and navigation items
- Mobile hamburger menu with overlay
- Proper accessibility attributes

#### Hero Section
- Radial gradient background
- Layered 3D elements with proper z-index
- Floating crypto cards with backdrop blur
- Responsive phone mockups
- "What is KlipAi" subsection

#### Benefits Section
- Grid layout with one large card and stacked smaller cards
- Background gradient effects
- Optimized images with Next.js Image component
- Responsive card dimensions

#### Partners Section
- Centered logo grid
- Consistent spacing and sizing
- Responsive logo display

## 🎯 Design Decisions

### 1. Mobile-First Approach
- Started with mobile breakpoint (375px)
- Scaled up to tablet (768px) and desktop (1024px+)
- Used responsive Tailwind classes throughout

### 2. Image Optimization
- Used Next.js Image component for all images
- Implemented proper `alt` attributes for accessibility
- Optimized image loading with `priority` for above-the-fold content

### 3. Component Reusability
- Created reusable components with TypeScript interfaces
- Implemented consistent prop patterns
- Used composition over inheritance

### 4. Accessibility
- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly content

### 5. Performance Considerations
- Lazy loading for below-the-fold images
- Optimized bundle size with proper imports
- Efficient CSS with Tailwind's utility classes

## 🔧 Technical Implementation

### Next.js Features Used
- **App Router**: Modern routing with layout system
- **Image Component**: Automatic optimization and lazy loading
- **TypeScript**: Full type safety throughout
- **CSS Modules**: Scoped styling with Tailwind

### Performance Optimizations
- Image optimization with Next.js Image component
- Proper loading strategies (priority for hero images)
- Efficient CSS with Tailwind's purge
- Minimal JavaScript bundle

### Cross-Browser Compatibility
- Modern CSS features with fallbacks
- Flexible layouts that work across browsers
- Progressive enhancement approach

## 🤖 AI Assistance Documentation

This project was developed with significant AI assistance. See [AI_USAGE.md](./AI_USAGE.md) for detailed documentation of:
- AI tools used (Claude, GitHub Copilot)
- Specific prompts and their effectiveness
- Code sections generated with AI assistance
- Validation and refinement processes
- Problem-solving with AI

## 📱 Responsive Design

### Mobile (375px - 767px)
- Single column layouts
- Stacked navigation
- Optimized touch targets
- Simplified floating cards

### Tablet (768px - 1023px)
- Two-column layouts where appropriate
- Enhanced navigation
- Improved card layouts

### Desktop (1024px+)
- Full multi-column layouts
- Enhanced visual effects
- Optimal spacing and typography

## ⚠️ Known Issues & Limitations

### Current Limitations
1. **Font Loading**: Sora font may not be available on all systems
2. **Image Optimization**: Some images could be further optimized
3. **Animation**: Limited micro-interactions and transitions
4. **Browser Support**: Some CSS features may not work in older browsers

### Assumptions Made
1. **Design System**: Assumed consistent spacing and typography from Figma
2. **Color Accuracy**: Used provided hex values for colors
3. **Image Assets**: Assumed all images are available in public/images/
4. **Responsive Behavior**: Extrapolated mobile/desktop behavior from provided design

### Future Improvements
1. Add loading states and error boundaries
2. Implement more micro-interactions
3. Add comprehensive testing
4. Optimize images further
5. Add more accessibility features

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Deploy automatically on push to main branch

### Environment Variables
No environment variables required for this project.

## 📄 License

This project is for demonstration purposes only.

## 🤝 Contributing

This is a demonstration project. For questions or feedback, please refer to the AI usage documentation.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
