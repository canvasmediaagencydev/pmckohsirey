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
  visit: { eyebrow: string; title: string; body: string; items: readonly { icon: "fluid" | "vitamin" | "mineral"; title: string; body: string }[] };
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
    nav: { overview: "ข้อมูล IV Drip", questions: "IV Drip คืออะไร", visit: "ส่วนประกอบ", location: "แผนที่", contact: "ติดต่อ" },
    hero: { eyebrow: "PMC Koh Sirey · Phuket", title: "IV Drip ที่ PMC Koh Sirey", body: "นัดเวลาเข้ามาคุยกับทีมคลินิกได้ก่อน การประเมินความเหมาะสมจะทำที่คลินิกก่อนรับบริการ", openingHours: "เปิดทุกวัน 09:00–20:00 น.", location: "เกาะสิเหร่ · เมืองภูเก็ต" },
    assessmentPhrase: "การประเมินความเหมาะสม",
    actions: { line: "LINE", call: "โทร", whatsapp: "WhatsApp", map: "แผนที่" },
    contactIcons: { line: "สอบถามผ่าน LINE", phone: "โทรหา PMC Koh Sirey", whatsapp: "แชต WhatsApp", map: "เปิดตำแหน่งใน Google Maps" },
    overview: { eyebrow: "IV Drip information", title: "IV Drip / Intravenous Vitamin Therapy คืออะไร?", body: "IV Drip หรือ Intravenous Vitamin Therapy คือการให้สารน้ำ วิตามิน แร่ธาตุ หรือสารอาหารอื่นผ่านสายน้ำเกลือเข้าสู่หลอดเลือดดำโดยตรง ส่วนผสมและปริมาณที่ใช้จะพิจารณาตามข้อมูลของแต่ละบุคคลและรายการที่คลินิกมีให้บริการในวันนั้น", note: "การให้ผ่านทางหลอดเลือดดำต่างจากการรับประทาน แต่ไม่ได้ยืนยันผลลัพธ์หรือความเหมาะสมสำหรับทุกคน" },
    questions: { eyebrow: "IV Drip information", title: "ข้อมูลที่ควรรู้ก่อนสอบถามบริการ", items: [
      { title: "ให้ผ่านทางหลอดเลือดดำ", body: "IV Drip ให้สารเข้าสู่หลอดเลือดดำโดยตรง จึงไม่ผ่านกระบวนการย่อยเหมือนการรับประทาน" },
      { title: "ระยะเวลาไม่ตายตัว", body: "ระยะเวลาของแต่ละบริการขึ้นกับรายการที่เลือกและข้อมูลของผู้รับบริการ โปรดสอบถามเวลาประมาณการกับคลินิกก่อนนัด" },
      { title: "ความถี่ต้องประเมินเป็นรายบุคคล", body: "ไม่มีตารางความถี่เดียวที่เหมาะกับทุกคน ผู้ให้บริการทางการแพทย์จะพิจารณาตามข้อมูลและความเหมาะสม" },
    ] },
    visit: { eyebrow: "ใน IV Drip มีอะไรบ้าง?", title: "องค์ประกอบที่อาจมีในบริการ", body: "แต่ละรายการมีส่วนผสมไม่เหมือนกัน ทีมคลินิกจะแจ้งรายการที่มีให้บริการและส่วนผสมที่เกี่ยวข้องก่อนเข้ารับบริการ", items: [
      { icon: "fluid", title: "สารน้ำ", body: "ใช้ตามรายละเอียดของรายการบริการ" },
      { icon: "vitamin", title: "วิตามิน", body: "บางรายการอาจมีวิตามินตามความเหมาะสม" },
      { icon: "mineral", title: "แร่ธาตุและสารอาหารอื่น", body: "ขึ้นกับรายการที่มีและการประเมินรายบุคคล" },
    ] },
    safety: { eyebrow: "ข้อมูลสำคัญ", title: "ข้อมูลที่ต้องแจ้งทีมคลินิก", body: "ข้อมูลเหล่านี้ไม่จำเป็นต้องหมายความว่าไม่สามารถรับบริการได้ แต่ควรแจ้งทีมคลินิกก่อน เพื่อให้ผู้ให้บริการทางการแพทย์พิจารณาอย่างเหมาะสม", items: ["กำลังตั้งครรภ์หรือให้นมบุตร", "โรคไต โรคหัวใจ หรือภาวะพร่องเอนไซม์ G6PD", "ยาต้านเกล็ดเลือด ยาที่ใช้อยู่ หรืออาหารเสริม", "ประวัติการแพ้และข้อมูลสุขภาพที่เกี่ยวข้อง"] },
    faq: { eyebrow: "คำถามที่พบบ่อย", title: "ก่อนนัดหมาย", items: [
      { question: "ต้องนัดหมายล่วงหน้าหรือไม่?", answer: "แนะนำให้ติดต่อทีมคลินิกก่อน เพื่อสอบถามคิวและเวลาเข้ารับบริการ" },
      { question: "ควรเตรียมอะไรมา?", answer: "เตรียมรายการยา อาหารเสริม และข้อมูลสุขภาพที่เกี่ยวข้องเพื่อคุยกับทีมที่คลินิก" },
      { question: "สอบถามค่าบริการได้อย่างไร?", answer: "สอบถามข้อมูลล่าสุดกับทีมคลินิกโดยตรงก่อนเข้ารับบริการ" },
    ] },
    location: { eyebrow: "ที่ตั้งและเวลาเปิด", title: "PMC Koh Sirey", hoursTitle: "เปิดทุกวัน", addressTitle: "ที่อยู่" },
    contact: { eyebrow: "ติดต่อเรา", title: "เลือกช่องทางที่สะดวก", body: "สอบถามข้อมูลบริการ เวลาเปิด หรือจองเวลามาคุยกับทีมคลินิก" },
    disclaimer: "การให้บริการและรายละเอียดขึ้นอยู่กับการประเมินเป็นรายบุคคล โปรดรับคำแนะนำจากผู้ให้บริการทางการแพทย์ที่คลินิกก่อนรับบริการ",
    footer: { home: "หน้าแรก", privacy: "นโยบายความเป็นส่วนตัว", terms: "ข้อกำหนดและเงื่อนไข", rights: "สงวนลิขสิทธิ์" },
  },
  my: {
    languageLabel: "ဘာသာစကား",
    nav: { overview: "IV Drip အချက်အလက်", questions: "IV Drip ဆိုတာဘာလဲ", visit: "ပါဝင်ပစ္စည်းများ", location: "မြေပုံ", contact: "ဆက်သွယ်ရန်" },
    hero: { eyebrow: "PMC Koh Sirey · Phuket", title: "PMC Koh Sirey ရှိ IV Drip", body: "ချိန်းဆိုရန် ဆေးခန်းအဖွဲ့ကို အရင်ဆက်သွယ်နိုင်ပါသည်။ ဝန်ဆောင်မှုမပေးမီ သင့်လျော်မှုကို ဆေးခန်းတွင် အကဲဖြတ်ပါမည်", openingHours: "နေ့စဉ် 09:00–20:00 ဖွင့်ပါသည်", location: "Koh Sirey · Phuket" },
    assessmentPhrase: "သင့်လျော်မှုကို ဆေးခန်းတွင် အကဲဖြတ်",
    actions: { line: "LINE", call: "ဖုန်း", whatsapp: "WhatsApp", map: "မြေပုံ" },
    contactIcons: { line: "LINE မှ မေးမြန်းရန်", phone: "PMC Koh Sirey ကို ဖုန်းခေါ်ရန်", whatsapp: "WhatsApp မှ စာပို့ရန်", map: "Google Maps တွင် တည်နေရာဖွင့်ရန်" },
    overview: { eyebrow: "IV Drip information", title: "IV Drip / Intravenous Vitamin Therapy ဆိုတာဘာလဲ?", body: "IV Drip သို့မဟုတ် Intravenous Vitamin Therapy သည် အရည်၊ ဗီတာမင်၊ သတ္တုဓာတ် သို့မဟုတ် အခြားအာဟာရများကို IV လိုင်းမှတစ်ဆင့် သွေးကြောထဲသို့ ပေးသည့် ဝန်ဆောင်မှုဖြစ်သည်။ ပါဝင်ပစ္စည်းနှင့် ပမာဏကို တစ်ဦးချင်းအချက်အလက်နှင့် ထိုနေ့ ဆေးခန်းတွင် ရရှိနိုင်သောစာရင်းပေါ်မူတည်၍ စဉ်းစားပါသည်။", note: "သွေးကြောမှတစ်ဆင့် ပေးခြင်းသည် သောက်သုံးခြင်းနှင့် ကွာခြားသော်လည်း လူတိုင်းအတွက် ရလဒ် သို့မဟုတ် သင့်လျော်မှုကို အတည်မပြုပါ" },
    questions: { eyebrow: "IV Drip information", title: "ဝန်ဆောင်မှုမေးမြန်းမီ သိထားသင့်သောအချက်များ", items: [
      { title: "သွေးကြောမှတစ်ဆင့် ပေးခြင်း", body: "IV Drip သည် အရည်ကို သွေးကြောထဲသို့ တိုက်ရိုက်ပေးသဖြင့် အစာချေမှုလုပ်ငန်းစဉ်ကို မဖြတ်သန်းပါ" },
      { title: "ကြာချိန် မတူနိုင်ပါ", body: "ကြာချိန်သည် ရွေးချယ်သည့်ဝန်ဆောင်မှုနှင့် တစ်ဦးချင်းအချက်အလက်အပေါ် မူတည်ပါသည်။ ချိန်းဆိုမီ ခန့်မှန်းချိန်ကို မေးမြန်းပါ" },
      { title: "အကြိမ်ရေကို တစ်ဦးချင်းစီ စဉ်းစားပါသည်", body: "လူတိုင်းအတွက် တူညီသည့်အချိန်ဇယားမရှိပါ။ ဆေးဘက်ဆိုင်ရာ ဝန်ဆောင်မှုပေးသူက အချက်အလက်အလိုက် စဉ်းစားပါသည်" },
    ] },
    visit: { eyebrow: "IV Drip မှာ ဘာတွေပါနိုင်သလဲ?", title: "ဝန်ဆောင်မှုတွင် ပါနိုင်သော အစိတ်အပိုင်းများ", body: "ဝန်ဆောင်မှုတစ်ခုစီ၏ ပါဝင်ပစ္စည်း မတူနိုင်ပါ။ ဆေးခန်းအဖွဲ့က ရရှိနိုင်သောစာရင်းနှင့် သက်ဆိုင်ရာ ပါဝင်ပစ္စည်းများကို လာရောက်မီ အသိပေးပါမည်", items: [
      { icon: "fluid", title: "အရည်", body: "ဝန်ဆောင်မှုအသေးစိတ်အလိုက် အသုံးပြုနိုင်ပါသည်" },
      { icon: "vitamin", title: "ဗီတာမင်", body: "အချို့ဝန်ဆောင်မှုများတွင် သင့်လျော်မှုအရ ပါဝင်နိုင်ပါသည်" },
      { icon: "mineral", title: "သတ္တုဓာတ်နှင့် အခြားအာဟာရ", body: "ရရှိနိုင်သောစာရင်းနှင့် တစ်ဦးချင်း အကဲဖြတ်မှုအပေါ် မူတည်ပါသည်" },
    ] },
    safety: { eyebrow: "အရေးကြီးအချက်အလက်", title: "ဆေးခန်းအဖွဲ့ထံ အသိပေးရမည့်အချက်များ", body: "ဤအချက်များသည် ဝန်ဆောင်မှုမရနိုင်ဟု မဆိုလိုပါ။ သင့်လျော်စွာ စဉ်းစားနိုင်ရန် ဆေးခန်းအဖွဲ့ထံ ကြိုတင်အသိပေးပါ", items: ["ကိုယ်ဝန်ဆောင်နေခြင်း သို့မဟုတ် နို့တိုက်နေခြင်း", "ကျောက်ကပ်ရောဂါ၊ နှလုံးရောဂါ သို့မဟုတ် G6PD ချို့တဲ့မှု", "သွေးခဲတားဆေး၊ လက်ရှိသောက်သုံးနေသောဆေး သို့မဟုတ် ဖြည့်စွက်စာ", "ဓာတ်မတည့်မှုနှင့် သက်ဆိုင်ရာ ကျန်းမာရေးမှတ်တမ်း"] },
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
    nav: { overview: "IV Drip information", questions: "What is IV Drip?", visit: "What may be included", location: "Map", contact: "Contact" },
    hero: { eyebrow: "PMC Koh Sirey · Phuket", title: "IV Drip at PMC Koh Sirey", body: "You can contact the clinic team before visiting. An individual assessment is completed at the clinic before service is provided.", openingHours: "Open daily, 9:00 AM–8:00 PM", location: "Koh Sirey · Phuket" },
    assessmentPhrase: "individual assessment",
    actions: { line: "LINE", call: "Call", whatsapp: "WhatsApp", map: "Map" },
    contactIcons: { line: "Ask on LINE", phone: "Call PMC Koh Sirey", whatsapp: "Message on WhatsApp", map: "Open location in Google Maps" },
    overview: { eyebrow: "IV Drip information", title: "What is IV Drip / Intravenous Vitamin Therapy?", body: "IV Drip, or Intravenous Vitamin Therapy, delivers fluids, vitamins, minerals, or other nutrients through an IV line into a vein. Ingredients and amounts are considered using individual information and the service list available at the clinic on the day.", note: "Giving a service through a vein differs from taking something by mouth, but does not confirm an outcome or suitability for everyone." },
    questions: { eyebrow: "IV Drip information", title: "Information to know before asking about the service", items: [
      { title: "Given through a vein", body: "IV Drip delivers substances directly into a vein and does not use the digestive process in the same way as oral intake." },
      { title: "Timing can vary", body: "The duration depends on the selected service and individual information. Ask the clinic for an estimated time before booking." },
      { title: "Frequency is individual", body: "There is no single schedule for everyone. A medical provider considers frequency using individual information and suitability." },
    ] },
    visit: { eyebrow: "What can be in an IV Drip?", title: "Components that may be included", body: "Each service can have different ingredients. The clinic team can explain the currently available service list and relevant ingredients before your visit.", items: [
      { icon: "fluid", title: "Fluids", body: "May be used according to the details of the service." },
      { icon: "vitamin", title: "Vitamins", body: "Some services may include vitamins when appropriate." },
      { icon: "mineral", title: "Minerals and other nutrients", body: "Depends on the available list and individual assessment." },
    ] },
    safety: { eyebrow: "Important information", title: "Information to share with the clinic team", body: "These points do not necessarily mean a service cannot be provided. Please tell the clinic team first so a medical provider can consider them appropriately.", items: ["Pregnancy or breastfeeding", "Kidney disease, heart disease, or G6PD deficiency", "Antiplatelet medicines, current medicines, or supplements", "Allergies and relevant health history"] },
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
