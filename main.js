document.querySelector("#p").addEventListener("click", function()
{
    let waga = Number(document.querySelector("#waga").value);
    document.querySelector(".wynik").classList.add("wynik2")            
        setTimeout(()=>
    {
        setTimeout(()=>
        {
            setTimeout(()=>
            {
                setTimeout(() => {
                    document.querySelector(".wynik").classList.remove("wynik2");
                    document.querySelector(".wynik").innerHTML = "";
                }, 6450);
                document.querySelector(".wynik").innerHTML = "<img src=\"the-rock-surprised.gif\" alt=\"the rock\">"
            }, 3000)
            document.querySelector(".wynik").innerHTML = "Czy twoja waga to: " + waga + "?";
        }, 1000)
        document.querySelector(".wynik").innerHTML = "Poczekaj chwilę";
    }, 200);
})
