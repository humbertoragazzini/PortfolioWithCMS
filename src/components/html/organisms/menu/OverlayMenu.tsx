"use client";
import useStore from "@/hooks/zustand";
import { motion } from "framer-motion";
import Settings from "./Settings";
import Language from "./Language";

export default function OverlayMenu() {
  const menuOpen = useStore((state) => state.menuOpen);
  const toggleMenu = useStore((state) => state.toggleMenu);

  return (
    <>
      <motion.button
        animate={{
          y: menuOpen ? "-100%" : "0%",
        }}
        className="fixed top-0 right-0 z-50 p-4 bg-red-400 hover:bg-amber-200"
        onClick={() => toggleMenu("main")}
      >
        Open menu
      </motion.button>
      <motion.div
        animate={{
          x: menuOpen == "main" ? "0vw" : "100vw",
        }}
        className="fixed top-0 left-0 bg-[rgba(75,0,125,0.25)] backdrop-blur-md text-base z-40 h-screen w-screen flex justify-center items-center flex-col"
      >
        <button
          className="p-4 bg-red-400 hover:bg-red-300 font-base"
          onClick={() => toggleMenu(null)}
        >
          Start
        </button>
        <button
          className="p-4 bg-red-400 hover:bg-red-300 font-base"
          onClick={() => toggleMenu("conf")}
        >
          Settings
        </button>
        <button
          className="p-4 bg-red-400 hover:bg-red-300"
          onClick={() => toggleMenu("lang")}
        >
          Language
        </button>
        <button className="p-4 bg-red-400 hover:bg-red-300">Github</button>
        <button
          className="p-4 bg-red-400 hover:bg-red-300"
          onClick={() => toggleMenu(null)}
        >
          Back
        </button>
      </motion.div>
      <Settings></Settings>
      <Language></Language>
    </>
  );
}
