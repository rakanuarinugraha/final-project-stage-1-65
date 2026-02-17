document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".techstackSwiper", {
    slidesPerView: "auto",
    spaceBetween: 40,
    loop: true,
    speed: 4000, // makin besar makin smooth
    freeMode: true,
    allowTouchMove: false, // biar tidak bisa digeser manual
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  // === 2. LOGIKA DARK/LIGHT MODE ===
  const themeToggle = document.getElementById('theme-toggle');
  
  // Pastikan tombolnya ada dulu baru jalankan logikanya
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;

    // A. Cek pilihan terakhir user di LocalStorage saat page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeIcon) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    // B. Event Listener saat tombol diklik
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // C. Update Icon & Simpan ke LocalStorage
        if (body.classList.contains('light-mode')) {
            if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });
  }
});


// document.addEventListener("DOMContentLoaded", function () {
//     const themeToggle = document.getElementById('theme-toggle');
//     const themeIcon = themeToggle.querySelector('i');
//     const body = document.body;

//     // Cek LocalStorage agar saat refresh mode tidak balik ke awal
//     if (localStorage.getItem('theme') === 'light') {
//         body.classList.add('light-mode');
//         themeIcon.classList.replace('fa-moon', 'fa-sun'); // Ganti ke icon matahari
//     }

//     themeToggle.addEventListener('click', () => {
//         body.classList.toggle('light-mode');
        
//         // Ganti Icon & Simpan Pilihan
//         if (body.classList.contains('light-mode')) {
//             themeIcon.classList.replace('fa-moon', 'fa-sun');
//             localStorage.setItem('theme', 'light');
//         } else {
//             themeIcon.classList.replace('fa-sun', 'fa-moon');
//             localStorage.setItem('theme', 'dark');
//         }
//     });
// });
