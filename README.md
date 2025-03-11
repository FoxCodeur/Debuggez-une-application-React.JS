# 724 Events

## Description
L'application est le site d'une agence evenementielle.
## Pre-requis
- NodeJS  >= v16.14.1

## Installation
- `yarn install`

## Lancement de l'application
- `yarn start`

## Tests
- `yarn test`

Le Cahier des charges scénarios BDD
### **Scénario 1 : Liens internes non fonctionnels**

**Given** En cliquant sur l’un des liens de la navbar

**When** Lorsque je clique sur l’un des trois liens

**Then** Je ne suis pas redirigé vers la section correspondante

---

### **Scénario 2 : Présence d’une image blanche dans le carrousel**

**Given** En consultant le carrousel des événements

**When** Les images des événements s’affichent

**Then** Une images apparaît en blanc au lieu d'afficher correctement les visuels des événements

---

### **Scénario 3 : Affichage des événements dans le carrousel**

**Given** En consultant le carrousel des événements

**When** Les images des événements s’affichent

**Then** Ils sont affichés dans un ordre aléatoire au lieu d’être triés par date en ordre décroissant

---

### **Scénario 4 : Filtrage de la section "Nos réalisations"**

**Given** En consultant la section "Nos réalisations"

**When** Je sélectionne un mois dans le filtre

**Then** Toutes les réalisations restent affichées au lieu de ne montrer que celles du mois sélectionné

---

### **Scénario 5 : Affichage incorrect des réalisations après sélection d’un mois**

**Given** En consultant la section "Nos réalisations"

**When** Je sélectionne un mois dans le filtre

**Then** Les réalisations affichées ne correspondent pas au mois sélectionné

---

### **Scénario 6 : Certains mois restent vides après sélection**

**Given** En consultant la section "Nos réalisations"

**When** Je sélectionne un mois dans le filtre

**Then** Certaines sélections de mois affichent un résultat vide, bien qu'il y ait des réalisations correspondantes pour ce mois

---

### **Scénario 7 : Affichage du message de confirmation après envoi du formulaire**

**Given** En remplissant et en soumettant le formulaire

**When** Le formulaire est envoyé

**Then** Aucun message de confirmation ne s’affiche à l’écran

---

### **Scénario 8 : Affichage incorrect de l'image dans la vignette de la dernière prestation**

**Given** En consultant la vignette de la dernière prestation sur la page

**When** la vignette apparaît

**Then** L'image de la prestation ne s'affiche pas, alors qu'elle devrait être visible pour la prestation concernée