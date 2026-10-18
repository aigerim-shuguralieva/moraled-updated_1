// Lesson topics per age band, taken from "KAO Kyrgyzstan.xlsx" (Grades 1-4).
// Each title is { kg, ru, en }: the Kyrgyz title is the original from the spreadsheet,
// ru and en are translations (to be proofread by native speakers).
// `months` follows the grade-table order: Sept Caring, Oct Respect, Nov Trustworthiness,
// Dec Responsibility, Jan Fairness, Feb Citizenship, Mar Perseverance, Apr Leadership, May Self-Discipline.

const T = (kg, ru, en) => ({ kg, ru, en });

const teacher = T('Мугалим – экинчи ата-энем', 'Учитель – вторые родители', 'The teacher is my second parent');
const goodBad = T('Жакшы деген эмне? Жаман деген эмне?', 'Что такое хорошо? Что такое плохо?', 'What is good? What is bad?');
const routine = T('Окуучулук күндөлүк режими', 'Ежедневный режим школьника', 'A student’s daily routine');
const cleanWater = T('Таза болсоң суудай бол, баарын жууп кетирген', 'Будь чистым, как вода: она всё смывает', 'Be clean like water, which washes everything away');
const truthLies = T('Чындык жана жалган', 'Правда и ложь', 'Truth and lies');
const tidy = T('Тазалык жана тыкандык', 'Чистота и аккуратность', 'Cleanliness and tidiness');

export const AGE_PAGES = {
  'early-elementary': {
    key: 'early',
    band: 1,
    topics: [
      {
        grade: 1,
        months: [
          [
            teacher,
            T('Ата-энеңди сыйла', 'Уважай родителей', 'Respect your parents'),
            T('Жаныбарлар биздин байлык', 'Животные – наше богатство', 'Animals are our treasure'),
          ],
          [
            T('Саламдашуу адеби', 'Этикет приветствия', 'The etiquette of greeting'),
            T('Сылыктык жана одонолук', 'Вежливость и грубость', 'Politeness and rudeness'),
            T('Менин атымдын мааниси', 'Значение моего имени', 'The meaning of my name'),
          ],
          [
            T('Жоопкерчиликтүү болуу деген эмне?', 'Что значит быть ответственным?', 'What does it mean to be responsible?'),
            goodBad,
          ],
          [
            routine,
            T('Жолдо жүрүү, коопсуз жашоо тартиби', 'Правила поведения на дороге и безопасной жизни', 'Road rules and safe living'),
            T('Светофор деген эмне?', 'Что такое светофор?', 'What is a traffic light?'),
          ],
          [goodBad],
          [
            T('Гүлдөр, өсүмдүктөр – абаны тазалап турат', 'Цветы и растения очищают воздух', 'Flowers and plants keep the air clean'),
            T('Төрт мезгилдин сыры', 'Тайна четырёх времён года', 'The secret of the four seasons'),
            cleanWater,
          ],
          [
            T('Денени чыңдоо – узак өмүргө өбөлгө', 'Закаливание тела – залог долгой жизни', 'A strong body is the key to a long life'),
            T('Китеп билим кенчи', 'Книга – сокровищница знаний', 'A book is a treasure of knowledge'),
          ],
          [
            T('Билим майрамы "Салам мектеп!"', 'Праздник знаний «Здравствуй, школа!»', 'The Day of Knowledge: “Hello, School!”'),
            teacher,
          ],
          [routine, cleanWater],
        ],
      },
      {
        grade: 2,
        months: [
          [T('Эне сыйлаган – элге жагат', 'Кто уважает мать, тот мил народу', 'Whoever respects their mother is loved by the people')],
          [
            T('Сүйлөшүү маданияты', 'Культура общения', 'The culture of conversation'),
            T('Тил – адамдын күзгүсү', 'Язык – зеркало человека', 'Language is a person’s mirror'),
            T('Карысы бардын ырысы бар', 'Где есть старшие, там и благополучие', 'Where there are elders, there is blessing'),
            T('Адептүү алкыш, адепсиз каргыш алат', 'Воспитанный получает благословение, невоспитанный – проклятие', 'The well-mannered receive blessings, the ill-mannered receive curses'),
          ],
          [truthLies],
          [tidy],
          [truthLies],
          [
            T('Менин мекеним Кыргызстан', 'Моя Родина – Кыргызстан', 'My homeland is Kyrgyzstan'),
            T('Ата-Журтум, кичи мекеним', 'Моя родная земля, моя малая родина', 'My ancestral land, my small homeland'),
            T('Улуттар биримдиги – улуу байлык', 'Единство народов – великое богатство', 'The unity of nations is a great treasure'),
          ],
          [T('Билимдүү болсоң – өсөсүң, билимсиз болсоң – осолсуң', 'Образованный растёт, необразованный отстаёт', 'If you are educated you grow, if not you fall behind')],
          [T('Баатырлар эл сыймыгы', 'Богатыри – гордость народа', 'Heroes are the pride of the nation')],
          [tidy],
        ],
      },
    ],
    // Activities provided for a specific month (index into the nine months).
    activitiesMonth: 0,
  },
  'upper-elementary': {
    key: 'upper',
    band: 2,
    topics: [
      {
        grade: 3,
        months: [
          [
            T('Менин алтын бешигим', 'Моя золотая колыбель', 'My golden cradle'),
            T('Канаттууларды корго', 'Защищай птиц', 'Protect the birds'),
          ],
          [
            T('Телефондо сүйлөшүү маданияты', 'Культура разговора по телефону', 'Phone conversation etiquette'),
            T('Белек берүү маданияты', 'Культура дарения подарков', 'The culture of giving gifts'),
            T('Кыргыз маданиятынын баалуулуктары', 'Ценности кыргызской культуры', 'The values of Kyrgyz culture'),
          ],
          [T('Таарыныч, узак таарынуунун зыяны', 'Обида и вред долгой обиды', 'Resentment and the harm of holding a grudge')],
          [T('Компьютердик айрым оюндардын зыяндуулугу', 'Вред некоторых компьютерных игр', 'The harm of some computer games')],
          [T('Бактылуу болуу мүнөздөн', 'Счастье зависит от характера', 'Happiness depends on character')],
          [],
          [T('Ак эмгектин наны таттуу', 'Хлеб честного труда сладок', 'Bread earned by honest work is sweet')],
          [],
          [T('Туура тамактануу – ден соолукка, узак жашоого өбөлгө', 'Правильное питание – залог здоровья и долгой жизни', 'Healthy eating is the key to health and a long life')],
        ],
      },
      {
        grade: 4,
        months: [
          [T('Табиятты сүй!', 'Люби природу!', 'Love nature!')],
          [
            T('Өнөр алды – кызыл тил', 'Прежде мастерства – красноречие', 'Eloquence comes before any craft'),
            T('Каадасы болбой эл болбойт', 'Без обычаев не бывает народа', 'Without customs there is no nation'),
            T('Толеранттуулук', 'Толерантность', 'Tolerance'),
          ],
          [T('Адал ырыскы. Арамдан алыс бол!', 'Честный достаток. Держись подальше от нечестного!', 'Honest earnings. Stay away from dishonest gain!')],
          [T('Баланын укугу жана милдеттери', 'Права и обязанности ребёнка', 'The rights and duties of the child')],
          [T('Жети атаңды бил', 'Знай своих семерых предков', 'Know your seven ancestors')],
          [T('Ысык-Көл кыргыз бермети', 'Иссык-Куль – жемчужина кыргызов', 'Issyk-Kul, the pearl of the Kyrgyz')],
          [T('Өнөрлүү өлбөйт', 'Мастер не пропадёт', 'A skilled person never goes under')],
          [
            T('Жоомарттык', 'Щедрость', 'Generosity'),
            T('Дүйнө адамдардын ачылыштары', 'Открытия людей мира', 'Discoveries of humankind'),
          ],
          [T('Канча тил билсең, ошончо дил, эл билесиң', 'Сколько языков знаешь, столько сердец и народов постигаешь', 'The more languages you know, the more hearts and peoples you understand')],
        ],
      },
    ],
  },
  'middle-school': {
    key: 'middle',
    band: 3,
    topics: [],
  },
};

// Pillar position (1-9) in the site's main table (scopeSequence.pillar_N), listed in grade-table order.
export const GRADE_ORDER_PILLARS = [1, 3, 4, 2, 5, 8, 7, 6, 9];
