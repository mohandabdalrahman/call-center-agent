import {Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ModalComponent implements OnInit {
  @ViewChild('modal') private modalContent: TemplateRef<ModalComponent>;
  @Input() showCloseBtn = false;
  @Input() size: 'sm' | 'lg' | 'xl' | '' = ''

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open(modalDialogClass?: string, scrollable?: boolean) {
    this.modalService.open(this.modalContent, {centered: true, size: this.size, modalDialogClass, scrollable});
  }

  close() {
    this.modalService.dismissAll();
  }

}
