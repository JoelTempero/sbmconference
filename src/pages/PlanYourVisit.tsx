import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { images } from '../data/navigation'

export default function PlanYourVisit() {
  return (
    <>
      <Helmet>
        <title>Plan your visit - School Business Managers' Conference 2026</title>
      </Helmet>

      <PageHero image={images.heroPlanVisit} compact />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <h2 className="font-heading text-3xl md:text-5xl text-center tracking-wider mb-4">
              Plan Your Visit
            </h2>
            <div className="section-divider" />
          </AnimatedElement>

          {/* Floor Plan */}
          <AnimatedElement>
            <div className="mb-10">
              <img
                src={images.floorplan}
                alt="T&#257;kina Events Centre floor plan"
                className="w-full rounded shadow-sm"
              />
            </div>
          </AnimatedElement>

          {/* Conference Venue */}
          <AnimatedElement>
            <div className="mb-10 pb-10 border-b border-gray-200">
              <h3 className="font-heading text-2xl text-primary tracking-wide mb-4">
                Conference Venue
              </h3>
              <p className="text-lg mb-4">
                The conference will be held at T&#257;kina Wellington Convention and Exhibition Centre.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  Registration area - Rongomatane Foyer
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  Plenary - Rongomatane A/B/C combined
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  Breakouts - Matiu &amp; Makaro Rooms
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  Trade exhibition and catering - Rongomatane Foyer
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  Conference dinner - Rongomatane A/B/C combined
                </li>
              </ul>
              <p>
                For more information visit T&#257;kina's{' '}
                <a
                  href="https://www.takina.co.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent underline"
                >
                  website
                </a>
              </p>
            </div>
          </AnimatedElement>

          {/* Accommodation */}
          <AnimatedElement>
            <div className="mb-10 pb-10 border-b border-gray-200">
              <h3 className="font-heading text-2xl text-primary tracking-wide mb-4">
                Accommodation
              </h3>
              <p className="text-lg mb-2">
                Special conference rates are available for conference participants at selected accommodation providers.
              </p>
              <p>
                Click through to the{' '}
                <Link to="/accommodation" className="text-secondary hover:text-accent underline">
                  Accommodation page
                </Link>{' '}
                for further details.
              </p>
            </div>
          </AnimatedElement>

          {/* Parking */}
          <AnimatedElement>
            <div className="mb-10 pb-10 border-b border-gray-200">
              <h3 className="font-heading text-2xl text-primary tracking-wide mb-4">
                Parking
              </h3>
              <p className="text-lg mb-4">
                Please note that there is no dedicated parking at T&#257;kina however it is located directly across from{' '}
                <a
                  href="https://www.tepapa.govt.nz/visit/plan-your-visit/parking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent underline"
                >
                  Te Papa
                </a>{' '}
                and both{' '}
                <a
                  href="https://www.carepark.co.nz/find-a-care-park/care-park-on-wakefield/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent underline"
                >
                  Readings on Wakefield
                </a>{' '}
                and{' '}
                <a
                  href="https://wellington.govt.nz/parking-roads-and-transport/parking/car-park-buildings-and-areas/waterfront-car-park-areas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent underline"
                >
                  Barnett Street car park
                </a>
                . Parking is available all day Monday to Sunday at Readings on Wakefield and Monday to Saturday at Barnett Street.
              </p>
              <p>
                <a
                  href="https://en.parkopedia.com/parking/locations/217_wakefield_street_te_aro_wellington_6011_new_zealand_cd2drbsm15pdpq0c7g/?arriving=202303151230&leaving=202303151430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent underline"
                >
                  Have a look at Parkopedia
                </a>{' '}
                for other options close by.
              </p>
            </div>
          </AnimatedElement>

          {/* Transport */}
          <AnimatedElement>
            <div className="mb-10 pb-10 border-b border-gray-200">
              <h3 className="font-heading text-2xl text-primary tracking-wide mb-4">
                Transport options at Wellington airport
              </h3>
              <p className="text-lg mb-4">
                There are various options available to{' '}
                <a
                  href="https://www.wellingtonairport.co.nz/transport/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent underline"
                >
                  travel from the airport
                </a>{' '}
                to the city centre with ease, either by public transport, taxi/shuttle, or rideshare. Allow 20 - 25 minutes to travel directly, but remember shuttles may have pickups and dropoffs en route. The{' '}
                <a
                  href="https://www.wellingtonairport.co.nz/transport/airport-express-bus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent underline"
                >
                  Airport Express Bus
                </a>{' '}
                service is one of the most cost effective ways to travel - it runs between the Airport and the city centre 7 days a week and the timetable is designed around airport and train departure and arrival times.
              </p>
            </div>
          </AnimatedElement>

          {/* Destination Wellington */}
          <AnimatedElement>
            <div className="mb-10 pb-10 border-b border-gray-200">
              <h3 className="font-heading text-2xl text-primary tracking-wide mb-4">
                Destination Wellington
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  <span>
                    For information on what the region has on offer visit the{' '}
                    <a
                      href="https://www.newzealand.com/nz/wellington/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-accent underline font-semibold"
                    >
                      100% New Zealand website
                    </a>{' '}
                    or the{' '}
                    <a
                      href="https://www.wellingtonnz.com/wlg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-accent underline font-semibold"
                    >
                      official tourism website for Wellington
                    </a>{' '}
                    among others
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  <span>
                    Click here for travel options flying with{' '}
                    <a
                      href="https://www.airnewzealand.co.nz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-accent underline"
                    >
                      Air New Zealand
                    </a>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  <span>
                    Never been to the Capital? You're in for a treat -{' '}
                    <a
                      href="https://www.wellingtonnz.com/business-events-conferences/plan-your-conference/delegate-promotion-video"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-accent underline font-semibold"
                    >
                      check this out!
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedElement>

          {/* Map */}
          <AnimatedElement>
            <div>
              <h3 className="font-heading text-2xl text-primary tracking-wide mb-4">
                Location
              </h3>
              <div className="aspect-video w-full rounded overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.4!2d174.7811847!3d-41.2912871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd6e8d4c0f7%3A0x7f62b5db4bb0e5!2sT%C4%81kina%20Wellington%20Convention%20%26%20Exhibition%20Centre!5e0!3m2!1sen!2snz!4v1700000000000!5m2!1sen!2snz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="T&#257;kina Wellington Convention & Exhibition Centre Location"
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
