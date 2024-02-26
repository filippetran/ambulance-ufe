import { newE2EPage } from '@stencil/core/testing';

describe('fp-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fp-ambulance-wl-app></fp-ambulance-wl-app>');

    const element = await page.find('fp-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
