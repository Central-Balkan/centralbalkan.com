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

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="w-auto sm:max-w-3/4 md:max-w-3/4 sm:items-start">
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
        <div className="sm:w-full md:w-full m-auto w-10/12">
          <h2 className="text-2xl font-bold tracking-tight text-darkPrimary sm:text-5xl z-10 text-left w-full my-8">
            Какво предлагаме?
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
      </main>
    </div>
  );
}
