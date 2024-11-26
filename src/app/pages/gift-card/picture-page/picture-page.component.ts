import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-picture-page',
  templateUrl: './picture-page.component.html',
  styleUrl: './picture-page.component.css'
})
export class PicturePageComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('audioPlayer') audioPlayer: ElementRef;

  audioSources: string[] = [
    "assets/mp3/15. Hidden In the Sand.mp3",
    "assets/mp3/Clair de Lune.mp3",
    "assets/mp3/I Hear A Symphony - Live From Ocean Way Nashville.mp3",
    "assets/mp3/spotifydown.com - Can't Take My Eyes off You.mp3",
    "assets/mp3/Sweet Boi.mp3"
  ];

  selectedAudioSource: string = this.audioSources[0];

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // Set the audio source
    this.audioPlayer.nativeElement.src = this.selectedAudioSource;

    // Set the volume to 0.5
    this.audioPlayer.nativeElement.volume = 0.4;

    // Play the audio
    this.audioPlayer.nativeElement.play();

    // When the audio ends, play the next audio
    this.audioPlayer.nativeElement.addEventListener('ended', () => {
      this.playNextAudio();
    });
  }

  playNextAudio() {
    // Get the index of the next audio
    const nextAudioIndex = this.audioSources.indexOf(this.selectedAudioSource) + 1;

    // If the next audio exists, play it
    if (nextAudioIndex < this.audioSources.length) {
      this.selectedAudioSource = this.audioSources[nextAudioIndex];
      this.audioPlayer.nativeElement.src = this.selectedAudioSource;
      this.audioPlayer.nativeElement.play();
    }
  }

}
