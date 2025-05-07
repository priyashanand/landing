import React, { useState } from 'react';

// Plus Icon SVG Component
const PlusIcon: React.FC<{ className?: string }> = () => (
  <img src="src/assets/section8img1.png" alt="" className=' h-6 w-6'/>
);

// Minus Icon SVG Component
const MinusIcon: React.FC<{ className?: string }> = () => (
  <img src="src/assets/section8img2.png" alt="" className=' h-6 w-6'/>
);

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        <span>
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 text-sm leading-relaxed pr-8">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const faqData = [
  {
    question: 'Is there a free trial available?',
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: 'How does CasePilot integrate with our current tools?',
    answer: 'CasePilot offers seamless integration with a variety of popular legal tools and platforms. We provide open APIs and dedicated support to ensure a smooth transition and interoperability with your existing workflow. Contact our support team for specific integration queries.',
  },
  {
    question: 'Can AI really help my law firm?',
    answer: 'Absolutely! AI can automate repetitive tasks, provide data-driven insights for case strategy, improve client communication, and enhance overall efficiency. CasePilot leverages AI to help your firm save time, reduce errors, and focus on high-value legal work.',
  },
  {
    question: 'Does this replace my case management software?',
    answer: 'CasePilot can serve as a comprehensive case management solution or complement your existing software by adding advanced AI-powered features. Its modular design allows for flexibility depending on your firm\'s specific needs.',
  },
  {
    question: 'How does lien negotiation work in CasePilot?',
    answer: 'Our AI-powered lien negotiation module analyzes case data, historical outcomes, and provider billing to suggest optimal negotiation strategies. It automates communication and documentation, streamlining the entire lien resolution process for faster and more favorable settlements.',
  },
  {
    question: 'How long does CasePilot Case Management setup take?',
    answer: 'Setup time varies depending on the complexity of your firm\'s data and customization requirements. However, our dedicated onboarding team works to get most firms up and running within a few days to a week. We prioritize a swift and smooth transition.',
  },
];

const Section8: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 text-left">
            Frequently Asked
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-10 text-left">
            Questions
          </h2>

          {/* FAQ List */}
          <div>
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
