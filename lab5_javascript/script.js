// ===== Latihan 1 — Menampilkan output =====
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// ===== Latihan 2 — Alert dan prompt =====
function latihan2() {
  const namaPengguna = prompt("Masukkan nama Anda:", "");
  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
  }
}

// ===== Latihan 3 — Function dan operasi aritmetika =====
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}

// ===== Latihan 4 — Seleksi kondisi if–else =====
function latihan4() {
  const inputNilai = prompt("Masukkan nilai (0–100):");
  const nilaiMahasiswa = Number(inputNilai);
  if (inputNilai === null || inputNilai.trim() === "" ||
      Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
  } else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
  } else {
    alert("Belum lulus");
  }
}

// ===== Latihan 5 — Seleksi kondisi switch =====
function latihan5() {
  const inputPilihan = prompt("Masukkan angka 1–5:");
  switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
  }
}

// ===== Latihan 6 — Form bilangan genap atau ganjil =====
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

// ===== Latihan 7 — Mengubah warna halaman =====
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

// ===== Latihan 8 — DOM dan checkbox menu makanan =====
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// ===== Mini Project — Kalkulator Nilai Mahasiswa =====
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

// Validasi satu komponen nilai: tidak boleh kosong dan harus 0–100
function validasiKomponen(namaKomponen, teks) {
  if (teks.trim() === "") return namaKomponen + " tidak boleh kosong.";
  const angka = Number(teks);
  if (Number.isNaN(angka) || angka < 0 || angka > 100) {
    return namaKomponen + " harus berada pada rentang 0–100.";
  }
  return "";
}

// Menampilkan hasil ke halaman (dipisahkan dari proses perhitungan)
function tampilkanHasilNilai(akhir, predikat, status) {
  document.getElementById("hasilNilai").innerHTML =
    "<p>Nilai akhir: <b>" + akhir.toFixed(2) + "</b></p>" +
    "<p>Predikat: <b>" + predikat + "</b></p>" +
    "<p>Status: <b>" + status + "</b></p>";
}

function tampilkanErrorNilai(daftarError) {
  document.getElementById("hasilNilai").innerHTML =
    '<p class="error">' + daftarError.join("<br>") + "</p>";
}

function prosesNilai() {
  const teksTugas = document.getElementById("nilaiTugas").value;
  const teksUts = document.getElementById("nilaiUts").value;
  const teksUas = document.getElementById("nilaiUas").value;

  const daftarError = [
    validasiKomponen("Nilai tugas", teksTugas),
    validasiKomponen("Nilai UTS", teksUts),
    validasiKomponen("Nilai UAS", teksUas)
  ].filter((pesan) => pesan !== "");

  if (daftarError.length > 0) {
    tampilkanErrorNilai(daftarError);
    return;
  }

  const akhir = hitungNilaiAkhir(Number(teksTugas), Number(teksUts), Number(teksUas));
  const predikat = tentukanPredikat(akhir);
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";

  console.log("Nilai akhir:", akhir.toFixed(2));
  console.log("Predikat:", predikat);
  console.log("Status:", status);
  tampilkanHasilNilai(akhir, predikat, status);
}

// ===== Eksperimen 1 — Latihan 3 dengan input prompt =====
function eksperimen1() {
  const a = Number(prompt("Masukkan bilangan pertama:"));
  const b = Number(prompt("Masukkan bilangan kedua:"));
  if (Number.isNaN(a) || Number.isNaN(b)) {
    alert("Input harus berupa angka.");
    return;
  }
  operasiDasar(a, b);
}

// ===== Eksperimen 2 — Tabel perkalian 7 =====
function tampilkanTabelPerkalian(angka) {
  let html = "<table>";
  for (let i = 1; i <= 10; i++) {
    console.log(angka + " x " + i + " = " + angka * i);
    html += "<tr><td>" + angka + " x " + i + "</td><td>" + angka * i + "</td></tr>";
  }
  html += "</table>";
  document.getElementById("tabelPerkalian").innerHTML = html;
}

// ===== Eksperimen 3 — cekGenap(angka) =====
function cekGenap(angka) {
  return angka % 2 === 0;
}

function ujiCekGenap() {
  console.log("cekGenap(4):", cekGenap(4));
  console.log("cekGenap(7):", cekGenap(7));
  console.log("cekGenap(0):", cekGenap(0));
  console.log("cekGenap(-10):", cekGenap(-10));
}

// ===== Eksperimen 5 — Menu dengan tambahan pilihan =====
const daftarMenu2 = document.querySelectorAll(".menu2");
daftarMenu2.forEach((item) => {
  item.addEventListener("change", hitungTotal2);
});

function hitungTotal2() {
  let total = 0;
  daftarMenu2.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total2").textContent = total.toLocaleString("id-ID");
}

// ===== Eksperimen 6 — Sembunyikan/tampilkan elemen =====
function toggleElemen() {
  const teks = document.getElementById("teksToggle");
  const tombol = document.getElementById("tombolToggle");
  if (teks.style.display === "none") {
    teks.style.display = "block";
    tombol.textContent = "Sembunyikan Teks";
  } else {
    teks.style.display = "none";
    tombol.textContent = "Tampilkan Teks";
  }
}

// ===== Pertanyaan 7 — Validasi nama dan nilai =====
function validasiForm() {
  const nama = document.getElementById("namaMhs").value;
  const teksNilai = document.getElementById("nilaiMhs").value;
  const nilai = Number(teksNilai);
  const hasil = document.getElementById("hasilValidasi");

  if (nama.trim() === "") {
    hasil.textContent = "Nama tidak boleh kosong.";
    hasil.className = "hasil error";
  } else if (teksNilai.trim() === "" || Number.isNaN(nilai) || nilai < 0 || nilai > 100) {
    hasil.textContent = "Nilai harus berada pada rentang 0–100.";
    hasil.className = "hasil error";
  } else {
    hasil.textContent = "Data valid: " + nama + " dengan nilai " + nilai + ".";
    hasil.className = "hasil";
  }
}
