import re

url_map = {
    "prod-004": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    "prod-005": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    "prod-018": "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1200&q=80",
    "prod-019": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "prod-008": "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    "prod-009": "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80",
    "prod-016": "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80",
    "prod-006": "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
    "prod-007": "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=1200&q=80",
    "prod-020": "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1200&q=80",
    "prod-010": "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80",
    "prod-011": "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
    "prod-021": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    "prod-022": "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80",
    "prod-001": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    "prod-002": "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80",
    "prod-003": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "prod-023": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "prod-014": "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=1200&q=80",
    "prod-015": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    "prod-024": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    "prod-012": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    "prod-013": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    "prod-025": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    "prod-017": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
}

with open("src/data/companyData.ts", "r", encoding="utf-8") as f:
    content = f.read()

def replace_image(match):
    block = match.group(0)
    prod_id_m = re.search(r'id:\s*"([^"]+)"', block)
    if prod_id_m:
        prod_id = prod_id_m.group(1)
        if prod_id in url_map:
            real_url = url_map[prod_id]
            block = re.sub(r'imageUrl:\s*"[^"]+"', f'imageUrl: "{real_url}"', block)
    return block

updated_content = re.sub(r'{\s*id:\s*"prod-[^"]+".*?leadTimeDays:\s*\d+\s*}', replace_image, content, flags=re.DOTALL)

with open("src/data/companyData.ts", "w", encoding="utf-8") as f:
    f.write(updated_content)

print("All product image URLs updated to real high-resolution Unsplash photography.")
