
                        document.getElementById('backButton').addEventListener('click', function () {
                            if (window.history.length > 1) {
                                history.back(); // Kembali jika ada riwayat
                            } else {
                                window.location.href = "../html/index.html"; // Arahkan ke index jika tidak ada riwayat
                            }
                        });
                    