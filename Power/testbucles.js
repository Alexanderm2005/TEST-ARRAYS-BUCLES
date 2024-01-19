function evaluateExams(notas) {
  let resultados = [];

  for (let i = 0; i < notas.length; i++) {
      let nota = notas[i];
      let passesQuimester = verifyExamination(nota);

      let result = {
          exam: i + 1,
          nota: nota,
          approved: passesQuimester ? 'Approved' : 'Failed'
      };

      resultados.push(result);
  }

  return resultados;
}