import { Component, OnInit } from '@angular/core';
import { TableNumRowsService } from '../../core/table-num-rows/table-num-rows.service';
import { PageOptions } from '../../core/table-num-rows/page-options.model';

@Component({
  selector: 'app-table-num-rows',
  templateUrl: './table-num-rows.component.html',
  styleUrls: ['./table-num-rows.component.css']
})
export class TableNumRowsComponent implements OnInit {
  pageOptions: PageOptions[] = [
    {value: 5, viewValue: '5'},
    {value: 10, viewValue: '10'},
    {value: 25, viewValue: '25'}
  ];
  constructor(private tnr: TableNumRowsService) { }

  ngOnInit() {
  }

  changeSize(value: number): void {
    this.tnr.change(value);
  }

}
