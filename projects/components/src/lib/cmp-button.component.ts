import { Component, Input, Output, EventEmitter, HostBinding, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ButtonHierarchy = 'primary' | 'secondary-gray' | 'secondary-color' | 'tertiary-gray' | 'tertiary-color' | 'link-gray' | 'link-color';
export type ButtonIconType = 'default' | 'dot-leading' | 'only';

@Component({
  selector: 'cmp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cmp-button.component.html',
  styleUrls: ['./cmp-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CmpButtonComponent {
  @Input() size: ButtonSize = 'md';
  @Input() hierarchy: ButtonHierarchy = 'primary';
  @Input() icon: ButtonIconType = 'default';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() ariaLabel?: string;
  @Input() iconLeading?: string;
  @Input() iconTrailing?: string;

  @Output() buttonClick = new EventEmitter<Event>();

  @HostBinding('class') get cssClass() {
    return `cmp-button cmp-button--${this.size} cmp-button--${this.hierarchy} cmp-button--${this.icon}`;
  }

  onClick(event: Event) {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  }

  get buttonClasses() {
    return {
      [`cmp-button__btn`]: true,
      [`cmp-button__btn--${this.size}`]: true,
      [`cmp-button__btn--${this.hierarchy}`]: true,
      [`cmp-button__btn--${this.icon}`]: true,
      [`cmp-button__btn--disabled`]: this.disabled
    };
  }

  get isIconOnly() {
    return this.icon === 'only';
  }

  get hasIconLeading() {
    return this.icon === 'dot-leading' || (this.icon === 'default' && this.iconLeading);
  }

  get hasIconTrailing() {
    return this.icon === 'default' && this.iconTrailing;
  }
}