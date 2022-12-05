import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from '../Card';

test('show data in component card', () => {
    render(<Card day={{tmin:4,tmax:5, datetime: new Date().toDateString(),sun_hours:3 }} />);
    
    expect(screen.getByText(new Date().toDateString())).toBeVisible();
    expect(screen.getByText('4°C')).toBeVisible();
    expect(screen.getByText('5°C')).toBeVisible();
});  
