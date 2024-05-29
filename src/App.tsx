import { HiBars3BottomLeft, HiXMark } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa";
import Logo from "./assets/logo-header-white.svg";
import ImageBg from "./assets/main_video_poster.png";
import ImageBg1 from "./assets/2.jpg";
import ImageBg2 from "./assets/5.jpg";
import imgHero from "./assets/008-400EastPalmettoParkRoad-BocaRaton-FL-33432-FULL1-scaled.jpg";
import secImg from "./assets/012-400EastPalmettoParkRoad-BocaRaton-FL-33432-FULL-scaled.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Footer from "./components/ui/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/ui/NavBar";

function App() {
  const [openNav, setOpenNav] = useState(false);

  const slideImage1 = [
    {
      url: ImageBg,
      caption: "slide-1",
    },
    {
      url: ImageBg1,
      caption: "slide-1",
    },

    {
      url: ImageBg2,
      caption: "slide-3",
    },
  ];

  const slideImage2 = [
    {
      url: secImg,
      heading: "WONDERFUL STORE",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit Nostrum quo dolorem, impedit id laborum debitis itaque placeatnobis illo eveniet dicta corporis obcaecati fuga. Sapiente undedeserunt cum iure tempore.",
    },
    {
      url: ImageBg1,
      heading: "ONE OF A KIND",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit Nostrum quo dolorem, impedit id laborum debitis itaque placeatnobis illo eveniet dicta corporis obcaecati fuga. Sapiente undedeserunt cum iure tempore.",
    },

    {
      url: ImageBg2,
      heading: "GREAT IS MORE THAN A WORD",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit Nostrum quo dolorem, impedit id laborum debitis itaque placeatnobis illo eveniet dicta corporis obcaecati fuga. Sapiente undedeserunt cum iure tempore.",
    },
  ];
  return (
    <div>
      <NavBar />

      <div className="relative -z-50">
        <div>
          <Slide>
            {slideImage1.map((slideImage, index) => (
              <div key={index}>
                <img
                  src={slideImage?.url}
                  alt={slideImage.caption}
                  className="h-[600px] md:w-screen"
                />
              </div>
            ))}
          </Slide>
        </div>
        <div className="absolute text-3xl font-medium w-2/3 flex flex-col items-center space-y-4 right-20 top-1/3 md:top-1/2 md:right-36">
          <h2 className="text-center text-white md:text-6xl md:font-serif">
            Interior Design & Home Decor
          </h2>
          <div className="md:flex md:space-x-8 md:w-full md:justify-center ">
            <div>
              <button className="border-2 w-full  border-neutral-500 text-sm text-white px-2 py-2">
                INTERIOR DESIGN
              </button>
            </div>

            <div>
              <button className="bg-gradient-to-l from-neutral-500 to-[#898864] text-sm w-full  text-white px-4 py-2">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 bg-gradient-to-l from-neutral-400 to-[#898864] mt-10 md:w-5/6 md:mx-auto md:px-4">
        <div className="md:flex md:border-2 md:border-neutral-200 md:p-4">
          <div className="md:w-2/3">
            <img src={imgHero} alt="img_hero" className="h-96 w-full " />
          </div>
          <div className="bg-gradient-to-l from-neutral-500 to-[#a09e5a] w-full md:bg-none md:text-black">
            <div className="w-3/4 mx-auto text-center border-slate-300 border-2 p-4  -mt-4  md:border-none md:text-left">
              <h2 className="text-black text-2xl italic">
                Your Creative Partner
              </h2>
              <h2 className="text-white text-3xl -mt-3 ">WHO WE ARE</h2>
              <p className="text-white text-left md:text-black md:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam placeat eum cumque vero asperiores commodi
                consectetur deleniti ipsum modi quidem nostrum enim dolore earum
                rem distinctio, laudantium iusto vel corporis! Quibusdam
                praesentium id temporibus odio vitae expedita ipsam rerum
                asperiores obcaecati eveniet similique culpa, est neque
                repellendus soluta officia? Voluptatem incidunt aliquam dolore.
                Molestias ducimus sunt vitae sit ullam delectus!
              </p>
              <p className="text-white mt-8 text-left md:text-black">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                temporibus est nemo, tempora omnis non eius placeat, nesciunt
                impedit quasi, consectetur minima dicta voluptates ducimus
                rerum! Error labore voluptatum molestiae!
              </p>
              <button className="border-2 border-white px-4 py-2  text-white mt-5">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-10 bg-gradient-to-l from-neutral-500 to-[#898864] md:mt-36 md:py-10">
        <div className="mx-auto w-2/3">
          <FaQuoteLeft className="size-8 mx-auto" />
          <p className="font-semibold italic mt-2 md:font-serif md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, cum a
            reprehenderit perspiciatis eos quaerat dolorem laborum dolor alias,
            deleniti minima temporibus magnam atque? Corrupti incidunt sed
            repellat doloremque! Consequuntur!
          </p>
        </div>
      </div>

      <div className="pt-10 bg-slate-100 mt-10 md:w-5/6 md:mx-auto md:px-4 md:bg-transparent ">
        <div className="md:flex md:p-4 md:flex-row-reverse">
          <div className="md:w-2/3 md:border-2 md:border-slate-200 md:p-4">
            <img
              src={imgHero}
              alt="img_hero"
              className="h-96 w-full md:-ml-10"
            />
          </div>
          <div className="bg-gradient-to-l from-neutral-500 to-[#a09e5a] w-full md:bg-none md:text-black">
            <div className="w-3/4 mx-auto text-center border-slate-300 border-2 p-4  -mt-4  md:border-none md:text-left">
              <h2 className="text-black text-2xl italic">
                Your Creative Partner
              </h2>
              <h2 className="text-white md:text-[#a09e5a] text-3xl -mt-3 ">
                INTERIOR DESIGN
              </h2>
              <p className="text-white text-left md:text-black md:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam placeat eum cumque vero asperiores commodi
                consectetur deleniti ipsum modi quidem nostrum enim dolore earum
                rem distinctio, laudantium iusto vel corporis! Quibusdam
                praesentium id temporibus odio vitae expedita ipsam rerum
                asperiores obcaecati eveniet similique culpa, est neque
                repellendus soluta officia? Voluptatem incidunt aliquam dolore.
                Molestias ducimus sunt vitae sit ullam delectus!
              </p>

              <button className="border-2 border-white px-4 py-2 md:border-black md:text-black text-white mt-5">
                GET CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-40">
        <div className="text-center">
          <div className="mx-auto w-2/3">
            <h2 className="text-black text-xl italic font-serif">
              Our Latest Completed Projects
            </h2>
            <p className="text-3xl font-bold  md:text-6xl  text-slate-900">
              INTERCOASTAL REMODEL
            </p>
          </div>
          <div className="pt-20">
            {" "}
            <div>
              <img
                src={ImageBg}
                alt="bg_img"
                className="h-[600px] md:w-screen"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 bg-slate-100 mt-10 md:w-5/6 md:mx-auto md:px-4 md:bg-transparent ">
        <div className="md:flex md:p-4">
          <div className="md:w-2/3 md:border-2 md:border-slate-200 md:p-4">
            <img
              src={imgHero}
              alt="img_hero"
              className="h-96 w-full md:-ml-10"
            />
          </div>
          <div className="bg-[#a09e5a] w-full md:bg-none md:text-black">
            <div className="w-3/4 mx-auto text-center border-slate-300 border-2 p-4  -mt-4  md:border-none md:text-left">
              <h2 className="text-black text-2xl italic">
                Your Creative Partner
              </h2>
              <h2 className="text-white md:text-[#a09e5a] text-3xl -mt-3 ">
                INTERIOR DESIGN
              </h2>
              <p className="text-white text-left md:text-black md:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam placeat eum cumque vero asperiores commodi
                consectetur deleniti ipsum modi quidem nostrum enim dolore earum
                rem distinctio, laudantium iusto vel corporis! Quibusdam
                praesentium id temporibus odio vitae expedita ipsam rerum
                asperiores obcaecati eveniet similique culpa, est neque
                repellendus soluta officia? Voluptatem incidunt aliquam dolore.
                Molestias ducimus sunt vitae sit ullam delectus!
              </p>

              <button className="bg-gradient-to-l text-white from-neutral-500 to-[#a09e5a] px-4 py-2  mt-5">
                GO TO YOUR SHOWROOM
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 mt-10  md:bg-gradient-to-l md:from-neutral-500 md:to-[#898864] md:mt-36 md:py-10">
        <div className="mx-auto w-2/3">
          <FaQuoteLeft className="size-8 mx-auto" />
          <p className="font-semibold italic mt-2 md:font-serif md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, cum a
            reprehenderit perspiciatis eos quaerat dolorem laborum dolor alias,
            deleniti minima temporibus magnam atque? Corrupti incidunt sed
            repellat doloremque! Consequuntur!
          </p>
        </div>
      </div>

      <div className="pt-10 bg-slate-100 mt-10 md:w-[90%] md:mx-auto md:px-4 md:border-2 md:p-8 md:border-slate-200 md:bg-transparent">
        <div className="md:flex  md:flex-row-reverse md:p-4">
          <div className="md:w-4/5">
            <img src={imgHero} alt="img_hero" className="h-96 w-full " />
          </div>
          <div className="bg-gradient-to-l from-neutral-500 to-[#a09e5a] w-full md:bg-none md:text-black">
            <div className="w-3/4 mx-auto text-center border-slate-300 border-2 p-4  -mt-4  md:border-none md:text-left">
              <h2 className="text-black text-2xl italic">
                Your Creative Partner
              </h2>
              <h2 className="text-white md:text-[#a09e5a] text-3xl -mt-3 ">
                INTERIOR DESIGN
              </h2>
              <p className="text-white text-left md:text-black md:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam placeat eum cumque vero asperiores commodi
                consectetur deleniti ipsum modi quidem nostrum enim dolore earum
                rem distinctio, laudantium iusto vel corporis! Quibusdam
                praesentium id temporibus odio vitae expedita ipsam rerum
                asperiores obcaecati eveniet similique culpa, est neque
                repellendus soluta officia? Voluptatem incidunt aliquam dolore.
                Molestias ducimus sunt vitae sit ullam delectus!
              </p>

              <button className="border-2 border-white px-4 py-2 md:border-black md:text-black text-white mt-5">
                READ BLOG
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 bg-slate-100 pb-20 md:mt-20">
        <div className="mx-auto w-2/3 md:w-full">
          <h2 className="text-[#898864] font-bold text-center text-2xl pb-10 md:text-6xl md:font-sans">
            Testimonials
          </h2>
          <div>
            <Slide>
              {slideImage2.map((slideImage, index) => (
                <div
                  key={index}
                  className="md:flex md:space-x-8 md:w-5/6 md:mx-auto"
                >
                  <div className="md:w-3/4">
                    <img
                      src={slideImage.url}
                      alt="sec_img"
                      className="w-full size-56 md:size-96 md:w-[600px] md:rounded"
                    />
                  </div>
                  <div className="md:pt-20 md:w-1/2">
                    <FaQuoteLeft className="size-8 mt-3  mx-auto" />
                    <h2 className="text-center font-semibold  italic">
                      {slideImage.heading}
                    </h2>
                    <p className="mt-3 italic">{slideImage.details}</p>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
