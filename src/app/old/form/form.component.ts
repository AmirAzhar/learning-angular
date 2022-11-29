import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  username = '';

  showText() {
    return this.username.length
      ? `Your username is ${this.username}`
      : 'Please type a username!';
  }

  resetUsername() {
    this.username = '';
  }
}
