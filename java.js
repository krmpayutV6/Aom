
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
    
  };


  let messages = [
    "ดีใจจังที่อุ้มยังเลือกที่จะอ่านข้อความที่เราอยากบอกอยู่",
    "ก่อนอื่นเลย  เมื่อก่อนนั้นเราเคยที่รู้สึกว่าเราควรจะเก็บความรู้สึกอันนี้เอาไว้ถึงแม้จะไม่ได้บอกไปเราก็ไม่เป็นอะไร",
    "แต่มีอยู่ครั้งนึงที่มันมีคนมาสะกิดความรู้สึกนั้นให้มันแตกออกมา และเมื่อได้บอกไปแล้วความรู้สึกนั้นยิ่งมากขึ้นเรื่อย ๆ ",
    "จนเราไม่อยากจะเก็บมันเอาไว้แล้ว   เราอยากบอกอุ้มว่าา 'เราชอบอุ้มน่ะ'",
];

let index = 0;
function typeMessage() {
    if (index < messages.length) {
        let messageElement = document.getElementById(`message${index + 1}`);
        let text = messages[index];
        let charIndex = 0;
        messageElement.innerHTML = "";
        
        let typingInterval = setInterval(function() {
            messageElement.innerHTML += text.charAt(charIndex);
            charIndex++;
            if (charIndex === text.length) {
                clearInterval(typingInterval);
                index++;
                setTimeout(typeMessage, 700); // พิมพ์ข้อความถัดไปหลังจากที่พิมพ์เสร็จ
            }
        }, 90); // ควบคุมความเร็วในการพิมพ์
    } else {
        // เมื่อพิมพ์ข้อความสุดท้ายเสร็จ ให้แสดงปุ่ม
        showNextButton();
    }
}

function showNextButton() {
    // สร้างปุ่ม
    const nextButton = document.createElement("button");
    nextButton.textContent = "ไปหน้าถัดไป";
    nextButton.classList.add("next-button");
    document.body.appendChild(nextButton);

    // เมื่อคลิกปุ่มให้พาไปยังหน้าอื่น
    nextButton.addEventListener("click", function() {
        window.location.href = "submit.html"; // เปลี่ยนเป็น URL ที่ต้องการ
    });
}

typeMessage(); // เริ่มพิมพ์ข้อความแรก