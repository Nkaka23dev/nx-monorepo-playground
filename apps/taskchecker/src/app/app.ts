import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '@employee-nx-frontend/lib1';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [RouterModule, Header, MatButtonModule, MatCardModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'task-checker';
}
