function Subfooter() {
  return (
    <div className="bg-black px-4 py-2 flex sm:flex-row gap-2 flex-col sm:justify-center md:gap-20">
      <div className="flex-col flex gap-2">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <div className="flex flex-col ml-4">
          <h3 className="font-semibold">Corporate Office</h3>
          <p>RZ-16, Yog Vision, Sayed Village, Near</p>
          <p>Meera Bagh, Pacshim Vihar,</p>
          <p>New Delhi-110087</p>
          <p>Email - hpmgenerator@gmail.com</p>
          <p>Phone: +91 83688582302</p>
        </div>
        <div className="flex flex-col ml-4">
          <h3 className="font-semibold">Manufacturing Plant</h3>
          <p>Part of Khasra No. 51 and 51 Ka, Village</p>
          <p>Kuanwala, haridwar road, Dehradun,</p>
          <p>Uttarakhand - 248001</p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Company</h2>
        <div className="flex flex-col ml-4">
          <a>About</a>
          <a>Why Buy a HPM</a>
          <a>Privacy Policy</a>
          <a>Return & Refund Policy</a>
          <a>Terms and Conditions</a>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Product</h2>
        <div className="flex flex-col ml-4">
          <a>Osprey Generators</a>
          <a>Oasis Generators</a>
          <a>Petrol / LPG Generators</a>
          <a>Kerosene Generators</a>
          <a>3 Phase Generators</a>
          <a>Welding Generators</a>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Environmental Initiatives</h2>
        <div>
          <img
            className=" object-contain h-28 m-2 "
            src="https://hpmgenerators.com/wp-content/uploads/2023/10/Untitled_design__4_-removebg-preview-e1699626097120.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Subfooter;
