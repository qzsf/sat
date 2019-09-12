import { Component } from '@angular/core';
import dictionary from '../../assets/dictionary.js';
import { trigger, state, style, animate, transition } from '@angular/animations';

// import { transitions } from '../shared/animations';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
    animations: [
        trigger('inOut', [
            state('in', style({ height: '*' })),
            transition('* => void', [
                animate(5000, style({ height: '0' }))
            ])
        ]),
        trigger('myvisibility', [
            state('visible', style({
              opacity: 1
            })),
            state('invisible', style({
              opacity: 0
            })),
            state('void', style({
              opacity: 0
            })),
            transition('* => void', animate('1s'))
          ])
    ]
})
export class Tab2Page {
    dictionary: any = dictionary;
    state = 'in';
    visibleState = 'visible';

    constructor() { }

    swipe(item) {
        console.log('swipe')
        delete this.dictionary[item];
    }

    toggleVisible() {
        this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
      }

}
