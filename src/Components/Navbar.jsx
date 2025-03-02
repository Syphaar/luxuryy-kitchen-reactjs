import { useState } from "react";

// links to the page
const Navbar = ({ scrollToSection, activeSection }) => {
    let Links = [
        {lname:"Home", link:"sectiononeRef", number:"01. ", id: "sectionone"},
        {lname:"About", link:"aboutRef", number:"02. ", id: "about"},
        {lname:"Services", link:"servicesRef", number:"03. ", id: "services"},
        {lname:"Projects", link:"projectsRef", number:"04. ", id: "projects"},
        {lname:"Blogs", link:"blogsRef", number:"05. ", id: "blogs"},
        {lname:"Contact", link:"contactRef", number:"06. ", id: "contact"},
    ]

    let [open, setOpen] = useState(false);

    const handleLinkClick = (ref) => {
        scrollToSection(ref); // Scroll to the section
        setOpen(false); // Close the navbar after clicking a link
    };

    return (
        <div className="shadow-md w-full sticky top-0 left-0 z-40">
            <div className="md:flex items-center justify-between bg-(--color-midnight) py-4 px-7 md:px-10 lg:px-24 xl:px-44">
                <div className="font-bold text-3xl cursor-pointer flex items-center text-white">
                    <a href="/">Luxuryy</a>
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden">
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 text-center bg-(--color-midnight) transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                    {Links.map((link) => (
                            <li key={link.lname} className="md:ml-6 lg:ml-8 text-xl md:my-0 my-7">
                                    <a onClick={() => handleLinkClick(link.link)} className={`font-bold duration-500 ${ activeSection === link.id ? "text-(--color-gold)" : "text-white"} hover:text-(--color-gold)`}>{link.lname}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;