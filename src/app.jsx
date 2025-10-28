"use client";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./context/app-context";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

// Dashboards
import AdminDashboard from "./pages/admin-dashboard";
import HospitalDashboard from "./pages/hospital-dashboard";
import DoctorDashboard from "./pages/doctor-dashboard";
import PatientDashboard from "./pages/patient-dashboard";
import BloodDonorDashboard from "./pages/blood-donor-dashboard";
import AmbulanceDashboard from "./pages/ambulance-dashboard";
import MedicineStoreDashboard from "./pages/medicine-store-dashboard";
import LabDashboard from "./pages/lab-dashboard";
import NursingDashboard from "./pages/nursing-dashboard";
import WellnessDashboard from "./pages/wellness-dashboard";
import Login from "./pages/login";
import Register from "./pages/register";

export const dynamic = "force-dynamic"; // 🛑 Prevent Vercel from prerendering this file

function Shell({ children }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

export default function MediBuddyApp() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" replace />} />
          <Route
            path="/admin"
            element={
              <Shell>
                <AdminDashboard />
              </Shell>
            }
          />
          <Route
            path="/hospital"
            element={
              <Shell>
                <HospitalDashboard />
              </Shell>
            }
          />
          <Route
            path="/doctor"
            element={
              <Shell>
                <DoctorDashboard />
              </Shell>
            }
          />
          <Route
            path="/patient"
            element={
              <Shell>
                <PatientDashboard />
              </Shell>
            }
          />
          <Route
            path="/donor"
            element={
              <Shell>
                <BloodDonorDashboard />
              </Shell>
            }
          />
          <Route
            path="/ambulance"
            element={
              <Shell>
                <AmbulanceDashboard />
              </Shell>
            }
          />
          <Route
            path="/medicine-store"
            element={
              <Shell>
                <MedicineStoreDashboard />
              </Shell>
            }
          />
          <Route
            path="/lab"
            element={
              <Shell>
                <LabDashboard />
              </Shell>
            }
          />
          <Route
            path="/nursing"
            element={
              <Shell>
                <NursingDashboard />
              </Shell>
            }
          />
          <Route
            path="/wellness"
            element={
              <Shell>
                <WellnessDashboard />
              </Shell>
            }
          />
          <Route
            path="/login"
            element={
              <Shell>
                <Login />
              </Shell>
            }
          />
          <Route
            path="/register"
            element={
              <Shell>
                <Register />
              </Shell>
            }
          />
          <Route
            path="*"
            element={
              <Shell>
                <div className="text-sm text-muted-foreground">Page not found</div>
              </Shell>
            }
          />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
