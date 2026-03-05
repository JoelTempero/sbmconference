import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import AnimatedElement from '../components/ui/AnimatedElement'
import { images } from '../data/navigation'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>School Business Managers' Conference 2026 - Home</title>
      </Helmet>

      <PageHero image={images.heroHome} />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedElement>
            <h2 className="font-heading text-4xl md:text-5xl text-center tracking-wider mb-1">
              Welcome
            </h2>
            <h2 className="font-heading text-4xl md:text-5xl text-center tracking-wider gradient-text mb-4">
              Nau mai, haere mai!
            </h2>
            <div className="section-divider" />
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <p className="text-lg leading-relaxed mb-6">
              The School Business Managers' Association warmly invite you to our 2026 Conference which will be held at T&#257;kina Events Centre Wellington, from 15 to 17 July.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.15}>
            <p className="text-lg leading-relaxed mb-6">
              The theme of our conference, "<strong className="text-primary">Winds of Opportunity</strong>", celebrates the vision and dedication of school business managers who shape the heartbeat of our schools behind the scenes. As change sweeps through education, this conference invites you to harness its momentum, embrace fresh possibilities, and lead with courage and clarity to meet challenges, capture emerging opportunities, and continue building schools where every learner can thrive.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.2}>
            <p className="text-lg leading-relaxed mb-10">
              We are fortunate once more to be supported by our generous partners and sponsors who help make this conference happen and we cannot wait to welcome you to the Capital for 3 days of the best networking and professional learning opportunities on offer for School Business Managers and aspiring School Business Managers in NZ... though perhaps leave your umbrella at home!
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.25}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/registration" className="btn-primary">
                Register Now
              </Link>
              <Link to="/programme" className="btn-secondary">
                View Programme
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="bg-gradient-to-r from-primary via-primary-dark to-primary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <AnimatedElement>
              <div className="text-5xl md:text-6xl font-heading mb-2">3</div>
              <div className="font-display text-sm tracking-[0.15em] uppercase opacity-80">Days of Learning</div>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <div className="text-5xl md:text-6xl font-heading mb-2">15-17</div>
              <div className="font-display text-sm tracking-[0.15em] uppercase opacity-80">July 2026</div>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <div className="text-5xl md:text-6xl font-heading mb-2">WLG</div>
              <div className="font-display text-sm tracking-[0.15em] uppercase opacity-80">Wellington, NZ</div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  )
}
