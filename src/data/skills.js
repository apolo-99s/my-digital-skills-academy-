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
// ─────────────────────────────────────────────
// GRAPHIC DESIGN — INTERMEDIATE
// ─────────────────────────────────────────────
// Add this inside graphicDesign.levels array
// after the Beginner level object
{
  name: { fr: "Intermédiaire", ar: "متوسط", en: "Intermediate" },
  badge: "⚡",
  duration: { fr: "Semaines 5–10", ar: "الأسابيع 5–10", en: "Weeks 5–10" },
  goal: {
    fr: "Passer de Canva à Photoshop, construire de vrais projets clients",
    ar: "الانتقال من Canva لـ Photoshop وبناء مشاريع حقيقية للزبائن",
    en: "Move from Canva to Photoshop, build real client projects"
  },
  lessons: [
    {
      id: "design-i-1",
      title: {
        fr: "Photoshop / Photopea — Alternative Gratuite",
        ar: "Photoshop / Photopea — البديل المجاني",
        en: "Photoshop / Photopea — Free Alternative"
      },
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80",
      layout: "left",
      steps: {
        fr: [
          "Alternative GRATUITE: photopea.com — fonctionne dans le navigateur, identique à Photoshop à 99%.",
          "Interface: Gauche = Outils. Droite = Calques. Haut = Options. Centre = Canvas.",
          "CALQUES: Feuilles transparentes empilées. Chaque élément sur son propre calque.",
          "Ouvrir photo: Fichier → Ouvrir. Double-cliquez 'Arrière-plan' → OK pour déverrouiller.",
          "Supprimer fond: Baguette magique → cliquez fond → Supprimer. Complexe: Sélection → Objet.",
          "Texte: T → cliquez canvas → tapez → changez police/taille/couleur dans la barre.",
          "Exporter: Fichier → Exporter → Exporter sous → PNG (cochez Transparence) ou JPEG."
        ],
        ar: [
          "البديل المجاني: photopea.com — يشتغل في المتصفح، شبه Photoshop بـ99%.",
          "الواجهة: يسار = أدوات. يمين = طبقات. أعلى = خيارات. وسط = Canvas.",
          "الطبقات: أوراق شفافة مكدّسة. كل عنصر على طبقته الخاصة.",
          "فتح صورة: ملف → فتح. انقر مرتين 'الخلفية' → OK لفتحها.",
          "إزالة خلفية: عصا سحرية → اضغط الخلفية → Delete. معقد: تحديد → موضوع.",
          "نص: T → اضغط Canvas → اكتب → غيّر الخط/الحجم/اللون.",
          "تصدير: ملف → تصدير → تصدير كـ → PNG (فعّل الشفافية) أو JPEG."
        ],
        en: [
          "FREE alternative: photopea.com — runs in browser, 99% identical to Photoshop.",
          "Interface: Left = Tools. Right = Layers. Top = Options. Center = Canvas.",
          "LAYERS: Transparent sheets stacked. Each element on its own layer.",
          "Open photo: File → Open. Double-click 'Background' → OK to unlock.",
          "Remove background: Magic Wand → click background → Delete. Complex: Select → Subject.",
          "Text: T → click canvas → type → change font/size/color in top bar.",
          "Export: File → Export → Export As → PNG (check Transparency) or JPEG."
        ]
      },
      method: {
        fr: "Sur Photopea: ouvrez un produit, supprimez l'arrière-plan, ajoutez fond coloré + texte prix. Simulation parfaite d'une vraie pub sociale.",
        ar: "على Photopea: افتح منتج، ازل الخلفية، زيد خلفية ملونة + نص سعر. محاكاة كاملة لإعلان حقيقي.",
        en: "On Photopea: open a product, remove background, add colored background + price text. Perfect simulation of a real social ad."
      },
      exercise: {
        fr: "Photo de produit algérien traditionnel: supprimez le fond dans Photopea, placez sur blanc, ajoutez prix + nom + ombre subtile. Exportez en PNG.",
        ar: "صورة منتج تقليدي جزائري: ازل الخلفية في Photopea، حطّها على أبيض، زيد سعر + اسم + ظل خفيف. صدّر PNG.",
        en: "Traditional Algerian product photo: remove background in Photopea, place on white, add price + name + subtle shadow. Export PNG."
      },
      tip: {
        fr: "💡 Ombre: clic droit calque → Options de fusion → Ombre portée → opacité 40%, distance 10px, flou 20px.",
        ar: "💡 الظل: انقر يمين الطبقة → خيارات المزج → ظل مسقط → شفافية 40%، مسافة 10px، تعتيم 20px.",
        en: "💡 Shadow: right-click layer → Blending Options → Drop Shadow → opacity 40%, distance 10px, blur 20px."
      }
    },
    {
      id: "design-i-2",
      title: {
        fr: "Photographie Produit avec votre Téléphone",
        ar: "تصوير المنتجات بهاتفك",
        en: "Product Photography with Your Phone"
      },
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
      layout: "right",
      steps: {
        fr: [
          "Lumière: Placez le produit près d'une FENÊTRE. Position: fenêtre à GAUCHE ou DROITE.",
          "Fond: Feuille A3 blanche courbée — aucun coin visible. Appelé 'infinity sweep'.",
          "Appareil: Appuyez sur le produit pour mise au point. Maintenez pour verrouiller.",
          "Règle des tiers: Activez la Grille. Placez le produit sur un point d'intersection.",
          "3 types: Héros (centré, fond propre), Détail (gros plan), Lifestyle (contexte réel).",
          "Édition Snapseed: Outils → Régler image → réduire Hautes lumières, augmenter Ombres."
        ],
        ar: [
          "الضوء: حط المنتج قرب نافذة. الموضع: النافذة على اليسار أو اليمين.",
          "الخلفية: ورقة A3 بيضاء منحنية — ما يبانش أي زاوية. تسمّى 'infinity sweep'.",
          "الكاميرا: اضغط على المنتج للتركيز. اثبّت الإصبع لتقفيل التركيز والإضاءة.",
          "قاعدة الأثلاث: فعّل الشبكة. حط المنتج على نقطة تقاطع.",
          "3 أنواع: رئيسية (مركّز، خلفية نظيفة)، تفاصيل (تكبير شديد)، أجواء (سياق حقيقي).",
          "تعديل Snapseed: أدوات → ضبط الصورة → قلّل الإضاءة العالية، زيد الظلال."
        ],
        en: [
          "Light: Place product near a WINDOW. Position: window to LEFT or RIGHT.",
          "Background: White A3 paper sheet curved — no corner visible. Called 'infinity sweep'.",
          "Camera: Tap product to focus. Hold to lock focus and exposure.",
          "Rule of thirds: Enable Grid. Place product at an intersection point.",
          "3 types: Hero (centered, clean background), Detail (extreme close-up), Lifestyle (real context).",
          "Snapseed edit: Tools → Tune Image → reduce Highlights, increase Shadows."
        ]
      },
      method: {
        fr: "Séance photo AUJOURD'HUI avec n'importe quel objet chez vous. 15 photos, angle uniquement. Éditez les 3 meilleures dans Snapseed.",
        ar: "جلسة تصوير اليوم بأي شيء في البيت. 15 صورة، غيّر الزاوية فقط. عدّل أحسن 3 في Snapseed.",
        en: "Photo shoot TODAY with any object at home. 15 photos, angle only. Edit best 3 in Snapseed."
      },
      exercise: {
        fr: "'Miel du Hoggar': 5 photos d'un pot de miel, techniques appliquées, éditées premium et chaleureuses.",
        ar: "'عسل الهقار': 5 صور لبرطمان عسل، التقنيات مطبّقة، معدّلة لتبان فاخرة ودافئة.",
        en: "'Miel du Hoggar': 5 photos of a honey jar, techniques applied, edited to feel premium and warm."
      },
      tip: {
        fr: "💡 Une feuille blanche à 20 DZD bat n'importe quel fond de studio cher pour 90% des produits.",
        ar: "💡 ورقة بيضاء بـ20 دج تتفوق على أي خلفية استوديو غالية لـ90% من المنتجات.",
        en: "💡 A 20 DZD white sheet beats any expensive studio backdrop for 90% of products."
      }
    },
    {
      id: "design-i-3",
      title: {
        fr: "Kit de Marque Social Media Complet",
        ar: "مجموعة هوية السوشيال ميديا الكاملة",
        en: "Complete Social Media Brand Kit"
      },
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
      layout: "top",
      steps: {
        fr: [
          "Brand Kit = templates gardant une marque cohérente: Posts, Stories, Highlights, Cadre profil.",
          "Étape 1: Dossier Canva 'Nom Client — Brand Kit'.",
          "Étape 2: 5 rectangles couleurs: Primaire, Secondaire, Accent, Neutre, Fond + codes hex.",
          "Étape 3: Templates Posts (1080×1080). Construisez. Dupliquez. Changez SEULEMENT le contenu.",
          "Étape 4: 6 types: Citation, Produit, Astuce, Promo, Coulisses, Témoignage.",
          "Étape 5: Stories (1080×1920). Mêmes polices/couleurs. Zone sondage, question, CTA bas.",
          "Étape 6: Exportez PNG + partagez lien Canva pour que le client édite lui-même."
        ],
        ar: [
          "Brand Kit = قوالب تحافظ على تناسق العلامة: منشورات، ستوري، highlights، إطار البروفيل.",
          "الخطوة 1: مجلد Canva 'اسم الزبون — Brand Kit'.",
          "الخطوة 2: 5 مستطيلات ألوان: رئيسي، ثانوي، accent، محايد، خلفية + أكواد hex.",
          "الخطوة 3: قوالب منشورات (1080×1080). ابنِ. انسخ. غيّر المحتوى فقط.",
          "الخطوة 4: 6 أنواع: اقتباس، منتج، نصيحة، عرض، كواليس، شهادة.",
          "الخطوة 5: ستوري (1080×1920). نفس الخطوط/الألوان. منطقة استطلاع، سؤال، CTA أسفل.",
          "الخطوة 6: صدّر PNG + شارك رابط Canva باش الزبون يعدّل بروحه."
        ],
        en: [
          "Brand Kit = templates keeping a brand consistent: Posts, Stories, Highlights, Profile frame.",
          "Step 1: Canva folder 'Client Name — Brand Kit'.",
          "Step 2: 5 color rectangles: Primary, Secondary, Accent, Neutral, Background + hex codes.",
          "Step 3: Post Templates (1080×1080). Build. Duplicate. Change ONLY the content.",
          "Step 4: 6 types: Quote, Product, Tip, Promo, Behind scenes, Testimonial.",
          "Step 5: Stories (1080×1920). Same fonts/colors. Poll area, question box, CTA bottom.",
          "Step 6: Export PNG + share Canva link so client edits themselves."
        ]
      },
      method: {
        fr: "Instagram d'une marque algérienne réussie: capturez 9 posts. Comptez polices et couleurs. Reproduisez leur système de templates.",
        ar: "Instagram علامة جزائرية ناجحة: صوّر 9 منشورات. احسب الخطوط والألوان. أعد إنتاج نظام قوالبهم.",
        en: "Successful Algerian brand Instagram: screenshot 9 posts. Count fonts and colors. Reproduce their template system."
      },
      exercise: {
        fr: "Brand kit 6 templates pour 'DZ Organic': palette couleurs, 6 posts, 2 stories. Tout doit sembler appartenir à la même marque.",
        ar: "Brand kit 6 قوالب لـ'DZ Organic': باليت ألوان، 6 منشورات، 2 ستوري. كل شيء لازم يبان من نفس العلامة.",
        en: "6-template brand kit for 'DZ Organic': color palette, 6 posts, 2 stories. Everything must feel like the same brand."
      },
      tip: {
        fr: "💡 Livrez aussi un PDF 1 page: polices à utiliser, couleurs, et ce qu'il NE FAUT PAS faire.",
        ar: "💡 سلّم كمان PDF صفحة واحدة: الخطوط للاستخدام، الألوان، وما لا يجب فعله.",
        en: "💡 Also deliver a 1-page PDF: fonts to use, colors, and what NOT to do."
      }
    },
    {
      id: "design-i-4",
      title: {
        fr: "Construire un Portfolio qui Attire des Clients",
        ar: "بناء بورتفوليو يجلب الزبائن",
        en: "Build a Portfolio That Gets Clients"
      },
      image: "https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&q=80",
      layout: "left",
      steps: {
        fr: [
          "Règle: 10 pièces AVANT d'approcher un client. Paraître réelles, pas scolaires.",
          "5 clients fictifs: restaurant, boutique, pharmacie, livraison, café. Inventez les noms.",
          "Pour chacun: 1 logo + 1 carte de visite + 3 posts = 15 pièces minimum.",
          "Behance (behance.net — gratuit): Cover, Brief, Processus, Résultat pour chaque projet.",
          "Mockups: freepik.com → mockups gratuits → ouvrez dans Photopea → collez votre logo.",
          "Instagram séparé pour design: postez 1 projet/jour pendant 10 jours.",
          "Après chaque projet gratuit: demandez 2 phrases de témoignage au propriétaire."
        ],
        ar: [
          "القاعدة: 10 أعمال قبل التواصل مع أي زبون. تبان حقيقية مش مدرسية.",
          "5 زبائن وهميين: مطعم، بوتيك، صيدلية، توصيل، مقهى. اخترع الأسماء.",
          "لكل واحد: شعار + بطاقة أعمال + 3 منشورات = 15 عمل على الأقل.",
          "Behance (behance.net — مجاني): غلاف، بريف، عملية، نتيجة لكل مشروع.",
          "Mockups: freepik.com → mockups مجانية → افتح في Photopea → الصق شعارك.",
          "Instagram منفصل للتصميم: انشر مشروع/يوم لمدة 10 أيام.",
          "بعد كل مشروع مجاني: اطلب جملتين شهادة من الصاحب."
        ],
        en: [
          "Rule: 10 pieces BEFORE approaching a client. Must look real, not school projects.",
          "5 fictional clients: restaurant, boutique, pharmacy, delivery, café. Invent the names.",
          "For each: 1 logo + 1 business card + 3 posts = 15 pieces minimum.",
          "Behance (behance.net — free): Cover, Brief, Process, Result for each project.",
          "Mockups: freepik.com → free mockups → open in Photopea → paste your logo.",
          "Separate Instagram for design: post 1 project/day for 10 days.",
          "After each free project: ask owner for 2 sentences of testimonial."
        ]
      },
      method: {
        fr: "Ouvrez Behance maintenant. Complétez votre profil: photo + bio 'Graphiste basé à [ville], spécialisé en identité de marque pour entreprises locales'.",
        ar: "افتح Behance الآن. أكمل ملفك: صورة + bio 'مصمم جرافيك مقيم في [المدينة]، متخصص في هوية العلامة للمشاريع المحلية'.",
        en: "Open Behance now. Complete your profile: photo + bio 'Graphic Designer based in [city], specializing in brand identity for local businesses'."
      },
      exercise: {
        fr: "Première étude de cas Behance pour le logo ATLAS Coffee: cover, 3 couleurs, mockup carte de visite, 3 phrases expliquant vos décisions. Publiez.",
        ar: "أول دراسة حالة Behance لشعار ATLAS Coffee: غلاف، 3 ألوان، mockup بطاقة أعمال، 3 جمل تشرح قراراتك. انشر.",
        en: "First Behance case study for ATLAS Coffee logo: cover, 3 color versions, business card mockup, 3 sentences explaining decisions. Publish."
      },
      tip: {
        fr: "💡 10 projets fictifs bien présentés > 3 vrais projets mal présentés. La présentation EST la compétence.",
        ar: "💡 10 مشاريع وهمية مقدّمة زين > 3 مشاريع حقيقية مقدّمة غلط. التقديم هو المهارة.",
        en: "💡 10 well-presented fictional projects > 3 real projects shown poorly. Presentation IS the skill."
      }
    }
  ]
},

// ─────────────────────────────────────────────
// GRAPHIC DESIGN — ADVANCED
// ─────────────────────────────────────────────
{
  name: { fr: "Avancé", ar: "متقدم", en: "Advanced" },
  badge: "🔥",
  duration: { fr: "Semaines 11–20", ar: "الأسابيع 11–20", en: "Weeks 11–20" },
  goal: {
    fr: "Maîtriser Illustrator, livrer des identités complètes, fixer des tarifs professionnels",
    ar: "إتقان Illustrator، تسليم هويات كاملة، تحديد أسعار احترافية",
    en: "Master Illustrator, deliver full brand identities, set professional rates"
  },
  lessons: [
    {
      id: "design-a-1",
      title: {
        fr: "Adobe Illustrator — Vecteurs",
        ar: "Adobe Illustrator — الفيكتور",
        en: "Adobe Illustrator — Vectors"
      },
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
      layout: "right",
      steps: {
        fr: [
          "Inkscape (inkscape.org) — 100% gratuit, professionnel, très similaire à Illustrator.",
          "Vecteurs vs pixels: un logo vectoriel s'adapte de la carte de visite au panneau 10m sans perte.",
          "Outil Plume (P): Cliquez = angle droit. Cliquez+glissez = courbe. Cliquez point départ = fermer.",
          "Tracer un logo: Importez image → verrouillez calque → nouveau calque → tracez avec Plume.",
          "Pathfinder: Unir (fusionner), Soustraction (soustraire), Intersection (chevaucher seulement).",
          "Couleurs: sélectionnez forme → carré Remplissage bas gauche → entrez code hex."
        ],
        ar: [
          "Inkscape (inkscape.org) — مجاني 100%، احترافي، شبيه جداً بـ Illustrator.",
          "فيكتور vs بكسل: شعار فيكتور يتكيّف من بطاقة لإعلان 10م بدون فقدان جودة.",
          "أداة القلم (P): اضغط = زاوية مستقيمة. اضغط+اسحب = منحنى. اضغط نقطة البداية = أغلق.",
          "تتبع شعار: استورد صورة → اقفل الطبقة → طبقة جديدة → تتبّع بالقلم.",
          "Pathfinder: توحيد (دمج)، طرح (إزالة)، تقاطع (الاحتفاظ بالتداخل فقط).",
          "الألوان: اختار شكل → مربع التعبئة أسفل يسار → أدخل كود hex."
        ],
        en: [
          "Inkscape (inkscape.org) — 100% free, professional, very similar to Illustrator.",
          "Vectors vs pixels: a vector logo scales from business card to 10m billboard without quality loss.",
          "Pen Tool (P): Click = straight corner. Click+drag = curve. Click start point = close shape.",
          "Trace a logo: Import image → lock layer → new layer → trace with Pen Tool.",
          "Pathfinder: Unite (merge), Minus Front (subtract), Intersect (overlap only).",
          "Colors: select shape → Fill square bottom left → enter hex code."
        ]
      },
      method: {
        fr: "Imprimez un logo simple (3–5 formes). Tracez chaque forme avec UNIQUEMENT l'Outil Plume dans Inkscape. Répétez pour 5 logos sur une semaine.",
        ar: "اطبع شعاراً بسيطاً (3–5 أشكال). تتبّع كل شكل بأداة القلم فقط في Inkscape. كرّر لـ5 شعارات على مدى أسبوع.",
        en: "Print a simple logo (3–5 shapes). Trace every shape with ONLY the Pen Tool in Inkscape. Repeat for 5 logos over one week."
      },
      exercise: {
        fr: "Recréez le logo Ooredoo ou Djezzy depuis zéro dans Inkscape: Outil Plume + Pathfinder uniquement. Comparez au logo original.",
        ar: "أعد إنشاء شعار Ooredoo أو Djezzy من الصفر في Inkscape: أداة القلم + Pathfinder فقط. قارن مع الأصل.",
        en: "Recreate the Ooredoo or Djezzy logo from scratch in Inkscape: Pen Tool + Pathfinder only. Compare to the original."
      },
      tip: {
        fr: "💡 Client avec logo en JPEG: proposez de le redessiner en vectoriel. Facturez 3 000–8 000 DZD. Durée: 30–90 minutes.",
        ar: "💡 زبون بشعار JPEG: اقترح إعادة رسمه كفيكتور. اشحن 3,000–8,000 دج. المدة: 30–90 دقيقة.",
        en: "💡 Client with JPEG logo: offer to redraw as vector. Charge 3,000–8,000 DZD. Duration: 30–90 minutes."
      }
    },
    {
      id: "design-a-2",
      title: {
        fr: "Système d'Identité de Marque Complète",
        ar: "نظام هوية العلامة الكاملة",
        en: "Complete Brand Identity System"
      },
      image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&q=80",
      layout: "top",
      steps: {
        fr: [
          "Livrables: Logo principal, secondaire, icône, palette couleurs, guide typo, carte visite, en-tête, templates social, PDF guide marque.",
          "Discovery: Qui sont vos clients? 3 concurrents? 3 mots décrivant la marque? Marques admirées?",
          "Moodboard Pinterest: 20–30 images = sentiment de la marque. Partagez AVANT de designer.",
          "3 concepts logo: 3 directions très différentes sur mockups. Client choisit 1 direction.",
          "Développement système: tout dans le même univers visuel après approbation logo.",
          "PDF Guide marque (8–15p): utilisations correctes, mauvaises, codes couleur, typo, photo style.",
          "Prix Algérie: 35 000–120 000 DZD selon expérience et taille client."
        ],
        ar: [
          "المسلّمات: شعار رئيسي، ثانوي، أيقونة، باليت ألوان، دليل خطوط، بطاقة أعمال، ورقة رسمية، قوالب سوشيال، PDF دليل العلامة.",
          "الاستكشاف: من هم زبائنك؟ 3 منافسين؟ 3 كلمات للعلامة؟ علامات تعجبك؟",
          "Moodboard Pinterest: 20–30 صورة = إحساس العلامة. شارك قبل التصميم.",
          "3 مفاهيم شعار: 3 اتجاهات مختلفة جداً على mockups. الزبون يختار اتجاهاً.",
          "تطوير النظام: كل شيء في نفس العالم البصري بعد الموافقة على الشعار.",
          "PDF دليل العلامة (8–15 ص): استخدامات صحيحة، خاطئة، أكواد ألوان، خطوط، أسلوب تصوير.",
          "أسعار الجزائر: 35,000–120,000 دج حسب الخبرة وحجم الزبون."
        ],
        en: [
          "Deliverables: Primary logo, secondary, icon, color palette, typography guide, business card, letterhead, social templates, brand guideline PDF.",
          "Discovery: Who are your customers? 3 competitors? 3 words for the brand? Admired brands?",
          "Pinterest moodboard: 20–30 images = brand feeling. Share BEFORE designing.",
          "3 logo concepts: 3 very different directions on mockups. Client chooses 1 direction.",
          "System development: everything in the same visual world after logo approval.",
          "Brand Guideline PDF (8–15p): correct uses, wrong uses, color codes, typography, photo style.",
          "Algeria pricing: 35,000–120,000 DZD depending on experience and client size."
        ]
      },
      method: {
        fr: "Réalisez un projet complet gratuit pour une vraie entreprise locale. Publiez TOUT le processus sur les réseaux. Ce seul projet vous apportera 3–5 clients payants.",
        ar: "أكمل مشروعاً كاملاً مجاناً لمشروع محلي حقيقي. انشر كل العملية على السوشيال. هذا المشروع الواحد راح يجيبلك 3–5 زبائن.",
        en: "Complete one full project free for a real local business. Post the ENTIRE process on social media. This single project will bring 3–5 paying clients."
      },
      exercise: {
        fr: "Identité complète pour 'Baya' boutique féminine algérienne: Logo 3 versions, palette, guide typo, mockup carte, 3 templates Instagram, 5 pages PDF.",
        ar: "هوية كاملة لـ'بايا' بوتيك نسائي جزائري: شعار 3 نسخ، باليت، دليل خطوط، mockup بطاقة، 3 قوالب Instagram، 5 صفحات PDF.",
        en: "Full identity for 'Baya' Algerian women's boutique: Logo 3 versions, palette, typography guide, card mockup, 3 Instagram templates, 5-page PDF."
      },
      tip: {
        fr: "💡 Le PDF Guide de Marque sépare le freelance de l'agence. L'agence facture 5× plus.",
        ar: "💡 PDF دليل العلامة يفرّق الفريلانسر عن الأجنسي. الأجنسي يشحن 5 أضعاف.",
        en: "💡 The Brand Guideline PDF separates the freelancer from the agency. The agency charges 5× more."
      }
    },
    {
      id: "design-a-3",
      title: {
        fr: "Fixer Vos Prix et Gérer les Clients",
        ar: "تحديد أسعارك والتعامل مع الزبائن",
        en: "Set Your Prices and Handle Clients"
      },
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      layout: "left",
      steps: {
        fr: [
          "Formule: Heures estimées × tarif horaire + 20% marge. Débutez à 800–1 200 DZD/heure.",
          "Prix Algérie: Logo 8–20K. Identité 35–80K. Réseaux/mois 15–35K. Carte 3–6K. Flyer 4–8K. (DZD)",
          "Paiement: TOUJOURS 50% d'avance. Sans acompte = ne commencez pas.",
          "Révisions: 2 incluses dans le prix. Supplémentaires: 1 500–3 000 DZD chacune.",
          "Devis PDF: Nom + description + livrables + délais + prix + conditions paiement + signature.",
          "Négociation: 'Trop cher' → demandez le budget → réduisez la portée, jamais le prix."
        ],
        ar: [
          "المعادلة: الساعات × سعر الساعة + 20% هامش. ابدأ بـ800–1,200 دج/ساعة.",
          "أسعار الجزائر: شعار 8–20K. هوية 35–80K. سوشيال/شهر 15–35K. بطاقة 3–6K. فلاير 4–8K. (دج)",
          "الدفع: دايماً 50% مقدّم. بدون عربون = ما تبداش.",
          "المراجعات: 2 مشمولتان في السعر. إضافية: 1,500–3,000 دج لكل واحدة.",
          "عرض سعر PDF: اسم + وصف + مسلّمات + مواعيد + سعر + شروط دفع + توقيع.",
          "التفاوض: 'غالي زيادة' → اسأل الميزانية → قلّص النطاق، أبداً ما تقلّصش السعر."
        ],
        en: [
          "Formula: Estimated hours × hourly rate + 20% buffer. Start at 800–1,200 DZD/hour.",
          "Algeria prices: Logo 8–20K. Identity 35–80K. Social/month 15–35K. Card 3–6K. Flyer 4–8K. (DZD)",
          "Payment: ALWAYS 50% upfront. No deposit = do not start.",
          "Revisions: 2 included in price. Extra: 1,500–3,000 DZD each.",
          "Proposal PDF: Name + description + deliverables + timeline + price + payment terms + signature.",
          "Negotiation: 'Too expensive' → ask budget → reduce scope, never reduce price."
        ]
      },
      method: {
        fr: "Créez votre menu de tarification en PDF dans Canva aujourd'hui. L'avoir écrit vous rend 10× plus confiant face aux clients.",
        ar: "أنشئ قائمة أسعارك كـPDF في Canva اليوم. كتابته يخليك أكثر ثقة بـ10 مرات أمام الزبائن.",
        en: "Create your pricing menu as a PDF in Canva today. Having it written makes you 10× more confident with clients."
      },
      exercise: {
        fr: "Devis complet PDF pour 'Pharmacie Al Shifa, Oran': description, livrables, calendrier 3 semaines, prix détaillé, conditions paiement. Designé professionnellement dans Canva.",
        ar: "عرض سعر كامل PDF لـ'صيدلية الشفاء، وهران': وصف، مسلّمات، جدول 3 أسابيع، سعر مفصّل، شروط دفع. مصمّم احترافياً في Canva.",
        en: "Complete proposal PDF for 'Pharmacie Al Shifa, Oran': description, deliverables, 3-week timeline, detailed price, payment terms. Professionally designed in Canva."
      },
      tip: {
        fr: "💡 Dites votre prix sans hésiter: entraînez-vous devant un miroir 10 fois jusqu'à l'énoncer calmement.",
        ar: "💡 قل سعرك بدون تردد: تمرّن أمام المرآة 10 مرات حتى تذكره بهدوء.",
        en: "💡 Say your price without hesitating: practice in a mirror 10 times until you state it calmly."
      }
    }
  ]
},

// ─────────────────────────────────────────────
// GRAPHIC DESIGN — MASTER
// ─────────────────────────────────────────────
{
  name: { fr: "Maître", ar: "محترف", en: "Master" },
  badge: "👑",
  duration: { fr: "Mois 6+", ar: "الشهر 6+", en: "Month 6+" },
  goal: {
    fr: "Diriger une agence de design, embaucher des juniors, travailler avec des agences publicitaires",
    ar: "إدارة أجنسي تصميم، توظيف مساعدين، العمل مع وكالات إعلانية",
    en: "Run a design agency, hire juniors, work with advertising agencies"
  },
  lessons: [
    {
      id: "design-m-1",
      title: {
        fr: "De Freelance à Agence",
        ar: "من فريلانس لأجنسي",
        en: "From Freelancer to Agency"
      },
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      layout: "top",
      steps: {
        fr: [
          "Bon moment: travail constant > capacité seul ET vous refusez des projets. Pas avant.",
          "Collaborateur: votre meilleur étudiant ou designer en ligne. Paiement par projet d'abord.",
          "Rôles: Vous = acquisition, propositions, qualité. Eux = exécution. Payez-les 40–50%.",
          "Marque agence: Nom, logo, Instagram, site Carrd.co (gratuit, 30 min).",
          "Forfaits: Starter 25K/mois. Croissance 55K/mois. Premium 100K+/mois. (DZD)",
          "Ciblez les agences publicitaires: 1 client agence = 10 clients individuels."
        ],
        ar: [
          "الوقت المناسب: عمل مستمر > طاقتك وحدك وترفض مشاريع. مش قبل.",
          "المتعاون: أحسن طالب أو مصمم أونلاين. دفع بالمشروع أولاً.",
          "الأدوار: أنت = استقطاب، عروض، جودة. هم = تنفيذ. ادفع لهم 40–50%.",
          "علامة الأجنسي: اسم، شعار، Instagram، موقع Carrd.co (مجاني، 30 دقيقة).",
          "الباقات: Starter 25K/شهر. نمو 55K/شهر. Premium 100K+/شهر. (دج)",
          "استهدف وكالات الإعلان: زبون أجنسي واحد = 10 زبائن أفراد."
        ],
        en: [
          "Right time: constant work > your capacity alone AND you're refusing projects. Not before.",
          "Collaborator: your best student or online designer. Pay per project first.",
          "Roles: You = acquisition, proposals, quality. Them = execution. Pay them 40–50%.",
          "Agency brand: Name, logo, Instagram, Carrd.co site (free, 30 min).",
          "Packages: Starter 25K/month. Growth 55K/month. Premium 100K+/month. (DZD)",
          "Target advertising agencies: 1 agency client = 10 individual clients."
        ]
      },
      method: {
        fr: "Fake pitch: trouvez une entreprise avec mauvais design. Refaites leur logo + 3 posts gratuitement. Envoyez avec: 'Je voulais vous montrer ce qui est possible.' Taux de conversion extrêmement élevé.",
        ar: "عرض وهمي: لقّي مشروعاً بتصميم ضعيف. أعد تصميم شعارهم + 3 منشورات مجاناً. أرسل مع: 'أردت أن أريك ما هو ممكن.' معدل تحويل مرتفع جداً.",
        en: "Fake pitch: find a business with bad design. Redo their logo + 3 posts for free. Send with: 'I wanted to show you what's possible.' Extremely high conversion rate."
      },
      exercise: {
        fr: "Identifiez 3 entreprises algériennes avec design faible. Refonte non sollicitée pour 1: logo + 2 posts. Message de prospection professionnel. Publiez en tant que projet 'concept'.",
        ar: "حدّد 3 مشاريع جزائرية بتصميم ضعيف. إعادة تصميم غير مطلوبة لواحد: شعار + 2 منشورات. رسالة تواصل احترافية. انشر كمشروع 'مفهوم'.",
        en: "Identify 3 Algerian businesses with weak design. Unsolicited redesign for 1: logo + 2 posts. Professional outreach message. Publish as 'concept' project."
      },
      tip: {
        fr: "💡 Stratégie la plus rapide: spécialisez-vous dans UN secteur. 'L'agence pour les restaurants à Alger'. Les spécialistes facturent toujours plus.",
        ar: "💡 أسرع استراتيجية: تخصّص في قطاع واحد. 'الأجنسي للمطاعم في الجزائر'. المتخصصون دايماً يشحنون أكثر.",
        en: "💡 Fastest strategy: specialize in ONE sector. 'The agency for restaurants in Algiers'. Specialists always charge more."
      }
    }
  ]
}
// ─────────────────────────────────────────────
// SKILL 2: SOCIAL MEDIA MANAGEMENT
// ─────────────────────────────────────────────
export const socialMedia = {
  id: "smm",
  icon: "📱",
  color: "#059669",
  accent: "#34D399",
  bg: "#021A12",
  earning: "15,000 – 60,000 DZD / month",
  firstClient: { fr: "2–3 semaines", ar: "2–3 أسابيع", en: "2–3 weeks" },
  startTool: "Meta Business Suite + Canva",
  title: { fr: "Social Media Management", ar: "إدارة السوشيال ميديا", en: "Social Media Management" },
  subtitle: { fr: "Marketing Digital", ar: "التسويق الرقمي", en: "Digital Marketing" },
  tagline: {
    fr: "Aidez les entreprises à grandir et vendre en ligne",
    ar: "ساعد المشاريع تكبر وتبيع أونلاين",
    en: "Help businesses grow their audience and sell online"
  },
  levels: [
    {
      name: { fr: "Débutant", ar: "مبتدئ", en: "Beginner" },
      badge: "🌱",
      duration: { fr: "Semaines 1–3", ar: "الأسابيع 1–3", en: "Weeks 1–3" },
      goal: {
        fr: "Comprendre les algorithmes et créer votre première stratégie de contenu",
        ar: "تفهم الخوارزميات وتصنع أول استراتيجية محتوى",
        en: "Understand algorithms and create your first content strategy"
      },
      lessons: [
        {
          id: "smm-b-1",
          title: {
            fr: "Configurer un Compte Business Instagram & Facebook",
            ar: "إعداد حساب Business على Instagram وFacebook",
            en: "Set Up a Professional Instagram & Facebook Business Account"
          },
          image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
          layout: "top",
          steps: {
            fr: [
              "Instagram: Profil → 3 lignes → Paramètres → Compte → Passer en compte professionnel → Business → choisissez catégorie → connectez à une Page Facebook.",
              "Facebook: facebook.com/pages/create → Entreprise → nom + catégorie → photo profil (180×180px) → couverture (820×312px) → remplissez TOUS les champs.",
              "Meta Business Suite: business.facebook.com → Créer compte → connectez Page + Instagram → gère les deux depuis un tableau de bord.",
              "WhatsApp Business: téléchargez l'app → numéro professionnel → liez dans les paramètres Facebook. Indispensable pour l'Algérie.",
              "Complétez le profil 100%: photo, bio (80 chars max), lien bio (linktr.ee gratuit), localisation, bouton contact.",
              "Créez un dossier 'Contenu Client': Photos, Vidéos, Légendes, Posts approuvés. Jamais chercher dans la galerie."
            ],
            ar: [
              "Instagram: بروفيل → 3 خطوط → إعدادات → حساب → تحويل لحساب محترف → Business → اختار الفئة → اربط بصفحة Facebook.",
              "Facebook: facebook.com/pages/create → مشروع → اسم + فئة → صورة بروفيل (180×180px) → غلاف (820×312px) → اكمل كل الحقول.",
              "Meta Business Suite: business.facebook.com → أنشئ حساباً → اربط الصفحة + Instagram → تدير الاثنين من لوحة تحكم واحدة.",
              "WhatsApp Business: حمّل التطبيق → رقم احترافي → اربط في إعدادات Facebook. ضروري للجزائر.",
              "أكمل البروفيل 100%: صورة، bio (80 حرف أقصاه)، رابط bio (linktr.ee مجاني)، موقع، زر تواصل.",
              "أنشئ مجلد 'محتوى الزبون': صور، فيديوهات، تعليقات، منشورات معتمدة. لا تبحث في المعرض أبداً."
            ],
            en: [
              "Instagram: Profile → 3 lines → Settings → Account → Switch to Professional → Business → choose category → connect to Facebook Page.",
              "Facebook: facebook.com/pages/create → Business → name + category → profile photo (180×180px) → cover (820×312px) → fill in EVERY field.",
              "Meta Business Suite: business.facebook.com → Create account → connect Page + Instagram → manages both from one dashboard.",
              "WhatsApp Business: download app → business number → link in Facebook settings. Essential for Algeria.",
              "Complete profile 100%: photo, bio (80 chars max), bio link (linktr.ee free), location, contact button.",
              "Create 'Client Content' folder: Photos, Videos, Captions, Approved posts. Never search the camera roll."
            ]
          },
          method: {
            fr: "Créez un compte test Instagram avec un nouvel email. Appelez-le 'DZFoodTestAccount'. C'est votre bac à sable pour tester chaque stratégie avant de l'appliquer à un vrai client.",
            ar: "أنشئ حساب Instagram تجريبي بإيميل جديد. سمّيه 'DZFoodTestAccount'. هذا صندوق رملك لتجربة كل استراتيجية قبل تطبيقها على زبون حقيقي.",
            en: "Create a test Instagram account with a new email. Call it 'DZFoodTestAccount'. This is your sandbox to test every strategy before applying to a real client."
          },
          exercise: {
            fr: "Configurez un profil business complet pour un restaurant fictif sur Instagram ET Facebook. Connectez les deux à Meta Business Suite. Remplissez chaque champ. Capturez le profil 100% comme preuve.",
            ar: "اعدد بروفيل business كامل لمطعم وهمي على Instagram وFacebook. اربط الاثنين بـMeta Business Suite. اكمل كل حقل. صوّر البروفيل 100% كدليل.",
            en: "Set up a complete business profile for a fictional restaurant on Instagram AND Facebook. Connect both to Meta Business Suite. Fill every field. Screenshot the 100% complete profile as proof."
          },
          tip: {
            fr: "💡 Le lien en bio le plus important: utilisez linktr.ee pour créer une page gratuite avec plusieurs boutons: WhatsApp, Facebook, Menu PDF, Google Maps.",
            ar: "💡 أهم رابط في البروفيل: استخدم linktr.ee لإنشاء صفحة مجانية بعدة أزرار: WhatsApp، Facebook، قائمة PDF، خرائط Google.",
            en: "💡 Most important bio link: use linktr.ee to create a free page with multiple buttons: WhatsApp, Facebook, Menu PDF, Google Maps."
          }
        },
        {
          id: "smm-b-2",
          title: {
            fr: "Comment Fonctionne l'Algorithme Instagram en 2025",
            ar: "كيفاش تشتغل خوارزمية Instagram في 2025",
            en: "How the Instagram Algorithm Works in 2025"
          },
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
          layout: "right",
          steps: {
            fr: [
              "L'algorithme a UN objectif: garder les gens sur l'app. Il montre le contenu que chaque utilisateur est le plus susceptible d'engager.",
              "5 signaux par ordre d'importance: 1. SAUVEGARDES (plus fort). 2. PARTAGES. 3. COMMENTAIRES (+10 mots). 4. LIKES (plus faible). 5. TEMPS DE VISIONNAGE (Reels).",
              "Ingéniez les sauvegardes: terminez chaque post éducatif par 'Sauvegardez ce post ✅'. Tips, listes, guides = plus sauvegardés.",
              "Ingéniez les commentaires: question spécifique en fin de légende. Pas 'Qu'en pensez-vous?' mais 'Entre tajine et couscous, vous choisissez quoi ce week-end? 👇'",
              "Insights Instagram: post → Voir les insights. Comptes touchés, impressions, interactions. Pour Reels: temps de visionnage moyen, taux de complétion.",
              "Meilleures heures en Algérie: 12h–13h30 (pause déj), 18h–20h (après travail), 21h–23h (soir). Vérifiez Insights → Audience → Heures les plus actives."
            ],
            ar: [
              "الخوارزمية لها هدف واحد: تبقّي الناس على التطبيق. تعرض المحتوى الذي كل مستخدم أكثر ميلاً للتفاعل معه.",
              "5 إشارات بترتيب الأهمية: 1. الحفظ (الأقوى). 2. المشاركة. 3. التعليقات (+10 كلمات). 4. الإعجابات (الأضعف). 5. وقت المشاهدة (Reels).",
              "اهندس الحفظ: اختم كل منشور تعليمي بـ'احفظ هذا المنشور ✅'. نصائح، قوائم، أدلة = تُحفظ أكثر.",
              "اهندس التعليقات: سؤال محدد في نهاية التعليق. مش 'ما رأيك؟' بل 'بين الطاجين والكسكس، شنو تختار هذا الويكند؟ 👇'",
              "Instagram Insights: منشور → عرض الإحصائيات. الحسابات المُوصَلة، مرات الظهور، التفاعلات. للـReels: متوسط وقت المشاهدة، معدل الإكمال.",
              "أفضل أوقات في الجزائر: 12ظ–13:30 (استراحة غداء)، 18–20 (بعد العمل)، 21–23 (المساء). تحقق Insights → الجمهور → الأوقات الأكثر نشاطاً."
            ],
            en: [
              "The algorithm has ONE goal: keep people on the app. It shows content each user is most likely to engage with.",
              "5 signals by order of importance: 1. SAVES (strongest). 2. SHARES. 3. COMMENTS (10+ words). 4. LIKES (weakest). 5. WATCH TIME (Reels).",
              "Engineer saves: end every educational post with 'Save this post ✅'. Tips, lists, guides = saved more.",
              "Engineer comments: specific question at end of caption. Not 'What do you think?' but 'Between tajine and couscous, which do you choose this weekend? 👇'",
              "Instagram Insights: post → View Insights. Accounts reached, impressions, interactions. For Reels: average watch time, completion rate.",
              "Best times in Algeria: 12pm–1:30pm (lunch), 6pm–8pm (after work), 9pm–11pm (evening). Check Insights → Audience → Most Active Times."
            ]
          },
          method: {
            fr: "Audit algorithme: regardez les 20 derniers posts des comptes que vous suivez avec fort engagement. Pour chacun: question dans la légende? CTA sauvegarde? Informatif, drôle ou controversé? Notez le pattern.",
            ar: "تدقيق الخوارزمية: شوف آخر 20 منشور للحسابات التي تتابعها بتفاعل عالٍ. لكل واحد: سؤال في التعليق؟ CTA للحفظ؟ معلوماتي، مضحك أو مثير للجدل؟ لاحظ النمط.",
            en: "Algorithm audit: look at the last 20 posts from accounts you follow with high engagement. For each: question in caption? Save CTA? Informative, funny or controversial? Note the pattern."
          },
          exercise: {
            fr: "Sur votre compte test: publiez 3 posts en 3 jours. Post 1: photo simple sans CTA. Post 2: carrousel éducatif + 'Sauvegardez ✅'. Post 3: photo + question directe. Comparez les Insights après 48h.",
            ar: "على حسابك التجريبي: انشر 3 منشورات في 3 أيام. منشور 1: صورة بسيطة بدون CTA. منشور 2: كاروسيل تعليمي + 'احفظ ✅'. منشور 3: صورة + سؤال مباشر. قارن Insights بعد 48 ساعة.",
            en: "On your test account: publish 3 posts over 3 days. Post 1: simple photo no CTA. Post 2: educational carousel + 'Save ✅'. Post 3: photo + direct question. Compare Insights after 48h."
          },
          tip: {
            fr: "💡 Instagram supprime les posts avec liens externes dans la LÉGENDE. Toujours dire 'lien en bio' et mettre le lien dans le profil.",
            ar: "💡 Instagram يُخفّض المنشورات التي تحتوي روابط خارجية في التعليق. دايماً قل 'الرابط في البروفيل' وضع الرابط في الملف الشخصي.",
            en: "💡 Instagram suppresses posts with external links in the CAPTION. Always say 'link in bio' and put the link in your profile."
          }
        },
        {
          id: "smm-b-3",
          title: {
            fr: "Créer une Stratégie de Contenu de Zéro",
            ar: "إنشاء استراتيجية محتوى من الصفر",
            en: "How to Create a Content Strategy from Zero"
          },
          image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
          layout: "left",
          steps: {
            fr: [
              "Persona audience: 'Fatima, 28 ans, Alger, comptable, suit mode et cuisine, Instagram le soir, cherche produits locaux qualité.' Chaque post cible Fatima spécifiquement.",
              "4 Piliers de contenu: thèmes récurrents. Exemple boutique: Nouveautés, Conseils style, Coulisses, Témoignages clients.",
              "Formats par pilier: Produits → Photos + Reels courts. Conseils → Carrousels. Coulisses → Stories + Reels casual. Témoignages → Screenshots + posts graphiques.",
              "Calendrier: 4 posts/semaine Instagram + 3 Facebook. Exemple: Lundi=Produit, Mercredi=Conseil, Vendredi=Reel coulisses, Dimanche=Témoignage.",
              "Hashtags: 8–15 par post. Mix: 3 grands (1M+), 5 moyens (10K–500K), 5 niches (sous 10K). Les petits = moins de compétition.",
              "Formule légende: Ligne 1 = ACCROCHE. Lignes 2–5 = VALEUR. Dernière ligne = APPEL À L'ACTION. Paragraphes courts. Jamais de bloc de texte."
            ],
            ar: [
              "شخصية الجمهور: 'فاطمة، 28 سنة، الجزائر، محاسبة، تتابع الموضة والطبخ، Instagram المساء، تبحث عن منتجات محلية جودة.' كل منشور يستهدف فاطمة تحديداً.",
              "4 ركائز المحتوى: مواضيع متكررة. مثال بوتيك: وصولات جديدة، نصائح الستايل، كواليس، شهادات الزبائن.",
              "الصيغ لكل ركيزة: منتجات → صور + Reels قصيرة. نصائح → كاروسيل. كواليس → Stories + Reels عادية. شهادات → لقطات شاشة + منشورات جرافيك.",
              "التقويم: 4 منشورات/أسبوع Instagram + 3 Facebook. مثال: الاثنين=منتج، الأربعاء=نصيحة، الجمعة=Reel كواليس، الأحد=شهادة.",
              "هاشتاقات: 8–15 لكل منشور. مزيج: 3 كبيرة (+1M)، 5 متوسطة (10K–500K)، 5 متخصصة (تحت 10K). الصغيرة = منافسة أقل.",
              "صيغة التعليق: السطر 1 = خطّاف. السطور 2–5 = قيمة. آخر سطر = دعوة للعمل. فقرات قصيرة. لا كتلة نص أبداً."
            ],
            en: [
              "Audience persona: 'Fatima, 28, Algiers, accountant, follows fashion and cooking, Instagram evenings, looks for quality local products.' Every post targets Fatima specifically.",
              "4 Content Pillars: recurring themes. Boutique example: New arrivals, Style tips, Behind the scenes, Customer testimonials.",
              "Formats per pillar: Products → Photos + short Reels. Tips → Carousels. Behind scenes → Stories + casual Reels. Testimonials → Screenshots + graphic posts.",
              "Calendar: 4 posts/week Instagram + 3 Facebook. Example: Monday=Product, Wednesday=Tip, Friday=BTS Reel, Sunday=Testimonial.",
              "Hashtags: 8–15 per post. Mix: 3 large (1M+), 5 medium (10K–500K), 5 niche (under 10K). Small ones = less competition.",
              "Caption formula: Line 1 = HOOK. Lines 2–5 = VALUE. Last line = CALL TO ACTION. Short paragraphs. Never a text block."
            ]
          },
          method: {
            fr: "Raccourci stratégie: analysez les 12 meilleurs posts de 3 marques algériennes réussies dans votre niche cible. Notez le FORMAT et le SUJET de chacun. Construisez vos piliers autour de ce qui fonctionne déjà.",
            ar: "اختصار الاستراتيجية: حلّل أحسن 12 منشور لـ3 علامات جزائرية ناجحة في نيشتك المستهدف. لاحظ الصيغة والموضوع لكل واحد. ابنِ ركائزك حول ما يشتغل مسبقاً.",
            en: "Strategy shortcut: analyze the top 12 posts of 3 successful Algerian brands in your target niche. Note the FORMAT and TOPIC of each. Build your pillars around what already works."
          },
          exercise: {
            fr: "Stratégie complète pour une marque algérienne fictive en ligne: 1 persona (paragraphe complet), 4 piliers de contenu, calendrier 1 mois (16 posts avec jour, pilier, format, sujet légende), listes hashtags par pilier.",
            ar: "استراتيجية كاملة لعلامة جزائرية وهمية أونلاين: 1 شخصية (فقرة كاملة)، 4 ركائز محتوى، تقويم شهر (16 منشور مع يوم، ركيزة، صيغة، موضوع تعليق)، قوائم هاشتاقات لكل ركيزة.",
            en: "Complete strategy for a fictional Algerian online brand: 1 persona (full paragraph), 4 content pillars, 1-month calendar (16 posts with day, pillar, format, caption topic), hashtag lists per pillar."
          },
          tip: {
            fr: "💡 Le contenu en DARIJA reçoit constamment 2–3× plus de commentaires que le français sur le même sujet. Darija = relatable et émotionnel. Français = professionnel et informatif.",
            ar: "💡 المحتوى بالدارجة يحصل باستمرار على 2–3 أضعاف تعليقات أكثر من الفرنسية على نفس الموضوع. الدارجة = قابلة للتواصل وعاطفية. الفرنسية = احترافية ومعلوماتية.",
            en: "💡 Content in DARIJA consistently gets 2–3× more comments than French on the same topic. Darija = relatable and emotional. French = professional and informative."
          }
        },
        {
          id: "smm-b-4",
          title: {
            fr: "Écrire des Légendes qui Arrêtent le Scroll",
            ar: "كتابة تعليقات توقف التمرير",
            en: "Write Captions That Stop the Scroll"
          },
          image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
          layout: "right",
          steps: {
            fr: [
              "L'ACCROCHE = 125 premiers caractères visibles. 5 types: Question, Affirmation choc, Chiffre, Controverse, Histoire ('Il y a 2 ans notre boutique était au bord de la fermeture...').",
              "VALEUR: Tenez la promesse de l'accroche. Si question → répondez. Si '5 astuces' → listez-les avec numéros et sauts de ligne.",
              "APPEL À L'ACTION: UN seul par post. 'Dites-nous en commentaire' → commentaires. 'Partagez' → partages. 'Sauvegardez' → sauvegardes. 'Lien en bio' → trafic.",
              "Emojis: utilisez comme puces et séparateurs visuels. '✅ Astuce 1:' est plus lisible qu'une liste brute. 2–3 types max par post.",
              "Mélange de langues: très efficace en Algérie. 'Ce produit 💯 chkhitar barakAllah fikum 🙏 — livraison gratuite +3000 DZD.'",
              "Longueur: Court (1–3 lignes) pour visuels forts. Long (200–300 mots) pour éducatif/récit. Moyen (5–8 lignes) pour produits."
            ],
            ar: [
              "الخطّاف = أول 125 حرف ظاهر. 5 أنواع: سؤال، تأكيد صادم، رقم، جدل، قصة ('قبل سنتين كان بوتيكنا على وشك الإغلاق...').",
              "القيمة: أوفِ بوعد الخطّاف. إذا سؤال → أجب. إذا '5 نصائح' → اذكرها مع أرقام وأسطر جديدة.",
              "دعوة للعمل: واحدة فقط لكل منشور. 'قولوا لنا في التعليقات' → تعليقات. 'شاركوا' → مشاركات. 'احفظوا' → حفظ. 'الرابط في البروفيل' → زيارات.",
              "الإيموجي: استخدمها كنقاط ومفصلات بصرية. '✅ نصيحة 1:' أوضح من قائمة عادية. أقصاه 2–3 أنواع لكل منشور.",
              "مزج اللغات: فعّال جداً في الجزائر. 'Ce produit 💯 chkhitar barakAllah fikum 🙏 — توصيل مجاني +3000 دج.'",
              "الطول: قصير (1–3 أسطر) للمرئيات القوية. طويل (200–300 كلمة) للتعليمي/الحكاية. متوسط (5–8 أسطر) للمنتجات."
            ],
            en: [
              "HOOK = first 125 visible characters. 5 types: Question, Shocking statement, Number, Controversy, Story ('2 years ago our boutique was about to close...').",
              "VALUE: Deliver on the hook's promise. If question → answer it. If '5 tips' → list them with numbers and line breaks.",
              "CALL TO ACTION: ONE per post. 'Tell us in comments' → comments. 'Share' → shares. 'Save' → saves. 'Link in bio' → traffic.",
              "Emojis: use as bullets and visual separators. '✅ Tip 1:' is more readable than a plain list. 2–3 types max per post.",
              "Language mixing: very effective in Algeria. 'Ce produit 💯 chkhitar barakAllah fikum 🙏 — free delivery +3000 DZD.'",
              "Length: Short (1–3 lines) for strong visuals. Long (200–300 words) for educational/storytelling. Medium (5–8 lines) for products."
            ]
          },
          method: {
            fr: "Fichier de balayage: créez un doc 'Grandes Légendes'. Pendant 7 jours, chaque fois qu'une légende vous fait arrêter de scroller → copiez-la. Après 7 jours: 20+ exemples. Analysez les patterns communs.",
            ar: "ملف المسح: أنشئ مستنداً 'تعليقات رائعة'. لمدة 7 أيام، كل مرة يوقفك تعليق عن التمرير → انسخه. بعد 7 أيام: +20 مثال. حلّل الأنماط المشتركة.",
            en: "Swipe file: create a doc 'Great Captions'. For 7 days, every time a caption makes you stop scrolling → copy it. After 7 days: 20+ examples. Analyze the common patterns."
          },
          exercise: {
            fr: "10 légendes différentes pour le même produit (bougie artisanale algérienne): chaque légende utilise un type d'accroche différent. 5 en français, 5 en mélange darija/français. Hashtags + CTA pour chacune.",
            ar: "10 تعليقات مختلفة لنفس المنتج (شمعة يدوية جزائرية): كل تعليق يستخدم نوع خطّاف مختلف. 5 بالفرنسية، 5 بمزيج دارجة/فرنسية. هاشتاقات + CTA لكل واحد.",
            en: "10 different captions for the same product (Algerian handmade candle): each uses a different hook type. 5 in French, 5 mixing darija/French. Hashtags + CTA for each."
          },
          tip: {
            fr: "💡 Les posts carrousel se terminent par un résumé/checklist → sauvegardés jusqu'à 5× plus que les images simples. Offrez toujours quelque chose qui vaut la peine d'être sauvegardé.",
            ar: "💡 منشورات الكاروسيل التي تنتهي بملخص/قائمة تُحفظ حتى 5 أضعاف أكثر من الصور البسيطة. دايماً قدّم شيئاً يستحق الحفظ.",
            en: "💡 Carousel posts ending with a summary/checklist get saved up to 5× more than single images. Always offer something worth saving."
          }
        }
      ]
    },
    {
      name: { fr: "Intermédiaire", ar: "متوسط", en: "Intermediate" },
      badge: "⚡",
      duration: { fr: "Semaines 4–9", ar: "الأسابيع 4–9", en: "Weeks 4–9" },
      goal: {
        fr: "Créer des Reels, lancer des pubs, gérer votre premier vrai client",
        ar: "إنشاء Reels، إطلاق إعلانات، إدارة أول زبون حقيقي",
        en: "Create Reels, run ads, manage your first real client"
      },
      lessons: [
        {
          id: "smm-i-1",
          title: {
            fr: "Créer un Reel qui Génère de Vraies Vues",
            ar: "إنشاء Reel يحصل على مشاهدات حقيقية",
            en: "How to Create a Reel That Gets Real Views"
          },
          image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
          layout: "top",
          steps: {
            fr: [
              "Règle des 0,5 seconde: le premier frame doit stopper le scroll. Commencez avec du texte déjà à l'écran, ou au moment le plus intéressant. JAMAIS de logo ou écran d'intro.",
              "Structure: Accroche (0–2s): surprise visuelle ou texte gras. Setup (2–8s): contexte/problème. Payoff (8–20s): contenu de valeur. CTA (dernières 2s): 'Suivez pour plus'.",
              "Tournage: téléphone VERTICAL (9:16). Lumière naturelle ou ring light. Caméra arrière (plus nette). Regardez l'OBJECTIF pas l'écran. 3 prises de chaque plan.",
              "CapCut: Nouveau projet → ajoutez clips. Tap clip → Split (couper), Delete, Speed (0.5× slow-mo, 2× rapide). Texte → Auto Captions → corrigez les erreurs.",
              "Audio tendance: onglet Reels Instagram → cherchez flèche tendance (↗) à côté du nom audio. Cet audio est poussé par l'algorithme. Utilisez-le.",
              "Sous-titres obligatoires: 60% regardent sans son. CapCut → Texte → Sous-titres automatiques → langue → corrigez → style: texte blanc gras, contour noir, centre-bas."
            ],
            ar: [
              "قاعدة 0.5 ثانية: أول إطار يجب أن يوقف التمرير. ابدأ بنص على الشاشة، أو في اللحظة الأكثر إثارة. لا شعار أو شاشة مقدمة أبداً.",
              "الهيكل: خطّاف (0–2 ث): مفاجأة بصرية أو نص عريض. إعداد (2–8 ث): سياق/مشكلة. النتيجة (8–20 ث): محتوى قيّم. CTA (آخر 2 ث): 'تابع لمزيد'.",
              "التصوير: هاتف عمودي (9:16). ضوء طبيعي أو حلقة ضوء. الكاميرا الخلفية (أوضح). انظر للعدسة مش الشاشة. 3 تسجيلات لكل لقطة.",
              "CapCut: مشروع جديد → أضف كليبات. اضغط كليب → Split (قطع)، Delete، Speed (0.5× بطيء، 2× سريع). نص → تعليقات تلقائية → صحّح الأخطاء.",
              "الصوت الرائج: تبويب Reels Instagram → ابحث عن سهم الترند (↗) بجانب اسم الصوت. هذا الصوت تدفعه الخوارزمية. استخدمه.",
              "ترجمة إلزامية: 60% يشاهدون بدون صوت. CapCut → نص → تعليقات تلقائية → اللغة → صحّح → الستايل: نص أبيض عريض، حد أسود، وسط-أسفل."
            ],
            en: [
              "0.5-second rule: the first frame must stop the scroll. Start with text already on screen, or at the most interesting moment. NEVER a logo or intro screen.",
              "Structure: Hook (0–2s): visual surprise or bold text. Setup (2–8s): context/problem. Payoff (8–20s): valuable content. CTA (last 2s): 'Follow for more'.",
              "Filming: phone VERTICAL (9:16). Natural light or ring light. Back camera (sharper). Look at the LENS not the screen. 3 takes of each shot.",
              "CapCut: New project → add clips. Tap clip → Split (cut), Delete, Speed (0.5× slow-mo, 2× fast). Text → Auto Captions → correct errors.",
              "Trending audio: Instagram Reels tab → look for trending arrow (↗) next to audio name. This audio is being pushed by the algorithm. Use it.",
              "Subtitles mandatory: 60% watch without sound. CapCut → Text → Auto Captions → language → correct → style: bold white text, black outline, center-bottom."
            ]
          },
          method: {
            fr: "Regardez consciemment les Reels pendant 20 minutes — pas pour le divertissement, pour étudier. Chaque Reel qui vous garde plus de 5 secondes: pause. Qu'était l'accroche? Qu'est-ce qui vous a gardé? Quel était le rythme? Notez vos résultats.",
            ar: "شاهد Reels بوعي لمدة 20 دقيقة — مش للترفيه، للدراسة. كل Reel يبقيك أكثر من 5 ثوانٍ: توقف. ما كان الخطّاف؟ ما الذي أبقاك؟ ما كان الإيقاع؟ دوّن نتائجك.",
            en: "Watch Reels consciously for 20 minutes — not for entertainment, for study. Every Reel that keeps you past 5 seconds: pause. What was the hook? What kept you? What was the pacing? Note your findings."
          },
          exercise: {
            fr: "Filmez et éditez 3 Reels: 1) Reel Avant/Après. 2) Reel '3 Conseils' éducatif. 3) Reel coulisses. Publiez sur votre compte test. Comparez les vues après 48h.",
            ar: "صوّر وعدّل 3 Reels: 1) Reel قبل/بعد. 2) Reel '3 نصائح' تعليمي. 3) Reel كواليس. انشر على حسابك التجريبي. قارن المشاهدات بعد 48 ساعة.",
            en: "Film and edit 3 Reels: 1) Before/After Reel. 2) Educational '3 Tips' Reel. 3) Behind the scenes Reel. Post on your test account. Compare views after 48h."
          },
          tip: {
            fr: "💡 Publiez votre meilleur Reel à 19h heure algérienne. Utilisez Meta Business Suite pour programmer à l'avance.",
            ar: "💡 انشر أفضل Reel لديك الساعة 7 مساءً بالتوقيت الجزائري. استخدم Meta Business Suite للجدولة مسبقاً.",
            en: "💡 Post your best Reel at 7pm Algeria time. Use Meta Business Suite to schedule in advance."
          }
        },
        {
          id: "smm-i-2",
          title: {
            fr: "Lancer des Pubs Facebook et Instagram avec Petit Budget",
            ar: "إطلاق إعلانات Facebook وInstagram بميزانية صغيرة",
            en: "Run Facebook and Instagram Ads on a Small Budget"
          },
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
          layout: "left",
          steps: {
            fr: [
              "business.facebook.com → Gestionnaire de publicités → Créer campagne. Structure: Campagne (objectif) → Ensemble de pubs (audience) → Pub (créatif).",
              "Objectifs pour l'Algérie: Messages (cliquent → vous envoient WhatsApp — meilleur pour la plupart), Trafic, Engagement, Vues vidéo.",
              "Ciblage audience: Ensemble de pubs → Audience → Algérie → narrowez par wilaya. Âge selon produit. Intérêts liés au produit. Taille: 200K–1,5M.",
              "Budget: Commencez à 200–500 DZD/jour. Minimum 5 jours avant de juger. Budget test total: 1 000–2 500 DZD.",
              "Créatif: vidéo verticale (9:16) ou image carrée (1:1). Texte accroche en overlay. Texte principal sous 125 chars. Bouton CTA = lien WhatsApp.",
              "Résultats clés: Coût par résultat (combien coûte chaque lead?), Portée (personnes uniques), Fréquence (fois mêmes personnes → gardez sous 3)."
            ],
            ar: [
              "business.facebook.com → مدير الإعلانات → إنشاء حملة. الهيكل: حملة (الهدف) → مجموعة إعلانات (الجمهور) → إعلان (الإبداعي).",
              "أهداف للجزائر: الرسائل (ينقرون → يرسلون WhatsApp — الأفضل للأغلبية)، الزيارات، التفاعل، مشاهدات الفيديو.",
              "استهداف الجمهور: مجموعة إعلانات → جمهور → الجزائر → ضيّق بالولاية. العمر حسب المنتج. اهتمامات مرتبطة بالمنتج. الحجم: 200K–1.5M.",
              "الميزانية: ابدأ بـ200–500 دج/يوم. 5 أيام على الأقل قبل الحكم. ميزانية الاختبار الكلية: 1,000–2,500 دج.",
              "الإبداعي: فيديو عمودي (9:16) أو صورة مربعة (1:1). نص خطّاف كـoverlay. النص الرئيسي أقل من 125 حرف. زر CTA = رابط WhatsApp.",
              "النتائج الرئيسية: تكلفة النتيجة (كم يكلف كل lead؟)، الوصول (أشخاص فريدون)، التكرار (مرات نفس الأشخاص → ابقِه تحت 3)."
            ],
            en: [
              "business.facebook.com → Ads Manager → Create campaign. Structure: Campaign (goal) → Ad Set (audience) → Ad (creative).",
              "Objectives for Algeria: Messages (click → send you WhatsApp — best for most businesses), Traffic, Engagement, Video Views.",
              "Audience targeting: Ad Set → Audience → Algeria → narrow by wilaya. Age based on product. Interests related to product. Size: 200K–1.5M.",
              "Budget: Start at 200–500 DZD/day. Minimum 5 days before judging. Total test budget: 1,000–2,500 DZD.",
              "Creative: vertical video (9:16) or square image (1:1). Hook text overlay. Primary text under 125 chars. CTA button = WhatsApp link.",
              "Key results: Cost per result (how much each lead costs?), Reach (unique people), Frequency (times same people see it → keep under 3)."
            ]
          },
          method: {
            fr: "Lancez votre première pub avec juste 500 DZD sur n'importe quelle campagne simple. Le but n'est pas les résultats — c'est naviguer tout le Gestionnaire de pubs du début à la fin. Vous apprendrez plus en faisant une fois qu'avec 10 tutoriels YouTube.",
            ar: "شغّل أول إعلان بـ500 دج فقط على أي حملة بسيطة. الهدف ليس النتائج — بل التنقل في كامل مدير الإعلانات من البداية للنهاية. ستتعلم أكثر من فعل مرة واحدة مقارنة بـ10 دروس YouTube.",
            en: "Run your first ad with just 500 DZD on any simple campaign. The goal is not results — it's navigating the entire Ads Manager from start to finish. You'll learn more from doing it once than from 10 YouTube tutorials."
          },
          exercise: {
            fr: "Créez une campagne complète en mode Brouillon (sans la lancer): Objectif=Messages. Audience=Femmes 20–35 Alger intéressées par la mode. Budget=300 DZD/jour × 7 jours. Rédigez 2 copies publicitaires différentes. Décrivez 2 créatifs visuels.",
            ar: "أنشئ حملة كاملة في وضع المسودة (بدون تشغيلها): الهدف=الرسائل. الجمهور=نساء 20–35 الجزائر مهتمات بالموضة. الميزانية=300 دج/يوم × 7 أيام. اكتب 2 نصوص إعلانية مختلفة. صف 2 إبداعيات بصرية.",
            en: "Create a complete campaign in Draft mode (without running it): Objective=Messages. Audience=Women 20–35 Algiers interested in fashion. Budget=300 DZD/day × 7 days. Write 2 different ad copies. Describe 2 visual creatives."
          },
          tip: {
            fr: "💡 Les meilleures pubs Facebook en Algérie incluent TOUJOURS WhatsApp comme CTA. Un bouton 'Envoyer un message WhatsApp' convertit 3–5× mieux que 'Visiter le site web' sur le marché algérien.",
            ar: "💡 أفضل إعلانات Facebook في الجزائر تتضمن دائماً WhatsApp كـCTA. زر 'إرسال رسالة WhatsApp' يحوّل 3–5 أضعاف أفضل من 'زيارة الموقع' في السوق الجزائرية.",
            en: "💡 The best Facebook ads in Algeria ALWAYS include WhatsApp as CTA. A 'Send WhatsApp Message' button converts 3–5× better than 'Visit Website' in the Algerian market."
          }
        },
        {
          id: "smm-i-3",
          title: {
            fr: "Construire et Gérer un Calendrier de Contenu Mensuel",
            ar: "بناء وإدارة تقويم محتوى شهري",
            en: "Build and Manage a Monthly Content Calendar"
          },
          image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&q=80",
          layout: "right",
          steps: {
            fr: [
              "Google Sheets. Colonnes: Date | Jour | Plateforme | Pilier | Type contenu | Légende (brouillon) | Description visuel | Statut | Résultats.",
              "Planifiez 2 semaines à l'avance. Session de 90 minutes toutes les 2 semaines. Cette session est sacrée — ne la sautez pas.",
              "Création en lot: Lundi=écriture (toutes légendes). Mardi=design (tous visuels Canva). Mercredi=tournage (toutes vidéos). Jeudi=programmation Meta Business Suite. Vendredi=Stories et live en temps réel.",
              "Programmation Meta Business Suite: Posts → Créer post → légende + média → flèche dropdown à côté 'Publier' → Programmer → date et heure. Fonctionne pour Facebook ET Instagram.",
              "Contenu saisonnier: au début de chaque mois, notez: fêtes nationales algériennes, Ramadan, Aïd, rentrée, événements locaux. Construisez du contenu autour.",
              "Approbation client: partagez le calendrier via Google Sheets (lien partage). Message WhatsApp: 'Voici le planning. Merci de confirmer avant [date]. Sans retour sous 48h, nous publions.' Mettez cette règle dans votre contrat."
            ],
            ar: [
              "Google Sheets. الأعمدة: تاريخ | يوم | منصة | ركيزة | نوع المحتوى | تعليق (مسودة) | وصف المرئي | الحالة | النتائج.",
              "خطّط أسبوعين مسبقاً. جلسة 90 دقيقة كل أسبوعين. هذه الجلسة مقدسة — لا تتخطّاها.",
              "الإنشاء الدفعي: الاثنين=كتابة (كل التعليقات). الثلاثاء=تصميم (كل المرئيات Canva). الأربعاء=تصوير (كل الفيديوهات). الخميس=جدولة Meta Business Suite. الجمعة=ستوريات ومباشر في الوقت الفعلي.",
              "جدولة Meta Business Suite: منشورات → إنشاء منشور → تعليق + وسائط → السهم المنسدل بجانب 'نشر' → جدولة → التاريخ والوقت. يشتغل لـ Facebook وInstagram معاً.",
              "المحتوى الموسمي: في بداية كل شهر، لاحظ: الأعياد الوطنية الجزائرية، رمضان، عيد، الدخول المدرسي، الأحداث المحلية. ابنِ محتوى حولها.",
              "موافقة الزبون: شارك التقويم عبر Google Sheets (رابط مشاركة). رسالة WhatsApp: 'هذا التخطيط. يرجى التأكيد قبل [التاريخ]. بدون رد خلال 48 ساعة، ننشر.' ضع هذه القاعدة في عقدك."
            ],
            en: [
              "Google Sheets. Columns: Date | Day | Platform | Pillar | Content Type | Caption (draft) | Visual Description | Status | Results.",
              "Plan 2 weeks in advance. 90-minute session every 2 weeks. This session is sacred — don't skip it.",
              "Batch creation: Monday=writing (all captions). Tuesday=design (all Canva visuals). Wednesday=filming (all videos). Thursday=scheduling Meta Business Suite. Friday=Stories and live in real-time.",
              "Meta Business Suite scheduling: Posts → Create post → caption + media → dropdown arrow next to 'Publish' → Schedule → date and time. Works for Facebook AND Instagram.",
              "Seasonal content: at start of every month, note: Algerian national holidays, Ramadan, Eid, back-to-school, local events. Build content around them.",
              "Client approval: share calendar via Google Sheets (share link). WhatsApp message: 'Here is the planning. Please confirm before [date]. No response in 48h, we publish.' Put this rule in your contract."
            ]
          },
          method: {
            fr: "Chaque dimanche soir: 30 minutes à analyser les performances de la semaine précédente + 30 minutes à planifier les sujets de la semaine suivante. Après 4 semaines, ça ne prend que 15 minutes.",
            ar: "كل أحد مساءً: 30 دقيقة لتحليل أداء الأسبوع الماضي + 30 دقيقة لتخطيط مواضيع الأسبوع القادم. بعد 4 أسابيع، يستغرق 15 دقيقة فقط.",
            en: "Every Sunday evening: 30 minutes analyzing previous week performance + 30 minutes planning next week topics. After 4 weeks, it only takes 15 minutes."
          },
          exercise: {
            fr: "Calendrier 4 semaines complet dans Google Sheets pour une pharmacie algérienne fictive: 16 posts (4/semaine), mix 4 piliers, formats variés, légendes rédigées, posts liés aux journées de sensibilisation santé.",
            ar: "تقويم 4 أسابيع كامل في Google Sheets لصيدلية جزائرية وهمية: 16 منشور (4/أسبوع)، مزيج 4 ركائز، صيغ متنوعة، تعليقات محررة، منشورات مرتبطة بأيام التوعية الصحية.",
            en: "Complete 4-week calendar in Google Sheets for a fictional Algerian pharmacy: 16 posts (4/week), mix of 4 pillars, varied formats, drafted captions, posts linked to health awareness days."
          },
          tip: {
            fr: "💡 Si vous pensez 'qu'est-ce que je poste aujourd'hui?' — vous avez déjà échoué en gestion de contenu. Le calendrier est toujours prêt à l'avance.",
            ar: "💡 إذا كنت تفكر 'ماذا أنشر اليوم؟' — فقد أخفقت بالفعل في إدارة المحتوى. التقويم دائماً جاهز مسبقاً.",
            en: "💡 If you're thinking 'what should I post today?' — you've already failed at content management. The calendar is always ready in advance."
          }
        }
      ]
    },
    {
      name: { fr: "Avancé", ar: "متقدم", en: "Advanced" },
      badge: "🔥",
      duration: { fr: "Semaines 10–18", ar: "الأسابيع 10–18", en: "Weeks 10–18" },
      goal: {
        fr: "Développer des stratégies complètes, gérer plusieurs clients, prouver le ROI",
        ar: "تطوير استراتيجيات كاملة، إدارة عدة زبائن، إثبات العائد على الاستثمار",
        en: "Develop full strategies, manage multiple clients, prove ROI with data"
      },
      lessons: [
        {
          id: "smm-a-1",
          title: {
            fr: "Rédiger un Document de Stratégie Social Media Professionnel",
            ar: "كتابة وثيقة استراتيجية سوشيال ميديا احترافية",
            en: "Write a Professional Social Media Strategy Document"
          },
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          layout: "top",
          steps: {
            fr: [
              "Section 1 — Audit (2 pages): followers actuels, taux d'engagement moyen, 5 meilleurs posts analysés, démographie audience, fréquence de publication.",
              "Section 2 — Analyse concurrents (2 pages): 3–5 concurrents directs. Pour chacun: followers, engagement, types contenu, fréquence, contenu top. Identifiez les GAPS.",
              "Section 3 — Persona audience (1 page): profil fictif complet du client idéal. Nom, âge, ville, travail, revenus, objectifs, frustrations, habitudes réseaux sociaux.",
              "Section 4 — Objectifs SMART (1 page): Spécifiques, Mesurables, Atteignables, Pertinents, Temporels. Ex: 'Augmenter le taux d'engagement de 1,2% à 4,5% en 90 jours.'",
              "Section 5 — Stratégie 90 jours (3 pages): sélection plateformes, piliers contenu, mix formats (% Reels vs carrousels vs photos), fréquence, hashtags, stratégie pubs.",
              "Présentez en PDF Canva designé. Un document de stratégie professionnel vous positionne comme premium avant même que le client voie vos tarifs."
            ],
            ar: [
              "القسم 1 — التدقيق (2 ص): المتابعون الحاليون، متوسط معدل التفاعل، تحليل أفضل 5 منشورات، ديموغرافية الجمهور، تكرار النشر.",
              "القسم 2 — تحليل المنافسين (2 ص): 3–5 منافسين مباشرين. لكل واحد: المتابعون، التفاعل، أنواع المحتوى، التكرار، أفضل المحتوى. حدّد الثغرات.",
              "القسم 3 — شخصية الجمهور (1 ص): ملف خيالي كامل للزبون المثالي. الاسم، العمر، المدينة، العمل، الدخل، الأهداف، الإحباطات، عادات السوشيال ميديا.",
              "القسم 4 — أهداف SMART (1 ص): محددة، قابلة للقياس، قابلة للتحقيق، ذات صلة، محددة زمنياً. مثال: 'زيادة معدل التفاعل من 1.2% إلى 4.5% في 90 يوماً.'",
              "القسم 5 — استراتيجية 90 يوماً (3 ص): اختيار المنصات، ركائز المحتوى، مزيج الصيغ (% Reels vs كاروسيل vs صور)، التكرار، الهاشتاقات، استراتيجية الإعلانات.",
              "قدّمها كـPDF Canva مصمّم. وثيقة استراتيجية احترافية تضعك كخيار premium قبل أن يرى الزبون أسعارك."
            ],
            en: [
              "Section 1 — Audit (2 pages): current followers, average engagement rate, top 5 posts analyzed, audience demographics, posting frequency.",
              "Section 2 — Competitor analysis (2 pages): 3–5 direct competitors. For each: followers, engagement, content types, frequency, top content. Identify GAPS.",
              "Section 3 — Audience persona (1 page): complete fictional profile of ideal customer. Name, age, city, job, income, goals, frustrations, social media habits.",
              "Section 4 — SMART Goals (1 page): Specific, Measurable, Achievable, Relevant, Time-bound. Ex: 'Increase engagement rate from 1.2% to 4.5% in 90 days.'",
              "Section 5 — 90-day strategy (3 pages): platform selection, content pillars, format mix (% Reels vs carousels vs photos), frequency, hashtags, ads strategy.",
              "Present as a designed Canva PDF. A professional strategy document positions you as premium before the client even sees your rates."
            ]
          },
          method: {
            fr: "Rédigez votre premier document de stratégie pour une vraie entreprise locale même si elle ne vous a pas engagé. Faites l'audit et l'analyse concurrents. Envoyez-le en cadeau gratuit. Ce démarchage a un taux de réponse extrêmement élevé car vous avez déjà livré de la valeur.",
            ar: "اكتب أول وثيقة استراتيجية لمشروع محلي حقيقي حتى لو لم يوظّفك. افعل التدقيق وتحليل المنافسين. أرسله كهدية مجانية. هذا التواصل البارد له معدل استجابة مرتفع جداً لأنك قدّمت قيمة مسبقاً.",
            en: "Write your first strategy document for a real local business even if they haven't hired you. Do the audit and competitor analysis. Send it as a free gift. This cold outreach has an extremely high response rate because you've already delivered value."
          },
          exercise: {
            fr: "Document de stratégie social media complet (min. 8 pages PDF Canva) pour une entreprise algérienne réelle ou fictive. Toutes les 5 sections. Présentez comme si vous étiez en réunion avec le propriétaire.",
            ar: "وثيقة استراتيجية سوشيال ميديا كاملة (8 ص PDF Canva على الأقل) لمشروع جزائري حقيقي أو وهمي. كل الأقسام الخمسة. قدّم كأنك في اجتماع مع المالك.",
            en: "Complete social media strategy document (min. 8 pages Canva PDF) for a real or fictional Algerian business. All 5 sections. Present as if in a meeting with the owner."
          },
          tip: {
            fr: "💡 En présentation de stratégie, ne dites jamais 'je pense' ou 'peut-être'. Dites 'les données montrent' et 'selon les insights de votre audience'. La confiance appuyée par des données, c'est ce que les clients paient.",
            ar: "💡 في عرض الاستراتيجية، لا تقل أبداً 'أعتقد' أو 'ربما'. قل 'البيانات تُظهر' و'وفقاً لإحصائيات جمهورك'. الثقة المدعومة بالبيانات هي ما يدفع الزبائن مقابله.",
            en: "💡 In strategy presentations, never say 'I think' or 'maybe'. Say 'the data shows' and 'based on your audience insights'. Confidence backed by data is what clients pay for."
          }
        },
        {
          id: "smm-a-2",
          title: {
            fr: "Gérer 4+ Clients Simultanément sans Perdre en Qualité",
            ar: "إدارة 4+ زبائن في نفس الوقت بدون فقدان الجودة",
            en: "Manage 4+ Clients Simultaneously Without Losing Quality"
          },
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
          layout: "left",
          steps: {
            fr: [
              "Notion (notion.so — gratuit): une page par client. Contenu: infos marque, calendrier contenu, banque posts approuvés, tracker campagnes pub, modèle rapport mensuel, journal communication.",
              "Planning hebdomadaire maître: bloquez le temps par TYPE DE TÂCHE, pas par client. Lundi 9–12=rédaction tous clients. Lundi 13–17=design tous clients. Mercredi=community management. Jeudi=analytics. Vendredi=appels clients.",
              "Règles de communication dès le début: 'Je réponds du lundi au vendredi entre 9h et 18h. Rapport hebdomadaire chaque lundi.' Clients qui écrivent à minuit = drainent votre énergie.",
              "Modèle rapport mensuel: Paragraphe résumé → Tableau métriques (vs mois précédent) → Top 3 posts avec captures → Apprentissages clés → Plan mois prochain. Envoyez PDF le 1er de chaque mois.",
              "Contrôle qualité: avant de publier QUOI QUE CE SOIT, test 5 secondes. Montrez le post à quelqu'un qui ne connaît pas la marque. S'ils ne comprennent pas en 5s ce que ça promeut → redesignez.",
              "Retards d'approbation: dans le contrat: 'Le contenu est soumis 5 jours ouvrables avant publication. Sans retour sous 48h, nous publions tel quel.'"
            ],
            ar: [
              "Notion (notion.so — مجاني): صفحة لكل زبون. المحتوى: معلومات العلامة، تقويم المحتوى، بنك المنشورات المعتمدة، متتبع حملات الإعلانات، نموذج التقرير الشهري، سجل التواصل.",
              "جدول أسبوعي رئيسي: احجز الوقت حسب نوع المهمة، مش حسب الزبون. الاثنين 9–12=كتابة كل الزبائن. الاثنين 13–17=تصميم كل الزبائن. الأربعاء=إدارة المجتمع. الخميس=analytics. الجمعة=مكالمات الزبائن.",
              "قواعد التواصل من البداية: 'أرد من الاثنين للجمعة بين 9 و18. تقرير أسبوعي كل اثنين.' الزبائن الذين يكتبون منتصف الليل = يستنزفون طاقتك.",
              "نموذج التقرير الشهري: فقرة ملخص → جدول مقاييس (مقارنة بالشهر الماضي) → أفضل 3 منشورات مع لقطات → مقتنيات رئيسية → خطة الشهر القادم. أرسل PDF في الأول من كل شهر.",
              "مراقبة الجودة: قبل نشر أي شيء، اختبار 5 ثوانٍ. أرِ المنشور لشخص لا يعرف العلامة. إذا لم يفهم في 5 ثوانٍ ما يُروّج له → أعد التصميم.",
              "تأخيرات الموافقة: في العقد: 'يُقدَّم المحتوى 5 أيام عمل قبل النشر. بدون رد خلال 48 ساعة، ننشر كما هو.'"
            ],
            en: [
              "Notion (notion.so — free): one page per client. Content: brand info, content calendar, approved post bank, ad campaign tracker, monthly report template, communication log.",
              "Master weekly schedule: block time by TASK TYPE, not by client. Monday 9–12=writing all clients. Monday 1–5pm=design all clients. Wednesday=community management. Thursday=analytics. Friday=client calls.",
              "Communication rules from day 1: 'I respond Monday to Friday between 9am and 6pm. Weekly report every Monday.' Clients who write at midnight = drain your energy.",
              "Monthly report template: Summary paragraph → Metrics table (vs previous month) → Top 3 posts with screenshots → Key learnings → Next month plan. Send PDF on the 1st of each month.",
              "Quality control: before posting ANYTHING, 5-second test. Show the post to someone who doesn't know the brand. If they don't understand in 5s what it promotes → redesign.",
              "Approval delays: in contract: 'Content submitted 5 business days before publication. No response in 48h, we publish as is.'"
            ]
          },
          method: {
            fr: "Avant de prendre votre 4ème client, construisez TOUT votre système d'abord. Passez 1 journée complète à configurer Notion pour tous les clients existants, créer votre modèle de rapport, écrire votre planning hebdomadaire.",
            ar: "قبل أخذ زبونك الرابع، ابنِ كل نظامك أولاً. اقضِ يوماً كاملاً في إعداد Notion لكل الزبائن الحاليين، إنشاء نموذج التقرير، كتابة جدولك الأسبوعي.",
            en: "Before taking on your 4th client, build your ENTIRE system first. Spend 1 full day setting up Notion for all existing clients, creating your report template, writing your weekly schedule."
          },
          exercise: {
            fr: "Configurez un espace de travail Notion pour 3 clients fictifs: restaurant, boutique vêtements, coach fitness. Chacun obtient: section infos marque, calendrier du mois, tracker campagnes pub, modèle rapport mensuel.",
            ar: "أعدّ مساحة عمل Notion لـ3 زبائن وهميين: مطعم، بوتيك ملابس، مدرب لياقة. كل واحد يحصل على: قسم معلومات العلامة، تقويم الشهر، متتبع حملات الإعلانات، نموذج التقرير الشهري.",
            en: "Set up a Notion workspace for 3 fictional clients: restaurant, clothing boutique, fitness coach. Each gets: brand info section, month's calendar, ad campaign tracker, monthly report template."
          },
          tip: {
            fr: "💡 Renvoyez les mauvais clients. Un client qui change constamment de direction, n'approuve pas à temps ou marchande chaque facture n'en vaut pas la peine. Un client épuisant prend l'énergie pour en trouver 2 excellents.",
            ar: "💡 أقِل الزبائن السيئين. زبون يغيّر الاتجاه باستمرار، لا يوافق في الوقت المناسب أو يساوم كل فاتورة لا يستحق. زبون مُرهق يأخذ الطاقة التي يمكن إيجاد 2 ممتازين بها.",
            en: "💡 Fire bad clients. A client who constantly changes direction, doesn't approve on time, or haggles every invoice is not worth it. One exhausting client takes energy to find 2 great ones."
          }
        }
      ]
    },
    {
      name: { fr: "Maître", ar: "محترف", en: "Master" },
      badge: "👑",
      duration: { fr: "Mois 5+", ar: "الشهر 5+", en: "Month 5+" },
      goal: {
        fr: "Construire une agence SMM avec clients mensuels récurrents et une petite équipe",
        ar: "بناء أجنسي SMM مع زبائن شهريين متكررين وفريق صغير",
        en: "Build an SMM agency with recurring monthly clients and a small team"
      },
      lessons: [
        {
          id: "smm-m-1",
          title: {
            fr: "Construire une Agence SMM de Zéro",
            ar: "بناء أجنسي SMM من الصفر",
            en: "How to Build an SMM Agency from Scratch"
          },
          image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
          layout: "top",
          steps: {
            fr: [
              "Mindset agence vs freelance: un freelance vend son temps. Une agence vend des résultats. Arrêtez de dire 'je posterai 3 fois/semaine'. Dites 'je ferai croître vos abonnés de 500+ ciblés et générerai 30+ leads WhatsApp qualifiés/mois en 90 jours ou je travaille gratuitement.'",
              "Construisez votre offre autour d'une garantie: définissez quelle métrique vous pouvez livrer avec confiance. Proposez de continuer gratuitement si vous manquez la cible.",
              "Premier membre d'équipe: 'Community Manager — gérera posts quotidiens, commentaires, messages pour 3–4 clients. 3–4h/jour. 15 000–25 000 DZD/mois.' Publiez dans les groupes Facebook marketing digital Algérie.",
              "Tarification agence: Starter (15K/mois: 12 posts + stories + rapport). Croissance (35K/mois: 20 posts + Reels + gestion pubs + rapport). Premium (65K+/mois: stratégie complète + contenu + pubs + influenceurs + réunion hebdo).",
              "Acquisition clients: 1) Référrals (10% commission). 2) DMs Instagram froids aux entreprises avec faible social media. 3) Partenariats avec graphistes, développeurs web, photographes. 4) Prise de parole événements entrepreneuriat. 5) Contenu démontrant expertise."
            ],
            ar: [
              "عقلية الأجنسي vs الفريلانسر: الفريلانسر يبيع وقته. الأجنسي يبيع النتائج. توقف عن قول 'سأنشر 3 مرات/أسبوع'. قل 'سأنمّي متابعيك بـ+500 مستهدف وأولّد +30 lead WhatsApp مؤهل/شهر في 90 يوماً أو أعمل مجاناً.'",
              "ابنِ عرضك حول ضمان: حدّد أي مقياس يمكنك تسليمه بثقة. اقترح الاستمرار مجاناً إذا فاتتك الهدف.",
              "أول عضو في الفريق: 'مدير مجتمع — يدير المنشورات اليومية، التعليقات، الرسائل لـ3–4 زبائن. 3–4 ساعات/يوم. 15,000–25,000 دج/شهر.' انشر في مجموعات Facebook للتسويق الرقمي الجزائر.",
              "تسعير الأجنسي: Starter (15K/شهر: 12 منشور + ستوريات + تقرير). نمو (35K/شهر: 20 منشور + Reels + إدارة إعلانات + تقرير). Premium (+65K/شهر: استراتيجية كاملة + محتوى + إعلانات + مؤثرون + اجتماع أسبوعي).",
              "استقطاب الزبائن: 1) إحالات (عمولة 10%). 2) DMs Instagram باردة للمشاريع ذات سوشيال ميديا ضعيف. 3) شراكات مع مصممين، مطورين ويب، مصورين. 4) التحدث في أحداث ريادة الأعمال. 5) محتوى يثبت الخبرة."
            ],
            en: [
              "Agency vs freelancer mindset: a freelancer sells their time. An agency sells results. Stop saying 'I'll post 3 times/week'. Say 'I'll grow your followers by 500+ targeted and generate 30+ qualified WhatsApp leads/month in 90 days or I work for free.'",
              "Build your offer around a guarantee: define what metric you can confidently deliver. Offer to continue free if you miss the target.",
              "First team member: 'Community Manager — will manage daily posts, comments, messages for 3–4 clients. 3–4h/day. 15,000–25,000 DZD/month.' Post in Algeria digital marketing Facebook groups.",
              "Agency pricing: Starter (15K/month: 12 posts + stories + report). Growth (35K/month: 20 posts + Reels + ads management + report). Premium (65K+/month: full strategy + content + ads + influencers + weekly meeting).",
              "Client acquisition: 1) Referrals (10% commission). 2) Cold Instagram DMs to businesses with weak social media. 3) Partnerships with designers, web developers, photographers. 4) Speaking at entrepreneurship events. 5) Content demonstrating expertise."
            ]
          },
          method: {
            fr: "Marketing par étude de cas: documentez UNE histoire de succès client — avant (métriques), ce que vous avez fait, après (métriques 3 mois plus tard). Designez en PDF 1 page et carrousel Instagram. Ce seul contenu vous apportera plus de clients que n'importe quel discours commercial.",
            ar: "تسويق دراسة الحالة: وثّق قصة نجاح زبون واحدة — قبل (المقاييس)، ما فعلته، بعد (المقاييس 3 أشهر لاحقاً). صمّم كـPDF صفحة واحدة وكاروسيل Instagram. هذا المحتوى الواحد يجلب أكثر من أي عرض بيع.",
            en: "Case study marketing: document ONE client success story — before (metrics), what you did, after (metrics 3 months later). Design as 1-page PDF and Instagram carousel. This single content brings more clients than any sales pitch."
          },
          exercise: {
            fr: "Modèle d'affaires complet de votre agence sur 1 page: votre niche, 3 forfaits services avec prix, votre garantie, 3 canaux d'acquisition clients, objectif revenus 6 mois. C'est votre business plan d'agence.",
            ar: "نموذج عمل كامل لأجنسيك في صفحة واحدة: نيشتك، 3 باقات خدمات مع أسعار، ضمانك، 3 قنوات استقطاب زبائن، هدف الإيرادات 6 أشهر. هذا خطة عمل أجنسيك.",
            en: "Complete agency business model on 1 page: your niche, 3 service packages with prices, your guarantee, 3 client acquisition channels, 6-month revenue goal. This is your agency business plan."
          },
          tip: {
            fr: "💡 Chemin le plus rapide vers une agence: obtenez 1 client → livrez des résultats exceptionnels → demandez 1 référral → répétez. Pas besoin de site web, pub ou branding pour commencer. Juste 1 étude de cas réussie.",
            ar: "💡 أسرع طريق للأجنسي: احصل على زبون 1 → سلّم نتائج استثنائية → اطلب إحالة 1 → كرّر. لا تحتاج موقع، إعلانات أو branding للبدء. فقط دراسة حالة ناجحة واحدة.",
            en: "💡 Fastest path to agency: get 1 client → deliver exceptional results → ask for 1 referral → repeat. No need for website, ads or branding to start. Just 1 successful case study."
          }
        }
      ]
    }
  ]
};
// ─────────────────────────────────────────────
// SKILL 3: VIDEO EDITING
// ─────────────────────────────────────────────
export const videoEditing = {
  id: "video",
  icon: "🎬",
  color: "#DC2626",
  accent: "#F87171",
  bg: "#1A0303",
  earning: "8,000 – 80,000 DZD / project",
  firstClient: { fr: "4–6 semaines", ar: "4–6 أسابيع", en: "4–6 weeks" },
  startTool: "CapCut (free) → DaVinci Resolve (free)",
  title: { fr: "Montage Vidéo", ar: "مونتاج الفيديو", en: "Video Editing" },
  subtitle: { fr: "Création de Contenu", ar: "إنشاء المحتوى", en: "Content Creation" },
  tagline: {
    fr: "La compétence créative la plus demandée de la décennie",
    ar: "أكثر مهارة إبداعية مطلوبة في العقد",
    en: "The most in-demand creative skill of the decade"
  },
  levels: [
    {
      name: { fr: "Débutant", ar: "مبتدئ", en: "Beginner" },
      badge: "🌱",
      duration: { fr: "Semaines 1–4", ar: "الأسابيع 1–4", en: "Weeks 1–4" },
      goal: {
        fr: "Monter votre première vidéo complète avec CapCut sur téléphone",
        ar: "تعديل أول فيديو كامل باستخدام CapCut على هاتفك",
        en: "Edit your first complete video using CapCut on your phone"
      },
      lessons: [
        {
          id: "video-b-1",
          title: {
            fr: "Installer CapCut et Monter votre Première Vidéo",
            ar: "تنصيب CapCut وتعديل أول فيديو",
            en: "Install CapCut and Edit Your First Video"
          },
          image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
          layout: "top",
          steps: {
            fr: [
              "Téléchargez CapCut depuis Google Play ou App Store — complètement gratuit, sans filigrane sur les exports.",
              "Ouvrez CapCut → bouton '+' → sélectionnez vidéos et photos → Ajouter → votre timeline s'ouvre.",
              "Timeline en bas: vos clips apparaissent comme des blocs. Tapez un clip pour le sélectionner (bordure blanche). Panneau bas: Split, Delete, Speed et plus.",
              "Couper un clip: faites glisser la ligne blanche (tête de lecture) vers le moment voulu → Split. Le clip devient 2 pièces. Sélectionnez la partie non voulue → Delete.",
              "Ajouter musique: Audio → Sons → recherchez une chanson → '+' pour ajouter à la timeline. Volume → baissez à environ 30% si vous avez du dialogue.",
              "Ajouter texte: Texte → Ajouter du texte → tapez → choisissez police/couleur → faites glisser sur l'écran. Tapez le clip texte sur la timeline pour changer durée.",
              "Exporter: flèche en haut à droite → 1080p et 30fps → exportez → sauvegardé dans la galerie."
            ],
            ar: [
              "حمّل CapCut من Google Play أو App Store — مجاني كامل، بدون علامة مائية على التصدير.",
              "افتح CapCut → زر '+' → اختار فيديوهات وصور → أضف → يفتح الجدول الزمني.",
              "الجدول الزمني في الأسفل: الكليبات تظهر كبلوكات. اضغط كليب لتحديده (حد أبيض). اللوحة السفلية: Split، Delete، Speed والمزيد.",
              "قطع كليب: اسحب الخط الأبيض (رأس التشغيل) للحظة المطلوبة → Split. الكليب يصبح قطعتين. حدّد الجزء غير المرغوب → Delete.",
              "إضافة موسيقى: Audio → أصوات → ابحث عن أغنية → '+' لإضافتها للجدول. Volume → خفّض لحوالي 30% إذا كان لديك حوار.",
              "إضافة نص: نص → إضافة نص → اكتب → اختار خط/لون → اسحب على الشاشة. اضغط كليب النص في الجدول لتغيير المدة.",
              "التصدير: سهم أعلى اليمين → 1080p و30fps → صدّر → يحفظ في المعرض."
            ],
            en: [
              "Download CapCut from Google Play or App Store — completely free, no watermark on exports.",
              "Open CapCut → '+' button → select videos and photos → Add → your timeline opens.",
              "Timeline at bottom: clips appear as blocks. Tap a clip to select it (white border). Bottom panel: Split, Delete, Speed and more.",
              "Cut a clip: drag the white line (playhead) to the moment you want → Split. Clip becomes 2 pieces. Select unwanted part → Delete.",
              "Add music: Audio → Sounds → search for a song → '+' to add to timeline. Volume → lower to about 30% if you have dialogue.",
              "Add text: Text → Add Text → type → choose font/color → drag on screen. Tap text clip on timeline to change duration.",
              "Export: arrow top right → 1080p and 30fps → export → saved to gallery."
            ]
          },
          method: {
            fr: "Filmez exactement 10 courts clips de n'importe quoi. Importez-les tous dans CapCut. Coupez-les pour garder seulement les 3 meilleures secondes de chacun. Ajoutez de la musique. Exportez. Regardez le résultat et notez ce qui semble bon et ce qui semble bizarre. Cette auto-critique EST l'apprentissage.",
            ar: "صوّر بالضبط 10 كليبات قصيرة من أي شيء. استوردهم كلهم في CapCut. اقطعهم للاحتفاظ بأحسن 3 ثوانٍ من كل واحد. زيد موسيقى. صدّر. شاهد النتيجة ولاحظ ما يبدو جيداً وما يبدو غريباً. هذا النقد الذاتي هو التعلم.",
            en: "Film exactly 10 short clips of anything. Import all into CapCut. Cut them to keep only the best 3 seconds of each. Add music. Export. Watch the result and note what looks good and what looks weird. That self-critique IS the learning."
          },
          exercise: {
            fr: "Créez une vidéo de 60 secondes sur votre journée avec clips filmés aujourd'hui. Doit inclure: minimum 8 clips différents, musique de fond, votre nom en texte au début, titre simple à la fin. Exportez et regardez.",
            ar: "أنشئ فيديو 60 ثانية عن يومك باستخدام كليبات مصوّرة اليوم. يجب أن يتضمن: 8 كليبات مختلفة على الأقل، موسيقى خلفية، اسمك كنص في البداية، عنوان بسيط في النهاية. صدّر وشاهد.",
            en: "Create a 60-second video about your day using clips filmed today. Must include: minimum 8 different clips, background music, your name as text at the start, simple title at the end. Export and watch."
          },
          tip: {
            fr: "💡 Erreur débutant la plus commune: clips trop longs. Chaque clip dans une vidéo sociale devrait faire 1,5–4 secondes maximum. En cas de doute, coupez plus tôt. Le montage rapide semble toujours plus professionnel.",
            ar: "💡 أكثر خطأ مبتدئ شيوعاً: كليبات طويلة جداً. كل كليب في فيديو سوشيال يجب أن يكون 1.5–4 ثوانٍ كحد أقصى. في حالة الشك، اقطع أبكر. المونتاج السريع دائماً يبدو أكثر احترافية.",
            en: "💡 Most common beginner mistake: clips too long. Every clip in a social video should be 1.5–4 seconds maximum. When in doubt, cut earlier. Fast pacing always looks more professional."
          }
        },
        {
          id: "video-b-2",
          title: {
            fr: "Couper sur le Temps — Montage Synchronisé à la Musique",
            ar: "القطع على الإيقاع — مونتاج متزامن مع الموسيقى",
            en: "Cut on the Beat — Music-Driven Editing"
          },
          image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
          layout: "right",
          steps: {
            fr: [
              "Montage synchronisé = chaque coupure tombe EXACTEMENT quand la musique a un coup de batterie ou une basse. Crée un effet hypnotique qui rend les vidéos addictives.",
              "Étape 1: choisissez d'abord votre musique. Avant d'ajouter les clips, ajoutez votre piste musicale à la timeline. Écoutez-la une fois entièrement.",
              "Étape 2: marquez les temps. Dans CapCut, lisez l'audio et tapez Beats pour détecter automatiquement les temps — ajoute des marqueurs. Sinon: jouez l'audio et tapez l'écran sur chaque temps.",
              "Étape 3: coupez les clips pour qu'ils correspondent: placez vos clips et coupez chacun pour qu'il se termine exactement là où tombe un marqueur de temps.",
              "Étape 4: vérifiez. Lisez la vidéo entière en FERMANT LES YEUX et en écoutant. Chaque fois que vous sentez un temps, ouvrez brièvement les yeux. Si une coupure est là — bien. Sinon — ajustez.",
              "Chansons rapides: coupez tous les 1–2 temps. Chansons lentes: tous les 4–8 temps. Build-ups dramatiques: tenez un clip pendant le build, coupez au pic."
            ],
            ar: [
              "المونتاج المتزامن = كل قطعة تقع بالضبط عندما تكون في الموسيقى ضربة طبل أو باس. ينشئ تأثيراً مفتونا يجعل الفيديوهات إدمانية.",
              "الخطوة 1: اختار الموسيقى أولاً. قبل إضافة الكليبات، أضف مقطوعتك الموسيقية للجدول. استمع إليها مرة كاملة.",
              "الخطوة 2: ضع علامات على الإيقاعات. في CapCut، شغّل الصوت واضغط Beats للكشف التلقائي عن الإيقاعات — يضيف علامات. وإلا: شغّل الصوت واضغط الشاشة على كل إيقاع.",
              "الخطوة 3: اقطع الكليبات لتتطابق: ضع كليباتك واقطع كل واحد لينتهي بالضبط حيث يقع علامة الإيقاع.",
              "الخطوة 4: تحقق. شغّل الفيديو كاملاً بإغلاق عينيك والاستماع. كلما أحسست بإيقاع، افتح عينيك لحظة. إذا كانت قطعة هناك — جيد. وإلا — اضبط.",
              "الأغاني السريعة: اقطع كل 1–2 إيقاع. الأغاني البطيئة: كل 4–8 إيقاعات. البناء الدرامي: احتفظ بكليب خلال البناء، اقطع عند الذروة."
            ],
            en: [
              "Beat-synced editing = every cut falls EXACTLY when the music has a drum hit or bass drop. Creates a hypnotic effect that makes videos addictive.",
              "Step 1: choose your music first. Before adding clips, add your music track to the timeline. Listen through once completely.",
              "Step 2: mark the beats. In CapCut, play audio and tap Beats to auto-detect — adds markers. Otherwise: play audio and tap screen on each beat.",
              "Step 3: trim clips to match: place your clips and trim each one to end exactly where a beat marker falls.",
              "Step 4: verify. Play the whole video while CLOSING YOUR EYES and listening. Every time you feel a beat, briefly open your eyes. If there's a cut there — good. If not — adjust.",
              "Fast songs: cut every 1–2 beats. Slow songs: every 4–8 beats. Dramatic build-ups: hold a clip through the build, cut at the peak."
            ]
          },
          method: {
            fr: "Prenez n'importe quelle piste musicale et filmez 30 clips aléatoires (2–3 secondes chacun) de n'importe quoi. Faites UNIQUEMENT du montage synchronisé — n'essayez pas de raconter une histoire. Concentrez-vous juste sur faire tomber chaque coupure sur un temps. Regardez le résultat. Même du contenu aléatoire semble impressionnant avec une synchronisation parfaite.",
            ar: "خذ أي مقطوعة موسيقية وصوّر 30 كليباً عشوائياً (2–3 ثوانٍ كل واحد) من أي شيء. افعل فقط مونتاجاً متزامناً — لا تحاول سرد قصة. ركّز فقط على جعل كل قطعة تقع على إيقاع. شاهد النتيجة. حتى المحتوى العشوائي يبدو مذهلاً مع تزامن مثالي.",
            en: "Take any music track and film 30 random clips (2–3 seconds each) of anything. Do ONLY beat-synced editing — don't try to tell a story. Focus only on making every single cut land on a beat. Watch the result. Even random content looks impressive with perfect beat-sync."
          },
          exercise: {
            fr: "Créez un montage synchronisé de 45 secondes avec des images de votre ville ou quartier (filmez dehors 30 minutes — minimum 20 clips). Utilisez une chanson tendance. Chaque coupure doit tomber sur un temps. Exportez et partagez sur votre compte test.",
            ar: "أنشئ مونتاجاً متزامناً مدته 45 ثانية باستخدام لقطات مدينتك أو حيّك (صوّر خارجاً 30 دقيقة — 20 كليباً على الأقل). استخدم أغنية رائجة. كل قطعة يجب أن تقع على إيقاع. صدّر وشارك على حسابك التجريبي.",
            en: "Create a 45-second beat-synced montage using footage of your city or neighborhood (film outside 30 minutes — minimum 20 clips). Use a trending song. Every cut must land on a beat. Export and share to your test account."
          },
          tip: {
            fr: "💡 La fonctionnalité Auto Beat Sync de CapCut (sous Audio → Beats) place automatiquement les coupures sur les temps de n'importe quelle chanson. Utilisez-la pour l'entraînement pour voir où tombent les temps, puis apprenez à le ressentir vous-même.",
            ar: "💡 ميزة Auto Beat Sync في CapCut (تحت Audio → Beats) تضع القطع تلقائياً على إيقاعات أي أغنية. استخدمها للتدريب لترى أين تقع الإيقاعات، ثم تعلّم الإحساس بها بنفسك.",
            en: "💡 CapCut's Auto Beat Sync feature (under Audio → Beats) automatically places cuts on beats of any song. Use it for training to see where beats fall, then learn to feel it yourself."
          }
        },
        {
          id: "video-b-3",
          title: {
            fr: "Étalonnage des Couleurs — Donnez un Look Cinématique",
            ar: "تصحيح الألوان — أعطِ مظهراً سينمائياً",
            en: "Color Grading — Make it Look Cinematic"
          },
          image: "https://images.unsplash.com/photo-1536240478700-b869ad10a2eb?w=800&q=80",
          layout: "left",
          steps: {
            fr: [
              "2 étapes: Correction (corriger les problèmes techniques) → Grade créatif (ajouter ambiance/style). Toujours corriger AVANT de grader.",
              "Dans CapCut → Ajuster: Luminosité (négatif=plus sombre), Contraste (différence noirs/blancs), Saturation (négatif=plus gris, positif=plus vif), Netteté (augmentez légèrement, max 30).",
              "Ordre de correction: 1. Luminosité (naturellement éclairé). 2. Contraste (noirs=noirs, blancs=blancs). 3. Saturation (niveau naturel). 4. Chaleur (plus chaud=jaune/orange, plus froid=bleu).",
              "Grade cinématique teal-orange: Filtres CapCut → catégorie Cinématique. Ou manuellement: Chaleur +15, Saturation -10, Contraste +20. Pousse les tons chair vers l'orange, les ombres vers le teal.",
              "Appliquer le même grade à plusieurs clips: ajustez un clip → 3 points → Copier le style → sélectionnez tous les autres clips → Coller le style.",
              "LUTs: CapCut → Ajuster → Filtre → Importer LUT → choisissez un fichier .CUBE téléchargé. Cherchez 'free cinematic LUTs download' sur YouTube."
            ],
            ar: [
              "مرحلتان: تصحيح (حل المشكلات التقنية) → grade إبداعي (إضافة مزاج/أسلوب). دايماً صحّح قبل الـgrade.",
              "في CapCut → ضبط: السطوع (سالب=أداكن)، التباين (فرق الداكن/الفاتح)، التشبع (سالب=أكثر رمادية، موجب=أكثر حيوية)، الحدة (زيد قليلاً، أقصاه 30).",
              "ترتيب التصحيح: 1. السطوع (يبدو مضاءً طبيعياً). 2. التباين (الداكن=داكن، الفاتح=فاتح). 3. التشبع (مستوى طبيعي). 4. الدفء (أدفأ=أصفر/برتقالي، أبرد=أزرق).",
              "Grade السينمائي teal-orange: فلاتر CapCut → فئة السينمائي. أو يدوياً: دفء +15، تشبع -10، تباين +20. يدفع ألوان البشرة نحو البرتقالي والظلال نحو الـteal.",
              "تطبيق نفس الـgrade على عدة كليبات: اضبط كليباً → 3 نقاط → نسخ الأسلوب → حدد كل الكليبات الأخرى → لصق الأسلوب.",
              "LUTs: CapCut → ضبط → فلتر → استيراد LUT → اختار ملف .CUBE محمّلاً. ابحث عن 'free cinematic LUTs download' على YouTube."
            ],
            en: [
              "2 stages: Correction (fix technical problems) → Creative grade (add mood/style). Always correct BEFORE grading.",
              "In CapCut → Adjust: Brightness (negative=darker), Contrast (difference darks/lights), Saturation (negative=more grey, positive=more vivid), Sharpness (increase slightly, max 30).",
              "Correction order: 1. Brightness (naturally lit). 2. Contrast (blacks=black, whites=white). 3. Saturation (natural level). 4. Warmth (warmer=yellow/orange, cooler=blue).",
              "Cinematic teal-orange grade: CapCut Filters → Cinematic category. Or manually: Warmth +15, Saturation -10, Contrast +20. Pushes skin tones toward orange, shadows toward teal.",
              "Apply same grade to multiple clips: adjust one clip → 3 dots → Copy Style → select all other clips → Paste Style.",
              "LUTs: CapCut → Adjust → Filter → Import LUT → choose downloaded .CUBE file. Search 'free cinematic LUTs download' on YouTube."
            ]
          },
          method: {
            fr: "Filmez la même scène 3 fois dans des éclairages différents: lumière solaire directe, ombre et lumière artificielle intérieure. Importez les 3 dans CapCut. Corrigez-les jusqu'à ce qu'ils aient tous l'air d'avoir été filmés sous le même éclairage.",
            ar: "صوّر نفس المشهد 3 مرات في إضاءات مختلفة: ضوء شمس مباشر، ظل وإضاءة اصطناعية داخلية. استورد الـ3 في CapCut. صحّحهم حتى يبدوا جميعاً كأنهم صُوِّروا تحت نفس الإضاءة.",
            en: "Film the same scene 3 times in different lighting: direct sunlight, shade and indoor artificial light. Import all 3 into CapCut. Color correct them until they all look like they were filmed under the same lighting."
          },
          exercise: {
            fr: "Prenez n'importe quelle vidéo brute que vous avez filmée. Appliquez 3 grades différents: 1) Look heure dorée chaude. 2) Look bleu froid dramatique. 3) Look film désaturé. Exportez les 3 séparément. Écrivez quel humeur crée chacun.",
            ar: "خذ أي فيديو خام صوّرته. طبّق 3 grades مختلفة: 1) مظهر ساعة ذهبية دافئة. 2) مظهر أزرق بارد دراماتيكي. 3) مظهر فيلم باهت. صدّر الـ3 بشكل منفصل. اكتب أي مزاج يخلقه كل واحد.",
            en: "Take any raw video you filmed. Apply 3 different grades: 1) Warm golden hour look. 2) Cold blue dramatic look. 3) Desaturated film look. Export all 3 separately. Write what mood each one creates."
          },
          tip: {
            fr: "💡 Règle la plus importante: moins c'est plus. Un ajustement à 10% semble professionnel. Un ajustement à 50% semble débutant qui vient de découvrir les curseurs. Des changements subtils s'accumulent en un look raffiné.",
            ar: "💡 أهم قاعدة: الأقل هو الأكثر. ضبط 10% يبدو احترافياً. ضبط 50% يبدو مبتدئاً اكتشف للتو الأشرطة. التغييرات الدقيقة تتراكم في مظهر مصقول.",
            en: "💡 Most important rule: less is more. A 10% adjustment looks professional. A 50% adjustment looks like a beginner who just discovered sliders. Subtle changes accumulate into a refined look."
          }
        },
        {
          id: "video-b-4",
          title: {
            fr: "Corriger le Mauvais Audio et Ajouter du Sound Design",
            ar: "تصحيح الصوت السيئ وإضافة تصميم صوتي",
            en: "Fix Bad Audio and Add Professional Sound Design"
          },
          image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
          layout: "right",
          steps: {
            fr: [
              "Correction audio gratuite la plus rapide: podcast.adobe.com/enhance — complètement gratuit. Uploadez n'importe quel fichier audio (jusqu'à 1h). L'IA supprime le bruit de fond et améliore la clarté vocale en 30 secondes.",
              "Niveaux audio: Musique fond = -20 à -25 dB. Narration/dialogue = -12 à -6 dB. Effets sonores = -15 à -18 dB. Dans CapCut: piste audio → Volume → ajustez (baissez musique à 20–30%).",
              "Ajouter effets sonores: freesound.org — compte gratuit, milliers d'effets. Cherchez: 'whoosh' (texte volant), 'click' (UI), 'crowd' (énergie). Téléchargez en MP3. Importez dans CapCut via Audio → Importer.",
              "Technique J-Cut: démarrez l'audio de la scène suivante 0,5–1 seconde AVANT que la coupe visuelle arrive. Crée une transition fluide et naturelle.",
              "Musique libre de droits (sûre pour usage client): YouTube Audio Library (gratuit), Pixabay Music (gratuit), Mixkit (gratuit). JAMAIS de chanson protégée sur le travail client.",
              "Synchronisez audio à l'action: si quelqu'un applaudit, l'effet sonore de l'applaudissement doit tomber sur l'image exacte des mains qui se touchent. Cette synchronisation est ce qui rend les montages pros."
            ],
            ar: [
              "أسرع تصحيح صوت مجاني: podcast.adobe.com/enhance — مجاني كامل. حمّل أي ملف صوتي (حتى ساعة). الذكاء الاصطناعي يزيل ضوضاء الخلفية ويحسّن وضوح الصوت في 30 ثانية.",
              "مستويات الصوت: موسيقى الخلفية = -20 إلى -25 dB. السرد/الحوار = -12 إلى -6 dB. المؤثرات الصوتية = -15 إلى -18 dB. في CapCut: مسار صوتي → Volume → اضبط (خفّض الموسيقى لـ20–30%).",
              "إضافة مؤثرات صوتية: freesound.org — حساب مجاني، آلاف المؤثرات. ابحث عن: 'whoosh' (نص يطير)، 'click' (UI)، 'crowd' (طاقة). حمّل كـMP3. استورد في CapCut عبر Audio → استيراد.",
              "تقنية J-Cut: ابدأ صوت المشهد التالي 0.5–1 ثانية قبل وصول القطعة البصرية. ينشئ انتقالاً سلساً وطبيعياً.",
              "موسيقى مجانية (آمنة لعمل العملاء): YouTube Audio Library (مجاني)، Pixabay Music (مجاني)، Mixkit (مجاني). أبدا لا تستخدم أغنية محمية في عمل العملاء.",
              "تزامن الصوت مع الحركة: إذا صفّق شخص ما، يجب أن يقع مؤثر التصفيق على الإطار الدقيق لتلامس الأيدي. هذا التزامن هو ما يجعل المونتاج المحترف يبدو مصقولاً."
            ],
            en: [
              "Fastest free audio fix: podcast.adobe.com/enhance — completely free. Upload any audio file (up to 1 hour). AI removes background noise and enhances voice clarity in 30 seconds.",
              "Audio levels: Background music = -20 to -25 dB. Narration/dialogue = -12 to -6 dB. Sound effects = -15 to -18 dB. In CapCut: audio track → Volume → adjust (lower music to 20–30%).",
              "Add sound effects: freesound.org — free account, thousands of effects. Search: 'whoosh' (flying text), 'click' (UI), 'crowd' (energy). Download as MP3. Import in CapCut via Audio → Import.",
              "J-Cut technique: start audio of next scene 0.5–1 second BEFORE the visual cut arrives. Creates a smooth, natural transition.",
              "Royalty-free music (safe for client work): YouTube Audio Library (free), Pixabay Music (free), Mixkit (free). NEVER use copyrighted songs on client work.",
              "Sync audio to action: if someone claps, the clap sound effect must land on the exact frame of hands touching. This sync is what makes professional edits feel polished."
            ]
          },
          method: {
            fr: "Exercice vidéo silencieuse: trouvez n'importe quelle vidéo sans audio ou mettez une vidéo en sourdine. Ajoutez un sound design complet depuis zéro: ambiance de fond, effets sonores pour chaque action, musique. Utilisez uniquement des ressources gratuites.",
            ar: "تمرين الفيديو الصامت: ابحث عن أي فيديو بدون صوت أو أكتم فيديو عندك. أضف تصميما صوتياً كاملاً من الصفر: أجواء خلفية، مؤثرات صوتية لكل حركة، موسيقى. استخدم فقط موارد مجانية.",
            en: "Silent video exercise: find any video with no audio or mute a video you have. Add complete sound design from scratch: background ambience, sound effects for every action, music. Use only free resources."
          },
          exercise: {
            fr: "Enregistrez 3 minutes de vous donnant un conseil sur n'importe quel sujet. Passez l'audio par Adobe Podcast Enhance. Réimportez dans CapCut. Ajoutez musique fond à -22dB. Ajoutez un effet sonore au début et à la fin. Comparez avant et après.",
            ar: "سجّل 3 دقائق منك تعطي نصيحة عن أي موضوع. مرّر الصوت عبر Adobe Podcast Enhance. أعد الاستيراد في CapCut. زيد موسيقى خلفية على -22dB. زيد مؤثر صوتي في البداية والنهاية. قارن قبل وبعد.",
            en: "Record 3 minutes of yourself giving a tip on any topic. Run audio through Adobe Podcast Enhance. Re-import into CapCut. Add background music at -22dB. Add a sound effect at start and end. Compare before and after."
          },
          tip: {
            fr: "💡 Une vidéo avec un étalonnage parfait mais un mauvais audio semble amateure. Une vidéo avec des couleurs médiocres mais un audio cristallin semble professionnelle. Quand le temps est limité, corrigez l'audio en premier.",
            ar: "💡 فيديو بتصحيح ألوان مثالي لكن صوت سيئ يبدو هاوياً. فيديو بألوان متوسطة لكن صوت كريستالي يبدو احترافياً. عندما يكون الوقت محدوداً، صحّح الصوت أولاً.",
            en: "💡 A video with perfect color grading but bad audio feels amateur. A video with mediocre color but crystal-clear audio feels professional. When time is limited, fix audio first."
          }
        }
      ]
    },
    {
      name: { fr: "Intermédiaire", ar: "متوسط", en: "Intermediate" },
      badge: "⚡",
      duration: { fr: "Semaines 5–11", ar: "الأسابيع 5–11", en: "Weeks 5–11" },
      goal: {
        fr: "Apprendre DaVinci Resolve, se spécialiser dans un type de vidéo, construire votre portfolio",
        ar: "تعلم DaVinci Resolve، التخصص في نوع فيديو، بناء بورتفوليوك",
        en: "Learn DaVinci Resolve, specialize in a video type, build your portfolio"
      },
      lessons: [
        {
          id: "video-i-1",
          title: {
            fr: "DaVinci Resolve — L'Outil Professionnel Gratuit",
            ar: "DaVinci Resolve — الأداة الاحترافية المجانية",
            en: "DaVinci Resolve — Professional Free Tool"
          },
          image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
          layout: "top",
          steps: {
            fr: [
              "Téléchargez DaVinci Resolve sur blackmagicdesign.com → sélectionnez DaVinci Resolve (gratuit), PAS DaVinci Resolve Studio (payant).",
              "Première configuration: Fichier → Paramètres du projet → Fréquence d'images: 25fps. Résolution: 1920×1080.",
              "5 pages en bas: Cut (montage rapide), Edit (timeline professionnelle — utilisez celle-ci), Fusion (motion graphics), Color (meilleur étalonnage au monde), Fairlight (audio pro). Commencez par Edit et Color seulement.",
              "Importer: Fichier → Importer → Importer des médias → sélectionnez vos vidéos → apparaissent dans le Media Pool en haut à gauche. Faites glisser vers la Timeline.",
              "Montage de base: Outil Lame (B) = couper. Outil Sélection (A) = déplacer. Supprimer clip = Retour arrière. Fermer l'espace: clic droit → Supprimer l'espace. Rogner: survolez le bord du clip jusqu'à l'icône de rognage → faites glisser.",
              "Exporter: page Deliver. Présélection YouTube, ou Personnalisé (H.264, 1080p, 10 Mbps). Cliquez Ajouter à la file d'attente → Tout rendre."
            ],
            ar: [
              "حمّل DaVinci Resolve من blackmagicdesign.com → اختار DaVinci Resolve (مجاني)، مش DaVinci Resolve Studio (مدفوع).",
              "الإعداد الأول: ملف → إعدادات المشروع → معدل الإطارات: 25fps. الدقة: 1920×1080.",
              "5 صفحات في الأسفل: Cut (مونتاج سريع)، Edit (جدول زمني احترافي — استخدم هذا)، Fusion (موشن جرافيك)، Color (أفضل تصحيح ألوان في العالم)، Fairlight (صوت احترافي). ابدأ بـ Edit وColor فقط.",
              "الاستيراد: ملف → استيراد → استيراد وسائط → اختار فيديوهاتك → تظهر في Media Pool أعلى اليسار. اسحب للجدول الزمني.",
              "المونتاج الأساسي: أداة الشفرة (B) = قطع. أداة التحديد (A) = تحريك. حذف كليب = Backspace. إغلاق الفراغ: انقر يمين → حذف الفراغ. القص: مرّر على حافة الكليب حتى أيقونة القص → اسحب.",
              "التصدير: صفحة Deliver. إعداد مسبق YouTube، أو مخصص (H.264، 1080p، 10 Mbps). اضغط إضافة لقائمة الانتظار → تصيير الكل."
            ],
            en: [
              "Download DaVinci Resolve from blackmagicdesign.com → select DaVinci Resolve (free), NOT DaVinci Resolve Studio (paid).",
              "First setup: File → Project Settings → Frame Rate: 25fps. Resolution: 1920×1080.",
              "5 pages at bottom: Cut (fast editing), Edit (professional timeline — use this), Fusion (motion graphics), Color (best color grading in the world), Fairlight (pro audio). Start with Edit and Color only.",
              "Import: File → Import → Import Media → select your videos → appear in Media Pool top left. Drag to Timeline.",
              "Basic editing: Blade tool (B) = cut. Selection tool (A) = move. Delete clip = Backspace. Close gap: right-click → Delete Gap. Trim: hover over clip edge until trim icon → drag.",
              "Export: Deliver page. YouTube preset, or Custom (H.264, 1080p, 10 Mbps). Click Add to Render Queue → Render All."
            ]
          },
          method: {
            fr: "Importez n'importe quel métrage de 5 minutes dans DaVinci Resolve. Votre seule tâche: coupez chaque moment où il ne se passe rien d'intéressant. Si quelqu'un marche jusqu'à sa voiture, coupez à son arrivée. Si quelqu'un fait une pause de 3 secondes en parlant, coupez la pause.",
            ar: "استورد أي لقطات مدتها 5 دقائق في DaVinci Resolve. مهمتك الوحيدة: اقطع كل لحظة لا يحدث فيها شيء مثير. إذا سار شخص لسيارته، اقطع لحظة وصوله. إذا توقف شخص 3 ثوانٍ أثناء الكلام، اقطع التوقف.",
            en: "Import any 5-minute footage into DaVinci Resolve. Your only task: cut out every moment where nothing interesting is happening. If someone walks to their car, cut to when they arrive. If someone pauses 3 seconds while talking, cut the pause."
          },
          exercise: {
            fr: "Montez une vidéo de voyage ou d'événement de 3 minutes dans DaVinci Resolve depuis des séquences brutes (trouvez du métrage gratuit sur pexels.com/videos). Doit inclure: coupes propres, musique libre de droits, 2 styles de texte différents, correction colorimétrique basique sur la page Color.",
            ar: "عدّل فيديو سفر أو حدث مدته 3 دقائق في DaVinci Resolve من لقطات خام (ابحث عن لقطات مجانية على pexels.com/videos). يجب أن يتضمن: قطع نظيفة، موسيقى مجانية، أسلوبي نص مختلفين، تصحيح ألوان أساسي على صفحة Color.",
            en: "Edit a 3-minute travel or event video in DaVinci Resolve from raw footage (find free footage on pexels.com/videos). Must include: clean cuts, royalty-free music, 2 different text styles, basic color correction on Color page."
          },
          tip: {
            fr: "💡 Raccourci qui vous sauvera des heures: appuyez I pour marquer le point IN (où vous voulez qu'un clip commence) et O pour le point OUT dans le visualiseur — puis F9 pour l'ajouter automatiquement à votre timeline. C'est le flux de travail de montage professionnel.",
            ar: "💡 اختصار سيوفّر لك ساعات: اضغط I لتحديد نقطة البداية (أين تريد بدء الكليب) و O لنقطة النهاية في العارض — ثم F9 لإضافته تلقائياً لجدولك الزمني. هذا سير عمل المونتاج الاحترافي.",
            en: "💡 Shortcut that will save you hours: press I to mark the IN point (where you want clip to start) and O for OUT point in the viewer — then F9 to automatically add it to your timeline. This is the professional editing workflow."
          }
        },
        {
          id: "video-i-2",
          title: {
            fr: "Monter un Film de Mariage",
            ar: "مونتاج فيلم زفاف",
            en: "Edit a Wedding Highlight Film"
          },
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
          layout: "right",
          steps: {
            fr: [
              "Le montage mariage est la niche vidéo locale la plus lucrative en Algérie (10 000–50 000 DZD par projet). Structure 4 minutes: Ouverture (0–30s): meilleur moment émotionnel. Préparatifs (30–60s): préparation et détails. Cérémonie (1:00–2:00): vœux, premier baiser, réactions. Célébration (2:00–3:30): première danse, famille, joie. Clôture (3:30–4:00): plan final calme et émotionnel.",
              "Sélection musicale: 1 chanson pour tout ou 2 (1 plus lente pour cérémonie, 1 dynamique pour célébration). Sources: Artlist.io (payant, professionnel), ou cherchez 'royalty free wedding music' sur YouTube.",
              "Étalonnage pour mariages: look chaud, doux et romantique. DaVinci Resolve page Color: réduisez légèrement les hautes lumières → ajoutez chaleur (vers orange dans les tons moyens) → réduisez saturation -15 à -25 → légère vignette.",
              "Ralenti: filmez les moments importants à 60fps (paramètre slow motion téléphone). En montage, réglez ces clips à 50% vitesse. Moments clés: premier regard, échange des bagues, premier tour de danse, larmes de joie.",
              "Le montage émotionnel: les grands films de mariage font pleurer. Ceci vient de: choisir des plans capturant des émotions genuines, laisser respirer les moments aux pics émotionnels, faire correspondre l'arc émotionnel de la musique à l'histoire visuelle.",
              "Livraison: exportez en 4K si possible, 1080p minimum. Livrez via WeTransfer.com + clé USB. Exportez aussi un teaser Reel de 90 secondes pour Instagram — c'est votre marketing gratuit."
            ],
            ar: [
              "مونتاج الزفاف هو النيش الفيديو المحلي الأكثر ربحاً في الجزائر (10,000–50,000 دج للمشروع). هيكل 4 دقائق: افتتاح (0–30 ث): أفضل لحظة عاطفية. التحضير (30–60 ث): التحضير والتفاصيل. الحفل (1:00–2:00): العهود، القبلة الأولى، ردود الأفعال. الاحتفال (2:00–3:30): الرقصة الأولى، العائلة، الفرح. الختام (3:30–4:00): لقطة نهائية هادئة وعاطفية.",
              "اختيار الموسيقى: أغنية واحدة للكل أو 2 (أبطأ للحفل، أكثر حيوية للاحتفال). المصادر: Artlist.io (مدفوع، احترافي)، أو ابحث عن 'royalty free wedding music' على YouTube.",
              "تصحيح الألوان للأعراس: مظهر دافئ وناعم ورومانسي. صفحة Color في DaVinci Resolve: قلّل الإضاءة العالية قليلاً → زيد الدفء (نحو البرتقالي في الأوسط) → قلّل التشبع -15 إلى -25 → vignette خفيفة.",
              "التصوير البطيء: صوّر اللحظات المهمة بـ60fps (إعداد سلو موشن الهاتف). في المونتاج، اضبط هذه الكليبات على 50% سرعة. اللحظات الرئيسية: أول نظرة، تبادل الخواتم، أول لفة رقص، دموع الفرح.",
              "المونتاج العاطفي: أفلام الزفاف الرائعة تُبكي. هذا يأتي من: اختيار لقطات تلتقط مشاعر حقيقية، ترك اللحظات تتنفس عند الذرى العاطفية، مطابقة القوس العاطفي للموسيقى مع القصة البصرية.",
              "التسليم: صدّر بـ4K إن أمكن، 1080p كحد أدنى. سلّم عبر WeTransfer.com + مفتاح USB. صدّر أيضاً teaser Reel مدته 90 ثانية لـ Instagram — هذا تسويقك المجاني."
            ],
            en: [
              "Wedding editing is the most lucrative local video niche in Algeria (10,000–50,000 DZD per project). 4-minute structure: Opening (0–30s): best emotional moment. Getting ready (30–60s): preparation and details. Ceremony (1:00–2:00): vows, first kiss, reactions. Celebration (2:00–3:30): first dance, family, joy. Closing (3:30–4:00): quiet emotional final shot.",
              "Music selection: 1 song for everything or 2 (slower for ceremony, upbeat for celebration). Sources: Artlist.io (paid, professional), or search 'royalty free wedding music' on YouTube.",
              "Color grading for weddings: warm, soft and romantic look. DaVinci Resolve Color page: reduce highlights slightly → add warmth (toward orange in midtones) → reduce saturation -15 to -25 → slight vignette.",
              "Slow motion: film important moments at 60fps (phone slow motion setting). In editing, set these clips to 50% speed. Key moments: first look, ring exchange, first dance spin, happy tears.",
              "The emotional edit: great wedding films make people cry. This comes from: choosing shots capturing genuine emotions, letting moments breathe at emotional peaks, matching music's emotional arc to visual story.",
              "Delivery: export at 4K if possible, 1080p minimum. Deliver via WeTransfer.com + USB drive. Also export a 90-second Reel teaser for Instagram — this is your free marketing."
            ]
          },
          method: {
            fr: "Trouvez du métrage de mariage gratuit en ligne (cherchez 'free wedding stock footage' sur Pexels ou Pixabay). Montez un film complet de 4 minutes en suivant la structure ci-dessus. C'est votre pièce de portfolio de montage mariage même sans métrage de vrai client.",
            ar: "ابحث عن لقطات زفاف مجانية أونلاين (ابحث عن 'free wedding stock footage' على Pexels أو Pixabay). عدّل فيلماً كاملاً مدته 4 دقائق باتباع الهيكل أعلاه. هذه قطعة بورتفوليو مونتاج زفافك حتى بدون لقطات زبون حقيقي.",
            en: "Find free wedding footage online (search 'free wedding stock footage' on Pexels or Pixabay). Edit a complete 4-minute film following the structure above. This is your wedding editing portfolio piece even without real client footage."
          },
          exercise: {
            fr: "Montez un film de mariage complet de 4 minutes depuis des images stock gratuites. Gradez avec un look romantique et chaud. Créez une version teaser Reel de 60 secondes. Rédigez une liste de prix pour votre service de montage vidéo mariage avec 3 forfaits.",
            ar: "عدّل فيلم زفاف كامل مدته 4 دقائق من صور stock مجانية. صحح الألوان بمظهر رومانسي دافئ. أنشئ نسخة teaser Reel مدتها 60 ثانية. اكتب قائمة أسعار لخدمة مونتاج فيديو زفافك مع 3 باقات.",
            en: "Edit a complete 4-minute wedding film from free stock footage. Grade with a warm romantic look. Create a 60-second Reel teaser version. Write a price list for your wedding video editing service with 3 packages."
          },
          tip: {
            fr: "💡 Approchez les photographes de mariage, pas les mariées directement. Les photographes couvrent chaque mariage et ont besoin d'un monteur de confiance. Une bonne relation avec un photographe = 10–20 mariages par an. Offrez-leur une commission de référral de 1 000–2 000 DZD par client.",
            ar: "💡 تواصل مع مصوري الزفاف، ليس العرائس مباشرة. المصورون يغطون كل زفاف ويحتاجون لمحرر موثوق. علاقة جيدة مع مصور = 10–20 زفاف في السنة. اعرض عليهم عمولة إحالة 1,000–2,000 دج لكل زبون.",
            en: "💡 Approach wedding photographers, not brides directly. Photographers cover every wedding and need a trusted editor. One good relationship with a photographer = 10–20 weddings per year. Offer them a referral commission of 1,000–2,000 DZD per client."
          }
        },
        {
          id: "video-i-3",
          title: {
            fr: "Monter des Vidéos YouTube qui Retiennent l'Attention",
            ar: "مونتاج فيديوهات YouTube تحافظ على الانتباه",
            en: "Edit YouTube Videos That Hold Attention"
          },
          image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
          layout: "left",
          steps: {
            fr: [
              "Règle de rétention: si 30% de l'audience abandonne dans les 30 premières secondes — la vidéo échouera. Votre SEUL objectif dans les 30 premières secondes: faire croire au spectateur que cette vidéo vaut la peine d'être regardée jusqu'à la fin.",
              "Technique d'interruption de pattern: toutes les 60–90 secondes, ajoutez un changement visuel. Options: zoom sur le visage du locuteur, couper vers la B-roll, animation texte, changer la musique, effet sonore, couper vers un diagramme.",
              "Jump cuts: coupez chaque pause, mot de remplissage (um, euh, donc) et silence de plus de 0,3 seconde. Dans DaVinci Resolve: outil Lame pour couper chaque pause. Semble extrême mais c'est comment est monté le contenu des grands YouTubeurs.",
              "B-roll par-dessus la voix: quand le locuteur dit 'je suis allé au marché', coupez vers des images de marché. La caméra face-cam ne devrait jamais durer plus de 20–30 secondes sans B-roll. Sources: Pexels.com/videos, Pixabay.com/videos (gratuits).",
              "Écran de fin: dans les 20 dernières secondes: bouton abonnement, carte vidéo suivante, carte vidéo recommandée. Ajoutez-les dans YouTube Studio APRÈS l'upload.",
              "Chapitres: dans la description YouTube ajoutez horodatages: '0:00 Introduction, 1:30 Étape 1, 3:45 Étape 2'. YouTube les montre comme chapitres sur la barre de progression."
            ],
            ar: [
              "قاعدة الاحتفاظ: إذا تخلّى 30% من الجمهور في أول 30 ثانية — سيفشل الفيديو. هدفك الوحيد في أول 30 ثانية: إقناع المشاهد بأن هذا الفيديو يستحق المشاهدة حتى النهاية.",
              "تقنية انقطاع النمط: كل 60–90 ثانية، أضف تغييراً بصرياً. الخيارات: تكبير على وجه المتحدث، قطع لـB-roll، رسوم متحركة نصية، تغيير الموسيقى، مؤثر صوتي، قطع لمخطط.",
              "Jump cuts: اقطع كل توقف، كلمة حشو (um، euh، donc) وصمت أطول من 0.3 ثانية. في DaVinci Resolve: أداة الشفرة لقطع كل توقف. يبدو متطرفاً لكن هكذا يُعدّل محتوى كبار YouTubers.",
              "B-roll فوق الصوت: عندما يقول المتحدث 'ذهبت للسوق'، اقطع لصور السوق. الكاميرا المواجهة لا يجب أن تستمر أكثر من 20–30 ثانية بدون B-roll. المصادر: Pexels.com/videos، Pixabay.com/videos (مجانية).",
              "شاشة النهاية: في آخر 20 ثانية: زر اشتراك، بطاقة الفيديو التالي، بطاقة الفيديو الموصى به. أضفها في YouTube Studio بعد الرفع.",
              "الفصول: في وصف YouTube أضف طوابع الوقت: '0:00 مقدمة، 1:30 الخطوة 1، 3:45 الخطوة 2'. YouTube يعرضها كفصول على شريط التقدم."
            ],
            en: [
              "Retention rule: if 30% of audience drops off in first 30 seconds — the video will fail. Your ONLY goal in first 30 seconds: make the viewer believe this video is worth watching until the end.",
              "Pattern interrupt technique: every 60–90 seconds, add a visual change. Options: zoom on speaker's face, cut to B-roll, text animation, change music, sound effect, cut to a diagram.",
              "Jump cuts: cut every pause, filler word (um, uh, so) and silence longer than 0.3 seconds. In DaVinci Resolve: Blade tool to cut each pause. Seems extreme but this is how every major YouTuber's content is edited.",
              "B-roll over voice: when speaker says 'I went to the market', cut to market footage. Face-cam should never last more than 20–30 seconds without B-roll. Sources: Pexels.com/videos, Pixabay.com/videos (free).",
              "End screen: in last 20 seconds: subscribe button, next video card, recommended video card. Add them in YouTube Studio AFTER upload.",
              "Chapters: in YouTube description add timestamps: '0:00 Introduction, 1:30 Step 1, 3:45 Step 2'. YouTube shows these as chapters on progress bar."
            ]
          },
          method: {
            fr: "Regardez votre propre contenu de manière critique: chargez n'importe quelle vidéo sur YouTube. Ouvrez Analytics → Rétention de l'audience. Vous verrez un graphique montrant à quelle seconde les spectateurs abandonnent. Chaque chute = quelque chose s'est mal passé à cet instant.",
            ar: "شاهد محتواك الخاص بعين ناقدة: حمّل أي فيديو على YouTube. افتح Analytics → الاحتفاظ بالجمهور. ستجد رسماً بيانياً يُظهر عند أي ثانية يتخلى المشاهدون. كل انخفاض = حدث خطأ ما في تلك اللحظة.",
            en: "Watch your own content critically: load any video on YouTube. Open Analytics → Audience Retention. You'll see a graph showing at what second viewers drop off. Every drop = something went wrong at that moment."
          },
          exercise: {
            fr: "Trouvez n'importe quelle vidéo éducative de 10 minutes sur YouTube. Montez-la À 6 minutes: supprimez tous les mots de remplissage, pauses inutiles, sections répétitives dans DaVinci Resolve. Ajoutez ensuite: 3 animations de texte, 2 B-rolls, 1 carte de titre de chapitre.",
            ar: "ابحث عن أي فيديو تعليمي مدته 10 دقائق على YouTube. عدّله ليصبح 6 دقائق: احذف كل الكلمات الحشو، التوقفات غير الضرورية، الأقسام المتكررة في DaVinci Resolve. ثم أضف: 3 رسوم متحركة نصية، 2 B-rolls، 1 بطاقة عنوان فصل.",
            en: "Find any 10-minute educational video on YouTube. Edit it DOWN to 6 minutes: remove all filler words, unnecessary pauses, repetitive sections in DaVinci Resolve. Then add: 3 text animations, 2 B-rolls, 1 chapter title card."
          },
          tip: {
            fr: "💡 Les monteurs YouTube les mieux payés ne sont pas ceux qui ajoutent le plus d'effets — ce sont ceux qui rendent le contenu sans effort et gardent les spectateurs à regarder. Le montage invisible est la compétence la plus difficile et la plus précieuse.",
            ar: "💡 محررو YouTube الأعلى أجراً ليسوا من يضيفون أكثر المؤثرات — بل من يجعلون المحتوى يبدو سهلاً ويبقون المشاهدين يشاهدون. المونتاج غير المرئي هو المهارة الأصعب والأكثر قيمة.",
            en: "💡 The highest-paid YouTube editors are not those who add the most effects — they're those who make content feel effortless and keep viewers watching. Invisible editing is the hardest and most valuable skill."
          }
        }
      ]
    },
    {
      name: { fr: "Avancé", ar: "متقدم", en: "Advanced" },
      badge: "🔥",
      duration: { fr: "Semaines 12–20", ar: "الأسابيع 12–20", en: "Weeks 12–20" },
      goal: {
        fr: "Maîtriser la page Color de DaVinci Resolve, bases VFX, tarifs premium",
        ar: "إتقان صفحة Color في DaVinci Resolve، أساسيات VFX، أسعار premium",
        en: "Master DaVinci Resolve Color page, VFX basics, command premium rates"
      },
      lessons: [
        {
          id: "video-a-1",
          title: {
            fr: "Maîtriser l'Étalonnage des Couleurs dans DaVinci Resolve",
            ar: "إتقان تصحيح الألوان في DaVinci Resolve",
            en: "Master Color Grading in DaVinci Resolve"
          },
          image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&q=80",
          layout: "top",
          steps: {
            fr: [
              "Page Color dans DaVinci Resolve. Graphe de nœuds à droite: chaque nœud = ajustement de couleur séparable. Nœud 1 = Correction colorimétrique. Nœud 2 = Grade créatif. Nœud 3 = Ajustements spécifiques.",
              "3 oscilloscopes (Espace de travail → Oscilloscopes): Forme d'onde (gauche-droite=écran, haut-bas=luminosité — bas=0, haut=100 pour image bien exposée). Parade (sépare R, G, B — tous 3 équilibrés = balance des blancs neutre). Vectorscope (saturation et teinte — ligne des tons chair).",
              "Roues primaires: Lift (ombres), Gamma (tons moyens), Gain (hautes lumières). Faites glisser vers une couleur pour teinter cette plage. Pour teal-orange cinématique: Lift légèrement vers teal/cyan, Gain légèrement vers orange chaud.",
              "Outil Qualificateur: pipette dans la page Color. Cliquez sur n'importe quelle couleur dans votre image (ciel, peau). DaVinci isole SEULEMENT cette couleur pour l'ajustement.",
              "Correspondance des plans: clic droit sur un clip bien gradé → Capturer une image fixe. Allez sur un clip mal assorti → clic droit dans le panneau Images fixes → Appliquer le grade. Affinez manuellement.",
              "Flux de travail LUT: clic droit sur un nœud → LUTs → parcourez et appliquez. Appliquez toujours LUT sur son propre nœud, puis réduisez l'opacité du nœud à 30–70%."
            ],
            ar: [
              "صفحة Color في DaVinci Resolve. رسم العقد على اليمين: كل عقدة = ضبط ألوان منفصل. العقدة 1 = تصحيح الألوان. العقدة 2 = Grade إبداعي. العقدة 3 = ضبط محدد.",
              "3 أجهزة قياس (مساحة العمل → أجهزة القياس): شكل الموجة (يسار-يمين=الشاشة، أعلى-أسفل=السطوع — الأسفل=0، الأعلى=100 للصورة المكشوفة جيداً). Parade (يفصل R, G, B — الـ3 متوازنة = توازن أبيض محايد). Vectorscope (التشبع واللون — خط ألوان البشرة).",
              "العجلات الأساسية: Lift (الظلال)، Gamma (الأوساط)، Gain (الإضاءات). اسحب نحو لون لتلوين تلك النطاق. لـteal-orange السينمائي: Lift قليلاً نحو teal/cyan، Gain قليلاً نحو برتقالي دافئ.",
              "أداة المؤهل: القطّارة في صفحة Color. اضغط على أي لون في صورتك (السماء، البشرة). DaVinci يعزل هذا اللون فقط للضبط.",
              "مطابقة اللقطات: انقر يمين على كليب مُدرَج جيداً → التقاط صورة ثابتة. اذهب لكليب غير متطابق → انقر يمين في لوحة الصور الثابتة → تطبيق الـgrade. اضبط يدوياً.",
              "سير عمل LUT: انقر يمين على عقدة → LUTs → تصفّح وطبّق. دايماً طبّق LUT على عقدتها الخاصة، ثم قلّل شفافية العقدة لـ30–70%."
            ],
            en: [
              "Color page in DaVinci Resolve. Node graph on right: each node = separate stackable color adjustment. Node 1 = Color Correction. Node 2 = Creative Grade. Node 3 = Specific adjustments.",
              "3 scopes (Workspace → Scopes): Waveform (left-right=screen, up-down=brightness — bottom=0, top=100 for well-exposed image). Parade (splits R, G, B — all 3 balanced = neutral white balance). Vectorscope (saturation and hue — skin tone indicator line).",
              "Primary Wheels: Lift (shadows), Gamma (midtones), Gain (highlights). Drag toward a color to tint that range. For cinematic teal-orange: Lift slightly toward teal/cyan, Gain slightly toward warm orange.",
              "Qualifier tool: eyedropper in Color page. Click on any color in your image (sky, skin). DaVinci isolates ONLY that color for adjustment.",
              "Matching shots: right-click on well-graded clip → Grab Still. Go to poorly matched clip → right-click in Stills panel → Apply Grade. Fine-tune manually.",
              "LUT workflow: right-click on a node → LUTs → browse and apply. Always apply LUT on its own node, then reduce node opacity to 30–70%."
            ]
          },
          method: {
            fr: "Gradez le même clip de 2 minutes de 5 façons différentes: 1) Après-midi dorée chaude. 2) Thriller clinique froid. 3) Film vintage délavé. 4) Action à fort contraste. 5) Romance douce. Exportez les 5. Sauvegardez ces grades comme Power Grades dans DaVinci.",
            ar: "صحّح نفس الكليب مدته دقيقتان بـ5 طرق مختلفة: 1) بعد ظهر ذهبي دافئ. 2) إثارة سريرية باردة. 3) فيلم قديم باهت. 4) أكشن بتباين عالٍ. 5) رومانسية ناعمة. صدّر الـ5. احفظ هذه الـgrades كـPower Grades في DaVinci.",
            en: "Grade the same 2-minute clip 5 different ways: 1) Warm golden afternoon. 2) Cold clinical thriller. 3) Faded vintage film. 4) High contrast action. 5) Soft romance. Export all 5. Save these grades as Power Grades in DaVinci."
          },
          exercise: {
            fr: "Téléchargez 3 clips différents de Pexels (scène extérieure, portrait intérieur, scène nocturne). Gradez les 3 pour qu'ils aient l'air d'appartenir au même film — température de couleur, contraste et ambiance cohérents. Montrez avant et après pour chaque clip.",
            ar: "حمّل 3 كليبات مختلفة من Pexels (مشهد خارجي، بورتريه داخلي، مشهد ليلي). صحّح ألوان الـ3 ليبدوا كأنهم ينتمون لنفس الفيلم — درجة حرارة لون متسقة، تباين، مزاج. أظهر قبل وبعد لكل كليب.",
            en: "Download 3 different clips from Pexels (outdoor scene, indoor portrait, night scene). Grade all 3 so they look like they belong to the same film — consistent color temperature, contrast and mood. Show before and after for each clip."
          },
          tip: {
            fr: "💡 Les coloristes ne devinent pas — ils utilisent des oscilloscopes. Avant de toucher QUOI QUE CE SOIT, regardez la forme d'onde et corrigez d'abord l'exposition technique. Un grade créatif sur une exposition techniquement mauvaise sera toujours mauvais.",
            ar: "💡 مصححو الألوان لا يخمنون — يستخدمون أجهزة القياس. قبل لمس أي شيء، انظر لشكل الموجة وصحّح الكشف التقني أولاً. grade إبداعي على كشف تقني سيئ سيبدو دائماً سيئاً.",
            en: "💡 Colorists don't guess — they use scopes. Before touching ANYTHING, look at the waveform and fix the technical exposure first. A creative grade on a technically wrong exposure will always look bad."
          }
        },
        {
          id: "video-a-2",
          title: {
            fr: "Fixer Vos Tarifs et Trouver des Clients Vidéo Bien Payés",
            ar: "تحديد أسعارك وإيجاد زبائن فيديو يدفعوا جيداً",
            en: "Set Your Rates and Get High-Paying Video Clients"
          },
          image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
          layout: "left",
          steps: {
            fr: [
              "Tarification montage vidéo Algérie: Reel 30s = 3–8K. Vidéo YouTube 3–5min = 8–20K. Highlight mariage 4min = 15–40K. Montage journée mariage complète = 30–80K. Pub commerciale = 30–120K. Forfait Reels mensuel (8/mois) = 20–50K. (DZD)",
              "Construire un showreel: vidéo de 60–90 secondes de vos MEILLEURS travaux. Structure: commencez par le plan le plus impressionnant (3 premières secondes doivent être époustouflantes), incluez de la variété, montrez la gamme de grades et styles, terminez avec votre nom et contact.",
              "Où trouver des clients en Algérie: 1. Photographes de mariage sur Instagram. 2. YouTubeurs algériens avec 5 000–50 000 abonnés. 3. Marques lançant des pubs réseaux sociaux. 4. Sociétés événementielles. 5. Clients internationaux via Fiverr payés en USD.",
              "Formule de démarchage à froid: 'Bonjour [Nom], je suis monteur vidéo spécialisé dans [films mariage / création de contenu]. J'ai regardé votre page et j'ai des idées pour améliorer vos vidéos. Voici un exemple de mon travail: [lien showreel]. Je serais ravi de vous offrir un premier montage test gratuitement. Intéressé(e)?'",
              "L'offre de montage test gratuit: proposez de monter 1 courte vidéo gratuitement pour tout prospect sérieux. Coût pour vous: 3–4 heures. Retour potentiel: un client qui vous envoie 15 mariages par an.",
              "Upselling: chaque projet de montage est une opportunité. Montage mariage → offrez un teaser Reel. Montage YouTube → offrez un design de miniature (3 000–5 000 DZD en plus). Montage commercial → offrez une version 15 secondes pour stories (2 000 DZD en plus)."
            ],
            ar: [
              "تسعير مونتاج الفيديو الجزائر: Reel 30 ث = 3–8K. فيديو YouTube 3–5 د = 8–20K. هايلايت زفاف 4 د = 15–40K. مونتاج يوم زفاف كامل = 30–80K. إعلان تجاري = 30–120K. باقة Reels شهرية (8/شهر) = 20–50K. (دج)",
              "بناء Showreel: فيديو 60–90 ثانية من أفضل أعمالك. الهيكل: ابدأ بأكثر لقطة مذهلة (أول 3 ثوانٍ يجب أن تبهر)، أدرج التنوع، أظهر نطاق الـgrades والأساليب، اختم باسمك وتواصلك.",
              "أين تجد زبائن في الجزائر: 1. مصورو الزفاف على Instagram. 2. YouTubers جزائريون بـ5,000–50,000 متابع. 3. علامات تطلق إعلانات سوشيال ميديا. 4. شركات الفعاليات. 5. زبائن دوليون عبر Fiverr يُدفَع بالدولار.",
              "معادلة التواصل البارد: 'Bonjour [الاسم]، je suis monteur vidéo spécialisé dans [films mariage / création de contenu]. J'ai regardé votre page et j'ai des idées. Voici mon travail: [رابط showreel]. Je serais ravi de vous offrir un premier montage test gratuitement. Intéressé(e)?'",
              "عرض الاختبار المجاني: اقترح مونتاج فيديو قصير واحد مجانا لأي عميل محتمل جاد. التكلفة عليك: 3–4 ساعات. العائد المحتمل: زبون يرسل لك 15 زفاف في السنة.",
              "البيع الإضافي: كل مشروع مونتاج هو فرصة. مونتاج زفاف → اقترح teaser Reel. مونتاج YouTube → اقترح تصميم thumbnail (3,000–5,000 دج إضافية). مونتاج تجاري → اقترح نسخة 15 ثانية للستوريات (2,000 دج إضافية)."
            ],
            en: [
              "Video editing pricing Algeria: 30s Reel = 3–8K. YouTube video 3–5min = 8–20K. Wedding highlight 4min = 15–40K. Full wedding day edit = 30–80K. Commercial ad = 30–120K. Monthly Reels package (8/month) = 20–50K. (DZD)",
              "Build a showreel: 60–90 second video of your BEST work. Structure: start with most impressive shot (first 3 seconds must be stunning), include variety, show range of grades and styles, end with your name and contact.",
              "Where to find clients in Algeria: 1. Wedding photographers on Instagram. 2. Algerian YouTubers with 5,000–50,000 subscribers. 3. Brands running social media ads. 4. Event companies. 5. International clients via Fiverr paid in USD.",
              "Cold outreach formula: 'Bonjour [Name], je suis monteur vidéo spécialisé dans [wedding films / content creation]. J'ai regardé votre page et j'ai des idées pour améliorer vos vidéos. Voici mon travail: [showreel link]. Je serais ravi de vous offrir un premier montage test gratuitement. Intéressé(e)?'",
              "Free test edit offer: offer to edit 1 short video free for any serious prospect. Cost to you: 3–4 hours. Potential return: a client who sends you 15 weddings per year.",
              "Upselling: every editing project is an opportunity. Wedding edit → offer Reel teaser. YouTube edit → offer thumbnail design (3,000–5,000 DZD extra). Commercial edit → offer 15-second stories version (2,000 DZD extra)."
            ]
          },
          method: {
            fr: "Trouvez 10 photographes de mariage sur Instagram dans votre ville. Regardez leurs profils — la plupart ne proposeront pas de vidéo. C'est votre ouverture. Envoyez un DM simple à 5 d'entre eux: 'Salam, votre travail est vraiment beau. Vous collaborez avec des monteurs vidéo?' Quand ils répondent, ENSUITE présentez ce que vous offrez.",
            ar: "ابحث عن 10 مصوري زفاف على Instagram في مدينتك. انظر لملفاتهم — أغلبهم لن يقدموا فيديو. هذه فرصتك. أرسل DM بسيطاً لـ5 منهم: 'سلام، شغلك جميل جداً. تتعاون مع محرري فيديو؟' عندما يردون، حينها قدّم ما تعرضه.",
            en: "Find 10 wedding photographers on Instagram in your city. Look at their profiles — most won't offer video. That's your opening. Send a simple DM to 5 of them: 'Salam, your work is really beautiful. Do you collaborate with video editors?' When they respond, THEN present what you offer."
          },
          exercise: {
            fr: "Créez votre showreel de montage vidéo (60–90 secondes): compilez vos meilleurs clips de tous les exercices de ce cours. Ajoutez des overlays de texte montrant le type de projet et votre nom. Ajoutez de la musique énergique. Exportez en 1080p. C'est le premier lien que vous partagez avec chaque client potentiel.",
            ar: "أنشئ showreel مونتاجك الفيديو (60–90 ثانية): اجمع أفضل كليباتك من جميع تمارين هذا الكورس. أضف overlays نصية تظهر نوع المشروع واسمك. أضف موسيقى نشيطة. صدّر بـ1080p. هذا أول رابط تشاركه مع كل عميل محتمل.",
            en: "Create your video editing showreel (60–90 seconds): compile your best clips from all exercises in this course. Add text overlays showing project type and your name. Add energetic music. Export at 1080p. This is the first link you share with every potential client."
          },
          tip: {
            fr: "💡 Facturez par projet, pas par heure pour le montage vidéo. Les clients n'ont pas besoin de savoir que ça vous a pris 6 heures. Ils paient pour le résultat. Plus vous devenez rapide, plus votre taux horaire effectif augmente sans changer votre prix par projet.",
            ar: "💡 احشد بالمشروع، ليس بالساعة للمونتاج. الزبائن لا يحتاجون معرفة أن المهمة استغرقت 6 ساعات. يدفعون مقابل النتيجة. كلما أصبحت أسرع، زاد معدل ساعتك الفعلي دون تغيير سعر المشروع.",
            en: "💡 Price per project, not per hour for video editing. Clients don't need to know it took 6 hours. They pay for the result. The faster you get, the higher your effective hourly rate without changing your project price."
          }
        }
      ]
    },
    {
      name: { fr: "Maître", ar: "محترف", en: "Master" },
      badge: "👑",
      duration: { fr: "Mois 6+", ar: "الشهر 6+", en: "Month 6+" },
      goal: {
        fr: "Produire des publicités commerciales, construire une société de production",
        ar: "إنتاج إعلانات تجارية، بناء شركة إنتاج",
        en: "Produce commercial videos, build a production company"
      },
      lessons: [
        {
          id: "video-m-1",
          title: {
            fr: "Produire et Monter une Publicité Commerciale",
            ar: "إنتاج ومونتاج إعلان تجاري",
            en: "Produce and Edit a Commercial Advertisement"
          },
          image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
          layout: "top",
          steps: {
            fr: [
              "Structure pub 30–60 secondes: 0–5s: Problème ou tension (montrez la douleur). 5–20s: Introduction de la solution (montrez le produit). 20–28s: Transformation et bénéfice (montrez la personne après). 28–30s: Appel à l'action (logo + slogan + où acheter).",
              "Pré-production: Brief client → script → storyboard (dessinez chaque plan sur papier) → liste de plans → repérage → talent → liste accessoires → planning journée tournage.",
              "Coordination sur le plateau: dirigez le talent — dites-leur exactement quoi faire, quoi ressentir. Minimum 3 prises de chaque plan. Variez les angles: large, moyen, gros plan. Ne quittez jamais le lieu sans tous les plans de votre liste.",
              "Ordre post-production: montage image (montage brut) → sound design (voix off, musique, effets) → étalonnage (correspondance aux couleurs de la marque) → graphiques (révélations logo, titres, carte de fin) → révision finale avec client → export en plusieurs formats.",
              "Enregistrement voix off: une voix off professionnelle en darija algérien ou français augmente considérablement la conversion. Trouvez des artistes voix off dans les groupes Facebook (cherchez 'voix off algérie') ou enregistrez vous-même dans une pièce calme, puis améliorez avec Adobe Podcast.",
              "Tarification pub: commercial réseaux sociaux 30s (tournage + montage) = 40–120K. Pub TV = 150–500K. Montage uniquement (métrage fourni par client) = divisez ces prix par 3. (DZD)"
            ],
            ar: [
              "هيكل الإعلان 30–60 ثانية: 0–5 ث: مشكلة أو توتر (أظهر الألم). 5–20 ث: تقديم الحل (أظهر المنتج). 20–28 ث: التحول والفائدة (أظهر الشخص بعد ذلك). 28–30 ث: دعوة للعمل (شعار + شعار الشركة + أين تشتري).",
              "ما قبل الإنتاج: بريف الزبون → سكريبت → storyboard (ارسم كل لقطة على الورق) → قائمة اللقطات → استكشاف المواقع → الممثلون → قائمة الإكسسوار → جدول يوم التصوير.",
              "التنسيق في الموقع: وجه الممثلين — أخبرهم بالضبط ماذا يفعلون، كيف يشعرون. 3 تسجيلات على الأقل لكل لقطة. تنويع الزوايا: واسع، متوسط، مقرّب. لا تغادر الموقع أبداً بدون كل لقطات قائمتك.",
              "ترتيب ما بعد الإنتاج: مونتاج الصورة (مونتاج خشن) → تصميم صوتي (صوت تعليقي، موسيقى، مؤثرات) → تصحيح ألوان (مطابقة ألوان العلامة) → جرافيك (كشف شعار، عناوين، بطاقة نهاية) → مراجعة نهائية مع الزبون → تصدير بصيغ متعددة.",
              "تسجيل الصوت التعليقي: صوت تعليقي احترافي بالدارجة الجزائرية أو الفرنسية يزيد التحويل بشكل كبير. ابحث عن فنانين صوتيين في مجموعات Facebook (ابحث عن 'voix off algérie') أو سجّل بنفسك في غرفة هادئة ثم حسّن بـAdobe Podcast.",
              "تسعير الإعلانات: إعلان سوشيال ميديا 30 ث (تصوير + مونتاج) = 40–120K. إعلان تلفزيوني = 150–500K. مونتاج فقط (لقطات يوفرها الزبون) = اقسم هذه الأسعار على 3. (دج)"
            ],
            en: [
              "Ad structure 30–60 seconds: 0–5s: Problem or tension (show the pain). 5–20s: Introduction of solution (show the product). 20–28s: Transformation and benefit (show person after). 28–30s: Call to action (logo + tagline + where to buy).",
              "Pre-production: Client brief → script → storyboard (draw every shot on paper) → shot list → location scouting → talent → props list → shooting day schedule.",
              "On-set coordination: direct talent — tell them exactly what to do, how to feel. Minimum 3 takes of every shot. Vary angles: wide, medium, close-up. Never leave the location without all shots on your list.",
              "Post-production order: picture edit (rough cut) → sound design (voiceover, music, effects) → color grading (match brand colors) → graphics (logo reveals, titles, end card) → final review with client → export in multiple formats.",
              "Voiceover recording: a professional voiceover in Algerian Darija or French dramatically increases conversion. Find voiceover artists in Facebook groups (search 'voix off algérie') or record yourself in a quiet room then enhance with Adobe Podcast.",
              "Commercial pricing: 30s social media commercial (filming + editing) = 40–120K. TV commercial = 150–500K. Editing only (footage provided by client) = divide these by 3. (DZD)"
            ]
          },
          method: {
            fr: "Créez votre premier pub de démonstration: choisissez n'importe quel vrai produit local que vous utilisez. Écrivez un script de 30 secondes. Storyboardez-le. Filmez-le vous-même. Montez-le professionnellement. Publiez sur Instagram en taguant la marque. Cette approche a littéralement conduit des monteurs vidéo à être embauchés par les marques qu'ils ont taguées.",
            ar: "أنشئ أول إعلانك التجريبي: اختار أي منتج محلي حقيقي تستخدمه. اكتب سكريبت 30 ثانية. أنشئ storyboard. صوّره بنفسك. عدّله احترافياً. انشر على Instagram مع وضع علامة للعلامة. هذا النهج أفضى فعلياً لتوظيف محرري فيديو من قِبل العلامات التي وضعوا لها علامة.",
            en: "Create your first spec commercial: pick any real local product you use. Write a 30-second script. Storyboard it. Film it yourself. Edit it professionally. Post on Instagram tagging the brand. This approach has literally gotten video editors hired by the brands they tagged."
          },
          exercise: {
            fr: "Scénarisez, storyboardez, filmez et montez un commercial complet de 30 secondes pour la marque fictive 'Sahara Fresh' — marque de jus bio algérienne. Filmez dans un lieu propre. Gradez avec des couleurs vibrantes et saines. Ajoutez musique de fond et voix off. Exportez 2 versions: horizontal (YouTube) et vertical (Reels).",
            ar: "أنشئ سيناريو، storyboard، صوّر وعدّل إعلاناً تجارياً كاملاً مدته 30 ثانية للعلامة الوهمية 'Sahara Fresh' — علامة عصير عضوي جزائرية. صوّر في موقع نظيف. صحّح الألوان بألوان نابضة وصحية. أضف موسيقى خلفية وصوت تعليقي. صدّر نسختين: أفقية (YouTube) وعمودية (Reels).",
            en: "Script, storyboard, film and edit a complete 30-second commercial for fictional brand 'Sahara Fresh' — an Algerian organic juice brand. Film in a clean location. Grade with vibrant healthy colors. Add background music and voiceover. Export 2 versions: horizontal (YouTube) and vertical (Reels)."
          },
          tip: {
            fr: "💡 Le monteur commercial qui comprend la stratégie — pourquoi certains plans fonctionnent, quelles émotions conduisent les décisions d'achat — gagne 3× plus que celui qui ne connaît que le logiciel. Étudiez la psychologie publicitaire parallèlement à vos compétences techniques.",
            ar: "💡 محرر الإعلانات الذي يفهم الاستراتيجية — لماذا تنجح لقطات معينة، أي مشاعر تقود قرارات الشراء — يكسب 3 أضعاف من يعرف البرنامج فقط. ادرس علم نفس الإعلان جنباً إلى جنب مع مهاراتك التقنية.",
            en: "💡 The commercial editor who understands strategy — why certain shots work, what emotions drive purchase decisions — earns 3× more than one who only knows the software. Study advertising psychology alongside your technical skills."
          }
        }
      ]
    }
  ]
};
