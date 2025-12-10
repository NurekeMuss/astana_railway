import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="@container">
      <div
        className="flex min-h-[560px] flex-col gap-8 rounded-xl bg-cover bg-center bg-no-repeat items-start justify-center p-8 md:p-12"
        style={{
          backgroundImage: `linear-gradient(rgba(247, 244, 239, 0.6) 0%, rgba(247, 244, 239, 0.9) 50%, rgba(247, 244, 239, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDV7iryZ6hNk1J2NqFzjR3vF7Zd4S5gZiWp_xwoOS7ykYqCYx5lm2WnVXaFq-KK1bdgo0Xpblm79GEdsAWtPx5VQgO_hKo_K48rpOXaxdjujifuR9hFUAUAxv7KJwVckaAx1FbV5bA-sUva9p60l6vb-dxBEjxuWBYT-664P-29mt1PzOBo8hJKs4Ws1atTbXXfBwzFEsZgrd99mobM3pzD8RK5mEZQ7Xql-hCKVjsVAS8Mnx4TrVPC9u_LF4SL-kS89Y24ahwN-E8")`,
        }}
      >
        <div className="flex max-w-3xl flex-col gap-4 text-left">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
            Дистрибьютор свежих тепличных овощей и фруктов из Казахстана
          </h1>
          <p className="text-base font-medium text-text-light/70 md:text-lg dark:text-text-dark/70">
            Мы обеспечиваем надежные и стабильные поставки премиальных овощей и
            фруктов напрямую от производителей для крупных торговых сетей.
          </p>
        </div>
        <Link
          href="#contacts"
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:opacity-90"
          style={{ backgroundColor: "#1F4D2B" }}
        >
          <span className="truncate">Связаться</span>
        </Link>
      </div>
    </section>
  );
}
