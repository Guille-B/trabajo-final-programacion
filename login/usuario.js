
export class Usuario {
    #usuario;
    #contraseña;
    #nroUser;
    static instance = 0;

    //constructor
    constructor(usuario,contraseña) {
        this.#usuario= usuario;
        this.#contraseña = contraseña;
        this.#nroUser = ++Usuario.instance;
    }

    //getters

    get usuario(){
        return this.#usuario;
        }
    get contraseña() {
        return this.#contraseña;
    }
    get nroUser() {
        return this.#nroUser;
    }
    
    //setters
    set usuario (nuevoNombre) {
        this.#usuario = nuevoNombre;
        }

    set contraseña(nuevaContraseña) {
        this.#contraseña = nuevaContraseña;
    }

}