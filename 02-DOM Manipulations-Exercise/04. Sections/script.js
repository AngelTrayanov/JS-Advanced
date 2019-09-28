function create(words) {
   
   let contentDiv = document.getElementById('content');

   for (const word of words) {
      let div = document.createElement('div');
      let para = document.createElement('p');

      para.textContent = word;
      para.style.display = 'none';

      div.appendChild(para);
      contentDiv.appendChild(div);
      div.addEventListener('click', ()=>{
         para.style.display = 'inline-block';
      })
      div.addEventListener('dblclick', ()=>{
         para.style.display = 'none';
      })
   }

}