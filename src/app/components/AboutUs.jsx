export default function AboutUs() {
  return (
    <section className="py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">About Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Juan */}
        <div className="p-4 bg-[var(--background)] rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-[var(--primary)]">Juan</h3>
          <p>A headline about why I am a cool dude</p>
        </div>

        {/* Bob */}
        <div className="p-4 bg-[var(--background)] rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-[var(--primary)]">Bob</h3>
          <p>A headline about why I am a cool dude</p>
        </div>
      </div>
    </section>
  );
}
