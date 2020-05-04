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
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'Seen') {
      return 'green';
    } else if(this.appareilStatus === 'To see') {
      return 'red';
    }
  }

  onSwitch() {
    console.log(this);
    if(this.appareilStatus === 'Seen') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'To see') {
      this.appareilService.switchOnOne(this.index);
    }
  }
  
}
