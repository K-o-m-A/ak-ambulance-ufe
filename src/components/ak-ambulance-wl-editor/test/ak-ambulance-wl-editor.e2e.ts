import { newE2EPage } from '@stencil/core/testing';

describe('ak-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ak-ambulance-wl-editor></ak-ambulance-wl-editor>');

    const element = await page.find('ak-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
