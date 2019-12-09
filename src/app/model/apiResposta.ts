export class ApiResposta {
  token: string;
  tipo: string;

  constructor(token: string, tipo: string) {
    this.token = token;
    this.tipo = tipo;
  }
}
