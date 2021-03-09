function tinh() {
    let month = document.getElementById("month").value;
    let mon = parseInt(month);
    switch (mon) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("day").innerHTML = "Tháng " + mon + " có 31 ngày";
            break;
        case 2:
            document.getElementById("day").innerHTML = "Tháng 2 có 28 hoặc 29 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("day").innerHTML = "Tháng " + mon + " có 30 ngày";
            break;
        default:
            alert("Chỉ nhập tháng từ 1 12")
    }
}