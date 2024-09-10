import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'primeiros-passos-angular';
  isDarkMode = true;

  ngOnInit() {
    this.loadTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme() {
    const body = document.body;
    const colorBlack = document.getElementById('#loginContent');
    if (this.isDarkMode) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    } else {
      colorBlack?.classList.add('light-mode');
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    }
  }

  private loadTheme() {
    const storedTheme = localStorage.getItem('theme');
    this.isDarkMode = storedTheme === 'dark' || !storedTheme; // Default to dark if no preference is stored
    this.applyTheme();
  }
}
