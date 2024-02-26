import { newE2EPage } from '@stencil/core/testing';

describe('fp-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fp-ambulance-wl-editor></fp-ambulance-wl-editor>');

    const element = await page.find('fp-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
