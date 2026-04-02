import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, SidebarComponent, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  activeTab: 'profile' | 'system' | 'security' | 'notifications' = 'profile';

  profile = { name: 'Ahmed Hassan', email: 'ahmed@university.edu', dept: 'Computer Science', role: 'Researcher' };

  system = {
    matchThreshold:   85,
    maxAngleRange:    180,
    silDetectionMode: 'background_subtraction',
    enableGPU:        true,
    batchSize:        32,
  };

  notifs = {
    email:    true,
    desktop:  true,
    sms:      false,
    highConf: true,
    noMatch:  true,
    weekly:   false,
  };

  security = {
    twoFactor: true,
    sessionTimeout: '30',
    ipWhitelist: '192.168.1.0/24\n10.0.0.0/8',
  };

  tabs = [
    { key: 'profile',       label: 'Profile' },
    { key: 'system',        label: 'System' },
    { key: 'security',      label: 'Security' },
    { key: 'notifications', label: 'Notifications' },
  ] as const;

  setTab(t: typeof this.activeTab) { this.activeTab = t; }
  saved = false;
  save() { this.saved = true; setTimeout(() => this.saved = false, 2000); }
}
