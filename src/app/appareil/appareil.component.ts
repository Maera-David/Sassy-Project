import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'Vu') {
      return 'green';
    } else if(this.appareilStatus === 'A voir') {
      return 'red';
    }
  }

  onSwitch() {
    console.log(this);
    if(this.appareilStatus === 'Vu') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'A voir') {
      this.appareilService.switchOnOne(this.index);
    }
  }
}
