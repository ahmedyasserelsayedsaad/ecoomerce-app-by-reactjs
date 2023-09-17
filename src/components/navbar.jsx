import { Link } from "react-router-dom";
import "../css/appnav.css"
import Login from "./login";
import Register from "./register";
import { useSelector } from "react-redux";



const links=[
{
  path:'/about',
  title:'about'
},
{
  path:'/products',
  title:'products'
},
{
  path:'/contact',
  title:'contact'
},
{
  path:'/filtering',
  title:'filtering'
},
]
const AppNavbar = () => {

const cart=useSelector((state)=>state.cart)
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top ">
  <div className="container-fluid py-2">
  
    <button className="navbar-toggler"
     type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent" 
       aria-expanded="false"
        aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav d-flex text-align-center">
        <li className="nav-item color-red">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {
        links.map((item,index)=>(
          <li className="nav-item" key={index}>
          <Link className="nav-link " to={item.path}>{item.title}</Link>
        </li>
        ))
        }
         <li className="nav-item" >
          <Link className="nav-link " to='/cart'>Cart-<span style={{color:'red'}}>({cart.length})</span></Link>
        </li>
      </ul>
      
      <Link class="navbar-brand mx-auto mynav" to="/">ays tech</Link>
      
    </div>
    <Login />
    <Register />
  </div>
</nav>
  );
}

export default AppNavbar;