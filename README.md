# 📊 Random.org Clone - Fun Edition 🇮🇹
Benvenuti nel Clone di [random.org] — un progetto di apprendimento nato per fare scelte casuali e divertenti! Mi sono ispirato a [random.org], che ho spesso utilizzato con gli amici per far scegliere chi guidare in modo randomico ed imparziale 🤘. Poi mi sono detto...ma perchè non fare un clone che non mi faccia mai uscire? Devo solo scegliere sempre gli stessi numeri!! 

> **👾 Disclaimer**: Questo progetto è solo a scopo di divertimento e autoapprendimento e non affiliato a [random.org]. Modificalo per aggiungere un tuo tocco!

## 📚 Funzionalità
- **🎲 Generatore di Numeri Casuali**: Imposta un intervallo, e l’app selezionerà un numero casuale! Perfetto per decisioni eque e senza drammi!
- **👥 Estrazione di Nomi Casuali**: Inserisci alcuni nomi, premi il pulsante e ottieni una scelta casuale! Fine dei dibattiti su chi guida!
- **🔀 Numeri e Nomi Speciali**: Personalizzabili per un’esperienza su misura.

## 👨🏻‍💻 Come far partire l'app
E' necessario avere npm e Node.js installati, oltre che un editor di testo (consiglio Visual Studio Code). Si trovano molte guide online per l'installazione ed un primo setup, anche se si è dei neofiti. Una volta installato tutto:

### 1. Clona e Installa
```
git clone https://github.com/tuousername/RandomNumberGenerator.git
cd RandomNumberGenerator
npm install
```

### 2. Avvia l’app
```
npm run start
```

## 🔄 Personalizzazione
Vuoi aggiungere un tocco personale modificando i nomi/numeri esclusi dalla pick random? Puoi farlo facilmente. Vai rispettivamente in components/RandomNameGenerator.js oppure in components/RandomNumberGenerator.js e modifica il seguente pezzo di codice: 


- **Numeri Speciali**: Modifica l'array specialNumbers in RandomNumberGenerator.js:
```
const specialNumbers = [2, 3]; // Modifica ad esempio in [4, 7]
```

- **Nomi Speciali**: Modifica l'array specialNames in RandomNameGenerator.js:
```
const specialNames = ["alex", "bucci"]; // Personalizza come ["jane", "john"]
```

## 🛠️ Contribuisci
Ti piace l'idea e vuoi contribuire? Fai il fork, modifica e invia una pull request!

- 🍴 Fai il Fork del repository
- 🔨 Applica le modifiche
- 📬 Apri una PR
- 🚀 Crediti

Ispirato dalla casualità su [random.org], costruito con divertimento e voglia di imparare!