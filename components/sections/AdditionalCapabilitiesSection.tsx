const additionalCapabilities = [
  {
    icon: "inventory_2",
    title: "Аккуратная укладка",
    description: "Коробки размещены аккуратно.",
  },
  {
    icon: "checklist",
    title: "Соблюдение требований",
    description: "Выполнение стандартов сетей.",
  },
  {
    icon: "qr_code_2",
    title: "Опытная маркировка",
    description: "Знание требований ритейлеров.",
  },
];

export default function AdditionalCapabilitiesSection() {
  return (
    <section className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Дополнительные возможности
        </h2>
        <p className="text-text-light/70 dark:text-text-dark/70">
          Мы предлагаем формирование микс-ассортимента, организацию сборных
          грузов, разработку долгосрочных программ поставок, а также подбор
          продукции под конкретные требования клиента и обучение производителей
          стандартам сетей.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
        {additionalCapabilities.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm dark:bg-background-dark/50"
          >
            <span
              className="material-symbols-outlined rounded-full p-3"
              style={{
                backgroundColor: "rgba(122, 191, 90, 0.1)",
                color: "#7ABF5A",
              }}
            >
              {item.icon}
            </span>
            <div>
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
