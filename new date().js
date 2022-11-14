// Split Hari, tanggal, bulan, tahun
const hari = new Date().getDay();
const tanggal= new Date().getDate();
const bulan = new Date().getMonth()+1;
const tahun = new Date().getFullYear();

      switch(hari) {
        case 1:
          namaHari = "Senin";
          break;
        case 2:
          namaHari = "selasa";
          break;
        case 3:
          namaHari = "Rabu";
          break;
        case 4:
          namaHari = "Kamis";
          break;
        case 5:
          namaHari = "Jum'at";
          break;
        case 6:
          namaHari = "Sabtu";
          break;
        default:
          namaHari = "Minggu";
      }

      switch(bulan) {
        case 1:
          namaBulan = "Januari";
          break;
        case 2:
          namaBulan = "Februari";
          break;
        case 3:
          namaBulan = "Maret";
          break;
        case 4:
          namaBulan = "April";
          break;
        case 5:
          namaBulan = "Mei";
          break;
        case 6:
          namaBulan = "Juni";
          break;
        case 7:
          namaBulan = "Juli";
          break;
        case 8:
          namaBulan = "Agustus";
          break;
        case 9:
          namaBulan = "September";
          break;
        case 10:
          namaBulan = "Oktober";
          break;
        case 11:
          namaBulan = "November";
          break;
        case 12:
          namaBulan = "Sabtu";
          break;
        default:
          namaBulan = "Desember";
      }
      
      document.write(namaHari + ', ' + tanggal + ' ' + namaBulan + ' ' + tahun);