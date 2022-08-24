export interface IStateCase {
  name: string,
  range: string,
  casesReported: number;
}
export interface IUSStateCovidData {
  totalCases: number;
  totalDeaths: number;
  casesByState: Array<IStateCase>
}