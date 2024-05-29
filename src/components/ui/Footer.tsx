import Logo from "../../assets/logo-header-white.svg";

export default function Footer() {
  return (
    <div className="pt-10 bg-neutral-700 ">
      <div>
        <div className="text-center text-white md:px-40">
          <div className="md:flex md:justify-center md:space-x-20">
            <img src={Logo} alt="logo" className="size-40 mx-auto" />
            <div>
              <h2 className="font-bold text-xl">ARTISTIC ELEMENTS</h2>
              <p className="text-xs mt-2">400 E.Palmetto Park Rd.,</p>
              <p className="text-xs mt-1">Boca Raton, FL 33432</p>
              <p className="text-xs mt-4">+1 6237 7382</p>
              <p className="text-xs mt-1">info@theartisticel.com</p>
            </div>

            <div>
              <h2 className="font-bold text-xl mt-8">SHOWROOM HOURS</h2>
              <p className="text-xs ">Monday - Friday 10:00 -5:00</p>
              <p className="text-xs">Saturday - by apppointment</p>
            </div>

            <div>
              <h2 className="font-bold text-xl mt-8">ONLINE SHOP</h2>
              <p className="text-xs ">
                Now you can place ordr from our showroom online.
              </p>
            </div>
          </div>

          <button className="bg-gradient-to-l from-neutral-500 to-[#a09e5a] text-white px-3 py-2 mt-20 mb-10">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
