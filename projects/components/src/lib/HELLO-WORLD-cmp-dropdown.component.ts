import { Component, Input, Output, EventEmitter, HostBinding, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DropdownType = 'default' | 'icon-leading' | 'avatar-leading' | 'dot-leading' | 'search' | 'tags';
export type DropdownState = 'default' | 'placeholder' | 'focused' | 'open';

@Component({
  selector: 'cmp-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './HELLO-WORLD-cmp-dropdown.component.html',
  styleUrls: ['./HELLO-WORLD-cmp-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CmpDropdownComponent {
  @Input() type: DropdownType = 'default';
  @Input() state: DropdownState = 'placeholder';
  @Input() disabled: boolean = false;
  @Input() label?: string;
  @Input() placeholder?: string = 'Select option...';
  @Input() hintText?: string;
  @Input() supportingText?: string;
  @Input() showLabel: boolean = true;
  @Input() showHintText: boolean = true;
  @Input() showSupportingText: boolean = true;
  @Input() showScrollBar: boolean = true;
  @Input() iconLeading?: string;
  @Input() avatarSrc?: string;
  @Input() options: string[] = [];
  @Input() selectedValue?: string;
  @Input() ariaLabel?: string;

  @Output() dropdownChange = new EventEmitter<string>();
  @Output() dropdownOpen = new EventEmitter<void>();
  @Output() dropdownClose = new EventEmitter<void>();

  @HostBinding('class') get cssClass() {
    return `cmp-dropdown cmp-dropdown--${this.type} cmp-dropdown--${this.state}`;
  }

  @HostBinding('attr.aria-label') get ariaLabelValue() {
    return this.ariaLabel || this.label || 'Dropdown';
  }

  get isOpen() {
    return this.state === 'open';
  }

  get isFocused() {
    return this.state === 'focused';
  }

  get hasIconLeading() {
    return this.type === 'icon-leading' || this.type === 'search';
  }

  get hasAvatarLeading() {
    return this.type === 'avatar-leading';
  }

  get hasDotLeading() {
    return this.type === 'dot-leading';
  }

  get isSearchType() {
    return this.type === 'search';
  }

  get isTagsType() {
    return this.type === 'tags';
  }

  get displayValue() {
    return this.selectedValue || this.placeholder;
  }

  get dropdownClasses() {
    return {
      [`cmp-dropdown__container`]: true,
      [`cmp-dropdown__container--${this.type}`]: true,
      [`cmp-dropdown__container--${this.state}`]: true,
      [`cmp-dropdown__container--disabled`]: this.disabled
    };
  }

  onDropdownClick(event: Event) {
    if (!this.disabled) {
      if (this.state === 'open') {
        this.state = 'default';
        this.dropdownClose.emit();
      } else {
        this.state = 'open';
        this.dropdownOpen.emit();
      }
    }
  }

  onOptionSelect(option: string, event: Event) {
    event.stopPropagation();
    if (!this.disabled) {
      this.selectedValue = option;
      this.state = 'default';
      this.dropdownChange.emit(option);
      this.dropdownClose.emit();
    }
  }

  onFocus() {
    if (!this.disabled && this.state !== 'open') {
      this.state = 'focused';
    }
  }

  onBlur() {
    if (!this.disabled && this.state === 'focused') {
      this.state = 'default';
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.onDropdownClick(event);
        break;
      case 'Escape':
        if (this.state === 'open') {
          this.state = 'default';
          this.dropdownClose.emit();
        }
        break;
    }
  }
}
