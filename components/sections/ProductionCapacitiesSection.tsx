const capacities = [
  {
    icon: "potted_plant",
    color: "text-secondary",
    value: "150+ га",
    title: "Современных теплиц",
  },
  {
    icon: "eco",
    color: "text-secondary",
    value: "500+ га",
    title: "Фермерских хозяйств",
  },
  {
    icon: "ios",
    color: "text-accent-red",
    value: "250+ га",
    title: "Яблоневых садов",
  },
  {
    icon: "ac_unit",
    color: "text-accent-yellow",
    value: "1000+ га",
    title: "Бахчевых культур",
  },
];

export default function ProductionCapacitiesSection() {
  return (
    <section className="flex flex-col gap-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Производственные мощности партнёров
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {capacities.map((capacity, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 rounded-lg bg-white p-8 text-center shadow-sm dark:bg-background-dark/50"
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "40px",
                color:
                  capacity.color === "text-secondary"
                    ? "#7ABF5A"
                    : capacity.color === "text-accent-red"
                    ? "#D5433A"
                    : "#F2C94C",
              }}
            >
              {capacity.icon}
            </span>
            <p className="text-5xl font-extrabold" style={{ color: "#1F4D2B" }}>
              {capacity.value}
            </p>
            <h3 className="text-lg font-bold">{capacity.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
