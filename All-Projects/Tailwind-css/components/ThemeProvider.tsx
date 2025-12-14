"use client";

import { useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      {children}
    </div>
  );
}
