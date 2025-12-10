import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { BookingApp } from "./components/booking/BookingApp";
import { AppointmentsPage } from "./components/booking/AppointmentsPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<BookingApp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
