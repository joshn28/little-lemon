import BookingPage from './components/Booking/BookingPage';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/reserve-a-table' element={<BookingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;