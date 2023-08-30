import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Register from "./Pages/Register";

const GuestRoute = () => {
  const isAuth = false;
  return isAuth ? <Navigate to="/login" replace /> : <Outlet />
}


const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default Router