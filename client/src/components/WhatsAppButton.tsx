import { cn } from '@/lib/utils';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/919347455431" 
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300",
        "bg-[#25D366] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg",
        "hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      )}
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  );
};

export default WhatsAppButton;
