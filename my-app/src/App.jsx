import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import PopularTour from "./components/PopularTour";
import SeeMore from "./components/SeeMore";
import HotelRoom from "./components/HotelRoom";
import Discover from "./components/Discover";
import Review from "./components/Review";
import ImpNote from "./components/ImpNote";
import Login from "./components/Login"; // ✅ Import Login page
import ViewAll from "./components/ViewAll";
import Destination1 from "./components/Destination1";
import ViewRooms from "./components/ViewRooms";
import HotelBookingForm from "./components/HotelBooking";
import SearchHero from "./components/SearchHero";
import About from "./components/About";
import Contact from "./components/Contact";
import Team from "./components/Team";
import OurServices from "./components/OurServices";
import Grid from "./components/Grid";
import TourClassic from "./components/Tourclassic";
import Blog from "./components/Blog";
import TourSearch from "./components/TourSearch";
import Roomlist from "./components/Roomlist";
import Toursidethumbnail from "./components/Toursidethumbnail";
import Register from "./components/Register";
import TourThumbnailStyle from "./components/TourThumbnailStyle";
import RoomGrid from "./components/RoomGrid";
import BookRooms from "./components/BookRooms";
import NewTourSearch from "./components/NewTourSearch";
import RoomSearch from "./components/RoomSearch";
import BlogFull from "./components/BlogFull";
import BlogGrid from "./components/BlogGrid";
import BlogColumn from "./components/BlogColumn";

// 👇 Combine home content
function Home() {
  return (
    <>
      <Hero />
      <Destination />
      <PopularTour />
      <SeeMore />
      <HotelRoom />
      <Discover />
      <Review />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view-all-tours" element={<ViewAll />} />
        <Route path="/view-all-destination" element={<Destination1 />} />
        <Route path="/view-all-rooms" element={<ViewRooms />} />
        <Route path="/hotelbooking" element={<HotelBookingForm />} />
        <Route path="/Search" element={<SearchHero />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/TourGrid" element={<Grid />} />
        <Route path="/Tour" element={<TourClassic />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/TourSearch" element={<TourSearch />} />
        <Route path="/Roomlist" element={<Roomlist />} />
        <Route path="/Toursidethumbnail" element={<Toursidethumbnail />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/TourThumbnailStyle" element={<TourThumbnailStyle />} />
        <Route path="/RoomGrid" element={<RoomGrid />} />
        <Route path="/BookRooms" element={<BookRooms />} />
        <Route path="/NewTourSearch" element={<NewTourSearch />} />
        <Route path="/RoomSearch" element={<RoomSearch />} />
        <Route path="/BlogFull" element={<BlogFull />} />
        <Route path="/BlogGrid" element={<BlogGrid />} />
        <Route path="/BlogColumn" element={<BlogColumn />} />
      </Routes>
      <ImpNote />
      <Footer />
    </Router>
  );
}

export default App;
