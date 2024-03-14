
import { Pipe, PipeTransform, Sanitizer, ɵSafeHtml } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'iconPipe',
  standalone: true
})
export class IconPipePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: number): SafeHtml | null {
    if (value === 0) {
      const iconHtml = '<i class="bi bi-laptop"></i>';
      return this.sanitizer.bypassSecurityTrustHtml(iconHtml);
    }
    else{
      const iconHtml = '<i class="bi bi-people-fill"></i>';
      return this.sanitizer.bypassSecurityTrustHtml(iconHtml);
    }
   
  }
} 


