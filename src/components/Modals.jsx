import { AnimatePresence, motion } from "framer-motion";
import PropTypes from 'prop-types';
import { BsFlower1 } from "react-icons/bs";

const Modals = ({ isCollapse, setIsCollapse ,data}) => {
  return (
    <AnimatePresence>
      {isCollapse && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration:0.5}}
          onClick={() => setIsCollapse(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "10deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            transition={{duration:0.3}}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-xl w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <BsFlower1 className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-28 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <BsFlower1 size={50} />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Dear {data.teacherName}
              </h3>
              <p className="text-lg text-center mb-3">
              {data.wish}
              </p>
                <button
                  onClick={() => setIsCollapse(false)}
                  className="text-lg bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  {data.username}
                </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Modals.propTypes = {
  isCollapse: PropTypes.bool,
  setIsCollapse: PropTypes.func,
  data: PropTypes.shape({
    username: PropTypes.string,
    teachername: PropTypes.string,
    wish: PropTypes.string
  })
};

export default Modals;