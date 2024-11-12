import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import { 
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
 } from "../config/motion";
import Footer from "../components/Footer";

const Home = () => {
    const snap = useSnapshot(state);

  return (
    <>
        <AnimatePresence>
            {snap.intro && (
                <motion.article className="home"  {...slideAnimation('left')} >
                    <motion.header {...slideAnimation('down')}>
                        <img src="./ai.webp"
                        alt="logo"
                        className="w-12 h-12 object-contain"/>
                    </motion.header>
                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                LET&apos;S <br className="xl:block hidden"/> DO IT.
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                            <p className="max-w-md text-gray-600 font-normal">
                                Design your dream shirt in 3D with our groundbreaking customization tool. <strong>Let your creativity loose</strong>{" "}and express yourself.
                            </p>
                            <CustomButton
                                type="filled"
                                title="Customize it"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.article>
            )}
        </AnimatePresence>
        
        <motion.div className="z-10 w-full absolute bottom-0">
            <Footer />
        </motion.div>
    </>
  )
}

export default Home