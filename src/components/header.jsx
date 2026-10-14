import { useState } from "react";

const links = [
  { label: "Work", href: "#Featured" },
  { label: "About", href: "#About" },
  { label: "Services", href: "#Skills" },
  { label: "Contact", href: "#Contact" },
];

export default function header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="mx-auto w-full px-5 md:px-20 bg-black">
      <div className="relative flex h-25 items-center justify-between border-b border-[#23282d] md:h-26 ">
        <h1 className="text-[20px] font-medium text-[#f4f5f4]">Zaara Fatima</h1>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[#9ca3a8] transition-colors hover:text-[#f4f5f4]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-1 inline-flex h-12 items-center gap-4 rounded-lg bg-[#c8f26f] px-5 text-sm font-semibold text-[#0c0e10] transition-opacity hover:opacity-90"
          >
            Hire Me
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-[#23282d] md:hidden "
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <span className="material-symbols-outlined text-[#c8f26f]">close</span>
          ) : (
            <span className="material-symbols-outlined  text-[#c8f26f]">menu</span>
          )}
        </button>

        {open && (
          <nav
            className="absolute inset-x-0 top-full z-20 flex flex-col gap-1 rounded-b-xl border border-[#23282d] bg-[#14171a] p-3 md:hidden"
            aria-label="Mobile"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-[#9ca3a8] hover:bg-soft hover:text-[#f4f5f4]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex h-11 items-center justify-center gap-3 rounded-lg bg-[#c8f26f] text-sm font-semibold text-[#0c0e10]"
            >
              Hire Me
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
