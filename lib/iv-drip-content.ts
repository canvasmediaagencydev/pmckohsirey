export const ivDripLocales = ["th", "my", "en"] as const;

export type IvDripLocale = (typeof ivDripLocales)[number];

type IvDripCopy = {
  languageLabel: string;
  nav: {
    overview: string;
    whatToExpect: string;
    safety: string;
    location: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    openingHours: string;
    location: string;
  };
  assessmentPhrase: string;
  actions: {
    line: string;
    call: string;
    whatsapp: string;
    map: string;
    enquire: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
  };
  whatToExpect: {
    eyebrow: string;
    title: string;
    items: readonly { title: string; body: string }[];
  };
  safety: {
    eyebrow: string;
    title: string;
    body: string;
    items: readonly string[];
  };
  privacy: {
    title: string;
    body: string;
  };
  location: {
    eyebrow: string;
    title: string;
    hoursTitle: string;
    addressTitle: string;
    mapsCta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
  };
  disclaimer: string;
  footer: {
    home: string;
    privacy: string;
    terms: string;
    rights: string;
  };
};

export const ivDripCopy: Record<IvDripLocale, IvDripCopy> = {
  th: {
    languageLabel: "ภาษา",
    nav: { overview: "ข้อมูลบริการ", whatToExpect: "ก่อนมาคลินิก", safety: "ข้อมูลสำคัญ", location: "แผนที่", contact: "ติดต่อเรา" },
    hero: {
      eyebrow: "PMC Koh Sirey · Phuket",
      title: "สอบถามบริการ IV Drip ที่ PMC Koh Sirey",
      body: "ติดต่อทีมคลินิกเพื่อสอบถามข้อมูลและนัดหมาย โดยมีการประเมินความเหมาะสมก่อนให้บริการ",
      openingHours: "เปิดทุกวัน 09:00–20:00 น.",
      location: "เกาะสิเหร่ · เมืองภูเก็ต",
    },
    assessmentPhrase: "การประเมินความเหมาะสม",
    actions: { line: "สอบถามผ่าน LINE", call: "โทรสอบถาม", whatsapp: "แชต WhatsApp", map: "เปิดใน Google Maps", enquire: "สอบถามข้อมูลบริการ" },
    overview: {
      eyebrow: "IV Drip information",
      title: "ข้อมูลเพื่อประกอบการตัดสินใจก่อนเข้ารับบริการ",
      body: "IV drip เป็นบริการที่ให้สารทางหลอดเลือดดำ การให้บริการและรายละเอียดที่เหมาะสมจะแตกต่างกันในแต่ละบุคคล จึงควรรับข้อมูลและการประเมินที่คลินิกก่อนตัดสินใจ",
      note: "หน้านี้ให้ข้อมูลทั่วไปและไม่ใช้แทนการวินิจฉัย คำแนะนำ หรือการรักษาโดยผู้ประกอบวิชาชีพทางการแพทย์",
    },
    whatToExpect: {
      eyebrow: "ก่อนมาคลินิก",
      title: "ขั้นตอนที่คาดหวังได้",
      items: [
        { title: "1. ติดต่อเพื่อสอบถาม", body: "เลือก LINE โทรศัพท์ หรือ WhatsApp เพื่อสอบถามข้อมูลทั่วไปและเวลาเข้ารับบริการ" },
        { title: "2. รับข้อมูลที่คลินิก", body: "ทีมคลินิกจะอธิบายขั้นตอน ข้อควรพิจารณา และข้อมูลที่เกี่ยวข้องก่อนตัดสินใจ" },
        { title: "3. พิจารณาความเหมาะสม", body: "การให้บริการขึ้นกับการประเมินตามข้อมูลสุขภาพและความเหมาะสมของแต่ละบุคคล" },
      ],
    },
    safety: {
      eyebrow: "ข้อมูลสำคัญ",
      title: "เตรียมข้อมูลเพื่อคุยกับทีมคลินิก",
      body: "หากนัดหมาย โปรดแจ้งข้อมูลด้านสุขภาพที่เกี่ยวข้องกับผู้ให้บริการทางการแพทย์ที่คลินิก เพื่อให้พิจารณาได้อย่างเหมาะสม",
      items: [
        "แจ้งยาที่ใช้อยู่ อาการแพ้ และประวัติสุขภาพที่เกี่ยวข้องเมื่อมาถึงคลินิก",
        "สอบถามข้อควรระวัง ความเสี่ยง และขั้นตอนที่เกี่ยวข้องก่อนตัดสินใจ",
        "ผลลัพธ์และความเหมาะสมอาจแตกต่างกันในแต่ละบุคคล",
      ],
    },
    privacy: {
      title: "คุ้มครองข้อมูลส่วนบุคคล",
      body: "เพื่อความเป็นส่วนตัว ไม่ควรส่งผลตรวจ ประวัติสุขภาพ หรือข้อมูลส่วนบุคคลที่ละเอียดอ่อนผ่านข้อความสาธารณะ โปรดปรึกษารายละเอียดกับทีมคลินิกโดยตรง",
    },
    location: { eyebrow: "ที่ตั้งและเวลาเปิด", title: "เดินทางมาที่ PMC Koh Sirey", hoursTitle: "เวลาเปิดทำการ", addressTitle: "ที่อยู่", mapsCta: "นำทางด้วย Google Maps" },
    contact: { eyebrow: "ติดต่อ PMC Koh Sirey", title: "สอบถามข้อมูลและนัดหมาย", body: "เลือกช่องทางที่สะดวกเพื่อสอบถามข้อมูลบริการ IV drip เวลาเปิด และการนัดหมาย" },
    disclaimer: "บริการและขั้นตอนขึ้นอยู่กับการประเมินเป็นรายบุคคล โปรดรับคำแนะนำจากผู้ให้บริการทางการแพทย์ที่คลินิกก่อนตัดสินใจ",
    footer: { home: "หน้าแรก", privacy: "นโยบายความเป็นส่วนตัว", terms: "ข้อกำหนดและเงื่อนไข", rights: "สงวนลิขสิทธิ์" },
  },
  my: {
    languageLabel: "ဘာသာစကား",
    nav: { overview: "ဝန်ဆောင်မှုအချက်အလက်", whatToExpect: "မလာမီ", safety: "အရေးကြီးအချက်အလက်", location: "မြေပုံ", contact: "ဆက်သွယ်ရန်" },
    hero: {
      eyebrow: "PMC Koh Sirey · Phuket",
      title: "PMC Koh Sirey တွင် IV Drip ဝန်ဆောင်မှုအကြောင်း မေးမြန်းရန်",
      body: "အချက်အလက်နှင့် ချိန်းဆိုမှုအတွက် ဆေးခန်းအဖွဲ့ကို ဆက်သွယ်ပါ။ ဝန်ဆောင်မှုမပေးမီ သင့်လျော်မှုကို အကဲဖြတ်ပေးပါမည်",
      openingHours: "နေ့စဉ် 09:00–20:00 ဖွင့်ပါသည်",
      location: "Koh Sirey · Phuket",
    },
    assessmentPhrase: "သင့်လျော်မှုကို အကဲဖြတ်",
    actions: { line: "LINE မှ မေးမြန်းရန်", call: "ဖုန်းဖြင့် မေးမြန်းရန်", whatsapp: "WhatsApp မှ စာပို့ရန်", map: "Google Maps တွင်ဖွင့်ရန်", enquire: "ဝန်ဆောင်မှုအကြောင်း မေးမြန်းရန်" },
    overview: {
      eyebrow: "IV Drip information",
      title: "မလာရောက်မီ သိထားသင့်သော အချက်အလက်",
      body: "IV drip သည် သွေးကြောမှတစ်ဆင့် အရည်ပေးသည့် ဝန်ဆောင်မှုတစ်ခုဖြစ်ပါသည်။ ဝန်ဆောင်မှုနှင့် အသေးစိတ်အချက်အလက်များသည် တစ်ဦးချင်းစီအလိုက် ကွာခြားနိုင်သောကြောင့် ဆုံးဖြတ်မီ ဆေးခန်းတွင် အချက်အလက်နှင့် အကဲဖြတ်မှုကို ရယူသင့်ပါသည်။",
      note: "ဤစာမျက်နှာသည် အထွေထွေအချက်အလက်အတွက်သာဖြစ်ပြီး ဆေးဘက်ဆိုင်ရာကျွမ်းကျင်သူ၏ ရောဂါရှာဖွေခြင်း၊ အကြံပြုချက် သို့မဟုတ် ကုသမှုကို အစားမထိုးပါ။",
    },
    whatToExpect: {
      eyebrow: "မလာမီ",
      title: "မျှော်လင့်နိုင်သော အဆင့်များ",
      items: [
        { title: "1. အချက်အလက်မေးမြန်းရန် ဆက်သွယ်ပါ", body: "အထွေထွေအချက်အလက်နှင့် လာရောက်ချိန်အတွက် LINE၊ ဖုန်း သို့မဟုတ် WhatsApp ကို ရွေးချယ်နိုင်ပါသည်" },
        { title: "2. ဆေးခန်းတွင် အချက်အလက်ရယူပါ", body: "ဆုံးဖြတ်မီ ဆေးခန်းအဖွဲ့က လုပ်ငန်းစဉ်၊ စဉ်းစားရမည့်အချက်များနှင့် သက်ဆိုင်ရာ အချက်အလက်များကို ရှင်းပြပါမည်" },
        { title: "3. သင့်လျော်မှုကို စဉ်းစားပါ", body: "ဝန်ဆောင်မှုပေးခြင်းသည် တစ်ဦးချင်း၏ ကျန်းမာရေးအချက်အလက်နှင့် သင့်လျော်မှုအပေါ် မူတည်ပါသည်" },
      ],
    },
    safety: {
      eyebrow: "အရေးကြီးအချက်အလက်",
      title: "ဆေးခန်းအဖွဲ့နှင့် ဆွေးနွေးရန် အချက်အလက်များ",
      body: "ချိန်းဆိုထားပါက သင့်လျော်သော စဉ်းစားမှုအတွက် ဆေးခန်းသို့ရောက်သောအခါ သက်ဆိုင်ရာ ကျန်းမာရေးအချက်အလက်များကို ဆေးဘက်ဆိုင်ရာ ဝန်ဆောင်မှုပေးသူနှင့် မျှဝေပါ။",
      items: [
        "ဆေးခန်းသို့ရောက်သောအခါ သောက်သုံးနေသောဆေးများ၊ ဓာတ်မတည့်မှုများနှင့် သက်ဆိုင်ရာ ကျန်းမာရေးမှတ်တမ်းကို အသိပေးပါ",
        "မဆုံးဖြတ်မီ သတိပြုရန်အချက်များ၊ အန္တရာယ်များနှင့် လုပ်ငန်းစဉ်များကို မေးမြန်းပါ",
        "ရလဒ်နှင့် သင့်လျော်မှုသည် တစ်ဦးချင်းစီအလိုက် ကွာခြားနိုင်ပါသည်",
      ],
    },
    privacy: { title: "ကိုယ်ရေးအချက်အလက် ကာကွယ်မှု", body: "ကိုယ်ရေးအတွက် စစ်ဆေးမှုရလဒ်၊ ကျန်းမာရေးမှတ်တမ်း သို့မဟုတ် အရေးကြီးကိုယ်ရေးအချက်အလက်များကို အများမြင်နိုင်သော မက်ဆေ့ခ်ျမှ မပို့ပါနှင့်။ အသေးစိတ်ကို ဆေးခန်းအဖွဲ့နှင့် တိုက်ရိုက်ဆွေးနွေးပါ။" },
    location: { eyebrow: "တည်နေရာနှင့် ဖွင့်ချိန်", title: "PMC Koh Sirey သို့ လာရောက်ရန်", hoursTitle: "ဖွင့်ချိန်", addressTitle: "လိပ်စာ", mapsCta: "Google Maps ဖြင့် လမ်းညွှန်ရန်" },
    contact: { eyebrow: "PMC Koh Sirey ကို ဆက်သွယ်ရန်", title: "အချက်အလက်နှင့် ချိန်းဆိုမှုအတွက် ဆက်သွယ်ပါ", body: "IV drip ဝန်ဆောင်မှုအချက်အလက်၊ ဖွင့်ချိန်နှင့် ချိန်းဆိုမှုအတွက် အဆင်ပြေသောနည်းလမ်းကို ရွေးချယ်ပါ" },
    disclaimer: "ဝန်ဆောင်မှုနှင့် လုပ်ငန်းစဉ်များသည် တစ်ဦးချင်း အကဲဖြတ်မှုအပေါ် မူတည်ပါသည်။ မဆုံးဖြတ်မီ ဆေးခန်းရှိ ဆေးဘက်ဆိုင်ရာ ဝန်ဆောင်မှုပေးသူထံမှ အကြံပြုချက် ရယူပါ။",
    footer: { home: "ပင်မစာမျက်နှာ", privacy: "ကိုယ်ရေးအချက်အလက် မူဝါဒ", terms: "စည်းမျဉ်းနှင့် သတ်မှတ်ချက်များ", rights: "မူပိုင်ခွင့်အားလုံး ရယူထားသည်" },
  },
  en: {
    languageLabel: "Language",
    nav: { overview: "Service information", whatToExpect: "Before your visit", safety: "Important information", location: "Map", contact: "Contact" },
    hero: {
      eyebrow: "PMC Koh Sirey · Phuket",
      title: "Ask about IV Drip service at PMC Koh Sirey",
      body: "Contact the clinic team for general information and an appointment. An assessment of suitability is completed before service is provided.",
      openingHours: "Open daily, 9:00 AM–8:00 PM",
      location: "Koh Sirey · Phuket",
    },
    assessmentPhrase: "assessment of suitability",
    actions: { line: "Ask on LINE", call: "Call the clinic", whatsapp: "Message on WhatsApp", map: "Open in Google Maps", enquire: "Ask about the service" },
    overview: {
      eyebrow: "IV Drip information",
      title: "Information to consider before your visit",
      body: "IV drip is a service that delivers fluids through a vein. Service details and suitability vary by person, so please receive information and an assessment at the clinic before deciding.",
      note: "This page provides general information only. It does not replace diagnosis, advice, or care from a qualified medical professional.",
    },
    whatToExpect: {
      eyebrow: "Before your visit",
      title: "What you can expect",
      items: [
        { title: "1. Contact the clinic", body: "Use LINE, phone, or WhatsApp for general information and to ask about a suitable visit time." },
        { title: "2. Receive information at the clinic", body: "The clinic team can explain the process, points to consider, and relevant information before you decide." },
        { title: "3. Consider individual suitability", body: "Whether a service is provided depends on health information and individual suitability." },
      ],
    },
    safety: {
      eyebrow: "Important information",
      title: "Information to discuss with the clinic team",
      body: "If you arrange a visit, share relevant health information with the medical provider at the clinic so it can be considered appropriately.",
      items: [
        "Tell the clinic about current medicines, allergies, and relevant health history when you arrive",
        "Ask about precautions, risks, and relevant steps before deciding",
        "Suitability and outcomes can vary between individuals",
      ],
    },
    privacy: { title: "Protect your personal information", body: "For privacy, please do not send test results, medical history, or sensitive personal information in public messages. Discuss details directly with the clinic team." },
    location: { eyebrow: "Location and opening hours", title: "Visit PMC Koh Sirey", hoursTitle: "Opening hours", addressTitle: "Address", mapsCta: "Get directions in Google Maps" },
    contact: { eyebrow: "Contact PMC Koh Sirey", title: "Ask for information or an appointment", body: "Choose the most convenient channel to ask about IV drip service information, opening hours, and appointments." },
    disclaimer: "Service and process depend on an individual assessment. Please receive advice from the medical provider at the clinic before deciding.",
    footer: { home: "Home", privacy: "Privacy Policy", terms: "Terms & Conditions", rights: "All rights reserved" },
  },
};
