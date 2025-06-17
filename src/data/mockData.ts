import { Country, Service, City, ServiceCategory } from '@/types';

// == THE DEFINITIVE COUNTRIES DATABASE ==
export const countries: Country[] = [
  { id: '1', name: 'Saudi Arabia', nameAr: 'المملكة العربية السعودية', code: 'SA', slug: 'sa', phonePrefix: '+966', emergencyNumber: '911', currency: 'SAR', currencyAr: 'ريال سعودي', isActive: true },
  { id: '2', name: 'United Arab Emirates', nameAr: 'دولة الإمارات العربية المتحدة', code: 'AE', slug: 'ae', phonePrefix: '+971', emergencyNumber: '999', currency: 'AED', currencyAr: 'درهم إماراتي', isActive: true },
  { id: '3', name: 'Kuwait', nameAr: 'دولة الكويت', code: 'KW', slug: 'kw', phonePrefix: '+965', emergencyNumber: '112', currency: 'KWD', currencyAr: 'دينار كويتي', isActive: true },
  { id: '4', name: 'Egypt', nameAr: 'جمهورية مصر العربية', code: 'EG', slug: 'eg', phonePrefix: '+20', emergencyNumber: '122', currency: 'EGP', currencyAr: 'جنيه مصري', isActive: true }
];

// == THE DEFINITIVE CITIES DATABASE (52 STRATEGIC LOCATIONS) ==
export const cities: City[] = [
  // Saudi Arabia Cities (Expanded to 17)
  { id: 'sa-1', name: 'Riyadh', nameAr: 'الرياض', slug: 'riyadh', countryId: '1', region: 'Riyadh Province', regionAr: 'منطقة الرياض', phoneNumbers: ['+966-11-123-4567'], whatsappNumbers: ['+966-50-123-4567'], coordinates: { lat: 24.7136, lng: 46.6753 }, isCapital: true },
  { id: 'sa-2', name: 'Jeddah', nameAr: 'جدة', slug: 'jeddah', countryId: '1', region: 'Makkah Province', regionAr: 'منطقة مكة المكرمة', phoneNumbers: ['+966-12-123-4567'], whatsappNumbers: ['+966-55-123-4567'], coordinates: { lat: 21.4858, lng: 39.1925 } },
  { id: 'sa-3', name: 'Dammam', nameAr: 'الدمام', slug: 'dammam', countryId: '1', region: 'Eastern Province', regionAr: 'المنطقة الشرقية', phoneNumbers: ['+966-13-123-4567'], whatsappNumbers: ['+966-53-123-4567'], coordinates: { lat: 26.4207, lng: 50.0888 } },
  { id: 'sa-4', name: 'Khobar', nameAr: 'الخبر', slug: 'khobar', countryId: '1', region: 'Eastern Province', regionAr: 'المنطقة الشرقية', phoneNumbers: ['+966-13-123-4568'], whatsappNumbers: ['+966-54-123-4568'], coordinates: { lat: 26.2172, lng: 50.2084 } },
  { id: 'sa-5', name: 'Makkah', nameAr: 'مكة المكرمة', slug: 'makkah', countryId: '1', region: 'Makkah Province', regionAr: 'منطقة مكة المكرمة', phoneNumbers: ['+966-12-123-4568'], whatsappNumbers: ['+966-56-123-4568'], coordinates: { lat: 21.3891, lng: 39.8579 } },
  { id: 'sa-6', name: 'Madinah', nameAr: 'المدينة المنورة', slug: 'madinah', countryId: '1', region: 'Madinah Province', regionAr: 'منطقة المدينة المنورة', phoneNumbers: ['+966-14-123-4567'], whatsappNumbers: ['+966-57-123-4567'], coordinates: { lat: 24.4686, lng: 39.6142 } },
  { id: 'sa-7', name: 'Abha', nameAr: 'أبها', slug: 'abha', countryId: '1', region: 'Asir Province', regionAr: 'منطقة عسير', phoneNumbers: ['+966-17-224-0000'], whatsappNumbers: ['+966-59-123-4567'], coordinates: { lat: 18.2169, lng: 42.5053 } },
  { id: 'sa-8', name: 'Taif', nameAr: 'الطائف', slug: 'taif', countryId: '1', region: 'Makkah Province', regionAr: 'منطقة مكة المكرمة', phoneNumbers: ['+966-12-700-0000'], whatsappNumbers: ['+966-58-123-4567'], coordinates: { lat: 21.4373, lng: 40.5127 } },
  { id: 'sa-9', name: 'Jubail', nameAr: 'الجبيل', slug: 'jubail', countryId: '1', region: 'Eastern Province', regionAr: 'المنطقة الشرقية', phoneNumbers: ['+966-13-361-0000'], whatsappNumbers: ['+966-51-123-4567'], coordinates: { lat: 27.0093, lng: 49.6582 } },
  { id: 'sa-10', name: 'Khamis Mushait', nameAr: 'خميس مشيط', slug: 'khamis-mushait', countryId: '1', region: 'Asir Province', regionAr: 'منطقة عسير', phoneNumbers: ['+966-17-250-0000'], whatsappNumbers: ['+966-50-987-6543'], coordinates: { lat: 18.3032, lng: 42.7335 } },
  { id: 'sa-11', name: 'Hafar Al-Batin', nameAr: 'حفر الباطن', slug: 'hafar-al-batin', countryId: '1', region: 'Eastern Province', regionAr: 'المنطقة الشرقية', phoneNumbers: ['+966-13-722-0000'], whatsappNumbers: ['+966-53-987-6543'], coordinates: { lat: 28.4357, lng: 45.9626 } },
  { id: 'sa-12', name: 'Buraydah', nameAr: 'بريدة', slug: 'buraydah', countryId: '1', region: 'Qassim Province', regionAr: 'منطقة القصيم', phoneNumbers: ['+966-16-324-0000'], whatsappNumbers: ['+966-54-987-6543'], coordinates: { lat: 26.3260, lng: 43.9750 } },
  { id: 'sa-13', name: 'Tabuk', nameAr: 'تبوك', slug: 'tabuk', countryId: '1', region: 'Tabuk Province', regionAr: 'منطقة تبوك', phoneNumbers: ['+966-14-422-0000'], whatsappNumbers: ['+966-56-987-6543'], coordinates: { lat: 28.3835, lng: 36.5661 } },
  { id: 'sa-14', name: 'Jizan', nameAr: 'جازان', slug: 'jizan', countryId: '1', region: 'Jizan Province', regionAr: 'منطقة جازان', phoneNumbers: ['+966-17-321-0000'], whatsappNumbers: ['+966-55-876-5432'], coordinates: { lat: 16.8893, lng: 42.5511 } },
  { id: 'sa-15', name: 'Hail', nameAr: 'حائل', slug: 'hail', countryId: '1', region: 'Hail Province', regionAr: 'منطقة حائل', phoneNumbers: ['+966-16-532-0000'], whatsappNumbers: ['+966-50-876-5432'], coordinates: { lat: 27.5250, lng: 41.6917 } },
  { id: 'sa-16', name: 'Najran', nameAr: 'نجران', slug: 'najran', countryId: '1', region: 'Najran Province', regionAr: 'منطقة نجران', phoneNumbers: ['+966-17-522-0000'], whatsappNumbers: ['+966-53-876-5432'], coordinates: { lat: 17.4924, lng: 44.1322 } },
  { id: 'sa-17', name: 'Yanbu', nameAr: 'ينبع', slug: 'yanbu', countryId: '1', region: 'Madinah Province', regionAr: 'منطقة المدينة المنورة', phoneNumbers: ['+966-14-322-0000'], whatsappNumbers: ['+966-54-876-5432'], coordinates: { lat: 24.0924, lng: 38.0563 } },
  
  // UAE Cities (7 - Added Fujairah)
  { id: 'ae-1', name: 'Dubai', nameAr: 'دبي', slug: 'dubai', countryId: '2', region: 'Dubai Emirate', regionAr: 'إمارة دبي', phoneNumbers: ['+971-4-123-4567'], whatsappNumbers: ['+971-50-123-4567'], coordinates: { lat: 25.2048, lng: 55.2708 }, isCapital: false },
  { id: 'ae-2', name: 'Abu Dhabi', nameAr: 'أبوظبي', slug: 'abu-dhabi', countryId: '2', region: 'Abu Dhabi Emirate', regionAr: 'إمارة أبوظبي', phoneNumbers: ['+971-2-123-4567'], whatsappNumbers: ['+971-56-123-4567'], coordinates: { lat: 24.4539, lng: 54.3773 }, isCapital: true },
  { id: 'ae-3', name: 'Sharjah', nameAr: 'الشارقة', slug: 'sharjah', countryId: '2', region: 'Sharjah Emirate', regionAr: 'إمارة الشارقة', phoneNumbers: ['+971-6-123-4567'], whatsappNumbers: ['+971-55-123-4567'], coordinates: { lat: 25.3463, lng: 55.4209 } },
  { id: 'ae-4', name: 'Al Ain', nameAr: 'العين', slug: 'al-ain', countryId: '2', region: 'Abu Dhabi Emirate', regionAr: 'إمارة أبوظبي', phoneNumbers: ['+971-3-766-0000'], whatsappNumbers: ['+971-52-123-4567'], coordinates: { lat: 24.1925, lng: 55.7850 } },
  { id: 'ae-5', name: 'Ajman', nameAr: 'عجمان', slug: 'ajman', countryId: '2', region: 'Ajman Emirate', regionAr: 'إمارة عجمان', phoneNumbers: ['+971-6-744-0000'], whatsappNumbers: ['+971-50-234-5678'], coordinates: { lat: 25.4111, lng: 55.4350 } },
  { id: 'ae-6', name: 'Ras Al Khaimah', nameAr: 'رأس الخيمة', slug: 'ras-al-khaimah', countryId: '2', region: 'Ras Al Khaimah Emirate', regionAr: 'إمارة رأس الخيمة', phoneNumbers: ['+971-7-233-0000'], whatsappNumbers: ['+971-50-345-6789'], coordinates: { lat: 25.7895, lng: 55.9432 } },
  { id: 'ae-7', name: 'Fujairah', nameAr: 'الفجيرة', slug: 'fujairah', countryId: '2', region: 'Fujairah Emirate', regionAr: 'إمارة الفجيرة', phoneNumbers: ['+971-9-222-0000'], whatsappNumbers: ['+971-50-456-7890'], coordinates: { lat: 25.1312, lng: 56.3319 } },
  
  // Kuwait Cities (6 Governorates)
  { id: 'kw-1', name: 'Kuwait City (Capital)', nameAr: 'مدينة الكويت (العاصمة)', slug: 'kuwait-city', countryId: '3', region: 'Al Asimah Governorate', regionAr: 'محافظة العاصمة', phoneNumbers: ['+965-22-123-456'], whatsappNumbers: ['+965-99-123-456'], coordinates: { lat: 29.3759, lng: 47.9774 }, isCapital: true },
  { id: 'kw-2', name: 'Hawalli Governorate', nameAr: 'محافظة حولي', slug: 'hawalli', countryId: '3', region: 'Hawalli Governorate', regionAr: 'محافظة حولي', phoneNumbers: ['+965-22-123-457'], whatsappNumbers: ['+965-98-123-457'], coordinates: { lat: 29.3332, lng: 48.0284 } },
  { id: 'kw-3', name: 'Farwaniya Governorate', nameAr: 'محافظة الفروانية', slug: 'farwaniya', countryId: '3', region: 'Farwaniya Governorate', regionAr: 'محافظة الفروانية', phoneNumbers: ['+965-24-710-000'], whatsappNumbers: ['+965-95-123-456'], coordinates: { lat: 29.2776, lng: 47.9543 } },
  { id: 'kw-4', name: 'Ahmadi Governorate', nameAr: 'محافظة الأحمدي', slug: 'ahmadi', countryId: '3', region: 'Ahmadi Governorate', regionAr: 'محافظة الأحمدي', phoneNumbers: ['+965-23-910-000'], whatsappNumbers: ['+965-96-123-456'], coordinates: { lat: 29.0838, lng: 48.1305 } },
  { id: 'kw-5', name: 'Mubarak Al-Kabeer Governorate', nameAr: 'محافظة مبارك الكبير', slug: 'mubarak-al-kabeer', countryId: '3', region: 'Mubarak Al-Kabeer Governorate', regionAr: 'محافظة مبارك الكبير', phoneNumbers: ['+965-25-410-000'], whatsappNumbers: ['+965-94-123-456'], coordinates: { lat: 29.1833, lng: 48.0667 } },
  { id: 'kw-6', name: 'Jahra Governorate', nameAr: 'محافظة الجهراء', slug: 'jahra', countryId: '3', region: 'Jahra Governorate', regionAr: 'محافظة الجهراء', phoneNumbers: ['+965-24-550-000'], whatsappNumbers: ['+965-90-123-456'], coordinates: { lat: 29.3496, lng: 47.6581 } },

  // Egypt Cities (Expanded to 12)
  { id: 'eg-1', name: 'New Cairo', nameAr: 'القاهرة الجديدة', slug: 'new-cairo', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-2-2123-4567'], whatsappNumbers: ['+20-10-1234-5678'], coordinates: { lat: 30.0238, lng: 31.4722 } },
  { id: 'eg-2', name: 'Sheikh Zayed & 6th of October', nameAr: 'الشيخ زايد و 6 أكتوبر', slug: 'zayed-october', countryId: '4', region: 'Giza', regionAr: 'الجيزة', phoneNumbers: ['+20-2-3123-4567'], whatsappNumbers: ['+20-15-1234-5678'], coordinates: { lat: 30.0292, lng: 30.9814 } },
  { id: 'eg-3', name: 'Madinaty & Al-Rehab', nameAr: 'مدينتي والرحاب', slug: 'madinaty-rehab', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-2-2123-4569'], whatsappNumbers: ['+20-12-1234-5678'], coordinates: { lat: 30.1118, lng: 31.6543 } },
  { id: 'eg-4', name: 'Central Cairo (Zamalek & Downtown)', nameAr: 'وسط القاهرة (الزمالك ووسط البلد)', slug: 'central-cairo', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-2-2735-0000'], whatsappNumbers: ['+20-12-2345-6789'], coordinates: { lat: 30.0610, lng: 31.2225 } },
  { id: 'eg-5', name: 'Central Giza (Mohandessin & Dokki)', nameAr: 'وسط الجيزة (المهندسين والدقي)', slug: 'central-giza', countryId: '4', region: 'Giza', regionAr: 'الجيزة', phoneNumbers: ['+20-2-3300-0000'], whatsappNumbers: ['+20-11-2345-6789'], coordinates: { lat: 30.0535, lng: 31.2059 } },
  { id: 'eg-6', name: 'Heliopolis & Nasr City', nameAr: 'مصر الجديدة ومدينة نصر', slug: 'heliopolis-nasr-city', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-2-2414-0000'], whatsappNumbers: ['+20-10-3456-7890'], coordinates: { lat: 30.0907, lng: 31.3223 } },
  { id: 'eg-7', name: 'Maadi & Helwan', nameAr: 'المعادي وحلوان', slug: 'maadi-helwan', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-2-2525-0000'], whatsappNumbers: ['+20-11-3456-7890'], coordinates: { lat: 29.9547, lng: 31.2585 } },
  { id: 'eg-8', name: 'New Administrative Capital', nameAr: 'العاصمة الإدارية الجديدة', slug: 'new-capital', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-10-5000-0000'], whatsappNumbers: ['+20-10-5000-0001'], coordinates: { lat: 30.0336, lng: 31.7615 }, isCapital: false },
  { id: 'eg-9', name: 'Alexandria', nameAr: 'الإسكندرية', slug: 'alexandria', countryId: '4', region: 'Alexandria', regionAr: 'الإسكندرية', phoneNumbers: ['+20-3-555-0000'], whatsappNumbers: ['+20-12-3456-7890'], coordinates: { lat: 31.2001, lng: 29.9187 } },
  { id: 'eg-10', name: 'Mansoura', nameAr: 'المنصورة', slug: 'mansoura', countryId: '4', region: 'Dakahlia', regionAr: 'الدقهلية', phoneNumbers: ['+20-50-220-0000'], whatsappNumbers: ['+20-15-3456-7890'], coordinates: { lat: 31.0364, lng: 31.3807 } },
  { id: 'eg-11', name: 'Tanta', nameAr: 'طنطا', slug: 'tanta', countryId: '4', region: 'Gharbia', regionAr: 'الغربية', phoneNumbers: ['+20-40-330-0000'], whatsappNumbers: ['+20-10-4567-8901'], coordinates: { lat: 30.7875, lng: 31.0019 } },
  { id: 'eg-12', name: 'North Coast', nameAr: 'الساحل الشمالي', slug: 'north-coast', countryId: '4', region: 'Matrouh', regionAr: 'مطروح', phoneNumbers: ['+20-46-400-0000'], whatsappNumbers: ['+20-11-4567-8901'], coordinates: { lat: 31.0500, lng: 28.5500 } },
];

// == THE DEFINITIVE COVERAGE DATABASE (NEIGHBORHOODS) ==
type CoverageData = { [cityId: string]: string[] };
export const coverageData: CoverageData = {
  // SAUDI ARABIA
  'sa-1': [ 'الملقا', 'حطين', 'النرجس', 'الياسمين', 'العليا', 'السليمانية', 'الصحافة', 'القيروان', 'العقيق', 'الوادي', 'التعاون', 'الازدهار', 'غرناطة', 'الحمراء', 'الروضة', 'النسيم', 'الريان', 'المنار', 'الملز', 'الشفاء', 'العزيزية', 'ظهرة لبن', 'عرقة', 'حي السفارات', 'الرمال', 'اليرموك' ], // Riyadh
  'sa-2': [ 'أبحر الشمالية', 'أبحر الجنوبية', 'الروضة', 'السلامة', 'الخالدية', 'الشاطئ', 'الحمراء', 'الزهرة', 'المحمدية', 'النعيم', 'البساتين', 'المرجان', 'الفيصلية', 'الأندلس', 'مشرفة', 'حي الصفا', 'النسيم', 'السامر' ], // Jeddah
  'sa-3': [ 'الفيصلية', 'الريان', 'الشاطئ الشرقي', 'الشاطئ الغربي', 'الجامعيين', 'الروضة', 'الواحة', 'الزهور', 'هجر', 'المنار' ], // Dammam

  // UNITED ARAB EMIRATES
  'ae-1': [ 'وسط مدينة دبي', 'الخليج التجاري', 'دبي مارينا', 'جميرا بيتش ريزيدنس (JBR)', 'نخلة جميرا', 'جميرا', 'أم سقيم', 'البرشاء', 'تلال الإمارات', 'المرابع العربية', 'دبي هيلز استيت', 'موتور سيتي', 'داماك هيلز', 'الفرجان', 'الينابيع', 'البحيرات', 'ديرة', 'بر دبي', 'الكرامة', 'زعبيل', 'الوصل', 'الورقاء', 'مردف' ], // Dubai
  'ae-2': [ 'جزيرة الريم', 'جزيرة السعديات', 'جزيرة ياس', 'الخالدية', 'البطين', 'المشرف', 'شارع المطار', 'مدينة محمد بن زايد', 'مدينة خليفة', 'شاطئ الراحة', 'المرور', 'الكورنيش', 'المنهل' ], // Abu Dhabi
  'ae-3': [ 'المجاز', 'الخان', 'النهدة', 'التعاون', 'القاسمية', 'الخالدية', 'مويلح' ], // Sharjah

  // EGYPT
  'eg-1': [ 'الحي الأول', 'الحي الثاني', 'الحي الثالث', 'الحي الرابع', 'الحي الخامس', 'شارع التسعين', 'النرجس', 'الياسمين', 'البنفسج', 'اللوتس', 'الأندلس', 'غرب أرابيلا', 'الشويفات', 'جنوب الأكاديمية' ], // New Cairo
  'eg-2': [ 'بيفرلي هيلز', 'الحي المتميز', 'الربوة', 'سوديك ويست', 'بالم هيلز', 'الحي الأول', 'الحي السابع', 'الحي الثامن', 'الحي التاسع', 'الحي السادس عشر' ], // Zayed & October
  'eg-9': [ 'سموحة', 'لوران', 'جليم', 'رشدي', 'كفر عبده', 'زيزينيا', 'سبورتنج', 'كليوباترا', 'سيدي جابر', 'العجمي' ], // Alexandria
};

// == THE DEFINITIVE SERVICE CATEGORIES BLUEPRINT (28 CATEGORIES) ==
export const serviceCategories: ServiceCategory[] = [
  // Core Maintenance & Emergency
  { id: 'ac-services', name: 'AC Services', nameAr: 'خدمات التكييف', slug: 'ac-services' },
  { id: 'plumbing', name: 'Plumbing', nameAr: 'السباكة', slug: 'plumbing' },
  { id: 'electrical', name: 'Electrical Services', nameAr: 'خدمات الكهرباء', slug: 'electrical' },
  { id: 'appliance-repair', name: 'Appliance Repair', nameAr: 'صيانة الأجهزة المنزلية', slug: 'appliance-repair' },
  { id: 'handyman-services', name: 'Handyman Services', nameAr: 'خدمات العامل الماهر', slug: 'handyman-services' },
  { id: 'leak-detection', name: 'Water Leak Detection', nameAr: 'كشف تسربات المياه', slug: 'leak-detection' },
  
  // Cleaning & Environmental Health
  { id: 'residential-cleaning', name: 'Residential Cleaning', nameAr: 'التنظيف السكني', slug: 'residential-cleaning' },
  { id: 'commercial-cleaning', name: 'Commercial Cleaning', nameAr: 'التنظيف التجاري', slug: 'commercial-cleaning' },
  { id: 'exterior-cleaning', name: 'Exterior Cleaning', nameAr: 'التنظيف الخارجي', slug: 'exterior-cleaning' },
  { id: 'pest-control', name: 'Pest Control', nameAr: 'مكافحة الحشرات', slug: 'pest-control' },
  
  // Insulation & Protection
  { id: 'insulation-services', name: 'Insulation Services', nameAr: 'خدمات العزل', slug: 'insulation-services' },

  // Logistics & Assembly
  { id: 'moving-relocation', name: 'Moving & Relocation', nameAr: 'نقل العفش والتغليف', slug: 'moving-relocation' },
  { id: 'furniture-assembly', name: 'Furniture Assembly', nameAr: 'تجميع وتركيب الأثاث', slug: 'furniture-assembly' },
  { id: 'storage-solutions', name: 'Storage Solutions', nameAr: 'حلول التخزين', slug: 'storage-solutions' },

  // Construction, Renovation & Finishing
  { id: 'painting-decor', name: 'Painting & Decor', nameAr: 'الدهانات والديكور', slug: 'painting-decor' },
  { id: 'flooring-tiling', name: 'Flooring & Tiling', nameAr: 'الأرضيات والبلاط', slug: 'flooring-tiling' },
  { id: 'carpentry-furniture', name: 'Carpentry & Furniture', nameAr: 'النجارة و الأثاث', slug: 'carpentry-furniture' },
  { id: 'gypsum-decor', name: 'Gypsum Board & Decor', nameAr: 'الجبس بورد والديكور', slug: 'gypsum-decor' },
  { id: 'glass-aluminum', name: 'Glass & Aluminum Works', nameAr: 'أعمال الزجاج والألوميتال', slug: 'glass-aluminum' },
  { id: 'renovation-remodeling', name: 'Renovation & Remodeling', nameAr: 'الترميم والتشطيبات', slug: 'renovation-remodeling' },
  { id: 'general-contracting', name: 'General Contracting', nameAr: 'المقاولات العامة', slug: 'general-contracting' },

  // Outdoor & Landscaping
  { id: 'landscaping-gardening', name: 'Landscaping & Gardening', nameAr: 'تنسيق وصيانة الحدائق', slug: 'landscaping-gardening' },
  { id: 'swimming-pool-services', name: 'Swimming Pool Services', nameAr: 'خدمات حمامات السباحة', slug: 'swimming-pool-services' },

  // Tech & Security Systems
  { id: 'security-systems', name: 'Security Systems', nameAr: 'الأنظمة الأمنية والكاميرات', slug: 'security-systems' },
  { id: 'satellite-tv-services', name: 'Satellite TV Services', nameAr: 'خدمات الستالايت والدش', slug: 'satellite-tv-services' },
  { id: 'gate-automation-intercom', name: 'Gate Automation & Intercom', nameAr: 'أتمتة الأبواب والإنتركم', slug: 'gate-automation-intercom' },
  { id: 'smart-home-automation', name: 'Smart Home Automation', nameAr: 'أنظمة البيوت الذكية', slug: 'smart-home-automation' },
  { id: 'solar-energy', name: 'Solar Energy Systems', nameAr: 'أنظمة الطاقة الشمسية', slug: 'solar-energy' },
];

// == THE SERVICES DATABASE ==
export const services: Service[] = [
  // --- 1. AC Services ---
  {
    id: 'split-ac-cleaning',
    slug: 'split-ac-cleaning',
    name: 'Split AC Deep Cleaning',
    nameAr: 'تنظيف مكيفات سبليت (غسيل)',
    categoryId: 'ac-services',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['ac-freon-refill', 'central-ac-maintenance', 'ac-duct-cleaning'],
    description: {
      short: 'Comprehensive pressure wash cleaning for indoor and outdoor AC units to boost cooling and efficiency.',
      shortAr: 'غسيل شامل بالضغط لوحدات التكييف الداخلية والخارجية لتعزيز التبريد والكفاءة.',
      long: 'Our deep cleaning service involves pressure washing the indoor unit\'s coils and blower wheel, and the outdoor unit\'s condenser coil. This removes stubborn dirt and grime, improves cooling performance, reduces electricity consumption, and eliminates bad odors.',
      longAr: 'تشمل خدمة التنظيف العميق لدينا غسيل الوحدة الداخلية (المروحة والفلاتر) والوحدة الخارجية بالضغط. هذا يزيل الأوساخ الصعبة، يحسن أداء التبريد، يقلل من استهلاك الكهرباء، ويزيل الروائح الكريهة.',
    },
    commonProblemsSolved: ['AC not cooling well', 'High electricity bill', 'Water leaking from indoor unit', 'Bad smell from AC'],
    commonProblemsSolvedAr: ['المكيف لا يبرد جيداً', 'فاتورة كهرباء مرتفعة', 'تسرب مياه من الوحدة الداخلية', 'رائحة كريهة من المكيف'],
    features: [
      { name: 'Pressure Washing Indoor & Outdoor Units', nameAr: 'غسيل بالضغط للوحدات الداخلية والخارجية' },
      { name: 'Drain Line Flushing', nameAr: 'تنظيف وتسيليك مجرى الصرف' },
      { name: 'Filter Cleaning', nameAr: 'تنظيف الفلاتر' },
      { name: 'Cooling Efficiency Check', nameAr: 'فحص كفاءة التبريد بعد الغسيل' },
    ],
    faqs: [
      { question: 'How often should I clean my split AC?', questionAr: 'كم مرة يجب أن أغسل مكيف السبليت؟', answer: 'It is recommended to have a deep clean at least once a year, and ideally twice a year (before summer and after the dusty season).', answerAr: 'يوصى بالتنظيف العميق مرة واحدة في السنة على الأقل، والأمثل مرتين في السنة (قبل الصيف وبعد موسم الغبار).' },
    ],
    icon: 'wind',
    pricing: { model: 'fixed', basePrice: 150, currency: 'SAR' },
    duration: { text: '45-60 mins per unit', textAr: '45-60 دقيقة لكل وحدة' },
    rating: 4.9, reviewCount: 8800, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['ac cleaning', 'split ac', 'ac wash', 'تنظيف مكيفات', 'غسيل مكيفات سبليت'],
  },
  {
    id: 'ac-freon-refill',
    slug: 'ac-freon-refill',
    name: 'AC Freon (Gas) Refill',
    nameAr: 'تعبئة فريون مكيفات',
    categoryId: 'ac-services',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['split-ac-cleaning', 'leak-detection'],
    description: {
      short: 'Topping up or refilling AC refrigerant to restore cooling performance. Includes minor leak check.',
      shortAr: 'تزويد أو تعبئة فريون المكيف لاستعادة أداء التبريد. يشمل فحص التسريبات البسيطة.',
      long: 'If your AC is running but not cooling, it might be low on refrigerant. Our technicians will check the pressure, identify if there is a major leak, and recharge the system with the correct type of Freon (R22, R410a, etc.) to manufacturer specifications.',
      longAr: 'إذا كان مكيفك يعمل ولكنه لا يبرد، فقد يكون مستوى الفريون منخفضًا. سيقوم فنيونا بفحص الضغط، وتحديد ما إذا كان هناك تسرب كبير، وإعادة شحن النظام بالنوع الصحيح من الفريون (R22، R410a، إلخ) حسب مواصفات الشركة المصنعة.',
    },
    commonProblemsSolved: ['AC running but not cooling', 'Ice formation on copper pipes', 'Hissing sound from AC'],
    commonProblemsSolvedAr: ['المكيف يعمل ولكن الهواء غير بارد', 'تكون ثلج على المواسير النحاسية', 'سماع صوت صفير أو تسريب من المكيف'],
    features: [
      { name: 'Pressure & Leak Check', nameAr: 'فحص الضغط والتسريب' },
      { name: 'All Refrigerant Types (R22, R410a)', nameAr: 'جميع أنواع الفريون (R22, R410a)' },
      { name: 'Recharge to Manufacturer Specs', nameAr: 'تعبئة حسب مواصفات المصنع' },
      { name: 'Post-Refill Cooling Test', nameAr: 'اختبار التبريد بعد التعبئة' },
    ],
    faqs: [
      { question: 'Does my AC lose Freon over time?', questionAr: 'هل ينقص الفريون من المكيف مع مرور الوقت؟', answer: 'No. An AC system is a closed loop. If it is low on Freon, it means there is a leak somewhere that should ideally be repaired.', answerAr: 'لا. نظام التكييف هو دائرة مغلقة. إذا كان الفريون منخفضًا، فهذا يعني وجود تسرب في مكان ما يجب إصلاحه بشكل مثالي.' }
    ],
    icon: 'thermometer',
    pricing: { model: 'fixed', basePrice: 250, currency: 'SAR' },
    duration: { text: '30-45 mins', textAr: '30-45 دقيقة' },
    rating: 4.8, reviewCount: 4200, isPopular: true, isEmergency: true, isActive: true,
    keywords: ['ac gas refill', 'freon top up', 'ac repair', 'تعبئة فريون', 'شحن فريون', 'غاز مكيفات'],
  },

  // --- 2. Plumbing ---
  {
    id: 'emergency-plumbing-leaks',
    slug: 'emergency-plumbing-leaks',
    name: 'Emergency Plumbing & Leak Repair',
    nameAr: 'سباكة طوارئ وإصلاح تسريبات',
    categoryId: 'plumbing',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['leak-detection', 'water-heater-repair-installation'],
    description: {
      short: '24/7 emergency service for burst pipes, major leaks, clogged drains, and all urgent plumbing issues.',
      shortAr: 'خدمة طوارئ 24/7 للأنابيب المكسورة، التسريبات الكبيرة، انسداد المصارف، وجميع مشاكل السباكة العاجلة.',
      long: 'A plumbing emergency can cause significant damage. Our rapid response team is available around the clock to handle any crisis. We quickly locate the source of the problem and perform immediate repairs to stop leaks, clear blockages, and secure your property.',
      longAr: 'يمكن أن تسبب طوارئ السباكة أضرارًا جسيمة. فريق الاستجابة السريعة لدينا متاح على مدار الساعة للتعامل مع أي أزمة. نحدد مصدر المشكلة بسرعة ونجري إصلاحات فورية لوقف التسريبات، وإزالة الانسدادات، وتأمين ممتلكاتك.',
    },
    commonProblemsSolved: ['Burst pipes', 'Overflowing toilets', 'Completely blocked drains', 'Major water leak from ceiling'],
    commonProblemsSolvedAr: ['انفجار ماسورة', 'فيضان المرحاض', 'انسداد كامل في البلاعات', 'تسرب مياه كبير من السقف'],
    features: [
      { name: '24/7 Availability', nameAr: 'متوفر 24/7' },
      { name: 'Rapid Response Team', nameAr: 'فريق استجابة سريعة' },
      { name: 'Pipe Repair & Replacement', nameAr: 'إصلاح واستبدال المواسير' },
      { name: 'High-Pressure Drain Unclogging', nameAr: 'فتح الانسداد بالضغط العالي' },
    ],
    faqs: [
      { question: 'What should I do before the plumber arrives?', questionAr: 'ماذا أفعل قبل وصول السباك؟', answer: 'If possible, shut off the main water valve to your property to minimize water damage. The valve is usually located near your water meter.', answerAr: 'إذا أمكن، أغلق محبس المياه الرئيسي لمنع المزيد من الضرر. يوجد المحبس عادة بالقرب من عداد المياه الخاص بك.' }
    ],
    icon: 'wrench',
    pricing: { model: 'quote' },
    duration: { text: '1-3 hours', textAr: '1-3 ساعات' },
    rating: 4.9, reviewCount: 5100, isPopular: true, isEmergency: true, isActive: true,
    keywords: ['emergency plumber', 'leak repair', 'burst pipe', 'clogged drain', 'سباك طوارئ', 'اصلاح تسريب'],
  },
  
  // --- 3. Electrical ---
  {
    id: 'light-fixture-installation',
    slug: 'light-fixture-installation',
    name: 'Light Fixture & Chandelier Installation',
    nameAr: 'تركيب وحدات إضاءة وثريات',
    categoryId: 'electrical',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['general-handyman-services', 'gypsum-decor'],
    description: {
      short: 'Safe and secure installation of all types of lighting, from simple fixtures to heavy, complex chandeliers.',
      shortAr: 'تركيب آمن لجميع أنواع الإضاءة، من الوحدات البسيطة إلى الثريات الثقيلة والمعقدة.',
      long: 'Our certified electricians ensure your new lighting is installed safely and correctly. We handle everything from assembling the fixture, securely mounting it to the ceiling (with proper support for heavy items), and performing all electrical connections.',
      longAr: 'يضمن كهربائيونا المعتمدون تركيب الإضاءة الجديدة الخاصة بك بأمان وبشكل صحيح. نتعامل مع كل شيء بدءًا من تجميع الوحدة، وتثبيتها بشكل آمن في السقف (مع الدعم المناسب للقطع الثقيلة)، وإجراء جميع التوصيلات الكهربائية.',
    },
    commonProblemsSolved: ['Bought a new chandelier', 'Replacing old light fixtures', 'Need to install spotlights', 'Flickering lights'],
    commonProblemsSolvedAr: ['شراء ثريا جديدة', 'استبدال وحدات الإضاءة القديمة', 'الحاجة لتركيب سبوت لايت', 'أضواء ترمش'],
    features: [
      { name: 'Certified Electricians', nameAr: 'كهربائيون معتمدون' },
      { name: 'Secure Mounting for Heavy Fixtures', nameAr: 'تثبيت آمن للثريات الثقيلة' },
      { name: 'Switch & Dimmer Installation', nameAr: 'تركيب مفاتيح وديمر' },
      { name: 'Safe Wiring & Connection', nameAr: 'توصيلات كهربائية آمنة' },
    ],
    faqs: [
      { question: 'Can you install smart locks?', questionAr: 'هل يمكنكم تركيب الأقفال الذكية؟', answer: 'Yes, our skilled carpenters and technicians can install a wide variety of electronic and smart locks.', answerAr: 'نعم، يمكن لنجارينا وفنيينا المهرة تركيب مجموعة واسعة من الأقفال الإلكترونية والذكية.' }
    ],
    icon: 'lightbulb',
    pricing: { model: 'quote' },
    duration: { text: '1-2 hours per fixture', textAr: '1-2 ساعة لكل وحدة' },
    rating: 4.9, reviewCount: 3800, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['chandelier installation', 'lighting', 'electrician', 'تركيب ثريات', 'فني كهربائي', 'تركيب اضاءة'],
  }, // <-- FIX: This comma was missing

  // --- 4. Residential Cleaning (Specialized) ---
  {
    id: 'sofa-deep-cleaning',
    slug: 'sofa-deep-cleaning',
    name: 'Sofa & Upholstery Deep Cleaning',
    nameAr: 'تنظيف كنب ومجالس (مفروشات)',
    categoryId: 'residential-cleaning',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['carpet-shampooing', 'curtain-cleaning', 'move-in-out-cleaning'],
    description: {
      short: 'Revive your furniture with our deep shampoo and steam cleaning for sofas, chairs, and upholstery.',
      shortAr: 'أعد الحياة لأثاثك مع خدمة التنظيف العميق بالشامبو والبخار للكنب والكراسي والمفروشات.',
      long: 'Our upholstery cleaning process uses professional-grade equipment to inject a hot water and shampoo solution deep into the fabric, then extracts the dirt, stains, and allergens, leaving your sofa fresh, sanitized, and looking its best.',
      longAr: 'تستخدم عملية تنظيف المفروشات لدينا معدات احترافية لحقن محلول من الماء الساخن والشامبو في عمق القماش، ثم تقوم بسحب الأوساخ والبقع ومسببات الحساسية، مما يترك الكنب الخاص بك منتعشًا ومعقمًا وفي أفضل حالاته.',
    },
    commonProblemsSolved: ['Food and drink stains', 'Dust and allergens', 'Pet odors', 'Dull and faded fabric'],
    commonProblemsSolvedAr: ['بقع طعام وشراب', 'غبار ومسببات حساسية', 'روائح حيوانات أليفة', 'قماش باهت وقديم'],
    features: [
      { name: 'Hot Water Extraction Method', nameAr: 'تقنية التنظيف بالشفط والماء الحار' },
      { name: 'Stain & Spot Treatment', nameAr: 'معالجة متخصصة للبقع' },
      { name: 'Fabric-Safe Chemicals', nameAr: 'مواد تنظيف آمنة على الأقمشة' },
      { name: 'Fast Drying Time', nameAr: 'وقت جفاف سريع' },
    ],
    faqs: [
      { question: 'How long does the sofa take to dry?', questionAr: 'كم من الوقت يستغرق الكنب ليجف؟', answer: 'Typically, it takes between 4 to 6 hours for the fabric to be completely dry.', answerAr: 'عادة، يستغرق الأمر ما بين 4 إلى 6 ساعات حتى يجف القماش تمامًا.' },
      { question: 'Are your cleaning materials safe for children and pets?', questionAr: 'هل مواد التنظيف لديكم آمنة للأطفال والحيوانات الأليفة؟', answer: 'Yes, we use non-toxic, eco-friendly cleaning solutions that are safe for your entire family.', answerAr: 'نعم، نستخدم حلول تنظيف صديقة للبيئة وغير سامة وآمنة لجميع أفراد عائلتك.' }
    ],
    icon: 'sofa',
    pricing: { model: 'quote' }, // Based on number of seats
    duration: { text: '1-3 hours', textAr: '1-3 ساعات' },
    rating: 4.8, reviewCount: 6200, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['sofa cleaning', 'upholstery cleaning', 'couch cleaning', 'تنظيف كنب', 'غسيل مجالس'],
  },
  {
    id: 'carpet-shampooing',
    slug: 'carpet-shampooing',
    name: 'Carpet & Rug Shampooing',
    nameAr: 'غسيل سجاد وموكيت',
    categoryId: 'residential-cleaning',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['sofa-deep-cleaning', 'floor-polishing-crystallization'],
    description: {
      short: 'Deep carpet cleaning using shampooing and extraction machines to remove embedded dirt and restore color.',
      shortAr: 'تنظيف عميق للسجاد والموكيت باستخدام ماكينات الشامبو والشفط لإزالة الأوساخ العميقة واستعادة الألوان.',
      long: 'Our professional carpet cleaning service goes beyond simple vacuuming. We use powerful machines to agitate carpet fibers with a specialized shampoo, breaking down dirt and stains. A high-power extractor then removes the solution along with all the grime.',
      longAr: 'تتجاوز خدمة تنظيف السجاد الاحترافية لدينا التنظيف بالمكنسة الكهربائية. نستخدم آلات قوية لتحريك ألياف السجاد بشامبو متخصص، وتفتيت الأوساخ والبقع. ثم يقوم مستخرج عالي القوة بإزالة المحلول مع كل الأوساخ.',
    },
    commonProblemsSolved: ['Deep-seated dirt', 'Tough stains', 'High-traffic area discoloration', 'Lingering odors'],
    commonProblemsSolvedAr: ['أوساخ عميقة', 'بقع صعبة', 'تغير لون مناطق المشي', 'روائح عالقة'],
    features: [
      { name: 'Professional Shampooing Machines', nameAr: 'ماكينات تنظيف احترافية' },
      { name: 'Heavy-Duty Stain Removal', nameAr: 'إزالة قوية للبقع' },
      { name: 'Deodorization Treatment', nameAr: 'معالجة لإزالة الروائح الكريهة' },
      { name: 'Safe for All Carpet Types', nameAr: 'آمن لجميع أنواع السجاد' },
    ],
    faqs: [
      { question: 'Do I need to move my furniture?', questionAr: 'هل يجب أن أحرك أثاثي؟', answer: 'We kindly ask that you move small items and breakables. Our team can assist with moving larger items like sofas and tables.', answerAr: 'نرجو منك إزالة الأغراض الصغيرة والقابلة للكسر. يمكن لفريقنا المساعدة في نقل الأغراض الكبيرة مثل الكنب والطاولات.' }
    ],
    icon: 'layers',
    pricing: { model: 'quote' }, // Based on square meters
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.8, reviewCount: 5500, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['carpet cleaning', 'rug cleaning', 'shampooing', 'غسيل سجاد', 'تنظيف موكيت'],
  },
  {
    id: 'water-tank-cleaning',
    slug: 'water-tank-cleaning',
    name: 'Water Tank Cleaning & Disinfection',
    nameAr: 'تنظيف وتعقيم خزانات المياه',
    categoryId: 'residential-cleaning',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11'
    ],
    relatedServiceIds: ['emergency-plumbing-leaks', 'leak-detection', 'insulation-services'],
    description: {
      short: 'Multi-stage process to drain, scrub, and disinfect water tanks for safe, clean water.',
      shortAr: 'عملية متعددة المراحل لتفريغ، فرك، وتطهير خزانات المياه لضمان مياه نظيفة وآمنة.',
      long: 'We follow a strict, hygienic process: draining the tank, removing all sediment and sludge, pressure washing all internal surfaces, and finally disinfecting with a municipality-approved, safe solution. Ensure your family\'s water is free from contaminants.',
      longAr: 'نتبع عملية صحية صارمة: تفريغ الخزان، إزالة جميع الرواسب، غسيل جميع الأسطح الداخلية بالضغط، وأخيرًا التطهير بمحلول آمن ومعتمد من البلدية. اضمن أن مياه عائلتك خالية من الملوثات.',
    },
    commonProblemsSolved: ['Dirty or smelly water', 'Sediment at the bottom of the tank', 'Algae or slime growth', 'Routine annual maintenance'],
    commonProblemsSolvedAr: ['مياه متسخة أو ذات رائحة', 'رواسب في قاع الخزان', 'نمو طحالب أو لزوجة', 'صيانة سنوية روتينية'],
    features: [
      { name: 'Draining & Sludge Removal', nameAr: 'تفريغ وإزالة الرواسب' },
      { name: 'High-Pressure Wall Scrubbing', nameAr: 'فرك الجدران بالضغط العالي' },
      { name: 'Municipality-Approved Disinfection', nameAr: 'تطهير بمواد معتمدة من البلدية' },
      { name: 'Safety & Hygiene Protocols', nameAr: 'بروتوكولات السلامة والنظافة' },
    ],
    faqs: [
      { question: 'How often should water tanks be cleaned?', questionAr: 'كم مرة يجب تنظيف خزانات المياه؟', answer: 'Most health authorities recommend cleaning and disinfecting your water tank at least once every 6 to 12 months.', answerAr: 'توصي معظم السلطات الصحية بتنظيف وتطهير خزان المياه الخاص بك مرة واحدة على الأقل كل 6 إلى 12 شهرًا.' }
    ],
    icon: 'droplets',
    pricing: { model: 'quote' },
    duration: { text: '2-4 hours', textAr: '2-4 ساعات' },
    rating: 4.9, reviewCount: 3900, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['water tank cleaning', 'tank disinfection', 'clean water', 'تنظيف خزانات', 'تعقيم خزانات المياه'],
  },

  // --- 5. Pest Control (Essential Services) ---
  {
    id: 'general-pest-control',
    slug: 'general-pest-control',
    name: 'General Pest Control (Ants, Cockroaches)',
    nameAr: 'مكافحة الحشرات العامة (نمل، صراصير)',
    categoryId: 'pest-control',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['bed-bug-extermination', 'termite-pest-control', 'rodent-control'],
    description: {
      short: 'Effective gel and spray treatments to eliminate common household pests like cockroaches and ants.',
      shortAr: 'علاجات فعالة بالجل والرش للقضاء على الحشرات المنزلية الشائعة مثل الصراصير والنمل.',
      long: 'Our integrated pest management approach targets pests at their source. We use a combination of safe, long-lasting sprays for common areas and targeted gel bait application in critical areas like kitchens and bathrooms to eliminate colonies and prevent re-infestation.',
      longAr: 'نهجنا في الإدارة المتكاملة للآفات يستهدف الحشرات في مصدرها. نستخدم مزيجًا من البخاخات الآمنة طويلة المفعول للمناطق العامة وتطبيق الطعم الهلامي (الجل) في المناطق الحرجة مثل المطابخ والحمامات للقضاء على المستعمرات ومنع عودة الإصابة.',
    },
    commonProblemsSolved: ['Seeing cockroaches in the kitchen', 'Ant trails on floors and walls', 'Pests appearing after rain', 'General feeling of uncleanliness'],
    commonProblemsSolvedAr: ['رؤية صراصير في المطبخ', 'مسارات نمل على الأرضيات والجدران', 'ظهور الحشرات بعد المطر', 'شعور عام بعدم النظافة'],
    features: [
      { name: 'Targeted Gel Bait Application', nameAr: 'استخدام الطعم (الجل) المستهدف' },
      { name: 'Odorless & Safe Sprays', nameAr: 'مبيدات رش آمنة وعديمة الرائحة' },
      { name: 'Treatment of Drains & Manholes', nameAr: 'معالجة البالوعات وغرف التفتيش' },
      { name: 'Service Guarantee', nameAr: 'ضمان على الخدمة' },
    ],
    faqs: [
      { question: 'Is the treatment safe for my family?', questionAr: 'هل الرش آمن على عائلتي؟', answer: 'Yes, we use government-approved, low-toxicity pesticides and apply them in a targeted manner that minimizes exposure. We recommend keeping children and pets away from treated areas for a few hours as a precaution.', answerAr: 'نعم، نستخدم مبيدات حشرية معتمدة ومنخفضة السمية ونطبقها بطريقة مستهدفة تقلل من التعرض. نوصي بإبعاد الأطفال والحيوانات الأليفة عن المناطق المعالجة لبضع ساعات كإجراء احترازي.' }
    ],
    icon: 'bug',
    pricing: { model: 'quote' }, // Based on property size
    duration: { text: '45-90 mins', textAr: '45-90 دقيقة' },
    rating: 4.8, reviewCount: 7100, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['pest control', 'cockroach control', 'ant control', 'exterminator', 'مكافحة حشرات', 'رش مبيدات', 'شركة حشرات'],
  },
  {
    id: 'rodent-control',
    slug: 'rodent-control',
    name: 'Rodent Control (Rats & Mice)',
    nameAr: 'مكافحة القوارض (الفئران والجرذان)',
    categoryId: 'pest-control',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['general-pest-control', 'yard-cleaning-waste-removal'],
    description: {
      short: 'Strategic placement of traps and secure bait stations to eliminate and prevent rodent infestations.',
      shortAr: 'وضع استراتيجي للمصائد ومحطات الطعم الآمنة للقضاء على القوارض ومنع انتشارها.',
      long: 'Our rodent control program starts with a thorough inspection to identify entry points and nesting areas. We then use a combination of mechanical traps and secure, tamper-proof bait stations to effectively eliminate the current population and provide long-term control.',
      longAr: 'يبدأ برنامجنا لمكافحة القوارض بفحص شامل لتحديد نقاط الدخول ومناطق التعشيش. ثم نستخدم مزيجًا من الفخاخ الميكانيكية ومحطات الطعم الآمنة والمضادة للعبث للقضاء على أعدادها الحالية بشكل فعال وتوفير السيطرة على المدى الطويل.',
    },
    commonProblemsSolved: ['Hearing scratching noises in walls/ceilings', 'Finding rodent droppings', 'Chewed wires or food packages', 'Seeing rats or mice'],
    commonProblemsSolvedAr: ['سماع أصوات خدش في الجدران/الأسقف', 'العثور على فضلات القوارض', 'رؤية أسلاك أو عبوات طعام ممضوغة', 'رؤية فئران أو جرذان'],
    features: [
      { name: 'Thorough Property Inspection', nameAr: 'فحص شامل للموقع' },
      { name: 'Tamper-Proof Bait Stations', nameAr: 'محطات طعم آمنة ضد العبث' },
      { name: 'Identification & Sealing of Entry Points', nameAr: 'تحديد وسد نقاط الدخول' },
      { name: 'Follow-up Visits & Monitoring', nameAr: 'زيارات متابعة ومراقبة' },
    ],
    faqs: [
      { question: 'Are the baits dangerous for my dog/cat?', questionAr: 'هل الطعوم خطيرة على كلبي/قطتي؟', answer: 'We place all baits inside locked, tamper-proof stations that are specifically designed to allow access for rodents but prevent access by pets and children.', answerAr: 'نضع جميع الطعوم داخل محطات مقفلة ومقاومة للعبث، مصممة خصيصًا للسماح بدخول القوارض ولكنها تمنع وصول الحيوانات الأليفة والأطفال.' }
    ],
    icon: 'rat',
    pricing: { model: 'quote' },
    duration: { text: 'Multi-visit process', textAr: 'عملية متعددة الزيارات' },
    rating: 4.8, reviewCount: 1900, isPopular: true, isEmergency: true, isActive: true,
    keywords: ['rodent control', 'rat control', 'mice exterminator', 'مكافحة الفئران', 'مكافحة الجرذان'],
  },
  {
    id: 'bird-control',
    slug: 'bird-control',
    name: 'Bird Control & Deterrent Installation',
    nameAr: 'طرد الحمام وتركيب طارد الطيور',
    categoryId: 'pest-control',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9'
    ],
    relatedServiceIds: ['facade-window-cleaning', 'exterior-cleaning'],
    description: {
      short: 'Humane installation of bird spikes and nets to prevent pigeons from nesting on buildings and AC units.',
      shortAr: 'تركيب إنساني لأشواك وشباك طاردة للطيور لمنع الحمام من التعشيش على المباني ووحدات التكييف.',
      long: 'Pigeon droppings are acidic and can damage property, in addition to being a health hazard. We provide humane and effective solutions by installing physical deterrents like bird spikes, netting, or tensioned wires on ledges, roofs, and AC units to prevent them from landing and nesting.',
      longAr: 'فضلات الحمام حمضية ويمكن أن تلحق الضرر بالممتلكات، بالإضافة إلى كونها خطرًا صحيًا. نحن نقدم حلولًا إنسانية وفعالة عن طريق تركيب رادعات مادية مثل الأشواك أو الشباك أو الأسلاك المشدودة على الحواف والأسطح ووحدات التكييف لمنعها من الهبوط والتعشيش.',
    },
    commonProblemsSolved: ['Pigeon droppings on balconies and window sills', 'Nesting on AC units causing damage', 'Constant noise from pigeons', 'Health concerns from bird waste'],
    commonProblemsSolvedAr: ['فضلات الحمام على الشرفات وحواف النوافذ', 'تعشيش الحمام على المكيفات مما يسبب ضررًا', 'إزعاج مستمر من أصوات الحمام', 'مخاوف صحية من مخلفات الطيور'],
    features: [
      { name: 'Installation of Bird Spikes', nameAr: 'تركيب أشواك (مسامير) طاردة للحمام' },
      { name: 'Installation of Bird Netting', nameAr: 'تركيب شبك طارد للحمام' },
      { name: 'Cleaning & Disinfection of Affected Areas', nameAr: 'تنظيف وتطهير المناطق المتضررة' },
      { name: 'Humane & Long-Lasting Solutions', nameAr: 'حلول إنسانية وطويلة الأمد' },
    ],
    faqs: [
      { question: 'Do the spikes harm the birds?', questionAr: 'هل تؤذي الأشواك الطيور؟', answer: 'No, not at all. The spikes are blunt and designed to be a deterrent. They create an uneven surface that birds cannot comfortably land on, encouraging them to go elsewhere without causing any injury.', answerAr: 'لا، على الإطلاق. الأشواك غير حادة ومصممة لتكون رادعًا. إنها تخلق سطحًا غير مستوٍ لا تستطيع الطيور الهبوط عليه بشكل مريح، مما يشجعها على الذهاب إلى مكان آخر دون التسبب في أي إصابة.' }
    ],
    icon: 'bird',
    pricing: { model: 'quote' },
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.9, reviewCount: 1250, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['bird control', 'pigeon control', 'bird spikes', 'anti bird net', 'طارد الحمام', 'مكافحة الحمام', 'تركيب شوك'],
  },
  
  // --- 6. Painting & Decor ---
  {
    id: 'interior-wall-painting',
    slug: 'interior-wall-painting',
    name: 'Interior Wall Painting',
    nameAr: 'دهان الجدران الداخلية (صباغة)',
    categoryId: 'painting-decor',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['exterior-wall-painting', 'gypsum-decor', 'renovation-remodeling'],
    description: {
      short: 'Professional interior painting services for a fresh, new look. Sharp lines and a perfect finish, guaranteed.',
      shortAr: 'خدمات دهان داخلي احترافية لمظهر جديد ومنعش. خطوط حادة وتشطيب مثالي، مضمون.',
      long: 'Transform your space with a fresh coat of paint. Our service includes protecting your furniture and floors, preparing the walls (sanding, filling cracks), and applying high-quality paint for a uniform, durable, and beautiful finish. We help you choose colors and finishes.',
      longAr: 'غير شكل مساحتك بطبقة دهان جديدة. تشمل خدمتنا حماية أثاثك وأرضياتك، وتجهيز الجدران (صنفرة، معجون، سد الشقوق)، وتطبيق دهانات عالية الجودة للحصول على تشطيب موحد، ومتين، وجميل. نساعدك في اختيار الألوان والتشطيبات.',
    },
    commonProblemsSolved: ['Dull or faded paint', 'Peeling or cracked paint', 'Desire for a color change', 'Preparing a home for sale', 'New construction finishing'],
    commonProblemsSolvedAr: ['دهان باهت أو قديم', 'تقشير أو تشقق الدهان', 'الرغبة في تغيير اللون', 'تجهيز المنزل للبيع', 'تشطيبات البناء الجديد'],
    features: [
      { name: 'Furniture & Floor Protection', nameAr: 'حماية الأثاث والأرضيات' },
      { name: 'Full Wall Preparation (Sanding & Filling)', nameAr: 'تجهيز كامل للجدران (صنفرة ومعجون)' },
      { name: 'Application of Primer & 2 Coats of Paint', nameAr: 'تطبيق طبقة أساس وطبقتين دهان' },
      { name: 'Sharp Edges & Clean Lines', nameAr: 'حواف حادة وخطوط نظيفة' },
    ],
    faqs: [
      { question: 'Does the price include the paint?', questionAr: 'هل السعر يشمل الدهان؟', answer: 'We offer flexible packages. The price can include high-quality paint from brands like Jotun or Jazeera, or you can provide the paint yourself.', answerAr: 'نقدم باقات مرنة. يمكن أن يشمل السعر دهانات عالية الجودة من ماركات مثل جوتن أو الجزيرة، أو يمكنك توفير الدهان بنفسك.' }
    ],
    icon: 'paint-roller',
    pricing: { model: 'quote' },
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.8, reviewCount: 7800, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['interior painting', 'wall painting', 'house painter', 'decor', 'دهانات', 'صباغ', 'بويه'],
  }
];