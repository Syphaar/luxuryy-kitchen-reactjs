import { PiHandshakeThin } from "react-icons/pi";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { CiMedal } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import PropTypes from "prop-types"; // Import prop-types

const Heading = [
    {id:1, subheading: "Services"}
]

const offer = [
    {
        id:1,
        icon: <PiLightbulbFilamentLight />,
        text: "Full Service",
        des: "We provide end-to-end kitchen design solutions, making your dream space a reality.",
    },
    {
        id:2,
        icon: <GiMoneyStack />,
        text: "Deliver Value",
        des: " We deliver style, functionality, Quality, and lasting value in every kitchen we create.",
    },
    {
        id:3,
        icon: <PiHandshakeThin />,
        text: "Partners",
        des: "Collaborating with trusted partners to bring you the best in quality and innovation.",
    },
    {
        id:4,
        icon: <CiMedal />,
        text: "Integrity",
        des: "Dedicated to upholding integrity in every project, ensuring trust and excellence.",
    },
]

const Chooseus = ({ servicesRef }) => {
    return (
        <div ref={servicesRef} id="services" className="bg-(--color-midnight)">
            <div className="px-7 pt-12 md:pt-16 md:px-10 lg:px-24 xl:px-44" data-aos="fade-up">
                <div>
                    {Heading.map((header) => (
                        <div key={header.id} className="pb-10 text-center">
                            <h3 className="text-3xl font-bold text-(--color-tahiti) lg:text-4xl">{header.subheading}</h3>
                            <p className="text-96 font-bold text-white pt-2 lg:text-2xl">Extremely high standard of customer satisfaction</p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {offer.map((txt) => (
                        <div key={txt.id} className="text-center">
                            <div className="flex justify-center items-center">
                                <p className="flex justify-center items-center bg-(--color-gray) text-white text-5xl w-14 h-14 rounded-full">{txt.icon}</p>
                            </div>
                            <p className="pt-5 pb-1 text-white font-bold">{txt.text}</p>
                            <p className="text-white">{txt.des}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

// Define prop types
Chooseus.propTypes = {
    servicesRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

export default Chooseus;