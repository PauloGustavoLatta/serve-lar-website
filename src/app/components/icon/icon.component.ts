import { Component, Input } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: []
})
export class IconComponent {
  @Input() name: string = '';
  @Input() icon: string = '';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.iconRegistry.addSvgIconLiteral(
      this.name,
      this.sanitizer.bypassSecurityTrustHtml(this.icon)
    );
  }
}
