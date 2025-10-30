const soal = [
  { tanya: "1. Engklek biasanya dimainkan di mana?", pilihan: ["Di rumah", "Di tanah atau halaman", "Di sawah", "Di sungai"], jawaban: 1 },
  { tanya: "2. Alat utama bermain Engklek adalah?", pilihan: ["Kapur dan gaco", "Bola", "Karet gelang", "Tali"], jawaban: 0 },
  { tanya: "3. Pemain Engklek melompat dengan?", pilihan: ["Dua kaki", "Satu kaki", "Kedua tangan", "Berlari"], jawaban: 1 },
  { tanya: "4. Engklek termasuk permainan?", pilihan: ["Tradisional", "Modern", "Digital", "Komputer"], jawaban: 0 },
  { tanya: "5. Engklek disebut juga?", pilihan: ["Taplak Gunung", "Petak Umpet", "Gobak Sodor", "Kelereng"], jawaban: 0 },
  { tanya: "6. Permainan Engklek mengajarkan?", pilihan: ["Menyontek", "Sportivitas", "Tidur", "Berlomba"], jawaban: 1 },
  { tanya: "7. Garis petak Engklek digambar dengan?", pilihan: ["Pensil", "Kapur", "Cat air", "Spidol"], jawaban: 1 },
  { tanya: "8. Gaco adalah?", pilihan: ["Alat lemparan kecil", "Batu besar", "Bola", "Tongkat"], jawaban: 0 },
  { tanya: "9. Saat bermain, tidak boleh?", pilihan: ["Menyentuh garis", "Tersenyum", "Bermain jujur", "Bersorak"], jawaban: 0 },
  { tanya: "10. Nilai utama dari Engklek adalah?", pilihan: ["Kerjasama dan kejujuran", "Cepat berlari", "Menang terus", "Meniru teman"], jawaban: 0 }
];

let nama = "";
let kelas = "";
let indeksSoal = 0;
let skor = 0;

function mulaiKuis() {
  nama = document.getElementById("nama").value;
  kelas = document.getElementById("kelas").value;

  if (nama === "" || kelas === "") {
    alert("Isi nama dan kelas terlebih dahulu!");
    return;
  }

  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("quiz-section").classList.remove("hidden");

  tampilkanSoal();
}

function tampilkanSoal() {
  let q = soal[indeksSoal];
  document.getElementById("pertanyaan").innerText = q.tanya;
  const pilihanDiv = document.getElementById("pilihan");
  pilihanDiv.innerHTML = "";

  q.pilihan.forEach((pilihan, i) => {
    const btn = document.createElement("button");
    btn.textContent = pilihan;
    btn.onclick = () => cekJawaban(i);
    pilihanDiv.appendChild(btn);
  });
}

function cekJawaban(i) {
  if (i === soal[indeksSoal].jawaban) {
    skor += 10;
  }
  document.querySelectorAll("#pilihan button").forEach(b => (b.disabled = true));
}

function selanjutnya() {
  indeksSoal++;
  if (indeksSoal < soal.length) {
    tampilkanSoal();
  } else {
    tampilkanHasil();
  }
}

function tampilkanHasil() {
  document.getElementById("quiz-section").classList.add("hidden");
  document.getElementById("hasil-section").classList.remove("hidden");

  document.getElementById("hasil").innerHTML = `
    Nama: <b>${nama}</b><br>
    Kelas: <b>${kelas}</b><br>
    Nilai Kamu: <b>${skor}</b> dari 100<br><br>
    ${
      skor >= 70
        ? "🎉 Hebat! Kamu Pencinta Permainan Tradisional! 🇮🇩"
        : "Terus belajar ya! Yuk coba lagi!"
    }
  `;
}

function ulangKuis() {
  location.reload();
}
