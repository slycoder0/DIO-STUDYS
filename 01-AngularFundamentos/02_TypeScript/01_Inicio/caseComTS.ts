type Hero = {
  nome: string;
  vulgo: any;
  telefone: number;
};

function ligarPara(heroi: Hero): string {
  return 'Ligando para: ' + heroi.telefone;
}

ligarPara({
  nome: 'felipe',
  vulgo: 'Capitão America',
  telefone: 11317133888,
});
