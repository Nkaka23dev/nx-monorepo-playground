import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '@employee-nx-frontend/lib1';

@Component({
  imports: [RouterModule, Header],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'employee-app-dashboardd';
}
