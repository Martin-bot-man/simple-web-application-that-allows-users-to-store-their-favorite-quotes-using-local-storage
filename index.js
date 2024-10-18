const quoteInput = document.getElementById("quote").value;
const authorInput = document.getElementById('author').value
const addButton = document.getElementById("button");
const storedQuotesSection = document.getElementById('stored-quotes')

addButton.addEventListener('click', addQuote);

function addQuote(){
    const quote = quoteInput.value;
    const author = authorInput.value;

    if(quote&&author){
        const quoteObject ={
            quote,
            author
        };
        const storedQuotes = JSON.parse(localStorage.getItem('quotes'))||[];
        storedQuotes.push(quoteObject);
        localStorage.setItem("quotes", JSON.stringify(storedQuotes));
        //Update the stored quotes section in the DOM

        displayStoredQuotes();

        quoteInput.value= "";
        authorInput.value= "";
    }else{
        alert("Please fill out the quote and author fields.")
    }
} 
function displayStoredQuotes(){
    const storedQuotes = JSON.parse(localStorage.getItem('quotes'))||[];

    storedQuotesSection.innerHTML = "";
    storedQuotes.forEach(quoteObj =>{
        const quoteItem= document.createElement('p');
        quoteItem.textContent = `${quoteObj.quote}-${quoteObj.author}`;

        const removeButton = document.createElement("button");
        removeButton.addEventListener("click",()=>{
            removeQuote(quoteObj);
        });
        quoteItem.appendChild(removeButton);
        storedQuotesSection.appendChild(quoteItem);
        
    })
}  
function removeQuote(quoteObj){
    const storedQuotes =JSON.parse(localStorage.getItem("quotes"))||[];
    const index = storedQuotes.indexOf(quoteObj);

    if(index!==-1){
        storedQuotes.splice(index, 1);
        localStorage.setItem("quotes",JSON.stringify(storedQuotes));
        displayStoredQuotes();
    }

}
displayStoredQuotes();