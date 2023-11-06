import { newSpecPage } from '@stencil/core/testing';
import { AlertPanel } from '../alert-panel';

describe('alert-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AlertPanel],
      html: `<alert-panel></alert-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <alert-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </alert-panel>
    `);
  });
});
