import { motion } from "framer-motion";

const services = [
  {
    title: "DIGITAL FORENSICS",
    subtitle: "End-to-End Data Protection",
    image: "/images/services/forensics.jpg",
    link: "#",
  },
  {
    title: "CYBERSECURITY",
    subtitle: "End-to-End Data Protection",
    image: "/images/services/cybersecurity.jpg",
    link: "#",
  },
  {
    title: "INVESTIGATION & COMPLIANCE",
    subtitle: "End-to-End Data Protection",
    image: "/images/services/compliance.jpg",
    link: "#",
  },
];

const Services = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/services-bg.jpg')",
        }}
      />

      {/* Grey overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wide mb-3">
            What We Provide
          </p>
          <h2 className="text-4xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            PROTECT YOUR PROGRESS
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We offer full-spectrum protection — from cyber forensics to
            enterprise-grade security and compliance support. Our strength lies
            in staying quietly present, always-on, and built around what
            matters most.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="text-primary font-bold text-lg tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {service.subtitle}
                </p>

                <a
                  href={service.link}
                  className="inline-block text-primary font-semibold hover:underline"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
