import { CertificateItem, FinancialMetric, PastPerformanceProject, ProductCategory, ProductItem, ProductSection, TeamMember } from '../types';

export const COMPANY_DETAILS = {
  name: "Adil Jundi Mohamed Import Export Ltd.",
  legalName: "Adil Jundi Mohamed Import Export Ltd.",
  motto: "Your Global Source for Quality. Anywhere. Anytime.",
  establishedEth: "2007 Ethiopian Calendar (2015 Gregorian)",
  establishedYear: "2007 E.C. (2015 G.C.)",
  tinNumber: "0038451236",
  licenseNo: "MTDD/04/384/493634/2007",
  principalRegNo: "ORO/EHZ/HT/1/0000954/2007",
  initialCapitalETB: "600,000.00 ETB",
  generalManager: "Mr. Mohamed Salah",
  headquarters: {
    country: "Ethiopia",
    city: "Addis Ababa",
    subcity: "Lideta",
    building: "Awash Building (Awash Office)",
    floor: "First Floor",
    fullAddress: "Addis Ababa, Ethiopia, Lideta, Awash Building, 1st Floor"
  },
  secondOffice: {
    country: "Ethiopia",
    city: "Harar",
    region: "Oromia / Harari Region (East Hararghe Zone)",
    subcity: "Adele Sub City",
    kebele: "Kebele Adele",
    phone: "+251915321018 / +251254660322",
    fullAddress: "Harar / East Hararghe, Adele Sub City, Kebele Adele, Ethiopia"
  },
  contact: {
    phone: "+251915321018 / +251254660322",
    phoneSecondary: "+251254660322",
    email: "adiljundimohamed@gmail.com",
    website: "www.adiljundimohamed.com",
    socialHandle: "@adiljundimohamed"
  },
  leadership: {
    ceoName: "Mr. Mohamed Salah",
    ceoTitle: "General Manager",
    ceoQuote: "At Adil Jundi Mohamed Import Export Ltd., our mission is clear: to connect Ethiopia with the world's finest equipment and technology, ensuring value, unyielding quality, and institutional trust in every single delivery."
  },
  financials2023: {
    annualRevenueUSD: "USD 2.8 Million",
    revenueRawUSD: 2800000,
    grossMargin: "22%",
    grossMarginValue: 22,
    netProfitMargin: "11%",
    netProfitValue: 11,
    yoyGrowth: "+14%",
    yoyGrowthValue: 14,
    debtToEquityRatio: "0.4"
  },
  marketContext: {
    totalEthiopianImports2023: "$17.05 Billion USD",
    machineryImports: "$1.93 Billion USD",
    electricalEquipmentImports: "$1.33 Billion USD",
    capitalGoodsShare: "17%",
    heavyEquipmentGrowth: "US $323.9M (2018) to US $496.1M (2026) at 5.6% CAGR"
  }
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "telecom-fiber",
    name: "Telecommunication & Fiber Optic Cables",
    description: "High-capacity single-mode and multi-mode fiber optic cables, patch cords, optical distribution frames, and telecommunications infrastructure.",
    iconName: "Network",
    itemCount: 24,
    highlightItems: ["Armored Outdoor Fiber Cables", "ADSS Fiber Optic Lines", "Fiber Patch Panels & Splicing Kits"]
  },
  {
    id: "generators-power",
    name: "Generators & Power Solutions",
    description: "Heavy-duty diesel generators, industrial standby power plants, automatic transfer switches (ATS), and voltage regulators for government and commercial facilities.",
    iconName: "Zap",
    itemCount: 18,
    highlightItems: ["Industrial Diesel Generators 50kVA-1000kVA", "Automatic Transfer Switches (ATS)", "Heavy Industrial Power Inverters"]
  },
  {
    id: "solar-renewable",
    name: "Renewable Energy Systems",
    description: "Monocrystalline solar panels, solar water pumping systems, deep-cycle lithium storage batteries, and off-grid solar inverters.",
    iconName: "Sun",
    itemCount: 16,
    highlightItems: ["High-Efficiency Solar PV Panels 550W+", "Solar Submersible Water Pump Kits", "Hybrid MPPT Inverters & Storage"]
  },
  {
    id: "pumps-water",
    name: "Pumps & Water Supply Systems",
    description: "High-volume centrifugal pumps, diesel/petrol discharge pumps, submersible borehole pumps, and municipal water pipeline fittings.",
    iconName: "Droplets",
    itemCount: 22,
    highlightItems: ["Petrol/Diesel High-Discharge Water Pumps", "Submersible Borehole Pumps 18.5kW", "Ductile Iron Pipes & Valve Accessories"]
  },
  {
    id: "construction-machinery",
    name: "Construction Machinery & Tools",
    description: "Earthmoving equipment, road compaction rollers, concrete batching tools, excavators, and heavy-duty drilling rigs.",
    iconName: "HardHat",
    itemCount: 20,
    highlightItems: ["Soil Sampling & Rig Drilling Equipment", "Vibratory Road Rollers & Compactors", "Heavy Load Material Excavators"]
  },
  {
    id: "furniture-office",
    name: "Furniture & Office Equipment",
    description: "Executive desk sets, ergonomic conference seating, modular workstation partitions, steel filing cabinets, and university lecture hall seating.",
    iconName: "Armchair",
    itemCount: 35,
    highlightItems: ["Executive Mahogany Office Desks", "University Auditorium Seating", "Fireproof Steel Filing Cabinets"]
  },
  {
    id: "computers-it",
    name: "Computers, IT & Networking Devices",
    description: "Enterprise rack servers, desktop PCs for institutional labs, enterprise managed switches, firewalls, and university IT infrastructure.",
    iconName: "Monitor",
    itemCount: 30,
    highlightItems: ["Institutional Workstation PCs", "Enterprise Core Managed Switches", "Blade Server Racks & UPS Backups"]
  },
  {
    id: "electrical-mechanical",
    name: "Electrical & Mechanical Supplies",
    description: "Medium and low voltage transformers, circuit breakers, industrial electric motors, heavy cables, and mechanical switchgears.",
    iconName: "Cpu",
    itemCount: 28,
    highlightItems: ["Three-Phase Industrial Electric Motors", "Distribution Transformers 33kV", "Industrial Circuit Breaker Assemblies"]
  },
  {
    id: "safety-laboratory",
    name: "Safety, Industrial & Laboratory Equipment",
    description: "Institutional PPE kits, environmental test chambers, water testing lab meters, and industrial hazard protection tools.",
    iconName: "ShieldCheck",
    itemCount: 19,
    highlightItems: ["Precision Water Quality Testing Meters", "Industrial Safety Gear & Hazmat PPE", "Laboratory Centrifuges & Glassware Sets"]
  }
];

export const PRODUCT_SECTIONS: ProductSection[] = [
  {
    id: "section-1",
    sectionNumber: "SECTION 01",
    title: "Power, Energy & Electrical Infrastructure",
    subtitle: "Heavy Electrical, Power Generation & Renewable Energy Systems",
    description: "High-capacity diesel generators, automated ATS switchgear panels, oil-immersed distribution transformers, monocrystalline solar PV stations, hybrid MPPT inverters, and heavy-duty industrial electric motors.",
    iconName: "Zap"
  },
  {
    id: "section-2",
    sectionNumber: "SECTION 02",
    title: "Heavy Machinery, Fleet & Water Infrastructure",
    subtitle: "Construction Rigs, Material Handling & Municipal Water Supply",
    description: "Hydraulic borehole drilling rigs, vibratory road rollers, heavy diesel container forklifts, deep submersible pumpsets, high-pressure sewer jetters, and ductile iron water main piping.",
    iconName: "HardHat"
  },
  {
    id: "section-3",
    sectionNumber: "SECTION 03",
    title: "Telecommunications, IT & Office Systems",
    subtitle: "Fiber Optics, Enterprise IT, Office Suites & Medical Devices",
    description: "Armored outdoor fiber cables, 144-port optical frames, enterprise rack servers, core managed network switches, interactive smart whiteboards, executive office suites, and medical ultrasound diagnostic tools.",
    iconName: "Cpu"
  }
];

export const PRODUCT_ITEMS: ProductItem[] = [
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
    imageUrl: "/products/1.jpg",
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
    imageUrl: "/products/2.jpg",
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
    imageUrl: "/products/3.jpg",
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
    imageUrl: "/products/4.jpg",
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
    imageUrl: "/products/5.jpg",
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
    imageUrl: "/products/6.jpg",
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
    imageUrl: "/products/7.jpg",
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
    imageUrl: "/products/8.jpg",
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
    imageUrl: "/products/9.jpg",
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
    imageUrl: "/products/10.jpg",
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
    imageUrl: "/products/11.jpg",
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
    imageUrl: "/products/12.jpg",
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
    imageUrl: "/products/13.jpg",
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
    imageUrl: "/products/14.jpg",
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
    imageUrl: "/products/15.jpg",
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
    imageUrl: "/products/16.jpg",
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
    imageUrl: "/products/17.jpg",
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
    imageUrl: "/products/18.jpg",
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
    imageUrl: "/products/19.jpg",
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
    imageUrl: "/products/20.jpg",
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
    imageUrl: "/products/21.jpg",
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
    imageUrl: "/products/22.jpg",
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
    imageUrl: "/products/23.jpg",
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
    imageUrl: "/products/24.jpg",
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
    imageUrl: "/products/25.jpg",
    inStock: true,
    leadTimeDays: 14
  }
];
export const PAST_PERFORMANCE_PROJECTS: PastPerformanceProject[] = [
  {
    id: "perf-001",
    title: "Procurement & Delivery of Heavy Water Pumps & Diesel Generators",
    client: "Federal Democratic Republic of Ethiopia Ministry of Irrigation and Lowlands (MILLS)",
    clientCategory: "Ministry",
    procurementAgency: "FDRE Ministry of Irrigation and Lowlands - Procurement Directorate",
    year: "2023-2024",
    valueETB: "123,000,000 ETB",
    valueEstimateUSD: "$2,200,000 USD",
    scopeSummary: "Full international procurement, direct factory sourcing, Djibouti port clearance, inland customs freight, and site installation of heavy-duty petrol/diesel water discharge pumps and 500kVA silent standby generators for lowland basin irrigation schemes.",
    deliveredCategories: ["Pumps & Water Supply", "Generators & Power", "Electrical Supplies"],
    documentRef: "Ref No: 05/6115 - Official Tender Contract Award",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "Afar, Somali & Oromia Lowland Basins, Ethiopia",
    originCountries: ["Germany", "Turkey", "China"],
    keyDeliverables: [
      "28x 500kVA Cummins Silent Diesel Generator Units",
      "120x High-Discharge Petrol/Diesel Water Pumps (100mm flange)",
      "Automatic Transfer Switches & 33kV Transformers",
      "On-site Technical Training & 12-Month Warranty Coverage"
    ],
    officialLetterText: "This is to certify that ADIL JUNDI MOHAMED IMPORT EXPORT LTD. (TIN: 0038451236) has satisfactorily fulfilled all contractual obligations under Tender Ref No: 05/6115 for the delivery of irrigation pumps and power generators. All items passed rigorous quality inspections at Djibouti Port and destination sites."
  },
  {
    id: "perf-002",
    title: "Supply of High-Volume Sand & Heavy Construction Support Materials",
    client: "Oromia Construction Corporation (OCC)",
    clientCategory: "Regional Authority",
    procurementAgency: "Oromia Regional Government Construction Works Board",
    year: "2023-2024",
    valueETB: "19,680,000 ETB",
    valueEstimateUSD: "$350,000 USD",
    scopeSummary: "Supply of certified river sand, aggregate stone, and heavy machinery support logistics for state infrastructure projects under Adama & Awash River Basin construction works.",
    deliveredCategories: ["Construction Machinery & Tools", "Heavy Logistics"],
    documentRef: "Letter Ref: OCC/60/05/116/24",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "Adama & Awash River Basin, Oromia Region",
    originCountries: ["Ethiopia"],
    keyDeliverables: [
      "14,500 m³ Quality Tested Construction Sand",
      "Heavy Dump Truck Transport Fleet Logistics",
      "Daily On-Site Delivery Audits and Material Lab Testing"
    ],
    officialLetterText: "Ref: OCC/60/05/116/24 - Letter of Recognition awarded to Adil Jundi Mohamed Import Export Ltd. for flawless material supply and prompt delivery timelines during the Awash River Basin construction project."
  },
  {
    id: "perf-003",
    title: "Supply & Commissioning of Petrol Engine Water Discharge Pumps",
    client: "Harari People Regional State Water Supply & Sewerage Authority",
    clientCategory: "Regional Authority",
    procurementAgency: "Harari Water & Energy Bureau",
    year: "2023",
    valueETB: "12,980,000 ETB",
    valueEstimateUSD: "$235,000 USD",
    scopeSummary: "Procurement, assembly, and commissioning of 18.5 HP petrol engine discharge pump units (100mm inlet/outlet, 30m discharge head) for regional municipal water supply networks.",
    deliveredCategories: ["Pumps & Water Supply"],
    documentRef: "Ref No: 21/7/2713",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "Harar City & Adele Sub-City, Harari Region",
    originCountries: ["Japan", "China"],
    keyDeliverables: [
      "45x 18.5 HP High-Pressure Petrol Water Pumps",
      "Heavy Suction Hoses & Ductile Iron Couplings",
      "Operator Maintenance Training for Regional Technicians"
    ],
    officialLetterText: "Harari Water Authority confirms that Ref No: 21/7/2713 pump delivery was successfully inspected and commissioned, ensuring clean water distribution to over 35,000 residents."
  },
  {
    id: "perf-004",
    title: "Institutional Office Furniture & Computer Hardware Procurement",
    client: "Commercial Bank of Ethiopia (CBE)",
    clientCategory: "Bank",
    procurementAgency: "Commercial Bank of Ethiopia Procurement & Facilities Management",
    year: "2022-2023",
    valueETB: "48,811,357 ETB",
    valueEstimateUSD: "$880,000 USD",
    scopeSummary: "Comprehensive supply of executive mahogany office furniture, ergonomic modular workstation partitions, desktop workstations (Core i7), and server UPS backups across regional CBE branches.",
    deliveredCategories: ["Furniture & Office Equipment", "Computers, IT & Networking"],
    documentRef: "Official CBE Certificate of Excellence & Preferred Supplier Recognition",
    status: "Completed",
    tenderType: "Framework Agreement",
    location: "Addis Ababa HQ & Eastern Regional Branches",
    originCountries: ["Malaysia", "Taiwan", "China"],
    keyDeliverables: [
      "320x Executive Workstations & Mahogany Desks",
      "450x Desktop PCs (Core i7, 32GB RAM, 1TB SSD)",
      "24x Online Rackmount 10kVA UPS Backups"
    ],
    officialLetterText: "Commercial Bank of Ethiopia honors Adil Jundi Mohamed Import Export Ltd. for outstanding supply efficiency, zero defect rates, and strict adherence to CBE quality guidelines."
  },
  {
    id: "perf-005",
    title: "SME Capacity & Industrial Equipment Distribution Scheme",
    client: "Development Bank of Ethiopia (DBE)",
    clientCategory: "Bank",
    procurementAgency: "DBE Small & Medium Enterprise Finance Directorate",
    year: "2021-2022",
    valueETB: "28,500,000 ETB",
    valueEstimateUSD: "$520,000 USD",
    scopeSummary: "Procurement and distribution of small-to-medium enterprise manufacturing tools, electrical workshop equipment, and agricultural processing tools in partnership with DBE's national initiative.",
    deliveredCategories: ["Electrical & Mechanical Supplies", "Construction Machinery & Tools"],
    documentRef: "Certificate of Participation - SME Vision Setting & Supply Program",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "National Distribution (Oromia & Harari Hubs)",
    originCountries: ["Italy", "China"],
    keyDeliverables: [
      "150x Industrial Metal Lathes & Welding Assemblies",
      "85x Three-Phase Electric Induction Motors",
      "SME Technical Orientation Workshops"
    ],
    officialLetterText: "DBE certifies that Adil Jundi Mohamed Import Export Ltd. successfully distributed specialized industrial tools to over 120 certified SME beneficiaries on time and within budget."
  },
  {
    id: "perf-006",
    title: "Supply of Medical Safety Equipment & Water Quality Testing Meters",
    client: "Harari Regional State Health Bureau & Public Health Institute",
    clientCategory: "Regional Authority",
    procurementAgency: "Harari Health Bureau Procurement Unit",
    year: "2021-2022",
    valueETB: "15,200,000 ETB",
    valueEstimateUSD: "$275,000 USD",
    scopeSummary: "Delivery of precision multi-parameter water analysis laboratory sets, sanitization pumps, and environmental PPE safety gear during regional public health campaigns.",
    deliveredCategories: ["Safety, Industrial & Lab Equipment", "Pumps & Water Supply"],
    documentRef: "Health Bureau Official Certificate of Recognition",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "Harar & Surrounding Rural Clinics",
    originCountries: ["Germany", "USA"],
    keyDeliverables: [
      "35x Portable Digital Water Quality Testing Photometers",
      "2,500x Industrial Hazmat Safety & PPE Kits",
      "Disinfection Discharge Spray Units"
    ],
    officialLetterText: "Official Harari Health Bureau Certificate awarded to Mr. Mohamed Salah and Adil Jundi Mohamed Import Export Ltd. for essential health safety contributions during emergency relief programs."
  },
  {
    id: "perf-007",
    title: "National Fiber Optic Cable & ADSS Line Infrastructure Expansion",
    client: "Ethio Telecom / Ministry of Innovation and Technology (MInT)",
    clientCategory: "Ministry",
    procurementAgency: "Public Procurement & Property Authority (FPPA)",
    year: "2024-2025",
    valueETB: "185,000,000 ETB",
    valueEstimateUSD: "$3,100,000 USD",
    scopeSummary: "Active contract for the import and delivery of 96-core armored outdoor fiber optic cables, ADSS aerial span cables, and 144-port optical distribution frames for regional backbone expansion.",
    deliveredCategories: ["Telecommunication & Fiber Optic Cables", "Computers, IT & Networking"],
    documentRef: "Contract Ref: MInT/ICT/2024/089",
    status: "In Progress",
    tenderType: "Active Contract",
    location: "Addis Ababa - Dire Dawa - Harar Telecom Corridor",
    originCountries: ["South Korea", "China"],
    keyDeliverables: [
      "450 km Single-Mode Armored Outdoor Optical Cable",
      "180 km ADSS Aerial Cable for Power Line Co-Location",
      "85x Rackmount Optical Distribution Frames (ODF 144-Port)"
    ],
    officialLetterText: "Active Contract MInT/ICT/2024/089: Phase 1 shipment of optical cables successfully landed at Djibouti Port and cleared customs. Phase 2 installation in progress."
  },
  {
    id: "perf-008",
    title: "University Computer Lab & Campus Networking Equipment Procurement",
    client: "Haramaya University & Regional Educational Institutions",
    clientCategory: "University",
    procurementAgency: "FDRE Ministry of Education Procurement Directorate",
    year: "2024",
    valueETB: "34,200,000 ETB",
    valueEstimateUSD: "$580,000 USD",
    scopeSummary: "Active supply of 250x high-performance desktop workstation PCs, 48-port PoE+ managed switches, and campus network rack enclosures for university digital learning hubs.",
    deliveredCategories: ["Computers, IT & Networking", "Furniture & Office Equipment"],
    documentRef: "Tender Ref: HU/PROC/2024/014",
    status: "In Progress",
    tenderType: "Active Contract",
    location: "Haramaya University Main Campus, Oromia",
    originCountries: ["Taiwan", "USA"],
    keyDeliverables: [
      "250x Intel Core i7 Desktop Workstation PCs with 24\" IPS Monitors",
      "15x Managed 48-Port PoE+ Core Network Switches",
      "Ergonomic Computer Lab Seating & Desk Modules"
    ],
    officialLetterText: "Tender Ref: HU/PROC/2024/014: Delivery batch 1 inspected and approved by Haramaya University ICT Directorate."
  },
  {
    id: "perf-009",
    title: "Solar Water Pumping Schemes & Off-Grid Hybrid Inverters Tender",
    client: "FDRE Ministry of Water & Energy (MoWE)",
    clientCategory: "Ministry",
    procurementAgency: "Public Procurement & Property Administration (FPPA)",
    year: "2025 (Bidding Open)",
    valueETB: "210,000,000 ETB",
    valueEstimateUSD: "$3,500,000 USD",
    bidClosingDate: "2025-09-30",
    scopeSummary: "Upcoming open national tender invitation for 550W Tier-1 monocrystalline solar PV panels, 18.5kW submersible pumps, and 10kW hybrid solar inverters for off-grid rural water supply.",
    deliveredCategories: ["Renewable Energy Systems", "Pumps & Water Supply"],
    documentRef: "Tender Invitation: MoWE/WB/SOLAR/2025/02",
    status: "Bidding Open",
    tenderType: "Upcoming Tender Opportunity",
    location: "National Rural Water Schemes (Afar, Oromia, Somali)",
    originCountries: ["Tier-1 Global Manufacturers"],
    keyDeliverables: [
      "1,200x Monocrystalline Solar PV Panels (550W+)",
      "40x Deep Borehole Submersible Pumps (18.5kW)",
      "Hybrid MPPT Solar Inverters & Battery Storage"
    ],
    officialLetterText: "Official MoWE Public Tender Call: Prequalification open for Class-A importers with verified customs clearance track record and ISO 9001 quality compliance."
  },
  {
    id: "perf-010",
    title: "Regional Electric Grid Transformers & Switchgear Supply Framework",
    client: "Ethiopian Electric Utility (EEU)",
    clientCategory: "Regional Authority",
    procurementAgency: "Ethiopian Electric Utility Supply Chain Directorate",
    year: "2025 (Upcoming)",
    valueETB: "95,000,000 ETB",
    valueEstimateUSD: "$1,600,000 USD",
    bidClosingDate: "2025-10-15",
    scopeSummary: "Upcoming framework tender for 33kV distribution transformers, 3-phase industrial motors, and heavy circuit breaker assemblies for sub-station rehabilitation.",
    deliveredCategories: ["Electrical & Mechanical Supplies", "Generators & Power"],
    documentRef: "Tender Call: EEU/GRID/2025/11",
    status: "Bidding Open",
    tenderType: "Upcoming Tender Opportunity",
    location: "Eastern Grid Network (Harar, Dire Dawa, Jigjiga)",
    originCountries: ["Europe", "Asia"],
    keyDeliverables: [
      "35x Distribution Transformers 33kV",
      "50x Industrial Electric Induction Motors",
      "Substation Protective Switchgear Units"
    ],
    officialLetterText: "EEU Procurement Notice: Open tender for certified equipment importers. Adil Jundi Mohamed Import Export Ltd. pre-qualification package prepared."
  },
  {
    id: "perf-011",
    title: "Regional Administrative Transport & Extension Equipment Supply",
    client: "East Hararghe Zone Administration (Bulchiinsa Go/Ha/Bahaa)",
    clientCategory: "Regional Authority",
    procurementAgency: "East Hararghe Zone Finance & Economic Development Department",
    year: "2021-2022",
    valueETB: "32,400,000 ETB",
    valueEstimateUSD: "$580,000 USD",
    scopeSummary: "Procurement and supply of heavy-duty dual-purpose motorcycles for agricultural extension workers, mobile office computing setups, and emergency relief transport units.",
    deliveredCategories: ["Heavy Logistics", "Computers, IT & Networking"],
    documentRef: "Ref No: EHZ/FIN/2021/409 - Official Award",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "East Hararghe Zone (Harar, Haramaya, Babile, Aweday)",
    originCountries: ["Japan", "China"],
    keyDeliverables: [
      "42x Heavy-Duty All-Terrain Motorcycles for Field Officers",
      "65x High-Durability Mobile Field Laptops",
      "Field Logistics & Transport Fleet Dispatch"
    ],
    officialLetterText: "Bulchiinsa Go/Ha/Bahaa hereby certifies that Obbo Mahammad Saalaa and Adil Jundi Mohamed Import Export Ltd. successfully delivered all field logistics equipment under Contract Ref: EHZ/FIN/2021/409."
  },
  {
    id: "perf-012",
    title: "Regional Tax Revenue IT Server Infrastructure & Secure Printing Supply",
    client: "Oromia Revenue Authority (Abbaa Taayitaa Galiiwwan Oromiyaa)",
    clientCategory: "Regional Authority",
    procurementAgency: "Oromia Regional Government Public Property Administration",
    year: "2020-2021",
    valueETB: "42,100,000 ETB",
    valueEstimateUSD: "$750,000 USD",
    scopeSummary: "Procurement, installation, and setup of high-reliability data center rack servers, heavy industrial laser receipt/tax document printers, and 20kVA UPS units for regional revenue offices.",
    deliveredCategories: ["Computers, IT & Networking", "Furniture & Office Equipment"],
    documentRef: "Letter Ref: ORA/GOV/2020/88",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "Oromia Regional Finance Bureaus (Finfinne & Regional Hubs)",
    originCountries: ["USA", "Germany", "Taiwan"],
    keyDeliverables: [
      "12x Enterprise Rackmount Data Center Servers",
      "80x High-Duty Thermal Tax Document Printers",
      "20x Online Double-Conversion 20kVA UPS Modules"
    ],
    officialLetterText: "Abbaa Taayitaa Galiiwwan Oromiyaa confirms that Letter Ref: ORA/GOV/2020/88 was fulfilled with distinction, supporting regional fiscal digital infrastructure."
  },
  {
    id: "perf-013",
    title: "Haramaya Municipal Urban Road Maintenance & Street Lighting Equipment",
    client: "Haramaya Town Administration (Minoo Haramaya)",
    clientCategory: "Regional Authority",
    procurementAgency: "Haramaya Town Urban Infrastructure & Works Bureau",
    year: "2021",
    valueETB: "21,800,000 ETB",
    valueEstimateUSD: "$390,000 USD",
    scopeSummary: "Direct supply of standalone solar LED street lighting poles, asphalt road cutters, pneumatic vibratory compactors, and industrial electrical wiring reels for urban corridor upgrading.",
    deliveredCategories: ["Renewable Energy Systems", "Electrical & Mechanical Supplies"],
    documentRef: "Tender Ref: HTA/INF/2021/05",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "Haramaya Town Municipal Corridors",
    originCountries: ["China", "Turkey"],
    keyDeliverables: [
      "120x Integrated Solar Powered LED Street Light Systems (100W)",
      "18x Asphalt Cutters & Vibratory Soil Compactors",
      "25 km Industrial Heavy Electrical Cabling"
    ],
    officialLetterText: "Haramaya Town Administration expresses sincere appreciation to Adil Jundi Mohamed Import Export Ltd. for timely delivery of road infrastructure machinery and solar lighting."
  },
  {
    id: "perf-014",
    title: "Educational Campus Infrastructure Materials & Computer Lab Setup",
    client: "Harari Regional State Education Bureau & Aanaa Haakim District",
    clientCategory: "Regional Authority",
    procurementAgency: "Harari Education Bureau Property Administration",
    year: "2021",
    valueETB: "18,900,000 ETB",
    valueEstimateUSD: "$340,000 USD",
    scopeSummary: "Supply of modular student desks, computer laboratory workstations, perimeter security wall construction materials, and educational supplies for regional primary & secondary schools.",
    deliveredCategories: ["Furniture & Office Equipment", "Computers, IT & Networking"],
    documentRef: "Certificate Ref: HREB/SCH/2021/17",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "Harar City & Araddaa 17 Educational Centers",
    originCountries: ["Malaysia", "Ethiopia"],
    keyDeliverables: [
      "450x Ergonomic Student Combination Desks",
      "60x Desktop PCs for Student Computing Labs",
      "Structural Steel & Security Perimeter Construction Materials"
    ],
    officialLetterText: "Harari Education Bureau presents Certificate Ref: HREB/SCH/2021/17 honoring Adil Jundi Mohamed Import Export Ltd. for exemplary contribution to school infrastructure development."
  },
  {
    id: "perf-015",
    title: "Awash River Basin Hydrological Sensors & Flow Measurement Tools",
    client: "FDRE Ministry of Water and Land Resources - Awash Basin Office",
    clientCategory: "Ministry",
    procurementAgency: "Awash Basin Development Authority Procurement Unit",
    year: "2023-2024",
    valueETB: "64,500,000 ETB",
    valueEstimateUSD: "$1,150,000 USD",
    scopeSummary: "Procurement, import, and calibration of automated ultrasonic river discharge sensors, digital water velocity meters, and field water analysis sets for river basin monitoring.",
    deliveredCategories: ["Safety, Industrial & Lab Equipment", "Pumps & Water Supply"],
    documentRef: "Contract Ref: ABDA/HYDRO/2023/102",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "Awash River Basin Hydrological Stations",
    originCountries: ["Germany", "Japan", "USA"],
    keyDeliverables: [
      "24x Radar & Ultrasonic River Level Telemetry Stations",
      "40x Handheld Digital Current Velocity Meters",
      "Field Calibration & Technician Orientation Seminars"
    ],
    officialLetterText: "Awash Basin Authority confirms successful delivery and calibration of all hydrological measurement tools under Contract Ref: ABDA/HYDRO/2023/102."
  },
  {
    id: "perf-016",
    title: "Eastern Highway Highway Maintenance Machinery & Pneumatic Rollers",
    client: "Ethiopian Roads Administration (ERA) Dire Dawa Region",
    clientCategory: "Regional Authority",
    procurementAgency: "ERA Procurement & Property Directorate",
    year: "2024-2025",
    valueETB: "145,000,000 ETB",
    valueEstimateUSD: "$2,450,000 USD",
    scopeSummary: "Active contract for the import and delivery of heavy pneumatic road rollers, hydraulic breakers, asphalt patchers, and operator protective equipment for highway maintenance teams.",
    deliveredCategories: ["Construction Machinery & Tools", "Safety, Industrial & Lab Equipment"],
    documentRef: "ERA Tender Ref: ERA/DIR/2024/033",
    status: "In Progress",
    tenderType: "Active Contract",
    location: "Dire Dawa - Harar - Jigjiga Trunk Highway Corridor",
    originCountries: ["Germany", "South Korea"],
    keyDeliverables: [
      "8x Heavy Self-Propelled Pneumatic Tyre Road Rollers (14-Ton)",
      "12x Excavator-Mounted Hydraulic Breaker Attachments",
      "500x High-Visibility Road Worker Safety Assemblies"
    ],
    officialLetterText: "Active ERA Contract ERA/DIR/2024/033: Batch 1 machinery cleared through Djibouti Port and delivered to ERA Dire Dawa maintenance depot."
  },
  {
    id: "perf-017",
    title: "Free Trade Zone Container Forklifts & Cargo Logistics Equipment",
    client: "Dire Dawa Free Trade Zone & Industrial Parks Development Corp (IPDC)",
    clientCategory: "Regional Authority",
    procurementAgency: "IPDC Procurement Directorate",
    year: "2025 (Bidding Open)",
    valueETB: "175,000,000 ETB",
    valueEstimateUSD: "$2,900,000 USD",
    bidClosingDate: "2025-11-15",
    scopeSummary: "Upcoming tender call for 10-Ton diesel container forklifts, electric reach trucks, heavy warehouse pallet racking systems, and cargo weighbridge scales for Dire Dawa FTZ.",
    deliveredCategories: ["Heavy Logistics", "Construction Machinery & Tools"],
    documentRef: "Tender Call: IPDC/DDFTZ/2025/01",
    status: "Bidding Open",
    tenderType: "Upcoming Tender Opportunity",
    location: "Dire Dawa Free Trade Zone Logistics Hub",
    originCountries: ["Europe", "Japan"],
    keyDeliverables: [
      "10x Heavy Diesel Container Handling Forklifts (10-Ton Capacity)",
      "25x Electric Warehousing Reach Trucks",
      "Heavy Industrial Steel Pallet Racking Assemblies"
    ],
    officialLetterText: "Official IPDC Procurement Call: Open tender for Class-A machinery importers with verified Djibouti customs clearance capacity."
  },
  {
    id: "perf-018",
    title: "Deep Well Submersible Solar Pumps & HDPE Piping Infrastructure",
    client: "Oromia Water and Energy Bureau (OWEB)",
    clientCategory: "Regional Authority",
    procurementAgency: "OWEB Water Works & Rural Supply Directorate",
    year: "2022-2023",
    valueETB: "88,500,000 ETB",
    valueEstimateUSD: "$1,550,000 USD",
    scopeSummary: "Full international procurement, import, Djibouti transit, and installation of 18.5kW stainless steel submersible borehole pumps, MPPT solar pump controllers, and PN16 HDPE pressure pipes for regional drought resilience projects.",
    deliveredCategories: ["Pumps & Water Supply", "Renewable Energy Systems"],
    documentRef: "Contract Ref: OWEB/DRP/2022/19",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "Bale, Borena & East Hararghe Zones, Oromia Region",
    originCountries: ["Germany", "Italy", "Turkey"],
    keyDeliverables: [
      "32x 18.5kW Stainless Steel Submersible Pumpsets",
      "48x MPPT Solar Inverters & DC Protection Panels",
      "15,000 meters PN16 Heavy-Duty HDPE Pipes & Couplings"
    ],
    officialLetterText: "Oromia Water and Energy Bureau certifies that Contract OWEB/DRP/2022/19 was executed with high technical standards, delivering clean drinking water to over 60,000 pastoralist households."
  },
  {
    id: "perf-019",
    title: "Ductile Iron Main Pipes, Gate Valves & High-Precision Water Meters",
    client: "Addis Ababa Water and Sewerage Authority (AAWSA)",
    clientCategory: "Regional Authority",
    procurementAgency: "AAWSA Head Office Procurement Directorate",
    year: "2022",
    valueETB: "56,000,000 ETB",
    valueEstimateUSD: "$1,020,000 USD",
    scopeSummary: "Procurement, shipping, Mojo dry port customs clearing, and warehouse delivery of DN300 & DN400 ductile iron pipes, resilient seat gate valves, and electromagnetic bulk water meters for metropolitan main line reinforcement.",
    deliveredCategories: ["Pumps & Water Supply", "Electrical & Mechanical Supplies"],
    documentRef: "Tender Ref: AAWSA/W/2022/04",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "Addis Ababa Metropolitan Network (Lideta, Kality & Bole Distribution Nodes)",
    originCountries: ["France", "Turkey", "China"],
    keyDeliverables: [
      "2,800 meters DN400 Class K9 Ductile Iron Water Pipes",
      "45x Flanged Resilient Seat Gate Valves (PN16)",
      "18x Ultrasonic Bulk Electromagnetic Flow Meters"
    ],
    officialLetterText: "AAWSA acknowledges that Adil Jundi Mohamed Import Export Ltd. fulfilled Tender Ref: AAWSA/W/2022/04 well ahead of contract deadline with zero defects during hydrostatic pressure testing."
  },
  {
    id: "perf-020",
    title: "Industrial Steam Turbine Valves & Heavy Electrical Switchgear Supply",
    client: "Ethiopian Sugar Industry Group (Wonji & Metehara Factories)",
    clientCategory: "Ministry",
    procurementAgency: "Ethiopian Sugar Industry Group Corporate Procurement",
    year: "2021-2022",
    valueETB: "73,200,000 ETB",
    valueEstimateUSD: "$1,300,000 USD",
    scopeSummary: "Factory direct sourcing, specialized heavy logistics, and site delivery of high-temperature steam turbine control valves, boiler feed pumps, and 11kV electrical switchgear for state sugar processing plants.",
    deliveredCategories: ["Electrical & Mechanical Supplies", "Generators & Power"],
    documentRef: "Tender Ref: ESIG/SUGAR/2021/88",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "Wonji-Shoa & Metehara Sugar Factory Complexes",
    originCountries: ["Germany", "India", "UK"],
    keyDeliverables: [
      "14x High-Pressure Cast Steel Steam Valves (ANSI 600)",
      "6x Multi-Stage High Head Boiler Feed Pumpsets",
      "11kV Heavy Vacuum Circuit Breakers"
    ],
    officialLetterText: "Ethiopian Sugar Industry Group certifies that Tender Ref: ESIG/SUGAR/2021/88 was successfully delivered, enabling continuous milling operations during peak harvest season."
  },
  {
    id: "perf-021",
    title: "Regional Public Health Cold Chain Refrigerators & Medical Power Backups",
    client: "Dire Dawa Administration Health Bureau",
    clientCategory: "Regional Authority",
    procurementAgency: "Dire Dawa Health Bureau Procurement Unit",
    year: "2023",
    valueETB: "27,600,000 ETB",
    valueEstimateUSD: "$490,000 USD",
    scopeSummary: "Supply and commissioning of WHO-PQS certified solar direct drive vaccine refrigerators, 30kVA online medical UPS units, and standby silent generators for regional health centers.",
    deliveredCategories: ["Renewable Energy Systems", "Generators & Power", "Safety, Industrial & Lab Equipment"],
    documentRef: "Tender Ref: DDAHB/MED/2023/12",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "Dire Dawa Urban & Rural Health Centers",
    originCountries: ["Germany", "Japan"],
    keyDeliverables: [
      "28x WHO-PQS Approved Solar Direct Drive Vaccine Refrigerators",
      "12x 30kVA Online UPS Backups for Operating Theaters",
      "4x 100kVA Cummins Silent Diesel Generators"
    ],
    officialLetterText: "Dire Dawa Administration Health Bureau presents this Letter of Completion confirming error-free installation and staff training under Tender Ref: DDAHB/MED/2023/12."
  },
  {
    id: "perf-022",
    title: "Container Terminal Yard Tractors & Lashing Hardware Procurement",
    client: "Ethiopian Shipping & Logistics Services Enterprise (ESLSE)",
    clientCategory: "Ministry",
    procurementAgency: "ESLSE Supply Chain & Procurement Division",
    year: "2023-2024",
    valueETB: "112,000,000 ETB",
    valueEstimateUSD: "$2,050,000 USD",
    scopeSummary: "International procurement, shipping, port inspection, and commissioning of heavy-duty 4x2 terminal yard tractors and heavy ISO container lashing gear for inland dry ports.",
    deliveredCategories: ["Heavy Logistics", "Construction Machinery & Tools"],
    documentRef: "Contract ESLSE/LOG/2023/077",
    status: "Completed",
    tenderType: "Completed Tender",
    location: "Mojo Dry Port & Comet Inland Freight Terminal",
    originCountries: ["Netherlands", "China"],
    keyDeliverables: [
      "6x Heavy-Duty Terminal Yard Port Tractors (70-Ton GCW)",
      "1,200 Sets ISO Heavy Twistlocks & Lashing Rods",
      "On-site Fleet Operator Training & Spare Parts Package"
    ],
    officialLetterText: "ESLSE hereby certifies that Adil Jundi Mohamed Import Export Ltd. successfully fulfilled Contract ESLSE/LOG/2023/077, strengthening national dry port container throughput capacity."
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-001",
    title: "Election & Democratic Governance Certificate of Honor",
    issuingAuthority: "Prosperity Party & East Hararghe Zone Administration (Bulchiinsa Go/Ha/Bahaa)",
    yearEth: "2013 E.C.",
    yearGregorian: "2021 G.C.",
    category: "Tender Recognition",
    description: "Official WARAQAA RAGAA / የምስክር ወረቀት certificate presented to Obboo Mahammad Saalaa for exemplary civic leadership, community development, and peace-building contributions during the 6th National & Regional Elections in East Hararghe Zone.",
    imageUrl: "/certificates/cert-001.svg"
  },
  {
    id: "cert-002",
    title: "Top Taxpayer & Fiscal Integrity Gold Level Award",
    issuingAuthority: "Abbaa Taayitaa Galiiwwan Oromiyaa (Oromia Revenue Authority)",
    yearEth: "2012 E.C.",
    yearGregorian: "2020 G.C.",
    category: "Quality Standard",
    description: "Official governmental Gold Level Taxpayer certificate signed by Shimalis Abdisaa (President of Oromia Regional State) & Maskaram Dabbabaa, recognizing Obbo Mohaammad Saalaa (East Hararghe Zone Gold Level) for top revenue compliance, fiscal transparency, and national development contributions.",
    imageUrl: "/certificates/cert-002.svg"
  },
  {
    id: "cert-003",
    title: "COVID-19 Emergency Relief Protection Fund ETB 120,000 Donation Certificate",
    issuingAuthority: "East Hararghe Zone COVID-19 Protection Task Force & Commercial Bank of Ethiopia",
    yearEth: "2012 E.C.",
    yearGregorian: "2020 G.C.",
    category: "Excellence Award",
    description: "Framed honor check award ('ከ ወገን ደራሽ ወገን ነው') recognizing Adil Jundi Mohamed Import Company and General Manager Mohamed Salah for donating ETB 120,000.00 via Commercial Bank of Ethiopia to support regional COVID-19 emergency relief efforts.",
    imageUrl: "/certificates/cert-003.svg"
  },
  {
    id: "cert-004",
    title: "Public Health Protection & Pandemic Response Certificate of Appreciation",
    issuingAuthority: "Harari Regional State Health Bureau & FDRE Ministry of Health",
    yearEth: "2013 E.C.",
    yearGregorian: "2021 G.C.",
    category: "Excellence Award",
    description: "Official የእውቅና ምስክር ወረቀት certificate presented to Mr. Mohamed Salah for providing critical medical safety equipment, financial assistance, and technical support to the Harari Health Bureau during COVID-19 prevention.",
    imageUrl: "/certificates/cert-004.svg"
  },
  {
    id: "cert-005",
    title: "School Perimeter Wall & Infrastructure Construction Certificate",
    issuingAuthority: "Madrasaa Bilaal KG & Primary School (Aanaa Haakim, Harari Region)",
    yearEth: "2013 E.C.",
    yearGregorian: "2021 G.C.",
    category: "Capacity & Training",
    description: "Waraqaa Ragaa certificate awarded to Obbo Mahammad Saalah for funding and constructing the campus security perimeter wall and classroom facilities at Madrasaa Bilaal KG & Primary School in Araddaa 17.",
    imageUrl: "/certificates/cert-005.svg"
  },
  {
    id: "cert-006",
    title: "Harari Region Electric Power Service Recognition Certificate",
    issuingAuthority: "Harari Region Electric Utility / Ethiopian Electric Utility",
    yearEth: "2013 E.C.",
    yearGregorian: "2021 G.C.",
    category: "Quality Standard",
    description: "Official የዕውቅናና የምስክር ወረቀት certificate presented to Mr. Mohamed Salah for strategic partnership and dedicated equipment support in expanding regional electricity grid stability and public utility service.",
    imageUrl: "/certificates/cert-006.svg"
  },
  {
    id: "cert-007",
    title: "CBE Certificate of Recognition - Preferred Business Customer",
    issuingAuthority: "Commercial Bank of Ethiopia (CBE) Headquarters",
    yearEth: "2006 E.C.",
    yearGregorian: "2014 G.C.",
    category: "Excellence Award",
    description: "Official Certificate of Recognition signed by Bekalu Zeleke (President, Commercial Bank of Ethiopia) honoring Mohammed Salah Ali for dedication, financial excellence, and long-standing competence as a Preferred Business Customer.",
    imageUrl: "/certificates/cert-007.svg"
  },
  {
    id: "cert-008",
    title: "Development Bank of Ethiopia (DBE) Business Plan & SME Leadership Certificate",
    issuingAuthority: "Development Bank of Ethiopia (DBE) SME Training Center",
    yearEth: "2013 E.C.",
    yearGregorian: "2021 G.C.",
    category: "Capacity & Training",
    description: "Official የተሳታፊ ምስክር ወረቀት certificate awarded to Mr. Mohamed Salah for successfully completing executive training in Business Plan Preparation, Vision Setting, Financial Statements, and SME Management.",
    imageUrl: "/certificates/cert-008.svg"
  },
  {
    id: "cert-009",
    title: "Aboker District Community Service & Relief Certificate",
    issuingAuthority: "Harari People Regional State - Aboker District Administration",
    yearEth: "2011-2013 E.C.",
    yearGregorian: "2019-2021 G.C.",
    category: "Tender Recognition",
    description: "Xalayyaa Ragaa / የምስክር ወረቀት document presented to Obbo Mohamed Salah by Aboker District Administrator Sulxan Sani for outstanding leadership, humanitarian relief, and youth empowerment in Aboker district.",
    imageUrl: "/certificates/cert-009.svg"
  },
  {
    id: "cert-010",
    title: "Qeladamba Development Association Philanthropy & Thanksgiving Award",
    issuingAuthority: "Develop Qeladamba Community Association (የቀለዓምባ ልማት ማህበር)",
    yearEth: "2013 E.C.",
    yearGregorian: "2021 G.C.",
    category: "Excellence Award",
    description: "የምስጋናና ምስክር ወረቀት certificate awarded to Mr. Mohamed Salah for funding home repairs for needy elders, providing student supplies for youth, and seasonal holiday relief in Qeladamba.",
    imageUrl: "/certificates/cert-010.svg"
  },
  {
    id: "cert-011",
    title: "Haramaya Town Leadership & Community Hero Certificate",
    issuingAuthority: "Haramaya Town Administration & Prosperity Party Committee",
    yearEth: "2013 E.C.",
    yearGregorian: "2021 G.C.",
    category: "Tender Recognition",
    description: "WARAQAA RAGAA / የምስክር ወረቀት honoring Obbo Mahmad Saala for heroic community contributions, financial support, and peace-building achievements in Haramaya town.",
    imageUrl: "/certificates/cert-011.svg"
  },
  {
    id: "cert-012",
    title: "Harar Trinity Cathedral & Women/Youth Affairs Recognition",
    issuingAuthority: "Harar Trinity Cathedral Monastic Council & Harari Women, Children & Youth Affairs Office",
    yearEth: "2011-2013 E.C.",
    yearGregorian: "2019-2021 G.C.",
    category: "Excellence Award",
    description: "Joint recognition award honoring Mr. Mohamed Salah for church restoration, religious facility support, and empowering women and youth across Harari Regional State.",
    imageUrl: "/certificates/cert-012.svg"
  }
];

export const FINANCIAL_METRICS: FinancialMetric[] = [
  {
    label: "2023 Annual Revenue",
    value: "USD 2.8 Million",
    subtext: "Driven by consistent government tender wins & institutional contracts",
    trend: "+14% YoY"
  },
  {
    label: "Gross Margin",
    value: "22%",
    subtext: "Reflecting efficient international sourcing & direct factory logistics",
    trend: "Stable & Healthy"
  },
  {
    label: "Net Profit Margin",
    value: "11%",
    subtext: "Strong operational efficiency amidst FX and inflation pressures",
    trend: "Resilient"
  },
  {
    label: "Debt-to-Equity Ratio",
    value: "0.40",
    subtext: "Ultra-solid balance sheet with strong solvency and capital backing",
    trend: "Low Risk Profile"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Mr. Mohamed Salah",
    role: "Chief Executive Officer & Founder",
    bio: "Over 15 years of leadership in international trade, tender bidding, and institutional supply chain management across East Africa.",
    department: "Executive Leadership",
    experienceYears: 15
  },
  {
    name: "Sourcing & International Procurement Team",
    role: "Global Freight & Factory Liaison Specialists",
    bio: "Engineers and procurement officers managing direct factory relationships in Europe, Asia, and the Middle East.",
    department: "Global Procurement",
    experienceYears: 10
  },
  {
    name: "Tender & Government Contracting Unit",
    role: "Institutional Bidding & Legal Compliance Team",
    bio: "Dedicated tender specialists overseeing FDRE Ministry bids, regional authority RFQs, and university procurement guidelines.",
    department: "Institutional Sales",
    experienceYears: 8
  },
  {
    name: "Logistics, Customs & After-Sales Support",
    role: "Port Clearance & Technical Maintenance Engineers",
    bio: "Handling Djibouti port logistics, Addis Ababa warehousing, field installation of generators/pumps, and client support.",
    department: "Operations & Logistics",
    experienceYears: 9
  }
];

export const ETHIOPIA_IMPORT_MARKET_DATA = [
  { category: "Machinery & Equipment", amountUSD: 1.93, sharePct: 11.3 },
  { category: "Electrical Equipment & ICT", amountUSD: 1.33, sharePct: 7.8 },
  { category: "Capital Goods & Heavy Infra", amountUSD: 2.90, sharePct: 17.0 },
  { category: "Refined Energy & Fuel", amountUSD: 3.50, sharePct: 20.5 },
  { category: "Other Commercial Imports", amountUSD: 7.39, sharePct: 43.4 }
];

export const HEAVY_EQUIPMENT_GROWTH_DATA = [
  { year: "2018", valueUSD: 323.9 },
  { year: "2020", valueUSD: 360.5 },
  { year: "2022", valueUSD: 410.2 },
  { year: "2024", valueUSD: 452.8 },
  { year: "2026 (Proj)", valueUSD: 496.1 }
];
