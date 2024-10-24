function main() {
        let hasilDadu = [1, 5, 2, 6, 2, 3];
        let ganjil = 0;
        let genap = 0;
      
        for (let i = 0; i<hasilDadu.length; i++) {
        
        if (hasilDadu[i] % 2 == 1 ) {
          ganjil++;
        }
        else if (hasilDadu[i] % 2 == 0) {
          genap++;
        }
    }
      console.log (`Raka  mendapatkan angka ganjil sebanyak ${genap} kali dan angka genap sebanyak ${ganjil} kali`)
    }
    main()

module.exports = main