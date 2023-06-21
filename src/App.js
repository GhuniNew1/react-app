import {  Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Html = lazy(() => import('./components/Html'));
const Spinner = lazy(() => import('./components/Spinner'));
const NavBar = lazy(() => import('./components/NavBar'));
const Logo = lazy(() => import('./components/Logo'));
const Footers = lazy(() => import('./components/Footers'));
const ChangePageTitle = lazy(() => import('./components/ChangePageTitle'));
const Homes = lazy(() => import('./components/Page/Homes'));
const Partner = lazy(() => import('./components/Page/Partner'));
const Contacts = lazy(() => import('./components/Page/Contacts'));
const Annoucements = lazy(() => import('./components/Page/Annoucements'));
const Newss = lazy(() => import('./components/Page/Newss'));
const Services = lazy(() => import('./components/Page/Services'));
const Jobss = lazy(() => import('./components/Page/Jobss'));
const Studios = lazy(() => import('./components/Page/Studios'));
const Errorpages = lazy(() => import('./components/Page/Errorpages'));
const Timer = lazy(() => import('./components/Timer'));

const Home = () => (<><Homes /><Partner /></>);
const Studio = () => (<><Studios /><ChangePageTitle pageTitle="Studio&#8471; Big Brain Studio&#8471;" /></>);
const Jobs = () => (<><Jobss /><ChangePageTitle pageTitle="Jobs&#8471; Big Brain Studio&#8471;" /></>);
const Service = () => (<><Services /><ChangePageTitle pageTitle="Service&#8471; Big Brain Studio&#8471;" /></>);
const News = () => (<><Newss /><ChangePageTitle pageTitle="News&#8471; Big Brain Studio&#8471;" /></>);
const Annoucement = () => (<><Annoucements /><ChangePageTitle pageTitle="Annoucement&#8471; Big Brain Studio&#8471;" /></>);
const Contact = () => (<><Contacts /><ChangePageTitle pageTitle="Contact&#8471; Big Brain Studio&#8471;" /></>);
const Errorpage = () => (<><Errorpages /><ChangePageTitle pageTitle="Error&#8471; Big Brain Studio&#8471;" /></>);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Html title="GhuniNew">
        <Timer timers={100}>
          <Logo />
          </Timer>
          <Timer timers={4000}>
            <NavBar />
          </Timer>
          <Suspense fallback={<Spinner />}>
            <Timer timers={5000}>
              <Contents />
            </Timer>
          </Suspense>
          <Timer timers={6000}>
            <Footers />
          </Timer>
        </Html>
      </Suspense>
    </BrowserRouter>
  );
}

function Contents() {
  return (
    <div className="contents-bg">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/news" element={<News />} />
        <Route path="/annoucement" element={<Annoucement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}