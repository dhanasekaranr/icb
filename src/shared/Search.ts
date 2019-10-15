import { Injectable, Pipe } from '@angular/core';

// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({
  name: 'search',
  pure: true
})
@Injectable()
export class Search {
  transform(list: any[], DescriptionSearch: string, CodeSearch: string, FirstNameSearch: string, FullName: string,
            NameSearch: string): any[] {
       if (list && list.length) {
        return list.filter(item => {
          if (DescriptionSearch) {
            return item.Description.toUpperCase().indexOf(DescriptionSearch.toUpperCase()) !== -1;
          } else if (CodeSearch) {
            return item.Code.toUpperCase().indexOf(CodeSearch.toUpperCase()) !== -1;
          } else if (FirstNameSearch) {
            return item.Description.toUpperCase().indexOf(FirstNameSearch.toUpperCase()) !== -1 ||
            item.BorrowerName.toUpperCase().indexOf(FirstNameSearch.toUpperCase()) !== -1;
          } else if (NameSearch) {
            return item.FirstName.toUpperCase().indexOf(NameSearch.toUpperCase()) !== -1 ||
            item.LastName.toUpperCase().indexOf(NameSearch.toUpperCase()) !== -1;
          } else if (FullName) {
              return item.BorrowerName.toUpperCase().indexOf(FullName.toUpperCase()) !== -1;
          } else {
            return list;
          }
        });
      } else {
        return list;
      }
  }
}
