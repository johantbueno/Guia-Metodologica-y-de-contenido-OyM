/* Núcleo del constructor de TFG de la OyM: estructura oficial, revisión como la plataforma tesis y exportación a Word.
   Sin dependencias del navegador: se prueba en Node y se carga en editor.html. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.TFGCore = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var PALABRAS_POR_PAGINA = 320; // a 1,5 de interlineado, Times New Roman 12
  var VERBOS_INFINITIVO = 'evaluar analizar diseñar desarrollar implementar proponer determinar identificar elaborar construir crear mejorar optimizar aplicar establecer formular comparar medir describir conocer'.split(' ');
  var VERBOS_VAGOS = ['conocer', 'comprender', 'entender'];
  var LIBROS_METODOLOGIA = [/sampieri/i, /creswell/i, /bernal/i, /\barias\b/i, /tamayo/i, /hurtado/i];

  // ---------- Estructura oficial ----------
  function s(t, extra) { var o = { t: t, body: '' }; if (extra) for (var k in extra) o[k] = extra[k]; return o; }
  function sub(t, extra) { var o = { t: t, body: '' }; if (extra) for (var k in extra) o[k] = extra[k]; return o; }

  function capitulosBase() {
    return [
      { num: 'I', titulo: 'ASPECTOS INTRODUCTORIOS', secs: [
        s('Antecedentes de la investigación', { ayuda: 'Estudios previos reales (internacionales, nacionales y locales): autor y año, objetivo, método, resultados y qué aportan a tu trabajo. No uses leyes ni normas aquí.', subs: [sub('Antecedentes internacionales'), sub('Antecedentes nacionales'), sub('Antecedentes locales')] }),
        s('Planteamiento del problema', { ayuda: 'De lo general a lo particular, con evidencias del problema en la institución.', subs: [sub('Descripción del problema'), sub('Formulación del problema', { ayuda: 'Una pregunta general que responde tu objetivo general.' }), sub('Sistematización del problema', { ayuda: 'Una pregunta por cada objetivo específico, en el mismo orden (3 o 4). Una pregunta por línea.' })] }),
        s('Justificación', { ayuda: 'Por qué vale la pena: importancia, aportes y beneficiarios.' }),
        s('Objetivos de la investigación', { kind: 'objetivos', ayuda: 'Verbos medibles (analizar, identificar, determinar, diseñar). Nunca conocer, comprender ni entender.', subs: [sub('Objetivo general', { ayuda: 'Retoma tu título.' }), sub('Objetivos específicos', { bullets: true, ayuda: 'De 3 a 4, uno por línea. Cada uno responde a una pregunta de sistematización.' })] })
      ] },
      { num: 'II', titulo: 'MARCO TEÓRICO', dinamico: true, secs: [
        s('Marco contextual', { ayuda: 'La institución donde haces el proyecto: historia, misión, visión y estructura.' }),
        s('Bases teóricas', { ayuda: 'Los conceptos clave con autores reconocidos. Agrega las secciones que necesites (de 15 a 20 en total).' }),
        s('Bases tecnológicas', { ayuda: 'Las tecnologías, normas y herramientas que sustentan tu propuesta.' })
      ] },
      { num: 'III', titulo: 'MARCO METODOLÓGICO', secs: [
        s('Enfoque de la investigación'), s('Tipo y nivel de la investigación'), s('Diseño de la investigación'), s('Población y muestra'),
        s('Técnicas e instrumentos de recolección de datos', { kind: 'tecnicas', ayuda: 'Observación directa, entrevista, revisión documental y encuesta. Si hubo encuesta, indica abajo si fue presencial o virtual.' }),
        s('Procedimiento de análisis de los datos'), s('Validez y confiabilidad', { ayuda: 'Quién validó los instrumentos (perfil y número de expertos), con qué criterios y qué cambios se hicieron.' })
      ] },
      { num: 'IV', titulo: 'PRESENTACIÓN Y ANÁLISIS DE RESULTADOS', dinamico: true, secs: [
        s('Presentación de los resultados', { ayuda: 'Un subtítulo por indicador medido, sin signos de pregunta. Cada tabla o figura se menciona en el texto.' }),
        s('Análisis de los resultados'), s('Discusión de los resultados', { ayuda: 'Compara tus hallazgos con los antecedentes y la teoría.' })
      ] },
      { num: 'V', titulo: 'PROPUESTA TÉCNICA', dinamico: true, secs: [
        s('Descripción general de la propuesta'), s('Diseño técnico y componentes', { ayuda: 'Diagramas, planos o arquitectura, con cada componente justificado.' }),
        s('Pantallas o planos de la solución', { ayuda: 'Las pantallas del sistema van aquí, no en los anexos. Se agrega una nota general de que pertenecen a tu herramienta.' }),
        s('Presupuesto', { kind: 'presupuesto', tabla: [{ d: '', c: '', p: '' }], ayuda: 'Todo lo que conlleva el proyecto, incluido el costo de tu propio trabajo (horas y honorarios), la descripción de cada equipo y el soporte o cotización de cada elemento.' }),
        s('Matriz comparativa del antes y después', { kind: 'matriz', tabla: [{ k: '', a: '', d: '' }, { k: '', a: '', d: '' }, { k: '', a: '', d: '' }], ayuda: 'Criterios concretos (tiempo, errores, costos, control) con datos del diagnóstico.' }),
        s('Áreas impactadas', { ayuda: 'Qué áreas de la institución serían impactadas y de qué manera.' }),
        s('Beneficios de la implementación', { ayuda: 'Beneficios para la institución y para los usuarios finales.' })
      ] }
    ];
  }

  function estadoInicial() {
    return {
      v: 1,
      portada: { area: 'ÁREA DE INGENIERÍA Y TECNOLOGÍA', escuela: 'ESCUELA DE INGENIERÍA', carrera: 'INGENIERÍA DE SISTEMAS Y COMPUTACIÓN', titulo: '',
        integrantes: [{ n: '', m: '' }, { n: '', m: '' }, { n: '', m: '' }], asesor: '', lugar: 'SANTO DOMINGO, D.N., REPÚBLICA DOMINICANA', fecha: '' },
      agradecimientos: '', dedicatorias: '', intro: '',
      caps: capitulosBase(),
      encuesta: { usa: true, modalidad: '', url: '' },
      conclusiones: '', recomendaciones: '', glosario: '', referencias: '',
      anexos: [{ letra: 'A', nombre: 'Formulario vacío de la encuesta' }, { letra: 'B', nombre: 'Formulario de la encuesta lleno (1)' }, { letra: 'C', nombre: 'Formulario de la encuesta lleno (2)' }, { letra: 'D', nombre: 'Cotizaciones y soportes del presupuesto' }]
    };
  }

  // ---------- Utilidades de texto ----------
  function limpio(t) { return (t || '').replace(/\r/g, ''); }
  function lineas(t) { return limpio(t).split('\n').map(function (x) { return x.trim(); }).filter(Boolean); }
  function parrafos(t) { return lineas(t); }
  function palabras(t) { var x = limpio(t).trim(); return x ? x.split(/\s+/).length : 0; }
  function punto(t) { return t.replace(/[\s,;:]+$/, '').replace(/([^.!?…])$/, '$1.'); }
  function oracion(t) {
    var w = (t || '').trim().split(/\s+/);
    return w.map(function (p, i) {
      if (/^[A-ZÁÉÍÓÚÑ&0-9][A-ZÁÉÍÓÚÑ&0-9.\-]+$/.test(p) && p.length > 1) return p; // siglas
      if (i === 0) return p.charAt(0).toUpperCase() + p.slice(1);
      return p.charAt(0) === p.charAt(0).toLowerCase() ? p : (/^(Universidad|Dominicana|República|Santo|Domingo|Ministerio|Instituto|Hospital|Banco|Colegio|Liceo|Escuela)$/.test(p) ? p : p.charAt(0).toLowerCase() + p.slice(1));
    }).join(' ');
  }
  function moneda(n) { return 'RD$ ' + (Math.round(n * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function num(x) { var n = parseFloat(String(x).replace(/[^0-9.\-]/g, '')); return isNaN(n) ? 0 : n; }
  function filaPresupuestoCompleta(f) { return f.d && f.d.trim() && num(f.c) > 0 && num(f.p) > 0; }
  function totalPresupuesto(sec) { return (sec.tabla || []).reduce(function (a, f) { return a + (filaPresupuestoCompleta(f) ? num(f.c) * num(f.p) : 0); }, 0); }
  function buscarSec(S, kind) { for (var i = 0; i < S.caps.length; i++) for (var j = 0; j < S.caps[i].secs.length; j++) if (S.caps[i].secs[j].kind === kind) return S.caps[i].secs[j]; return null; }
  function anexosEncuesta(S) { return S.anexos.filter(function (a) { return /formulario|encuesta|cuestionario/i.test(a.nombre); }); }
  function letrasAutomaticas(S) {
    var l = [], pres = buscarSec(S, 'presupuesto');
    if (S.encuesta.usa && S.encuesta.modalidad) anexosEncuesta(S).forEach(function (a) { l.push(a.letra); });
    if (pres && pres.tabla.some(filaPresupuestoCompleta) && letraCotizaciones(S)) l.push(letraCotizaciones(S));
    return l;
  }
  function listaAnexos(letras) { return letras.length === 1 ? 'el Anexo ' + letras[0] : 'los Anexos ' + letras.slice(0, -1).join(', ') + ' y ' + letras[letras.length - 1]; }
  function letraCotizaciones(S) {
    for (var i = 0; i < S.anexos.length; i++) if (/cotizaci|soporte/i.test(S.anexos[i].nombre)) return S.anexos[i].letra;
    return null;
  }

  // ---------- Numeración y texto completo ----------
  function encabezados(S) {
    var out = [];
    out.push({ nivel: 1, texto: 'AGRADECIMIENTOS', romano: true }, { nivel: 1, texto: 'DEDICATORIAS', romano: true }, { nivel: 1, texto: 'INTRODUCCIÓN' });
    S.caps.forEach(function (c, ci) {
      out.push({ nivel: 1, texto: 'CAPÍTULO ' + c.num + ': ' + c.titulo });
      c.secs.forEach(function (sc, si) {
        out.push({ nivel: 2, texto: (ci + 1) + '.' + (si + 1) + ' ' + sc.t });
        (sc.subs || []).forEach(function (sb, bi) { out.push({ nivel: 3, texto: (ci + 1) + '.' + (si + 1) + '.' + (bi + 1) + ' ' + sb.t }); });
      });
    });
    ['CONCLUSIONES', 'RECOMENDACIONES', 'GLOSARIO DE TÉRMINOS', 'REFERENCIAS BIBLIOGRÁFICAS', 'ANEXOS'].forEach(function (t) { out.push({ nivel: 1, texto: t }); });
    return out;
  }

  function textoCuerpo(S) {
    var p = [S.intro];
    S.caps.forEach(function (c) { c.secs.forEach(function (sc) {
      p.push(sc.body); (sc.subs || []).forEach(function (sb) { p.push(sb.body); });
      if (sc.kind === 'matriz') (sc.tabla || []).forEach(function (f) { p.push(f.k + ' ' + f.a + ' ' + f.d); });
      if (sc.kind === 'presupuesto') (sc.tabla || []).forEach(function (f) { p.push(f.d); });
    }); });
    p.push(S.conclusiones);
    return p.join('\n');
  }

  function palabrasTotales(S) {
    var n = palabras(textoCuerpo(S)) + palabras(S.recomendaciones) + palabras(S.glosario);
    return n;
  }
  function paginasEstimadas(S) { return Math.max(0, Math.round(palabrasTotales(S) / PALABRAS_POR_PAGINA)); }

  // ---------- Revisión (misma lógica que la plataforma tesis) ----------
  function revisar(S) {
    var R = [];
    function add(id, titulo, ok, detalle, accion, bloqueante, seccion, parcial) {
      R.push({ id: id, titulo: titulo, estado: ok ? 'CUMPLE' : (parcial ? 'EN PROCESO' : 'PENDIENTE'), detalle: ok ? '' : detalle, accion: ok ? '' : accion, bloqueante: !!bloqueante, seccion: seccion });
    }
    var P = S.portada, cuerpo = textoCuerpo(S), todo = cuerpo + '\n' + S.recomendaciones + '\n' + S.glosario;
    var objs = buscarSec(S, 'objetivos'), pres = buscarSec(S, 'presupuesto'), matriz = buscarSec(S, 'matriz');
    var esp = objs ? lineas(objs.subs[1].body) : [];
    var sist = S.caps[0].secs[1].subs[2].body;

    // Portada
    var ints = P.integrantes.filter(function (i) { return i.n.trim() || i.m.trim(); });
    var faltaP = [];
    if (!P.titulo.trim()) faltaP.push('el tema');
    if (!ints.length || ints.some(function (i) { return !i.n.trim() || !i.m.trim(); })) faltaP.push('nombres y matrículas');
    if (!P.asesor.trim()) faltaP.push('el asesor');
    if (!P.fecha.trim()) faltaP.push('la fecha');
    add('portada_escuela', 'Portada completa según el instructivo', !faltaP.length, 'Falta ' + faltaP.join(', ') + '.', 'Completa los datos de la portada: la hoja sale con «ESCUELA DE INGENIERÍA» solamente y los nombres en mayúscula.', true, 'portada', faltaP.length < 4);

    // Título
    var primera = (P.titulo.trim().split(/\s+/)[0] || '').toLowerCase();
    var nT = palabras(P.titulo);
    add('titulo_infinitivo', 'El título empieza con un sustantivo y tiene de 15 a 25 palabras', P.titulo.trim() && VERBOS_INFINITIVO.indexOf(primera) === -1 && nT >= 15 && nT <= 25,
      VERBOS_INFINITIVO.indexOf(primera) !== -1 ? 'El título empieza con el verbo «' + primera + '».' : 'El título tiene ' + nT + ' palabras.',
      'Empieza con un sustantivo (análisis, evaluación, diseño…) y usa la fórmula [ACCIÓN] de [SISTEMA] para [EMPRESA] en [UBICACIÓN], durante [PERÍODO] (15 a 25 palabras).', false, 'portada', !!P.titulo.trim());

    // Introducción
    var nI = palabras(S.intro);
    add('introduccion_extension', 'Introducción de 2 a 3 páginas', nI >= 550 && nI <= 1150, 'Tiene unas ' + nI + ' palabras (deben ser entre 550 y 1150).', 'Tema y título, contexto, propósito y un párrafo por capítulo («El Capítulo I, denominado…, expone…»). No resumas resultados.', false, 'intro', nI > 0);

    // Objetivos
    var vagos = lineas((objs ? objs.subs[0].body : '') + '\n' + (objs ? objs.subs[1].body : '')).filter(function (l) { return VERBOS_VAGOS.indexOf(l.replace(/^[•\-\d.)\s]+/, '').split(/\s+/)[0].toLowerCase()) !== -1; });
    add('objetivos_verbos', 'De 3 a 4 objetivos específicos con verbos medibles', esp.length >= 3 && esp.length <= 4 && !vagos.length,
      vagos.length ? 'Hay objetivos que empiezan con conocer, comprender o entender.' : 'Hay ' + esp.length + ' objetivos específicos (deben ser 3 o 4).', 'Usa verbos medibles y redacta de 3 a 4 objetivos específicos, uno por línea.', true, 'cap-0', esp.length > 0);
    var nq = (sist.match(/\?/g) || []).length || lineas(sist).length;
    add('objetivos_preguntas', 'Una pregunta de sistematización por cada objetivo específico', esp.length > 0 && nq === esp.length, 'Hay ' + nq + ' preguntas y ' + esp.length + ' objetivos.', 'Escribe una pregunta por cada objetivo específico, en el mismo orden.', false, 'cap-0', nq > 0);

    // Metodología y encuesta
    var enc = S.encuesta, okEnc = !enc.usa || (enc.modalidad === 'presencial') || (enc.modalidad === 'virtual' && /^https?:\/\/\S+/.test(enc.url.trim()));
    add('encuesta_modalidad', 'Encuesta: presencial o virtual (con URL completa si fue virtual)', okEnc, enc.modalidad ? 'Falta la dirección (URL) completa de la encuesta virtual.' : 'No dices si la encuesta fue presencial o virtual.', 'Indica la modalidad y, si fue virtual, la URL completa. En los anexos van un formulario vacío y dos llenos.', true, 'cap-2', !!enc.modalidad);
    var anexTxt = S.anexos.map(function (a) { return a.nombre; }).join(' | ');
    add('encuesta_anexos', 'Anexos de la encuesta: un formulario vacío y dos llenos', !enc.usa || (/vac[ií]o/i.test(anexTxt) && (anexTxt.match(/lleno/gi) || []).length >= 2), 'Faltan los formularios de la encuesta en los anexos.', 'Agrega un anexo con el formulario vacío y dos con formularios llenos.', true, 'anexos');
    var libros = LIBROS_METODOLOGIA.filter(function (r) { return r.test(S.referencias); }).length;
    add('libros_metodologia', 'Al menos dos libros de metodología citados', libros >= 2, 'Se detectan ' + libros + ' libros de metodología en las referencias.', 'Cita al menos dos (Hernández Sampieri y Mendoza, 2018; Creswell y Creswell, 2023).', false, 'referencias', libros > 0);

    // Capítulo V
    var filas = pres ? pres.tabla.filter(filaPresupuestoCompleta) : [];
    var okCosto = filas.some(function (f) { return /honorario|mano de obra|horas|desarrollo|implementaci/i.test(f.d); });
    var letraCot = letraCotizaciones(S);
    add('presupuesto_soportes', 'Presupuesto completo, con el costo de tu trabajo y soportes', filas.length >= 2 && okCosto && !!letraCot,
      !filas.length ? 'El presupuesto está vacío.' : (!okCosto ? 'No incluye el costo de realizar el trabajo (horas o honorarios).' : (!letraCot ? 'No hay un anexo con las cotizaciones o soportes.' : 'Agrega más partidas.')),
      'Describe cada equipo, incluye el costo de tu propio trabajo y adjunta las cotizaciones como anexo.', true, 'cap-4', filas.length > 0);
    var mf = matriz ? matriz.tabla.filter(function (f) { return f.k.trim() && f.a.trim() && f.d.trim(); }) : [];
    add('matriz_antes_despues', 'Matriz comparativa del antes y después (mínimo 3 criterios)', mf.length >= 3, 'Tienes ' + mf.length + ' criterios completos.', 'Compara con criterios concretos: tiempo, errores, costos y control.', true, 'cap-4', mf.length > 0);
    var areas = buscarSecPorTitulo(S, 'Áreas impactadas'), ben = buscarSecPorTitulo(S, 'Beneficios de la implementación');
    add('areas_impactadas', 'Áreas impactadas y de qué manera', palabras(areas && areas.body) >= 40, 'Describe las áreas impactadas (al menos 40 palabras).', 'Nombra las áreas reales de la institución y cómo cambia cada una.', true, 'cap-4', palabras(areas && areas.body) > 0);
    add('beneficios', 'Beneficios para la institución y los usuarios', palabras(ben && ben.body) >= 40, 'Describe los beneficios (al menos 40 palabras).', 'Distingue beneficios para la institución y para los usuarios finales.', true, 'cap-4', palabras(ben && ben.body) > 0);

    // Cierre
    var nC = palabras(S.conclusiones);
    add('conclusion_extension', 'Conclusión de 3 a 5 páginas', nC >= 900 && nC <= 2000, 'Tiene unas ' + nC + ' palabras (deben ser entre 900 y 2000).', 'Desarrolla una conclusión por cada objetivo específico, sin datos ni autores nuevos.', false, 'conclusiones', nC > 0);
    add('conclusion_por_objetivo', 'Una conclusión por cada objetivo específico', esp.length > 0 && parrafos(S.conclusiones).length >= esp.length, 'Hay ' + parrafos(S.conclusiones).length + ' párrafos y ' + esp.length + ' objetivos.', 'Responde a cada objetivo específico en su propio párrafo.', false, 'conclusiones', nC > 0);
    add('recomendaciones', 'Recomendaciones en viñetas (al menos 3)', lineas(S.recomendaciones).length >= 3, 'Hay ' + lineas(S.recomendaciones).length + ' recomendaciones.', 'Una recomendación por línea; la hoja pone la viñeta y el punto.', false, 'recomendaciones', lineas(S.recomendaciones).length > 0);
    add('glosario', 'Glosario de términos (al menos 5)', lineas(S.glosario).length >= 5, 'Hay ' + lineas(S.glosario).length + ' términos.', 'Escribe «Término: definición», uno por línea.', false, 'glosario', lineas(S.glosario).length > 0);

    // Referencias y citas
    var refs = lineas(S.referencias).map(function (x) { return x.replace(/\*/g, ''); });
    add('referencias_minimas', 'Referencias bibliográficas (al menos 15)', refs.length >= 15, 'Hay ' + refs.length + ' referencias.', 'Fuentes académicas, con DOI o enlace, en APA 7.', false, 'referencias', refs.length > 0);
    var aud = auditarCitas(todo, refs);
    add('citas_referencias', 'Cada cita del texto está en las referencias y viceversa', refs.length > 0 && !aud.sinReferencia.length && !aud.sinCita.length,
      (aud.sinReferencia.length ? 'Citados sin referencia: ' + aud.sinReferencia.slice(0, 4).join(', ') + '. ' : '') + (aud.sinCita.length ? 'Referencias sin cita: ' + aud.sinCita.slice(0, 4).join(', ') + '.' : ''),
      'Corrige las entradas para que coincidan exactamente.', true, 'referencias', refs.length > 0);

    // Anexos
    var autom = letrasAutomaticas(S);
    var sinMencion = S.anexos.filter(function (a) { return a.nombre.trim() && autom.indexOf(a.letra) === -1 && !new RegExp('anexos?\\s+(?:[A-Z]\\s*(?:,|y|e)\\s*)*' + a.letra + '\\b', 'i').test(todo); });
    add('anexos_sin_mencion', 'Todo anexo está mencionado en un capítulo', S.anexos.length > 0 && !sinMencion.length, 'Sin mención: ' + sinMencion.map(function (a) { return 'Anexo ' + a.letra; }).join(', ') + '.', 'Menciónalo en el texto («ver Anexo C») o retíralo.', true, 'anexos', S.anexos.length > 0);
    var antip = S.anexos.filter(function (a) { return /similitud|antiplagio|turnitin|originalidad/i.test(a.nombre); });
    add('antiplagio_en_documento', 'El reporte antiplagio va en un archivo aparte', !antip.length, 'Hay un anexo de similitud o antiplagio.', 'Quita ese anexo: el reporte se entrega aparte.', true, 'anexos');

    // Extensión total
    var pg = paginasEstimadas(S);
    add('minimo_paginas', 'Mínimo 45 páginas de contenido (estimado)', pg >= 45, 'Llevas unas ' + pg + ' páginas estimadas.', 'Desarrolla cada capítulo con profundidad.', false, 'intro', pg > 0);

    // Contenido de todos los capítulos (sin esto se podría llegar al 100 % con capítulos vacíos)
    var vacias = [];
    S.caps.forEach(function (c, ci) { c.secs.forEach(function (sc) {
      if (sc.kind === 'presupuesto' || sc.kind === 'matriz') return;
      var n = palabras(sc.body) + (sc.subs || []).reduce(function (a, b) { return a + palabras(b.body); }, 0);
      if (n < 60) vacias.push({ t: sc.t, ci: ci });
    }); });
    add('capitulos_completos', 'Todos los subcapítulos tienen contenido (mínimo 60 palabras)', !vacias.length,
      vacias.length + ' subcapítulos están vacíos o muy cortos: ' + vacias.slice(0, 4).map(function (v) { return v.t; }).join(', ') + (vacias.length > 4 ? '…' : '') + '.',
      'Desarrolla cada subcapítulo con tus datos y tus fuentes.', true, 'cap-' + (vacias.length ? vacias[0].ci : 0), vacias.length < 20);
    R[R.length - 1].ir = 'f-cap-' + (vacias.length ? vacias[0].ci : 0);

    var nMarco = S.caps[1].secs.reduce(function (a, sc) { return a + 1 + (sc.subs || []).length; }, 0);
    add('marco_teorico_15_20', 'Marco teórico con 15 a 20 secciones', nMarco >= 15 && nMarco <= 20, 'Tienes ' + nMarco + ' secciones en el Capítulo II.', 'Agrega subcapítulos (botón «Agregar subcapítulo») con los conceptos clave de tu título y tus objetivos.', false, 'cap-1', nMarco > 3);
    R[R.length - 1].ir = 'f-cap-1';

    var mal4 = [];
    S.caps[3].secs.forEach(function (sc) { if (/\?|pregunta\s*\d/i.test(sc.t)) mal4.push(sc.t); (sc.subs || []).forEach(function (b) { if (/\?|pregunta\s*\d/i.test(b.t)) mal4.push(b.t); }); });
    add('titulos_cap4', 'Subtítulos del Capítulo IV como indicador, sin signos de pregunta', !mal4.length, 'Estos subtítulos son preguntas: ' + mal4.slice(0, 3).join('; ') + '.', 'Nombra el indicador medido (ej.: «Frecuencia de diferencias de inventario»); la pregunta textual va en el anexo del instrumento.', true, 'cap-3');
    R[R.length - 1].ir = 'f-cap-3';

    var matMal = P.integrantes.filter(function (i) { return i.m.trim() && !/^\d{2}-[A-Za-z]{3,5}-\d-\d{3}$/.test(i.m.trim()); });
    add('matriculas_formato', 'Matrículas con el formato oficial (22-SISN-1-043)', !matMal.length, 'Revisa la matrícula de ' + matMal.map(function (i) { return i.n || '(sin nombre)'; }).join(', ') + '.', 'Escríbela como en tu carné: 22-SISN-1-043.', false, 'portada');

    var t4 = S.caps[3].secs.map(function (sc) { return sc.body + ' ' + (sc.subs || []).map(function (b) { return b.body; }).join(' '); }).join(' ');
    var nTab4 = (t4.match(/(?:Tabla|Figura|Gr[aá]fico)\s+4\.\d+/g) || []).length;
    add('resultados_tablas', 'Capítulo IV: tablas y gráficos mencionados en el texto (mínimo 5)', nTab4 >= 5, 'Mencionas ' + nTab4 + ' tablas o gráficos del Capítulo IV.', 'Inserta tus tablas y gráficos en el Word descargado, con su fuente, y menciónalos aquí («como muestra la Tabla 4.1…»).', false, 'cap-3', nTab4 > 0);
    R[R.length - 1].ir = 'f-cap-3';

    var GRUPO = { portada_escuela: 'PE', titulo_infinitivo: 'PE', introduccion_extension: 'PE', conclusion_extension: 'PE', recomendaciones: 'PE', glosario: 'PE', referencias_minimas: 'PE', citas_referencias: 'PE', anexos_sin_mencion: 'PE', antiplagio_en_documento: 'PE', minimo_paginas: 'PE', matriculas_formato: 'PE', titulos_cap4: 'PE', resultados_tablas: 'PE', encuesta_anexos: 'PE',
      objetivos_verbos: 'RPAP', objetivos_preguntas: 'RPAP', encuesta_modalidad: 'RPAP', libros_metodologia: 'RPAP', conclusion_por_objetivo: 'RPAP', capitulos_completos: 'RPAP', marco_teorico_15_20: 'RPAP',
      presupuesto_soportes: 'AITO', matriz_antes_despues: 'AITO', areas_impactadas: 'AITO', beneficios: 'AITO' };
    R.forEach(function (r) { r.grupo = GRUPO[r.id] || 'PE'; });
    return R;
  }

  function buscarSecPorTitulo(S, t) {
    for (var i = 0; i < S.caps.length; i++) for (var j = 0; j < S.caps[i].secs.length; j++) if (S.caps[i].secs[j].t === t) return S.caps[i].secs[j];
    return null;
  }

  function normalizar(x) { return x.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function auditarCitas(texto, refs) {
    var citas = {};
    var t = limpio(texto);
    var re1 = /([A-ZÁÉÍÓÚÑ][\wáéíóúñ\-]+)(?:\s+(?:y|&)\s+[A-ZÁÉÍÓÚÑ][\wáéíóúñ\-]+(?:\s+[A-ZÁÉÍÓÚÑ][\wáéíóúñ\-]+)?|\s+et al\.)?\s*\((\d{4})[a-z]?\)/g, bloque = /\(([^()]{3,250})\)/g, m;
    while ((m = re1.exec(t))) citas[normalizar(m[1]) + m[2]] = m[1] + ' (' + m[2] + ')';
    while ((m = bloque.exec(t))) {
      m[1].split(';').forEach(function (parte) {
        var mm = /^\s*(?:v[eé]ase\s+|ver\s+|cf\.\s+)?([A-ZÁÉÍÓÚÑ][\wáéíóúñ\-]+)[^\d()]*?,?\s*(\d{4})[a-z]?\b/.exec(parte);
        if (mm) citas[normalizar(mm[1]) + mm[2]] = mm[1] + ' (' + mm[2] + ')';
      });
    }
    var enRefs = {}, sinCita = [];
    refs.forEach(function (r) {
      var mm = /^([^,(]+).*?\((\d{4})/.exec(r);
      if (!mm) return;
      var clave = normalizar(mm[1].trim().split(/\s+/)[0]) + mm[2];
      enRefs[clave] = true;
      if (!citas[clave]) {
        var otras = normalizar(mm[1]).split(/[\s,]+/).filter(function (w) { return w.length > 2; });
        if (!otras.some(function (w) { return citas[w + mm[2]]; })) sinCita.push(mm[1].trim().split(',')[0] + ' (' + mm[2] + ')');
      }
    });
    var sinReferencia = Object.keys(citas).filter(function (k) {
      var anio = k.slice(-4), ap = k.slice(0, -4);
      return !refs.some(function (r) { return normalizar(r).indexOf(ap) !== -1 && r.indexOf('(' + anio) !== -1; });
    }).map(function (k) { return citas[k]; });
    return { sinReferencia: sinReferencia, sinCita: sinCita };
  }

  // ---------- Exportación a Word ----------
  function construirDocx(S, d, logoBytes) {
    var Document = d.Document, Paragraph = d.Paragraph, TextRun = d.TextRun, AlignmentType = d.AlignmentType, Footer = d.Footer, PageNumber = d.PageNumber,
      NumberFormat = d.NumberFormat, TableOfContents = d.TableOfContents, Table = d.Table, TableRow = d.TableRow, TableCell = d.TableCell, WidthType = d.WidthType,
      LineRuleType = d.LineRuleType, LevelFormat = d.LevelFormat, ImageRun = d.ImageRun, BorderStyle = d.BorderStyle, HeadingLevel = d.HeadingLevel, SectionType = d.SectionType;
    var FUENTE = 'Times New Roman';
    var PAGINA = { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440, header: 720, footer: 720 } };

    function run(t, o) { o = o || {}; return new TextRun({ text: t, font: FUENTE, size: o.size || 24, bold: !!o.bold, italics: !!o.italics, color: '000000' }); }
    function cuerpo(t, o) { o = o || {}; return new Paragraph({ alignment: o.alineacion || AlignmentType.JUSTIFIED, spacing: { line: o.linea || 360, lineRule: LineRuleType.AUTO, before: 0, after: o.despues === undefined ? 120 : o.despues }, keepNext: !!o.keepNext, children: [run(t, o)] }); }
    function centrado(t, o) { o = o || {}; o.alineacion = AlignmentType.CENTER; return cuerpo(t, o); }
    function vineta(t) { return new Paragraph({ numbering: { reference: 'vinetas', level: 0 }, alignment: AlignmentType.JUSTIFIED, spacing: { line: 360, lineRule: LineRuleType.AUTO, after: 60 }, children: [run(punto(t))] }); }
    function titulo(t, saltar) { return new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: !!saltar, alignment: AlignmentType.CENTER, spacing: { before: 240, after: 240, line: 360 }, keepNext: true, children: [run(t, { bold: true, size: 28 })] }); }
    function subcap(t) { return new Paragraph({ heading: HeadingLevel.HEADING_2, alignment: AlignmentType.LEFT, spacing: { before: 240, after: 120, line: 360 }, keepNext: true, children: [run(t, { bold: true, size: 28 })] }); }
    function subsub(t) { return new Paragraph({ heading: HeadingLevel.HEADING_3, alignment: AlignmentType.LEFT, spacing: { before: 200, after: 100, line: 360 }, keepNext: true, children: [run(t, { bold: true, size: 24 })] }); }
    function texto(t) { return parrafos(t).map(function (p) { return cuerpo(p); }); }
    function borde() { var b = { style: BorderStyle.SINGLE, size: 4, color: '000000' }; return { top: b, bottom: b, left: b, right: b }; }
    function celda(t, ancho, o) { o = o || {}; return new TableCell({ width: { size: ancho, type: WidthType.DXA }, borders: borde(), margins: { top: 60, bottom: 60, left: 100, right: 100 },
      children: [new Paragraph({ alignment: o.alineacion || AlignmentType.LEFT, spacing: { line: 240, after: 0 }, children: [run(t, { size: 22, bold: o.bold })] })] }); }
    function tabla(anchos, encabezado, filasDatos) {
      var rows = [new TableRow({ tableHeader: true, children: encabezado.map(function (h, i) { return celda(h, anchos[i], { bold: true, alineacion: AlignmentType.CENTER }); }) })];
      filasDatos.forEach(function (f) { rows.push(new TableRow({ children: f.map(function (c, i) { return celda(c.t === undefined ? c : c.t, anchos[i], c.t === undefined ? {} : c); }) })); });
      return new Table({ width: { size: anchos.reduce(function (a, b) { return a + b; }, 0), type: WidthType.DXA }, columnWidths: anchos, rows: rows });
    }
    function rotulo(n, tit) { return [new Paragraph({ alignment: AlignmentType.LEFT, keepNext: true, spacing: { line: 240, before: 200, after: 40 }, children: [run('Tabla ' + n, { bold: true, size: 22 })] }),
      new Paragraph({ alignment: AlignmentType.LEFT, keepNext: true, spacing: { line: 240, after: 80 }, children: [run(tit, { italics: true, size: 22 })] })]; }
    function fuenteTabla() { return new Paragraph({ alignment: AlignmentType.LEFT, spacing: { line: 240, before: 60, after: 200 }, children: [run('Fuente: Realización propia.', { size: 20 })] }); }

    var P = S.portada, cotLetra = letraCotizaciones(S);
    var ints = P.integrantes.filter(function (i) { return i.n.trim() || i.m.trim(); });

    // 1. Portada y hoja de título
    var logo = logoBytes ? [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: [new ImageRun({ data: logoBytes, transformation: { width: 95, height: 63 }, type: 'png' })] })] : [];
    var portada = logo.concat([
      centrado('UNIVERSIDAD DOMINICANA O&M', { bold: true, size: 26, linea: 276, despues: 0 }),
      centrado('FUNDADA EL 12 DE ENERO DE 1966', { bold: true, size: 24, linea: 276, despues: 0 }),
      centrado('DIRECCIÓN DE TRABAJO FINAL DE GRADO', { bold: true, size: 24, linea: 276, despues: 0 }),
      centrado(P.area || 'ÁREA DE INGENIERÍA Y TECNOLOGÍA', { linea: 276, despues: 0 }),
      centrado('ESCUELA DE INGENIERÍA', { linea: 276, despues: 360 }),
      centrado('TRABAJO FINAL DE GRADO PARA OPTAR POR EL TÍTULO DE', { linea: 276, despues: 0 }),
      centrado((P.carrera || '').toUpperCase() + '.', { bold: true, linea: 276, despues: 360 }),
      centrado('TEMA', { bold: true, linea: 276, despues: 120 }),
      centrado((P.titulo || '').toUpperCase(), { bold: true, linea: 276, despues: 360 }),
      centrado('PRESENTADO POR', { bold: true, linea: 276, despues: 120 })
    ]);
    ints.forEach(function (i) { portada.push(centrado((i.n || '').toUpperCase() + (i.m ? '    ' + i.m : ''), { linea: 276, despues: 0 })); });
    portada.push(centrado('ASESOR:', { bold: true, linea: 276, despues: 0 }), centrado((P.asesor || ''), { linea: 276, despues: 360 }),
      centrado((P.lugar || '').toUpperCase(), { linea: 276, despues: 0 }), centrado((P.fecha || '').toUpperCase(), { linea: 276, despues: 240 }),
      centrado('Los conceptos expuestos en este trabajo final de grado son de la exclusiva responsabilidad del o los sustentantes.', { size: 18, linea: 240 }));
    var hoja = [new Paragraph({ pageBreakBefore: true, alignment: AlignmentType.CENTER, spacing: { before: 3600, line: 360, after: 0 }, children: [run((P.titulo || '').toUpperCase(), { bold: true, size: 28 })] })];

    // 2. Agradecimientos y dedicatorias
    var prelim = [titulo('AGRADECIMIENTOS')].concat(texto(S.agradecimientos), [titulo('DEDICATORIAS', true)], texto(S.dedicatorias));

    // 3. Índice
    var indice = [centrado('ÍNDICE', { bold: true, size: 28, despues: 240 }),
      new TableOfContents('ÍNDICE', { hyperlink: true, headingStyleRange: '1-3' })];

    // 4. Cuerpo
    var body = [titulo('INTRODUCCIÓN')].concat(texto(S.intro));
    var nTabla = 0;
    S.caps.forEach(function (c, ci) {
      body.push(titulo('CAPÍTULO ' + c.num + ': ' + c.titulo, true));
      c.secs.forEach(function (sc, si) {
        body.push(subcap((ci + 1) + '.' + (si + 1) + ' ' + sc.t));
        if (sc.kind === 'objetivos') {
          body.push(subsub((ci + 1) + '.' + (si + 1) + '.1 ' + sc.subs[0].t));
          body = body.concat(texto(sc.subs[0].body));
          body.push(subsub((ci + 1) + '.' + (si + 1) + '.2 ' + sc.subs[1].t));
          lineas(sc.subs[1].body).forEach(function (l) { body.push(vineta(l.replace(/^[•\-\d.)\s]+/, ''))); });
          return;
        }
        body = body.concat(texto(sc.body));
        if (sc.kind === 'tecnicas' && S.encuesta.usa && S.encuesta.modalidad) {
          body.push(cuerpo('La encuesta se aplicó de forma ' + S.encuesta.modalidad + (S.encuesta.modalidad === 'virtual' ? ' mediante el siguiente enlace: ' + S.encuesta.url + '.' : '.') + ' ' + (anexosEncuesta(S).length ? 'El formulario de la encuesta, vacío y lleno, se incluye en ' + listaAnexos(anexosEncuesta(S).map(function (a) { return a.letra; })) + '.' : '')));
        }
        (sc.subs || []).forEach(function (sb, bi) {
          body.push(subsub((ci + 1) + '.' + (si + 1) + '.' + (bi + 1) + ' ' + sb.t));
          body = body.concat(texto(sb.body));
        });
        if (sc.kind === 'presupuesto') {
          nTabla++;
          var filas = sc.tabla.filter(filaPresupuestoCompleta);
          body.push(cuerpo('El presupuesto estimado del proyecto se resume en la Tabla ' + (ci + 1) + '.' + nTabla + '. ' + (cotLetra ? 'Las cotizaciones y los soportes de cada elemento se encuentran en el Anexo ' + cotLetra + '.' : '')));
          body = body.concat(rotulo((ci + 1) + '.' + nTabla, 'Presupuesto estimado del proyecto'));
          var total = totalPresupuesto(sc);
          body.push(tabla([3600, 900, 1700, 1700, 1460], ['Descripción técnica', 'Cant.', 'Precio unitario (RD$)', 'Total (RD$)', 'Soporte'],
            filas.map(function (f) { return [f.d, { t: String(num(f.c)), alineacion: AlignmentType.CENTER }, { t: moneda(num(f.p)).replace('RD$ ', ''), alineacion: AlignmentType.RIGHT }, { t: moneda(num(f.c) * num(f.p)).replace('RD$ ', ''), alineacion: AlignmentType.RIGHT }, cotLetra ? 'Anexo ' + cotLetra : '']; })
              .concat([[{ t: 'TOTAL DE LA INVERSIÓN ESTIMADA', bold: true }, '', '', { t: moneda(total).replace('RD$ ', ''), bold: true, alineacion: AlignmentType.RIGHT }, '']])));
          body.push(fuenteTabla());
        }
        if (sc.kind === 'matriz') {
          nTabla++;
          var mf = sc.tabla.filter(function (f) { return f.k.trim() && f.a.trim() && f.d.trim(); });
          body.push(cuerpo('La comparación entre la situación antes del proyecto y la situación después de implementarlo se presenta en la Tabla ' + (ci + 1) + '.' + nTabla + '.'));
          body = body.concat(rotulo((ci + 1) + '.' + nTabla, 'Matriz comparativa del antes y después del proyecto'));
          body.push(tabla([2400, 3480, 3480], ['Criterio', 'Antes del proyecto', 'Después de implementarlo'], mf.map(function (f) { return [f.k, f.a, f.d]; })));
          body.push(fuenteTabla());
        }
        if (sc.t === 'Pantallas o planos de la solución') {
          body.push(cuerpo('Nota: todas las imágenes de este subcapítulo son generadas por la herramienta desarrollada en este proyecto.'));
        }
      });
    });
    body.push(titulo('CONCLUSIONES', true)); body = body.concat(texto(S.conclusiones));
    body.push(titulo('RECOMENDACIONES', true)); lineas(S.recomendaciones).forEach(function (l) { body.push(vineta(l.replace(/^[•\-\d.)\s]+/, ''))); });
    body.push(titulo('GLOSARIO DE TÉRMINOS', true));
    lineas(S.glosario).forEach(function (l) { var i = l.indexOf(':'); body.push(new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { line: 360, after: 80 }, children: i > 0 ? [run(l.slice(0, i + 1), { bold: true }), run(punto(l.slice(i + 1)))] : [run(punto(l))] })); });
    body.push(titulo('REFERENCIAS BIBLIOGRÁFICAS', true));
    lineas(S.referencias).sort(function (a, b) { return a.replace(/\*/g, '').localeCompare(b.replace(/\*/g, ''), 'es'); }).forEach(function (r) {
      body.push(new Paragraph({ alignment: AlignmentType.LEFT, spacing: { line: 240, after: 120 }, indent: { left: 720, hanging: 720 },
        children: r.split(/(\*[^*]+\*)/).filter(Boolean).map(function (p) { return /^\*[^*]+\*$/.test(p) ? run(p.slice(1, -1), { size: 20, italics: true }) : run(p, { size: 20 }); }) }));
    });
    body.push(titulo('ANEXOS', true));
    S.anexos.filter(function (a) { return a.nombre.trim(); }).forEach(function (a) {
      body.push(new Paragraph({ heading: HeadingLevel.HEADING_2, alignment: AlignmentType.LEFT, spacing: { before: 240, after: 120, line: 360 }, children: [run('ANEXO ' + a.letra + '. ' + a.nombre, { bold: true, size: 24 })] }));
      body.push(cuerpo('[Coloca aquí el contenido del Anexo ' + a.letra + '.]'));
    });

    // 5. Hoja de firmas (párrafos con tabuladores: se extraen como texto en cualquier lector)
    var tabs = [{ type: d.TabStopType.CENTER, position: 2300 }, { type: d.TabStopType.CENTER, position: 7000 }];
    function filaFirma(a, b, o) { o = o || {}; return new Paragraph({ tabStops: tabs, alignment: AlignmentType.LEFT, spacing: { line: 240, before: o.antes || 0, after: 0 },
      children: [new TextRun({ children: [new d.Tab(), a, new d.Tab(), b], font: FUENTE, size: o.size || 22, bold: !!o.bold, color: '000000' })] }); }
    var firmas = logo.concat([
      centrado('UNIVERSIDAD DOMINICANA O&M', { bold: true, size: 26, linea: 276, despues: 0 }),
      centrado('FUNDADA EL 12 DE ENERO DE 1966', { bold: true, linea: 276, despues: 0 }),
      centrado('DIRECCIÓN DE TRABAJO FINAL DE GRADO', { bold: true, linea: 276, despues: 0 }),
      filaFirma('______________________________', '______________________________', { antes: 4200 }),
      filaFirma('Director de trabajo final de grado', 'Asesor', { bold: true })
    ]);

    function pie(romano) { return { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ children: [PageNumber.CURRENT], font: FUENTE, size: 24 })] })] }) }; }
    var sinPie = { default: new Footer({ children: [new Paragraph({ children: [] })] }) };

    return new Document({
      creator: 'Constructor de TFG - Universidad Dominicana O&M', title: 'Trabajo Final de Grado', features: { updateFields: true },
      styles: {
        default: {
          document: { run: { font: FUENTE, size: 24, color: '000000' }, paragraph: { alignment: AlignmentType.JUSTIFIED, spacing: { line: 360, lineRule: LineRuleType.AUTO, after: 120 } } },
          heading1: { run: { font: FUENTE, size: 28, bold: true, color: '000000' }, paragraph: { alignment: AlignmentType.CENTER, spacing: { before: 240, after: 240, line: 360 } } },
          heading2: { run: { font: FUENTE, size: 28, bold: true, color: '000000' }, paragraph: { alignment: AlignmentType.LEFT, spacing: { before: 240, after: 120, line: 360 } } },
          heading3: { run: { font: FUENTE, size: 24, bold: true, color: '000000' }, paragraph: { alignment: AlignmentType.LEFT, spacing: { before: 200, after: 100, line: 360 } } }
        },
        paragraphStyles: [1, 2, 3].map(function (n) { return { id: 'TOC' + n, name: 'toc ' + n, basedOn: 'Normal', next: 'Normal', run: { font: FUENTE, size: 24, bold: n === 1 }, paragraph: { alignment: AlignmentType.LEFT, spacing: { line: 240, after: 60 }, indent: { left: (n - 1) * 360 } } }; })
      },
      numbering: { config: [{ reference: 'vinetas', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }] },
      sections: [
        { properties: { page: PAGINA }, footers: sinPie, children: portada.concat(hoja) },
        { properties: { type: SectionType.NEXT_PAGE, page: Object.assign({}, PAGINA, { pageNumbers: { start: 1, formatType: NumberFormat.LOWER_ROMAN } }) }, footers: pie(true), children: prelim },
        { properties: { type: SectionType.NEXT_PAGE, page: PAGINA }, footers: sinPie, children: indice },
        { properties: { type: SectionType.NEXT_PAGE, page: Object.assign({}, PAGINA, { pageNumbers: { start: 1, formatType: NumberFormat.DECIMAL } }) }, footers: pie(false), children: body },
        { properties: { type: SectionType.NEXT_PAGE, page: PAGINA }, footers: sinPie, children: firmas }
      ]
    });
  }

  return {
    estadoInicial: estadoInicial, capitulosBase: capitulosBase, encabezados: encabezados, revisar: revisar, auditarCitas: auditarCitas, construirDocx: construirDocx,
    textoCuerpo: textoCuerpo, palabras: palabras, lineas: lineas, parrafos: parrafos, punto: punto, oracion: oracion, moneda: moneda, num: num, totalPresupuesto: totalPresupuesto,
    filaPresupuestoCompleta: filaPresupuestoCompleta, paginasEstimadas: paginasEstimadas, palabrasTotales: palabrasTotales, letraCotizaciones: letraCotizaciones, PALABRAS_POR_PAGINA: PALABRAS_POR_PAGINA
  };
});
