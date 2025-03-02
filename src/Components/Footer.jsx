import { FaTwitter, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Heading = [
    {id:1, subheading: "Contact Us"},
]

const Footer = ({ contactRef }) => {
    return (
        <footer ref={contactRef} id="contact" className="bg-(--color-midnight)">
            <div className="px-7 pt-7 md:pt-16 md:px-10 lg:pb-10 lg:px-24 xl:px-44">
                <div className="text-center">
                    {Heading.map((header) => (
                        <div key={header.id} className="pb-4 lg:pb-10">
                            <h3 className="text-2xl pb-2 text-(--color-tahiti) font-bold lg:text-4xl">{header.subheading}</h3>
                            <p className="text-96 text-white font-bold sm:px-20 md:px-32 lg:px-44 lg:text-2xl xl:px-60">We can build the kitchen of your dreams</p>
                            <button className="bg-(--color-gray) border-3 border-(--color-gray) px-4 py-2 rounded-full text-white uppercase font-bold mt-4 hover:bg-transparent duration-400">Schedule & Chat</button>
                        </div>
                    ))}
                </div>
                <div className="grid gap-8 xl:grid-cols-2 xl:flex xl:justify-between xl:gap-0">
                    <div className="grid gap-4 sm:pb-0 sm:grid-cols-2 sm:gap-10 xl:grid-cols-1 xl:gap-2 xl:w-[70%] xl:mr-16">
                        <div>
                            <h4 className="pb-2 text-2xl text-white font-bold lg:pb-4 md:text-3xl">Luxuryy</h4>
                            <p className="text-white">Bringing your dream kitchen to life with expert design and craftsmanship.</p>
                        </div>
                        <div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl text-(--color-tahiti)">
                                        <FiPhoneCall />
                                    </div>
                                    <div>
                                        <p className="text-2xl text-white font-bold xl:text-base">+123 456 789</p>
                                        <p className="pb-3 text-(--color-tahiti)">Round-the-clock</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 text-white text-lg lg:text-2xl xl:gap-4">
                                    <div>
                                        <a href="/" className="hover:text-(--color-tahiti) duration-400">
                                            <FaTwitter />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="hover:text-(--color-tahiti) duration-400">
                                            <FaFacebookF />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="hover:text-(--color-tahiti) duration-400">
                                            <FaInstagram />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="hover:text-(--color-tahiti) duration-400">
                                            <FaWhatsapp />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4 lg:gap-5 xl:gap-2">
                        <div>
                            <h5 className="pb-2 font-bold uppercase text-white">Links</h5>
                            <div>
                                <ul className="text-white">
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            Projects
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            Blogs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h5 className="pb-2 font-bold uppercase text-white">Explore</h5>
                            <div>
                                <ul className="text-white">
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            Kitchen Cabinets
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            Counter Tops
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            Bathroom Varieties
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            Variety Tops
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h5 className="pb-2 text-white font-bold uppercase">Quick Links</h5>
                            <div>
                                <ul className="text-white">
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            Design & Quote
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            Warranty
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:text-gray-600 duration-400">
                                            Trade Partners
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 className="pb-2 text-white font-bold uppercase">Subscribe to our newsletter</h4>
                            <p className="pb-5 text-white">
                                Stay updated with the latest kitchen designs, tips, and trends.
                            </p>
                            <div className="flex justify-between px-5 bg-(--color-gray) py-3 rounded font-bold xl:block xl:py-1">
                                <div className="xl:pb-1">
                                    <a href="/" className="duration-400 hover:text-gray-500">Your email</a>
                                </div>
                                <div>
                                    <a href="/" className="text-white hover:text-gray-500 duration-400">Subscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;