import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  firstName: string;
  SSN: number;
  lastName: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {SSN: 1, firstName: 'Hydrogen', lastName: 'a', address: 'H'},
  {SSN: 2, firstName: 'Helium', lastName: 'b', address: 'He'},
  {SSN: 3, firstName: 'Lithium', lastName: 'c', address: 'Li'},
  {SSN: 4, firstName: 'Beryllium', lastName: 'd', address: 'Be'},
  {SSN: 5, firstName: 'Boron', lastName: 'e', address: 'B'},
  {SSN: 6, firstName: 'Carbon', lastName: 'f', address: 'C'},
  {SSN: 7, firstName: 'Nitrogen', lastName: 'g', address: 'N'},
  {SSN: 8, firstName: 'Oxygen', lastName: 'h', address: 'O'},
  {SSN: 9, firstName: 'Fluorine', lastName: 'i', address: 'F'},
  {SSN: 10, firstName: 'Neon', lastName: 'j', address: 'Ne'},
];

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  displayedColumns: string[]=['SSN','firstName','lastName','address'];
  dataSource=ELEMENT_DATA
  constructor() { }

  ngOnInit(): void {
  }

}


