# Idées de Design — Portfolio Samuel Cariélus

## Concept retenu : "The Code Terminal" — Cyberpunk Hacker OS

---

<response>
<probability>0.07</probability>
<text>

### Concept A : "SAMUEL_OS" — Interface Terminal Cyberpunk

**Design Movement** : Cyberpunk Neo-Noir + Terminal Aesthetic
**Core Principles** :
1. Tout le contenu s'affiche comme s'il était "chargé" par un système d'exploitation fictif
2. Typographie monospace omniprésente, données affichées comme des logs système
3. Animations de scan, glitch, et chargement pour chaque transition
4. Contraste extrême : fond noir absolu, accents cyan/violet néon

**Color Philosophy** :
- `#0a0a0f` — Noir profond (fond principal)
- `#00f5ff` — Cyan électrique (accent principal, curseur, highlights)
- `#7b2fff` — Violet néon (accent secondaire, gradients)
- `#e0e0e0` — Blanc cassé (texte principal)
- `#1a1a2e` — Bleu nuit (cards, surfaces)
- Intention émotionnelle : puissance, mystère, innovation technologique

**Layout Paradigm** :
- Asymétrique : sidebar gauche fixe avec navigation terminal
- Zone principale scrollable avec sections "chargées" à la demande
- Pas de grille centrée classique — layout en L avec terminal sidebar
- Chaque section s'ouvre comme un "fichier" dans un OS

**Signature Elements** :
1. Curseur clignotant animé `█` dans tous les titres et prompts
2. Lignes de code tombantes en arrière-plan (style Matrix, couleur cyan)
3. Bordures avec effet "scan line" — lignes horizontales subtiles sur tout le fond

**Interaction Philosophy** :
- Chaque clic déclenche une animation de "chargement système"
- Hover sur les éléments = effet glitch subtil
- Navigation par commandes cliquables style `> about_me`, `> skills`, etc.

**Animation** :
- Boot sequence à l'ouverture : ASCII art + texte qui se tape lettre par lettre
- Barres de compétences qui se "scannent" au scroll
- Transitions entre sections : effet de "wipe" horizontal
- Particules de code en background continu

**Typography System** :
- Display : `JetBrains Mono` (monospace, pour tout le terminal)
- Body : `Space Grotesk` (pour les sections "humaines")
- Hiérarchie : taille + couleur cyan pour les titres, blanc pour le corps

</text>
</response>

<response>
<probability>0.06</probability>
<text>

### Concept B : "Signal Analogique" — Rétro-Futurisme VHS

**Design Movement** : Vaporwave + Rétro-Computing 80s
**Core Principles** :
1. Esthétique cassette VHS avec glitch et scanlines
2. Couleurs néon sur fond sombre, inspirées des moniteurs CRT
3. Typographie condensée et bold, titres en majuscules
4. Effets de distorsion et de bruit analogique

**Color Philosophy** :
- `#1a0533` — Violet très sombre (fond)
- `#ff2d78` — Rose néon (accent principal)
- `#00ffcc` — Turquoise (accent secondaire)
- `#ffdd00` — Jaune électrique (highlights)
- Intention : nostalgie futuriste, créativité débridée

**Layout Paradigm** :
- Colonnes décalées, éléments qui "débordent" de leur conteneur
- Sections avec angles obliques (clip-path)
- Texte qui se superpose aux images avec opacité

**Signature Elements** :
1. Lignes de scan CRT sur tout le site
2. Texte avec effet "chromatic aberration" (décalage RGB)
3. Frames VHS avec timecode dans les coins

**Interaction Philosophy** :
- Hover = distorsion VHS temporaire
- Scroll = effet de "rebobinage"

**Animation** :
- Intro style "lecture VHS" avec bruit et distorsion
- Transitions avec effet de "coupure de signal"

**Typography System** :
- Display : `Bebas Neue` (condensé, bold)
- Body : `IBM Plex Mono`

</text>
</response>

<response>
<probability>0.05</probability>
<text>

### Concept C : "Blueprint" — Architecture Technique Minimaliste

**Design Movement** : Technical Drawing + Swiss Modernism
**Core Principles** :
1. Esthétique de plan d'architecte — lignes fines, grille visible
2. Palette limitée à 2-3 couleurs maximum
3. Typographie ultra-précise, alignements au pixel
4. Contenu structuré comme une documentation technique

**Color Philosophy** :
- `#f0f4f8` — Blanc bleuté (fond papier calque)
- `#1a3a5c` — Bleu marine (texte et lignes)
- `#e63946` — Rouge technique (accent, annotations)
- Intention : précision, professionnalisme, expertise technique

**Layout Paradigm** :
- Grille de blueprint visible en arrière-plan
- Annotations et dimensions affichées comme sur un plan
- Sections délimitées par des lignes fines

**Signature Elements** :
1. Grille de points en fond (style papier millimétré)
2. Annotations techniques avec flèches et labels
3. Tampons et cachets style "APPROVED" / "CERTIFIED"

**Interaction Philosophy** :
- Hover = mise en évidence des "composants" du plan
- Scroll = défilement du blueprint

**Animation** :
- Lignes qui se tracent progressivement au chargement
- Annotations qui apparaissent avec un effet de dessin

**Typography System** :
- Display : `Rajdhani` (technique, condensé)
- Body : `Source Code Pro`

</text>
</response>

---

## Concept CHOISI : Concept A — "SAMUEL_OS" Terminal Cyberpunk

### Décision de design
Le Concept A est retenu car il reflète parfaitement le profil de Samuel :
- Développeur web passionné de tech et d'IA
- Personnalité créative et motivée par les défis
- Stack technique moderne (React, Node.js, Python)
- Passionné de musique et de composition (easter egg audio)

### Palette finale
```
Background:    #0a0a0f (noir profond)
Surface:       #0d1117 (cartes/panels)
Cyan accent:   #00f5ff (principal)
Purple accent: #7b2fff (secondaire)
Text primary:  #e2e8f0 (blanc cassé)
Text muted:    #64748b (gris)
Green success: #00ff88 (statuts)
```

### Fonts
- JetBrains Mono — terminal, code, navigation
- Space Grotesk — sections descriptives, bio

### Sections
1. BOOT — Animation d'intro ASCII + machine à écrire
2. ABOUT — Bio avec effet terminal
3. SKILLS — Barres de progression animées
4. EXPERIENCE — Timeline interactive
5. PROJECTS — Cards avec hover néon
6. CONTACT — Formulaire terminal
