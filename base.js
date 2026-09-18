//creiamo la Classe conto corrente
class Base {
  constructor(username, password, saldoIniziale = 0) {
    this.username = username;
    this.password = password;
    this.saldo = saldoIniziale;
  }
  //accesso con credenziali
  login(username, password) {
    if (this.username === username && this.password === password) {
      console.log(`[Login] Benvenuto ${this.username}`);
      return true;
    } else {
      console.log("[Login] Credenziali errate");
      return false;
    }
  }
  //verifica saldo disponibile
  getSaldo() {
    console.log(`[SALDO] Saldo attuale: ${this.saldo.toFixed(2)}`);
    return this.saldo;
  }
  //versamento dei soldi
  versaDenaro(importo) {
    if (importo > 0) {
      this.saldo += importo;
      console.log(
        `[Versamento] Versati: ${importo}. Nuovo saldo: ${this.saldo.toFixed(2)}`,
      );
    } else {
      console.log("[Versamento]L'importo deve essere maggiore di 0.");
    }
  }
  //prelevare del denaro
  prelevaDenaro(importo) {
    if (importo <= 0) {
      console.log(`[Prelievo] Importo non valido`);
    } else if (importo > this.saldo) {
      console.log("[Prelievo] Saldo insufficiente");
    } else {
      this.saldo -= importo;
      console.log(
        `[Prelievo] Prelevati ${importo}. Nuovo saldo: ${this.saldo.toFixed(2)}`,
      );
    }
  }
}
export default Base;
