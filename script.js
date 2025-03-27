const maxPetals = 20; // 🌸 จำกัดให้มีไม่เกิน 20 กลีบบนจอ

// ฟังก์ชันสร้างกลีบดอกไม้ที่ตกลงมา
function createPetal() {
    const petalContainer = document.querySelector(".falling-petals");

    // เช็คว่ามีกลีบเกินจำนวนที่กำหนดหรือไม่
    if (petalContainer.children.length >= maxPetals) {
        petalContainer.removeChild(petalContainer.firstChild);
    }

    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "🌸"; // กลีบดอกไม้เป็น emoji
    petalContainer.appendChild(petal);

    const randomX = Math.random() * 100; // ตำแหน่งแนวนอนแบบสุ่ม
    const animationDuration = Math.random() * 6 + 4; // ความเร็วตก (4-10 วินาที)
    const animationDelay = Math.random() * 2; // ความล่าช้า
    const randomZIndex = Math.random() < 0.5 ? -4 : 4; // สุ่มเลือกว่าจะอยู่ด้านหน้า (1) หรือด้านหลัง (-1)

    petal.style.left = `${randomX}%`;
    petal.style.animationDuration = `${animationDuration}s`;
    petal.style.animationDelay = `${animationDelay}s`;
    petal.style.zIndex = randomZIndex;  // กำหนดค่า z-index

}

// เรียกใช้ฟังก์ชันให้สร้างกลีบกุหลาบเรื่อย ๆ
setInterval(createPetal, 1000);


// พลิกซองเมื่อกดที่ด้านหน้า
function flipEnvelope() {
    let envelope = document.querySelector(".envelope-inner");
    envelope.classList.add("flipped");

    // ตรวจสอบว่าเมื่อคลิกที่ซอง ซองพลิกหรือไม่
    console.log("ซองถูกพลิกแล้ว");
}

// เปิดฝาซองเมื่อกดที่ตราประทับ
function openEnvelope() {
    let flap = document.querySelector(".flap");
    let seal = document.querySelector(".seal");

    // เปิดฝาซอง
    flap.style.transform = "rotateX(180deg)";
    flap.style.transition = "transform 1s ease";

    // ซ่อนตราประทับ
    setTimeout(() => {
        seal.style.opacity = 0;
        console.log("ตราประทับถูกซ่อนแล้ว");
    }, 500);
    setTimeout(() => {
        seal.style.display = "none";
    }, 500);

    // สร้างกระดาษพับ
    let foldedPaper = document.createElement("div");
    foldedPaper.classList.add("folded-paper");
    document.querySelector(".envelope").appendChild(foldedPaper);

    // ตรวจสอบว่าเพิ่มกระดาษพับแล้ว
    console.log("เพิ่มกระดาษพับลงในซอง");

    // ทำให้กระดาษลอยขึ้นมา
    setTimeout(() => {
        foldedPaper.style.opacity = "1";
        foldedPaper.style.transform = "translate(-50%, -10vw) scale(1)";
        foldedPaper.style.transition = "opacity 1.3s ease, transform 1.3s ease";
        console.log("กระดาษพับเริ่มลอยขึ้นมา");
    }, 500);
}

// เมื่อกดกระดาษพับ ให้ซองจดหมายหายไปแล้วแสดงจดหมายเต็ม
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("folded-paper")) {
        let envelope = document.querySelector(".envelope");
        let foldedPaper = event.target;
        let letter = document.querySelector(".letter");

        // ทำให้ซองจดหมายหายไป
        envelope.style.opacity = "0";
        envelope.style.transition = "opacity 1s ease";

        // ซ่อนกระดาษพับและแสดงจดหมายที่แท้จริง
        setTimeout(() => {
            envelope.style.display = "none";
            foldedPaper.style.display = "none";

            // ตรวจสอบว่าจดหมายถูกแสดงหรือไม่
            console.log("แสดงจดหมายหลังจากซ่อนซองและกระดาษพับ");

            // แสดงจดหมายที่แท้จริง
            letter.style.display = "flex";  // ให้จดหมายปรากฏ
            letter.style.opacity = "0";    // ซ่อนก่อน
            letter.style.transform = "translateY(20px)"; // ย้ายจดหมายขึ้น

            // ให้จดหมายค่อยๆ ปรากฏ
            setTimeout(() => {
                letter.style.opacity = "1";  // ค่อยๆ ปรากฏ
                letter.style.transform = "translateY(0px)";  // กลับตำแหน่งเดิม
                letter.style.transition = "opacity 1s ease, transform 1s ease";  // ทำให้การเปลี่ยนแปลงลื่นไหล

                // ตรวจสอบเมื่อจดหมายแสดงผล
                console.log("จดหมายแสดงผลแล้ว");
            }, 100);  // เพิ่มความล่าช้าเพื่อให้มีการเปลี่ยนแปลงที่นุ่มนวล
        }, 1000);  // รอ 1 วินาทีให้ซองหายไปก่อน
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const text = `หวัดดี อุ้ม! ทำอะไรอยู่เหรอ? 55555 ขอโทษที่ทักมาตอนดึก ๆ นะ แค่รู้สึกอยากคุยด้วยน่ะ แต่ก็นั่นแหละ... เราก็ไม่รู้จะคุยอะไรเหมือนกัน 😅  ไม่ได้คุยกันนานเลยเนอะ เรากำลังซุ่มทำเว็บอยู่น่ะ เราคิดมาตลอดว่าเราควรมีอะไรให้อุ้มบ้าง เราพลาดโอกาสไปหลายครั้งแล้วที่จะให้อะไรอุ้มสักนิด ทั้งที่อุ้มให้เรามาเยอะมากเลย เราเลยเริ่มเขียนเว็บนี้ขึ้นมา พอเขียนไปเรื่อย ๆ ก็เริ่มคิดถึงผลลัพธ์ ว่าถ้าอุ้มได้อ่านมันแล้วจะเป็นยังไง หลายครั้งที่เราคิดว่า... ควรเลิกเขียนดีไหม? ยุบโปรเจกต์ดีนี้ไปเลยไหม? แต่สุดท้ายเราก็คิดว่า "เห้ย! กีม เราทำมาขนาดนี้แล้วนะ จะเลิกกลางคันทั้งที่ยังไม่ได้บอกไปจริง ๆ เหรอ?" แล้วเราก็ทำมันจนเสร็จจนได้ มั้ง?!

อุ้ม... เรามีอะไรจะบอก
    
    
ปล.ไม่เป็นไรน่ะตอบตามสิ่งที่คิดได้เลยเราเตรียมใจมาพอตัวแล้ว`;
    const letterContent = document.querySelector(".letter-content");
    const nextButton = document.createElement("button");
    
    nextButton.textContent = "ไปหน้าต่อไป";
    nextButton.classList.add("next-button");
    nextButton.style.display = "none"; // ซ่อนปุ่มไว้ก่อน
    document.querySelector(".letter").appendChild(nextButton);

    let i = 0;

    function typeLetter() {
        if (i < text.length) {
            letterContent.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeLetter, 50);
        } else {
            nextButton.style.display = "block"; // แสดงปุ่มเมื่อพิมพ์เสร็จ
        }
    }

    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("folded-paper")) {
            setTimeout(typeLetter, 1000);
        }
    });

    nextButton.addEventListener("click", function() {
        let confirmNext = confirm("อยากจะอ่านต่อ แน่ใจแล้วหรอ!"); // เปลี่ยนจาก alert เป็น confirm
        if (confirmNext) {
            window.location.href = "flower.html"; // เปลี่ยนเป็น URL ที่ต้องการ
        }
    });
});
