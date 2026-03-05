import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { images } from '../data/navigation'
import { sponsors } from '../data/sponsors'

export default function Sponsors() {
  const gold = sponsors.filter((s) => s.tier === 'gold')
  const silver = sponsors.filter((s) => s.tier === 'silver')
  const bronze = sponsors.filter((s) => s.tier === 'bronze')

  return (
    <>
      <Helmet>
        <title>Conference Sponsors - School Business Managers' Conference 2026</title>
      </Helmet>

      <PageHero image={images.heroSponsors} compact />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedElement>
            <h2 className="font-heading text-3xl md:text-5xl text-center tracking-wider mb-4">
              Conference Sponsors
            </h2>
            <div className="section-divider" />
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <p className="text-lg text-center leading-relaxed mb-4 max-w-3xl mx-auto">
              The Association has a large group of Partners and Sponsors who support our annual conference.
              Some have been with our Association for many years and have found the conference exposure of benefit to their company, both at conference itself and in the subsequent years.
            </p>
            <p className="text-lg text-center leading-relaxed mb-12 max-w-3xl mx-auto">
              We sincerely thank them for their ongoing support!
            </p>
          </AnimatedElement>

          {/* Gold Business Partners */}
          <AnimatedElement>
            <div className="mb-14">
              <h3 className="font-heading text-2xl md:text-3xl text-center text-primary tracking-wider mb-8">
                Gold Business Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {gold.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center p-6 bg-white border-2 border-amber-200 rounded-xl hover:border-amber-400 shadow-sm card-hover"
                  >
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="max-h-20 md:max-h-24 object-contain group-hover:scale-105 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Silver Sponsors */}
          <AnimatedElement>
            <div className="mb-14">
              <h3 className="font-heading text-2xl md:text-3xl text-center text-gray-500 tracking-wider mb-8">
                Silver Sponsors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
                {silver.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-400 shadow-sm card-hover"
                  >
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="max-h-16 md:max-h-20 object-contain group-hover:scale-105 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Bronze Sponsors */}
          <AnimatedElement>
            <div className="mb-14">
              <h3 className="font-heading text-2xl md:text-3xl text-center text-amber-700 tracking-wider mb-8">
                Bronze Sponsors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {bronze.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="bg-white border border-gray-200 rounded px-4 py-3 text-center text-sm font-medium text-gray-700"
                  >
                    {sponsor.name}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* CTA */}
          <AnimatedElement>
            <div className="text-center bg-gradient-to-r from-primary/5 to-teal/5 border border-primary/10 rounded-xl p-8">
              <p className="text-lg">
                Bronze Sponsor applications for the 2026 Annual Conference are now <strong>OPEN</strong>.
              </p>
              <p className="text-lg">
                Please contact{' '}
                <a
                  href="mailto:deirdre@sbm.org.nz"
                  className="text-secondary hover:text-accent underline"
                >
                  Deirdre Moran, SBM Business Coordinator
                </a>{' '}
                for more information regarding sponsorship options for this year or beyond.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
