import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'search',
  pure: true
})
@Injectable()
export class Search {
  transform(list: any[], DescriptionSearch: string, CodeSearch: string, FirstNameSearch:string): any[] {
       if (list && list.length){
        return list.filter(item => {
          if(DescriptionSearch)
            return item.Description.toUpperCase().indexOf(DescriptionSearch.toUpperCase()) !== -1
          else if(CodeSearch) { 
            return item.Code.toUpperCase().indexOf(CodeSearch.toUpperCase()) !== -1
          }
          else if(FirstNameSearch) { 
            return item.FirstName.toUpperCase().indexOf(FirstNameSearch.toUpperCase()) !== -1
          }

          else{
            return list;
          }
        });
      } else {
        return list;
      }
  }
}
