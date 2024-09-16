export class GradeSchool {
  private _students;

  constructor() {
    this._students = new Map<string, number>();
  }

  roster(): Record<number, string[]> {
    const roster: Record<number, string[]> = {};
    this._students.forEach((g, student) => {
      if (!Array.isArray(roster[g])) {
        roster[g] = [student];
      } else {
        roster[g].push(student);
      }
    });
    Object.values(roster).forEach((v) => {
      v.sort(this.sortByAlphabetically);
    });
    Object.freeze(roster);
    return roster;
  }

  add(name: string, grade: number): void {
    this._students.set(name, grade);
  }

  grade(grade: number): string[] {
    const students: string[] = [];
    this._students.forEach((g, student) => {
      if (g === grade) {
        students.push(student);
      }
    });
    return students.sort(this.sortByAlphabetically);
  }

  private sortByAlphabetically(a: string, b: string): number {
    return a.localeCompare(b);
  }
}
