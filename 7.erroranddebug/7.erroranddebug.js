/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// Type Error adalah error yang ada saat memberikan nilai pada suatu variabel yang tidak sesuai dengan tipe data tersebut
/// Reference Error adalah error yang terjadi saat memanggil variabel yang belum dideklarasikan
/// Range Error adalah error yang terjadi saat menggunakan nilai diluar rentang yang legal
/// Syntax Error adalah error yang terjadi saat kode terdapat kesalahan sintaks


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// Terjadi undenefined, termasuk pada Reference Error atau error pada variabel dimana terjadi dikarenakan memanggil sebuah variabel yang belum dideklarasikan
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;