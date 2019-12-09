import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrls: ['./vmessage.component.scss']
})
export class VMessageComponent implements OnInit {

  @Input() text = '';

  constructor() { }

  ngOnInit() {
  }

}
