"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className=" flex items-center justify-center">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-blue-100 text-blue-700 dark:bg-blue-700/[0.2] dark:text-blue-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Aravind Miras",
    designation: "Product Design Lead, Team AV10",
    content: (
      <p>
        Working alongside the team on this Smart India Hackathon project has been an incredible experience. The solution we developed is not only technologically advanced but also deeply meaningful, addressing the critical issues of <Highlight>water conservation</Highlight> and <Highlight>sustainable agriculture</Highlight>. I'm proud to have contributed to a project that has the potential to make a real difference in the lives of farmers and the environment. This journey has been a testament to our collective passion and commitment.
      </p>
    ),
  },
  {
    id: 1,
    name: "Boobalan S",
    designation: "Professor, Mentor, Team AV10",
    content: (
      <p>
        The Smart India Hackathon project undertaken by our students is a remarkable contribution to the field of agriculture. Their innovative approach to <Highlight>water conservation</Highlight> through smart irrigation systems demonstrates a deep understanding of the challenges faced by farmers today. This project not only enhances crop yield but also ensures sustainable farming practices. It is heartening to see such dedication and creativity from our young engineers, and I am confident their solution will benefit the agricultural community immensely.
      </p>
    ),
  },
  {
    id: 2,
    name: "Nitish Kumar",
    designation: "Team Leader, Team AV10",
    content: (
      <p>
        Being a part of this project for the Smart India Hackathon has been truly inspiring. The innovation we brought to the table is a game-changer for agriculture, offering farmers a smarter way to manage <Highlight>water resources</Highlight>. I believe our work can lead to more sustainable and efficient farming practices, which is something our world desperately needs. Collaborating with such a talented and dedicated team has been an unforgettable experience, and I’m excited to see where this project goes.
      </p>
    ),
  },
];
