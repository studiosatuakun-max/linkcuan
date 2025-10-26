export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-8 text-sm text-white/70 flex items-center justify-between">
        <p>© {new Date().getFullYear()} PT Studio Satu Akun • LinkCuan</p>
        <p>Slogan: <span className="text-brand">Satu Link Banyak Cuan</span></p>
      </div>
    </footer>
  );
}
