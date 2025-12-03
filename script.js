document.addEventListener('DOMContentLoaded', () => {
    const poster = document.querySelector('.poster-instructions');
    const okButton = document.querySelector('#instructions-ok-button');
    const shareButton = document.querySelector('#share-button');
    const infoButton = document.querySelector('#info-button');
    const infoPanel = document.querySelector('#info-panel');
    const infoPanelCloseButton = document.querySelector('#info-panel-close-button');
    
    // 1. إخفاء شاشة التعليمات عند الضغط على "موافق"
    okButton.addEventListener('click', () => {
        poster.classList.add('hide');
    });

    // إظهار نافذة المعلومات
    infoButton.addEventListener('click', () => {
        infoPanel.classList.add('show');
    });

    // إخفاء نافذة المعلومات
    infoPanelCloseButton.addEventListener('click', () => {
        infoPanel.classList.remove('show');
    });

    // 4. برمجة زر المشاركة
    shareButton.addEventListener('click', async () => {
        const shareData = {
            title: 'الجبن التعزي المدخن',
            text: 'اكتشف هذا المنتج الرائع بتقنية ثلاثية الأبعاد والواقع المعزز!',
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                alert('المشاركة غير مدعومة على هذا المتصفح. يمكنك نسخ الرابط.');
            }
        } catch (err) {
            console.error('خطأ أثناء محاولة المشاركة:', err);
        }
    });
});