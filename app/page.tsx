"use client"
import Live from "@/components/Live";

import NavBar from "@/components/NavBar";


export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
        {/* <h1 className="text-white text-8xl">figma clone </h1> */}
        <NavBar/>
        <section className="flex h-full flex-row">
          <Live/>
        </section>
    </main>
  );
}