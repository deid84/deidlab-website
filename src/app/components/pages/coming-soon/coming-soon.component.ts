import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent implements OnInit, OnDestroy {
  formatTwoDigits(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
  targetDate: Date = new Date('2026-01-01T00:00:00');
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  private intervalId: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private startCountdown(): void {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(this.intervalId);
        this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return;
      }

      this.timeLeft.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.timeLeft.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.timeLeft.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.timeLeft.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }
}
