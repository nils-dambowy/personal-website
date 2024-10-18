import Potrait from "../assets/potrait.svg";
import { motion } from "framer-motion";

export default function Profile() {
    return (
        <article className="flex profile">
            <section className="flex flex-col justify-center items-center flex-grow">
                <div className="flex items-center"> 
                    <img src={Potrait} alt="potrait" className="mr-4" width="300" height="300" />
                    <div className="text-center">
                        <div className="text-7xl font-bold">
                            <motion.h1
                                initial={{  y: 15 }}
                                animate={{   y: [15,0,15]}}
                                transition ={{duration: 2, repeat: Infinity}}
                                >i&apos;m nils dambowy
                            </motion.h1>
                        </div>
                        <div className="text-4xl">
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
