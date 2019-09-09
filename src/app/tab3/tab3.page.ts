import { Component, OnInit } from '@angular/core';

import dictionary from '../../assets/dictionary.js';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  diction: any = dictionary;
  def: boolean = false;
  toggle = <any>[];

  constructor() { }

  ngOnInit() {
    // console.log(dictionary)
  }

  swipeleft(item) {
    console.log('swipe left')
    delete this.diction[item];
    console.log(this.diction)
  }

  tap(item) {
    if(this.toggle.includes(item)){
      this.toggle = this.toggle.filter(itm => itm !==item);
    }else{
      this.toggle.push(item);
    }
    console.log(this.toggle)
  }
}
