"use client";

import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

function ModalCloseButton() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button
      onClick={router.back}
      className="text-white absolute top-[14px] right-[18px] outline-none"
    >
      <X className="size-[20px]" strokeWidth={2} />
    </button>
  );
}

export default ModalCloseButton;