import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { images } from '../data/navigation'
import { workshopData } from '../data/workshops'

export default function Workshops() {
  return (
    <>
      <Helmet>
        <title>Workshops and Panel Sessions - School Business Managers' Conference 2026</title>
      </Helmet>

      <PageHero image={images.heroWorkshops} compact />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedElement>
            <h2 className="font-heading text-3xl md:text-5xl text-center tracking-wider mb-4">
              Workshops and Panel Sessions
            </h2>
            <div className="section-divider" />
            <p className="text-center italic text-gray-600 mb-10">
              Please note that the programme is subject to change
            </p>
          </AnimatedElement>

          {workshopData.map((group) => (
            <AnimatedElement key={group.day}>
              <div className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl text-primary tracking-wide mb-6">
                  {group.day} {group.date}
                </h2>

                {group.sessions.map((slot, slotIdx) => (
                  <div key={slotIdx} className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-3">
                      <h3 className="font-heading text-xl text-dark tracking-wide">
                        {slot.label}
                      </h3>
                      <span className="text-sm text-gray-500 font-medium">
                        {slot.time}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {slot.workshops.map((ws, wsIdx) => (
                        <div
                          key={wsIdx}
                          className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary/30 transition-colors"
                        >
                          <div className="flex gap-3">
                            {ws.number && (
                              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                                {ws.number}
                              </span>
                            )}
                            <div>
                              <p className="font-semibold text-dark">
                                {ws.title}
                              </p>
                              {ws.speaker && (
                                <p className="text-sm text-gray-600 mt-1">
                                  {ws.speaker}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>
    </>
  )
}
