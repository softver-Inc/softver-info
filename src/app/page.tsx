"use client";

import { Hero } from "./components/Hero";
import Linkstree from "./components/Linkstree";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero>
        <Linkstree />
      </Hero>
    </main>
  );
}
