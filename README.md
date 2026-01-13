# 🚀 Astro Lazy Plugin Showcase

This is a high-performance demonstration site built to showcase the capabilities of [**vite-plugin-astro-prerender**](https://github.com/ishaanparlikar/vite-plugin-astro-prerender).

## ⚡ Overview

This site demonstrates how to use on-demand prerendering to aggressively reduce initial page load times without sacrificing rich content. 

### 🎯 Key Plugin Features Displayed:
- **On-Demand Prerendering**: Components like the high-res gallery and footer are prerendered to static HTML fragments.
- **Tailwind Tree-Shaking**: Optimized, dedicated CSS is generated only for lazy-loaded components.
- **Performance Tracking**: Integrated real-time dashboard monitoring payload reduction and asset weights.
- **Interactive Triggers**: Manual and viewport-based component injection.

## 📊 Performance Metrics

- **Initial Payload Reduction**: ~94%
- **Deferred Assets**: ~5.5MB (High-res Unsplash Gallery)
- **Time to Interaction**: Near-instant for the core landing experience.

## 📂 Project Structure

- `src/components/Lazy/`: Components being prerendered by the plugin.
- `src/components/PerformanceDashboard.astro`: The real-time metric visualization tool.
- `src/pages/performance.astro`: The main interactive demo page.

## 🛠 Running Locally

1. **Install Dependencies**:
   ```sh
   pnpm install
   ```

2. **Start Dev Server**:
   ```sh
   pnpm dev
   ```

3. **Build & Preview**:
   ```sh
   pnpm build
   ```

---

Built with ❤️ by [Ishan Parlikar](https://github.com/ishaanparlikar) using [Astro](https://astro.build).
