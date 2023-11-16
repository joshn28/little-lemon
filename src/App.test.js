import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/Booking/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} />);

    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
});

describe('initializeTimes', () => {
  test('Populates the time select field from state', () => {
    render(<BookingForm availableTimes={['17:00']} />);

    const timePicker = screen.getByLabelText('Choose time');
    expect(timePicker.childElementCount).toBe(1);
  });
});

describe('updateTimes', () => {
  test('Returns the same initial times', () => {
    render(<BookingForm availableTimes={['17:00']} />);

    const timePicker = screen.getByLabelText('Choose time');
    const times = timePicker.childElementCount;

    const datePicker = screen.getByLabelText('Choose a date');
    fireEvent.change(datePicker, { target: { value: 'yyyy-mm-dd'} });
    const updatedTimes = timePicker.childElementCount;

    expect(times).toEqual(updatedTimes);
  });
});