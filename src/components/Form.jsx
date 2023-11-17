// Generate.jsx
import PropTypes from 'prop-types';
import { BsFlower1 } from "react-icons/bs";
import { PiFlowerLotusBold,PiFlowerTulipFill } from "react-icons/pi";
import { GiFlowers, GiButterflyFlower } from "react-icons/gi";

import {motion} from "framer-motion"

const Form = ({isOpen, Data, setData, onReset, handleInputChange }) => {
  return (
    <motion.div
    animate={isOpen? {opacity:1, transition:{delay:0.2}}:{opacity:0, transition:{duration:0.1}}}
      className='bg-gray-200 flex flex-col overflow-hidden border-2 p-6 rounded-lg w-[70%]'>
      <h1 className='font-bold text-2xl'>Make your own card</h1>
      <p className='mb-6'>modify your card here</p>
        <label className='text-sm font-semibold'>Your name is</label>
        <input
          type="text"
          name="username"
          value={Data.username}
          onChange={(e) => handleInputChange('username', e.target.value)}
        className='mb-2 px-1 bg-white border-2 border-gray-300 rounded'/>
        <label className='text-sm font-semibold'>This card is send to</label>
        <input
          type="text"
          name="teacherName"
          value={Data.teacherName}
          onChange={(e) => handleInputChange('teacherName', e.target.value)}
          className='mb-2 px-1 bg-white border-2 border-gray-300 rounded'/>
        <label className='text-sm font-semibold'>Write your wish</label>
        <textarea
          type="text"
          name="wish"
          value={Data.wish}
          onChange={(e) => handleInputChange('wish', e.target.value)}
          className='mb-2 px-1 bg-white border-2 border-gray-300 rounded'/>
        <p className='text-md'>too hard to write wish? Use ChatGPT</p>
        <button className='bg-green-600 text-white m-auto py-1 px-3 rounded-md'>generate wish</button>
        <div className='my-3 flex flex-col shadow-md rounded-lg'>
          <div className='flex place-content-center font-sans font-semibold'>Choose your style</div>
          <div className='m-2 flex justify-between'>
            <button onClick={() =>setData({ ...Data, theme: 'red' })} className="p-4 bg-red-500 rounded-full"></button>
            <button onClick={() =>setData({ ...Data, theme: 'blue' })} className='p-4 bg-blue-500 rounded-full'></button>
            <button onClick={() =>setData({ ...Data, theme: 'purple' })} className='p-4 bg-purple-500 rounded-full'></button>
            <button onClick={() =>setData({ ...Data, theme: 'pink' })} className='p-4 bg-pink-500 rounded-full'></button>
            <button onClick={() =>setData({ ...Data, theme: 'yellow' })} className='p-4 bg-yellow-500 rounded-full'></button>
          </div>
          <div className='text-4xl m-2 flex justify-between'>
            <BsFlower1 onClick={() =>setData({ ...Data, flower: 'bs' })} className='hover:cursor-pointer'/>
            <PiFlowerLotusBold onClick={() =>setData({ ...Data, flower: 'lotus' })}className='hover:cursor-pointer'/>
            <GiButterflyFlower onClick={() =>setData({ ...Data, flower: 'butterfly' })} className='hover:cursor-pointer'/>
            <GiFlowers onClick={() =>setData({ ...Data, flower: 'giflower' })} className='hover:cursor-pointer'/>
            <PiFlowerTulipFill onClick={() =>setData({ ...Data, flower: 'tulip' })} className='hover:cursor-pointer'/>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <button onClick={onReset} className=' m-auto px-4 py-1 rounded-md hover:bg-gray-200'>
            cancel
          </button>
        <button className='bg-blue-500 font-semibold m-auto px-3 py-1 shadow-md rounded-md hover:bg-blue-700'>
          save
        </button>
        </div>
    </motion.div>
  );
};

//chatgpt fetch function
const sendText = (message) => {
  fetch('http://localhost:3000/', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      input: message,
    }),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });
}

Form.propTypes = {
  isOpen: PropTypes.bool,
  Data: PropTypes.shape({
    username: PropTypes.string,
    teacherName: PropTypes.string,
    wish: PropTypes.string,
    theme: PropTypes.string,
    flower: PropTypes.string
  }),
  setData: PropTypes.func,
  onReset: PropTypes.func,
  handleInputChange: PropTypes.func
};
export default Form