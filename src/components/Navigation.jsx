import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link to='/' className="navbar-brand" >Teacher Day</Link>
          </div>
        <div className="flex space-x-4">
            <div className="flex flex-row gap-5 navbar-nav">
            <Link to='/mycard' className="text-white hover:text-gray-300">My Card</Link>  
            <Link to='/generate' className="text-white hover:text-gray-300">Generate</Link>  
            <Link to='/explore' className="text-white hover:text-gray-300">Explore</Link>  
            <Link to='/login' className="text-white hover:text-gray-300">Login</Link>  
            <Link to='/register' className="text-white hover:text-gray-300">Register</Link>
            </div>
          </div>
      </div>
    </nav>
    )
}

export default Navigation

