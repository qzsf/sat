import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const transitions = [
    trigger('inOut', [
        state('in', style({
            opacity: '1',
            top: '40px',
            paddingBottom: '60px'
        })),
        state('out', style({
            opacity: '0',
            height: '0',
            overflow: 'hidden',
            paddingTop: '40px',
            paddingBottom: '0'
        })),
        transition('in => out',
            // style({transform: 'scaleY(0)', opacity: '0'}),
            animate('300ms')
        ),
        transition('out => in',
            // style({transform: 'scaleY(0)', opacity: '0'}),
            animate('300ms 350ms')
        )
    ]),
    trigger('titleInOut', [
        state('in', style({
            opacity: '1',
            position: 'absolute',

        })),
        state('out', style({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        })),
        transition('in => out',
            // style({transform: 'scaleY(0)', opacity: '0'}),
            animate('300ms 300ms ease-out')
        ),
        transition('out => in',
            // style({transform: 'scaleY(0)', opacity: '0'}),
            animate('300ms ease-out')
        )
    ]),
    trigger('fadeInOut', [
        state('void', style({
            opacity: .5,
            height: 0,
            borderLeft: '375px solid red'
        })),
        transition('* => void', animate('300ms ease-in'))
    ]),
    trigger('bookmark',[
        state('mark',style({
            color:'lightgreen'
        })),
        state('unmark', style({
            color:'lightblue'
        })),
        transition('*<=>*', [
            animate('300ms', keyframes([
                style({transform: 'scale(1)'}),
                style({transform: 'scale(1.5)'}),
                style({transform: 'scale(1)'})
            ]))
        ])
    ]),
    trigger('collapseCard',[
        state('void', style({
            minHeight: '0',
            height: '0'
        })),
        transition('* => void', animate('300ms ease-in'))
    ])
]