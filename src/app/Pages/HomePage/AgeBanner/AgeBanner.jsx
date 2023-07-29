import "./AgeBanner.css";
import { motion, useDragControls } from "framer-motion";
import { createRef } from "react";
import agebaby from "../../../../assets/HomeBanner/thumb-1.webp";
import age2 from "../../../../assets/HomeBanner/thumb-2.webp";
import age3 from "../../../../assets/HomeBanner/thumb-3.webp";
import age4 from "../../../../assets/HomeBanner/thumb-4.webp";
import age5 from "../../../../assets/HomeBanner/thumb-5.webp";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const AgeBanner = () => {
  const frame = createRef(null);
  const controls = useDragControls();
  return (
    <div>
      <div
        className="w-[100vw] h-[15vw] bordered flex item-center overflow-hidden "
        ref={frame}
      >
        <motion.div
          className="w-20 h-20   flex flex-nowrap gap-48"
          drag="x"
          dragConstraints={{ left: -250, right: 100 }}
          dragControls={controls}
        >
          <motion.div id="btn01" className="w-30 h-30  shrink-0 ">
            <button>
              <img src={agebaby} alt="" />
            </button>
          </motion.div>
          <motion.div className="w-30 h-30  shrink-0">
            <button>
              <img src={age2} alt="" />
            </button>
          </motion.div>
          <motion.div className="w-30 h-30  shrink-0 ">
            <button>
              <img src={age3} alt="" />
            </button>
          </motion.div>
          <motion.div className="w-30 h-30  shrink-0">
            <button>
              <img src={age4} alt="" />
            </button>
          </motion.div>
          <motion.div className="w-30 h-30  shrink-0">
            <button>
              <img src={age5} alt="" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex justify-center">
        <div className=" w-52  flex justify-around items-center">
          <div>
            <button>
              <IoIosArrowBack />
            </button>
          </div>
          <div></div>
          <div>
            <button>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeBanner;
