import { Button } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import ScrollToArrow from "@/components/ScrollToArrow";
import FadeInText from "@/components/FadeInText";
import ContactUsButton from "@/components/ContactUsButton";

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
      <h3 className="text-xl font-semibold text-darkPrimary">{title}</h3>
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
    className={`flex flex-col gap-4 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
  >
    <Image
      src={image}
      alt="article highlight"
      width={400}
      height={300}
      className="lg:w-1/3 sm:w-full h-auto"
    />
    <div className="flex flex-col gap-2 flex-10 justify-center px-12">
      <h3 className="text-xl font-semibold text-darkPrimary">{title}</h3>
      <p className="text-base text-darkSecondary opacity-80">{description}</p>
    </div>
  </div>
);

const AboutUsSection = () => (
  <div id="aboutUs" className="sm:w-full md:w-full m-auto w-full pb-8 pt-12">
    <h2 className="text-3xl font-bold tracking-tight text-darkPrimary z-10 text-left w-full my-8">
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
      <Button className="bg-foreground text-background z-10 py-2 px-4 rounded-lg text-left transition-colors duration-200 hover:bg-background hover:text-foreground hover:border-2 mt-8 cursor-pointer">
        Научи повече за нас
      </Button>
    </Link>
  </div>
);
const ItemsCategoriesHighlightsSection = () => (
  <div className="sm:w-full md:w-full m-auto">
    <h2 className="text-3xl font-bold tracking-tight text-darkPrimaryz-10 text-left w-full my-8">
      Артикули
    </h2>
    <div className="flex flex-col gap-12 lg:gap-0">
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
            <h1 className="text-5xl font-bold tracking-tight text-lightPrimary sm:text-7xl z-10 text-left w-full">
              <FadeInText text="Централен Балкан" duration={0.3} />
            </h1>
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
          <ItemsCategoriesHighlightsSection />
        </main>
      </div>
    </>
  );
}
