import { getStaticProps } from '../../pages/index';
import fs from 'fs';
import path from 'path';

jest.mock('fs');
jest.mock('path');

describe('getStaticProps', () => {
  it('should return directories and empty PDFs for homepage', async () => {
    const mockDirectories = ['CS303_Algorithms', 'MATH401_Real_Analysis'];
    const mockBasePath = '/mock/path/to/academiadrive';
    
    // Mock fs.readdirSync to return the directories
    (fs.readdirSync as jest.Mock).mockReturnValueOnce(
      mockDirectories.map((dir) => ({ name: dir, isDirectory: () => true }))
    );
    
    // Mock path.join to return a simple base path
    (path.join as jest.Mock).mockReturnValue(mockBasePath);

    const response = await getStaticProps({});
    
    if ('props' in response) {
      expect(response.props.directories).toEqual(mockDirectories);
      expect(response.props.pdfs).toEqual([]); // Empty PDFs for homepage
    } else {
      throw new Error('getStaticProps did not return props');
    }
  });
});
