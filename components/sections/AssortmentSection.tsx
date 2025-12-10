import Image from "next/image";

const products = {
  tomatoes: [
    {
      name: "Томат Биф",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA_w90PyaXuaWOYbSexDfYZvpd7lC6oe45stHndq9_CqzIOt2NP-StfZ6Nyda0NJEuva6o1yuZKpWxe8aGQT4HU6TBeICQOC1pYo9ktDVNMkOn2skC29QQdcLKSSUz3OWJzYhrG6s0gewW-lnjlPo25v8Qk5e6fk1py5hXeD6Gz2EC3EnZUxopTRf00KMY9xGuUqksAFJ7oFUZn1iJypA3TgaooODNu8xdcOHVqeGCssOIEUO3g2y6K32gmgWgW0GmkeYVlgnMkOg0",
      alt: "Close-up of a large red beef tomato",
    },
    {
      name: "Томат одиночный",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcVXaQmKNgtczq7_szmjj_sRGZpv_qM71bZwK0hTFbaUgQdPs3WtN_ipH_gLAT7CA4JExus-shkb7CD9MBdZu5CdxL_gG5IAwls7GASgBKWmxvhRphstbSKUG1F-_7_bbyNI0Dxxo94wm6RwZXJjf8CdtJQbV9LFwSdtfjcmlDy53xUFl1Tv7-JdKGVm3YhISsLbcdFXmseDJB1vkZp80hzOYtxHvdvpdWk3TxPEHdJqtMjsZEJLxEeadGJqm7AEWwYUG2Hfexu5E",
      alt: "Several single red tomatoes on a surface",
    },
    {
      name: "Томат на ветке",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBij8y0esocQHO8zO2ImCf8B3ZJOJ5aWF31oy2rvedfUIP97V2ODlv0MYWpLL2Y9oo3gcZzJWiXCLL41x00hySNu0M2XguqyQuMsUMdkx93qSYOLj-29vMBZLvVrXzalnMRyX_USrHXy4Vochf6VJILxkPUo_br07MyXutaBn32tFECnzAegF0SO9imlj2pJXcqgc2zLlyXZ7wE8XgLnSgRYEcOwYZ2cvE-o8YSiAmoSjsokg-jTKfuDym7fXJeHUF1m4vpTThosEA",
      alt: "Red tomatoes still attached to the vine",
    },
    {
      name: "Томат Черри",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCI7PSIxbuAaporKRwV-Va8Xu_WZ2zHidJZRHcj3XalkHWv64rLwrLqlIqvywpcHYu_blTfdT8TeaTciiEIQhMoGLJwd4_6Ag29jWfXKJOVAfigdwYVMDIdhIaoaVDgjZTgAdwQikBmM-0vPc-JkIFdiXFq8FOyzT-Ebh7Ji9O2kmhbzoA5eeQyFCyruuxzuY9OHD9m33WY0q32okDICggVOiw9wX_AHeTmY0ODPLhaQxW6J3qNV28ZkWCAE1miMboAWiIHe2q1i8I",
      alt: "A handful of bright red cherry tomatoes",
    },
    {
      name: "Томат Черри желтый",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCrUpreeRp2aV-g26QmyXJ_0ymUGYz9SvVCwieKP7PVESwa0Itx2e4_LsbBU1pXkrswE4ZsqmMu9YxmLXujQRBlGjIdSZESGFNMArZUeN1Z-xlo1CyklUvbl625ZAO-F146jkEK4MAzO_f_3n6qrIAo_2Q9eDhInlB8AW_yGLQfUAjL0yYt97p5wVXsP73xJ9yHGhPbh1Hst6Dc8IdwAiSeYlCFkMQINJ1ADWbTOu32IWOt-1ZqWyXJdnGPLxcmwGVTcbY7LsqQ-IM",
      alt: "A bowl of yellow cherry tomatoes",
    },
  ],
  cucumbers: [
    {
      name: "Огурец среднеплодный",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBMcAW2Zyv3jS0iAjCvSFrgRUe1-kPbdOAKFKpWBBLI261XYx2ySQDR_NbPdOtVZUX8ODVGh2s_Qc9DSKErRwmdVU-y2Qol3-QXFCKrjNpv-S_dm2_s_svwkI6hGg2Xd6tInWCG5WGMMLWVmzyMxsoTXgLt6zW_mNWUq3MxxVVUhWvtnntcjZu0K93bfgRCB8ZNY2KZkXC880urNA5u2RZnvMNmzXnLBfn22oUCd0XziRolt1qXVyd8KyQNajPl3q369QORmfbZOeU",
      alt: "A fresh medium-fruited cucumber",
    },
    {
      name: "Огурец короткоплодный",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAmxOwG55rgwIk49qwwkpCUsb89ySCuMDMRZ0sJsipi5zx-KQnw1uJ76EPNbXOpCyltBPi3Fubj8fRvM1dbL252wLCqA4FuHCsZDORUm4krRX8JFKSvqSfYKf1LF9uk04gwsBrfXdJqW-ir2Ab1NZftE6k4k3RiR900aa_1bJYNDkQFnzCGb4j2Bc2nEOZzMNvPXi7id0GTRsI0AFpL8ruEeX2P2P0vG0EoASJGUQecHaUm9Jf96uT9nupjhzSrJfbtn9vuRhxOoh8",
      alt: "Several short, crunchy short-fruited cucumbers",
    },
  ],
  others: [
    {
      name: "Яблоки сортовые",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAypm7nYu4dkyJbjinGWw09cvZCkN4M_4H6P8ohxlxzvYVYjVfgSf4b90E_XKy9AWbMuHjuFnwvUzK9SzcqNKIb2uSUjbuhuK01MYUBElihKGNvtvwBrMkgc-fEAo0stz8hC9fhwRkYJtVqFWlrmXJTS7uKudY_9uZtod6htAmJBUVH74shjWMNirVauDR9ntLWiacPcTCjSeD-P5R7wDh-cWlo07aRbSvX8CLDPSVYKbMnDLYvJyhxvXJzdyfatzwHqu9GTk-1zqw",
      alt: "A variety of colorful apples",
    },
    {
      name: "Бахчевые культуры",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCcLd7cMDoIoOlXRNJStoPC4dIRskUPmf1JjHrqEqIatej6yjpTYN0aKbdA8XbVUkAlYkxdJ7cUvQhg2zevOleUjy-swdobCZLKtDPBD7OMIcRBUnqhw50Yec_ZPy_ESojias4JJsgNn26u3-UeCEABwuNJbolvqtHyvogOfiKgdEv0ZiYuLDbF4cTdQrs_8-mjyCeMujAVeRO_4zY6528lNz9g8qn4kyw2yrD6ndwx1ewiCHplx3CkOl4AN-ZhgWtaNUv06NrpzFU",
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
