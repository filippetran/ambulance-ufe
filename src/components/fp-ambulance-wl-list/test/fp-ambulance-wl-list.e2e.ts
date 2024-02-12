import { newE2EPage } from '@stencil/core/testing';

describe('fp-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fp-ambulance-wl-list></fp-ambulance-wl-list>');

    const element = await page.find('fp-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
