import Hst from "./Hst.js";
import "https://code.jquery.com/jquery-1.12.1.min.js";

$(document).ready(() => {
  $("#calculate").click((evt) => {
    evt.preventDefault();
    const nAmount = $("#price").val();
    const sProvince = $("#province").val();
    const oHst = new Hst();
    $("#amount").html(nAmount);
    $("#province").html(sProvince);
    $("#hst").html(oHst.calculate(nAmount, sProvince));
  });
});
