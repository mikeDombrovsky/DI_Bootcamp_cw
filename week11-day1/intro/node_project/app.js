// const exp = require('./script.js');
// const {printy, printy2} = require('./script.js');

const { printy, printy2 } = await import('./script.js');;

// exp.printy('Bobby');
// exp.printy2('Loly');
printy('Bobby');
printy2('Loly');

