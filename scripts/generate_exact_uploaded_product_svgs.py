import os

svg_dir = "public/products"
os.makedirs(svg_dir, exist_ok=True)

def save_svg(filename, content):
    path = os.path.join(svg_dir, filename)
    with open(path, "w") as f:
        f.write(content.strip())
    print(f"Saved {filename}")

bg_defs = '''<defs>
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="75%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="70%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="12" flood-color="#020617" flood-opacity="0.25"/>
    </filter>
  </defs>'''

# 1. prod-001: ADSS Aerial Fiber Cable
save_svg("prod-001.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(80, 100)">
    <path d="M 20 380 L 260 220 Q 290 200 320 180 L 420 100" fill="none" stroke="#0f172a" stroke-width="52" stroke-linecap="round"/>
    <path d="M 30 375 L 250 220" fill="none" id="textPath1"/>
    <text font-family="monospace" font-size="13" font-weight="900" fill="#ffffff" letter-spacing="3">
      <textPath href="#textPath1" startOffset="10">EFON ADSS FIBER OPTIC CABLE</textPath>
    </text>
    <path d="M 220 250 L 320 180" fill="none" stroke="#eab308" stroke-width="38" stroke-linecap="round"/>
    <path d="M 300 195 L 360 145" fill="none" stroke="#94a3b8" stroke-width="22" stroke-linecap="round"/>
    <circle cx="350" cy="152" r="5" fill="#ef4444"/>
    <circle cx="360" cy="144" r="5" fill="#3b82f6"/>
    <circle cx="354" cy="160" r="5" fill="#22c55e"/>
    <circle cx="366" cy="152" r="5" fill="#eab308"/>
    <circle cx="370" cy="138" r="4" fill="#a855f7"/>
  </g>
  <g filter="url(#shadow)" transform="translate(420, 160)">
    <ellipse cx="200" cy="180" rx="150" ry="150" fill="#a16207" stroke="#78350f" stroke-width="6"/>
    <path d="M 50 180 L 350 180 M 200 30 L 200 330 M 94 74 L 306 286 M 94 286 L 306 74" fill="none" stroke="#78350f" stroke-width="3"/>
    <circle cx="200" cy="180" r="110" fill="#020617"/>
    <circle cx="200" cy="180" r="105" fill="#0f172a" stroke="#1e293b" stroke-width="4" stroke-dasharray="8,4"/>
    <circle cx="200" cy="180" r="35" fill="#475569" stroke="#1e293b" stroke-width="4"/>
    <circle cx="200" cy="180" r="16" fill="#020617"/>
  </g>
</svg>''')

# 2. prod-002: ODF Box (Yoohon)
save_svg("prod-002.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(180, 80)">
    <path d="M 50 80 L 380 20 L 420 180 L 90 240 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="3"/>
    <path d="M 90 240 L 420 180 L 420 400 L 90 460 Z" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="3"/>
    <path d="M 50 80 L 90 240 L 90 460 L 50 300 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3"/>
    <text x="210" y="70" font-family="sans-serif" font-size="22" font-weight="900" fill="#ef4444" transform="rotate(-10 210 70)">Yoohon ዮሆን</text>
    <path d="M 90 460 L 420 400 L 460 520 L 130 580 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3"/>
    <g transform="translate(120, 210)">
      <path d="M 0 0 L 260 -40 L 270 -20 L 10 20 Z" fill="#10b981" stroke="#059669"/>
      <path d="M 0 20 L 260 -20 L 270 0 L 10 40 Z" fill="#059669" stroke="#047857"/>
      <path d="M 0 40 L 260 0 L 270 20 L 10 60 Z" fill="#10b981" stroke="#059669"/>
      <path d="M 0 60 L 260 20 L 270 40 L 10 80 Z" fill="#059669" stroke="#047857"/>
      <path d="M 0 80 L 260 40 L 270 60 L 10 100 Z" fill="#10b981" stroke="#059669"/>
      <path d="M 0 100 L 260 60 L 270 80 L 10 120 Z" fill="#059669" stroke="#047857"/>
      <circle cx="30" cy="15" r="4" fill="#ef4444"/><circle cx="50" cy="12" r="4" fill="#ef4444"/>
      <circle cx="70" cy="9" r="4" fill="#ef4444"/><circle cx="90" cy="6" r="4" fill="#ef4444"/>
    </g>
  </g>
</svg>''')

# 3. prod-003: Dell Rack Server Stack
save_svg("prod-003.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(50, 90)">
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="700" height="70" rx="4" fill="#1e293b" stroke="#475569" stroke-width="2"/>
      <rect x="20" y="10" width="660" height="50" rx="2" fill="#0f172a"/>
      <rect x="30" y="20" width="120" height="30" fill="#94a3b8" rx="2"/>
      <text x="50" y="40" font-family="sans-serif" font-size="14" font-weight="900" fill="#020617">DELL</text>
      <g transform="translate(170, 20)">
        <rect x="0" y="0" width="30" height="30" fill="#334155" stroke="#64748b"/>
        <rect x="35" y="0" width="30" height="30" fill="#334155" stroke="#64748b"/>
        <rect x="70" y="0" width="30" height="30" fill="#334155" stroke="#64748b"/>
        <circle cx="150" cy="15" r="4" fill="#22c55e"/>
      </g>
    </g>
    <g transform="translate(0, 85)">
      <rect x="0" y="0" width="700" height="90" rx="4" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <g transform="translate(30, 15)">
        <rect x="0" y="0" width="50" height="60" fill="#1e293b" stroke="#475569"/>
        <rect x="60" y="0" width="50" height="60" fill="#1e293b" stroke="#475569"/>
        <rect x="120" y="0" width="50" height="60" fill="#1e293b" stroke="#475569"/>
        <rect x="180" y="0" width="50" height="60" fill="#1e293b" stroke="#475569"/>
        <rect x="240" y="0" width="50" height="60" fill="#1e293b" stroke="#475569"/>
        <rect x="300" y="0" width="50" height="60" fill="#1e293b" stroke="#475569"/>
      </g>
      <circle cx="540" cy="45" r="5" fill="#22c55e"/>
      <text x="560" y="50" font-family="sans-serif" font-size="12" font-weight="900" fill="#cbd5e1">PowerEdge R750</text>
    </g>
    <g transform="translate(0, 190)">
      <rect x="0" y="0" width="700" height="90" rx="4" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <g transform="translate(30, 15)">
        <rect x="0" y="0" width="50" height="60" fill="#1e293b" stroke="#475569"/>
        <rect x="60" y="0" width="50" height="60" fill="#1e293b" stroke="#475569"/>
        <rect x="120" y="0" width="50" height="60" fill="#1e293b" stroke="#475569"/>
        <rect x="180" y="0" width="50" height="60" fill="#1e293b" stroke="#475569"/>
      </g>
    </g>
    <g transform="translate(0, 295)">
      <rect x="0" y="0" width="700" height="80" rx="4" fill="#1e293b" stroke="#475569" stroke-width="2"/>
      <circle cx="620" cy="40" r="16" fill="#ef4444"/>
      <circle cx="560" cy="40" r="16" fill="#3b82f6"/>
    </g>
  </g>
</svg>''')

# 4. prod-004: Yellow Silent Diesel Generator
save_svg("prod-004.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(80, 110)">
    <rect x="30" y="340" width="620" height="50" rx="6" fill="#0f172a" stroke="#020617" stroke-width="4"/>
    <rect x="20" y="70" width="640" height="270" rx="8" fill="#f59e0b" stroke="#d97706" stroke-width="4"/>
    <rect x="340" y="10" width="220" height="50" rx="25" fill="#94a3b8" stroke="#475569" stroke-width="3"/>
    <path d="M 320 35 L 340 35 M 560 35 L 590 35 L 590 -10" fill="none" stroke="#64748b" stroke-width="12" stroke-linecap="round"/>
    <rect x="240" y="110" width="100" height="200" fill="#d97706" rx="4"/>
    <g fill="#78350f">
      <rect x="245" y="120" width="90" height="6" rx="2"/><rect x="245" y="135" width="90" height="6" rx="2"/>
      <rect x="245" y="150" width="90" height="6" rx="2"/><rect x="245" y="165" width="90" height="6" rx="2"/>
      <rect x="245" y="180" width="90" height="6" rx="2"/><rect x="245" y="195" width="90" height="6" rx="2"/>
      <rect x="245" y="210" width="90" height="6" rx="2"/><rect x="245" y="225" width="90" height="6" rx="2"/>
    </g>
    <rect x="360" y="110" width="90" height="200" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
    <rect x="460" y="110" width="90" height="200" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
    <rect x="560" y="110" width="90" height="200" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
    <rect x="80" y="120" width="80" height="100" rx="6" fill="#0f172a" stroke="#1e293b" stroke-width="3"/>
    <rect x="90" y="130" width="60" height="40" rx="3" fill="#0284c7"/>
    <text x="95" y="155" font-family="monospace" font-size="11" font-weight="bold" fill="#ffffff">400V 50Hz</text>
  </g>
</svg>''')

# 5. prod-005: Automatic Transfer Switch ATS Panel Box
save_svg("prod-005.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(150, 50)">
    <!-- Enclosure Cabinet Box -->
    <rect x="50" y="20" width="450" height="500" rx="8" fill="#e2e8f0" stroke="#64748b" stroke-width="4"/>
    <rect x="70" y="40" width="410" height="460" fill="#cbd5e1"/>
    <!-- Open Door Left -->
    <path d="M 50 20 L -30 60 L -30 520 L 50 520 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="3"/>
    <!-- ATS Controller Module inside -->
    <rect x="120" y="80" width="220" height="120" rx="6" fill="#0f172a" stroke="#334155" stroke-width="3"/>
    <rect x="140" y="100" width="180" height="50" fill="#0284c7"/>
    <text x="150" y="130" font-family="monospace" font-size="14" font-weight="900" fill="#ffffff">ATS 800A 3-PHASE</text>
    <!-- Circuit Breakers & Terminal Blocks -->
    <rect x="100" y="230" width="350" height="80" fill="#94a3b8" rx="4"/>
    <rect x="120" y="240" width="40" height="60" fill="#020617"/>
    <rect x="180" y="240" width="40" height="60" fill="#020617"/>
    <rect x="240" y="240" width="40" height="60" fill="#020617"/>
    <rect x="300" y="240" width="40" height="60" fill="#020617"/>
    <!-- Cables & Wiring Trunking -->
    <rect x="100" y="330" width="350" height="140" fill="#64748b" rx="4"/>
    <path d="M 140 330 L 140 470 M 200 330 L 200 470 M 260 330 L 260 470 M 320 330 L 320 470" stroke="#ef4444" stroke-width="8"/>
  </g>
</svg>''')

# 6. prod-006: Submersible Pumps (Stainless Steel)
save_svg("prod-006.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(180, 50)">
    <!-- 3 Cylindrical Submersible Pumps standing -->
    <!-- Pump 1 (Left 2") -->
    <g transform="translate(0, 100)">
      <rect x="20" y="0" width="50" height="380" rx="25" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3"/>
      <rect x="30" y="-20" width="30" height="20" fill="#eab308" rx="4"/>
      <line x1="20" y1="100" x2="70" y2="100" stroke="#64748b" stroke-width="2"/>
      <line x1="20" y1="200" x2="70" y2="200" stroke="#64748b" stroke-width="2"/>
      <text x="-250" y="48" font-family="monospace" font-size="11" font-weight="900" fill="#0f172a" transform="rotate(-90)">STAINLESS STEEL 2"</text>
    </g>

    <!-- Pump 2 (Center 3.5") -->
    <g transform="translate(140, 50)">
      <rect x="20" y="0" width="70" height="430" rx="35" fill="#f1f5f9" stroke="#94a3b8" stroke-width="4"/>
      <rect x="35" y="-25" width="40" height="25" fill="#eab308" rx="4"/>
      <line x1="20" y1="120" x2="90" y2="120" stroke="#64748b" stroke-width="3"/>
      <line x1="20" y1="240" x2="90" y2="240" stroke="#64748b" stroke-width="3"/>
      <text x="-300" y="60" font-family="monospace" font-size="13" font-weight="900" fill="#0f172a" transform="rotate(-90)">DEEP WELL TURBINE 3.5"</text>
    </g>

    <!-- Pump 3 (Right 4") -->
    <g transform="translate(290, 0)">
      <rect x="20" y="0" width="90" height="480" rx="45" fill="#e2e8f0" stroke="#64748b" stroke-width="4"/>
      <rect x="40" y="-30" width="50" height="30" fill="#eab308" rx="6"/>
      <line x1="20" y1="150" x2="110" y2="150" stroke="#475569" stroke-width="3"/>
      <line x1="20" y1="300" x2="110" y2="300" stroke="#475569" stroke-width="3"/>
      <text x="-340" y="72" font-family="monospace" font-size="15" font-weight="900" fill="#0f172a" transform="rotate(-90)">HEAVY PUMP 4"</text>
    </g>
  </g>
</svg>''')

# 7. prod-007: Blue Gate Valve
save_svg("prod-007.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(220, 80)">
    <!-- Valve Body (Blue) -->
    <path d="M 120 280 L 120 440 Q 120 480 180 480 L 200 480 Q 260 480 260 440 L 260 280 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="4"/>
    <!-- Side Flanges -->
    <ellipse cx="60" cy="380" rx="25" ry="70" fill="#1d4ed8" stroke="#1e40af" stroke-width="4"/>
    <ellipse cx="320" cy="380" rx="25" ry="70" fill="#1d4ed8" stroke="#1e40af" stroke-width="4"/>
    <path d="M 60 310 L 120 310 L 120 450 L 60 450 Z" fill="#2563eb"/>
    <path d="M 260 310 L 320 310 L 320 450 L 260 450 Z" fill="#2563eb"/>
    <!-- Flange Bolt Holes -->
    <circle cx="60" cy="330" r="6" fill="#020617"/><circle cx="60" cy="380" r="6" fill="#020617"/><circle cx="60" cy="430" r="6" fill="#020617"/>
    <circle cx="320" cy="330" r="6" fill="#020617"/><circle cx="320" cy="380" r="6" fill="#020617"/><circle cx="320" cy="430" r="6" fill="#020617"/>
    <!-- Top Bonnet & Square Stem Nut -->
    <path d="M 130 280 L 250 280 L 220 180 L 160 180 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="3"/>
    <rect x="175" y="60" width="30" height="120" fill="#2563eb" stroke="#1d4ed8" stroke-width="3"/>
    <rect x="160" y="30" width="60" height="30" rx="4" fill="#2563eb" stroke="#1d4ed8" stroke-width="4"/>
    <!-- FVR Brand Badge -->
    <rect x="165" y="320" width="50" height="30" fill="#f8fafc" rx="3"/>
    <text x="172" y="340" font-family="sans-serif" font-size="12" font-weight="900" fill="#1e40af">FVR</text>
  </g>
</svg>''')

# 8. prod-008: Solar PV Panels
save_svg("prod-008.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(150, 60)">
    <!-- Panel 1 (Left) -->
    <path d="M 40 40 L 260 20 L 280 480 L 20 500 Z" fill="#0f172a" stroke="#94a3b8" stroke-width="6"/>
    <!-- Solar Cells Grid -->
    <path d="M 40 100 L 263 80 M 36 160 L 266 140 M 32 220 L 269 200 M 28 280 L 272 260 M 24 340 L 275 320 M 20 400 L 278 380" stroke="#475569" stroke-width="2"/>
    <path d="M 100 35 L 80 495 M 150 30 L 140 490 M 200 25 L 200 485" stroke="#475569" stroke-width="2"/>

    <!-- Panel 2 (Right) -->
    <path d="M 280 20 L 500 0 L 520 460 L 290 480 Z" fill="#020617" stroke="#cbd5e1" stroke-width="6"/>
    <path d="M 280 80 L 503 60 M 282 140 L 506 120 M 284 200 L 509 180 M 286 260 L 512 240 M 288 320 L 515 300 M 290 380 L 518 360" stroke="#334155" stroke-width="2"/>
    <path d="M 340 15 L 340 475 M 400 10 L 400 470 M 460 5 L 460 465" stroke="#334155" stroke-width="2"/>
  </g>
</svg>''')

# 9. prod-009: Solar Inverter
save_svg("prod-009.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(230, 60)">
    <!-- Inverter Main Body (White) -->
    <rect x="0" y="0" width="340" height="480" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="4"/>
    <rect x="0" y="0" width="30" height="480" fill="#334155" rx="4"/>
    <!-- Circular Central Glass Display -->
    <circle cx="185" cy="220" r="80" fill="#334155" stroke="#64748b" stroke-width="4"/>
    <circle cx="185" cy="220" r="70" fill="#0f172a"/>
    <rect x="145" y="190" width="80" height="40" rx="4" fill="#22c55e"/>
    <text x="155" y="215" font-family="monospace" font-size="14" font-weight="bold" fill="#020617">10.0 kW</text>
    <circle cx="155" cy="255" r="5" fill="#e2e8f0"/><circle cx="175" cy="255" r="5" fill="#e2e8f0"/>
    <circle cx="195" cy="255" r="5" fill="#e2e8f0"/><circle cx="215" cy="255" r="5" fill="#e2e8f0"/>
    <text x="120" y="420" font-family="sans-serif" font-size="16" font-weight="900" fill="#64748b" letter-spacing="2">SOLAR INVERTER</text>
  </g>
</svg>''')

# 10. prod-010: Road Roller Soil Compactor
save_svg("prod-010.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(100, 100)">
    <!-- Rear & Front Steel Drums -->
    <circle cx="150" cy="320" r="90" fill="#475569" stroke="#1e293b" stroke-width="8"/>
    <circle cx="150" cy="320" r="70" fill="#94a3b8"/>
    <circle cx="500" cy="320" r="90" fill="#475569" stroke="#1e293b" stroke-width="8"/>
    <circle cx="500" cy="320" r="70" fill="#94a3b8"/>
    <!-- Yellow Cab & Engine Body -->
    <path d="M 120 280 L 220 280 L 240 140 L 400 140 L 420 280 L 530 280 L 540 220 L 400 220 L 380 100 L 220 100 Z" fill="#eab308" stroke="#ca8a04" stroke-width="4"/>
    <!-- Glass Cab Windows -->
    <polygon points="245,110 375,110 395,210 235,210" fill="#0284c7" opacity="0.8"/>
    <text x="430" y="260" font-family="sans-serif" font-size="16" font-weight="900" fill="#020617">LTC212</text>
    <!-- Headlights -->
    <circle cx="540" cy="240" r="10" fill="#fef08a" stroke="#ca8a04"/>
  </g>
</svg>''')

# 11. prod-011: Heavy Orange Forklift
save_svg("prod-011.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(100, 100)">
    <!-- Heavy Wheels -->
    <circle cx="180" cy="330" r="65" fill="#0f172a" stroke="#334155" stroke-width="8"/>
    <circle cx="180" cy="330" r="35" fill="#94a3b8"/>
    <circle cx="480" cy="330" r="65" fill="#0f172a" stroke="#334155" stroke-width="8"/>
    <circle cx="480" cy="330" r="35" fill="#94a3b8"/>
    <!-- Orange Body -->
    <path d="M 80 300 Q 80 180 200 180 L 340 180 L 380 100 L 520 100 L 540 300 Z" fill="#ea580c" stroke="#c2410c" stroke-width="4"/>
    <!-- Operator Cabin Cage -->
    <rect x="360" y="110" width="140" height="150" fill="none" stroke="#1e293b" stroke-width="8"/>
    <!-- Front Lifting Mast & Forks -->
    <rect x="560" y="80" width="20" height="300" fill="#334155"/>
    <rect x="580" y="80" width="20" height="300" fill="#334155"/>
    <path d="M 560 320 L 700 320 L 700 335 L 560 335 Z" fill="#0f172a"/>
  </g>
</svg>''')

# 12. prod-012: Fireproof Security Filing Safes
save_svg("prod-012.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(260, 40)">
    <!-- Main Cabinet (Grey) -->
    <rect x="0" y="0" width="280" height="520" rx="8" fill="#94a3b8" stroke="#475569" stroke-width="4"/>
    <!-- Top Dial Lock & Key -->
    <circle cx="140" cy="40" r="22" fill="#1e293b" stroke="#cbd5e1" stroke-width="3"/>
    <circle cx="140" cy="40" r="14" fill="#cbd5e1"/>
    <!-- 4 Drawers -->
    <g transform="translate(15, 80)">
      <rect x="0" y="0" width="250" height="95" rx="4" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
      <rect x="85" y="40" width="80" height="16" rx="4" fill="#1e293b"/>
      <circle cx="40" cy="30" r="8" fill="#475569"/>
    </g>
    <g transform="translate(15, 185)">
      <rect x="0" y="0" width="250" height="95" rx="4" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
      <rect x="85" y="40" width="80" height="16" rx="4" fill="#1e293b"/>
    </g>
    <g transform="translate(15, 290)">
      <rect x="0" y="0" width="250" height="95" rx="4" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
      <rect x="85" y="40" width="80" height="16" rx="4" fill="#1e293b"/>
    </g>
    <g transform="translate(15, 395)">
      <rect x="0" y="0" width="250" height="95" rx="4" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
      <rect x="85" y="40" width="80" height="16" rx="4" fill="#1e293b"/>
    </g>
  </g>
</svg>''')

# 13. prod-013: Ultrasound Diagnostic Cart
save_svg("prod-013.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(260, 40)">
    <!-- Top Large Screen Monitor -->
    <rect x="20" y="0" width="240" height="170" rx="8" fill="#0f172a" stroke="#0284c7" stroke-width="4"/>
    <rect x="30" y="10" width="220" height="150" fill="#020617"/>
    <path d="M 40 90 Q 80 40 120 90 T 200 90" fill="none" stroke="#22c55e" stroke-width="3"/>
    <path d="M 50 120 Q 100 80 150 120 T 220 120" fill="none" stroke="#ef4444" stroke-width="2"/>
    <!-- Swivel Arm -->
    <rect x="130" y="170" width="20" height="40" fill="#64748b"/>
    <!-- Sub-screen Touch Panel & Keyboard Console -->
    <rect x="10" y="210" width="260" height="120" rx="6" fill="#334155" stroke="#475569" stroke-width="2"/>
    <rect x="30" y="220" width="220" height="60" rx="4" fill="#0284c7"/>
    <!-- Trolley Base on Caster Wheels -->
    <rect x="50" y="330" width="180" height="150" rx="8" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="3"/>
    <circle cx="70" cy="500" r="18" fill="#0f172a"/><circle cx="210" cy="500" r="18" fill="#0f172a"/>
  </g>
</svg>''')

# 14. prod-014: 48-Port Network Switch
save_svg("prod-014.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(50, 220)">
    <!-- 1U Chassis -->
    <rect x="0" y="0" width="700" height="150" rx="6" fill="#1e293b" stroke="#475569" stroke-width="4"/>
    <rect x="20" y="20" width="660" height="110" fill="#0f172a"/>
    <!-- Yellow Label Stripe -->
    <rect x="30" y="30" width="100" height="8" fill="#eab308"/>
    <!-- 48 RJ45 Ports in 2 Rows -->
    <g transform="translate(150, 35)">
      <!-- Top Row -->
      <rect x="0" y="0" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="18" y="0" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="36" y="0" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="54" y="0" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="72" y="0" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="90" y="0" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="108" y="0" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="126" y="0" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="144" y="0" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="162" y="0" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <!-- Bottom Row -->
      <rect x="0" y="28" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="18" y="28" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="36" y="28" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="54" y="28" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="72" y="28" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="90" y="28" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="108" y="28" width="14" height="20" fill="#334155" stroke="#64748b"/>
      <rect x="126" y="28" width="14" height="20" fill="#334155" stroke="#64748b"/>
    </g>
    <!-- Green Status LEDs -->
    <circle cx="50" cy="70" r="4" fill="#22c55e"/>
    <circle cx="65" cy="70" r="4" fill="#22c55e"/>
    <circle cx="80" cy="70" r="4" fill="#3b82f6"/>
  </g>
</svg>''')

# 15. prod-015: Interactive Touchscreen Display
save_svg("prod-015.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(60, 60)">
    <!-- Display Screen -->
    <rect x="0" y="0" width="560" height="380" rx="8" fill="#020617" stroke="#1e293b" stroke-width="8"/>
    <!-- UI Screen Background -->
    <rect x="15" y="15" width="530" height="350" fill="#1e1b4b"/>
    <text x="230" y="160" font-family="sans-serif" font-size="42" font-weight="900" fill="#ffffff">14:30</text>
    <rect x="40" y="50" width="120" height="280" rx="8" fill="#0f172a" opacity="0.8"/>
    <!-- Presenter Silhouette on Right -->
    <g transform="translate(560, 100)">
      <circle cx="80" cy="40" r="25" fill="#cbd5e1"/>
      <path d="M 40 160 L 60 80 L 120 80 L 140 160 Z" fill="#475569"/>
      <!-- Arm Touching Screen -->
      <path d="M 60 90 L -30 140" stroke="#cbd5e1" stroke-width="14" stroke-linecap="round"/>
    </g>
  </g>
</svg>''')

# 16. prod-016: Blue Electric Induction Motor
save_svg("prod-016.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(180, 100)">
    <!-- Blue Stator Housing -->
    <rect x="80" y="80" width="280" height="240" rx="20" fill="#1d4ed8" stroke="#1e40af" stroke-width="4"/>
    <!-- Cooling Fins -->
    <line x1="80" y1="120" x2="360" y2="120" stroke="#1e40af" stroke-width="6"/>
    <line x1="80" y1="150" x2="360" y2="150" stroke="#1e40af" stroke-width="6"/>
    <line x1="80" y1="180" x2="360" y2="180" stroke="#1e40af" stroke-width="6"/>
    <line x1="80" y1="210" x2="360" y2="210" stroke="#1e40af" stroke-width="6"/>
    <line x1="80" y1="240" x2="360" y2="240" stroke="#1e40af" stroke-width="6"/>
    <!-- Top Junction Terminal Box -->
    <rect x="150" y="20" width="120" height="60" rx="6" fill="#1d4ed8" stroke="#1e40af" stroke-width="3"/>
    <circle cx="210" cy="50" r="8" fill="#eab308"/>
    <!-- Front Drive Shaft -->
    <rect x="360" y="170" width="90" height="35" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
    <!-- Rear Fan Cover -->
    <path d="M 80 80 C 20 80 20 320 80 320 Z" fill="#1e40af"/>
  </g>
</svg>''')

# 17. prod-017: Solar Lithium Battery Storage Bank
save_svg("prod-017.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(180, 80)">
    <!-- Stack of 3 Rack-Mount Battery Modules -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="440" height="120" rx="8" fill="#0f172a" stroke="#334155" stroke-width="3"/>
      <rect x="30" y="30" width="120" height="15" rx="3" fill="#22c55e"/>
      <circle cx="200" cy="60" r="12" fill="#ef4444"/><circle cx="240" cy="60" r="12" fill="#3b82f6"/>
      <text x="30" y="85" font-family="monospace" font-size="14" font-weight="bold" fill="#ffffff">LiFePO4 48V 200Ah</text>
    </g>
    <g transform="translate(0, 140)">
      <rect x="0" y="0" width="440" height="120" rx="8" fill="#0f172a" stroke="#334155" stroke-width="3"/>
      <rect x="30" y="30" width="120" height="15" rx="3" fill="#22c55e"/>
      <circle cx="200" cy="60" r="12" fill="#ef4444"/><circle cx="240" cy="60" r="12" fill="#3b82f6"/>
    </g>
    <g transform="translate(0, 280)">
      <rect x="0" y="0" width="440" height="120" rx="8" fill="#0f172a" stroke="#334155" stroke-width="3"/>
      <rect x="30" y="30" width="120" height="15" rx="3" fill="#22c55e"/>
      <circle cx="200" cy="60" r="12" fill="#ef4444"/><circle cx="240" cy="60" r="12" fill="#3b82f6"/>
    </g>
  </g>
</svg>''')

# 18. prod-018: Oil-Immersed Distribution Transformer 1000kVA
save_svg("prod-018.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(180, 80)">
    <!-- Main Tank Body (Grey) -->
    <rect x="60" y="160" width="360" height="240" fill="#64748b" stroke="#334155" stroke-width="4"/>
    <!-- Corrugated Radiator Fins -->
    <g stroke="#334155" stroke-width="4">
      <line x1="80" y1="160" x2="80" y2="400"/><line x1="110" y1="160" x2="110" y2="400"/>
      <line x1="140" y1="160" x2="140" y2="400"/><line x1="170" y1="160" x2="170" y2="400"/>
      <line x1="200" y1="160" x2="200" y2="400"/><line x1="230" y1="160" x2="230" y2="400"/>
      <line x1="260" y1="160" x2="260" y2="400"/><line x1="290" y1="160" x2="290" y2="400"/>
      <line x1="320" y1="160" x2="320" y2="400"/><line x1="350" y1="160" x2="350" y2="400"/>
    </g>
    <!-- Top Porcelain HV Bushings -->
    <g transform="translate(120, 40)">
      <!-- Bushing 1 -->
      <polygon points="20,120 30,50 10,50" fill="#a16207"/>
      <polygon points="80,120 90,50 70,50" fill="#a16207"/>
      <polygon points="140,120 150,50 130,50" fill="#a16207"/>
      <polygon points="200,120 210,50 190,50" fill="#a16207"/>
    </g>
    <!-- Base Caster Wheels -->
    <rect x="40" y="400" width="400" height="30" fill="#1e293b"/>
    <circle cx="100" cy="440" r="16" fill="#0f172a"/><circle cx="380" cy="440" r="16" fill="#0f172a"/>
  </g>
</svg>''')

# 19. prod-019: Armored LV/MV Power Distribution Cable 4-Core
save_svg("prod-019.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(200, 80)">
    <!-- Cable Cut Cross Section Angle -->
    <path d="M 0 320 L 220 160 L 380 50" fill="none" stroke="#0f172a" stroke-width="90" stroke-linecap="round"/>
    <!-- Exposed Steel Armor Strands Layer -->
    <path d="M 180 190 L 280 120" fill="none" stroke="#94a3b8" stroke-width="70" stroke-linecap="round"/>
    <!-- 4 Colored Cores inside -->
    <circle cx="280" cy="110" r="18" fill="#ef4444"/>
    <circle cx="300" cy="130" r="18" fill="#eab308"/>
    <circle cx="310" cy="100" r="18" fill="#3b82f6"/>
    <circle cx="290" cy="80" r="18" fill="#0f172a"/>
  </g>
</svg>''')

# 20. prod-020: Mobile Well Drilling Rig System
save_svg("prod-020.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(180, 40)">
    <!-- Vertical Yellow Lattice Mast -->
    <rect x="80" y="20" width="40" height="420" fill="#eab308" stroke="#ca8a04" stroke-width="4"/>
    <path d="M 80 20 L 120 60 M 80 60 L 120 100 M 80 100 L 120 140 M 80 140 L 120 180 M 80 180 L 120 220 M 80 220 L 120 260 M 80 260 L 120 300" stroke="#ca8a04" stroke-width="3"/>
    <!-- Top Rotary Drilling Motor -->
    <rect x="60" y="120" width="80" height="60" fill="#1e293b" rx="6"/>
    <!-- Base Trailer Chassis & Outriggers -->
    <rect x="40" y="400" width="340" height="60" fill="#eab308" stroke="#ca8a04" stroke-width="4"/>
    <circle cx="280" cy="470" r="35" fill="#0f172a" stroke="#334155" stroke-width="6"/>
    <circle cx="360" cy="470" r="35" fill="#0f172a" stroke="#334155" stroke-width="6"/>
    <!-- Side Hydraulic Diesel Unit -->
    <rect x="220" y="320" width="140" height="80" fill="#0f172a" rx="6"/>
  </g>
</svg>''')

# 21. prod-021: Industrial Rotary Screw Air Compressor
save_svg("prod-021.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(180, 80)">
    <!-- Air Receiver Pressure Tank (Silver Cylinder Bottom) -->
    <rect x="20" y="280" width="440" height="150" rx="75" fill="#94a3b8" stroke="#475569" stroke-width="4"/>
    <rect x="80" y="430" width="40" height="30" fill="#334155"/>
    <rect x="360" y="430" width="40" height="30" fill="#334155"/>
    <!-- Top Compressor Cabinet Unit (Grey) -->
    <rect x="180" y="60" width="220" height="220" rx="8" fill="#cbd5e1" stroke="#64748b" stroke-width="4"/>
    <!-- Digital Panel & Emergency Stop -->
    <rect x="220" y="90" width="80" height="50" rx="4" fill="#0f172a"/>
    <circle cx="240" cy="180" r="10" fill="#ef4444"/>
    <text x="210" y="240" font-family="sans-serif" font-size="14" font-weight="900" fill="#0284c7">Airkrone</text>
  </g>
</svg>''')

# 22. prod-022: Armored Outdoor Fiber Optic Cable Drum
save_svg("prod-022.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(100, 100)">
    <!-- Stripped Armored Cable on Left -->
    <path d="M 20 360 L 180 200 L 260 120" fill="none" stroke="#0f172a" stroke-width="40" stroke-linecap="round"/>
    <path d="M 140 240 L 220 160" fill="none" stroke="#10b981" stroke-width="30" stroke-linecap="round"/>
    <path d="M 200 180 L 260 120" fill="none" stroke="#cbd5e1" stroke-width="18" stroke-linecap="round"/>
    <circle cx="250" cy="125" r="4" fill="#ef4444"/><circle cx="258" cy="120" r="4" fill="#3b82f6"/>
  </g>
  <!-- Wooden Cable Drum on Right -->
  <g filter="url(#shadow)" transform="translate(420, 140)">
    <ellipse cx="180" cy="180" rx="140" ry="140" fill="#78350f" stroke="#451a03" stroke-width="6"/>
    <path d="M 40 180 L 320 180 M 180 40 L 180 320 M 80 80 L 280 280 M 80 280 L 280 80" fill="none" stroke="#451a03" stroke-width="3"/>
    <circle cx="180" cy="180" r="30" fill="#1e293b"/>
  </g>
</svg>''')

# 23. prod-023: Dell Precision Tower Workstation
save_svg("prod-023.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(270, 60)">
    <!-- Black Dell Tower Chassis -->
    <rect x="0" y="0" width="260" height="480" rx="12" fill="#0f172a" stroke="#334155" stroke-width="4"/>
    <!-- Diagonal Mesh Ventilation Grille -->
    <g stroke="#1e293b" stroke-width="3">
      <line x1="20" y1="160" x2="240" y2="440"/><line x1="40" y1="160" x2="240" y2="420"/>
      <line x1="60" y1="160" x2="240" y2="400"/><line x1="80" y1="160" x2="240" y2="380"/>
      <line x1="100" y1="160" x2="240" y2="360"/><line x1="120" y1="160" x2="240" y2="340"/>
    </g>
    <!-- Dell Circle Badge -->
    <circle cx="130" cy="280" r="22" fill="#334155" stroke="#cbd5e1" stroke-width="2"/>
    <text x="117" y="286" font-family="sans-serif" font-size="12" font-weight="900" fill="#ffffff">DELL</text>
    <!-- Top IO Power & Optical Slot -->
    <circle cx="220" cy="40" r="8" fill="#3b82f6"/>
    <rect x="20" y="80" width="220" height="15" fill="#1e293b" rx="2"/>
  </g>
</svg>''')

# 24. prod-024: Executive Mahogany Desk & Chair Suite
save_svg("prod-024.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(100, 60)">
    <!-- Bookcase Credenza Background -->
    <rect x="240" y="20" width="340" height="260" fill="#7f1d1d" stroke="#450a0a" stroke-width="4"/>
    <rect x="260" y="40" width="80" height="220" fill="#991b1b" stroke="#fecaca" stroke-width="2"/>
    <rect x="360" y="40" width="80" height="220" fill="#991b1b" stroke="#fecaca" stroke-width="2"/>
    <rect x="460" y="40" width="80" height="220" fill="#991b1b" stroke="#fecaca" stroke-width="2"/>
    <!-- Executive Black Leather Chair -->
    <rect x="180" y="160" width="100" height="140" rx="16" fill="#0f172a" stroke="#334155" stroke-width="4"/>
    <!-- Large Mahogany L-Shaped Desk -->
    <polygon points="20,320 540,320 580,480 20,480" fill="#7f1d1d" stroke="#450a0a" stroke-width="4"/>
    <!-- Black Leather Top Pad -->
    <polygon points="120,340 420,340 440,440 100,440" fill="#0f172a"/>
  </g>
</svg>''')

# 25. prod-025: Water Quality Testing Briefcase Kit (accepta)
save_svg("prod-025.svg", f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  {bg_defs}
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <g filter="url(#shadow)" transform="translate(140, 60)">
    <!-- Open Black Flight Case Body -->
    <rect x="20" y="40" width="480" height="440" rx="12" fill="#0f172a" stroke="#334155" stroke-width="6"/>
    <!-- Top Lid Manual -->
    <rect x="50" y="60" width="180" height="140" fill="#f8fafc" rx="4"/>
    <text x="70" y="100" font-family="sans-serif" font-size="16" font-weight="900" fill="#0284c7">accepta</text>
    <text x="70" y="130" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">Engineers Test Kit</text>
    <!-- White Reagent Drop Bottles Grid -->
    <g transform="translate(60, 220)">
      <circle cx="20" cy="20" r="14" fill="#ffffff" stroke="#cbd5e1"/>
      <circle cx="60" cy="20" r="14" fill="#ffffff" stroke="#cbd5e1"/>
      <circle cx="100" cy="20" r="14" fill="#ffffff" stroke="#cbd5e1"/>
      <circle cx="140" cy="20" r="14" fill="#ffffff" stroke="#cbd5e1"/>
      <circle cx="180" cy="20" r="14" fill="#ffffff" stroke="#cbd5e1"/>
      <circle cx="220" cy="20" r="14" fill="#ffffff" stroke="#cbd5e1"/>
      <circle cx="20" cy="60" r="14" fill="#ffffff" stroke="#cbd5e1"/>
      <circle cx="60" cy="60" r="14" fill="#ffffff" stroke="#cbd5e1"/>
      <circle cx="100" cy="60" r="14" fill="#ffffff" stroke="#cbd5e1"/>
      <circle cx="140" cy="60" r="14" fill="#ffffff" stroke="#cbd5e1"/>
      <circle cx="180" cy="60" r="14" fill="#ffffff" stroke="#cbd5e1"/>
      <circle cx="220" cy="60" r="14" fill="#ffffff" stroke="#cbd5e1"/>
    </g>
    <!-- Photometer Unit Right -->
    <rect x="300" y="220" width="160" height="180" rx="8" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="3"/>
    <rect x="320" y="240" width="120" height="50" fill="#0f172a" rx="4"/>
  </g>
</svg>''')

print("Finished generating all 25 SVGs!")
