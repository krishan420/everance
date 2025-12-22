import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { useRef } from "react";

const RouteTransition = () => {
  const location = useLocation();
  const isFirstLoad = useRef(true);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        isFirstLoad.current = false;
      }}
    >
      <motion.div
        key={location.key}
        initial={
          isFirstLoad.current
            ? false // ✅ NO animation on first load (Intro)
            : { opacity: 0.98, scale: 1.01 }
        }
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.98, scale: 1.01 }}
        transition={{
          duration: 0.85,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="min-h-screen relative"
        style={{ background: "transparent" }} // ✅ CRITICAL
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default RouteTransition;
