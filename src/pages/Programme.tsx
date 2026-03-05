import { Helmet } from 'react-helmet-async'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import ScheduleTable from '../components/ui/ScheduleTable'
import { images } from '../data/navigation'
import {
  tuesdaySchedule,
  wednesdaySchedule,
  thursdaySchedule,
  fridaySchedule,
} from '../data/schedule'

export default function Programme() {
  return (
    <>
      <Helmet>
        <title>Programme - School Business Managers' Conference 2026</title>
      </Helmet>

      <PageHero image={images.heroProgramme} compact />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedElement>
            <h2 className="font-heading text-3xl md:text-5xl text-center tracking-wider mb-4">
              Programme Outline
            </h2>
            <div className="section-divider" />
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <div className="prose prose-lg max-w-none mb-10 space-y-4">
              <p>
                This year, all sessions will take place on the same level of the conference venue (level 1) - which means less walking and more learning and networking.
              </p>
              <p>
                Plenary sessions will be held in Rongomatane, with breakout sessions in meeting rooms Matiu and Makaro as well as in the plenary space.
              </p>
              <p>
                Registration desk, SBM booth, exhibition area (with our gold business partners, silver and bronze sponsors), and catering will all be situated in the Rongomatane foyer on level 1 - you can't miss it.
              </p>
              <p>
                The full programme is available for delegates via the Conference App.
              </p>
              <p className="italic text-gray-600">
                Please note this programme is subject to change
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <ScheduleTable title="Tuesday 14 July" entries={tuesdaySchedule} />
          </AnimatedElement>

          <AnimatedElement>
            <ScheduleTable title="Wednesday 15 July" entries={wednesdaySchedule} />
          </AnimatedElement>

          <AnimatedElement>
            <ScheduleTable title="Thursday 16 July" entries={thursdaySchedule} />
          </AnimatedElement>

          <AnimatedElement>
            <ScheduleTable title="Friday 17 July" entries={fridaySchedule} />
          </AnimatedElement>
        </div>
      </section>
    </>
  )
}
