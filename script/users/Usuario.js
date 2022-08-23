class Usuario{
    
    #clave;

    constructor(email,telefono){
        this.email = email;
        this.telefono = telefono;
    }

    setClave(clave){
        this.#clave = clave
    }

    _getClave(){
        return this.#clave
    }

    administrador(){
        return false
    }
}