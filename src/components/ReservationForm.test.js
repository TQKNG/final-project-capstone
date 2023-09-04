import { render, screen, fireEvent } from '@testing-library/react';
import ReservationForm from './ReservationForm'; 

test('renders the correct text', () => {
    render(<ReservationForm />);
    
    const textElement = screen.getByText(/Reservation Form/i);
    expect(textElement).toBeInTheDocument();
  });
  