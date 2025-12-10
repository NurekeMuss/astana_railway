import Image from "next/image";

const partners = [
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
];

export default function PartnersSection() {
  return (
    <section className="flex flex-col gap-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Наши партнёры
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {partners.map((partner, index) => (
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
    </section>
  );
}
