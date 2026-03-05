import { motion } from 'framer-motion'

interface PageHeroProps {
  image: string
  title?: string
  compact?: boolean
  belowHeader?: boolean
}

export default function PageHero({ image, title, compact, belowHeader }: PageHeroProps) {
  return (
    <div
      className={`relative ${compact ? 'h-[300px] md:h-[420px]' : 'h-[450px] md:h-[600px]'} bg-cover bg-center overflow-hidden`}
      style={{
        backgroundImage: `url(${image})`,
        ...(belowHeader ? {} : {}),
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      {title && (
        <div className="relative z-10 h-full flex items-end pb-12 md:pb-16">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-heading text-4xl md:text-6xl text-white tracking-wider drop-shadow-lg"
            >
              {title}
            </motion.h1>
          </div>
        </div>
      )}
    </div>
  )
}
