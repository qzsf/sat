import { Component, OnInit } from '@angular/core';

import dictionary from '../../assets/dictionary.js';
import {transitions} from '../shared/animations';

@Component({
    selector: 'app-tab4',
    templateUrl: 'tab4.page.html',
    styleUrls: ['tab4.page.scss'],
    animations: [
        transitions
    ]
})
export class Tab4Page implements OnInit {
    // convert dictionary object to array
    listItem = Object.keys(dictionary).map(key => ({ 'key': key, 'value': dictionary[key] }));
    def: boolean = false;
    toggle = <any>[];
    bookmark = <any>[];

    contentState = 'out';

    constructor() { }

    ngOnInit() {
        // console.log(dictionary)
    }

    swipeleft(item) {
        console.log('swipe left')
        this.listItem = this.listItem.filter(o => o.key !== item.key);
        console.log(item)
    }

    tap(item) {
        // check the tapped word in toggle list or not
        // if in remove the word else add it
        if (this.toggle.includes(item)) {
            this.toggle = this.toggle.filter(itm => itm !== item);
        } else {
            this.toggle.push(item);
        }
        console.log(this.toggle)
    }

    like(item){
        console.log('like')
        if (this.bookmark.includes(item)) {
            this.bookmark = this.bookmark.filter(itm => itm !== item);
        } else {
            this.bookmark.push(item);
        }
    }
}
