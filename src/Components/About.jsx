import { FaArrowRight } from "react-icons/fa"

const Heading = [
    {id:1, subheading: "About Us"}
]

const Quotation1 = [
    {
        id:1,
        text: "[",
    },
]

const Quotation2 = [
    {
        id:2,
        text: "]",
    },
]

const About = ({ aboutRef }) => {
    return (
        <div ref={aboutRef} id="about" className="bg-(--color-midnight)">
            <div className="px-7 pt-12 md:pt-16 md:px-10 lg:px-24 xl:px-44">
                <div className="lg:pb-7">
                    {Heading.map((data) => (
                        <div key={data.id} className="text-center">
                            <h3 className="text-3xl font-bold text-(--color-tahiti) lg:text-4xl"> {data.subheading} </h3>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="lg:flex lg:w-full lg:gap-10">
                        <div className=" sm:flex justify-center gap-10" data-aos="fade-right">
                            <div className="flex justify-center pb-10">
                                <div>
                                    {Quotation1.map((data2) => (
                                        <div key={data2.id}>
                                            <div>
                                                <span className="text-9xl text-(--color-gray)">{data2.text}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center">
                                    <p className="text-8xl font-bold text-(--color-tahiti)">25</p>
                                    <p className="w-20 font-bold text-white">years experience working</p>
                                </div>
                                <div>
                                    {Quotation2.map((data3) => (
                                        <div key={data3.id}>
                                            <div>
                                                <span className="text-9xl text-(--color-gray)">{data3.text}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center sm:mt-6 lg:mt-0">
                                <p className="text-4xl text-center font-bold text-white">
                                    Creative solutions by professional designers
                                </p>
                            </div>
                        </div>
                        <div className="pt-10 lg:pt-0 lg:w-full" data-aos="fade-left">
                            <p className="text-white">
                                Transform your kitchen into a stylish and functional space with our 
                                expert designs. We blend creativity with practicality to craft kitchens 
                                that match your lifestyle. From modern minimalism to timeless classics, 
                                we bring your dream kitchen to life.
                            </p>
                            <div className="pt-5 flex justify-center lg:justify-start">
                                <button className="flex items-center gap-2 uppercase px-4 py-2 bg-(--color-gray) font-bold rounded-full text-white border-3 border-(--color-gray) hover:bg-transparent duration-400">
                                    <p>Continue Reading</p>
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;