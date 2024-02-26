import Subfooter from "./Subfooter";

function Footer() {
  return (
    <div className=" relative left-0 bottom-0 w-full  text-white flex flex-col">
      <Subfooter />
      <div className="  bg-red-600  text-center flex flex-col gap-2 p-2 sm:flex-row sm:justify-center sm:gap-10">
        <h5>Copyright @ Himalayan Power Machine Mfg Co.</h5>
        <h5>Powered by Himalayan Power Machine Mfg Co.</h5>
      </div>
    </div>
  );
}

export default Footer;
