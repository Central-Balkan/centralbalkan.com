import Image from "next/image";

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
    className={`flex flex-col gap-10 ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    }`}
  >
    <div className="relative lg:w-1/3 sm:w-full">
      <Image
        src={image}
        alt="article highlight"
        width={400}
        height={300}
        loading="eager"
        className="w-full h-full"
      />
      <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
        {title}
      </h3>
    </div>

    <div className="flex flex-col gap-6 flex-10 justify-center">
      <div className="text-base text-darkSecondary opacity-80">{children}</div>
    </div>
  </div>
);

const Services = () => {
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
          Услуги
        </h2>
        <div className="flex flex-col gap-12">
          <Service image="/CNC.svg" title="CNC лазерно рязане">
            <div>
              <h3 className="font-semibold mb-4">
                CNC лазерно рязане на метални листи и профили
              </h3>
              <div>
                Рязане на метални листи и профили от стомана и алуминий с
                дебелина до 15мм с помощта на CNC лазерна технология.
              </div>
            </div>
          </Service>
          <Service image="/welding.jpg" title="Заваряване">
            <div>
              <h3 className="font-semibold mb-4">
                Предлагаме проектиране и заваряване на:
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>корпусно заварени тела</li>
                <li>
                  конструкции - в т.ч. покриви, навеси, метални кутии и др.
                </li>
                <li>листова стомана</li>
                <li>изделия от неръждаема стомана</li>
              </ul>
            </div>
          </Service>
          <Service image="/bending.jpg" title="Рязане, огъване и обработка">
            <div>
              <h3 className="font-semibold mb-4">
                Предлагаме рязане, огъване и обработка на:
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>листова ламарина - черна и неръждаема</li>
                <li>кухи квадратни профили</li>
                <li>кръгли тръби</li>
                <li>П-образен горещо валцован метален профил</li>
                <li>Т-образен горещо валцован метален профил</li>
                <li>UPN профили</li>
              </ul>
            </div>
          </Service>
        </div>
      </main>
    </div>
  );
};

export default Services;
