import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function NotFoundView() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-6 md:px-12"
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0 mb-8 md:mb-0 md:mr-10"
      >
        <Image
          src="/404-page.png"
          alt="404 Not Found"
          width={400}
          height={400}
          className="max-w-full h-auto"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center md:text-left max-w-md"
      >
        <p className="text-base md:text-lg font-semibold text-[#935dd5] mb-8 md:ml-4 md:mt-3">
          We can’t find the page you’re looking for.
          <br />
          Maybe it’s lost in the kitchen 🍳
        </p>

        <Link href="/">
          <button
            className="rounded-full px-6 py-3 bg-[#ffe1df] text-[#e34e36] font-bold 
                       hover:bg-[#521d91] hover:text-white transition-all duration-300 
                       cursor-pointer outline-none"
          >
            Back to Homepage
          </button>
        </Link>
      </motion.div>
    </motion.main>
  );
}
