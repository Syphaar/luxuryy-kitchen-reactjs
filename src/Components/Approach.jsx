const Approach = () => {
    return (
        <div className="bg-(--color-midnight)">
            <div className="px-7 md:px-10 lg:px-24 xl:px-20">
                <div className="pt-10 sm:flex sm:justify-evenly">
                    <div className="relative overflow-hidden px-5 py-5 xs:px-10 xs:pb-10 mm:pb-28 sm:px-3 sm:pt-1 sm:pb-3 sm:w-[100%] md:pt-1 md:px-7 lg:pt-7 xl:pt-18">
                        <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653485/25_q5poci.jpg" alt="" className="absolute inset-0" />
                        <div className="absolute inset-0 bg-(--color-gray) opacity-94"></div>
                        <div className="flex justify-center items-center">
                            <div className="">
                                <p className="text-(--color-gold) font-bold uppercase text-xl mm:text-2xl sm:text-2xl lg:text-4xl xl:text-4xl relative">Method</p>
                                <p className="pb-2 pt-1 font-bold relative text-white xs:text-xl xs:pb-5 sm:pb-2 lg:text-2xl lg:pb-4 xl:text-2xl">A modern approach to design</p>
                                <p className="relative text-white">
                                    With a focus on contemporary style and practicality, our modern 
                                    designs transform kitchens into functional works of art.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-full">
                        <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653497/design-two_wbjxas.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Approach;