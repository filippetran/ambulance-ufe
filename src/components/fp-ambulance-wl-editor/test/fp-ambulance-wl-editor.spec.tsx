import { newSpecPage } from '@stencil/core/testing';
import { FpAmbulanceWlEditor } from '../fp-ambulance-wl-editor';

describe('fp-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [FpAmbulanceWlEditor],
      html: `<fp-ambulance-wl-editor entry-id="@new"></fp-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});