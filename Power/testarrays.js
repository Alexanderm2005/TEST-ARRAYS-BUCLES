const { assert } = require('chai'); 

function verifyExamination(nota) {
    return nota >= 70;
}

function evaluateExams(notas) {
    let resultados = [];

    for (let i = 0; i < notas.length; i++) {
        let nota = notas[i];
        let passesQuimester = verifyExamination(nota);

        resultados.push({
            exam: i + 1,
            nota: nota,
            approved: passesQuimester ? 'Approved' : 'Failed'
        });
    }

    return resultados;
}

// Tests
describe('Examination Verification', function () {
    it('should verify examinations correctly', function () {
        assert.equal(verifyExamination(75), true);
        assert.equal(verifyExamination(60), false);
    });
});

describe('Exams Evaluation', function () {
    it('should evaluate exams correctly', function () {
        let notas = [75, 96, 80, 85, 90];
        let evaluationResults = evaluateExams(notas);

        assert.equal(evaluationResults[0].approved, 'Approved');
        assert.equal(evaluationResults[1].approved, 'Approved');
        assert.equal(evaluationResults[2].approved, 'Approved');
        assert.equal(evaluationResults[3].approved, 'Approved');
        assert.equal(evaluationResults[4].approved, 'Approved');
    });
});