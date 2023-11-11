import {motion} from 'framer-motion'
function App() {

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <motion.div 
      className="w-52 h-52 rounded-2xl bg-slate-600"
      animate={{rotate: 360}}
      transition={{delay:1}}>

      </motion.div>
    </div>
  )
}

export default App
