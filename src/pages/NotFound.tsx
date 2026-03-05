import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - School Business Managers' Conference 2026</title>
      </Helmet>

      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-heading text-6xl text-primary mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-white px-6 py-3 font-heading text-lg tracking-wide hover:bg-primary-dark transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  )
}
