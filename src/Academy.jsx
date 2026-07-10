import { useState } from "react";

const skills = [
  {
    id: "design",
    icon: "🎨",
    color: "#7C3AED",
    accent: "#A78BFA",
    bg: "#0D0818",
    title: "Graphic Design",
    subtitle: "Visual Communication",
    tagline: "Turn ideas into visuals that sell",
    earning: "5,000 – 80,000 DZD / project",
    firstClient: "3–4 weeks",
    startTool: "Canva (free at canva.com)",
    levels: [
      {
        name: "Beginner",
        badge: "🌱",
        duration: "Weeks 1–4",
        goal: "Learn the 4 visual rules and create your first real designs in Canva",
        lessons: [
          {
            title: "How to Install & Set Up Canva",
            steps: [
              "Go to canva.com on your browser or download the Canva app on your phone from Google Play / App Store.",
              "Click 'Sign Up' and create a free account using your email or Google account.",
              "Once inside, you'll see a dashboard. At the top click 'Create a design'.",
              "You'll see size options: choose 'Instagram Post (Square)' for your first practice — it opens a blank 1080×1080px canvas.",
              "On the LEFT panel you have: Templates, Elements, Text, Background, Uploads. These are your main tools.",
              "On the TOP toolbar you see font controls, colors, position, and transparency when you click any element.",
              "Press Ctrl+Z to undo any mistake. Press Ctrl+D to duplicate any element.",
              "When done, click the purple 'Share' button top right → 'Download' → choose PNG for social media or PDF for print."
            ],
            method: "Open Canva right now and spend 20 minutes clicking every button in every panel. Don't design anything yet — just explore. Hover over each tool to read what it does. This exploration session is your real lesson.",
            exercise: "Create a plain Instagram post with just your name in big bold text and a colored background. Download it. This proves you know the full flow: open → create → edit → download.",
            tip: "💡 Canva Free gives you 250,000+ templates. You never need Canva Pro to start. Only upgrade after you have paying clients."
          },
          {
            title: "The 4 Design Rules (CARP) — With Examples",
            steps: [
              "CONTRAST: Make the most important thing the biggest or most different. If your title is white and background is light grey — nobody reads it. Fix it: make the background dark, text bright white. Or make the title 3× bigger than the subtitle.",
              "ALIGNMENT: Nothing sits randomly. Every text and image must align with something else. In Canva, turn on the grid: View → Show Rulers and Guides. Drag a guide line from the ruler and snap your elements to it.",
              "REPETITION: Use the same font, same color, same style for similar elements throughout. If your title is purple bold, ALL section titles must be purple bold — not one purple, one green, one italic.",
              "PROXIMITY: Group things that belong together, separate things that don't. A phone number and an email belong together — put them close. The logo and the contact info belong far apart.",
              "How to practice CARP: Open any Canva template. Click on each element and ask: 'Which of the 4 rules is this following?' Write your answer next to it.",
              "Open a real Algerian business flyer photo (search Google Images: 'flyer algérie restaurant'). Find 2 examples of each rule being followed or broken."
            ],
            method: "The fastest way to learn these rules is to BREAK them deliberately first, then fix them. Design a poster intentionally violating all 4 rules (random alignment, no contrast, mixed fonts, unrelated elements touching). Then redesign the same poster correctly. The comparison will make the rules unforgettable.",
            exercise: "Take any text — example: 'Restaurant El Baraka, Alger, Tel: 0555 123 456'. Design this as a business card in Canva TWICE: Version 1 = violate all 4 rules. Version 2 = follow all 4 rules perfectly. Screenshot both side by side.",
            tip: "💡 Professional designers break rules only AFTER they master them. You need 50+ designs before you earn the right to experiment."
          },
          {
            title: "Color Theory — How to Pick Colors That Work",
            steps: [
              "Go to coolors.co — this free tool generates harmonious color palettes in one click. Press the spacebar to generate a new palette. Lock colors you like by clicking the lock icon.",
              "Understand color emotions: Red = urgency, passion, food (Coca-Cola, McDonald's). Blue = trust, tech, health (Facebook, Visa, hospitals). Green = nature, organic, money. Yellow = happiness, youth, attention. Black = luxury, premium. White = clean, minimal, medical.",
              "The 60-30-10 rule: In any design, use your main color 60% (backgrounds, large areas), your secondary color 30% (titles, sections), your accent color 10% (buttons, highlights, important words only).",
              "How to extract colors from a photo: In Canva, click any image → 'Edit Photo' → 'Adjust' → use the eyedropper tool to pick a color from the image and apply it to text or shapes. This auto-creates harmony.",
              "How to check if colors work together: Go to color.adobe.com → select 'Complementary' or 'Analogous' from the dropdown → move the color wheel to your chosen base color → it shows you which colors work with it.",
              "NEVER use more than 3 colors in a single design when you're a beginner. 2 colors + 1 neutral (white, black, grey) is perfect."
            ],
            method: "Go to the Instagram pages of 5 successful Algerian brands (clothing, food, tech — anything). Screenshot their 3 most popular posts. For each post, identify: What is the main color? What emotion does it trigger? How many colors are used? Does it follow the 60-30-10 rule? Write your analysis in a notebook.",
            exercise: "Go to coolors.co, generate 5 different palettes. For each palette, name a type of Algerian business it would suit and explain WHY the colors match that business's emotion.",
            tip: "💡 The biggest beginner mistake is using too many colors. When in doubt, use black text on white, with ONE accent color. This always looks professional."
          },
          {
            title: "Typography — Choosing and Pairing Fonts",
            steps: [
              "Go to fonts.google.com — this is 100% free, 1,400+ fonts. Browse by category: Serif (has small feet = formal), Sans-serif (no feet = modern), Display (decorative = headlines only), Monospace (code-style).",
              "The pairing rule: ALWAYS use a maximum of 2 font families. Rule 1: One decorative/bold font for TITLES only. One clean readable font for BODY text. Example: 'Playfair Display' for titles + 'Lato' for body text.",
              "Font size hierarchy in any design: Main title = 36–72px. Subtitle = 18–28px. Body text = 14–16px. Fine print = 10–12px. Never break this hierarchy.",
              "How to use fonts in Canva: Click any text → click the font name at top left → search by name → select. To change size: highlight text → change number in the size box.",
              "Letter spacing: In Canva, click text → click Spacing. For UPPERCASE titles: increase letter spacing to +50 to +150 for a premium look.",
              "Fonts to avoid: Comic Sans, Papyrus, Times New Roman. These immediately make your work look amateur."
            ],
            method: "Go to fontpair.co — this website shows pre-matched font combinations. Browse 20 pairings. For each one, ask yourself: what kind of business does this suit? This trains your eye faster than any theory.",
            exercise: "In Canva, design the same business card 4 times using 4 different font combinations: Classic, Modern, Creative, Premium. Compare and write which suits a restaurant, a law firm, and a clothing boutique.",
            tip: "💡 For Arabic design use 'Cairo', 'Tajawal', or 'Noto Kufi Arabic' — professional Arabic Google Fonts, free and modern."
          },
          {
            title: "How to Design a Real Logo from Zero",
            steps: [
              "Step 1 — Brief yourself: Before touching Canva, answer on paper: What is the business name? What does it do? Who are the customers? Name 3 adjectives describing the brand.",
              "Step 2 — Research: Google 'logo + the industry'. Look at 10 competitor logos. What colors do they use? What will make YOUR logo different?",
              "Step 3 — Sketch on paper: Draw 10 rough logo concepts in 15 minutes. No erasing. Sketch fast. Circle your 2 favorites.",
              "Step 4 — Digitize in Canva: Open Canva → Create a design → Custom size 500×500px. Search Elements for icons. Combine icon + business name text. Try 3 color variations.",
              "Step 5 — The logo must work in black and white: Click your logo → Download → select Black & White filter. If it still looks good, it's a real logo.",
              "Step 6 — Deliver these files: PNG with transparent background, PNG on white, PNG on black, PDF for print."
            ],
            method: "The fastest way to learn logo design is to RE-CREATE existing logos from scratch. Take the logo of any Algerian telecom (Djezzy, Ooredoo) and try to rebuild it in Canva. You'll learn more from this than from any tutorial.",
            exercise: "Design a complete logo for 'ATLAS', a premium Algerian coffee brand targeting young professionals in Alger. Deliver 3 color variations, 1 black version, 1 white version. Write 3 sentences explaining each design choice.",
            tip: "💡 The most professional logos are the simplest. Apple is an apple. Nike is a swoosh. Resist adding more elements when something feels too simple."
          }
        ]
      },
      {
        name: "Intermediate",
        badge: "⚡",
        duration: "Weeks 5–10",
        goal: "Move from Canva to Photoshop, build real client projects",
        lessons: [
          {
            title: "How to Install & Learn Photoshop (or Free Alternative)",
            steps: [
              "FREE alternative: Go to photopea.com — runs in your browser, looks 99% identical to Photoshop, completely free, no download needed. Use this to start.",
              "The interface: Left panel = Tools (move, crop, brush, eraser, text). Right panel = Layers. Top bar = Options for selected tool. Middle = Your canvas.",
              "LAYERS are everything: Think of layers like transparent sheets stacked on top of each other. Each element lives on its own layer. You can show/hide, reorder, and edit without affecting others.",
              "How to open a photo: File → Open → select your image. Double-click the locked Background layer and press OK to unlock it.",
              "How to remove a background: Select Magic Wand tool → click background area → press Delete. For complex backgrounds: Select → Subject → Select → Modify → Expand 2px → Delete.",
              "How to add text: Press T (text tool) → click canvas → type → change font/size/color in top bar.",
              "How to save: File → Export → Export As → PNG (check Transparency for transparent background) or JPEG. Never use Save As for quality exports."
            ],
            method: "On Photopea.com: open any product photo. Remove the background. Place product on a new colored background. Add 'NEW ARRIVAL' text above and price below. This simulates a real social media ad — and you've learned 70% of what clients will pay you for.",
            exercise: "Find a photo of any Algerian traditional product. Remove background in Photopea. Place on clean white background. Add professional price tag, product name in French, and subtle shadow. Download as PNG.",
            tip: "💡 Shadow trick: right-click product layer → Blending Options → Drop Shadow → opacity 40%, distance 10px, blur 20px. Makes flat objects look real."
          },
          {
            title: "How to Do Product Photography with Just Your Phone",
            steps: [
              "Light source: Sit product near a WINDOW (not direct sunlight). Position so window is to the LEFT or RIGHT.",
              "Background: Use a plain white A3 paper sheet curved so no corner is visible. This is called an infinity sweep.",
              "Camera settings: Tap product on screen to focus. Hold finger on subject to lock focus and exposure.",
              "Rule of thirds: Enable Grid in camera settings. Place product at one of the 4 grid intersection points, not dead center.",
              "Take 3 types of shots: Hero shot (product centered, clean background), Detail shot (extreme close-up), Lifestyle shot (product in real context).",
              "Editing: Use Snapseed (free app). Tools → Tune Image → reduce Highlights, increase Shadows → export."
            ],
            method: "Set up a phone product shoot TODAY with any object at home. Take 15 photos varying only the angle. Edit your 3 best in Snapseed. You'll immediately see how angle and light change everything.",
            exercise: "For fictional brand 'Miel du Hoggar': shoot 5 product photos of any honey jar using these techniques. Edit them to feel premium and warm.",
            tip: "💡 A 20 DZD sheet of white paper is better than any expensive studio backdrop for 90% of small product shots."
          },
          {
            title: "How to Design a Complete Social Media Brand Kit",
            steps: [
              "A Brand Kit is a set of templates keeping a brand visually consistent: Post templates, Story templates, Highlight covers, Profile photo frame.",
              "Step 1: Create a new Canva folder called 'Client Name — Brand Kit'.",
              "Step 2: Define the system: Create 5 color rectangles showing Primary, Secondary, Accent, Neutral, Background colors with hex codes.",
              "Step 3: Create Post Templates (1080×1080). Build first layout. Duplicate it. Change ONLY content (text, image) but keep layout, fonts, colors identical.",
              "Step 4: Create 6 post types: Quote post, Product showcase, Tip/educational, Promotional offer, Behind the scenes, Testimonial.",
              "Step 5: Create Story templates (1080×1920). Same fonts and colors. Add poll sticker area, question box, swipe-up CTA at bottom.",
              "Step 6: Export as PNG AND share the Canva file link so client can edit text themselves."
            ],
            method: "Go to Instagram, find any successful Algerian brand. Screenshot 9 posts. Count: How many fonts? How many colors? Most professional brands use IDENTICAL layouts — just swap image and text. Your job is to BUILD that system.",
            exercise: "Create a 6-template brand kit for 'DZ Organic' — an organic food brand in Algiers targeting health-conscious young women. Deliver color palette card, 6 post templates, 2 story templates.",
            tip: "💡 Also deliver a 1-page PDF showing fonts, colors, and what NOT to do. This prevents clients from ruining the brand you built."
          },
          {
            title: "How to Build a Portfolio That Gets Clients",
            steps: [
              "Rule: You need 10 portfolio pieces BEFORE approaching a single client. They must look like real businesses, not school projects.",
              "Step 1: Create 5 fictional clients (restaurant, clothing boutique, pharmacy, delivery service, café). Invent brand names.",
              "Step 2: For each fictional client create: 1 logo + 1 business card + 3 social media posts = 15 pieces minimum.",
              "Step 3: Create a Behance account (behance.net — free). For each project: Cover image, Brief, Process (show sketches), Final result.",
              "Step 4: The mockup trick: Never show a logo on plain white. Show it on a business card, t-shirt, coffee cup. Go to freepik.com → search 'free mockups' → download PSD → open in Photopea → paste your logo.",
              "Step 5: Create a separate Instagram account for your design work. Post 1 project per day for 10 days.",
              "Step 6: After each free project, ask the owner for a 2-sentence testimonial. Nothing sells better than a real business owner's words."
            ],
            method: "Open Behance now, create your account, complete your profile photo and bio: 'Graphic Designer based in [city], specializing in brand identity for local businesses'. An incomplete profile loses clients before they see your work.",
            exercise: "Create your first Behance case study for the ATLAS Coffee logo. Include: cover image, logo in 3 color versions, business card mockup, 3 sentences explaining your decisions. Publish publicly.",
            tip: "💡 A portfolio with 10 well-presented fictional projects beats 3 real projects shown poorly. Presentation IS the skill."
          }
        ]
      },
      {
        name: "Advanced",
        badge: "🔥",
        duration: "Weeks 11–20",
        goal: "Master Illustrator, deliver full brand identities, set professional rates",
        lessons: [
          {
            title: "How to Learn Adobe Illustrator (Vectors)",
            steps: [
              "Download Inkscape (inkscape.org) — 100% free, professional, very similar to Illustrator.",
              "Key difference from Photoshop: Illustrator creates VECTOR graphics. A vector logo scales from business card to 10-meter billboard with ZERO quality loss.",
              "The Pen Tool (P): Click to create straight corner points. Click and DRAG to create smooth curves. Click first point again to close the shape. Practice drawing a simple leaf outline.",
              "How to trace a logo: Open image → File → Place to import. Lock that layer. Create new layer above. Use Pen Tool to trace every shape. Delete original image layer. You now have a clean vector.",
              "Pathfinder operations (Window → Pathfinder): Unite (merge shapes), Minus Front (subtract top from bottom), Intersect (keep only overlap). These 3 create 90% of all logo shapes.",
              "Colors: Select shape → click Fill color square → enter hex code. For gradients: Gradient tool (G) → drag across shape."
            ],
            method: "Pen tool exercise: print any simple logo (3–5 shapes). Trace every shape using ONLY the pen tool in Inkscape. Do this for 5 logos over one week. Your control will reach professional level.",
            exercise: "In Inkscape, recreate the Ooredoo or Djezzy logo from scratch using only Pen Tool and Pathfinder. Compare to original. Correct where shapes don't match.",
            tip: "💡 If a client shows you their logo as JPEG, offer to redraw it as vector immediately. Charge 3,000–8,000 DZD for this service — it takes 30–90 minutes."
          },
          {
            title: "How to Create a Full Brand Identity System",
            steps: [
              "A Brand Identity deliverables list: Primary logo, Secondary logo (horizontal), Icon only, Color palette with hex codes, Typography guide, Business card, Letterhead, Social media templates, Brand guideline PDF.",
              "Step 1 — Discovery session: Ask client: Who are your customers? Who are 3 competitors? What 3 words describe your brand? What brands do you admire?",
              "Step 2 — Moodboard: Go to Pinterest. Create a board. Pin 20–30 images matching the brand's feeling. Share with client BEFORE designing. Get approval on direction.",
              "Step 3 — Logo design (3 concepts): Create 3 very different directions. Present on mockups. Explain rationale. Let client choose 1 for refinement.",
              "Step 4 — System development: Once logo approved, build all other elements. Everything must feel from the same visual world.",
              "Step 5 — Brand Guideline PDF (8–15 pages): Logo correct uses, wrong uses, color codes (hex/CMYK/RGB), typography rules, photography style, tone of voice.",
              "Pricing for full brand identity in Algeria: 35,000–120,000 DZD depending on experience and client size."
            ],
            method: "Before charging for a full identity, complete one full project for a real local business for free. Post the ENTIRE process on social media. This one documented project will bring 3–5 paying clients through referral.",
            exercise: "Create full brand identity for 'Baya', a young Algerian women's clothing boutique. Deliver: Logo (3 versions), Color palette, Typography guide, Business card mockup, 3 Instagram templates, 5-page mini brand guide PDF.",
            tip: "💡 The Brand Guideline PDF separates a freelancer from an agency. A freelancer delivers a logo. An agency delivers a complete system with instructions. The second charges 5× more."
          },
          {
            title: "How to Set Prices and Handle Clients Professionally",
            steps: [
              "Pricing formula: Estimate hours × hourly rate + 20% complexity buffer. Start hourly rate at 800–1,200 DZD/hour.",
              "Standard Algeria prices: Logo 8,000–20,000 DZD. Brand identity full 35,000–80,000 DZD. Social media monthly 15,000–35,000 DZD. Business card 3,000–6,000 DZD. Flyer 4,000–8,000 DZD.",
              "Payment terms: ALWAYS take 50% upfront. Say: 'Mon processus inclut 50% d'avance au démarrage et 50% à la livraison.' If they refuse deposit — do NOT start.",
              "Revisions policy: Include 2 rounds in your price. If client wants more, charge 1,500–3,000 DZD per additional round. State this in writing at the start.",
              "How to write a proposal: Client name + project description + deliverables + timeline + price breakdown + payment terms + signature. Send as PDF.",
              "Handling negotiation: If they say 'c'est trop cher' — ask 'Quel est votre budget?' Offer to reduce scope instead of price. If budget is insultingly low, politely decline."
            ],
            method: "Create your pricing menu today as a PDF in Canva. List every service with price ranges. Having it written makes you 10× more confident when asked 'combien ça coûte?'",
            exercise: "Write a full proposal PDF for a fictional logo + brand identity project for 'Pharmacie Al Shifa, Oran'. Include: project description, deliverables, 3-week timeline, pricing breakdown, payment terms. Design professionally in Canva.",
            tip: "💡 Saying your price confidently without hesitating is a skill. Practice saying your prices out loud 10 times until you can state them calmly and without apology."
          }
        ]
      },
      {
        name: "Master",
        badge: "👑",
        duration: "Month 6+",
        goal: "Run a design agency, hire juniors, work with advertising agencies",
        lessons: [
          {
            title: "How to Transition From Freelancer to Agency",
            steps: [
              "The moment to start an agency: When you consistently have more work than you can handle AND you're turning down projects. Not before.",
              "Step 1 — Find your first collaborator: Your best student from any workshop, or a talented designer you met online. Start project-based (pay per project, no salary yet).",
              "Step 2 — Define roles: You handle client acquisition, proposals, project management, quality check. They handle execution. You charge full rate, pay collaborator 40–50%.",
              "Step 3 — Create your agency brand: Name, logo, Instagram, simple website (Carrd.co — free, 30 minutes to build).",
              "Step 4 — Develop retainer packages: Starter (12 posts + 1 logo/month = 25,000 DZD/month), Growth (20 posts + brand kit + ads = 55,000 DZD/month), Premium (unlimited = 100,000+ DZD/month).",
              "Step 5 — Target agencies: Advertising agencies need design subcontractors constantly. One agency client = equivalent of 10 individual clients."
            ],
            method: "Do a fake pitch: find a local business with bad design. Create an unsolicited redesign — redo their logo and 3 Instagram posts — and send it with: 'I redesigned your brand for free to show what's possible. If you'd like to apply this fully, I'd love to discuss.' This converts to paying clients at an extremely high rate.",
            exercise: "Identify 3 real Algerian businesses with weak visual identities. Create unsolicited redesign for ONE (logo + 2 posts). Write a professional cold outreach message. Publish the redesign on your portfolio as a concept project.",
            tip: "💡 Fastest growth strategy: specialize in ONE industry. Become 'the agency for restaurants in Alger'. Specialists always charge more than   {
    id: "smm",
    icon: "📱",
    color: "#059669",
    accent: "#34D399",
    bg: "#021A12",
    title: "Social Media Management",
    subtitle: "Digital Marketing",
    tagline: "Help businesses grow their audience & sell online",
    earning: "15,000 – 60,000 DZD / month per client",
    firstClient: "2–3 weeks",
    startTool: "Meta Business Suite (free) + Canva",
    levels: [
      {
        name: "Beginner",
        badge: "🌱",
        duration: "Weeks 1–3",
        goal: "Understand how algorithms work and create your first content strategy",
        lessons: [
          {
            title: "How to Set Up a Professional Instagram & Facebook Business Account",
            steps: [
              "Instagram: Go to your profile → tap 3 lines top right → Settings → Account → Switch to Professional Account → select Business → choose category → connect to a Facebook Page.",
              "Facebook: Go to facebook.com/pages/create → Business or Brand → enter name and category → add profile photo (180×180px) → add cover photo (820×312px) → click Edit Page Info and fill in EVERY field: address, phone, website, hours, description.",
              "Meta Business Suite: Go to business.facebook.com → Create Account → connect your Facebook Page and Instagram → this single dashboard manages BOTH platforms. Use for: scheduling posts, reading messages, checking analytics.",
              "Connect WhatsApp Business: Download WhatsApp Business app → use business phone number → link it in Facebook Page settings under WhatsApp. Now all ads can have a WhatsApp CTA — crucial for Algeria.",
              "Complete the profile 100%: Add profile photo, bio (80 characters max, include keywords), link in bio (use Linktree.com for multiple links — free), location, contact button.",
              "Create a content folder: On phone, create folder called 'Client Content'. Inside: subfolders for Photos, Videos, Captions, Approved Posts. Never search through your camera roll for content."
            ],
            method: "Set up a practice test account on Instagram using a new email. Call it something like 'DZFoodTestAccount'. This is your sandbox to test every strategy before applying to a real client. Test every lesson here first.",
            exercise: "Set up a complete business profile for a fictional local restaurant on both Instagram and Facebook. Connect both to Meta Business Suite. Fill in every single field. Screenshot the 100% complete profile as proof.",
            tip: "💡 The most important link on Instagram is link in bio. Use linktr.ee to create a free page with multiple buttons: WhatsApp, Facebook, Menu PDF, Google Maps."
          },
          {
            title: "How the Instagram Algorithm Works in 2025",
            steps: [
              "The algorithm has ONE job: keep people on the app as long as possible. It shows each user content they are most likely to engage with. Your job is to trigger that engagement.",
              "The 5 signals ranked by importance: 1. SAVES — most powerful signal. Someone saves = they think it's worth keeping. Make every post saveable. 2. SHARES — someone sends your post to a friend. Expands reach beyond followers. 3. COMMENTS — real conversations. 10+ word comments are a strong signal. 4. LIKES — weakest signal but still counts. 5. WATCH TIME for Reels — how long people watch.",
              "How to engineer saves: End every educational post with 'Sauvegardez ce post pour y revenir ✅'. Tips, numbered lists, step-by-step guides get saved more than opinion posts.",
              "How to engineer comments: Ask a genuine specific question at end of every caption. Not 'What do you think?' but 'Entre tajine et couscous, vous choisissez quoi ce week-end? 👇'",
              "How to read Instagram Insights: Go to any post → tap View Insights. You'll see: Accounts reached, Impressions, Interactions. For Reels: Average watch time and Completion rate. Track weekly in a Google Sheet.",
              "Optimal posting times for Algeria: 12:00–13:30 (lunch break), 18:00–20:00 (after work), 21:00–23:00 (evening). Check your specific audience under Instagram Insights → Audience → Most Active Times."
            ],
            method: "Algorithm Audit: Go to your personal Instagram. Look at last 20 posts from accounts you follow that got high engagement. For each: Was there a question in the caption? A save CTA? Was it informative, funny, or controversial? Write the pattern you notice. This analysis beats 10 hours of theory.",
            exercise: "On your practice account: publish 3 posts over 3 days. Post 1: simple photo, no CTA. Post 2: informative carousel with 'Sauvegardez ✅'. Post 3: photo with direct easy question. After 48 hours compare Insights for all 3. Document findings.",
            tip: "💡 Instagram suppresses posts with external links in the CAPTION. Never put links in captions. Always say 'lien en bio' and put the link in your profile."
          },
          {
            title: "How to Create a Content Strategy from Zero",
            steps: [
              "Step 1 — Define audience persona: Write a paragraph describing the EXACT person who should see this content. Example: 'Fatima, 28 ans, Alger, travaille comme comptable, suit des pages de mode et cuisine, utilise Instagram le soir, cherche des produits locaux de qualité.' Everything you post targets Fatima specifically.",
              "Step 2 — Define 4 Content Pillars: The 4 main topics the brand posts about. Every post fits one pillar. Example for clothing boutique: Pillar 1 = New arrivals, Pillar 2 = Style tips, Pillar 3 = Behind the scenes, Pillar 4 = Customer stories.",
              "Step 3 — Define content formats: For each pillar decide formats. Products → Photos + short Reels. Tips → Carousel posts. Behind scenes → Stories + casual Reels. Testimonials → Story screenshots + graphic posts.",
              "Step 4 — Create posting schedule: Start with 4 posts/week for Instagram + 3 for Facebook. Example: Monday → Product, Wednesday → Tip carousel, Friday → Behind scenes Reel, Sunday → Customer story.",
              "Step 5 — Hashtag strategy: Use 8–15 hashtags per post. Mix: 3 large (1M+ posts), 5 medium (10K–500K), 5 small niche (under 10K). Small hashtags have less competition — your post can rank #1.",
              "Step 6 — Caption formula: Line 1 = HOOK. Lines 2–5 = VALUE. Last line = CALL TO ACTION. Break text into short paragraphs. Long unbroken paragraphs are never read on mobile."
            ],
            method: "Content strategy shortcut: Go to Instagram of 3 most successful businesses in your target niche in Algeria. Look at their top 12 posts. Write down the FORMAT and TOPIC of each. This tells you what the Algerian audience already responds to. Build your pillars around what's already working.",
            exercise: "Create a complete written content strategy for a fictional Algerian online clothing brand. Must include: 1 audience persona (full paragraph), 4 content pillars with descriptions, 1-month posting calendar (16 posts with day, pillar, format, and caption topic for each), hashtag lists for each pillar.",
            tip: "💡 Content in DARIJA consistently gets 2–3× more comments than French on the same topic. Use Darija for relatable and emotional content. Use French for professional or informational content."
          },
          {
            title: "How to Write Captions That Stop the Scroll",
            steps: [
              "The HOOK is the first 125 characters visible before See More. The 5 most powerful hook types: Question ('Vous faites encore cette erreur avec votre routine?'), Bold statement ('La majorité des restaurants algériens perdent des clients à cause d'une seule chose.'), Number ('5 astuces pour doubler vos ventes en 30 jours.'), Controversy ('On n'est pas d'accord avec la plupart des experts.'), Story ('Il y a 2 ans, notre boutique était au bord de la fermeture...').",
              "The VALUE section: Deliver on the promise of the hook. If you asked a question, answer it. If you said 5 tips, list them with numbers and line breaks. Never write filler content.",
              "The CTA: End with ONE specific action. 'Dites-nous en commentaire' → drives comments. 'Partagez avec quelqu'un' → drives shares. 'Sauvegardez pour ne pas oublier' → drives saves. 'Lien en bio pour commander' → drives traffic. Never use more than one CTA per post.",
              "Emojis: Use as visual bullets and line separators. Example: '✅ Astuce 1:...' is easier to read than plain text. Limit to 2–3 types per post.",
              "Language mixing: Highly effective in Algeria. Mix French and Darija in same caption. Example: 'Ce produit 💯 chkhitar barakAllah fikum 🙏 — livraison gratuite pour toute commande +3000 DZD.'",
              "Caption length: Short (1–3 lines) for strong visual posts. Long (200–300 words) for educational and storytelling. Medium (5–8 lines) for product posts."
            ],
            method: "Swipe file exercise: Create a notes document called 'Great Captions'. For 7 days, whenever a caption makes YOU stop scrolling — copy it into the document. After 7 days you'll have 20+ examples. Analyze what they have in common. These patterns become your writing formula.",
            exercise: "Write 10 different captions for the same product: a traditional Algerian handmade candle. Each must use a different hook type. Write 5 in French, 5 mixing Darija and French. Include hashtags and CTA for each. Pick your 3 strongest and explain why.",
            tip: "💡 Carousel posts that end with a summary or checklist get saved up to 5× more than single-image posts. Always offer something worth saving."
          }
        ]
      },
      {
        name: "Intermediate",
        badge: "⚡",
        duration: "Weeks 4–9",
        goal: "Create Reels, run ads, manage your first real client",
        lessons: [
          {
            title: "How to Create a Reel That Gets Real Views",
            steps: [
              "The 0.5-second rule: The first visual frame must be interesting enough to stop mid-scroll. Start with text already on screen, or start at the most interesting visual moment. NEVER start with a logo or intro screen.",
              "Script structure: Hook (0–2s): visual surprise or bold text. Setup (2–8s): context or problem. Payoff (8–20s): the valuable content. CTA (last 2s): text overlay 'Follow for more' or 'Share this'.",
              "Filming on phone for Reels: Use phone VERTICALLY (9:16). Film in well-lit area. Use back camera — sharper than front. Look at the LENS not the screen when speaking. Film each shot 3× — use best take.",
              "Editing in CapCut: New Project → add clips. Tap clip to see: Split (cut), Delete, Speed (slow-mo: 0.5×, fast: 2×). Add text: tap Text → Add Text → type → select font → drag to position. Add music: tap Audio → Sounds → search songs. Export: arrow top right → 1080p → save.",
              "Trending Audio trick: Go to Instagram Reels tab, find a Reel with trending arrow (↗) next to audio name. This audio is being pushed by the algorithm. Use it in your next Reel for extra reach.",
              "Subtitles are mandatory: 60% watch without sound. In CapCut: tap Text → Auto Captions → select language → it transcribes automatically. Style them: bold white text with black outline, center-bottom of screen."
            ],
            method: "Spend 20 minutes consciously watching Instagram Reels — not for entertainment but for study. For every Reel that keeps you watching past 5 seconds, pause and ask: What was the hook? What kept me watching? What was the pacing? Write your findings. This teaches more than 5 hours of reading.",
            exercise: "Film and edit 3 Reels: 1) A Before/After transformation Reel. 2) A '3 Tips' educational Reel. 3) A Behind the scenes Reel. Post all 3 to your practice account and compare views after 48 hours.",
            tip: "💡 Post your best Reel at 7:00 PM Algeria time. Use Meta Business Suite to schedule in advance."
          },
          {
            title: "How to Run Facebook and Instagram Ads on a Small Budget",
            steps: [
              "Go to business.facebook.com → Ads Manager → Create Campaign. Structure: Campaign (your goal) → Ad Set (your audience) → Ad (your creative).",
              "Choose objective: For Algerian businesses: Messages (people click → message you on WhatsApp — best for most businesses), Traffic (send to website), Engagement (boost likes/comments), Video Views.",
              "Audience targeting: Ad Set level → Audience → Location: type Algeria → narrow by wilaya. Age: based on product. Interests: type interests related to product. Keep audience size 200,000–1,500,000.",
              "Budget: Start with 200–500 DZD/day. Don't start with 50 DZD — too low for algorithm to learn. Run minimum 5 days before judging. Total test budget: 1,000–2,500 DZD.",
              "Creating the Ad: Use vertical video (9:16) or square image (1:1). Add text overlay with the hook. Keep primary text under 125 characters. Add WhatsApp link as CTA button. Test 2 different creatives — Facebook shows the better one more.",
              "Reading results: Track: Cost Per Result (how much each lead costs), Reach (unique people who saw it), Frequency (times same person saw it — keep below 3). If Cost Per Result too high: change creative or narrow audience."
            ],
            method: "Run your first ad with just 500 DZD on any simple campaign — even just boosting a post. The goal is not results — it's navigating the entire Ads Manager from start to finish. You learn more from doing this once than from 10 YouTube tutorials.",
            exercise: "Create a complete mock ad campaign in Ads Manager (keep in Draft status without running): Objective = Messages. Audience = Women 20–35 in Algiers interested in fashion. Budget = 300 DZD/day for 7 days. Write 2 different ad copies and describe 2 creative images. Calculate projected reach.",
            tip: "💡 The best-performing Facebook Ads in Algeria always include WhatsApp as CTA. A 'Send WhatsApp Message' button converts 3–5× better than 'Visit Website' in the Algerian market."
          },
          {
            title: "How to Build and Manage a Monthly Content Calendar",
            steps: [
              "Open Google Sheets. Create columns: Date | Day | Platform | Pillar | Content Type | Caption draft | Visual Description | Status | Results.",
              "Plan one month at a time, 2 weeks in advance. Sit down every 2 weeks for 90 minutes and fill in the next 2 weeks. This session is sacred — do not skip it.",
              "Batch creation workflow: Monday = writing day (all captions). Tuesday = design day (all visuals in Canva). Wednesday = film day (all videos/Reels). Thursday = schedule everything in Meta Business Suite. Friday = real-time stories and live content.",
              "Scheduling in Meta Business Suite: Go to business.facebook.com → Posts → Create Post → write caption → add media → click dropdown arrow next to Publish Now → Schedule Post → choose date and time. Works for Facebook AND Instagram simultaneously.",
              "Events and seasonal content: At start of every month, note: Algerian national holidays, Ramadan, Eid, back-to-school, local events. A restaurant posting Ramadan iftar specials 1 week before Ramadan gets massive organic reach.",
              "Client approval workflow: Share content calendar every 2 weeks via Google Sheets link. WhatsApp message: 'Voici le planning pour les 2 prochaines semaines. Merci de confirmer avant [date].' If no response in 48h, post anyway — state this in your contract."
            ],
            method: "Every Sunday evening: 30 minutes reviewing previous week analytics + 30 minutes planning next week content topics. After 4 weeks this takes only 15 minutes and becomes automatic.",
            exercise: "Build a complete 4-week content calendar in Google Sheets for a fictional Algerian pharmacy page. Include: 16 posts (4 per week), mix of all 4 pillars, different formats, captions drafted for each. Highlight posts tied to health awareness days.",
            tip: "💡 If you're thinking 'what should I post today?' — you've already failed at content management. The calendar is always done in advance."
          }
        ]
      },
      {
        name: "Advanced",
        badge: "🔥",
        duration: "Weeks 10–18",
        goal: "Develop full strategies, manage multiple clients, prove ROI with data",
        lessons: [
          {
            title: "How to Write a Professional Social Media Strategy Document",
            steps: [
              "A strategy document separates a freelancer who posts photos from a strategist who commands 3× higher rates.",
              "Section 1 — Audit (2 pages): Current follower count, average engagement rate (interactions ÷ reach × 100), top 5 best-performing posts with analysis, audience demographics from Insights, posting frequency and performance.",
              "Section 2 — Competitor Analysis (2 pages): 3–5 direct competitors. For each: follower count, avg engagement rate, content types, posting frequency, top performing content. Identify GAPS — what topics are they NOT covering that your client could own?",
              "Section 3 — Audience Persona (1 page): Full fictional profile of ideal customer. Name, age, city, job, income, goals, frustrations, social media habits, what influences their purchase decision.",
              "Section 4 — SMART Goals (1 page): Specific, Measurable, Achievable, Relevant, Time-bound. Example: 'Increase engagement rate from 1.2% to 4.5% within 90 days.' 'Generate 50 WhatsApp messages/month from Facebook Ads with budget of 5,000 DZD/month.'",
              "Section 5 — 90-Day Strategy (3 pages): Platform selection and rationale, Content pillars, Content mix by format (% Reels vs carousels vs photos), Posting frequency, Hashtag strategy, Paid ads strategy.",
              "Present as a designed Canva PDF. A professionally designed strategy document positions you as premium before the client sees your pricing."
            ],
            method: "Write your first strategy document for a real local business even if they haven't hired you. Do the audit and competitor analysis. Send it as a free gift: 'J'ai analysé votre présence social media et préparé cette stratégie. Si vous souhaitez que je l'applique, voici mes tarifs.' This cold outreach has an extremely high response rate because you've already delivered value.",
            exercise: "Write a complete social media strategy document (minimum 8 pages in Canva PDF) for a real or fictional Algerian business. Include all 5 sections. Present it as if in a meeting with the business owner.",
            tip: "💡 During strategy presentations never say 'I think' or 'maybe'. Say 'The data shows' and 'Based on your audience insights'. Confidence backed by data is what clients pay for."
          },
          {
            title: "How to Manage 4+ Clients Simultaneously Without Losing Quality",
            steps: [
              "Client management system: Create a free Notion account (notion.so). Create a page for each client with: brand info, content calendar, approved post bank, ad campaign tracker, monthly report template, communication log.",
              "Master Weekly Schedule: Block time by TASK type not by client. Monday 9–12 = all clients' content writing. Monday 13–17 = all clients' graphic design. Tuesday 9–12 = all video editing. Tuesday 13–17 = scheduling all posts. Wednesday = community management for all clients. Thursday = analytics and reports. Friday = client calls.",
              "Communication rules from day 1: Send every new client: 'Je réponds aux messages du lundi au vendredi entre 9h et 18h. Je vous fournis un rapport hebdomadaire chaque lundi.' Clients who text at midnight expecting instant responses will drain your energy.",
              "Monthly Report template: Summary paragraph → Metrics table (follower growth, reach, engagement rate, impressions, ad results vs previous month) → Top 3 posts with screenshots → Key learnings → Next month plan. Send as PDF every 1st of month.",
              "Quality control: Before posting ANYTHING for a client, run the 5-second test. Show the post to someone who doesn't know the brand. If they can't tell in 5 seconds what it's promoting — redesign it.",
              "Managing approval delays: State in contract: 'Le contenu est soumis pour validation 5 jours ouvrables avant publication. Sans retour sous 48h, le contenu sera publié tel quel.'"
            ],
            method: "Before taking on your 4th client, build your entire system FIRST. Spend 1 full day setting up Notion for all existing clients, creating report template, writing your weekly schedule. Trying to build systems while drowning in client work causes burnout and poor quality.",
            exercise: "Set up a Notion workspace for 3 fictional clients: a restaurant, a clothing boutique, a fitness coach. Each gets: brand info section, content calendar, ad campaign tracker, monthly report template. Share the Notion link as if sending to the client.",
            tip: "💡 Fire bad clients. A client who constantly changes direction, doesn't approve on time, or haggles every invoice is not worth keeping. One exhausting client takes energy you could use to find 2 great ones."
          }
        ]
      },
      {
        name: "Master",
        badge: "👑",
        duration: "Month 5+",
        goal: "Build a social media agency with retainer clients and a small team",
        lessons: [
          {
            title: "How to Build an SMM Agency from Scratch",
            steps: [
              "Agency vs freelancer mindset: A freelancer sells their time. An agency sells outcomes. Stop saying 'I'll post 3 times per week'. Start saying 'I'll grow your Instagram by 500+ targeted followers and generate 30+ qualified WhatsApp leads per month within 90 days or I work free until we hit it.'",
              "Build your offer around a guarantee: Most agencies give no guarantees. A results guarantee is your biggest differentiator. Define what metric you can confidently deliver. Offer to continue working free if you miss the target. You'll rarely miss it — but the offer alone closes clients.",
              "Hire your first team member: 'Community Manager — manage daily posting, comments, messages for 3–4 clients under my supervision. 3–4 hours/day. Pay: 15,000–25,000 DZD/month.' Post in Facebook groups for digital marketing in Algeria. Hire based on attitude — you can teach the tools.",
              "Pricing for agency packages: Starter (15,000 DZD/month: 12 posts + stories + report), Growth (35,000 DZD/month: 20 posts + reels + ads + report), Premium (65,000+ DZD/month: full strategy + content + ads + influencer + weekly meeting). 5 clients at Growth = 175,000 DZD/month.",
              "Client acquisition: 1) Referrals — offer 10% commission to clients who refer. 2) Cold Instagram DMs to businesses with weak social media. 3) Partnerships with designers, web developers, photographers. 4) Speaking at entrepreneurship events. 5) Publishing free content demonstrating expertise."
            ],
            method: "Case study marketing: Document ONE client success story — before metrics, what you did, after metrics 3 months later. Design as a 1-page PDF and Instagram carousel. This single piece gets you more clients than any sales pitch.",
            exercise: "Write your agency's full business model on 1 page: your niche, 3 service packages with prices, your guarantee, 3 client acquisition channels, and your 6-month revenue goal. This is your agency business plan.",
            tip: "💡 Fastest path to agency: get 1 client → deliver exceptional results → ask for 1 referral → repeat. You don't need a website or ads to start. You need 1 successful case study."
          }
        ]
      }
    ]
  },

      }
    ]
  },
  {
    id: "video",
    icon: "🎬",
    color: "#DC2626",
    accent: "#F87171",
    bg: "#1A0303",
    title: "Video Editing",
    subtitle: "Content Creation",
    tagline: "Most in-demand creative skill of the decade",
    earning: "8,000 – 80,000 DZD / project",
    firstClient: "4–6 weeks",
    startTool: "CapCut (free) → DaVinci Resolve (free)",
    levels: [
      {
        name: "Beginner",
        badge: "🌱",
        duration: "Weeks 1–4",
        goal: "Edit your first complete video using CapCut on your phone",
        lessons: [
          {
            title: "How to Install CapCut and Edit Your First Video",
            steps: [
              "Download CapCut from Google Play or App Store — completely free with no watermark on exports.",
              "Open CapCut → tap the '+' button → select videos and photos from your gallery → tap Add → your timeline opens.",
              "The timeline at the bottom: your clips appear as blocks. Tap any clip to select it (gets white border). Bottom panel shows: Split, Delete, Speed, and more tools.",
              "How to Split a clip: Drag the white vertical line (playhead) to the exact moment you want to cut → tap Split. The clip becomes 2 pieces. Select the unwanted part → tap Delete.",
              "How to add music: Tap Audio in bottom bar → Sounds → search for a song → tap + to add to timeline. Select the audio track → Volume → lower to about 30% if you have dialogue.",
              "How to add text: Tap Text → Add Text → type → choose font and color → drag text box to position on screen. Tap the text clip on timeline to change when it appears and for how long.",
              "How to export: Tap arrow icon top right → select 1080p resolution and 30fps → tap export button → saves to gallery. For Reels: vertical 9:16. For YouTube: horizontal 16:9."
            ],
            method: "Film exactly 10 short clips of anything — your hand, the street, a cup of coffee, a wall. Import all 10 into CapCut. Cut them to keep only the best 3 seconds of each. Add background music. Export. Watch it back and notice what looks good and what looks awkward. That self-critique IS the learning.",
            exercise: "Create a 60-second video about your day using only clips filmed today. Must include: minimum 8 different clips, background music, your name as text at the beginning, and a simple title at the end. Export and watch it. Note every moment that feels off — these are your next lessons.",
            tip: "💡 Most common beginner mistake: clips that are too long. Every clip in a social media video should be 1.5–4 seconds maximum. When in doubt, cut earlier. Fast pacing always feels more professional."
          },
          {
            title: "How to Cut on the Beat — Music-Driven Editing",
            steps: [
              "Beat-synced editing means: every time you cut from one clip to the next, it happens EXACTLY when the music has a drum hit or bass drop. This creates a hypnotic feel that makes videos addictive to watch.",
              "Step 1 — Choose your music first: Before adding clips, add your music track to the timeline. Listen through the whole song once.",
              "Step 2 — Mark the beats: In CapCut, play your audio and tap Beats to auto-detect beats — it adds markers automatically. If your version doesn't have this: play audio and tap the screen on each beat — CapCut adds a marker each time.",
              "Step 3 — Trim clips to match: Place your clips in timeline and TRIM each clip to end exactly where a beat marker falls. The transition happens on the beat.",
              "Step 4 — Verify: Play the whole video while CLOSING YOUR EYES and just listening. Every time you feel a beat, open your eyes for a split second. If there's a cut at that moment — good. If not — adjust.",
              "For very fast songs: cut every 1–2 beats. For slow emotional songs: cut every 4–8 beats. For dramatic build-ups: hold on one clip through the build, then cut at the peak."
            ],
            method: "Take any music track you like and film 30 random clips of anything (2–3 seconds each). Then do ONLY beat-synced editing — don't try to make clips tell a story. Just focus on making every single cut land on a beat. Watch the result. Even random footage looks impressive with perfect beat-sync.",
            exercise: "Create a 45-second beat-synced montage using footage of your city or neighborhood (film outside for 30 minutes — get minimum 20 clips). Use a trending song. Every single cut must land on a beat. Export and share to your practice account. This is a real portfolio piece.",
            tip: "💡 CapCut's Auto Beat Sync feature under Audio → Beats automatically places cuts on song beats. Use this as training wheels to see where beats fall, then learn to feel it yourself."
          },
          {
            title: "How to Color Grade a Video (Make it Look Cinematic)",
            steps: [
              "Color grading has 2 stages: Correction (fix technical problems) → Creative Grade (add mood and style). Always correct BEFORE you grade.",
              "In CapCut, select a clip → tap Adjust: Brightness (negative = darker), Contrast (difference between darks and lights), Saturation (negative = more grey, positive = more vivid), Sharpness (increase slightly, max 30), Highlight (reduce to recover blown-out whites), Shadow (increase to reveal dark areas).",
              "Basic correction order: 1. Set Brightness so video looks naturally lit. 2. Adjust Contrast until blacks look black and whites look white. 3. Set Saturation to natural level. 4. Adjust Warmth — warmer = more yellow/orange, cooler = more blue.",
              "The cinematic teal-orange grade: In CapCut Filters → search Cinematic category. Or manually: increase Warmth slightly (+15), reduce Saturation (-10), increase Contrast (+20). This pushes skin tones toward orange and shadows toward teal.",
              "Applying same grade to multiple clips: In CapCut, adjust one clip → tap 3 dots → Copy Style → select all other clips → Paste Style. This creates visual consistency across a multi-clip video.",
              "LUTs are one-click color grades. CapCut supports LUTs: Adjust → Filter → Import LUT → choose a downloaded .CUBE file. Search YouTube for 'free cinematic LUTs download' — download 10, try them all, keep favorites."
            ],
            method: "Film the same scene 3 times in different lighting: direct sunlight, shade, and indoor artificial light. Import all 3 into CapCut. Color correct them until they all look like they were filmed in the same lighting. This is the most practical exercise because clients always give you footage from inconsistent conditions.",
            exercise: "Take any raw video you've filmed. Apply 3 different color grades: 1) Warm golden hour look. 2) Cold blue dramatic look. 3) Desaturated film look. Export all 3 as separate clips. Write which mood each creates and which type of content each would suit.",
            tip: "💡 Most important rule in color grading: less is more. A 10% adjustment looks professional. A 50% adjustment looks like a beginner who just discovered sliders. Subtle changes that you barely notice individually add up to a refined look."
          },
          {
            title: "How to Fix Bad Audio and Add Professional Sound Design",
            steps: [
              "Fastest free audio fix: Go to podcast.adobe.com/enhance — completely free. Upload any audio file up to 1 hour. AI removes background noise and enhances voice clarity in 30 seconds. This single tool transforms phone recordings into studio-quality audio.",
              "Audio levels in video: Background music = -20 to -25 dB (barely audible under speech). Narration = -12 to -6 dB (clearly heard). Sound effects = -15 to -18 dB. In CapCut: select audio track → Volume → adjust slider (100% = original level, reduce music to 20–30%).",
              "How to add sound effects: Go to freesound.org — free account, thousands of effects. Search: 'whoosh' (for text flying in), 'click' (for UI), 'crowd' (for energy), 'notification' (for tips). Download as MP3. Import to CapCut via Audio → Import.",
              "The J-Cut technique: Start the audio from the next scene 0.5–1 second BEFORE the visual cuts to it. This creates a seamless natural-feeling transition. In CapCut: split your audio at the cut point, slide the next scene's audio slightly left so it starts before the visual cut.",
              "Music selection resources (royalty-free = safe to use on client work): YouTube Audio Library (free), Pixabay Music (free), Mixkit (free). NEVER use copyrighted songs on client work — their content could get taken down.",
              "Sync audio to action: If someone claps in the video, the clap sound effect must land on the exact frame of hands touching. If text flies in, the whoosh must start 2 frames before the text appears. This sync is what makes professional edits feel polished."
            ],
            method: "Silent video exercise: Find any video with no audio or mute a video you have. Add complete sound design from scratch: background ambience, sound effects for every action, background music. Use only free resources. Goal: make the video feel REAL and immersive through audio alone.",
            exercise: "Record 3 minutes of yourself giving a tip about anything you know. Run it through Adobe Podcast Enhance. Import enhanced audio back into CapCut. Add background music at -22dB. Add a sound effect at beginning and end. Compare before and after.",
            tip: "💡 A video with perfect color grading but bad audio feels amateurish. A video with mediocre color but crystal-clear audio feels professional. When time is limited, fix audio first."
          }
        ]
      },
      {
        name: "Intermediate",
        badge: "⚡",
        duration: "Weeks 5–11",
        goal: "Learn DaVinci Resolve, specialize in a video type, build your portfolio",
        lessons: [
          {
            title: "How to Set Up and Use DaVinci Resolve (Professional Free Tool)",
            steps: [
              "Download DaVinci Resolve from blackmagicdesign.com/products/davinciresolve — select DaVinci Resolve (free), NOT DaVinci Resolve Studio (paid).",
              "First time setup: Open DaVinci Resolve → New Project → name it → OK. Go to File → Project Settings → set Timeline Frame Rate to 25fps and Timeline Resolution to 1920×1080.",
              "The 5 pages at the bottom: Cut (fast rough editing), Edit (full professional timeline — use this most), Fusion (motion graphics — advanced), Color (best color grading tool in the world), Fairlight (professional audio). Start with Edit and Color only.",
              "Importing footage: File → Import → Import Media → select your video files → they appear in Media Pool top left. Drag clips from Media Pool to the Timeline at the bottom.",
              "Basic editing in Edit page: Blade tool (B on keyboard) = cuts clips. Selection tool (A) = move and select. Delete selected clip = Backspace. Close gap: right-click → Delete Gap. Trim start of clip: hover cursor at very edge until it changes to trim icon, then drag.",
              "Exporting: Go to Deliver page (bottom right icon). Select preset: YouTube for social media, or Custom (H.264 format, 1080p, 10 Mbps bitrate). Click Add to Render Queue → Render All."
            ],
            method: "Import any 5-minute video footage into DaVinci Resolve. Your only task: cut out every moment where nothing interesting is happening. If someone is walking to their car, cut to when they arrive. If someone pauses for 3 seconds while talking, cut the pause. This teaches the core principle of editing: remove everything that doesn't need to be there.",
            exercise: "Edit a 3-minute travel or event video in DaVinci Resolve from raw footage (find free footage on pexels.com/videos). Must include: proper cuts, background music, at least 2 different text styles, and basic color correction using the Color page. Export at 1080p.",
            tip: "💡 Press I to mark the IN point (where you want a clip to start) and O to mark the OUT point in the viewer — then press F9 to automatically add it to your timeline. This is the professional editing workflow."
          },
          {
            title: "How to Edit a Wedding Highlight Film",
            steps: [
              "Wedding editing is the most lucrative local video niche in Algeria (10,000–50,000 DZD per project). Structure of a 4-minute highlight film: Opening (0–30s): best emotional moment from the day. Getting Ready (30–60s): preparation and details. Ceremony (1:00–2:00): vows, first kiss, reactions. Celebration (2:00–3:30): first dance, family, joy. Closing (3:30–4:00): quiet emotional final shot.",
              "Music selection: Choose 1 song for the whole film or 2 songs (1 slower for ceremony, 1 upbeat for celebration). Sources: Artlist.io (paid, professional), or search 'royalty free wedding music' on YouTube for free options.",
              "Color grading for weddings: The standard look is warm, soft, and romantic. In DaVinci Resolve Color page: reduce Highlights slightly → add warmth (shift color balance toward orange in midtones) → reduce Saturation to -15 to -25 → add slight vignette. Skin tones must always look healthy — never orange or green.",
              "Slow motion: Film important moments at 60fps (phone slow motion setting). In editing, set these clips to 50% speed. Key moments: first look, ring exchange, first dance spin, happy tears.",
              "The emotional edit: Great wedding films make people cry. This comes from: choosing shots that capture genuine emotion not posed ones, letting moments breathe during emotional peaks, matching the music's emotional arc to the visual story.",
              "Delivery: Export at 4K if possible, 1080p minimum. Deliver via WeTransfer.com (free for large files) + USB drive. Also export a 90-second Reel teaser for Instagram — this is free marketing for you."
            ],
            method: "Find free wedding footage online (search 'free wedding stock footage' on Pexels or Pixabay). Edit a full 4-minute highlight film following the structure above. This is your wedding editing portfolio piece even without real client footage.",
            exercise: "Edit a complete 4-minute wedding highlight film from free stock footage. Grade it with a warm romantic look. Create a 60-second Reel teaser version. Write a price list for your wedding video service with 3 packages: Teaser only, Highlight film, Full day edit.",
            tip: "💡 Approach wedding photographers, not brides directly. Photographers shoot every wedding and need a trusted editor. One good relationship with a photographer gives you 10–20 weddings per year. Offer them a referral fee of 1,000–2,000 DZD per client."
          },
          {
            title: "How to Edit YouTube Videos That Hold Attention",
            steps: [
              "YouTube retention rule: If 30% of your audience drops off in the first 30 seconds — the video will fail. Your ONLY goal in the first 30 seconds is to make the viewer believe this video is worth watching until the end.",
              "Pattern interrupt technique: Every 60–90 seconds add a visual change to prevent the brain losing interest. Options: zoom in on speaker's face, cut to B-roll, add text animation, change music underneath, add a sound effect, cut to a diagram.",
              "Jump cuts: Cut out every pause, filler word (um, euh, donc), and dead silence longer than 0.3 seconds. In DaVinci Resolve: use Blade tool to cut out each pause. This seems extreme but is how every major YouTuber's content is edited. The result feels energetic and respects the viewer's time.",
              "B-roll over voice: When speaker says 'I went to the market', cut AWAY from their face to footage of a market. Face-to-camera should never go more than 20–30 seconds without cutting to B-roll. Sources: Pexels.com/videos (free), Pixabay.com/videos (free).",
              "End screen setup: In the last 20 seconds add: subscribe button, next video card, recommended video card. Add these in YouTube Studio AFTER uploading. In the editor, keep last 20 seconds simple so YouTube overlays are visible.",
              "Chapters: In YouTube description add timestamps: '0:00 Introduction, 1:30 Step 1, 3:45 Step 2'. YouTube shows these as chapters on the progress bar. Videos with chapters get more views because viewers skip to what they want — increasing completion rate."
            ],
            method: "Watch your own content critically: Load any video on YouTube. Open Analytics → Audience Retention. You'll see a graph showing at what second viewers drop off. Every drop = something went wrong. Go to that exact second and identify why people left. Fix it in future videos.",
            exercise: "Find any 10-minute educational video on YouTube. Edit it DOWN to 6 minutes: remove all filler words, unnecessary pauses, repetitive sections in DaVinci Resolve. Then add: 3 text animations, 2 pieces of B-roll, 1 chapter title card. Export and compare your version to the original.",
            tip: "💡 The highest-paid YouTube editors are not the ones who add the most effects — they're the ones who make content feel effortless and keep viewers watching. Invisible editing is the hardest and most valuable skill."
          }
        ]
      },
      {
        name: "Advanced",
        badge: "🔥",
        duration: "Weeks 12–20",
        goal: "Master DaVinci Resolve Color page, VFX basics, command premium rates",
        lessons: [
          {
            title: "How to Master Color Grading in DaVinci Resolve",
            steps: [
              "Go to the Color page in DaVinci Resolve. The node graph on the right: each node is a separate stackable color adjustment. Node 1 = Color Correction (fix technical issues). Node 2 = Creative Grade (add mood). Node 3 = Specific adjustments.",
              "The 3 scopes under Workspace → Scopes: Waveform (left-right = left-right of screen, up-down = brightness — bottom should touch 0, top reach 100 for well-exposed image). Parade (splits into R, G, B channels — all 3 should be balanced for neutral white balance). Vectorscope (shows saturation and hue — keep skin tones on the skin tone indicator line).",
              "Primary Wheels: Lift (shadows), Gamma (midtones), Gain (highlights). Drag wheels toward a color to tint that range. For cinematic teal-orange: drag Lift slightly toward teal/cyan, drag Gain slightly toward warm orange.",
              "Qualifier tool: Click the eyedropper in Color page. Click on any color in your image (sky, skin). DaVinci isolates ONLY that color for adjustment. Now you can change the sky's color without affecting anything else.",
              "Matching shots: Right-click on your well-graded clip → Grab Still. Go to a poorly matched clip → right-click in Stills panel → Apply Grade. DaVinci attempts to match automatically. Then fine-tune manually.",
              "LUT workflow: Right-click a node → LUTs → browse and apply. Always apply LUT on its own node, then reduce node opacity to 30–70%. Full LUTs at 100% almost always look overdone."
            ],
            method: "Grade the same 2-minute clip 5 different ways: 1) Warm golden afternoon. 2) Cold clinical thriller. 3) Faded vintage film. 4) High contrast action. 5) Soft romantic. Export all 5. Save these grades as Power Grades in DaVinci to reuse on future projects.",
            exercise: "Download 3 different clips from Pexels (outdoor scene, indoor portrait, night scene). Grade all 3 so they look like they belong to the same film — consistent color temperature, contrast, and mood. Show before and after for each clip.",
            tip: "💡 Colorists do not guess — they use scopes. Before touching ANY grade, look at the waveform and fix the technical exposure first. A creative grade on a technically wrong exposure always looks bad."
          },
          {
            title: "How to Set Your Rates and Get High-Paying Video Clients",
            steps: [
              "Video editing pricing for Algeria: 30-second Reel edit = 3,000–8,000 DZD. 3–5 minute YouTube video = 8,000–20,000 DZD. 4-minute wedding highlight = 15,000–40,000 DZD. Full wedding day edit = 30,000–80,000 DZD. Commercial ad = 30,000–120,000 DZD. Monthly Reels package (8 Reels/month) = 20,000–50,000 DZD.",
              "Building a showreel: A 60–90 second video of your BEST work. Structure: start with most impressive shot (first 3 seconds must be stunning), include variety (wedding, commercial, educational, social media), show range of color grades and styles, end with your name and contact. Send to every potential client.",
              "Where to find clients in Algeria: 1. Wedding photographers on Instagram — all need editors. 2. Algerian YouTubers with 5,000–50,000 subscribers who can't edit themselves. 3. Brands running social media ads. 4. Event companies (conferences, corporate events, launches). 5. International clients via Fiverr paid in USD.",
              "Cold outreach formula: 'Bonjour [Name], je suis éditeur vidéo spécialisé dans [wedding films / content creation]. J'ai regardé votre page et j'ai des idées pour améliorer vos vidéos. Voici un exemple de mon travail: [showreel link]. Je serais ravi de vous offrir un premier montage test gratuitement. Intéressé(e)?'",
              "The free test edit offer: Offer to edit 1 short video for free for any serious prospect. If they're a wedding photographer: offer to edit a 60-second teaser from footage they already have. Cost to you: 3–4 hours. Potential return: a client who sends you 15 weddings per year.",
              "Upselling: Every editing project is an opportunity. Wedding edit → offer Reel teaser. YouTube edit → offer thumbnail design (3,000–5,000 DZD extra). Commercial edit → offer 15-second cut-down for stories (2,000 DZD extra)."
            ],
            method: "Find 10 wedding photographers on Instagram in your city. Look at their profiles — most won't offer video. Send a simple DM to 5 of them: 'Salam, votre travail est vraiment beau. Vous collaborez avec des éditeurs vidéo?' When they respond, THEN present what you offer.",
            exercise: "Create your video editing showreel (60–90 seconds): compile your best clips from all exercises in this course. Add text overlays showing the project type and your name. Add energetic music. Export at 1080p. This is the first link you share with every potential client.",
            tip: "💡 Price per project, not per hour for video editing. Clients don't need to know it took you 6 hours. They pay for the result. As you get faster your effective hourly rate increases without changing your project price."
          }
        ]
      },
      {
        name: "Master",
        badge: "👑",
        duration: "Month 6+",
        goal: "Produce commercial videos, build a production company",
        lessons: [
          {
            title: "How to Produce and Edit a Commercial Advertisement",
            steps: [
              "A commercial ad follows a specific narrative structure in 30–60 seconds: 0–5s: Problem or tension (show the pain). 5–20s: Introduction of the solution (show the product arriving or being used). 20–28s: Transformation and benefit (show the person after — better, happier). 28–30s: Call to action (logo + tagline + where to buy).",
              "Pre-production: Client brief → script → storyboard (draw every single shot on paper before filming) → shot list (every clip you need: wide shot, close-up of product, hands using it, face reaction) → location scouting → talent → props list → filming schedule.",
              "On-set coordination: Direct the talent — tell them exactly what to do, how to feel, what to look at. Get minimum 3 takes of every shot. Vary angles: wide establishing, medium, close-up detail. Never leave the location without all shots on your list.",
              "Post-production order: Picture edit (rough cut, structure, timing) → Sound design (voiceover, music, effects) → Color grade (match brand colors) → Graphics (logo reveals, lower thirds, end card) → Final review with client → Export in multiple formats.",
              "Voiceover recording: A professional voiceover in Algerian Darija or French dramatically increases conversion. Find voiceover artists in Facebook groups (search 'voix off algérie') or record yourself in a quiet room, then enhance with Adobe Podcast.",
              "Commercial pricing: 30-second social media commercial (filming + editing) = 40,000–120,000 DZD. TV commercial = 150,000–500,000 DZD. Editing only (footage provided by client) = divide these prices by 3."
            ],
            method: "Create your first spec commercial: Pick any real local product you use. Write a 30-second script. Storyboard it. Film it yourself. Edit it professionally. Post on Instagram tagging the brand. This spec work has literally gotten video editors hired by the brands they tagged — it's a real strategy.",
            exercise: "Script, storyboard, film, and edit a complete 30-second commercial for fictional brand 'Sahara Fresh' — an Algerian organic juice brand. Film in a clean location. Edit with the full commercial structure. Grade with vibrant healthy colors. Add background music and voiceover. Export both horizontal (YouTube) and vertical (Reels) versions.",
            tip: "💡 The commercial editor who understands strategy — why certain shots work, what emotions drive purchase decisions — earns 3× more than one who just knows the software. Study advertising psychology alongside technical skills."
          }
        ]
      }
    ]
  }
];
  {
    id: "video",
    icon: "🎬",
    color: "#DC2626",
    accent: "#F87171",
    bg: "#1A0303",
    title: "Video Editing",
    subtitle: "Content Creation",
    tagline: "Most in-demand creative skill of the decade",
    earning: "8,000 – 80,000 DZD / project",
    firstClient: "4–6 weeks",
    startTool: "CapCut (free) → DaVinci Resolve (free)",
    levels: [
      {
        name: "Beginner",
        badge: "🌱",
        duration: "Weeks 1–4",
        goal: "Edit your first complete video using CapCut on your phone",
        lessons: [
          {
            title: "How to Install CapCut and Edit Your First Video",
            steps: [
              "Download CapCut from Google Play or App Store — completely free with no watermark on exports.",
              "Open CapCut → tap the '+' button → select videos and photos from your gallery → tap Add → your timeline opens.",
              "The timeline at the bottom: your clips appear as blocks. Tap any clip to select it (gets white border). Bottom panel shows: Split, Delete, Speed, and more tools.",
              "How to Split a clip: Drag the white vertical line (playhead) to the exact moment you want to cut → tap Split. The clip becomes 2 pieces. Select the unwanted part → tap Delete.",
              "How to add music: Tap Audio in bottom bar → Sounds → search for a song → tap + to add to timeline. Select the audio track → Volume → lower to about 30% if you have dialogue.",
              "How to add text: Tap Text → Add Text → type → choose font and color → drag text box to position on screen. Tap the text clip on timeline to change when it appears and for how long.",
              "How to export: Tap arrow icon top right → select 1080p resolution and 30fps → tap export button → saves to gallery. For Reels: vertical 9:16. For YouTube: horizontal 16:9."
            ],
            method: "Film exactly 10 short clips of anything — your hand, the street, a cup of coffee, a wall. Import all 10 into CapCut. Cut them to keep only the best 3 seconds of each. Add background music. Export. Watch it back and notice what looks good and what looks awkward. That self-critique IS the learning.",
            exercise: "Create a 60-second video about your day using only clips filmed today. Must include: minimum 8 different clips, background music, your name as text at the beginning, and a simple title at the end. Export and watch it. Note every moment that feels off — these are your next lessons.",
            tip: "💡 Most common beginner mistake: clips that are too long. Every clip in a social media video should be 1.5–4 seconds maximum. When in doubt, cut earlier. Fast pacing always feels more professional."
          },
          {
            title: "How to Cut on the Beat — Music-Driven Editing",
            steps: [
              "Beat-synced editing means: every time you cut from one clip to the next, it happens EXACTLY when the music has a drum hit or bass drop. This creates a hypnotic feel that makes videos addictive to watch.",
              "Step 1 — Choose your music first: Before adding clips, add your music track to the timeline. Listen through the whole song once.",
              "Step 2 — Mark the beats: In CapCut, play your audio and tap Beats to auto-detect beats — it adds markers automatically. If your version doesn't have this: play audio and tap the screen on each beat — CapCut adds a marker each time.",
              "Step 3 — Trim clips to match: Place your clips in timeline and TRIM each clip to end exactly where a beat marker falls. The transition happens on the beat.",
              "Step 4 — Verify: Play the whole video while CLOSING YOUR EYES and just listening. Every time you feel a beat, open your eyes for a split second. If there's a cut at that moment — good. If not — adjust.",
              "For very fast songs: cut every 1–2 beats. For slow emotional songs: cut every 4–8 beats. For dramatic build-ups: hold on one clip through the build, then cut at the peak."
            ],
            method: "Take any music track you like and film 30 random clips of anything (2–3 seconds each). Then do ONLY beat-synced editing — don't try to make clips tell a story. Just focus on making every single cut land on a beat. Watch the result. Even random footage looks impressive with perfect beat-sync.",
            exercise: "Create a 45-second beat-synced montage using footage of your city or neighborhood (film outside for 30 minutes — get minimum 20 clips). Use a trending song. Every single cut must land on a beat. Export and share to your practice account. This is a real portfolio piece.",
            tip: "💡 CapCut's Auto Beat Sync feature under Audio → Beats automatically places cuts on song beats. Use this as training wheels to see where beats fall, then learn to feel it yourself."
          },
          {
            title: "How to Color Grade a Video (Make it Look Cinematic)",
            steps: [
              "Color grading has 2 stages: Correction (fix technical problems) → Creative Grade (add mood and style). Always correct BEFORE you grade.",
              "In CapCut, select a clip → tap Adjust: Brightness (negative = darker), Contrast (difference between darks and lights), Saturation (negative = more grey, positive = more vivid), Sharpness (increase slightly, max 30), Highlight (reduce to recover blown-out whites), Shadow (increase to reveal dark areas).",
              "Basic correction order: 1. Set Brightness so video looks naturally lit. 2. Adjust Contrast until blacks look black and whites look white. 3. Set Saturation to natural level. 4. Adjust Warmth — warmer = more yellow/orange, cooler = more blue.",
              "The cinematic teal-orange grade: In CapCut Filters → search Cinematic category. Or manually: increase Warmth slightly (+15), reduce Saturation (-10), increase Contrast (+20). This pushes skin tones toward orange and shadows toward teal.",
              "Applying same grade to multiple clips: In CapCut, adjust one clip → tap 3 dots → Copy Style → select all other clips → Paste Style. This creates visual consistency across a multi-clip video.",
              "LUTs are one-click color grades. CapCut supports LUTs: Adjust → Filter → Import LUT → choose a downloaded .CUBE file. Search YouTube for 'free cinematic LUTs download' — download 10, try them all, keep favorites."
            ],
            method: "Film the same scene 3 times in different lighting: direct sunlight, shade, and indoor artificial light. Import all 3 into CapCut. Color correct them until they all look like they were filmed in the same lighting. This is the most practical exercise because clients always give you footage from inconsistent conditions.",
            exercise: "Take any raw video you've filmed. Apply 3 different color grades: 1) Warm golden hour look. 2) Cold blue dramatic look. 3) Desaturated film look. Export all 3 as separate clips. Write which mood each creates and which type of content each would suit.",
            tip: "💡 Most important rule in color grading: less is more. A 10% adjustment looks professional. A 50% adjustment looks like a beginner who just discovered sliders. Subtle changes that you barely notice individually add up to a refined look."
          },
          {
            title: "How to Fix Bad Audio and Add Professional Sound Design",
            steps: [
              "Fastest free audio fix: Go to podcast.adobe.com/enhance — completely free. Upload any audio file up to 1 hour. AI removes background noise and enhances voice clarity in 30 seconds. This single tool transforms phone recordings into studio-quality audio.",
              "Audio levels in video: Background music = -20 to -25 dB (barely audible under speech). Narration = -12 to -6 dB (clearly heard). Sound effects = -15 to -18 dB. In CapCut: select audio track → Volume → adjust slider (100% = original level, reduce music to 20–30%).",
              "How to add sound effects: Go to freesound.org — free account, thousands of effects. Search: 'whoosh' (for text flying in), 'click' (for UI), 'crowd' (for energy), 'notification' (for tips). Download as MP3. Import to CapCut via Audio → Import.",
              "The J-Cut technique: Start the audio from the next scene 0.5–1 second BEFORE the visual cuts to it. This creates a seamless natural-feeling transition. In CapCut: split your audio at the cut point, slide the next scene's audio slightly left so it starts before the visual cut.",
              "Music selection resources (royalty-free = safe to use on client work): YouTube Audio Library (free), Pixabay Music (free), Mixkit (free). NEVER use copyrighted songs on client work — their content could get taken down.",
              "Sync audio to action: If someone claps in the video, the clap sound effect must land on the exact frame of hands touching. If text flies in, the whoosh must start 2 frames before the text appears. This sync is what makes professional edits feel polished."
            ],
            method: "Silent video exercise: Find any video with no audio or mute a video you have. Add complete sound design from scratch: background ambience, sound effects for every action, background music. Use only free resources. Goal: make the video feel REAL and immersive through audio alone.",
            exercise: "Record 3 minutes of yourself giving a tip about anything you know. Run it through Adobe Podcast Enhance. Import enhanced audio back into CapCut. Add background music at -22dB. Add a sound effect at beginning and end. Compare before and after.",
            tip: "💡 A video with perfect color grading but bad audio feels amateurish. A video with mediocre color but crystal-clear audio feels professional. When time is limited, fix audio first."
          }
        ]
      },
      {
        name: "Intermediate",
        badge: "⚡",
        duration: "Weeks 5–11",
        goal: "Learn DaVinci Resolve, specialize in a video type, build your portfolio",
        lessons: [
          {
            title: "How to Set Up and Use DaVinci Resolve (Professional Free Tool)",
            steps: [
              "Download DaVinci Resolve from blackmagicdesign.com/products/davinciresolve — select DaVinci Resolve (free), NOT DaVinci Resolve Studio (paid).",
              "First time setup: Open DaVinci Resolve → New Project → name it → OK. Go to File → Project Settings → set Timeline Frame Rate to 25fps and Timeline Resolution to 1920×1080.",
              "The 5 pages at the bottom: Cut (fast rough editing), Edit (full professional timeline — use this most), Fusion (motion graphics — advanced), Color (best color grading tool in the world), Fairlight (professional audio). Start with Edit and Color only.",
              "Importing footage: File → Import → Import Media → select your video files → they appear in Media Pool top left. Drag clips from Media Pool to the Timeline at the bottom.",
              "Basic editing in Edit page: Blade tool (B on keyboard) = cuts clips. Selection tool (A) = move and select. Delete selected clip = Backspace. Close gap: right-click → Delete Gap. Trim start of clip: hover cursor at very edge until it changes to trim icon, then drag.",
              "Exporting: Go to Deliver page (bottom right icon). Select preset: YouTube for social media, or Custom (H.264 format, 1080p, 10 Mbps bitrate). Click Add to Render Queue → Render All."
            ],
            method: "Import any 5-minute video footage into DaVinci Resolve. Your only task: cut out every moment where nothing interesting is happening. If someone is walking to their car, cut to when they arrive. If someone pauses for 3 seconds while talking, cut the pause. This teaches the core principle of editing: remove everything that doesn't need to be there.",
            exercise: "Edit a 3-minute travel or event video in DaVinci Resolve from raw footage (find free footage on pexels.com/videos). Must include: proper cuts, background music, at least 2 different text styles, and basic color correction using the Color page. Export at 1080p.",
            tip: "💡 Press I to mark the IN point (where you want a clip to start) and O to mark the OUT point in the viewer — then press F9 to automatically add it to your timeline. This is the professional editing workflow."
          },
          {
            title: "How to Edit a Wedding Highlight Film",
            steps: [
              "Wedding editing is the most lucrative local video niche in Algeria (10,000–50,000 DZD per project). Structure of a 4-minute highlight film: Opening (0–30s): best emotional moment from the day. Getting Ready (30–60s): preparation and details. Ceremony (1:00–2:00): vows, first kiss, reactions. Celebration (2:00–3:30): first dance, family, joy. Closing (3:30–4:00): quiet emotional final shot.",
              "Music selection: Choose 1 song for the whole film or 2 songs (1 slower for ceremony, 1 upbeat for celebration). Sources: Artlist.io (paid, professional), or search 'royalty free wedding music' on YouTube for free options.",
              "Color grading for weddings: The standard look is warm, soft, and romantic. In DaVinci Resolve Color page: reduce Highlights slightly → add warmth (shift color balance toward orange in midtones) → reduce Saturation to -15 to -25 → add slight vignette. Skin tones must always look healthy — never orange or green.",
              "Slow motion: Film important moments at 60fps (phone slow motion setting). In editing, set these clips to 50% speed. Key moments: first look, ring exchange, first dance spin, happy tears.",
              "The emotional edit: Great wedding films make people cry. This comes from: choosing shots that capture genuine emotion not posed ones, letting moments breathe during emotional peaks, matching the music's emotional arc to the visual story.",
              "Delivery: Export at 4K if possible, 1080p minimum. Deliver via WeTransfer.com (free for large files) + USB drive. Also export a 90-second Reel teaser for Instagram — this is free marketing for you."
            ],
            method: "Find free wedding footage online (search 'free wedding stock footage' on Pexels or Pixabay). Edit a full 4-minute highlight film following the structure above. This is your wedding editing portfolio piece even without real client footage.",
            exercise: "Edit a complete 4-minute wedding highlight film from free stock footage. Grade it with a warm romantic look. Create a 60-second Reel teaser version. Write a price list for your wedding video service with 3 packages: Teaser only, Highlight film, Full day edit.",
            tip: "💡 Approach wedding photographers, not brides directly. Photographers shoot every wedding and need a trusted editor. One good relationship with a photographer gives you 10–20 weddings per year. Offer them a referral fee of 1,000–2,000 DZD per client."
          },
          {
            title: "How to Edit YouTube Videos That Hold Attention",
            steps: [
              "YouTube retention rule: If 30% of your audience drops off in the first 30 seconds — the video will fail. Your ONLY goal in the first 30 seconds is to make the viewer believe this video is worth watching until the end.",
              "Pattern interrupt technique: Every 60–90 seconds add a visual change to prevent the brain losing interest. Options: zoom in on speaker's face, cut to B-roll, add text animation, change music underneath, add a sound effect, cut to a diagram.",
              "Jump cuts: Cut out every pause, filler word (um, euh, donc), and dead silence longer than 0.3 seconds. In DaVinci Resolve: use Blade tool to cut out each pause. This seems extreme but is how every major YouTuber's content is edited. The result feels energetic and respects the viewer's time.",
              "B-roll over voice: When speaker says 'I went to the market', cut AWAY from their face to footage of a market. Face-to-camera should never go more than 20–30 seconds without cutting to B-roll. Sources: Pexels.com/videos (free), Pixabay.com/videos (free).",
              "End screen setup: In the last 20 seconds add: subscribe button, next video card, recommended video card. Add these in YouTube Studio AFTER uploading. In the editor, keep last 20 seconds simple so YouTube overlays are visible.",
              "Chapters: In YouTube description add timestamps: '0:00 Introduction, 1:30 Step 1, 3:45 Step 2'. YouTube shows these as chapters on the progress bar. Videos with chapters get more views because viewers skip to what they want — increasing completion rate."
            ],
            method: "Watch your own content critically: Load any video on YouTube. Open Analytics → Audience Retention. You'll see a graph showing at what second viewers drop off. Every drop = something went wrong. Go to that exact second and identify why people left. Fix it in future videos.",
            exercise: "Find any 10-minute educational video on YouTube. Edit it DOWN to 6 minutes: remove all filler words, unnecessary pauses, repetitive sections in DaVinci Resolve. Then add: 3 text animations, 2 pieces of B-roll, 1 chapter title card. Export and compare your version to the original.",
            tip: "💡 The highest-paid YouTube editors are not the ones who add the most effects — they're the ones who make content feel effortless and keep viewers watching. Invisible editing is the hardest and most valuable skill."
          }
        ]
      },
      {
        name: "Advanced",
        badge: "🔥",
        duration: "Weeks 12–20",
        goal: "Master DaVinci Resolve Color page, VFX basics, command premium rates",
        lessons: [
          {
            title: "How to Master Color Grading in DaVinci Resolve",
            steps: [
              "Go to the Color page in DaVinci Resolve. The node graph on the right: each node is a separate stackable color adjustment. Node 1 = Color Correction (fix technical issues). Node 2 = Creative Grade (add mood). Node 3 = Specific adjustments.",
              "The 3 scopes under Workspace → Scopes: Waveform (left-right = left-right of screen, up-down = brightness — bottom should touch 0, top reach 100 for well-exposed image). Parade (splits into R, G, B channels — all 3 should be balanced for neutral white balance). Vectorscope (shows saturation and hue — keep skin tones on the skin tone indicator line).",
              "Primary Wheels: Lift (shadows), Gamma (midtones), Gain (highlights). Drag wheels toward a color to tint that range. For cinematic teal-orange: drag Lift slightly toward teal/cyan, drag Gain slightly toward warm orange.",
              "Qualifier tool: Click the eyedropper in Color page. Click on any color in your image (sky, skin). DaVinci isolates ONLY that color for adjustment. Now you can change the sky's color without affecting anything else.",
              "Matching shots: Right-click on your well-graded clip → Grab Still. Go to a poorly matched clip → right-click in Stills panel → Apply Grade. DaVinci attempts to match automatically. Then fine-tune manually.",
              "LUT workflow: Right-click a node → LUTs → browse and apply. Always apply LUT on its own node, then reduce node opacity to 30–70%. Full LUTs at 100% almost always look overdone."
            ],
            method: "Grade the same 2-minute clip 5 different ways: 1) Warm golden afternoon. 2) Cold clinical thriller. 3) Faded vintage film. 4) High contrast action. 5) Soft romantic. Export all 5. Save these grades as Power Grades in DaVinci to reuse on future projects.",
            exercise: "Download 3 different clips from Pexels (outdoor scene, indoor portrait, night scene). Grade all 3 so they look like they belong to the same film — consistent color temperature, contrast, and mood. Show before and after for each clip.",
            tip: "💡 Colorists do not guess — they use scopes. Before touching ANY grade, look at the waveform and fix the technical exposure first. A creative grade on a technically wrong exposure always looks bad."
          },
          {
            title: "How to Set Your Rates and Get High-Paying Video Clients",
            steps: [
              "Video editing pricing for Algeria: 30-second Reel edit = 3,000–8,000 DZD. 3–5 minute YouTube video = 8,000–20,000 DZD. 4-minute wedding highlight = 15,000–40,000 DZD. Full wedding day edit = 30,000–80,000 DZD. Commercial ad = 30,000–120,000 DZD. Monthly Reels package (8 Reels/month) = 20,000–50,000 DZD.",
              "Building a showreel: A 60–90 second video of your BEST work. Structure: start with most impressive shot (first 3 seconds must be stunning), include variety (wedding, commercial, educational, social media), show range of color grades and styles, end with your name and contact. Send to every potential client.",
              "Where to find clients in Algeria: 1. Wedding photographers on Instagram — all need editors. 2. Algerian YouTubers with 5,000–50,000 subscribers who can't edit themselves. 3. Brands running social media ads. 4. Event companies (conferences, corporate events, launches). 5. International clients via Fiverr paid in USD.",
              "Cold outreach formula: 'Bonjour [Name], je suis éditeur vidéo spécialisé dans [wedding films / content creation]. J'ai regardé votre page et j'ai des idées pour améliorer vos vidéos. Voici un exemple de mon travail: [showreel link]. Je serais ravi de vous offrir un premier montage test gratuitement. Intéressé(e)?'",
              "The free test edit offer: Offer to edit 1 short video for free for any serious prospect. If they're a wedding photographer: offer to edit a 60-second teaser from footage they already have. Cost to you: 3–4 hours. Potential return: a client who sends you 15 weddings per year.",
              "Upselling: Every editing project is an opportunity. Wedding edit → offer Reel teaser. YouTube edit → offer thumbnail design (3,000–5,000 DZD extra). Commercial edit → offer 15-second cut-down for stories (2,000 DZD extra)."
            ],
            method: "Find 10 wedding photographers on Instagram in your city. Look at their profiles — most won't offer video. Send a simple DM to 5 of them: 'Salam, votre travail est vraiment beau. Vous collaborez avec des éditeurs vidéo?' When they respond, THEN present what you offer.",
            exercise: "Create your video editing showreel (60–90 seconds): compile your best clips from all exercises in this course. Add text overlays showing the project type and your name. Add energetic music. Export at 1080p. This is the first link you share with every potential client.",
            tip: "💡 Price per project, not per hour for video editing. Clients don't need to know it took you 6 hours. They pay for the result. As you get faster your effective hourly rate increases without changing your project price."
          }
        ]
      },
      {
        name: "Master",
        badge: "👑",
        duration: "Month 6+",
        goal: "Produce commercial videos, build a production company",
        lessons: [
          {
            title: "How to Produce and Edit a Commercial Advertisement",
            steps: [
              "A commercial ad follows a specific narrative structure in 30–60 seconds: 0–5s: Problem or tension (show the pain). 5–20s: Introduction of the solution (show the product arriving or being used). 20–28s: Transformation and benefit (show the person after — better, happier). 28–30s: Call to action (logo + tagline + where to buy).",
              "Pre-production: Client brief → script → storyboard (draw every single shot on paper before filming) → shot list (every clip you need: wide shot, close-up of product, hands using it, face reaction) → location scouting → talent → props list → filming schedule.",
              "On-set coordination: Direct the talent — tell them exactly what to do, how to feel, what to look at. Get minimum 3 takes of every shot. Vary angles: wide establishing, medium, close-up detail. Never leave the location without all shots on your list.",
              "Post-production order: Picture edit (rough cut, structure, timing) → Sound design (voiceover, music, effects) → Color grade (match brand colors) → Graphics (logo reveals, lower thirds, end card) → Final review with client → Export in multiple formats.",
              "Voiceover recording: A professional voiceover in Algerian Darija or French dramatically increases conversion. Find voiceover artists in Facebook groups (search 'voix off algérie') or record yourself in a quiet room, then enhance with Adobe Podcast.",
              "Commercial pricing: 30-second social media commercial (filming + editing) = 40,000–120,000 DZD. TV commercial = 150,000–500,000 DZD. Editing only (footage provided by client) = divide these prices by 3."
            ],
            method: "Create your first spec commercial: Pick any real local product you use. Write a 30-second script. Storyboard it. Film it yourself. Edit it professionally. Post on Instagram tagging the brand. This spec work has literally gotten video editors hired by the brands they tagged — it's a real strategy.",
            exercise: "Script, storyboard, film, and edit a complete 30-second commercial for fictional brand 'Sahara Fresh' — an Algerian organic juice brand. Film in a clean location. Edit with the full commercial structure. Grade with vibrant healthy colors. Add background music and voiceover. Export both horizontal (YouTube) and vertical (Reels) versions.",
            tip: "💡 The commercial editor who understands strategy — why certain shots work, what emotions drive purchase decisions — earns 3× more than one who just knows the software. Study advertising psychology alongside technical skills."
          }
        ]
      }
    ]
  }
];
