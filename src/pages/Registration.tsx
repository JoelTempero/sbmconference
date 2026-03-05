import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { images } from '../data/navigation'

export default function Registration() {
  return (
    <>
      <Helmet>
        <title>Registration - School Business Managers' Conference 2026</title>
      </Helmet>

      <PageHero image={images.heroRegistration} compact />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <h2 className="font-heading text-3xl md:text-5xl text-center tracking-wider mb-4">
              Registration
            </h2>
            <div className="section-divider" />
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 md:p-8 mb-10">
              <p className="text-lg mb-6">
                Registrations for the School Business Managers' Association Conference 2026 are now <strong>OPEN</strong>
              </p>
              <div className="space-y-3">
                <p>
                  Please{' '}
                  <a
                    href="https://au.entegy.events/delegate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent underline font-semibold"
                  >
                    CLICK HERE
                  </a>{' '}
                  to register as a member/non member^ delegate
                </p>
                <p>
                  Please{' '}
                  <a
                    href="https://au.entegy.events/sbmexhibitor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent underline font-semibold"
                  >
                    CLICK HERE
                  </a>{' '}
                  to register if you are a sponsor/exhibitor*
                </p>
                <p>
                  Please{' '}
                  <a
                    href="https://au.registration.entegy.events/MOE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent underline font-semibold"
                  >
                    CLICK HERE
                  </a>{' '}
                  to register if you are from the Ministry of Education
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Please contact the{' '}
                <Link to="/contact" className="text-secondary hover:text-accent underline">
                  conference organisers
                </Link>{' '}
                or email us if you require assistance.
              </p>
              <p className="text-sm text-gray-600 mt-2 italic">
                *existing sponsors only - new enquiries can be made via our Business Co-ordinator
              </p>
            </div>
          </AnimatedElement>

          {/* Pricing */}
          <AnimatedElement>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white border-2 border-primary rounded-xl p-6 shadow-sm card-hover">
                <h3 className="font-heading text-2xl text-primary tracking-wide mb-4">
                  SBM Member
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span>Early Bird</span>
                    <span className="font-bold text-xl">$600</span>
                  </div>
                  <p className="text-sm text-gray-500">(until 01 May 2026)</p>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span>Standard</span>
                    <span className="font-bold text-xl">$700</span>
                  </div>
                  <p className="text-sm text-gray-500">(from 02 May 2026)</p>
                </div>
                <p className="text-xs text-gray-500 italic">
                  Please note rates are GST exclusive and registrations close on 22 June 2026
                </p>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-sm card-hover">
                <h3 className="font-heading text-2xl text-dark tracking-wide mb-4">
                  Non-member^
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span>Flat rate</span>
                  <span className="font-bold text-xl">$1,300+GST</span>
                </div>
                <p className="text-xs text-gray-500 italic">
                  ^non member - must work in a school in a BM or similar capacity or does/has not meet the criteria for SBM membership
                </p>
              </div>
            </div>
          </AnimatedElement>

          {/* Includes / Excludes */}
          <AnimatedElement>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div>
                <h3 className="font-heading text-xl text-primary tracking-wide mb-3">
                  Registration Fee Includes:
                </h3>
                <ul className="space-y-2">
                  {[
                    'Entrance to all conference sessions',
                    'Morning and afternoon teas, and lunches',
                    'Delegate satchel (generously sponsored by Shade Systems)',
                    'Welcome evening (at pre-registration on 14 July)',
                    'Cafe Crawl',
                    'SBM Cocktail Hour',
                    'Conference Dinner',
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm">
                      <span className="text-primary mt-1">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-xl text-accent tracking-wide mb-3">
                  Registration Fee Does Not Include:
                </h3>
                <ul className="space-y-2">
                  {[
                    'Accommodation costs',
                    'Airport transfer costs',
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm">
                      <span className="text-accent mt-1">&#10007;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedElement>

          {/* Subsidy */}
          <AnimatedElement>
            <div className="bg-gray-50 rounded-lg p-6 mb-10">
              <h3 className="font-heading text-xl tracking-wide mb-3">
                Subsidy Applications
              </h3>
              <p className="text-sm leading-relaxed">
                Eligible members may apply for reimbursement for up to $1,200.00 (excl GST) to assist in attending the SBM annual conference - click here for the{' '}
                <a
                  href="http://www.sbmconference.org.nz/uploads/1/2/0/6/120656982/conference_subsidy_application_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent underline"
                >
                  conference subsidy application form
                </a>
                . Applications for this have closed as of 5pm on 28 February, applicants will be advised of the outcome by 10 March, and any reimbursements will be made after the event and subsequent to an invoice to be received by SBM no later than the end of Term 3.
              </p>
            </div>
          </AnimatedElement>

          {/* Terms and Conditions */}
          <AnimatedElement>
            <div className="mb-10">
              <h3 className="font-heading text-xl tracking-wide mb-3">
                Terms and Conditions
              </h3>
              <div className="text-sm leading-relaxed space-y-4">
                <p>
                  All registration fees EXCLUDE Goods and Services Tax (GST) of 15%. All fees and payments are in New Zealand Dollars (NZD). Payment can be made by direct credit or credit card.
                </p>
                <p>
                  The EARLY BIRD registration rate only applies until 11:59pm, Friday, 01 May 2026 NZST. Full payment is required by this date to receive the early bird discount. If payment is not received by the stipulated date, registrations are processed at the next fee level, and a new invoice will be issued.
                </p>
                <p>
                  For STANDARD registrations from Saturday, 02 May 2026 NZST onwards, full payment is required 10 days after you receive the invoice or before the conference opening date, whichever date is earlier.
                </p>
              </div>
            </div>
          </AnimatedElement>

          {/* Cancellation */}
          <AnimatedElement>
            <div className="mb-10">
              <h3 className="font-heading text-xl tracking-wide mb-3">
                Cancellation &amp; Refunds &ndash; Quick Guide
              </h3>
              <p className="text-sm mb-4">
                We understand that plans can change. Here's what you need to know about cancelling or transferring your ticket:
              </p>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-1">Cancelling your ticket</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>60+ days before the event - refund minus a small admin fee and any costs we can't recover</li>
                    <li>30-59 days before the event - 50% refund minus non-recoverable costs</li>
                    <li>Less than 30 days before the event - sorry, no refunds</li>
                    <li>No-shows - no refunds</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Transferring your ticket</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>You can give your ticket to someone else for free up to 14 days before the event</li>
                    <li>Within 14 days, transfers may have a small admin fee</li>
                    <li>If you bought a member ticket, the new attendee must be a member too, or they'll need to pay the difference</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Event changes or cancellation</h4>
                  <p className="text-gray-700">
                    We may need to change the programme, speakers, or venue. If we cancel for reasons beyond our control (like natural disasters, pandemics, or government restrictions), your ticket will be moved to the new date, or you can get a credit for a future event. Refunds in these cases are at our discretion
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Travel &amp; accommodation</h4>
                  <p className="text-gray-700">
                    The Association is not responsible for travel, accommodation, visas, or other costs. Please book flexible options and consider travel insurance
                  </p>
                </div>

                <p className="text-gray-700">
                  Nothing here changes your rights under New Zealand law. For the full legal version, please read our{' '}
                  <a
                    href="http://www.sbmconference.org.nz/uploads/1/2/0/6/120656982/cancellation_transfer___refund_policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent underline"
                  >
                    Cancellation, Transfer &amp; Refund Policy
                  </a>
                </p>
              </div>
            </div>
          </AnimatedElement>

          {/* Photography Consent */}
          <AnimatedElement>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-xl tracking-wide mb-3">
                Photography Consent
              </h3>
              <p className="text-sm leading-relaxed">
                Please note that a photographer will be present at this event. Images and footage captured may be used for event reporting, promotional, and marketing purposes by the event organisers and SBM. By attending this event, you consent to being photographed or filmed unless you advise the event team or photographer on site that you do not wish to have your image captured.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
