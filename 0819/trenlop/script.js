

// $(function() {
//     $(".btn.btn-primary").on("click", function() {
//         let kg = $("#kg").val();
//         let m = $("#cao").val();
//         let ibm = kg / (m * m);
//         let ketqua = $(".ketQua");
        
//         if (ibm <= 16) ketqua.text("Gầy độ III"); 
//         else if (ibm <= 17.5)  ketqua.text("Gầy độ II");
//         else if (ibm <= 18.5)  ketqua.text("Gầy độ I");
//         else if (ibm <= 25)  ketqua.text("Bình thường"); 
//         else if (ibm <= 30)  ketqua.text("Hơi béo"); 
//         else if (ibm <= 35)  ketqua.text("Béo phì độ I"); 
//         else if (ibm <= 40)  ketqua.text("Béo phì độ II");
//         else  ketqua.text("Béo phì độ III");
//     })
// });

$(function() {
    $("input").on("input", function() {
        let F = $("#F").val();
        let K = $("#K").val();
        let C = $("#C").val();

        C = (F - 32) / 1.8;
        K = C + 273.15;
        F = (C * 1.8) + 32;


    })
});