"use client";
import useStore from "@/hooks/zustand";
import { motion } from "framer-motion";

export default function Language() {
  const menuOpen = useStore((state) => state.menuOpen);
  const toggleMenu = useStore((state) => state.toggleMenu);

  const handleLanguage = async (lang: string) => {
    await fetch("/api/set-lang", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lang: lang }),
    });

    // 2. Get current path (e.g., /es-es/about or /about)
    const currentPath = window.location.pathname;

    // 3. Split path and check for language prefix
    const parts = currentPath.split("/").filter(Boolean); // removes empty parts

    // 4. Remove the old lang prefix if it exists
    const knownLangs = ["en-us", "es-es"];
    if (knownLangs.includes(parts[0])) {
      parts.shift(); // remove lang from beginning
    }

    // 5. Construct new path with new lang
    const newPath = `/${lang}/${parts.join("/")}`;

    // 6. Redirect the user
    window.location.href = newPath;
  };

  return (
    <motion.div
      animate={{
        x: menuOpen == "lang" ? "0vw" : "100vw",
      }}
      className="fixed top-0 left-0 bg-[rgba(75,0,125,0.25)] backdrop-blur-md text-base z-40 h-screen w-screen flex justify-center items-center flex-col"
    >
      <button
        className="p-4 bg-red-400 hover:bg-red-300 font-base"
        onClick={(e) => {
          handleLanguage("en-us");
        }}
      >
        Change to english
      </button>
      <button
        className="p-4 bg-red-400 hover:bg-red-300"
        onClick={(e) => {
          handleLanguage("es-es");
        }}
      >
        Cambiar a espaniol
      </button>
      <button
        className="p-4 bg-red-400 hover:bg-red-300 font-base"
        onClick={() => toggleMenu("main")}
      >
        Go back
      </button>
    </motion.div>
  );
}
