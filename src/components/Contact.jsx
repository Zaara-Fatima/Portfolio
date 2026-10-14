import React, { useState } from "react";
import { Icons } from "../assets/assets.jsx"; 

const socials = [
  // Note: Ensure the casing (linkedIn vs LinkedIn) exactly matches 
  // how they are exported in your "../assets/assets" file.
  { label: 'LinkedIn', icon: Icons.linkedIn, href: 'https://www.linkedin.com/in/zaara-f-a828b6363/' },
  { label: 'GitHub', icon: Icons.github, href: 'https://github.com/Zaara-Fatima' },
  { label: 'Instagram', icon: Icons.instagram, href: 'https://instagram.com' }, 
];

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail('');
  };

  return (
    <section className="max-auto w-full  flex flex-col items-center bg-[#14171A] " id="Contact">
      <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-[1fr_380px] md:gap-24 md:pb-18 md:pt-18">
        <div className="flex flex-col">
          <div className="flex  items-center gap-2"><span className="bg-[#C6F27B] rounded-full h-2 w-2" />
          <h2 className="text-[#9BA1A6] text-sm font-medium">
            Have something in mind?
          </h2></div>
          
          <div>
          <h1 className="text-3xl font-bold text-white">
            Let's build something worth using.
          </h1>
          <a 
            href="mailto:banoshabeena318@gmail.com" 
            className="flex gap-2 items-center text-[#C6F27B] hover:underline w-fit"
          >
            <div className="flex gap-2"><p>banoshabeena318@gmail.com</p>
            <span className="material-symbols-outlined">arrow_outward</span></div>
            
          </a>
        </div>
        </div>
        
        

        <div>
          <p className="text-white font-medium">A little signal. No noise.</p>
          <p className="text-gray-400">
            Occasional notes on design, development, and the things I'm
            building. Straight to your inbox.
          </p>
          <form
            onSubmit={onSubmit}
            className="mt-5 flex items-center gap-2 rounded-xl border border-[#1A1D21]  bg-[#0C0E10] p-1"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-[#9BA1A6] placeholder:text-[#9BA1A6] focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg bg-[#C6F27B] px-4 text-sm font-semibold text-ink hover:opacity-90"
            >
              Subscribe
              {/* FIXED: changed 'class' to 'className' */}
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </button>
          </form>
          <p className="mt-4 text-xs text-[#9BA1A6]" role="status">
            {done
              ? "Thanks — you're on the list."
              : "No spam. Unsubscribe whenever you like."}
          </p>
        </div>

        
      </div><div className="flex flex-col gap-5 border-t  py-8 text-xs text-[#9BA1A6] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span>© 2026 Zaara Fatima. All rights reserved.</span>
          </div>
          <p>Designed with intention. Built with care.</p>
          <ul className="flex gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border  text-fg transition-colors hover:bg-soft"
                >
                  {/* Render the icon component dynamically */}
                  {Icon && <Icon  className="h-5 w-5"/>}
                </a>
              </li>
            ))}
          </ul>
        </div>
    </section>
  );
};