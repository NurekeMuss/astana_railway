const capabilities = {
  column1: [
    {
      title: "Агро-контрактинг:",
      description: "Планирование и выращивание под заказ.",
    },
    {
      title: "Программные поставки:",
      description: "Долгосрочные контракты с фиксированными объемами.",
    },
    {
      title: "Удаленный контроль качества:",
      description: "Видео- и фото-отчеты на всех этапах.",
    },
    {
      title: "Привлечение сюрвейера:",
      description: "Независимая оценка качества по запросу.",
    },
  ],
  column2: [
    {
      title: "Подбор продукции:",
      description: "Поиск и поставка уникальных сортов и калибров.",
    },
    {
      title: "Обучение производителей:",
      description: "Адаптация под стандарты сетей.",
    },
    {
      title: "Экспортная документация:",
      description: "Полное сопровождение ВЭД.",
    },
    {
      title: 'Логистика "под ключ":',
      description: "От поля до распределительного центра.",
    },
  ],
};

export default function CapabilitiesSection() {
  return (
    <section className="flex flex-col gap-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Наши возможности
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ul className="space-y-4">
          {capabilities.column1.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-1"
                style={{ color: "#7ABF5A" }}
              >
                check_circle
              </span>
              <span>
                <strong className="font-semibold">{item.title}</strong>{" "}
                {item.description}
              </span>
            </li>
          ))}
        </ul>
        <ul className="space-y-4">
          {capabilities.column2.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-1"
                style={{ color: "#7ABF5A" }}
              >
                check_circle
              </span>
              <span>
                <strong className="font-semibold">{item.title}</strong>{" "}
                {item.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
