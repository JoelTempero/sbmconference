import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import type { ReactNode } from 'react'

interface AnimatedElementProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedElement({ children, className, delay = 0 }: AnimatedElementProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-30px',
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
