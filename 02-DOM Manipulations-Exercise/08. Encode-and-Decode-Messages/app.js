function encodeAndDecodeMessages() {
    
    let sendBtn = document.getElementsByTagName('button')[0];
    let readBtn = document.getElementsByTagName('button')[1];

    let sendText = document.getElementsByTagName('textarea')[0];
    let decodeText = document.getElementsByTagName('textarea')[1];


    sendBtn.addEventListener('click', ()=>{
        let inputInfo = sendText.value;
        let encodedMessage = '';
        for (let i = 0; i < inputInfo.length; i++) {
            encodedMessage += String.fromCharCode(inputInfo[i].charCodeAt(0) + 1);
        }
        decodeText.value = encodedMessage;
        sendText.value = '';
    });

    readBtn.addEventListener('click', ()=>{
        let input = decodeText.value;
        let decodedMessage = '';
        for (let i = 0; i < input.length; i++) {
            decodedMessage += String.fromCharCode(input[i].charCodeAt(0) - 1);
        }
        decodeText.value = decodedMessage;
    })
}