# gulp-styles

Tâche gulp pour compiler les styles Sass.

## Installation

```
npm install --save-dev wandi-gulp-styles
```

## Utilisation

Paramètres par défaut :

```js
// gulpfile.babel.js

import styles from 'wandi-gulp-styles'

const compile = styles()

export {
    compile
}
```

Paramètres custom (voir ci-dessous pour la liste complète des paramètres) :

```js
// gulpfile.babel.js

import styles from gulp-styles

const compile = styles({
    src: 'path/to/scss/global.scss',
    dest: 'path/to/dest'
})

export {
    compile
}
```

## Paramètres

### src

Voir [le paramètre `globs` de `gulp.src`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#globs).

Valeur par défaut : `'assets/scss/*.scss'`

### dest

Voir [le paramètre `path` de `gulp.dest`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#path).

Valeur par défaut : `'web/css'`

### autoprefixerOptions

Un objet de configuration passé à [Autoprefixer](https://github.com/postcss/autoprefixer).
Voir les [options d'Autoprefixer](https://github.com/postcss/autoprefixer#options).

Valeur par défaut :

```js
{
    browsers: [
        'last 2 versions',
        'Firefox ESR',
        'IE >= 9',
        'BlackBerry >= 7',
        'Android >= 2'
    ],
    cascade: false,
    remove: false
}
```

### pxToRemOptions

Un objet de configuration passé à [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem).
Voir les [options de postcss-pxtorem](https://github.com/cuth/postcss-pxtorem#options).

Valeur par défaut :

```js
{
    root_value: 16
}
```

### cssnanoOptions

Un objet de configuration passé à [cssnano](https://github.com/ben-eb/cssnano).
Voir les [optimisations de cssnano](http://cssnano.co/optimisations/).

Valeur par défaut :

```js
{
    autoprefixer: false,
    discardUnused: false,
    discardComments: { removeAll: true },
    zindex: false,
    reduceIdents: false,
    mergeIdents: false
}
```

### sassOptions

Un objet de configuration passé à [node-sass](https://github.com/sass/node-sass).
Voir les [options de node-sass](https://github.com/sass/node-sass#options).

Valeur par défaut :
```js
{
    outputStyle: "nested"
}
```

### production

Booléen. Valeur par défaut : `false`

Ce paramètre indique à la tâche si elle doit appliquer tous les traitements
nécessaires à optimiser le CSS en sortie. Ces traitements sont les suivants :

* Pas de génération de sourcemaps
* [Optimisations de cssnano](http://cssnano.co/optimisations/) qui ne sont pas
explicitement désactivées (voir la configuration par défaut de cssnano, ou votre
configuration)

### lint

Booléen. Valeur par défaut : `true`

Active le linting à l'aide de [StyleLint](http://stylelint.io/). Lorsque le
linting est activé, vous devez avoir un fichier de configuration StyleLint à la
racine du projet. Le plus simple est d'extend
[stylelint-config-wandi](https://github.com/WandiParis/stylelint-config-wandi).

Le linting arrête l'exécution de la tâche lorsqu'une erreur est levée. Si un
avertissement est soulevé, celui-ci s'affiche uniquement en console, sans
arrêter l'exécution de la tâche.