"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ContactUsButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <Link href="/contacts">
      <button
        className={`bg-background text-darkPrimary z-10 py-2 px-2 rounded-lg text-left cursor-pointer
      transition-opacity duration-200 ease-in
      ${visible ? "opacity-100" : "opacity-0"}`}
      >
        Свържи се с нас
      </button>
    </Link>
  );
};

export default ContactUsButton;
