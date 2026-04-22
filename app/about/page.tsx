import Image from "next/image";
import { ShieldCheck, Target, Users, Factory, Briefcase } from "lucide-react";

const AboutUs = () => {
  return (
    <>
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          className="object-cover"
          src="/central_balkan_factory.svg"
          alt="CNC laser cutting factory"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6">
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-6">
              За нас
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed border-l-4 border-blue-500 pl-6">
              Традиция и иновации в металообработката. Повече от три десетилетия
              градим доверие чрез качество и прецизност.
            </p>
          </div>
        </div>
      </div>

      <main className="relative max-w-7xl mx-auto px-6 text-darkPrimary py-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 w-12 bg-blue-600"></div>
          <h2 className="text-4xl font-extrabold tracking-tight">
            Кои сме ние?
          </h2>
        </div>
        <div className="text-lg z-10 text-left w-full mb-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <span className="font-bold text-blue-600">
                    „Централен Балкан"
                  </span>{" "}
                  е утвърден производител на метални изделия с над 30 години
                  опит на българския пазар. През годините изградихме стабилна
                  репутация на надежден партньор.
                </p>
                <p className="leading-relaxed">
                  Съчетаваме традициите в металообработката с модерни технологии
                  и високи стандарти за качество, за да предложим най-доброто на
                  нашите клиенти.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl border-l-8 border-blue-600">
                <p className="italic text-gray-700">
                  Разполагаме със съвременно оборудване и висококвалифициран
                  екип, което ни позволява да изпълняваме както единични, така и
                  серийни поръчки с прецизност, бързина и постоянство.
                </p>
              </div>
            </div>

            {/* B2B Value Props Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border-l-4 border-blue-600">
                <ShieldCheck className="text-blue-600 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Гарантирано Качество
                  </h4>
                  <p className="text-sm text-gray-600">
                    Стриктен контрол на всеки етап от производството според
                    индустриалните стандарти.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border-l-4 border-blue-600">
                <Target className="text-blue-600 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Гъвкавост</h4>
                  <p className="text-sm text-gray-600">
                    Бърза адаптация към специфични технически изисквания и
                    кратки срокове.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border-l-4 border-blue-600">
                <Users className="text-blue-600 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-2">B2B Партньорство</h4>
                  <p className="text-sm text-gray-600">
                    Дългосрочни взаимоотношения с преференциални условия за
                    серийно производство.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border-l-4 border-blue-600">
                <Factory className="text-blue-600 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Пълен Цикъл</h4>
                  <p className="text-sm text-gray-600">
                    От инженерен чертеж до финална обработка и логистика.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-darkPrimary text-white p-10 rounded-3xl shadow-2xl my-14">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="text-blue-400" />
                <span className="text-black"> Специализирани решения за:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Основи за мебели и интериорен дизайн",
                  "Метални планки и крепежни елементи",
                  "Индустриални огради и парапети",
                  "Сложни стълбищни системи и навеси",
                  "Нестандартни детайли по проект",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    <span className="text-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="leading-relaxed text-xl">
              Благодарение на изградена мрежа от надеждни партньори в страната,
              можем да предложим цялостни решения – от идея и проектиране до
              изработка и доставка. Работим в тясно сътрудничество с нашите
              клиенти, за да осигурим оптимален баланс между качество, цена и
              срокове.
            </p>

            <p className="leading-relaxed font-semibold italic text-blue-700 border-l-4 border-blue-700 pl-6 py-2">
              Нашата мисия е да бъдем дългосрочен и сигурен партньор за бизнеса,
              предоставяйки решения, които отговарят на най-високите
              индустриални изисквания.
            </p>

            <p className="text-center font-bold text-2xl pt-12 text-darkPrimary">
              „Централен Балкан" – стабилност, прецизност и доверие в метала.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
