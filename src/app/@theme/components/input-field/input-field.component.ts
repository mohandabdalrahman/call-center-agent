import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputFieldComponent
    }
  ]
})
export class InputFieldComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input') input: ElementRef;
  @Input() label: string = null;
  @Input() required: boolean;
  @Input() type = "text";
  @Input() placeholder: string = "";
  @Input() errorMsg: string;
  @Input() disable: boolean;
  @Input() ref: any;
  @Input() maxLength: number;
  @Input() minLength: number;
  @Output() change = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }



  onChange(value: any) {
    this.change.emit(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }

}
