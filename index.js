const qrCodeValue           = document.getElementById( 'text-code-value' );
const refreshBarValue       = document.getElementById( 'refresh-value' );
const qrCodeImage           = document.getElementById( 'qr-code' );
const copyToClipboardButton = document.getElementById( 'copy-clipboard' );

const TIMER_VALUE = 30000 // QrCode refresh timer value in ms

const testValues = [
  { value: "BRV90NVL3VVZ3PF211DJ1L", qrCodeSourceImage: './test_qrcodes/BRV90NVL3VVZ3PF211DJ1L.svg'},
	{ value: "SKX24HKN3PWK8LJ961XS4F", qrCodeSourceImage: './test_qrcodes/SKX24HKN3PWK8LJ961XS4F.svg'},
	{ value: "REX51KUE0PEV8QX751WP5M", qrCodeSourceImage: './test_qrcodes/REX51KUE0PEV8QX751WP5M.svg'},
	{ value: "BYJ14DWZ0QRP7RI276WE0X", qrCodeSourceImage: './test_qrcodes/BYJ14DWZ0QRP7RI276WE0X.svg'},
	{ value: "NZW98BCN8CPD8DC832QW4Q", qrCodeSourceImage: './test_qrcodes/NZW98BCN8CPD8DC832QW4Q.svg'},
	{ value: "WEG12DIB8RBE8QS956FH6M", qrCodeSourceImage: './test_qrcodes/WEG12DIB8RBE8QS956FH6M.svg'},
	{ value: "AEP10XHL1EVA6VN278IG1J", qrCodeSourceImage: './test_qrcodes/AEP10XHL1EVA6VN278IG1J.svg'},
	{ value: "FYS12RQJ6DAE7FC091JM2A", qrCodeSourceImage: './test_qrcodes/FYS12RQJ6DAE7FC091JM2A.svg'},
	{ value: "VOH01VQS6YKQ6EB131DK2T", qrCodeSourceImage: './test_qrcodes/VOH01VQS6YKQ6EB131DK2T.svg'},
	{ value: "GXV80BEG9PFJ2HE562ZQ5Q", qrCodeSourceImage: './test_qrcodes/GXV80BEG9PFJ2HE562ZQ5Q.svg'},
	{ value: "SPL90NWD6JQP1ID586BJ0B", qrCodeSourceImage: './test_qrcodes/SPL90NWD6JQP1ID586BJ0B.svg'},
	{ value: "TUK33CQE7HKU0LG645LY9Y", qrCodeSourceImage: './test_qrcodes/TUK33CQE7HKU0LG645LY9Y.svg'},
	{ value: "CZX28TSL2FRX8SJ426AG7Y", qrCodeSourceImage: './test_qrcodes/CZX28TSL2FRX8SJ426AG7Y.svg'},
	{ value: "MGD41ULM4HXD4GH538KZ9C", qrCodeSourceImage: './test_qrcodes/MGD41ULM4HXD4GH538KZ9C.svg'}
]; // Replace with your own auth data

window.onload = () => {
  
  initializeQrCodeHandle();

  copyToClipboardButton.onclick = () => copyQrcodeValueToClipboard();
  
};

const initializeQrCodeHandle = () => {
  let randomQrCode = testValues[ Math.floor(Math.random() * testValues.length) ];

  qrCodeValue.value = randomQrCode.value;
  qrCodeImage.setAttribute('src', randomQrCode.qrCodeSourceImage);

  refreshBarValue.style.animation = `load ${TIMER_VALUE}ms normal infinite`;
  
  refreshBarValue.onanimationiteration = () => {
    randomQrCode = testValues[ Math.floor(Math.random() * testValues.length) ];

    qrCodeValue.value = randomQrCode.value;
    qrCodeImage.setAttribute('src', randomQrCode.qrCodeSourceImage);
  };
};

const copyQrcodeValueToClipboard = () => {
  navigator.clipboard.writeText( qrCodeValue.value );
  alert( 'Copy!' );
}