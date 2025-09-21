export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-neutral-200/60 mt-16 py-10 text-sm text-neutral-600">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <p>
          © {new Date().getFullYear()} Manual do Lojista. Todos os direitos reservados.
        </p>
        <nav className="flex items-center gap-4">
          <a href="/privacy-policy" className="hover:text-teal">Privacidade</a>
          <a href="/disclosure" className="hover:text-teal">Disclosure</a>
          <a href="/como-testamos" className="hover:text-teal">Como testamos</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;


