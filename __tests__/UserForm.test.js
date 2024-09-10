import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Nav } from './Nav';
import { NewGallery } from './NewGallery';

jest.mock('framer-motion', () => ({
  motion: {
    div: jest.fn(({ children }) => <div>{children}</div>),
    li: jest.fn(({ children }) => <li>{children}</li>),
    ul: jest.fn(({ children }) => <ul>{children}</ul>),
    h1: jest.fn(({ children }) => <h1>{children}</h1>),
    p: jest.fn(({ children }) => <p>{children}</p>),
    img: jest.fn((props) => <img {...props} />),
  },
}));

describe('nav component', () => {
  const categories = ['Home', 'Gallery', 'Modern', 'Footer'];

  it('renders all categories correctly', () => {
    render(<Nav categories={categories} />);
    
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('renders search button', () => {
    render(<Nav categories={categories} />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});

describe('new-gallery component', () => {
  it('renders gallery title correctly', () => {
    render(<NewGallery />);
    expect(screen.getByText('New Gallery')).toBeInTheDocument();
  });

  it('renders artwork details correctly', () => {
    render(<NewGallery />);
    expect(screen.getByText('Old Man with a Gold Chain')).toBeInTheDocument();
    expect(screen.getByText('Rembrandt Harmensz. van Rijn')).toBeInTheDocument();
    expect(screen.getByText('1631')).toBeInTheDocument();
  });

  it('renders artwork images', () => {
    render(<NewGallery />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(3);
    expect(images[0]).toHaveAttribute('src', '/art4.png');
    expect(images[1]).toHaveAttribute('src', '/art5.png');
    expect(images[2]).toHaveAttribute('src', '/art6.png');
  });
});
