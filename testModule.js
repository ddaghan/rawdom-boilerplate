import {main,ul,li,a,h1,button} from './node_modules/rawdom/jsdist/rawdom.js';

document.body.appendChild(
    main(
        ul(
            li(
                a(
                    {
                        href: 'https://xkcd.com',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                    },
                    'xkcd comics'
                )
            ),
            li(
                a(
                    {
                        href: 'http://phdcomics.com/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                    },
                    'phd comics'
                )
            )
        ),
        h1('Click above links for humor'),
        button(
            {
                onclick: () => {alert('BUTTON CLICKED')}
            },
            'click here to alert'
        )
    )
)