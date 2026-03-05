import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { images } from '../data/navigation'
import { accommodationOptions } from '../data/accommodation'
import { Link } from 'react-router-dom'

export default function Accommodation() {
  return (
    <>
      <Helmet>
        <title>Accommodation - School Business Managers' Conference 2026</title>
      </Helmet>

      <PageHero image={images.heroAccommodation} compact />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <h2 className="font-heading text-3xl md:text-5xl text-center tracking-wider mb-4">
              Accommodation
            </h2>
            <div className="section-divider" />
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <p className="text-lg text-center leading-relaxed mb-4">
              Please see below for a selection of accommodation providers within the area with whom we have been able to negotiate delegate rates. Bookings can be made via the registration page when you register for the event, or you can contact{' '}
              <a
                href="mailto:KiaOra@eventsmart-conferences.co.nz"
                className="text-secondary hover:text-accent underline"
              >
                EventSmart
              </a>{' '}
              for assistance with bookings separate to your conference registration.
            </p>
            <p className="text-center italic text-sm text-gray-600 mb-10">
              <strong>Please note that accommodation is subject to availability and the best available rate of the day.<br />
              Further options for accommodation throughout the city is available via online booking sites</strong>
            </p>
          </AnimatedElement>

          {/* Accommodation Rates Table */}
          <AnimatedElement>
            <div className="mb-10">
              <h3 className="font-heading text-2xl text-center text-primary tracking-wide mb-6">
                Accommodation Rates for SBM 2026
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left py-3 px-4 font-heading tracking-wide">Hotel options</th>
                      <th className="text-left py-3 px-4 font-heading tracking-wide">Pricing</th>
                      <th className="text-left py-3 px-4 font-heading tracking-wide">Distance to venue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accommodationOptions.map((hotel, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-4 font-semibold align-top">
                          {hotel.name}
                          {hotel.rating && (
                            <span className="text-sm text-gray-500 ml-1">({hotel.rating})</span>
                          )}
                        </td>
                        <td className="py-3 px-4 align-top">
                          {hotel.pricing.map((p, pIdx) => (
                            <div key={pIdx}>{p}</div>
                          ))}
                        </td>
                        <td className="py-3 px-4 align-top">{hotel.distance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedElement>

          {/* Original image for reference */}
          <AnimatedElement>
            <div className="text-center">
              <img
                src={images.accommodationRates}
                alt="Accommodation Rates for SBM 2026"
                className="max-w-full mx-auto rounded shadow-sm"
              />
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <div className="mt-8 text-center">
              <Link
                to="/plan-your-visit"
                className="inline-block bg-primary text-white px-6 py-3 font-heading text-lg tracking-wide hover:bg-primary-dark transition-colors"
              >
                Plan Your Visit
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
