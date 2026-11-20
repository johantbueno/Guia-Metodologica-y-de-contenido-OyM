/* Comprueba que las citas del texto de enseñanza coinciden con la lista de fuentes (APA 7). Uso: node prueba_tfg_aprender.js */
const A = require('./tfg-aprender.js'), C = require('./tfg-core.js');
let t = [];
Object.values(A.LECCIONES).forEach(l => { t.push(l.que, l.porque, ...l.pasos, ...l.errores); });
Object.values(A.REGLAS).forEach(r => t.push(r.porque, r.como));
t.push(A.GESTORES.porque, ...A.FORMATO.map(f => f.p), ...A.APA_REGLAS);
const refs = Object.values(A.FUENTES).map(x => x.replace(/\*/g, ''));
const r = C.auditarCitas(t.join('\n'), refs);
console.log('Citas sin referencia:', r.sinReferencia);
console.log('Referencias sin cita:', r.sinCita);
// cada lección y regla apunta a fuentes que existen
const malas = [];
Object.values(A.LECCIONES).forEach(l => l.fuentes.forEach(k => { if (!A.FUENTES[k]) malas.push(l.id + ':' + k); }));
Object.entries(A.REGLAS).forEach(([id, x]) => { if (!A.LECCIONES[x.leccion]) malas.push('regla ' + id + ' -> lección ' + x.leccion); x.fuentes.forEach(k => { if (!A.FUENTES[k]) malas.push(id + ':' + k); }); });
console.log('Enlaces rotos:', malas);
// el generador produce lo esperado
console.log(A.generarReferencia('libro', { autores: 'Arias, F. G.', anio: '2012', titulo: 'El proyecto de investigación: Introducción a la metodología científica', edicion: '6.ª ed.', editorial: 'Episteme' }));
console.log(A.generarReferencia('articulo', { autores: 'Cronbach, L. J.', anio: '1951', titulo: 'Coefficient alpha and the internal structure of tests', revista: 'Psychometrika', volumen: '16', numero: '3', paginas: '297–334', url: '10.1007/BF02310555' }));
console.log(A.generarReferencia('web', { autores: 'Corporation for Digital Scholarship', anio: 's. f.', titulo: 'Zotero documentation', url: 'https://www.zotero.org/support/' }));
console.log(A.generarReferencia('libro', { autores: 'Hernández-Sampieri, R.\nMendoza Torres, C. P.', anio: '2018', titulo: 'Metodología de la investigación', editorial: 'McGraw-Hill' }), A.apellidoCita('Hernández-Sampieri, R.\nMendoza Torres, C. P.'));
process.exit(malas.length || r.sinReferencia.length ? 1 : 0);
