import { motion } from "framer-motion";
import { createRef } from "react";

const SliderButton = () => {
  const frame = createRef(null);
  return (
    <div
      className="w-[100vw] bordered flex item-center overflow-hidden "
      ref={frame}
    >
      <motion.div
        className="w-20 h-20  bg-red-500  flex flex-nowrap gap-48"
        drag="x"
        dragConstraints={frame}
      >
        <motion.div className="w-20 h-20 bg-blue-600 shrink-0 "></motion.div>
        <motion.div className="w-20 h-20 bg-red-600 shrink-0"></motion.div>
        <motion.div className="w-20 h-20 bg-blue-600 shrink-0 "></motion.div>
        <motion.div className="w-20 h-20 bg-red-600 shrink-0"></motion.div>
        <motion.div className="w-20 h-20 bg-red-600 shrink-0"></motion.div>
      </motion.div>
    </div>
  );
};

export default SliderButton;
