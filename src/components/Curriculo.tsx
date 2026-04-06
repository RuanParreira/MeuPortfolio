import { motion } from "framer-motion";

export default function Curriculo() {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="./curriculo.pdf"
      download="Ruan Gonçalves Parreira.pdf"
      className="button group flex h-14 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 font-bold text-white transition-all hover:bg-white/10"
      data-tooltip="Size: 128KB"
    >
      <div className="button-wrapper flex items-center gap-2">
        <div className="text whitespace-nowrap">CURRÍCULO</div>
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1.5em"
            height="1.5em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
            ></path>
          </svg>
        </span>
      </div>
    </motion.a>
  );
}
