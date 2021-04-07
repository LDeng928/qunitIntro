export default class Hst {
  calculate(amount, province) {
    let nTax;
    switch (province) {
      case "ON":
        nTax = amount * 0.13;
        break;
      case "MB":
      case "BC":
        nTax = amount * 0.12;
        break;
      case "AB":
        nTax = amount * 0.05;
        break;
      case "QC":
        nTax = amount * 0.14975;
        break;
      default:
        throw "unimplemented";
    }
    return nTax.toFixed(2);
  }
}
