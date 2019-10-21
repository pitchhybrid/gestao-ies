import {Aviso,Equipamento,Professor,Reserva,Sala,Usuario} from './interfaces';

export const professores: Professor[] = (()=>{
  const professores: Professor[] = [];
  const letras: string = 'ABCDEFGHIJKLIJKLMNIOPQRSTUVWXYZ';
  let cont: number = 0;
  for(const i of letras){
    professores.push({id:++cont,professor:`PROF:. ${i}`,titulo:'DOUTORADO'});
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
    id: 1,
    status: true,
    equipamento: 'PROJETOR XYZ',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 2,
    status: true,
    equipamento: 'PROJETOR ABC',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 3,
    status: true,
    equipamento: 'PROJETOR DEF',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 4,
    status: true,
    equipamento: 'PROJETOR GHI',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 5,
    status: true,
    equipamento: 'PROJETOR JKL',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 6,
    status: true,
    equipamento: 'PROJETOR ATX',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 7,
    status: true,
    equipamento: 'PROJETOR AYX',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 8,
    status: true,
    equipamento: 'PROJETOR BCL',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 9,
    status: true,
    equipamento: 'PROJETOR IUA',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 10,
    status: true,
    equipamento: 'PROJETOR POA',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 11,
    status: true,
    equipamento: 'PROJETOR QWE',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 12,
    status: true,
    equipamento: 'PROJETOR QAC',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 13,
    status: true,
    equipamento: 'PROJETOR PLJ',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 14,
    status: true,
    equipamento: 'PROJETOR NKI',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 15,
    status: true,
    equipamento: 'PROJETOR IOU',
    modelo: 'TETO',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 16,
    status: true,
    equipamento: 'PROJETOR VXB',
    modelo: 'MESA',
    serie: '92656565SHGYSD',
    fabricante: 'XYZ',
    tipo: 'PROJETOR',
    ultimaManutencao: new Date()
  },

  {
    id: 17,
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


export const reservas: Reserva[] = (()=>{
  const reservas: Reserva[] = [];
  var c = 0
  for(const professor of professores){
    reservas.push({id:++c,dataReserva:new Date(),finalizada:true,professor,reserva: salas[c],tipoReserva:'SALA'});
  }
  var a = 0
  for(const professor of professores){
    var equipamento = equipamentos[++a]
    reservas.push({id:++c,dataReserva:new Date(),finalizada:false,professor,reserva: equipamento,tipoReserva:'EQUIPAMENTO'});
      if( a === equipamentos.length - 1){
        a=0
      }
  }
  return reservas;
})()