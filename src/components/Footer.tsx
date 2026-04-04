export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 pt-4">
      <p className="text-center text-white/55 text-xs">
        Open to full-time roles · Freelance &amp; contract
      </p>
      <p className="text-xs">
        &copy; {new Date().getFullYear()} Cameron Keokolo Tabion
      </p>
    </footer>
  );
}
