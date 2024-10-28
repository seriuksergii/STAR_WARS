import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroList } from './HeroList';

describe('HeroList component', () => {
  it('HeroList renders', () => {
    render(<HeroList />);
    const heroList = screen.getByTestId('hero');
    expect(heroList).toBeInTheDocument();
  });
});
