# Adam Nuccio's React Portfolio

A responsive, performance-optimized portfolio site built with React 18 and deployed on Netlify at [adamnuccio.com](https://adamnuccio.com). Showcases cloud engineering, data engineering, and applied mathematics work.

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | React 18.2 | Component-based UI with hooks |
| **Routing** | React Router DOM 6.10 | Client-side SPA navigation |
| **Icons** | React Icons 5.2 | SVG icon library (GitHub, LinkedIn) |
| **Fonts** | Google Fonts (Lato, Montserrat, Merriweather) | Typography system |
| **Build** | Create React App (react-scripts 5.0) | Webpack bundling, Babel transpilation, dev server |
| **Linting** | ESLint 8 + Prettier 2.8 | Code quality enforcement via pre-commit hooks (Husky + lint-staged) |
| **Performance** | Web Vitals 3.0 | Core Web Vitals monitoring |
| **Hosting** | Netlify | CI/CD auto-deploy from `main`, CDN, security headers |
| **Optimization** | Claude Code (Opus 4.6) | Mathematical optimization analysis (LP, KKT, Pareto) for bundle and asset allocation |

## Performance Optimization

This codebase was analyzed and optimized using mathematical optimization techniques grounded in real build data:

### Optimization Techniques Applied

1. **Linear Programming (Simplex Method)** -- Modeled asset allocation across images, JavaScript, and CSS as an LP with a 120 KB performance budget. Solved via 3-pivot simplex to find optimal allocation: 55 KB images, 55 KB JS, 10 KB CSS.

2. **Duality & Sensitivity Analysis** -- Derived the dual LP and computed shadow prices for each constraint. Key finding: each additional KB of total budget yields 1.0 quality units (shadow price), valid across the [90 KB, 145 KB] range.

3. **Constrained Nonlinear Optimization (KKT)** -- Maximized a user engagement model `E(q,t) = 10 ln(q+0.1) - 2t^2` subject to quality and load-time constraints. KKT conditions identified the critical bandwidth threshold (3.65 Mbps) where optimal image quality flips from minimum compression to full resolution.

4. **Unconstrained Optimization** -- Modeled CSS render cost as `R(s,d) = 0.01s^2 + 0.5d^3 + 0.1sd`. Gradient analysis showed reducing selector depth is 13.7x more impactful than reducing CSS file size. Compared gradient descent vs Newton's method convergence.

5. **Multi-Objective Nonlinear Programming** -- Pareto-optimized across performance, visual quality, and maintainability. Found that removing dead code and code-splitting routes are "free wins" that improve all objectives simultaneously.

### Concrete Results

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Initial JS (gzipped) | 58.97 KB (1 bundle) | 56.85 KB + route chunks | -3.6% + code splitting |
| Initial CSS (gzipped) | 3.80 KB | 2.26 KB + route chunks | -40.5% |
| Render-blocking CDN CSS | 2 files (~8 KB) | 0 | Eliminated |
| Dead CSS files | 6 files (599 lines) | 0 | Eliminated |
| Unused npm dependencies | 3 packages | 0 | 9 packages removed |
| Route code splitting | None | 3 lazy-loaded routes | Per-page chunking |

### Changes Made

- **Route-level code splitting** with `React.lazy()` and `Suspense` -- each page loads as a separate chunk
- **Removed dead dependencies**: `react-slick`, `slick-carousel`, `emailjs-com`
- **Removed dead source files**: unused CSS (Contact, ContactForm, TestimonialsSlider, Skills, Button) and TestimonialsSlider.jsx
- **Removed unused CDN stylesheets** (slick-carousel) from `index.html`
- **Fixed mismatched image extensions** to match actual file formats (WebP files mislabeled as .png, PNG mislabeled as .jpg)
- **Moved dev tooling** (`eslint`, `prettier`, `eslint-plugin-prettier`) from `dependencies` to `devDependencies`
- **Added `loading="lazy"`** to project card images for below-fold content

## Quick Start

Requires **Node.js >=16 <19**.

```bash
git clone https://github.com/yahm0/AMN-REACT.JS-Portfolio.git
cd AMN-REACT.JS-Portfolio
npm install
npm start
```

Dev server runs at http://localhost:3000.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Development server on port 3000 |
| `npm run build` | Production build to `build/` |
| `npm run lint` | Run ESLint on `src/` |
| `npm run format` | Run Prettier on `src/` |

## Project Structure

```
src/
  App.jsx                # Router root with lazy-loaded routes
  index.jsx              # Entry point (React 18 createRoot)
  pages/
    AboutMe.jsx          # /  -- Landing page with bio and disciplines
    Portfolio.jsx        # /portfolio -- Project cards by category
    Resume.jsx           # /resume -- PDF iframe viewer + download
  components/
    Header.jsx           # Nav bar with site title and social links
    Navigation.jsx       # NavLink items with active state
    Footer.jsx           # Social icons + copyright
    Project.jsx          # Reusable project card (React.memo)
  styles/                # One CSS file per component/page

public/
  assets/
    imgs/                # Profile and background images
    resume/              # Resume PDF
  index.html             # HTML shell with Google Fonts preconnect
```

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | AboutMe | Professional bio, disciplines grid |
| `/portfolio` | Portfolio | Projects grouped by Cloud Engineering, Web Dev, Mathematics |
| `/resume` | Resume | Embedded PDF viewer with download link |

## Deployment

Deployed via Netlify with auto-deploy on push to `main`.

**`netlify.toml` configuration includes:**
- SPA redirect (`/*` to `/index.html`) for React Router
- Security headers (X-Frame-Options, X-XSS-Protection, CSP directives)
- Immutable cache headers for static assets (1-year max-age)
- `CI=false` to prevent ESLint warnings from failing production builds

Live at [adamnuccio.com](https://adamnuccio.com).

## License

MIT
