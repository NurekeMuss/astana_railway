const advantages = [
  { number: "01", title: "Стабильное качество" },
  { number: "02", title: "Прямая работа" },
  { number: "03", title: "Опыт с сетями" },
  { number: "04", title: "Надёжная логистика" },
  { number: "05", title: "Конкурентные цены" },
];

export default function AdvantagesSection() {
  return (
    <section className="flex flex-col gap-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Наши преимущества
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-background-dark/50"
          >
            <span className="text-3xl font-bold" style={{ color: "#7ABF5A" }}>
              {advantage.number}
            </span>
            <h3 className="text-lg font-bold">{advantage.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
