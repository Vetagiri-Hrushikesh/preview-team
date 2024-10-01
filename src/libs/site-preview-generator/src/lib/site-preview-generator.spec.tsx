import { render } from '@testing-library/react';

import SitePreviewGenerator from './site-preview-generator';

describe('SitePreviewGenerator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SitePreviewGenerator />);
    expect(baseElement).toBeTruthy();
  });
});
