"use client";

import { useEffect, useState } from "react";

export function ButtonToggle() {
  const [icono, setIcono] = useState("");

  useEffect(() => {
    setIcono("bi bi-list");
  }, []);

  const changeIcono = () => {
    setIcono(icono === "bi bi-x-lg" ? "bi bi-list" : "bi bi-x-lg");
  };

  return (
    <a
      className="navbar-toggler border-0"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={changeIcono}
    >
      <i className={`${icono} text-light fs-2`}></i>
    </a>
  );
}
