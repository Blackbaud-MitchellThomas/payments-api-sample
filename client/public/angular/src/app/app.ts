import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  #titleService: Title = inject(Title);

  protected readonly title = signal('angular');
  constructor() {
    this.#titleService.setTitle('Public');
  }
}
