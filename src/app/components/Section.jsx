export default function Section({ title, text, image, reverse }) {
  return (
    <section
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center max-w-6xl mx-auto my-16 p-6`}
    >
      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-3xl font-bold text-[var(--primary)]">{title}</h2>
        <p className="text-[var(--foreground)]">{text}</p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          className="rounded-full w-40 h-40 md:w-64 md:h-64 object-cover border-4 border-[var(--secondary)]"
        />
      </div>
    </section>
  );
}
