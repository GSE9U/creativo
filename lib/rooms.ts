import type { Room } from "@/lib/types";

export const rooms: Room[] = [
  {
    id: 1,
    slug: "antes-de-las-tic",
    title: "Antes de las TIC",
    subtitle: "Arte fisico, difusion lenta y acceso limitado",
    body: "Durante siglos, la creacion artistica dependio de materiales fisicos, espacios locales y mediadores tradicionales; el acceso a obras y publicos era valioso, pero geograficamente restringido.",
    bullets: [
      "Produccion analogica: lienzo, escultura y fotografia quimica.",
      "Distribucion por galerias, museos y editoriales.",
      "Formacion artistica concentrada en instituciones urbanas.",
      "Publicos segmentados por ubicacion y poder adquisitivo."
    ],
    quote: "El arte viajaba despacio; su impacto tambien.",
    funFact: "Una exposicion internacional podia tardar meses en circular fisicamente.",
    visual: {
      type: "image",
      alt: "Taller artistico tradicional con herramientas fisicas",
      srcPlaceholder: "/images/room1.jpg"
    },
    theme: {
      accentClass: "text-amber-300",
      bgClass: "from-zinc-900 via-stone-900 to-zinc-950",
      glowClass: "shadow-amber-500/20"
    }
  },
  {
    id: 2,
    slug: "digitalizacion-creativa",
    title: "Digitalizacion Creativa",
    subtitle: "Software, edicion no lineal y modelado 3D",
    body: "La llegada de herramientas digitales transformo el proceso creativo: editar, iterar y prototipar se volvio mas rapido, accesible y colaborativo, ampliando formatos y profesiones hibridas.",
    bullets: [
      "Software de diseno acelera la experimentacion.",
      "Modelado y animacion 3D expanden lenguajes visuales.",
      "Produccion musical digital reduce barreras de entrada.",
      "Flujos creativos combinan tecnica y narrativa."
    ],
    quote: "Digitalizar no reemplazo al arte: multiplico sus herramientas.",
    funFact: "Una correccion que antes tomaba dias, hoy puede hacerse en minutos.",
    visual: {
      type: "image",
      alt: "Pantalla con software de edicion y diseno digital",
      srcPlaceholder: "/images/room2.jpg"
    },
    theme: {
      accentClass: "text-cyan-300",
      bgClass: "from-slate-900 via-cyan-950 to-slate-950",
      glowClass: "shadow-cyan-500/20"
    }
  },
  {
    id: 3,
    slug: "redes-sociales-y-cultura",
    title: "Redes Sociales",
    subtitle: "Democratizacion creativa y poder del algoritmo",
    body: "Las redes abrieron vitrinas globales para millones de creadores, pero tambien introdujeron logicas algoritmicas que condicionan visibilidad, tendencias y tiempos de atencion.",
    bullets: [
      "Cualquier movil puede ser estudio y canal de distribucion.",
      "La viralidad redefine exito cultural en horas.",
      "El algoritmo prioriza retencion sobre diversidad.",
      "Nacen nuevos oficios: creator, community y curator digital."
    ],
    quote: "Nunca fue tan facil publicar; nunca tan dificil sostener atencion.",
    funFact: "Un trend global puede durar menos de una semana.",
    visual: {
      type: "image",
      alt: "Pantalla con publicaciones de redes sociales y metricas",
      srcPlaceholder: "/images/room3.jpg"
    },
    theme: {
      accentClass: "text-fuchsia-300",
      bgClass: "from-zinc-900 via-fuchsia-950 to-zinc-950",
      glowClass: "shadow-fuchsia-500/20"
    }
  },
  {
    id: 4,
    slug: "streaming-y-plataformas",
    title: "Streaming y Plataformas",
    subtitle: "Cultura bajo demanda y burbujas de consumo",
    body: "El streaming consolido el acceso instantaneo a musica, cine y conocimiento, aunque la curaduria automatizada puede encerrar a los usuarios en burbujas de preferencia.",
    bullets: [
      "Acceso ubicuo a catalogos masivos de contenido.",
      "Recomendacion personalizada incrementa consumo.",
      "Mayor competencia por atencion en catalogos infinitos.",
      "Plataformas influyen en que se produce y financia."
    ],
    quote: "Elegimos mas, pero descubrimos dentro de limites invisibles.",
    funFact: "La mayoria de reproducciones proviene de recomendaciones automaticas.",
    visual: {
      type: "video",
      alt: "Interfaz de plataforma de streaming con recomendaciones",
      srcPlaceholder: "/images/room4.jpg"
    },
    theme: {
      accentClass: "text-emerald-300",
      bgClass: "from-slate-900 via-emerald-950 to-slate-950",
      glowClass: "shadow-emerald-500/20"
    }
  },
  {
    id: 5,
    slug: "ia-nft-vr",
    title: "IA, NFT y VR",
    subtitle: "Nuevas fronteras de autoria, valor y experiencia",
    body: "La inteligencia artificial generativa, los NFT y la realidad virtual expanden posibilidades expresivas, pero abren debates sobre autoria, propiedad intelectual, sostenibilidad y etica.",
    bullets: [
      "IA acelera ideacion visual, textual y sonora.",
      "NFT redefine nociones de propiedad digital.",
      "VR crea experiencias inmersivas y participativas.",
      "Etica: sesgos, consentimiento y trazabilidad de datos."
    ],
    quote: "La innovacion tecnica exige una responsabilidad cultural equivalente.",
    funFact: "Una obra inmersiva VR puede cambiar segun la interaccion del visitante.",
    visual: {
      type: "gradient",
      alt: "Paisaje abstracto tecnologico con elementos de IA y realidad virtual",
      srcPlaceholder: "/images/room5.jpg"
    },
    theme: {
      accentClass: "text-violet-300",
      bgClass: "from-zinc-900 via-violet-950 to-zinc-950",
      glowClass: "shadow-violet-500/20"
    }
  },
  {
    id: 6,
    slug: "futuro-hibrido",
    title: "Futuro Hibrido",
    subtitle: "Coexistencia entre lo fisico, lo digital y lo inmersivo",
    body: "El futuro de la cultura y el arte sera hibrido: espacios fisicos enriquecidos con capas digitales, comunidades globales y practicas creativas mas participativas, criticas y transdisciplinarias.",
    bullets: [
      "Eventos presenciales amplificados con interaccion digital.",
      "Educacion artistica mas abierta y conectada.",
      "Curaduria humana + sistemas inteligentes.",
      "Nuevos pactos eticos para crear y compartir."
    ],
    quote: "El reto no es elegir un formato, sino disenar experiencias con sentido.",
    funFact: "Museos ya prueban recorridos mixtos con capas AR y guias narrativas adaptativas.",
    visual: {
      type: "gradient",
      alt: "Museo hibrido con visitantes y capas digitales superpuestas",
      srcPlaceholder: "/images/room6.jpg"
    },
    theme: {
      accentClass: "text-sky-300",
      bgClass: "from-slate-900 via-sky-950 to-slate-950",
      glowClass: "shadow-sky-500/20"
    }
  }
];
