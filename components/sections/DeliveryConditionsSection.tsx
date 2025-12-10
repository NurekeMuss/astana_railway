const delivery = [
  { icon: "local_shipping", text: "Перевозка рефрижераторами" },
  { icon: "public", text: "Условия поставки DAP/FCA" },
  { icon: "schedule", text: "Точное соблюдение сроков" },
  { icon: "thermostat", text: "Строгий температурный контроль" },
];

const service = [
  { icon: "support_agent", text: "Индивидуальный подход к клиенту" },
  { icon: "rocket_launch", text: "Оперативная отгрузка" },
  { icon: "edit_calendar", text: "Возможность предзаказа" },
  { icon: "payments", text: "Гибкие условия оплаты" },
];

export default function DeliveryConditionsSection() {
  return (
    <section className="flex flex-col gap-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Условия доставки и сервиса
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 rounded-xl bg-white p-8 shadow-sm md:grid-cols-2 md:p-12 dark:bg-background-dark/50">
        <div>
          <h3 className="mb-4 text-xl font-bold" style={{ color: "#1F4D2B" }}>
            Доставка
          </h3>
          <ul className="space-y-3">
            {delivery.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined mt-1 text-lg"
                  style={{ color: "#7ABF5A" }}
                >
                  {item.icon}
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold" style={{ color: "#1F4D2B" }}>
            Сервис и сотрудничество
          </h3>
          <ul className="space-y-3">
            {service.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined mt-1 text-lg"
                  style={{ color: "#7ABF5A" }}
                >
                  {item.icon}
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
