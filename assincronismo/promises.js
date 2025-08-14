// Função que retorna uma promise
function asyncFunction() {
    return new Promise((resolve, reject) => { 
        // Simular uma operação assincrona. 
        setTimeout(() => { 
            const isSucess = true; 
        
            if(isSucess) {
                resolve("A operação foi concluida com sucesso");
            } else {
                reject("Algo deu errado!"); 
            }
        }, 3000); // Simula uma operacao assincrona
    })
}


async function fetch() {
    try {
        const response = await asyncFunction();
        console.log(response);
    } catch (err) { 
        console.log(err); 
    } finally {
        console.log("Fim da execução");
    }
}

fetch();