

export interface IElements {
    Table: Table 
}

export interface Table {
  Columns: Columns;
  Row: {Cell: string[]}[];
}

export interface Columns {
    Column:string[] 
}



