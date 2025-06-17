// src/data/testimonials.ts (BATCH 3 - PART 1)
// This batch ensures every service has at least 3 dedicated testimonials.

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  serviceId: string;
  city: string;
  date: string;
}

// NOTE: This array should APPEND to your existing 100 testimonials.
// For clarity here, I'm starting from t-101.
// In your final code, you would add these objects to the end of the previous array.

export const testimonials_batch_3: Testimonial[] = [

  // ======================================================
  // CATEGORY: AC Services
  // ======================================================

  // === 1. Split AC Deep Cleaning (split-ac-cleaning) ===
  {
    id: 't-101',
    name: 'سالم الحربي',
    rating: 5,
    comment: 'المكيف رجع ثلاجة بعد الغسيل! الهواء صار منعش والبرودة فرقت كثير. الفني كان محترف ونظيف.',
    serviceId: 'split-ac-cleaning',
    city: 'riyadh',
    date: '2025-06-25'
  },
  {
    id: 't-102',
    name: 'Noora Al-Jassmi',
    rating: 5,
    comment: 'My AC unit was dripping water inside the room. The technician came, did a deep clean, and completely cleared the drain pipe. Problem solved. Excellent service.',
    serviceId: 'split-ac-cleaning',
    city: 'dubai',
    date: '2025-07-10'
  },
  {
    id: 't-103',
    name: 'وليد الغامدي',
    rating: 5,
    comment: 'خدمة سنوية لا أستغني عنها قبل الصيف. غسيل المكيفات يحسن من أدائها بشكل ملحوظ ويقلل من استهلاك الكهرباء. شكراً لكم.',
    serviceId: 'split-ac-cleaning',
    city: 'jeddah',
    date: '2025-04-15'
  },

  // === 2. AC Freon (Gas) Refill (ac-freon-refill) ===
  {
    id: 't-104',
    name: 'شركة المقاولات الحديثة',
    rating: 5,
    comment: 'لدينا عدة مكيفات في مكاتب المشروع كانت تحتاج شحن فريون. قدموا لنا عرض سعر ممتاز وقاموا بالعمل لكافة الوحدات في يوم واحد.',
    serviceId: 'ac-freon-refill',
    city: 'dammam',
    date: '2025-07-01'
  },
  {
    id: 't-105',
    name: 'أبو ناصر',
    rating: 5,
    comment: 'المكيف كان يطلع هواء حار فقط. الفني فحص الضغط واكتشف نقص الفريون. بعد التعبئة رجع يبرد بشكل ممتاز. خدمة سريعة.',
    serviceId: 'ac-freon-refill',
    city: 'kuwait-city',
    date: '2025-06-28'
  },
  {
    id: 't-106',
    name: 'Fatima Al Muhairi',
    rating: 5,
    comment: 'The technician was very honest. He checked for leaks before refilling and advised me on how to maintain the AC. Trustworthy service.',
    serviceId: 'ac-freon-refill',
    city: 'abu-dhabi',
    date: '2025-07-12'
  },

  // ======================================================
  // CATEGORY: Plumbing
  // ======================================================

  // === 3. Emergency Plumbing & Leak Repair (emergency-plumbing-leaks) ===
  {
    id: 't-107',
    name: 'سيدة من سكان الروضة',
    rating: 5,
    comment: 'ماسورة المطبخ انفجرت الساعة ٢ بالليل. تواصلت معهم ووصل السباك خلال ٤٥ دقيقة. أنقذ الموقف فعلاً، خدمة طوارئ حقيقية.',
    serviceId: 'emergency-plumbing-leaks',
    city: 'jeddah',
    date: '2025-06-19'
  },
  {
    id: 't-108',
    name: 'مدير بناية',
    rating: 5,
    comment: 'حصل انسداد في الصرف الرئيسي للمبنى. أحضروا سيارة ضغط عالي وقاموا بتسليك الخط بالكامل. محترفون ويعرفون ماذا يفعلون.',
    serviceId: 'emergency-plumbing-leaks',
    city: 'riyadh',
    date: '2025-05-30'
  },
  {
    id: 't-109',
    name: 'أحمد المصري',
    rating: 5,
    comment: 'المرحاض كان يفيض ومفيش حاجة نفعته. السباك جه ومعاه أدوات حديثة وحل المشكلة في وقت قليل. خدمة ممتازة.',
    serviceId: 'emergency-plumbing-leaks',
    city: 'central-cairo',
    date: '2025-07-14'
  },
  
  // ======================================================
  // CATEGORY: Electrical Services
  // ======================================================

  // === 4. Light Fixture & Chandelier Installation (light-fixture-installation) ===
  {
    id: 't-110',
    name: 'مها خالد',
    rating: 5,
    comment: 'غيرت كل إضاءة الشقة لسبوت لايت. الكهربائي شغله نظيف جداً ودقيق في المقاسات والتوزيع. الشقة صارت أوسع وأنور.',
    serviceId: 'light-fixture-installation',
    city: 'new-cairo',
    date: '2025-06-05'
  },
  {
    id: 't-111',
    name: 'يوسف العلي',
    rating: 5,
    comment: 'اشتريت ثريا كريستال ثقيلة جداً وكنت خايف من تركيبها. الفني أحضر معه الأدوات اللازمة وقام بتثبيتها في السقف بشكل آمن جداً. محترف.',
    serviceId: 'light-fixture-installation',
    city: 'khobar',
    date: '2025-07-02'
  },
  {
    id: 't-112',
    name: 'Designer Living (محل ديكور)',
    rating: 5,
    comment: 'نعتمد عليهم في تركيب وحدات الإضاءة لعملائنا. دقة في المواعيد واحترافية في التعامل، مما يعكس صورة إيجابية عن شركتنا.',
    serviceId: 'light-fixture-installation',
    city: 'dubai',
    date: '2025-05-20'
  },

  // ======================================================
  // CATEGORY: Appliance Repair
  // ======================================================
  
  // === 5. Washing Machine & Dryer Repair (washing-machine-repair) ===
  {
    id: 't-113',
    name: 'أم محمد',
    rating: 5,
    comment: 'الغسالة ما كانت بتعصر الملابس. الفني كشف عليها وغير قطعة بسيطة ورجعت تشتغل زي الأول. وفر عليّ ثمن غسالة جديدة.',
    serviceId: 'washing-machine-repair',
    city: 'riyadh',
    date: '2025-07-18'
  },
  {
    id: 't-114',
    name: 'سعاد كامل',
    rating: 5,
    comment: 'النشافة الحرارية كانت بتطلع صوت مزعج. الفني عرف المشكلة من سير الموتور وقام بتغييره. خدمة سريعة وسعر معقول.',
    serviceId: 'washing-machine-repair',
    city: 'alexandria',
    date: '2025-06-29'
  },
  {
    id: 't-115',
    name: 'Adel Mansour',
    rating: 4,
    comment: 'The washing machine stopped mid-cycle. The technician diagnosed an issue with the electronic board. The repair took two days because they had to order the part, but now it works perfectly.',
    serviceId: 'washing-machine-repair',
    city: 'kuwait-city',
    date: '2025-07-08'
  }
];
// src/data/testimonials.ts (BATCH 3 - PART 2)
// NOTE: This array should APPEND to the previous parts.
// I'm continuing the ID sequence from t-116.

export const testimonials_batch_3_part_2: Testimonial[] = [

  // ======================================================
  // CATEGORY: Residential Cleaning
  // ======================================================

  // === 6. Sofa & Upholstery Deep Cleaning (sofa-deep-cleaning) ===
  {
    id: 't-116',
    name: 'سارة العبدالله',
    rating: 5,
    comment: 'عندي طفل صغير والكنب كان مليان بقع عصير وأكل. بعد خدمة التنظيف العميق، رجع كأنه جديد. أهم شي المواد آمنة على الأطفال.',
    serviceId: 'sofa-deep-cleaning',
    city: 'riyadh',
    date: '2025-07-15'
  },
  {
    id: 't-117',
    name: 'مكتب استقبال شركة',
    rating: 5,
    comment: 'نطلب خدمة تنظيف كراسي الاستقبال بشكل دوري. الفريق محترف ويأتي في مواعيد مرنة بعد ساعات العمل. يحافظ على صورة الشركة أمام الزوار.',
    serviceId: 'sofa-deep-cleaning',
    city: 'dubai',
    date: '2025-06-20'
  },
  {
    id: 't-118',
    name: 'مدام هدى',
    rating: 5,
    comment: 'المجالس العربية كانت تحتاج تنظيف قبل العيد. النتيجة كانت ممتازة، رجعت ألوانها زاهية واختفت كل الروائح. شغلهم يستاهل.',
    serviceId: 'sofa-deep-cleaning',
    city: 'jeddah',
    date: '2025-03-25'
  },

  // === 7. Carpet & Rug Shampooing (carpet-shampooing) ===
  {
    id: 't-119',
    name: 'فيصل القاسم',
    rating: 5,
    comment: 'موكيت المكتب في منطقة الحركة كان لونه غامق من كثرة الاستخدام. بعد الغسيل بالشامبو، الفرق كان واضح جداً. خدمة ممتازة.',
    serviceId: 'carpet-shampooing',
    city: 'dammam',
    date: '2025-05-10'
  },
  {
    id: 't-120',
    name: 'Abeer Mostafa',
    rating: 4,
    comment: 'I have an expensive Persian rug and was worried about cleaning it. They handled it with care and the result was great. It took a bit longer to dry than I expected, but it was worth it.',
    serviceId: 'carpet-shampooing',
    city: 'new-cairo',
    date: '2025-06-12'
  },
  {
    id: 't-121',
    name: 'بيت العائلة',
    rating: 5,
    comment: 'غسلنا كل سجاد البيت قبل رمضان. الفريق كان سريع ومنظم، والأسعار كانت معقولة جداً مقارنة بالجودة.',
    serviceId: 'carpet-shampooing',
    city: 'makkah',
    date: '2025-02-20'
  },

  // === 8. Water Tank Cleaning & Disinfection (water-tank-cleaning) ===
  {
    id: 't-122',
    name: 'عبدالرحمن المطيري',
    rating: 5,
    comment: 'كانت المياه لها طعم ورائحة غريبة. بعد تنظيف وتعقيم الخزان، المشكلة اختفت تماماً. الآن أشرب من المياه وأنا مطمئن. خدمة ضرورية لكل بيت.',
    serviceId: 'water-tank-cleaning',
    city: 'kuwait-city',
    date: '2025-07-05'
  },
  {
    id: 't-123',
    name: 'لجنة اتحاد الملاك',
    rating: 5,
    comment: 'نتعاقد معهم سنوياً لتنظيف الخزانات الرئيسية للعمارة. يقدمون لنا تقرير مفصل بالصور قبل وبعد. ملتزمون بمعايير السلامة والنظافة.',
    serviceId: 'water-tank-cleaning',
    city: 'alexandria',
    date: '2025-04-30'
  },
  {
    id: 't-124',
    name: 'أم راشد',
    rating: 5,
    comment: 'الفريق كان محترف جداً، قاموا بتفريغ الخزان وإزالة كل الرواسب والطين المتراكم في القاع. خدمة تستحق كل درهم.',
    serviceId: 'water-tank-cleaning',
    city: 'abu-dhabi',
    date: '2025-06-01'
  },

  // ======================================================
  // CATEGORY: Pest Control
  // ======================================================
  
  // === 9. General Pest Control (Ants, Cockroaches) (general-pest-control) ===
  {
    id: 't-125',
    name: 'صاحبة مطبخ',
    rating: 5,
    comment: 'نعاني من الصراصير بسبب طبيعة العمل. خدمة المكافحة بالجل كانت فعالة وآمنة للاستخدام في منطقة تحضير الطعام. نعتمد عليهم شهرياً.',
    serviceId: 'general-pest-control',
    city: 'jeddah',
    date: '2025-07-11'
  },
  {
    id: 't-126',
    name: 'سكان شقة جديدة',
    rating: 5,
    comment: 'طلبنا خدمة رش وقائي للشقة قبل السكن. الفريق رش كل الزوايا والمصارف. خدمة ممتازة لراحة البال.',
    serviceId: 'general-pest-control',
    city: 'new-capital',
    date: '2025-05-18'
  },
  {
    id: 't-127',
    name: 'خالد',
    rating: 5,
    comment: 'مسارات النمل كانت في كل مكان. الفني استخدم مبيد بدون رائحة واختفى النمل في نفس اليوم. خدمة سريعة وفعالة.',
    serviceId: 'general-pest-control',
    city: 'riyadh',
    date: '2025-06-22'
  },

  // === 10. Rodent Control (Rats & Mice) (rodent-control) ===
  {
    id: 't-128',
    name: 'صاحب محل بقالة',
    rating: 5,
    comment: 'مكافحة الفئران ضرورية لسمعة المحل. يستخدمون محطات طعم آمنة ومغلقة لا يمكن للأطفال الوصول إليها. برنامج المتابعة لديهم ممتاز.',
    serviceId: 'rodent-control',
    city: 'central-giza',
    date: '2025-06-15'
  },
  {
    id: 't-129',
    name: 'ساكن في فيلا',
    rating: 5,
    comment: 'سمعت أصوات خربشة في السقف المستعار. الفريق قام بتحديد أماكنها ووضع المصائد. تخلصت من المشكلة المزعجة.',
    serviceId: 'rodent-control',
    city: 'dubai',
    date: '2025-05-25'
  },
  {
    id: 't-130',
    name: 'مزرعة دواجن',
    rating: 5,
    comment: 'برنامج مكافحة القوارض الذي يقدمونه للمزارع متكامل وفعال. ساعدنا في تقليل الخسائر بشكل كبير. خبراء في مجالهم.',
    serviceId: 'rodent-control',
    city: 'jahra',
    date: '2025-04-10'
  },

  // === 11. Bird Control & Deterrent Installation (bird-control) ===
  {
    id: 't-131',
    name: 'فندق مطل على البحر',
    rating: 5,
    comment: 'الحمام كان يسبب إزعاج للنزلاء على البلكونات. تركيب الشبك الشفاف كان حلاً جمالياً وفعالاً جداً.',
    serviceId: 'bird-control',
    city: 'alexandria',
    date: '2025-03-12'
  },
  {
    id: 't-132',
    name: 'سكان عمارة',
    rating: 5,
    comment: 'قمنا بتركيب أشواك طاردة للحمام على كل أجهزة التكييف الخارجية للعمارة. تخلصنا من مشكلة الأعشاش والأوساخ بشكل نهائي.',
    serviceId: 'bird-control',
    city: 'kuwait-city',
    date: '2025-02-28'
  },
  {
    id: 't-133',
    name: 'مشعل العتيبي',
    rating: 5,
    comment: 'خدمة ممتازة. قاموا بتنظيف مكان الحمام وتعقيمه قبل تركيب الطارد. شغل متكامل ونظيف.',
    serviceId: 'bird-control',
    city: 'riyadh',
    date: '2025-07-08'
  }
];
// src/data/testimonials.ts (BATCH 3 - PART 3)
// NOTE: This array should APPEND to the previous parts.
// I'm continuing the ID sequence from t-134.

export const testimonials_batch_3_part_3: Testimonial[] = [

  // ======================================================
  // CATEGORY: Painting & Decor
  // ======================================================

  // === 12. Interior Wall Painting (interior-wall-painting) ===
  {
    id: 't-134',
    name: 'عروسان جديدان',
    rating: 5,
    comment: 'قمنا بطلاء شقتنا الجديدة بالكامل. الفريق ساعدنا في اختيار الألوان وتنسيقها بين الغرف. النتيجة النهائية كانت دافئة ومبهجة. بداية رائعة لحياتنا.',
    serviceId: 'interior-wall-painting',
    city: 'jeddah',
    date: '2025-06-10'
  },
  {
    id: 't-135',
    name: 'صاحب شقة قديمة',
    rating: 5,
    comment: 'الجدران كانت متشققة والدهان مقشر. قاموا بمعالجة كل العيوب وصنفرة الجدران قبل الطلاء. الشقة رجعت كأنها جديدة. شغل احترافي بمعنى الكلمة.',
    serviceId: 'interior-wall-painting',
    city: 'central-cairo',
    date: '2025-05-22'
  },
  {
    id: 't-136',
    name: 'مكتب ديكور',
    rating: 5,
    comment: 'نتعامل معهم كفريق دهانات معتمد لمشاريعنا. دائمًا ما يسلمون العمل بجودة عالية وتشطيب لا غبار عليه، مما يرضي عملائنا.',
    serviceId: 'interior-wall-painting',
    city: 'dubai',
    date: '2025-07-04'
  },

  // === 13. Exterior Wall Painting (exterior-wall-painting) ===
  {
    id: 't-137',
    name: 'مالك فيلا',
    rating: 5,
    comment: 'واجهة الفيلا كانت باهتة من الشمس. خدمة الدهان الخارجي أعادت لها الحياة. استخدموا دهانات بروفايل مقاومة للحرارة. أنصح بهم.',
    serviceId: 'exterior-wall-painting',
    city: 'riyadh',
    date: '2025-04-05'
  },
  {
    id: 't-138',
    name: 'لجنة صيانة مجمع سكني',
    rating: 5,
    comment: 'قمنا بإعادة طلاء جميع أسوار المجمع الخارجية. وفروا لنا السقالات اللازمة وقاموا بالعمل بسرعة وكفاءة وأمان.',
    serviceId: 'exterior-wall-painting',
    city: 'abu-dhabi',
    date: '2025-03-15'
  },
  {
    id: 't-139',
    name: 'سليمان',
    rating: 4,
    comment: 'العمل جيد جداً والدهان نوعيته ممتازة. لكن العمل أخذ وقتاً أطول بيومين من المتفق عليه بسبب أحوال الطقس.',
    serviceId: 'exterior-wall-painting',
    city: 'khobar',
    date: '2025-02-18'
  },
  
  // ======================================================
  // CATEGORY: Flooring & Tiling
  // ======================================================

  // === 14. Ceramic & Porcelain Tile Installation (tile-installation) ===
  {
    id: 't-140',
    name: 'أسرة تقوم بتجديد المطبخ',
    rating: 5,
    comment: 'قمنا بتغيير بلاط المطبخ بالكامل، أرضيات وجدران. المبلط كان فناناً، دقيق في القص والتركيب. المطبخ صار شرح وجميل.',
    serviceId: 'tile-installation',
    city: 'alexandria',
    date: '2025-06-28'
  },
  {
    id: 't-141',
    name: 'مقاول بناء',
    rating: 5,
    comment: 'أسندت لهم أعمال تبليط فيلا كاملة. فريقهم كبير ومنظم، واستخدموا الليزر لضمان استواء الأرضيات. وفروا عليّ الوقت وأعطوني جودة عالية.',
    serviceId: 'tile-installation',
    city: 'new-capital',
    date: '2025-05-01'
  },
  {
    id: 't-142',
    name: 'Faisal Al-Abdullah',
    rating: 5,
    comment: 'I replaced the old tiles in my bathroom. The team did the removal and installation. They also did the waterproofing before tiling. Very complete and professional job.',
    serviceId: 'tile-installation',
    city: 'kuwait-city',
    date: '2025-07-16'
  },

  // === 15. Marble Grinding & Polishing (Jaly) (marble-polishing-crystallization) ===
  {
    id: 't-143',
    name: 'صاحب قصر',
    rating: 5,
    comment: 'مدخل القصر رخامي وكان فاقد للمعة وبه خدوش. بعد خدمة الجلي والتلميع، عاد كأنه قطعة زجاج. عمل مبهر يعكس الفخامة.',
    serviceId: 'marble-polishing-crystallization',
    city: 'jeddah',
    date: '2025-04-20'
  },
  {
    id: 't-144',
    name: 'مدير فندق',
    rating: 5,
    comment: 'نقوم بجلي أرضيات اللوبي والرخام بشكل سنوي مع هذه الشركة. عملهم هادئ ونظيف، ويستخدمون تقنية حديثة تقلل الغبار بشكل كبير.',
    serviceId: 'marble-polishing-crystallization',
    city: 'dubai',
    date: '2025-01-25'
  },
  {
    id: 't-145',
    name: 'سيدة منزل',
    rating: 5,
    comment: 'الأرضية الرخام عندي كانت فيها فروقات بسيطة بين البلاط. خدمة الجلي قامت بتسوية الأرضية بالكامل وتلميعها. الآن أصبحت سطحاً واحداً ناعماً ولامعاً.',
    serviceId: 'marble-polishing-crystallization',
    city: 'riyadh',
    date: '2025-06-30'
  },

  // ======================================================
  // CATEGORY: Carpentry & Furniture
  // ======================================================
  
  // === 16. Door & Lock Installation & Repair (door-repair-installation) ===
  {
    id: 't-146',
    name: 'منصور',
    rating: 5,
    comment: 'باب الشقة كان لا يغلق جيداً ويصدر صريراً مزعجاً. النجار قام بوزنه وتزييت المفصلات. الآن يغلق بهدوء وسلاسة.',
    serviceId: 'door-repair-installation',
    city: 'sharjah',
    date: '2025-07-09'
  },
  {
    id: 't-147',
    name: 'شركة تطوير عقاري',
    rating: 5,
    comment: 'نتعاقد معهم لتركيب جميع الأبواب الخشبية وأقفالها في مشاريعنا السكنية. جودة في التركيب والتزام بالجدول الزمني.',
    serviceId: 'door-repair-installation',
    city: 'new-capital',
    date: '2025-06-01'
  },
  {
    id: 't-148',
    name: 'علياء',
    rating: 5,
    comment: 'أردت زيادة الأمان وقمت بتغيير كل أقفال الشقة. الفني كان سريعاً وقام بتركيب الأقفال الجديدة باحترافية.',
    serviceId: 'door-repair-installation',
    city: 'dammam',
    date: '2025-05-15'
  }
];
// src/data/testimonials.ts (BATCH 3 - PART 4)
// NOTE: This array should APPEND to the previous parts.
// I'm continuing the ID sequence from t-149.

export const testimonials_batch_3_part_4: Testimonial[] = [

  // ======================================================
  // CATEGORY: Moving, Assembly & Storage
  // ======================================================

  // === 17. Moving & Relocation Services (moving-relocation) ===
  {
    id: 't-149',
    name: 'أسرة تنتقل بين المدن',
    rating: 5,
    comment: 'كانت تجربة النقل من الدمام إلى الرياض خالية من أي قلق. الفريق قام بالتغليف والنقل والتركيب في البيت الجديد. كل شيء وصل سليماً. خدمة تريح الرأس.',
    serviceId: 'moving-relocation',
    city: 'dammam',
    date: '2025-06-20'
  },
  {
    id: 't-150',
    name: 'شركة ناشئة',
    rating: 5,
    comment: 'نقلنا مكاتبنا لمقر جديد. فريق النقل كان حريصاً جداً على الأجهزة الإلكترونية والملفات. قاموا بفك وتركيب المكاتب والطاولات باحترافية.',
    serviceId: 'moving-relocation',
    city: 'dubai',
    date: '2025-05-12'
  },
  {
    id: 't-151',
    name: 'أحمد وزوجته',
    rating: 5,
    comment: 'أفضل استثمار في عملية النقل هو التعاقد مع شركة محترفة. وفروا علينا مجهود ووقت كبير جداً. السعر كان معقولاً جداً مقابل الراحة التي حصلنا عليها.',
    serviceId: 'moving-relocation',
    city: 'new-cairo',
    date: '2025-07-11'
  },

  // === 18. Flat-Pack Furniture Assembly (furniture-assembly) ===
  {
    id: 't-152',
    name: 'طالب جامعي',
    rating: 5,
    comment: 'اشتريت أثاث مكتبي كامل من ايكيا وكنت في حيرة من أمري. الفني جاء وركبه في وقت قياسي وبدون أي أخطاء. خدمة ممتازة.',
    serviceId: 'furniture-assembly',
    city: 'jeddah',
    date: '2025-07-01'
  },
  {
    id: 't-153',
    name: 'أم لثلاثة أطفال',
    rating: 5,
    comment: 'تركيب سرير أطفال بدورين كان تحدياً كبيراً بالنسبة لي. خدمة التركيب كانت الحل الأمثل. الفني كان صبوراً ودقيقاً وتأكد من أن السرير آمن تماماً.',
    serviceId: 'furniture-assembly',
    city: 'riyadh',
    date: '2025-06-18'
  },
  {
    id: 't-154',
    name: 'Sarah K.',
    rating: 5,
    comment: 'I bought a whole new living room set from Home Centre. The assembly team was on time, very efficient, and even cleaned up the packaging afterward. Highly recommended!',
    serviceId: 'furniture-assembly',
    city: 'abu-dhabi',
    date: '2025-05-28'
  },

  // === 19. Secure Furniture Storage (secure-furniture-storage) ===
  {
    id: 't-155',
    name: 'مبتعث للخارج',
    rating: 5,
    comment: 'سافرت للدراسة لمدة سنة واحتجت مكاناً آمناً لأثاثي. وحدات التخزين لديهم نظيفة ومكيفة، والعقد كان مرناً. شعرت براحة البال.',
    serviceId: 'secure-furniture-storage',
    city: 'riyadh',
    date: '2024-08-15'
  },
  {
    id: 't-156',
    name: 'صاحب معرض أثاث',
    rating: 5,
    comment: 'نستخدم مستودعاتهم لتخزين البضاعة الزائدة. المكان مراقب بالكاميرات ٢٤/٧ والأمان عالي. خيار ممتاز لتخزين الأعمال التجارية.',
    serviceId: 'secure-furniture-storage',
    city: 'jeddah',
    date: '2025-07-05'
  },
  {
    id: 't-157',
    name: 'عائلة تقوم بالترميم',
    rating: 5,
    comment: 'أثناء ترميم الفيلا، قمنا بتخزين كل الأثاث لديهم. فريق النقل أخذ الأثاث للمستودع وأعاده بعد انتهاء الترميم. خدمة متكاملة ومريحة.',
    serviceId: 'secure-furniture-storage',
    city: 'dubai',
    date: '2025-03-01'
  },

  // ======================================================
  // CATEGORY: Advanced Decor
  // ======================================================

  // === 20. Gypsum Board Ceilings & Partitions (gypsum-board-installation) ===
  {
    id: 't-158',
    name: 'مصمم ديكور داخلي',
    rating: 5,
    comment: 'أعمل مع فريق الجبس بورد هذا في معظم مشاريعي. لديهم القدرة على تنفيذ التصاميم المعقدة بدقة عالية وتشطيب مثالي جاهز للدهان.',
    serviceId: 'gypsum-board-installation',
    city: 'riyadh',
    date: '2025-06-26'
  },
  {
    id: 't-159',
    name: 'علياء',
    rating: 5,
    comment: 'عملت سقف جبس بورد مع إضاءة مخفية لغرفة النوم. النتيجة كانت رومانسية وهادئة، وغيرت جو الغرفة بالكامل.',
    serviceId: 'gypsum-board-installation',
    city: 'jeddah',
    date: '2025-05-20'
  },
  {
    id: 't-160',
    name: 'شركة',
    rating: 5,
    comment: 'احتجنا لتقسيم مساحة مكتبية كبيرة إلى غرف أصغر. استخدام قواطع الجبس بورد كان حلاً سريعاً وفعالاً ويوفر عزلاً صوتياً جيداً.',
    serviceId: 'gypsum-board-installation',
    city: 'kuwait-city',
    date: '2025-04-10'
  },
  
  // === 21. Glass & Aluminum Works (glass-aluminum-works) ===
  {
    id: 't-161',
    name: 'صاحب فيلا حديثة',
    rating: 5,
    comment: 'ركبت واجهة زجاجية كبيرة (Curtain Wall) للفيلا. العمل كان دقيقاً جداً والزجاج المستخدم عازل للحرارة والصوت. النتيجة النهائية مذهلة.',
    serviceId: 'glass-aluminum-works',
    city: 'dubai',
    date: '2025-02-15'
  },
  {
    id: 't-162',
    name: 'محمد العبدلي',
    rating: 5,
    comment: 'غيرت شبابيك البيت القديمة إلى شبابيك ألوميتال دبل جلاس. فرق كبير في عزل الصوت والحرارة. استثمار يستحق.',
    serviceId: 'glass-aluminum-works',
    city: 'alexandria',
    date: '2025-05-05'
  },
  {
    id: 't-163',
    name: 'صيدلية',
    rating: 5,
    comment: 'فصلنا باب سيكوريت للمدخل الرئيسي. التركيب كان سريعاً والباب عملي جداً وشكله أنيق.',
    serviceId: 'glass-aluminum-works',
    city: 'dammam',
    date: '2025-06-14'
  }
];
// src/data/testimonials.ts (BATCH 3 - PART 5)
// NOTE: This array should APPEND to the previous parts.
// I'm continuing the ID sequence from t-164.

export const testimonials_batch_3_part_5: Testimonial[] = [

  // ======================================================
  // CATEGORY: Landscaping & Gardening
  // ======================================================

  // === 22. Landscaping Design & Installation (landscaping-design-installation) ===
  {
    id: 't-164',
    name: 'أسرة بنَت بيتها الجديد',
    rating: 5,
    comment: 'كان لدينا حوش كبير وفارغ. فريق تصميم الحدائق حوله إلى جنة صغيرة بها منطقة لعب للأطفال وجلسة عائلية وشلال ماء. أصبح مكاننا المفضل في البيت.',
    serviceId: 'landscaping-design-installation',
    city: 'riyadh',
    date: '2025-04-12'
  },
  {
    id: 't-165',
    name: 'مقهى بحديقة خارجية',
    rating: 5,
    comment: 'قاموا بتصميم وتنفيذ الحديقة الخارجية للمقهى. النتيجة جذبت لنا زبائن أكثر. اهتموا بأدق التفاصيل من اختيار النباتات إلى توزيع الإضاءة.',
    serviceId: 'landscaping-design-installation',
    city: 'dubai',
    date: '2025-03-20'
  },
  {
    id: 't-166',
    name: 'Mohamed Ali',
    rating: 5,
    comment: 'The best thing they did was installing the automatic irrigation system. I used to forget to water the plants, but now everything is taken care of automatically. My garden is thriving.',
    serviceId: 'landscaping-design-installation',
    city: 'new-cairo',
    date: '2025-05-25'
  },

  // === 23. Monthly Garden Maintenance (garden-maintenance) ===
  {
    id: 't-167',
    name: 'سيدة أعمال مشغولة',
    rating: 5,
    comment: 'ليس لدي وقت للعناية بالحديقة. عقد الصيانة الشهري معهم هو الحل الأمثل. الحديقة دائماً مرتبة ونظيفة والنباتات صحية. راحة بال تامة.',
    serviceId: 'garden-maintenance',
    city: 'jeddah',
    date: '2025-07-10'
  },
  {
    id: 't-168',
    name: 'لجنة اتحاد ملاك مجمع سكني',
    rating: 5,
    comment: 'نتعاقد معهم لصيانة كل المساحات الخضراء في المجمع. فريقهم كبير ومنظم، ويقومون بالتقليم والقص والتسميد بشكل دوري ومحترف.',
    serviceId: 'garden-maintenance',
    city: 'abu-dhabi',
    date: '2025-06-30'
  },
  {
    id: 't-169',
    name: 'صاحب فيلا',
    rating: 5,
    comment: 'الفريق الذي يأتي أسبوعياً ودود وخبير. يعرفون متى يجب تسميد النباتات وكيفية التعامل مع الآفات. حديقتي لم تكن بهذا الجمال من قبل.',
    serviceId: 'garden-maintenance',
    city: 'kuwait-city',
    date: '2025-07-18'
  },

  // ======================================================
  // CATEGORY: Swimming Pool Services
  // ======================================================

  // === 24. Weekly Pool Maintenance & Cleaning (swimming-pool-maintenance) ===
  {
    id: 't-170',
    name: 'أبو عبدالله',
    rating: 5,
    comment: 'المسبح كان دائماً عكر والمياه غير صافية. بعد الاشتراك في خدمة الصيانة الأسبوعية، أصبح المسبح صافياً كالكريستال وجاهزاً للسباحة في أي وقت.',
    serviceId: 'swimming-pool-maintenance',
    city: 'riyadh',
    date: '2025-07-14'
  },
  {
    id: 't-171',
    name: 'مؤجر شاليهات',
    rating: 5,
    comment: 'نظافة المسبح وجودة المياه هي أهم عامل للمستأجرين. فريق الصيانة لديكم موثوق ويحافظ على مسابحنا في أفضل حالة، مما يضمن رضا عملائنا.',
    serviceId: 'swimming-pool-maintenance',
    city: 'north-coast',
    date: '2025-06-25'
  },
  {
    id: 't-172',
    name: 'James Peterson',
    rating: 5,
    comment: 'I love that they leave a detailed report after each visit showing the chemical levels and what they did. Very transparent and professional service.',
    serviceId: 'swimming-pool-maintenance',
    city: 'dubai',
    date: '2025-07-05'
  },

  // ======================================================
  // CATEGORY: Tech & Security Systems
  // ======================================================

  // === 25. CCTV Camera Installation (cctv-camera-installation) ===
  {
    id: 't-173',
    name: 'صيدلية تعمل 24 ساعة',
    rating: 5,
    comment: 'تركيب كاميرات المراقبة كان ضرورياً لسلامة الموظفين والعملاء. الفريق قام بتغطية جميع الزوايا الداخلية والخارجية والنظام مستقر وسهل المراجعة.',
    serviceId: 'cctv-camera-installation',
    city: 'jeddah',
    date: '2025-05-18'
  },
  {
    id: 't-174',
    name: 'عائلة تسافر كثيراً',
    rating: 5,
    comment: 'الآن يمكننا الاطمئنان على بيتنا من أي مكان في العالم عبر الجوال. جودة الصورة ممتازة حتى في الظلام. خدمة تمنح راحة البال.',
    serviceId: 'cctv-camera-installation',
    city: 'dammam',
    date: '2025-06-11'
  },
  {
    id: 't-175',
    name: 'مدرسة أهلية',
    rating: 5,
    comment: 'قمنا بتغطية ساحات المدرسة والممرات بنظام كاميرات متكامل لضمان سلامة الطلاب. العمل تم باحترافية وسرعة خلال فترة الإجازة.',
    serviceId: 'cctv-camera-installation',
    city: 'riyadh',
    date: '2024-12-28'
  },
  
  // === 26. Gate Automation & Intercom Systems (gate-automation-intercom) ===
  {
    id: 't-176',
    name: 'كبير في السن',
    rating: 5,
    comment: 'تركيب بوابة أوتوماتيكية كان أفضل قرار. لم أعد بحاجة للنزول من السيارة لفتح البوابة، خاصة في الحر أو المطر. راحة لا تقدر بثمن.',
    serviceId: 'gate-automation-intercom',
    city: 'khobar',
    date: '2025-04-25'
  },
  {
    id: 't-177',
    name: 'سيدة تعيش بمفردها',
    rating: 5,
    comment: 'نظام الإنتركم المرئي يمنحني شعوراً كبيراً بالأمان. لا أفتح الباب إلا بعد أن أرى وأتحدث مع الزائر. خدمة ضرورية جداً.',
    serviceId: 'gate-automation-intercom',
    city: 'new-cairo',
    date: '2025-06-08'
  },
  {
    id: 't-178',
    name: 'طارق',
    rating: 4,
    comment: 'التركيب كان ممتازاً والمحرك قوي. لكن جهاز التحكم عن بعد الأول كان به عيب وقاموا باستبداله في اليوم التالي. خدمة ما بعد البيع جيدة.',
    serviceId: 'gate-automation-intercom',
    city: 'kuwait-city',
    date: '2025-05-30'
  }
];
// src/data/testimonials.ts (BATCH 3 - PART 6)
// NOTE: This array should APPEND to the previous parts.
// I'm continuing the ID sequence from t-179.

export const testimonials_batch_3_part_6: Testimonial[] = [

  // ======================================================
  // CATEGORY: Insulation Services
  // ======================================================

  // === 27. Rooftop Waterproofing & Thermal Insulation (rooftop-waterproofing) ===
  {
    id: 't-179',
    name: 'صاحب بناية استثمارية',
    rating: 5,
    comment: 'قمت بعزل أسطح البناية بالكامل. لاحظ المستأجرون في الدور الأخير فرقاً كبيراً في انخفاض حرارة الشقق، مما قلل من استهلاك التكييف. استثمار ناجح وموفر للطاقة.',
    serviceId: 'rooftop-waterproofing',
    city: 'jeddah',
    date: '2025-05-20'
  },
  {
    id: 't-180',
    name: 'خالد السعيد',
    rating: 5,
    comment: 'كان السقف يتسرب منه الماء مع كل مطر. بعد خدمة العزل المائي، المشكلة انتهت تماماً. الآن أنتظر الشتاء براحة بال. الضمان لمدة ١٠ سنوات يطمئن.',
    serviceId: 'rooftop-waterproofing',
    city: 'dammam',
    date: '2024-11-10'
  },
  {
    id: 't-181',
    name: 'مصنع',
    rating: 5,
    comment: 'قمنا بعزل سطح الهناجر بالفوم لتقليل الحرارة على الآلات والمنتجات. الفريق كان سريعاً وقام بتغطية مساحة كبيرة في وقت قياسي.',
    serviceId: 'rooftop-waterproofing',
    city: 'riyadh',
    date: '2025-06-15'
  },

  // ======================================================
  // CATEGORY: Renovation & Contracting
  // ======================================================

  // === 28. Full Villa/Apartment Renovation (full-renovation-contracting) ===
  {
    id: 't-182',
    name: 'ورثة منزل قديم',
    rating: 5,
    comment: 'ورثنا منزل العائلة وكان قديماً جداً. شركة المقاولات هذه قامت بتجديده بالكامل "تسليم مفتاح". حافظوا على روحه وقاموا بتحديث كل شيء. عمل يفوق الخيال.',
    serviceId: 'full-renovation-contracting',
    city: 'alexandria',
    date: '2025-06-01'
  },
  {
    id: 't-183',
    name: 'مستثمر عقاري',
    rating: 5,
    comment: 'أشتري شققاً قديمة وأقوم بتجديدها وبيعها. أتعامل معهم في كل مشاريعي. لديهم فريق متكامل (سباكة، كهرباء، دهانات،...) مما يسهل عليّ إدارة العمل. شركاء نجاح.',
    serviceId: 'full-renovation-contracting',
    city: 'dubai',
    date: '2025-07-01'
  },
  {
    id: 't-184',
    name: 'Ayman & Huda',
    rating: 5,
    comment: 'We wanted to remodel our kitchen and bathroom. They gave us a 3D design before starting, which was amazing. The final result was exactly like the design. Professional and creative team.',
    serviceId: 'full-renovation-contracting', // Can also be linked to a more specific 'bathroom-kitchen-remodeling' service
    city: 'new-cairo',
    date: '2025-04-28'
  },

  // ======================================================
  // CATEGORY: Advanced Systems
  // ======================================================

  // === 29. Smart Home System Installation (smart-home-installation) ===
  {
    id: 't-185',
    name: 'مهندس تقني',
    rating: 5,
    comment: 'أحب التكنولوجيا وأردت تحويل بيتي إلى بيت ذكي. الفريق كان خبيراً وقام بدمج أنظمة الإضاءة، التكييف، الكاميرات، والصوت مع مساعد جوجل. الآن كل شيء يعمل بالأوامر الصوتية.',
    serviceId: 'smart-home-installation',
    city: 'riyadh',
    date: '2025-06-22'
  },
  {
    id: 't-186',
    name: 'شخص مهتم بتوفير الطاقة',
    rating: 5,
    comment: 'تركيب منظم حرارة ذكي ومفاتيح إضاءة ذكية ساعدني على متابعة وتخفيض استهلاكي للطاقة. التطبيق الخاص بهم سهل الاستخدام ويعطي تقارير مفيدة.',
    serviceId: 'smart-home-installation',
    city: 'abu-dhabi',
    date: '2025-05-15'
  },
  {
    id: 't-187',
    name: 'عائلة لديها أطفال',
    rating: 5,
    comment: 'أفضل ميزة في البيت الذكي هي القدرة على إطفاء الأنوار والتلفزيون في غرف الأطفال عن بعد بعد نومهم. راحة وأمان.',
    serviceId: 'smart-home-installation',
    city: 'dubai',
    date: '2025-07-12'
  },
  
  // === 30. Rooftop Solar Panel Installation (solar-panel-installation) ===
  {
    id: 't-188',
    name: 'مالك فيلا في الرياض',
    rating: 5,
    comment: 'مع ارتفاع فواتير الكهرباء، كان تركيب نظام الطاقة الشمسية هو الحل. النظام يغطي معظم استهلاكي والآن أبيع الفائض للشبكة. استثمار طويل الأمد وممتاز.',
    serviceId: 'solar-panel-installation',
    city: 'riyadh',
    date: '2025-03-10'
  },
  {
    id: 't-189',
    name: 'صاحب مصنع صغير',
    rating: 5,
    comment: 'قمنا بتركيب ألواح شمسية على سطح المصنع لتشغيل المكاتب والإضاءة. قللت من تكاليف التشغيل بشكل كبير. خدمة احترافية من التصميم إلى التركيب.',
    serviceId: 'solar-panel-installation',
    city: 'jeddah', // Assuming Jeddah Industrial City
    date: '2025-01-20'
  },
  {
    id: 't-190',
    name: 'Environmentalist',
    rating: 5,
    comment: 'I chose to go solar for environmental reasons. The team was very supportive and provided high-efficiency panels. I feel good knowing I am generating clean energy.',
    serviceId: 'solar-panel-installation',
    city: 'dubai',
    date: '2025-04-05'
  },

  // ======================================================
  // CATEGORY: Appliances & Satellite (Final Coverage)
  // ======================================================
  
  // === 31. Satellite Dish Installation & Programming (satellite-dish-installation) ===
  {
    id: 't-191',
    name: 'مقيم جديد',
    rating: 5,
    comment: 'انتقلت لشقة جديدة وكنت بحاجة لتركيب دش. الفني جاء في نفس اليوم وقام بالتركيب والتوجيه والبرمجة. خدمة سريعة ومتكاملة.',
    serviceId: 'satellite-dish-installation',
    city: 'kuwait-city',
    date: '2025-07-19'
  },
  {
    id: 't-192',
    name: 'أبو علي',
    rating: 5,
    comment: 'الإشارة كانت تقطع مع كل هبة ريح. الفني قام بتثبيت الصحن بشكل أفضل وغير سلك الـ LNB. الآن الإشارة ثابتة 100%.',
    serviceId: 'satellite-dish-installation',
    city: 'dammam',
    date: '2025-06-24'
  },
  {
    id: 't-193',
    name: 'مقهى رياضي',
    rating: 5,
    comment: 'نحتاج إشارة قوية ومستقرة لعرض المباريات. قاموا بتركيب نظام مركزي لعدة شاشات. يعمل بكفاءة عالية ولم تواجهنا أي مشكلة أثناء المباريات المهمة.',
    serviceId: 'satellite-dish-installation',
    city: 'cairo',
    date: '2025-05-29'
  }
];