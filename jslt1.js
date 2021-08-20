// js bài tập 1
function div0() {
    let inputa;
    let inputb;
    inputa = document.getElementById("input1").value;
    inputb = document.getElementById("input2").value;
    let a = parseInt(inputa);
    let b = parseInt(inputb);
    c = a % b;
    if (c == 0) {
        document.getElementById("result").innerText = "Result: " + a + " chia hết cho " + b;
    } else {
        document.getElementById("result").innerText = "Result: " + a + " không chia hết cho" + b;
    }
}

// js bài tập 2

function checkage() {
    let inputage;
    inputage = document.getElementById("inputage1").value;
    let a = parseInt(inputage);

    if (a < 1) {
        document.getElementById("result").innerText = "Số tuổi không đúng";
    } else if (a < 15) {
        document.getElementById("result").innerText = "Để được xét tuyển cần nộp thêm hồ sơ học vượt cấp ở cấp học trước";
    } else if (a == 15) {
        document.getElementById("result").innerText = "Học sinh đủ điều kiện xét tuyển";
    } else if (a < 19) {
        document.getElementById("result").innerText = "Để được xét tuyển cần nộp giấy tờ chứng minh học sinh là dân tộc thiểu số...";
    } else {
        document.getElementById("result").innerText = "Học sinh quá tuổi để xét tuyển";
    }

}

// js bâì tập 3

function checkint() {
    let inputint;
    inputint = document.getElementById("inputint").value;
    let int = parseInt(inputint);
    if (int > 0) {
        document.getElementById("result").innerText = int + " > 0";
    } else if (int < 0) {
        document.getElementById("result").innerText = int + " < 0";
    } else {
        document.getElementById("result").innerText = int + " = 0";
    }
}


//js bài tập 4

function checkmax() {
    let inputnum1;
    let inputnum2;
    let inputnum3;
    inputnum1 = document.getElementById("inputnum1").value;
    inputnum2 = document.getElementById("inputnum2").value;
    inputnum3 = document.getElementById("inputnum3").value;
    let num1 = parseInt(inputnum1);
    let num2 = parseInt(inputnum2);
    let num3 = parseInt(inputnum3);

    if (num2 > num1) {
        if (num2 > num3) {
            document.getElementById("result").innerText = "Số lớn nhất là: " + num2;
        } else {
            document.getElementById("result").innerText = "Số lớn nhất là: " + num3;
        }
    } else if (num1 < num3) {
        document.getElementById("result").innerText = "Số lớn nhất là: " + num3;
    } else {
        document.getElementById("result").innerText = "Số lớn nhất là: " + num1;
    }
}

// js bài tập 5

function checkaverage() {
    let inputnum1;
    let inputnum2;
    let inputnum3;
    let inputnum4;
    let inputname;
    inputname = document.getElementById("inputname").value;
    inputnum1 = document.getElementById("inputnum1").value;
    inputnum2 = document.getElementById("inputnum2").value;
    inputnum3 = document.getElementById("inputnum3").value;
    inputnum4 = document.getElementById("inputnum4").value;
    let n1 = parseFloat(inputnum1);
    let n2 = parseFloat(inputnum2);
    let n3 = parseFloat(inputnum3);
    let n4 = parseFloat(inputnum4);
    let average = (n1 + n2 + n3 * 2 + n4 * 3) / 7;
    let aver = average.toFixed(2)

    if (average < 0) {
        document.getElementById("result").innerText = "Điểm nhập không đúng";
    } else if (average < 3) {
        document.getElementById("result").innerText = inputname + " đạt học sinh kém," + " điểm trung bình là: " + aver;
    } else if (average < 5) {
        document.getElementById("result").innerText = inputname + " đạt học sinh trung bình," + " điểm trung bình là: " + aver;
    } else if (average < 8) {
        document.getElementById("result").innerText = inputname + " đạt học sinh khá," + " điểm trung bình là: " + aver;
    } else if (average < 10) {
        document.getElementById("result").innerText = inputname + "đạt học sinh giỏi," + " điểm trung bình là: " + aver;
    } else {
        document.getElementById("result").innerText = "Điểm nhập không đúng";
    }

}

// js bài tập số 6

function checkcommision() {
    let inputname;
    let inputsales;
    inputname = document.getElementById("inputname").value;
    inputsales = document.getElementById("inputsales").value;
    let sales = parseInt(inputsales);
    let com1 = sales * 20 / 100;
    let com2 = sales * 30 / 100;
    let com3 = sales * 40 / 100;
    let com4 = sales * 50 / 100;

    if (sales < 0) {
        document.getElementById("result").innerText = "Nhập lại doanh thu";
    } else if (sales < 1000000) {
        document.getElementById("result").innerText = inputname + " đạt hoa hồng là: " + com1 + " VND";
    } else if (sales < 3000000) {
        document.getElementById("result").innerText = inputname + " đạt hoa hồng là: " + com2 + " VND";
    } else if (sales < 5000000) {
        document.getElementById("result").innerText = inputname + " đạt hoa hồng là: " + com3 + " VND";
    } else {
        document.getElementById("result").innerText = inputname + " đạt hoa hồng là: " + com4 + " VND";
    }

}

// js bài tập 7

function checkbillphone() {
    let inputphone;
    let inpuntminutes;
    inputphone = document.getElementById("inputphone").value;
    inpuntminutes = document.getElementById("minutes").value;
    let min = parseInt(inpuntminutes);
    let min1 = min * 2500;
    let min2 = 300 * 2500 + (min - 300) * 3000;
    let min3 = 300 * 2500 + 100 * 3000 + (min - 400) * 4000;
    let min4 = 300 * 2500 + 100 * 3000 + 100 * 40000 + (min - 500) *5000;

    if (min < 0) {
        document.getElementById("result").innerText = "Nhập lại dữ liệu";
    } else if (min < 300) {
        document.getElementById("result").innerText = "Cước Thuê bao: " + inputphone + " là: " + min1 + " VND";
    } else  if (min < 400) {
        document.getElementById("result").innerText = "Cước Thuê bao: " + inputphone + " là: " + min2 + " VND";
    } else if (min < 500) {
        document.getElementById("result").innerText = "Cước Thuê bao: " + inputphone + " là: " + min3 + " VND";
    } else {
        document.getElementById("result").innerText = "Cước Thuê bao: " + inputphone + " là: " + min4 + " VND";
    }
}