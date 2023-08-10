import { motion } from 'framer-motion';

const CustomMotionLink = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

export default CustomMotionLink;
