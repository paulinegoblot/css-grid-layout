# CSS Grid layout pour créer des gabarits modernes facilement
[//]: # (# CSS Grid layout pour ~~les nuls~~ tout le monde)

## A quoi sert cette démo ?
Le but est d'utiliser CSS Grid Layout pour refaire des gabarits de page que l'on peut rencontrer fréquemment sur internet.

Les gabarits utilisés:
- un site marchand
- un tableau de bord

## Comment utiliser cette démo ?
pour lancer la démo, il faut installer les dépendances via

`npm install`

et lancer le story book via

`npm run storybook`

## comment est construite la démo ?
Pour s'abstraire un maximum d'un quelconque framework, 
tous les éléments de  la démo sont développés en utilisant [LitElement](https://lit-element.polymer-project.org/).

La démo est contenu dans un [Storybook](https://storybook.js.org/),
de cette façon les composants et les gabarits peuvent être visualisés, testés et améliorés dans un environnement contrôlé & isolé.

Ce Stroybook contient:
- les composants bas niveau de type `<cc-button>`, `<cc-loader>`, ...
- les composants plus haut niveau
- les gabarits
- la démo étape par étape de création des gabarits

## lancer les slides associées à la démo
TODO : use reveal for the slides

## Resources
- Le gabarit de tableau de bord, ainsi que le look des différents composants, 
est largement inspiré des composants développés et utilisés par [Clever Cloud](https://github.com/CleverCloud/clever-components)
- Un [cheatSheet](https://www.alsacreations.com/outils/lire/1763-grid-layout-cheat-sheet-pense-bete.html) des éléments importants/usuels de CSS Grid Layout
- Un [site](https://cssgridgarden.com/#fr) pour apprendre / pratiquer le CSS Grid layout de façon guidée & ludique
- Un [cheatsheet](https://devhints.io/css-grid)  détaillé sur la syntaxe de CSS Grid Layout Module


