import PropTypes from "prop-types"; // Import prop-types

const Heading = [
    {id:1, subheading: "Our Blogs"}
]

const Content = [
    {
        id:1,
        image: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653500/first_b7zggo.jpg",
        header: "A stunning classic shaker kitchen in Benin",
        p1: "30 June 2021",
        p2: "By Admin",
        description: "Transform your space with the timeless beauty and craftsmanship of a classic shaker kitchen.",
        link: "Read More",
    },
    {
        id:2,
        image: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653511/second_cvrlbr.jpg",
        header: "A stunning country shaker kitchen in Abuja",
        p1: "16 March 2022",
        p2: "By Admin",
        description: "Create a warm, inviting atmosphere with our beautifully design, blending charm and timeless appeal.",
        link: "Read More",
    },
    {
        id:3,
        image: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653516/third_hrzj6h.jpg",
        header: "Gallery Style shaker kitchen in Lagos",
        p1: "2 February 2023",
        p2: "By Admin",
        description: "Experience the beauty of a gallery-style shaker kitchen, combining for a functional and stylish space.",
        link: "Read More",
    },
    {
        id:4,
        image: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740653500/fourth_n4d8cq.jpg",
        header: "Gallery Style shaker kitchen in Jos",
        p1: "13 October 2022",
        p2: "By Admin",
        description: "Experience the perfect blend of modern functionality designed to bring lasting appeal to your home.",
        link: "Read More",
    },
]

const News = ({ blogsRef }) => {
    return (
        <div ref={blogsRef} id="blogs" className="bg-(--color-midnight)">
            <div className="px-7 pt-12 md:pt-16 md:px-10 lg:px-24 xl:px-44">
                <div className="text-center">
                    {Heading.map((header) => (
                        <div key={header.id} className="pb-4 lg:pb-10">
                            <h3 className="text-2xl pb-2 text-(--color-tahiti) font-bold lg:text-4xl">{header.subheading}</h3>
                            <p className="text-96 text-white font-bold sm:px-20 md:px-32 lg:px-44 lg:text-2xl xl:px-60">Follow the latest news</p>
                        </div>
                    ))}
                </div>
                <div className=" sm:grid sm:grid-cols-2 sm:gap-10 xl:grid-cols-4">
                    {Content.map((comment) => (
                        <div key={comment.id} className="pb-5 sm:pb-0" data-aos="zoom-in">
                            <div>
                                <img src={comment.image} alt="" className="rounded-xl" />
                            </div>
                            <p className="text-xl text-white font-bold pt-3 sm:text-lg">{comment.header}</p>
                            <div className="flex gap-5 pt-2 pb-2 text-white lg:pb-4">
                                <p>{comment.p1}</p>
                                <p>{comment.p2}</p>
                            </div>
                            <p className="text-white pb-3">{comment.description}</p>
                            <p className="text-white font-bold uppercase"><a href={comment.link} className="hover:text-(--color-tahiti) duration-400">Read more</a></p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

// Define prop types
News.propTypes = {
    blogsRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

export default News;