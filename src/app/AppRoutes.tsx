import { Routes, Route } from "react-router-dom";
import { AnimationLayout } from "../components";
import { Paths } from "../models/paths";
import { Calculator, Home, SingleCoin } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AnimationLayout />}>
        <Route index element={<Home />} />
        <Route
          path={`${Paths.SingleCoin}/:coinId/:coinName`}
          element={<SingleCoin />}
        />
        <Route path={Paths.Calculator} element={<Calculator />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
