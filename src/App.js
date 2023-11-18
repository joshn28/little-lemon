import BookingPage from './components/Booking/BookingPage';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from './api/fakeAPI';

function updateTimes(state, action) {
  switch (action.type) {
    case "update_times":
      const date = action.date;
      const times = fetchAPI(date);

      if (times.toString() !== state.toString()) {
        return times;
      }
      return state;
    default:
      break;
  }
}

function initialTimes() {
  const todaysDate = new Date();
  const dateFormatted = `${todaysDate.getFullYear()}-${todaysDate.getMonth() + 1}-${todaysDate.getDate()}`;
  const possibleTimes = fetchAPI(dateFormatted);
  return possibleTimes;
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initialTimes);

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