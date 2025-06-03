import { fakerEN } from "@faker-js/faker";
import { MakeArrayForSeed } from "../../utils/functions";
import { useEffect, useState } from "react";
import Animate from "../../components/Animate";
interface Idata {
  sentence: string;
  paragraph: string;
}

const FaqS = () => {
    useEffect(() => {
      document.title = "Faq's";
    }, []);

  const Paragraph = MakeArrayForSeed(() => fakerEN.lorem.lines(3), 15);
  const Sentence = MakeArrayForSeed(
    () => fakerEN.lorem.sentence({ min: 3, max: 5 }),
    15
  );
  const res: Idata[] = [];

  for (let i = 0; i < 15; i++) {
    res.push({
      sentence: String(Sentence[i]),
      paragraph: String(Paragraph[i]),
    });
  }

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <p className="text-center text-6xl font-bold mb-2">FAQ</p>
      <h6 className="text-center mb-8">Frequently Asked Questions</h6>

      <div className="max-w-4xl mx-auto space-y-6 mb-[6em]">
        {res.map((item, idx) => (
           <Animate>
          <div key={idx} className="border border-gray-300 rounded shadow-sm ">
            
            <button
              onClick={() => toggle(idx)}
              className={`w-full text-left px-6 py-4 font-semibold text-lg 
                focus:outline-none flex justify-between items-center
                ${openIndex === idx ? "bg-gray-100" : "bg-white"}`}
               
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
              id={`faq-header-${idx}`}
            >
              {item.sentence}
              {/* shape of toggler */}
              <svg
                className={`w-5 h-5 ml-4 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === idx && (
             
              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-header-${idx} `}
                className="px-6 pb-4 text-gray-700"
              >
                {item.paragraph}
              </div>
              
            )}
          </div>
          </Animate>
        ))}
      </div>
    </>
  );
};

export default FaqS;
