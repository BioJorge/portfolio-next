export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h1>Project Layout with additional info below</h1>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
    </>
  );
}
