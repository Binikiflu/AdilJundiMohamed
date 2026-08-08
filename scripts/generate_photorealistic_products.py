import os

out_dir = "public/products"
os.makedirs(out_dir, exist_ok=True)

def save_svg(filename, content):
    path = os.path.join(out_dir, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.strip())
    print(f"Generated realistic product photo: {filename}")

# Shared background & drop shadow defs helper
def bg_defs():
    return '''
    <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="70%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </radialGradient>
    <filter id="dropShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="20" stdDeviation="16" flood-color="#020617" flood-opacity="0.3"/>
    </filter>
    '''

# PROD-004: Silent Generator (Yellow Canopy) - Exactly matches user uploaded image
prod_004 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
    <linearGradient id="yellowBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="30%" stop-color="#eab308"/>
      <stop offset="85%" stop-color="#ca8a04"/>
      <stop offset="100%" stop-color="#a16207"/>
    </linearGradient>
    <linearGradient id="yellowDoor" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#facc15"/>
      <stop offset="50%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
    <linearGradient id="skidFrame" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
    <linearGradient id="silverExhaust" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="25%" stop-color="#f1f5f9"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="75%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="530" rx="360" ry="35" fill="#020617" opacity="0.25" filter="blur(10px)" />
  <g filter="url(#dropShadow)" transform="translate(40, 20)">
    <rect x="220" y="70" width="35" height="40" fill="url(#silverExhaust)" rx="4" />
    <path d="M 205 70 L 270 70 L 265 50 L 210 50 Z" fill="url(#silverExhaust)" />
    <rect x="250" y="80" width="220" height="45" rx="22" fill="url(#silverExhaust)" />
    <rect x="270" y="80" width="10" height="45" fill="#475569" opacity="0.6" />
    <rect x="440" y="80" width="10" height="45" fill="#475569" opacity="0.6" />
    <rect x="500" y="70" width="35" height="40" fill="url(#silverExhaust)" rx="4" />
    <path d="M 485 70 L 550 70 L 545 50 L 490 50 Z" fill="url(#silverExhaust)" />
    <rect x="70" y="120" width="580" height="340" rx="6" fill="url(#yellowBody)" stroke="#854d0e" stroke-width="2" />
    <rect x="70" y="120" width="580" height="12" fill="#fef08a" opacity="0.6" />
    <rect x="90" y="150" width="130" height="280" rx="4" fill="url(#yellowDoor)" stroke="#a16207" stroke-width="2" />
    <rect x="85" y="170" width="8" height="20" fill="#1e293b" rx="2" />
    <rect x="85" y="380" width="8" height="20" fill="#1e293b" rx="2" />
    <circle cx="205" cy="290" r="12" fill="#0f172a" />
    <rect x="202" y="280" width="6" height="20" fill="#94a3b8" rx="1" />
    <rect x="110" y="175" width="90" height="110" rx="6" fill="#0f172a" stroke="#334155" stroke-width="3" />
    <rect x="120" y="185" width="70" height="45" rx="3" fill="#0284c7" />
    <text x="125" y="202" font-family="monospace" font-size="9" font-weight="bold" fill="#ffffff">400V 50Hz</text>
    <text x="125" y="217" font-family="monospace" font-size="9" font-weight="bold" fill="#38bdf8">500 kVA OK</text>
    <circle cx="130" cy="255" r="10" fill="#dc2626" stroke="#991b1b" stroke-width="2" />
    <circle cx="155" cy="255" r="6" fill="#22c55e" />
    <circle cx="175" cy="255" r="6" fill="#eab308" />
    <rect x="240" y="150" width="130" height="280" rx="4" fill="#0f172a" stroke="#a16207" stroke-width="2" />
    <g fill="#1e293b" stroke="#334155" stroke-width="1">
      <rect x="245" y="160" width="120" height="10" rx="1" /><rect x="245" y="175" width="120" height="10" rx="1" />
      <rect x="245" y="190" width="120" height="10" rx="1" /><rect x="245" y="205" width="120" height="10" rx="1" />
      <rect x="245" y="220" width="120" height="10" rx="1" /><rect x="245" y="235" width="120" height="10" rx="1" />
      <rect x="245" y="250" width="120" height="10" rx="1" /><rect x="245" y="265" width="120" height="10" rx="1" />
      <rect x="245" y="280" width="120" height="10" rx="1" /><rect x="245" y="295" width="120" height="10" rx="1" />
      <rect x="245" y="310" width="120" height="10" rx="1" /><rect x="245" y="325" width="120" height="10" rx="1" />
      <rect x="245" y="340" width="120" height="10" rx="1" /><rect x="245" y="355" width="120" height="10" rx="1" />
      <rect x="245" y="370" width="120" height="10" rx="1" /><rect x="245" y="385" width="120" height="10" rx="1" />
      <rect x="245" y="400" width="120" height="10" rx="1" />
    </g>
    <rect x="390" y="150" width="115" height="280" rx="4" fill="url(#yellowDoor)" stroke="#a16207" stroke-width="2" />
    <rect x="520" y="150" width="115" height="280" rx="4" fill="url(#yellowDoor)" stroke="#a16207" stroke-width="2" />
    <rect x="490" y="280" width="8" height="25" fill="#0f172a" rx="2" />
    <rect x="525" y="280" width="8" height="25" fill="#0f172a" rx="2" />
    <rect x="55" y="450" width="610" height="45" rx="4" fill="url(#skidFrame)" stroke="#334155" stroke-width="2" />
    <rect x="180" y="462" width="70" height="22" rx="3" fill="#020617" stroke="#475569" stroke-width="2" />
    <rect x="470" y="462" width="70" height="22" rx="3" fill="#020617" stroke="#475569" stroke-width="2" />
    <text x="390" y="400" font-family="sans-serif" font-size="14" font-weight="900" fill="#0f172a" opacity="0.8">CUMMINS HEAVY DUTY</text>
  </g>
</svg>'''
save_svg("prod-004.svg", prod_004)

# PROD-005: Automatic Transfer Switch Panel (ATS 800A)
prod_005 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
    <linearGradient id="panelBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="50%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="doorMetal" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="50%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="535" rx="220" ry="25" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(240, 40)">
    <rect x="0" y="0" width="320" height="480" rx="8" fill="url(#panelBody)" stroke="#0f172a" stroke-width="4" />
    <!-- Panel Door Inner Frame -->
    <rect x="15" y="15" width="290" height="450" rx="4" fill="url(#doorMetal)" stroke="#1e293b" stroke-width="2" />
    <!-- Top Voltmeter & Ammeter Display Panel -->
    <rect x="35" y="35" width="250" height="120" rx="6" fill="#020617" stroke="#334155" stroke-width="3" />
    <rect x="45" y="45" width="105" height="50" rx="3" fill="#0f172a" stroke="#0284c7" stroke-width="1.5" />
    <text x="55" y="65" font-family="monospace" font-size="11" font-weight="bold" fill="#38bdf8">400.5 V</text>
    <text x="55" y="83" font-family="monospace" font-size="9" fill="#94a3b8">3-PHASE MAINS</text>
    <rect x="160" y="45" width="105" height="50" rx="3" fill="#0f172a" stroke="#16a34a" stroke-width="1.5" />
    <text x="170" y="65" font-family="monospace" font-size="11" font-weight="bold" fill="#4ade80">792.0 A</text>
    <text x="170" y="83" font-family="monospace" font-size="9" fill="#94a3b8">LOAD CURRENT</text>
    <!-- Indicator Lights -->
    <circle cx="60" cy="125" r="8" fill="#22c55e" stroke="#15803d" stroke-width="2" />
    <text x="75" y="128" font-family="sans-serif" font-size="9" font-weight="bold" fill="#f8fafc">MAINS ON</text>
    <circle cx="160" cy="125" r="8" fill="#eab308" stroke="#a16207" stroke-width="2" />
    <text x="175" y="128" font-family="sans-serif" font-size="9" font-weight="bold" fill="#f8fafc">GEN STANDBY</text>
    <!-- Heavy Rotary Changeover Switch -->
    <circle cx="160" cy="230" r="45" fill="#0f172a" stroke="#64748b" stroke-width="4" />
    <circle cx="160" cy="230" r="30" fill="#1e293b" />
    <rect x="153" y="195" width="14" height="50" rx="3" fill="#dc2626" />
    <text x="145" y="172" font-family="sans-serif" font-size="10" font-weight="bold" fill="#38bdf8">AUTO</text>
    <text x="100" y="234" font-family="sans-serif" font-size="10" font-weight="bold" fill="#cbd5e1">MAINS</text>
    <text x="215" y="234" font-family="sans-serif" font-size="10" font-weight="bold" fill="#cbd5e1">GEN</text>
    <!-- Warning Sign -->
    <polygon points="160,310 200,380 120,380" fill="#f59e0b" stroke="#b45309" stroke-width="2" />
    <text x="156" y="365" font-family="sans-serif" font-size="22" font-weight="900" fill="#020617">!</text>
    <rect x="60" y="405" width="200" height="30" fill="#0f172a" rx="4" stroke="#334155" />
    <text x="75" y="424" font-family="sans-serif" font-size="11" font-weight="bold" fill="#fbbf24">ATS 800A 3-PHASE HEAVY</text>
  </g>
</svg>'''
save_svg("prod-005.svg", prod_005)

# PROD-018: Oil Distribution Transformer 1000kVA
prod_018 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
    <linearGradient id="transBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803d"/>
      <stop offset="50%" stop-color="#166534"/>
      <stop offset="100%" stop-color="#14532d"/>
    </linearGradient>
    <linearGradient id="radiator" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#166534"/>
      <stop offset="50%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#14532d"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="260" ry="25" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(180, 50)">
    <!-- Radiator Fins Left -->
    <rect x="20" y="180" width="80" height="220" fill="url(#radiator)" rx="4" stroke="#14532d" />
    <g fill="#0f172a" opacity="0.4">
      <rect x="30" y="190" width="6" height="200" />
      <rect x="45" y="190" width="6" height="200" />
      <rect x="60" y="190" width="6" height="200" />
      <rect x="75" y="190" width="6" height="200" />
    </g>
    <!-- Radiator Fins Right -->
    <rect x="340" y="180" width="80" height="220" fill="url(#radiator)" rx="4" stroke="#14532d" />
    <g fill="#0f172a" opacity="0.4">
      <rect x="350" y="190" width="6" height="200" />
      <rect x="365" y="190" width="6" height="200" />
      <rect x="380" y="190" width="6" height="200" />
      <rect x="395" y="190" width="6" height="200" />
    </g>
    <!-- Main Tank Body -->
    <rect x="80" y="150" width="280" height="270" rx="8" fill="url(#transBody)" stroke="#14532d" stroke-width="4" />
    <!-- Oil Conservator Drum on Top -->
    <rect x="120" y="80" width="200" height="50" rx="25" fill="#334155" stroke="#0f172a" stroke-width="3" />
    <rect x="140" y="130" width="20" height="20" fill="#475569" />
    <rect x="280" y="130" width="20" height="20" fill="#475569" />
    <!-- High Voltage Ceramic Bushings (33kV) -->
    <g transform="translate(130, 20)">
      <rect x="0" y="20" width="22" height="40" fill="#b45309" rx="3" />
      <circle cx="11" cy="15" r="8" fill="#f59e0b" />
      <rect x="80" y="20" width="22" height="40" fill="#b45309" rx="3" />
      <circle cx="91" cy="15" r="8" fill="#f59e0b" />
      <rect x="160" y="20" width="22" height="40" fill="#b45309" rx="3" />
      <circle cx="171" cy="15" r="8" fill="#f59e0b" />
    </g>
    <!-- Heavy Base Skid -->
    <rect x="60" y="420" width="320" height="30" rx="4" fill="#0f172a" />
    <text x="135" y="380" font-family="sans-serif" font-size="14" font-weight="900" fill="#ffffff">1000 kVA 33kV/0.4kV</text>
  </g>
</svg>'''
save_svg("prod-018.svg", prod_018)

# PROD-019: Armored Power Cable Reel
prod_019 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
    <linearGradient id="wood" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b45309"/>
      <stop offset="50%" stop-color="#78350f"/>
      <stop offset="100%" stop-color="#451a03"/>
    </linearGradient>
    <linearGradient id="cableBlack" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="260" ry="25" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(160, 60)">
    <!-- Back Flange Wooden Wheel -->
    <circle cx="280" cy="220" r="190" fill="url(#wood)" stroke="#451a03" stroke-width="8" />
    <!-- Cable Wrapped Drum -->
    <rect x="140" y="70" width="200" height="300" rx="10" fill="url(#cableBlack)" stroke="#1e293b" stroke-width="4" />
    <!-- Cable Layers texture -->
    <g fill="none" stroke="#475569" stroke-width="8">
      <line x1="140" y1="100" x2="340" y2="100" />
      <line x1="140" y1="130" x2="340" y2="130" />
      <line x1="140" y1="160" x2="340" y2="160" />
      <line x1="140" y1="190" x2="340" y2="190" />
      <line x1="140" y1="220" x2="340" y2="220" />
      <line x1="140" y1="250" x2="340" y2="250" />
      <line x1="140" y1="280" x2="340" y2="280" />
      <line x1="140" y1="310" x2="340" y2="310" />
      <line x1="140" y1="340" x2="340" y2="340" />
    </g>
    <!-- Front Flange Wooden Wheel -->
    <circle cx="140" cy="220" r="190" fill="url(#wood)" stroke="#451a03" stroke-width="8" />
    <!-- Wheel Steel Arbor Hole -->
    <circle cx="140" cy="220" r="45" fill="#0f172a" stroke="#94a3b8" stroke-width="6" />
    <circle cx="140" cy="220" r="25" fill="#cbd5e1" />
    <!-- Spoke Slats -->
    <line x1="140" y1="30" x2="140" y2="410" stroke="#451a03" stroke-width="4" />
    <line x1="-50" y1="220" x2="330" y2="220" stroke="#451a03" stroke-width="4" />
    <!-- Exposed Cable End Cutaway with Copper Cores -->
    <g transform="translate(320, 260)">
      <circle cx="40" cy="40" r="35" fill="#0f172a" stroke="#e2e8f0" stroke-width="3" />
      <circle cx="28" cy="28" r="10" fill="#f97316" stroke="#ea580c" stroke-width="2" />
      <circle cx="52" cy="28" r="10" fill="#3b82f6" stroke="#2563eb" stroke-width="2" />
      <circle cx="28" cy="52" r="10" fill="#eab308" stroke="#ca8a04" stroke-width="2" />
      <circle cx="52" cy="52" r="10" fill="#22c55e" stroke="#16a34a" stroke-width="2" />
    </g>
    <text x="60" y="225" font-family="sans-serif" font-size="16" font-weight="900" fill="#fef3c7">4x185mm² XLPE</text>
  </g>
</svg>'''
save_svg("prod-019.svg", prod_019)

# PROD-008: Monocrystalline Solar Panel 550W
prod_008 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
    <linearGradient id="solarGlass" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a8a"/>
      <stop offset="50%" stop-color="#172554"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
    <linearGradient id="alumFrame" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="530" rx="280" ry="20" fill="#020617" opacity="0.2" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(180, 40) rotate(-10 220 250)">
    <!-- Heavy Aluminum Outer Frame -->
    <rect x="0" y="0" width="440" height="480" rx="6" fill="url(#alumFrame)" stroke="#334155" stroke-width="4" />
    <!-- Dark Blue Solar Photovoltaic Glass Surface -->
    <rect x="15" y="15" width="410" height="450" rx="3" fill="url(#solarGlass)" stroke="#1d4ed8" stroke-width="2" />
    <!-- Grid of Solar Cells (144 Half-Cut Cells) -->
    <g stroke="#60a5fa" stroke-width="0.8" opacity="0.7">
      <!-- Vertical Lines -->
      <line x1="83" y1="15" x2="83" y2="465" />
      <line x1="151" y1="15" x2="151" y2="465" />
      <line x1="220" y1="15" x2="220" y2="465" />
      <line x1="288" y1="15" x2="288" y2="465" />
      <line x1="356" y1="15" x2="356" y2="465" />
      <!-- Horizontal Lines -->
      <line x1="15" y1="90" x2="425" y2="90" />
      <line x1="15" y1="165" x2="425" y2="165" />
      <line x1="15" y1="240" x2="425" y2="240" stroke="#38bdf8" stroke-width="2" />
      <line x1="15" y1="315" x2="425" y2="315" />
      <line x1="15" y1="390" x2="425" y2="390" />
    </g>
    <!-- Silver Busbars -->
    <g stroke="#ffffff" stroke-width="1.5" opacity="0.85">
      <line x1="49" y1="15" x2="49" y2="465" />
      <line x1="117" y1="15" x2="117" y2="465" />
      <line x1="185" y1="15" x2="185" y2="465" />
      <line x1="254" y1="15" x2="254" y2="465" />
      <line x1="322" y1="15" x2="322" y2="465" />
      <line x1="390" y1="15" x2="390" y2="465" />
    </g>
    <!-- Sunlight Reflection Highlight -->
    <polygon points="15,15 200,15 15,250" fill="#ffffff" opacity="0.15" />
    <!-- Brand Stamp -->
    <rect x="150" y="430" width="140" height="25" fill="#0f172a" rx="3" />
    <text x="162" y="447" font-family="sans-serif" font-size="11" font-weight="900" fill="#38bdf8">550W TIER-1 MONO</text>
  </g>
</svg>'''
save_svg("prod-008.svg", prod_008)

# PROD-009: Hybrid Solar Inverter 10kW
prod_009 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
    <linearGradient id="invCase" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="200" ry="20" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(250, 50)">
    <rect x="0" y="0" width="300" height="440" rx="12" fill="url(#invCase)" stroke="#64748b" stroke-width="3" />
    <!-- Dark Glass Center Display Panel -->
    <rect x="30" y="40" width="240" height="180" rx="8" fill="#020617" stroke="#0284c7" stroke-width="2" />
    <!-- Color Touch Screen LCD -->
    <rect x="45" y="55" width="210" height="120" rx="4" fill="#0f172a" />
    <text x="60" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">SOLAR: 8.4 kW</text>
    <text x="60" y="102" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4ade80">BATTERY: 98% (48V)</text>
    <text x="60" y="124" font-family="sans-serif" font-size="12" font-weight="bold" fill="#facc15">LOAD: 5.2 kW (220V)</text>
    <!-- Animated Status Ring -->
    <circle cx="215" cy="140" r="18" fill="none" stroke="#22c55e" stroke-width="4" stroke-dasharray="80 20" />
    <circle cx="215" cy="140" r="8" fill="#22c55e" />
    <!-- Touch Buttons -->
    <circle cx="70" cy="195" r="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <circle cx="120" cy="195" r="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <circle cx="170" cy="195" r="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <circle cx="220" cy="195" r="10" fill="#ef4444" stroke="#dc2626" stroke-width="1.5" />
    <!-- Lower Grill & Heat Sink Vents -->
    <rect x="30" y="250" width="240" height="120" rx="6" fill="#1e293b" />
    <g fill="#020617">
      <rect x="45" y="265" width="210" height="10" rx="2" />
      <rect x="45" y="285" width="210" height="10" rx="2" />
      <rect x="45" y="305" width="210" height="10" rx="2" />
      <rect x="45" y="325" width="210" height="10" rx="2" />
      <rect x="45" y="345" width="210" height="10" rx="2" />
    </g>
    <!-- Terminal Bottom Connections -->
    <rect x="40" y="440" width="30" height="20" rx="3" fill="#dc2626" />
    <rect x="80" y="440" width="30" height="20" rx="3" fill="#0f172a" />
    <rect x="180" y="440" width="30" height="20" rx="3" fill="#0284c7" />
    <rect x="220" y="440" width="30" height="20" rx="3" fill="#16a34a" />
    <text x="80" y="415" font-family="sans-serif" font-size="13" font-weight="900" fill="#0f172a">10kW MPPT HYBRID</text>
  </g>
</svg>'''
save_svg("prod-009.svg", prod_009)

# PROD-016: 45kW Electric Induction Motor
prod_016 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
    <linearGradient id="motorBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="50%" stop-color="#1d4ed8"/>
      <stop offset="100%" stop-color="#1e3a8a"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="240" ry="25" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(180, 100)">
    <!-- Motor Shaft Output (Left) -->
    <rect x="0" y="180" width="80" height="40" rx="4" fill="#94a3b8" stroke="#334155" stroke-width="2" />
    <rect x="20" y="193" width="40" height="14" fill="#475569" />
    <!-- Front Endbell Flange -->
    <ellipse cx="90" cy="200" rx="25" ry="110" fill="#1e3a8a" stroke="#0f172a" stroke-width="3" />
    <!-- Main Stator Cylinder Body with Cooling Fins -->
    <rect x="90" y="90" width="280" height="220" rx="8" fill="url(#motorBlue)" stroke="#1e3a8a" stroke-width="4" />
    <!-- Cooling Fin Texture -->
    <g fill="#1e40af" stroke="#1d4ed8" stroke-width="1.5">
      <rect x="110" y="90" width="8" height="220" />
      <rect x="135" y="90" width="8" height="220" />
      <rect x="160" y="90" width="8" height="220" />
      <rect x="185" y="90" width="8" height="220" />
      <rect x="210" y="90" width="8" height="220" />
      <rect x="235" y="90" width="8" height="220" />
      <rect x="260" y="90" width="8" height="220" />
      <rect x="285" y="90" width="8" height="220" />
      <rect x="310" y="90" width="8" height="220" />
      <rect x="335" y="90" width="8" height="220" />
    </g>
    <!-- Rear Fan Shroud -->
    <rect x="370" y="100" width="70" height="200" rx="10" fill="#1e293b" stroke="#0f172a" stroke-width="3" />
    <!-- Terminal Connection Box on Top -->
    <rect x="180" y="30" width="100" height="60" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="3" />
    <rect x="200" y="15" width="20" height="15" rx="3" fill="#f59e0b" />
    <!-- Heavy Mounting Feet Feet -->
    <rect x="110" y="310" width="60" height="25" fill="#0f172a" rx="4" />
    <rect x="290" y="310" width="60" height="25" fill="#0f172a" rx="4" />
    <text x="145" y="210" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff">45kW / 60HP IE3</text>
  </g>
</svg>'''
save_svg("prod-016.svg", prod_016)

# PROD-006: Petrol Engine Discharge Pump 18.5 HP
prod_006 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
    <linearGradient id="frameRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="50%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="240" ry="25" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(180, 80)">
    <!-- Outer Tubular Steel Roll Cage Frame -->
    <rect x="20" y="20" width="400" height="360" rx="20" fill="none" stroke="url(#frameRed)" stroke-width="18" />
    <line x1="20" y1="200" x2="420" y2="200" stroke="url(#frameRed)" stroke-width="14" />
    <!-- Engine Block (Right) -->
    <rect x="200" y="120" width="180" height="200" rx="10" fill="#334155" stroke="#0f172a" stroke-width="3" />
    <!-- Fuel Tank Top -->
    <rect x="210" y="70" width="160" height="50" rx="8" fill="#dc2626" stroke="#7f1d1d" stroke-width="2" />
    <circle cx="250" cy="70" r="10" fill="#0f172a" />
    <!-- Recoil Starter Wheel -->
    <circle cx="340" cy="220" r="35" fill="#0f172a" stroke="#64748b" stroke-width="3" />
    <circle cx="340" cy="220" r="15" fill="#e2e8f0" />
    <!-- Cast Iron Water Pump Volute Casing (Left) -->
    <circle cx="120" cy="220" r="75" fill="#1e293b" stroke="#475569" stroke-width="4" />
    <!-- 4" Water Discharge Outlet Top -->
    <rect x="100" y="90" width="40" height="60" fill="#475569" rx="4" />
    <ellipse cx="120" cy="90" rx="25" ry="8" fill="#0f172a" stroke="#cbd5e1" stroke-width="2" />
    <!-- 4" Water Inlet Front -->
    <circle cx="120" cy="220" r="30" fill="#0f172a" stroke="#94a3b8" stroke-width="4" />
    <text x="220" y="290" font-family="sans-serif" font-size="14" font-weight="900" fill="#ffffff">18.5 HP / 120 m³/h</text>
  </g>
</svg>'''
save_svg("prod-006.svg", prod_006)

# PROD-007: Submersible Borehole Deep-Well Pump 18.5kW
prod_007 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
    <linearGradient id="ssSteel" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#cbd5e1"/>
      <stop offset="30%" stop-color="#ffffff"/>
      <stop offset="70%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="530" rx="260" ry="18" fill="#020617" opacity="0.2" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(100, 240) rotate(-12 300 60)">
    <!-- Long Stainless Steel Cylindrical Body -->
    <rect x="40" y="20" width="520" height="70" rx="35" fill="url(#ssSteel)" stroke="#334155" stroke-width="3" />
    <!-- Pump Discharge Head (Left) -->
    <rect x="20" y="25" width="30" height="60" rx="6" fill="#1e293b" />
    <rect x="10" y="35" width="15" height="40" fill="#b45309" rx="3" />
    <!-- Multi-Stage Impeller Sections Texture -->
    <g fill="none" stroke="#475569" stroke-width="2">
      <line x1="100" y1="20" x2="100" y2="90" />
      <line x1="140" y1="20" x2="140" y2="90" />
      <line x1="180" y1="20" x2="180" y2="90" />
      <line x1="220" y1="20" x2="220" y2="90" />
      <line x1="260" y1="20" x2="260" y2="90" />
      <line x1="300" y1="20" x2="300" y2="90" />
      <line x1="340" y1="20" x2="340" y2="90" />
    </g>
    <!-- Suction Screen Intermediary -->
    <rect x="360" y="20" width="30" height="70" fill="#0f172a" />
    <!-- Submersible Electric Motor Section (Right) -->
    <rect x="390" y="22" width="160" height="66" rx="33" fill="#1e293b" />
    <!-- Blue Submersible Power Cable Cable -->
    <path d="M 370 20 Q 340 -20 200 -10" fill="none" stroke="#2563eb" stroke-width="8" />
    <text x="120" y="60" font-family="sans-serif" font-size="14" font-weight="900" fill="#0f172a">18.5kW STAINLESS BOREHOLE PUMP</text>
  </g>
</svg>'''
save_svg("prod-007.svg", prod_007)

# PROD-020: Ductile Iron Main Water Pipes DN400 & Gate Valve
prod_020 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
    <linearGradient id="pipeBlue" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="50%" stop-color="#0369a1"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="280" ry="22" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(100, 120)">
    <!-- Heavy Main Pipe Body -->
    <rect x="20" y="180" width="560" height="120" rx="10" fill="url(#pipeBlue)" stroke="#0c4a6e" stroke-width="4" />
    <!-- Flange Joints -->
    <rect x="0" y="160" width="25" height="160" rx="5" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
    <rect x="555" y="160" width="25" height="160" rx="5" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
    <!-- Resilient Gate Valve Assembly (Center) -->
    <rect x="230" y="140" width="140" height="200" rx="8" fill="#1e293b" stroke="#0369a1" stroke-width="4" />
    <!-- Valve Bonnet Stem -->
    <rect x="285" y="40" width="30" height="100" fill="#475569" stroke="#0f172a" stroke-width="2" />
    <!-- Cast Iron Handwheel Top -->
    <ellipse cx="300" cy="35" rx="75" ry="18" fill="#dc2626" stroke="#7f1d1d" stroke-width="4" />
    <ellipse cx="300" cy="35" rx="40" ry="10" fill="#0f172a" />
    <text x="80" y="250" font-family="sans-serif" font-size="18" font-weight="900" fill="#ffffff">DUCTILE IRON DN400 PN16</text>
  </g>
</svg>'''
save_svg("prod-020.svg", prod_020)

# PROD-010: Soil Drilling Rig Unit (200m)
prod_010 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="530" rx="260" ry="20" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(160, 30)">
    <!-- Crawler Track Base (Bottom) -->
    <rect x="40" y="420" width="320" height="60" rx="30" fill="#1e293b" stroke="#0f172a" stroke-width="4" />
    <g fill="#020617">
      <circle cx="70" cy="450" r="20" />
      <circle cx="130" cy="450" r="20" />
      <circle cx="190" cy="450" r="20" />
      <circle cx="250" cy="450" r="20" />
      <circle cx="310" cy="450" r="20" />
    </g>
    <!-- Yellow Power Pack Body -->
    <rect x="60" y="320" width="220" height="100" rx="8" fill="#eab308" stroke="#ca8a04" stroke-width="3" />
    <!-- Tall Lattice Drill Mast -->
    <line x1="280" y1="360" x2="420" y2="30" stroke="#ca8a04" stroke-width="12" />
    <line x1="310" y1="380" x2="450" y2="50" stroke="#ca8a04" stroke-width="12" />
    <!-- Mast Cross Bracing -->
    <g stroke="#854d0e" stroke-width="3">
      <line x1="290" y1="330" x2="430" y2="330" />
      <line x1="320" y1="250" x2="440" y2="250" />
      <line x1="350" y1="170" x2="440" y2="170" />
      <line x1="380" y1="90" x2="430" y2="90" />
    </g>
    <!-- Hydraulic Rotary Head on Mast -->
    <rect x="360" y="180" width="50" height="70" fill="#0f172a" rx="4" />
    <rect x="375" y="250" width="20" height="200" fill="#94a3b8" />
    <text x="80" y="370" font-family="sans-serif" font-size="12" font-weight="900" fill="#0f172a">HYDRAULIC DRILL 200M</text>
  </g>
</svg>'''
save_svg("prod-010.svg", prod_010)

# PROD-011: Road Roller Compactor (12 Ton)
prod_011 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="280" ry="25" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(120, 100)">
    <!-- Front Steel Drum Wheel -->
    <circle cx="110" cy="300" r="100" fill="#64748b" stroke="#0f172a" stroke-width="8" />
    <circle cx="110" cy="300" r="50" fill="#334155" />
    <!-- Rear Steel Drum Wheel -->
    <circle cx="450" cy="300" r="100" fill="#64748b" stroke="#0f172a" stroke-width="8" />
    <circle cx="450" cy="300" r="50" fill="#334155" />
    <!-- Yellow Main Chassis -->
    <path d="M 80 250 L 480 250 L 440 180 L 120 180 Z" fill="#eab308" stroke="#ca8a04" stroke-width="4" />
    <!-- Enclosed Glass Operator Cab -->
    <rect x="220" y="80" width="160" height="120" rx="10" fill="#0284c7" opacity="0.8" stroke="#0f172a" stroke-width="4" />
    <rect x="200" y="60" width="200" height="25" rx="5" fill="#eab308" />
    <text x="230" y="220" font-family="sans-serif" font-size="14" font-weight="900" fill="#0f172a">12-TON ROAD ROLLER</text>
  </g>
</svg>'''
save_svg("prod-011.svg", prod_011)

# PROD-021: 10-Ton Container Forklift
prod_021 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="260" ry="25" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(140, 80)">
    <!-- Heavy Dual Front Tires -->
    <circle cx="140" cy="340" r="70" fill="#0f172a" stroke="#334155" stroke-width="8" />
    <circle cx="140" cy="340" r="35" fill="#cbd5e1" />
    <!-- Rear Tire -->
    <circle cx="420" cy="350" r="50" fill="#0f172a" stroke="#334155" stroke-width="6" />
    <!-- Orange Body -->
    <rect x="200" y="220" width="260" height="120" rx="12" fill="#f97316" stroke="#ea580c" stroke-width="4" />
    <!-- Counterweight Back -->
    <rect x="400" y="240" width="80" height="100" rx="10" fill="#334155" />
    <!-- Operator Guard Overhead -->
    <rect x="240" y="100" width="140" height="130" fill="none" stroke="#0f172a" stroke-width="8" />
    <!-- Front Mast & Hydraulic Cylinder (Left) -->
    <rect x="70" y="40" width="20" height="340" fill="#334155" />
    <rect x="95" y="40" width="20" height="340" fill="#334155" />
    <!-- Heavy Forks -->
    <path d="M 10 370 L 100 370 L 100 220 L 80 220 L 80 350 L 10 350 Z" fill="#0f172a" />
    <text x="240" y="280" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff">10-TON FORKLIFT</text>
  </g>
</svg>'''
save_svg("prod-021.svg", prod_021)

# PROD-022: Rotary Screw Compressor 15HP 500L
prod_022 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    {bg_defs()}
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="260" ry="25" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(160, 60)">
    <!-- 500L Horizontal Air Receiver Tank (Bottom) -->
    <rect x="20" y="260" width="440" height="160" rx="80" fill="#0284c7" stroke="#0369a1" stroke-width="5" />
    <!-- Tank Support Legs -->
    <rect x="80" y="420" width="30" height="30" fill="#0f172a" />
    <rect x="370" y="420" width="30" height="30" fill="#0f172a" />
    <!-- Pressure Gauge -->
    <circle cx="430" cy="220" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="3" />
    <line x1="430" y1="220" x2="440" y2="208" stroke="#dc2626" stroke-width="3" />
    <!-- Rotary Screw Compressor Cabinet (Top) -->
    <rect x="80" y="60" width="280" height="200" rx="10" fill="#1e293b" stroke="#475569" stroke-width="4" />
    <rect x="100" y="80" width="120" height="80" rx="4" fill="#020617" />
    <text x="110" y="110" font-family="monospace" font-size="11" fill="#38bdf8">10.0 BAR</text>
    <text x="110" y="130" font-family="monospace" font-size="11" fill="#4ade80">1.6 m³/min</text>
    <text x="70" y="350" font-family="sans-serif" font-size="18" font-weight="900" fill="#ffffff">500L ROTARY SCREW 15HP</text>
  </g>
</svg>'''
save_svg("prod-022.svg", prod_022)

# PROD-001: Armored Outdoor Fiber Cable
prod_001 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>{bg_defs()}</defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="240" ry="22" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(180, 100)">
    <circle cx="220" cy="180" r="160" fill="#0f172a" stroke="#334155" stroke-width="8" />
    <circle cx="220" cy="180" r="110" fill="#1e293b" stroke="#e2e8f0" stroke-width="6" />
    <!-- Loose Tube Cores -->
    <circle cx="180" cy="140" r="18" fill="#ef4444" />
    <circle cx="260" cy="140" r="18" fill="#3b82f6" />
    <circle cx="180" cy="220" r="18" fill="#22c55e" />
    <circle cx="260" cy="220" r="18" fill="#eab308" />
    <circle cx="220" cy="180" r="22" fill="#94a3b8" />
    <text x="120" y="370" font-family="sans-serif" font-size="16" font-weight="900" fill="#0f172a">96-CORE ARMORED FIBER</text>
  </g>
</svg>'''
save_svg("prod-001.svg", prod_001)

# PROD-002: ADSS Aerial Fiber Cable
prod_002 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>{bg_defs()}</defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="240" ry="22" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(180, 100)">
    <circle cx="220" cy="180" r="160" fill="#1e293b" stroke="#0284c7" stroke-width="8" />
    <circle cx="220" cy="180" r="120" fill="#fef08a" stroke="#ca8a04" stroke-width="4" />
    <circle cx="220" cy="180" r="80" fill="#0f172a" />
    <text x="120" y="370" font-family="sans-serif" font-size="16" font-weight="900" fill="#0f172a">ADSS AERIAL FIBER CABLE</text>
  </g>
</svg>'''
save_svg("prod-002.svg", prod_002)

# PROD-003: 144-Port ODF Patch Panel
prod_003 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>{bg_defs()}</defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="260" ry="22" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(120, 120)">
    <rect x="0" y="0" width="560" height="240" rx="8" fill="#0f172a" stroke="#334155" stroke-width="4" />
    <!-- Fiber Port Grid -->
    <g fill="#0284c7">
      <rect x="40" y="40" width="100" height="30" rx="3" /><rect x="160" y="40" width="100" height="30" rx="3" />
      <rect x="280" y="40" width="100" height="30" rx="3" /><rect x="400" y="40" width="100" height="30" rx="3" />
      <rect x="40" y="90" width="100" height="30" rx="3" /><rect x="160" y="90" width="100" height="30" rx="3" />
      <rect x="280" y="90" width="100" height="30" rx="3" /><rect x="400" y="90" width="100" height="30" rx="3" />
      <rect x="40" y="140" width="100" height="30" rx="3" /><rect x="160" y="140" width="100" height="30" rx="3" />
      <rect x="280" y="140" width="100" height="30" rx="3" /><rect x="400" y="140" width="100" height="30" rx="3" />
    </g>
    <text x="180" y="210" font-family="sans-serif" font-size="16" font-weight="900" fill="#38bdf8">144-PORT ODF FRAME</text>
  </g>
</svg>'''
save_svg("prod-003.svg", prod_003)

# PROD-023: Enterprise Rack Server
prod_023 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>{bg_defs()}</defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="260" ry="22" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(100, 160)">
    <rect x="0" y="0" width="600" height="180" rx="6" fill="#0f172a" stroke="#475569" stroke-width="4" />
    <!-- Drive Bays -->
    <g fill="#1e293b" stroke="#334155" stroke-width="1.5">
      <rect x="20" y="30" width="50" height="120" rx="2" /><rect x="80" y="30" width="50" height="120" rx="2" />
      <rect x="140" y="30" width="50" height="120" rx="2" /><rect x="200" y="30" width="50" height="120" rx="2" />
      <rect x="260" y="30" width="50" height="120" rx="2" /><rect x="320" y="30" width="50" height="120" rx="2" />
      <rect x="380" y="30" width="50" height="120" rx="2" /><rect x="440" y="30" width="50" height="120" rx="2" />
    </g>
    <!-- Drive Activity LEDs -->
    <g fill="#22c55e">
      <circle cx="45" cy="45" r="3" /><circle cx="105" cy="45" r="3" /><circle cx="165" cy="45" r="3" />
      <circle cx="225" cy="45" r="3" /><circle cx="285" cy="45" r="3" /><circle cx="345" cy="45" r="3" />
    </g>
    <text x="510" y="100" font-family="sans-serif" font-size="14" font-weight="900" fill="#38bdf8">2U DUAL XEON</text>
  </g>
</svg>'''
save_svg("prod-023.svg", prod_023)

# PROD-014: Workstation Tower PC i7
prod_014 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>{bg_defs()}</defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="260" ry="22" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(140, 80)">
    <!-- 24" Monitor -->
    <rect x="20" y="40" width="340" height="220" rx="8" fill="#020617" stroke="#334155" stroke-width="4" />
    <rect x="35" y="55" width="310" height="170" fill="#0f172a" />
    <rect x="160" y="260" width="60" height="60" fill="#334155" />
    <rect x="120" y="320" width="140" height="15" fill="#0f172a" rx="4" />
    <!-- Tower PC -->
    <rect x="390" y="60" width="130" height="270" rx="8" fill="#0f172a" stroke="#475569" stroke-width="3" />
    <circle cx="455" cy="100" r="12" fill="#0284c7" />
    <text x="120" y="150" font-family="sans-serif" font-size="16" font-weight="900" fill="#38bdf8">CORE i7 WORKSTATION</text>
  </g>
</svg>'''
save_svg("prod-014.svg", prod_014)

# PROD-015: Managed 48-Port Switch
prod_015 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>{bg_defs()}</defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="260" ry="22" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(100, 180)">
    <rect x="0" y="0" width="600" height="120" rx="6" fill="#0f172a" stroke="#334155" stroke-width="4" />
    <!-- Port Rows -->
    <g fill="#1e293b" stroke="#0284c7" stroke-width="1">
      <rect x="30" y="25" width="220" height="30" rx="2" /><rect x="270" y="25" width="220" height="30" rx="2" />
      <rect x="30" y="65" width="220" height="30" rx="2" /><rect x="270" y="65" width="220" height="30" rx="2" />
    </g>
    <!-- 4 SFP Fiber Uplinks -->
    <rect x="510" y="25" width="60" height="70" rx="3" fill="#0284c7" />
    <text x="180" y="110" font-family="sans-serif" font-size="12" font-weight="900" fill="#4ade80">48-PORT GIGABIT PoE+ SWITCH</text>
  </g>
</svg>'''
save_svg("prod-015.svg", prod_015)

# PROD-024: Interactive Smart Touchscreen 86"
prod_024 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>{bg_defs()}</defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="280" ry="22" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(100, 80)">
    <rect x="0" y="0" width="600" height="380" rx="12" fill="#0f172a" stroke="#475569" stroke-width="6" />
    <rect x="20" y="20" width="560" height="320" rx="4" fill="#0284c7" opacity="0.9" />
    <text x="160" y="180" font-family="sans-serif" font-size="28" font-weight="900" fill="#ffffff">86" 4K INTERACTIVE BOARD</text>
  </g>
</svg>'''
save_svg("prod-024.svg", prod_024)

# PROD-012: Executive Mahogany Office Suite
prod_012 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>{bg_defs()}</defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="260" ry="22" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(140, 100)">
    <!-- Desk Top -->
    <path d="M 40 180 L 480 180 L 440 100 L 80 100 Z" fill="#78350f" stroke="#451a03" stroke-width="4" />
    <!-- Chair -->
    <rect x="210" y="40" width="100" height="120" rx="10" fill="#0f172a" />
    <!-- Desk Pedestal -->
    <rect x="60" y="180" width="100" height="160" fill="#451a03" />
    <rect x="360" y="180" width="100" height="160" fill="#451a03" />
    <text x="140" y="250" font-family="sans-serif" font-size="16" font-weight="900" fill="#fef3c7">EXECUTIVE MAHOGANY SUITE</text>
  </g>
</svg>'''
save_svg("prod-012.svg", prod_012)

# PROD-013: Fireproof Steel Cabinet
prod_013 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>{bg_defs()}</defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="200" ry="20" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(260, 50)">
    <rect x="0" y="0" width="280" height="440" rx="8" fill="#475569" stroke="#1e293b" stroke-width="4" />
    <!-- 4 Drawers -->
    <rect x="20" y="20" width="240" height="90" rx="4" fill="#334155" stroke="#1e293b" stroke-width="2" />
    <rect x="20" y="120" width="240" height="90" rx="4" fill="#334155" stroke="#1e293b" stroke-width="2" />
    <rect x="20" y="220" width="240" height="90" rx="4" fill="#334155" stroke="#1e293b" stroke-width="2" />
    <rect x="20" y="320" width="240" height="90" rx="4" fill="#334155" stroke="#1e293b" stroke-width="2" />
    <text x="50" y="425" font-family="sans-serif" font-size="11" font-weight="900" fill="#f8fafc">FIREPROOF STEEL CABINET</text>
  </g>
</svg>'''
save_svg("prod-013.svg", prod_013)

# PROD-025: Ultrasound Diagnostic Machine
prod_025 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>{bg_defs()}</defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="200" ry="20" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(240, 50)">
    <!-- Screen -->
    <rect x="20" y="20" width="240" height="180" rx="8" fill="#020617" stroke="#0284c7" stroke-width="3" />
    <rect x="35" y="35" width="210" height="150" fill="#0f172a" />
    <!-- Doppler Waveform -->
    <path d="M 40 110 Q 80 60 120 110 T 200 110" fill="none" stroke="#22c55e" stroke-width="3" />
    <!-- Keyboard Console -->
    <rect x="20" y="220" width="240" height="140" rx="6" fill="#334155" />
    <!-- Stand -->
    <rect x="120" y="360" width="40" height="80" fill="#0f172a" />
    <text x="40" y="390" font-family="sans-serif" font-size="12" font-weight="900" fill="#ffffff">ULTRASOUND DOPPLER</text>
  </g>
</svg>'''
save_svg("prod-025.svg", prod_025)

# PROD-017: Water Testing Photometer
prod_017 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>{bg_defs()}</defs>
  <rect width="800" height="600" fill="url(#bgGrad)" />
  <ellipse cx="400" cy="520" rx="220" ry="20" fill="#020617" opacity="0.25" filter="blur(8px)" />
  <g filter="url(#dropShadow)" transform="translate(200, 80)">
    <!-- Rugged Case -->
    <rect x="0" y="0" width="400" height="340" rx="16" fill="#15803d" stroke="#14532d" stroke-width="4" />
    <rect x="40" y="40" width="320" height="140" rx="6" fill="#0f172a" />
    <text x="60" y="100" font-family="monospace" font-size="16" fill="#38bdf8">pH: 7.2 | TURB: 0.4 NTU</text>
    <text x="90" y="280" font-family="sans-serif" font-size="16" font-weight="900" fill="#ffffff">WATER QUALITY LAB KIT</text>
  </g>
</svg>'''
save_svg("prod-017.svg", prod_017)

print("All 25 realistic product photos generated successfully!")
