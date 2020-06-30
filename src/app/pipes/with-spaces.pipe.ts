import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withSpaces'
})
export class WithSpacesPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    const parts = value.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.').replace('.', ',');
  }

}
