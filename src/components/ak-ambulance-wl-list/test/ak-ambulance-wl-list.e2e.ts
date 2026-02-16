import { newE2EPage } from '@stencil/core/testing';

describe('ak-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ak-ambulance-wl-list></ak-ambulance-wl-list>');

    const element = await page.find('ak-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
