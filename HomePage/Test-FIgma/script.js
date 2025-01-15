const loginButton = document.getElementById('open-modal'); // Sử dụng đúng ID
const loginModal = document.getElementById('modal'); // Đúng ID modal
const closeModal = document.querySelector('.x-circle'); // Đóng modal khi nhấn vào icon đóng
const modalLoginButton = document.getElementById('modal-login-button');

// Mở modal khi bấm nút đăng nhập
loginButton.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

// Đóng modal khi bấm nút đóng
closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Điều hướng sang trang thanhtoan.html khi bấm nút đăng nhập trong modal
modalLoginButton.addEventListener('click', () => {
  window.location.href = 'thanhtoan.html';
});

// Đóng modal khi nhấn bên ngoài modal-content
window.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});
