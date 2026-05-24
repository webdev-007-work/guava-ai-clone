const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Most projects take between 3–14 business days depending on complexity.",
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Yes, revisions are included depending on project scope.",
  },
  {
    question: "Do you manage social media growth?",
    answer:
      "Yes, we provide complete content and growth systems.",
  },
];

export default function FAQ() {
  return (
    <section className="py-32 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">
          <span className="inline-block bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-medium mb-6">
            FAQ
          </span>

          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-[30px] p-8"
            >
              <h3 className="text-2xl font-semibold">
                {faq.question}
              </h3>

              <p className="text-gray-600 mt-4 text-lg">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}