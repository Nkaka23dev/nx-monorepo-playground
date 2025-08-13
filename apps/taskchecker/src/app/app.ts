import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
 import { Header } from '../../../../libs/lib1/src/lib/header/header';

@Component({
  imports: [RouterModule, Header],
selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'task-checker';
}
