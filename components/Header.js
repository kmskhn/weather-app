"use client";
import { AiFillMoon, AiFillSun } from "react-icons/ai";
import { useTheme } from "../app/context/ThemeContext";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800">
      <Link href="/" passHref>
        <h1 className="text-xl font-bold cursor-pointer">Weather App</h1>
      </Link>
      <button
        onClick={toggleTheme}
        className="p-2 rounded text-white bg-blue-500 dark:bg-blue-700"
      >
        {theme === "light" ? (
          <AiFillSun />
        ) : (
          <AiFillMoon />
        )}
      </button>
    </header>
  );
}
