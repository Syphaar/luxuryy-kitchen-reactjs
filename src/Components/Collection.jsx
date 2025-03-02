const Collect = [
    {
        id:1,
        name: "country collection",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quam!",
        link: "read more",
    },
    {
        id:2,
        name: "concord collection",
        linkss: "read more",
    },
    {
        id:3,
        name: "classic collection",
        linkss: "read more",
    },
    {
        id:4,
        name: "luxor collection",
        linkss: "read more",
    },
]
    
const Collection = () => {
    return (
        <div className="bg-(--color-midnight)">
            <div className="px-7 md:px-10 lg:px-24 xl:px-20">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 sm:gap-10 xl:grid-cols-4 pt-7">
                    <div className="text-white bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653511/country_h9wine.jpg)] bg-cover bg-no-repeat bg-center rounded-xl">
                        <div className="grid gap-96 pl-7 pt-5 pb-5 pr-20">
                            <div>
                                <div>
                                    <p className="w-10 text-2xl text-white font-bold">Country Collection</p>
                                </div>
                                <div>
                                    <p className="font-bold uppercase mt-44 hover:text-gray-500 duration-400 lg:mt-64 xl:mt-40">Read More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653461/concord_kuejgl.jpg)] bg-cover bg-no-repeat bg-center rounded-xl">
                        <div className="grid gap-96 pl-7 pt-5 pb-5 pr-20">
                            <div>
                                <div>
                                    <p className="w-10 text-2xl font-bold">Concord Collection</p>
                                </div>
                                <div>
                                    <p className="font-bold uppercase mt-44 hover:text-gray-500 duration-400 lg:mt-64 xl:mt-40">Read More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653456/classic_eeatu2.jpg)] bg-cover bg-no-repeat bg-center rounded-xl">
                        <div className="grid gap-96 pl-7 pt-5 pb-5 pr-20">
                            <div>
                                <div>
                                    <p className="w-10 text-2xl font-bold">Classic Collection</p>
                                </div>
                                <div>
                                    <p className="font-bold uppercase mt-44 hover:text-gray-500 duration-400 lg:mt-64 xl:mt-40">Read More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653503/luxor_jcfzgt.jpg)] bg-cover bg-no-repeat bg-center rounded-xl">
                        <div className="grid gap-96 pl-7 pt-5 pb-5 pr-20">
                            <div>
                                <div>
                                    <p className="w-10 text-2xl font-bold">Luxor Collection</p>
                                </div>
                                <div>
                                    <p className="font-bold uppercase mt-44 hover:text-gray-500 duration-400 lg:mt-64 xl:mt-40">Read More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection;