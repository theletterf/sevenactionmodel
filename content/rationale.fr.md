---
title: "Introduction"
description: "Pourquoi le modèle de documentation à sept actions existe."
scope: "introduction"
---

Je pense que tous les rédacteurs techniques ressentent, à un moment ou un autre, le besoin de fonder leur travail sur quelque chose de plus systématique que « c’est ainsi que les gens documentent depuis toujours ». Les boîtes à outils et les cadres fournissent des types de contenu, ce qui a une immense valeur quand on *sait* ce que l’on veut écrire ; mais partir de là revient à acheter un marteau sans savoir que la moitié du travail consistera à tourner des vis.

## Les cadres, outils et formats de documentation ne suffisent pas

La plupart des cadres de documentation existants se concentrent sur les actions des rédacteurs techniques au lieu de s’intéresser à l’action des utilisateurs, c’est-à-dire des *consommateurs* de documentation. L’accent prescriptif mis sur les documents qui doivent être produits, plutôt que sur les besoins des utilisateurs auxquels il faut répondre, rappelle une vision architecturale où l’on construit des murs parce qu’*évidemment, une maison doit avoir des pièces, que sommes-nous, des barbares* ? Cette apparente absence de souplesse décourage la rédaction du contenu nécessaire.

Certains concepteurs de cadres de documentation connaissent ce problème et ont suggéré que leurs règles ne devaient pas être suivies à la lettre, et qu’il reste de la place pour de la souplesse dans leur application au monde réel. Les rédacteurs qui utilisent ces cadres ont eux aussi rencontré ce dilemme et, dans la plupart des cas, ont fini par adapter les modèles à leurs contextes. Les cadres deviennent alors des boîtes à outils où l’on sélectionne modèles et idées. Ce schéma élude pourtant la question de ce qui est nécessaire.

Face à la complexité de documenter des produits qui évoluent vite, avec peu de ressources et de soutien, les rédacteurs prennent tout ce qu’ils peuvent et en tirent un processus fonctionnel. À l’inverse, les ingénieurs qui s’essaient à la documentation et se sentent perdus en découvrant le domaine sont attirés par les cadres de documentation, car les cadres sont tout ce qu’ils ont l’habitude d’utiliser lorsqu’il s’agit de programmer. La documentation qu’ils développent finit par être une version cargo cult d’une documentation efficace.

## Déplacer l’attention des types de contenu vers les besoins des utilisateurs

Une solution à cette situation consiste à déplacer l’attention de ce qui devrait être écrit vers les besoins des utilisateurs auxquels il faudrait répondre. Cela implique de prendre en charge le versant stratégique de la documentation — au sens de la stratégie de contenu — au lieu de produire du contenu selon des motifs structurels prédéfinis. Une telle démarche est pleinement compatible avec des cadres comme Diátaxis, DITA et d’autres : elle donne une direction et une finalité à ceux qui construisent la documentation, qui utiliseront alors les types de contenu, éléments et outils à leur disposition.

On peut mieux comprendre comment, selon moi, cadres, outils et modèles des besoins utilisateurs s’articulent à l’aide d’une métaphore du sandwich, surtout si vous n’avez pas encore déjeuné : les cadres et outils de documentation sont les ingrédients essentiels qui tiennent le sandwich et permettent de le manipuler, mais ce qui lui donne toute sa saveur et son sens est la garniture, c’est-à-dire le modèle mental des besoins utilisateurs que vous suivez. Ce n’est *pas* la même chose que les demandes externes des parties prenantes, même si elles peuvent se recouper. À la rigueur, les OKR sont la sauce.

![Le sandwich de la documentation : cadres et types de contenu en haut, besoins des utilisateurs au centre, formats et chaînes d’outils en bas.](https://passo.uno/uploads/sandwich-2.jpg)

Autrement dit, pour bâtir une documentation efficace, il ne suffit pas d’avoir des outils et des types de contenu : il faut aussi un modèle des besoins que la documentation doit satisfaire en tant que produit, ou des actions que les utilisateurs doivent pouvoir accomplir grâce à elle. Ce modèle devrait être relativement indépendant du type de produit logiciel documenté, de la même manière que les modèles conceptuels de conception de produit et de satisfaction font abstraction des particularités. Viser un modèle général est nécessaire, car cela aide les professionnels à apprendre et à communiquer ensemble.

Ce qui suit est mon propre modèle *descriptif* des besoins utilisateurs en matière de documentation, celui que j’utilise aujourd’hui pour construire et organiser une documentation.

## Le modèle de documentation à sept actions

L’approche que je propose est un modèle des *actions des utilisateurs que la documentation est censée satisfaire*. Le modèle vise à relier la recherche UX et les cadres de documentation par une couche conceptuelle et fonctionnelle centrée sur deux aspects : la documentation comme produit et ce que les utilisateurs doivent accomplir grâce à elle. C’est une tentative de décrire ce que la documentation technique *devrait* *faire*. Elle traite la documentation comme un produit que quelqu’un utilisera pour atteindre de vrais objectifs.

Comme je l’ai dit, le cœur du modèle est constitué d’*actions*. J’en ai identifié sept qui, je pense, couvrent une part raisonnable des objectifs qu’un consommateur de documentation peut vouloir atteindre en l’utilisant. Elles représentent des schémas fréquents dans la manière dont les utilisateurs interagissent avec la documentation, quels que soient les produits et domaines : Évaluer (Distinguer), Comprendre (Apprendre), Explorer (Découvrir), Pratiquer (S’entraîner), Se souvenir (Rappeler), Développer (Intégrer) et Dépanner (Résoudre).

Remarquez que l’ordre des actions est intentionnel, mais pas rigide : je les ai disposées dans une séquence qui ressemble plus ou moins à l’approche que, selon moi, les consommateurs adoptent vis-à-vis de la documentation technique sur les logiciels. Je vois ces actions se produire à différentes étapes ou à différents niveaux. Lorsqu’elles sont disposées sur un heptagone régulier, celles du haut tendent à survenir au début de l’interaction avec le produit, tandis que celles du bas interviennent lorsque la connaissance et l’usage du produit se sont consolidés.

## Conclusion

Le modèle que je présente ici offre une façon de penser la documentation à travers le prisme des besoins utilisateurs plutôt que des types de contenu. Il n’a pas vocation à remplacer les cadres existants, mais à les compléter. Utilisés ensemble, ils permettent aux rédacteurs techniques de créer une documentation à la fois structurellement solide et porteuse de véritables finalités, plutôt que de simplement remplir des modèles.

Le modèle peut également servir de fondement aux [métriques de documentation et à la définition d’objectifs](https://passo.uno/docs-observability-do11y/) (do11y). Plutôt que de se concentrer uniquement sur les pages vues ou les scores de satisfaction, les équipes peuvent suivre dans quelle mesure leur documentation sert chaque action. Par exemple, les taux de conversion de la documentation vers l’adoption du produit pourraient mesurer l’efficacité de l’évaluation, tandis que les métriques de délai de résolution pourraient indiquer la réussite du dépannage.

Comme c’est le cas pour les modèles théoriques, celui-ci n’est pas étayé par une recherche approfondie ni par une analyse factorielle. Le modèle est distribué TEL QUEL, et vous ne pourrez en aucun cas me tenir responsable d’avoir gâché votre déjeuner. J’espère néanmoins qu’il offrira une perspective utile aux rédacteurs techniques désireux de créer une documentation plus intentionnelle.

![Une scène de bibliothèque en pixel art avec Indiana Jones et les sept actions de documentation.](https://passo.uno/uploads/indy.jpg)
