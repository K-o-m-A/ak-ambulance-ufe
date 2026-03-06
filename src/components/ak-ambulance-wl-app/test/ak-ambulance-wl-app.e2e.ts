import { newE2EPage } from '@stencil/core/testing';

describe('ak-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ak-ambulance-wl-app></ak-ambulance-wl-app>');

    const element = await page.find('ak-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
