import grainImage from '@/assets/images/grain.jpg';
import ArrowUpRightIcon  from '@/assets/icons/arrow-up-right.svg';


export const ContactSection = () => {
const handleContactClick = () => {
  const email = "ag125aa@gmail.com";
  const subject = encodeURIComponent("Let's work together");
  const body = encodeURIComponent("Hi Aniket,\n\nI’d like to discuss a project with you.");

  // mailto link
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  // Gmail compose link
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

  try {
    // Try mail client
    window.location.href = mailtoLink;

    // Fallback to Gmail after short delay
    setTimeout(() => {
      window.open(gmailLink, "_blank");
    }, 1000);
  } catch (err) {
    // If mail client fails instantly, go to Gmail
    window.open(gmailLink, "_blank");
  }
};
  return (
    <div id='contact' className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div 
          className="absolute inset-0 opacity-5 -z-10"
          style={{
            backgroundImage:`url{${grainImage.src}}`
          }}
          >
          </div>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>
                Let&apos;s create something amazing together
              </h2>
              <p className='text-sm md:text-base mt-2'>
                Ready to bring your next project to life? let&apos;s connect and discuss how I ca help you achieve your goals.
              </p>
            </div>
          <div>
            <button
              onClick={handleContactClick}
              className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 transition-all duration-300 ease-out
               hover:bg-black hover:scale-105 hover:shadow-lg group hover:border hover:border-white/70'>
              <span className='font-semibold'>Contact Me</span>
                  <ArrowUpRightIcon className="size-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
