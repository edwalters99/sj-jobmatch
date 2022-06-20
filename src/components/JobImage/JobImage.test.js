import {render, screen} from '@testing-library/react';
import JobImage from './JobImage';

test('image renders', () => {
    render(<JobImage />);
    screen.debug();
    expect(screen.getByRole("img")).toBeInTheDocument();
})