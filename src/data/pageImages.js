/**
 * Image paths using the standard public/images folder structure
 */
const imageExt = /\.(jpg|jpeg|png|webp)$/i
const isImage = (name) => imageExt.test(name) && !name.includes('_slug_')

export const pageImageFolders = {
  home: 'images/home',
  service: 'images/service',
  blog: 'images/blog',
  contact: 'images/contact',
}

export const productImageFolders = {}
for (let i = 1; i <= 15; i++) {
  productImageFolders[i] = `images/products/${i}`
}

// Images per page (only image files; exclude duplicates with (1) if you want a single set)
export const homeImages = ['generated-m7VwQ5GMgyc3b7gp.png', 'hqdefault.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage)
export const serviceImages = ['chemcal-image-AE0owLrP0ki4vx7g.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage)
export const blogImages = ['smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage)
export const contactImages = ['smartgen-contact-AQED0XvaVZtpJvqE.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage)

export const productImages = {
  1: ['fiber-glass-acoustic-insulation-AGB6g4VEDBCZLbPW.jpg', 'kimmco-fiber-glass-duct-insulation-mePvDg6KwvHeM7OD.jpeg', 'rockwool-pipe-insulation-AzGeJBG2EqCk72pv.png', 'xlpe-thermal-insulation-sheet-AwvMKkaryku2Rz0D.jpg', 'rubber-insulation-A0xwXVeyG2c1EkMO.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  2: ['duct-flange-YbNv0vzpzxHQ1624.jpg', 'duct-corner-YlevKvg07JC4jNrN.jpg', 'aluminum-cladding-pabco-A3QwLjW6ELso6y9G.jpg', 'flexible-insulated-duct-mk3zKzJWNxSpDB3r.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  3: ['duct-mount-mp8vjwyx7PIbQbKo.jpg', 'metal-sandwich-pad-mp8vjwyxXkhor75j.jpg', 'round-rubber-mount-for-split-ac-unit-mxBZ6o3B88u85988.jpg', 'sandwich-pad-mePvDwz8wXTKkk8j.jpg', 'waffle-pad-Yanylg54q2I3g64D.jpg', 'vibratek-india-logo-AMqbB9gxKlC3zROA.png', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  4: ['beam-clamp-tembo-AVLpvogpy1FpNlpL.png', 'clevis-hanger-tembo-ulfm-YKb6eng6OZTa7OnM.jpg', 'pipe-roller-chair-tembo-AMqbB6gbK9S48Rjr.png', 'riser-clamp-tembo-AGB6DEg6wNiJELzb.png', 'u-bolt-tembo-YX4yqo32zwSwK8O1.png', 'plain-hanger-dJo633xLrrt9lE4g.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  5: ['copper-fittings-Yyv38P3V3JTNp7ED.jpg', 'rime-copper-pancake-coil-riyadh-AoPv96eP6yiBeDL8.jpg', 'rime-copper-straight-length-dJo6RBZDpxHMnNB3.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  6: ['sdv-vav-YZ9xgllrNVuPxlXJ.jpeg', 'single-duct-terminal-unit-2-smartgen-sdv-AE0agOO65KUlM9Le.jpg', 'e.h.price-gulf-2-smartgen-m5KLQee3elFW8LB0.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  7: ['trion-air-ecology-smartgen-YrDqGzl60yszxEOL.jpg', 'trion-esp-smartgen-AzG3Kke8z4uDjoxz.jpeg', 'trion_logo_-without-__full-color-rgb_mar_2020_png-m7V5XB3g73seN57M.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  8: ['identification-labels-A3QwkEv1gvcEQZ3P.jpg', 'identification-label-mechnical-smartgentrading-AMqboXyr9ycJrwVD.jpg', 'pipe-marking-identification-tapes-and-labels-mjEvVLpkejU3wq0n.jpg', 'brass-valve-tags-mp8vVXR2kXi8loa3.png', 'plastic-valve-tags-A85w06Ov6DCyXonj.jpg', 'electrical_identification-YlevVLPqa1I31yDa.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  9: ['silent-pipe-vesbo-exclusive-AoPWpOD52aibvb7x.jpg', 'soundproof-pipe-vesbo-d951wbM0QeI4NlGZ.jpeg', 'incola-exclusive-mk3vpe5Rpgsql0V4.png', 'vesbo-silent-pipe-logo-ALpexa8kyoCe5Djp.png', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  10: ['decoduct-conduit-fittings-AzG3L2gONgcngNJN.png', 'pvc-electrical-conduits-5-YKbEjRWMZ4S8x0oz.jpg', 'edison-switches-AoPq29oJOVU07oOx.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  11: ['araib-ppr-pipes-m7V5y4GXO8tML5np.jpg', 'araib-pvc-pipes-AwvDQWaQVJi98RMk.png', 'cpvc-fittings-smartgen-A85EaK05k6U5zJQV.jpg', 'ppr-fittings-smartgen-AVL1nkgwJpfrr4V8.jpg', 'araib-cement-Aq2ql7PJl5SP46wG.webp', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  12: ['xchem-ultrashield-ac10-mv0DnBWDeVUVL3Q0.jpg', 'xchem-ultrashield-hy-17-hybrid-pud-coating-YrDlEZbOaNcLNN05.jpg', 'xchem-v-bond-400-vinyl-flooring-adhesive-dJo63L1G9nH7y1vR.jpg', 'turf-fix-511-xchem-smartgen-AR0LQgEB1au5wyPB.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  13: ['chemcial-mp8vjjKX11CqW8pP.jpg', 'water-molecules-YbNvPPl2xjirLjjN.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  14: ['smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
  15: ['ducted-split-ac-o-general-smart-generation-AQExxjQ2DgcR8O3v.webp', 'split-ac-o-general-mePxxXO60rTpwDaL.webp', 'o-general-logo-dJoZZOEwlQtpWPb9.jpg', 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg'].filter(isImage),
}
