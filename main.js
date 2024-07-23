let name= `Federica`
let number = 1234567890


let rubrica = {
    listaContatti: [
        {name: `Nicola`, number: 3331111111},
        {name: `Lorenzo`, number: 3332222222},
        {name: `Paola`, number: 3333333333},
        {name: `Janny`, number: 3334444444},
    ],

    showAllContacts: function(){
        this.listaContatti.forEach(contatto => {
        console.log(`${contatto.name} : ${contatto.number}`);
        })
    },

    showContact: function(nome){
        let contatto = this.listaContatti.find(contatto => contatto.name == nome)

        if(contatto){
            console.log(`CONTATTO TROVATO - ${contatto.name}: ${contatto.number}`);
        }else{
            console.log(`CONTATTO NON TROVATO`);
        }
    },

    removeAddContacts: function(nome, numero){
        let contatto = this.listaContatti.find(contatto => contatto.name == nome)
        let index = this.listaContatti.indexOf(contatto)
        if (contatto){
            this.listaContatti.splice(index, 1)
            console.log(`CONTATTO ELIMINATO`);
        }else{
            this.listaContatti.push({name: nome, number: numero})
            console.log(`CONTATTO AGGIUNTO`);
        }
    },

    editContact: function(nome, newNumber){
        let contatto = this.listaContatti.find(contatto => contatto.nome == nome)
        if(contatto){
            console.log(`CONTATTO MODIFICATO`);
            contatto.number = newNumber   
        }else{
            console.log(`CONTATTO NON TROVATO`);
        }
    }

}

rubrica.showAllContacts()
rubrica.showContact(`Nicola`)
rubrica.removeAddContacts(name, number)
rubrica.editContact(`Lorenzo`, 12300)
rubrica.showAllContacts()
