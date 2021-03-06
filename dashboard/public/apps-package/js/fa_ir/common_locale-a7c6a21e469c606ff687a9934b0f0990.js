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
"and":function(d){return "و"},
"backToPreviousLevel":function(d){return "برگرد به سطح قبلی"},
"blocklyMessage":function(d){return "بلوکی"},
"blocks":function(d){return "بلوک ها"},
"booleanFalse":function(d){return "ناصحیح"},
"booleanTrue":function(d){return "صحیح"},
"catActions":function(d){return "اقدامات"},
"catColour":function(d){return "رنگ"},
"catLists":function(d){return "فهرست‌ها"},
"catLogic":function(d){return "منطق"},
"catLoops":function(d){return "حلقه ها"},
"catMath":function(d){return "ریاضی"},
"catProcedures":function(d){return "توابع"},
"catText":function(d){return "متن"},
"catVariables":function(d){return "متغیرها"},
"clearPuzzle":function(d){return "دوباره شروع کنید"},
"clearPuzzleConfirm":function(d){return "این کار معما را به حالت ابتدایی تنظیم خواهد کرد و تمام بلوک هایی که شما اضافه کردید یا تغییر داده اید را حذف خواهد کرد."},
"clearPuzzleConfirmHeader":function(d){return "آیا مطمئنی که می خواهی دوباره شروع کنی؟"},
"codeMode":function(d){return "کد"},
"codeTooltip":function(d){return "کد جاوا اسکریپت تولید شده رو ببین."},
"continue":function(d){return "ادامه بده"},
"defaultTwitterText":function(d){return "ببین من چی ساختم"},
"designMode":function(d){return "طراحی"},
"dialogCancel":function(d){return "لغو کن"},
"dialogOK":function(d){return "باشه"},
"directionEastLetter":function(d){return "شرق"},
"directionNorthLetter":function(d){return "شمال"},
"directionSouthLetter":function(d){return "جنوب"},
"directionWestLetter":function(d){return "غرب"},
"dropletBlock_addOperator_description":function(d){return "اضافه کردن دو عدد"},
"dropletBlock_addOperator_signatureOverride":function(d){return "اضافه کردن اپراتور"},
"dropletBlock_andOperator_description":function(d){return "تنها در حالتی که هر دو عبارت صحیح یا هردو غلط باشند نتیجه صحیح بازمی گرداند"},
"dropletBlock_andOperator_signatureOverride":function(d){return "عملگر بولی AND"},
"dropletBlock_assign_x_description":function(d){return "یک مقدار به یکی از متغییر های موجود بدهید. برای مثال x=0;"},
"dropletBlock_assign_x_param0":function(d){return "طول (x)"},
"dropletBlock_assign_x_param0_description":function(d){return "The variable name being assigned to"},
"dropletBlock_assign_x_param1":function(d){return "value"},
"dropletBlock_assign_x_param1_description":function(d){return "The value the variable is being assigned to."},
"dropletBlock_assign_x_signatureOverride":function(d){return "اختصاص یک متغیر"},
"dropletBlock_callMyFunction_description":function(d){return "تابعی را صدا میزند که هیچ پارامتری دریافت نمیکند"},
"dropletBlock_callMyFunction_n_description":function(d){return "تابعی را صدا میزند که یک یا چند پارامتر دریافت می کند"},
"dropletBlock_callMyFunction_n_signatureOverride":function(d){return "تابعی را صدا بزن که پارامتر دریافت می کند"},
"dropletBlock_callMyFunction_signatureOverride":function(d){return "صدا زدن یک تابع"},
"dropletBlock_declareAssign_x_array_1_4_description":function(d){return "Create a variable and initialize it as an array"},
"dropletBlock_declareAssign_x_array_1_4_param0":function(d){return "طول (x)"},
"dropletBlock_declareAssign_x_array_1_4_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_array_1_4_param1":function(d){return "1,2,3,4"},
"dropletBlock_declareAssign_x_array_1_4_param1_description":function(d){return "The initial values to the array"},
"dropletBlock_declareAssign_x_array_1_4_signatureOverride":function(d){return "Declare a variable assigned to an array"},
"dropletBlock_declareAssign_x_description":function(d){return "Create a variable for the first time"},
"dropletBlock_declareAssign_x_param0":function(d){return "طول (x)"},
"dropletBlock_declareAssign_x_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_param1":function(d){return "0"},
"dropletBlock_declareAssign_x_param1_description":function(d){return "The initial value of the variable"},
"dropletBlock_declareAssign_x_prompt_description":function(d){return "Create a variable and assign it a value by displaying a prompt"},
"dropletBlock_declareAssign_x_prompt_param0":function(d){return "طول (x)"},
"dropletBlock_declareAssign_x_prompt_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_prompt_param1":function(d){return "\"Enter value\""},
"dropletBlock_declareAssign_x_prompt_param1_description":function(d){return "The string the user will see in the pop up when asked to enter a value"},
"dropletBlock_declareAssign_x_prompt_signatureOverride":function(d){return "Prompt the user for a value and store it"},
"dropletBlock_declareAssign_x_signatureOverride":function(d){return "Declare a variable"},
"dropletBlock_divideOperator_description":function(d){return "Divide two numbers"},
"dropletBlock_divideOperator_signatureOverride":function(d){return "Divide operator"},
"dropletBlock_equalityOperator_description":function(d){return "Test for equality"},
"dropletBlock_equalityOperator_param0":function(d){return "طول (x)"},
"dropletBlock_equalityOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_equalityOperator_param1":function(d){return "y"},
"dropletBlock_equalityOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_equalityOperator_signatureOverride":function(d){return "Equality operator"},
"dropletBlock_forLoop_i_0_4_description":function(d){return "Do something multiple times"},
"dropletBlock_forLoop_i_0_4_signatureOverride":function(d){return "for loop"},
"dropletBlock_functionParams_n_description":function(d){return "Create a function with an argument"},
"dropletBlock_functionParams_n_signatureOverride":function(d){return "Function with a Parameter"},
"dropletBlock_functionParams_none_description":function(d){return "Create a function without an argument"},
"dropletBlock_functionParams_none_signatureOverride":function(d){return "Function Definition"},
"dropletBlock_getTime_description":function(d){return "Get the current time in milliseconds"},
"dropletBlock_greaterThanOperator_description":function(d){return "Compare two numbers"},
"dropletBlock_greaterThanOperator_param0":function(d){return "طول (x)"},
"dropletBlock_greaterThanOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_greaterThanOperator_param1":function(d){return "y"},
"dropletBlock_greaterThanOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_greaterThanOperator_signatureOverride":function(d){return "Greater than operator"},
"dropletBlock_ifBlock_description":function(d){return "Do something only if a condition is true"},
"dropletBlock_ifBlock_signatureOverride":function(d){return "if statement"},
"dropletBlock_ifElseBlock_description":function(d){return "Do something if a condition is true, otherwise do something else"},
"dropletBlock_ifElseBlock_signatureOverride":function(d){return "if/else statement"},
"dropletBlock_inequalityOperator_description":function(d){return "Test for inequality"},
"dropletBlock_inequalityOperator_param0":function(d){return "طول (x)"},
"dropletBlock_inequalityOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_inequalityOperator_param1":function(d){return "y"},
"dropletBlock_inequalityOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_inequalityOperator_signatureOverride":function(d){return "Inequality operator"},
"dropletBlock_lessThanOperator_description":function(d){return "Compare two numbers"},
"dropletBlock_lessThanOperator_param0":function(d){return "طول (x)"},
"dropletBlock_lessThanOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_lessThanOperator_param1":function(d){return "y"},
"dropletBlock_lessThanOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_lessThanOperator_signatureOverride":function(d){return "Less than operator"},
"dropletBlock_mathAbs_description":function(d){return "Absolute value"},
"dropletBlock_mathAbs_param0":function(d){return "طول (x)"},
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
"dropletBlock_mathRound_param0":function(d){return "طول (x)"},
"dropletBlock_mathRound_param0_description":function(d){return "An arbitrary number."},
"dropletBlock_mathRound_signatureOverride":function(d){return "Math.round(x)"},
"dropletBlock_multiplyOperator_description":function(d){return "Multiply two numbers"},
"dropletBlock_multiplyOperator_signatureOverride":function(d){return "Multiply operator"},
"dropletBlock_notOperator_description":function(d){return "Logical NOT of a boolean"},
"dropletBlock_notOperator_signatureOverride":function(d){return "AND boolean operator"},
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
"dropletBlock_return_signatureOverride":function(d){return "بازگشت"},
"dropletBlock_setAttribute_description":function(d){return "Sets the given value"},
"dropletBlock_subtractOperator_description":function(d){return "Subtract two numbers"},
"dropletBlock_subtractOperator_signatureOverride":function(d){return "Subtract operator"},
"dropletBlock_whileBlock_description":function(d){return "Repeat something while a condition is true"},
"dropletBlock_whileBlock_signatureOverride":function(d){return "while loop"},
"emptyBlocksErrorMsg":function(d){return "بلوکهای \"تکرار\" یا \"شرطی\" برای کار کردن نیاز به بلوکهای دیگری در داخل خود دارند. مطمئن شوید که بلوک داخلی به درستی درون بلوک اصلی قرار گرفته است."},
"emptyBlockInFunction":function(d){return "The function "+common_locale.v(d,"name")+" has an unfilled input."},
"emptyBlockInVariable":function(d){return "The variable "+common_locale.v(d,"name")+" has an unfilled input."},
"emptyFunctionBlocksErrorMsg":function(d){return "بلوک تابع برای به کار افتادن نیاز به بلوک های دیگری در داخل خود دارد."},
"emptyFunctionalBlock":function(d){return "شما یک بلوک با یک ورودی پر نشده دارید."},
"emptyTopLevelBlock":function(d){return "There are no blocks to run. You must attach a block to the "+common_locale.v(d,"topLevelBlockName")+" block."},
"end":function(d){return "پایان"},
"errorEmptyFunctionBlockModal":function(d){return "باید بلوکهایی در تعریف تابع تو باشند. روی ویرایش کلیک کن و بلوکها را به داخل بلوک سبز بکش."},
"errorIncompleteBlockInFunction":function(d){return "روی ویرایش کلیک کن که مطمئن بشوی داخل تعریف تابعت هیچ بلوکی را از قلم نینداختی."},
"errorParamInputUnattached":function(d){return "یادت باشه که روی بلوک تابع در فضای کاریت، به هر پارامتر ورودی یک بلوک بچسبانی."},
"errorQuestionMarksInNumberField":function(d){return "سعی کنید به جای \"؟؟؟\" یک مقدار قرار دهید ."},
"errorRequiredParamsMissing":function(d){return "یک پارامتر برای تابعت بساز با کلیک کردن روی \"ویرایش\" و اضافه کردن پارامترهای لازم. بلوکهای پارامترهای جدید را بکش به داخل تعریف تابعت."},
"errorUnusedFunction":function(d){return "شما یک تابع ساختید اما هرگز آن را در فضای کاری خود استفاده نکردید! روی \"توابع\" در جعبه ابزار کلیک کنید و از آن در برنامه خود استفاده کنید."},
"errorUnusedParam":function(d){return "تو یک بلوک پارامتر اضافه کردی اما از آن در تعریف استفاده نکردی. مطمئن شو که از پارامترت استفاده میکنی با کلیک کردن روی \"ویرایش\" و قرار دادن بلوک پارامتر داخل بلوک سبز."},
"extraTopBlocks":function(d){return "شما بلوک های جدا از هم داری."},
"extraTopBlocksWhenRun":function(d){return "بلوک های جدا از هم داری. آیا می خواهی که این ها را به بلوک \"when run\" وصل کنی؟"},
"finalStage":function(d){return "آفرین! شما مرحله‌ی نهایی را به پایان رساندید."},
"finalStageTrophies":function(d){return "آفرین! شما مرحله‌ی نهایی را به پایان رساندید و برنده‌ی "+common_locale.p(d,"numTrophies",0,"fa",{"one":"یک جایزه","other":common_locale.n(d,"numTrophies")+" جایزه"})+" شدید."},
"finish":function(d){return "تمام کن"},
"generatedCodeInfo":function(d){return "دانشگاههای برتر نیز کدنویسی بر اساس بلوک ها را آموزش می دهند (مثل "+common_locale.v(d,"berkeleyLink")+" و "+common_locale.v(d,"harvardLink")+"). اما در پشت پرده، بلوک هایی که شما سر هم کرده اید را می توان به زبان جاوا اسکریپت نشان داد، که پر استفاده ترین زبان کدنویسی در دنیاست:"},
"genericFeedback":function(d){return "ببین چطور به اینجا رسیدی، و سعی کن برنامه ات را درست کنی."},
"hashError":function(d){return "با عرض پوزش، '%1' با هیچ کدام از برنامه‌های ذخیره شده مطابقت ندارد."},
"help":function(d){return "راهنما"},
"hideToolbox":function(d){return "(پنهان کردن)"},
"hintHeader":function(d){return "این هم یک راهنمایی:"},
"hintRequest":function(d){return "راهنمایی را ببینید"},
"hintTitle":function(d){return "راهنمایی:"},
"infinity":function(d){return "بی نهایت"},
"jump":function(d){return "پرش"},
"keepPlaying":function(d){return "به بازی کردن ادامه دهید"},
"levelIncompleteError":function(d){return "شما همه‌ی بلوک‌های مورد نیاز را بکار بردید، ولی نه به روش درست."},
"listVariable":function(d){return "فهرست"},
"makeYourOwnFlappy":function(d){return "پرنده ی فلاپیِ خودتان را بسازید"},
"missingBlocksErrorMsg":function(d){return "برای حل این پازل، یک یا چند تا از بلوک‌های زیر را بکار ببرید."},
"nextLevel":function(d){return "آفرین! شما پازل "+common_locale.v(d,"puzzleNumber")+" را به پایان رساندید."},
"nextLevelTrophies":function(d){return "آفرین! شما معمای "+common_locale.v(d,"puzzleNumber")+" را به پایان رساندید و برنده‌ی "+common_locale.p(d,"numTrophies",0,"fa",{"one":"یک جایزه","other":common_locale.n(d,"numTrophies")+" جایزه"})+" شدید."},
"nextPuzzle":function(d){return "معمای بعدی"},
"nextStage":function(d){return "آفرین! شما "+common_locale.v(d,"stageName")+" را به پایان رساندید."},
"nextStageTrophies":function(d){return "آفرین! شما مرحله‌ی "+common_locale.v(d,"stageName")+" را به پایان رساندید و برنده‌ی "+common_locale.p(d,"numTrophies",0,"fa",{"one":"یک جایزه","other":common_locale.n(d,"numTrophies")+" جایزه"})+" شدید."},
"numBlocksNeeded":function(d){return "آفرین! شما پازل "+common_locale.v(d,"puzzleNumber")+" را به پایان رساندید. (اگرچه می‌توانستید تنها "+common_locale.p(d,"numBlocks",0,"fa",{"one":"یک بلوک","other":common_locale.n(d,"numBlocks")+" بلوک"})+" بکار ببرید.)"},
"numLinesOfCodeWritten":function(d){return "شما همین الان  "+common_locale.p(d,"numLines",0,"fa",{"one":"یک خط","other":common_locale.n(d,"numLines")+" خط"})+" کد نوشتید!"},
"openWorkspace":function(d){return "چگونه کار می کند"},
"orientationLock":function(d){return "قفل جهت یابی را در تنظیمات دستگاه باز کنید."},
"play":function(d){return "بازی کن"},
"print":function(d){return "چاپ کن"},
"puzzleTitle":function(d){return "پازل "+common_locale.v(d,"puzzle_number")+"  از"+common_locale.v(d,"stage_total")},
"readonlyWorkspaceHeader":function(d){return "View only: "},
"repeat":function(d){return "تکرار کن"},
"resetProgram":function(d){return "تنظیم مجدد"},
"rotateText":function(d){return "دستگاهت  را بچرخان."},
"runProgram":function(d){return "اجرا کن"},
"runTooltip":function(d){return "برنامه‌ای را اجرا کن که با بلوک‌های داخل فضای کار تعریف شده."},
"saveToGallery":function(d){return "در گالری ذخیره کن"},
"savedToGallery":function(d){return "در گالری ذخیره شد!"},
"score":function(d){return "امتیاز"},
"shareFailure":function(d){return "با عرض پوزش، ما نمیتوانیم این برنامه را به اشتراک بگذاریم."},
"showBlocksHeader":function(d){return "بلوک‌ها را نشان بده"},
"showCodeHeader":function(d){return "کد را نشان بده"},
"showGeneratedCode":function(d){return "نمایشِ کد"},
"showTextHeader":function(d){return "نمایش متن"},
"showToolbox":function(d){return "نمایش جعبه ابزار"},
"signup":function(d){return "برای دوره‌ی مقدماتی نام نویسی کنید"},
"stringEquals":function(d){return "رشته =?"},
"subtitle":function(d){return "یک محیط برنامه نویسیِ دیداری"},
"textVariable":function(d){return "متن"},
"toggleBlocksErrorMsg":function(d){return "شما باید یک خطا را در برنامه خود تصحیح کنید پیش از آنکه بتواند به شکل یک بلوک نشان داده شود."},
"tooFewBlocksMsg":function(d){return "شما از همه‌ی بلوک‌های لازم داری استفاده میکنی، ولی برای حل این پازل تعداد بیشتری از این بلوک‌ها را استفاده کن."},
"tooManyBlocksMsg":function(d){return "این معما را می‌توان با بلوکهای <x id='START_SPAN'/><x id='END_SPAN'/> حل کرد."},
"tooMuchWork":function(d){return "شما منو مجبور به انجام مقدار زیادی کار کردید. میشه تعداد تکرار رو کمتر کنید؟"},
"toolboxHeader":function(d){return "بلوک ها"},
"toolboxHeaderDroplet":function(d){return "جعبه ابزار"},
"totalNumLinesOfCodeWritten":function(d){return "در مجموع: "+common_locale.p(d,"numLines",0,"fa",{"one":"یک خط","other":common_locale.n(d,"numLines")+" خط"})+" کد."},
"tryAgain":function(d){return "دوباره تلاش کن"},
"tryHOC":function(d){return "ساعتِ کد نویسی را امتحان کنید"},
"wantToLearn":function(d){return "آیا می‌خواهید کد نویسی را یاد بگیرید؟"},
"watchVideo":function(d){return "ویدیو را ببینید"},
"when":function(d){return "وقتی"},
"whenRun":function(d){return "زمان اجرا"},
"workspaceHeaderShort":function(d){return "محیط کار: "}};