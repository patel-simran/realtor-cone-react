import { useLocation, useNavigate } from "react-router-dom"


export default function Header(){
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.pathname);
    function pathMathRoute(route){
        if(route === location.pathname){
            return true
        }
    }
    return(
    <div className="bg-white border-b shadwo-sm sticky top-0 z-50">
        <header className="flex justify-between items-center px-3 max-w-6xl">
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo"
                className="h-5 cursor-pointer"  onclick={()=>navigate("/")}></img>
    
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li className={`cursor-pointer py-3 text-sm fount-semibold text-gray-400 border-b-[3px] border-b-transparent>
                    ${pathMathRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>
                    <li className={`cursor-pointer py-3 text-sm fount-semibold text-gray-400 border-b-[3px] border-b-transparent>
                    ${pathMathRoute("/Offers") && "text-black border-b-red-500"}`} onClick={()=>navigate("/Offers")}>Offers</li>
                    <li className={`cursor-pointer py-3 text-sm fount-semibold text-gray-400 border-b-[3px] border-b-transparent>
                    ${pathMathRoute("/SignIn") && "text-black border-b-red-500"}`} onClick={()=>navigate("/SignIn")}>Sign In</li>

                </ul>
            </div>
        </header>
    </div>
)
}
