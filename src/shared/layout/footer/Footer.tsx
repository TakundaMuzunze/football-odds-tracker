export function Footer() {
  const date = new Date().getFullYear();

  return <footer className="bg-surface mt-auto w-full p-10 text-center text-gray-400">Kickoff Tracker © {date} - v0.0.1</footer>;
}

