export interface GuideDialogue {
  intro: string;
  onArtwork: string;
  onExhibits: string;
  closing: string;
}

export const guideDialogues: Record<number, GuideDialogue> = {
  1: {
    intro:
      "Bienvenido al museo. Soy Guillermo, tu guia. Comencemos por el principio: una epoca donde el arte se tocaba, se olia y viajaba despacio.",
    onArtwork:
      "Observa esta galeria clasica. Cada obra necesitaba meses para llegar a nuevos publicos. Los marcos dorados no son solo decoracion: representan el peso institucional que definia que era arte.",
    onExhibits:
      "Fijate en estos puntos. La creacion dependia de materiales fisicos y la distribucion de grandes intermediarios. El talento existia en todas partes, pero las oportunidades no.",
    closing:
      "Dejamos atras el mundo analogico. Lo que viene a continuacion cambio todo para siempre..."
  },
  2: {
    intro:
      "Aqui empieza la revolucion silenciosa. Las herramientas digitales pusieron un estudio completo dentro de una computadora.",
    onArtwork:
      "Mira estas pantallas. Software de diseno, modelado 3D, sintesis de audio... lo que antes requeria un taller fisico ahora cabe en un portatil.",
    onExhibits:
      "La iteracion se volvio instantanea. Probar, deshacer, rehacer. Esa libertad de experimentar sin desperdiciar material fisico cambio la mentalidad creativa.",
    closing:
      "Pero crear era solo la mitad del camino. Faltaba el gran salto: la distribucion masiva..."
  },
  3: {
    intro:
      "Preparate. Esta sala es vibrante, ruidosa y llena de color. Asi son las redes sociales en la cultura.",
    onArtwork:
      "Millones publican cada segundo. Un video de 15 segundos puede alcanzar mas personas que una exposicion en el museo mas visitado del mundo.",
    onExhibits:
      "Pero hay una tension. El algoritmo decide quien es visible y quien no. La viralidad premia lo rapido y repetible, no siempre lo profundo.",
    closing:
      "Del publicar al consumir... la siguiente sala te mostrara el otro lado de la moneda."
  },
  4: {
    intro:
      "Bienvenido a la era del acceso infinito. Todo el arte del mundo, a un click de distancia. O eso parece.",
    onArtwork:
      "Plataformas de streaming hicieron cotidiana una biblioteca cultural inmensa. Pero mira las lineas en el suelo: representan los caminos que el algoritmo elige por ti.",
    onExhibits:
      "La recomendacion personalizada incrementa consumo, pero puede encerrarte en una burbuja. Descubres mucho, pero dentro de limites invisibles.",
    closing:
      "Lo que viene despues rompe todas las reglas conocidas. Acompaname..."
  },
  5: {
    intro:
      "Esta es la frontera. Aqui el arte se genera con inteligencia artificial, se posee como NFT y se vive en realidad virtual.",
    onArtwork:
      "Mira esa proyeccion. Una IA la genero. Quien es el autor? La persona que escribio el prompt, el equipo que entreno el modelo, o la maquina misma? Grandes preguntas sin respuestas faciles.",
    onExhibits:
      "Los NFT proponen nuevas formas de propiedad digital. La VR crea experiencias donde el visitante es parte de la obra. Pero los dilemas eticos son enormes.",
    closing:
      "Una ultima sala nos espera. El futuro ya esta aqui, y es mas hibrido de lo que imaginamos."
  },
  6: {
    intro:
      "Hemos llegado al final del recorrido. Pero el futuro apenas comienza a escribirse.",
    onArtwork:
      "Mira como conviven esculturas clasicas con hologramas digitales. Este es el futuro hibrido: lo fisico y lo digital no compiten, se complementan.",
    onExhibits:
      "Eventos presenciales con capas digitales, educacion artistica conectada globalmente, curaduria humana potenciada por IA. El reto es disenar con sentido, no solo con tecnologia.",
    closing:
      "Gracias por recorrer el museo conmigo. Lleva contigo estas reflexiones: la tecnologia es una herramienta, y el arte siempre sera humano."
  }
};
