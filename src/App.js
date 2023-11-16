import BookingPage from './components/Booking/BookingPage';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';

function updateTimes(state, action) {
  return state;
}

function initialTimes(times) {
  return times;
}

function App() {
  const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const [availableTimes, dispatch] = useReducer(updateTimes, times, initialTimes);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/reserve-a-table' element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;