import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Programme from './pages/Programme'
import Workshops from './pages/Workshops'
import Social from './pages/Social'
import Keynotes from './pages/Keynotes'
import Registration from './pages/Registration'
import Accommodation from './pages/Accommodation'
import PlanYourVisit from './pages/PlanYourVisit'
import Sponsors from './pages/Sponsors'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/workshops-and-panel-sessions" element={<Workshops />} />
            <Route path="/social" element={<Social />} />
            <Route path="/keynotes" element={<Keynotes />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/plan-your-visit" element={<PlanYourVisit />} />
            <Route path="/conference-sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
