# Gulp Boilerplate

### Dependencias

| Dependencias Obrigatórias | uso |
| ------ | ------ |
| Gulp | Instalar Gulp |
| gulp-sass | Sass para gulp escrito em C |
| gulp-uglify | Minify JavaScript with UglifyJS2 |
| gulp-sourcemaps | Library para os erros de css darem na mesma linha e ficheiro que o SCSS |
| gulp-autoprefixer | Ajuda nos prefixes para todos os browsers |
| gulp-imagemin | Images optimizer|
| browser-sync | Live reload |

| Dependencias uteis | uso |
| ------ | ------ |
| eslint-config-airbnb | eslint com estilo do airbnb |
| eslint-plugin-import | Dependencias para usar es6 |
| eslint-plugin-jsx-a11y | Dependencias para usar es6 |
| eslint-plugin-react | Dependencias para usar es6 |


### Pastas

| Nome | uso |
| ------ | ------ |
| src/ | Ficheiros editaveis |
| dist/ | ficheiros gerados |


### Esquema de pastas SCSS

| Nome | uso |
| ------ | ------ |
| styles.scss | ficheiro a ser gerado que importa todos os outros ficheiros |
| base/ | estilos & css resets|
| config/ | ficheiro de configuração |
| mixins/ | mixins & functions |
| modules/ | elementos reusaveis que não estão ligados a nenhuma página em particular |
| pages/ | estilos especificos de uma página ou secção |
| structure/ | elementos estruturais (eg: main header & footer) |
| vendor/ | tudo o que são estilos de terceiros |  |

### Esquema de ficheiros do SCSS

| Pasta | Ficheiro | uso |
| ------ | ------ | ------ |
| base | _helper_classes | helper classes como clearfix, alignment|
| base | _reset | css resets |
| base | _typography | tudo o que tenha a ver com fontes |
| config | _config | variaveis de configuração |
| mixins | _mixins_general | funções e mixins  |
| mixins | _mixins_breakpoints | responsividade da página |
| mixins | _mixins_grid | mixins de ajuda para varias grids |
| modules | _grids | ficheiro que vai usar a _mixins_grid e _mixins_breakpoints para gerar uma grid responsiva |
| page | _nome_da_secção | cada página ou secção terá o seu ficheiro |
| structure | _header | header das páginas |
| structure | _footer | footer das páginas |


### To Run

```sh
$ npm install
$ gulp watch
```