import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export class MaterialIconsService {

  private matIconRegistry: MatIconRegistry;
  private domSanitizer: DomSanitizer;

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    this.matIconRegistry = matIconRegistry;
    this.domSanitizer = domSanitizer;
  }

  public addIcons(): void {
      /**
       * @example this.matIconRegistry.addSvgIcon('nameSvg', this.domSanitizer.bypassSecurityTrustResourceUrl('value'));
       */
      this.matIconRegistry.addSvgIcon('user', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/user.svg'));
      this.matIconRegistry.addSvgIcon('trashDelete', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/trash-can.svg'));
      this.matIconRegistry.addSvgIcon('check', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/tick.svg'));
      this.matIconRegistry.addSvgIcon('save', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/save.svg'));
      this.matIconRegistry.addSvgIcon('send', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/send.svg'));
      this.matIconRegistry.addSvgIcon('brand-identity', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/brand-identity.svg'));
  }

}
