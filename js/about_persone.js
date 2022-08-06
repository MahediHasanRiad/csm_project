// document.getElementById('basic').addEventListener('click', function(){
//     const bronzeTk = document.getElementById('bronze_tk');
//     bronzeTk.innerText = bronzeTk + 50;
// })

function increase(id, price, textID, text, delivaryId, delivaryTime, revisionId, howManyRevision){
    const bronzeTk = document.getElementById(id);
    bronzeTk.innerText = price;

    const bronzeText = document.getElementById(textID);
    bronzeText.innerText = text;

    const delivary = document.getElementById(delivaryId);
    delivary.innerText = delivaryTime;

    const revision = document.getElementById(revisionId);
    revision.innerText = howManyRevision;

    const continueBtn = document.getElementById('continueBtn');
    continueBtn.innerText = price;

}
document.getElementById('basic').addEventListener('click', function(){
    increase('bronze_tk', 150, 'bronze_text', 'BRONZE', 'delivaryDate', 4, 'revision', 2);
})
document.getElementById('standerd').addEventListener('click', function(){
    increase('bronze_tk', 250, 'bronze_text', 'GOLD', 'delivaryDate', 7, 'revision', 4);
})
document.getElementById('preminum').addEventListener('click', function(){
    increase('bronze_tk', 400, 'bronze_text', 'PLATINUM', 'delivaryDate', 15, 'revision', 6);
})