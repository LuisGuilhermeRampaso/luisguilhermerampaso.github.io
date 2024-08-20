function toggleHighlight(card) {
    const items = document.querySelectorAll('.project-item');
    const blurOverlay = document.getElementById('blur-overlay');

    items.forEach(item => {
        if (item !== card) {
            item.classList.remove('highlighted');
            item.querySelector('.project-card').classList.remove('flipped');
        }
    });

    const isHighlighted = card.classList.toggle('highlighted');
    card.querySelector('.project-card').classList.toggle('flipped');

    // Mostra ou oculta a camada de desfoque
    blurOverlay.style.display = isHighlighted ? 'block' : 'none';
    
    // Ajusta o scroll para o card destacado
    if (isHighlighted) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
