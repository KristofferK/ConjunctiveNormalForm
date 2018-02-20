export class CNFSolver {
  getSolutionsThatfulfillCondition(bits: number, conditionCallback: any) {
    return this.getSolutionCandidates(bits)
      .filter(solution => this.performConditionCallback(conditionCallback, solution));
  }

  private getSolutionCandidates(bits: number) {
    const possibilities: string[] = [];
    for (let i = 0; i < Math.pow(2, bits); i++) {
      possibilities.push(this.dec2bin(i, bits));
    }
    return possibilities;
  }

  private dec2bin(i: number, length: number) {
    let bin = (i >>> 0).toString(2);
    while (bin.length < length) {
      bin = "0" + bin;
    }
    return bin;
  }

  private performConditionCallback(callback: any, solution: string) {
    for (let i = 0; i < solution.length; i++) {
      callback = callback(solution.substr(i, 1) === '1');
    }
    return callback;
  }
}