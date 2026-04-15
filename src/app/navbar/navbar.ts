import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { MenubarModule, Menubar } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports: [Menubar, MenubarModule, CardModule, ButtonModule, SplitterModule],
})
export class Navbar {

  isMobile = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  checkScreen() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 900;
    }
  }

  items = [
    { label: 'ABOUT' },
    { label: 'EDUCATION' },
    { label: 'TECHNOLOGY & TOOLS' },
    { label: 'EXPERIENCE' },
    { label: 'CONTACT ME' }
  ];
}