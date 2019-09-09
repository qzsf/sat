import { Component } from '@angular/core';
import dictionary from '../../assets/dictionary.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dictionary: any = dictionary;

  constructor() {}

  swipe(item){
    console.log('swipe')
    delete this.dictionary[item];
  }

}
