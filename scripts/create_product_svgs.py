import os

out_dir = "public/products"
os.makedirs(out_dir, exist_ok=True)

def wrap_svg(filename, title, code, spec, content):
    svg_code = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%" style="background-color: #020617; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="yellowGen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="50%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#a16207"/>
    </linearGradient>
    <linearGradient id="metalBody" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="50%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="bluePaint" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="50%" stop-color="#1d4ed8"/>
      <stop offset="100%" stop-color="#1e3a8a"/>
    </linearGradient>
    <linearGradient id="copperGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f97316"/>
      <stop offset="50%" stop-color="#ea580c"/>
      <stop offset="100%" stop-color="#c2410c"/>
    </linearGradient>

    <!-- Grid Pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1" opacity="0.6"/>
    </pattern>

    <!-- Drop Shadow Filter -->
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.8"/>
    </filter>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Layer -->
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <rect width="800" height="600" fill="url(#grid)"/>

  <!-- Top Header Bar -->
  <rect x="0" y="0" width="800" height="64" fill="#090d16" stroke="#1e293b" stroke-width="1"/>
  
  <rect x="24" y="20" width="130" height="24" fill="#1e293b" rx="4" stroke="#334155"/>
  <text x="32" y="36" fill="#fbbf24" font-size="11" font-weight="800" letter-spacing="1">ADIL JUNDI LTD</text>

  <rect x="166" y="20" width="120" height="24" fill="#14532d" rx="4" stroke="#16a34a"/>
  <text x="176" y="36" fill="#4ade80" font-size="10" font-weight="700" letter-spacing="0.5">CODE: {code}</text>

  <text x="776" y="38" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end" letter-spacing="0.5">{spec}</text>

  <!-- Central Product Drawing Area -->
  <g filter="url(#shadow)">
    {content}
  </g>

  <!-- Bottom Technical Information Banner -->
  <rect x="24" y="520" width="752" height="56" fill="#0b1329" rx="6" stroke="#1e293b" stroke-width="1.5"/>
  <circle cx="48" cy="548" r="12" fill="#d97706" />
  <path d="M 44 548 L 47 551 L 53 544" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  
  <text x="72" y="544" fill="#ffffff" font-size="14" font-weight="800" letter-spacing="0.2">{title}</text>
  <text x="72" y="561" fill="#64748b" font-size="11" font-weight="600">Official Equipment Specification • Duty-Paid Import Dossier • Adil Jundi Mohamed Import Export Ltd.</text>

  <rect x="660" y="534" width="104" height="28" fill="#1e293b" rx="4" stroke="#334155"/>
  <text x="712" y="552" fill="#fbbf24" font-size="10" font-weight="800" text-anchor="middle" letter-spacing="1">VERIFIED ITEM</text>
</svg>'''
    filepath = os.path.join(out_dir, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(svg_code)
    print(f"Generated {filename}")

# 1. prod-004.svg - Generator
wrap_svg("prod-004.svg", "Heavy-Duty Silent Industrial Generator (250kVA - 500kVA)", "AJ-GEN-500S", "500 kVA • Cummins Diesel Engine", '''
  <!-- Skid Base -->
  <rect x="120" y="420" width="560" height="40" fill="#0f172a" stroke="#334155" stroke-width="2" rx="4"/>
  <rect x="150" y="432" width="80" height="16" fill="#020617" rx="2"/>
  <rect x="570" y="432" width="80" height="16" fill="#020617" rx="2"/>

  <!-- Yellow Canopy -->
  <rect x="140" y="160" width="520" height="260" fill="url(#yellowGen)" stroke="#854d0e" stroke-width="3" rx="12"/>
  
  <!-- Black Roof Rail & Exhaust -->
  <rect x="130" y="150" width="540" height="18" fill="#1e293b" rx="4"/>
  <rect x="220" y="100" width="40" height="50" fill="#334155" stroke="#0f172a" stroke-width="2"/>
  <ellipse cx="240" cy="100" rx="20" ry="6" fill="#64748b"/>

  <!-- Access Doors -->
  <rect x="160" y="190" width="150" height="210" fill="#eab308" stroke="#a16207" stroke-width="2" rx="4"/>
  <rect x="330" y="190" width="150" height="210" fill="#eab308" stroke="#a16207" stroke-width="2" rx="4"/>
  <rect x="500" y="190" width="140" height="210" fill="#eab308" stroke="#a16207" stroke-width="2" rx="4"/>

  <!-- Louvers / Vents -->
  <g fill="#713f12">
    <rect x="180" y="220" width="110" height="8" rx="2"/>
    <rect x="180" y="235" width="110" height="8" rx="2"/>
    <rect x="180" y="250" width="110" height="8" rx="2"/>
    <rect x="180" y="265" width="110" height="8" rx="2"/>
    
    <rect x="350" y="220" width="110" height="8" rx="2"/>
    <rect x="350" y="235" width="110" height="8" rx="2"/>
    <rect x="350" y="250" width="110" height="8" rx="2"/>
    <rect x="350" y="265" width="110" height="8" rx="2"/>
  </g>

  <!-- Deep Sea DSE Controller Panel -->
  <rect x="520" y="210" width="100" height="90" fill="#0f172a" stroke="#334155" stroke-width="2" rx="6"/>
  <rect x="532" y="222" width="76" height="38" fill="#0284c7" rx="2"/>
  <text x="570" y="245" fill="#ffffff" font-size="10" font-weight="800" text-anchor="middle">DSE 7320</text>
  <circle cx="542" cy="280" r="8" fill="#ef4444"/>
  <circle cx="570" cy="280" r="6" fill="#22c55e"/>
  <circle cx="598" cy="280" r="6" fill="#eab308"/>

  <!-- Door Handles & Badges -->
  <rect x="290" y="290" width="12" height="30" fill="#334155" rx="2"/>
  <rect x="460" y="290" width="12" height="30" fill="#334155" rx="2"/>

  <rect x="180" y="320" width="110" height="24" fill="#0f172a" rx="4"/>
  <text x="235" y="336" fill="#ef4444" font-size="11" font-weight="900" text-anchor="middle">CUMMINS POWER</text>
''')

# 2. prod-005.svg - ATS Panel
wrap_svg("prod-005.svg", "Automatic Transfer Switch Panel (ATS 800A 3-Phase)", "AJ-ATS-800A", "800 Amp • 400V 3-Phase Dual Interlock", '''
  <!-- Main Cabinet Frame -->
  <rect x="240" y="90" width="320" height="390" fill="url(#metalBody)" stroke="#475569" stroke-width="4" rx="8"/>
  <rect x="260" y="110" width="280" height="350" fill="#0f172a" stroke="#334155" stroke-width="2" rx="4"/>

  <!-- Top Meters & Indicators -->
  <rect x="280" y="130" width="70" height="40" fill="#0284c7" rx="4" stroke="#0369a1"/>
  <text x="315" y="154" fill="#ffffff" font-size="12" font-weight="800" text-anchor="middle">398 V</text>
  <text x="315" y="165" fill="#bae6fd" font-size="8" text-anchor="middle">MAINS GRID</text>

  <rect x="365" y="130" width="70" height="40" fill="#0284c7" rx="4" stroke="#0369a1"/>
  <text x="400" y="154" fill="#ffffff" font-size="12" font-weight="800" text-anchor="middle">401 V</text>
  <text x="400" y="165" fill="#bae6fd" font-size="8" text-anchor="middle">GEN POWER</text>

  <rect x="450" y="130" width="70" height="40" fill="#15803d" rx="4" stroke="#166534"/>
  <text x="485" y="154" fill="#ffffff" font-size="12" font-weight="800" text-anchor="middle">50.0 Hz</text>
  <text x="485" y="165" fill="#bbf7d0" font-size="8" text-anchor="middle">FREQUENCY</text>

  <!-- Indicator Lights -->
  <g>
    <circle cx="300" cy="195" r="8" fill="#ef4444" filter="url(#glow)"/>
    <circle cx="340" cy="195" r="8" fill="#eab308" filter="url(#glow)"/>
    <circle cx="380" cy="195" r="8" fill="#3b82f6" filter="url(#glow)"/>
    <circle cx="450" cy="195" r="8" fill="#22c55e" filter="url(#glow)"/>
    <text x="485" y="198" fill="#94a3b8" font-size="10" font-weight="700">AUTO ACTIVE</text>
  </g>

  <!-- Dual Motorized Breakers Section -->
  <rect x="280" y="225" width="240" height="160" fill="#1e293b" stroke="#334155" stroke-width="2" rx="6"/>
  
  <!-- Mains Switch Block -->
  <rect x="300" y="245" width="90" height="120" fill="#0f172a" rx="4" stroke="#475569"/>
  <rect x="315" y="260" width="60" height="40" fill="#22c55e" rx="2"/>
  <text x="345" y="284" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">ON</text>
  <text x="345" y="320" fill="#cbd5e1" font-size="9" font-weight="700" text-anchor="middle">MAINS 800A</text>

  <!-- Generator Switch Block -->
  <rect x="410" y="245" width="90" height="120" fill="#0f172a" rx="4" stroke="#475569"/>
  <rect x="425" y="260" width="60" height="40" fill="#ef4444" rx="2"/>
  <text x="455" y="284" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">OFF</text>
  <text x="455" y="320" fill="#cbd5e1" font-size="9" font-weight="700" text-anchor="middle">STANDBY 800A</text>

  <!-- Emergency Stop Button -->
  <circle cx="400" cy="420" r="22" fill="#ef4444" stroke="#b91c1c" stroke-width="4"/>
  <circle cx="400" cy="420" r="14" fill="#dc2626"/>
  <text x="400" y="452" fill="#ef4444" font-size="9" font-weight="800" text-anchor="middle">EMERGENCY TRIP</text>
''')

# 3. prod-018.svg - Transformer
wrap_svg("prod-018.svg", "Oil-Immersed Distribution Transformer 1000kVA (33kV/0.4kV)", "AJ-TRF-1000KVA", "1000 kVA • 33,000V to 400V Step Down", '''
  <!-- Main Transformer Tank -->
  <rect x="220" y="220" width="360" height="220" fill="#1e3a8a" stroke="#1d4ed8" stroke-width="3" rx="8"/>
  
  <!-- Radiator Fins Left & Right -->
  <g fill="#1e293b" stroke="#3b82f6" stroke-width="1.5">
    <rect x="170" y="240" width="12" height="180" rx="2"/>
    <rect x="185" y="240" width="12" height="180" rx="2"/>
    <rect x="200" y="240" width="12" height="180" rx="2"/>
    
    <rect x="588" y="240" width="12" height="180" rx="2"/>
    <rect x="603" y="240" width="12" height="180" rx="2"/>
    <rect x="618" y="240" width="12" height="180" rx="2"/>
  </g>

  <!-- Conservator Oil Tank Top -->
  <ellipse cx="400" cy="180" rx="140" ry="25" fill="#334155" stroke="#64748b" stroke-width="2"/>
  <rect x="260" y="180" width="280" height="30" fill="#1e293b"/>
  <ellipse cx="400" cy="210" rx="140" ry="25" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  
  <!-- High Voltage 33kV Ceramic Bushings -->
  <g>
    <!-- Bushing 1 -->
    <rect x="280" y="110" width="20" height="70" fill="#78350f" rx="3"/>
    <ellipse cx="290" cy="120" rx="16" ry="6" fill="#92400e"/>
    <ellipse cx="290" cy="140" rx="16" ry="6" fill="#92400e"/>
    <ellipse cx="290" cy="160" rx="16" ry="6" fill="#92400e"/>
    <line x1="290" y1="110" x2="290" y2="80" stroke="#fbbf24" stroke-width="3"/>

    <!-- Bushing 2 -->
    <rect x="390" y="110" width="20" height="70" fill="#78350f" rx="3"/>
    <ellipse cx="400" cy="120" rx="16" ry="6" fill="#92400e"/>
    <ellipse cx="400" cy="140" rx="16" ry="6" fill="#92400e"/>
    <ellipse cx="400" cy="160" rx="16" ry="6" fill="#92400e"/>
    <line x1="400" y1="110" x2="400" y2="80" stroke="#fbbf24" stroke-width="3"/>

    <!-- Bushing 3 -->
    <rect x="500" y="110" width="20" height="70" fill="#78350f" rx="3"/>
    <ellipse cx="510" cy="120" rx="16" ry="6" fill="#92400e"/>
    <ellipse cx="510" cy="140" rx="16" ry="6" fill="#92400e"/>
    <ellipse cx="510" cy="160" rx="16" ry="6" fill="#92400e"/>
    <line x1="510" y1="110" x2="510" y2="80" stroke="#fbbf24" stroke-width="3"/>
  </g>

  <!-- Nameplate & Grounding -->
  <rect x="320" y="300" width="160" height="90" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" rx="4"/>
  <text x="400" y="325" fill="#38bdf8" font-size="11" font-weight="800" text-anchor="middle">EEU APPROVED 33kV</text>
  <text x="400" y="345" fill="#ffffff" font-size="10" font-weight="700" text-anchor="middle">1000 kVA • ONAN</text>
  <text x="400" y="365" fill="#94a3b8" font-size="9" font-weight="600" text-anchor="middle">Vector Group: Dyn11</text>
''')

# 4. prod-019.svg - Cable
wrap_svg("prod-019.svg", "Armored LV/MV Power Cable 4x185mm²", "AJ-CBL-4X185", "0.6/1kV • Steel Wire Armored (SWA)", '''
  <!-- Cable Cross Section Circle Outer Outer -->
  <circle cx="400" cy="270" r="170" fill="#0f172a" stroke="#334155" stroke-width="4"/>
  
  <!-- Outer Sheath -->
  <circle cx="400" cy="270" r="160" fill="#1e293b" stroke="#020617" stroke-width="3"/>
  
  <!-- Steel Wire Armor Ring -->
  <circle cx="400" cy="270" r="142" fill="none" stroke="#64748b" stroke-width="12" stroke-dasharray="8 4"/>

  <!-- Inner Bedding -->
  <circle cx="400" cy="270" r="130" fill="#020617"/>

  <!-- 4 Cores (Red, Yellow, Blue, Black/Green) -->
  <!-- Core 1 Red -->
  <g>
    <circle cx="340" cy="210" r="48" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
    <circle cx="340" cy="210" r="32" fill="url(#copperGrad)"/>
    <!-- Copper Strands -->
    <circle cx="340" cy="210" r="10" fill="#ea580c"/>
    <circle cx="330" cy="200" r="8" fill="#ea580c"/>
    <circle cx="350" cy="200" r="8" fill="#ea580c"/>
    <circle cx="330" cy="220" r="8" fill="#ea580c"/>
    <circle cx="350" cy="220" r="8" fill="#ea580c"/>
  </g>

  <!-- Core 2 Yellow -->
  <g>
    <circle cx="460" cy="210" r="48" fill="#ca8a04" stroke="#854d0e" stroke-width="2"/>
    <circle cx="460" cy="210" r="32" fill="url(#copperGrad)"/>
    <circle cx="460" cy="210" r="10" fill="#ea580c"/>
    <circle cx="450" cy="200" r="8" fill="#ea580c"/>
    <circle cx="470" cy="200" r="8" fill="#ea580c"/>
    <circle cx="450" cy="220" r="8" fill="#ea580c"/>
    <circle cx="470" cy="220" r="8" fill="#ea580c"/>
  </g>

  <!-- Core 3 Blue -->
  <g>
    <circle cx="340" cy="330" r="48" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
    <circle cx="340" cy="330" r="32" fill="url(#copperGrad)"/>
    <circle cx="340" cy="330" r="10" fill="#ea580c"/>
    <circle cx="330" cy="320" r="8" fill="#ea580c"/>
    <circle cx="350" cy="320" r="8" fill="#ea580c"/>
    <circle cx="330" cy="340" r="8" fill="#ea580c"/>
    <circle cx="350" cy="340" r="8" fill="#ea580c"/>
  </g>

  <!-- Core 4 Black/Neutral -->
  <g>
    <circle cx="460" cy="330" r="48" fill="#334155" stroke="#1e293b" stroke-width="2"/>
    <circle cx="460" cy="330" r="32" fill="url(#copperGrad)"/>
    <circle cx="460" cy="330" r="10" fill="#ea580c"/>
    <circle cx="450" cy="320" r="8" fill="#ea580c"/>
    <circle cx="470" cy="320" r="8" fill="#ea580c"/>
    <circle cx="450" cy="340" r="8" fill="#ea580c"/>
    <circle cx="470" cy="340" r="8" fill="#ea580c"/>
  </g>

  <!-- Center Filler -->
  <circle cx="400" cy="270" r="22" fill="#475569"/>

  <text x="400" y="475" fill="#f97316" font-size="12" font-weight="800" text-anchor="middle">ANNEALED COPPER • 4 x 185 mm² • SWA</text>
''')

# 5. prod-008.svg - Solar Panel
wrap_svg("prod-008.svg", "Monocrystalline Solar PV Panel 550W Tier-1", "AJ-SOLAR-550", "550 Watts Peak • 21.5% Efficiency PERC", '''
  <!-- Anodized Frame -->
  <rect x="180" y="90" width="440" height="380" fill="#334155" stroke="#64748b" stroke-width="6" rx="6"/>
  <rect x="190" y="100" width="420" height="360" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>

  <!-- Solar Wafers Grid (12 Columns x 6 Rows half-cut) -->
  <g stroke="#0ea5e9" stroke-width="1" opacity="0.8">
    <line x1="190" y1="160" x2="610" y2="160"/>
    <line x1="190" y1="220" x2="610" y2="220"/>
    <line x1="190" y1="280" x2="610" y2="280"/>
    <line x1="190" y1="340" x2="610" y2="340"/>
    <line x1="190" y1="400" x2="610" y2="400"/>

    <line x1="260" y1="100" x2="260" y2="460"/>
    <line x1="330" y1="100" x2="330" y2="460"/>
    <line x1="400" y1="100" x2="400" y2="460"/>
    <line x1="470" y1="100" x2="470" y2="460"/>
    <line x1="540" y1="100" x2="540" y2="460"/>
  </g>

  <!-- Busbars -->
  <g stroke="#ffffff" stroke-width="2" opacity="0.9">
    <line x1="225" y1="100" x2="225" y2="460"/>
    <line x1="295" y1="100" x2="295" y2="460"/>
    <line x1="365" y1="100" x2="365" y2="460"/>
    <line x1="435" y1="100" x2="435" y2="460"/>
    <line x1="505" y1="100" x2="505" y2="460"/>
    <line x1="575" y1="100" x2="575" y2="460"/>
  </g>

  <!-- Sunlight Reflection / Sheen -->
  <polygon points="190,100 350,100 190,260" fill="#ffffff" opacity="0.15"/>

  <!-- Badge -->
  <rect x="210" y="420" width="130" height="26" fill="#0f172a" rx="4" stroke="#38bdf8"/>
  <text x="275" y="437" fill="#38bdf8" font-size="10" font-weight="900" text-anchor="middle">550W MONO PERC</text>
''')

# 6. prod-009.svg - Hybrid Inverter
wrap_svg("prod-009.svg", "Off-Grid Hybrid Solar MPPT Inverter System 10kW", "AJ-INV-10KW", "10kW Continuous / 20kW Surge • 48V DC", '''
  <!-- Inverter Outer Casing -->
  <rect x="250" y="100" width="300" height="380" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3" rx="12"/>
  <rect x="270" y="120" width="260" height="120" fill="#0f172a" rx="8" stroke="#334155"/>

  <!-- Screen Interface -->
  <rect x="285" y="132" width="230" height="96" fill="#0284c7" rx="4"/>
  <text x="400" y="156" fill="#ffffff" font-size="14" font-weight="900" text-anchor="middle">SOLAR HYBRID 10.0 KW</text>
  
  <text x="310" y="185" fill="#bae6fd" font-size="10" font-weight="700">PV: 420V DC</text>
  <text x="310" y="202" fill="#4ade80" font-size="10" font-weight="700">GRID: 230V AC</text>
  <text x="420" y="185" fill="#fde047" font-size="10" font-weight="700">BATT: 51.2V (98%)</text>
  <text x="420" y="202" fill="#ffffff" font-size="10" font-weight="700">LOAD: 4.8 KW</text>

  <!-- Air Intake Vents Bottom -->
  <g fill="#64748b">
    <rect x="280" y="270" width="240" height="6" rx="3"/>
    <rect x="280" y="285" width="240" height="6" rx="3"/>
    <rect x="280" y="300" width="240" height="6" rx="3"/>
    <rect x="280" y="315" width="240" height="6" rx="3"/>
    <rect x="280" y="330" width="240" height="6" rx="3"/>
  </g>

  <!-- Connectors & Breaker Switch Bottom -->
  <rect x="290" y="380" width="60" height="40" fill="#0f172a" rx="4"/>
  <text x="320" y="404" fill="#38bdf8" font-size="9" font-weight="800" text-anchor="middle">DC ISOLATOR</text>

  <circle cx="420" cy="400" r="12" fill="#22c55e"/>
  <circle cx="460" cy="400" r="12" fill="#3b82f6"/>
  <circle cx="500" cy="400" r="12" fill="#ef4444"/>
''')

# 7. prod-016.svg - Electric Motor
wrap_svg("prod-016.svg", "Three-Phase Industrial Electric Induction Motor 45kW", "AJ-MTR-45KW", "45kW (60 HP) • 400V 50Hz • IP55", '''
  <!-- Main Blue Cast Iron Motor Cylinder -->
  <rect x="240" y="190" width="320" height="200" fill="url(#blueMotor)" stroke="#1e3a8a" stroke-width="3" rx="16"/>

  <!-- Cooling Fins -->
  <g fill="#1e40af" stroke="#1d4ed8" stroke-width="1.5">
    <line x1="260" y1="190" x2="260" y2="390"/>
    <line x1="290" y1="190" x2="290" y2="390"/>
    <line x1="320" y1="190" x2="320" y2="390"/>
    <line x1="350" y1="190" x2="350" y2="390"/>
    <line x1="380" y1="190" x2="380" y2="390"/>
    <line x1="410" y1="190" x2="410" y2="390"/>
    <line x1="440" y1="190" x2="440" y2="390"/>
    <line x1="470" y1="190" x2="470" y2="390"/>
    <line x1="500" y1="190" x2="500" y2="390"/>
    <line x1="530" y1="190" x2="530" y2="390"/>
  </g>

  <!-- Front Drive Shaft -->
  <rect x="560" y="260" width="100" height="60" fill="#94a3b8" stroke="#475569" stroke-width="2" rx="4"/>
  <rect x="600" y="250" width="20" height="15" fill="#334155" rx="2"/>

  <!-- Rear Fan Housing -->
  <ellipse cx="230" cy="290" rx="25" ry="100" fill="#0f172a" stroke="#334155" stroke-width="2"/>

  <!-- Top Terminal Box -->
  <rect x="340" y="130" width="120" height="60" fill="#1e293b" stroke="#475569" stroke-width="2" rx="6"/>
  <circle cx="430" cy="160" r="10" fill="#f59e0b"/>

  <!-- Base Feet -->
  <rect x="270" y="380" width="70" height="30" fill="#0f172a" rx="4"/>
  <rect x="460" y="380" width="70" height="30" fill="#0f172a" rx="4"/>

  <!-- Spec Label -->
  <rect x="360" y="270" width="120" height="40" fill="#0f172a" rx="4" stroke="#60a5fa"/>
  <text x="420" y="288" fill="#60a5fa" font-size="10" font-weight="800" text-anchor="middle">45kW / 60 HP</text>
  <text x="420" y="302" fill="#ffffff" font-size="8" font-weight="700" text-anchor="middle">IE3 Premium Efficiency</text>
''')

# 8. prod-006.svg - Petrol Water Pump
wrap_svg("prod-006.svg", "Heavy Petrol Engine Discharge Pump 18.5 HP", "AJ-PUMP-18HP", "120 m³/h Flow Rate • 30m Head • 4 Inch", '''
  <!-- Steel Tubular Frame -->
  <rect x="180" y="140" width="440" height="320" fill="none" stroke="#dc2626" stroke-width="16" rx="20"/>

  <!-- Petrol Engine Block (Right) -->
  <rect x="380" y="180" width="200" height="200" fill="#1e293b" stroke="#475569" stroke-width="3" rx="8"/>
  <rect x="420" y="120" width="120" height="60" fill="#dc2626" rx="6"/>
  <text x="480" y="155" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">FUEL TANK</text>

  <!-- Recoil Pull Starter -->
  <circle cx="530" cy="280" r="30" fill="#0f172a" stroke="#64748b" stroke-width="3"/>
  <circle cx="530" cy="280" r="10" fill="#dc2626"/>

  <!-- Pump Volute Casing (Left) -->
  <circle cx="280" cy="300" r="80" fill="#334155" stroke="#64748b" stroke-width="4"/>

  <!-- 4-Inch Flanges -->
  <!-- Top Discharge Flange -->
  <rect x="250" y="180" width="60" height="40" fill="#0f172a" rx="4"/>
  <circle cx="280" cy="180" r="22" fill="#dc2626"/>

  <!-- Front Suction Flange -->
  <rect x="160" y="270" width="40" height="60" fill="#0f172a" rx="4"/>
  <circle cx="160" cy="300" r="22" fill="#dc2626"/>

  <text x="280" y="305" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">4" PUMP</text>
''')

# 9. prod-007.svg - Submersible Borehole Pump
wrap_svg("prod-007.svg", "Submersible Borehole Deep-Well Water Pump 18.5kW", "AJ-SUB-18KW", "45 m³/h @ 180m Head • AISI 304 Stainless Steel", '''
  <!-- Long Stainless Steel Cylindrical Pump Body -->
  <g transform="rotate(-75 400 300)">
    <!-- Stainless Body -->
    <rect x="150" y="260" width="500" height="80" fill="url(#metalBody)" stroke="#94a3b8" stroke-width="3" rx="10"/>

    <!-- Suction Screen Mesh -->
    <rect x="380" y="260" width="60" height="80" fill="#020617" stroke="#3b82f6" stroke-width="2"/>
    <line x1="390" y1="260" x2="390" y2="340" stroke="#3b82f6" stroke-width="2"/>
    <line x1="410" y1="260" x2="410" y2="340" stroke="#3b82f6" stroke-width="2"/>
    <line x1="430" y1="260" x2="430" y2="340" stroke="#3b82f6" stroke-width="2"/>

    <!-- Multi-stage Impellers Rings -->
    <g stroke="#64748b" stroke-width="2">
      <line x1="180" y1="260" x2="180" y2="340"/>
      <line x1="210" y1="260" x2="210" y2="340"/>
      <line x1="240" y1="260" x2="240" y2="340"/>
      <line x1="270" y1="260" x2="270" y2="340"/>
      <line x1="300" y1="260" x2="300" y2="340"/>
      <line x1="330" y1="260" x2="330" y2="340"/>
      <line x1="360" y1="260" x2="360" y2="340"/>
    </g>

    <!-- Top Discharge Flange -->
    <rect x="120" y="250" width="30" height="100" fill="#0f172a" rx="4"/>
  </g>

  <!-- Spec Label Overlay -->
  <rect x="250" y="420" width="300" height="40" fill="#0f172a" rx="6" stroke="#38bdf8"/>
  <text x="400" y="444" fill="#38bdf8" font-size="12" font-weight="800" text-anchor="middle">STAINLESS STEEL 304 • 18.5kW SUBMERSIBLE</text>
''')

# 10. prod-020.svg - Ductile Iron Pipes
wrap_svg("prod-020.svg", "Ductile Iron Main Water Pipes DN400 & Gate Valves", "AJ-DIP-DN400", "DN400 (400mm) • PN16 / PN25 High Pressure", '''
  <!-- Main Blue Pipe -->
  <rect x="120" y="240" width="560" height="120" fill="url(#steelPipes)" stroke="#1d4ed8" stroke-width="3" rx="10"/>

  <!-- Spigot & Socket Flanges -->
  <rect x="100" y="220" width="40" height="160" fill="#1e3a8a" rx="6" stroke="#3b82f6" stroke-width="2"/>
  <rect x="660" y="220" width="40" height="160" fill="#1e3a8a" rx="6" stroke="#3b82f6" stroke-width="2"/>

  <!-- Resilient Seated Gate Valve Assembly Center -->
  <rect x="350" y="140" width="100" height="220" fill="#1e293b" stroke="#38bdf8" stroke-width="3" rx="8"/>
  
  <!-- Valve Stem & Handwheel Top -->
  <rect x="390" y="80" width="20" height="60" fill="#94a3b8"/>
  <ellipse cx="400" cy="80" rx="60" ry="16" fill="#dc2626" stroke="#991b1b" stroke-width="3"/>

  <!-- Internal Mortar Lining Ring Indicator -->
  <ellipse cx="120" cy="300" rx="10" ry="50" fill="#f8fafc" opacity="0.8"/>

  <text x="400" y="420" fill="#38bdf8" font-size="12" font-weight="800" text-anchor="middle">CEMENT MORTAR LINED • C25 HIGH PRESSURE</text>
''')

# 11. prod-010.svg - Drilling Rig
wrap_svg("prod-010.svg", "Hydraulic Rig Drilling Unit (200m Depth)", "AJ-RIG-200M", "200m Core Drilling • 65kW Turbo Diesel", '''
  <!-- Crawler Track Base -->
  <rect x="220" y="380" width="360" height="70" fill="#1e293b" rx="10" stroke="#475569" stroke-width="3"/>
  <circle cx="260" cy="415" r="22" fill="#0f172a"/>
  <circle cx="320" cy="415" r="22" fill="#0f172a"/>
  <circle cx="380" cy="415" r="22" fill="#0f172a"/>
  <circle cx="440" cy="415" r="22" fill="#0f172a"/>
  <circle cx="500" cy="415" r="22" fill="#0f172a"/>

  <!-- Main Rig Body -->
  <rect x="260" y="280" width="280" height="100" fill="#eab308" stroke="#ca8a04" stroke-width="3" rx="6"/>

  <!-- Vertical Drilling Mast -->
  <rect x="370" y="80" width="60" height="240" fill="#334155" stroke="#64748b" stroke-width="3"/>
  <line x1="380" y1="80" x2="420" y2="320" stroke="#94a3b8" stroke-width="2"/>
  <line x1="420" y1="80" x2="380" y2="320" stroke="#94a3b8" stroke-width="2"/>

  <!-- Rotary Drill Head -->
  <rect x="350" y="140" width="100" height="50" fill="#0f172a" rx="4" stroke="#eab308" stroke-width="2"/>
  <line x1="400" y1="190" x2="400" y2="350" stroke="#f59e0b" stroke-width="8"/>
''')

# 12. prod-011.svg - Road Roller
wrap_svg("prod-011.svg", "Heavy Twin-Drum Vibratory Road Roller Compactor (12 Ton)", "AJ-RDR-12T", "12.5 Ton • Deutz Diesel 95kW • Dual Vibration", '''
  <!-- Main Yellow Chassis -->
  <path d="M 220,320 L 580,320 L 540,220 L 380,220 Z" fill="#eab308" stroke="#ca8a04" stroke-width="3"/>

  <!-- ROPS Canopy Cab -->
  <rect x="360" y="120" width="160" height="100" fill="none" stroke="#1e293b" stroke-width="6"/>
  <rect x="360" y="110" width="170" height="15" fill="#0f172a"/>

  <!-- Heavy Steel Drums -->
  <!-- Front Drum -->
  <circle cx="240" cy="360" r="65" fill="url(#metalBody)" stroke="#475569" stroke-width="6"/>
  <!-- Rear Drum -->
  <circle cx="560" cy="360" r="65" fill="url(#metalBody)" stroke="#475569" stroke-width="6"/>
''')

# 13. prod-021.svg - Forklift
wrap_svg("prod-021.svg", "Heavy Diesel Container Handling Forklift Truck 10-Ton", "AJ-FL-10T", "10,000 kg Nominal Lift • 4.5m Duplex Mast", '''
  <!-- Main Heavy Body -->
  <rect x="220" y="260" width="260" height="120" fill="#facc15" stroke="#ca8a04" stroke-width="3" rx="12"/>

  <!-- Driver Enclosed Cab -->
  <rect x="300" y="150" width="140" height="110" fill="#0f172a" stroke="#334155" stroke-width="3" rx="6"/>
  <rect x="315" y="165" width="110" height="60" fill="#38bdf8" opacity="0.3" rx="4"/>

  <!-- Vertical Mast & Forks (Right) -->
  <rect x="490" y="100" width="24" height="280" fill="#334155" stroke="#64748b" stroke-width="2"/>
  <rect x="490" y="340" width="160" height="20" fill="#0f172a" rx="2"/>

  <!-- Heavy Dual Tires -->
  <circle cx="450" cy="380" r="50" fill="#020617" stroke="#334155" stroke-width="6"/>
  <circle cx="270" cy="380" r="40" fill="#020617" stroke="#334155" stroke-width="6"/>
''')

# 14. prod-022.svg - Compressor
wrap_svg("prod-022.svg", "Industrial Rotary Screw Stationary Air Compressor 15HP", "AJ-AIR-15HP", "500 Liter Receiver Tank • 10 Bar • Air Dryer", '''
  <!-- Horizontal 500L Steel Tank -->
  <rect x="180" y="280" width="440" height="150" fill="url(#bluePaint)" stroke="#1d4ed8" stroke-width="3" rx="75"/>

  <!-- Screw Compressor Top Enclosure -->
  <rect x="240" y="130" width="220" height="150" fill="#1e293b" stroke="#475569" stroke-width="3" rx="8"/>
  <rect x="260" y="150" width="180" height="50" fill="#0284c7" rx="4"/>
  <text x="350" y="180" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">ROTARY SCREW 15HP</text>

  <!-- Refrigerated Air Dryer Module (Right Top) -->
  <rect x="480" y="160" width="110" height="120" fill="#0f172a" stroke="#334155" stroke-width="2" rx="6"/>
  <text x="535" y="220" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">AIR DRYER</text>

  <!-- Pressure Gauge -->
  <circle cx="210" cy="240" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
  <line x1="210" y1="240" x2="222" y2="230" stroke="#ef4444" stroke-width="3"/>
''')

# 15. prod-001.svg - Fiber Cable Reel
wrap_svg("prod-001.svg", "Armored Heavy Outdoor Fiber Optic Cable", "AJ-FO-96C", "24/48/96 Core • Single Mode G.652D • Armored", '''
  <!-- Wooden Drum Cable Reel -->
  <circle cx="400" cy="270" r="160" fill="#78350f" stroke="#451a03" stroke-width="8"/>
  <circle cx="400" cy="270" r="110" fill="#0f172a"/>
  
  <!-- Coiled Black Fiber Cable -->
  <circle cx="400" cy="270" r="140" fill="none" stroke="#1e293b" stroke-width="30"/>

  <!-- Center Hub -->
  <circle cx="400" cy="270" r="40" fill="#451a03" stroke="#b45309" stroke-width="4"/>

  <!-- Peeled Fiber Core End -->
  <path d="M 520,180 Q 600,120 660,160" fill="none" stroke="#f59e0b" stroke-width="8"/>
  <circle cx="660" cy="160" r="12" fill="#38bdf8"/>
''')

# 16. prod-002.svg - ADSS Fiber
wrap_svg("prod-002.svg", "ADSS Aerial Fiber Optic Cable 120m Span", "AJ-FO-ADSS", "All-Dielectric Self-Supporting • 120m Span", '''
  <rect x="120" y="260" width="560" height="40" fill="#0f172a" stroke="#334155" stroke-width="2" rx="20"/>
  
  <!-- Multi-layer Cutaway -->
  <rect x="220" y="265" width="100" height="30" fill="#eab308" rx="4"/>
  <text x="270" y="284" fill="#0f172a" font-size="9" font-weight="900" text-anchor="middle">ARAMID YARN</text>

  <rect x="340" y="270" width="100" height="20" fill="#0284c7" rx="4"/>
  <text x="390" y="284" fill="#ffffff" font-size="9" font-weight="800" text-anchor="middle">PE TUBE</text>

  <!-- Pole Mounting Clamp -->
  <rect x="520" y="230" width="40" height="100" fill="#64748b" rx="4"/>
''')

# 17. prod-003.svg - ODF
wrap_svg("prod-003.svg", "144-Port Optical Distribution Frame (ODF)", "AJ-FO-ODF144", "19-Inch 4U Rackmount • SC/APC & LC Ports", '''
  <!-- 19-inch 4U Chassis -->
  <rect x="160" y="160" width="480" height="240" fill="#1e293b" stroke="#475569" stroke-width="4" rx="6"/>
  
  <!-- Rack Ears -->
  <rect x="120" y="160" width="40" height="240" fill="#0f172a" rx="2"/>
  <rect x="640" y="160" width="40" height="240" fill="#0f172a" rx="2"/>

  <!-- High Density Adapter Panels -->
  <g fill="#0284c7" stroke="#0369a1" stroke-width="1">
    <rect x="180" y="190" width="440" height="35" rx="3"/>
    <rect x="180" y="240" width="440" height="35" rx="3"/>
    <rect x="180" y="290" width="440" height="35" rx="3"/>
    <rect x="180" y="340" width="440" height="35" rx="3"/>
  </g>
''')

# 18. prod-023.svg - Server Chassis
wrap_svg("prod-023.svg", "Enterprise Rackmount Server Chassis Dual Xeon", "AJ-SRV-2UEX", "Dual Intel Xeon • 128GB RAM • 8x SAS Hot-Swap", '''
  <!-- 2U Chassis Front Bezel -->
  <rect x="140" y="200" width="520" height="160" fill="#0f172a" stroke="#334155" stroke-width="4" rx="6"/>
  
  <!-- 8 Hot Swap Caddies -->
  <g fill="#1e293b" stroke="#475569" stroke-width="2">
    <rect x="160" y="220" width="100" height="55" rx="4"/>
    <rect x="270" y="220" width="100" height="55" rx="4"/>
    <rect x="380" y="220" width="100" height="55" rx="4"/>
    <rect x="490" y="220" width="100" height="55" rx="4"/>

    <rect x="160" y="285" width="100" height="55" rx="4"/>
    <rect x="270" y="285" width="100" height="55" rx="4"/>
    <rect x="380" y="285" width="100" height="55" rx="4"/>
    <rect x="490" y="285" width="100" height="55" rx="4"/>
  </g>
  <!-- Activity LEDs -->
  <circle cx="250" cy="235" r="4" fill="#22c55e" filter="url(#glow)"/>
  <circle cx="360" cy="235" r="4" fill="#22c55e" filter="url(#glow)"/>
  <circle cx="470" cy="235" r="4" fill="#22c55e" filter="url(#glow)"/>
  <circle cx="580" cy="235" r="4" fill="#22c55e" filter="url(#glow)"/>
''')

# 19. prod-014.svg - Workstation PC
wrap_svg("prod-014.svg", "Institutional Workstation Tower PC i7", "AJ-PC-I7PRO", "Intel Core i7 13th Gen • 32GB RAM • 1TB SSD", '''
  <!-- Tower Chassis Left -->
  <rect x="180" y="160" width="140" height="280" fill="#0f172a" stroke="#334155" stroke-width="3" rx="10"/>
  <rect x="200" y="180" width="100" height="80" fill="#1e293b" rx="4"/>

  <!-- 24-inch IPS Monitor Right -->
  <rect x="360" y="140" width="320" height="220" fill="#0f172a" stroke="#475569" stroke-width="4" rx="8"/>
  <rect x="375" y="155" width="290" height="175" fill="#0284c7" rx="4"/>
  <text x="520" y="250" fill="#ffffff" font-size="16" font-weight="900" text-anchor="middle">WINDOWS 11 PRO</text>

  <!-- Stand -->
  <rect x="500" y="360" width="40" height="50" fill="#334155"/>
  <rect x="450" y="410" width="140" height="15" fill="#1e293b" rx="4"/>
''')

# 20. prod-015.svg - Network Switch
wrap_svg("prod-015.svg", "Enterprise Managed 48-Port Gigabit PoE+ Switch", "AJ-NET-SW48", "48-Port PoE+ • 4x 10G SFP+ Uplinks • Layer 3", '''
  <rect x="140" y="230" width="520" height="100" fill="#0f172a" stroke="#334155" stroke-width="4" rx="6"/>
  
  <!-- 48 RJ45 Ports Matrix -->
  <rect x="160" y="250" width="360" height="60" fill="#1e293b" rx="4" stroke="#475569"/>
  <g fill="#22c55e">
    <circle cx="180" cy="265" r="3"/>
    <circle cx="200" cy="265" r="3"/>
    <circle cx="220" cy="265" r="3"/>
    <circle cx="240" cy="265" r="3"/>
    <circle cx="260" cy="265" r="3"/>
    <circle cx="280" cy="265" r="3"/>
  </g>

  <!-- 4 SFP+ Optical Ports -->
  <rect x="540" y="250" width="100" height="60" fill="#0284c7" rx="4"/>
''')

# 21. prod-024.svg - Smart Touch Display
wrap_svg("prod-024.svg", "Digital Interactive Smart Touchscreen Display 86\" 4K", "AJ-DISP-86SM", "86 Inch 4K UHD • 20-Point Touch • Android/Win", '''
  <rect x="160" y="100" width="480" height="300" fill="#0f172a" stroke="#475569" stroke-width="6" rx="10"/>
  <rect x="180" y="120" width="440" height="260" fill="#0284c7" rx="4"/>
  <text x="400" y="240" fill="#ffffff" font-size="20" font-weight="900" text-anchor="middle">INTERACTIVE WHITEBOARD 4K</text>

  <!-- Mobile Cart Stand -->
  <line x1="320" y1="400" x2="280" y2="480" stroke="#334155" stroke-width="8"/>
  <line x1="480" y1="400" x2="520" y2="480" stroke="#334155" stroke-width="8"/>
  <circle cx="280" cy="485" r="12" fill="#0f172a"/>
  <circle cx="520" cy="485" r="12" fill="#0f172a"/>
''')

# 22. prod-012.svg - Executive Desk
wrap_svg("prod-012.svg", "Executive Mahogany Office Suite Assembly", "AJ-FURN-EXE", "Solid Mahogany Veneer • High-Back Leather Seating", '''
  <!-- Mahogany Desk Base -->
  <rect x="200" y="240" width="400" height="160" fill="#78350f" stroke="#451a03" stroke-width="4" rx="8"/>
  <rect x="220" y="250" width="360" height="30" fill="#451a03" rx="4"/>

  <!-- Executive Chair -->
  <rect x="350" y="140" width="100" height="120" fill="#0f172a" rx="12" stroke="#334155" stroke-width="3"/>
  <rect x="330" y="260" width="140" height="30" fill="#1e293b" rx="6"/>
''')

# 23. prod-013.svg - Fireproof Cabinet
wrap_svg("prod-013.svg", "Fireproof Heavy Steel Filing Cabinet (4-Drawer)", "AJ-FURN-ST4", "UL Class 350 1-Hour Fire Protection • Digital Keypad", '''
  <rect x="280" y="100" width="240" height="380" fill="#1e293b" stroke="#334155" stroke-width="4" rx="8"/>
  
  <g fill="#0f172a" stroke="#475569" stroke-width="2">
    <rect x="300" y="120" width="200" height="75" rx="4"/>
    <rect x="300" y="205" width="200" height="75" rx="4"/>
    <rect x="300" y="290" width="200" height="75" rx="4"/>
    <rect x="300" y="375" width="200" height="75" rx="4"/>
  </g>
''')

# 24. prod-025.svg - Ultrasound Machine
wrap_svg("prod-025.svg", "Portable Ultrasound Diagnostic System", "AJ-MED-ULTRA", "Color Doppler • 15\" LED Monitor • Probes Included", '''
  <rect x="280" y="120" width="240" height="180" fill="#0f172a" stroke="#38bdf8" stroke-width="3" rx="8"/>
  <rect x="295" y="135" width="210" height="150" fill="#0369a1" rx="4"/>
  <text x="400" y="210" fill="#ffffff" font-size="14" font-weight="900" text-anchor="middle">COLOR DOPPLER</text>

  <rect x="260" y="320" width="280" height="80" fill="#1e293b" rx="8"/>
  <circle cx="400" cy="360" r="18" fill="#cbd5e1"/>
''')

# 25. prod-017.svg - Water Quality Photometer
wrap_svg("prod-017.svg", "Precision Water Quality Testing Photometer Kit", "AJ-LAB-WATER", "Portable Photometer • USEPA Approved • 50+ Params", '''
  <!-- Rugged Yellow Case -->
  <rect x="180" y="160" width="440" height="280" fill="#eab308" stroke="#ca8a04" stroke-width="4" rx="16"/>
  <rect x="200" y="180" width="400" height="240" fill="#0f172a" rx="8"/>

  <!-- Photometer Instrument -->
  <rect x="240" y="200" width="180" height="180" fill="#1e293b" rx="8" stroke="#38bdf8"/>
  <rect x="260" y="220" width="140" height="70" fill="#0284c7" rx="4"/>
  <text x="330" y="260" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">WATER TEST 7.2 pH</text>
''')

print("All 25 SVGs generated successfully.")
