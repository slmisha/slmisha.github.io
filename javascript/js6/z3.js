let x = []
for(i=0;i<5;i++) {
x[i]= Number(prompt(`Яка вас оцінка`));
suma = suma + x [i];
}

let uroku =`математика`;
let imena = 'Петро';
let suma = 0;
console.log(`Вітаю ${imena} У вас 5 оціки з предмету ${uroku}.  Остання оцінка рівна ${x.lenght} . Остання оцінка - ${x[x.lenght-1]} . Середній бал з придмету - ${suma/x.length} `);