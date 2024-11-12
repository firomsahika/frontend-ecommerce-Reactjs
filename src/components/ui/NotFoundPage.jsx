// import {Link} from 'react-router-dom'

const NotFoundPage = () =>{
   return(
    <header className="flex w-full h-96 items-center justify-center text-center bg-purple-400 mb-32">
    <div className="">
        <div className="flex flex-col  gap-4 text-white ">
            <h1 className="text-6xl font-semibold text-white">Page Not Found!</h1>
            <p className="text-2xl ">The page you tring accessing doesnot exist.</p>
            
            <a href="/" className="bg-slate-800 px-4 py-2 rounded-2xl w-full self-center max-w-[180px]">Back To Home </a>
            
        </div>
    </div>
</header>
)
   
}

export default NotFoundPage