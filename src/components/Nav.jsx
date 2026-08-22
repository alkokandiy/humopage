import { useEffect, useState } from 'react';
import { NAV_LINKS, SOCIALS } from '../data';
import LogoCoin from './LogoCoin';
import { InstagramIcon, TelegramIcon } from './icons';

const socialIcons = {
  Instagram: InstagramIcon,
  Telegram: TelegramIcon,
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  const socials = SOCIALS.filter((s) => socialIcons[s.name]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,123,255,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between" aria-label="Primary">
        <a href="#top" className="flex items-center gap-3" onClick={close} aria-label="Humo Racing home">
          <LogoCoin size={50} />
          <span className="font-display text-xl font-bold uppercase tracking-display text-white">
            Humo<span className="text-aether-light"> Racing</span>
          </span>
        </a>

        <div className="hidden items-center lg:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline font-sans text-[0.85rem] font-medium tracking-[0.1em] text-ink-70 transition-colors hover:text-aether-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <span className="mx-6 h-5 w-px bg-ink-10" aria-hidden="true" />

          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="text-ink-40 transition-colors hover:text-aether-light"
                >
                  <Icon className="h-[20px] w-[20px]" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          {socials.map((social) => {
            const Icon = socialIcons[social.name];
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="text-ink-40 transition-colors hover:text-aether-light"
              >
                <Icon className="h-[20px] w-[20px]" />
              </a>
            );
          })}
          <button
            type="button"
            className="ml-1 flex h-11 w-11 flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className={`h-0.5 w-6 bg-ink-70 transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-ink-70 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-ink-70 transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`lg:hidden overflow-hidden bg-obsidian/95 backdrop-blur-md transition-[max-height] duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="container-x flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="block py-3 font-display text-lg uppercase tracking-display text-ink-70 transition-colors hover:text-aether-light"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
