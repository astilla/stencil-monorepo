import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'toggle-button',
  styleUrl: 'toggle-button.scss',
  shadow: true,
})
export class ToggleButton {
  @Prop() initialLabel: string;
  @Prop() clickedLabel: string;

  @State() buttonLabel:string;

  private isClicked: boolean = false;

  onClickButtonHandler = (event: any) => {
    this.isClicked = !this.isClicked;
    this.buttonLabel = this.isClicked ? this.clickedLabel : this.initialLabel;
    console.log(this.buttonLabel);
    event.preventDefault();
  };

  render() {
    if (this.buttonLabel == null) {
      this.buttonLabel = this.initialLabel;
    }

    return (
      <Host>
        <button type="button" class="btn btn-primary" onClick={e => this.onClickButtonHandler(e)}>
          {this.buttonLabel}
        </button>
      </Host>
    );
  }
}
