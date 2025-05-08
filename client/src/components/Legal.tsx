import { Link } from 'wouter';

const Legal = () => {
  return (
    <div className="flex space-x-6 mt-4 md:mt-0">
      <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
      <Link href="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
    </div>
  );
};

export default Legal;