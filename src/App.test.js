import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/Booking/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} />);

    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
});

test('Check if the time select and submit button are disabled after invalid data', () => {
  render(<BookingForm availableTimes={[]} />);

  const timePicker = screen.getByLabelText('Choose a time');
  expect(timePicker).toBeDisabled();

  const submitButton = screen.getByText('Make your reservation').closest('button');
  expect(submitButton).toBeDisabled();
});

test('Check if the time select and submit button are enabled after valid data', () => {
  let times = [];
  const mockDispatch = jest.fn(() => times.push('17:00'));
  render(<BookingForm availableTimes={times} dispatch={mockDispatch} />);

  const datePicker = screen.getByLabelText('Choose a date');
  const today = new Date();
  const value = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  fireEvent.change(datePicker, { target: { value: value } });

  const timePicker = screen.getByLabelText('Choose a time');
  fireEvent.change(timePicker, { target: { value: '17:00' } });

  const submitButton = screen.getByText('Make your reservation').closest('button');

  expect(timePicker).toBeEnabled();
  expect(submitButton).toBeEnabled();
});

describe('initializeTimes', () => {
  test('Populates the time select field from state', () => {
    const mockDispatch = jest.fn().mockReturnValueOnce([]);
    render(<BookingForm availableTimes={['17:00']} dispatch={mockDispatch} />);

    const timePicker = screen.getByLabelText('Choose a time');
    expect(timePicker.childElementCount).toBe(2);
  });
});

describe('updateTimes', () => {
  test('Returns the updated times after a date is chosen', () => {
    let times = [];
    const mockDispatch = jest.fn(() => times.push('17:00'));
    render(<BookingForm availableTimes={times} dispatch={mockDispatch} />);

    const datePicker = screen.getByLabelText('Choose a date');
    const today = new Date();
    const value = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    fireEvent.change(datePicker, { target: { value: value } });

    const timePicker = screen.getByLabelText('Choose a time');
    expect(timePicker.childElementCount).toBeGreaterThan(1);
  });
});