/// Soal - 01
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// Hasilnya adalah Mariah, dikarenakan name pada function bukanlah sebuah variabel 
/// tetapi sebagai parameter, dimana hanya sebagai petunjuk saja bahwa parameter itu diisi nama
const name = "John Watson";

function printFirstName(name) {
    return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan terjadi apabila kita mencoba menjalankan baris kode dibawah?
/// - apa alasan kenapa hal tersebut bisa terjadi?
///   - dari segi salaryWithVar
///   - dari segi salaryWithConst

/// WRITE YOUR ANALYSIS HERE
/// 1. dari salaryWithVar akan terjadi undefined dikarenakan console.log menampilkan 
/// sebuah variabel terlebih dahulu sebelum mendeklarasikannnya, sehingga tidak ditemukan
/// 2. dari salaryWithConst akan terjadi error sebab tidak dapat menginisialisasi variabel tersebut
/// 
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;