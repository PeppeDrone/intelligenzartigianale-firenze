# Intelligenza Artigianale

Sito statico di Intelligenza Artigianale (Firenze), per GitHub Pages.

Il dominio è **intelligenzartigianale-firenze.it**. I riferimenti nel sito (`index.html`, `privacy.html`, `sitemap.xml`, `robots.txt`) e il file `CNAME` puntano a `https://intelligenzartigianale-firenze.it/`.

## GitHub Pages

Il sito va servito dalla root del branch `main`. Finché il dominio non è completamente propagato, l’indirizzo temporaneo è `https://peppedrone.github.io/intelligenzartigianale-firenze/`.

## DNS (Aruba)

Record già impostati:

- quattro record **A** per l’apex `@` (intelligenzartigianale-firenze.it):

  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

- un record **CNAME** per `www` che punta a `peppedrone.github.io`.

La zona `.it` può impiegare fino a 24–48 ore a risolversi. “Enforce HTTPS” su GitHub Pages si attiva quando GitHub ha emesso il certificato, dopo che il DNS risponde.

La cartella `raw/` e le anteprime locali (`p_*.png`, `preview_*.png`) non fanno parte del sito pubblicato.
