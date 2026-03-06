import { newSpecPage } from '@stencil/core/testing';
import { AkAmbulanceWlEditor } from '../ak-ambulance-wl-editor';

describe('ak-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [AkAmbulanceWlEditor],
      html: `<ak-ambulance-wl-editor entry-id="@new"></ak-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});