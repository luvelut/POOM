# POOM

![badge](made-with-react-native.svg)

Poom est une application pédagogique d'apprentissage du tri sélectif dédiée aux élèves de cycle 2 (CP-CE1 et CE2).

## Présentation

Notre application va être mise à disposition dans les classes sur une tablette. Les élèves et l'enseignant pourront accéder à différentes fonctionnalités, le but étant d'acquérir les bonnes pratiques du tri des déchets et comprendre les enjeux du développement durable tout au long de l'année scolaire.

## Fonctionnalités

:camera: __Le scan d'un déchet :__

La fonctionnalité principale de notre application est la partie scan d’un produit. Une fois que l'enfant a scanné le code barre du produit, il va pouvoir obtenir des renseignements sur son conditionnement et l’application va lui indiquer dans quelle poubelle il doit le mettre.

:earth_americas: __Dashboard (« Mes déchets ») :__

Dans cette partie de l’application, l’utilisateur va pouvoir voir son historique de déchets scannés ainsi que diverses informations sur la réduction de son empreinte écologique ( comme par exemple la donnée de combien de déchets ont été recyclés ) 

:video_game: __Jeux :__

Un petit jeu pédagogique dans lequel le joueur (un élève entre 6 et 8 ans) va devoir choisir dans quel poubelle il doit mettre le déchet que l’on lui montre. *Cette partie ne sera pas développée pour le projet final*


:books: __Ressources pédagogiques (« Cours ») :__

Plus longue à concevoir qu’à développer, le contenu de cette partie est encore en cours de création par nos camarades. Idéalement, il s’agirait de supports pédagogiques pour venir aider l’enseignant à intégrer des ateliers sur le tri sélectif.


## Technologies utilisées
### L’API Open Food Fact 

```bash
https://world.openfoodfacts.org/api/v0/product/[barcode].json
```

Nous utilisons cette API pour récupérer les informations d’un produit après l’avoir scanné via son code barre. Dans la fonction `getProductData`, nous récupérons le nom du produit ainsi que les matériaux qui le compose. Ces informations sont ensuite enregistrés en base de données

Nous utilisons `axios` pour pouvoir faire nos requêtes de cette manière :

```bash 
const DATA = await axios.get('https://world.openfoodfacts.org/api/v0/product/'+number+'.json');
```
*number est le numéro du code barre du produit*

### Firebase 
Firebase fournit un ensemble de solutions et de services compatible avec les applications.
Nous utilisons `Firebase Authentication` pour la gestion des utilisateurs (connexion et inscription), ainsi que `Firestore` qui nous permet de stocker les produits scannés dans une base de donnée.

### Plugins implémentés
* L'accès à la caméra et le scanner du code barre.
* La vibration du téléphone quand un nouveau résultat est trouvé.

*La gestion du thème sombre a également été réalisée.*

### Lien
Notre application est disponible en scannant le QR code de la page du projet :

https://expo.dev/@luvelut/poom

## Auteurs

Anthony DEVOIZE & Lucile VELUT
