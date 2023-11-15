// Generate.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const Generate = ({ onSubmit }) => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    teachername: '',
    wish: '',
  });

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    await e.preventDefault();
    await console.log("formdata:",formData)
    //appear success title
    await setIsSuccess(!isSuccess)
    await onSubmit(formData);
    // reset form
    await setFormData({
      username: '',
      teachername: '',
      wish: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-screen grid w-full items-start justify-center bg-gradient-to-br from-violet-500 to-indigo-500 py-12 text-slate-900">
        {/* success title */}
       {isSuccess && <div className='absolute w-full flex place-content-center'>
          <div className='p-1 rounded-lg bg-green-400 bg-opacity-70'>
           <p className='font-bold text-white'>🎉 you have created a card successfully 🎉</p>
          </div>
        </div>}
        {/* main form */}
        <div className="mt-28 flex flex-col place-content-center bg-black bg-opacity-40 p-4 rounded-lg">
          {/* title */}
          <div className="flex justify-center bg-violet-400 bg-opacity-70 p-2 rounded-lg ">
            <h3 className="font-bold text-xl text-white">Generate form</h3>
          </div>
          <div className="flex">
            {/* username input */}
            <div className="relative z-0 m-4">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                id="username" // unique id
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer"
                />
              <label
                htmlFor="username"
                className="absolute text-md font-bold text-gray-400 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                Your name is
              </label>
            </div>
            {/* teachername input */}
            <div className="relative z-0 m-4">
              <input
                type="text"
                name="teachername"
                value={formData.teachername}
                onChange={(e) => handleInputChange('teachername', e.target.value)}
                id="teachername" // unique id
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer"
                />
              <label
                htmlFor="teachername"
                className="absolute text-md font-bold text-gray-400 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                You send to
              </label>
            </div>
          </div>
          {/* wish input */}
          <div className="relative z-0 m-4">
            <textarea
              type="text"
              name="wish"
              value={formData.wish}
              onChange={(e) => handleInputChange('wish', e.target.value)}
              id="wish" // unique id
              className="block py-10 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer"
              />
            <label
              htmlFor="wish"
              className="absolute text-md font-bold text-gray-400 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
              Your wish
            </label>
          </div>
          <div className="flex place-content-center">
            <button
              onClick={() => sendText(`my name is ${formData.username}. I want you to write me a gift card for ${formData.teachername}. ${formData.wish}`)}
              className="mx-2 rounded-2xl border-2 border-dashed border-violet-700 bg-violet-400 px-6 py-3 font-bold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
              >
              Generate
            </button>
                {/* submit button */}
            <button
              type="submit"
              className="mx-2 rounded-2xl border-2 border-dashed border-violet-700 bg-violet-400 px-6 py-3 font-bold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
              >
              submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

//chatgpt fetch
const sendText = ({guide}) => {
  fetch('http://localhost:3000/', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      input: guide,
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

Generate.propTypes = {
  onSubmit: PropTypes.func
};
export default Generate