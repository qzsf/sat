import { Component } from '@angular/core';
import dictionary from '../../assets/dictionary.js';
import {transitions} from '../shared/animations';


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
    animations: [
        transitions
    ]
})
export class Tab1Page {
    // convert dictionary object to array
    listItem = Object.keys(dictionary).map(key=>({'key':key,'value':dictionary[key]}));

    // listItem = [
    //     { key: 'abstractedness 1', value: 'The state of being abstracted.' },
    //     { key: 'abstractedness 2', value: 'The state of being abstracted.' },
    //     { key: 'abstractedness 3', value: 'The state of being abstracted.' },
    //     { key: 'abstractedness 4', value: 'The state of being abstracted.' },
    //     { key: 'abstractedness 5', value: 'The state of being abstracted.' },
    //     { key: 'abstractedness 6', value: 'The state of being abstracted.' },
    //     { key: 'abstractedness 7', value: 'The state of being abstracted.' },
    // ];
    constructor() { }

    removeItem(item) {
        this.listItem = this.listItem.filter(o => o.key !== item.key);
        console.log(this.listItem)
    }

}
