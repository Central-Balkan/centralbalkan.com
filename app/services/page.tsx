import Image from "next/image";

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
      </main>
    </div>
  );
};

export default Services;
