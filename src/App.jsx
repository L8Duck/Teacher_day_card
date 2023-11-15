//import {motion} from 'framer-motion'
import { useState } from 'react'
import {Routes, Route} from "react-router-dom"

import Home from './components/pages/Home'
import MyCard from './components/pages/MyCard'
import Generate from './components/pages/Generate'
import Explore from './components/pages/Explore'
import Login from './components/pages/Login'
import Register from './components/pages/Register'

import ChipTabs from "./components/ChipTabs"

function App() {
  const [appData, setAppData] = useState({
    username: 'me',
    teachername: 'somebody',
    wish: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi veritatis cumque, deleniti nostrum laudantium minima beatae incidunt quod voluptatem id ducimus? Eveniet ipsa iusto, modi veritatis tenetur dolor temporibus?',
});
  // Handle form submission in the parent component
  const onFormSubmit = async (data) => {
    await setAppData({
      username:data.username,
      teachername: data.teachername,
      wish: data.wish
    })
    // Do something with the form data, e.g., send it to a server
    await console.log('Form data submitted from MyApp:', appData);
  };

return (
  <div className="h-screen overflow-hidden container-fluid bg-slate-300">
    <ChipTabs/>
    <Routes>
      <Route path='/home' element={<Home />}></Route>  
      <Route path='/mycard' element={<MyCard data={appData}/>}></Route>  
      <Route path='/generate' element={<Generate onSubmit={onFormSubmit} />}></Route>  
      <Route path='/explore' element={<Explore />}></Route>  
      <Route path='/login' element={<Login />}></Route>  
      <Route path='/register' element={<Register />}></Route>  
    </Routes>
  </div>
  )
}

export default App

//export default MyApp;


// const MyForm = ({ formData, onInputChange, onSubmit }) => {
//   // Handle form input changes
//   const handleInputChangeLocal = (e) => {
//     const { name, value } = e.target;
//     // Call the parent component's onInputChange function
//     onInputChange(name, value);
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <label>
//         username:
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleInputChangeLocal}
//         />
//       </label>
//       <br />
//       <label>
//         teachername:
//         <input
//           type="text"
//           name="teachername"
//           value={formData.teachername}
//           onChange={handleInputChangeLocal}
//         />
//       </label>
//       <br />
//       <label>
//         wish:
//         <textarea
//           type="text"
//           name="wish"
//           value={formData.wish}
//           onChange={handleInputChangeLocal}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

