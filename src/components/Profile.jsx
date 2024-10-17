import Potrait from "../assets/potrait.svg";
import { motion } from "framer-motion";

export default function Profile() {
    return (
        <article className="flex h-5/6 profile">
            <section className="flex flex-col justify-center items-center flex-grow">
                <div className="flex items-center"> 
                    {/* <img src={Potrait} alt="potrait" className="w-2/5 h-2/5 mr-4" /> */}
                    <img src={Potrait} alt="potrait" className="mr-4 mt-96 mb-96" width="300" height="300" />
                    <div className="text-center">
                        <div className="mb-4 text-7xl font-bold">
                            <motion.h1
                                initial={{  y: 15 }}
                                animate={{   y: [15,0,15]}}
                                transition ={{duration: 2, repeat: Infinity}}
                                >i&apos;m nils dambowy
                            </motion.h1>
                        </div>
                        <div className="mb-4 text-4xl">
                            <motion.p
                                initial={{  y: 15 }}
                                animate={{   y: [15,0,15]}}
                                transition ={{duration: 2, repeat: Infinity}}
                                >computer science student
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
