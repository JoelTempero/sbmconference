import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { images } from '../data/navigation'

export default function Social() {
  return (
    <>
      <Helmet>
        <title>Social - School Business Managers' Conference 2026</title>
      </Helmet>

      <PageHero image={images.heroSocial} compact />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <p className="text-lg text-center mb-12">
              There will be ample opportunities to network with your peers and partners/sponsors throughout the course of the event:
            </p>
          </AnimatedElement>

          {/* Welcome Function */}
          <AnimatedElement>
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-heading text-2xl md:text-3xl text-center tracking-wider mb-4">
                SBM Welcome Function / Pre-Registration
              </h2>
              <div className="text-center mb-4">
                <p className="font-semibold">Tuesday 14 July</p>
                <p className="font-semibold">5:00pm &ndash; 6:30pm</p>
              </div>
              <p className="text-lg leading-relaxed">
                Ooh la la - it's Bastille Day! Why not take the opportunity to not only celebrate France's national holiday, but to skip the lines on Wednesday morning and register for conference early? Come pick up your lanyard, share some drinks and nibbles, say hi (or bonjour!) to the SBM team and our wonderful sponsors and exhibitors. We'll also hold a 'first timers' catchup then too. It's the perfect time to start making those valuable connections, and we'd love to see you there!
              </p>
            </div>
          </AnimatedElement>

          {/* Cafe Crawl */}
          <AnimatedElement>
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-heading text-2xl md:text-3xl text-center tracking-wider mb-4">
                Cafe Crawl
              </h2>
              <div className="text-center mb-4">
                <p className="font-semibold">Wednesday 15 July</p>
                <p className="font-semibold">6:00pm &ndash; 10:00pm (approx.)</p>
                <p><strong>Meeting point:</strong> <em>TBC</em></p>
                <p className="italic text-sm text-gray-600">Gather from 5:30pm, departure for restaurants is at 6:00pm sharp</p>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                The Cafe Crawl - our annual progressive dinner - is an opportunity to get to know and network with conference delegates and for our Association business partners to show their manaakitanga while dining out in Wellington. After meeting at the designated place from 5.30pm, you will be gather in one of 6 groups (more information on your group will be available via the Conference App) and each group will rotate to a different venue for entree, main and dessert.
              </p>
              <p className="font-semibold text-sm">
                Please note: as you will be required to walk between venues, comfortable shoes and a coat are recommended.
              </p>
            </div>
          </AnimatedElement>

          {/* Cocktail Hour */}
          <AnimatedElement>
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-heading text-2xl md:text-3xl text-center tracking-wider mb-4">
                SBM Cocktail Hour
              </h2>
              <div className="text-center mb-4">
                <p className="font-semibold">Thursday 16 July</p>
                <p className="font-semibold">6:00pm - 7:00pm</p>
                <p className="font-semibold">T&#257;kina Events Centre</p>
              </div>
              <p className="text-lg leading-relaxed">
                Join us back at the expo area for some pre-dinner drinks, standing entree and entertainment at the SBM hosted cocktail hour - a chance to mix and mingle with delegates and sponsors alike before taking your seats upstairs for a plated dinner (mains and dessert).
              </p>
            </div>
          </AnimatedElement>

          {/* Conference Dinner */}
          <AnimatedElement>
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-heading text-2xl md:text-3xl text-center tracking-wider mb-4">
                Conference Dinner
              </h2>
              <div className="text-center mb-4">
                <p className="font-semibold">Thursday 16 July</p>
                <p className="font-semibold">7:00pm - 11:30pm</p>
                <p className="font-semibold">Level 1, T&#257;kina Events Centre</p>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Step into Wellywood!</strong><br />
                Join us for an unforgettable evening as we roll out the red carpet and celebrate the magic of movie-making, Kiwi-style. Enjoy great food, good company, and a touch of cinematic sparkle as we bring a bit of Hollywood glamour to our own backyard. Get ready for lights, camera, action - and a night of fun worthy of the big screen!
              </p>
              <p className="italic text-sm text-gray-600">
                Entry by ticket only, dressing up is encouraged.
              </p>
            </div>
          </AnimatedElement>

          {/* Area Walks */}
          <AnimatedElement>
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-heading text-2xl md:text-3xl text-center tracking-wider mb-6">
                Area Walks / H&#299;koi
              </h2>
              <div className="md:flex md:gap-6">
                <div className="md:flex-1">
                  <p className="text-lg leading-relaxed mb-4">
                    Wellington may be known for its hills (and wind!) but you'll find lots of places to get some gentle exercise on the flat, in and around the city centre either before or after heading to the conference venue.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    If you're extending your stay or want to travel further afield on different terrain - there's no shortage of trails for you to try out -{' '}
                    <a
                      href="https://www.wellingtonnz.com/visit/trails"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-accent underline"
                    >
                      check some popular ones here...
                    </a>
                  </p>
                  <p className="text-lg leading-relaxed">
                    Find out what the city has to offer on this{' '}
                    <a
                      href="/docs/wellington-visitor-guide.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-accent underline font-semibold"
                    >
                      Wellington visitor guide
                    </a>
                  </p>
                </div>
                <div className="md:w-[348px] mt-4 md:mt-0 flex-shrink-0">
                  <img
                    src={images.walkingMap}
                    alt="Wellington walking map"
                    className="w-full rounded shadow-sm"
                  />
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Out and About */}
          <AnimatedElement>
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="font-heading text-2xl md:text-3xl text-center tracking-wider mb-4">
                Out and About
              </h2>
              <p className="text-lg leading-relaxed text-center">
                Keep an eye here for any special offers you can avail of during the course of the event in the Capital!
              </p>
            </div>
          </AnimatedElement>

          {/* Conference Transport */}
          <AnimatedElement>
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl text-center tracking-wider mb-4">
                Conference Transport
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Bus transfers between hotels and the events centre will NOT be available this year due to the accessibility of locations in Wellington. Any change to this will be announced here and on the conference App in due course.
              </p>
              <p className="text-lg leading-relaxed">
                Should they be required for day 3, timings for airport shuttles may be available on the conference App - this will depend on numbers and availability of transport.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
