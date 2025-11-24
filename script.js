document.getElementById("hesaplaBtn").addEventListener("click", function () {

    let v = Number(document.getElementById("vize").value);
    let f = Number(document.getElementById("final").value);

    let ort = (v * 0.40) + (f * 0.60);

    let harf = "";
    let durum = "";

    if (f < 50) {
        harf = "FF";
        durum = "Final 50'nin altında olduğu için kaldınız.";
    } 
    else {
        if (ort >= 85) harf = "AA";
        else if (ort >= 70) harf = "BB";
        else if (ort >= 55) harf = "CC";
        else if (ort >= 45) harf = "DD";
        else harf = "FF";

        durum = (harf === "FF") ? "Kaldınız." : "Geçtiniz!";
    }

    document.getElementById("ortalama").textContent = "Ortalama: " + ort.toFixed(2);
    document.getElementById("harf").textContent = "Harf Notu: " + harf;
    document.getElementById("durum").textContent = durum;

});