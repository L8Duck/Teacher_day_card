import { useState } from "react"
import {motion} from "framer-motion"
import Form from "../Form"
import Modals from "../Modals"
import TiltCard from "../TiltCard"
import BubbleText from "../bubbleText/BubbleText"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const Home = () => {
  const [Data, setData] = useState({
    username: '',
    teacherName: '',
    wish: '',
    theme:'',
    flower:''
  });
  const [isOpen, setIsOpen] = useState(false)
  const [OpenModal, setOpenModal] = useState(false)

  const handleInputChange = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const onReset = () => {
    setData({
      username: '',
      teacherName: '',
      wish: '',
      theme:'',
      flower:''
    });
  }
  return (
    <div className="relative flex">
      {/* form sidebar */}
      <motion.div
      initial={false}
        animate={isOpen? {width:"70%", transition:{duration:0.5}}:{width:"0%", transition:{duration:0.5}}}
        className="h-screen bg-indigo-300 overflow-hidden">
          <motion.div           
          className="h-5/6 rounded-r-xl mt-8 bg-gray-100 flex items-center justify-center overflow-hidden">
        <Form isOpen={isOpen} Data={Data} setData={setData} onReset={onReset} handleInputChange={handleInputChange}  />
          </motion.div>
      </motion.div>


      {/* gift card */}
      <div className="w-full bg-indigo-300 h-screen flex justify-between items-center">
        <button
          onClick={()=>setIsOpen(!isOpen)}
          className="py-10 bg-gray-100 rounded-r-lg">
            {isOpen? <IoIosArrowBack className="text-xl"/> : <IoIosArrowForward className="text-xl"/>}
        </button>
        <div className="flex flex-col justify-start items-center">
        <div className="my-5">
        <BubbleText text={"Happy Teacher's Day"} />
        </div>
          <div 
          onClick={() => setOpenModal(!OpenModal)}>
            <TiltCard teachername={Data.teacherName}/>
          </div>
      </div>
        <div></div>
      </div>
      <Modals isCollapse={OpenModal} setIsCollapse={setOpenModal} data={Data}/>
    </div>
  )
}

export default Home