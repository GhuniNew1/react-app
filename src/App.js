import { Suspense, lazy } from "react";
import "./App.css";
import {BrowserRouter, Route, Routes } from 'react-router-dom'

const Html = lazy(() => import("./components/Html"));
const Spinner = lazy(() => import("./components/Spinner"));
const NavBar = lazy(() => import("./components/NavBar"));
const Logo = lazy(() => import("./components/Logo"));
const Layout = lazy(() => import("./components/Layout"));
const Slider = lazy(() => import("./components/Slider"));
const Click = lazy(() => import("./components/Click"));
const Counter = lazy(() => import("./components/Counter"));


const Home = () => <><Counter /></>;
const Studio = () => <><Counter /></>;
const Jobs = () => <><Counter /></>;
const News = () => <><Slider /></>;
const Annoucement = () => <><Counter /></>;
const Contact = () => <><Click /></>;
const Errorpage = () => <><Click /></>;

export default function App({ assets }) {

  return (
    <BrowserRouter>
      <Html assets={assets} title="Hello">
        <Suspense fallback={<Spinner />}>
            <Layout>
              <Contents />
            </Layout>
        </Suspense>
      </Html>
    </BrowserRouter>
  );
}

function Contents() {
  return (
    <>
      <Logo />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/news" element={<News />} />
        <Route path="/annoucement" element={<Annoucement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}
