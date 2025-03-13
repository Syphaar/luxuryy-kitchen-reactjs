import { FaArrowRight } from "react-icons/fa";

const Sectionone = ({ sectiononeRef }) => {
    return (
        <div ref={sectiononeRef} id="sectionone" className="relative w-full min-h-screen">
            {/* ✅ Background Fix: Prevent iPhone Zoom Issues */}
            <div className="fixed top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653474/bg_snov7k.jpg')] bg-cover bg-center bg-no-repeat -z-10"></div>

            {/* Content */}
            <div className="flex justify-center items-center w-full min-h-screen">
                <div className="text-white text-center px-7" data-aos="zoom-in">
                    <h2 className="text-4xl pb-5 capitalize font-bold sm:text-5xl sm:px-20 md:px-32 lg:px-56 xl:px-96">Design your kitchen with experts</h2>
                    <p>$180 deposit</p>
                    <p>3D Design & Measurement</p>
                    <div className="flex justify-center items-center pt-20 hover:border-white">
                        <button className="flex items-center gap-2 bg-white text-black font-bold px-4 py-2 rounded-full border-2 border-white duration-400 hover:bg-transparent hover:border-white hover:text-white">
                            <p className="uppercase">Visit show room</p>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectionone;