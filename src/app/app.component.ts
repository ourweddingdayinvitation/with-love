import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  audio!: HTMLAudioElement;
  isPlaying = false;

  ngOnInit(): void {
    this.audio = document.getElementById('bg-music') as HTMLAudioElement;
    this.audio.loop = true;

    // Start muted so autoplay works
    this.audio.muted = true;

    // Try to play muted audio automatically
    this.audio.play().then(() => {
      this.isPlaying = true; 
    }).catch(() => {
      this.isPlaying = false;
    });
  }

  toggleAudio() {
    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    } else {
      // On user interaction unmute and play
      this.audio.muted = false;
      this.audio.play();
      this.isPlaying = true;
    }
  }
}
