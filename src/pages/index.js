import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import indexStyle from "../styles/index.module.css";
const inter = Inter({ subsets: ["latin"] });
import { useEffect, useState } from "react";
export default function Home() {
  const [year, setYear] = useState(2021);
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);
  return (
    <main>
      <section className="bg-gradientCommon ">
        {/* navbar  */}
        <div className="flex justify-between items-center w-full max-w-[1250px] mx-auto py-10 px-4">
          <h4 className="text-4xl font-bold">
            <Link href="/">Locus.</Link>
          </h4>
          <ul className="hidden lg:flex items-center space-x-4 font-medium ">
            <li className="text-lg">
              <Link href="#" className="p-3">
                Portfolio
              </Link>
            </li>
            <li className="text-lg">
              <Link href="#" className="p-3">
                About Us
              </Link>
            </li>
            <li className="text-lg">
              <Link href="#" className="p-3">
                Join Us
              </Link>
            </li>
            <li className="text-lg">
              <Link href="#" className="p-3">
                News & Events
              </Link>
            </li>
          </ul>
          <div>
            <Link
              href=""
              className="inline-block px-10 py-4 rounded-full ring-1 ring-slate-800 font-medium hover:bg-slate-800 hover:text-white duration-200"
            >
              Register
            </Link>
          </div>
        </div>
        {/* hero section  */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[1250px] mx-auto px-4">
          <div className="basis-full lg:basis-[50%] min-h-[80vh] flex flex-col justify-center item-center text-center md:text-left md:items-start p-4">
            <p className="common-before">20 Cities and growing</p>
            <h1 className="text-5xl md:text-6xl font-bold my-8 leading-[1.2] lg:leading-[1.3] relative">
              Being Founders
              <br /> Takes Guts
              <Image
                src={"/star2.png"}
                width={200}
                height={200}
                className="absolute left-[80%] top-16 hidden lg:block "
                alt=""
              />
            </h1>
            <p className="leading-8 lg:leading-[2.5]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit suscipit possimus atque ipsam doloremque. Molestias
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
              <Link
                href="#"
                className="inline-flex relative px-10 py-4 rounded-full ring-1 focus:ring-2 outline-none ring-slate-900 font-bold text-white bg-slate-900  hover:bg-slate-800 drop-shadow-2xl shadow-lg "
              >
                Book Demo
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  href=""
                  className="px-[1rem] pt-4 pb-2 text-2xl rounded-full ring-1 focus:ring-2 outline-none ring-slate-900 font-bold text-white bg-slate-900  hover:bg-slate-800 "
                >
                  <ion-icon name="play-outline"></ion-icon>
                </Link>
                <p className="font-bold text-md">Watch Showreel</p>
              </div>
            </div>
          </div>
          <div className="basis-full lg:basis-[50%] w-full  flex items-center relative justify-center lg:justify-end  min-h-[80vh] p-6">
            <div
              className={
                "w-full max-w-[300px] relative rounded-full before:absolute before:contents-[''] before:w-[116%] before:h-[116%] before:border-2 before:p-4 before:rounded-full before:left-[-8%] before:top-[-8%] before:border-gray-700  after:hidden  lg:after:grid after:place-content-center  after:absolute after:left-[-15%] after:top-[-15%] after:bg-orange-300 after:p-16 after:text-sm   " +
                `after:content-['${year}'] ${indexStyle.starOrange}`
              }
            >
              <div className="w-full h-[440px] ring-2 ring-white relative rounded-full overflow-hidden flex items-center justify-center ">
                <Image
                  src={"/header-image.jpg"}
                  width={400}
                  height={200}
                  alt=""
                  className="grayscale object-cover scale-[2] sm:scale-150 "
                />
                <h1 className={"common-outline " + indexStyle.stroke1}>
                  Locus.
                </h1>
              </div>
              <h1 className={"common-outline " + indexStyle.stroke2}>Locus.</h1>
              <span
                className={
                  "hidden sm:inline-block w-6 h-6 rounded-full bg-black left-0 top-0 bottom-0 right-0 m-auto z-5  absolute " +
                  indexStyle.floatingCircle
                }
              ></span>
            </div>
          </div>
          <Image
            src={"/art.png"}
            width={300}
            height={200}
            className=" hidden  lg:block absolute lg:right-[25%] scale-[0.8] xl:scale-1 top-[20%] xl:right-[30%]"
            alt=""
          />
        </div>
        <div className="max-w-[1250px] mx-auto py-10 md:py-15 lg:py-20 px-4">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-12 lg:col-span-4 p-4">
              <h4 className="text-3xl font-bold">Business Trends</h4>
              <p className="pt-2 pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex w-full">
                <div>
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="w-14 h-14 rounded-full object-cover border-2 border-white mr-6 drop-shadow-xl"
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="text-xl font-bold">Thomas Speark</h6>
                  <p className="text-sm pt-1">Managing Partner</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4  py-5 pl-6 pr-0">
              <div className="ring-2 ring-white p-5 py-7  bg-[#E9E8E7] rounded-lg shadow-xl shadow-slate-500/10 ">
                <div className="flex justify-between pb-3">
                  <span className="h-8 w-8 grid place-content-center bg-blue-200 rounded-full">
                    <ion-icon name="stopwatch-outline"></ion-icon>
                  </span>
                  <p className="font-medium text-sm text-gray-500">May 2021</p>
                </div>
                <h4 className="text-xl font-semibold py-3">
                  Visibility Booster
                </h4>
                <p className="text-sm leading-[2]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4  py-5 pr-6 pl-0">
              <div className="ring-2 ring-white p-5 py-7  bg-[#E9E8E7] rounded-lg shadow-xl shadow-slate-500/10 ">
                <div className="flex justify-between pb-3">
                  <span className="w-8 h-8 grid place-content-center bg-purple-300 rounded-full">
                    <ion-icon
                      name="happy-outline"
                      className="ring-1 py-2"
                    ></ion-icon>
                  </span>
                  <p className="font-medium text-sm text-gray-500">Aug 2021</p>
                </div>
                <h4 className="text-xl font-semibold py-3">Online Assistant</h4>
                <p className="text-sm leading-[2]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
