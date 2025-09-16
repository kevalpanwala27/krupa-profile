import { Package, Shield, Wrench, Settings, Zap, Filter, Droplets, Gauge, Brush, Truck, Box, Database, Building, Minus } from 'lucide-react';

export const categories = [
  { name: 'All', icon: Package },
  { name: 'Valves & Plates', icon: Shield },
  { name: 'Gaskets & Seals', icon: Wrench },
  { name: 'Industrial Equipment', icon: Settings },
  { name: 'Tools & Accessories', icon: Zap },
  { name: 'Structures & Tanks', icon: Building }
];

export const products = [
  {
    id: 14,
    name: 'Industrial Structure',
    description: 'Custom industrial structures and support systems',
    category: 'Structures & Tanks',
    icon: Building,
    image: '/images/products/industrial-structure.png',
    specs: ['Custom design', 'MOC: MS, SS', 'Structural grade']
  },
  {
    id: 13,
    name: 'Storage Tank',
    description: 'Custom storage tanks for various industrial applications',
    category: 'Structures & Tanks',
    icon: Database,
    image: '/images/products/storage-tank.png',
    specs: ['Custom sizes', 'MOC: MS, SS', 'Corrosion resistant']
  },
  {
    id: 11,
    name: 'Charging Hoppers & Filling Pot',
    description: 'Material handling equipment for industrial processes',
    category: 'Industrial Equipment',
    icon: Box,
    image: '/images/products/charging-hoppers.png',
    specs: ['Custom sizes', 'MOC: MS, SS', 'High capacity'],
    hasVarieties: true,
    varieties: [
      { name: 'Conical Hoppers', description: 'Smooth material flow with conical design', specs: ['Capacity: 50L to 5000L', 'MOC: MS/SS304/316', 'Angle: 45°-60°'] },
      { name: 'Rectangular Hoppers', description: 'Space-efficient rectangular design', specs: ['Capacity: 100L to 10000L', 'MOC: MS/SS', 'Custom dimensions'] },
      { name: 'Filling Pots', description: 'Precision filling systems for liquids', specs: ['Capacity: 25L to 2000L', 'MOC: SS316', 'Pressure rated'] },
      { name: 'Vibratory Hoppers', description: 'Controlled material discharge with vibration', specs: ['Capacity: 100L to 5000L', 'MOC: MS/SS', 'Motorized'] }
    ]
  },
  {
    id: 7,
    name: 'Cowl Dish',
    description: 'Specialized cowl dishes with optional hardening',
    category: 'Industrial Equipment',
    icon: Droplets,
    image: '/images/products/cowl-dish.png',
    specs: ['Custom sizes', 'MOC: SS304/316', 'Hardening optional']
  },
  {
    id: 12,
    name: 'Header',
    description: 'Industrial headers for fluid distribution systems',
    category: 'Structures & Tanks',
    icon: Minus,
    image: '/images/products/header.png',
    specs: ['Custom sizes', 'MOC: MS, SS', 'Pressure rated']
  },
  {
    id: 1,
    name: 'Spectacle Blind',
    description: 'High-quality spectacle blind for pipeline isolation and maintenance',
    category: 'Valves & Plates',
    icon: Shield,
    image: '/images/products/spectacle-blind.png',
    specs: ['Size: ½" to custom', 'MOC: SS304/316', 'Pressure rated']
  },
  {
    id: 2,
    name: 'Orifice Plate',
    description: 'Precision orifice plates for flow measurement and control',
    category: 'Valves & Plates',
    icon: Gauge,
    image: '/images/products/orifice-plate.png',
    specs: ['Size: ½" to custom', 'MOC: SS304/316', 'Accurate flow control']
  },
  {
    id: 3,
    name: 'Gasket',
    description: 'Reliable sealing solutions for various industrial applications',
    category: 'Gaskets & Seals',
    icon: Wrench,
    image: '/images/products/gasket.png',
    specs: ['Custom sizes', 'MOC: Teflon, Rubber, CFT', 'High temperature']
  },
  {
    id: 4,
    name: 'Flange Guard',
    description: 'Protective flange guards for safety and equipment protection',
    category: 'Industrial Equipment',
    icon: Shield,
    image: '/images/products/flange-guard.png',
    specs: ['Size: 15NB to custom', 'MOC: SS304/316', 'Safety compliant']
  },
  {
    id: 5,
    name: 'Earthing Jumper',
    description: 'Electrical earthing jumpers for industrial safety',
    category: 'Industrial Equipment',
    icon: Zap,
    image: '/images/products/earthing-jumper.png',
    specs: ['Custom sizes', 'MOC: Copper, Aluminium, SS', 'Electrical grade']
  },
  {
    id: 6,
    name: 'Strainers',
    description: 'High-quality strainers for fluid filtration systems',
    category: 'Industrial Equipment',
    icon: Filter,
    image: '/images/products/stainers.png',
    specs: ['Custom sizes', 'MOC: All SS grades', 'High efficiency'],
    hasVarieties: true,
    varieties: [
      { name: 'Y-Type Strainers', description: 'Compact design for space-constrained applications', specs: ['Size: ½" to 12"', 'MOC: SS304/316', 'Pressure: Up to 300 PSI'] },
      { name: 'Basket Strainers', description: 'High capacity filtration for large flow rates', specs: ['Size: 2" to 24"', 'MOC: SS304/316/316L', 'Pressure: Up to 150 PSI'] },
      { name: 'T-Type Strainers', description: 'Heavy-duty strainers for industrial applications', specs: ['Size: 1" to 16"', 'MOC: CS/SS', 'Pressure: Up to 600 PSI'] },
      { name: 'Duplex Strainers', description: 'Continuous operation with dual chambers', specs: ['Size: 2" to 24"', 'MOC: SS316', 'Pressure: Up to 300 PSI'] }
    ]
  },
  {
    id: 8,
    name: 'Drum Discharge Valve',
    description: 'Reliable drum discharge valves for material handling',
    category: 'Valves & Plates',
    icon: Package,
    image: '/images/products/drum-discharge-valve.png',
    specs: ['Size: 1", 1.5", 2" to custom', 'MOC: MS, SS', 'Heavy duty']
  },
  {
    id: 9,
    name: 'Cleaning Brush',
    description: 'Industrial cleaning brushes for various applications',
    category: 'Tools & Accessories',
    icon: Brush,
    image: '/images/products/cleaning-brush.png',
    specs: ['Custom sizes', 'MOC: Aluminium, MS, SS', 'Durable']
  },
  {
    id: 10,
    name: 'Mopping Trolley',
    description: 'Industrial mopping trolleys for facility maintenance',
    category: 'Tools & Accessories',
    icon: Truck,
    image: '/images/products/mopping-trolley.png',
    specs: ['Standard sizes', 'MOC: MS, SS', 'Maneuverable']
  },
  {
    id: 15,
    name: 'Lid & Capping Pressing Machine/Mixer',
    description: 'Specialized machinery for product packaging and mixing',
    category: 'Industrial Equipment',
    icon: Settings,
    image: '/images/products/lid-capping-machine.png',
    specs: ['Custom design', 'MOC: MS, SS', 'Automated']
  },
  {
    id: 16,
    name: 'SS Pipe & Pipe Fitments',
    description: 'Stainless steel pipes and fittings for industrial applications',
    category: 'Structures & Tanks',
    icon: Minus,
    image: '/images/products/ss-pipe-fitments.png',
    specs: ['Custom sizes', 'MOC: SS304/316', 'High quality']
  }
];

export const industries = [
  {
    id: 1,
    name: "Oil & Gas",
    description: "Equipment for upstream and downstream operations",
    icon: "Oil",
    color: "from-blue-600 to-blue-800"
  },
  {
    id: 2,
    name: "Pharmaceutical",
    description: "GMP compliant equipment for drug manufacturing",
    icon: "Pill",
    color: "from-green-600 to-green-800"
  },
  {
    id: 3,
    name: "Chemical",
    description: "Corrosion-resistant equipment for chemical processing",
    icon: "Flask",
    color: "from-purple-600 to-purple-800"
  },
  {
    id: 4,
    name: "Power Generation",
    description: "Equipment for thermal and nuclear power plants",
    icon: "Zap",
    color: "from-yellow-600 to-yellow-800"
  },
  {
    id: 5,
    name: "Manufacturing",
    description: "Industrial equipment for manufacturing processes",
    icon: "Factory",
    color: "from-gray-600 to-gray-800"
  },
  {
    id: 6,
    name: "Food & Beverage",
    description: "Hygienic equipment for food processing",
    icon: "Utensils",
    color: "from-orange-600 to-orange-800"
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Quality Assurance",
    description: "ISO 9001:2015 certified with rigorous quality control processes",
    icon: "Shield",
    color: "from-green-500 to-green-600"
  },
  {
    id: 2,
    title: "On-time Delivery",
    description: "Commitment to meeting project deadlines and schedules",
    icon: "Clock",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 3,
    title: "Experienced Team",
    description: "Skilled engineers and technicians with decades of experience",
    icon: "Users",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    title: "Modern Equipment",
    description: "State-of-the-art machinery and advanced manufacturing capabilities",
    icon: "Settings",
    color: "from-orange-500 to-orange-600"
  }
];

export const clients = [
  { id: 1, name: "Client 1", logo: "/images/client1.png" },
  { id: 2, name: "Client 2", logo: "/images/client2.png" },
  { id: 3, name: "Client 3", logo: "/images/client1.png" },
  { id: 4, name: "Client 4", logo: "/images/client2.png" },
  { id: 5, name: "Client 5", logo: "/images/client1.png" },
  { id: 6, name: "Client 6", logo: "/images/client2.png" }
];
