import { Component } from '@angular/core';

// AppComponent is the root component of the application.
// It acts as the main container for all other components and views.
// The selector 'app-root' is used in index.html to bootstrap the Angular app.
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <header>
      <h1>{{ title }}</h1>
      <nav>
        <a routerLink="/habits" routerLinkActive="active">Habits</a>
        <a routerLink="/add" routerLinkActive="active" class="add-btn">+ Add Habit</a>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet> <!-- Displays routed views -->
    </main>
  </div>
  `,
  styles: [`
    .container {
      max-width: 700px;
      margin: 48px auto 32px auto;
      background: #fff;
      border-radius: 22px;
      box-shadow: 0 8px 32px rgba(44, 62, 80, 0.13);
      padding: 0 0 40px 0;
      min-height: 80vh;
      transition: box-shadow 0.2s;
    }
    header {
      padding: 40px 40px 0 40px;
      border-radius: 22px 22px 0 0;
      background: linear-gradient(90deg, #3498db 0%, #6dd5fa 100%);
      color: #fff;
      box-shadow: 0 2px 12px rgba(52, 152, 219, 0.10);
    }
    h1 {
      margin: 0 0 12px 0;
      font-size: 2.5em;
      font-weight: 800;
      letter-spacing: 1.5px;
      text-shadow: 0 2px 8px rgba(52,152,219,0.08);
    }
    nav {
      display: flex;
      gap: 18px;
      margin-bottom: 0;
      align-items: center;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      padding: 8px 20px;
      border-radius: 8px;
      transition: background 0.2s, color 0.2s;
      font-size: 1.08em;
    }
    nav a.active, nav a:hover {
      background: rgba(255,255,255,0.22);
      text-decoration: none;
    }
    .add-btn {
      background: #3498db;
      color: #fff;
      font-weight: bold;
      border: 1.5px solid #fff;
      margin-left: auto;
      transition: background 0.2s, color 0.2s, border 0.2s;
      box-shadow: 0 2px 8px rgba(52,152,219,0.08);
    }
    .add-btn:hover {
      background: #fff;
      color: #3498db;
      border: 1.5px solid #fff;
    }
    a{
      margin-bottom: 10px;
    }
    main {
      padding: 32px 40px 0 40px;
    }
    @media (max-width: 700px) {
      .container, header, main {
        padding-left: 8px;
        padding-right: 8px;
      }
      .container {
        min-width: unset;
        margin: 16px 0;
        border-radius: 12px;
      }
      header {
        padding: 24px 12px 0 12px;
        border-radius: 12px 12px 0 0;
      }
      main {
        padding: 18px 8px 0 8px;
      }
      h1 {
        font-size: 1.5em;
      }
      nav a {
        font-size: 1em;
        padding: 6px 10px;
      }
    }
  `]
})
export class AppComponent {
  // The title property is used for display and testing purposes.
  title = 'Habit Tracker';
}

// AppComponent is the root component of the Angular application.
// It acts as the main container and entry point for the UI.
// The selector 'app-root' is used in index.html to render this component.
// The template uses Angular interpolation ({{ title }}) to display the title.
// <app-habit-list> is a custom component that displays the list of habits.
// Styles are scoped to this component only.
//
// Angular Component Decorator:
// - selector: HTML tag for this component
// - template: Inline HTML for the component
// - styles: Inline CSS for the component
