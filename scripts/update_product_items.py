import re

new_product_items = '''export const PRODUCT_ITEMS: ProductItem[] = [
  // SECTION 1: Power, Energy & Electrical Infrastructure
  {
    id: "prod-004",
    title: "Heavy-Duty Silent Industrial Generator (250kVA - 500kVA)",
    category: "generators-power",
    sectionId: "section-1",
    sectionTitle: "Section 1: Power & Electrical",
    code: "AJ-GEN-500S",
    shortDesc: "Soundproof weatherproof canopy diesel generator equipped with Cummins industrial engine and Stamford brushless alternator.",
    specs: {
      "Prime Power": "250 kVA - 500 kVA @ 400V 50Hz",
      "Engine": "Cummins Heavy Duty Industrial Turbo Diesel",
      "Noise Level": "68 dBA @ 7 Meters Ultra Silent Canopy",
      "Fuel Tank Capacity": "850 Liters (12 Hours Continuous Duty)",
      "Control Panel": "Deep Sea DSE 7320 Auto Start Controller"
    },
    standardCompliance: ["ISO 8528", "CE Mark", "EU Stage IIIA"],
    primaryApplications: ["Regional Hospitals", "Ministry Data Centers", "University Campuses"],
    imageUrl: "/products/prod-004.svg",
    inStock: true,
    leadTimeDays: 21
  },
  {
    id: "prod-005",
    title: "Automatic Transfer Switch & Main Switchboard Control Panel (ATS 800A)",
    category: "generators-power",
    sectionId: "section-1",
    sectionTitle: "Section 1: Power & Electrical",
    code: "AJ-ATS-800A",
    shortDesc: "Fully automated 3-phase power transfer switchboard panel for instant failover between grid mains and generator.",
    specs: {
      "Current Rating": "800 Amps Continuous 400V",
      "Switching Time": "< 100 milliseconds Dual Interlock",
      "Cabinet": "IP65 Weatherproof Floor Mounted Switchboard Panel",
      "Protection": "Over/Under Voltage, Phase Loss, Frequency Protection"
    },
    standardCompliance: ["IEC 60947-6-1", "CE", "ISO 9001"],
    primaryApplications: ["Commercial Banking Headquarters", "Public Hospitals", "Broadcast Stations"],
    imageUrl: "/products/prod-005.svg",
    inStock: true,
    leadTimeDays: 10
  },
  {
    id: "prod-008",
    title: "Monocrystalline Solar PV Panel 550W Tier-1 High Efficiency",
    category: "solar-renewable",
    sectionId: "section-1",
    sectionTitle: "Section 1: Power & Electrical",
    code: "AJ-SOLAR-550",
    shortDesc: "Half-cut bifacial monocrystalline solar PV module offering 21.5% efficiency for rural electrification and solar pumping.",
    specs: {
      "Max Power (Pmax)": "550 Watts Peak",
      "Cell Type": "Monocrystalline PERC Half-Cut 144 Cells",
      "Module Efficiency": "21.5%",
      "Frame": "Anodized Heavy Aluminum Alloy",
      "Warranty": "25-Year Linear Power Warranty"
    },
    standardCompliance: ["IEC 61215", "IEC 61730", "TÜV Rheinland"],
    primaryApplications: ["Solar Water Pumping Schemes", "Off-grid Ministry Outposts", "Educational Centers"],
    imageUrl: "/products/prod-008.svg",
    inStock: true,
    leadTimeDays: 10
  },
  {
    id: "prod-009",
    title: "Off-Grid Hybrid Solar MPPT Wall Inverter System 10kW 48V",
    category: "solar-renewable",
    sectionId: "section-1",
    sectionTitle: "Section 1: Power & Electrical",
    code: "AJ-INV-10KW",
    shortDesc: "High-frequency pure sine wave wall-mounted solar inverter with dual MPPT controllers and LCD monitoring.",
    specs: {
      "Rated Power": "10,000W Continuous / 20,000W Surge",
      "DC Input": "48V Nominal Lithium/Gel compatible",
      "MPPT Range": "120V - 450V DC (Max 500V PV)",
      "Display": "Color LCD Touchscreen with Remote Monitoring"
    },
    standardCompliance: ["CE", "IEC 62109-1", "EN 61000"],
    primaryApplications: ["Off-Grid Health Clinics", "Remote Bank Branches", "Agricultural Storage Facilities"],
    imageUrl: "/products/prod-009.svg",
    inStock: true,
    leadTimeDays: 12
  },
  {
    id: "prod-016",
    title: "Three-Phase Industrial Electric Induction Motor 45kW (60 HP)",
    category: "electrical-mechanical",
    sectionId: "section-1",
    sectionTitle: "Section 1: Power & Electrical",
    code: "AJ-MTR-45KW",
    shortDesc: "Heavy cast iron frame squirrel cage induction motor engineered for continuous duty in water pumping stations.",
    specs: {
      "Output Power": "45 kW (60 HP)",
      "Voltage / Freq": "400V 50Hz Three Phase",
      "Speed": "1475 RPM (4 Pole)",
      "Protection": "IP55 Weatherproof / Class F Insulation",
      "Efficiency": "IE3 Premium Efficiency Standard"
    },
    standardCompliance: ["IEC 60034", "IE3 Efficiency Rating"],
    primaryApplications: ["Pumping Stations", "Industrial Processing", "HVAC Blowers"],
    imageUrl: "/products/prod-016.svg",
    inStock: true,
    leadTimeDays: 12
  },
  {
    id: "prod-018",
    title: "Oil-Immersed Distribution Transformer 1000kVA (33kV/0.4kV)",
    category: "electrical-mechanical",
    sectionId: "section-1",
    sectionTitle: "Section 1: Power & Electrical",
    code: "AJ-TRF-1000KVA",
    shortDesc: "High-reliability copper-winding step-down distribution transformer engineered for regional substation installations.",
    specs: {
      "Rated Capacity": "1000 kVA 3-Phase 50Hz",
      "Voltage Ratio": "33 kV / 0.4 kV (33,000V to 400V)",
      "Cooling Type": "ONAN Mineral Oil Immersed",
      "Vector Group": "Dyn11 Standard",
      "Tap Changer": "Off-Circuit 5-Position Tap Switch"
    },
    standardCompliance: ["IEC 60076", "EEU Standard", "ISO 9001"],
    primaryApplications: ["Regional Electric Utilities", "Industrial Parks", "High-Rise Commercial Complexes"],
    imageUrl: "/products/prod-018.svg",
    inStock: true,
    leadTimeDays: 25
  },
  {
    id: "prod-019",
    title: "Armored Low/Medium Voltage Power Distribution Cable 4x185mm²",
    category: "electrical-mechanical",
    sectionId: "section-1",
    sectionTitle: "Section 1: Power & Electrical",
    code: "AJ-CBL-4X185",
    shortDesc: "Heavy underground direct-burial XLPE insulated copper conductor armored power cable for main distribution lines.",
    specs: {
      "Conductor Size": "4 Cores x 185 mm² Plain Annealed Copper",
      "Voltage Rating": "0.6 / 1 kV (1.2 kV Max)",
      "Armoring": "Galvanized Steel Wire Armor (SWA)",
      "Outer Sheath": "Flame Retardant Black PVC / XLPE"
    },
    standardCompliance: ["IEC 60502-1", "BS 5467", "RoHS"],
    primaryApplications: ["Underground Grid Feeders", "University Main Feeders", "Factory Sub-Distributions"],
    imageUrl: "/products/prod-019.svg",
    inStock: true,
    leadTimeDays: 14
  },

  // SECTION 2: Heavy Machinery, Fleet & Water Infrastructure
  {
    id: "prod-006",
    title: "Heavy Submersible Sewage & Industrial Wastewater Sludge Pump",
    category: "pumps-water",
    sectionId: "section-2",
    sectionTitle: "Section 2: Machinery & Water Works",
    code: "AJ-PUMP-SEW",
    shortDesc: "Heavy-duty cast iron submersible non-clog sewage pump designed for municipal wastewater and industrial effluent handling.",
    specs: {
      "Discharge Capacity": "150 m³/hour High Flow Volume",
      "Motor Power": "15 kW (20 HP) 400V 3-Phase",
      "Impeller": "Non-clog Double Vane Vortex Impeller",
      "Passage Diameter": "80mm Solid Particle Clearance",
      "Submersion Depth": "Up to 20 Meters IP68 Waterproof"
    },
    standardCompliance: ["ISO 9906", "CE Certified", "IP68 Protection"],
    primaryApplications: ["Municipal Wastewater Treatment Plants", "Industrial Effluent Sumps", "Flood Drainage Stations"],
    imageUrl: "/products/prod-006.svg",
    inStock: true,
    leadTimeDays: 7
  },
  {
    id: "prod-007",
    title: "Ductile Iron Main Water Resilient Seat Flanged Gate Valve (PN16/DN400)",
    category: "pumps-water",
    sectionId: "section-2",
    sectionTitle: "Section 2: Machinery & Water Works",
    code: "AJ-DIP-VALVE",
    shortDesc: "Class K9 ductile iron water main resilient seat flange gate valve with fusion bonded epoxy coating for potable water networks.",
    specs: {
      "Nominal Diameter": "DN400 (400mm / 16 Inch Flanged)",
      "Nominal Pressure": "PN16 (16 Bar Working Pressure)",
      "Body Material": "Ductile Iron GGG50 / EN-GJS-500-7",
      "Wedge Material": "Ductile Iron Encapsulated with EPDM Rubber",
      "Coating": "Blue Fusion Bonded Epoxy (Min 250 Micron)"
    },
    standardCompliance: ["ISO 7259", "EN 1074-2", "AWWA C509", "WRAS Approved"],
    primaryApplications: ["Municipal Water Supply Networks", "Treatment Plant Isolation Valves", "Irrigation Trunk Lines"],
    imageUrl: "/products/prod-007.svg",
    inStock: true,
    leadTimeDays: 12
  },
  {
    id: "prod-010",
    title: "Heavy Twin-Drum Vibratory Road Roller Compactor (12 Ton LTC212)",
    category: "construction-machinery",
    sectionId: "section-2",
    sectionTitle: "Section 2: Machinery & Water Works",
    code: "AJ-RDR-12T",
    shortDesc: "Heavy articulated tandem vibratory road roller designed for asphalt paving and subbase compaction in road construction.",
    specs: {
      "Operating Weight": "12,500 kg (12.5 Ton)",
      "Drum Width": "2130mm Heavy Machined Steel Drum",
      "Engine": "Deutz Water-Cooled Turbocharged Diesel 95kW",
      "Vibration Frequency": "30 / 35 Hz Dual Amplitude System"
    },
    standardCompliance: ["CE Safety Standard", "ISO 6016", "EU Stage V"],
    primaryApplications: ["Federal Highway Construction", "Airport Runways", "Urban Road Asphalt Paving"],
    imageUrl: "/products/prod-010.svg",
    inStock: true,
    leadTimeDays: 25
  },
  {
    id: "prod-011",
    title: "Heavy Diesel Container Handling Forklift Truck 10-Ton Capacity",
    category: "construction-machinery",
    sectionId: "section-2",
    sectionTitle: "Section 2: Machinery & Water Works",
    code: "AJ-FL-10T",
    shortDesc: "Heavy-duty industrial diesel forklift equipped with side shifter, duplex 4.5m mast, and dual front drive wheels for logistics terminals.",
    specs: {
      "Lift Capacity": "10,000 kg (10 Ton Nominal Rating)",
      "Lift Height": "4,500 mm Duplex Mast",
      "Engine": "ISUZU 6-Cylinder Heavy Industrial Diesel 85kW",
      "Forks": "2,440mm Heavy Alloy Steel Hydraulic Forks"
    },
    standardCompliance: ["ISO 3691-1", "CE Certified", "ANSI/ITSDF"],
    primaryApplications: ["Dry Ports & Logistics Terminals", "Free Trade Zone Warehouses", "Heavy Material Depots"],
    imageUrl: "/products/prod-011.svg",
    inStock: true,
    leadTimeDays: 20
  },
  {
    id: "prod-020",
    title: "Soil Sampling & Heavy Hydraulic Rig Drilling Unit (200m Depth)",
    category: "construction-machinery",
    sectionId: "section-2",
    sectionTitle: "Section 2: Machinery & Water Works",
    code: "AJ-RIG-200M",
    shortDesc: "Crawler chassis mounted hydraulic core drilling machine engineered for water well construction, soil sampling, and borehole drilling.",
    specs: {
      "Drilling Depth": "Up to 200 Meters Borehole Depth",
      "Drilling Diameter": "75mm - 300mm Hole Size",
      "Engine Power": "4-Cylinder Turbocharged Diesel 65kW",
      "Chassis": "Rubber Track Crawler Chassis with Hydraulic Outriggers",
      "Controls": "Full Hydraulic Pilot Joystick Valve Controls"
    },
    standardCompliance: ["ISO 22475", "CE Safety Certified"],
    primaryApplications: ["Water Well Construction", "Geological Surveys", "Infrastructure Foundation Sampling"],
    imageUrl: "/products/prod-020.svg",
    inStock: true,
    leadTimeDays: 30
  },
  {
    id: "prod-021",
    title: "Industrial Rotary Screw Stationary Air Compressor 15HP 500L Tank",
    category: "construction-machinery",
    sectionId: "section-2",
    sectionTitle: "Section 2: Machinery & Water Works",
    code: "AJ-AIR-15HP",
    shortDesc: "High-efficiency continuous duty rotary screw air compressor unit with integrated refrigerated air dryer and 500L pressure vessel.",
    specs: {
      "Motor Power": "11 kW (15 HP) 3-Phase 400V",
      "Air Delivery": "1.6 m³/min @ 10 Bar Working Pressure",
      "Receiver Tank": "500 Liters ASME Certified Steel Vessel",
      "Air Dryer": "Integrated Refrigerated Moisture Separator & Filter"
    },
    standardCompliance: ["ISO 1217", "ASME Boiler Code", "CE"],
    primaryApplications: ["Industrial Manufacturing Plants", "Vehicle Maintenance Facilities", "Pneumatic Equipment Operations"],
    imageUrl: "/products/prod-021.svg",
    inStock: true,
    leadTimeDays: 10
  },
  {
    id: "prod-025",
    title: "Stainless Steel Deep Well Submersible Borehole Pumps Set 18.5kW",
    category: "pumps-water",
    sectionId: "section-2",
    sectionTitle: "Section 2: Machinery & Water Works",
    code: "AJ-SUB-18KW",
    shortDesc: "Stainless steel multi-stage borehole submersible pumps set engineered for continuous groundwater extractions up to 300m depth.",
    specs: {
      "Power Rating": "18.5 kW (25 HP) 3-Phase 400V 50Hz",
      "Flow Capacity": "45 m³/hour @ 180m Dynamic Head",
      "Construction": "Full AISI 304 Stainless Steel Casing & Impellers",
      "Submersion Depth": "Up to 300 Meters Continuous Duty"
    },
    standardCompliance: ["NEMA Standard", "ISO 9906 Grade 2B", "CE Approved"],
    primaryApplications: ["Community Water Supply Wells", "Agricultural Irrigation", "Industrial Water Facilities"],
    imageUrl: "/products/prod-025.svg",
    inStock: true,
    leadTimeDays: 14
  },

  // SECTION 3: Telecommunications, IT & Office Systems
  {
    id: "prod-001",
    title: "EFON ADSS All-Dielectric Self-Supporting Aerial Fiber Optic Cable",
    category: "telecom-fiber",
    sectionId: "section-3",
    sectionTitle: "Section 3: Telecom, IT & Office",
    code: "AJ-FO-ADSS",
    shortDesc: "Self-supporting aerial fiber optic cable designed for overhead power line and pole installation with tracking resistance.",
    specs: {
      "Span Rating": "Up to 120 Meters Self-Supporting Span",
      "Fiber Cores": "48 Single Mode ITU-T G.652D Fibers",
      "Jacket Material": "Tracking-Resistant High-Density Polyethylene",
      "Tensile Load": "2200N Long Term Rating",
      "Weight": "Lightweight 12.8mm Diameter Construction"
    },
    standardCompliance: ["IEEE 1222", "IEC 60794-4", "ISO 9001"],
    primaryApplications: ["Power Utility Aerial Fiber Lines", "Inter-City Overhead Links", "Rural Broadband Expansion"],
    imageUrl: "/products/prod-001.svg",
    inStock: true,
    leadTimeDays: 10
  },
  {
    id: "prod-002",
    title: "Yoohon 144-Port Optical Distribution Frame (ODF) & Patch Enclosure",
    category: "telecom-fiber",
    sectionId: "section-3",
    sectionTitle: "Section 3: Telecom, IT & Office",
    code: "AJ-FO-ODF144",
    shortDesc: "19-inch rack-mounted high-density optical distribution cabinet featuring fusion splice trays and SC/APC green adapter panels.",
    specs: {
      "Capacity": "144 Fiber Ports SC/APC or LC/UPC",
      "Mounting": "19-Inch 4U / 6U Rack Mount Enclosure",
      "Material": "1.5mm Cold Rolled Steel with Powder Coating",
      "Splice Trays": "12 Trays x 12 Splice Capacity Each"
    },
    standardCompliance: ["TIA/EIA-568-C.3", "Telcordia GR-449", "CE"],
    primaryApplications: ["Telecom Central Offices", "Ministry Data Centers", "Enterprise Fiber Hubs"],
    imageUrl: "/products/prod-002.svg",
    inStock: true,
    leadTimeDays: 7
  },
  {
    id: "prod-003",
    title: "Dell PowerEdge Enterprise 2U Rackmount Server Chassis",
    category: "computers-it",
    sectionId: "section-3",
    sectionTitle: "Section 3: Telecom, IT & Office",
    code: "AJ-SRV-2UEX",
    shortDesc: "High-density 2U enterprise rack server featuring dual Intel Xeon processors, redundant power supplies, and hardware RAID.",
    specs: {
      "Processors": "Dual Intel Xeon Silver 4314 16-Core 2.4GHz",
      "Memory": "128GB DDR4 ECC Registered RAM (Expandable 1TB)",
      "Storage": "8x 2.4TB Enterprise SAS 10K RPM Hot-Plug HDDs",
      "Power Supply": "Dual 800W Redundant 80-Plus Platinum PSUs"
    },
    standardCompliance: ["Energy Star Server 3.0", "FCC Class A", "CE"],
    primaryApplications: ["Ministry Central Databases", "Regional Revenue Servers", "Bank Core Systems"],
    imageUrl: "/products/prod-003.svg",
    inStock: true,
    leadTimeDays: 14
  },
  {
    id: "prod-012",
    title: "Fireproof Heavy Steel Filing Cabinet & Safe Locker System (4-Drawer)",
    category: "furniture-office",
    sectionId: "section-3",
    sectionTitle: "Section 3: Telecom, IT & Office",
    code: "AJ-FURN-ST4",
    shortDesc: "Heavy reinforced fire-resistant steel document filing cabinet and safe combination designed for secure government record archives.",
    specs: {
      "Fire Rating": "UL Class 350 1-Hour Fire Protection (1010°C)",
      "Locking System": "Central Combination Lock & Keyed Deadbolts",
      "Steel Thickness": "1.2mm Heavy Cold Rolled Steel",
      "Dimensions": "1560mm H x 525mm W x 750mm D"
    },
    standardCompliance: ["UL 72", "NT FIRE 017", "ISO 9001"],
    primaryApplications: ["Government Ministry Archives", "Judicial & Court Chambers", "Bank Secure Document Storage"],
    imageUrl: "/products/prod-012.svg",
    inStock: true,
    leadTimeDays: 7
  },
  {
    id: "prod-013",
    title: "Portable Ultrasound Diagnostic System & Medical Color Doppler Scanner",
    category: "safety-laboratory",
    sectionId: "section-3",
    sectionTitle: "Section 3: Telecom, IT & Office",
    code: "AJ-MED-ULTRA",
    shortDesc: "Medical-grade digital ultrasound diagnostic scanner cart with color Doppler, multi-frequency probes, and patient monitor.",
    specs: {
      "Display": "15-Inch High Resolution LED Medical Grade Monitor",
      "Probes Included": "Convex Abdominal, Linear Small Parts & Transvaginal Probes",
      "Imaging Modes": "B, 2B, 4B, M, Color Doppler, Power Doppler",
      "Power": "AC Power + Built-in Rechargeable Lithium Battery (3 Hrs)"
    },
    standardCompliance: ["ISO 13485 Medical", "CE 0123", "FDA Cleared"],
    primaryApplications: ["Regional Referral Hospitals", "Maternal Health Clinics", "Mobile Field Posts"],
    imageUrl: "/products/prod-013.svg",
    inStock: true,
    leadTimeDays: 14
  },
  {
    id: "prod-014",
    title: "Enterprise Managed 48-Port Gigabit PoE+ Network Switch",
    category: "computers-it",
    sectionId: "section-3",
    sectionTitle: "Section 3: Telecom, IT & Office",
    code: "AJ-NET-SW48",
    shortDesc: "Layer 3 managed rackmount Ethernet switch featuring 48 PoE+ ports and 4x 10G SFP+ optical fiber uplink ports.",
    specs: {
      "Ports": "48x 10/100/1000 Base-T PoE+ Ports (740W Power Budget)",
      "Uplinks": "4x 10G SFP+ Optical Fiber Uplink Ports",
      "Switching Capacity": "176 Gbps Non-Blocking Fabric",
      "Management": "CLI, Web GUI, SNMPv3, VLAN, IGMP Snooping"
    },
    standardCompliance: ["IEEE 802.3at PoE+", "CE", "FCC", "RoHS"],
    primaryApplications: ["Enterprise Building Networks", "IP Camera CCTV Networks", "Data Center Rack Switch"],
    imageUrl: "/products/prod-014.svg",
    inStock: true,
    leadTimeDays: 5
  },
  {
    id: "prod-015",
    title: "Digital Interactive Smart Touchscreen Display 86 Inch 4K for Education",
    category: "computers-it",
    sectionId: "section-3",
    sectionTitle: "Section 3: Telecom, IT & Office",
    code: "AJ-DISP-86SM",
    shortDesc: "Commercial 4K Ultra-HD interactive whiteboard display panel with dual Android/Windows OS, stylus writing, and anti-glare glass.",
    specs: {
      "Screen Size": "86 Inch 4K UHD (3840 x 2160) IPS Display",
      "Touch Points": "20-Point IR Touch Precision",
      "OS Dual Boot": "Android 11.0 + Windows 11 OPS PC Module",
      "Audio & Mic": "Built-in 2x 20W Front Speakers & Array Microphone"
    },
    standardCompliance: ["CE", "FCC", "CB", "RoHS"],
    primaryApplications: ["University Lecture Halls", "Ministry Executive Conference Rooms", "Training Centers"],
    imageUrl: "/products/prod-015.svg",
    inStock: true,
    leadTimeDays: 14
  },
  {
    id: "prod-017",
    title: "Accepta Precision Water Quality Testing Photometer & Laboratory Kit",
    category: "safety-laboratory",
    sectionId: "section-3",
    sectionTitle: "Section 3: Telecom, IT & Office",
    code: "AJ-LAB-WATER",
    shortDesc: "Portable briefcase multi-parameter water analysis field laboratory kit for turbidity, pH, chlorine, and chemical testing.",
    specs: {
      "Parameters": "Over 50 Water Quality Parameters",
      "Display": "Backlit Graphic LCD Screen",
      "Carrying Case": "Rugged Waterproof Field Briefcase",
      "Reagents": "Complete Reagent Test Tubes & Calibration Standards"
    },
    standardCompliance: ["USEPA Approved Methods", "ISO 7027", "CE"],
    primaryApplications: ["Public Health Testing Labs", "Water Authority Field Inspections", "Environmental Water Quality Monitoring"],
    imageUrl: "/products/prod-017.svg",
    inStock: true,
    leadTimeDays: 10
  },
  {
    id: "prod-022",
    title: "Armored Heavy Outdoor Fiber Optic Cable (24/48/96 Core)",
    category: "telecom-fiber",
    sectionId: "section-3",
    sectionTitle: "Section 3: Telecom, IT & Office",
    code: "AJ-FO-96C",
    shortDesc: "Direct-burial double-jacket armored optical fiber cable on wooden reel designed for long-distance telecom backbones.",
    specs: {
      "Core Count": "24 / 48 / 96 Single Mode G.652D Fibers",
      "Armor Structure": "Corrugated Steel Tape Armor & Double PE Jacket",
      "Tensile Strength": "3000N Long Term Heavy Rating",
      "Packaging": "Heavy Wooden Cable Reel Drum"
    },
    standardCompliance: ["IEC 60794", "ITU-T G.652D", "RoHS"],
    primaryApplications: ["National Telecom Grid Expansion", "Ministry Fiber Rings", "University Backbones"],
    imageUrl: "/products/prod-022.svg",
    inStock: true,
    leadTimeDays: 14
  },
  {
    id: "prod-023",
    title: "Institutional Workstation Tower PC (Dell Precision i7 32GB RAM 1TB SSD)",
    category: "computers-it",
    sectionId: "section-3",
    sectionTitle: "Section 3: Telecom, IT & Office",
    code: "AJ-PC-I7PRO",
    shortDesc: "High-performance enterprise desktop PC bundle with 24-inch FHD IPS monitor designed for institutional computing.",
    specs: {
      "Processor": "Intel Core i7 13th Gen 16-Core",
      "Memory": "32GB DDR5 4800MHz",
      "Storage": "1TB NVMe PCIe 4.0 M.2 SSD",
      "Display": "24 Inch Ultra-Slim IPS FHD 1080p Ergonomic Monitor",
      "OS": "Windows 11 Pro Commercial License"
    },
    standardCompliance: ["Energy Star 8.0", "FCC Class B", "CE"],
    primaryApplications: ["University Computer Laboratories", "Ministry Offices", "Banking Workstations"],
    imageUrl: "/products/prod-023.svg",
    inStock: true,
    leadTimeDays: 7
  },
  {
    id: "prod-024",
    title: "Executive Mahogany Office Suite & Conference Table Assembly",
    category: "furniture-office",
    sectionId: "section-3",
    sectionTitle: "Section 3: Telecom, IT & Office",
    code: "AJ-FURN-EXE",
    shortDesc: "Handcrafted solid mahogany veneer executive desk with side credenza, lockable drawers, and high-back leather executive chair.",
    specs: {
      "Desk Dimensions": "2400mm x 1100mm x 760mm",
      "Material": "E1 Grade Fiberboard with Solid Mahogany Wood Veneer",
      "Included Pieces": "L-Desk, Side Storage Credenza, Mobile Pedestal, Executive Leather Chair",
      "Trunking": "Integrated Cable Management Trunking"
    },
    standardCompliance: ["BIFMA X5.5", "ISO 14001"],
    primaryApplications: ["Ministerial Director Suites", "Bank Executive Offices", "University Deans"],
    imageUrl: "/products/prod-024.svg",
    inStock: true,
    leadTimeDays: 14
  }
];'''

with open('src/data/companyData.ts', 'r') as f:
    content = f.read()

pattern = re.compile(r'export const PRODUCT_ITEMS: ProductItem\[\] = \[.*?\n\];', re.DOTALL)

if pattern.search(content):
    new_content = pattern.sub(new_product_items, content)
    with open('src/data/companyData.ts', 'w') as f:
        f.write(new_content)
    print('Successfully updated PRODUCT_ITEMS in companyData.ts')
else:
    print('Pattern not found in file')
