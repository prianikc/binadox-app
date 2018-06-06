import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], query: string, property: string) {
    query = query.toLowerCase();
    return items.filter(item => item[property].includes(query));
  }
}

export const multiFilter = (arr: Object[], filters: Object) => {
  const filterKeys = Object.keys(filters);
  return arr.filter(eachObj => {
    return filterKeys.every(eachKey => {
      if (!filters[eachKey].length) {
        return true; // passing an empty filter means that filter is ignored.
      }
      return filters[eachKey].includes(eachObj[eachKey]);
    });
  });
};
// filter(item => item.connected === 1);
