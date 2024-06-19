function Body(){
   return (
    <div className=" space-y-4">
        <div>
            <img src="./public/body img.png" alt="img" />
        </div>
        <div>
            <h1 className="text-5xl font-bold font-playfair leading-tight">Host Your website in less then 5 minutes.</h1>
            <p className=" font-lato text-gray-400">with Hoster , get your website up and running in no less then 5 minutes with the most competitives pricing packages available online.</p>
            <form action="" className="flex flex-col gap-4 m-4">
                <input className=" rounded-md px-4 py-3 placeholder:text-gray-400" type="email" placeholder="Enter email address" />
                <button className=" rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600">Join Waitlist</button>
            </form>
            <div className="flex gap-2 align-middle m-3">
                <img src="./public/checkmark-img.png" alt="checkMark" className=" w-6"/>
                <p className="font-lato text-gray-400">No spam, ever, unsubscribe anytime.</p>
            </div>
        </div>
    </div>
   )
}

export default Body;