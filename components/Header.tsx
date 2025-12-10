import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-black/10 bg-background-light/80 py-4 backdrop-blur-sm dark:border-white/10 dark:bg-background-dark/80">
      <div className="flex items-center gap-4">
        <div className="size-6" style={{ color: "#1F4D2B" }}>
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          Astana Railway Group
        </h2>
      </div>
      <Link
        href="#contacts"
        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:opacity-90"
        style={{ backgroundColor: "#1F4D2B" }}
      >
        <span className="truncate">Связаться</span>
      </Link>
    </header>
  );
}
