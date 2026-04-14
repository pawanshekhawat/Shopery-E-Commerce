import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import HomePage from "./pages/public/HomePage";
import BlogPage from "./pages/public/BlogPage";
import AboutPage from "./pages/public/AboutPage";
import ContactPage from "./pages/public/ContactPage";
import FaqsPage from "./pages/public/FaqsPage";
import ProductPageRoute from "./pages/public/ProductPageRoute";
import ShopPage from "./pages/public/ShopPage";
import LoginPage from "./pages/public/LoginPage";
import CreateAccountPage from "./pages/public/CreateAccountPage";
import DashboardPage from "./pages/account/DashboardPage";
import OrderHistoryPage from "./pages/account/OrderHistoryPage";
import SettingsPage from "./pages/account/SettingsPage";
import WishlistPage from "./pages/account/WishlistPage";
import ShoppingCartPage from "./pages/account/ShoppingCartPage";
import { LEGACY_ACCOUNT_ROUTES, ROUTES } from "./constants/routes";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.BLOG} element={<BlogPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.FAQS} element={<FaqsPage />} />
        <Route path={ROUTES.PRODUCT} element={<ProductPageRoute />} />
        <Route path={ROUTES.SHOP} element={<ShopPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.CREATE_ACCOUNT} element={<CreateAccountPage />} />

        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        <Route path={ROUTES.ORDER_HISTORY} element={<OrderHistoryPage />} />
        <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
        <Route path={ROUTES.WISHLIST} element={<WishlistPage />} />
        <Route path={ROUTES.SHOPPING_CART} element={<ShoppingCartPage />} />

        <Route path={ROUTES.TRACK_ORDER} element={<OrderDetails />} />

        <Route
          path={LEGACY_ACCOUNT_ROUTES.DASHBOARD}
          element={<Navigate to={ROUTES.DASHBOARD} replace />}
        />
        <Route
          path={LEGACY_ACCOUNT_ROUTES.ORDER_HISTORY}
          element={<Navigate to={ROUTES.ORDER_HISTORY} replace />}
        />
        <Route
          path={LEGACY_ACCOUNT_ROUTES.SETTINGS}
          element={<Navigate to={ROUTES.SETTINGS} replace />}
        />
        <Route
          path={LEGACY_ACCOUNT_ROUTES.WISHLIST}
          element={<Navigate to={ROUTES.WISHLIST} replace />}
        />
        <Route
          path={LEGACY_ACCOUNT_ROUTES.SHOPPING_CART}
          element={<Navigate to={ROUTES.SHOPPING_CART} replace />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
