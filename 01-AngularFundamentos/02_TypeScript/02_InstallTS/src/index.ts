type heroi = {
  name: string;
  vulgo: string;
};
function printaObj(pessoa: heroi) {
  console.log(pessoa);
}
printaObj({
  name: 'bruce wayne',
  vulgo: 'batman',
});
