import React from "react";
import { Check } from "lucide-react";
import { plans, faqs } from "../../Assets/data";
const Pricing = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 md:px-4">
      <div>
        {/* Hero Section */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 text-center md:pt-24">
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Simple, transparent pricing
          </p>
          <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veritatis voluptates neque itaque repudiandae sint, explicabo
            assumenda quam ratione placeat?
          </p>
        </div>
        <div className="mt-8 w-full space-y-4 md:mt-12">
          <div className="grid space-y-8 lg:grid-cols-3 lg:space-x-8 lg:space-y-0">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className=" rounded-2xl border border-gray-200 bg-white shadow"
              >
                <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
                  <p className="text-4xl font-bold leading-10">{plan.price}</p>
                  <div className="flex w-full flex-col items-start justify-start space-y-1">
                    <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                      {plan.name}
                    </p>
                    <p className="w-full text-base leading-normal text-gray-600">
                      Billed annually.
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start px-8 pb-10 pt-8">
                  <div className="flex w-full flex-col space-y-4">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="inline-flex w-full space-x-3"
                      >
                        <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                          <Check className="h-4 w-4" />
                        </div>
                        <p className="w-full text-base leading-normal text-gray-600">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex w-full flex-col px-8 pb-8">
                  <div className="flex w-full flex-col items-start justify-start space-y-3">
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Get Started
                    </button>
                    <button
                      type="button"
                      className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* FAQs */}
        <div className="mt-14 space-y-16 bg-white py-12">
          <div>
            <div className="">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-2xl font-bold leading-10 text-gray-900">
                    FAQS
                  </p>
                </div>
                <p className="max-w-xl text-base text-gray-600">
                  Everything you need to know about the product and billing.
                  Can&apos;t find the answer you&apos;re looking for? Please
                  chat to our friendly team.
                </p>
                <hr className="my-8" />
              </div>
            </div>
            {/* faq */}
            {faqs.map((item, index) => (
              <div
                key={`faq-group-${index}`}
                className="grid md:grid-cols-3 md:space-x-8"
              >
                {item.map((faq) => (
                  <div key={faq.question} className="my-8 space-y-5">
                    <div className="flex w-full flex-col space-y-2">
                      <p className="w-full text-lg font-semibold text-gray-900">
                        {faq.question}
                      </p>
                      <p className="w-full text-base leading-normal text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div className="mt-10">
              <div className="flex flex-col justify-between rounded-md bg-gray-50 p-4 md:flex-row md:items-center md:p-8 lg:space-x-8">
                <div className="space-y-2">
                  <p className="text-xl font-semibold leading-loose text-gray-900">
                    Still have questions?
                  </p>
                  <p className="text-base text-gray-600 md:text-lg md:leading-7">
                    Can&apos;t find the answer you&apos;re looking for? Please
                    chat to our friendly team.
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:mt-0"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </div>
  );
};

export default Pricing;
