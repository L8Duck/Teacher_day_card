import PropTypes from 'prop-types'
import styles from "./bubble.module.css";

const BubbleText = ({text}) => {
  return (
    <h2 className="text-center text-5xl font-thin text-slate-300">
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

BubbleText.propTypes = {
    text: PropTypes.string.isRequired,
  };
  
export default BubbleText;