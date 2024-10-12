

const PlaceHolder = () =>{
    return(
        <div>
            <div className="flex flex-col items-center gap-3 justify-center border rounded-xl bg-white ">
                <div className="w-full h-60 object-cover rounded-md  bg-gray-200">
                 {/* image */}
                </div>
                <div className="flex flex-col items-center gap-3  px-2 p-4 w-full">
                   <div className="bg-gray-300 w-full object-cover h-6 rounded-md">
                     {/* <p className="bg-gray-400 w-full text-gray-500"></p> */}
                    </div>
                    <div className="bg-gray-300 w-full h-6 rounded-md">
                     {/* <p className="bg-gray-400 w-full text-gray-500"></p> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PlaceHolder