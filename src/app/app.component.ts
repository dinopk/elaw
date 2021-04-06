import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MaterialIconsService } from './shared/material/register-icons/material-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'products-elaw';

  private materialIcons: MaterialIconsService;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ){
      this.materialIcons = new MaterialIconsService(this.matIconRegistry, this.domSanitizer);
      this.materialIcons.addIcons();
    }
}
