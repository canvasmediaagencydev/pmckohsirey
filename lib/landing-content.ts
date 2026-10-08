export const supportedLocales = ["th", "my"] as const;

export type LandingLocale = (typeof supportedLocales)[number];

type Copy = {
  nav: {
    services: string;
    pricing: string;
    location: string;
    contact: string;
  };
  languageLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    openingHours: string;
    location: string;
  };
  actions: {
    call: string;
    line: string;
    whatsapp: string;
    map: string;
    book: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    body: string;
    contactForPrice: string;
    note: string;
  };
  services: {
    eyebrow: string;
    title: string;
    items: ReadonlyArray<{ title: string; description: string; image: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    points: readonly string[];
  };
  location: {
    eyebrow: string;
    title: string;
    hoursTitle: string;
    addressTitle: string;
    mapsCta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: ReadonlyArray<{ question: string; answer: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    line: string;
    call: string;
  };
  footer: {
    privacy: string;
    terms: string;
    rights: string;
  };
};

export type PriceItem = {
  serviceId: string;
  name: Record<LandingLocale, string>;
  price: string;
  isFromPrice: boolean;
  note?: Record<LandingLocale, string>;
};

// Never add prices here until the clinic approves the current price list and its conditions.
export const pricingItems: readonly PriceItem[] = [];

export const landingCopy: Record<LandingLocale, Copy> = {
  th: {
    nav: {
      services: "บริการ",
      pricing: "ราคา",
      location: "แผนที่",
      contact: "ติดต่อเรา",
    },
    languageLabel: "ภาษา",
    hero: {
      eyebrow: "PMC Koh Sirey · Phuket",
      title: "ดูแลสุขภาพอย่างใกล้ชิด ในเกาะสิเหร่",
      body: "คลินิกสำหรับผู้พักอาศัยและนักท่องเที่ยว พร้อมให้คำปรึกษาและบริการทางการแพทย์ตามเวลาทำการ",
      openingHours: "เปิดทุกวัน 09:00–20:00 น.",
      location: "เกาะสิเหร่ · เมืองภูเก็ต",
    },
    actions: {
      call: "โทรหาเรา",
      line: "นัดหมายผ่าน LINE",
      whatsapp: "แชต WhatsApp",
      map: "เปิดใน Google Maps",
      book: "นัดหมาย / สอบถาม",
    },
    pricing: {
      eyebrow: "ค่าบริการ",
      title: "สอบถามราคาได้ก่อนเข้ารับบริการ",
      body: "ค่าบริการขึ้นอยู่กับอาการ รายการตรวจ และคำแนะนำของแพทย์ กรุณาติดต่อทีมงานเพื่อรับข้อมูลล่าสุดก่อนเข้ารับบริการ",
      contactForPrice: "สอบถามราคาใน LINE",
      note: "ราคาและบริการต้องยืนยันกับคลินิกก่อนเข้ารับบริการ",
    },
    services: {
      eyebrow: "บริการของเรา",
      title: "บริการสุขภาพที่เลือกได้ตามความต้องการ",
      items: [
        { title: "ตรวจสุขภาพและพบแพทย์", description: "ตรวจอาการ รับคำปรึกษา และวางแผนการดูแลต่อเนื่อง", image: "/solution/General-Medicine-and-Check-up.jpg" },
        { title: "ตรวจเลือด", description: "ตรวจทางห้องปฏิบัติการตามคำแนะนำของแพทย์", image: "/solution/Blood Test.jpg" },
        { title: "ดูแลบาดแผล", description: "ประเมิน ทำความสะอาด และทำแผลโดยทีมคลินิก", image: "/solution/Wound Care Services.jpg" },
        { title: "วัคซีน", description: "สอบถามวัคซีนที่เหมาะกับการเดินทางและการดูแลสุขภาพ", image: "/solution/Vaccination.jpg" },
        { title: "ตรวจสุขภาพประจำปี", description: "สอบถามรายการตรวจที่เหมาะสมกับความต้องการของคุณ", image: "/solution/AnnualCheck-up Programme.jpg" },
        { title: "บริการผู้ป่วยต่างชาติ", description: "ทีมงานช่วยประสานข้อมูลและการนัดหมาย", image: "/solution/International Medical Service.jpg" },
      ],
    },
    about: {
      eyebrow: "PMC Koh Sirey",
      title: "คลินิกที่เข้าถึงง่าย ใกล้คุณในภูเก็ต",
      body: "เรามุ่งให้ข้อมูลชัดเจนและดูแลผู้รับบริการด้วยความสุภาพ โดยทีมงานจะช่วยแนะนำขั้นตอนการเข้ารับบริการตามความเหมาะสม",
      points: ["เปิดทุกวัน 09:00–20:00 น.", "ติดต่อได้ทางโทรศัพท์ LINE และ WhatsApp", "ดูตำแหน่งคลินิกได้ทันทีผ่าน Google Maps"],
    },
    location: {
      eyebrow: "ที่ตั้งและเวลาเปิด",
      title: "เดินทางมาที่ PMC Koh Sirey",
      hoursTitle: "เวลาเปิดทำการ",
      addressTitle: "ที่อยู่",
      mapsCta: "นำทางด้วย Google Maps",
    },
    faq: {
      eyebrow: "คำถามที่พบบ่อย",
      title: "ข้อมูลก่อนเข้ารับบริการ",
      items: [
        { question: "จำเป็นต้องนัดหมายล่วงหน้าหรือไม่?", answer: "คุณสามารถติดต่อคลินิกเพื่อสอบถามคิวและนัดหมายล่วงหน้าได้" },
        { question: "คลินิกเปิดวันไหนบ้าง?", answer: "คลินิกเปิดทุกวัน เวลา 09:00–20:00 น." },
        { question: "สอบถามราคาได้อย่างไร?", answer: "ส่งรายละเอียดที่ต้องการใน LINE หรือโทรหาเรา ทีมงานจะแนะนำข้อมูลเบื้องต้นให้" },
      ],
    },
    contact: {
      eyebrow: "ติดต่อ PMC Koh Sirey",
      title: "พร้อมช่วยประสานการนัดหมายของคุณ",
      body: "เลือกช่องทางที่สะดวกเพื่อสอบถามบริการ เวลา และข้อมูลเบื้องต้นก่อนเข้าคลินิก",
      line: "ติดต่อผ่าน LINE",
      call: "โทรหา PMC Koh Sirey",
    },
    footer: { privacy: "นโยบายความเป็นส่วนตัว", terms: "ข้อกำหนดและเงื่อนไข", rights: "สงวนลิขสิทธิ์" },
  },
  my: {
    nav: { services: "ဝန်ဆောင်မှုများ", pricing: "စျေးနှုန်း", location: "မြေပုံ", contact: "ဆက်သွယ်ရန်" },
    languageLabel: "ဘာသာစကား",
    hero: {
      eyebrow: "PMC Koh Sirey · Phuket",
      title: "Koh Sirey တွင် သင့်ကျန်းမာရေးအတွက် ဂရုစိုက်မှု",
      body: "ဒေသခံများနှင့် ခရီးသွားများအတွက် ဆေးခန်းဝန်ဆောင်မှုများနှင့် အခြေခံအကြံပြုချက်များကို ဖွင့်ချိန်အတွင်း ရရှိနိုင်ပါသည်။",
      openingHours: "နေ့စဉ် 09:00–20:00 ဖွင့်ပါသည်",
      location: "Koh Sirey · Phuket",
    },
    actions: { call: "ဖုန်းခေါ်ရန်", line: "LINE မှ ချိန်းဆိုရန်", whatsapp: "WhatsApp မှ စာပို့ရန်", map: "Google Maps တွင်ဖွင့်ရန်", book: "ချိန်းဆိုရန် / မေးမြန်းရန်" },
    pricing: {
      eyebrow: "ဝန်ဆောင်ခ",
      title: "လာရောက်မီ စျေးနှုန်းမေးမြန်းနိုင်ပါသည်",
      body: "ဝန်ဆောင်ခသည် လက္ခဏာ၊ စစ်ဆေးမှုနှင့် ဆရာဝန်၏ အကြံပြုချက်ပေါ်မူတည်ပါသည်။ နောက်ဆုံးအချက်အလက်အတွက် ဆေးခန်းအဖွဲ့ကို ဆက်သွယ်ပါ။",
      contactForPrice: "LINE မှ စျေးနှုန်းမေးရန်",
      note: "ဝန်ဆောင်ခနှင့် ဝန်ဆောင်မှုကို လာရောက်မီ ဆေးခန်းနှင့် အတည်ပြုပါ",
    },
    services: {
      eyebrow: "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ",
      title: "သင့်လိုအပ်ချက်အတွက် ကျန်းမာရေးဝန်ဆောင်မှုများ",
      items: [
        { title: "ကျန်းမာရေးစစ်ဆေးခြင်းနှင့် ဆရာဝန်ပြခြင်း", description: "လက္ခဏာစစ်ဆေးခြင်း၊ အကြံပြုချက်နှင့် ဆက်လက်စောင့်ရှောက်မှု", image: "/solution/General-Medicine-and-Check-up.jpg" },
        { title: "သွေးစစ်ဆေးခြင်း", description: "ဆရာဝန်အကြံပြုချက်အတိုင်း ဓာတ်ခွဲစစ်ဆေးမှု", image: "/solution/Blood Test.jpg" },
        { title: "အနာကုသခြင်း", description: "ဆေးခန်းအဖွဲ့မှ အနာစစ်ဆေးခြင်း၊ သန့်ရှင်းရေးနှင့် ဆေးထည့်ပေးခြင်း", image: "/solution/Wound Care Services.jpg" },
        { title: "ကာကွယ်ဆေး", description: "ခရီးသွားခြင်းနှင့် ကျန်းမာရေးအတွက် သင့်တော်သော ကာကွယ်ဆေးများကို မေးမြန်းနိုင်ပါသည်", image: "/solution/Vaccination.jpg" },
        { title: "နှစ်စဉ်ကျန်းမာရေးစစ်ဆေးမှု", description: "သင့်လိုအပ်ချက်နှင့် ကိုက်ညီသော စစ်ဆေးမှုများကို မေးမြန်းနိုင်ပါသည်", image: "/solution/AnnualCheck-up Programme.jpg" },
        { title: "နိုင်ငံတကာလူနာ ဝန်ဆောင်မှု", description: "အဖွဲ့မှ အချက်အလက်နှင့် ချိန်းဆိုမှုအတွက် ကူညီပေးပါသည်", image: "/solution/International Medical Service.jpg" },
      ],
    },
    about: {
      eyebrow: "PMC Koh Sirey",
      title: "Phuket တွင် သင့်အနီးက ဆေးခန်း",
      body: "အချက်အလက်ကို ရှင်းလင်းစွာပေးပြီး သင့်လျော်သော ဝန်ဆောင်မှုအဆင့်များအတွက် ယဉ်ကျေးစွာ လမ်းညွှန်ပေးရန် ကြိုးစားပါသည်။",
      points: ["နေ့စဉ် 09:00–20:00 ဖွင့်ပါသည်", "ဖုန်း၊ LINE နှင့် WhatsApp မှ ဆက်သွယ်နိုင်သည်", "Google Maps မှ ဆေးခန်းတည်နေရာကြည့်နိုင်သည်"],
    },
    location: { eyebrow: "တည်နေရာနှင့် ဖွင့်ချိန်", title: "PMC Koh Sirey သို့ လာရောက်ရန်", hoursTitle: "ဖွင့်ချိန်", addressTitle: "လိပ်စာ", mapsCta: "Google Maps ဖြင့် လမ်းညွှန်ရန်" },
    faq: {
      eyebrow: "မေးလေ့ရှိသော မေးခွန်းများ",
      title: "လာရောက်မီ အချက်အလက်",
      items: [
        { question: "ကြိုတင်ချိန်းဆိုရန် လိုအပ်ပါသလား?", answer: "ချိန်းဆိုမှုနှင့် အချိန်စာရင်းအတွက် ဆေးခန်းကို ဆက်သွယ်မေးမြန်းနိုင်ပါသည်" },
        { question: "ဆေးခန်းကို ဘယ်နေ့ဖွင့်ပါသလဲ?", answer: "ဆေးခန်းကို နေ့စဉ် 09:00–20:00 ဖွင့်ပါသည်" },
        { question: "စျေးနှုန်းကို ဘယ်လိုမေးနိုင်ပါသလဲ?", answer: "LINE မှ လိုအပ်သော ဝန်ဆောင်မှုကို ပို့ပါ သို့မဟုတ် ဖုန်းခေါ်ပါ၊ အဖွဲ့မှ အခြေခံအချက်အလက်ကို ကူညီပေးပါမည်" },
      ],
    },
    contact: { eyebrow: "PMC Koh Sirey ကို ဆက်သွယ်ရန်", title: "သင့်ချိန်းဆိုမှုအတွက် ကူညီရန် အသင့်ရှိပါသည်", body: "ဆေးခန်းလာရောက်မီ ဝန်ဆောင်မှု၊ အချိန်နှင့် အခြေခံအချက်အလက်များကို မေးမြန်းရန် အဆင်ပြေသော လမ်းကြောင်းကို ရွေးချယ်ပါ", line: "LINE မှ ဆက်သွယ်ရန်", call: "PMC Koh Sirey ကို ဖုန်းခေါ်ရန်" },
    footer: { privacy: "ကိုယ်ရေးအချက်အလက် မူဝါဒ", terms: "စည်းမျဉ်းနှင့် သတ်မှတ်ချက်များ", rights: "မူပိုင်ခွင့်အားလုံး ရယူထားသည်" },
  },
};
