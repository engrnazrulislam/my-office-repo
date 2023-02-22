function handleOnClick(){
    const handlerStatus=document.getElementById('handler-status');
    handlerStatus.innerText='Handled by function attached on onclick attribute';
}
document.getElementById('event-listener').addEventListener('click',function(){
    const handlerStatus=document.getElementById('handler-status');
    handlerStatus.innerText='Text updated by add Event listner Button';
})
document.getElementById('btn-update').addEventListener('click',function(){
    const inputField=document.getElementById('input-field');
    const inputText=inputField.value;
    const p=document.getElementById('input-text-display');
    p.innerText=inputText;
    inputField.value='';
})