import { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gradient-to-tr from-blue to-pink px-2 py-1 rounded-full text-white text-sm">
      {children}
    </div>
  );
}
