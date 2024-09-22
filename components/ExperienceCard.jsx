import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ExperienceCard({ type, data }) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const itemVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
        },
    };

    if (type === 'education') {
        return (
            <Link href={data.link}>
            <motion.div
                ref={ref}
                variants={itemVariants}
                initial="initial"
                animate={isInView ? "animate" : ""}
                className={`flex justify-center items-center gap-4 bg-white text-black rounded-lg p-4 max-w-[400px] md:mr-[500px]`}
            >
                <Image
                    src={data.imageSrc}
                    alt=""
                    width={96}
                    height={96}
                    className="rounded-full"
                />
                <div className="flex flex-col justify-center">
                    <p>{data.university}</p>
                    <p>{data.degree}</p>
                    <p>{data.duration}</p>
                    </div>
                </motion.div>
            </Link>
        );
    } else if (type === 'work') {
        return (
            <motion.div
                ref={ref}
                variants={itemVariants}
                initial="initial"
                animate={isInView ? "animate" : ""}
                className={`flex justify-center items-center gap-4 bg-white text-black rounded-lg p-4 max-w-[400px] md:ml-[500px]`}
            >
                <Link href={data.link}>
                    <div className="flex flex-col justify-center">
                        <p>{data.title}</p>
                        <p>{data.company}</p>
                        {data.department && <p>{data.department}</p>}
                        <p className="relative">
                            {data.duration}
                            <span className="right-0 absolute">
                                <Image
                                    src="/fast-forward.png"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="hover:scale-125"
                                />
                            </span>
                        </p>
                    </div>
                </Link>
            </motion.div>
        );
    }

    return null;
}