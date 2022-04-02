import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {


  @Output()
  cancel = new EventEmitter();

  @Output()
  confirm = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }



}
