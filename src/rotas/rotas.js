import { listarCategoriasPrompt, validarCategoriaEscolhida, listarPontuacaoCategoria } from "../controladores/categoriaControlador.js";
import { listarPerguntasCategoria } from '../controladores/perguntaControlador.js';
import { triagemUsuario, efetuarLogin, verificarUsuarioExistente, criarNovoUsuario } from '../controladores/usuarioControlador.js';

const rotas = {
    listarCategoriasPrompt, validarCategoriaEscolhida, listarPontuacaoCategoria,
    listarPerguntasCategoria,
    triagemUsuario, efetuarLogin, verificarUsuarioExistente, criarNovoUsuario
}

export default rotas;
