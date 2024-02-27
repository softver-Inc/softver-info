"use client";

import "../styles/linkstree.css";

const Linkstree = () => {
  const links = [
    {
      href: "https://softver-tech.com/",
      label: "Website",
      icon: "/Vertical.svg",
    },
    {
      href: "https://www.linkedin.com/company/softver/",
      label: "Linkedin",
      icon: "/linkedin.svg",
    },
    {
      href: "tel:+18494741474",
      label: "Contact",
      icon: "/phone.svg",
    },
    {
      href: "mailto:negocios@softver-tech.com",
      label: "Email",
      icon: "/gmail.svg",
    },
    {
      href: "https://www.instagram.com/softver.tech",
      label: "Instagram",
      icon: "/instagram.svg",
    },
    {
      href: "https://github.com/softver-Inc",
      label: "Github",
      icon: "/github.svg",
    },
  ];

  return (
    <div className="softver-links w-full h-screen items-center justify-center flex flex-col z-50">
      <header>
        <img src="/softver.svg" alt="Softver Logo" id="logo" />
      </header>
      <nav id="link-container">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="w-2/3 lg:w-1/4 cursor-pointer"
          >
            <button className="link w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
              bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#00427e_50%,#E2CBFF_100%)]
              "
              />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#bdc7d6] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <img src={link.icon} alt={link.label} />
                <span className="label">{link.label}</span>
              </span>
            </button>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Linkstree;
