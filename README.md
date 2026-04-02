# GaitID AI — Angular Project

Graduation Project: **Gait Recognition for Biometric Identification in Low-Resolution Surveillance Footage**

## Tech Stack
- Angular 17+ (Standalone Components)
- Angular Router (lazy-loaded routes)
- Angular Forms (FormsModule)
- Pure CSS dark theme with CSS variables

## Setup

```bash
# 1. Copy the angular-gait/ folder to your machine
# 2. Inside the folder:
npm install
ng serve
# Open: http://localhost:4200
```

## Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | LandingComponent | Hero, steps, features, GEI section, footer |
| `/login` | LoginComponent | Email/password auth with show/hide toggle |
| `/otp` | OtpComponent | 6-digit OTP with auto-focus navigation |
| `/register` | RegisterComponent | Full sign-up with role selector |
| `/dashboard` | DashboardComponent | Stats, bar chart, table, distribution |
| `/upload` | UploadVideoComponent | File drop or live camera + AI pipeline |
| `/profiles` | GaitProfileComponent | Subject list + detail with GEI silhouette |
| `/gallery` | GalleryComponent | Grid/list GEI archive with filters |
| `/reports` | ReportsComponent | Monthly chart, condition/angle tables |
| `/settings` | SettingsComponent | Profile, system, security, notifications tabs |

## Structure

```
src/
├── app/
│   ├── app.component.ts         # Root (router-outlet only)
│   ├── app.config.ts            # provideRouter + provideAnimations
│   ├── app.routes.ts            # All 10 lazy-loaded routes
│   ├── shared/
│   │   └── sidebar/             # Fixed sidebar with nav links
│   └── pages/
│       ├── landing/
│       ├── login/
│       ├── otp/
│       ├── register/
│       ├── dashboard/
│       ├── upload-video/
│       ├── gait-profile/
│       ├── gallery/
│       ├── reports/
│       └── settings/
├── styles.css                   # Global dark theme + utilities
└── index.html
```

## Design System (CSS Variables)
```css
--bg          #0b0f1a   /* main background */
--bg-card     #101623   /* card background */
--cyan        #00c8ff   /* primary accent */
--blue        #3c78ff   /* secondary accent */
--text        #e2e8f0   /* body text */
--text-muted  #4a6080   /* muted text */
```
