import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  isVisible = false;
  clicks = [];
  showDetails() {
    this.isVisible = !this.isVisible;
    this.clicks.push(new Date().toLocaleString());
  }
}
