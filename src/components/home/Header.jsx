

const Header = () =>{
    return (
        <header className="flex h-96 items-center justify-center text-center bg-purple-400">
            <div className="">
                <div className="flex flex-col  gap-4 text-white ">
                    <h1 className="text-6xl font-semibold text-white">Welcome to Shoppit!</h1>
                    <p className="text-2xl ">Discover the latest trends with us</p>
                    
                    <a href="#shop" className="bg-slate-800 px-4 py-2 rounded-2xl w-full self-center max-w-[180px]">Shop now</a>
                    
                </div>
            </div>
        </header>
    )
}

export default Header