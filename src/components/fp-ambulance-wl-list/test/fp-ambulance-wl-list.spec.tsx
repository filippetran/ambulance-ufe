import { newSpecPage } from '@stencil/core/testing';
import { FpAmbulanceWlList } from '../fp-ambulance-wl-list';

describe('fp-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FpAmbulanceWlList],
      html: `<fp-ambulance-wl-list></fp-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as FpAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);

  });
});
