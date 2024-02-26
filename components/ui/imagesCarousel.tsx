import { ReactNode } from "react";

export default function ImagesCarousel({ children }: { children: ReactNode }) {
  return (
    <div className="projects-scroll my-8 flex gap-2 overflow-x-auto py-2 snap-x snap-mandatory">
      {children}
    </div>
  );
}
