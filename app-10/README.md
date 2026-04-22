# App10 - Nested Routing & Lazy Loading Demo

This project demonstrates **nested routing** and **lazy loading** in Angular 19+ standalone components.

---

## Project Structure

`
src/app/
+-- app.ts              # Root component
+-- app.html            # Root template (contains nav + router-outlet)
+-- app.routes.ts       # Main routing configuration
+-- pages/
    +-- home/           # Home page (eager loaded)
    +-- profile/        # Parent route with nested children
    �   +-- personal-details/  # Nested child route
    �   +-- settings/          # Lazy loaded nested child
`

---

## Step-by-Step Explanation

### Step 1: Root Component Setup

**File:** [app.ts](src/app/app.ts)
`	ypescript
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-10');
}
`

**What I did:** Imported RouterOutlet (for rendering child routes) and RouterLink (for navigation) in the root component.

---

### Step 2: Root Template with Navigation

**File:** [app.html](src/app/app.html)
`html
<nav>
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/profile">Profile</a></li>
  </ul>
</nav>
<hr>
<router-outlet></router-outlet>
`

**What I did:** 
- Added navigation links using 
outerLink directive
- Added <router-outlet> � this is where child route components will be rendered

---

### Step 3: Route Configuration

**File:** [app.routes.ts](src/app/app.routes.ts)

`	ypescript
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { PersonalDetails } from './pages/personal-details/personal-details';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
    // EAGER LOADING - loads immediately on app start
    {path:"", component:Home},

    // LAZY LOADING - loads only when user navigates to /profile
    {path:"profile", 
        loadComponent:()=>import('./pages/profile/profile').then((c)=>c.Profile), 
        children:[
            // Default child: redirect /profile ? /profile/personal-details
            {path:"", redirectTo:"personal-details", pathMatch:"full"},
            
            // Nested child route (eager loaded under profile)
            {path:"personal-details", component:PersonalDetails},
            
            // NESTED + LAZY LOADING - settings loads only when accessed
            {path:"settings", 
                loadComponent:()=>import('./pages/settings/settings').then((c)=>c.Settings)},
        ]},
];
`

---

## Key Concepts Explained

### ?? Nested Routing

**What is it?** A route inside another route using the children property.

**How it works:**
1. Parent route (/profile) has its own component with a <router-outlet>
2. Child routes (/profile/personal-details, /profile/settings) render inside the parent's outlet
3. The parent component acts as a layout wrapper for its children

**Example in [profile.html](src/app/pages/profile/profile.html):**
`html
<h1>Profile</h1>
<nav>
    <ul>
        <li><a routerLink="/profile/personal-details">personal-details</a></li>
        <li><a routerLink="/profile/settings">settings</a></li>
    </ul>
</nav>
<router-outlet></router-outlet>
`

The profile component displays its own content + a secondary navigation + another outlet for child routes.

---

### ?? Lazy Loading

**What is it?** Delaying the loading of a component until it's actually needed.

**Two ways used in this project:**

| Method | Syntax | When it loads |
|--------|--------|---------------|
| **Lazy Component** | loadComponent: () => import(...).then(m => m.Component) | When route is accessed |
| **Eager (normal)** | component: ComponentName | At app startup |

**Benefits:**
- Faster initial load time
- Smaller initial bundle size
- Code is split into separate chunks
- Loaded on-demand

---

### ?? Default Child Redirect

`	ypescript
{path:"", redirectTo:"personal-details", pathMatch:"full"}
`

**What it does:** When user visits /profile (empty child path), automatically redirect to /profile/personal-details.

**Why pathMatch: 'full'?** Required when redirecting from an empty path to ensure full URL matching.

---

## How to Run

`ash
cd app-10
ng serve
`

Then visit: http://localhost:4200/

---

## Quick Reference

| URL | Component Loaded | Loading Type |
|-----|------------------|--------------|
| / | Home | Eager |
| /profile | Profile (redirects to personal-details) | Lazy |
| /profile/personal-details | PersonalDetails (inside Profile) | Eager (under lazy parent) |
| /profile/settings | Settings (inside Profile) | Lazy |

---

## Key Takeaways

1. **<router-outlet>** is needed at every level where child routes should render
2. **Lazy loading** uses loadComponent with a dynamic import
3. **Nested routes** use the children array
4. **Default redirect** uses 
edirectTo with pathMatch: 'full'
5. Both features can be combined � a lazy-loaded parent can have eager or lazy children
