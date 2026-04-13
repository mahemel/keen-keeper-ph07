import LogoXL from "@/assets/logo-xl.png";
import Facebook from "@/assets/facebook.png";
import Twitter from "@/assets/twitter.png";
import Instagram from "@/assets/instagram.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="bg-dark-green mt-auto pt-20 pb-7.5">
            <div className="w-9/12 mx-auto text-base text-center flex flex-col items-center">
                <Link className="mb-4" href="/">
                    <Image
                        src={LogoXL}
                        alt="Footer Logo"
                        width={412}
                        height={61}
                    />
                </Link>

                <p className="text-white/80 text-base mb-6">
                    Your personal shelf of meaningful connections. Browse, tend,
                    and nurture the relationships that matter most.
                </p>

                <p className="text-xl text-white font-medium mb-4">
                    Social Links
                </p>
                <ul className="flex gap-3 mb-10">
                    <li>
                        <a href="#">
                            <Image
                                src={Instagram}
                                alt="Instagram logo"
                                width={40}
                                height={40}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Image
                                src={Facebook}
                                alt="Facebook logo"
                                width={40}
                                height={40}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Image
                                src={Twitter}
                                alt="Twitter logo"
                                width={40}
                                height={40}
                            />
                        </a>
                    </li>
                </ul>

                <div className="border-t border-[#1A8862]/20 pt-7.5 flex justify-between w-full text-white/50 text-base">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <ul className="flex gap-10">
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#">Cookies</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
