import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { images } from '../data/navigation'
import { Mail, Phone, Smartphone } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - School Business Managers' Conference 2026</title>
      </Helmet>

      <PageHero image={images.heroContact} compact />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <h2 className="font-heading text-3xl md:text-5xl text-center tracking-wider mb-4">
              Contact
            </h2>
            <div className="section-divider !mb-10" />
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <div className="md:flex md:gap-10 items-start">
              <div className="md:flex-1">
                <p className="text-lg mb-6">
                  EventSmart are our professional conference organisers for 2026
                </p>
                <p className="text-lg mb-6">They can be contacted at:</p>

                <div className="bg-gradient-to-br from-gray-50 to-primary/5 rounded-xl p-6 mb-6 border border-gray-100">
                  <p className="text-xl font-semibold mb-4">Wilna van Eyssen</p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <a
                        href="mailto:wilna@eventsmart-conferences.co.nz"
                        className="text-secondary hover:text-accent underline"
                      >
                        wilna@eventsmart-conferences.co.nz
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <a
                        href="mailto:KiaOra@eventsmart-conferences.co.nz"
                        className="text-secondary hover:text-accent underline"
                      >
                        KiaOra@eventsmart-conferences.co.nz
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a
                        href="tel:+6495745989"
                        className="text-secondary hover:text-accent underline"
                      >
                        +64 (0)9 5745989
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a
                        href="tel:+64021517222"
                        className="text-secondary hover:text-accent underline"
                      >
                        +64 (0)21 517222
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-[280px] flex-shrink-0 mt-6 md:mt-0">
                <a
                  href="https://www.pandaevents.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.eventSmart}
                    alt="EventSmart"
                    className="w-full rounded shadow-sm hover:shadow-md transition-shadow"
                  />
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
