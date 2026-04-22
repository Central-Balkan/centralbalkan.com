import Image from "next/image";
import { Scissors, Layers, Hammer, CheckCircle2 } from "lucide-react";

const Service = ({
  image,
  title,
  children,
  reverse = false,
}: {
  image: string;
  children: React.ReactNode;
  title: string;
  reverse?: boolean;
}) => (
  <div
    className={`flex flex-col lg:flex-row gap-12 items-center py-12 ${
      reverse ? "lg:flex-row-reverse" : ""
    } border-b border-gray-100 last:border-0`}
  >
    <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
      <Image
        src={image}
        alt={title}
        fill
        loading="eager"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>
    </div>

    <div className="flex flex-col gap-6 w-full lg:w-1/2">
      <div className="text-lg text-gray-700 leading-relaxed">{children}</div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          className="object-cover"
          src="/services.svg"
          alt="CNC laser cutting"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Нашите Услуги
            </h1>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed border-l-4 border-blue-500 pl-6">
              Прецизност във всеки детайл. Използваме последно поколение
              технологии за обработка на метал, за да превърнем вашите проекти в
              реалност.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Scissors className="w-8 h-8" />,
              title: "Прецизност",
              desc: "Използваме прецизността на лазерно рязане.",
            },
            {
              icon: <Layers className="w-8 h-8" />,
              title: "Капацитет",
              desc: "Възможност за серийно производство и големи обеми.",
            },
            {
              icon: <Hammer className="w-8 h-8" />,
              title: "Опит",
              desc: "Над 30 години експертиза в металообработката.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-2 text-darkPrimary">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          <Service image="/CNC.svg" title="CNC Лазерно Рязане">
            <div>
              <h3 className="text-2xl font-bold text-darkPrimary mb-6">
                Високотехнологично рязане на метални листи и профили
              </h3>
              <p className="mb-6">
                Разполагаме с модерни CNC лазерни машини, които осигуряват
                перфектен срез без нужда от допълнителна обработка.
              </p>
              <ul className="space-y-3">
                {[
                  "Стомана и алуминий до 15мм дебелина",
                  "Сложни геометрични форми",
                  "Висока скорост и повторяемост",
                  "Минимален отпадък на материал",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Service>

          <Service
            image="/welding.jpg"
            title="Професионално Заваряване"
            reverse
          >
            <div>
              <h3 className="text-2xl font-bold text-darkPrimary mb-6">
                Сертифицирани заваръчни решения
              </h3>
              <p className="mb-6">
                Нашият екип от опитни заварчици гарантира здравина и естетика на
                всяка сглобка, работейки по най-високите стандарти.
              </p>
              <ul className="space-y-3">
                {[
                  "Корпусно заварени тела",
                  "Сложни метални конструкции",
                  "Неръждаема стомана (Inox)",
                  "Аргоново заваряване",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Service>

          <Service image="/bending.jpg" title="Огъване и Формоване">
            <div>
              <h3 className="text-2xl font-bold text-darkPrimary mb-6">
                Прецизно огъване на абкант
              </h3>
              <p className="mb-6">
                Предлагаме огъване на детайли със сложна конфигурация,
                гарантирайки точност на ъглите и размерите.
              </p>
              <ul className="space-y-3">
                {[
                  "Листова ламарина (черна и неръждаема)",
                  "Обработка на тръби и профили",
                  "UPN, T и P профили",
                  "Индивидуални матрици за специфични нужди",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Service>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-darkPrimary rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Имате специфичен проект?</h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Нашият инженерен екип е готов да ви съдейства от чертежа до готовото
            изделие.
          </p>
          <a
            href="/contacts"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-colors text-lg"
          >
            Поискайте оферта
          </a>
        </div>
      </main>
    </div>
  );
};

export default Services;
