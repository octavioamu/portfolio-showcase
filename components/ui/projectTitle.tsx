export default function ProjectTitle({ title }: { title: string }) {
  return (
    <h2 className="mb-4 text-2xl font-extrabold tracking-tight saturate-200 bg-gradient-to-r from-blue to-pink bg-clip-text text-transparent inline-block">
      {title}
    </h2>
  );
}
