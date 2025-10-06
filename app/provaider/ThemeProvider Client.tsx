"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-theme";

type Props = {
  children: ReactNode;
};

export default function ThemeProviderClient(props: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {props.children}
    </ThemeProvider>
  );
}
