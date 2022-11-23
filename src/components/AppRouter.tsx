import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../router";

const AppRouter = () => {
   const auth = true;

   return auth ? (
      <Routes>
         {privateRoutes.map((route) => (
            <Route
               path={route.path}
               element={<route.component />}
               key={route.path}
            />
         ))}
         <Route path="*" element={<Navigate to={RouteNames.CALENDAR} />} />
      </Routes>
   ) : (
      <Routes>
         {publicRoutes.map((route) => (
            <Route
               path={route.path}
               element={<route.component />}
               key={route.path}
            />
         ))}
         <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
      </Routes>
   );
};

export default AppRouter;
