import { motion } from "framer-motion";
import PropTypes from "prop-types"
import { useState } from "react";
import { Link } from 'react-router-dom'

const tabs = ["Home","MyCard", "Explore"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="relative py-4 bg-slate-900 flex items-center justify-around just flex-wrap gap-2">
        <p className="text-lg font-bold text-white">{"Teacher's day"}</p>
        <div>
        {tabs.map((tab) => (
            <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
            />
            ))}
        </div>
        <div className="p-4 bg-white rounded-full"></div>
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <Link
    to={`/${text.toLowerCase()}`} 
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-lg transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </Link>
  );
};
Chip.propTypes = {
    text:PropTypes.string,
    selected:PropTypes.bool,
    setSelected:PropTypes.func
  };

export default ChipTabs;