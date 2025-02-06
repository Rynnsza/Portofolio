
 // Js Dark Mode
         
document.addEventListener('DOMContentLoaded', () => {
  const toggleDarkMode = document.getElementById('toggle');

  // Check saved mode in localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  if (isDarkMode) {
    document.documentElement.classList.add('dark');
    toggleDarkMode.checked = true;
  } else {
    document.documentElement.classList.remove('dark');
    toggleDarkMode.checked = false;
  }

  // Add event listener for toggle
  toggleDarkMode.addEventListener('change', () => {
    const isChecked = toggleDarkMode.checked;
    if (isChecked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  });
});


            // Js Navbar
            
// Ambil elemen-elemen penting
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('ion-icon'); // Ikon toggle

// Fungsi untuk mengubah status menu dan ikon
function onToggleMenu(icon) {
  // Ubah ikon antara 'menu' dan 'close'
  icon.name = icon.name === 'menu' ? 'close' : 'menu';

  // Tampilkan atau sembunyikan menu navigasi
  navLinks.classList.toggle('top-[10%]');
  navLinks.classList.toggle('top-[-100%]');
}

// Tambahkan event listener ke semua tautan di dalam navbar
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    // Pastikan menu tertutup
    navLinks.classList.add('top-[-100%]');
    navLinks.classList.remove('top-[10%]');

    // Kembalikan ikon menjadi 'menu'
    if (menuIcon) {
      menuIcon.name = 'menu';
    }
  });
});

            // Toggle FAQ content visibility
            document.querySelectorAll('button').forEach(button => {
              button.addEventListener('click', () => {
                const content = document.getElementById(button.id + '-content');
                const icon = document.getElementById(button.id + '-icon');

                if (content.classList.contains('max-h-0')) {
                  content.classList.remove('max-h-0');
                  content.classList.add('max-h-96');
                } else {
                  content.classList.add('max-h-0');
                  content.classList.remove('max-h-96');
                }

                icon.classList.toggle('transform');
                icon.classList.toggle('rotate-180');
              });
            });
            //  Line Clamp
            document.addEventListener('DOMContentLoaded', () => {
              function lineClamp(id) {
                const line = document.getElementById(id);
                line.classList.toggle('line-clamp-3');
                line.classList.toggle('line-full');
              }
              // Project Satu
              const lineSatu = document.getElementById('lineSatu');
              lineSatu.addEventListener('click', () => lineClamp('lineSatu'));
            
              // Project Dua
              const lineDua = document.getElementById('lineDua');
              lineDua.addEventListener('click', () => lineClamp('lineDua'));

              // Project Tiga
              const lineTiga = document.getElementById('lineTiga');
              lineTiga.addEventListener('click', () => lineClamp('lineTiga'));
            });
            // Aos Animation
            window.addEventListener("load", function () {
              setTimeout(() => {
                  document.getElementById("loading-screen").style.display = "none";
                  AOS.init({
                      once: true 
                  });
              }, 2000); 
          });

          // Button Top
          const backToTopButton = document.getElementById("backToTop");

          window.addEventListener("scroll", function () {
            if (window.scrollY > 200) {
              backToTopButton.classList.remove("opacity-0", "pointer-events-none");
              backToTopButton.classList.add("opacity-100");
            } else {
              backToTopButton.classList.add("opacity-0", "pointer-events-none");
              backToTopButton.classList.remove("opacity-100");
            }
          });

          
      
  
