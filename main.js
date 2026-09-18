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
//sottoclasse Young (libretto di risparmio per minori)
class YoungAccount extends Base {
  constructor(username, password, saldoIniziale = 0) {
    super(username, password, saldoIniziale);
  }
  versaDenaro(importo, isGenitore) {
    if (isGenitore === true) {
      super.versaDenaro(importo);
    } else {
      console.log(
        "[Error] Operazione negata: solo i genitori possono versare su YoungAccount.",
      );
    }
  }
  prelevaDenaro(importo, isGenitore) {
    if (isGenitore === true) {
      super.prelevaDenaro(importo);
    } else {
      console.log(
        "[Error] Operazione negata: solo i genitori possono prelevare su YoungAccount.",
      );
    }
  }
}
// Istanziare le classi
console.log("=== 1. TEST CONTO CORRENTE (CC) ===");

// Istanziazione conto Riccardo con saldo iniziale di 1000€
const contoRiccardo = new CC("riccardo00", "pass123", 1000);

// Verifica login e operazioni
if (contoRiccardo.login("riccardo00", "pass123")) {
  contoRiccardo.getSaldo();

  // Operazioni tipiche di un Conto Corrente
  contoRiccardo.effettuaBonifico(150, "Abbonamento Palestra");
  contoRiccardo.inviaDenaro(200, "Guglielmo");
  contoRiccardo.riceviDenaro(80, "Regalo");

  // Saldo finale aggiornato
  contoRiccardo.getSaldo();
}

console.log("\n=== 2. TEST YOUNG ACCOUNT ===");

// Istanziazione del conto risparmio per minori con saldo iniziale di 100€
const contoEnrico = new YoungAccount("enry", "pass456", 100);

// prova a prelevare il minorenne (isGenitore = false)
console.log("\n-> Tentativo del minore:");
contoEnrico.prelevaDenaro(20, false);

// Preleva il genitore (isGenitore = true)
console.log("\n-> Intervento del genitore:");
contoEnrico.versaDenaro(50, true);
contoEnrico.prelevaDenaro(30, true);

// Verifica saldo finale YoungAccount
contoEnrico.getSaldo();
