import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], query: string, property: string) {
    return items.filter(item => item[property].includes(query));
  }
}

// filter(item => item.connected === 1);
