import footer_logo from "/assets/logo5.png";
import fb from "/assets/fb.png";
import instagram from "/assets/instagram.png";
import twitter from "/assets/twitter.png";
import linkedin from "/assets/linkedin.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className=" bg-pink-500 text-[#000000]  ">
        <div className="flex flex-col gap-16 lg:gap-0 lg:flex-row lg:justify-around pt-7 pl-6 pb-5">
          <div>
            <img src={footer_logo} width={100} alt="" />
            <div className=" mt-10 mr-3">
              <p className="text-[#000000]">Follow us on Social Media</p>
              <div className="flex items-center mt-4 gap-6 ">
                <img src={fb} className=" w-6" alt="fb" />
                <img src={instagram} className=" w-6" alt="instagram" />
                <img src={twitter} className=" w-6" alt="twitter" />
                <img src={linkedin} className=" w-6" alt="linkedin" />
              </div>
            </div>
          </div>

          <div>
            <h3 className=" text-[#FCFCFC]">Links</h3>
            <div className="flex flex-col gap-4 mt-9">
              <Link to="#">Features</Link>
              <Link to="#">How it works</Link>
              <Link to="#">Courses</Link>
              <Link to="#">Contact Us</Link>
            </div>
          </div>

          <div>
            <h3 className=" text-[#FCFCFC]">Legal</h3>
            <div className="flex flex-col gap-4 mt-8">
              <Link to="#">Terms and Conditions</Link>
              <Link to="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className=" text-center py-6">
          <img src="" alt="" />
          <p>© Copyrights by Selim Thabet</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
