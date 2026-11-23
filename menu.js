/*
 * ===========================================================
 *  התפריט הבוכרי – קובץ תפריט ומחירים
 * ===========================================================
 *  כאן עורכים פריטים, מחירים, גדלים וקטגוריות.
 *  אין צורך לגעת ב-index.html.
 *
 *  שדות לכל פריט:
 *    id    – מזהה ייחודי באנגלית (לא לשנות לאחר שימוש – משמש לשמירת בחירה)
 *    name  – שם המנה כפי שיוצג
 *    unit  – גודל יחידה / אריזה
 *    price – מחיר בש"ח (מספר בלבד)
 *
 *  להוספת פריט: העתיקו שורה קיימת, שנו id/name/unit/price.
 *  להסרת פריט: מחקו את השורה.
 * ===========================================================
 */

window.SITE_CONFIG = {
  // מספר וואטסאפ בפורמט בינלאומי, ללא + וללא 0 בהתחלה
  whatsappNumber: "972522596929",
  ownerName: "עמוס",
  messageTitle: "הזמנה סיטונאית חדשה",
  currency: "₪"
};

window.MENU = [
  {
    id: "bakery",
    title: "מוצרי מאפה",
    icon: "🥟",
    items: [
      { id: "samsa-meat",     name: "סמסה גוזוגצ'ה במילוי בשר",  unit: "יחידה",     price: 10 },
      { id: "samsa-pumpkin",  name: "סמסה גוזוגצ'ה במילוי דלעת", unit: "יחידה",     price: 10 },
      { id: "samsa-potato",   name: "סמסה במילוי תפוחי אדמה",     unit: "יחידה",     price: 10 },
      { id: "samsa-mushroom", name: "סמסה במילוי פטריות",          unit: "יחידה",     price: 10 },
      { id: "samsa-nuts",     name: "סמסה אגוזים",                 unit: "יחידה",     price: 10 },
      { id: "samsa-chicken",  name: "סמסה עוף",                    unit: "יחידה",     price: 10 },
      { id: "samsa-chickpea", name: "סמסה חומוס",                  unit: "יחידה",     price: 10 },
      { id: "samsa-spinach",  name: "סמסה תרד",                    unit: "יחידה",     price: 10 },
      { id: "chebureki",      name: "צ'יבוריק",                    unit: "יחידה",     price: 10 },
      { id: "non-toki-s",     name: "נון טוקי אישי קטן",           unit: "5 יחידות",  price: 10 },
      { id: "non-toki-m",     name: "נון טוקי בינוני",             unit: "3 יחידות",  price: 10 },
      { id: "bread-l",        name: "לחם בוכרי גדול",              unit: "יחידה",     price: 12 },
      { id: "bread-s",        name: "לחם בוכרי קטן",               unit: "יחידה",     price: 10 },
      { id: "manti",          name: "מנטו",                        unit: "5 יחידות",  price: 45 },
      { id: "dushpara",       name: "דושפרה (פילמיני)",            unit: "חצי ק\"ג",  price: 45 }
    ]
  },
  {
    id: "mains",
    title: "מנות עיקריות",
    icon: "🍲",
    items: [
      { id: "oshpalov", name: "אושפלוב", unit: "חצי ק\"ג", price: 45 },
      { id: "bakhsh",   name: "בכש",     unit: "חצי ק\"ג", price: 45 }
    ]
  },
  {
    id: "desserts",
    title: "קינוחים ומנות אחרונות",
    icon: "🍯",
    items: [
      { id: "lavas",    name: "לבס עם שקדים ואגוזים",  unit: "5 יחידות",      price: 45 },
      { id: "chakchak", name: "צ'אקצ'אק (עוגה מתוקה)", unit: "יחידה / מנה",   price: 45 }
    ]
  }
];
