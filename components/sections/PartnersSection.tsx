import Image from "next/image";

const kazakhstanPartners = [
  {
    name: "Magnum",
    logo: "https://www.kcell.kz/uploads/2024/12/3/1391aebd47297b5ed2afeacb9aa0d4d9_original.44103.png",
  },
  {
    name: "Small",
    logo: "https://imageproxy.wolt.com/assets/674ee20b633e0d4bb37c639e",
  },
  {
    name: "Spar",
    logo: "https://www.retail.ru/upload/iblock/f6a/mkgdj68uralnvj9mt1d1uc8ba84rrvcy/SPAR_logo.jpg",
  },
  {
    name: "Galmart",
    logo: "https://imageproxy.wolt.com/menu/menu-images/6134b98d5a57cde2251835c3/b70eafc2-f181-11ee-a353-a23666e4743a_193e67ea_e120_11ee_b656_96d1d91b0708___________________.jpeg",
  },
  {
    name: "Arbuz",
    logo: "https://the-steppe.com/wp-content/img-cache/1400/1050/webp/2021/04/a63d2c26997c18759d336d7d010045ac.jpg.webp",
  },
  {
    name: "Solnechniy",
    logo: "https://ltvakcent.kz/base-root-dir/wp-content/uploads/2022/03/40D597DE-2FB3-4134-B72D-B79D9C420273-500x452.jpeg",
  },
  {
    name: "Qazaqstan Catering Solutions",
    logo: "https://elaba24.kz/wp-content/uploads/10-1.jpg",
  },
  {
    name: "Супермаркет Южный Казахстан",
    logo: "https://yuzhni-group.kz/static/logo/header-logo.png",
  },
  {
    name: "Супермаркеты Норман Караганда",
    logo: "https://selprom.kz/upload/iblock/0ce/0xlml4rv28qdefnsihqq7l4uufrg0hlh.png",
  },
];

const russiaPartners = [
  {
    name: "Торговые сети Ярче",
    logo: "https://vkusmart.vmv.kz/upload/iblock/47c/47c9eedbfb94b2e538ef03b6c63da0a1.jpg",
  },
  {
    name: "Торговые сети Мария-Ра",
    logo: "https://www.retail.ru/upload/iblock/fc7/eb2o2z0s5sxgfl2rcu6t66utej9aumve/photo_2023_03_17_18_21_41.jpg",
  },
  {
    name: "Торговые сети X-5",
    logo: "https://dairynews.ru/upload/iblock/f71/zvbus3y7s59sdcdwu2d90m7jdigxynui/x5.png",
  },
];

export default function PartnersSection() {
  return (
    <section className="flex flex-col gap-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Наши партнёры
        </h2>
      </div>

      {/* Казахстан */}
      <div className="flex flex-col gap-6">
        <h3
          className="text-center text-xl font-bold"
          style={{ color: "#1F4D2B" }}
        >
          Казахстан
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {kazakhstanPartners.map((partner, index) => (
            <div
              key={index}
              className="flex h-20 w-36 items-center justify-center md:h-24 md:w-44"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={176}
                height={96}
                className="max-h-full max-w-full object-contain opacity-70 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Россия */}
      <div className="flex flex-col gap-6">
        <h3
          className="text-center text-xl font-bold"
          style={{ color: "#1F4D2B" }}
        >
          Россия
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {russiaPartners.map((partner, index) => (
            <div
              key={index}
              className="flex h-20 w-36 items-center justify-center md:h-24 md:w-44"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={176}
                height={96}
                className="max-h-full max-w-full object-contain opacity-70 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
