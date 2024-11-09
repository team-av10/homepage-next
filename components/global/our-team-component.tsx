"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Team Leader, Operations Head",
    title: "Nitish Kumar",
    src: "/m1.jpg",
    ctaText: "Follow",
    ctaLink: "https://www.linkedin.com/in/nitish-kumar-k-266442225/",
    content: () => {
      return (
        <p>
          As the team leader of Team AV10 team, I oversee project management, delegate tasks, and ensure timely execution. I handle technical aspects like Raspberry Pi, ROS, drones, and rovers, guiding the team through problem-solving, development, and implementation, while fostering collaboration and innovation to achieve project goals.
        </p>
      );
    },
  },
  {
    description: "Product Design Lead",
    title: "Aravind Miras",
    src: "/m2.jpg",
    ctaText: "Follow",
    ctaLink: "https://www.linkedin.com/in/aravind-miras-2789b8156/",
    content: () => {
      return (
        <p>
          As a design engineer, I specialize in creating and analyzing product designs in CAD, developing and fabricating electrical schematics, and programming to bring these designs to life. My role involves a blend of technical creativity and hands-on implementation to ensure functional, well-engineered products.
        </p>
      );
    },
  },

  {
    description: "Hardware",
    title: "Sheik Hameed",
    src: "/m3.jpg",
    ctaText: "Follow",
    ctaLink: "https://www.linkedin.com/in/sheikabul/",
    content: () => {
      return (
        <p>
          I assist in hardware development and are responsible for programming microcontrollers, ensuring the seamless integration of hardware and software to create efficient and functional systems. My role bridges the gap between hardware design and embedded software development.
        </p>
      );
    },
  },
  {
    description: "Mobile Application Developer",
    title: "Nithish U",
    src: "/m4.jpg",
    ctaText: "Follow",
    ctaLink: "https://www.linkedin.com/in/nithish-u/",
    content: () => {
      return (
        <p>
          I am responsible for developing mobile applications, integrating databases, and implementing the necessary features to create robust and user-friendly apps. My role involves both front-end and back-end development, ensuring seamless functionality and a smooth user experience.
        </p>
      );
    },
  },
  {
    description: "Machine Learning Engineer",
    title: "Usha Kalathinathan",
    src: "/m5.jpg",
    ctaText: "Follow",
    ctaLink: "https://www.linkedin.com/in/usha-kalathinathan-8a8536258/",
    content: () => {
      return (
        <p>
          I specialize in developing machine learning models and integrating them into web and mobile applications, as well as embedded devices. My role involves bridging the gap between advanced analytics and practical applications, ensuring seamless functionality across various platforms.
        </p>
      );
    },
  },
  {
    description: "UI / UX Developer",
    title: "Soma Sundari",
    src: "/m6.jpg",
    ctaText: "Follow",
    ctaLink: "https://www.linkedin.com/in/soma-sundari-r-201414226/",
    content: () => {
      return (
        <p>
         I focus on UI/UX design, developing web applications, and integrating databases. My role ensures that web applications are not only visually appealing and user-friendly but also function seamlessly with robust backend data systems. </p>
      );
    },
  },
  {
    description: "Our Beloved Mentor",
    title: "Boobalan S",
    src: "/m7.png",
    ctaText: "Follow",
    ctaLink: "https://www.linkedin.com/in/er-boobalan-s-0318722a4/",
    content: () => {
      return (
        <p>
         Our mentor, with a master's degree in Control Systems, is an exceptional guide whose expertise and insights greatly enhance our projects. Their deep understanding of control systems, combined with their mentorship, has been invaluable in navigating complex technical challenges and driving innovative solutions. </p>
      )
    },
  },
];
