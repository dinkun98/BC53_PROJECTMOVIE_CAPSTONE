import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import Loading from "./components/Loading/Loading";

import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import AdminRoute from "./routes/AdminRoute";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import UserManagement from "./modules/Management/UserManagement/UserManagement";
import MovieForm from "./modules/Management/MovieManagement/MovieForm/MovieForm";
import MovieShowtime from "./modules/Management/MovieManagement/MovieShowtime/MovieShowtime";


//lazy: thực hiện cơ chế tải chậm. Bắt đầu tại thời điểm gọi component mới bắt đầu tải về. Tránh các component không cần thiết tải dữ liệu từ ban đầu
const Signin = lazy(() => import("./modules/Auth/Signin/Signin"));
const Signup = lazy(() => import("./modules/Auth/Signup/Signup"));
const MovieManagement = lazy(() =>
  import("./modules/Management/MovieManagement/MovieManagement")
);

function App() {
  return (
    // Tại thời điểm component tải dữ liệu component Suspense sẽ hiển thị giao diện thay thế
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          </Route>

          <Route path="/" element={<AuthLayout />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route
            path="/"
            element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }
          >
            <Route path="/admin" element={<UserManagement />} />
            <Route path="/admin/films" element={<MovieManagement />} />
            <Route path="/admin/films/addNew" element={<MovieForm />} />
            <Route
              path="admin/films/showtime/:maPhim"
              element={<MovieShowtime />}
            />
          </Route>

          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
