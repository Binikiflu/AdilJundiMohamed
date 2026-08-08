import re

with open("src/data/companyData.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Replace imageUrl for each prod-XXX block
def replace_image_url(match):
    block = match.group(0)
    prod_id_match = re.search(r'id:\s*"([^"]+)"', block)
    if prod_id_match:
        prod_id = prod_id_match.group(1)
        # replace imageUrl line within this block
        block = re.sub(r'imageUrl:\s*"[^"]+"', f'imageUrl: "/products/{prod_id}.svg"', block)
    return block

# Find all product blocks in PRODUCTS_DATA
updated_content = re.sub(r'{\s*id:\s*"prod-[^"]+".*?leadTimeDays:\s*\d+\s*}', replace_image_url, content, flags=re.DOTALL)

with open("src/data/companyData.ts", "w", encoding="utf-8") as f:
    f.write(updated_content)

print("Updated companyData.ts product image URLs successfully.")
