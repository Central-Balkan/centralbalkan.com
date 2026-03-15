export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="w-full max-w-5xl sm:items-start">
        <div className="flex gap-5 justify-center min-h-screen flex-col items-center py-32 px-16">
          <h1 className="text-5xl font-bold tracking-tight text-lightPrimary sm:text-7xl z-10">
            Централен Балкан
          </h1>
          <h2 className="text-xl font-normal text-lightPrimary dark:text-lightSecondary z-10">
            30 години опит в производството на метални изделия
          </h2>
        </div>
      </main>
    </div>
  );
}
