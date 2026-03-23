import Image from "next/image";

const Contacts = () => {
  return (
    <div>
      <Image
        className="w-screen h-auto"
        src="/services.svg"
        alt="CNC laser cutting"
        width={1920}
        height={1080}
        priority
      />
      <main className="w-auto max-w-3/4 lg:max-w-2/3 sm:items-start m-auto">
        <h2 className="text-3xl font-bold tracking-tight text-darkPrimary z-10 text-left w-full my-8">
          Контакти
        </h2>
        <div className="flex flex-col lg:flex-row w-full justify-between gap-8">
          <div className="flex flex-col justify-start gap-8">
            <div>
              <div className="text-lg font-semibold text-darkPrimary">
                Централен Балкан ЕООД
              </div>
              <div className="text-darkPrimary">
                Адрес: гр. Габрово, Западна промишлена зона, ул. Вишеград
              </div>
            </div>
            <div>
              Email:{" "}
              <a
                href="mailto:centralbalkan2015@gmail.com"
                className="text-blue-500 underline"
              >
                centralbalkan2015@gmail.com
              </a>
            </div>
            <div>
              Телефон:{" "}
              <a href="tel:+359888366270" className="text-blue-500 underline">
                +359 888 366 270
              </a>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.0994294521497!2d25.2945097!3d42.8918489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a91121e41cb8a7%3A0x3c58ae7f4600713c!2z0KbQtdC90YLRgNCw0LvQtdC9INCR0LDQu9C60LDQvSDQldCe0J7QlA!5e0!3m2!1sen!2sbg!4v1774294167029!5m2!1sen!2sbg"
            width="600"
            height="450"
            loading="lazy"
            className="w-full min-h-[450px] border-0"
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
