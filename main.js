import CC from "./CC";
import YoungAccount from "./youngAccount";

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
