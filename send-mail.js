document.addEventListener('DOMContentLoaded', () => {
    const chekbox = document.querySelector('#checkbox');
    chekbox.addEventListener('click', ()=> {
        if(chekbox.checked) {
            document.querySelector('#submitBtn').disabled = false;
        }else {document.querySelector('#submitBtn').disabled = true}
    })

    const form = document.querySelector('#formx');
    const url = './form_processing.php';
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const mass = `${document.querySelector('#count_wall').innerHTML}  
                      ${document.querySelector('#count_ceiling').innerHTML} 
                      ${document.querySelector('#count_floor').innerHTML}`
        const formData = new FormData();
        formData.append("tel", document.querySelector('#calc-tel').value);
        formData.append("email", document.querySelector('#calc-email').value);
        formData.append("delivery", document.querySelector('#delivery').value);
        formData.append("addres", document.querySelector('#calc-addres').value);
        formData.append("dim_a", document.querySelector('#dim_a').value);
        formData.append("dim_b", document.querySelector('#dim_b').value);
        formData.append("dim_c", document.querySelector('#dim_c').value);
        formData.append("wcount", document.querySelector('#wcount').value);
        formData.append("dcount", document.querySelector('#dcount').value);
        formData.append("messages", mass);
        postData(url, formData)
    })
})
async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        body: data
    });
    let answ = await response.text();
    document.querySelector('.response').innerHTML = answ;
    document.querySelector('#submitBtn').disabled = true;
}