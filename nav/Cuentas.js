export class admin {
    constructor() {
        this.usuarios = [];
    }
    agregarUsuarios(usuario, contraseña) {
        const nuevoUsuario = { usuario, contraseña };
        this.usuarios.push(nuevoUsuario);
    }
    getUsuarios() {
        return this.usuarios; // Método para obtener el arreglo de usuarios
    }


}