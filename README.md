# rawdom-boilerplate

boilerplate for rawdom with rollup rollup-plugin-node-resolve and rollup-commonjs

Please see
- test.html - rollup/webpack packaging use
- testModule.html - importing from node_modules es6 style
- testUnpkg.html - importing from a cdn (e.g. unpkg)

## Node modules used:
- rollup
- rollup-plugin-commonjs
- rollup-plugin-node-resolve

## src/testrawdom.js:

```javascript
import {main,ul,li,a,h1,button} from 'rawdom';

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
```

Above file outputs to ./testrawdom.js which is referenced in test.html which
you can browse to see it in action.

## build

node_modules/.bin/rollup -c

# License

MIT
