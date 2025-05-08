import React, { useState } from 'react';

// Checkmark Icon SVG Component
const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-green-500" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  monthlyPrice: number;
  annualPrice: number; // Assuming a 10-month cost for annual, adjust as needed
  description: string;
  features: PlanFeature[];
  highlight?: boolean; // To make one plan stand out
  buttonText?: string;
  userCount?: string; // For the "600 users" label
}

const plansData: Plan[] = [
  {
    name: 'Basic Plan',
    monthlyPrice: 99,
    annualPrice: 990, // 99 * 10
    description: 'Ideal for small practices with low lien volume needs',
    features: [
      { text: 'Up to 50 new patients per month', included: true },
      { text: 'Human Review for accuracy', included: true },
      { text: 'Report tracking dashboard', included: true },
      { text: 'Detailed Account Manager', included: true },
    ],
    buttonText: 'Get Started',
  },
  {
    name: 'Professional Plan',
    monthlyPrice: 199,
    annualPrice: 1990, // 199 * 10
    description: 'Ideal for growing practices that require constant guidance',
    features: [
      { text: 'Up to 50 new patients per month', included: true }, // Screenshot shows same as basic
      { text: 'Human Review for accuracy', included: true },
      { text: 'Report tracking dashboard', included: true },
      { text: 'Detailed Account Manager', included: true }, // Assuming this is an upgrade
    ],
    highlight: true,
    buttonText: 'Get Started',
    userCount: '600 users', // As per screenshot, on the slider for this plan
  },
  {
    name: 'Custom Plan',
    monthlyPrice: 299, // Screenshot shows 299, could be "Contact Us"
    annualPrice: 2990, // 299 * 10
    description: 'Tailored for large organizations with high lien volume needs',
    features: [
      { text: 'Custom solutions to fit your needs', included: true },
      { text: 'High volume report generation', included: true },
      { text: 'Detailed Account Manager', included: true }, // Corrected from "Deatiled"
      { text: 'Dedicated Support Line', included: true }, // Added example feature
    ],
    buttonText: 'Get Started', // Or "Contact Us"
  },
];


const Section7: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  const handleBillingCycleChange = (cycle: 'monthly' | 'annually') => {
    setBillingCycle(cycle);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-[64px] sm:text-4xl md:text-[64px] font-bold text-gray-800 text-center mb-8 pb-8">
          Flexible Plans to Grow with You
        </h2>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-10">
          <div className="relative flex p-1 bg-gray-200 rounded-full shadow-sm">
            <button
              onClick={() => handleBillingCycleChange('monthly')}
              className={`relative w-1/2 py-2 px-6 text-sm font-medium rounded-full transition-colors duration-300 focus:outline-none
                ${billingCycle === 'monthly' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-300'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleBillingCycleChange('annually')}
              className={`relative w-1/2 py-2 px-6 text-sm font-medium rounded-full transition-colors duration-300 focus:outline-none
                ${billingCycle === 'annually' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-300'}`}
            >
              Annually 
            </button>
          </div>
        </div>
        
        {/* User Count Slider Visual (Simplified) */}
        {/* This is a simplified visual representation. A functional slider would require more complex state and logic. */}
        <div className="relative w-full px-32 py-3">
          {/* Slider background track */}
          <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
            <div className="h-full w-[20%] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
          </div>

          {/* Slider thumb */}
          <div className="absolute top-1/2 left-[25%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-white border-4 border-blue-400 rounded-full shadow"></div>
          </div>

          {/* Tooltip */}
          <div className="absolute left-[25%] -top-6 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md shadow">
            600 users
          </div>
        </div>



        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch px-32 pt-20">
          {plansData.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl shadow-lg p-6 flex flex-col
                ${plan.highlight ? 'bg-purple-50 border-2 border-purple-600 transform scale-100 lg:scale-105' : 'bg-white border border-gray-200'}`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{plan.name}</h3>
              
              <div className="my-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-gray-500 text-sm">
                  /{billingCycle === 'monthly' ? 'month' : 'year'}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-2 min-h-[60px] pt-4">{plan.description}</p>

              <div className='h-[0.5px] bg-slate-300'></div>

              <ul className="space-y-3 mt-10 mb-8 flex-grow">
                {plan.features.map((feature, featIndex) => (
                  <li key={featIndex} className={`flex items-start ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                    <CheckIcon className={`w-5 h-5 mr-2 flex-shrink-0 ${feature.included ? 'text-purple-600' : 'text-gray-400'}`} />
                    <span className="text-base">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`w-full py-3 px-4 rounded-full font-semibold text-sm transition-colors duration-200
                  ${plan.highlight
                    ? 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500'
                    : 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 focus:ring-purple-300'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
              >
                {plan.buttonText || 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
