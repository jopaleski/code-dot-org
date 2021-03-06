var common_locale = {lc:{"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"ga":function(n){return n==1?"one":(n==2?"two":"other")},"gl":function(n){return n===1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"mr":function(n){return n===1?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){common_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){common_locale.c(d,k);return d[k] in p?p[d[k]]:(k=common_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){common_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).common_locale = {
"and":function(d){return "e"},
"backToPreviousLevel":function(d){return "Torna al livello precedente"},
"blocklyMessage":function(d){return "Blockly"},
"blocks":function(d){return "blocchi"},
"booleanFalse":function(d){return "falso"},
"booleanTrue":function(d){return "vero"},
"catActions":function(d){return "Azioni"},
"catColour":function(d){return "Colore"},
"catLists":function(d){return "Liste"},
"catLogic":function(d){return "Logica"},
"catLoops":function(d){return "Ripetizioni"},
"catMath":function(d){return "Matematica"},
"catProcedures":function(d){return "Funzioni"},
"catText":function(d){return "Testo"},
"catVariables":function(d){return "Variabili"},
"clearPuzzle":function(d){return "Ricomincia"},
"clearPuzzleConfirm":function(d){return "Questo ripristinerà il puzzle allo stato di partenza ed eliminerà tutti i blocchi che hai aggiunto o cambiato."},
"clearPuzzleConfirmHeader":function(d){return "Sei sicuro di voler ricominciare da capo?"},
"codeMode":function(d){return "Codice"},
"codeTooltip":function(d){return "Guarda il codice JavaScript generato."},
"continue":function(d){return "Prosegui"},
"defaultTwitterText":function(d){return "Guarda cosa ho fatto"},
"designMode":function(d){return "Disegno"},
"dialogCancel":function(d){return "Annulla"},
"dialogOK":function(d){return "OK"},
"directionEastLetter":function(d){return "E"},
"directionNorthLetter":function(d){return "N"},
"directionSouthLetter":function(d){return "S"},
"directionWestLetter":function(d){return "O"},
"dropletBlock_addOperator_description":function(d){return "Aggiungi due numeri"},
"dropletBlock_addOperator_signatureOverride":function(d){return "Aggiungi un operatore"},
"dropletBlock_andOperator_description":function(d){return "Risponde vero solo quando entrambe le espressioni sono vere e falso in caso contrario"},
"dropletBlock_andOperator_signatureOverride":function(d){return "E operatore booleano"},
"dropletBlock_assign_x_description":function(d){return "Assegna il valore ad una variabile esistente. Per esempio, x=0;"},
"dropletBlock_assign_x_param0":function(d){return "x"},
"dropletBlock_assign_x_param0_description":function(d){return "Il nome della variabile viene assegnato a"},
"dropletBlock_assign_x_param1":function(d){return "valore"},
"dropletBlock_assign_x_param1_description":function(d){return "Il valore della variabile viene assegnato a."},
"dropletBlock_assign_x_signatureOverride":function(d){return "Assegna una variabile"},
"dropletBlock_callMyFunction_description":function(d){return "Chiama una funzione denominata senza parametri"},
"dropletBlock_callMyFunction_n_description":function(d){return "Chiama una funzione denominata che accetta uno o più parametri"},
"dropletBlock_callMyFunction_n_signatureOverride":function(d){return "Chiamare una funzione con parametri"},
"dropletBlock_callMyFunction_signatureOverride":function(d){return "Chiama una funzione"},
"dropletBlock_declareAssign_x_array_1_4_description":function(d){return "Create a variable and initialize it as an array"},
"dropletBlock_declareAssign_x_array_1_4_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_array_1_4_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_array_1_4_param1":function(d){return "1,2,3,4"},
"dropletBlock_declareAssign_x_array_1_4_param1_description":function(d){return "The initial values to the array"},
"dropletBlock_declareAssign_x_array_1_4_signatureOverride":function(d){return "Declare a variable assigned to an array"},
"dropletBlock_declareAssign_x_description":function(d){return "Create a variable for the first time"},
"dropletBlock_declareAssign_x_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_param1":function(d){return "0"},
"dropletBlock_declareAssign_x_param1_description":function(d){return "The initial value of the variable"},
"dropletBlock_declareAssign_x_prompt_description":function(d){return "Create a variable and assign it a value by displaying a prompt"},
"dropletBlock_declareAssign_x_prompt_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_prompt_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_prompt_param1":function(d){return "\"Enter value\""},
"dropletBlock_declareAssign_x_prompt_param1_description":function(d){return "The string the user will see in the pop up when asked to enter a value"},
"dropletBlock_declareAssign_x_prompt_signatureOverride":function(d){return "Prompt the user for a value and store it"},
"dropletBlock_declareAssign_x_signatureOverride":function(d){return "Declare a variable"},
"dropletBlock_divideOperator_description":function(d){return "Dividi due numeri"},
"dropletBlock_divideOperator_signatureOverride":function(d){return "Divide operator"},
"dropletBlock_equalityOperator_description":function(d){return "Test for equality"},
"dropletBlock_equalityOperator_param0":function(d){return "x"},
"dropletBlock_equalityOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_equalityOperator_param1":function(d){return "y"},
"dropletBlock_equalityOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_equalityOperator_signatureOverride":function(d){return "Equality operator"},
"dropletBlock_forLoop_i_0_4_description":function(d){return "Do something multiple times"},
"dropletBlock_forLoop_i_0_4_signatureOverride":function(d){return "for loop"},
"dropletBlock_functionParams_n_description":function(d){return "Create a function with an argument"},
"dropletBlock_functionParams_n_signatureOverride":function(d){return "Function with a Parameter"},
"dropletBlock_functionParams_none_description":function(d){return "Create a function without an argument"},
"dropletBlock_functionParams_none_signatureOverride":function(d){return "Definisci una funzione"},
"dropletBlock_getTime_description":function(d){return "Get the current time in milliseconds"},
"dropletBlock_greaterThanOperator_description":function(d){return "Compare two numbers"},
"dropletBlock_greaterThanOperator_param0":function(d){return "x"},
"dropletBlock_greaterThanOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_greaterThanOperator_param1":function(d){return "y"},
"dropletBlock_greaterThanOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_greaterThanOperator_signatureOverride":function(d){return "Greater than operator"},
"dropletBlock_ifBlock_description":function(d){return "Do something only if a condition is true"},
"dropletBlock_ifBlock_signatureOverride":function(d){return "if statement"},
"dropletBlock_ifElseBlock_description":function(d){return "Do something if a condition is true, otherwise do something else"},
"dropletBlock_ifElseBlock_signatureOverride":function(d){return "if/else statement"},
"dropletBlock_inequalityOperator_description":function(d){return "Test for inequality"},
"dropletBlock_inequalityOperator_param0":function(d){return "x"},
"dropletBlock_inequalityOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_inequalityOperator_param1":function(d){return "y"},
"dropletBlock_inequalityOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_inequalityOperator_signatureOverride":function(d){return "Inequality operator"},
"dropletBlock_lessThanOperator_description":function(d){return "Compare two numbers"},
"dropletBlock_lessThanOperator_param0":function(d){return "x"},
"dropletBlock_lessThanOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_lessThanOperator_param1":function(d){return "y"},
"dropletBlock_lessThanOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_lessThanOperator_signatureOverride":function(d){return "Less than operator"},
"dropletBlock_mathAbs_description":function(d){return "Absolute value"},
"dropletBlock_mathAbs_param0":function(d){return "x"},
"dropletBlock_mathAbs_param0_description":function(d){return "An arbitrary number."},
"dropletBlock_mathAbs_signatureOverride":function(d){return "Math.abs(x)"},
"dropletBlock_mathMax_description":function(d){return "Maximum value"},
"dropletBlock_mathMax_param0":function(d){return "n1, n2,..., nX"},
"dropletBlock_mathMax_param0_description":function(d){return "One or more numbers to compare."},
"dropletBlock_mathMax_signatureOverride":function(d){return "Math.max(n1, n2, ..., nX)"},
"dropletBlock_mathMin_description":function(d){return "Minimum value"},
"dropletBlock_mathMin_param0":function(d){return "n1, n2,..., nX"},
"dropletBlock_mathMin_param0_description":function(d){return "One or more numbers to compare."},
"dropletBlock_mathMin_signatureOverride":function(d){return "Math.min(n1, n2, ..., nX)"},
"dropletBlock_mathRound_description":function(d){return "Round to the nearest integer"},
"dropletBlock_mathRound_param0":function(d){return "x"},
"dropletBlock_mathRound_param0_description":function(d){return "An arbitrary number."},
"dropletBlock_mathRound_signatureOverride":function(d){return "Math.round(x)"},
"dropletBlock_multiplyOperator_description":function(d){return "Multiply two numbers"},
"dropletBlock_multiplyOperator_signatureOverride":function(d){return "Multiply operator"},
"dropletBlock_notOperator_description":function(d){return "Logical NOT of a boolean"},
"dropletBlock_notOperator_signatureOverride":function(d){return "E operatore booleano"},
"dropletBlock_orOperator_description":function(d){return "Logical OR of two booleans"},
"dropletBlock_orOperator_signatureOverride":function(d){return "OR boolean operator"},
"dropletBlock_randomNumber_max_description":function(d){return "Get a random number between 0 and the specified maximum value"},
"dropletBlock_randomNumber_max_param0":function(d){return "max"},
"dropletBlock_randomNumber_max_param0_description":function(d){return "The maximum number returned"},
"dropletBlock_randomNumber_max_signatureOverride":function(d){return "randomNumber(max)"},
"dropletBlock_randomNumber_min_max_description":function(d){return "Get a random number between the specified minimum and maximum values"},
"dropletBlock_randomNumber_min_max_param0":function(d){return "min"},
"dropletBlock_randomNumber_min_max_param0_description":function(d){return "The minimum number returned"},
"dropletBlock_randomNumber_min_max_param1":function(d){return "max"},
"dropletBlock_randomNumber_min_max_param1_description":function(d){return "The maximum number returned"},
"dropletBlock_randomNumber_min_max_signatureOverride":function(d){return "randomNumber(min, max)"},
"dropletBlock_return_description":function(d){return "Return a value from a function"},
"dropletBlock_return_signatureOverride":function(d){return "ritorna"},
"dropletBlock_setAttribute_description":function(d){return "Sets the given value"},
"dropletBlock_subtractOperator_description":function(d){return "Subtract two numbers"},
"dropletBlock_subtractOperator_signatureOverride":function(d){return "Subtract operator"},
"dropletBlock_whileBlock_description":function(d){return "Repeat something while a condition is true"},
"dropletBlock_whileBlock_signatureOverride":function(d){return "while loop"},
"emptyBlocksErrorMsg":function(d){return "Il blocco \"ripeti\" o \"se\" deve avere all'interno altri blocchi per poter funzionare. Assicurati che i blocchi siano inseriti correttamente all'interno del blocco contenente."},
"emptyBlockInFunction":function(d){return "La funzione "+common_locale.v(d,"name")+" ha un input non riempito."},
"emptyBlockInVariable":function(d){return "La variabile "+common_locale.v(d,"name")+" è un input non riempito."},
"emptyFunctionBlocksErrorMsg":function(d){return "Un blocco funzione deve avere all'interno altri blocchi per poter funzionare."},
"emptyFunctionalBlock":function(d){return "C'è un valore mancante in un blocco."},
"emptyTopLevelBlock":function(d){return "Non ci sono blocchi per l'esecuzione. È necessario collegare un blocco al blocco  "+common_locale.v(d,"topLevelBlockName")+"."},
"end":function(d){return "fine"},
"errorEmptyFunctionBlockModal":function(d){return "Ci devono essere dei blocchi all'interno della tua funzione. Clicca su \"Modifica\" e trascina dei blocchi all'interno del blocco verde."},
"errorIncompleteBlockInFunction":function(d){return "Clicca su \"Modifica\" per essere sicuro di non avere alcun blocco mancante nella tua funzione."},
"errorParamInputUnattached":function(d){return "Ricordati di attaccare un blocco a ciascun parametro di ingresso della funzione presente nella tua area di lavoro."},
"errorQuestionMarksInNumberField":function(d){return "Prova a sostituire \"???\" con un valore."},
"errorRequiredParamsMissing":function(d){return "Crea un parametro per la tua funzione cliccando su \"Modifica\" ed aggiungendo i parametri necessari. Trascina i nuovi blocchi dei parametri nella tua definizione di funzione."},
"errorUnusedFunction":function(d){return "Hai creato una funzione, ma non l'hai mai usata nella tua area di lavoro! Clicca su \"Funzioni\" nella cassetta degli attrezzi e assicurati di usarla nel tuo programma."},
"errorUnusedParam":function(d){return "Hai aggiunto un blocco di parametri, ma non l'hai utilizzato nella definizione. Assicurati di utilizzare il parametro cliccando su \"Modifica\" e mettendo il blocco dei parametri all'interno del blocco verde."},
"extraTopBlocks":function(d){return "Avete dei blocchi non collegati."},
"extraTopBlocksWhenRun":function(d){return "Avete dei blocchi non collegati. Intendete collegarli al blocco di avvio?"},
"finalStage":function(d){return "Complimenti! Hai completato l'ultima lezione."},
"finalStageTrophies":function(d){return "Complimenti! Hai completato l'ultima lezione e vinto "+common_locale.p(d,"numTrophies",0,"it",{"one":"un trofeo","other":common_locale.n(d,"numTrophies")+" trofei"})+"."},
"finish":function(d){return "Condividi"},
"generatedCodeInfo":function(d){return "Anche le migliori università (p.es., "+common_locale.v(d,"berkeleyLink")+", "+common_locale.v(d,"harvardLink")+") insegnano la programmazione visuale con i blocchi. Ma i blocchi che metti insieme possono essere rappresentati anche in JavaScript, uno dei linguaggi di programmazione più usati al mondo:"},
"genericFeedback":function(d){return "Verifica il risultato e prova a correggere il tuo programma."},
"hashError":function(d){return "Siamo spiacenti, '%1' non corrisponde ad alcun programma salvato."},
"help":function(d){return "Aiuto"},
"hideToolbox":function(d){return "(Nascondi)"},
"hintHeader":function(d){return "Ecco un suggerimento:"},
"hintRequest":function(d){return "Vedi il suggerimento"},
"hintTitle":function(d){return "Suggerimento:"},
"infinity":function(d){return "Infinito"},
"jump":function(d){return "salta"},
"keepPlaying":function(d){return "Continua a giocare"},
"levelIncompleteError":function(d){return "Stai usando tutti i tipi di blocchi necessari, ma non nel modo giusto."},
"listVariable":function(d){return "lista"},
"makeYourOwnFlappy":function(d){return "Costruisci la tua versione del gioco Flappy"},
"missingBlocksErrorMsg":function(d){return "Prova uno o più dei blocchi che trovi qui sotto per risolvere questo esercizio."},
"nextLevel":function(d){return "Complimenti! Hai completato l'esercizio "+common_locale.v(d,"puzzleNumber")+"."},
"nextLevelTrophies":function(d){return "Complimenti! Hai completato l'esercizio "+common_locale.v(d,"puzzleNumber")+" e vinto "+common_locale.p(d,"numTrophies",0,"it",{"one":"un trofeo","other":common_locale.n(d,"numTrophies")+" trofei"})+"."},
"nextPuzzle":function(d){return "Prosegui"},
"nextStage":function(d){return "Complimenti! Hai completato la lezione "+common_locale.v(d,"stageName")+"."},
"nextStageTrophies":function(d){return "Complimenti! Hai completato la lezione "+common_locale.v(d,"stageName")+" e vinto "+common_locale.p(d,"numTrophies",0,"it",{"one":"un trofeo","other":common_locale.n(d,"numTrophies")+" trofei"})+"."},
"numBlocksNeeded":function(d){return "Complimenti! Hai completato l'esercizio "+common_locale.v(d,"puzzleNumber")+". (Puoi risolverlo meglio usando solo "+common_locale.p(d,"numBlocks",0,"it",{"one":"1 blocco","other":common_locale.n(d,"numBlocks")+" blocchi"})+".)"},
"numLinesOfCodeWritten":function(d){return "Hai appena scritto "+common_locale.p(d,"numLines",0,"it",{"one":"1 linea","other":common_locale.n(d,"numLines")+" linee"})+" di codice!"},
"openWorkspace":function(d){return "Come funziona"},
"orientationLock":function(d){return "Disattiva il blocco dell'orientamento nelle impostazioni del dispositivo."},
"play":function(d){return "inizia"},
"print":function(d){return "Stampa"},
"puzzleTitle":function(d){return "Esercizio "+common_locale.v(d,"puzzle_number")+" di "+common_locale.v(d,"stage_total")},
"readonlyWorkspaceHeader":function(d){return "View only: "},
"repeat":function(d){return "ripeti"},
"resetProgram":function(d){return "Ricomincia"},
"rotateText":function(d){return "Ruota il dispositivo."},
"runProgram":function(d){return "Esegui"},
"runTooltip":function(d){return "Esegui il programma definito dai blocchi presenti nell'area di lavoro."},
"saveToGallery":function(d){return "Salva nella collezione"},
"savedToGallery":function(d){return "Salvato nella collezione!"},
"score":function(d){return "punteggio"},
"shareFailure":function(d){return "Ci dispiace, non possiamo condividere questo programma."},
"showBlocksHeader":function(d){return "Mostra i blocchi"},
"showCodeHeader":function(d){return "Mostra il codice"},
"showGeneratedCode":function(d){return "Mostra il codice"},
"showTextHeader":function(d){return "Visualizza testo"},
"showToolbox":function(d){return "Visualizza strumenti"},
"signup":function(d){return "Iscriviti al corso introduttivo"},
"stringEquals":function(d){return "stringa = ?"},
"subtitle":function(d){return "un ambiente di programmazione visuale"},
"textVariable":function(d){return "testo"},
"toggleBlocksErrorMsg":function(d){return "Devi correggere un errore nel programma prima di poterlo visualizzare come blocco."},
"tooFewBlocksMsg":function(d){return "Stai usando tutti i tipi di blocchi necessari, ma prova usando più blocchi o usandoli diversamente."},
"tooManyBlocksMsg":function(d){return "Questo esercizio può essere risolto con <x id='START_SPAN'/><x id='END_SPAN'/> blocchi."},
"tooMuchWork":function(d){return "Mi hai fatto fare un sacco di lavoro!  Puoi provare a farmi fare meno ripetizioni?"},
"toolboxHeader":function(d){return "Blocchi"},
"toolboxHeaderDroplet":function(d){return "Casella degli strumenti"},
"totalNumLinesOfCodeWritten":function(d){return "Totale complessivo: "+common_locale.p(d,"numLines",0,"it",{"one":"1 linea","other":common_locale.n(d,"numLines")+" linee"})+" di codice."},
"tryAgain":function(d){return "Riprova"},
"tryHOC":function(d){return "Prova l'Ora del Codice"},
"wantToLearn":function(d){return "Vuoi imparare a programmare?"},
"watchVideo":function(d){return "Guarda il video"},
"when":function(d){return "quando"},
"whenRun":function(d){return "quando si clicca su \"Esegui\""},
"workspaceHeaderShort":function(d){return "Area di lavoro: "}};