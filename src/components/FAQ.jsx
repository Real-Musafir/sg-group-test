import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const FAQS = [
  {
    question: 'Do I have to sign a long-term contract?',
    answer:
      'No, RemoteRecruit offers flexible month-to-month plans. You can cancel at any time without penalties or long-term commitments. We believe in earning your continued business with results, not contracts.',
  },
  {
    question: 'Can I pay for a whole year?',
    answer:
      'Yes! We offer annual billing at a discounted rate compared to monthly billing. Annual plans are billed upfront and provide full access to all premium features for the entire year.',
  },
  {
    question: 'What is this?',
    answer:
      "RemoteRecruit is the world's first fully global, fee-free job board. We connect talented professionals with companies worldwide — with no posting fees, no applicant fees, and no barriers to finding great remote work.",
  },
  {
    question: 'How does the fee-free model work?',
    answer:
      'Our free tier allows unlimited job postings and applications at no cost. We sustain the platform through optional Premium subscriptions that offer enhanced visibility, priority listings, and advanced analytics.',
  },
  {
    question: 'Can I post jobs from anywhere in the world?',
    answer:
      'Absolutely. RemoteRecruit is designed for global use. Employers can post jobs from any country, and job seekers can apply from anywhere. We support international payments via PayPal with no geographic restrictions.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full py-5 flex items-center justify-between text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-800 group-hover:text-sky-500 transition-colors text-base">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
            open
              ? 'bg-sky-500 border-sky-500 text-white rotate-180'
              : 'border-gray-300 text-gray-400 group-hover:border-sky-400 group-hover:text-sky-400'
          }`}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-3.5 h-3.5"
          >
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-48 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="faq" className="bg-white py-20 lg:py-28" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              Common Questions
            </h2>
            <p className="text-gray-400">Everything you need to know about RemoteRecruit</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6">
            {FAQS.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border border-sky-400 text-sky-500 px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-sky-50 transition-colors hover:-translate-y-0.5 hover:shadow-md transition-all">
              More Questions
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
