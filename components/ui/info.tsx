import { ReactNode } from "react";

export default function Info({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 text-sm flex lg:gap-4 gap-2 flex-col md:flex-row ">
      {children}
    </div>
  );
}
