import React, { lazy, Suspense } from 'react'

const LazyLoading = lazy(() => import('./components/LazyLoading'));


function AppLazyLoading() {
  return (
    <Suspense fallback={ <div>Please wait .....</div>}>
      <LazyLoading />
    </Suspense>
  )
}

export default AppLazyLoading
