import { listarCategoriasPrompt, validarCategoriaEscolhida } from "./controladores/categoriaControlador.js";
import { listarPerguntasCategoria } from './controladores/perguntaControlador.js';
import { triagemUsuario, efetuarLogin, verificarUsuarioExistente, criarNovoUsuario } from './controladores/usuarioControlador.js';

const rotas = {
    listarCategoriasPrompt, validarCategoriaEscolhida,
    listarPerguntasCategoria,
    triagemUsuario, efetuarLogin, verificarUsuarioExistente, criarNovoUsuario
}

export default rotas;
