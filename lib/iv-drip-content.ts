export const ivDripLocales = ["th", "my", "en"] as const;

export type IvDripLocale = (typeof ivDripLocales)[number];

type Copy = {
  languageLabel: string;
  nav: { overview: string; questions: string; visit: string; location: string; contact: string };
  hero: { eyebrow: string; title: string; body: string; openingHours: string; location: string };
  assessmentPhrase: string;
  actions: { line: string; call: string; whatsapp: string; map: string };
  contactIcons: { line: string; phone: string; whatsapp: string; map: string };
  overview: { eyebrow: string; title: string; body: string; note: string };
  questions: { eyebrow: string; title: string; items: readonly { title: string; body: string }[] };
  visit: { eyebrow: string; title: string; items: readonly { number: string; title: string; body: string }[] };
  safety: { eyebrow: string; title: string; body: string; items: readonly string[] };
  faq: { eyebrow: string; title: string; items: readonly { question: string; answer: string }[] };
  location: { eyebrow: string; title: string; hoursTitle: string; addressTitle: string };
  contact: { eyebrow: string; title: string; body: string };
  disclaimer: string;
  footer: { home: string; privacy: string; terms: string; rights: string };
};

export const ivDripCopy: Record<IvDripLocale, Copy> = {
  th: {
    languageLabel: "ภาษา",
    nav: { overview: "ข้อมูลบริการ", questions: "ก่อนตัดสินใจ", visit: "ขั้นตอน", location: "แผนที่", contact: "ติดต่อ" },
    hero: { eyebrow: "PMC Koh Sirey · Phuket", title: "IV Drip ที่ PMC Koh Sirey", body: "นัดเวลาเข้ามาคุยกับทีมคลินิกได้ก่อน การประเมินความเหมาะสมจะทำที่คลินิกก่อนรับบริการ", openingHours: "เปิดทุกวัน 09:00–20:00 น.", location: "เกาะสิเหร่ · เมืองภูเก็ต" },
    assessmentPhrase: "การประเมินความเหมาะสม",
    actions: { line: "LINE", call: "โทร", whatsapp: "WhatsApp", map: "แผนที่" },
    contactIcons: { line: "สอบถามผ่าน LINE", phone: "โทรหา PMC Koh Sirey", whatsapp: "แชต WhatsApp", map: "เปิดตำแหน่งใน Google Maps" },
    overview: { eyebrow: "IV Drip information", title: "รับข้อมูลก่อน แล้วค่อยตัดสินใจ", body: "IV drip เป็นบริการที่ให้สารผ่านทางหลอดเลือดดำ รายละเอียดและความเหมาะสมของบริการอาจไม่เหมือนกันในแต่ละคน จึงควรเข้ามารับข้อมูลที่คลินิกก่อน", note: "หน้านี้ให้ข้อมูลทั่วไป ไม่ใช่คำวินิจฉัยหรือคำแนะนำเฉพาะบุคคล" },
    questions: { eyebrow: "ก่อนตัดสินใจ", title: "เรื่องที่ควรถามทีมคลินิก", items: [
      { title: "บริการนี้เหมาะกับสิ่งที่คุณต้องการหรือไม่", body: "เล่าข้อมูลที่เกี่ยวข้องให้ทีมคลินิกทราบ เพื่อรับคำแนะนำที่เหมาะกับคุณ" },
      { title: "วันเข้ารับบริการมีขั้นตอนอย่างไร", body: "สอบถามระยะเวลา ขั้นตอน และสิ่งที่ควรเตรียมก่อนนัดหมาย" },
      { title: "มีข้อควรระวังอะไรบ้าง", body: "ถามให้ชัดถึงสิ่งที่ควรแจ้ง ข้อควรระวัง และสิ่งที่ควรสังเกต" },
    ] },
    visit: { eyebrow: "ขั้นตอน", title: "เมื่อมาถึงคลินิก", items: [
      { number: "01", title: "เลือกเวลา", body: "ติดต่อทีมคลินิกเพื่อสอบถามคิวและเวลาที่สะดวก" },
      { number: "02", title: "พูดคุยและประเมิน", body: "แจ้งข้อมูลสุขภาพที่เกี่ยวข้องกับผู้ให้บริการทางการแพทย์" },
      { number: "03", title: "รับข้อมูลก่อนตัดสินใจ", body: "ทีมคลินิกอธิบายข้อมูลที่เกี่ยวข้องก่อนดำเนินการ" },
    ] },
    safety: { eyebrow: "ข้อมูลสำคัญ", title: "เตรียมข้อมูลไว้คุยกับทีมคลินิก", body: "รายละเอียดที่ครบถ้วนช่วยให้ผู้ให้บริการทางการแพทย์พิจารณาได้เหมาะสมขึ้น", items: ["ยาหรืออาหารเสริมที่ใช้อยู่", "ประวัติการแพ้ หรือข้อมูลสุขภาพที่เกี่ยวข้อง", "คำถามเรื่องขั้นตอน ข้อควรระวัง และค่าใช้จ่าย"] },
    faq: { eyebrow: "คำถามที่พบบ่อย", title: "ก่อนนัดหมาย", items: [
      { question: "ต้องนัดหมายล่วงหน้าหรือไม่?", answer: "แนะนำให้ติดต่อทีมคลินิกก่อน เพื่อสอบถามคิวและเวลาเข้ารับบริการ" },
      { question: "ควรเตรียมอะไรมา?", answer: "เตรียมรายการยา อาหารเสริม และข้อมูลสุขภาพที่เกี่ยวข้องเพื่อคุยกับทีมที่คลินิก" },
      { question: "สอบถามค่าบริการได้อย่างไร?", answer: "สอบถามข้อมูลล่าสุดกับทีมคลินิกโดยตรงก่อนเข้ารับบริการ" },
    ] },
    location: { eyebrow: "ที่ตั้งและเวลาเปิด", title: "PMC Koh Sirey", hoursTitle: "เปิดทุกวัน", addressTitle: "ที่อยู่" },
    contact: { eyebrow: "ติดต่อเรา", title: "เลือกช่องทางที่สะดวก", body: "สอบถามข้อมูลบริการ เวลาเปิด หรือจองเวลามาคุยกับทีมคลินิก" },
    disclaimer: "บริการและขั้นตอนขึ้นอยู่กับการประเมินเป็นรายบุคคล โปรดรับคำแนะนำจากผู้ให้บริการทางการแพทย์ที่คลินิกก่อนตัดสินใจ",
    footer: { home: "หน้าแรก", privacy: "นโยบายความเป็นส่วนตัว", terms: "ข้อกำหนดและเงื่อนไข", rights: "สงวนลิขสิทธิ์" },
  },
  my: {
    languageLabel: "ဘာသာစကား",
    nav: { overview: "ဝန်ဆောင်မှုအချက်အလက်", questions: "မဆုံးဖြတ်မီ", visit: "အဆင့်များ", location: "မြေပုံ", contact: "ဆက်သွယ်ရန်" },
    hero: { eyebrow: "PMC Koh Sirey · Phuket", title: "PMC Koh Sirey ရှိ IV Drip", body: "ချိန်းဆိုရန် ဆေးခန်းအဖွဲ့ကို အရင်ဆက်သွယ်နိုင်ပါသည်။ ဝန်ဆောင်မှုမပေးမီ သင့်လျော်မှုကို ဆေးခန်းတွင် အကဲဖြတ်ပါမည်", openingHours: "နေ့စဉ် 09:00–20:00 ဖွင့်ပါသည်", location: "Koh Sirey · Phuket" },
    assessmentPhrase: "သင့်လျော်မှုကို ဆေးခန်းတွင် အကဲဖြတ်",
    actions: { line: "LINE", call: "ဖုန်း", whatsapp: "WhatsApp", map: "မြေပုံ" },
    contactIcons: { line: "LINE မှ မေးမြန်းရန်", phone: "PMC Koh Sirey ကို ဖုန်းခေါ်ရန်", whatsapp: "WhatsApp မှ စာပို့ရန်", map: "Google Maps တွင် တည်နေရာဖွင့်ရန်" },
    overview: { eyebrow: "IV Drip information", title: "အချက်အလက်ရယူပြီးမှ ဆုံးဖြတ်ပါ", body: "IV drip သည် သွေးကြောမှတစ်ဆင့် အရည်ပေးသည့် ဝန်ဆောင်မှုဖြစ်သည်။ ဝန်ဆောင်မှုအသေးစိတ်နှင့် သင့်လျော်မှုသည် တစ်ဦးချင်းစီအလိုက် ကွာခြားနိုင်သောကြောင့် ဆေးခန်းတွင် အချက်အလက်ရယူပါ။", note: "ဤစာမျက်နှာသည် အထွေထွေအချက်အလက်အတွက်သာ ဖြစ်သည်" },
    questions: { eyebrow: "မဆုံးဖြတ်မီ", title: "ဆေးခန်းအဖွဲ့ကို မေးသင့်သောအချက်များ", items: [
      { title: "ဤဝန်ဆောင်မှုသည် သင့်အတွက် သင့်လျော်ပါသလား", body: "သက်ဆိုင်ရာအချက်အလက်ကို ဆေးခန်းအဖွဲ့ထံ မျှဝေပြီး အကြံပြုချက်ရယူပါ" },
      { title: "လာရောက်သည့်နေ့တွင် ဘာလုပ်ရမလဲ", body: "ကြာချိန်၊ အဆင့်များနှင့် ကြိုတင်ပြင်ဆင်ရမည့်အရာများကို မေးမြန်းပါ" },
      { title: "ဘာကို သတိထားသင့်သလဲ", body: "ပြောပြရမည့်အချက်များ၊ သတိပြုရန်အရာများကို ရှင်းလင်းစွာ မေးမြန်းပါ" },
    ] },
    visit: { eyebrow: "အဆင့်များ", title: "ဆေးခန်းသို့ရောက်သောအခါ", items: [
      { number: "01", title: "အချိန်ရွေးပါ", body: "အဆင်ပြေသော အချိန်နှင့် ချိန်းဆိုမှုအတွက် ဆေးခန်းကို ဆက်သွယ်ပါ" },
      { number: "02", title: "ဆွေးနွေးပြီး အကဲဖြတ်ပါ", body: "သက်ဆိုင်ရာ ကျန်းမာရေးအချက်အလက်ကို ဆေးဘက်ဆိုင်ရာ ဝန်ဆောင်မှုပေးသူနှင့် ဆွေးနွေးပါ" },
      { number: "03", title: "အချက်အလက်ရယူပါ", body: "ဆုံးဖြတ်မီ သက်ဆိုင်ရာ အချက်အလက်ကို ဆေးခန်းအဖွဲ့က ရှင်းပြပါမည်" },
    ] },
    safety: { eyebrow: "အရေးကြီးအချက်အလက်", title: "ဆေးခန်းအဖွဲ့နှင့် ဆွေးနွေးရန် ပြင်ဆင်ပါ", body: "အချက်အလက်ပြည့်စုံမှုက သင့်လျော်သော စဉ်းစားမှုကို ကူညီပေးပါသည်", items: ["သောက်သုံးနေသော ဆေး သို့မဟုတ် ဖြည့်စွက်စာ", "ဓာတ်မတည့်မှုနှင့် သက်ဆိုင်ရာ ကျန်းမာရေးမှတ်တမ်း", "အဆင့်များ၊ သတိပြုရန်အရာများနှင့် ကုန်ကျစရိတ်အကြောင်း မေးခွန်းများ"] },
    faq: { eyebrow: "မေးလေ့ရှိသော မေးခွန်းများ", title: "မချိန်းဆိုမီ", items: [
      { question: "ကြိုတင်ချိန်းဆိုရန် လိုအပ်ပါသလား?", answer: "အချိန်စာရင်းအတွက် ဆေးခန်းအဖွဲ့ကို ကြိုတင်ဆက်သွယ်ရန် အကြံပြုပါသည်" },
      { question: "ဘာတွေ ယူလာသင့်သလဲ?", answer: "ဆေး၊ ဖြည့်စွက်စာနှင့် သက်ဆိုင်ရာ ကျန်းမာရေးအချက်အလက်များကို ယူလာပါ" },
      { question: "ကုန်ကျစရိတ်ကို ဘယ်လိုမေးမလဲ?", answer: "မလာရောက်မီ ဆေးခန်းအဖွဲ့ထံမှ နောက်ဆုံးအချက်အလက်ကို တိုက်ရိုက်မေးမြန်းပါ" },
    ] },
    location: { eyebrow: "တည်နေရာနှင့် ဖွင့်ချိန်", title: "PMC Koh Sirey", hoursTitle: "နေ့စဉ်ဖွင့်သည်", addressTitle: "လိပ်စာ" },
    contact: { eyebrow: "ဆက်သွယ်ရန်", title: "အဆင်ပြေသောနည်းလမ်းကို ရွေးပါ", body: "ဝန်ဆောင်မှုအချက်အလက်၊ ဖွင့်ချိန် သို့မဟုတ် ချိန်းဆိုမှုအတွက် ဆက်သွယ်ပါ" },
    disclaimer: "ဝန်ဆောင်မှုနှင့် လုပ်ငန်းစဉ်များသည် တစ်ဦးချင်း အကဲဖြတ်မှုအပေါ် မူတည်ပါသည်။ မဆုံးဖြတ်မီ ဆေးခန်းရှိ ဆေးဘက်ဆိုင်ရာ ဝန်ဆောင်မှုပေးသူထံမှ အကြံပြုချက် ရယူပါ။",
    footer: { home: "ပင်မစာမျက်နှာ", privacy: "ကိုယ်ရေးအချက်အလက် မူဝါဒ", terms: "စည်းမျဉ်းနှင့် သတ်မှတ်ချက်များ", rights: "မူပိုင်ခွင့်အားလုံး ရယူထားသည်" },
  },
  en: {
    languageLabel: "Language",
    nav: { overview: "Service information", questions: "Before deciding", visit: "Your visit", location: "Map", contact: "Contact" },
    hero: { eyebrow: "PMC Koh Sirey · Phuket", title: "IV Drip at PMC Koh Sirey", body: "You can contact the clinic team before visiting. An individual assessment is completed at the clinic before service is provided.", openingHours: "Open daily, 9:00 AM–8:00 PM", location: "Koh Sirey · Phuket" },
    assessmentPhrase: "individual assessment",
    actions: { line: "LINE", call: "Call", whatsapp: "WhatsApp", map: "Map" },
    contactIcons: { line: "Ask on LINE", phone: "Call PMC Koh Sirey", whatsapp: "Message on WhatsApp", map: "Open location in Google Maps" },
    overview: { eyebrow: "IV Drip information", title: "Get the information first", body: "IV drip is a service that delivers fluids through a vein. Details and suitability can vary between people, so please receive information at the clinic before deciding.", note: "This page provides general information only." },
    questions: { eyebrow: "Before deciding", title: "Questions to ask the clinic team", items: [
      { title: "Is this service suitable for you?", body: "Share relevant information with the clinic team and ask for guidance." },
      { title: "What happens on the day?", body: "Ask about timing, the process, and anything to prepare before your appointment." },
      { title: "What should you be aware of?", body: "Ask clearly about information to share and points to consider." },
    ] },
    visit: { eyebrow: "Your visit", title: "When you arrive at the clinic", items: [
      { number: "01", title: "Choose a time", body: "Contact the clinic to ask about a convenient appointment time." },
      { number: "02", title: "Discuss and assess", body: "Discuss relevant health information with the medical provider." },
      { number: "03", title: "Receive information", body: "The clinic team explains relevant information before you decide." },
    ] },
    safety: { eyebrow: "Important information", title: "Prepare to speak with the clinic team", body: "Complete information helps the medical provider consider individual suitability.", items: ["Current medicines or supplements", "Allergies and relevant health history", "Questions about process, points to consider, and fees"] },
    faq: { eyebrow: "Frequently asked questions", title: "Before booking", items: [
      { question: "Do I need an appointment?", answer: "Please contact the clinic first to ask about availability and a suitable visit time." },
      { question: "What should I bring?", answer: "Bring a list of medicines, supplements, and relevant health information to discuss at the clinic." },
      { question: "How can I ask about fees?", answer: "Ask the clinic team directly for current information before your visit." },
    ] },
    location: { eyebrow: "Location and opening hours", title: "PMC Koh Sirey", hoursTitle: "Open every day", addressTitle: "Address" },
    contact: { eyebrow: "Contact", title: "Choose a convenient channel", body: "Ask about service information, opening hours, or a time to speak with the clinic team." },
    disclaimer: "Service and process depend on an individual assessment. Please receive advice from the medical provider at the clinic before deciding.",
    footer: { home: "Home", privacy: "Privacy Policy", terms: "Terms & Conditions", rights: "All rights reserved" },
  },
};
