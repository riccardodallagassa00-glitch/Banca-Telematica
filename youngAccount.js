import Base from "./base";
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
export default YoungAccount;
