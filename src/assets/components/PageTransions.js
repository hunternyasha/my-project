import { motion } from "framer-motion";

// const zoomAnimat = {
//   initial: {
//     opacity: 1,
//     scale: 0.6,
//   },
//   animate: {
//     opacity: 1,
//     scale: 1,
//   },
//   exit: {
//     opacity: 0,
//     scale: 1,
//   },
// };
// const rotateAnimay = {
//   initial: {
//     rotateY: 90,
//   },
//   animate: {
//     rotateY: 0,
//   },
//   exit: {
//     rotateY: -90,
//   },
// };
// const zoomAnim = {
//   initial: {
//     scale: 0.7,
//     opacity: 1,
//   },
//   animate: {
//     scale: 1,
//     opacity: 1,
//   },
//   exit: {
//     scale: 0.7,
//     opacity: 0,
//   },
// };
const widthAnim = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
  },
  exit: {
    width: "100%",
    x:window.innerWidth
  },
};




const PageTransions = ({ children }) => {
  return (
    <motion.section
      className="aboutUs"
      transition={{
        ease: "easeInOut",
        duration: .5,
      }}
      variants={widthAnim}
      initial="initial"
      animate="animate"
      exit="exit">
      {children}
    </motion.section>
  );
};

export default PageTransions;
