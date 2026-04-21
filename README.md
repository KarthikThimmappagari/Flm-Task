# 🏢 Companies Directory – Professional Frontend Showcase

A modern, high-performance, and minimalistic Companies Directory application built to demonstrate advanced React.js patterns, premium UI/UX design, and clean architectural practices.

---

## 🚀 Live Features

### 1. **Premium UI/UX Design**
- **Modern Aesthetic**: Built with a "less is more" philosophy using a soft Indigo & Slate color palette.
- **Glassmorphism**: Subtle backdrop blurs and floating elements for a premium, high-end feel.
- **Micro-Animations**: Leverages **Framer Motion** for liquid-smooth transitions, staggered card entries, and scale-up effects on interaction.

### 2. **Advanced Search & Filtering**
- **Omni-Search Bar**: Real-time filtering by company name with deep-debounce-ready architecture.
- **Multi-Category Filters**: Dynamic dropdowns for Industry and Location that adapt to the dataset.
- **Smart Sorting**: Toggleable A-Z/Z-A sorting logic with data integrity safeguards.

### 3. **Interactive Detailed View**
- **Company Modals**: Clicking a card opens a detailed profile featuring expanded descriptions, dynamic contact info, and high-quality avatars.
- **State-Driven Interactions**: Handled via global state to ensure a responsive and "app-like" experience.

### 4. **Professional State Handling**
- **Skeleton Loaders**: Custom-built shimmering skeletons provide a high perceived performance during "data fetching."
- **Robust Error Handling**: Includes a global **Error Boundary** and elegant "No Results Found" fallbacks.

---

## 🛠️ Technical Stack

- **Framework**: [React 19](https://react.dev/) (Vite)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (New CSS-first engine)
- **State Management**: **Context API** with a custom Provider/Consumer pattern (Zero Prop Drilling)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx` and `tailwind-merge` for clean class management

---

## 📂 Project Architecture

The project follows a modular, scalable structure:

```
src/
├── components/     # Reusable UI Atoms and Molecules (Modal, CompanyCard, etc.)
├── context/        # Global State Management (CompanyProvider)
├── data/           # Mock API Data (Mock Database)
├── lib/            # Shared utilities and helper functions
└── App.jsx         # Main Layout and Assembly
```

### **Core Design Decisions**
- **Context API for Global State**: Chosen over Redux for this scale to demonstrate clean prop-less data flow while maintaining low overhead.
- **Tailwind v4 Integration**: Handled via the latest Vite plugin to leverage the ultra-fast CSS-first build process.
- **Performance**: Optimized list rendering with memoized computations for filtering and sorting.

---

## ⚙️ Development Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KarthikThimmappagari/Flm-Task.git
   cd Flm-Task
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173/` (or the port shown in your terminal).

---

## 👤 About the Project
This project was developed to showcase the transition from "functional MVP" to "premium production-grade application." It focuses on the intersection of **clean code**, **user-centric design**, and **optimal performance**.

