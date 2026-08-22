import { NAV_LINKS, SOCIALS } from '../data';
import LogoMark from './LogoMark';
import { InstagramIcon, TelegramIcon } from './icons';

const socialIconMap = {
  Instagram: InstagramIcon,
  Telegram: TelegramIcon,
};

export default function Footer() {
  return (
    <footer className="bg-obsidian">
      <div className="hairline-aether" />
      <div className="container-x">
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <LogoMark className="h-12 w-12" />
              <span className="font-display text-2xl font-bold uppercase tracking-display text-white">
                Humo<span className="text-gold"> Racing</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-60">
              A Formula Student team from Tashkent designing, building and
              racing a single-seater every season.
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-ink-30">Site</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-display text-sm uppercase tracking-display text-ink-60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-ink-30">Follow</h3>
            <ul className="space-y-4">
              {SOCIALS.map((social) => {
                const Icon = socialIconMap[social.name];
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 text-ink-60 transition-colors hover:text-aether-light"
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                      <span className="font-display text-sm uppercase tracking-display">{social.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-ink-30">Contact</h3>
            <ul className="space-y-3 text-sm leading-relaxed text-ink-60">
              <li>
                <a href="mailto:info@humoracing.uz" className="transition-colors hover:text-gold">
                  info@humoracing.uz
                </a>
              </li>
              <li>Tashkent, Uzbekistan</li>
            </ul>
          </div>
        </div>

        <div className="hairline-aether" />
        <div className="flex flex-wrap items-center justify-between gap-4 py-8">
          <p className="text-xs text-ink-30">
            &copy; {new Date().getFullYear()} Humo Racing. All rights reserved.
          </p>
          <p className="font-display text-xs font-bold uppercase tracking-display text-ink-30">
            Built by the team<span className="text-gold">.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
