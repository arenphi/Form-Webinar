function hideImageOnMobile() {
    const image = document.querySelector('.pamflet');
    if (image) {
        if (window.innerWidth <= 600) {
            image.style.display = 'none';
        } else {
            image.style.display = 'block';
        }
    }
}

window.onload = hideImageOnMobile;
window.onresize = hideImageOnMobile;

document.getElementById('status').addEventListener('change', function() {
    var status = this.value;
    var mahasiswaInput = document.getElementById('mahasiswa-input');
    var umumInput = document.getElementById('umum-input');
    var upbInput = document.getElementById('UPB-input');
    var statusSelect = document.getElementById('status');

    if (status === 'Mahasiswa') {
        mahasiswaInput.style.display = 'block';
        umumInput.style.display = 'none';
        upbInput.style.display = 'none';
    } else if (status === 'Umum') {
        mahasiswaInput.style.display = 'none';
        umumInput.style.display = 'block';
        upbInput.style.display = 'none';
    } else if (status === 'M/U') {
        mahasiswaInput.style.display = 'none';
        umumInput.style.display = 'none';
        upbInput.style.display = 'none';
    } else {
        mahasiswaInput.style.display = 'none';
        umumInput.style.display = 'none';
        upbInput.style.display = 'none';
    }
    if (status !== 'M/U') {
        statusSelect.querySelector('option[value="M/U"]').disabled = true;
    } else {
        statusSelect.querySelector('option[value="M/U"]').disabled = false;
    }
});

document.getElementById('universitas').addEventListener('change', function() {
    var universitas = this.value;
    var upbInput = document.getElementById('UPB-input');
    var lainnyaInput = document.getElementById('lainnya-input');
    var universitasSelect = document.getElementById('universitas');

    if (universitas === 'Universitas Pelita Bangsa') {
        upbInput.style.display = 'block';
    } else {
        upbInput.style.display = 'none';
    }

    if (universitas === 'lainnya') {
        lainnyaInput.style.display = 'block';
    } else {
        lainnyaInput.style.display = 'none';
    }
    if (universitas !== 'PU') {
        universitasSelect.querySelector('option[value="PU"]').disabled = true;
    } else {
        universitasSelect.querySelector('option[value="PU"]').disabled = false;
    }
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const submitButton = document.getElementById('submit');
    submitButton.disabled = true;
    submitButton.value = "Sedang mengirim...";

    var toast = document.getElementById('toast');
    toast.className = "toast show";

    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 10000);

    var formData = new FormData(this);

    fetch(this.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                window.location.href = 'https://arenphi.github.io/Link-WebinarA6/';
            } else {
                alert('Gagal mengirim data. Silakan coba lagi.');
            }
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
            alert('Terjadi kesalahan. Silakan coba lagi.');
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.value = "Daftar Sekarang";
        });
});
