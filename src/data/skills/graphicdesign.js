// ─────────────────────────────────────────────
// SKILL 1: GRAPHIC DESIGN
// ─────────────────────────────────────────────
export const graphicDesign = {
  id: "design",
  icon: "🎨",
  color: "#7C3AED",
  accent: "#A78BFA",
  bg: "#0D0818",
  earning: "5,000 – 80,000 DZD",
  firstClient: { fr: "3–4 semaines", ar: "3–4 أسابيع", en: "3–4 weeks" },
  startTool: "Canva (canva.com)",
  title: { fr: "Graphic Design", ar: "التصميم الجرافيكي", en: "Graphic Design" },
  subtitle: { fr: "Communication Visuelle", ar: "التواصل البصري", en: "Visual Communication" },
  tagline: {
    fr: "Transformez vos idées en visuels qui vendent",
    ar: "حوّل أفكارك لتصاميم تبيع",
    en: "Turn ideas into visuals that sell"
  },
  levels: [
    {
      name: { fr: "Débutant", ar: "مبتدئ", en: "Beginner" },
      badge: "🌱",
      duration: { fr: "Semaines 1–4", ar: "الأسابيع 1–4", en: "Weeks 1–4" },
      goal: {
        fr: "Apprendre les 4 règles visuelles et créer vos premiers designs dans Canva",
        ar: "تعلم 4 قواعد التصميم وتصنع أول تصاميمك في Canva",
        en: "Learn the 4 visual rules and create your first real designs in Canva"
      },
      lessons: [
        {
          id: "design-b-1",
          title: {
            fr: "Comment installer et utiliser Canva",
            ar: "كيفاش تنصب وتستعمل Canva",
            en: "How to Install & Use Canva"
          },
          image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
          layout: "top",
          steps: {
            fr: [
              "Allez sur canva.com ou téléchargez l'app Canva depuis Google Play ou App Store.",
              "Cliquez 'S'inscrire' et créez un compte gratuit avec votre email ou compte Google.",
              "Une fois connecté, cliquez 'Créer un design' en haut du tableau de bord.",
              "Choisissez 'Post Instagram (Carré)' — ouvre un canvas vierge 1080×1080px.",
              "Panneau GAUCHE: Templates, Éléments, Texte, Arrière-plan, Téléchargements.",
              "Barre du HAUT: contrôles de police, couleurs, position quand vous cliquez un élément.",
              "Ctrl+Z pour annuler. Ctrl+D pour dupliquer n'importe quel élément.",
              "Bouton 'Partager' → 'Télécharger' → PNG pour réseaux sociaux ou PDF pour impression."
            ],
            ar: [
              "روح لـ canva.com ولا حمّل تطبيق Canva من Google Play أو App Store.",
              "اضغط 'سجّل' وأنشئ حساب مجاني بإيميلك أو حساب Google.",
              "من لوحة التحكم، اضغط 'إنشاء تصميم' في الأعلى.",
              "اختار 'منشور Instagram (مربع)' — يفتح canvas فارغ 1080×1080px.",
              "اللوحة اليسرى: Templates، عناصر، نص، خلفية، تحميلات.",
              "شريط الأعلى: خطوط، ألوان، موضع — يظهر لما تضغط على أي عنصر.",
              "Ctrl+Z باش تتراجع. Ctrl+D باش تنسخ أي عنصر.",
              "زر 'مشاركة' → 'تحميل' → PNG للسوشيال أو PDF للطباعة."
            ],
            en: [
              "Go to canva.com or download the Canva app from Google Play or App Store.",
              "Click 'Sign Up' and create a free account using your email or Google account.",
              "Once inside, click 'Create a design' at the top of the dashboard.",
              "Choose 'Instagram Post (Square)' — opens a blank 1080×1080px canvas.",
              "LEFT panel: Templates, Elements, Text, Background, Uploads.",
              "TOP toolbar: font controls, colors, position when you click any element.",
              "Ctrl+Z to undo. Ctrl+D to duplicate any element.",
              "'Share' button → 'Download' → PNG for social media or PDF for print."
            ]
          },
          method: {
            fr: "Ouvrez Canva maintenant et passez 20 minutes à cliquer sur chaque bouton dans chaque panneau. Ne dessinez rien encore — explorez juste. Cette session d'exploration est votre vraie leçon.",
            ar: "افتح Canva هذا الوقت واقضي 20 دقيقة تضغط على كل زر في كل لوحة. ما تصمّمش حتى حاجة — بس استكشف. هذي الجلسة هي درسك الحقيقي.",
            en: "Open Canva right now and spend 20 minutes clicking every button in every panel. Don't design anything yet — just explore. This exploration session is your real lesson."
          },
          exercise: {
            fr: "Créez un post Instagram simple avec juste votre nom en grand texte gras et un fond coloré. Téléchargez-le. Cela prouve que vous maîtrisez le flux complet.",
            ar: "صنع منشور Instagram بسيط بس اسمك بخط كبير وعريض وخلفية ملونة. حمّله. هذا يثبت أنك فهمت كل الخطوات.",
            en: "Create a plain Instagram post with just your name in big bold text and a colored background. Download it. This proves you know the full flow."
          },
          tip: {
            fr: "💡 Canva Gratuit vous donne 250 000+ templates. Passez à Pro seulement après avoir des clients payants.",
            ar: "💡 Canva المجاني يعطيك +250,000 قالب. انتقل للـ Pro بس بعد ما تجيك زبائن يدفعوا.",
            en: "💡 Canva Free gives you 250,000+ templates. Only upgrade after you have paying clients."
          }
        },
        {
          id: "design-b-2",
          title: {
            fr: "Les 4 Règles du Design (CARP)",
            ar: "4 قواعد التصميم (CARP)",
            en: "The 4 Design Rules (CARP)"
          },
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
          layout: "right",
          steps: {
            fr: [
              "CONTRASTE: Rendez la chose la plus importante la plus grande ou la plus différente.",
              "ALIGNEMENT: Rien n'est placé au hasard. Activez les guides dans Canva: Vue → Afficher règles.",
              "RÉPÉTITION: Même police, même couleur, même style pour les éléments similaires.",
              "PROXIMITÉ: Groupez les choses qui vont ensemble. Séparez ce qui n'a pas de rapport.",
              "Pratiquez: Ouvrez n'importe quel template Canva. Identifiez chaque règle dans chaque élément.",
              "Cherchez 'flyer algérie restaurant' sur Google. Identifiez les règles respectées et brisées."
            ],
            ar: [
              "التباين: خلّي الحاجة المهمة أكبر أو أختلف.",
              "المحاذاة: ما كاين والو موضوع بالعشوائية. فعّل الخطوط في Canva: عرض → أظهر الخطوط.",
              "التكرار: نفس الخط، نفس اللون، نفس الستايل للعناصر المتشابهة.",
              "القرب: جمّع الأشياء اللي تمشي مع بعض. فرّق ما ما يمشيش.",
              "تمرّن: افتح أي قالب Canva. حدّد كل قاعدة في كل عنصر.",
              "دور على 'flyer algérie restaurant' في Google. حدّد القواعد المتّبعة والمكسورة."
            ],
            en: [
              "CONTRAST: Make the most important thing the biggest or most different.",
              "ALIGNMENT: Nothing placed randomly. Enable guides in Canva: View → Show Rulers.",
              "REPETITION: Same font, same color, same style for similar elements.",
              "PROXIMITY: Group things that belong together. Separate what doesn't.",
              "Practice: Open any Canva template. Identify each rule in each element.",
              "Search 'flyer algérie restaurant' on Google. Identify rules followed and broken."
            ]
          },
          method: {
            fr: "Brisez les règles délibérément d'abord, puis corrigez. La comparaison rendra les règles inoubliables.",
            ar: "اكسر القواعد بالقصد أولاً، وبعدين صلّح. المقارنة راح تخلّيك ما تنساش.",
            en: "Break the rules deliberately first, then fix them. The comparison will make the rules unforgettable."
          },
          exercise: {
            fr: "Designez 'Restaurant El Baraka, Alger' comme carte de visite DEUX FOIS: Version 1 = violez les 4 règles. Version 2 = respectez-les parfaitement.",
            ar: "صمّم 'مطعم البركة، الجزائر' كبطاقة أعمال مرتين: النسخة 1 = اكسر الـ4 قواعد. النسخة 2 = اتبّعها بالكامل.",
            en: "Design 'Restaurant El Baraka, Alger' as a business card TWICE: Version 1 = violate all 4 rules. Version 2 = follow them perfectly."
          },
          tip: {
            fr: "💡 Les designers professionnels brisent les règles seulement APRÈS les avoir maîtrisées. 50+ designs avant d'expérimenter.",
            ar: "💡 المصممين المحترفين يكسروا القواعد بس بعد ما يتقنوها. +50 تصميم قبل التجريب.",
            en: "💡 Professional designers break rules only AFTER mastering them. 50+ designs before experimenting."
          }
        },
        {
          id: "design-b-3",
          title: {
            fr: "Théorie des Couleurs",
            ar: "نظرية الألوان",
            en: "Color Theory"
          },
          image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80",
          layout: "left",
          steps: {
            fr: [
              "Allez sur coolors.co — génère des palettes harmonieuses en un clic. Espace = nouvelle palette.",
              "Émotions: Rouge = urgence/food. Bleu = confiance/tech. Vert = nature/argent. Jaune = bonheur. Noir = luxe.",
              "Règle 60-30-10: Principal 60% (fonds), Secondaire 30% (titres), Accent 10% (boutons seulement).",
              "Extraire couleurs d'une photo: Canva → cliquez image → pipette → appliquez aux textes.",
              "Vérifier harmonie: color.adobe.com → Complémentaire → bougez la roue.",
              "Maximum 3 couleurs par design en tant que débutant."
            ],
            ar: [
              "روح لـ coolors.co — يولّد باليتات منسجمة بضغطة. مسافة = باليت جديد.",
              "المشاعر: أحمر = إلحاح/أكل. أزرق = ثقة/تقنية. أخضر = طبيعة/مال. أصفر = سعادة. أسود = فخامة.",
              "قاعدة 60-30-10: رئيسي 60% (خلفيات)، ثانوي 30% (عناوين)، accent 10% (أزرار فقط).",
              "استخراج ألوان من صورة: Canva → اضغط صورة → قطّارة → طبّق على النصوص.",
              "تحقق من الانسجام: color.adobe.com → تكميلي → حرّك العجلة.",
              "أقصاه 3 ألوان في تصميم واحد وأنت مبتدئ."
            ],
            en: [
              "Go to coolors.co — generates harmonious palettes in one click. Space = new palette.",
              "Emotions: Red = urgency/food. Blue = trust/tech. Green = nature/money. Yellow = happiness. Black = luxury.",
              "60-30-10 rule: Main 60% (backgrounds), Secondary 30% (titles), Accent 10% (buttons only).",
              "Extract colors from photo: Canva → click image → eyedropper → apply to text.",
              "Check harmony: color.adobe.com → Complementary → move the wheel.",
              "Maximum 3 colors per design as a beginner."
            ]
          },
          method: {
            fr: "Analysez les pages Instagram de 5 marques algériennes réussies. Pour chaque post populaire: couleur principale, émotion déclenchée, nombre de couleurs.",
            ar: "حلّل صفحات Instagram لـ5 علامات جزائرية ناجحة. لكل منشور شهير: اللون الرئيسي، المشاعر المثارة، عدد الألوان.",
            en: "Analyze Instagram pages of 5 successful Algerian brands. For each popular post: main color, emotion triggered, number of colors."
          },
          exercise: {
            fr: "Générez 5 palettes sur coolors.co. Pour chacune: nommez un type d'entreprise algérienne et expliquez POURQUOI les couleurs correspondent.",
            ar: "ولّد 5 باليتات على coolors.co. لكل واحدة: سمّي نوع مشروع جزائري واشرح لماذا الألوان تناسبه.",
            en: "Generate 5 palettes on coolors.co. For each: name an Algerian business type and explain WHY the colors fit."
          },
          tip: {
            fr: "💡 En cas de doute: texte noir sur blanc + UNE couleur d'accent. Toujours professionnel.",
            ar: "💡 في حالة الشك: نص أسود على أبيض + لون accent واحد. دايماً يبان محترف.",
            en: "💡 When in doubt: black text on white + ONE accent color. Always looks professional."
          }
        },
        {
          id: "design-b-4",
          title: {
            fr: "Typographie — Choisir et Associer les Polices",
            ar: "الخطوط — كيفاش تختار وتجمع",
            en: "Typography — Choosing and Pairing Fonts"
          },
          image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
          layout: "top",
          steps: {
            fr: [
              "fonts.google.com — 1400+ polices gratuites. Serif = formel. Sans-serif = moderne. Display = titres.",
              "Maximum 2 familles: une décorative pour TITRES, une lisible pour CORPS de texte.",
              "Hiérarchie: Titre 36–72px. Sous-titre 18–28px. Corps 14–16px. Mentions 10–12px.",
              "Dans Canva: cliquez texte → nom de police → recherchez → sélectionnez.",
              "Espacement lettres (MAJUSCULES): Canva → Espacement → +50 à +150 pour look premium.",
              "Évitez: Comic Sans, Papyrus, Times New Roman."
            ],
            ar: [
              "fonts.google.com — +1400 خط مجاني. Serif = رسمي. Sans-serif = عصري. Display = عناوين.",
              "أقصاه عائلتين: واحد زخرفي للعناوين، وواحد واضح للنص العادي.",
              "الهرمية: عنوان 36–72px. فرعي 18–28px. نص 14–16px. صغير 10–12px.",
              "في Canva: اضغط نص → اسم الخط → ابحث → اختار.",
              "تباعد الحروف (أحرف كبيرة): Canva → تباعد → +50 إلى +150 للمظهر الفاخر.",
              "تجنّب: Comic Sans، Papyrus، Times New Roman."
            ],
            en: [
              "fonts.google.com — 1,400+ free fonts. Serif = formal. Sans-serif = modern. Display = headlines.",
              "Maximum 2 families: one decorative for TITLES, one readable for BODY text.",
              "Hierarchy: Title 36–72px. Subtitle 18–28px. Body 14–16px. Fine print 10–12px.",
              "In Canva: click text → font name → search → select.",
              "Letter spacing (UPPERCASE): Canva → Spacing → +50 to +150 for premium look.",
              "Avoid: Comic Sans, Papyrus, Times New Roman."
            ]
          },
          method: {
            fr: "Allez sur fontpair.co — parcourez 20 associations. Pour chacune: quel type d'entreprise cela convient-il?",
            ar: "روح لـ fontpair.co — شوف 20 تركيبة. لكل واحدة: أنهي نوع مشروع يناسبها؟",
            en: "Go to fontpair.co — browse 20 pairings. For each: what type of business does this suit?"
          },
          exercise: {
            fr: "Designez la même carte de visite 4 fois: Classique, Moderne, Créative, Premium. Laquelle pour un restaurant, un cabinet d'avocats, une boutique?",
            ar: "صمّم نفس بطاقة الأعمال 4 مرات: كلاسيكي، عصري، إبداعي، فاخر. أيها لمطعم، مكتب محاماة، بوتيك؟",
            en: "Design the same business card 4 times: Classic, Modern, Creative, Premium. Which for a restaurant, law firm, boutique?"
          },
          tip: {
            fr: "💡 Pour l'arabe: 'Cairo', 'Tajawal' ou 'Noto Kufi Arabic' — Google Fonts modernes et gratuits.",
            ar: "💡 للعربية: 'Cairo'، 'Tajawal' أو 'Noto Kufi Arabic' — خطوط Google عصرية ومجانية.",
            en: "💡 For Arabic: 'Cairo', 'Tajawal', or 'Noto Kufi Arabic' — modern free Google Fonts."
          }
        },
        {
          id: "design-b-5",
          title: {
            fr: "Comment Designer un Logo de Zéro",
            ar: "كيفاش تصمّم شعار من الصفر",
            en: "How to Design a Logo from Zero"
          },
          image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80",
          layout: "right",
          steps: {
            fr: [
              "Brief: Nom entreprise? Que fait-elle? Qui sont les clients? 3 adjectifs décrivant la marque?",
              "Recherche: 'logo + secteur' sur Google. 10 logos concurrents. Qu'est-ce qui rendra le vôtre différent?",
              "Esquisse papier: 10 concepts en 15 minutes. Sans effacement. Entourez vos 2 favoris.",
              "Canva: Taille personnalisée 500×500px. Éléments → icônes. Combinez icône + nom. 3 couleurs.",
              "Test noir et blanc: Téléchargez avec filtre N&B. Si ça reste beau = vrai logo.",
              "Livraison: PNG transparent, PNG blanc, PNG noir, PDF impression."
            ],
            ar: [
              "البريف: اسم المشروع؟ شنو يدير؟ من هم الزبائن؟ 3 صفات تصف العلامة؟",
              "البحث: 'logo + القطاع' في Google. 10 شعارات منافسين. شنو يخلّي شعارك مختلف؟",
              "رسم على الورق: 10 أفكار في 15 دقيقة. بلا محو. دوّر على أحسن 2.",
              "Canva: حجم مخصص 500×500px. عناصر → أيقونات. ادمج أيقونة + اسم. 3 ألوان.",
              "اختبار الأسود والأبيض: حمّل بفلتر N&B. إذا زال يبان زين = شعار حقيقي.",
              "التسليم: PNG شفاف، PNG أبيض، PNG أسود، PDF طباعة."
            ],
            en: [
              "Brief: Business name? What does it do? Who are customers? 3 adjectives describing the brand?",
              "Research: 'logo + industry' on Google. 10 competitor logos. What will make yours different?",
              "Paper sketch: 10 concepts in 15 minutes. No erasing. Circle your 2 favorites.",
              "Canva: Custom size 500×500px. Elements → icons. Combine icon + name. 3 color variations.",
              "Black & white test: Download with B&W filter. If still looks good = real logo.",
              "Delivery: PNG transparent, PNG white, PNG black, PDF print."
            ]
          },
          method: {
            fr: "RE-CRÉEZ des logos existants. Prenez Djezzy ou Ooredoo et reconstruisez-les dans Canva. Vous apprendrez plus que depuis n'importe quel tutoriel.",
            ar: "أعد إنشاء شعارات موجودة. خذ Djezzy أو Ooredoo وأعد بناؤها في Canva. ستتعلم أكثر من أي tutorial.",
            en: "RE-CREATE existing logos. Take Djezzy or Ooredoo and rebuild them in Canva. You'll learn more than from any tutorial."
          },
          exercise: {
            fr: "Logo complet pour 'ATLAS' café premium algérien: 3 variantes couleur, 1 noir, 1 blanc. 3 phrases expliquant chaque choix.",
            ar: "شعار كامل لـ'ATLAS' قهوة جزائرية فاخرة: 3 ألوان، نسخة سوداء، بيضاء. 3 جمل تشرح كل اختيار.",
            en: "Complete logo for 'ATLAS' premium Algerian café: 3 color variants, 1 black, 1 white. 3 sentences explaining each choice."
          },
          tip: {
            fr: "💡 Les logos les plus professionnels sont les plus simples. Apple = une pomme. Nike = un swoosh.",
            ar: "💡 أكثر الشعارات احترافية هي الأبسط. Apple = تفاحة. Nike = swoosh.",
            en: "💡 The most professional logos are the simplest. Apple = an apple. Nike = a swoosh."
          }
        }
      ]
    }
  ]
};
