import { useParams, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { productImages, productImageFolders } from '../data/pageImages'

const PRODUCT_DATA = {
  1: {
    title: 'Thermal and Acoustic Insulation for Building and HVAC',
    description:
      'Discover our extensive range of thermal and acoustic insulation solutions featuring top brands like Kimmco, Afico, K Flex, and Aerofoam. From glass wool and rockwool to closed-cell rubber and XLPE foam, we provide high‑performance insulation for HVAC ducts, pipes, and building envelopes to improve energy efficiency, fire safety, and comfort in residential, commercial, and industrial projects.',
    brands: ['Kimmco', 'Afico', 'K Flex', 'Aerofoam', 'Insulflex'],
    products: [
      'Fiber Glass Roll Insulation with Aluminum Facing',
      'Fiber Glass Pipe Insulation with Aluminum Facing',
      'Fiber Glass Board / Sheet Insulation with Aluminum Facing',
      'Fiber Glass Acoustic Board / Sheet Insulation',
      'Fiber Glass Acoustic Roll Insulation',
      'Kimmco Fiber Glass Duct Insulation',
      'Rockwool Roll Insulation with Facing',
      'Rockwool Board Insulation (Unfaced & Faced)',
      'Rockwool Pipe Insulation',
      'Closed Cell Rubber Sheet / Roll Insulation (Plain)',
      'Closed Cell Rubber Sheet / Roll Insulation with Aluminum Foil',
      'Closed Cell Rubber Sheet / Roll Insulation – Self Adhesive',
      'Closed Cell Rubber Tube / Pipe Insulation',
      'XLPE Closed Cell Sheet / Roll Insulation with AluPET Facing',
      'XLPE Closed Cell Sheet / Roll Insulation – No Clad',
      'XLPE Closed Cell Tube / Pipe Insulation',
      'Insulation Accessories (Alupet Tapes, Fasteners, Pins, Adhesives)',
      'Phenolic Insulations',
    ],
    insulationTypes: [
      {
        type: 'Fiber Glass Insulation',
        description:
          'High‑performance fiberglass insulation for ducts, pipes, walls, and ceilings, providing excellent thermal and acoustic performance in building and HVAC applications.',
        icon: 'fire',
        iconClass: 'bg-orange-100 text-orange-600',
        products: [
          'Fiber Glass Roll Insulation with Aluminum Facing',
          'Fiber Glass Pipe Insulation with Aluminum Facing',
          'Fiber Glass Board / Sheet Insulation with Aluminum Facing',
          'Fiber Glass Acoustic Board / Sheet Insulation',
          'Fiber Glass Acoustic Roll Insulation',
          'Kimmco Fiber Glass Duct Insulation',
        ],
      },
      {
        type: 'Closed Cell Elastomeric Rubber Foam Insulation',
        description:
          'Flexible closed-cell elastomeric rubber insulation for chilled water and refrigerant lines, designed to control condensation and save energy.',
        icon: 'wind',
        iconClass: 'bg-green-100 text-green-600',
        products: [
          'Closed Cell Rubber Sheet / Roll Insulation (Plain)',
          'Closed Cell Rubber Sheet / Roll Insulation with Aluminum Foil',
          'Closed Cell Rubber Sheet / Roll Insulation – Self Adhesive',
          'Closed Cell Rubber Tube / Pipe Insulation',
        ],
      },
      {
        type: 'Closed Cell PolyOlefin (XLPE) Insulations',
        description:
          'Lightweight, closed-cell XLPE insulation for ducts and pipes, offering excellent thermal performance, clean finish, and moisture resistance.',
        icon: 'wind',
        iconClass: 'bg-green-100 text-green-600',
        products: [
          'XLPE Closed Cell Sheet / Roll Insulation with AluPET Facing',
          'XLPE Closed Cell Sheet / Roll Insulation – No Clad',
          'XLPE Closed Cell Tube / Pipe Insulation',
        ],
      },
      {
        type: 'Rockwool Insulations',
        description:
          'Fire‑resistant rockwool rolls, boards, and pipe sections for high‑temperature and acoustic applications in building and industrial projects.',
        icon: 'fire',
        iconClass: 'bg-orange-100 text-orange-600',
        products: [
          'Rockwool Roll Insulation with Facing',
          'Rockwool Board Insulation (Unfaced & Faced)',
          'Rockwool Pipe Insulation',
        ],
      },
      {
        type: 'Phenolic Insulations',
        description:
          'High‑performance phenolic insulation systems for ductwork and pipework where superior thermal performance and low weight are critical.',
        icon: 'volume',
        iconClass: 'bg-purple-100 text-purple-600',
        products: ['Phenolic Insulations'],
      },
    ],
    applications: 'Thermal and Acoustic insulations for Buildings, HVAC Ducts and Pipes.',
  },
  2: {
    title: 'Duct Accessories',
    description: 'Complete range of HVAC duct accessories including flanges, corners, aluminum cladding, and flexible insulated ducts. Essential components for efficient duct system installation and maintenance.',
    brands: ['Pabco', 'Aeroduct', 'Insulflex', 'Duct-Ficx', 'Xchem', 'Paragon', 'ITW', 'Smartgen'],
    products: [
      'Duct G Clamp With Bolt',
      'Duct Corner Plain',
      'Insulated Flexible Duct',
      'Aluminum Un Insulated Flexible Duct',
      'Stick Pins / Insulation Pin with Washer',
      'Jubilee Strap / SS Strap & Locking Nut',
      'Foam Tape / Duct Gasket Tape',
      'Aluminum Plain Tape',
      'Aluminum FSK Tape',
      'Yellow Strap',
      'Duct Flange',
      'Embossed Duct Corner',
      'Flexible Duct Connector',
      'Acrylic Duct Sealant',
      'Duct Canvas Coating / Lagging Adhesive',
      'Insulation Glue',
      'Aluminum Cladding Rolls',
      'Aluminum Sheet',
      'Aluminum Strapping',
      'Wing Seal',
    ],
  },
  3: {
    title: 'Vibration Isolators',
    description: 'Professional vibration isolation solutions for HVAC equipment. Includes duct mounts, metal sandwich pads, rubber mounts for split AC units, and waffle pads to reduce noise and extend equipment life.',
    brands: ['Vibratek India'],
    products: [
      'Cased Spring Mount',
      'Restraint Spring Mount',
      'Spring Hanger',
      'Single Spring Mount',
      'Rubber Mount for Split AC Outdoor Unit',
      'Multilayer Rubber pad',
      'Sandwich Rubber pad',
      'Waffle-Anti Vibration pad',
      'Duct Mount',
      'Neoprene Rubber Hanger',
    ],
    applications: 'Vibration isolators are used to reduce the transmission of vibration and noise from mechanical equipment to surrounding structures.',
  },
  4: {
    title: 'Hangers & Supports',
    description: 'Comprehensive range of pipe hangers and supports from Tembo. Includes beam clamps, clevis hangers, pipe roller chairs, riser clamps, U-bolts, and plain hangers for secure pipe installation.Hangers and supports for mechanical, plumbing and fire fighting pipes.',
    brands: ['Tembo'],
    products: [
      'Split Clamp With EPDM Lining',
      'Split Clamp',
      'Swivel/Sprinkler Hanger UL/FM',
      'Clevis Hanger UL/FM',
      'U bolt With Nuts',
      'U Bolt With EPDM Lining',
      'U Strap Clamp',
      'Rubber Support Insert',
      'Riser Clamp',
      'Riser Clamp With Lining',
      'Pipe Roller Chair with Bolts',
      'Beam Clamp',
      'Struct Clamp',
      'Slotted Channel',
      'Insulation Protection Shield',
      'Drop In Anchor',
      'Threaded Rod',
      'Nuts & Bolts',
    ],
    applications: 'Hangers and supports for mechanical, plumbing and fire fighting pipes.',
  },
  5: {
    title: 'Copper & Fittings',
    description: 'Premium Rime copper products including pancake coils, straight lengths, and comprehensive copper fittings. Ideal for HVAC and plumbing applications requiring reliable copper solutions.',
    brands: ['Rime', 'MUELLER (USA)', 'NWM (KOREA)', 'SAMPO (KOREA)'],
    products: ['Fittings', 'Coils', 'Straight Pipes'],
    applications: 'Air Conditioning and Refrigeration Systems.',
  },
  6: {
    title: 'VAV and Dampers',
    description: 'Variable Air Volume (VAV) systems and single duct terminal units from leading manufacturers. Complete solutions for precise air flow control and HVAC system optimization.',
    brands: ['E.H. Price Gulf'],
    products: ['SDV VAV', 'Single Duct Terminal Unit'],
  },
  7: {
    title: 'ESP and Ecology',
    description: 'Advanced air purification systems from Trion including Electrostatic Precipitators (ESP) and air ecology solutions. Improve indoor air quality with industrial-grade filtration systems.',
    brands: ['Trion'],
    products: ['Trion Air Ecology', 'Trion ESP'],
  },
  8: {
    title: 'Identification Labels and Tags',
    description: 'Comprehensive marking and labeling solutions for MEP systems. Includes identification labels, pipe marking tapes, brass and plastic valve tags, and electrical identification systems.',
    brands: [],
    products: ['Identification Labels', 'Pipe Marking Tapes', 'Brass Valve Tags', 'Plastic Valve Tags', 'Electrical Identification', 'Mechanical Identification Labels'],
  },
  9: {
    title: 'Silent Pipes And Fittings',
    description: 'Premium soundproof piping solutions from Vesbo. Reduce noise transmission in plumbing systems with our exclusive silent pipe technology for residential and commercial applications.',
    brands: ['Vesbo'],
    products: ['Silent Pipe Vesbo Exclusive', 'Soundproof Pipe Vesbo'],
  },
  10: {
    title: 'Decoduct Conduits and Fittings',
    description: 'Complete electrical conduit systems including Decoduct conduit fittings, PVC electrical conduits, and Edison switches. Reliable electrical infrastructure solutions for all your projects.',
    brands: ['Edison'],
    products: ['Decoduct Conduit Accessories', 'Decoduct Round Conduits', 'Edison Switches'],
  },
  11: {
    title: 'Plumbing',
    description: 'Comprehensive plumbing solutions from Araib including PPR pipes, PVC pipes, CPVC fittings, PPR fittings, and Araib cement. Complete materials for residential and commercial plumbing projects.',
    brands: ['Araib', 'JASCO BLACK STEEL SCH 40 & 80 PIPES', 'SSP ERW PIPES', 'AL JAZEERA ERW PIPES'],
    products: ['Araib PPR Pipes', 'Araib PVC Pipes', 'CPVC Fittings', 'PPR Fittings', 'Araib Cement'],
  },
  12: {
    title: 'Water Proofing Chemicals and Flooring Adhesives',
    description: 'Professional waterproofing and flooring solutions from Xchem. Includes Ultrashield coatings, V-Bond adhesives, Turf Fix, and various specialized adhesives for construction and flooring applications.',
    brands: ['Xchem'],
    products: ['Ultrashield AC10', 'Ultrashield HY-17', 'V-Bond 400', 'Turf Fix 511'],
  },
  13: {
    title: 'Water Treatment Chemicals',
    description: 'Specialized water treatment chemicals for disinfection, odor control, and water system maintenance. Professional solutions for maintaining clean and safe water systems in residential and commercial facilities.',
    brands: [],
    products: ['Chemical Flushing Solutions', 'Disinfection Chemicals', 'Water Treatment Systems'],
  },
  14: {
    title: 'Miscellaneous Products',
    description: 'Additional MEP products and accessories to support your construction and HVAC projects. Contact us for specific product inquiries and availability.',
    brands: [],
    products: ['Various MEP Accessories', 'Custom Solutions'],
  },
  15: {
    title: 'Air Conditioners',
    description: 'Premium O General air conditioning systems including ducted split AC units and split AC systems. Reliable cooling solutions for residential and commercial applications with energy-efficient technology.',
    brands: ['O General'],
    products: ['Ducted Split Air Conditioning', 'Split AC With Inverter'],
  },
}

const PLACEHOLDER_SVG = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect fill="#f3f4f6" width="400" height="400"/><text x="50%" y="50%" fill="#9ca3af" font-family="sans-serif" font-size="14" text-anchor="middle" dy=".3em">Product image</text></svg>'
)

const HIDDEN_PRODUCT_IDS = [6, 7, 11, 14]

const PRODUCT_CATEGORIES = Object.entries(PRODUCT_DATA)
  .filter(([id]) => !HIDDEN_PRODUCT_IDS.includes(Number(id)))
  .map(([id, data]) => ({ id: Number(id), title: data.title }))

const BRAND_LOGOS = {
  Kimmco: '/images/logos/kimmco.png',
  Afico: '/images/logos/AFICO.png',
  'K Flex': '/images/logos/Kflex.png',
  Aerofoam: '/images/logos/Aerofoam.png',
  Insulflex: '/images/logos/insulflex.png',
  Tembo: '/images/logos/tembo.png',
  'Vibratek India': '/images/logos/vibratek-india.png',
  // Product 2 (Duct Accessories) brands
  Pabco: '/images/logos/pabco.png',
  Aeroduct: '/images/logos/aeroduct.png',
  'Duct-Ficx': '/images/logos/ductficx.jpg',
  ITW: '/images/logos/itw.png',
  Paragon: '/images/logos/paragon.png',
  Smartgen: '/images/logos/smartgen.jpeg',
  Xchem: '/images/logos/xchem.png',
  // Product 5 (Copper & Fittings) brands
  Rime: '/images/logos/rime.png',
  'MUELLER (USA)': '/images/logos/mueller.png',
  'NWM (KOREA)': '/images/logos/nvm.png',
  'SAMPO (KOREA)': '/images/logos/sampo.png',
  // Product 9 (Silent Pipes) brands
  Vesbo: '/images/logos/vesbo.png',
  // Product 10 (Decoduct Conduits) brands
  Edison: '/images/logos/edison.png',
  // Product 15 (Air Conditioners) brands
  'O General': '/images/logos/ogeneral.jpg',
}

const INSULATION_ICONS = {
  fire: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
  volume: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z',
  wind: 'M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.242 4.243 3 3 0 004.242-4.243zm0-5.758a3 3 0 10-4.242-4.243 3 3 0 004.242 4.243z',
}

const PRODUCT_1_GALLERY_CARDS = [
  { name: 'Fiber glass Blanket Insulation', image: 'kimmco-fiber-glass-duct-insulation-mePvDg6KwvHeM7OD.jpeg' },
  { name: 'Fiber glass Acoustic Liner Insulation', image: 'fiber-glass-acoustic-insulation-AGB6g4VEDBCZLbPW.jpg' },
  { name: 'Fiber glass Rigid Board Insulation', image: 'fiber-glass-board-insulation-mePvKneEZ9tonnlP.jpg' },
  { name: 'Fiber glass Rigid Pipe Insulation', image: 'kimmco-pipe-insulation-1-YNqyaMxvPgTL1MXk.jpg' },
  { name: 'XLPE Sheet Insulation', image: 'xlpe-sheet-A85wX4Q0zNuVowwW.jpg' },
  { name: 'XLPE Pipe Insulation', image: 'xlpe-insulation-AMqbg4EnBJIaLEoe.jpg' },
  { name: 'XLPE Roll Insulation', image: 'xlpe-thermal-insulation-sheet-AwvMKkaryku2Rz0D.jpg' },
  { name: 'NBR Elastomeric Rubber Roll Insulation', image: 'rubber-insulation-A0xwXVeyG2c1EkMO.jpg' },
  { name: 'NBR Elastomeric Self Adhesive Rubber Insulation', image: 'self-adhesive-rubber-insulation-mjEvK9924oh9ZRPW.jpg' },
  { name: 'NBR Elastomeric Rubber Pipe Insulation', image: 'rubber-pipe-insulation-AVLpgbbJjzH9V9kB.jpg' },
]

const PRODUCT_3_GALLERY_CARDS = [
  { name: 'Cased Spring Mount', image: 'whatsapp-image-2024-07-29-at-3.58(1).32-pm-AMqbBZLZeNsGbBo1.jpeg' },
  { name: 'Restraint Spring Mount', image: 'whatsapp-image-2024-07-29-at-3.58(1).32-pm-1-A1awnpvp0bUoLVWw.jpeg' },
  { name: 'Spring Hanger', image: 'whatsapp-image-2024-07-29-at-3.58.32-pm-2-Yyv3WlplVJCPKnVq.jpeg' },
  { name: 'Single Spring Mount', image: 'whatsapp-image-2024-07-29-at-3.58.32-pm-3-YKb6eDOD8ETkl5Qk.jpeg' },
  { name: 'Rubber Mount for Split AC Outdoor Unit', image: 'round-rubber-mount-for-split-ac-unit-mxBZ6o3B88u85988.jpg' },
  { name: 'Multilayer Rubber pad', image: 'metal-sandwich-pad-mp8vjwyxXkhor75j.jpg' },
  { name: 'Sandwich Rubber pad', image: 'sandwich-pad-mePvDwz8wXTKkk8j.jpg' },
  { name: 'Waffle-Anti Vibration pad', image: 'waffle-pad-Yanylg54q2I3g64D.jpg' },
  { name: 'Duct Mount', image: 'duct-mount-mp8vjwyx7PIbQbKo.jpg' },
  { name: 'Neoprene Rubber Hanger', image: 'whatsapp-image-2024-07-29-at-3.58(1).32-pm-4-Aq2v5wpw1EFJgJKE.jpeg' },
]

const PRODUCT_4_GALLERY_CARDS = [
  { name: 'Split Clamp With EPDM Lining', image: 'rubber-clamps-AwvMN3VN8qIGNX8x.png' },
  { name: 'Split Clamp', image: 'plain-hanger-dJo633xLrrt9lE4g.jpg' },
  { name: 'Swivel/Sprinkler Hanger UL/FM', image: 'sprinkler-hanger-ul-fm-tembo-mxBZ66Grr1Up8vqa.png' },
  { name: 'Clevis Hanger UL/FM', image: 'clevis-hanger-tembo-ulfm-YKb6eng6OZTa7OnM.jpg' },
  { name: 'U bolt With Nuts', image: 'u-bolt-tembo-YX4yqo32zwSwK8O1.png' },
  { name: 'U Bolt With EPDM Lining', image: 'u-bolt-with-lining-tembo-A85wvvyO0ZcMxl9K.jpg' },
  { name: 'U Strap Clamp', image: 'u-strap-1-mxBZ66k0jriV42P4.jpg' },
  { name: 'Rubber Support Insert', image: 'rubber-support-inserts-mxBZ6e4Mw0up17go.png' },
  { name: 'Riser Clamp', image: 'riser-clamp-tembo-AGB6DEg6wNiJELzb.png' },
  { name: 'Riser Clamp With Lining', image: 'riser-clamp-with-lining-tembo-AVLpvogpM6hJBgQR.png' },
  { name: 'Pipe Roller Chair with Bolts', image: 'pipe-roller-chair-tembo-AMqbB6gbK9S48Rjr.png' },
  { name: 'Beam Clamp', image: 'beam-clamp-tembo-AVLpvogpy1FpNlpL.png' },
  { name: 'Struct Clamp', image: 'struct-clamp-tembo-YNqyaWgy1pspJvjO.png' },
  { name: 'Slotted Channel', image: 'clotted-channel--tembo-YbNvPPZzb8F616XK.jpg' },
  { name: 'Insulation Protection Shield', image: 'insulatipn-protection-shield-ipc-tembo-ALpn1Ngn6KiXzqko.jpg' },
  { name: 'Drop In Anchor', image: 'drop-in-anchor-tembo-YKb6eeJWonce75Be.jpg' },
  { name: 'Threaded Rod', image: 'threaded-roads-tembo-mnlvxoKvaPF8y6jZ.jpg' },
  { name: 'Nuts & Bolts', image: 'hex-nuts-bolts-and-washer-tembo-YbNvPk0vKGUzO1N2.jpg' },
]

const PRODUCT_5_GALLERY_CARDS = [
  { name: 'Fittings', image: 'copper-fittings-Yyv38P3V3JTNp7ED.jpg' },
  { name: 'Coils', image: 'rime-copper-pancake-coil-riyadh-AoPv96eP6yiBeDL8.jpg' },
  { name: 'Straight Pipes', image: 'rime-copper-straight-length-dJo6RBZDpxHMnNB3.jpg' },
]

const PRODUCT_10_GALLERY_CARDS = [
  { name: 'Decoduct Conduit Accessories', image: 'decoduct-conduit-fittings-AzG3L2gONgcngNJN.png' },
  { name: 'Decoduct Round Conduits', image: 'pvc-electrical-conduits-5-YKbEjRWMZ4S8x0oz.jpg' },
  { name: 'Edison Switches', image: 'edison-switches-AoPq29oJOVU07oOx.jpg' },
]

const PRODUCT_12_GALLERY_CARDS = [
  { name: 'Ultrashield AC10', image: 'xchem-ultrashield-ac10-mv0DnBWDeVUVL3Q0.jpg' },
  { name: 'Ultrashield HY-17', image: 'xchem-ultrashield-hy-17-hybrid-pud-coating-YrDlEZbOaNcLNN05.jpg' },
  { name: 'V-Bond 400', image: 'xchem-v-bond-400-vinyl-flooring-adhesive-dJo63L1G9nH7y1vR.jpg' },
  { name: 'Turf Fix 511', image: 'turf-fix-511-xchem-smartgen-AR0LQgEB1au5wyPB.jpg' },
]

const PRODUCT_15_GALLERY_CARDS = [
  { name: 'Ducted Split Air Conditioning', image: 'ducted-split-ac-o-general-smart-generation-AQExxjQ2DgcR8O3v.webp' },
  { name: 'Split AC With Inverter', image: 'split-ac-o-general-mePxxXO60rTpwDaL.webp' },
]

const DUCT_ACCESSORY_CARDS = [
  { name: 'Duct G Clamp With Bolt', image: 'g_clamp.png' },
  { name: 'Duct Corner Plain', image: 'duct-corner-YlevKvg07JC4jNrN.jpg' },
  { name: 'Insulated Flexible Duct', image: 'flexible-insulated-duct-mk3zKzJWNxSpDB3r.jpg' },
  { name: 'Aluminum Un Insulated Flexible Duct', image: 'un-insulated-flexible-duct-YD06X6wWN5IBVPly.jpg' },
  { name: 'Stick Pins / Insulation Pin with Washer', image: 'duct-pin-AE0ogo7EZaFogNlJ.jpeg' },
  { name: 'Jubilee Strap / SS Strap & Locking Nut', image: 'jubilee-clamp-YbNv0vL4LBiZJ67r.jpg' },
  { name: 'Foam Tape / Duct Gasket Tape', image: 'foam-tape-Yyv3K3DX0bfBqR95.png' },
  { name: 'Aluminum Plain Tape', image: 'aluminum-plain-tape-YlevKvoQRZfyqWpX.jpg' },
  { name: 'Aluminum FSK Tape', image: 'aluminum-fsk-tape-AVLpgpvGO0iNz9VO.jpg' },
  { name: 'Yellow Strap', image: 'yello-strap-AGB6g6WpBrf6VzOB.jpg' },
  { name: 'Duct Flange', image: 'duct-flange-YbNv0vzpzxHQ1624.jpg' },
  { name: 'Embossed Duct Corner', image: 'ductmate-corner-YbNv0vVwlqubpoJl.png' },
  { name: 'Flexible Duct Connector', image: 'duct-connector-m7VwXwJX6etVlLWO.jpg' },
  { name: 'Acrylic Duct Sealant', image: 'logo-chemx3217-mnlvKqBMP3HkrQNR.jpeg' },
  { name: 'Duct Canvas Coating / Lagging Adhesive', image: 'enicoat-3036-plastic-pail-mjEv1bBVlbTMQZz5.png' },
  { name: 'Insulation Glue', image: 'chemxglue-8110-metal-pail-mjEv1bBpGOc5eBGr.png' },
  { name: 'Aluminum Cladding Rolls', image: 'aluminum-cladding-pabco-A3QwLjW6ELso6y9G.jpg' },
  { name: 'Aluminum Sheet', image: 'aluminum-sheets-Yg2WZvb1oEHaBLMk.png' },
  { name: 'Aluminum Strapping', image: 'aluminum-strap-YBgrQZVoQ4Il6zeq.jpg' },
  { name: 'Wing Seal', image: 'wing-seal-YKb6ejpo8DhEzNBo.jpeg' },
]

export default function ProductPage() {
  const { id } = useParams()
  const location = useLocation()
  const num = parseInt(id, 10)
  const productData = PRODUCT_DATA[num] || {
    title: `Product ${id}`,
    description: 'Product information coming soon.',
    brands: [],
    products: [],
  }
  const folder = productImageFolders[num]
  const images = (productImages[num] || []).filter((f) => f !== 'smartgen-logo-dOqygyGy7QHB2GZQ.jpeg')

  useEffect(() => {
    const hash = location.hash?.slice(1)
    if (!hash) return
    const el = document.getElementById(hash)
    if (el) {
      const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      return () => clearTimeout(t)
    }
  }, [location.hash])

  return (
    <main className="py-10 lg:py-16 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:pl-5 lg:pr-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 max-w-7xl lg:max-w-none">
          <aside className="lg:sticky lg:top-24 lg:self-start order-2 lg:order-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-primary/5 to-accent/5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-navy flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM16 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM16 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                  </svg>
                  Categories
                </h2>
              </div>
              <nav className="max-h-[70vh] overflow-y-auto py-2" aria-label="Product categories">
                {PRODUCT_CATEGORIES.map((cat) => {
                  const isActive = num === cat.id
                  return (
                    <Link
                      key={cat.id}
                      to={`/product/${cat.id}`}
                      className={`block px-5 py-3 text-sm border-l-2 transition-colors ${isActive ? 'border-primary bg-primary/10 text-primary font-semibold' : 'border-transparent text-gray-700 hover:bg-gray-50 hover:text-primary hover:border-primary/50'}`}
                    >
                      {cat.title}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </aside>

          <div className="min-w-0 order-1 lg:order-2">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 text-sm">Products</span>
            <span className="text-gray-400">/</span>
            <span className="text-primary font-semibold text-sm">{productData.title}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy mb-6">
            {productData.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl leading-relaxed">
            {productData.description}
          </p>
        </div>

        {productData.brands && productData.brands.length > 0 && (
          <div className="mb-12">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8">
              <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Featured Brands
              </h2>
              {productData.brands.some((b) => BRAND_LOGOS[b]) ? (
                <div className="flex flex-wrap items-center gap-6">
                  {productData.brands.map((brand) => {
                    const logoSrc = BRAND_LOGOS[brand]
                    return logoSrc ? (
                      <div key={brand} className="h-16 flex items-center">
                        <img
                          src={logoSrc}
                          alt={brand}
                          className="h-12 w-auto object-contain drop-shadow-sm"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <span
                        key={brand}
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {brand}
                      </span>
                    )
                  })}
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {productData.brands.map((brand) => (
                    <span
                      key={brand}
                      className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {brand}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Insulation Types (product 1 only) */}
        {productData.insulationTypes && productData.insulationTypes.length > 0 && (
          <div id="insulation-types" className="mb-16 scroll-mt-24">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">What We Offer</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4">Insulation Types</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Thermal, acoustic, and HVAC insulation solutions for building and duct systems</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {productData.insulationTypes.map((ins) => {
                const slug = ins.type.toLowerCase().replace(/\s*&\s*/g, '-').replace(/\s+/g, '-')
                const hashUrl = `${location.pathname}#${slug}`
                return (
                  <div key={ins.type} className="flex items-center gap-1">
                    <button type="button" onClick={() => document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="inline-flex items-center gap-2 bg-white border border-gray-200 text-navy px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all shadow-sm">
                      {ins.type}
                    </button>
                    <a href={hashUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-500 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all shrink-0" title={`Open ${ins.type} in new tab`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
                )
              })}
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {productData.insulationTypes.map((ins) => {
                const slug = ins.type.toLowerCase().replace(/\s*&\s*/g, '-').replace(/\s+/g, '-')
                return (
                  <div key={ins.type} id={slug} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 scroll-mt-24 min-h-0 overflow-visible">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${ins.iconClass} group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={INSULATION_ICONS[ins.icon] || INSULATION_ICONS.fire} /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">{ins.type}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">{ins.description}</p>
                    <ul className="space-y-2">
                      {ins.products.map((name) => (
                        <li key={name} className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                          <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </span>
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Products List (when no insulationTypes) */}
        {productData.products && productData.products.length > 0 && !productData.insulationTypes && (
          <div className="mb-12">
            <h2 className="text-2xl font-extrabold text-navy mb-6">Available Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {productData.products.map((product, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed">{product}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Applications */}
        {productData.applications && (
          <div className="mb-12">
            <h2 className="text-2xl font-extrabold text-navy mb-6">Applications</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {Array.isArray(productData.applications) ? productData.applications.join('. ') : productData.applications}
              </p>
            </div>
          </div>
        )}

        {num !== 13 && (
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-navy mb-6">Product Gallery</h2>
          {num === 2 && DUCT_ACCESSORY_CARDS.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {DUCT_ACCESSORY_CARDS.map((card) => (
                <div key={card.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <img src={`/${productImageFolders[2]}/${card.image}`} alt={card.name} className="w-full aspect-[4/3] object-contain bg-gray-100 p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_SVG }} />
                  <h3 className="mt-3 text-sm font-semibold text-navy text-center px-2 pb-1">
                    {card.name}
                  </h3>
                </div>
              ))}
            </div>
          ) : num === 1 && PRODUCT_1_GALLERY_CARDS.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {PRODUCT_1_GALLERY_CARDS.map((card) => (
                <div key={card.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <img src={`/${productImageFolders[1]}/${card.image}`} alt={card.name} className="w-full aspect-[4/3] object-contain bg-gray-100 p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_SVG }} />
                  <h3 className="mt-3 text-sm font-semibold text-navy text-center px-2 pb-1">
                    {card.name}
                  </h3>
                </div>
              ))}
            </div>
          ) : num === 3 && PRODUCT_3_GALLERY_CARDS.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {PRODUCT_3_GALLERY_CARDS.map((card) => (
                <div key={card.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <img src={`/${productImageFolders[3]}/${card.image}`} alt={card.name} className="w-full aspect-[4/3] object-contain bg-gray-100 p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_SVG }} />
                  <h3 className="mt-3 text-sm font-semibold text-navy text-center px-2 pb-1">
                    {card.name}
                  </h3>
                </div>
              ))}
            </div>
          ) : num === 4 && PRODUCT_4_GALLERY_CARDS.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {PRODUCT_4_GALLERY_CARDS.map((card) => (
                <div key={card.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <img src={`/${productImageFolders[4]}/${card.image}`} alt={card.name} className="w-full aspect-[4/3] object-contain bg-gray-100 p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_SVG }} />
                  <h3 className="mt-3 text-sm font-semibold text-navy text-center px-2 pb-1">
                    {card.name}
                  </h3>
                </div>
              ))}
            </div>
          ) : num === 5 && PRODUCT_5_GALLERY_CARDS.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {PRODUCT_5_GALLERY_CARDS.map((card) => (
                <div key={card.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <img src={`/${productImageFolders[5]}/${card.image}`} alt={card.name} className="w-full aspect-[4/3] object-contain bg-gray-100 p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_SVG }} />
                  <h3 className="mt-3 text-sm font-semibold text-navy text-center px-2 pb-1">
                    {card.name}
                  </h3>
                </div>
              ))}
            </div>
          ) : num === 10 && PRODUCT_10_GALLERY_CARDS.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {PRODUCT_10_GALLERY_CARDS.map((card) => (
                <div key={card.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <img src={`/${productImageFolders[10]}/${card.image}`} alt={card.name} className="w-full aspect-[4/3] object-contain bg-gray-100 p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_SVG }} />
                  <h3 className="mt-3 text-sm font-semibold text-navy text-center px-2 pb-1">
                    {card.name}
                  </h3>
                </div>
              ))}
            </div>
          ) : num === 12 && PRODUCT_12_GALLERY_CARDS.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {PRODUCT_12_GALLERY_CARDS.map((card) => (
                <div key={card.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <img src={`/${productImageFolders[12]}/${card.image}`} alt={card.name} className="w-full aspect-[4/3] object-contain bg-gray-100 p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_SVG }} />
                  <h3 className="mt-3 text-sm font-semibold text-navy text-center px-2 pb-1">
                    {card.name}
                  </h3>
                </div>
              ))}
            </div>
          ) : num === 15 && PRODUCT_15_GALLERY_CARDS.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {PRODUCT_15_GALLERY_CARDS.map((card) => (
                <div key={card.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
                  <img src={`/${productImageFolders[15]}/${card.image}`} alt={card.name} className="w-full aspect-[4/3] object-contain bg-gray-100 p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_SVG }} />
                  <h3 className="mt-3 text-sm font-semibold text-navy text-center px-2 pb-1">
                    {card.name}
                  </h3>
                </div>
              ))}
            </div>
          ) : folder && images.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {images.map((filename) => {
                const isSilentPipes = num === 9
                const isFullRowSilent =
                  isSilentPipes &&
                  (filename.includes('incola-exclusive') ||
                    filename.includes('incola-advantages-yeni-2') ||
                    filename.includes('soundproof-pipe-vesbo'))
                const containInBoxProducts = [1, 3, 4, 5, 8, 10, 12, 15]
                const useContainInBox = containInBoxProducts.includes(num)
                const wrapperClasses = isFullRowSilent
                  ? 'group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1 col-span-2 sm:col-span-3 lg:col-span-4'
                  : 'group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1'
                const defaultImgClasses = useContainInBox
                  ? 'w-full aspect-[4/3] object-contain bg-gray-100 p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300'
                  : 'w-full aspect-[4/3] object-cover bg-gray-100 p-0 sm:p-0 group-hover:scale-105 transition-transform duration-300'
                const imgClasses = isFullRowSilent
                  ? 'w-full object-contain bg-gray-100 p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300'
                  : defaultImgClasses
                return (
                  <div key={filename} className={wrapperClasses}>
                    <img
                      src={`/${folder}/${filename}`}
                      alt={productData.title}
                      className={imgClasses}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = PLACEHOLDER_SVG
                      }}
                    />
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 p-10 text-center">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <p className="text-gray-600 mb-2">Product images coming soon</p>
              <p className="text-gray-400 text-sm">Contact us for product photos and specifications</p>
            </div>
          )}
        </div>
        )}

        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-10 lg:p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Interested in {productData.title}?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Contact us for quotes, bulk pricing, and product specifications. We offer special prices for large orders.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Get a Quote
              </Link>
              <a href="mailto:sales@smartgentrading.com" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </main>
  )
}
