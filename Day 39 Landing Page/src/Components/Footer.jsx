function Footer(){
    return(
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            <ul className="flex gap-6 font-lato text-gray-400">
                <li>
                    <a href="#">Facebook</a>
                </li>
                <li>
                    <a href="#">Instagram</a>
                </li>
                <li>
                    <a href="#">Twitter</a>
                </li>
            </ul>
            <div className="flex gap-2">
                <div className=" w-12 h-12 rounded-full overflow-hidden">
                <img className="w-full object-center" src="./public/profil-girl-pic.jpg" alt="" />
                </div>
                <div>
                    <p className=" font-playfair font-thin">Have any Question?</p>
                    <a href="#" className=" font-lato font-medium">Talk to a spacialist</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;