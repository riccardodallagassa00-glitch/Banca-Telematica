import Base from "./base";
// Creo la classe ContoCorrente (CC)
class CC extends Base {
  constructor(username, password, saldoIniziale = 0) {
    super(username, password, saldoIniziale);
  }
  effettuaBonifico(importo, causale = "Pagamento generico") {
    if (importo > 0 && importo <= this.saldo) {
      this.saldo -= importo;
      console.log(
        `[Bonifico] Pagati €${importo} per: "${causale}". Nuovo saldo:€${this.saldo.toFixed(2)} `,
      );
    } else {
      console.log(
        "[Bonifico] Impossibile effettuare il pagamento (saldo insufficiente.)",
      );
    }
  }
  inviaDenaro(importo, destinatario) {
    if (importo > 0 && importo <= this.saldo) {
      this.saldo -= importo;
      console.log(
        `[Invio] Inviati €${importo} a ${destinatario}. Nuovo saldo: €${this.saldo.toFixed(2)}`,
      );
    } else {
      console.log("[Invio] Impossibile inviare denaro.");
    }
  }

  riceviDenaro(importo, mittente) {
    if (importo > 0) {
      this.saldo += importo;
      console.log(
        `[Ricezione] Ricevuti €${importo} da ${mittente}. Nuovo saldo €${this.saldo.toFixed(2)}`,
      );
    } else {
      console.log("[Ricezione] Impossibile ricevere denaro.");
    }
  }
}
export default CC;
