# App11 - Dynamic Component Loading

This project demonstrates **Dynamic Component Loading** in Angular — loading components programmatically at runtime instead of declaring them in the template.

---

## What is Dynamic Component Loading?

**Traditional way:** You add the component directly in the HTML template:
```html
<app-user-details></app-user-details>
```

**Dynamic way:** You load it via code when needed (e.g., button click):
```typescript
const {UserDetails} = await import('./user-details/user-details');
this.user?.createComponent(UserDetails);
```

---

## Step-by-Step Explanation

### Step 1: Create a Button with Click Event

**File:** app.html
```html
<button (click)="loadComponent()">load user-details component</button>
```

**What I did:** Added a button that triggers the `loadComponent()` method when clicked.

---

### Step 2: Create a Container for the Dynamic Component

**File:** app.html
```html
<ng-container #user></ng-container>
```

**What I did:** 
- Added an `<ng-container>` — a logical container that doesn't render in the DOM
- Gave it a template reference `#user` so we can access it in TypeScript
- This is where the dynamic component will be inserted

---

### Step 3: Get Reference to the Container

**File:** app.ts
```typescript
@ViewChild("user", {read:ViewContainerRef})
user!: ViewContainerRef;
```

**What I did:**
- Used `@ViewChild` decorator to get a reference to the container
- `{read:ViewContainerRef}` tells Angular to give us the container ref (not the element)
- Stored it in the `user` property (type: `ViewContainerRef`)

---

### Step 4: Load the Component Dynamically

**File:** app.ts
```typescript
async loadComponent(){
  // Clear any existing component first
  this.user?.clear();

  // Dynamic import - loads the component file only when called
  const {UserDetails} = await import('./user-details/user-details');

  // Create the component and insert it into the container
  this.user?.createComponent(UserDetails);
}
```

**What I did:**
1. `this.user?.clear()` — Removes any previously loaded component (prevents duplicates)
2. `await import(...)` — Lazy loads the component file dynamically (only when needed)
3. `this.user?.createComponent(UserDetails)` — Creates and inserts the component into the container

---

## Key Concepts Explained

### @ViewChild Decorator

```typescript
@ViewChild("templateRef", {read:ViewContainerRef})
```

| Parameter | Purpose |
|-----------|---------|
| `"templateRef"` | The `#name` from the HTML template |
| `{read:ViewContainerRef}` | Tells Angular to return the container, not the element |

### ViewContainerRef

This is a reference to a container where you can:
- `createComponent(component)` — Create and insert a component
- `clear()` — Remove all inserted components
- `insert(component)` — Insert at a specific position

### Dynamic Import (`await import`)

```typescript
const {UserDetails} = await import('./user-details/user-details');
```

This is lazy loading at the component level:
- The component code is NOT downloaded until this line executes
- The imported component is then available to be instantiated

### createComponent() vs clear()

| Method | Purpose |
|--------|---------|
| `createComponent(Component)` | Creates a new instance and adds it to the container |
| `clear()` | Removes all components from the container |

**Without `clear()`:** Each click would stack another component instance.
**With `clear()`:** Each click replaces the previous component.

---

## Flow Diagram

```
User clicks button
       |
       V
loadComponent() called
       |
       V
this.user?.clear()  --> Remove old component
       |
       V
await import('./user-details/user-details')
       |
       V
Dynamic import loads the component file
       |
       V
this.user?.createComponent(UserDetails)
       |
       V
Component rendered in <ng-container #user>
```

---

## How to Run

```bash
cd app-11
ng serve
```

Then visit: `http://localhost:4200/`

Click the button --> UserDetails component loads dynamically!

---

## Quick Reference

| Step | File | Code |
|------|------|------|
| 1. Trigger | app.html | `<button (click)="loadComponent()">` |
| 2. Container | app.html | `<ng-container #user>` |
| 3. Reference | app.ts | `@ViewChild("user", {read:ViewContainerRef})` |
| 4. Load | app.ts | `this.user?.createComponent(UserDetails)` |

---

## Key Takeaways

1. `@ViewChild` — Gets reference to a template element/container
2. `ViewContainerRef` — The API to create/manage dynamic components
3. **Dynamic `import()`** — Loads component code on-demand (lazy)
4. `createComponent()` — Instantiates and inserts the component
5. `clear()` — Prevents duplicate components on repeated loads
6. `<ng-container>` — Invisible placeholder for dynamic content# App11 - Dynamic Component Loading

This project demonstrates **Dynamic Component Loading** in Angular — loading components programmatically at runtime instead of declaring them in the template.

---

## What is Dynamic Component Loading?

**Traditional way:** You add the component directly in the HTML template:
`html
<app-user-details></app-user-details>
`

**Dynamic way:** You load it via code when needed (e.g., button click):
`	ypescript
const {UserDetails} = await import('./user-details/user-details');
this.user?.createComponent(UserDetails);
`

---

## Step-by-Step Explanation

### Step 1: Create a Button with Click Event

**File:** app.html
`html
<button (click)="loadComponent()">load user-details component</button>
`

**What I did:** Added a button that triggers the loadComponent() method when clicked.

---

### Step 2: Create a Container for the Dynamic Component

**File:** app.html
`html
<ng-container #user></ng-container>
`

**What I did:** 
- Added an ng-container — a logical container that does not render in the DOM
- Gave it a template reference #user so we can access it in TypeScript
- This is where the dynamic component will be inserted

---

### Step 3: Get Reference to the Container

**File:** app.ts
`	ypescript
@ViewChild("user", {read:ViewContainerRef})
user!: ViewContainerRef;
`

**What I did:**
- Used @ViewChild decorator to get a reference to the container
- {read:ViewContainerRef} tells Angular to give us the container ref (not the element)
- Stored it in the user property (type: ViewContainerRef)

---

### Step 4: Load the Component Dynamically

**File:** app.ts
`	ypescript
async loadComponent(){
  // Clear any existing component first
  this.user?.clear();

  // Dynamic import - loads the component file only when called
  const {UserDetails} = await import('./user-details/user-details');

  // Create the component and insert it into the container
  this.user?.createComponent(UserDetails);
}
`

**What I did:**
1. this.user?.clear() — Removes any previously loaded component (prevents duplicates)
2. await import(...) — Lazy loads the component file dynamically (only when needed)
3. this.user?.createComponent(UserDetails) — Creates and inserts the component into the container

---

## Key Concepts Explained

### @ViewChild Decorator

`	ypescript
@ViewChild("templateRef", {read:ViewContainerRef})
`

| Parameter | Purpose |
|-----------|---------|
| "templateRef" | The #name from the HTML template |
| {read:ViewContainerRef} | Tells Angular to return the container, not the element |

### ViewContainerRef

This is a reference to a container where you can:
- createComponent(component) — Create and insert a component
- clear() — Remove all inserted components
- insert(component) — Insert at a specific position

### Dynamic Import (await import)

`	ypescript
const {UserDetails} = await import('./user-details/user-details');
`

This is lazy loading at the component level:
- The component code is NOT downloaded until this line executes
- The imported component is then available to be instantiated

### createComponent() vs clear()

| Method | Purpose |
|--------|---------|
| createComponent(Component) | Creates a new instance and adds it to the container |
| clear() | Removes all components from the container |

**Without clear():** Each click would stack another component instance.
**With clear():** Each click replaces the previous component.

---

## Flow Diagram

`
User clicks button
       |
       V
loadComponent() called
       |
       V
this.user?.clear()  --> Remove old component
       |
       V
await import('./user-details/user-details')
       |
       V
Dynamic import loads the component file
       |
       V
this.user?.createComponent(UserDetails)
       |
       V
Component rendered in ng-container #user
`

---

## How to Run

`ash
cd app-11
ng serve
`

Then visit: http://localhost:4200/

Click the button --> UserDetails component loads dynamically!

---

## Quick Reference

| Step | File | Code |
|------|------|------|
| 1. Trigger | app.html | button (click)="loadComponent()" |
| 2. Container | app.html | ng-container #user |
| 3. Reference | app.ts | @ViewChild("user", {read:ViewContainerRef}) |
| 4. Load | app.ts | this.user?.createComponent(UserDetails) |

---

## Key Takeaways

1. @ViewChild — Gets reference to a template element/container
2. ViewContainerRef — The API to create/manage dynamic components
3. Dynamic import() — Loads component code on-demand (lazy)
4. createComponent() — Instantiates and inserts the component
5. clear() — Prevents duplicate components on repeated loads
6. ng-container — Invisible placeholder for dynamic content
