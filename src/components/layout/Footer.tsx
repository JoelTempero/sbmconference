import { images } from '../../data/navigation'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-center tracking-wider mb-2">
            SBM Association Conference 2026
          </h2>
          <p className="font-display text-sm md:text-base text-center tracking-[0.2em] uppercase text-teal mb-10">
            15-17 July 2026 &nbsp;&bull;&nbsp; T&#257;kina Events Centre, Wellington
          </p>
          <div className="section-divider !mb-10" />
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto items-center">
            <div className="flex justify-center">
              <img
                src={images.footerWindIcon}
                alt="Wind icon"
                className="h-16 md:h-20 object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={images.footerImage}
                alt="SBM Conference"
                className="h-16 md:h-20 object-contain rounded-lg"
              />
            </div>
            <div className="flex justify-center">
              <a
                href="https://www.sbm.org.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={images.sbmIcon}
                  alt="SBM Association"
                  className="h-16 md:h-20 object-contain"
                />
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            School Business Managers' Conference 2026
          </div>
        </div>
      </div>
    </footer>
  )
}
