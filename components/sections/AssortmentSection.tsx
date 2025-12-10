import Image from "next/image";

const products = {
  tomatoes: [
    {
      name: "Томат Биф",
      image: "/images/ТОМАТ_БИФ_(БЫЧЬЕ СЕРДЦЕ).png",
      alt: "Close-up of a large red beef tomato",
    },
    {
      name: "Томат одиночный",
      image: "/images/ТОМАТ_ОДИНОЧКА.png",
      alt: "Several single red tomatoes on a surface",
    },
    {
      name: "Томат на ветке",
      image: "/images/ТОМАТ_ВЕТКА.png",
      alt: "Red tomatoes still attached to the vine",
    },
    {
      name: "Томат Черри",
      image: "/images/ТОМАТ_ЧЕРРИ_(ВЕТКАОДИНОЧКА).png",
      alt: "A handful of bright red cherry tomatoes",
    },
    {
      name: "Томат Черри желтый",
      image: "/images/ТОМАТ_ЧЕРРИ_ЖЕЛТЫЙ.png",
      alt: "A bowl of yellow cherry tomatoes",
    },
  ],
  cucumbers: [
    {
      name: "Огурец среднеплодный",
      image: "/images/ОГУРЕЦ_СРЕДНЕПЛОДНЫЙ_(МЕВА).png",
      alt: "A fresh medium-fruited cucumber",
    },
    {
      name: "Огурец короткоплодный",
      image: "/images/ОГУРЕЦ_КОРОТКОПЛОДНЫЙ_(БЬЕРН).png",
      alt: "Several short, crunchy short-fruited cucumbers",
    },
  ],
  others: [
    {
      name: "Яблоки сортовые",
      image: "/images/ЯБЛОКИ_СОРТОВЫЕ.png",
      alt: "A variety of colorful apples",
    },
    {
      name: "Бахчевые культуры",
      image: "/images/БАХЧЕВЫЕ.png",
      alt: "A cut watermelon and a cantaloupe melon",
    },
  ],
};

interface ProductCardProps {
  name: string;
  image: string;
  alt: string;
}

function ProductCard({ name, image, alt }: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-background-dark/50">
      <div className="relative h-40 w-full">
        <Image
          className="object-cover"
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </div>
      <div className="p-4">
        <p className="font-semibold">{name}</p>
      </div>
    </div>
  );
}

export default function AssortmentSection() {
  return (
    <section className="flex flex-col gap-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Ассортимент продукции
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        <h3 className="border-b border-black/10 pb-2 text-xl font-bold dark:border-white/10">
          Томатная группа
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.tomatoes.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h3 className="border-b border-black/10 pb-2 text-xl font-bold dark:border-white/10">
          Огурцы
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.cucumbers.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h3 className="border-b border-black/10 pb-2 text-xl font-bold dark:border-white/10">
          Другое
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.others.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
