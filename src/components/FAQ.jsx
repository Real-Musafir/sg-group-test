const FAQS = [
  {
    question: 'Do I have to sign a long-term contract?',
    answer:
      'Actually beard single-origin coffee, twee 90’s PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90’s, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party.',
  },
  {
    question: 'Can I pay for a whole year?',
    answer:
      'Actually beard single-origin coffee, twee 90’s PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage.',
  },
  {
    question: 'What if I need help?',
    answer:
      'Actually beard single-origin coffee, twee 90’s PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90’s, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 lg:py-24" aria-labelledby="faq-heading">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <h2 id="faq-heading" className="text-ink font-bold text-3xl sm:text-4xl mb-12">
          Common Questions
        </h2>

        <div className="space-y-9 max-w-4xl">
          {FAQS.map(({ question, answer }) => (
            <div key={question}>
              <h3 className="text-ink font-semibold text-lg mb-2">{question}</h3>
              <p className="text-body leading-relaxed">{answer}</p>
            </div>
          ))}
        </div>

        <button className="mt-12 border border-brand/60 text-royal font-semibold text-sm px-7 py-3 rounded-xl hover:bg-pill/30 transition-colors">
          More Questions
        </button>
      </div>
    </section>
  )
}
