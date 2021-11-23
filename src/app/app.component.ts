import { Component } from '@angular/core';
import { ServiceService } from './service.service';

interface Region {
  name: string;
  code: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  regiones: Region[] = [
    { name: 'Europa', code: 'europe' },
    { name: 'America', code: 'ame' },
    { name: 'Africa', code: 'africa' },
    { name: 'Oceania', code: 'oceania' },
    { name: 'Asia', code: 'asia' },
  ];
  value: string = 'Holas';
  paises: any[] = [];
  title = 'Paisapp';

  constructor(private serviceGeneral: ServiceService) {}
  hola(code: string) {
    this.serviceGeneral.buscarPaises(code).subscribe((res) => {
      console.log(res);
      this.paises = res;
    });
  }
}
