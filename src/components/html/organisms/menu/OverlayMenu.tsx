"use client";
import useStore from "@/hooks/zustand";
import { motion } from "framer-motion";

export default function OverlayMenu() {
  const menuOpen = useStore((state) => state.menuOpen);
  const toggleMenu = useStore((state) => (state.toggleMenu = "main"));
  return (
    <>
      <button
        className="fixed top-0 right-0 z-50 p-4 bg-red-400 hover:bg-amber-200"
        onClick={toggleMenu}
      >
        Open menu
      </button>
      <motion.div
        animate={{
          x: menuOpen == "main" ? "0vw" : "100vw",
        }}
        className="fixed top-0 left-0 bg-[rgba(75,0,125,0.25)] backdrop-blur-md text-base z-40 h-screen w-screen"
      >
        <button className="p-4 bg-red-400 hover:bg-red-300 font-base">
          Settings
        </button>
        <button className="p-4 bg-red-400 hover:bg-red-300">Language</button>
      </motion.div>
    </>
  );
}
