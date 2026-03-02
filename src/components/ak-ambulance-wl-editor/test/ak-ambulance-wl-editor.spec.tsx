import { newSpecPage } from '@stencil/core/testing';
import { AkAmbulanceWlEditor } from '../ak-ambulance-wl-editor';

describe('ak-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AkAmbulanceWlEditor],
      html: `<ak-ambulance-wl-editor></ak-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <ak-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ak-ambulance-wl-editor>
    `);
  });
});
