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
        className={`bg-white text-[#333230] z-10 py-3 px-8 rounded-full text-left transition-all duration-200 border border-transparent hover:bg-[#333230] hover:text-white hover:border-white mt-12 cursor-pointer flex items-center gap-2 font-medium
      ${visible ? "opacity-100" : "opacity-0"}`}
      >
        Свържете се с нас
      </button>
    </Link>
  );
};

export default ContactUsButton;
