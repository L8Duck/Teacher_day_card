import { useState } from "react"
import PropTypes from 'prop-types';
import Modals from "../Modals"
import TiltCard from "../TiltCard"
import BubbleText from "../bubbleText/BubbleText"

const MyCard = ({data}) => {
  const [OpenModal, setOpenModal] = useState(false)
  return (
    <div>
    <div className="h-screen grid w-full bg-gradient-to-br from-violet-500 to-indigo-500 px-4 py-12 text-slate-900">
      <div className="flex flex-col justify-start items-center">
        <div className="my-10">
        <BubbleText text={"Happy Teacher's Day"} />
        </div>
      <div onClick={() => setOpenModal(!OpenModal)}>
        <TiltCard teachername={data.teachername} />
      </div>
      </div>
    </div>
      <Modals isOpen={OpenModal} setIsOpen={setOpenModal} data={data}/>
    </div>
  )
}

MyCard.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    teachername: PropTypes.string,
    wish: PropTypes.string
})
};

export default MyCard