import { CNFSolver } from './cnf-solver';

const solver = new CNFSolver();
const condition1 = (A: boolean) => (B: boolean) => (C: boolean) => !A && (B || C);
const condition2 = (A: boolean) => (B: boolean) => (C: boolean) => (D: boolean) => (E: boolean) => (A || B) && (!B || C || !D) && (D || !E);
const condition3 = (A: boolean) => (B: boolean) => A || B;
const condition4 = (A: boolean) => (B: boolean) => A && B;

const printConditionAndSolutions = (solver: CNFSolver) => (variablesUsed: number, condition: any) => {
  console.log('Formula: ', condition.toString());
  console.log('Variables used: ', variablesUsed);
  console.log('Possible solutions: ' + Math.pow(2, variablesUsed));
  console.log('Satisfiable solutions: ', solver.getSolutionsThatfulfillCondition(variablesUsed, condition));
  console.log('---------');
}

const printer = printConditionAndSolutions(solver);
printer(3, condition1);
printer(5, condition2);
printer(2, condition3);
printer(2, condition4);
