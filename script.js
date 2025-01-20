// Generate angka random antara 1-100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Variabel untuk melacak tebakan dan batas tebakan
let attemptsLeft = 3;

// Elemen HTML
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const message = document.getElementById('message');

// Fungsi untuk mengecek tebakan
submitButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Masukkan angka valid antara 1 dan 100!';
        message.style.color = 'red';
        return;
    }

    // Kurangi jumlah kesempatan
    attemptsLeft--;

    if (userGuess === randomNumber) {
        message.textContent = `Selamat! Tebakanmu benar! Kamu menang 🎉`;
        message.style.color = 'green';
        disableInput();
    } else if (attemptsLeft > 0) {
        if (userGuess < randomNumber) {
            message.textContent = `Tebakanmu terlalu rendah! Kamu punya ${attemptsLeft} kesempatan lagi.`;
        } else {
            message.textContent = `Tebakanmu terlalu tinggi! Kamu punya ${attemptsLeft} kesempatan lagi.`;
        }
        message.style.color = 'orange';
    } else {
        message.textContent = `Kesempatan habis! Kamu kalah. Angkanya adalah ${randomNumber}.`;
        message.style.color = 'red';
        disableInput();
    }
});

// Fungsi untuk mereset game
resetButton.addEventListener('click', resetGame);

// Fungsi untuk menonaktifkan input setelah game selesai
function disableInput() {
    guessInput.disabled = true;
    submitButton.disabled = true;
}

// Fungsi untuk mereset game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 3;
    guessInput.value = '';
    guessInput.disabled = false;
    submitButton.disabled = false;
    message.textContent = '';
}