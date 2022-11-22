import { motion } from 'framer-motion';

const transition = {
  duration: 3,
  ease: 'easeInOut',
  times: [0.3, 0.5, 0.8, 1],
  repeat: Infinity,
};
export const ServerMotion = () => {
  return (
    <svg width="459" height="206" viewBox="0 0 459 206" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="220.342" height="139" rx="7.5" fill="#FEFDFB" stroke="#C2BDBA" />
      <rect x="237.582" y="66.5" width="220.342" height="139" rx="7.5" fill="#FEFDFB" stroke="#C2BDBA" />
      <rect x="63.4531" y="20" width="98.866" height="100.5" rx="49.433" fill="#3C9AF1" />
      <motion.rect
        animate={{ translateX: [0, 20, 20, 0] }}
        transition={transition}
        x="22.627"
        y="42.5"
        width="155.923"
        height="78"
        rx="39"
        fill="#3C9AF1"
      />
      <motion.path
        animate={{ translateY: [0, -10, -10, 0] }}
        transition={transition}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M296.568 164.5C289.251 164.5 283.318 170.432 283.318 177.75C283.318 185.068 289.251 191 296.568 191H398.938C406.256 191 412.188 185.068 412.188 177.75C412.188 170.432 406.256 164.5 398.938 164.5H296.568ZM296.353 183.5C299.477 183.5 302.009 180.926 302.009 177.75C302.009 174.574 299.477 172 296.353 172C293.229 172 290.696 174.574 290.696 177.75C290.696 180.926 293.229 183.5 296.353 183.5Z"
        fill="#855CF9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M296.568 122.5C289.251 122.5 283.318 128.432 283.318 135.75C283.318 143.068 289.251 149 296.568 149H398.938C406.256 149 412.188 143.068 412.188 135.75C412.188 128.432 406.256 122.5 398.938 122.5H296.568ZM296.353 141.5C299.477 141.5 302.009 138.926 302.009 135.75C302.009 132.574 299.477 130 296.353 130C293.229 130 290.696 132.574 290.696 135.75C290.696 138.926 293.229 141.5 296.353 141.5Z"
        fill="#855CF9"
      />
      <motion.path
        animate={{ translateY: [0, 10, 10, 0] }}
        transition={transition}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M296.568 81C289.251 81 283.318 86.9322 283.318 94.25C283.318 101.568 289.251 107.5 296.568 107.5H398.938C406.256 107.5 412.188 101.568 412.188 94.25C412.188 86.9322 406.256 81 398.938 81H296.568ZM296.353 100C299.477 100 302.009 97.4256 302.009 94.25C302.009 91.0744 299.477 88.5 296.353 88.5C293.229 88.5 290.696 91.0744 290.696 94.25C290.696 97.4256 293.229 100 296.353 100Z"
        fill="#855CF9"
      />
    </svg>
  );
};
