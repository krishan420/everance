import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/why-us.jpg"
              alt="Cyber Defense"
              className="rounded-2xl w-full shadow-xl"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold tracking-wide mb-3">
              Why Choose Us
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Complete Cyber Defense <br className="hidden sm:block" />
              Against Modern Attacks
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
              Stay protected with a fully integrated defense strategy built for
              today’s complex cyber landscape. From ransomware to phishing and
              zero-day exploits, we provide comprehensive protection across
              networks, endpoints, and cloud environments.
            </p>

            {/* CTA BUTTON */}
            <motion.button
              whileHover={{
                y: -3,
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(255,103,0,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Request a Security Audit
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
