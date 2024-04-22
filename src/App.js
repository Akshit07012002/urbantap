import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import five_bhk from "./assets/5bhk.svg";
import one_bhk from "./assets/1bhk.svg";

const sampleUser = {
  name: "Parvez Sheikh",
  designation: "Real Estate Agent",
  company: "Sobha Realty",
  description:
    "As a dedicated Real Estate Agent at Sobha Realty, I specialize in helping clients with locating, buying, and selling properties. I am a RERA-certified agent and have been in the industry for over 5 years. I am committed to providing the best service to my clients and ensuring that they have a smooth and stress-free experience. Contact me today to learn more about how I can help you with your real estate needs.",
  contact: {
    phone: "523644498",
    email: "parvez@sobha.com",
    instagram: "@parvez_sobha",
    linkedin: "linkedin.com/in/parvez",
    whatsapp: "523644498",
  },
  experience: "12 years 4 months",
  languages: ["Arabic", "English", "Hindi"],
  properties: [
    {
      title: "5 BHK",
      description: "Bhingati Tower",
      company: "Sobha Realty",
      image: five_bhk,
    },
    {
      title: "1 BHK",
      description: "Bhingati Tower",
      company: "Sobha Realty",
      image: one_bhk,
    },
    {
      title: "4 BHK",
      description: "Sobha City",
      company: "Sobha Realty",
      image: five_bhk,
    },
    {
      title: "3 BHK",
      description: "JBR City",
      company: "Sobha Realty",
      image: one_bhk,
    },
  ],
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile user={sampleUser} />} />
      </Routes>
    </>
  );
}

export default App;
