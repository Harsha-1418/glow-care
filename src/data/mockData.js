// Mock Data for GlowCare AI Platform

export const SAMPLE_SELFIES = [
  {
    id: 'demo-college',
    name: 'College Farewell Demo',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    occasion: 'College',
    style: 'Elegant',
    budget: '2000',
    skinType: 'Combination',
    concerns: ['Uneven appearance', 'Oiliness'],
    faceShape: 'Oval',
    gender: 'Female / Feminine'
  },
  {
    id: 'demo-interview',
    name: 'Professional Interview',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    occasion: 'Interview',
    style: 'Professional',
    budget: '1000',
    skinType: 'Normal',
    concerns: ['General skincare'],
    faceShape: 'Square',
    gender: 'Female / Feminine'
  },
  {
    id: 'demo-wedding',
    name: 'Wedding Guest Glam',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    occasion: 'Wedding',
    style: 'Traditional',
    budget: '5000',
    skinType: 'Dry',
    concerns: ['Dryness'],
    faceShape: 'Heart',
    gender: 'Female / Feminine'
  },
  {
    id: 'demo-male-party',
    name: 'Modern Party Look',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    occasion: 'Party',
    style: 'Trendy',
    budget: '2000',
    skinType: 'Oily',
    concerns: ['Oiliness'],
    faceShape: 'Diamond',
    gender: 'Male / Masculine'
  }
];

export const SPECIALIST_AGENTS = [
  {
    id: 'style',
    name: 'Style Agent',
    icon: '✨',
    color: 'from-rose-500 to-pink-600',
    description: 'Analyzes occasion dynamics, personal vibe, and color harmony.'
  },
  {
    id: 'hair',
    name: 'Hair Agent',
    icon: '💇‍♀️',
    color: 'from-purple-500 to-indigo-600',
    description: 'Evaluates face geometry to suggest flattering haircuts & volume.'
  },
  {
    id: 'fashion',
    name: 'Fashion Agent',
    icon: '👗',
    color: 'from-amber-500 to-orange-600',
    description: 'Recommends outfit silhouettes, color swatches, and accessories.'
  },
  {
    id: 'makeup',
    name: 'Makeup Agent',
    icon: '💄',
    color: 'from-pink-500 to-rose-600',
    description: 'Formulates occasion-appropriate makeup finishes and palette tones.'
  },
  {
    id: 'skincare',
    name: 'Skincare Agent',
    icon: '🧴',
    color: 'from-teal-500 to-emerald-600',
    description: 'Builds self-reported skin type routine. (Non-medical).'
  },
  {
    id: 'product',
    name: 'Product Agent',
    icon: '🛍️',
    color: 'from-blue-500 to-cyan-600',
    description: 'Filters beauty catalog items matching aesthetic recommendations.'
  },
  {
    id: 'budget',
    name: 'Budget Agent',
    icon: '💰',
    color: 'from-emerald-500 to-green-600',
    description: 'Calculates total basket cost and executes smart budget optimizations.'
  },
  {
    id: 'booking',
    name: 'Booking Agent',
    icon: '🗓️',
    color: 'from-violet-500 to-purple-600',
    description: 'Connects your Glow Plan directly to partner salon appointments.'
  }
];

export const BEAUTY_PRODUCTS_CATALOG = [
  // Haircare
  {
    id: 'p-h1',
    name: 'Moroccan Argan Hair Serum',
    category: 'Hair',
    price: 450,
    dupePrice: 220,
    dupeName: 'Silk Smooth Argan Oil Blend',
    image: 'https://images.unsplash.com/photo-1608248597349-4c6e949989ef?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['All'],
    occasions: ['College', 'Interview', 'Party', 'Wedding', 'Casual', 'Festival', 'Date'],
    whySelected: 'Adds glossy shine and tames flyaways for a soft, touchable finish.',
    rating: 4.8
  },
  {
    id: 'p-h2',
    name: 'Scalp Detox & Volumizing Shampoo',
    category: 'Hair',
    price: 380,
    dupePrice: 199,
    dupeName: 'Volumizing Rice Water Wash',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['Oily', 'Combination'],
    occasions: ['Casual', 'Interview', 'College'],
    whySelected: 'Lifts roots at the crown to enhance oval and round face symmetry.',
    rating: 4.7
  },
  {
    id: 'p-h3',
    name: 'Heat Protectant Styling Spray',
    category: 'Hair',
    price: 320,
    dupePrice: 160,
    dupeName: 'Thermal Guard Shield Spray',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['All'],
    occasions: ['Party', 'Wedding', 'Festival', 'Date'],
    whySelected: 'Guards hair structure during hot tool blowout or curling.',
    rating: 4.6
  },
  {
    id: 'p-h4',
    name: 'Keratin Curl Defining Cream',
    category: 'Hair',
    price: 420,
    dupePrice: 210,
    dupeName: 'Botanical Wave Defining Milk',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['Normal', 'Dry'],
    occasions: ['Casual', 'Party', 'Festival', 'Date'],
    whySelected: 'Defines natural waves and curls to soften square & heart face shapes.',
    rating: 4.8
  },
  {
    id: 'p-h5',
    name: 'Matte Sculpting Clay Pomade',
    category: 'Hair',
    price: 390,
    dupePrice: 180,
    dupeName: 'Matte Finish Styling Wax',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['Oily', 'Combination', 'All'],
    occasions: ['Party', 'Interview', 'College', 'Casual'],
    whySelected: 'Provides textured medium hold for sharp structured hairstyles.',
    rating: 4.7
  },

  // Makeup
  {
    id: 'p-m1',
    name: 'Satin Radiant Tinted Moisturizer',
    category: 'Makeup',
    price: 450,
    dupePrice: 250,
    dupeName: 'Glow Hydration BB Cream',
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['Dry', 'Combination', 'Normal'],
    occasions: ['College', 'Casual', 'Interview'],
    whySelected: 'Provides lightweight dewiness without clogging pores.',
    rating: 4.9
  },
  {
    id: 'p-m2',
    name: 'Longwear Velvet Matte Lip Tint',
    category: 'Makeup',
    price: 390,
    dupePrice: 190,
    dupeName: 'Soft Berry Stain Matte',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['All'],
    occasions: ['Party', 'Wedding', 'College', 'Date', 'Festival'],
    whySelected: 'Provides rich pigment payload with 12-hour smudge resistance.',
    rating: 4.8
  },
  {
    id: 'p-m3',
    name: 'Golden Radiance Liquid Highlighter',
    category: 'Makeup',
    price: 490,
    dupePrice: 220,
    dupeName: 'Shimmer Drops Candlelight',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['All'],
    occasions: ['Party', 'Wedding', 'Festival'],
    whySelected: 'Highlights cheekbone high points to catch soft event lighting.',
    rating: 4.7
  },
  {
    id: 'p-m4',
    name: 'Precision Waterproof Eyeliner',
    category: 'Makeup',
    price: 290,
    dupePrice: 150,
    dupeName: 'Ink Black Felt Tip Pen',
    image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb1a?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['All'],
    occasions: ['Interview', 'College', 'Party', 'Wedding', 'Festival'],
    whySelected: 'Defines eyes with crisp flick symmetry matching face proportions.',
    rating: 4.6
  },
  {
    id: 'p-m5',
    name: 'Velvet Rose Cheek & Lip Tint',
    category: 'Makeup',
    price: 340,
    dupePrice: 170,
    dupeName: 'Soft Peach Cream Blush Stain',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['Dry', 'Normal', 'Combination'],
    occasions: ['College', 'Date', 'Casual', 'Festival'],
    whySelected: 'Adds a natural flushed warmth to cheekbones and lips.',
    rating: 4.8
  },
  {
    id: 'p-m6',
    name: 'Luminous Silk Hydrating Foundation',
    category: 'Makeup',
    price: 550,
    dupePrice: 270,
    dupeName: 'Silk Finish Fluid Base',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['Normal', 'Dry', 'Sensitive'],
    occasions: ['Wedding', 'Interview', 'Party'],
    whySelected: 'Creates camera-ready seamless coverage for formal events.',
    rating: 4.9
  },

  // Skincare
  {
    id: 'p-s1',
    name: 'Gentle Hydrating Amino Cleanser',
    category: 'Skincare',
    price: 350,
    dupePrice: 180,
    dupeName: 'Daily Oat Gel Wash',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['Normal', 'Dry', 'Sensitive', 'Combination'],
    occasions: ['All'],
    whySelected: 'Cleanses effectively while keeping moisture barrier intact.',
    rating: 4.9
  },
  {
    id: 'p-s2',
    name: 'Niacinamide 10% + Zinc Pore Serum',
    category: 'Skincare',
    price: 499,
    dupePrice: 299,
    dupeName: 'Pore Clarifying Botanical Fluid',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['Oily', 'Combination'],
    occasions: ['All'],
    whySelected: 'Balances sebum production and refines visible pore structure.',
    rating: 4.8
  },
  {
    id: 'p-s3',
    name: 'Ceramide Barrier Repair Cream',
    category: 'Skincare',
    price: 550,
    dupePrice: 280,
    dupeName: 'Barrier Comfort Hydrator',
    image: 'https://images.unsplash.com/photo-1608248597259-be1461937965?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['Dry', 'Sensitive'],
    occasions: ['All'],
    whySelected: 'Locks in deep hydration for smooth makeup application base.',
    rating: 4.8
  },
  {
    id: 'p-s4',
    name: 'Invisible Water Gel SPF 50 PA++++',
    category: 'Skincare',
    price: 450,
    dupePrice: 240,
    dupeName: 'Ultra-Light Fluid Sunscreen',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['All'],
    occasions: ['All'],
    whySelected: 'Provides zero-white-cast UV shield essential for outdoor photography.',
    rating: 4.9
  },
  {
    id: 'p-s5',
    name: 'Cica Soothing Repair Gel Moisturizer',
    category: 'Skincare',
    price: 420,
    dupePrice: 210,
    dupeName: 'Calming Centella Gel Fluid',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['Sensitive', 'Combination', 'Oily'],
    occasions: ['All'],
    whySelected: 'Soothes redness and cools skin texture before makeup application.',
    rating: 4.8
  },
  {
    id: 'p-s6',
    name: 'Hyaluronic Acid 2% + B5 Drops',
    category: 'Skincare',
    price: 480,
    dupePrice: 230,
    dupeName: 'Plumping Hydration Drops',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['Dry', 'Normal', 'Combination'],
    occasions: ['All'],
    whySelected: 'Infuses deep moisture plumping fine lines for a radiant dewy finish.',
    rating: 4.9
  },

  // Accessories
  {
    id: 'p-a1',
    name: 'Anti-Reflective Slim Oval Frames',
    category: 'Accessories',
    price: 450,
    dupePrice: 199,
    dupeName: 'Classic Metal Rim Oval Spectacles',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['All'],
    occasions: ['Interview', 'College', 'Casual'],
    whySelected: 'Softens angled jawlines and complements oval & square face shapes.',
    rating: 4.7
  },
  {
    id: 'p-a2',
    name: 'Minimalist Rose Gold Hoop Earrings',
    category: 'Accessories',
    price: 290,
    dupePrice: 120,
    dupeName: 'Gold-Plated Everyday Huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['All'],
    occasions: ['College', 'Party', 'Date', 'Casual'],
    whySelected: 'Adds subtle polished shimmer near the cheekbones.',
    rating: 4.8
  },
  {
    id: 'p-a3',
    name: 'Handcrafted Kundan Statement Earrings',
    category: 'Accessories',
    price: 790,
    dupePrice: 350,
    dupeName: 'Ethnic Pearl & Stone Drop Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['All'],
    occasions: ['Wedding', 'Festival'],
    whySelected: 'Elevates traditional ethnic wear with regal radiance.',
    rating: 4.9
  },
  {
    id: 'p-a4',
    name: 'Vintage Black Browline Sunglasses',
    category: 'Accessories',
    price: 480,
    dupePrice: 220,
    dupeName: 'Classic Dark Browline Frames',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['All'],
    occasions: ['Casual', 'Party', 'Festival', 'College'],
    whySelected: 'Defines brow line geometry to accentuate round & oval face shapes.',
    rating: 4.7
  },
  {
    id: 'p-a5',
    name: 'Emerald Cut Pearl Pendant Choker',
    category: 'Accessories',
    price: 650,
    dupePrice: 290,
    dupeName: 'Dainty Pearl Drop Choker',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80',
    skinTypes: ['All'],
    occasions: ['Party', 'Wedding', 'Date'],
    whySelected: 'Draws attention to neck & collarbone alignment for elegant necklines.',
    rating: 4.9
  }
];

export const SALON_SERVICES = [
  {
    id: 's-1',
    title: 'Signature Blowdry & Style',
    category: 'Hair Styling',
    price: 500,
    duration: '45 mins',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=500&q=80',
    description: 'Custom wash, scalp massage, blowout, and soft bouncy waves or sleek finish.'
  },
  {
    id: 's-2',
    title: 'Nourishing Argan Hair Spa',
    category: 'Hair Spa',
    price: 850,
    duration: '60 mins',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=500&q=80',
    description: 'Intense hair mask treatment with warm micro-steam and relaxing neck massage.'
  },
  {
    id: 's-3',
    title: 'Event HD Glam Makeup',
    category: 'Makeup',
    price: 1200,
    duration: '60 mins',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80',
    description: 'Camera-ready airbrush foundation, custom eye makeup, lash application, and longwear setting.'
  },
  {
    id: 's-4',
    title: 'Radiance Glow Vitamin C Facial',
    category: 'Facial',
    price: 950,
    duration: '50 mins',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80',
    description: 'Deep pore cleanse, gentle exfoliation, vitamin C serum infusion, and chilled jade roll.'
  },
  {
    id: 's-5',
    title: 'Gel Polish Manicure & Nail Art',
    category: 'Manicure',
    price: 650,
    duration: '45 mins',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=500&q=80',
    description: 'Nail shaping, cuticle care, long-lasting gel polish color, and 2 accent nail designs.'
  },
  {
    id: 's-6',
    title: 'Hydrating Botanical Pedicure',
    category: 'Pedicure',
    price: 700,
    duration: '45 mins',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=500&q=80',
    description: 'Warm foot soak, botanical scrub, callus smoothing, and leg massage.'
  },
  {
    id: 's-7',
    title: 'Royal Wedding / Festive Package',
    category: 'Bridal/Wedding Package',
    price: 3500,
    duration: '180 mins',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80',
    description: 'Full bridal makeover, intricate hairstyling, premium saree/dupatta draping, and radiance facial treatment.'
  }
];

// Helper AI Engine simulation function
export function generateGlowPlan(userProfile) {
  const {
    occasion = 'College',
    style = 'Elegant',
    budget = '2000',
    skinType = 'Combination',
    concerns = ['Uneven appearance'],
    image = null
  } = userProfile;

  const targetBudget = parseInt(budget, 10) || 2000;

  // Image & profile seed hash for personalized photo-based analysis
  const profileSeed = hashString((image || '') + occasion + style + skinType + (userProfile.gender || ''));

  // Dynamic face shape estimation derived from user photo + style
  const faceShapes = ['Oval', 'Heart', 'Square', 'Round', 'Diamond'];
  const faceShape = userProfile.faceShape || faceShapes[profileSeed % faceShapes.length];

  // Dynamic style harmony index (91% - 99%) derived from profile seed
  const glowScore = 91 + (profileSeed % 9);

  // Hair recommendations
  const hairMap = {
    Oval: {
      cut: 'Layered Collarbone Cut with Soft Curtain Bangs',
      reason: 'Oval shapes suit versatile volume. Soft curtain bangs frame your cheekbones naturally.'
    },
    Heart: {
      cut: 'Textured Shoulder-Length Bob with Side Sweep',
      reason: 'Adds width around the chin to balance a narrower lower face structure.'
    },
    Square: {
      cut: 'Long Soft Waves with Face-Framing Layers',
      reason: 'Softens strong jawline angles for a gentle, romantic aesthetic.'
    },
    Round: {
      cut: 'Asymmetrical High-Volume Lob',
      reason: 'Creates vertical elongation and highlights your cheek structure.'
    },
    Diamond: {
      cut: 'Chin-Length Wispy Shag',
      reason: 'Accentuates defined cheekbones while adding volume at the chin.'
    }
  };

  const hairInfo = hairMap[faceShape] || hairMap['Oval'];

  // Fashion & Color harmony
  const fashionMap = {
    College: {
      outfit: 'Smart Casual Chic: Pastel Blazer over Crisp White Tee + High-Waisted Denim',
      palette: ['#FCE7F3', '#FFFFFF', '#3B82F6', '#1E293B'],
      accessories: 'Minimalist oval optical frames, classic white sneakers & rose gold huggie hoops.'
    },
    Interview: {
      outfit: 'Power Professional: Tailored Navy Trouser Suit + Cream Silk Blouse',
      palette: ['#0F172A', '#FFFBEB', '#64748B', '#94A3B8'],
      accessories: 'Slim anti-reflective rectangular frames, structured tote & pearl stud earrings.'
    },
    Party: {
      outfit: 'Glam & Sparkle: Satin Slip Dress or Tailored Velvet Jumpsuit',
      palette: ['#881337', '#F43F5E', '#000000', '#FDE047'],
      accessories: 'Chunky gold chain necklace, crystal clutch & high-shine lip gloss.'
    },
    Wedding: {
      outfit: 'Regal Elegance: Organza Saree or Embroidered Anarkali with Zari Border',
      palette: ['#991B1B', '#D97706', '#FEF3C7', '#7C2D12'],
      accessories: 'Handcrafted Kundan drop earrings, delicate maang tikka & embroidered potli bag.'
    },
    Casual: {
      outfit: 'Effortless Modern: Knit Sweater + Wide-Leg Linen Trousers',
      palette: ['#E2E8F0', '#94A3B8', '#78350F', '#15803D'],
      accessories: 'Canvas tote, silk hair scrunchie, & subtle tinted lip balm.'
    },
    Festival: {
      outfit: 'Boho Fusion: Printed Crop Top + Tiered Maxi Skirt with Mirror Work',
      palette: ['#EC4899', '#8B5CF6', '#F59E0B', '#06B6D4'],
      accessories: 'Oxidized silver choker, stacked bangles & bindi accents.'
    },
    Date: {
      outfit: 'Romantic Charm: Soft Floral Midi Dress with Sweetheart Neckline',
      palette: ['#FDA4AF', '#F43F5E', '#FFF1F2', '#475569'],
      accessories: 'Dainty pendant necklace, soft velvet hair bow & rose blush.'
    }
  };

  const fashionInfo = fashionMap[occasion] || fashionMap['College'];

  // Makeup recommendation
  const makeupMap = {
    Simple: 'Monochromatic Nude look with velvety skin prep, soft brown mascara, and nude-pink lip tint.',
    Traditional: 'Warm bronzed eye shadow with winged eyeliner, glowing peach blush, and deep berry/ruby lip.',
    Modern: 'Glass skin base, fluffy brushed brows, subtle graphic liner, and glossy coral lip oil.',
    Professional: 'Clean satin finish foundation, neutral warm eyeshadow, soft brown liner, and dusty rose lipstick.',
    Trendy: 'Dewy skin, faux freckles, pop of lilac/champagne shimmer on lids, and glossy lip liner combo.',
    Elegant: 'Luminous skin base, soft smoked eyeliner, defined lashes, and timeless rose-nude matte lips.'
  };

  const makeupLook = makeupMap[style] || makeupMap['Elegant'];

  // Skincare recommendations (Strictly non-medical based on self-reported inputs)
  const skincareMap = {
    Normal: {
      morning: '1. Gentle Amino Cleanser → 2. Vitamin C Antioxidant Serum → 3. Light Hydrator → 4. SPF 50 Sunscreen',
      evening: '1. Micellar Water Cleanser → 2. Hydrating Rose Toner → 3. Barrier Repair Cream'
    },
    Dry: {
      morning: '1. Hydrating Cream Cleanser → 2. Hyaluronic Acid Fluid → 3. Ceramide Deep Cream → 4. Dewy SPF 50',
      evening: '1. Gentle Cleansing Balm → 2. Squalane Facial Oil → 3. Overnight Moisture Mask'
    },
    Oily: {
      morning: '1. Salicylic Foaming Wash → 2. Niacinamide 10% Serum → 3. Oil-Free Gel Moisturizer → 4. Matte SPF 50',
      evening: '1. Deep Clarifying Cleanser → 2. BHA Pore Exfoliant (2x/wk) → 3. Lightweight Barrier Gel'
    },
    Combination: {
      morning: '1. Gentle Balancing Cleanser → 2. Niacinamide T-Zone Fluid → 3. Light Ceramide Cream → 4. Gel SPF 50',
      evening: '1. Amino Foam Wash → 2. Balancing Toner → 3. Targeted T-Zone Treatment + Hydrating Night Moisturizer'
    },
    Sensitive: {
      morning: '1. Oat Calm Gel Wash → 2. Centella Soothing Essence → 3. Fragrance-Free Barrier Cream → 4. Mineral SPF 50',
      evening: '1. Gentle Milk Cleanser → 2. Thermal Spring Mist → 3. Cica Repair Cream'
    }
  };

  const skincareRoutine = skincareMap[skinType] || skincareMap['Combination'];

  // DYNAMIC PHOTO-BASED PRODUCT SELECTION
  const selectedProducts = selectProductsForBudget(targetBudget, occasion, skinType, faceShape, image);

  return {
    userProfile: {
      occasion,
      style,
      budget: targetBudget,
      skinType,
      concerns,
      faceShape,
      image
    },
    glowScore,
    faceAnalysis: {
      shape: faceShape,
      confidence: '98%',
      attributes: [
        `Balanced cheekbone-to-jaw ratio`,
        `Complements ${hairInfo.cut}`,
        `Soft architectural framing`,
        `Suits ${occasion} lighting atmosphere`
      ],
      frameStyle: faceShape === 'Oval' || faceShape === 'Square' ? 'Slim Oval or Hexagonal Frames' : 'Structured Rectangular Frames'
    },
    hair: hairInfo,
    fashion: fashionInfo,
    makeup: {
      styleName: `${style} ${occasion} Glow`,
      description: makeupLook,
      shades: ['#FCA5A5', '#F43F5E', '#991B1B', '#FDE047']
    },
    skincare: skincareRoutine,
    products: selectedProducts,
    budgetBreakdown: calculateBudgetBreakdown(selectedProducts, targetBudget)
  };
}

function selectProductsForBudget(budget, occasion, skinType, faceShape, image = '') {
  const photoSeed = hashString((image || '') + occasion + skinType + faceShape);

  const getBestProductForCategory = (category) => {
    const candidateProducts = BEAUTY_PRODUCTS_CATALOG.filter(p => p.category === category);
    if (!candidateProducts.length) return BEAUTY_PRODUCTS_CATALOG[0];

    // Score each candidate product based on image hash offset + skin/occasion match
    const scored = candidateProducts.map((prod, idx) => {
      let score = 0;
      
      // Photo Seed Match: rotates which product is selected based on the specific photo
      const seedOffset = (photoSeed + idx * 13) % candidateProducts.length;
      score += (candidateProducts.length - seedOffset) * 4;

      // Skin Type Match
      if (prod.skinTypes.includes(skinType)) score += 10;
      if (prod.skinTypes.includes('All')) score += 5;

      // Occasion Match
      if (prod.occasions.includes(occasion)) score += 10;
      if (prod.occasions.includes('All')) score += 5;

      return { prod, score };
    });

    scored.sort((a, b) => b.score - a.score);
    return { ...scored[0].prod };
  };

  const hair = getBestProductForCategory('Hair');
  const makeup = getBestProductForCategory('Makeup');
  const skincare = getBestProductForCategory('Skincare');
  const accessory = getBestProductForCategory('Accessories');

  let list = [hair, makeup, skincare, accessory];

  // Check if exceeds budget
  let total = list.reduce((a, b) => a + b.price, 0);

  // If total > budget, optimize automatically down to dupe pricing!
  if (total > budget) {
    list = list.map(item => {
      if (item.price > budget * 0.35 && item.dupePrice) {
        return {
          ...item,
          name: item.dupeName,
          price: item.dupePrice,
          isOptimizedDupe: true,
          originalName: item.name,
          originalPrice: item.price,
          whySelected: item.whySelected + ` (Budget Optimized: Saved ₹${item.price - item.dupePrice})`
        };
      }
      return item;
    });
  }

  return list;
}

function calculateBudgetBreakdown(products, targetBudget) {
  const categories = { Hair: 0, Makeup: 0, Skincare: 0, Accessories: 0 };
  let total = 0;

  products.forEach(p => {
    if (categories[p.category] !== undefined) {
      categories[p.category] += p.price;
    }
    total += p.price;
  });

  return {
    hair: categories.Hair,
    makeup: categories.Makeup,
    skincare: categories.Skincare,
    accessories: categories.Accessories,
    total,
    targetBudget,
    remaining: targetBudget - total,
    isWithinBudget: total <= targetBudget
  };
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}
