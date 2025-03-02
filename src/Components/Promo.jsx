import { TbNumber25Small } from "react-icons/tb";

const Heading = [
    {id:1, subheading: "Our Projects"}
]

const Promo = ({ projectsRef }) => {
    return (
        <div ref={projectsRef} id="projects" className="bg-(--color-midnight)">
            <div className="px-2 pt-12 md:pt-16 lg:px-2 xl:px-2" data-aos="fade-up">
                <div className="text-center lg:pb-10">
                    {Heading.map((data) => (
                        <div key={data.id}>
                            <h3 className="text-2xl font-bold text-(--color-tahiti) lg:text-4xl">{data.subheading}</h3>
                            <p className="text-96 pt-2 font-bold lg:text-2xl text-white">Explore our kitchen designs</p>
                            <p className="px-4 pb-4 pt-2 text-white">Discover our diverse range of projects, where design meets functionality and style.</p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-7 md:px-10 lg:px-24 xl:px-44">
                    <div>
                        <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653505/design-one_xxqivu.jpg" alt="" className="rounded-xl" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653497/design-two_wbjxas.jpg" alt="" className="rounded-xl" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653517/design-three_m78edk.jpg" alt="" className="rounded-xl" />
                    </div>
                    <div className="hidden sm:block">
                        <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653480/design-four_syotgn.jpg" alt="" className="rounded-xl" />
                    </div>
                    <div className="hidden sm:block">
                        <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653512/design-five_ammvkp.jpg" alt="" className="rounded-xl" />
                    </div>
                    <div className="hidden sm:block">
                        <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653482/design-six_eihzse.jpg" alt="" className="rounded-xl" />
                    </div>
                </div>
                <div className="px-7 md:px-10 lg:px-24 xl:px-20">
                    <div className="pt-10 sm:flex sm:flex-row-reverse sm:justify-evenly">
                        <div className="relative overflow-hidden px-5 py-5 xs:px-10 xs:pb-7 dd:pb-14 mm:pb-24 sm:px-3 sm:pt-1 sm:pb-3 sm:w-[100%] md:pt-1 md:px-7 xl:pt-8">
                            <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653512/design-five_ammvkp.jpg" alt="" className="absolute inset-0" />
                            <div className="absolute inset-0 bg-(--color-gray) opacity-94"></div>
                            <div className="flex justify-center items-center">
                                <div className="">
                                    <p className="text-5xl relative text-(--color-gold) mm:text-7xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl"><TbNumber25Small /></p>
                                    <p className="pb-2 font-bold relative text-white xs:text-xl xs:pb-5 sm:pb-2 lg:text-2xl lg:pb-4 xl:text-2xl">Stunning kitchens, simplified process</p>
                                    <p className="relative text-white">
                                        Creating stunning kitchens with a simple, stress-free process. 
                                        From initial design to final installation, we make your vision 
                                        a reality with ease.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-full">
                            <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653485/25_q5poci.jpg" alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Promo;