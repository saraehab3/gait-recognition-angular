import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

type State = 'idle' | 'processing' | 'done';

@Component({
  selector: 'app-upload-video',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent {
  @ViewChild('videoEl') videoEl!: ElementRef<HTMLVideoElement>;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  mode: 'upload' | 'camera' = 'upload';
  dragging = false;
  file: File | null = null;
  state: State = 'idle';
  progress = 0;
  currentStep = -1;
  cameraActive = false;
  private interval: ReturnType<typeof setInterval> | null = null;

  aiSteps = [
    { label: 'Silhouette Extraction', desc: 'Background subtraction and foreground detection' },
    { label: 'GEI Generation', desc: 'Temporal averaging of gait cycle silhouettes' },
    { label: 'Feature Extraction', desc: 'Part-based CNN feature vector computation' },
    { label: 'Biometric Matching', desc: 'Cosine similarity against enrolled profiles' },
  ];

  result = { subject: 'Subject_042', similarity: 96.2, condition: 'Normal', angle: '90°' };

  stepDone(i: number) { return this.currentStep > i; }
  stepActive(i: number) { return this.currentStep === i; }

  onDragOver(e: DragEvent) { e.preventDefault(); this.dragging = true; }
  onDragLeave() { this.dragging = false; }
  onDrop(e: DragEvent) {
    e.preventDefault(); this.dragging = false;
    const f = e.dataTransfer?.files[0];
    if (f?.type.startsWith('video/')) this.setFile(f);
  }
  onFileChange(e: Event) {
    const f = (e.target as HTMLInputElement).files?.[0];
    if (f) this.setFile(f);
  }
  setFile(f: File) { this.file = f; this.state = 'idle'; this.progress = 0; this.currentStep = -1; }

  startProcessing() {
    this.state = 'processing';
    this.progress = 0;
    this.currentStep = 0;
    let p = 0;
    this.interval = setInterval(() => {
      p += 2.5;
      this.progress = Math.min(p, 100);
      if (p >= 25 && p < 50) this.currentStep = 1;
      if (p >= 50 && p < 75) this.currentStep = 2;
      if (p >= 75 && p < 100) this.currentStep = 3;
      if (p >= 100) {
        clearInterval(this.interval!);
        this.state = 'done';
        this.currentStep = 4;
      }
    }, 80);
  }

  async startCamera() {
    this.mode = 'camera';
    this.cameraActive = false;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.cameraActive = true;
      setTimeout(() => {
        if (this.videoEl?.nativeElement) {
          this.videoEl.nativeElement.srcObject = stream;
        }
      }, 50);
    } catch { this.cameraActive = false; }
  }

  switchMode(m: 'upload' | 'camera') {
    this.mode = m;
    if (m === 'camera') this.startCamera();
  }

  fileSizeMB(): string { return this.file ? (this.file.size / 1024 / 1024).toFixed(2) : '0'; }
}
