// เส้นทางของรูปภาพทั้งหมดที่ต้องการแสดง
const imagePaths = [
'AOMM/1737776027485.jpg',
    'AOMM/1737776034131.jpg',
    'AOMM/1737776037008.jpg',
    'AOMM/1737776057732.jpg',
    'AOMM/IMG_20250301_151703_414.jpg',
    'AOMM/IMG_20250319_213301_603.jpg',
    'AOMM/IMG_25670920_083614.jpg',
    'AOMM/IMG_25670920_083641.jpg',
    'AOMM/IMG_25671116_143422.jpg',
    'AOMM/IMG_25671121_101348.jpg',
    'AOMM/IMG_25671202_153932.jpg',
    'AOMM/IMG_25671227_110006.jpg',
    'AOMM/IMG_25671227_110012.jpg',
    'AOMM/IMG_25680110_093329.jpg',
    'AOMM/IMG_25680123_140920.jpg',
    'AOMM/IMG_25680123_141419.jpg',
    'AOMM/IMG_25680124_104512.jpg',
    'AOMM/IMG_25680124_182427.jpg',
    'AOMM/IMG_25680124_182444.jpg',
    'AOMM/IMG_25680124_182500.jpg',
    'AOMM/IMG_25680124_183301.jpg',
    'AOMM/IMG_25680127_110916.jpg',
    'AOMM/IMG_25680127_115023.jpg',
    'AOMM/IMG_25680127_141124.jpg',
    'AOMM/IMG_25680128_102323.jpg',
    'AOMM/IMG_25680128_145628.jpg',
    'AOMM/IMG_25680204_093141.jpg',
    'AOMM/IMG_25680204_101725.jpg',
    'AOMM/IMG_25680206_123838.jpg',
    'AOMM/IMG_25680206_220437.jpg',
    'AOMM/IMG_25680206_220724.jpg',
    'AOMM/IMG_25680206_220730.jpg',
    'AOMM/IMG_25680208_163312.jpg',
    'AOMM/IMG_25680208_165917.jpg',
    'AOMM/IMG_25680209_221437.jpg',
    'AOMM/IMG_25680209_221457.jpg',
    'AOMM/IMG_25680210_120750.jpg',
    'AOMM/IMG_25680210_141322.jpg',
    'AOMM/IMG_25680214_212618.jpg',
    'AOMM/IMG_25680214_213159.jpg',
    'AOMM/IMG_25680218_085507.jpg',
    'AOMM/IMG_25680218_114504.jpg',
    'AOMM/IMG_25680218_114527.jpg',
    'AOMM/IMG_25680218_114553.jpg',
    'AOMM/IMG_25680220_105456.jpg',
    'AOMM/IMG_25680225_173255.jpg',
    'AOMM/IMG_25680226_174227.jpg',
    'AOMM/IMG_25680226_174231.jpg',
    'AOMM/IMG_25680226_181339.jpg',
    'AOMM/IMG_25680324_224026.jpg',
'AOMM/Messenger_creation_0D33214B-1F48-4B40-A0FD-0D5D53B97940.png',
    'AOMM/Messenger_creation_3DE5C84D-4D69-401F-9AC9-FD321EC5B93D.jpeg',
            'AOMM/Messenger_creation_6F278021-CC9F-4F61-8DC5-F088EF845E72.png',
            'AOMM/Messenger_creation_33FD6326-A993-4C9F-99A5-03FA1AEBEC77.png',
            'AOMM/Messenger_creation_35F97703-171A-44E6-899B-E5B42F312AAD.png',
            'AOMM/Messenger_creation_234B58DA-7D22-4953-BF2B-02CD786011BD.jpeg',
            'AOMM/Messenger_creation_43040C07-F035-415B-A9D9-7ECF09275F33.jpeg',
            'AOMM/Messenger_creation_66317B19-5D49-4AE0-81BE-49BE5F37CC6E.jpeg',
            'AOMM/Messenger_creation_1006404434873018.jpeg',
            'AOMM/Messenger_creation_3900274546909304.jpeg',
            'AOMM/received_1171082160626349.jpeg',
            'AOMM/Screenshot_25680127_215319.jpg',
            'AOMM/Screenshot_25680319_213151.jpg'
    // เพิ่มชื่อไฟล์รูปภาพของคุณทั้งหมดที่นี่
];

// ฟังก์ชันสำหรับสร้าง card ที่มีรูปภาพ
function createCard(imagePath, index) {
    // สร้าง div สำหรับ card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col-md-4', 'mb-4');

    // สร้าง card ภายใน div
    const card = document.createElement('div');
    card.classList.add('card');

    // สร้างภาพใน card
    const img = document.createElement('img');
    img.src = imagePath;
    img.classList.add('card-img-top');
    img.alt = `Image ${index + 1}`;
    img.setAttribute('data-bs-toggle', 'modal');
    img.setAttribute('data-bs-target', '#imageModal');

    // สร้างคำบรรยายภาพ (สามารถปรับเปลี่ยนได้)
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const caption = document.createElement('p');
    caption.classList.add('card-text');


    // เพิ่มคำบรรยายลงใน card body
    cardBody.appendChild(caption);

    // เพิ่มทุกสิ่งลงใน card
    card.appendChild(img);
    card.appendChild(cardBody);
    cardDiv.appendChild(card);

    // เพิ่ม card ลงใน gallery
    document.getElementById('gallery').appendChild(cardDiv);
}

// สร้าง card สำหรับแต่ละรูปภาพที่มีใน imagePaths
imagePaths.forEach((imagePath, index) => {
    createCard(imagePath, index);
});

// เพิ่มฟังก์ชันเพื่อให้ modal สามารถแสดงภาพขยายได้
document.querySelectorAll('.card-img-top').forEach(image => {
    image.addEventListener('click', function() {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = this.src; // กำหนดให้ modal แสดงภาพที่ถูกคลิก
    });
});
