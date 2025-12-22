import { motion } from "framer-motion"; 
import { Check } from "lucide-react"; 
const features = [ 
    "Certified Cybersecurity Professionals",
     "Advanced Threat Detection & Response",
      "Custom Security Strategies for Your Needs",
       "24/7 Network Monitoring & Support", 
       "End-to-End Data Protection", 
       "Proven Defense Against Cyber Attacks",
     ]; 
     
     const AbtCompany = () => { 
        return ( 
        <section className="w-full bg-white py-20"> 
        < div className="max-w-7xl mx-auto px-6 lg:px-12">
             {/* Heading */} 
             <div className="text-center mb-16">
                 <p className="text-primary font-semibold tracking-wide mb-3"> Cybersecurity Experts </p>
                  <h2 className="font-heading text-3xl sm:text-4xl md:text-4xl font-bold text-black leading-tight"> Comprehensive Cybersecurity Solutions for 
                    <br className="hidden sm:block" /> Modern Threats </h2> 
                    </div> 
                    {/* Content */} 
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> 
                        {/* Left Images */} 
                        <div className="relative flex justify-center"> 
                            <motion.img 
                            src="/images/cyber-city.jpg" 
                            alt="Cyber city" c
                            lassName="rounded-xl w-[85%] shadow-lg" 
                            initial={{ opacity: 0, y: 30 }} 
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }} />
                             <motion.img src="/images/cyber-tablet.jpg" 
                             alt="Cyber tablet" className="absolute bottom-[-40px] right-0 w-[65%] rounded-xl shadow-xl" 
                             initial={{ opacity: 0, y: 40 }} 
                             whileInView={{ opacity: 1, y: 0 }} 
                             transition={{ duration: 0.8, delay: 0.2 }} /> 
                             </div> 
                             {/* Right Content */} 
                             <div> 
                                <p className="text-black-600  text-lg mb-6"> 
                                    We safeguard your business against evolving cyber threats with proactive defense, cutting-edge tools,
                                     and a dedicated team of experts. From small businesses to large enterprises, we deliver tailored 
                                     protection that keeps your data, systems, and reputation secure 24/7. </p> 
                                     {/* Features */} 
                                     <ul className="space-y-4 mb-8"> 
                                        {features.map((item, index) => 
                                        ( <li key={index} className="flex items-start gap-3 text-black-800"> 
                                        <Check className="text-primary mt-1" size={20} /> 
                                        <span className="text-base sm:text-lg">{item}</span> </li> ))} </ul> 
                                        {/* CTA */} 
                                        <button className="font-heading bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition"> 
                                        Request a Security Audit </button> </div> </div> </div> </section> ); }; export default AbtCompany;