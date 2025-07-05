import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExplorerPage from '../../pages/explorer/[...slug]';

const mockDirectories = [
  { name: 'CS303_Algorithms_and_DataStructures', path: 'path/to/CS303' },
  { name: 'MATH401_Real_Analysis', path: 'path/to/MATH401' },
];

const mockPdfs = [
  { name: 'Lecture1_Introduction.pdf', path: 'path/to/Lecture1_Introduction.pdf' },
  { name: 'LectureNotes.pdf', path: 'path/to/LectureNotes.pdf' },
];

const mockParams = { slug: ['CS303'] };

describe('ExplorerPage', () => {
  it('should render directories and PDFs', () => {
    render(<ExplorerPage params={mockParams} directories={mockDirectories} pdfs={mockPdfs} />);
    
    // Test if directory links and PDFs are rendered
    mockDirectories.forEach((dir) => {
      expect(screen.getByText(dir.name)).toBeInTheDocument();
    });
    
    mockPdfs.forEach((pdf) => {
      expect(screen.getByText(pdf.name)).toBeInTheDocument();
    });
  });

  it('should show "No folders or PDFs found" when no data is available', () => {
    render(<ExplorerPage params={mockParams} directories={[]} pdfs={[]} />);
    
    expect(screen.getByText('No folders or PDFs found in this section.')).toBeInTheDocument();
  });
});
