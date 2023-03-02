// Сделать первый символ заглавным

const ucFirst = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

// console.log(ucFirst('вася'))

// Проверка на спам

const checkSpam = (str) => {
  if (str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")) {
    return true;
  } else {
    return false;
  }
};

// console.log(checkSpam('buy ViAgRA now'))
// console.log(checkSpam('free xxxxx') )
// console.log(checkSpam("innocent rabbit"))

// Усечение строки

const truncate = (str, maxlength) => {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
};

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))

// console.log(truncate("Всем привет!", 20))

// Выделить число

const extractCurrencyValue = (str) => {
  return +str.slice(1);
};
// console.log( extractCurrencyValue('$120') )

const logi = `Кирилл Ро - 6245139р
knownasg0d - 3266347р
bushinr - 2514380р
Друг Стрея - 1663700р
DJдурка - 1197059р
gayральт - 1094733р
DJ Андрей - 1083761р
Колян - 12207$
Аноним - 690109р
По ебалу - 623411р
Esme - 607200р
Alex - 478145р
Лорд - 466130р
Imhotep - 465550р
rusik23031989 - 452472р
Greed - 407396р
Burning Man - 393877р
Душитель Змей - 393073р
Карпатський Вуйко - 381982р
DieHard3r - 369479р
CapitanOrgazmo - 367433р
Черный Храмовник - 358206р
pyzh_wot - 357032р
MELLSTROY - 351200р
Eifaa1 - 342478р
ГачиМан - 341959р
Децл - 335893р
Копченый ковбой - 315650р
БРО - 308628р
Fedorgood - 300000р
Hotfallenangel - 280950р
Ro3etkaTV - 274600р
st52 - 266826р
limb_lebowski - 3440$
ifate - 255421р
Батька - 252567р
Иги Изи - 251550р
stDen - 241400р
mQ - 240700р
Легион - 237400р
Aleks4215 - 233640р
горчица - 227766р
Пожилой медоед - 218955р
MaxMomus - 217100р
Perf - 215403р
talisman39 - 215000р
Котосс - 203595р
drivehardgopro - 201226р
Aksiq - 199530р
Chaneilduine - 195400р
dobydoooo ДОЛОЙ ПЧЁЛ! - 194399р
niko - 191674р
vadim_orlov1337 - 187607р
o4enzhal - 187000р
Тетя Зина - 186697р
SweetDaddY1996 - 180551р
Cardinal - 180200р
Валера сын пангольера - 179872р
old_but_true - 178401р
Украл у папы карточку - 176200р
parenanton - 172700р
Master - 168787р
JoJo_Follower - 166254р
майонез - 162298р
MGuts - 161282р
Варяг - 159000р
Баклажан Билли - 155900р
russbog - 155100р
Белгородский Билли - 153359р
Марсик - 152308р
Viktar - 152274р
Хуйеплет - 152144р
Да-да,я девушка - 152000р
Rusya Hohol - 150912р
Хейтер бананчика - 150832р
Царевич - 147812р
TabyreTka - 147262р
Олимпиец - 146800р
sharpich - 145000р
SevenSwen - 144480р
Кетчуп - 142700р
CrazyRedKItten - 142433р
Баха - 137600р
russianelite77 - 135000р
НЕВЕРФОЛДАКУ - 134967р
DoDick - 134900р
Rainboweggplant - 133628р
jameszub1 - 133468р
Murziusss - 131523р
Димас - 131413р
TinanPMD - 131300р
Мишаня - 131241р
PleaseDeleteGame - 131100р
leonid_1995 - 129000р
Струй топ - 128300р
Lexx - 126600р
twitch. tv/roll_or_feed - 125833р
oriofforest - 125561р
nehren1 - 124700р
Бубон - 124296р
FED - 123094р
acid - 121729р
Dynamite- - 120700р
Derzagan - 119300р
Фанат стрея - 116215р
Лудоман - 115559р
Justick - 115000р
Чапалаха - 114400р
Кондиционер стрея - 113737р
Anaviks - 111856р
ez - 111111р
Александр Викторович - 110530р
Отец - 110223р
Биба и боба - 110212р
DragGgn - 109273р
Антоха - 108600р
Витя - 107710р
EddThe - 1783$
Гачимэн - 105701р
Babaichixa - 104800р
Андрюха - 104519р
Натянутая Улыбка Стрея - 104033р
alkospir1t - 103422р
Никита 30 годиков - 102900р
m1dfree - 102625р
ogcooke - 102400р
Маленький зайчик - 101800р
Михаил Север - 101635р
Мед з домашньої пасіки - 100571р
ame_tenshi - 99174р
Mr.Mingmong - 98230р
Wiseforest - 97594р
Alphanoisy - 97508р
Chermaska - 96980р
VitussBritva - 96261р
ЛЮБИМЫЙ МАЛЬЧИК СТРЕЯ - 95901р
grimberlake - 95500р
coach_tyler22 - 95013р
Дирктор в запое - 94990р
Калипсо - 94900р
Френки 4 пальца - 93400р
Дижей Никита - 93000р
Lavelac - 92552р
янОчка - 91756р
Excellent_dog - 91656р
@yamoneta - 91000р
Хуй мамин - 90834р
polyanskaya (Дочь маминой подруги) - 90501р
Тренер Стрея по Фистингу - 90130р
Пиковый туз - 89600р
iMurakai - 89060р
insc0m - 88750р
speeeeedy_gonzalez - 87542р
NRAVITSA - 87057р
Sankyus - 86466р
говночист - 86100р
Redevran - 84600р
Ultra_Stalin88 - 83435р
Зритель - 83000р
Partypornokillerr - 81900р
FlodaH - 81500р
RabidDog - 81499р
LocoRoco - 81333р
Капрал - 81172р
Khad - 80600р
Пупа - 79400р
Донатор - 79300р
xddnax1 - 78920р
LocationManager - 78628р
адепт Друга Стрея - 78213р
Сасай кудасай. - 78118р
oberhauser - 77550р
Eban - 77463р
Тема из дурдома - 77311р
OldFox43 - 76599р
Ну вот и я ебать - 76516р
RIKKIDI - 76143р
WhisperAss - 75400р
Коцый - 75001р
Инкогнито хоккеист - 75000р
Волосатый Мотороллер - 74326р
Roy Shelby - 74098р
Nulevka1337 - 73930р
ZabWeeZa - 72000р
тагир - 72000р
Эдгар - 71800р
Клоун - 71700р
Железный человек - 71431р
Porka88 - 71356р
AtlanticPoint - 71300р
Володягг - 71050р
Мамка Стримснайпера - 70700р
Барыга - 70000р
Владислав - 69600р
fackall - 69500р
dr_mannhattan - 69478р
Вульва казино - 69400р
Азаз Сморчевич - 68961р
capitanright - 68728р
Sonizka - 68670р
kartabbli0 - 68400р
Pangolin1231 - 68200р
Отрыжка - 68200р
lavellan_dwr - 68000р
Иван - 67932р
БОЛЬНОЙ УБЛЮДОК - 67907р
Бобик - 67400р
Ferdinand_UA - 67300р
bratbratski - 67000р
mikeyhamster - 65850р
0_o - 65800р
dizzerr3 - 65648р
EuropaPluss - 65601р
5v41k4 - 65600р
сержант стрей - 65402р
Stavr - 65375р
Dmitriy Digl - 65369р
kubapadi - 65010р
denver4774 - 64650р
Sleepy - 64604р
cheshireoi - 64566р
Симен 228 - 64430р
unreal - 64333р
Проповедник - 64322р
noname - 64300р
Урфин Джус - 64209р
fr33runnner - 64206р
SAZAN - 64200р
pogpog - 64100р
fingerfold - 64072р
Komrad_Ivan - 63800р
Tati - 63446р
Фистингирующий SUPER FISTING шалунишка - 63400р
Стрей аферист - 63300р
Bedniy_student - 63200р
History Channel - 63100р
Андруша - 63055р
Егор - 62300р
taanni - 62200р
Развел стрея - 61900р
Raccoon - 61675р
Андрей - 61621р
gachiBASS - 61200р
c0dy - 61000р
Number1346798520 - 61000р
vsemvamdam11 - 60559р
vivivvv1 - 60430р
Сантьяго - 60400р
BaNaNcHiK1 - 60317р
Van_Darkholme - 60274р
Gang182 - 60167р
vicrus1 - 60000р
leshacash - 59800р
Mody - 59750р
Максим - 59700р
nro - 59300р
legionmars12 - 59300р
Любитель вечной музыки - 59011р
Nina - 58600р
Diebusters - 58317р
KolyaMajor - 58110р
BlauWave - 58074р
Sk1F - 58001р
Витёк - 58000р
ḾǾŘ干ĬŠ - 57931р
Владимир Евгеньевич - 57800р
ЖЭС - 57700р
Dio - 57500р
den - 57326р
Туда сюда приятно - 56900р
Зипуля - 56900р
Anubisat816 - 56701р
denysdenys - 56300р
melkyvy - 56239р
Патриах KillReal Биба 30СМ - 56230р
Саня - 56228р
MacroDota - 56201р
A1mazik2 - 56156р
Beenar_ - 56100р
maks7777778 - 56076р
Rias - 56000р
RikkRus68 - 55700р
Дед - 55428р
137mmr - 55100р
Иван чай - 55000р
Плесень - 54700р
Начинающий гачист - 54585р
Поклонник - 54500р
Romantic_Hulk - 54200р
Dobrick - 53400р
sleep228 - 53300р
Дэнди - 53001р
Лифтер - 52481р
WannaFly - 52400р
Мак Наббс - 52062р
Suvorov - 52052р
SereGaRaBBit - 52022р
StrayROBOT - 52003р
rclub - 52000р
Yamakasi88 (VHS_Time) - 51700р
Алексей - 51655р
Матрос - 51400р
akilla7 - 51140р
Миша Михаил - 51010р
Dantist - 51000р
Mad_Newb1e - 51000р
Finger - 50055р
D - 50000р
михуил - 49728р
Steyrix - 49503р
RazDva - 49400р
Подписчик - 49333р
Notorious - 49200р
Дядя Леша - 49000р
Мамка стрея - 48700р
marat_116rus - 48300р
Осуждаемый из Торонто - 48250р
iforintegral - 48200р
Добра и позитива! - 48000р
Requ1em - 47800р
420noname - 47555р
Глина228 - 47500р
loaten - 47500р
Дмитрий - 47400р
Ne vladosik - 47400р
idontseeuall - 47258р
Uba-GUB - 47236р
Niskromt - 47200р
Тапок - 47000р
Человек с планеты долбоёбов - 46660р
CDM - 46500р
Kitai193 - 46200р
Ник вуйчич - 46101р
Валентин - 46100р
Kelewra013 - 46000р
Китайский айфон - 45938р
tanded - 45881р
Усатый-полосатый - 45873р
Krixis - 45401р
Кирюха - 45400р
Уралец - 45400р
Gorty - 45376р
Чувашский гачист - 45200р
Пиздец - 45120р
Вафлирен Салдадын - 45000р
0_0 - 44600р
Zoom - 44400р
privetvera - 44228р
Xomgamingxxx - 44223р
Gachist From Gachino - 44100р
maji9bka - 44001р
PlAyBoi cArti - 44000р
Flea - 44000р
jof - 44000р
Знатный Сакс - 43900р
Кощка - 43800р
мишка - 43800р
Глебанатор99 - 43786р
Я огрмаг, нет я - 43600р
Тёмыч - 43500р
Алексей.К - 43485р
Виталик из Амстердама - 43477р
Wulva - 43456р
Osssiris - 43400р
LOL - 43324р
borika bahit - 43300р
Armin_van_love - 43228р
парнишка с вебкама - 43203р
Друг - 43114р
gaaan - 43100р
MarvellousDC - 43000р
Yarikvv - 43000р
GrilleOne - 42800р
Усатый Муравейник - 42660р
Smoke - 42598р
АНОНИМНЫЙ ХУЙ - 42500р
белый нос - 42357р
Аня из 6-Б - 42072р
RullingFan - 42030р
Gleb_123 - 41719р
sm1le91 - 41658р
Тест - 41656р
deadinside - 41600р
hellsaffer - 41500р
Крысоловыч - 41500р
Костян - 41500р
Сын Маминой Собаки - 41238р
Павел-добрый - 41229р
Грибоед - 41000р
Сергей - 40902р
Шэр - 40869р
Stavropolskaya_Elita - 40855р
Zalupka16 - 40600р
Диджей-долбоеб - 40600р
Permaster - 40520р
Nastuhcka - 40500р
segahill - 40004р
ФАНАТ ГЕЙРАЛЬТА - 40000р
fun_dead - 40000р
Эльбрус - 39800р
Solovat - 39400р
romaxaа - 39222р
Стасик - 39200р
RocketBunny - 39200р
Прадос - 39200р
tan4ew - 39072р
mr2old - 39021р
somehate - 39000р
Сосаин - 39000р
007zero - 39000р
leo.mmmmmmm - 38956р
Христофор - 38900р
WordedWord75049 - 38800р
Никитос - 38527р
abakanecc - 38509р
delluminati - 38400р
Веселый мугивара - 38327р
onlynoway - 38300р
ФанатБузовой - 38270р
Ricekice - 38267р
Крысинный стэнд - 38203р
Viktor Popkov - 38166р
Pashashab - 38000р
Sloyak - 37832р
hurrig115 - 37615р
nd2_n0sTra - 37512р
VoloeB - 37492р
КОММЕРС - 37400р
Тренер Михаил - 37400р
Drawen - 37209р
gitphp - 37200р
Саша - 37050р
Осудительный никнейм - 36794р
stankusha - 36600р
Друг_Саєнчика - 36561р
andrew43556 - 36500р
Pavel2821 - 36400р
Lis<3 - 36296р
Seroi - 36200р
Botanic_Panic - 36000р
Nikitaspn03 - 35759р
Roman - 35700р
снежа - 35600р
Егорыч - 35500р
m1xa - 35500р
Rediska - 35369р
Зарабатываю 120 к - 35350р
templar_ditrih - 35200р
Defender - 35200р
Хейтер - 35188р
Brother_from_Serbia - 35104р
ABABABB666 - 35065р
February_1990 - 35020р
О, Пивасик!🍺🍻🍻 - 35000р
suchimauz - 35000р
Арэн Джигарханян - 34966р
Тетя Стрея - 34900р
CVV2 - 34800р
Карл - 34800р
tiparipa - 34793р
Weterun - 34600р
Володька - 34500р
здрасти - 34375р
Sobaka sobaken - 34000р
Jewpen - 34000р
Loner - 33803р
BigFooknBoris - 33800р
Chatsky - 33746р
Dinjvald - 33710р
Душитель усатых крыс - 33613р
Hells_RunneR - 33400р
Крыса усатая - 33400р
burubulka - 33200р
Dana White - 33100р
Daddy_K_TED - 33068р
Юрий - 33001р
Lintas - 33000р
Gazonchikq1 - 33000р
RE0L - 32998р
Dark - 32803р
Сквиртл - 32800р
R - 32777р
Заклинатель Говна - 32600р
Sanshugo - 32511р
Yoda_muster - 32500р
Valdemeer - 32499р
артем сергеевич - 32457р
Выстрел мужчины - 32312р
Burn58 - 32300р
keks1815 - 32300р
MATAVOR - 32269р
Murphy - 32221р
Серега из 2010 - 32200р
СПРЕЙ ОСТУЖАЕТ - 33200р
Усатая Шельма - 32200р
Орбуз - 32100р
boomboomlalafa - 32000р
Бутер Бродский - 32000р
Сергей Рахманинов - 31900р
Spurik - 31893р
doppler effect - 31807р
Tazman4ik - 31800р
artemmet - 535$
vicrus- 31666р
ujgorod - 31603р
Илон Макс - 31601р
ELIPEPTIK_DIK - 31600р
Cooper - 31400р
Friday70 - 31177р
Student617 - 31100р
Пугачева - 31100р
Borzht - 31000р
Matsss - 31000р
Avalor921 - 31000р
Дворник Миша - 30800р
Алекс Чебоксары - 30800р
Малисио - 30683р
польский кукловод - 30680р
Foxy_sexy - 30600р
Meloman - 30300р
misterdedy - 30103р
Difeex - 30100р
Егорка - 30028р
ПринцПенсии - 29959р
Hustle Gang - 29900р
Стонсоседки - 29900р
WERTY - 29800р
Slavanap - 29510р
Akula283 - 29500р
mgcrp_ - 29500р
Киевский жулик - 29400р
Анальный катышек - 29400р
Iv_potapov - 29375р
Кек - 29350р
Artem - 29292р
GS - 29231р
Тамагочик - 29200р
ArtVies - 29200р
noviifanat - 29200р
Гачист шпион - 29200р
Spektra - 29128р
Splinter - 29064р
Третья голова огра - 29000р
AdamFiz - 29000р
Kasianov - 550$
влад - 28744р
lucifer_morningstastar - 28660р
EAGLE - 28400р
igorigorevic7 - 28297р
Уважаю пчёлок и Олега - 28221р
kovaltos - 28100р
impimz - 28084р
захар из зеленограда - 28000р
бандит228 - 28000р
LANA DEL REY FAN - 28000р
ВОЛК 78 РУС - 27918р
Олег - 27900р
Sedrik - 27800р
Inochi189 - 27800р
Шапка - 27712р
Димасик - 27635р
roger49 - 27600р
CUMфорт на DICKотеке - 27600р
sswooshka - 27600р
Ziro - 27599р
Poteha - 27504р
Среднеазиатский националист - 27453р
В первый раз - 27400р
Oh wonder - 27400р
Kalen_228 - 27322р
Vandal_Batz - 27240р
88 - 27200р
Ginnudi - 27200р
leolules - 27186р
VOVA VOLAN4iK - 27149р
Димаакпр - 27100р
Мотороллер Любви - 27100р
Nomy - 27100р
Misathropic_division - 27087р
Главврач Больницы им. Стрея - 27028р
типичный гачист - 27000р
БАТЯ ВИКИ - 27000р
AkoRDeoNiST - 27000р
johnup - 26800р
Farbos - 26669р
vypivoha - 26600р
Molochko - 26600р
mad - 26534р
Kotmuar - 26501р
predator2009 - 26500р
Tseba - 26444р
anal_invader228 - 26400р
Усатый Гуль - 26400р
Узбек - 26355р
Andrewlion34148 - 26300р
Тевтонец - 26300р
Ruby <3 - 26300р
ShaXITT - 26270р
Pikachu - 26200р
Blake - 26200р
Рябух - 26200р
Просто тип казантип - 26199р
sershant - 26154р
Ilya Vlasov - 26100р
k - 26100р
GelikShot - 26100р
HomeOnFire - 26033р
Головорез 2033 - 26028р
shember1 - 26000р
Варна - 25991р
Lexo_o - 25914р
Даниссимо с холодоса - 25800р
ISTANBULDAN - 25800р
Мальчик роман 12 лет - 25755р
7777strel - 25700р
Rosen - 25700р
Rorschach - 25602р
KPOXA 37 - 25600р
Ray0fLife - 25600р
ilyakate - 25501р
ssjedi - 25310р
betbetallin - 25300р
АНЯМЭ - 25200р
Дмитрий Викторович - 25200р
Emelka_in_twitch - 25177р
Мокрая Крыска Стрея - 25175р
Егор Смоленский (2500) ночь - 25150р
Sergey - 25051р
Denius Maximus - 25000р
mrh_vs - 25000р
BEATRIXXX - 24801р
spirit_witch - 24800р
xKenguRUx - 24720р
iwk322 - 24713р
NVN - 24700р
shamil_109 - 24700р
NickSan - 24600р
mercuryd0ta - 24576р
Ваня_от_бетона - 24400р
Лучший инвокер Москвы - 24380р
Бог - 24350р
he1mdal - 24311р
a_totosh - 24300р
Dropik - 24280р
Писька - 24242р
6ix9ine163 - 24170р
L1tvinoff - 24061р
Дом со Злом - 24001р
gixstrum - 24000р
Мяу - 24000р
Ironfrog - 23982р
XL3G1S - 23900р
Redjew19 - 23700р
ko_otan - 23700р
Анальная макрота - 23652р
Юджин - 23601р
VaultBoy00 - 23600р
AlikPryanik - 23554р
Анимэ дядя Богдан - 23469р
russian_rust - 23400р
Историк - 23400р
Ondamic - 23350р
woofNr1 - 23314р
supkke - 23200р
KavAndr - 23200р
tvoi pupsik - 23119р
молодой человек с усатыми музыкантами - 23100р
Asics88 - 23055р
Усатый Эскобар - 23028р
BitKit - 23000р
iPumick - 23000р
Натали - 23000р
Серёжа - 22911р
T32Project - 428$
Rabotyaga - 22771р
Светлое Нефильтрованное - 22757р
Sugar - 22722р
Перец - 22700р
OPEZDUL - 22660р
Даня - 22629р
Я огр маг, нет я - 22600р
Zamanacha - 22600р
обоссанный дерьмом со спермой чмошник - 22596р
BigRoger - 22578р
lil_pivas - 22500р
GoldenPenguin72 - 22464р
glippy_ - 22444р
Lucky - 22415р
Славик - 22400р
Михаил - 22400р
Ilia Askey - 22383р
Сашка Букашка - 22273р
asds - 22254р
batthert - 22228р
Follmer Ivan - 22222р
DieVision - 22221р
GL1n - 22220р
GOSPODINTOP1 - 22200р
Matovii - 22200р
ronn1e_0 - 22143р
Чиломэн - 22141р
Дима Кабина - 22100р
Убивашка1488 - 22001р
Твой брат якут - 22000р
RuinerName - 22000р
Prikaz_ - 22000р
AkvaBioM - 21985р
бабка - 21900р
Hanzo - 21900р
Работяга с 1 завода - 21900р
Фанат - 21800р
Unkonownname007 - 21723р
FROMODESSA - 21711р
Hvsv - 21672р
Dez0s1 - 21600р
MaloyGN - 21528р
Ловлю все стрелы от мираны - 21508р
Cold_West - 21440р
kl1nge - 21400р
Fizruk - 21382р
Ladhice - 21350р
AlexScream - 21322р
Эльдар'ка - 21300р
SleeJow - 21300р
M1nat0_ - 21200р
dzuigatsu - 21200р
гачист кенни - 21200р
alohadanceloveanime - 21090р
Pantom1m - 21049р
NsiDudi - 21000р
erikstevens228 -21000р
TheRealFriendOfStrey228 - 21000р
artik_north - 21000р
Dantalian - 21000р
черный шланг Адекватный - 21000р
Саня жёсткий_adnick_gg - 21000р
GQ - 21000р
Шмонька - 21000р
Дима - 21000р
nemec - 20938р
Giga Strey - 20885р
MoonNight131 - 20801р
Patrol 356 - 20700р
PR1chal - 20600р
Ласточка - 20599р
порн_промоутер - 342$
ave_pikachu - 20559р
dmz - 20555р
007zero - 20533р
Лучик Зла - 20500р
Макс Рокатански - 20403р
Актёр - 20401р
Roshi - 20400р
Черкаш на лице стрея(без негатива) - 20400р
No - 20400р
Durandal - 20400р
Wizzard1tv - 20400р
METOs - 20400р
ТвойДругЖуков - 20325р
blvck_smurff - 20219р
Perfect - 20200р
Поддержка Олега - 20200р
♂Dungeon master♂ - 20111р
МАШИНА - 20100р
Dr_hofmann - 20007р
Bark - 20000р
Atlas - 20000р
Усатый щелкун - 20000р
Zz - 20000р
Алексей Дмитриевич - 20000р
sact0 - 20000р
PabloTrablo - 19900р
Солевой - 19877р
Артем - 19855р
Vanrist - 19830р
Молдованин - 19814р
ЯСНА ХУИТА - 19800р
Усатый Чсв - 19789р
shark28 - 19690р
Nikita - 19644р
Nobukatsu (inquisitor1674) - 19600р
ShuShu96 - 19600р
начальник - 19501р
Sereja_GL1n - 19500р
Micca1984 - 19450р
Скользкая Сопля - 19440р
vaku_sh - 19400р
LuckyDaVe - 19399р
weldervel - 19320р
davidggwp11 - 19300р
кешенька - 19200р
Stepan - 19200р
Weweshnya - 19200р
Без_проблем - 19100р
Александр Канаев - 19100р
Руслан - 19019р
NightmareMoonPony - 19000р
slauner - 19000р
hool1wooly - 19000р
DOK8787 - 19000р
mfcshka - 19000р
Avangar gaming - 19000р
h_y - 19000р
k A i M - 19000р
AmaterasuMogilev - 19000р
Пашок Южный - 19000р
MONT - 19000р
alexae_77 - 18970р
kovi0350 - 18900р
Smokedoutkilaz - 18832р
TREYDAN - 18800р
Shogotto - 18800р
Bardelъ - 18800р
TwIsT-iT - 18780р
Valmer961 - 18691р
king_menin - 18676р
Solo_Pacan - 18674р
awesome - 18648р
Антигачи - 18600р
cosmonaut_number_1 - 18600р
gachi_boss_ - 18600р
Grinex - 18577р
Son_papicha - 18555р
sashka_ua - 18555р
alekseevafap - 18547р
timfeel1991 - 18500р
jBot - 18500р
Kris - 18500р
Yahaa1 - 18409р
Nemozidium - 18400р
raf_228 - 18400р
Lord_Leni228 - 18380р
Крысиный король - 18364р
123 - 18300р
yoursilenced - 18300р
Ffokk - 18280р
Мишкин Медок - 18266р
Андрюша руки клешни - 18211р
cartograff - 18200р
Лечащий врач стрея - 18200р
Волосы на жопе - 18200р
kach_ebach - 18200р
MiSsSaNtRoP - 18200р
Xeinnon - 18193р
Данжендижей - 18156р
Сосамба - 18100р
очкошник - 18100р
MOlya - 18072р
Dude - 18000р
yanechmoo - 18000р
Юрец - 18000р
ТрентПротектор - 18000р
Bosonogiy Gen - 18000р
Надёжный - 18000р
Boy - 18000р
Andriuxa - 17911р
Серега Струков - 17900р
IGOREXA - 17900р
Rohan - 17800р
CaptainStef - 17767р
jeyciay - 17700р
5TRONG - 17657р
Дочь маминой подруги - 17600р
Владислав Flexович - 17600р
Maksim - 17600р
Bala - 17600р
Собачий губернатор - 17428р
Pavel - 17400р
Витя Смузи - 17400р
dim4ikplay - 17400р
Дядя Гача - 17380р
SKI_PATROL - 17380р
Гена - 17364р
Сплинтер - 17356р
Britney - 300$
Strygwyr228 - 17316р
надутыйпакет - 17300р
maks8765 - 17300р
Yasha Lava - 17300р
Донатер - 17300р
Telanor - 17211р
Катонка - 17200р
3dstylee - 17200р
MxTriX - 17200р
цыганенок-усатый - 17200р
Lem - 17200р
JustSlashua - 17146р
Boy next door - 17140р
Luckystar - 17103р
Размер не главное - 17100р
MadTrickZ - 17063р
Голем - 17036р
Мамкин ставочник - 17001р
DiversioSpb - 17000р
pivnoy_golem - 17000р
Артем922 - 17000р
Riki Spenish - 17000р
Shiravadzaki - 17000р
podpivas - 17000р
Akrolik - 17000р
mnml1_1 - 17000р
Стас - 17000р
Full Master - 17000р
MagicBox - 16999р
HoustonDota - 16950р
ЖЕСТКИЙ ТИП - 16900р
gloriass - 16900р
Your name - 16900р
Maksimka - 16886р
Ректотермальный криптоанализатор - 16833р
Profitsport - 16800р
DoKtor - 16800р
skriptonit - 16791р
Мистер Никулидзе - 16786р
Dobryi_vecher_ya_despetcher - 16700р
Invade (Сергей) - 16700р
kotleta_king - 16700р
Кирюха Одесский - 16628р
Илюха Слендер - 16600р
Генерал Гачирский - 16600р
khvan_evgeniy - 16550р
Водитель Лошади - 16511р
Jlenb - 16500р
Pd46 - 16500р
Vladoss0309 - 16500р
Симен228 - 16464р
raingame - 16452р
Юлия - 16444р
Тренер трен - 16400р
Наруто - 16400р
Илюха из Калининграда - 16400р
Деда - 16400р
Железногорские SLAVES - 16400р
cTpumep_6or - 16400р
KillamAll - 16300р
Твой сладенький - 16300р
Никита - 16300р
RachelVDutke - 16250р
dedushkalowkick - 16230р
. - 16223р
relive_45 - 16205р
sheikhov - 16200р
тостер в ванной - 16200р
HRAP777 - 16200р
АДМИН ЧИНЧОПЫ - 16200р
foma - 16100р
Valek_Ufa - 16086р
Cumенщик - 16053р
Илюха Питтсбург - 16040р
Pahanos - 16028р
SILVERH0RN - 16000р
Bosoi - 16000р
Марчик - 16000р
bexawtf - 16000р
aloha_friend - 16000р
Rainbow_Lira - 16000р
Искатель спокойствия - 16000р
choking_python - 16000р
Добрый дядя Подъебай - 16000р
vov4ik_carry - 16000р
Землетряс - 16000р
За справедливость - 16000р
Mokutonslider - 16000р
drug - 15978р
Dennchik - 15905р
Евгений Бучий - 15900р
ilya volkov - 15810р
Вовчик - 15799р
Magnataz - 15773р
Traktor - 15700р
Pangor - 15700р
Unknownname007 - 15682р
LebroFamoza - 15646р
Сухой - 15613р
NeGGaaa - 15600р
Dfkay - 15600р
Iam2ReD - 15600р
Молодой - 15600р
Кирилл Третьяк - 15600р
Перегар - 15600р
Пожилой Струй - 15600р
Лёшка - 15600р
Pablo - 15586р
хуй папин - 15503р
Okolobaha - 15500р
Druce - 15500р
Vahadian - 15500р
Дон Кихот - 15496р
tinker_pie - 15423р
facem0dern - 15411р
rakovina_stream - 15405р
slomaniy_velik - 15400р
George - 15400р
sneezy - 15400р
Xrom - 15400р
Каха - 15400р
Доброжелатель - 15377р
Человек - 15352р
Sasamba_Inc - 15350р
RealPaleMan - 15343р
redhulks - 15300р
АНДРЮХИЧ - 15300р
HuanCarlosGambito - 15276р
неизвестный - 15200р
Yarilo - 15200р
Дядя Рубен из Беларуси - 15200р
Василевс - 15200р
ScarRRRy :D - 15200р
dxt - 15200р
lordromero - 15150р
НПП - 15113р
Dr_Freeman - 15100р
Украинский секретариат - 15100р
panda__po - 15050р
Pirat - 15039р
Yurnero! - 15000р
OMEN_R - 15000р
tellmepg - 15000р
VadimVityaz - 15000р
Omreker_ppp - 15000р
Гэллинджер - 15000р
Супер Виталик - 15000р
Mad_Squirrel - 15000р
ImmortalRain - 15000р
Лутолингер2000 - 15000р
Убивашка - 15000р
begrip123 - 14960р
raduga90 - 14931р
Тучка - 14900р
Marshal0077 - 14875р
Витяня - 14801р
Карявый - 14800р
Прокурор 13 лет - 14788р
ATCman7 - 14773р
Картограф - 14758р
Муз - 14700р
Женёк - 14700р
medeua - 14700р
Погремушка с мясом - 14700р
Stilgar_Do'Urden - 14600р
BOT_Fakel - 14600р
Оргазм пионерки - 14600р
Jst_el - 14600р
Orken - 14600р
Watson - 14570р
shiwallan - 14500р
Вася - 14500р
WaJIoCTb - 14500р
Troub1emak3r - 14500р
Serjo393 - 14500р
OneSecondTo - 14480р
Bourgeoisie Rat - 14465р
Akame - 14400р
cuabz228 - 14400р
лопата - 14400р
okimotos - 14400р
Вайпер Пулемёт - 14400р
Афганец - 14400р
Матушкин Братуха - 14400р
jackyl1 - 14400р
Из Москвы с любовью - 14392р
Senka_faith - 14350р
Ilias - 14324р
Здоровый человек - 14319р
volandinio - 14308р
EMPTY - 14300р
mercurial129 - 14221р
Отчим - 14200р
ВЛАDICK_big - 14200р
vasek - 14200р
Malloys - 14200р
neroyoung - 14185р
fillstup - 14163р
vova4140 - 14160р
M5 - 247$
Gumy - 14100р
MCR1337 - 14100р
sQreen - 14100р
Sherlock Holmes - 14000р
Ges - 14000р
Maltahael - 14000р
Фираз - 14000р
BALU - 14000р
Ночная ёбка - 14000р
Maksonchik from Moscow - 14000р
Pingvin51 - 14000р
Солевой Володя - 14000р
ogogonah - 13983р
Владик - 13900р
Mogu4ij - 13889р
laerku - 13800р
CryptoPapa - 13800р
iSense - 13800р
Gogaster - 13800р
djeieo - 13800р
maga5544 - 13792р
FRiK - 13780р
Брээээн Бронзобарод - 13732р
dimjkee - 13728р
FabBist - 13701р
IDOL.WTF - 13700р
Привет! - 13665р
waszpy 13626р
lakerz94 - 13612р
ims0rry - 13516р
SNile8 - 13515р
FromPolandWithLove - 13466р
Samohin_max - 13465р
VolFrost - 13457р
Каракалпавец - 13411р
siim_90 - 13401р
ДертиДертиHazzi - 13400р
RIko - 13400р
Vasya - 13400р
НЕ Гуф - 13400р
one x - 13400р
Сквирт - 13400р
sargon051 - 13400р
Орлин - 13365р
Mendelvan - 13355р
Tsarvodvortsa - 13300р
ArtOfMagnus - 13300р
msmafia - 13300р
Кавказ - 13300р
Каменный прутень - 13290р
xxx - 13275р
Axl Rose - 13265р
ЭХО Рака - 13250р
VanCock - 13200р
Леха хуй - 13200р
ЛЕЙТЕНАНТ МАГУ - 13200р
Студент истфака - 13200р
bulba_m - 13200р
Bondurent - 13200р
Uebanni4 - 13184р
dekker933 - 13150р
Liquidator - 13135р
Hefner - 13101р
cursedsenge - 13100р
HDC - 13100р
h1ghwater - 13100р
doznac - 13100р
лёша - 13100р
Charmanderchik - 13052р
Orega_Uchiha - 13050р
anon - 13042р
Ник - 13301р
Katletka - 13000р
DJ Misha - 13000р
Л9|шка - 13000р
Argus - 13000р
Alefka - 13000р
Ты Слава Лэбро? - 13000р
Bacek - 13000р
Stendapus - 13000р
ЯуМяу - 13000р
мальчик из шкафа - 13000р
ekzo - 13000р
CAWA_KAMEHb - 12972р
Усатый - 12901р
Плохая девочка - 12900р
ку-ку - 12900р
Veseliy Onanist - 12829р
Ебашу пассажиров дверьми - 12800р
Ez4ky - 12800р
Argel - 12800р
GG bet - 12800р
Бараний Рог - 12800р
RitcheR - 12800р
crucianman - 12700р
AutismGaming1 - 12666р
TTR - 12611р
mnkfff - 12600р
бруда - 12600р
Minimal_Criminal - 12600р
Чпок - 12600р
sunvill640 - 12600р
Ss - 12577р
жибий рыр - 12554р
Виталя - 12524р
sng_boss - 12500р
Хуесперм - 12500р
OrenRivia666 - 12500р
StA1ex - 12500р
ГорячийБобик - 12500р
krekerskiy - 12500р
IceSqueez - 12460р
Vinessss - 12430р
Илюха из Волгограда - 12421р
Маленький бригадир - 12418р
-Matsony- - 12400р
Мама, я Анимешник - 12400р
Сися - 12400р
jetfair - 12400р
hadouken - 12392р
NichtenDrichtenZusammen - 12384р
常に真実 - 12345р
Линтас - 12345р
hohht - 12309р
D1zmorale. - 12300р
9119kob1 - 12300р
Владос попадос - 12300р
AlexLegenda - 12288р
Teddy - 12280р
eezzzman - 12266р
Santey - 12230р
HP - 12221р
StrayObnyal - 12200р
fok_228 - 12200р
Lonely_Kraken - 12200р
naomi - 12200р
Каракос каракас - 12200р
леон - 12200р
Вечно накуреный - 12200р
Газпром - 12200р
Стрей не локс - 12200р
VersusLarin - 12100р
kuragane - 12100р
Skifiron74 - 12100р
Пажилой Кэпопер - 12100р
Mad0zz - 12100р
PAPASTREYA - 12100р
Грязный_Пупок - 12100р
Петька парашютист - 12094р
tipostrimchek - 12073р
Pecelb - 12055р
LmmRus - 12050р
Алекс - 12021р
mplife - 12004р
Василий - 12001р
Хyй мамин - 12001р
Ебошь в голош - 12000р
hvs228 - 12000р
люблю чат (да) - 12000р
qRefi - 12000р
skat2e - 12000р
toxic - 12000р
karusha3 - 12000р
lo4pe - 12000р
Санек15см - 12000р
Paperman - 12000р
PaRRaSSite - 12000р
ko6pa_ha_lliyxupe - 12000р
maine_controll - 12000р
Faust_kzn - 12000р
gariu1995 - 12000р
Lestaar - 12000р
Слесарь Влад - 11944р
ЧилоВек (Чиломен) - 11928р
Сметанка - 11900р
xe1ter97 - 11900р
Sylvester0427 - 11820р
dzitoy - 11810р
Морган - 11810р
Самый Умный - 11802р
Алексей Павлюченков - 11800р
pssinaaa - 11800р
Марат - 11800р
diablo10076 - 11800р
Анальные-пробки-от-олега.com - 11800р
Enakin_ - 11728р
Роналду Раулевич - 11700р
DizzySailor - 11692р
Bostonian - 170$
Nurse rat - 11666р
m1lze - 11627р
deb0rian - 11622р
ЯРОСТЬ - 11600р
Папа Свинский - 11600р
Oshie - 11600р
On1y_One - 11600р
doallin - 11600р
FAp FAp на Стрея - 11564р
Andrey Sеmizorov - 11550р
sergeynixon - 11510р
nursultan277 - 11502р
ARTASMEOW - 11500р
Ajlekzey - 11500р
yap0nec228 - 11500р
UsMen - 11471р
Эндрю - 11449р
Capersi - 11430р
Alkoogolik - 11402р
Cuminusikrisi - 11400р
RAMZES666 - 11400р
deee_mon - 11400р
zxcroot - 11400р
WaterFALLZ - 11400р
Ратибор - 11345р
rushsocool - 11321р
Челик на Славике - 11311р
Петр Степанович - 11300р
Пися В попе - 11300р
Serverych - 11294р
ncux1699 - 11257р
uncldead - 11202р
anarvac - 11200р
Проктолог - 11200р
Flippy - 11200р
Инженер - 11200р
Дочка прокурора - 11200р
Da Roach - 11200р
DHMAX - 11200р
Друг друга легенды- 11200р
oneonezerozerooneonezerozero - 11200р
INVESTOR - 11100р
DJ САНЯ!11! - 11066р
жидкий боря - 11001р
БУБА И КИКИ - 11000р
ква - 11000р
tatarishka - 11000р
Andrii Chyrva - 11000р
Гачист из Харькова - 11000р
Бари алибасов - 11000р
insider - 11000р
Tsvet - 11000р
Blur - 11000р
CapitanBambucherassss - 11000р
Kakuzu - 11000р
Padre - 11000р
Киса - 11000р
Iva - 11000р
Pasha_ebashit - 11000р
Balooo - 11000р
Рофлан Викторович - 11000р
Grindhead_estonia - 10980р
tcsaoo - 10976р
Борис Бритва - 10926р
Павел, просто Павел - 10900р
Черный бандит из СПБ ("АНТИ-СОЛЬ") - 10900р
ОГЛЫ - 10800р
Чоча - 10800р
cyxapuk7233 - 10800р
LVanP - 10800р
Merurg - 10800р
Kenzo03 - 10781р
DeathDropper - 10767р
Asakaro - 10700р
Куколд - 10700р
Sabalyaka - 10700р
Игорек Крамарский - 10700р
Hustlaswaggafox - 192$
LHC - 10692р
Йоба 9000 - 10688р
MakssVel - 10655р
Qwi - 10630р
WRY - 10628р
Эспаньола - 10616р
DeadSiReN - 10601р
Белебека - 10600р
gachispirit - 10600р
Admin colizeum - 10600р
Artemmudakoof - 10600р
fakinmad - 10596р
Кекус - 10574р
Влад Савельев - 10555р
Песич - 10525р
DeaDKennY - 10505р
lTRuESoULl - 10500р
fedor_hyi - 10404р
Солёный кофе - 10401р
DJ Smile - 10400р
LoneDeadman - 10400р
keFEAR - 10400р
Alvertis - 10379р
UKONOS - 10301р
slender0120 - 10228р
Инкогнито - 10222р
NeoPlayer - 10200р
Лебёдка - 10200р
Хрюндель - 10200р
MrReply - 10200р
Мимо кассы - 10200р
Godky1e - 10200р
Re_ver_se - 10200р
Военный Gachist - 10200р
чел - 10200р
YsondrPWNZ - 10200р
Lieflower - 10200р
Nasdaq - 10190р
miniars- 10179р
Илич - 10144р
Тот самый Денис - 10140р
kk - 10108р
zaur_200 - 10100р
Lazio - 10100р
Маруська - 10100р
Парафин - 10100р
Moonshine - 10012р
BilboBaggins - 10011р
Naz - 10007р
Ti1iman - 10007р
z_zmey - 10003р
героин187 - 10000р
Фёдор Сумкин - 10000р
SertPW - 10000р
Адик - 10000р
Серафимыч - 10000р
DJ племени - 10000р
куколд гена - 10000р
EdenTwitch - 10000р
shedav - 10000р
Фифти - 10000р
Kaim - 10000р
Жожа - 10000р
Magistère - 10000р
Костя Ро - 10000р
electrooon322 - 10000р
просто хуй - 10000р
pivas007 - 10000р
Night - 10000р
Robit - 10000р
Evolips - 10000р
IvanTea322 - 10000р
firstprototype23 - 10000р
SHivers - 10000р
Ебырь Стрея Друг Алексея - 10000р
Дед Никита Писька Брита - 10000р
0xDF - 10000р
BATYVIKI - 10000р
PiFFko - 10000р
Pupreme - 10000р
katabbli0 - 10000р
DJ_nariv_na_ochke - 10000р
VVP - 10000р
kysokgovna228 - 10000р
pimushka - 10000р
Виталик - 10000р
timooon69 - 10000р
Октавиан Август - 10000р
Алёно4ка - 10000
Шериф - 10000р
Денька - 10000р
Sweezy - 10000р
Naruto - 10000р
Wesd14554 - 9976р
Дед стрея - 9962р
Леся - 9925р
Крысиный фанат - 9921р
Volevoy - 9905р
Илья - 9900р
bellringer666 - 9900р
Kane - 9866р
Развел на внимание - 9849р
Ваня отчислен - 9800р
Deponishe - 9800р
vipazer - 9800р
CheGuevara - 9800р
andrey1669 - 9800р
Провинциальный быдлан - 9800р
Гачист из Свердловска - 9800р
vladalien - 9768р
Носочек - 9757р
Yar_ss - 9750р
Roehox - 9750р
КМС по кунилингусу - 9746р
Спрайт - 9743р
babycallmemaybe - 9729р
Jopa v Mile - 9700р
Daily - 9700р
Kiruha - 9659р
solevoygermes - 9630р
soni03 - 9628р
MoonFlip - 9611р
Архиепископ Петр - 9604р
13летний фанат - 9600р
itsindolence - 9600р
Volez - 9600р
Саня322 - 9600р
Avis - 9600р
Sho? - 9600р
Danilyuk - 9600р
hook - 9600р
dercach112 - 9549р
natasredrum - 9508р
Ричардо - 9500р
Imbadon123 - 9500р
Pomidog - 9500р
Gouj v ebalo)0)0) - 9500р
overdass - 9500р
Колчан - 9460р
MrQua03 - 9456р
Histirian - 9453р
Психиатр - 9422р
Vadim - 9421р
Я люблю стрея и маму - 9401р
Гарик Сатаник - 9400р
Mantika - 9400р
Dante07RUS - 9400р
Владлен - 9400р
Wzyee21 - 9400р
Tassael - 9400р
rofled - 9400р
Толик Кувалда - 9400р
Евгений Олегович - 9385р
cyn4ukkk - 9355р
Shady - 9355р
Виктор - 9332р
MaR4uk37773 - 9331р
сосед стрея - 9320р
Paren_mami_Olega - 9309р
ПО ФАКТУ - 9300р
Черный бандит из СПБ - 9300р
Всегда сливаю - 9290р
БровиБрежнева - 9250р
Vlame - 9228р
LIKE2LICK - 9228р
Arg_agr - 9211р
SABaton - 9201р
Усатый щелкун - 9200р
mata - 9200р
Жириный Пчеловик - 9200р
IAD - 9200р
Amg - 9200р
Alfaslav - 9200р
Tesla1111 - 9200р
Rem228 - 9200р
Leather man - 9200р
Эдуард - 9200р
Транс Сибирский - 9199р
Друг Бавленцева - 9125р
Крабовая палочка - 9112р
Shu_Chu - 9109р
Удушающий на ногу - 9101р
speedwagoooooooon - 9100р
самоубийца - 9100р
Вежливый Хам - 9100р
cycl1ck - 9100р
Аноним 1985 - 9100р
k0pae4 - 9100р
ladno_smazal - 9100р
Neron1406 - 9100р
bambakaramba - 9100р
Aijji - 9100р
Black hungry shark - 9097р
Tomass - 9050р
ХЕР С ГОРЫ - 9028р
Кирилл - 9001р
Фанат тейлор(foxsays9) - 9000р
Corruption - 9000р
босс своей качалки - 9000р
Усатый Гачист - 9000р
NunamexDxD - 9000р
Sasfas78 - 9000р
сапк - 9000р
AUEX - 9000р
пепега милитарист - 9000р
Храмая Гуля - 9000р
andrewflyagaric - 9000р
FistingAss - 9000р
РукоПашка - 9000р
suhaia_vaflia - 9000р
Kitkat - 9000р
ThomasWayneOfficial - 9000р
Sasha_Remz - 9000р
юрист центробанка - 9000р
Ютубный червь - 9000р
бездарность - 9000р
Далбаёб - 9000р
D1naryus - 9000р
dan_sw6 - 9000р
Фермер 228 - 9000р
nande1 - 9000р
ALiM - 9000р
tiktok:rozboro - 8999р
AmBaL116rus - 8999р
Double.S Music - 8939р
никитосик - 8930р
mornystarx - 8911р
GGhera - 8906р
LilMadPulp - 8900р
keppersilence - 8900р
Jimbo - 8850р
Старый говноед - 8800р
lovely_doughnut - 8800р
Razval - 8800р
H4hain - 8800р
Montekki - 8800р
КАЛИФОРНИЯ ПОЛИС ДИПАРТМЕНТ - 8800р
dark_guardd - 8800р
Зизинька - 8800р
Человек Навальный - 8750р
Timur - 8747р
Птичко - 8733р
Апатитский гуляка - 8733р
АМ из катки - 8724р
Сиська таракана - 8700р
JenyaHeal - 8700р
ЧЛЕНОВАГИН - 8700р
Cutu3enQ - 8700р
Anastasia - 8700р
Гачи слейв - 8690р
grandfinal - 8600р
ХВОЙНАЯ СВЕЖЕСТЬ - 8600р
phosphorita - 8600р
Фанат Зипули - 8600р
Эвис Рейтер - 8600р
jk.jenkins - 8600р
Shogo - 8600р
o6m0p0k - 8589р
Deutsche Biene - 8517р
Jopa - 8510р
Mote - 8500р
сладкий мальчик стрея - 8500р
Кира - 8500р
Gabe - 8485р
kirbo - 8433р
Спайк - 8432р
Kolyunya - 8400р
IQ - 8400р
Донатер лучшего стримера - 8400р
vost25 - 8400р
MONEY KING - 8400р
AdvanceTM - 8400р
Виктория - 8400р
Ебал рот стрея - 8400р
Tokha96 - 8400р
Жандарм Жулик - 8400р
tony_redgraive - 8400р
LeVlaSer - 8400р
Kizzon7 - 8400р
HoodRich - 8347р
sanjka322 - 8331р
Sanygusli - 8300р
kartenee - 8300р
Бочка симена - 8300р
Ставропольский крот - 8300р
МИХАЛКРД - 8300р
КарКарыч - 8300р
Павел Храмов - 8300р
fucking bad - 8300р
Юнит - 8260р
Starpixe - 8200р
Loony - 8200р
Kostas - 8200р
ax1s - 8200р
Scream - 8200р
Gachi Guy - 8200р
Cашкооо - 8200р
Вафлёрша - 8200р
Кукурузная смазка - 8200р
7 палата - 8200р
Виталя Джокер - 8200р
EgoRusso - 8200р
Весёлый Пылесос - 8200р
Meow - 8200р
andreyoko - 8200р
Потрах KillReal - 8200р
сладкий фингер - 8200р
Mortalvasco - 8200р
Мешочек Аутизма - 8174р
Магнус который не смог - 8165р
Димка бельгиец - 8116р
Не осудительный ник - 8111р
zakovirka - 8100р
nikita__type - 8100р
Хуйплет - 8100р
Ебаклак - 8100р
Игорь - 8064р
CoCiCka - 8002р
bailrocks - 8001р
Панда Не Медведь - 8000р
Hlebokot - 8000р
Олег К - 8000р
Евгений Игоревич - 8000р
Scarecrovw - 8000р
Jaren98 - 8000р
kraasava - 8000р
pl0dica - 8000р
𷄓 - 8000р
lostlegacy5 - 8000р
Enm.Sage - 8000р
Коронный Вирус - 8000р
lord_demon93 - 8000р
neonium322 - 8000р
Komatoz - 8000р
woodywodpikir - 8000р
ANONYMUS - 8000р
нефтяной магнат - 8000р
Fil - 8000р
Yaetiya - 8000р
Андри - 8000р
B0rChe - 8000р
GeRoi_Ha_GeRoiHe - 8000р
Face To Face - 8000р
polpuq - 8000р
ф - 8000р
Коростень - 8000р
lihoruss - 8000р
AlexWenzzz - 8000р
Morrowi - 8000р
Я люблю маму и стрея - 8000р
hopohopo - 8000р
Vladimir - 8000р
Шизик - 8000р
paskdlsin - 8000р
Твой кент - 8000р
Шмель - 8000р
molemer - 7998р
Дядя Кирилл - 7933р
3vilby - 7921р
Мусарок - 7900р
Asket_88 - 7900р
popotryas - 7830р
Deus_Sapienties - 7826р
Vilkillian - 7802р
urod - 7800р
Пожилая жертва стрея - 7800р
Витек_К - 7800р
Unequal HQ - 7800р
Ryzshy - 7800р
Kirill - 7800р
Носок - 7800р
Obrazinka - 7800р
夜明けに - 7777р
Adept - 7755р
Gennady - 7700р
TeaTimeTho - 7700р
ru5t4m - 7700р
apple_mean - 7700р
Обзыватель - 7676р
GERMAN OLEGOVICH - 7664р
Володя - 7660р
Yourbunnywroote - 7630р
sadboywithsmileonface - 7610р
Никита Козик(Kazicks7) - 7603р
Your Destiny - 7601р
Фулл саппорт войд - 7601р
BonyX - 7600р
Глас Народа - 7600р
Lanius - 7600р
muradin001 - 7600р
hothead4666 - 7600р`;

const func = (str) => {
  let arr = []
  let target = '\n'

  let target2 = ' - '
  let pos = 0
  let pos2 = 0
  let sum = 0;

  while (true) {
    let foundPos2 = str.indexOf(target2, pos2);
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    if (foundPos2 == -1) break;
    let newStr = str.slice(foundPos2 + 3, foundPos)
  
    // console.log( newStr );

    if (newStr[newStr.length-1] == '$') {
      newStr = (+newStr.slice(0, [newStr.length-1]) ) * 74
      arr.push(+newStr)
    } else {
      newStr = (+newStr.slice(0, [newStr.length-1]) )
      arr.push(+newStr)
    }
    pos = foundPos + 1; 
    pos2 = foundPos2 + 1
  }
  for (let str of arr) {
    sum += str
  }
  console.log(arr)
  console.log(sum)
};

func(logi)