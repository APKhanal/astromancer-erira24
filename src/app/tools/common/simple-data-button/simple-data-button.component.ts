import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TableAction} from "../types/actions";
import {DataButtonComponent} from "../directives/data-button.directive";

@Component({
  selector: 'app-simple-data-button',
  templateUrl: './simple-data-button.component.html',
  styleUrls: ['./simple-data-button.component.css']
})
export class SimpleDataButtonComponent implements OnInit, DataButtonComponent {
  @Output() tableUserActionObs$: EventEmitter<TableAction[]>;

  constructor() {
    this.tableUserActionObs$ = new EventEmitter<TableAction[]>();
  }

  ngOnInit(): void {
  }

  tableAddRow() {
    this.tableUserActionObs$.emit([{action: "addRow"}]);
  }

}
