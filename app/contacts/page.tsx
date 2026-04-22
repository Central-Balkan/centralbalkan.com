import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          className="object-cover"
          src="/services.svg"
          alt="CNC laser cutting factory"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6">
            <h1 className="text-3xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Контакти
            </h1>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed border-l-4 border-blue-500 pl-6">
              Свържете се с нас за запитвания, оферти и повече информация.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-darkPrimary mb-6">
                Централен Балкан ЕООД
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-darkPrimary">Адрес</p>
                    <p className="text-gray-600 leading-relaxed">
                      гр. Габрово, ул. Вишеград
                      <br />
                      Западна промишлена зона
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-darkPrimary">Телефон</p>
                    <a
                      href="tel:+359888366270"
                      className="text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors"
                    >
                      +359 888 366 270
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-darkPrimary">Email</p>
                    <a
                      href="mailto:centralbalkan2015@gmail.com"
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      centralbalkan2015@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-darkPrimary">
                      Работно време
                    </p>
                    <p className="text-gray-600">
                      Понеделник - Петък: 08:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-7 h-full min-h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.0994294521497!2d25.2945097!3d42.8918489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a91121e41cb8a7%3A0x3c58ae7f4600713c!2z0KbQtdC90YLRgNCw0LvQtdC9INCR0LDQu9C60LDQvSDQldCe0J7QlA!5e0!3m2!1sen!2sbg!4v1774294167029!5m2!1sen!2sbg"
              width="100%"
              height="100%"
              loading="lazy"
              title="Location Map"
              className="w-full h-full border-0 hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
