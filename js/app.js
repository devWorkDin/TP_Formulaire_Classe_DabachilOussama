document.addEventListener("DOMContentLoaded",()=>{

let prenom , age , submit,annee,commentaire,footer
annee = new Date().getFullYear()
commentaire = document.querySelector(".comment")
footer = document.querySelector("footer p")
submit = document.getElementsByTagName("input")[2]


// Classe user
    class user{

        constructor(age,prenom){
            this.age = document.getElementsByTagName("input")[0].value
            this.prenom = document.getElementsByTagName("input")[1].value
        }
        getter(){
            return `${this.age}:${this.prenom}`

        }
   
        connect(){
            if(this.age&&this.prenom){
                if(isNaN(this.age)&&(String(this.prenom))){
                    commentaire.innerText =  `Mettre des chiffres pour l'age `
                    commentaire.classList.add("warning")
                    commentaire.classList.remove("success")
                 
                        }else{
                            let naissance = annee-this.age
                            commentaire.innerHTML =  `Bonjour Mr/Mme <a class="upp">${this.prenom}</a> , tu es né(e) en  ${naissance} </p>`
                            commentaire.classList.add("success")
                            commentaire.classList.remove("warning")

                         }
                     }else{
                        commentaire.innerText =  `Les Champs sont vides`
                        commentaire.classList.add("warning")
                        commentaire.classList.remove("success")
                     
                        }
            }
        }
    footer.innerText+=` ${annee}`
    submit.addEventListener("click",(e)=>{
        let createUser = new user(prenom,age)
        e.preventDefault()
        createUser.connect()

    })



})