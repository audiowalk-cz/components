import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'awc-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss'],
})
export class PlayerControlsComponent implements OnInit {
  @Output() back: EventEmitter<void> = new EventEmitter();
  @Output() play: EventEmitter<void> = new EventEmitter();
  @Output() pause: EventEmitter<void> = new EventEmitter();
  @Output() forward: EventEmitter<void> = new EventEmitter();

  @Input() playing: boolean = false;

  @Input() hideBack: boolean = false;
  @Input() hidePlay: boolean = false;
  @Input() hideForward: boolean = false;

  skipBackItems: any[] = [];
  skipForwardItems: any[] = [];

  constructor() {
    this.back.subscribe(() => this.skipBackItems.push(true));
    this.forward.subscribe(() => this.skipForwardItems.push(true));
  }

  ngOnInit() {}
}
