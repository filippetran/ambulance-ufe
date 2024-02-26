import { newSpecPage } from '@stencil/core/testing';
import { FpAmbulanceWlApp } from '../fp-ambulance-wl-app';

describe('fp-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [FpAmbulanceWlApp],
      html: `<fp-ambulance-wl-app base-path="/"></fp-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("fp-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [FpAmbulanceWlApp],
      html: `<fp-ambulance-wl-app base-path="/ambulance-wl/"></fp-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("fp-ambulance-wl-list");
  });
});
