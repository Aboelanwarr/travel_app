import Image from "next/image";

interface IProps {}

const Guide = ({}: IProps) => {
  return (
    <section className="flexCenter flex-col padding-container max-container">
      <div className="w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>
      <div className="flexCenter relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center sm:rounded-xl xl:rounded-5xl"
        />
        <div className="absolute flex px-7 gap-3 py-8 rounded-3xl shadow-md bg-white md:left-[5%] lg:top-20">
          <Image src="/meter.svg" alt="meter" width={16} height={158} className="h-full w-auto" />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Desination</p>
                <p className="bold-16 text-green-300">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Caltentes</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
