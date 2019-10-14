
export interface Professor{
    id:number
    professor:string
}
export const professores:Professor[] = [
    { id:0, professor:'PROF:. A'},
    { id:1, professor:'PROF:. B'},
    { id:2, professor:'PROF:. C'},
    { id:3, professor:'PROF:. D'},
    { id:4, professor:'PROF:. E'},
    { id:5, professor:'PROF:. F'},
    { id:6, professor:'PROF:. G'},
    { id:7, professor:'PROF:. H'},
    { id:8, professor:'PROF:. I'},
    { id:9, professor:'PROF:. J'},
]

export interface Aviso{
    id: number
    aviso: string
}

export const avisos: Aviso[] = [
    { id:0, aviso:'PROF:. Z NAO TERÀ AULA HOJE'},
    { id:1, aviso:'PROFESSOR X SALA L 307'},
    { id:2, aviso:'PROFESSOR Y SALA A 207'},
    { id:3, aviso:'SALA 300 INTEDITADA'},
    { id:4, aviso:'PROFESSOR A SALA F 307'},
    { id:5, aviso:'PROFESSOR N SALA G 407'},
    { id:6, aviso:'PROF:. C NAO TERÀ AULA HOJE'},
    { id:7, aviso:'PROFESSOR Q SALA A 307'},
    { id:8, aviso:'PROFESSOR H SALA B 307'},
    { id:9, aviso:'PROF:. K NAO TERÀ AULA HOJE'}
]
export interface Usuario{
    id?:number
    matricula?:string
    senha?:string
}
export const usuarios: Usuario[] = [
    { id:1, matricula:'123', senha:'123'}
]

export interface Equipamento{
    codigo?:number
    status?:boolean
    equipamento?:string 
    tipo?:string
    modelo?:string 
    fabricante?:string 
    serie?:string
    ultimaManutencao?:Date
}
export const equipamentos:Equipamento[] = [
    {codigo:1,status:true, equipamento:'PROJETOR XYZ',modelo:'TETO',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:2,status:true, equipamento:'PROJETOR ABC',modelo:'MESA',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:3,status:true, equipamento:'PROJETOR DEF',modelo:'TETO',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:4,status:true, equipamento:'PROJETOR GHI',modelo:'MESA',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:5,status:true, equipamento:'PROJETOR JKL',modelo:'TETO',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:6,status:true, equipamento:'PROJETOR ATX',modelo:'MESA',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:7,status:true, equipamento:'PROJETOR AYX',modelo:'TETO',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:8,status:true, equipamento:'PROJETOR BCL',modelo:'MESA',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:9,status:true, equipamento:'PROJETOR IUA',modelo:'TETO',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:10,status:true, equipamento:'PROJETOR POA',modelo:'MESA',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:11,status:true, equipamento:'PROJETOR QWE',modelo:'TETO',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:12,status:true, equipamento:'PROJETOR QAC',modelo:'MESA',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:13,status:true, equipamento:'PROJETOR PLJ',modelo:'TETO',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:14,status:true, equipamento:'PROJETOR NKI',modelo:'MESA',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:15,status:true, equipamento:'PROJETOR IOU',modelo:'TETO',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:16,status:true, equipamento:'PROJETOR VXB',modelo:'MESA',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
    {codigo:17,status:true, equipamento:'PROJETOR ANC',modelo:'TETO',serie:'92656565SHGYSD',fabricante:'XYZ',tipo:'PROJETOR',ultimaManutencao:new Date() },
]