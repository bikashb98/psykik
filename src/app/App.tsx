import { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'

const HomePage = lazy(() => import('../pages/HomePage'))
const ProductPage = lazy(() => import('../pages/ProductPage'))
const SolutionsPage = lazy(() => import('../pages/SolutionsPage'))
const PricingPage = lazy(() => import('../pages/PricingPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <Suspense fallback={<p className="container page-shell muted">Loading…</p>}><HomePage /></Suspense> },
      { path: 'product', element: <Suspense fallback={<p className="container page-shell muted">Loading…</p>}><ProductPage /></Suspense> },
      { path: 'solutions', element: <Suspense fallback={<p className="container page-shell muted">Loading…</p>}><SolutionsPage /></Suspense> },
      { path: 'pricing', element: <Suspense fallback={<p className="container page-shell muted">Loading…</p>}><PricingPage /></Suspense> },
      { path: 'about', element: <Suspense fallback={<p className="container page-shell muted">Loading…</p>}><AboutPage /></Suspense> },
      { path: 'contact', element: <Suspense fallback={<p className="container page-shell muted">Loading…</p>}><ContactPage /></Suspense> },
      { path: '*', element: <Suspense fallback={<p className="container page-shell muted">Loading…</p>}><NotFoundPage /></Suspense> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
