// @ts-nocheck
"use client";
import useStore from "@/hooks/zustand";
import { motion } from "framer-motion";

export default function Settings() {
  const menuOpen = useStore((state) => state.menuOpen);
  const toggleMenu = useStore((state) => state.toggleMenu);

  return (
    <motion.div
      animate={{
        x: menuOpen == "conf" ? "0vw" : "100vw",
      }}
      className="fixed top-0 left-0 bg-[rgba(75,0,125,0.25)] backdrop-blur-md text-base z-40 h-screen w-screen flex justify-center items-center flex-col"
    >
      <button className="p-4 bg-red-400 hover:bg-red-300 font-base">
        Settings
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
