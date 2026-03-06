import { newSpecPage } from '@stencil/core/testing';
import { AkAmbulanceWlApp } from '../ak-ambulance-wl-app';

describe('ak-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [AkAmbulanceWlApp],
      html: `<ak-ambulance-wl-app base-path="/"></ak-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("ak-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [AkAmbulanceWlApp],
      html: `<ak-ambulance-wl-app base-path="/ambulance-wl/"></ak-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("ak-ambulance-wl-list");
  });
});