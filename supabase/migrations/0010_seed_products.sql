-- Migration 0010 — seed the 13 launch products with honest evidence statuses.
-- Per W0 §2.4 + W0 §2.6: every product surfaces evidence status as one of
-- active / pending / sample / expired / not_applicable.
-- At W2, NO product has real lab documents on file. Every evidence type
-- starts as 'pending'. Status flips to 'active' lot-by-lot in W9 once real
-- COAs land in coa-pdfs bucket.

BEGIN;

-- =========================================================================
-- Essential oils — 10 SKUs, 10ml at launch.
-- Prices in KES cents (multiply listed KES by 100).
-- =========================================================================

INSERT INTO products (slug, name, latin_name, product_type, collections, status,
                      iso_standard, process_method, origin_region, aroma_profile,
                      shelf_life_months, hs_code, country_of_origin, kebs_standard)
VALUES
  ('rosemary',         'Rosemary',          'Rosmarinus officinalis',  'essential_oil',
   ARRAY['skin-and-hair'],
   'draft', 'ISO 1342', 'steam_distilled', 'Mount Kenya highlands',
   'Herbaceous, camphoraceous, evergreen', 36, '3301.29', 'KE', 'KS 2937:2021'),

  ('eucalyptus',       'Eucalyptus',        'Eucalyptus globulus',     'essential_oil',
   ARRAY['breathe-and-relief'],
   'draft', 'ISO 770', 'steam_distilled', 'Mount Kenya highlands',
   'Fresh, sharp, camphoraceous', 36, '3301.25', 'KE', 'KS 2937:2021'),

  ('peppermint',       'Peppermint',        'Mentha × piperita',       'essential_oil',
   ARRAY['breathe-and-relief'],
   'draft', 'ISO 856', 'steam_distilled', 'Mount Kenya highlands',
   'Cool, minty, slightly sweet', 36, '3301.25', 'KE', 'KS 2937:2021'),

  ('tea-tree',         'Tea Tree',          'Melaleuca alternifolia',  'essential_oil',
   ARRAY['skin-and-hair', 'breathe-and-relief'],
   'draft', 'ISO 4730', 'steam_distilled', 'Mount Kenya highlands',
   'Medicinal, woody, fresh', 36, '3301.29', 'KE', 'KS 2937:2021'),

  ('english-lavender', 'English Lavender',  'Lavandula angustifolia',  'essential_oil',
   ARRAY['skin-and-hair', 'mind-and-mood'],
   'draft', 'ISO 3515', 'steam_distilled', 'Mount Kenya highlands',
   'Floral, sweet, herbaceous', 36, '3301.29', 'KE', 'KS 2937:2021'),

  ('rose-geranium',    'Rose Geranium',     'Pelargonium graveolens',  'essential_oil',
   ARRAY['skin-and-hair'],
   'draft', 'ISO 4731', 'steam_distilled', 'Mount Kenya highlands',
   'Rosy, green, slightly minty', 36, '3301.29', 'KE', 'KS 2937:2021'),

  ('wild-basil',       'Wild Basil',        'Ocimum spp.',             'essential_oil',
   ARRAY['mind-and-mood', 'rare-kenyan'],
   'draft', NULL, 'steam_distilled', 'Mount Kenya highlands',
   'Spicy, herbaceous, slightly sweet', 36, '3301.29', 'KE', 'KS 2937:2021'),

  ('leleshwa',         'Leleshwa',          'Tarchonanthus camphoratus','essential_oil',
   ARRAY['mind-and-mood', 'breathe-and-relief', 'rare-kenyan'],
   'draft', NULL, 'steam_distilled', 'Kenyan highlands',
   'Camphoraceous, woody, indigenous African profile', 36, '3301.29', 'KE', 'KS 2937:2021'),

  ('lippia',           'Lippia',            'Lippia javanica',         'essential_oil',
   ARRAY['mind-and-mood', 'rare-kenyan'],
   'draft', NULL, 'steam_distilled', 'Kenyan highlands',
   'Citrus, herbaceous, slightly sweet', 36, '3301.29', 'KE', 'KS 2937:2021'),

  ('immortelle',       'Immortelle',        'Helichrysum splendidum',  'essential_oil',
   ARRAY['mind-and-mood', 'rare-kenyan'],
   'draft', NULL, 'steam_distilled', 'Kenyan highlands',
   'Honey-like, slightly bitter, deeply herbaceous', 36, '3301.29', 'KE', 'KS 2937:2021');

-- =========================================================================
-- Botanical / carrier oils — 3 SKUs, 30ml at launch.
-- =========================================================================

INSERT INTO products (slug, name, latin_name, product_type, collections, status,
                      iso_standard, process_method, origin_region, texture_profile,
                      shelf_life_months, hs_code, country_of_origin, kebs_standard)
VALUES
  ('neem',    'Neem',    'Azadirachta indica', 'botanical_oil',
   ARRAY['skin-and-hair', 'carriers'],
   'draft', NULL, 'cold_pressed_unrefined', 'Kenyan lowlands',
   'Thick, slightly green, distinctive aroma', 18, '1515.90', 'KE', 'KS EAS 769'),

  ('baobab',  'Baobab',  'Adansonia digitata', 'botanical_oil',
   ARRAY['skin-and-hair', 'carriers'],
   'draft', NULL, 'cold_pressed_unrefined', 'Kenyan lowlands',
   'Lightweight, nutty, fast-absorbing', 18, '1515.90', 'KE', 'KS EAS 769'),

  ('moringa', 'Moringa', 'Moringa oleifera',   'botanical_oil',
   ARRAY['skin-and-hair', 'carriers'],
   'draft', NULL, 'cold_pressed_unrefined', 'Kenyan lowlands',
   'Lightweight, oleic-rich, exceptionally stable', 18, '1515.90', 'KE', 'KS EAS 769');

-- =========================================================================
-- Variants — one SKU each at launch.
-- Essential oils: 10ml. Botanical oils: 30ml.
-- Prices in KES cents (×100).
-- =========================================================================

INSERT INTO product_variants (product_id, sku, size_ml, bottle_type,
                              price_kes_cents, weight_grams, stock_qty, is_active)
SELECT id, 'MOE-RO-10', 10, 'amber_dropper', 160000, 30, 0, true FROM products WHERE slug = 'rosemary'
UNION ALL SELECT id, 'MOE-EU-10', 10, 'amber_dropper', 180000, 30, 0, true FROM products WHERE slug = 'eucalyptus'
UNION ALL SELECT id, 'MOE-PE-10', 10, 'amber_dropper', 190000, 30, 0, true FROM products WHERE slug = 'peppermint'
UNION ALL SELECT id, 'MOE-TT-10', 10, 'amber_dropper', 220000, 30, 0, true FROM products WHERE slug = 'tea-tree'
UNION ALL SELECT id, 'MOE-EL-10', 10, 'amber_dropper', 260000, 30, 0, true FROM products WHERE slug = 'english-lavender'
UNION ALL SELECT id, 'MOE-RG-10', 10, 'amber_dropper', 290000, 30, 0, true FROM products WHERE slug = 'rose-geranium'
UNION ALL SELECT id, 'MOE-WB-10', 10, 'amber_dropper', 320000, 30, 0, true FROM products WHERE slug = 'wild-basil'
UNION ALL SELECT id, 'MOE-LE-10', 10, 'amber_dropper', 360000, 30, 0, true FROM products WHERE slug = 'leleshwa'
UNION ALL SELECT id, 'MOE-LI-10', 10, 'amber_dropper', 380000, 30, 0, true FROM products WHERE slug = 'lippia'
UNION ALL SELECT id, 'MOE-IM-10', 10, 'amber_dropper', 480000, 30, 0, true FROM products WHERE slug = 'immortelle'
UNION ALL SELECT id, 'MOE-NE-30', 30, 'pump',          200000, 70, 0, true FROM products WHERE slug = 'neem'
UNION ALL SELECT id, 'MOE-BA-30', 30, 'pump',          260000, 70, 0, true FROM products WHERE slug = 'baobab'
UNION ALL SELECT id, 'MOE-MO-30', 30, 'pump',          320000, 70, 0, true FROM products WHERE slug = 'moringa';

-- =========================================================================
-- Honest evidence status seed — every product, every doc type, starts 'pending'.
-- Real status flips happen in W9 (Lot traceability + buyer documents).
-- We seed against a single placeholder lot per product so the schema is
-- exercised. These lots are marked is_published = false so anon can NEVER
-- read them — they're scaffolding only.
-- =========================================================================

-- Placeholder lots per product (scaffolding — not real harvest data).
INSERT INTO lots (lot_number, product_id, harvest_date, distillation_date,
                  origin_cell, farmer_count, total_yield_kg, qty_remaining_kg,
                  is_published, evidence_status_overall, notes)
SELECT
  'PLACEHOLDER-' || UPPER(p.slug),
  p.id,
  NULL, NULL,
  'PLACEHOLDER — NOT A REAL MOEDIM LOT',
  0, 0, 0,
  false,                         -- never published
  'pending'::evidence_status,
  'Scaffolding row inserted by 0010_seed_products.sql. Replace with real lot in W9.'
FROM products p;

-- Per-doc evidence status, all 'pending', against each placeholder lot.
INSERT INTO lot_evidence_status (lot_id, doc_type, status, notes)
SELECT l.id, dt, 'pending'::evidence_status,
       'No real document on file at W2. Honest status per W0 §2.6.'
FROM lots l
CROSS JOIN (
  VALUES
    ('coa_gcms'), ('sds'), ('ifra'), ('allergen'),
    ('pesticide'), ('heavy_metals'), ('microbiology'),
    ('organic'), ('chain_of_custody'), ('phytosanitary'),
    ('tds'), ('fame')
) AS dt(dt)
WHERE l.lot_number LIKE 'PLACEHOLDER-%';

COMMIT;
