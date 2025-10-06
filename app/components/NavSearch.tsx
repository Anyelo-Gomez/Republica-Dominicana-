"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NavSearch() {
  const [text, setText] = useState("");
  const route = useRouter();

  useEffect(() => {
    route.push(`lugares?tipo=${text}`);
  }, [text, route]);

  return (
    <nav className="bg-secondary">
      <ul className="d-flex justify-content-end pe-5 py-1">
        <li className="nav-link d-flex gap-4 align-items-center">
          <label htmlFor="inputType" className="text-light">
            Tipo de Lugar
          </label>
          <input
            type="text"
            name="inputType"
            className="form-control rounded border"
            style={{ width: "200px", height: "35px", fontSize: "16px" }}
            onChange={(e) => setText(e.target.value)}
          />
        </li>
      </ul>
    </nav>
  );
}
