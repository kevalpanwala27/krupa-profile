# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (configured by default)
- `npm run build` - Build the application for production with Turbopack (configured by default)
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Project Architecture

This is a **Next.js 15** company profile website for Krupa Engineering Enterprise, built with the **App Router** architecture and **React 19**.

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **React**: Version 19 
- **Styling**: Tailwind CSS 4.0 with custom design system
- **Animations**: Framer Motion for interactive animations and react-intersection-observer for scroll triggers
- **Icons**: Lucide React
- **Fonts**: Poppins and Inter via next/font/google
- **Build Tool**: Turbopack (enabled by default in dev and build)

### Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Homepage assembling all components
│   └── globals.css        # Global styles and Tailwind imports
├── components/            # React components (.js files)
│   ├── Hero.js           # Landing section with CTA buttons
│   ├── About.js          # Company overview
│   ├── Products.js       # Product showcase
│   ├── Industries.js     # Industry verticals served  
│   ├── WhyChooseUs.js    # Value propositions
│   ├── Clients.js        # Client testimonials
│   ├── Gallery.js        # Project gallery
│   ├── Contact.js        # Contact form and information
│   ├── Navbar.js         # Navigation component
│   └── Footer.js         # Footer component
└── data/
    └── products.js       # Static data exports for products, industries, features, clients
```

### Architecture Patterns

**Single Page Application**: All components are rendered on the homepage (`page.tsx`) in a specific order to create a scrollable single-page experience.

**Component Architecture**: 
- Components are functional React components using ES6 modules
- Mix of `.js` (components) and `.tsx` (app router files) - maintain this pattern
- All components are client-side (`'use client'` directive where needed)
- Smooth scrolling navigation between sections using `scrollIntoView`

**Data Management**:
- Static content exported from `src/data/products.js`
- No external API calls or database - all content is hardcoded
- Data includes: products, industries, whyChooseUs features, and client information

### Custom Design System

**Color Palette** (defined in `tailwind.config.js`):
- Primary: `navy-blue` (#0a1a3c) for backgrounds
- Accent: `orange` variants (#ff6a00, #f97316, #ea580c) for CTAs
- Supporting: steel-gray, various blue/green/purple shades for industries

**Custom Animations** (defined in tailwind.config.js):
- Basic: fade-in, slide-up/down/left/right, scale-in, bounce-in
- Advanced: float, glow-pulse, gradient-shift, card-hover, text-shimmer, rotate-slow, tilt
- Scroll-triggered animations via react-intersection-observer
- Interactive hover effects via Framer Motion

**Typography**:
- Poppins (primary) and Inter fonts loaded via next/font/google
- Font variables: `--font-poppins` and `--font-inter`
- Custom spacing, shadows, and border radius utilities

### Key Implementation Details

- **Navigation**: Navbar with smooth scroll to section anchors
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Performance**: Uses Turbopack for faster development and builds
- **SEO**: Proper metadata setup in root layout for the industrial equipment business
- **Animations**: Scroll-based animations and hover effects throughout

### Business Context
This is a company profile website for "Krupa Engineering Enterprise" - an industrial equipment manufacturer specializing in heat exchangers, pressure vessels, storage tanks, reactors, and custom fabrication for industries like oil & gas, pharmaceutical, chemical, and manufacturing.

### Important Development Notes
- **File Extensions**: Maintain the existing pattern of `.js` for components and `.tsx` for App Router files
- **Font Configuration**: Uses Poppins and Inter fonts with CSS variables, not Geist fonts
- **Turbopack**: Pre-configured in package.json scripts - no need to add `--turbopack` flag manually
- **Data Structure**: All static content is centralized in `src/data/products.js` for easy maintenance