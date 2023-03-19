import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useCallback } from 'react';
import { routeConfig } from 'shared/config/route/routeConfig';
import 'app/styles/app.scss';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/router/RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="wrapper">
          {route.element}
        </div>
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
};

export default memo(AppRouter);
