import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: string, sortOrder: string): any {
    if (value.length === 0) {
      return value;
    }
    return value.sort(this.compareValues(propName, sortOrder));
  }

  compareValues(propName: string, sortOrder = 'asc') {
    return function(a: any, b: any) {
      let aLower = a[propName];
      let bLower = b[propName];
      if (typeof a[propName] === 'string') {
        aLower = a[propName].toLowerCase();
        bLower = b[propName].toLowerCase();
      }
      // console.log(aLower, bLower);
      let comparison = 0;
      if (aLower > bLower) {
        comparison = 1;
      }
      if (aLower < bLower) {
        comparison = -1;
      }
      comparison = sortOrder === 'asc' ? comparison : comparison * -1;
      return comparison;
    };
  }
}
