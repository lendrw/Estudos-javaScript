import { Component } from '@angular/core';
import { IFilterOptions } from 'src/app/interfaces/filter-option.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  }

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false }
  ]

  onFilter() {
    console.log(this.filterOptions)
  }
}
