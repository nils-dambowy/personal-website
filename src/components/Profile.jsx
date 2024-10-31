import Potrait from "../assets/potrait.svg";
import { motion } from "framer-motion";

export default function Profile() {
    return (
        <div className="profile flex flex-col items-center justify-center flex-grow h-full">
            <img
                src={Potrait}
                alt="portrait"
                className="mb-4 w-40 h-40 sm:w-96 sm:h-96"
            />
            <div className="text-center">
                <div className="font-bold text-2xl sm:text-3xl lg:text-7xl">
                    <motion.h1
                        initial={{y: 15}}
                        animate={{y: [15, 0, 15]}}
                        transition={{duration: 2, repeat: Infinity}}
                    >
                        I&apos;m Nils Dambowy
                    </motion.h1>
                </div>
                <div className="mt-2 text-base sm:text-lg lg:text-4xl">
                    <motion.p
                        initial={{y: 15}}
                        animate={{y: [15, 0, 15]}}
                        transition={{duration: 2, repeat: Infinity}}
                    >
                        Computer Science Student
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
