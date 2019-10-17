import { Professor } from './professor'
import { Aviso } from './aviso'
import { Usuario } from './usuario'
import { Equipamento } from './equipamento'
import { Sala } from './sala'

export const professores: Professor[] = (()=>{
  const professores: Professor[] = [];
  const letras: string = 'ABCDEFGHIJKLIJKLMNIOPQRSTUVWXYZ';
  let cont: number = 0;
  for(let i of letras){
    professores.push({id:++cont,professor:`PROF:. ${i}`});
  }
  return professores;
})();

export const avisos: Aviso[] = [
  { id: 0, aviso: 'PROF:. Z NAO TERÀ AULA HOJE' },
  { id: 1, aviso: 'PROFESSOR X SALA L 307' },
  { id: 2, aviso: 'PROFESSOR Y SALA A 207' },
  { id: 3, aviso: 'SALA 300 INTEDITADA' },
  { id: 4, aviso: 'PROFESSOR A SALA F 307' },
  { id: 5, aviso: 'PROFESSOR N SALA G 407' },
  { id: 6, aviso: 'PROF:. C NAO TERÀ AULA HOJE' },
  { id: 7, aviso: 'PROFESSOR Q SALA A 307' },
  { id: 8, aviso: 'PROFESSOR H SALA B 307' },
  { id: 9, aviso: 'PROF:. K NAO TERÀ AULA HOJE' }
];

export const usuarios: Usuario[] = [{ id: 1, matricula: '123', senha: '123' }];


export const equipamentos: Equipamento[] = [
  {
    codigo: 1,
    status: true,
    equipamento: 'PROJETOR XYZ',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 2,
    status: true,
    equipamento: 'PROJETOR ABC',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 3,
    status: true,
    equipamento: 'PROJETOR DEF',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 4,
    status: true,
    equipamento: 'PROJETOR GHI',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 5,
    status: true,
    equipamento: 'PROJETOR JKL',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 6,
    status: true,
    equipamento: 'PROJETOR ATX',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 7,
    status: true,
    equipamento: 'PROJETOR AYX',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 8,
    status: true,
    equipamento: 'PROJETOR BCL',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 9,
    status: true,
    equipamento: 'PROJETOR IUA',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 10,
    status: true,
    equipamento: 'PROJETOR POA',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 11,
    status: true,
    equipamento: 'PROJETOR QWE',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 12,
    status: true,
    equipamento: 'PROJETOR QAC',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 13,
    status: true,
    equipamento: 'PROJETOR PLJ',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 14,
    status: true,
    equipamento: 'PROJETOR NKI',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 15,
    status: true,
    equipamento: 'PROJETOR IOU',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 16,
    status: true,
    equipamento: 'PROJETOR VXB',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    codigo: 17,
    status: true,
    equipamento: 'PROJETOR ANC',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  }
];



export const salas: Sala[] = (() => {
  const array: Sala[] = [];
  const blocos: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  let a: number = 0
  for (let i = 100; i <= 420; ++i) {
    if(a <= 40){
      array.push({id: i, bloco: blocos[Math.floor(Math.random() * blocos.length)], sala: `${i}` });
    }
    if(a === 100){
      a = 0;
    }
    a++;
  }
  return array;
})();
