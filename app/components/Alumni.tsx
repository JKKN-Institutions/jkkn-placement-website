const alumni = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Alumni ${i + 1}`,
  initial: String.fromCharCode(65 + (i % 26)),
}));

export default function Alumni() {
  return (
    <section id="alumni" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Our Pride
          </p>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">
            <span className="text-green">Alumni</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {alumni.map((person) => (
            <div
              key={person.id}
              className="group cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-24 items-center justify-center bg-gradient-to-br from-green/10 to-green/5 sm:h-28">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/30 bg-white text-lg font-bold text-green">
                  {person.initial}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
