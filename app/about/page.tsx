import ScrollToArrow from "@/components/ScrollToArrow";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="absolute inset-0 height-100vh bg-black opacity-30 z-10"></div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 animate-bounce z-30">
        <ScrollToArrow querySelector="main" />
      </div>
      <div className="absolute flex min-h-screen items-center justify-center font-sans w-full">
        <div className="w-auto">
          <div className="flex gap-5 justify-center min-h-screen flex-col items-center py-32 md:px-16">
            <h1 className="text-5xl font-bold tracking-tight text-lightPrimary sm:text-7xl z-10 w-full text-center">
              За нас
            </h1>
          </div>
        </div>
      </div>
      <Image
        className="relative w-full h-screen object-cover"
        src="/central_balkan_factory.svg"
        alt="CNC laser cutting"
        priority
        width={1920}
        height={1080}
      />

      <main className=" relative w-auto max-w-3/4 lg:max-w-2/3 sm:items-start m-auto z-30 text-darkPrimary py-12">
        <h2 className="text-3xl font-bold tracking-tight z-10 text-left w-full my-8">
          За нас
        </h2>
        <div className="text-lg z-10 text-left w-full mb-8">
          <div className="space-y-6">
            <p className="mb-4 leading-relaxed">
              „Централен Балкан" е утвърден производител на метални изделия с
              над 30 години опит на българския пазар. През годините изградихме
              стабилна репутация на надежден партньор, който съчетава традиции в
              металообработката с модерни технологии и високи стандарти за
              качество.
            </p>

            <p className="mb-4 leading-relaxed">
              Разполагаме със съвременно оборудване и висококвалифициран екип,
              което ни позволява да изпълняваме както единични, така и серийни
              поръчки с прецизност, бързина и постоянство. Нашите производствени
              възможности включват CNC лазерно рязане, огъване, заваряване и
              цялостна обработка на метал, съобразена с индивидуалните
              изисквания на клиента.
            </p>

            <div className="p-6">
              <h3 className="font-semibold mb-4">
                Специализирани сме в производството на:
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>основи за мебели</li>
                <li>метални планки и конструкции</li>
                <li>огради и парапети</li>
                <li>стълбища и навеси</li>
                <li>нестандартни изделия по проект на клиента</li>
              </ul>
            </div>

            <p className="leading-relaxed">
              Благодарение на изградена мрежа от надеждни партньори в страната,
              можем да предложим цялостни решения – от идея и проектиране до
              изработка и доставка. Работим в тясно сътрудничество с нашите
              клиенти, за да осигурим оптимален баланс между качество, цена и
              срокове.
            </p>

            <p className="leading-relaxed font-semibold italic">
              Нашата мисия е да бъдем дългосрочен и сигурен партньор за бизнеса,
              предоставяйки решения, които отговарят на най-високите
              индустриални изисквания.
            </p>

            <p className="text-center font-semibold pt-4 border-t">
              „Централен Балкан" – стабилност, прецизност и доверие в метала.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
