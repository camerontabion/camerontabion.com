export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-2">
      <p className="text-xs">
        &copy; {new Date().getFullYear()} Cameron Keokolo Tabion
      </p>
    </footer>
  );
}
