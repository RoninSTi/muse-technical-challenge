import { Component, Event, EventEmitter, Prop, h, State } from '@stencil/core';

import classnames from 'classnames'

@Component({
  tag: 'fe-toggle',
  styleUrl: 'fe-toggle.css',
  shadow: true,
})

export class FEToggle {
  @Prop() disabled: boolean = false;

  @Prop() isRound: boolean = true;

  @Prop() label: string = '';

  @Prop() name: string = '';

  @Event() onToggle: EventEmitter;

  @State() isChecked: boolean = false;

  handleOnChange() {
    this.isChecked = !this.isChecked;

    this.onToggle.emit({ isChecked: this.isChecked })
  }

  render() {
    return (
      <label class="toggle">
        <input 
          checked={this.isChecked}
          disabled={this.disabled} 
          name={this.name}
          onChange={this.handleOnChange.bind(this)}
          type="checkbox" 
          value={`${this.isChecked}`}
        />
        <div class={classnames("track", { round: this.isRound })} />
        <span class="label">{this.label}</span>
      </label>
    )
  }
}
