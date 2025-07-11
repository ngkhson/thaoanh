$(document).ready(function () {
  const $wrapper = $('#flipbook-wrapper');
  const $flipbook = $('#flipbook');
  const aspectRatio = 750 / 1500; // Chiều cao / chiều rộng (tỷ lệ gốc)

  function resizeFlipbook() {
    const maxWidth = 1500;
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();

    // Giới hạn chiều rộng theo maxWidth
    let width = Math.min(windowWidth, maxWidth);
    let height = width * aspectRatio;

    // Nếu chiều cao vượt quá màn hình -> điều chỉnh lại
    if (height > windowHeight) {
      height = windowHeight;
      width = height / aspectRatio;
    }

    // Gán chiều rộng và cao cho wrapper
    $wrapper.width(width);
    $wrapper.height(height);

    // Resize flipbook
    $flipbook.turn('size', width, height);
  }

  // Khởi tạo flipbook
  $flipbook.turn({
    width: 1500,
    height: 750,
    autoCenter: true,
    elevation: 50,
    gradients: true,
    acceleration: true
  });

  // Resize lần đầu
  resizeFlipbook();

  // Resize khi xoay màn hình hoặc thay đổi kích thước
  $(window).on('resize orientationchange', function () {
    resizeFlipbook();
  });

  // Sự kiện click hoặc chạm vào vùng lật
  $('#prev').on('click touchstart', function (e) {
    e.preventDefault();
    $flipbook.turn('previous');
  });

  $('#next').on('click touchstart', function (e) {
    e.preventDefault();
    $flipbook.turn('next');
  });
});
