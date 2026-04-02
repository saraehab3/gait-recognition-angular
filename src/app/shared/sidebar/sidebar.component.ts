import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
  <aside class="sidebar">
    <!-- Logo -->
    <div class="sidebar-logo">
      <div class="sidebar-logo-icon glow-cyan">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      <div>
        <div class="sidebar-brand">GaitID <em>AI</em></div>
        <div class="sidebar-sub">Biometric Platform</div>
      </div>
    </div>

    <!-- Status -->
    <div class="sidebar-status">
      <span class="pulse-dot"></span>
      <span>System Active</span>
    </div>

    <!-- Nav -->
    <nav class="sidebar-nav">
      <a routerLink="/dashboard" routerLinkActive="active" class="nav-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
        Dashboard
      </a>
      <a routerLink="/upload" routerLinkActive="active" class="nav-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
        Upload Video
        <span class="nav-dot pulse"></span>
      </a>
      <a routerLink="/profiles" routerLinkActive="active" class="nav-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        Gait Profiles
      </a>
      <a routerLink="/gallery" routerLinkActive="active" class="nav-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        Gallery Database
      </a>
      <a routerLink="/reports" routerLinkActive="active" class="nav-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
        Reports
      </a>
      <a routerLink="/settings" routerLinkActive="active" class="nav-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
        Settings
      </a>
    </nav>

    <!-- User + Logout -->
    <div class="sidebar-footer">
      <div class="sidebar-user">
        <div class="user-avatar">AH</div>
        <div>
          <div class="user-name">Ahmed Hassan</div>
          <div class="user-role">Researcher</div>
        </div>
      </div>
      <a routerLink="/login" class="btn-ghost" style="width:100%; justify-content:flex-start; color:#f87171">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:1rem;height:1rem"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        Logout
      </a>
    </div>
  </aside>
  `,
  styles: [`
    .sidebar {
      position: fixed; top: 0; left: 0; height: 100vh; width: 260px;
      background: var(--bg-sidebar); border-right: 1px solid var(--border);
      display: flex; flex-direction: column; z-index: 40;
    }
    .sidebar-logo {
      display: flex; align-items: center; gap: .75rem;
      padding: 1.25rem 1.25rem 1rem; border-bottom: 1px solid var(--border);
    }
    .sidebar-logo-icon {
      width: 2.25rem; height: 2.25rem; border-radius: .625rem;
      background: rgba(0,200,255,.12); border: 1px solid var(--cyan-border);
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .sidebar-logo-icon svg { width: 1.125rem; height: 1.125rem; color: var(--cyan); }
    .sidebar-brand { font-size: .9375rem; font-weight: 800; color: #fff; }
    .sidebar-brand em { color: var(--cyan); font-style: normal; }
    .sidebar-sub { font-size: .6875rem; color: var(--text-muted); }
    .sidebar-status {
      margin: .75rem 1rem; padding: .5rem .875rem; border-radius: .5rem;
      background: rgba(0,200,255,.08); border: 1px solid rgba(0,200,255,.2);
      display: flex; align-items: center; gap: .5rem; font-size: .75rem; color: var(--cyan);
    }
    .pulse-dot { width: .5rem; height: .5rem; border-radius: 50%; background: var(--cyan); animation: pulse 2s infinite; }
    .sidebar-nav { flex: 1; padding: .5rem .75rem; overflow-y: auto; display: flex; flex-direction: column; gap: .125rem; }
    .nav-dot { margin-left: auto; width: .375rem; height: .375rem; border-radius: 50%; background: var(--cyan); }
    .sidebar-footer { padding: .75rem; border-top: 1px solid var(--border); }
    .sidebar-user { display: flex; align-items: center; gap: .75rem; padding: .75rem; background: rgba(255,255,255,.03); border-radius: .625rem; margin-bottom: .5rem; }
    .user-avatar { width: 2rem; height: 2rem; border-radius: 50%; background: rgba(0,200,255,.15); border: 1px solid var(--cyan-border); display: flex; align-items: center; justify-content: center; font-size: .6875rem; font-weight: 700; color: var(--cyan); flex-shrink: 0; }
    .user-name { font-size: .8125rem; font-weight: 600; color: var(--text); }
    .user-role { font-size: .6875rem; color: var(--text-muted); }
  `]
})
export class SidebarComponent {}
