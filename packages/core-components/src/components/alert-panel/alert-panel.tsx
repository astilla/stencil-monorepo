import { Component, Prop, h } from '@stencil/core';
import { translate, translations } from '../../utils/translations';

@Component({
  tag: 'alert-panel',
  styleUrl: 'alert-panel.scss',
  shadow: false,
})
export class AlertPanel {
  /**
   * The message to display
   */
  @Prop() message: string;

  componentWillLoad() {
    console.log('componentWillLoad()', this.constructor.name);
  }

  render() {
    return (
      <section class="alert alert-danger" role="alert">
        {translate(translations.AlertPanel.message)}: {this.message}
      </section>
    );
  }
}
