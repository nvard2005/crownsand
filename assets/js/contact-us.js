document.querySelectorAll('.accordion-slot').forEach((slot) => {
    slot.addEventListener('click', () => {
        const accordion = slot.parentElement;
        const panel = accordion.querySelector('.accordion-panel');
        const plus = slot.querySelector('.icon-plus');
        const minus = slot.querySelector('.icon-minus');
        const isOpen = panel.style.maxHeight;
        document.querySelectorAll('.accordion-panel').forEach(p => {
            p.style.maxHeight = null;
        });
        document.querySelectorAll('.icon-plus').forEach(i => i.style.display = 'block');
        document.querySelectorAll('.icon-minus').forEach(i => i.style.display = 'none');
        if (!isOpen) {
            panel.style.maxHeight = panel.scrollHeight + "px";
            if (plus) plus.style.display = "none";
            if (minus) minus.style.display = "block";
        }
    });
});
