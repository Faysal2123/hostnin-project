import Link from 'next/link';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

const ContactSection = ({
  title = "Do You Have Questions?",
  subtitle = "About Hostnin Budget Hosting Service"
}: ContactSectionProps) => {
  return (
    <div className='bg-[#fafbfc]'>
      <section className="bg-[#00052E] py-16 relative overflow-hidden max-w-7xl mx-auto">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-0 right-0 w-24 h-24 grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-blue-500/20 rounded-full" />
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center text-white space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="text-xl md:text-2xl">{subtitle}</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <Link 
              href="#"
              className="bg-[#0066FF] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Live Chat With Sales
            </Link>
            
            <Link 
              href="tel:01325875955"
              className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              01325 875 955 (24/7 WhatsApp)
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactSection; 