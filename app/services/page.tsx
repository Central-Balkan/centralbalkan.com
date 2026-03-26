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
    className={`flex flex-col gap-12 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
  >
    <Image
      src={image}
      alt="article highlight"
      width={400}
      height={300}
      loaging="eager"
      className="lg:w-1/3 sm:w-full h-auto"
    />
    <div className="flex flex-col gap-8 flex-10 justify-center px-8">
      <h3 className="text-xl font-semibold text-darkPrimary">{title}</h3>
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
              Рязане на метални плочи и тръби с помощта на CNC лазерна
              технология. Високо прецизни резки и гравиране за индустриални и
              декоративни приложения.
            </div>
          </Service>
          <Service image="/welding.jpg" title="Заваряване">
            <ul className="list-disc pl-5 space-y-1">
              <li>Проектиране и заваряване на корпусно заварени тела</li>
              <li>
                Заваряване на конструкции (покриви, навеси, метални кутии и др.)
              </li>
              <li>
                Заваряване на изделия от листова стомана и неръждаема стомана.
              </li>
            </ul>
          </Service>
          <Service
            image="/bending.jpg"
            title="Рязане и огъване на метални листове"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Разкрояване, огъване и обработка на листова ламарина – черна и
                неръждаема
              </li>
              <li>
                Разкрояване, огъване и обработка на кухи квадратни профили и
                кръгли тръби
              </li>
              <li>
                Обработка и разкрояване на П-образен горещо валцован метален
                профил
              </li>
              <li>
                Обработка и разкрояване на Т-образен горещо валцован метален
                профил
              </li>
              <li>Разкрояване на UPN профили</li>
            </ul>
          </Service>
        </div>
      </main>
    </div>
  );
};

export default Services;
