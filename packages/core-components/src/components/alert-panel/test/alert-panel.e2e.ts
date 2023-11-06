import { newE2EPage } from '@stencil/core/testing';

describe('alert-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<alert-panel></alert-panel>');

    const element = await page.find('alert-panel');
    expect(element).toHaveClass('hydrated');
  });
});
