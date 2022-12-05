import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Weather } from '../Weather';

test('show loading Weather', () => {
    render(<Weather />);
    expect(screen.getByText('Chargement')).toBeVisible();
});  
