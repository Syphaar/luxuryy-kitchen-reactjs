const Heading = [
    {id:1, subheading: "Our Clients"}
]

const Customers = () => {
    return (
        <div className="bg-(--color-midnight)">
            <div className="px-7 pt-12 md:pt-16 md:px-10 lg:px-24 xl:px-44">
                <div className="text-center">
                    {Heading.map((header) => (
                        <div key={header.id} className="pb-4 lg:pb-10">
                            <h3 className="text-2xl pb-2 font-bold text-(--color-tahiti) lg:text-4xl">{header.subheading}</h3>
                            <p className="text-96 text-white font-bold sm:px-20 md:px-32 lg:px-44 lg:text-2xl xl:px-60">Here's what our satisfied clients are saying</p>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="text-white sm:flex sm:gap-10">
                        <div className="mb-10 px-5 py-5 bg-(--color-gray) rounded-xl sm:mb-0 lg:px-10 lg:py-7">
                            <p className="pb-5">
                                Working with this team was a fantastic experience! They truly 
                                understood our vision and brought it to life with incredible 
                                attention to detail. Our new kitchen is everything we wanted.
                            </p>
                            <div className="flex items-center gap-4">
                                <div>
                                    <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653505/peter_qyilad.jpg" alt="" className="w-16 h-16 rounded-full bg-contain bg-center bg-no-repeat" />
                                </div>
                                <div>
                                    <p className="font-bold">Peter Peter</p>
                                    <p>Web developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 py-5 bg-(--color-gray) rounded-xl lg:px-10 lg:py-7">
                            <p className="pb-5">
                                From the initial consultation to the final touches, the process 
                                was seamless. The team delivered a design that perfectly matches 
                                our style and needs. We’re beyond thrilled with our new kitchen.
                            </p>
                            <div className="flex items-center gap-4">
                                <div>
                                    <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653504/nsidibe_b0qcve.jpg" alt="" className="w-16 h-16 rounded-full bg-cover bg-center bg-no-repeat" />
                                </div>
                                <div>
                                    <p className="font-bold">Nsidibe Matthew</p>
                                    <p>Product Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers;