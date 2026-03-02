# Museo interactivo TIC y Arte

**Ver en produccion:** [https://creativo-8izq.vercel.app/](https://creativo-8izq.vercel.app/)

SPA educativa construida con Next.js (App Router) que presenta 6 salas narrativas sobre la evolucion entre tecnologia, cultura y arte, guiadas por un personaje interactivo.

## 1. Motivacion del proyecto

La eleccion de desarrollar un museo digital interactivo como formato creativo responde a la necesidad de reflejar no solo el contenido teorico del impacto de las Tecnologias de la Informacion y la Comunicacion (TIC) en la cultura y el arte, sino tambien su dimension experiencial. La literatura academica demuestra que la digitalizacion ha transformado profundamente los procesos de creacion, difusion y consumo cultural [1].

Las TIC han ampliado el acceso a la produccion artistica mediante herramientas digitales que permiten nuevas formas de expresion, incluyendo arte generativo, diseno digital y entornos virtuales [2], [3]. Esta transformacion no solo afecta a los creadores, sino tambien a los publicos, modificando los habitos de participacion cultural y el acceso a contenidos artisticos en entornos digitales [4].

Asimismo, la integracion de tecnologias digitales en instituciones culturales como museos y galerias ha incrementado la interaccion y el compromiso del publico, mejorando la experiencia cultural mediante herramientas multimedia e interfaces interactivas [5].

En el ambito educativo, la digitalizacion ha redefinido la formacion artistica y el diseno visual, incorporando competencias digitales esenciales para el desarrollo creativo contemporaneo [6]. Ademas, la irrupcion de la inteligencia artificial en la produccion artistica ha generado debates sobre autoria, creatividad y etica, consolidandose como un tema central en la investigacion actual [7].

Por tanto, el formato de museo interactivo permite representar esta evolucion historica y conceptual de manera coherente con el propio objeto de estudio, integrando tecnologia, narrativa y experiencia digital.

## 2. Conclusion

La influencia de las TIC en la cultura y el arte es estructural y transversal. No se limita a la aparicion de nuevas herramientas, sino que redefine los modelos de creacion, distribucion y participacion cultural. La eleccion de un formato digital interactivo constituye, en si misma, una manifestacion practica de dicha transformacion.

## Referencias

1. E. Mardiani, A. Y. Rukmana, P. A.-V. Maqfirah, P. Nuswantoro y S. Uhai, "Bibliometric Study on the Influence of Digital Technology in the Field of Arts and Culture," *The Eastasouth Journal of Social Science and Humanities*, vol. 1, no. 02, pp. 58-67, 2024. Disponible en: [https://esj.eastasouth-institute.com/index.php/esssh/article/view/212](https://esj.eastasouth-institute.com/index.php/esssh/article/view/212)

2. V. C. Marella, S. T. Erukude y S. R. Veluru, "The Impact of Artificial Intelligence on Traditional Art Forms: A Disruption or Enhancement," *arXiv preprint arXiv:2509.07029*, 2025. Disponible en: [https://arxiv.org/abs/2509.07029](https://arxiv.org/abs/2509.07029)

3. Y. Ding, "The Impact of Artificial Intelligence on Art Research: An Analysis of Academic Productivity and Multidisciplinary Integration," *arXiv preprint arXiv:2412.04850*, 2024. Disponible en: [https://arxiv.org/abs/2412.04850](https://arxiv.org/abs/2412.04850)

4. V. Ateca-Amestoy, "Live and digital engagement with the visual arts," *PMC*, 2022. Disponible en: [https://pmc.ncbi.nlm.nih.gov/articles/PMC9791640/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9791640/)

5. C. Ciurea, "Using Modern Information and Communication Technologies in Museums and Cultural Institutions to Improve Cultural Engagement," *Journal of Science and Arts*, vol. 10, no. 2.1, 2020. Disponible en: [https://www.aasmr.org/jsms/Vol10/Vol.10.2.1.pdf](https://www.aasmr.org/jsms/Vol10/Vol.10.2.1.pdf)

6. M. D. Gonzalez-Zamar et al., "Digital Design in Artistic Education: An Overview of Research," *Education Sciences*, vol. 11, no. 4, 2021. Disponible en: [https://www.mdpi.com/2227-7102/11/4/144](https://www.mdpi.com/2227-7102/11/4/144)

7. B. S. Sikharulidze, "The Effects of New Technologies on Culture," 2025. Disponible en: [https://madebyartist.org/wp-content/uploads/2025/01/The-Effects-Of-New-Technologies-On-Culture.pdf](https://madebyartist.org/wp-content/uploads/2025/01/The-Effects-Of-New-Technologies-On-Culture.pdf)

---

## Desarrollo

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: inicia entorno local.
- `npm run lint`: ejecuta lint.
- `npm run typecheck`: chequea tipos TS.
- `npm run build`: genera build de produccion.

## Estructura principal

- `app/`: layout global, estilos y pagina inicial.
- `components/`: shell, guia interactivo, mapa de salas, secciones y pasillos.
- `hooks/`: logica de sala activa (IntersectionObserver).
- `lib/`: tipos, datos de salas, dialogos del guia y utilidades.
- `public/images/`: imagenes de exhibicion y avatar del guia.

## Uso

1. Abre la web y Guillermo te dara la bienvenida.
2. Navega por salas con scroll, botones, sidebar o teclado (`ArrowUp`, `ArrowDown`).
3. Lee los dialogos del guia que acompanan cada seccion de la exhibicion.

## Deploy

Desplegado en Vercel: [https://creativo-8izq.vercel.app/](https://creativo-8izq.vercel.app/)
