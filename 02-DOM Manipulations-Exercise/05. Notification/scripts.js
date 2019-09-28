function notify(message) {
    
    let note = document.getElementById('notification');
    note.textContent = message;
    note.style.display = 'block';
    setTimeout(()=>{
        note.textContent = '';
        note.style.display = 'none';
    }, 2000);
}