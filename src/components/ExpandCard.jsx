import {motion} from "framer-motion"
import { useState } from "react"

const ExpandCard = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen grid p-0 m-0 justify-center items-center">
        <motion.div 
        className="bg-gray-300 p-5 rounded-2xl max-w-lg"
        onClick={() => setIsOpen(!isOpen)}
        layout
        transition={{layout: {duration:1, type:"spring"}}}>
            <motion.p layout="position" className="font-bold">
                Framer motion 😎
            </motion.p>
            {isOpen &&
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            exit={{opacity:1}}>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Nulla numquam dicta similique amet sunt totam exercitationem, 
                maiores fuga quos suscipit, error officia, ratione alias hic 
                in dolorum odio laborum nesciunt!
                </p>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Nulla numquam dicta similique amet sunt totam exercitationem, 
                maiores fuga quos suscipit, error officia, ratione alias hic 
                in dolorum odio laborum nesciunt!
                </p>
            </motion.div>
            }
        </motion.div>
    </div>
  )
}

export default ExpandCard