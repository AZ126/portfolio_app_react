import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import {cn} from '@/lib/utils';

export const ThemeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  function ToggleTheme() {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme == "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  });
  return <button onClick={ToggleTheme} className={cn("fixed top-5 right-5 z-50 p-2",
    "rounded-full transition-colors duration-300"

  )} >{isDarkMode ? <Sun /> : <Moon />}</button>;
};
