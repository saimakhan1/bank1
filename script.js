const fixedCellNumber = 12345678910;
const fixedPinNumber = 1234;

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  const loginButton = document.getElementById("loginButton");

  const mobileNumber = document.getElementById("mobileNumber");
  const MobileNumberValue = mobileNumber.value;
  const ConvertedMobileNumber = parseInt(MobileNumberValue);

  const pinNumber = document.getElementById("pinNumber");
  const pinNumberValue = pinNumber.value;
  const convertedPinNumber = parseInt(pinNumberValue);
  if (
    ConvertedMobileNumber === fixedCellNumber &&
    convertedPinNumber === fixedPinNumber
  )
    window.location.href = "./home.html";
  else alert("invalid credential");

  console.log(convertedPinNumber);
  console.log(ConvertedMobileNumber);
});
