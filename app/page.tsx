import { Button } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import ScrollToArrow from "@/components/ScrollToArrow";
import FadeInText from "@/components/FadeInText";
import {
  LineSquiggle,
  BetweenVerticalStart,
  Flame,
  ArrowRight,
} from "lucide-react";
import ContactUsButton from "@/components/ContactUsButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Централен Балкан - CNC лазерно рязане и металообработване",
  description:
    "Централен Балкан ЕООД предлага CNC лазерно рязане, металообработка и производство на метални изделия по чертеж. Над 30 години опит в индустрията.",
  keywords: [
    "метални изделия",
    "CNC лазерно рязане",
    "металообработка",
    "серийно производство",
    "метални конструкции",
    "основи за мебели",
    "Габрово",
    "фабрика за металообработка",
  ],
  authors: [{ name: "Централен Балкан" }],
  creator: "Централен Балкан",
  publisher: "Централен Балкан",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Централен Балкан - CNC лазерно рязане и металообработка",
    description:
      "Централен Балкан ЕООД предлага CNC лазерно рязане, металообработка и производство на метални изделия по чертеж. Над 30 години опит в индустрията.",
    url: "https://centralbalkan.com",
    siteName: "Централен Балкан",
  },
};

const WhatWeOfferColumn = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-1 flex-col gap-6">
    <Image
      src={img}
      alt="background"
      width={400}
      height={300}
      className="w-full object-cover rounded-lg"
    />

    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-bold text-darkPrimary">{title}</h3>
      <p className="text-base text-darkSecondary opacity-80">{description}</p>
    </div>
  </div>
);

const ItemHighlight = ({
  image,
  title,
  description,
  reverse = false,
}: {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}) => (
  <div
    className={`flex flex-col gap-8 items-center ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} bg-gray-50 rounded-3xl overflow-hidden border border-gray-400`}
  >
    <Image
      src={image}
      alt="item highlight"
      width={600}
      height={400}
      className="lg:w-1/2 w-full h-64 lg:h-96 object-cover"
    />
    <div className="flex flex-col gap-4 flex-1 justify-center p-8 lg:p-12">
      <h3 className="text-3xl font-bold text-darkPrimary">{title}</h3>
      <p className="text-lg text-darkSecondary opacity-80 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const AboutUsSection = () => (
  <div id="aboutUs" className="sm:w-full md:w-full m-auto w-full pb-12 pt-24">
    <h2 className="lg:text-4xl text-2xl font-bold tracking-tight text-darkPrimary z-10 text-left w-full mb-12 border-l-4 border-blue-600 pl-6">
      За нас
    </h2>
    <div className="flex flex-col gap-8 sm:flex-row sm:justify-around">
      <WhatWeOfferColumn
        img="/central_balkan_factory.svg"
        title="Централен Балкан ЕООД"
        description="Собствена производствена база в Габрово и над 30 годишен опит в металообработването."
      />
      <WhatWeOfferColumn
        img="/series.svg"
        title="Серийно производство"
        description="Производство на големи серии метални детайли с висока точност."
      />
      <WhatWeOfferColumn
        img="/blueprint.svg"
        title="Изработка по чертеж"
        description="Изработваме метални изделия по техническа документация и индивидуални изисквания."
      />
    </div>
    <Link href="/about" className="w-max">
      <Button className="bg-[#333230] text-white z-10 py-3 px-8 rounded-full text-left transition-all duration-200 border border-transparent hover:bg-white hover:text-[#333230] hover:border-[#333230] mt-12 cursor-pointer flex items-center gap-2 font-medium">
        Научи повече за нас
        <ArrowRight size={18} />
      </Button>
    </Link>
  </div>
);

const ServicesOverview = () => (
  <div className="lg:py-24 py-8 border-y border-gray-400">
    <h2 className="lg:text-4xl text-xl font-bold tracking-tight text-darkPrimary mb-12 border-l-4 border-blue-600 pl-6">
      Производствени възможности
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: <LineSquiggle className="w-10 h-10" />,
          title: "CNC Лазерно Рязане",
          desc: "Високопрецизно рязане на листов материал до 15мм.",
        },
        {
          icon: <BetweenVerticalStart className="w-10 h-10" />,
          title: "Огъване на Абкант",
          desc: "Сложно формоване на детайли с висока повторяемост.",
        },
        {
          icon: <Flame className="w-10 h-10" />,
          title: "Заваряване",
          desc: "Професионални заваръчни решения за индустрията.",
        },
      ].map((s, i) => (
        <div
          key={i}
          className="p-8 bg-white rounded-2xl shadow-sm border border-gray-400 hover:shadow-md transition-shadow"
        >
          <div className="text-blue-600 mb-6">{s.icon}</div>
          <h4 className="text-xl font-bold mb-3 text-darkPrimary">{s.title}</h4>
          <p className="text-gray-600">{s.desc}</p>
        </div>
      ))}
    </div>
    <Link href="/services" className="w-max">
      <Button className="bg-[#333230] text-white z-10 py-3 px-8 rounded-full text-left transition-all duration-200 border border-transparent hover:bg-white hover:text-[#333230] hover:border-[#333230] mt-12 cursor-pointer flex items-center gap-2 font-medium">
        Разгледайте всички услуги
        <ArrowRight size={18} />
      </Button>
    </Link>
  </div>
);

const ItemsCategoriesHighlightsSection = () => (
  <div className="sm:w-full md:w-full m-auto lg:py-24 py-12">
    <h2 className="lg:text-4xl text-xl  font-bold tracking-tight text-darkPrimary z-10 text-left w-full mb-12 border-l-4 border-blue-600 pl-6">
      Специализирани изделия
    </h2>
    <div className="flex flex-col gap-12">
      <ItemHighlight
        image="/furniture_bases.svg"
        title="Основи за мебели"
        description="Произвеждаме основи за маси, столове, пейки и други."
      />
      <ItemHighlight
        image="/metal_plates.png"
        title="Метални планки"
        description="Метални планки за различни приложения, включително строителство и индустрия."
        reverse={true}
      />
    </div>
  </div>
);

const PartnerItem = ({
  logo,
  name,
  backgroundColorClass = "bg-transparent",
  url,
}: {
  logo: string;
  name: string;
  backgroundColorClass?: string;
  url?: string;
}) => (
  <div className="flex flex-col lg:flex-row items-center gap-4">
    <Image
      src={logo}
      alt={`${name} logo`}
      width={300}
      height={150}
      className={`lg:w-1/4 sm:w-full h-auto ${backgroundColorClass} p-6 rounded-xl`}
    />
    <div className="flex flex-col gap-2 flex-10 justify-center px-8">
      <h3 className="text-2xl font-bold text-darkPrimary">{name}</h3>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-darkSecondary opacity-80 hover:underline"
        >
          Посети сайта
        </a>
      )}
    </div>
  </div>
);

const PartnersSection = () => (
  <div className="sm:w-full md:w-full m-auto lg:py-24 py-12">
    <h2 className="text-4xl font-bold tracking-tight text-darkPrimary z-10 text-left w-full mb-12 border-l-4 border-blue-600 pl-6">
      Доверени партньори
    </h2>
    <div className="flex flex-col gap-12">
      <PartnerItem
        logo="/partner_niko_eood.png"
        name="Нико ЕООД"
        backgroundColorClass="bg-[#1c203b]"
        url="https://metaligabrovo.com/"
      />
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Image
        className="absolute w-full h-screen object-cover"
        src="/background.png"
        alt="CNC лазерно рязане"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 animate-bounce z-30">
        <ScrollToArrow querySelector="#aboutUs" />
      </div>
      <div className="flex min-h-screen items-center justify-center font-sans">
        <main className="main-content w-auto min-w-2/3 max-w-3/4 lg:max-w-2/3 sm:items-start">
          <div className="flex gap-5 justify-center min-h-screen flex-col items-center py-32 md:px-16">
            <div className="text-5xl font-bold tracking-tight text-lightPrimary sm:text-7xl z-10 text-left w-full">
              <FadeInText
                text="Централен Балкан"
                duration={0.3}
                header={true}
              />
            </div>
            <h2 className="text-xl font-normal text-lightPrimary dark:text-lightPrimary z-10 text-left w-full opacity-[.8]">
              <FadeInText
                text="30 години опит в производството на метални изделия"
                duration={0.3}
                delay={0.1}
              />
            </h2>
            <div className="w-full z-10">
              <ContactUsButton />
            </div>
          </div>
          <AboutUsSection />
          <ServicesOverview />
          <ItemsCategoriesHighlightsSection />
          <PartnersSection />

          {/* Final CTA */}
          <div className="mb-24 bg-darkPrimary rounded-3xl py-12 text-center text-white">
            <h2 className="text-3xl text-[#333230] font-bold mb-6">
              Готови ли сте да започнем вашия проект?
            </h2>
            <p className="text-xl opacity-90 text-[#333230] mb-8 max-w-2xl mx-auto">
              Свържете се с нас днес за безплатна консултация и оферта.
            </p>
            <Link
              href="/contacts"
              className="bg-[#333230] text-white z-10 py-4 px-10 rounded-full text-lg transition-all duration-200 border border-transparent hover:bg-white hover:text-[#333230] hover:border-[#333230] mt-12 cursor-pointer  gap-2 font-medium"
            >
              Свържете се с нас
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
