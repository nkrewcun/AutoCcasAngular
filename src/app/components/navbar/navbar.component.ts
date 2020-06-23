import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isShown = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleCollapsedNavbar($event) {
    this.isShown = !this.isShown;
    $event.currentTarget.setAttribute('aria-expanded', this.isShown ? 'true' : 'false');
  }
}
