const slider = document.getElementById('subjectSlider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const subjectItems = slider.querySelectorAll('.subject');
const scrollAmount = subjectItems[0].offsetWidth + 20; // item width + gap

nextBtn.addEventListener('click', () => {
    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10) {
        // Cuối cùng → về đầu
        slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
});

prevBtn.addEventListener('click', () => {
    if (slider.scrollLeft <= 0) {
        // Đầu tiên → về cuối
        slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
});
document.getElementById("navSearchInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        alert("Bạn vừa tìm: " + this.value);
        // Bạn có thể điều hướng hoặc lọc ở đây
    }
});
