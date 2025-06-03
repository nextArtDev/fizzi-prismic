# pnpm install next-view-transitions

Link(https://next-view-transitions.vercel.app/)

```CSS
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  
  to {
    opacity: 0;
    transform: translateY(-20px) scale(0.98);
  }
}

/* Default View Transitions */
::view-transition-old(root) {
  animation: 0.5s cubic-bezier(0.33, 1, 0.68, 1) both fade-out;
}

::view-transition-new(root) {
  animation: 0.8s cubic-bezier(0.22, 1, 0.36, 1) both fade-in;
}

/* Persistent Elements  WE SHOULD ADD THESE CLASSES TO ELEMENTS */
.navbar {
  view-transition-name: navbar;
}

.nav-drawer-blur {
  view-transition-name: nav-drawer-blur;
}

.nav-drawer {
  view-transition-name: nav-drawer;
}

.footer {
  view-transition-name: footer;
}

::view-transition-old(navbar),
::view-transition-new(navbar),
::view-transition-old(footer),
::view-transition-new(footer) {
  animation: none;
}

/* Reduced Motion Preferences */
@media (prefers-reduced-motion: reduce) {
  ::view-transition,
  ::view-transition-group(*),
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation-duration: 0.001s;
  }
}
```