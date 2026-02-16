import { newSpecPage } from '@stencil/core/testing';
import { AkAmbulanceWlList } from '../ak-ambulance-wl-list';

describe('ak-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AkAmbulanceWlList],
      html: `<ak-ambulance-wl-list></ak-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <ak-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ak-ambulance-wl-list>
    `);
  });
});
