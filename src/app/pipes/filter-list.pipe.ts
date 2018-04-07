import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    console.log("filter")

    if (value) {
        return items.filter(it => it[field].toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    return items;

  }

}
