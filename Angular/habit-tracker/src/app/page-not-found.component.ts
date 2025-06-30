import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a routerLink="/" class="home-link">Go to Home</a>
    </div>
  `,
  styles: [`
    .not-found {
      text-align: center;
      margin-top: 80px;
      color: #888;
    }
    h2 {
      color: #e74c3c;
      font-size: 2em;
      margin-bottom: 12px;
    }
    .home-link {
      color: #3498db;
      text-decoration: underline;
      font-weight: 500;
      font-size: 1.1em;
      margin-top: 18px;
      display: inline-block;
      transition: color 0.2s;
    }
    .home-link:hover {
      color: #217dbb;
    }
  `]
})
export class PageNotFoundComponent {}
