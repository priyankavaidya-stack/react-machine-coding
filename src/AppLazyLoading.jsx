import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const LazyLoading = lazy(() => import('./components/LazyLoading'));


function AppLazyLoading() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* route based lazy loading */}
      <Routes>
        <Route path="/" element={<LazyLoading />} />
      </Routes>
         
    </Suspense>
  )
}

export default AppLazyLoading
