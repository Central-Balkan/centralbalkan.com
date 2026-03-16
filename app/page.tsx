import { Button } from "@headlessui/react";

const WhatWeOfferColumn = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-6">
    <img src={img} alt="background" className="w-full h-auto rounded-lg" />

    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-semibold text-darkPrimary">{title}</h3>
      <p className="text-base text-darkSecondary opacity-80">{description}</p>
    </div>
  </div>
);

const ArticleHighlight = ({
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
    <img src={image} alt="article highlight" className="lg:w-1/2 sm:w-full" />
    <div className="flex flex-col gap-2 flex-10 justify-center px-8">
      <h3 className="text-xl font-semibold text-darkPrimary">{title}</h3>
      <p className="text-base text-darkSecondary opacity-80">{description}</p>
    </div>
  </div>
);

const AboutUsSection = () => (
  <div className="sm:w-full md:w-full m-auto w-full pb-8">
    <h2 className="text-3xl font-bold tracking-tight text-darkPrimary z-10 text-left w-full my-8">
      За нас
    </h2>
    <div className="flex flex-col gap-8 sm:flex-row sm:justify-around">
      <WhatWeOfferColumn
        img="/background.png"
        title="Серийно производство"
        description="Производство на големи серии метални детайли с висока точност и постоянство."
      />
      <WhatWeOfferColumn
        img="/background.png"
        title="Изработка по чертеж"
        description="Изработваме метални изделия по техническа документация и индивидуални изисквания."
      />
      <WhatWeOfferColumn
        img="/background.png"
        title="30+ години опит"
        description="Собствена производствена база в Габрово и дългогодишен опит в металообработването."
      />
    </div>
  </div>
);
const ItemsCategoriesHighlightsSection = () => (
  <div className="sm:w-full md:w-full m-auto">
    <h2 className="text-3xl font-bold tracking-tight text-darkPrimaryz-10 text-left w-full my-8">
      Артикули
    </h2>
    <div className="flex flex-col gap-12 lg:gap-0">
      <ArticleHighlight
        image="/furniture_bases.png"
        title="Основи за мебели"
        description="Произвеждаме основи за маси, столове, пейки и други."
      />
      <ArticleHighlight
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
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="w-auto max-w-3/4 lg:max-w-2/3 sm:items-start">
        <div className="flex gap-5 justify-center min-h-screen flex-col items-center py-32 px-16">
          <h1 className="text-5xl font-bold tracking-tight text-lightPrimary sm:text-7xl z-10 text-left w-full">
            Централен Балкан
          </h1>
          <h2 className="text-xl font-normal text-lightPrimary dark:text-lightPrimary z-10 text-left w-full opacity-[.8]">
            30 години опит в производството на метални изделия
          </h2>
          <div className="w-full z-10">
            <Button className="bg-background text-darkPrimary z-10 py-2 px-2 rounded-lg text-left transition-colors duration-200 hover:bg-darkPrimary hover:text-background">
              Свържи се с нас
            </Button>
          </div>
        </div>
        <AboutUsSection />
        <ItemsCategoriesHighlightsSection />
      </main>
    </div>
  );
}
