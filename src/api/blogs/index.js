import village1 from "../../assets/images/village/village1.jpg";
import village2 from "../../assets/images/village/village2.jpg";
import village3 from "../../assets/images/village/village3.jpg";
import village5 from "../../assets/images/village/village5.jpg";

const sourceNotes = [
  "Maikoti village profile pages listing administrative details, area, households, population, sex ratio, and education and health access references.",
  "Postal directory entries listing Maikoti Post Office as a Sub Office with PIN code 246448 and delivery status.",
  "Rudraprayag district and Uttarakhand tourism pages describing Augustmuni and the wider district context.",
  "Current weather listings used only for contextual understanding, not for long-term factual claims.",
];

const createBlog = (blog) => {
  const wordCount = blog.paragraphs.join(" ").split(/\s+/).filter(Boolean).length;

  return {
    ...blog,
    readingMinutes: Math.max(3, Math.ceil(wordCount / 180)),
    sourceNotes,
  };
};

export const blogPosts = [
  createBlog({
    slug: "maikoti-village-identity-demographics-rural-character",
    title: "Maikoti Village, Rudraprayag: Identity, Demographics, and Rural Character",
    subtitle: "Village identity, demographics, and rural character",
    language: "English",
    category: "Village Identity",
    image: village1,
    excerpt:
      "Maikoti reflects the social cohesion, agricultural tradition, and mountain resilience that define rural Uttarakhand.",
    paragraphs: [
      "Tucked into the hill landscape of Rudraprayag district, Maikoti is the kind of Himalayan village that quietly represents the strength of Uttarakhand's rural life. It is administratively linked with Augustmuni block and Rudraprayag tehsil, and although it may not appear on every mainstream travel list, it carries the identity of a real Garhwali settlement shaped by agriculture, community, and mountain resilience.",
      "What makes Maikoti interesting for readers is not only its location, but the way it reflects the social character of the region. Census-era profile pages describe the village as a compact settlement of around 100 households with a population of 347. That scale matters. In a village of this size, social life is not anonymous. Families know each other, local rhythms are shared, and the idea of community still has practical meaning in everyday life.",
      "The demographic profile of Maikoti is also noteworthy. Public village directories show that the female population was higher than the male population in the last published census-based snapshot. Such numbers do not tell the whole story of a village, but they do suggest a social structure that deserves attention. In many hill communities of Uttarakhand, women play a central role in agriculture, household management, water collection, caregiving, and cultural continuity. A village like Maikoti can therefore be understood not just through geography, but through the strength of the people who sustain it.",
      "Another important aspect is land and livelihood. The reported geographical area of Maikoti is a little over 190 hectares, and available profile data indicates that cultivation has historically been a major source of work. That fits the larger pattern of hill villages across Garhwal, where farming is often tied to season, slope, rainfall, and household labor. In such places, agriculture is not just an occupation; it is part of identity. Terraced fields, local food habits, and a close relationship with land shape the village economy as much as formal market systems do.",
      "Education and health access in villages like Maikoti also reveal the practical realities of mountain life. Directory-style sources suggest that several facilities are accessed at some distance rather than being concentrated within the village itself. This is a familiar story across many parts of Uttarakhand: village life offers peace, community, and natural beauty, but also demands mobility, patience, and adaptation when it comes to services.",
      "For website readers, Maikoti is best introduced as a village that stands for authenticity. It is not defined by commercial tourism, large infrastructure, or digital noise. Instead, it reflects the quieter strengths of rural Uttarakhand: social cohesion, agricultural tradition, and a close relationship with the landscape. The nearby Augustmuni and Rudraprayag belt connects it to the wider cultural and pilgrimage geography of the district, giving it both local rootedness and regional relevance.",
      "In a time when many people are searching for meaningful stories beyond crowded destinations, Maikoti offers a different kind of value. It reminds us that villages are not small in importance just because they are small in population. They preserve language, memory, work culture, and local heritage. For anyone interested in the living fabric of Uttarakhand, Maikoti is not just a point on a map. It is a meaningful part of the state's mountain identity.",
    ],
  }),
  createBlog({
    slug: "maikoti-cultural-landscape-access-small-villages-matter",
    title: "Why Maikoti Matters: Cultural Landscape, Access, and Quiet Significance",
    subtitle: "Cultural landscape, access, and why small villages matter",
    language: "English",
    category: "Regional Context",
    image: village2,
    excerpt:
      "Maikoti shows the human side of the Garhwal Himalaya where village life, culture, and civic identity stay grounded in daily rhythm.",
    paragraphs: [
      "When people think of Rudraprayag, they often think first of pilgrimage routes, river valleys, and the famous spiritual geography of Uttarakhand. But the soul of the district is also found in its villages. Maikoti, associated with the Augustmuni-Rudraprayag region, offers exactly that perspective: a quieter, grounded, and deeply local view of the Himalaya.",
      "A village like Maikoti is important because it helps us understand the human side of the mountains. The Garhwal Himalaya is not only a landscape of temples and travel circuits; it is also a lived space of homes, fields, paths, schools, and post offices. Publicly available village records identify Maikoti as a gram panchayat-level settlement with its own postal identity, including PIN code 246448. That may sound like a simple administrative detail, but it signals something meaningful: the village is connected, recognized, and part of a living civic network.",
      "Maikoti's charm lies in the balance between remoteness and linkage. It belongs to a district known for dramatic natural surroundings and spiritual travel, yet villages such as Maikoti are where regional culture is practiced in daily life rather than performed for visitors. This is where language survives in its natural rhythm, where food remains seasonal, and where routines are still shaped by land, weather, and local relationships.",
      "The broader setting adds to its appeal. Augustmuni, a well-known town in the district, has religious and cultural significance and sits on the Mandakini-side route that connects people to the wider Kedarnath region. Rudraprayag itself is historically and spiritually important within Uttarakhand. A village situated in this belt benefits from being part of a larger landscape of memory, movement, and devotion. Even when a village is not a headline destination, it still belongs to a powerful regional story.",
      "Maikoti is also the kind of place that invites slower attention. Instead of asking what grand monument it contains, one should ask what kind of life it represents. The answer may include farming-led households, interdependent family structures, and a social environment where local identity matters. Census-based village data points to a small but organized settlement, and that scale often creates a stronger sense of belonging than larger urban spaces can offer.",
      "For travel writers, heritage enthusiasts, and readers interested in rural India, Maikoti can be presented as a model of understated significance. It is not about spectacle; it is about texture. The texture of a place is found in its community rhythm, in the practical relationship between people and terrain, and in the continuity of rural life despite change. These are precisely the qualities that make Himalayan villages memorable.",
      "There is also an emotional reason to write about places like Maikoti. Across India, many villages remain underrepresented online unless they are tied to a major event or tourist circuit. Writing professionally about them is a way to preserve visibility. It tells readers that every village has context, value, and a story worth presenting with dignity.",
      "Maikoti deserves that kind of attention. It may be modest in size, but it carries the atmosphere of the Garhwal hills, the discipline of village life, and the cultural quietness that many modern readers increasingly appreciate. In that sense, Maikoti is not merely a rural settlement near Rudraprayag. It is a reminder that the true character of Uttarakhand lives just as much in its villages as in its famous destinations.",
    ],
  }),
  createBlog({
    slug: "maikoti-grameen-jeevan-samudaayik-sanrachna-pahaadi-pehchaan",
    title: "मैकोटी गांव: ग्रामीण जीवन, सामुदायिक संरचना और पहाड़ी पहचान",
    subtitle: "ग्रामीण जीवन, सामुदायिक संरचना और पहाड़ी पहचान",
    language: "हिंदी",
    category: "ग्रामीण पहचान",
    image: village3,
    excerpt:
      "मैकोटी गांव उत्तराखंड की ग्रामीण आत्मा, महिला-शक्ति, खेती और सामुदायिक संतुलन का जीवंत उदाहरण है।",
    paragraphs: [
      "उत्तराखंड के रुद्रप्रयाग जनपद में स्थित मैकोटी गांव एक ऐसा पहाड़ी गांव है, जो अपनी सादगी, सामुदायिक जीवन और स्थानीय पहचान के कारण विशेष महत्व रखता है। अगस्त्यमुनि ब्लॉक और रुद्रप्रयाग तहसील से जुड़ा यह गांव उन स्थानों में शामिल है, जहां हिमालयी जीवन की वास्तविक तस्वीर आज भी महसूस की जा सकती है। यह सिर्फ एक भौगोलिक बस्ती नहीं, बल्कि पहाड़ के जीवन-मूल्यों का जीवंत उदाहरण है।",
      "मैकोटी की खासियत इसकी शांति और इसका मानवीय पैमाना है। उपलब्ध गांव-प्रोफाइल और जनगणना आधारित जानकारी के अनुसार यहां लगभग 100 परिवार रहते हैं और कुल आबादी 347 के आसपास दर्ज की गई थी। इतने छोटे आकार का गांव होने का अर्थ है कि यहां संबंध केवल पड़ोसीपन तक सीमित नहीं होते, बल्कि सामाजिक सहयोग, पारिवारिक जुड़ाव और साझा जिम्मेदारी का मजबूत ताना-बाना बनाते हैं।",
      "मैकोटी जैसे गांवों को समझने के लिए केवल आबादी के आंकड़े देखना पर्याप्त नहीं है। यहां का वास्तविक महत्व उस जीवन-शैली में है, जो पीढ़ियों से पहाड़ की परिस्थितियों के साथ विकसित हुई है। खेती, पशुपालन, घरेलू श्रम, जल स्रोतों पर निर्भरता, मौसम के अनुसार कार्य-विभाजन और सामुदायिक सहयोग, ये सभी तत्व मिलकर गांव की आत्मा बनाते हैं। पहाड़ में जीवन सुविधा से अधिक संतुलन और अनुशासन पर आधारित होता है, और मैकोटी उसी परंपरा का हिस्सा दिखाई देता है।",
      "उपलब्ध आंकड़ों में एक महत्वपूर्ण बात यह भी सामने आती है कि गांव में महिलाओं की संख्या पुरुषों से अधिक दर्ज की गई थी। यह तथ्य पहाड़ी समाज की उस वास्तविकता की याद दिलाता है, जहां महिलाओं की भूमिका अत्यंत केंद्रीय होती है। खेत से लेकर परिवार तक, परंपरा से लेकर दैनिक व्यवस्था तक, पहाड़ की सामाजिक और आर्थिक संरचना में महिलाओं का योगदान अत्यंत गहरा रहता है। इसलिए मैकोटी का परिचय केवल एक गांव के रूप में नहीं, बल्कि ग्रामीण महिला-शक्ति और सामुदायिक स्थिरता के प्रतीक के रूप में भी किया जा सकता है।",
      "मैकोटी की भौगोलिक पहचान भी उल्लेखनीय है। गांव का क्षेत्रफल लगभग 190 हेक्टेयर से अधिक बताया गया है, जो यह संकेत देता है कि यहां भूमि, खेती और प्राकृतिक परिवेश गांव की संरचना में महत्वपूर्ण भूमिका निभाते हैं। उत्तराखंड के अधिकांश पहाड़ी गांवों की तरह यहां भी जमीन केवल उत्पादन का साधन नहीं होती, बल्कि परिवार, परंपरा और आत्मनिर्भरता का आधार होती है।",
      "शिक्षा और स्वास्थ्य सुविधाओं के संदर्भ में भी मैकोटी पहाड़ी जीवन की व्यवहारिक चुनौतियों को सामने लाता है। सार्वजनिक विवरणों से संकेत मिलता है कि कई प्रमुख सुविधाएं गांव के बाहर या कुछ दूरी पर उपलब्ध हैं। यह स्थिति उत्तराखंड के अनेक ग्रामीण क्षेत्रों में सामान्य है, जहां प्रकृति का सौंदर्य और सामुदायिक जीवन तो समृद्ध होता है, पर सेवाओं तक पहुंच के लिए अतिरिक्त प्रयास करना पड़ता है।",
      "वेबसाइट के लिए यदि मैकोटी पर ब्लॉग लिखा जाए, तो इसे उत्तराखंड की ग्रामीण आत्मा के रूप में प्रस्तुत किया जा सकता है। यह गांव शोर-शराबे, व्यावसायिक पर्यटन और तेज शहरीकरण से दूर एक संतुलित दुनिया का परिचय देता है। यहां का महत्व किसी बड़े बाजार या प्रसिद्ध स्थल के कारण नहीं, बल्कि उस जीवन-दर्शन के कारण है जो पहाड़ को पहाड़ बनाता है।",
      "आज जब लोग प्रामाणिक, शांत और सांस्कृतिक रूप से समृद्ध स्थानों के बारे में जानना चाहते हैं, तब मैकोटी जैसे गांवों पर लिखना और भी आवश्यक हो जाता है। ऐसे गांव हमें बताते हैं कि विकास केवल इमारतों और सड़कों से नहीं मापा जाता; विकास का एक रूप वह भी है, जिसमें समुदाय, परंपरा और स्थानीय पहचान सुरक्षित रहे। मैकोटी इसी अर्थ में रुद्रप्रयाग जनपद की एक महत्वपूर्ण ग्रामीण पहचान है।",
    ],
  }),
  createBlog({
    slug: "maikoti-kshetriya-sandarbh-sanskritik-mahatva-digital-prastuti",
    title: "मैकोटी गांव: क्षेत्रीय संदर्भ, सांस्कृतिक महत्व और डिजिटल प्रस्तुति",
    subtitle: "क्षेत्रीय संदर्भ, सांस्कृतिक महत्व और डिजिटल प्रस्तुति",
    language: "हिंदी",
    category: "सांस्कृतिक संदर्भ",
    image: village5,
    excerpt:
      "मैकोटी गांव को सही डिजिटल प्रस्तुति, क्षेत्रीय संदर्भ और सांस्कृतिक गरिमा के साथ सामने लाना उसकी पहचान को मजबूत बनाता है।",
    paragraphs: [
      "मैकोटी गांव, रुद्रप्रयाग जनपद के उस शांत ग्रामीण परिदृश्य का हिस्सा है, जहां प्रकृति, परंपरा और पहाड़ी जीवन एक साथ दिखाई देते हैं। अगस्त्यमुनि और रुद्रप्रयाग क्षेत्र से जुड़ा यह गांव उन पाठकों के लिए विशेष आकर्षण रख सकता है, जो उत्तराखंड को केवल पर्यटन स्थलों से नहीं, बल्कि उसके वास्तविक ग्रामीण समाज से समझना चाहते हैं।",
      "मैकोटी का परिचय एक ऐसे गांव के रूप में किया जा सकता है, जो आकार में भले छोटा हो, लेकिन अपनी सामाजिक संरचना और स्थानीय पहचान में समृद्ध है। सार्वजनिक गांव-प्रोफाइल के अनुसार यहां लगभग 100 परिवार हैं और आबादी 347 दर्ज की गई थी। इस तरह के गांवों में जीवन की गति शहरों की तुलना में धीमी जरूर होती है, लेकिन सामाजिक रूप से अधिक जुड़ी हुई होती है। यहां व्यक्ति अकेला नहीं रहता; वह परिवार, समुदाय और स्थानीय परंपराओं से लगातार जुड़ा रहता है।",
      "मैकोटी की एक व्यावहारिक पहचान उसका डाक और प्रशासनिक जुड़ाव भी है। उपलब्ध पोस्टल रिकॉर्ड के अनुसार मैकोटी का पिन कोड 246448 है और यहां का डाकघर सब-ऑफिस श्रेणी में दर्ज है। वेबसाइट के लिए यह जानकारी उपयोगी है, क्योंकि इससे पाठकों को गांव का औपचारिक और भौगोलिक संदर्भ स्पष्ट रूप से समझ में आता है। किसी भी गांव की डिजिटल प्रस्तुति में ऐसी आधारभूत जानकारियां उसकी विश्वसनीयता बढ़ाती हैं।",
      "यदि मैकोटी को व्यापक क्षेत्रीय संदर्भ में देखें, तो इसका महत्व और बढ़ जाता है। रुद्रप्रयाग जिला धार्मिक, सांस्कृतिक और प्राकृतिक दृष्टि से उत्तराखंड के प्रमुख जिलों में गिना जाता है। अगस्त्यमुनि अपने आध्यात्मिक महत्व और मंडाकिनी घाटी से जुड़ी पहचान के लिए जाना जाता है। ऐसे क्षेत्र में स्थित कोई भी गांव केवल एक बस्ती भर नहीं होता; वह उस पूरे सांस्कृतिक भूगोल का हिस्सा बन जाता है, जिसमें आस्था, पहाड़, नदी और स्थानीय जीवन साथ-साथ चलते हैं।",
      "मैकोटी पर ब्लॉग लिखते समय केवल सूचना देना पर्याप्त नहीं है; उसके वातावरण को भी पाठक तक पहुंचाना जरूरी है। कल्पना कीजिए एक ऐसे गांव की, जहां सुबहें पहाड़ी हवा के साथ शुरू होती हैं, जहां खेत और घर एक-दूसरे से जुड़े हुए जीवन का हिस्सा हैं, और जहां आधुनिक बदलावों के बीच भी पारंपरिक जीवन-मूल्य पूरी तरह समाप्त नहीं हुए हैं। यही वह भावनात्मक और सांस्कृतिक परत है, जो मैकोटी को विशेष बनाती है।",
      "ग्रामीण उत्तराखंड की सबसे बड़ी शक्ति उसका सामाजिक संतुलन है। गांव छोटे हो सकते हैं, लेकिन उनमें सहयोग की भावना बड़ी होती है। स्थानीय त्योहार, रिश्तेदारी, सामूहिक कार्य और कठिन भौगोलिक परिस्थितियों में साथ खड़े रहने की परंपरा, ये सभी बातें किसी भी पहाड़ी गांव को केवल रहने की जगह नहीं, बल्कि एक जीवंत सामाजिक इकाई बनाती हैं। मैकोटी को भी इसी दृष्टि से समझना चाहिए।",
      "आज डिजिटल प्लेटफॉर्म पर गांवों की पेशेवर प्रस्तुति बहुत महत्वपूर्ण हो गई है। जब किसी गांव के बारे में सही, संतुलित और सम्मानजनक तरीके से लिखा जाता है, तो वह केवल जानकारी नहीं देता, बल्कि पहचान भी बनाता है। मैकोटी पर लिखा गया अच्छा ब्लॉग इस गांव को स्थानीय इतिहास, ग्रामीण संस्कृति और उत्तराखंड की जीवंत विरासत के संदर्भ में सामने ला सकता है।",
      "मैकोटी इसलिए महत्वपूर्ण है क्योंकि यह हमें याद दिलाता है कि उत्तराखंड की असली शक्ति उसके गांवों में बसती है। प्रसिद्ध पर्यटन स्थलों के पीछे जो सामाजिक और सांस्कृतिक आधार है, वह इन्हीं गांवों से आता है। मैकोटी उसी आधार का एक शांत, गरिमामय और सार्थक उदाहरण है।",
    ],
  }),
];

export const getBlogBySlug = (slug) =>
  blogPosts.find((blog) => blog.slug === slug);
