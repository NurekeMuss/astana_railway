const features = [
  {
    icon: "verified",
    title: "20+ лет опыта",
    description: "Глубокая экспертиза в аграрной логистике и дистрибуции.",
  },
  {
    icon: "handshake",
    title: "Прямые контракты",
    description:
      "Работаем напрямую с ведущими тепличными хозяйствами Казахстана.",
  },
  {
    icon: "public",
    title: "Международные стандарты",
    description:
      "Наша продукция соответствует высоким требованиям качества и безопасности.",
  },
  {
    icon: "health_and_safety",
    title: "Стабильность и качество",
    description: "Обеспечиваем бесперебойные поставки продукции точно в срок.",
  },
];

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          О компании
        </h2>
        <p className="mt-4 text-base text-text-light/70 md:text-lg dark:text-text-dark/70">
          Мы — ваш надежный партнер в поставках свежих овощей и фруктов из
          Казахстана. Наша миссия — соединять лучших производителей с крупными
          ритейлерами, гарантируя безупречное качество, стабильность поставок и
          прозрачные условия сотрудничества на каждом этапе.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col gap-4 rounded-lg border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-background-dark/50"
          >
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontSize: "32px" }}
            >
              {feature.icon}
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
