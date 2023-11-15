import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import PropTypes from 'prop-types';
import { BsFlower1 } from "react-icons/bs";

const TiltCard = ({teachername}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-xl bg-white bg-opacity-60"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <BsFlower1
          style={{
            transform: "translateZ(75px)",
          }}
          className="text-purple-300 w-28 mx-auto text-4xl" size={120}
        />
        <button
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-white text-2xl font-bold bg-purple-300 p-2 rounded-xl shadow-lg mt-7"
        >
          Dear {teachername}
        </button>
      </div>
    </motion.div>
  );
};

TiltCard.propTypes = {
  teachername: PropTypes.string
};

export default TiltCard;