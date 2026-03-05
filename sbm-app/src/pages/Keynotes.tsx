import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { images } from '../data/navigation'
import { speakers } from '../data/speakers'

export default function Keynotes() {
  return (
    <>
      <Helmet>
        <title>Keynotes - School Business Managers' Conference 2026</title>
      </Helmet>

      <PageHero image={images.heroKeynotes} compact />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <h2 className="font-heading text-3xl md:text-5xl text-center tracking-wider mb-4">
              Keynote Speakers
            </h2>
            <div className="section-divider !mb-12" />
          </AnimatedElement>

          {speakers.map((speaker, idx) => (
            <AnimatedElement key={speaker.id}>
              <div className={`${idx > 0 ? 'mt-8 pt-8 border-t border-gray-200' : ''}`}>
                <div className="md:flex md:gap-8">
                  <div className="md:w-[27%] flex-shrink-0 mb-4 md:mb-0">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full max-w-[250px] mx-auto md:max-w-none rounded"
                    />
                    {speaker.website && (
                      <p className="text-sm text-gray-500 mt-2">
                        <strong>web:</strong>{' '}
                        <a
                          href={speaker.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-accent underline"
                        >
                          {speaker.website.replace('https://', '').replace('http://', '')}
                        </a>
                      </p>
                    )}
                    {speaker.email && (
                      <p className="text-sm text-gray-500">
                        <strong>email:</strong>{' '}
                        <a
                          href={`mailto:${speaker.email}`}
                          className="text-secondary hover:text-accent underline"
                        >
                          {speaker.email}
                        </a>
                      </p>
                    )}
                  </div>
                  <div className="md:w-[73%]">
                    <h3 className="font-heading text-xl md:text-2xl tracking-wide text-primary mb-4">
                      {speaker.title}
                    </h3>
                    {speaker.bio.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className={`text-base leading-relaxed ${
                          pIdx < speaker.bio.length - 1 ? 'mb-4' : ''
                        } ${
                          paragraph.startsWith('Ref:') || paragraph.startsWith('Session Outline:')
                            ? 'italic text-gray-600'
                            : ''
                        }`}
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>
    </>
  )
}
