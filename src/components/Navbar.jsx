import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    //Container div
    <div className="flex flex-row border-b-2 mt-4 pb-2">
    {/* Div for logo */}
    <div className="flex flex-row">
        {/* Image div */}
        <div></div>

        {/* Text div */}
        <div></div>
    </div>
    {/* Buttons  */}
    <div className="flex flex-row gap-2">
       
        {/* Login button */}
        <Link to="/login">
        <div className="bg-blue-400 rounded-md px-3 py-1 cursor-pointer">
            <span>Login</span>
        </div>
        </Link>
       
        {/* Signup button */}
        <Link to="/signup">
        <div className="bg-blue-400 rounded-md px-3 py-1 cursor-pointer">
            <span>Signup</span>
        </div>
        </Link>
    
    </div>
    
    </div>
  )
}

export default Navbar