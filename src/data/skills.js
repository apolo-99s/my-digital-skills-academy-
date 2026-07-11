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
// LevelTabs.jsx
// Responsibility: display level tabs + level info
// Used by: Academy.jsx (skill view)
// ─────────────────────────────────────────────

const LEVEL_STYLES = {
  Beginner:     { bg: "#052E16", border: "#16A34A", text: "#4ADE80" },
  Intermediate: { bg: "#1E3A5F", border: "#2563EB", text: "#60A5FA" },
  Advanced:     { bg: "#450A0A", border: "#DC2626", text: "#F87171" },
  Master:       { bg: "#431407", border: "#EA580C", text: "#FB923C" },
};

// Map any language name back to the English key for style lookup
function getLevelKey(name) {
  const map = {
    // French
    "Débutant": "Beginner",
    "Intermédiaire": "Intermediate",
    "Avancé": "Advanced",
    "Maître": "Master",
    // Arabic
    "مبتدئ": "Beginner",
    "متوسط": "Intermediate",
    "متقدم": "Advanced",
    "محترف": "Master",
    // English (passthrough)
    "Beginner": "Beginner",
    "Intermediate": "Intermediate",
    "Advanced": "Advanced",
    "Master": "Master",
  };
  return map[name] || "Beginner";
}

export default function LevelTabs({
  skill,
  language,
  activeLevelIdx,
  onSelectLevel,
  t,
}) {
  const isAr = language === "ar";
  const level = skill.levels[activeLevelIdx];
  const levelName = level.name[language];
  const key = getLevelKey(levelName);
  const ls = LEVEL_STYLES[key];

  return (
    <div style={{ direction: isAr ? "rtl" : "ltr" }}>

      {/* Tabs */}
      <div style={{
        display: "flex",
        gap: 8,
        marginBottom: 24,
        flexWrap: "wrap",
      }}>
        {skill.levels.map((l, i) => {
          const lName = l.name[language];
          const lKey = getLevelKey(lName);
          const lStyle = LEVEL_STYLES[lKey];
          const active = activeLevelIdx === i;
          return (
            <button
              key={i}
              onClick={() => onSelectLevel(i)}
              style={{
                background: active ? lStyle.bg : "transparent",
                border: `2px solid ${active ? lStyle.border : "#1C1C28"}`,
                borderRadius: 10,
                padding: "9px 16px",
                cursor: "pointer",
                color: active ? lStyle.text : "#4B5563",
                fontWeight: active ? 700 : 400,
                fontSize: 13,
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "all 0.15s",
              }}
            >
              {l.badge} {lName}
            </button>
          );
        })}
      </div>

      {/* Level info card */}
      <div style={{
        background: ls.bg,
        border: `1px solid ${ls.border}40`,
        borderRadius: 12,
        padding: 20,
        marginBottom: 24,
      }}>
        <div style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          marginBottom: 10,
        }}>
          <span style={{ fontSize: 30 }}>{level.badge}</span>
          <div>
            <div style={{
              fontSize: 20,
              fontWeight: 800,
              color: "#fff",
            }}>
              {levelName}
            </div>
            <div style={{ fontSize: 12, color: "#4B5563" }}>
              {level.duration[language]}
            </div>
          </div>
          <div style={{
            marginLeft: isAr ? 0 : "auto",
            marginRight: isAr ? "auto" : 0,
            background: "#00000030",
            borderRadius: 8,
            padding: "8px 14px",
            textAlign: "center",
          }}>
            <div style={{
              fontSize: 22,
              fontWeight: 800,
              color: ls.text,
            }}>
              {level.lessons.length}
            </div>
            <div style={{ fontSize: 10, color: "#4B5563" }}>
              {t.lessons}
            </div>
          </div>
        </div>
        <p style={{ color: "#6B7280", fontSize: 13, margin: 0 }}>
          <strong style={{ color: "#9CA3AF" }}>{t.goal}:</strong>{" "}
          {level.goal[language]}
        </p>
      </div>
    </div>
  );
}
// ─────────────────────────────────────────────
// LessonCard.jsx
// Responsibility: single lesson row in skill view
// Used by: Academy.jsx (skill view)
// ─────────────────────────────────────────────

export default function LessonCard({
  lesson,
  index,
  language,
  skill,
  onClick,
}) {
  const isAr = language === "ar";

  return (
    <div
      onClick={onClick}
      style={{
        background: "#0D0D14",
        border: "1px solid #1C1C28",
        borderRadius: 12,
        padding: "18px 20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 14,
        transition: "all 0.15s",
        direction: isAr ? "rtl" : "ltr",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = skill.color + "66";
        e.currentTarget.style.background = "#111118";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#1C1C28";
        e.currentTarget.style.background = "#0D0D14";
      }}
    >
      {/* Number badge */}
      <span style={{
        width: 32,
        height: 32,
        background: skill.color + "22",
        border: `1px solid ${skill.color}44`,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        color: skill.accent,
        fontWeight: 700,
        flexShrink: 0,
      }}>
        {index + 1}
      </span>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <div style={{
          fontWeight: 600,
          fontSize: 15,
          color: "#E5E7EB",
          marginBottom: 3,
        }}>
          {lesson.title[language]}
        </div>
        <div style={{ fontSize: 12, color: "#4B5563" }}>
          {lesson.steps[language].length} steps · includes exercise
        </div>
      </div>

      {/* Arrow */}
      <span style={{
        color: "#374151",
        fontSize: 20,
        flexShrink: 0,
        transform: isAr ? "rotate(180deg)" : "none",
      }}>
        →
      </span>
    </// ─────────────────────────────────────────────
// EXPORT — main array used by Academy.jsx
// To add a new skill: import it above and
// add it to this array. That's it.
// ─────────────────────────────────────────────
export const skills = [graphicDesign, socialMedia, videoEditing];

