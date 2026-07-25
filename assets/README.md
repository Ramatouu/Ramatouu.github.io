# Où mettre tes exports Figma

Dépose ici tes images exportées, avec **exactement ces noms de fichier** (le HTML les appelle déjà) :

| Fichier attendu                  | Projet                          |
|-----------------------------------|----------------------------------|
| `afrilinko.png`                  | Afrilinko                        |
| `odk-mission.png`                | Gestion de missions — ODK        |
| `parrainage-scolaire.png`        | Parrainage Scolaire              |
| `cgtech.png`                     | Stratégie de contenu — CGTech    |
| `anka-draka.png`                 | Anka-Draka                       |
| `sante-maternelle.png`           | Santé maternelle et infantile    |
| `ecommerce-wordpress.png`        | Boutique en ligne WordPress      |

Tant qu'un fichier n'existe pas, la carte affiche un motif tissé avec "Capture à venir" — rien ne casse.

## Exporter depuis Figma (image statique — recommandé pour la plupart des projets)

1. Sélectionne le frame ou la maquette à exporter (clique dessus dans le canvas).
2. Dans le panneau de droite, tout en bas : section **Export**, clique sur **+**.
3. Choisis le format **PNG**, résolution **2x** (netteté sur écrans Retina).
4. Clique **Export [nom du frame]**, renomme le fichier téléchargé selon le tableau ci-dessus, dépose-le dans ce dossier `assets/`.
5. Idéalement en format paysage ou carré (ratio ~4:3) pour bien remplir la vignette — recadre si besoin avant export.

## Alternative : embed Figma interactif (pour 1 ou 2 projets phares seulement)

Plus lourd à charger, donc à réserver à ton meilleur projet (ex. Afrilinko).

1. Dans Figma, clique **Share** en haut à droite.
2. Vérifie que le fichier est en accès "Anyone with the link can view".
3. Copie le lien de partage (ou utilise **Copy link to selection** sur un frame précis).
4. Dans `index.html`, remplace le bloc `<div class="card-thumb">...</div>` de ce projet par :
   ```html
   <div class="card-thumb card-thumb-embed">
     <iframe
       src="https://www.figma.com/embed?embed_host=share&url=COLLE_TON_LIEN_FIGMA_ICI"
       allowfullscreen
       loading="lazy">
     </iframe>
   </div>
   ```
5. Ajoute dans `style.css` :
   ```css
   .card-thumb-embed iframe{ width:100%; height:100%; border:0; }
   ```
