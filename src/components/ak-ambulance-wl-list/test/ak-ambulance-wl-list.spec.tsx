import { newSpecPage } from '@stencil/core/testing';
import { AkAmbulanceWlList } from '../ak-ambulance-wl-list';

describe('ak-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AkAmbulanceWlList],
      html: `<ak-ambulance-wl-list></ak-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as AkAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
