
const FacebookIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);


const navLinks = [
  { label: "Home",         href: "#" },
  { label: "About Us",     href: "#" },
  { label: "Services",     href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Contact",      href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy",             href: "#" },
  { label: "Terms & Conditions",         href: "#" },
  { label: "Refund & Cancellation Policy", href: "#" },
];

const contactItems = [
  {
    icon: <MapPinIcon />,
    text: "1st Floor, Babunia Road, Siwan, Bihar 841226, India",
  },
  {
    icon: <PhoneIcon />,
    text: "+91 9473370867",
    href: "tel:+919473370867",
  },
  {
    icon: <MailIcon />,
    text: "hello@iffimediaworks.com",
    href: "mailto:hello@iffimediaworks.com",
  },
];

const socials = [
  { icon: <FacebookIcon />,  href: "#", label: "Facebook"  },
  { icon: <InstagramIcon />, href: "#", label: "Instagram" },
  { icon: <LinkedinIcon />,  href: "#", label: "LinkedIn"  },
  { icon: <TwitterIcon />,   href: "#", label: "Twitter"   },
];

export default function Footer() {

  return (
    <footer className="bg-dark text-light relative">

      {/* ── Main footer grid ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* ── Col 1 – Brand ─────────────────────────────────────────────── */}
          <div className="branding">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-5">
              iFFi Media Works
            </h2>
            <p className="text-softDark text-sm leading-relaxed mb-8 max-w-xs">
              Transforming businesses in Bihar with precision-engineered digital
              strategies. We merge data with creativity to build sustainable
              growth engines.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#999] hover:text-white hover:border-[#555] transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2 – Navigation ────────────────────────────────────────── */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] text-[#666] uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#ccc] text-sm hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3 – Legal ─────────────────────────────────────────────── */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] text-[#666] uppercase mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#ccc] text-sm hover:text-white transition-colors duration-200 leading-snug"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4 – Get In Touch ──────────────────────────────────────── */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] text-[#666] uppercase mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-5">
              {contactItems.map(({ icon, text, href }) => (
                <li key={text} className="flex items-center gap-3">
                  {/* Icon bubble */}
                  <span className="shrink-0 w-9 h-9 rounded-full bg-[#1f1f1f] border border-[#2a2a2a] flex items-center justify-center text-[#aaa] mt-0.5">
                    {icon}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-[#ccc] text-sm leading-snug hover:text-white transition-colors duration-200 break-all"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-[#ccc] text-sm leading-snug">
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────────────────────── */}
      <div className="border-t border-[#222]" />

      {/* ── Bottom bar ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] text-[#555]">

          {/* Left cluster */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© 2026 iFFi Media Works.</span>
            <span className="hidden md:inline text-[#333]">|</span>
            <span>IFFI MEDIA WORKS LLP</span>
            <span className="hidden md:inline text-[#333]">|</span>
            <span>All rights reserved.</span>
          </div>

          {/* Centre notice */}
          <p className="text-[#555] text-[11px] max-w-md md:text-center">
            The company operates exclusively in digital marketing, advertising,
            and related business services.
          </p>
        </div>
      </div>

    </footer>
  );
}
