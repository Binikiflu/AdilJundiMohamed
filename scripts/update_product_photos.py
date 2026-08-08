import re

# Mapping of product ID to real photorealistic Unsplash image URL
PRODUCT_IMAGES = {
    "prod-004": "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80", # Silent Industrial Diesel Generator
    "prod-005": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80", # ATS 800A Switch Panel
    "prod-018": "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80", # 1000kVA Distribution Transformer
    "prod-019": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80", # Armored MV Power Cable Reel
    "prod-008": "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80", # Solar PV Panel 550W
    "prod-009": "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80", # Off-Grid Hybrid Solar Inverter
    "prod-016": "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80", # 45kW Electric Induction Motor
    "prod-006": "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80", # Engine Discharge Pump
    "prod-007": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=80", # Borehole Submersible Water Pump
    "prod-020": "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80", # Ductile Iron Water Pipes
    "prod-010": "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80", # Soil Hydraulic Drilling Rig
    "prod-011": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80", # Twin-Drum Road Roller Compactor
    "prod-021": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80", # Container Handling Forklift 10-Ton
    "prod-022": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80", # Rotary Screw Air Compressor
    "prod-001": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80", # Armored Outdoor Fiber Cable
    "prod-002": "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1200&q=80", # ADSS Aerial Fiber Optic Cable
    "prod-003": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80", # 144-Port ODF & Fusion Kit
    "prod-023": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80", # Enterprise Rackmount Server
    "prod-014": "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=1200&q=80", # Workstation Tower PC i7
    "prod-015": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", # 48-Port Managed Network Switch
    "prod-024": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80", # Digital Interactive Smart Touchscreen 86"
    "prod-012": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80", # Executive Mahogany Office Suite
    "prod-013": "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1200&q=80", # Fireproof Steel Filing Cabinet
    "prod-025": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80", # Portable Ultrasound System
    "prod-017": "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80"  # Water Quality Testing Photometer
}

with open("src/data/companyData.ts", "r", encoding="utf-8") as f:
    content = f.read()

for prod_id, img_url in PRODUCT_IMAGES.items():
    # Find block for this product and replace its imageUrl
    pattern = rf'(id:\s*"{prod_id}".*?imageUrl:\s*)("[^"]+")'
    def replacer(m):
        return f'{m.group(1)}"{img_url}"'
    content = re.sub(pattern, replacer, content, flags=re.DOTALL)

with open("src/data/companyData.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("All product images updated to high-resolution photorealistic Unsplash photography URLs.")
