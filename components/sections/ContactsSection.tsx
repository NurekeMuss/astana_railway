"use client";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  phone: string;
  company: string;
}

export default function ContactsSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    Swal.fire({
      title: "Успешно!",
      text: "Заявка отправлена! Мы свяжемся с вами в ближайшее время.",
      icon: "success",
      confirmButtonText: "Хорошо",
      confirmButtonColor: "#1F4D2B",
    });
    reset();
  };

  return (
    <section className="scroll-mt-20" id="contacts">
      <div
        className="grid grid-cols-1 items-stretch gap-10 rounded-xl p-8 text-white shadow-xl md:grid-cols-2 md:p-12"
        style={{ backgroundColor: "#1F4D2B" }}
      >
        <div className="flex flex-col justify-center gap-5 pr-0 md:pr-6">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            Свяжитесь с нами
          </h2>
          <p className="text-base leading-relaxed text-white/90">
            Готовы обсудить поставки? Оставьте свои данные, и наш менеджер
            свяжется с вами в ближайшее время для обсуждения деталей
            сотрудничества.
          </p>
          <div className="space-y-3 text-base font-medium">
            <a
              href="tel:+77778812733"
              className="flex items-center gap-3 transition-opacity hover:opacity-85"
            >
              <span className="material-symbols-outlined text-white">call</span>
              <span>+7 777 881 2733</span>
            </a>
            <a
              href="mailto:arg_trading@mail.ru"
              className="flex items-center gap-3 transition-opacity hover:opacity-85"
            >
              <span className="material-symbols-outlined text-white">mail</span>
              <span>arg_trading@mail.ru</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 rounded-lg p-8 shadow-lg"
          style={{ backgroundColor: "#F7F4EF" }}
        >
          <div className="space-y-1">
            <label
              htmlFor="name"
              className="block text-sm font-semibold"
              style={{ color: "#1A1A1A" }}
            >
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Имя обязательно" })}
              className="w-full rounded-md border px-4 py-2 text-base focus:outline-none"
              style={{
                borderColor: errors.name ? "#D5433A" : "rgba(0,0,0,0.15)",
                backgroundColor: "#ffffff",
                color: "#1A1A1A",
              }}
            />
            {errors.name && (
              <p className="text-xs" style={{ color: "#D5433A" }}>
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="space-y-1">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold"
              style={{ color: "#1A1A1A" }}
            >
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "Телефон обязателен",
                pattern: {
                  value: /^[+\d\s()-]+$/,
                  message: "Только цифры и символы +()-",
                },
              })}
              className="w-full rounded-md border px-4 py-2 text-base focus:outline-none"
              style={{
                borderColor: errors.phone ? "#D5433A" : "rgba(0,0,0,0.15)",
                backgroundColor: "#ffffff",
                color: "#1A1A1A",
              }}
              placeholder="+7 777 881 2733"
            />
            {errors.phone && (
              <p className="text-xs" style={{ color: "#D5433A" }}>
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="space-y-1">
            <label
              htmlFor="company"
              className="block text-sm font-semibold"
              style={{ color: "#1A1A1A" }}
            >
              Компания
            </label>
            <input
              type="text"
              id="company"
              {...register("company", { required: "Компания обязательна" })}
              className="w-full rounded-md border px-4 py-2 text-base focus:outline-none"
              style={{
                borderColor: errors.company ? "#D5433A" : "rgba(0,0,0,0.15)",
                backgroundColor: "#ffffff",
                color: "#1A1A1A",
              }}
            />
            {errors.company && (
              <p className="text-xs" style={{ color: "#D5433A" }}>
                {errors.company.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="mt-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg px-5 text-base font-bold leading-normal text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: "#1F4D2B" }}
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}
