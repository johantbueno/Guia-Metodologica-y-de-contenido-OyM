/* Genera la base de conocimiento del tutor (Markdown) a partir de tfg-aprender.js, para que la plataforma tesis
   responda con las mismas lecciones que ve el estudiante. Uso: node exportar_conocimiento_tutor.js ruta/salida.md */
const fs = require('fs');
const A = require('./tfg-aprender.js');
const sinAst = (t) => String(t).replace(/\*/g, '');
const out = [];
out.push('# Base de conocimiento del tutor del Constructor del TFG (Universidad Dominicana O&M, Ingeniería)\n');
Object.values(A.LECCIONES).forEach((l) => {
  out.push('## Lección: ' + l.titulo);
  out.push('Qué es: ' + l.que);
  out.push('Por qué se pide: ' + l.porque);
  out.push('Cómo se hace:\n' + l.pasos.map((p, i) => (i + 1) + '. ' + p).join('\n'));
  out.push('Errores frecuentes:\n' + l.errores.map((e) => '- ' + e).join('\n'));
  out.push('Ejemplo (de otro caso, solo para ilustrar): ' + sinAst(l.ejemplo));
  out.push('Fuentes de esta lección (APA 7):\n' + l.fuentes.map((k) => '- ' + sinAst(A.FUENTES[k])).join('\n') + '\n');
});
Object.entries(A.REGLAS).forEach(([id, r]) => {
  out.push('## Regla del jurado: ' + id.replace(/_/g, ' '));
  out.push('Por qué lo pide el jurado: ' + r.porque);
  out.push('Cómo corregirlo: ' + r.como + '\n');
});
out.push('## Formato que aplica el Word del constructor');
A.FORMATO.forEach((f) => out.push('- ' + f.t + '. ' + f.p));
out.push('');
out.push('## APA 7: citas en el texto');
A.APA_CITAS.forEach((c) => out.push('- ' + c.caso + ': entre paréntesis ' + sinAst(c.par) + '; narrativa ' + sinAst(c.nar)));
out.push('');
out.push('## APA 7: lista de referencias');
A.APA_REFS.forEach((r) => out.push('- ' + r.tipo + ': ' + sinAst(r.patron) + ' Ejemplo: ' + sinAst(r.ej)));
A.APA_REGLAS.forEach((r) => out.push('- ' + r));
out.push('');
out.push('## Zotero y Mendeley: para qué sirven');
out.push(A.GESTORES.porque + '\n');
out.push('## Zotero: pasos\n' + A.GESTORES.zotero.pasos.map((p, i) => (i + 1) + '. ' + p).join('\n') + '\n');
out.push('## Mendeley: pasos\n' + A.GESTORES.mendeley.pasos.map((p, i) => (i + 1) + '. ' + p).join('\n') + '\n');
out.push('## Buenas prácticas con el gestor bibliográfico\n' + A.GESTORES.consejos.map((c) => '- ' + c).join('\n') + '\n');
out.push('## Fuentes de la base de conocimiento (APA 7)');
Object.values(A.FUENTES).forEach((f) => out.push('- ' + sinAst(f)));
const destino = process.argv[2] || 'conocimiento_tutor.md';
fs.writeFileSync(destino, out.join('\n') + '\n', 'utf8');
console.log('escrito', destino, out.join('\n').length, 'caracteres');
