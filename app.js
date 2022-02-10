document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("button");

    button.addEventListener("click", function () {
        let friends = ['Doug', 'Matt', 'Cole', 'Ken', 'Damon'];

        for (let i = 0; i < friends.length; i++) {

            let div = document.createElement("div");
            let heading = document.createElement("h3");

            document.body.appendChild(div);
            div.className = "friends";
            div.innerHTML = "<h3 class= 'name'>" + friends[i].toUpperCase() + "</h3>"

            for (let j = 99; j >= 0; j--) {
                //console.log(Friends[i],j)
                if (j == 2) {
                    let p = document.createElement("p")
                    p.innerHTML = j + " lines of code in a file" + j + " Lines of code!" + friends[i] + " strikes one out, clears it all out " + (j - 1) + " lines of code in the file";
                    div.appendChild(p);
                }
                else if (j === 1) {
                    let p = document.createElement("p")
                    p.innerHTML = j + " line of code in a file" + j + " Line of code!" + friends[i] + " strikes one out, clears it all out " + (j - 1) + " line of code in the file";
                    div.appendChild(p);
                } else {
                    let p = document.createElement("p")
                    p.innerHTML = j + " lines of code in a file" + j + " Lines of code!" + friends[i] + " strikes one out, clears it all out " + (j - 1) + " lines of code in the file";
                    div.appendChild(p);
                };
                //console.log(Friends[i])

            };

        }


    })
})