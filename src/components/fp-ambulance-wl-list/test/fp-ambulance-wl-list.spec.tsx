import { newSpecPage } from '@stencil/core/testing';
import { FpAmbulanceWlList } from '../fp-ambulance-wl-list';

describe('fp-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FpAmbulanceWlList],
      html: `<fp-ambulance-wl-list></fp-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <fp-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fp-ambulance-wl-list>
    `);
  });
});
