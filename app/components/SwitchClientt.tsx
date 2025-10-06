"use client";

import useTheme from "next-theme";
import { useEffect, useState } from "react";

export function SwitchClient() {
  const { theme, setTheme } = useTheme();
  const [icono, setIcono] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setTheme("light");
    setIcono("bi bi-brightness-high-fill");
  }, []);

  const changeTheme = () => {
    setIcono(
      icono === "bi bi-brightness-high-fill"
        ? "bi bi-moon-fill"
        : "bi bi-brightness-high-fill"
    );
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <a role="button" onClick={changeTheme}>
        <i className={`${icono} text-white fs-4`}></i>
      </a>
    </div>
  );
}
