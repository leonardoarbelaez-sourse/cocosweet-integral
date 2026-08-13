import {
  ProductDerivative,
  Differentiator,
  CircularStep,
  TargetPersona,
  PacificProducerZone,
  ValuePropPillar
} from '../types';

export const HERO_DATA = {
  brandName: "COCOSWEET INTEGRAL",
  tagline: "El coco colombiano que se transforma en nuevas experiencias.",
  subtagline: "Iniciativa universitaria de innovación agroindustrial que valoriza la riqueza del Pacífico colombiano mediante la economía circular y la producción de Crema de Coco Gourmet de alta calidad.",
  academicBadge: "Prototipo de Investigación & Validación Académica",
  academicDisclaimer: "Este portal es un prototipo académico universitario diseñado para la evaluación y validación de concepto con usuarios. CocoSweet Integral no comercializa aún sus productos de forma masiva."
};

export const STAR_PRODUCT = {
  badge: "PRODUCTO ESTRELLA",
  name: "Crema de Coco Gourmet",
  description: "Propuesta de Crema de Coco Gourmet elaborada a partir de coco colombiano, actualmente en etapa de prototipado y validación.",
  buttonText: "ME INTERESA EL PRODUCTO",
  academicBadge: "PROTOTIPO ACADÉMICO DE VALIDACIÓN",
  attributes: [
    { label: "CALIDAD", value: "Propuesta gourmet" },
    { label: "ORIGEN", value: "Pacífico colombiano" },
    { label: "CARACTERÍSTICAS", value: "Versátil y diferenciada" }
  ]
};

export const DERIVATIVE_PRODUCTS: ProductDerivative[] = [
  {
    id: "harina-coco",
    name: "Harina de Coco Integral",
    subtitle: "Rica en fibra natural, 100% libre de gluten",
    description: "Obtenida a partir de la pulpa desgrasada remanente de la crema. Perfecta para repostería saludable y funcional.",
    category: "Alimenticio",
    iconName: "Wheat",
    highlights: ["Alta en fibra dietaria", "Apta para dietas KETO y Celiacos", "Bajo índice glucémico"],
    usage: "Panadería, galletería y empanizados saludables.",
    circularPart: "Pulpa"
  },
  {
    id: "aceite-virgen",
    name: "Aceite de Coco Extra Virgen",
    subtitle: "Prensado en frío de primera extracción",
    description: "Aceite puro de textura liviana con alto contenido de ácido láurico, procesado sin solventes químicos.",
    category: "Alimenticio",
    iconName: "Droplet",
    highlights: ["Prensado en frío", "Cero grasas trans", "Aroma natural sutil"],
    usage: "Cocina de alta temperatura, nutrición y cosmética natural.",
    circularPart: "Pulpa"
  },
  {
    id: "snacks-crujientes",
    name: "Snacks de Coco Horneado",
    subtitle: "Láminas crujientes ligeramente tostadas",
    description: "Hojuelas de coco horneadas a baja temperatura para preservar sus nutrientes naturales y sabor dulce intrínseco.",
    category: "Alimenticio",
    iconName: "Sparkles",
    highlights: ["Sin azúcares añadidos", "Horneado sin freír", "Crujiente natural"],
    usage: "Snack directo, topping para yogures, bowls y ensaladas.",
    circularPart: "Pulpa"
  },
  {
    id: "agua-electro",
    name: "Agua de Coco Bio-Filtrada",
    subtitle: "Hidratación isotónica natural",
    description: "El líquido contenido en el fruto maduro, microfiltrado para mantener sus potentes electrólitos e hidratación.",
    category: "Alimenticio",
    iconName: "GlassWater",
    highlights: ["Rica en potasio y magnesio", "Sin edulcorantes", "Refrescante natural"],
    usage: "Recuperación deportiva y refresco diario saludable.",
    circularPart: "Agua"
  },
  {
    id: "carbon-activado",
    name: "Carbón Activado de Cáscara",
    subtitle: "Aprovechamiento de la caparazón dura",
    description: "Cáscaras procesadas térmicamente para aplicaciones de purificación, filtración y uso en cuidado personal.",
    category: "Bio-material",
    iconName: "Flame",
    highlights: ["Alta capacidad adsorbente", "Origen 100% vegetal", "Cero residuo sólido"],
    usage: "Filtros de agua ecológicos y cosmética natural.",
    circularPart: "Cáscara"
  },
  {
    id: "bio-sustrato",
    name: "Bio-Sustrato & Fibra de Capacho",
    subtitle: "Fibra vegetal procesada para agricultura",
    description: "Aprovechamiento del capacho exterior para la creación de sustratos de retención de humedad en cultivos y jardinería.",
    category: "Bio-material",
    iconName: "Sprout",
    highlights: ["Gran retención de agua", "Aereación de suelos", "Biodegradable"],
    usage: "Huertos urbanos, viveros e insonorización ecológica.",
    circularPart: "Fibra (Capacho)"
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "origen-pacifico",
    title: "100% Origen del Pacífico",
    description: "Nuestros cocos provienen de palmares nativos de comunidades del Pacífico colombiano, bendecidos por la riqueza del suelo y la pluviosidad costera.",
    iconName: "MapPin",
    tag: "Autenticidad Territorial"
  },
  {
    id: "formula-gourmet",
    title: "Fórmula Gourmet Ultra-Cremosa",
    description: "Proceso de extracción de alta precisión que garantiza una consistencia aterciopelada sin necesidad de espesantes artificiales.",
    iconName: "Award",
    tag: "Calidad Superior"
  },
  {
    id: "economia-circular",
    title: "Aprovechamiento Integral Cero Desperdicio",
    description: "No desechamos nada: transformamos la pulpa, el agua, la cáscara y el capacho en productos de alto valor económico y ecológico.",
    iconName: "RefreshCw",
    tag: "Sostenibilidad Total"
  },
  {
    id: "impacto-social",
    title: "Comercio Justo y Enfoque Comunitario",
    description: "Trabajamos mano a mano con asociaciones de pequeños productores e iniciativas lideradas por mujeres afrodescendientes del Pacífico.",
    iconName: "Users",
    tag: "Desarrollo Local"
  },
  {
    id: "trazabilidad-garantizada",
    title: "Trazabilidad desde la Palmera",
    description: "Acompañamos cada etapa, garantizando prácticas de cosecha limpia, conservación de la biodiversidad y transparencia total.",
    iconName: "ShieldCheck",
    tag: "Transparencia"
  },
  {
    id: "innovacion-universitaria",
    title: "Innovación & Respaldo Académico",
    description: "Diseñado como un proyecto universitario de impacto real que une ciencia de alimentos, diseño sostenible y emprendimiento social.",
    iconName: "GraduationCap",
    tag: "I+D Colombiano"
  }
];

export const PRODUCER_ZONES: PacificProducerZone[] = [
  {
    id: "tumaco",
    region: "Tumaco",
    department: "Nariño",
    impactFocus: "Liderazgo femenino y asociaciones afrodescendientes",
    description: "Epicentro de la producción tradicional de coco en la costa sur. Promovemos acuerdos de compra directa que garantizan ingresos estables para familias recolectoras.",
    communityPartners: "Asociaciones de mujeres transformadoras de Tumaco"
  },
  {
    id: "guapi",
    region: "Guapi",
    department: "Cauca",
    impactFocus: "Cosecha sostenible en cuencas de ríos ancestrales",
    description: "Palmares biodiversos cultivados en armonía con los ríos. Apoyamos la logística de transporte fluvial eficiente para mantener la frescura del fruto.",
    communityPartners: "Cooperativas agrícolas cuenca del río Guapi"
  },
  {
    id: "timbiqui",
    region: "Timbiquí",
    department: "Cauca",
    impactFocus: "Prácticas agroecológicas y conservación de suelo",
    description: "Modelos de agricultura tradicional libre de agrotóxicos. Protegemos el ecosistema de manglares valorizando el fruto maduro de coco.",
    communityPartners: "Recolectores tradicionales de Timbiquí"
  },
  {
    id: "buenaventura",
    region: "Buenaventura",
    department: "Valle del Cauca",
    impactFocus: "Centro logístico de acopio y trazabilidad",
    description: "Articulación con rutas marítimas y terrestres para transportar el fruto con las condiciones de humedad e higiene óptimas hasta el procesamiento.",
    communityPartners: "Redes acopiadoras del Pacífico medio"
  }
];

export const CIRCULAR_STEPS: CircularStep[] = [
  {
    stepNumber: 1,
    part: "Capacho (Fibra Exterior)",
    title: "Sustratos & Aislamiento Sostenible",
    description: "La capa de fibra exterior se desfasa para crear bloques de sustrato orgánico agrícola e insonorizantes naturales.",
    derivedProducts: ["Bio-Sustrato agrícola", "Fibra para aglomerados", "Aislante térmico"],
    iconName: "Sprout",
    color: "from-amber-700 to-amber-900"
  },
  {
    stepNumber: 2,
    part: "Cáscara Dura (Endocarpio)",
    title: "Carbón Activado & Artesanías",
    description: "La concha leñosa se carboniza para obtener carbón activado para filtros de agua o se moldea en vajilla bio-degradable.",
    derivedProducts: ["Carbón activado", "Recipientes de cáscara", "Laminados ecológicos"],
    iconName: "Flame",
    color: "from-stone-700 to-stone-900"
  },
  {
    stepNumber: 3,
    part: "Agua Dulce de Coco",
    title: "Hidratación Isotonica Nativa",
    description: "Se extrae el líquido electrolítico en punto óptimo de madurez, microfiltrándolo para mantener potasio y minerales.",
    derivedProducts: ["Agua de coco pura", "Bases para kombucha y fermentos"],
    iconName: "GlassWater",
    color: "from-emerald-600 to-teal-800"
  },
  {
    stepNumber: 4,
    part: "Pulpa Fresca (Endospermo)",
    title: "Crema Gourmet & Derivados",
    description: "Prensa delicada para extraer la Crema de Coco Gourmet, Aceite Extra Virgen, Harina Proteica y Chips Crujientes.",
    derivedProducts: ["Crema de Coco Gourmet", "Aceite Extra Virgen", "Harina de Coco", "Chips horneados"],
    iconName: "Sparkles",
    color: "from-amber-500 to-emerald-700"
  }
];

export const TARGET_PERSONAS: TargetPersona[] = [
  {
    id: "chef-repostero",
    role: "Reposteros & Chefs Gourmet",
    tagline: "Buscadores de textura impecable e ingredientes puros",
    description: "Profesionales de la gastronomía y la repostería artesanal que requieren una crema de coco con alta estabilidad, sabor genuino y textura sin grumos.",
    keyNeeds: [
      "Sin aditivos que alteren la cocción o batido",
      "Sabor intenso y aromático a coco real",
      "Consistencia homogénea lote tras lote"
    ],
    quote: "En la repostería fina, un ingrediente puro transforma un postre ordinario en una experiencia memorable.",
    avatarSeed: "chef_persona",
    matchScore: "98% de afinidad de uso"
  },
  {
    id: "consumidor-fit",
    role: "Consumidores Fit & Conscientes",
    tagline: "Amantes de la alimentación saludable sin sacrificar sabor",
    description: "Personas interesadas en productos veganos, sin gluten y 100% naturales para integrar en desayunos, batidos o recetas diarias.",
    keyNeeds: [
      "Etiqueta limpia (Clean Label) sin azúcares ni químicos",
      "Aporte de grasas saludables de cadena media (MCT)",
      "Procesos respetuosos con el medio ambiente"
    ],
    quote: "Busco productos que nutran mi cuerpo y al mismo tiempo respeten el origen y a las personas que los cultivan.",
    avatarSeed: "health_persona",
    matchScore: "95% de afinidad de uso"
  },
  {
    id: "amante-origen",
    role: "Amantes del Sabor Colombiano & Social",
    tagline: "Consumidores motivados por el impacto positivo local",
    description: "Compradores apasionados por la riqueza gastronómica de Colombia y que valoran apoyar emprendimientos universitarios y comunidades rurales.",
    keyNeeds: [
      "Origen territorial transparente y trazable",
      "Apoyo real a campesinos y comunidades del Pacífico",
      "Innovación con sello de calidad colombiano"
    ],
    quote: "Comprar un producto del Pacífico colombiano es apoyar el talento, la paz y la riqueza de nuestra tierra.",
    avatarSeed: "colombia_persona",
    matchScore: "96% de afinidad de uso"
  }
];

export const VALUE_PROPOSITIONS: ValuePropPillar[] = [
  {
    title: "Calidad Gourmet",
    description: "Extracción controlada que resalta la untuosidad y aroma natural de la pulpa sin aditivos sintéticos.",
    iconName: "Sparkles",
    benefit: "Experiencia sensorial superior"
  },
  {
    title: "Sostenibilidad Circular",
    description: "Aprovechamos el 100% del fruto (pulpa, agua, cáscara y capacho), reduciendo huella de carbono y desperdicios.",
    iconName: "RefreshCw",
    benefit: "Zero-Waste agroindustrial"
  },
  {
    title: "Origen & Trazabilidad",
    description: "Nuestra materia prima proviene de palmares biodiversos del Pacífico colombiano con supervisión de origen.",
    iconName: "MapPin",
    benefit: "Identidad territorial colombiana"
  },
  {
    title: "Soporte a Productores",
    description: "Generamos relaciones de valor equitativo y desarrollo social con familias y asociaciones costeras.",
    iconName: "HeartHandshake",
    benefit: "Impacto social transformador"
  }
];
