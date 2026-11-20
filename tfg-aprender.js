/* Contenido de enseñanza del Constructor del TFG: metodología, reglas y su porqué, APA 7, Zotero y Mendeley.
   Determinista: no usa inteligencia artificial. Las citas de este texto están en APA 7 y todas figuran en FUENTES
   (se comprueba con la prueba prueba_tfg_aprender.js). */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.TFGAprender = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // ---------- Fuentes (APA 7). El asterisco marca la cursiva. ----------
  var FUENTES = {
    apa: 'American Psychological Association. (2020). *Publication manual of the American Psychological Association* (7th ed.). https://doi.org/10.1037/0000165-000',
    hs: 'Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). *Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta*. McGraw-Hill Interamericana.',
    cr: 'Creswell, J. W., & Creswell, J. D. (2023). *Research design: Qualitative, quantitative, and mixed methods approaches* (6th ed.). SAGE.',
    arias: 'Arias, F. G. (2012). *El proyecto de investigación: Introducción a la metodología científica* (6.ª ed.). Episteme.',
    bernal: 'Bernal Torres, C. A. (2016). *Metodología de la investigación: Administración, economía, humanidades y ciencias sociales* (4.ª ed.). Pearson.',
    tamayo: 'Tamayo y Tamayo, M. (2003). *El proceso de la investigación científica* (4.ª ed.). Limusa.',
    crawley: 'Crawley, E. F., Malmqvist, J., Östlund, S., Brodeur, D. R., & Edström, K. (2014). *Rethinking engineering education: The CDIO approach* (2nd ed.). Springer. https://doi.org/10.1007/978-3-319-05561-9',
    cronbach: 'Cronbach, L. J. (1951). Coefficient alpha and the internal structure of tests. *Psychometrika, 16*(3), 297–334. https://doi.org/10.1007/BF02310555',
    aiken: 'Aiken, L. R. (1985). Three coefficients for analyzing the reliability and validity of ratings. *Educational and Psychological Measurement, 45*(1), 131–142. https://doi.org/10.1177/0013164485451012',
    cochran: 'Cochran, W. G. (1977). *Sampling techniques* (3rd ed.). Wiley.',
    brooke: 'Brooke, J. (1996). SUS: A «quick and dirty» usability scale. In P. W. Jordan, B. Thomas, B. A. Weerdmeester, & I. L. McClelland (Eds.), *Usability evaluation in industry* (pp. 189–194). Taylor & Francis.',
    wiegers: 'Wiegers, K., & Beatty, J. (2013). *Software requirements* (3rd ed.). Microsoft Press.',
    zotero: 'Corporation for Digital Scholarship. (s. f.). *Zotero documentation*. https://www.zotero.org/support/',
    mendeley: 'Elsevier. (s. f.). *Mendeley guides*. https://www.mendeley.com/guides',
    oym: 'Universidad Dominicana O&M. (2026). *Guía práctica para la elaboración del Trabajo Final de Curso Monográfico*. Dirección de Trabajo Final de Grado y Curso Monográfico.',
    luis: 'Luis, Y. (2026). *Guía práctica para el desarrollo autónomo y riguroso del trabajo final de grado*. Universidad Dominicana O&M.'
  };

  // ---------- Lecciones de metodología, una por sección ----------
  var L = {};
  function leccion(id, o) { o.id = id; L[id] = o; }

  leccion('ruta', { titulo: 'Qué es un Trabajo Final de Grado y cómo se construye',
    que: 'Es una investigación aplicada en la que demuestras que puedes detectar un problema real en una institución, sustentarlo con teoría, medirlo con instrumentos y proponer una solución técnica viable. No es un informe descriptivo: es un argumento completo.',
    porque: 'La universidad evalúa competencias de investigación y de ingeniería a la vez: delimitar un problema, revisar literatura, elegir una metodología, analizar datos y defender decisiones con fundamento (Luis, 2026). Por eso cada parte debe conectarse con la anterior.',
    pasos: ['Delimita un problema real, con evidencias, en una institución concreta.', 'Formula una pregunta general y una pregunta por cada objetivo específico (3 o 4).', 'Sustenta con antecedentes reales y con teoría (Capítulo II).', 'Define cómo lo vas a medir: enfoque, diseño, muestra, técnicas e instrumentos (Capítulo III).', 'Presenta y discute los resultados (Capítulo IV).', 'Propón la solución técnica con su presupuesto y su impacto (Capítulo V).', 'Cierra con conclusiones que respondan a cada objetivo.'],
    errores: ['Escribir los capítulos por separado, sin que el objetivo, la técnica y la conclusión coincidan.', 'Dejar la propuesta para el final sin haber medido el problema.'],
    ejemplo: 'Si el objetivo 2 es «identificar las dificultades del registro de inventario», debe existir una técnica que las mida (entrevista, observación), un resultado en el Capítulo IV y una conclusión que lo responda.',
    fuentes: ['luis', 'hs'] });

  leccion('titulo', { titulo: 'El título del trabajo',
    que: 'Delimita en una sola oración qué se hace, sobre qué, dónde y cuándo. Sigue la fórmula [ACCIÓN] de [SISTEMA O SOLUCIÓN] [TÉCNICA] para [EMPRESA] en [UBICACIÓN], durante [PERÍODO], con 15 a 25 palabras.',
    porque: 'El título es el primer contrato con el jurado: todo lo demás (objetivo general, población, tiempo) debe coincidir con él. Un título ambiguo produce un trabajo ambiguo. Debe iniciar con un sustantivo (análisis, evaluación, diseño, propuesta) y no con un verbo en infinitivo (Universidad Dominicana O&M, 2026).',
    pasos: ['Escribe primero el objetivo general y de él extrae el título.', 'Comienza con un sustantivo: «Evaluación…», «Diseño…», «Propuesta…».', 'Incluye la institución, el lugar y el período real del estudio.', 'Verifica que sea el mismo en la portada, la hoja de título y el objetivo general.'],
    errores: ['Empezar con «Evaluar…» o «Diseñar…».', 'Poner un período distinto al de las fechas reales del trabajo de campo.', 'Un título de 8 palabras que no dice dónde ni cuándo.'],
    ejemplo: 'Evaluación del control de inventario y propuesta de un sistema informático para Suplimarket Sorpresa, Los Alcarrizos, durante octubre de 2026.',
    fuentes: ['oym', 'arias'] });

  leccion('agradecimientos', { titulo: 'Agradecimientos y dedicatorias',
    que: 'Páginas preliminares personales, con tono formal. Los agradecimientos siguen un orden (Dios o la fe, la universidad, el asesor, los profesores, la empresa, su personal y los compañeros).',
    porque: 'Son de las primeras páginas que lee el jurado; mostrar rigor y formalidad desde ahí condiciona la lectura. La dedicatoria no se evalúa, pero un título repetido o en singular sí se corrige.',
    pasos: ['Escribe un solo título «Agradecimientos» y uno «Dedicatorias», en plural.', 'Nombra contribuciones concretas, no frases genéricas.', 'Numera estas páginas en romano minúsculo (i, ii, iii).'],
    errores: ['Repetir el título por cada integrante.', 'Más de una página de dedicatoria.'],
    ejemplo: 'Al ingeniero Carlos Lajara, por guiar el diseño metodológico y revisar cada versión con paciencia.',
    fuentes: ['oym'] });

  leccion('introduccion', { titulo: 'La introducción',
    que: 'Es un mapa de lectura de 2 a 3 páginas: presenta el tema y el título, el contexto e importancia, el propósito y, en un párrafo por capítulo, lo que contiene cada parte.',
    porque: 'Orienta al lector antes de entrar al detalle y demuestra que dominas la estructura. Se escribe al final, cuando ya sabes lo que contiene el trabajo (Universidad Dominicana O&M, 2026).',
    pasos: ['Nombra el título completo y qué busca lograr.', 'Ubica el tema en un contexto más amplio.', 'Explica el propósito y el aporte.', 'Cierra con la fórmula «El Capítulo I, denominado…, expone…» para cada capítulo.'],
    errores: ['Convertirla en un resumen de resultados o conclusiones.', 'Escribirla en primera persona del singular.', 'Repetir párrafos completos del planteamiento.'],
    ejemplo: 'El Capítulo III, denominado Marco metodológico, expone el enfoque mixto, la población de 21 colaboradores y las técnicas de recolección.',
    fuentes: ['oym'] });

  leccion('antecedentes', { titulo: 'Antecedentes de la investigación',
    que: 'Son investigaciones previas reales (tesis, artículos científicos) relacionadas con tu problema, organizadas por ámbito: internacional, nacional y local. De cada una indicas autor y año, objetivo, método, principal resultado y qué aporta a tu trabajo.',
    porque: 'Demuestran que el problema es investigable, que conoces lo que ya se hizo y que tu aporte no repite. Las leyes, las normas y los informes de proveedores no son antecedentes: se ubican en las bases legales o teóricas (Hernández-Sampieri & Mendoza Torres, 2018).',
    pasos: ['Busca en repositorios universitarios y en bases indexadas (Google Académico, Scielo, Redalyc, repositorios UNPHU, UASD, INTEC).', 'Elige estudios de los últimos cinco a diez años con método y resultados claros.', 'Resume cada uno con autor y año, objetivo, método, resultado y aporte.', 'Cierra cada uno con una frase que lo conecte con tu trabajo.'],
    errores: ['Usar una ley o un informe comercial como antecedente.', 'Copiar el resumen del artículo sin reformularlo.', 'No explicar qué aporta cada estudio.'],
    ejemplo: 'Quispe (2023) evaluó el efecto de un asistente virtual en el proceso de matrícula con un diseño preexperimental; su resultado respalda la idea de que un canal único reduce las consultas repetidas.',
    fuentes: ['hs', 'apa'] });

  leccion('planteamiento', { titulo: 'Planteamiento del problema',
    que: 'Describe el problema de lo general a lo particular: el contexto amplio, su manifestación en el país y la situación específica de la institución, apoyada en evidencias (datos, registros, observaciones).',
    porque: 'Un problema sin evidencia es una opinión. El planteamiento justifica por qué el trabajo es necesario y marca lo que luego debes medir (Hernández-Sampieri & Mendoza Torres, 2018).',
    pasos: ['Contextualiza el fenómeno con datos de fuentes citadas.', 'Describe cómo ocurre en tu institución, con evidencias propias.', 'Cierra con la formulación (pregunta general) y la sistematización (preguntas específicas).'],
    errores: ['Afirmar problemas sin datos ni fuentes.', 'Incluir la solución dentro del planteamiento.'],
    ejemplo: 'En la tienda, el inventario se revisa cada dos días con cuadernos; un recuento de 12 productos mostró diferencias en 5.',
    fuentes: ['hs'] });

  leccion('formulacion', { titulo: 'Formulación del problema',
    que: 'Es la pregunta general de investigación: una sola, clara y respondible con tu estudio.',
    porque: 'El objetivo general debe responder literalmente a esta pregunta. Si no coinciden, el trabajo pierde dirección (Arias, 2012).',
    pasos: ['Redáctala como pregunta que incluya el objeto, el lugar y el período.', 'Comprueba que tu objetivo general la responde.'],
    errores: ['Preguntas de sí o no.', 'Preguntas que el estudio no puede responder con sus técnicas.'],
    ejemplo: '¿Cómo se realiza el control de inventario en la tienda durante octubre de 2026 y cómo un sistema informático puede mejorarlo?',
    fuentes: ['arias'] });

  leccion('sistematizacion', { titulo: 'Sistematización del problema',
    que: 'Son las preguntas específicas que desglosan la pregunta general. Hay una por cada objetivo específico, en el mismo orden.',
    porque: 'La correspondencia uno a uno entre preguntas, objetivos, técnicas y conclusiones es la columna vertebral del trabajo. Si una pregunta no tiene objetivo, o un objetivo no tiene conclusión, hay una incoherencia (Luis, 2026).',
    pasos: ['Escribe una pregunta por línea, de 3 a 4.', 'Numera mentalmente: pregunta 1 ↔ objetivo 1 ↔ técnica ↔ resultado ↔ conclusión 1.'],
    errores: ['Más preguntas que objetivos.', 'Preguntas en distinto orden que los objetivos.'],
    ejemplo: '¿Cuál es el proceso actual de despacho? → Objetivo: describir el proceso actual de despacho.',
    fuentes: ['luis'] });

  leccion('justificacion', { titulo: 'Justificación',
    que: 'Argumenta por qué vale la pena el estudio: su importancia práctica, teórica y metodológica, y quiénes se benefician directa e indirectamente.',
    porque: 'Responde la pregunta «¿y qué?» del jurado: sin utilidad concreta, el trabajo no se sostiene (Hernández-Sampieri & Mendoza Torres, 2018).',
    pasos: ['Explica el aporte práctico para la institución.', 'Señala el aporte teórico y metodológico.', 'Nombra los beneficiarios directos e indirectos.'],
    errores: ['Repetir el planteamiento.', 'Prometer beneficios que no podrás demostrar.'],
    ejemplo: 'El sistema permitirá al personal registrar entradas y salidas en tiempo real, reduciendo diferencias entre el registro y el inventario físico.',
    fuentes: ['hs'] });

  leccion('objetivos', { titulo: 'Objetivos de la investigación',
    que: 'El objetivo general retoma el título y responde la pregunta general. Los específicos (3 a 4) desglosan el camino en acciones medibles, una por pregunta de sistematización.',
    porque: 'Los objetivos definen qué debes demostrar y guían los capítulos. Se redactan con verbos que se puedan comprobar (analizar, identificar, determinar, diseñar, formular); verbos como conocer, comprender o entender no se pueden medir (Universidad Dominicana O&M, 2026).',
    pasos: ['Redacta el general con la misma idea del título.', 'Redacta de 3 a 4 específicos, uno por línea.', 'Verifica que cada uno tendrá una técnica, un resultado y una conclusión.'],
    errores: ['Usar «conocer» o «comprender».', 'Poner objetivos que son actividades («hacer una encuesta»).', 'Más de cuatro objetivos específicos.'],
    ejemplo: 'Determinar los requisitos funcionales y no funcionales del sistema de control de inventario.',
    fuentes: ['oym', 'arias'] });

  leccion('marco_contextual', { titulo: 'Marco contextual',
    que: 'Describe la institución donde realizas el proyecto: historia, misión, visión, estructura y el proceso que estudias.',
    porque: 'Permite al lector entender el entorno del problema y justifica por qué la propuesta se adapta a esa organización (Luis, 2026).',
    pasos: ['Usa fuentes oficiales de la institución y cítalas.', 'Describe solo lo relevante para tu problema.', 'Incluye el organigrama o los procesos si ayudan.'],
    errores: ['Copiar la página web de la empresa sin citarla.', 'Información irrelevante para el problema.'],
    ejemplo: 'La empresa inició operaciones en 1989 y ofrece servicios de courier y logística internacional (Express Parcel Service International, 2026).',
    fuentes: ['luis', 'apa'] });

  leccion('bases_teoricas', { titulo: 'Bases teóricas y tecnológicas (Marco teórico)',
    que: 'Desarrolla los conceptos, teorías, modelos y tecnologías que sustentan tu problema y tu propuesta, con autores reconocidos. Se organiza en 15 a 20 secciones, cada una cerrada con una postura propia.',
    porque: 'Sin marco teórico, las decisiones del trabajo son opiniones. Cada concepto que uses en los objetivos o la propuesta debe estar definido y respaldado (Hernández-Sampieri & Mendoza Torres, 2018).',
    pasos: ['Lista los conceptos clave de tu título y de tus objetivos.', 'Dedica una sección a cada uno con definición, enfoques y relación con tu caso.', 'Cita cada afirmación; parafrasea con tus palabras.', 'Cierra cada sección con una síntesis propia.'],
    errores: ['Encadenar citas sin análisis.', 'Copiar definiciones literales largas.', 'Incluir temas que no usarás.'],
    ejemplo: 'Sección «Control de inventarios»: define el concepto, compara métodos (PEPS, promedio) y explica cuál aplica a tu caso.',
    fuentes: ['hs', 'apa'] });

  leccion('enfoque', { titulo: 'Enfoque de la investigación',
    que: 'Indica si el estudio es cuantitativo (mide con números), cualitativo (interpreta significados) o mixto (combina ambos).',
    porque: 'El enfoque determina las técnicas, el análisis y lo que puedes afirmar. En los TFG de Ingeniería de la OyM el enfoque habitual es mixto: números para medir el problema y entrevistas para comprender el proceso (Hernández-Sampieri & Mendoza Torres, 2018; Creswell & Creswell, 2023).',
    pasos: ['Explica qué parte medirás con números y cuál interpretarás.', 'Justifica por qué combinar ambos responde mejor tus objetivos.'],
    errores: ['Decir «mixto» sin usar técnicas de ambos tipos.', 'Definirlo sin aplicarlo a tu caso.'],
    ejemplo: 'Mixto: encuesta a 21 colaboradores (cuantitativo) y entrevista a la gerente (cualitativo).',
    fuentes: ['hs', 'cr'] });

  leccion('tipo_nivel', { titulo: 'Tipo, nivel y diseño',
    que: 'El nivel indica la profundidad (exploratorio, descriptivo, correlacional o explicativo); el diseño, cómo se recogen los datos: no experimental (no manipulas variables), transeccional (una sola vez) o longitudinal.',
    porque: 'Estas decisiones evitan afirmar más de lo que el estudio permite. Un diseño no experimental descriptivo no demuestra que el sistema «causó» una mejora (Hernández-Sampieri & Mendoza Torres, 2018).',
    pasos: ['Elige el nivel según tu objetivo (describir, relacionar, explicar).', 'Declara que no manipulas variables si es no experimental.', 'Indica el período del trabajo de campo.'],
    errores: ['Prometer causalidad con un diseño descriptivo.', 'Definir el tipo sin justificarlo.'],
    ejemplo: 'Descriptivo, no experimental, transeccional: los datos se recogieron una sola vez, el 17 de octubre de 2026.',
    fuentes: ['hs', 'arias'] });

  leccion('poblacion_muestra', { titulo: 'Población y muestra',
    que: 'La población es el conjunto de elementos con las características de estudio; la muestra es la parte de ella de la que realmente recoges datos. Debes declarar cuántos son, cómo los elegiste y por qué.',
    porque: 'El tamaño y la forma de selección determinan hasta dónde puedes generalizar. Con poblaciones pequeñas se trabaja un censo (todos); con muestras por conveniencia no se generaliza estadísticamente y debe declararse como limitación (Hernández-Sampieri & Mendoza Torres, 2018).',
    pasos: ['Cuenta la población real (documento de la institución).', 'Si es pequeña (menos de unos 50), usa censo.', 'Si usas fórmula para población finita, muestra los datos y la fuente (Cochran, 1977).', 'Declara los criterios de inclusión y exclusión.'],
    errores: ['Cambiar el tamaño de la muestra entre capítulos.', 'Una muestra por conveniencia sin declarar su límite.', 'No justificar por qué ese número.'],
    ejemplo: 'La población fue de 21 colaboradores; se trabajó con un censo de los 20 colaboradores y la entrevista a la gerente.',
    fuentes: ['hs', 'cochran'] });

  leccion('tecnicas', { titulo: 'Técnicas e instrumentos de recolección de datos',
    que: 'La técnica es el procedimiento general; el instrumento es la herramienta concreta: encuesta → cuestionario; entrevista → guía; observación → ficha o lista de cotejo; revisión documental → matriz documental.',
    porque: 'En los TFG de Ingeniería de la OyM se aplican las cuatro técnicas (observación directa, entrevista, revisión documental y encuesta) porque se triangula: cada una mira el problema desde un ángulo distinto. Cada instrumento debe existir porque responde a uno o más objetivos (Luis, 2026).',
    pasos: ['Parte del objetivo, no de preguntas sueltas.', 'Elige la técnica y construye el instrumento; si mides usabilidad percibida, puedes usar una escala validada como la SUS (Brooke, 1996).', 'Si hubo encuesta, indica si fue presencial o virtual (con la URL completa si fue virtual).', 'En los anexos incluye un formulario vacío y dos llenos.'],
    errores: ['Instrumentos con preguntas que no responden a ningún objetivo.', 'Preguntas dobles («¿es útil y motivador?»).', 'No documentar cuándo se aplicó cada técnica.'],
    ejemplo: 'Objetivo 2 (identificar dificultades) → entrevista semiestructurada al personal y observación del proceso de despacho.',
    fuentes: ['luis', 'hs'] });

  leccion('analisis_datos', { titulo: 'Procedimiento de análisis de los datos',
    que: 'Explica cómo procesaste la información: frecuencias y porcentajes para datos cuantitativos, categorías y codificación para los cualitativos, y cómo triangulaste ambos.',
    porque: 'Permite al jurado comprobar que los resultados salen de un procedimiento y no de impresiones (Creswell & Creswell, 2023).',
    pasos: ['Describe las herramientas usadas (Excel, Google Forms).', 'Explica cómo codificaste las respuestas abiertas.', 'Indica cómo contrastaste las fuentes entre sí.'],
    errores: ['Mostrar gráficos sin explicar cómo se calcularon.', 'No distinguir lo declarado por los participantes de lo comprobado.'],
    ejemplo: 'Las respuestas cerradas se tabularon en frecuencias y porcentajes; las entrevistas se codificaron en cuatro categorías.',
    fuentes: ['cr', 'hs'] });

  leccion('validez', { titulo: 'Validez y confiabilidad de los instrumentos',
    que: 'La validez indica si el instrumento mide lo que debe medir (se evalúa con juicio de expertos); la confiabilidad, si mide de forma consistente (alfa de Cronbach para escalas, KR-20 para ítems correcto/incorrecto).',
    porque: 'No basta escribir «el instrumento fue validado»: el jurado pide saber quién validó, con qué criterios y qué cambió. Para entrevistas no se usa alfa de Cronbach: se explica el protocolo uniforme y la triangulación (Luis, 2026).',
    pasos: ['Selecciona expertos y registra su perfil y cantidad.', 'Entrégales el instrumento, los objetivos y una ficha (pertinencia, claridad, coherencia, relevancia y suficiencia).', 'Si cuantificas el acuerdo entre expertos, indica el índice y el criterio de aceptación, por ejemplo con la V de Aiken (1985).', 'Registra qué ítems cambiaron.', 'Para escalas, calcula la consistencia interna (Cronbach, 1951) y anexa la evidencia.'],
    errores: ['Escribir «validado» sin evidencia.', 'Usar alfa de Cronbach en una entrevista.', 'No dejar el formato de validación lleno en los anexos.'],
    ejemplo: 'Tres especialistas valoraron el cuestionario con una escala de 1 a 4; se modificaron dos ítems por ambigüedad.',
    fuentes: ['luis', 'aiken', 'cronbach'] });

  leccion('resultados', { titulo: 'Presentación y análisis de los resultados',
    que: 'Muestra lo que produjeron tus instrumentos, organizado por objetivo, con tablas o gráficos y una interpretación de cada uno. Cada subtítulo nombra el indicador medido, sin signos de pregunta.',
    porque: 'Describir no es analizar: cada dato debe decir algo sobre tu problema. Además, toda tabla o figura debe mencionarse en el texto y llevar su fuente (Luis, 2026).',
    pasos: ['Presenta primero el resultado y luego su lectura.', 'Menciona cada tabla o figura en el texto («como muestra la Tabla 4.1…»).', 'Incluye la fuente: «Fuente: Realización propia.».', 'Usa el tamaño de muestra (n) en cada resultado.'],
    errores: ['Insertar gráficos sin interpretarlos.', 'Rótulos de tabla que nadie menciona.', 'Cifras que no coinciden con las del Capítulo III.'],
    ejemplo: '4.1.1 Frecuencia de diferencias de inventario: de 12 productos, 5 mostraron diferencias (Tabla 4.1).',
    fuentes: ['luis'] });

  leccion('discusion', { titulo: 'Discusión de los resultados',
    que: 'Interpreta los hallazgos frente a los antecedentes y el marco teórico: qué encontraste, qué significa, si coincide o difiere de otros estudios y qué implica.',
    porque: 'La discusión es donde demuestras criterio propio: conectas tus datos con el conocimiento existente (Creswell & Creswell, 2023).',
    pasos: ['Resume el hallazgo principal de cada objetivo.', 'Compáralo con al menos un antecedente.', 'Explica coincidencias y diferencias.', 'Señala las limitaciones del estudio.'],
    errores: ['Repetir los números sin interpretarlos.', 'No relacionar con antecedentes ni teoría.'],
    ejemplo: 'Nuestro hallazgo coincide con lo reportado por Quispe (2023): centralizar la consulta reduce la repetición de preguntas.',
    fuentes: ['cr'] });

  leccion('propuesta', { titulo: 'Propuesta técnica (Capítulo V)',
    que: 'Es la solución de ingeniería que responde a los problemas medidos: su descripción, requisitos funcionales y no funcionales, diagramas, componentes justificados, pantallas, presupuesto, comparación antes y después, áreas impactadas y beneficios.',
    porque: 'Es el aporte técnico del trabajo y se califica en innovación y originalidad. Debe nacer de los resultados del Capítulo IV: cada requisito se justifica con un hallazgo (Wiegers & Beatty, 2013). Muchos proyectos de ingeniería se organizan con el enfoque CDIO (Concebir, Diseñar, Implementar y Operar) (Crawley et al., 2014).',
    pasos: ['Lista los requisitos funcionales y no funcionales, cada uno con su origen (entrevista, observación o documento).', 'Muestra diagramas, esquema de base de datos o arquitectura.', 'Justifica cada componente.', 'Indica el alcance: qué incluye y qué no.'],
    errores: ['Proponer una solución desconectada del diagnóstico.', 'No separar lo diseñado de lo implementado y probado.'],
    ejemplo: 'RF-02: registrar entradas y salidas de mercancía. Origen: la entrevista mostró que las salidas no se anotan.',
    fuentes: ['wiegers', 'crawley'] });

  leccion('pantallas', { titulo: 'Pantallas o planos de la solución',
    que: 'Las capturas de pantalla del sistema o los planos del diseño, con su explicación.',
    porque: 'Muestran que la propuesta es concreta. Van en el capítulo de resultados o de propuesta, no en los anexos. Basta una nota general de que las imágenes pertenecen a tu herramienta, en lugar de poner la fuente a cada captura.',
    pasos: ['Agrupa las pantallas por módulo.', 'Explica cada una en un párrafo.', 'Agrega la nota: «Todas las imágenes de este subcapítulo son generadas por la herramienta desarrollada en este proyecto.».'],
    errores: ['Dejar las pantallas en los anexos.', 'Capturas sin explicación.'],
    ejemplo: 'La Figura 5.2 muestra el módulo de registro de entradas, con los campos obligatorios en rojo.',
    fuentes: ['luis'] });

  leccion('presupuesto', { titulo: 'Presupuesto',
    que: 'Es el costo total de implementar la propuesta: cada equipo, licencia o servicio con su descripción técnica, cantidad, precio unitario, total y soporte; más el costo de realizar tu propio trabajo (horas y honorarios).',
    porque: 'Un diseño de ingeniería debe ser económicamente viable. El jurado pide el presupuesto completo, con soportes o cotizaciones, para poder comprobar los precios y la descripción del equipo evita dudas al comprarlo.',
    pasos: ['Describe cada equipo (marca, modelo, capacidad).', 'Pide cotizaciones y guárdalas como anexo.', 'Incluye una fila con el costo de tu trabajo (por ejemplo, 200 horas × precio por hora).', 'Suma el total y menciona la fecha y la tasa de cambio usadas.', 'Menciona la tabla y el anexo en el texto.'],
    errores: ['Montos sin soporte.', 'Olvidar el costo del propio trabajo.', 'Descripciones vagas («una computadora»).'],
    ejemplo: 'Computadora HP ProDesk 400 G5 (16 GB RAM, 512 GB SSD), 1 unidad, cotización en el Anexo D.',
    fuentes: ['luis'] });

  leccion('matriz', { titulo: 'Matriz comparativa del antes y después',
    que: 'Una tabla que contrasta, criterio por criterio, la situación actual con la situación esperada tras implementar la propuesta.',
    porque: 'Hace visible el impacto con evidencia y evita beneficios vagos. Cada «antes» debe salir de tu diagnóstico.',
    pasos: ['Elige 3 o más criterios medibles: tiempo, errores, costos, control.', 'Escribe el dato medido en el «antes».', 'Escribe la meta razonable en el «después».'],
    errores: ['Criterios sin datos.', 'Un «después» que promete más de lo que la propuesta puede lograr.'],
    ejemplo: 'Tiempo de despacho: antes 25 minutos; después 8 minutos.',
    fuentes: ['luis'] });

  leccion('areas', { titulo: 'Áreas impactadas',
    que: 'Identifica qué áreas de la institución cambian con el proyecto y de qué manera.',
    porque: 'Demuestra que entiendes la organización y prepara la implementación: quién cambia su forma de trabajar.',
    pasos: ['Nombra cada área real (compras, ventas, almacén, soporte).', 'Explica el cambio para cada una.'],
    errores: ['Listar áreas sin explicar el impacto.'],
    ejemplo: 'Almacén: registrará las salidas en el sistema y eliminará los cuadernos.',
    fuentes: ['luis'] });

  leccion('beneficios', { titulo: 'Beneficios de la implementación',
    que: 'Los beneficios para la institución y para los usuarios finales, ligados a los problemas del Capítulo I.',
    porque: 'Cierra el círculo entre problema y solución y sustenta la justificación.',
    pasos: ['Separa beneficios para la institución y para los usuarios.', 'Relaciónalos con un problema medido.'],
    errores: ['Beneficios genéricos («mejor eficiencia») sin relación con tus datos.'],
    ejemplo: 'Para la gerencia: informes de existencias en tiempo real. Para el personal: menos tiempo en recuentos manuales.',
    fuentes: ['luis'] });

  leccion('conclusiones', { titulo: 'Conclusiones',
    que: 'Sintetizan los hallazgos y responden, una por una, a los objetivos específicos. La extensión es de 3 a 5 páginas.',
    porque: 'Si hay cuatro objetivos específicos, debe poder identificarse la conclusión de cada uno. No se introducen datos nuevos ni autores nuevos (Luis, 2026).',
    pasos: ['Escribe un párrafo por objetivo, en el mismo orden.', 'Cierra con una conclusión general.', 'Evita repetir textualmente el desarrollo.'],
    errores: ['Conclusiones que no responden a los objetivos.', 'Introducir un dato que no estaba en el Capítulo IV.'],
    ejemplo: 'En relación con el primer objetivo, se concluyó que el registro se hace en cuadernos sin un procedimiento sistemático.',
    fuentes: ['luis'] });

  leccion('recomendaciones', { titulo: 'Recomendaciones',
    que: 'Acciones concretas que se derivan de las conclusiones, dirigidas a alguien (gerencia, soporte técnico, personal) y con un propósito. Van en viñetas.',
    porque: 'Una recomendación genérica podría estar en cualquier trabajo; una dirigida y justificada demuestra criterio (Luis, 2026). Toda viñeta termina en punto.',
    pasos: ['Escribe quién debe actuar, qué debe hacer y para qué.', 'Agrúpalas por nivel: gerencial, técnico y operativo.'],
    errores: ['Recomendaciones sin destinatario.', 'Viñetas sin punto final.'],
    ejemplo: 'A la gerencia: aprobar la compra de un lector de códigos para reducir errores de digitación.',
    fuentes: ['luis'] });

  leccion('glosario', { titulo: 'Glosario de términos',
    que: 'Lista alfabética de términos técnicos o poco comunes, con una definición breve contextualizada a tu proyecto. La sección se llama exactamente «Glosario de términos».',
    porque: 'Ayuda a lectores del jurado de distintas especialidades a entender tu vocabulario.',
    pasos: ['Escribe «Término: definición», uno por línea.', 'Ordénalos alfabéticamente.', 'Incluye solo lo que usas en el trabajo.'],
    errores: ['Definir términos de uso común.', 'Copiar definiciones sin citar.'],
    ejemplo: 'Trazabilidad: capacidad de seguir el recorrido de un producto desde su recepción hasta su despacho.',
    fuentes: ['oym'] });

  leccion('referencias', { titulo: 'Referencias bibliográficas',
    que: 'Lista de todas las fuentes que citaste, en orden alfabético, con sangría francesa y sin números ni viñetas, en formato APA 7.',
    porque: 'Permite al lector distinguir qué ideas son tuyas y cuáles de otros, y comprobar las fuentes. Toda cita del texto debe aparecer en la lista y toda referencia debe estar citada (American Psychological Association, 2020).',
    pasos: ['Usa un gestor (Zotero o Mendeley) desde el primer día.', 'Prefiere fuentes académicas con DOI o enlace.', 'Cita al menos dos libros de metodología (por ejemplo, Hernández-Sampieri & Mendoza Torres, 2018; Creswell & Creswell, 2023).', 'Revisa que cada cita coincida con su entrada (autor y año).'],
    errores: ['Referencias en la lista que nunca se citan.', 'Citas sin entrada en la lista.', 'Blogs o páginas comerciales como evidencia académica.', 'Años que no coinciden entre texto y lista.'],
    ejemplo: 'Cita en el texto: (Arias, 2012). Entrada: ' + 'Arias, F. G. (2012). *El proyecto de investigación…*',
    fuentes: ['apa'] });

  leccion('anexos', { titulo: 'Anexos',
    que: 'Material de soporte que por su extensión no va en el cuerpo: instrumentos, cuestionarios llenos, cotizaciones, evidencias, formatos de validación.',
    porque: 'Todo anexo debe mencionarse en algún capítulo; si no, no tiene validez para el jurado. El reporte antiplagio no va en el trabajo: se entrega en un archivo aparte.',
    pasos: ['Rotula cada anexo con una letra (Anexo A, B, C).', 'Menciónalo en el capítulo donde se usa («ver Anexo C»).', 'Para la encuesta: un formulario vacío y dos llenos, con la URL.'],
    errores: ['Anexos que nadie cita.', 'Incluir el reporte de similitud.'],
    ejemplo: 'Las cotizaciones de cada elemento se encuentran en el Anexo D.',
    fuentes: ['luis'] });

  leccion('firmas', { titulo: 'Hoja de firmas',
    que: 'Es la última página del trabajo, con el escudo y espacios para el Director de trabajo final de grado y el asesor. No lleva número.',
    porque: 'Formaliza la entrega; su ausencia o un logo fuera de márgenes es de los comentarios más repetidos del jurado.',
    pasos: ['Usa la hoja que genera el constructor: ya trae el formato correcto.'],
    errores: ['Olvidarla o dejarla fuera de los márgenes.'],
    ejemplo: 'Director de trabajo final de grado ………… Asesor.',
    fuentes: ['oym'] });

  leccion('parafrasis', { titulo: 'Parafrasear sin plagiar',
    que: 'Parafrasear es leer, comprender la idea, cerrar la fuente y explicarla con estructura y palabras propias; aunque la redacción sea tuya, la fuente se cita porque la idea no nació de ti.',
    porque: 'La universidad aprueba un máximo de 30 % de similitud y 0 % de plagio; incorporar información ajena sin citar es una falta ética grave (Universidad Dominicana O&M, 2026). Cambiar dos o tres palabras por sinónimos no es parafrasear.',
    pasos: ['Lee, cierra el texto y escribe con tu estructura.', 'Cita igual: (Autor, año).', 'Usa comillas solo para citas textuales de menos de 40 palabras, con página (American Psychological Association, 2020).'],
    errores: ['Falsa paráfrasis: mismo orden de ideas con sinónimos.', 'Rellenar páginas con citas textuales.'],
    ejemplo: 'Pérez (2024) explica que la retroalimentación formativa permite reconocer avances y ajustes necesarios.',
    fuentes: ['oym', 'apa', 'luis'] });

  // ---------- Reglas del jurado y su porqué ----------
  var REGLAS = {
    portada_escuela: { porque: 'El jurado revisa primero lo que se ve. La portada tiene un esquema oficial y se corrige cuando se salen del margen, repiten portada o agregan líneas (Departamento, Sede). Solo se escribe «ESCUELA DE INGENIERÍA».', como: 'Completa los datos; el constructor ya aplica el esquema, los nombres en mayúscula y los márgenes.', leccion: 'titulo', fuentes: ['oym'] },
    titulo_infinitivo: { porque: 'El título debe iniciar con un sustantivo y delimitar qué, dónde y cuándo; con 15 a 25 palabras (Universidad Dominicana O&M, 2026).', como: 'Reescribe: «Evaluación…», «Diseño…», «Propuesta…» + sistema + empresa + lugar + período.', leccion: 'titulo', fuentes: ['oym'] },
    introduccion_extension: { porque: 'La introducción es un mapa de lectura de 2 a 3 páginas; si es muy corta no orienta y si es muy larga se convierte en otro capítulo.', como: 'Tema y título, contexto, propósito y un párrafo por capítulo.', leccion: 'introduccion', fuentes: ['oym'] },
    objetivos_verbos: { porque: 'Los objetivos definen qué debes demostrar: deben ser de 3 a 4 y usar verbos medibles. «Conocer», «comprender» o «entender» no se pueden comprobar.', como: 'Redacta uno por línea con verbos como analizar, identificar, determinar o diseñar.', leccion: 'objetivos', fuentes: ['oym', 'arias'] },
    objetivos_preguntas: { porque: 'La correspondencia uno a uno entre preguntas y objetivos es la base de la coherencia (Luis, 2026).', como: 'Escribe una pregunta de sistematización por cada objetivo específico, en el mismo orden.', leccion: 'sistematizacion', fuentes: ['luis'] },
    encuesta_modalidad: { porque: 'El jurado necesita saber cómo se obtuvieron los datos para poder confiar en ellos: modalidad y, si fue virtual, la URL completa del formulario.', como: 'Marca presencial o virtual y pega el enlace; el texto se agrega solo al Capítulo III.', leccion: 'tecnicas', fuentes: ['luis'] },
    encuesta_anexos: { porque: 'Los anexos de la encuesta permiten verificar el instrumento y sus respuestas: un formulario vacío y dos llenos.', como: 'Agrega esos tres anexos con su letra y menciónalos.', leccion: 'anexos', fuentes: ['luis'] },
    libros_metodologia: { porque: 'Las decisiones metodológicas (enfoque, diseño, muestra) deben apoyarse en libros de metodología reconocidos, no solo en opinión.', como: 'Cita al menos dos, por ejemplo Hernández-Sampieri y Mendoza Torres (2018) y Creswell y Creswell (2023); también sirven Arias (2012), Bernal Torres (2016) o Tamayo y Tamayo (2003). Aterriza cada definición a tu caso.', leccion: 'enfoque', fuentes: ['hs', 'cr'] },
    presupuesto_soportes: { porque: 'Un diseño de ingeniería debe ser económicamente viable. Sin montos, sin el costo de tu trabajo o sin soporte, el jurado no puede comprobar la viabilidad.', como: 'Describe cada equipo, incluye honorarios y horas, adjunta cotizaciones como anexo y menciónalas.', leccion: 'presupuesto', fuentes: ['luis'] },
    matriz_antes_despues: { porque: 'Hace visible el impacto con evidencia: sin comparación medible, los beneficios son opiniones.', como: 'Completa al menos tres criterios con datos de tu diagnóstico.', leccion: 'matriz', fuentes: ['luis'] },
    areas_impactadas: { porque: 'Demuestra que entiendes la organización y quiénes cambiarán su forma de trabajar.', como: 'Nombra áreas reales y explica el cambio para cada una (al menos 40 palabras).', leccion: 'areas', fuentes: ['luis'] },
    beneficios: { porque: 'Cierra el círculo entre el problema medido y la solución, para la institución y los usuarios.', como: 'Describe beneficios ligados a tus hallazgos (al menos 40 palabras).', leccion: 'beneficios', fuentes: ['luis'] },
    conclusion_extension: { porque: 'Una conclusión de 3 a 5 páginas permite responder a cada objetivo con datos; si es corta, queda incompleta.', como: 'Desarrolla un párrafo por objetivo y una conclusión general.', leccion: 'conclusiones', fuentes: ['luis'] },
    conclusion_por_objetivo: { porque: 'Cada objetivo específico debe tener al menos una conclusión que lo responda (Luis, 2026).', como: 'Escribe un párrafo por objetivo, en el mismo orden.', leccion: 'conclusiones', fuentes: ['luis'] },
    recomendaciones: { porque: 'Las recomendaciones se derivan de las conclusiones y deben ser concretas y dirigidas; van en viñetas y terminan en punto.', como: 'Una por línea, con destinatario y propósito.', leccion: 'recomendaciones', fuentes: ['luis'] },
    glosario: { porque: 'El glosario de términos ayuda a lectores de otras especialidades y es parte del orden oficial del documento.', como: 'Escribe «Término: definición», mínimo cinco.', leccion: 'glosario', fuentes: ['oym'] },
    referencias_minimas: { porque: 'Un marco teórico y unos antecedentes sólidos requieren fuentes suficientes y académicas.', como: 'Reúne fuentes con DOI o enlace en Zotero o Mendeley.', leccion: 'referencias', fuentes: ['apa'] },
    citas_referencias: { porque: 'En APA 7, toda cita del texto debe tener su entrada en la lista y toda entrada debe citarse: es uno de los errores más comunes en la revisión final (American Psychological Association, 2020; Luis, 2026).', como: 'Compara cada cita (Apellido, año) con la lista; un gestor bibliográfico lo hace automáticamente.', leccion: 'referencias', fuentes: ['apa', 'luis'] },
    anexos_sin_mencion: { porque: 'Un anexo que ningún capítulo menciona no tiene validez para el jurado.', como: 'Escribe «ver Anexo X» en el capítulo donde se usa, o quita el anexo.', leccion: 'anexos', fuentes: ['luis'] },
    antiplagio_en_documento: { porque: 'El reporte de similitud no forma parte del trabajo: se entrega en un archivo aparte. La universidad acepta máximo 30 % de similitud y 0 % de plagio.', como: 'Quita ese anexo y entrégalo por separado.', leccion: 'parafrasis', fuentes: ['oym'] },
    minimo_paginas: { porque: 'El cuerpo del informe debe tener un mínimo de 45 páginas de contenido (Universidad Dominicana O&M, 2026).', como: 'Desarrolla cada capítulo con profundidad y evidencia, sin rellenar con citas textuales.', leccion: 'ruta', fuentes: ['oym'] }
  };

  // ---------- Formato que el constructor aplica solo, y por qué ----------
  var FORMATO = [
    { t: 'Márgenes de 2,54 cm en los cuatro lados', p: 'Es la norma de edición de la universidad. Un texto fuera de margen o con márgenes distintos se nota de inmediato y resta presentación escrita.' },
    { t: 'Interlineado 1,5 (índice, referencias y citas a 1,0)', p: 'Mantiene la lectura cómoda y comparable entre trabajos. El índice, las referencias y las citas van a espacio sencillo.' },
    { t: 'Times New Roman 12 pt (citas y referencias en 10 pt)', p: 'Tipografía institucional (también se admite Arial o Calibri 11 pt), siempre en negro.' },
    { t: 'Párrafos justificados y con el mismo espacio entre ellos', p: 'Un espaciado que varía continuamente se percibe como falta de cuidado.' },
    { t: 'Capítulos en mayúscula, negrita y 14 pt, con dos puntos', p: 'Distingue los niveles del documento: CAPÍTULO I: ASPECTOS INTRODUCTORIOS.' },
    { t: 'Subcapítulos en 14 pt tipo oración y sub-subcapítulos en 12 pt', p: 'Tipo oración significa que solo la primera palabra va en mayúscula (1.2 Planteamiento del problema), salvo nombres propios y siglas.' },
    { t: 'Toda viñeta termina en punto', p: 'Regla de consistencia que el jurado revisa en recomendaciones y objetivos.' },
    { t: 'Numeración romana minúscula en las preliminares y arábiga desde la introducción', p: 'Separa el material introductorio del cuerpo; el número va abajo a la derecha y el índice no se numera.' },
    { t: 'Índice con agradecimientos y dedicatorias', p: 'El índice refleja todo lo que contiene el documento.' },
    { t: 'Tablas con rótulo, fuente y mención en el texto', p: 'Toda tabla o figura debe mencionarse en el texto y llevar su fuente («Fuente: Realización propia.»). Un rótulo que nadie menciona se considera sobrante.' },
    { t: 'Hoja de firmas como última página, sin número', p: 'Cierra el documento con el Director de trabajo final de grado y el asesor.' }
  ];

  // ---------- APA 7 ----------
  var APA_CITAS = [
    { caso: 'Un autor', par: '(Pérez, 2024)', nar: 'Pérez (2024)' },
    { caso: 'Dos autores', par: '(Pérez & Gómez, 2024)', nar: 'Pérez y Gómez (2024)' },
    { caso: 'Tres o más autores (desde la primera cita)', par: '(Pérez et al., 2024)', nar: 'Pérez et al. (2024)' },
    { caso: 'Autor institucional con sigla (primera cita)', par: '(Ministerio de Educación [MINERD], 2023); después (MINERD, 2023)', nar: 'Ministerio de Educación [MINERD] (2023); después MINERD (2023)' },
    { caso: 'Sin fecha', par: '(Pérez, s. f.)', nar: 'Pérez (s. f.)' },
    { caso: 'Cita textual de menos de 40 palabras', par: '«La retroalimentación debe orientar una acción concreta» (Pérez, 2024, p. 18)', nar: 'Según Pérez (2024), «la retroalimentación debe orientar una acción concreta» (p. 18)' },
    { caso: 'Cita textual de 40 palabras o más', par: 'Bloque aparte, con sangría en todo el bloque, sin comillas y con la referencia al final', nar: '—' },
    { caso: 'Fuente secundaria', par: '(Tebar, 2003, como se citó en Pérez, 2024)', nar: 'Tebar (2003, como se citó en Pérez, 2024)' },
    { caso: 'Ley o norma', par: '(República Dominicana, 2013)', nar: 'La Ley núm. 172-13 (República Dominicana, 2013)' }
  ];
  var APA_REFS = [
    { tipo: 'Libro', patron: 'Apellido, A. A., & Apellido, B. B. (Año). *Título del libro en cursiva* (ed.). Editorial.', ej: 'Hernández-Sampieri, R., & Mendoza Torres, C. P. (2018). *Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta*. McGraw-Hill Interamericana.' },
    { tipo: 'Artículo de revista', patron: 'Apellido, A. A. (Año). Título del artículo. *Nombre de la revista, volumen*(número), páginas. https://doi.org/…', ej: 'Cronbach, L. J. (1951). Coefficient alpha and the internal structure of tests. *Psychometrika, 16*(3), 297–334. https://doi.org/10.1007/BF02310555' },
    { tipo: 'Tesis', patron: 'Apellido, A. A. (Año). *Título de la tesis* [Tesis de grado, Universidad]. Repositorio. URL', ej: 'Quispe Huacani, E. A. (2023). *Impacto de un chatbot en el proceso de atención de matrícula…* [Trabajo de investigación, Universidad Nacional Jorge Basadre Grohmann]. Repositorio Institucional UNJBG. https://repositorio.unjbg.edu.pe/' },
    { tipo: 'Página web', patron: 'Autor o institución. (Año, día de mes). *Título de la página*. Nombre del sitio si es distinto del autor. URL', ej: 'Corporation for Digital Scholarship. (s. f.). *Zotero documentation*. https://www.zotero.org/support/' },
    { tipo: 'Ley o norma', patron: 'País. (Año). *Título de la ley*. URL', ej: 'República Dominicana. (2013). *Ley núm. 172-13 sobre protección integral de los datos personales*.' }
  ];
  var APA_REGLAS = [
    'La lista va en orden alfabético por el apellido del primer autor, con sangría francesa (primera línea sin sangría, las siguientes a 1,27 cm), sin números ni viñetas.',
    'Los títulos de libros, tesis y páginas web, y el nombre y el volumen de las revistas, van en cursiva.',
    'Los títulos se escriben en tipo oración: solo la primera palabra y los nombres propios con mayúscula.',
    'El DOI se escribe como enlace (https://doi.org/…). Ya no se escribe «Recuperado de» ni la fecha de consulta, salvo que el contenido cambie con el tiempo.',
    'Hasta 20 autores se escriben todos en la lista; en el texto, con tres o más se usa «et al.» desde la primera cita.',
    'Cada cita del texto debe estar en la lista y cada entrada de la lista debe estar citada en el texto.',
    'Prefiere la fuente original; no cites una página que solo repite a otra si puedes consultar la original.',
    'La URL va en la referencia, no dentro del cuerpo del texto (excepto el enlace de tu propia encuesta).'
  ];

  // ---------- Gestores bibliográficos ----------
  var GESTORES = {
    porque: 'Un gestor bibliográfico guarda cada fuente con sus datos completos, inserta las citas en Word y construye la lista de referencias sola en APA 7. Así evitas el error más frecuente (citas sin entrada y entradas sin cita), reduces el riesgo de plagio por citas olvidadas y aprendes a documentar tus fuentes desde el principio (Corporation for Digital Scholarship, s. f.; Elsevier, s. f.).',
    zotero: { nombre: 'Zotero (gratuito y de código abierto)', pasos: [
      'Instala Zotero en tu computadora y el Zotero Connector en tu navegador (Chrome, Edge o Firefox).',
      'Crea una colección llamada «TFG» y, si son tres integrantes, una biblioteca de grupo para compartirla.',
      'Agrega fuentes: con el Connector, desde la página de un artículo o repositorio; o con la varita mágica «Agregar ítem por identificador», pegando el DOI, el ISBN o el enlace.',
      'Arrastra el PDF al ítem y revisa los datos: autores, año, título en tipo oración y DOI. Corrige a mano lo que esté mal.',
      'Elige el estilo: Editar > Configuración > Citar > Estilos, y selecciona «American Psychological Association 7th edition» (si no aparece, usa «Obtener estilos adicionales»). Deja el idioma en español.',
      'En Word, usa la pestaña Zotero: «Add/Edit Citation» para insertar cada cita y «Add/Edit Bibliography» para generar la lista.',
      'Cuando cambies algo en Zotero, pulsa «Refresh» en Word para actualizar citas y lista.',
      'Antes de entregar, guarda una copia con los campos de Zotero y otra sin ellos («Unlink Citations»); verifica que cada cita tenga su entrada.'] },
    mendeley: { nombre: 'Mendeley Reference Manager y Mendeley Cite', pasos: [
      'Crea una cuenta gratuita en Mendeley e instala Mendeley Reference Manager (la versión de escritorio anterior ya no se actualiza).',
      'Importa fuentes: arrastra PDF, usa el «Web Importer» del navegador o agrega por DOI.',
      'Revisa los datos de cada referencia (autores, año, título, DOI) y corrígelos.',
      'En Word, instala el complemento Mendeley Cite desde el menú Insertar > Obtener complementos.',
      'En Mendeley Cite elige el estilo «American Psychological Association 7th edition».',
      'Inserta cada cita con «Add citation» y genera la lista con «Insert bibliography».',
      'Si cambias una referencia, actualiza desde Mendeley Cite («Refresh») y revisa la lista final.'] },
    consejos: ['Guarda cada fuente en el gestor en el momento en que la lees, no al final.', 'Elige uno solo (Zotero o Mendeley) y úsalo todo el trabajo.', 'Un gestor no sustituye tu revisión: abre la lista y verifica mayúsculas, cursivas y que cada entrada sea una fuente académica real.']
  };

  // ---------- Resolución de lección por sección ----------
  function claveSeccion(sec) {
    var t = sec.t, k = sec.kind;
    if (k === 'objetivos') return 'objetivos';
    if (k === 'tecnicas') return 'tecnicas';
    if (k === 'presupuesto') return 'presupuesto';
    if (k === 'matriz') return 'matriz';
    var m = { 'Antecedentes de la investigación': 'antecedentes', 'Planteamiento del problema': 'planteamiento', 'Justificación': 'justificacion', 'Marco contextual': 'marco_contextual', 'Bases teóricas': 'bases_teoricas', 'Bases tecnológicas': 'bases_teoricas',
      'Enfoque de la investigación': 'enfoque', 'Tipo y nivel de la investigación': 'tipo_nivel', 'Diseño de la investigación': 'tipo_nivel', 'Población y muestra': 'poblacion_muestra', 'Procedimiento de análisis de los datos': 'analisis_datos', 'Validez y confiabilidad': 'validez',
      'Presentación de los resultados': 'resultados', 'Análisis de los resultados': 'resultados', 'Discusión de los resultados': 'discusion', 'Descripción general de la propuesta': 'propuesta', 'Diseño técnico y componentes': 'propuesta',
      'Pantallas o planos de la solución': 'pantallas', 'Áreas impactadas': 'areas', 'Beneficios de la implementación': 'beneficios' };
    return m[t] || null;
  }
  function claveSub(titulo) { return { 'Formulación del problema': 'formulacion', 'Sistematización del problema': 'sistematizacion' }[titulo] || null; }

  // ---------- Presentación (HTML) ----------
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function cursivas(t) { return esc(t).replace(/\*([^*]+)\*/g, '<em>$1</em>'); }
  function listaFuentes(keys) {
    return '<div class="fuentes"><strong>Fuentes (APA 7):</strong>' + keys.map(function (k) { return '<p class="ref">' + cursivas(FUENTES[k]) + '</p>'; }).join('') + '</div>';
  }
  function htmlLeccion(l, conTitulo) {
    return (conTitulo === false ? '' : '<h3>' + esc(l.titulo) + '</h3>') +
      '<p><strong>Qué es.</strong> ' + esc(l.que) + '</p><p><strong>Por qué se pide.</strong> ' + esc(l.porque) + '</p>' +
      '<p><strong>Cómo se hace.</strong></p><ol>' + l.pasos.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ol>' +
      '<p><strong>Errores frecuentes.</strong></p><ul>' + l.errores.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
      '<p><strong>Ejemplo.</strong> ' + cursivas(l.ejemplo) + '</p>' + listaFuentes(l.fuentes);
  }
  function htmlRegla(id) {
    var r = REGLAS[id]; if (!r) return '';
    return '<p><strong>Por qué lo pide el jurado.</strong> ' + esc(r.porque) + '</p><p><strong>Cómo corregirlo.</strong> ' + esc(r.como) + '</p>';
  }
  function htmlApa() {
    return '<h3>Citas en el texto (APA 7)</h3><table class="ap"><tr><th>Caso</th><th>Entre paréntesis</th><th>Narrativa</th></tr>' +
      APA_CITAS.map(function (c) { return '<tr><td>' + esc(c.caso) + '</td><td>' + esc(c.par) + '</td><td>' + esc(c.nar) + '</td></tr>'; }).join('') + '</table>' +
      '<h3>Referencias (APA 7)</h3>' + APA_REFS.map(function (r) { return '<p><strong>' + esc(r.tipo) + '.</strong> <code>' + cursivas(r.patron) + '</code></p><p class="ref">' + cursivas(r.ej) + '</p>'; }).join('') +
      '<h3>Reglas que debes recordar</h3><ul>' + APA_REGLAS.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' + listaFuentes(['apa', 'luis']);
  }
  function htmlGestores() {
    function bloque(g) { return '<h3>' + esc(g.nombre) + '</h3><ol>' + g.pasos.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ol>'; }
    return '<h3>Para qué sirve un gestor bibliográfico</h3><p>' + esc(GESTORES.porque) + '</p>' + bloque(GESTORES.zotero) + bloque(GESTORES.mendeley) +
      '<h3>Buenas prácticas</h3><ul>' + GESTORES.consejos.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' + listaFuentes(['zotero', 'mendeley']);
  }
  function htmlReglas() {
    return '<h3>Reglas de contenido que revisa el jurado y por qué</h3>' + Object.keys(REGLAS).map(function (id) {
      var r = REGLAS[id]; return '<details><summary>' + esc(id.replace(/_/g, ' ')) + '</summary>' + htmlRegla(id) + '</details>';
    }).join('') + '<h3>Formato que el constructor aplica solo, y por qué</h3><ul>' + FORMATO.map(function (f) { return '<li><strong>' + esc(f.t) + '.</strong> ' + esc(f.p) + '</li>'; }).join('') + '</ul>' + listaFuentes(['oym']);
  }
  function htmlMetodologia() {
    return Object.keys(L).map(function (id) { return '<details><summary>' + esc(L[id].titulo) + '</summary>' + htmlLeccion(L[id], false) + '</details>'; }).join('');
  }
  function htmlFuentes() {
    var lista = Object.keys(FUENTES).map(function (k) { return FUENTES[k]; }).sort(function (a, b) { return a.localeCompare(b, 'es'); });
    return '<h3>Referencias bibliográficas de esta guía</h3>' + lista.map(function (r) { return '<p class="ref">' + cursivas(r) + '</p>'; }).join('');
  }

  // ---------- Generador de referencias APA ----------
  var GENERADOR = {
    libro: { nombre: 'Libro', campos: [['autores', 'Autores (uno por línea: Apellido, N.)', 'area'], ['anio', 'Año', 'text'], ['titulo', 'Título del libro', 'text'], ['edicion', 'Edición (opcional, ej.: 6.ª ed.)', 'text'], ['editorial', 'Editorial', 'text']] },
    articulo: { nombre: 'Artículo de revista', campos: [['autores', 'Autores (uno por línea: Apellido, N.)', 'area'], ['anio', 'Año', 'text'], ['titulo', 'Título del artículo', 'text'], ['revista', 'Nombre de la revista', 'text'], ['volumen', 'Volumen', 'text'], ['numero', 'Número (opcional)', 'text'], ['paginas', 'Páginas (ej.: 45–60)', 'text'], ['url', 'DOI o enlace', 'text']] },
    tesis: { nombre: 'Tesis o trabajo de grado', campos: [['autores', 'Autor (Apellido, N.)', 'area'], ['anio', 'Año', 'text'], ['titulo', 'Título de la tesis', 'text'], ['nivel', 'Nivel (ej.: Tesis de grado)', 'text'], ['universidad', 'Universidad', 'text'], ['url', 'Enlace del repositorio', 'text']] },
    web: { nombre: 'Página web', campos: [['autores', 'Autor o institución', 'area'], ['anio', 'Año (o s. f.)', 'text'], ['titulo', 'Título de la página', 'text'], ['sitio', 'Nombre del sitio (si es distinto del autor)', 'text'], ['url', 'URL', 'text']] },
    norma: { nombre: 'Ley, norma o informe institucional', campos: [['autores', 'País u organización', 'area'], ['anio', 'Año', 'text'], ['titulo', 'Título', 'text'], ['url', 'URL (opcional)', 'text']] }
  };
  function listaAutores(texto) {
    var a = String(texto || '').split('\n').map(function (x) { return x.trim(); }).filter(Boolean);
    if (a.length <= 1) return a.join('');
    if (a.length === 2) return a[0] + ', & ' + a[1];
    return a.slice(0, -1).join(', ') + ', & ' + a[a.length - 1];
  }
  function apellidoCita(texto) {
    var a = String(texto || '').split('\n').map(function (x) { return x.trim(); }).filter(Boolean);
    var ap = a.map(function (x) { return x.indexOf(',') > -1 ? x.split(',')[0].trim() : x; });
    return { par: ap.length === 1 ? ap[0] : (ap.length === 2 ? ap[0] + ' & ' + ap[1] : ap[0] + ' et al.'), nar: ap.length === 1 ? ap[0] : (ap.length === 2 ? ap[0] + ' y ' + ap[1] : ap[0] + ' et al.') };
  }
  function oracion(t) { t = String(t || '').trim(); return t ? t.charAt(0).toUpperCase() + t.slice(1) : t; }
  function generarReferencia(tipo, v) {
    var aut = listaAutores(v.autores), anio = (v.anio || 's. f.').trim() || 's. f.', fin = function (s) { return s.replace(/\.+$/, '') + '.'; };
    var autor = aut ? fin(aut) : '';
    var out;
    if (tipo === 'libro') out = autor + ' (' + anio + '). *' + oracion((v.titulo || '').replace(/\.+$/, '')) + '*' + (v.edicion ? ' (' + v.edicion.trim() + ').' : '.') + ' ' + fin(v.editorial || '');
    else if (tipo === 'articulo') out = autor + ' (' + anio + '). ' + fin(oracion(v.titulo || '')) + ' *' + (v.revista || '') + (v.volumen ? ', ' + v.volumen : '') + '*' + (v.numero ? '(' + v.numero + ')' : '') + (v.paginas ? ', ' + v.paginas : '') + '.' + (v.url ? ' ' + (/^10\./.test(v.url.trim()) ? 'https://doi.org/' + v.url.trim() : v.url.trim()) : '');
    else if (tipo === 'tesis') out = autor + ' (' + anio + '). *' + oracion((v.titulo || '').replace(/\.+$/, '')) + '* [' + (v.nivel || 'Tesis de grado') + ', ' + (v.universidad || '') + ']. ' + (v.url || '');
    else if (tipo === 'web') out = autor + ' (' + anio + '). *' + oracion((v.titulo || '').replace(/\.+$/, '')) + '*. ' + (v.sitio ? fin(v.sitio) + ' ' : '') + (v.url || '');
    else out = autor + ' (' + anio + '). *' + oracion((v.titulo || '').replace(/\.+$/, '')) + '*.' + (v.url ? ' ' + v.url : '');
    return out.replace(/\s+/g, ' ').replace(/\s+\./g, '.').trim();
  }

  return { FUENTES: FUENTES, LECCIONES: L, REGLAS: REGLAS, FORMATO: FORMATO, APA_CITAS: APA_CITAS, APA_REFS: APA_REFS, APA_REGLAS: APA_REGLAS, GESTORES: GESTORES, GENERADOR: GENERADOR,
    claveSeccion: claveSeccion, claveSub: claveSub, htmlLeccion: htmlLeccion, htmlRegla: htmlRegla, htmlApa: htmlApa, htmlGestores: htmlGestores, htmlReglas: htmlReglas, htmlMetodologia: htmlMetodologia, htmlFuentes: htmlFuentes,
    generarReferencia: generarReferencia, apellidoCita: apellidoCita, listaAutores: listaAutores };
});
