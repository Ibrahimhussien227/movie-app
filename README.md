# Movie & TV Browser App

A modern web application to browse movies and TV shows with search, pagination, and sorting functionalities. Built with **React**, **Redux Toolkit**, **RTK Query**, and **Tailwind CSS**.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [API](#api)

---

## Demo

https://movie-app-six-rouge-99.vercel.app/movie

---

## Features

- Browse movies and TV shows by category
- Search movies or TV shows
- Pagination / Load more
- Sort by:
  - Year (Newest → Oldest)
  - Alphabetically (A → Z)
- Responsive layout
- Skeleton loader while fetching data
- Not Found / No Results handling
- Detail pages for individual movies/TV shows
- Optimized state management with Redux Toolkit & RTK Query

---

## Tech Stack

- **Frontend:** React, Vite, TypeScript
- **State Management:** Redux Toolkit, RTK Query
- **Styling:** Tailwind CSS
- **Icons:** Lucide-React
- **Routing:** React Router
- **API:** The Movie Database (TMDb) API

---

## Project Structure

```
src/
├─ components/         # Reusable components (Header, SearchBar, MovieCard, Genre, Loader)
├─ pages/              # Pages (Home, Category, Details, NotFound)
├─ store/              # Redux Toolkit store, slices, services (RTK Query)
├─ layouts/            # Layout components
├─ hooks/              # Custom hooks
├─ constants/          # Constants (categories, routes)
├─ App.tsx             # Application routes
└─ main.tsx            # Entry point
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/movie-tv-browser.git
cd movie-tv-browser
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file and add your TMDb API key:

```env
VITE_TMDB_API_BASE_URL=api_url_here
VITE_TMDB_API_KEY=your_api_key_here
```

---

## Usage

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

Build for production:

```bash
npm run build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

---

## Scripts

| Script    | Description                |
| --------- | -------------------------- |
| `dev`     | Run development server     |
| `build`   | Build production files     |
| `preview` | Preview production build   |
| `lint`    | Run ESLint                 |
| `format`  | Format code using Prettier |

---

## API

The app uses **TMDb API** to fetch movies and TV shows.  
Endpoints used:

- `/search/movie` → Search movies
- `/search/tv` → Search TV shows
- `/movie/{id}` → Movie details
- `/tv/{id}` → TV details

Refer to [TMDb API Documentation](https://developers.themoviedb.org/3) for more info.

---
