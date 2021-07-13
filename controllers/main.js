var header = document.querySelector("#header");
var mobileMenu = document.querySelector("#mobile-menu");
var headerHeight = header.clientHeight; //Lấy height header để so sánh
// Đóng - mở mobile menu
mobileMenu.onclick = () => {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = (event) => {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav"); //Nếu có anh chị em liền kề và anh chị em đó là subnav
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
