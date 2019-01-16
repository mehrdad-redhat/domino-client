export let blogGridArticles = [
  {
    thumbnail: '../../../assets/images/recom-blog/a1.png',
    title: 'کیک با شیر وانیلی',
    alias: 'cake-with-vanila-milk',
  },
  {
    thumbnail: '../../../assets/images/recom-blog/a2.png',
    title: 'کیک با شیر قهوه',
    alias: 'cake-with-coffe-milk',
  },
  {
    thumbnail: '../../../assets/images/recom-blog/a3.png',
    title: 'کیک با شیر سفید',
    alias: 'cake-with-regular-milk',
  },
  {
    thumbnail: '../../../assets/images/recom-blog/a1.png',
    title: 'کیک با شیر وانیلی',
    alias: 'cake-with-vanila-milk',
  },
  {
    thumbnail: '../../../assets/images/recom-blog/a2.png',
    title: 'کیک با شیر قهوه',
    alias: 'cake-with-coffe-milk',
  },
  {
    thumbnail: '../../../assets/images/recom-blog/a3.png',
    title: 'کیک با شیر سفید',
    alias: 'cake-with-regular-milk',
  }
];

export let blogSingleCookingArticle={
  id: 12,
  category: 'cooking',
  title: 'آشپزی دسر با بستنی زعفرونی',
  image: '/assets/images/blog-cooking.png',
  alias: 'ashpazi-deser-ba-bastani-zaferooni',
  author: 'ترنم آزاد',
  likeNumber: 48,
  viewNumber: 342,
  created_date: 1543074634000,
  comments: [
    {
      author: 'مهرداد حلمی',
      text: 'اگر از بستنی دارچینی استفاده می کنید، دارچین را از رسپی حذف کنید. اگر از بستنی مغزدار استفاده می کنید، مغزهای کاراملی شده را حذف کنید. خلاصه این که هرچند تهیه دسر بستنی باقلوا مراحل مختلفی دارد، اما اگر وقت زیادی نداشته باشید هم می‌توانید با کمی تغییر آن را سریع آماده کنید.',
      created_date: 1543135834000
    },
    {
      author: 'کاوه کاظمی',
      text: 'خیلی آموزش خوبی بود ممنون.میخواستم بپرسم این دسر برای چند نفره؟لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      created_date: 1543838642000
    },
    {
      author: 'سارا صفایی',
      text: 'من متوجه مراحل نشدم، لطف میکنید یکبار دیگه توضیح بدید یا حضوری بیاید شرکت ما؟کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
      created_date: 1543489382000
    }
  ],
  recommended_articles: [
    {
      id: 4,
      image: '/assets/images/recommended-blog/r1.jpg',
      title: 'کیک شیر با وانیل',
      alias: 'keyke-shir-ba-vanil',
      viewNumber: 455,
      likeNumber: 48
    },
    {
      id: 4,
      image: '/assets/images/recommended-blog/r2.jpg',
      title: 'کیک شیر با وانیل',
      alias: 'keyke-shir-ba-vanil',
      viewNumber: 455,
      likeNumber: 48
    },
    {
      id: 4,
      image: '/assets/images/recommended-blog/r3.jpg',
      title: 'کیک شیر با وانیل',
      alias: 'keyke-shir-ba-vanil',
      viewNumber: 455,
      likeNumber: 48
    }
  ],
  takenTime: 95,
  summary: 'کیک بستنی یک دسر عالی و خوشمزه است. کیک بستنی ترکیبی از دو دسر خوشمزه و پر طرفدار یعنی کیک و بستنی است و کمتر کسی پیدا می‌شود که از این دسر خوشمزه لذت نبرد. با رعایت چند نکته ساده می‌توانید به راحتی آن را در منزل تهیه کنید و نوش جان بفرمایید.',
  toolsAndMatterial: {
    image: '/assets/images/cooking-article/ci1.png',
    tools: [
      {name: 'همزن', value: 'برقی'},
      {name: 'ظرف', value: '۳ سایز'},
      {name: 'یخچال', value: '۲۰ فوت'},
    ],
    material: [
      {name: 'موز', value: '۱ عدد (یخ زده و خرد شده)'},
      {name: 'شیر', value: '۱ فنجان'},
      {name: 'بستنی‌زعفرانی دومینو', value: ' ۲ فنجان'},
      {name: 'کره مارگارین', value: '۱/۴ فنجان'},
      {name: 'سیروپ پیناکولادا', value: '۱/۴ فنجان'},
    ]
  },
  steps: [
    {
      images: [
        '/assets/images/cooking-article/ci2.png'
      ],
      title: 'آمادگی کار + نکات',
      description: 'از آنجا که این کیک زمان کمتری برای جمع آوری می کند، من توصیه می کنم آن را در روز قبل و اجازه دهید آن را یک شبه سرد. این کیک دو روز \n' +
        'طول کشید تا از زمانی که من نور طبیعی خوبی داشتم، آن را جمع آوری کنم، اما فکر می کنم به راحتی می توانید در عرض 6-8 ساعت آن را انجام \n' +
        'دهید.\n' +
        '\n' +
        'قبل از اینکه کیک را شروع کنید، مطمئن شوید که پایین پای تان را با کاغذ بریزید. در اطراف لبه ها قرار دهید، بنابراین فقط یک یا دو یا دو حلقه \n' +
        'وجود دارد. پس از آن حداقل یک ساعت در فریزر را خنک کنید و این باعث می شود که لایه بیرونی کیک سریعتر شود. :)\n' +
        '\n' +
        'من همچنین توصیه می کنم داشتن یک صفحه بزرگ و یا تخت برای تبدیل کیک به خارج - این به شما این امکان را می دهد که به آن بسیار \n' +
        'ساده تر خدمت کنید و اگر شما آنها را بخواهید، دکوراتی را نیز اضافه کنید.'
    },
    {
      images: [
        '/assets/images/cooking-article/ci3.png',
        '/assets/images/cooking-article/ci4.jpg'
      ],
      title: 'پوشش لایه ای ظرف کیک',
      description: 'برای این لایه، شما نیاز به یک کوار از بستنی وانیلی و وان از شربت شلاق. اجازه دهید آنها را نشستن و نرم، و سپس آنها را با هم در یک کاسه \n' +
        'بزرگ مخلوط کنید. هنگامی که آنها به خوبی ترکیب شده، کاسه را در فریزر چند دقیقه بگذارید تا مخلوط را کمی کم کنید.\n' +
        '\n' +
        'از پانل سرامیکی سرد خود را بیرون بیاورید و شروع به پخش یک لایه نازک از بستنی می کنید که در امتداد قسمت های داخلی قالب پلاستیکی \n' +
        'قرار دارد. کار را ادامه دهید تا بستنی شروع به نرم شدن کند و پس از آن 15 تا 20 دقیقه در فریزر هر دو قالب پلاستیکی و کاسه کار خود قرار \n' +
        'دهید.\n' +
        '\n' +
        'تکرار این فرآیند تا زمانی که دو طرف در حدود یک اینچ ضخامت دارند، سپس بقیه یخ را به انتهای تابه اضافه کنید و آن را صاف کنید. سعی \n' +
        'کنید همه چیز را تا حدی که ممکن است انجام دهید زیرا این لایه بالا خواهد بود.\n' +
        '\n' +
        'خامه آن را تا زمانی که پایدار باشد. در حالی که آن را سرد، اجازه دهید یک درجه دوم از بستنی نشستن و گرم شدن.'
    },
    {
      images: [
        '/assets/images/cooking-article/ci5.png',
        '/assets/images/cooking-article/ci6.png'
      ],
      title: 'لایه های فشرده سازی مواد',
      description: 'برای این لایه، شما نیاز به یک کوار از بستنی وانیلی و وان از شربت شلاق. اجازه دهید آنها را نشستن و نرم، و سپس آنها را با هم در یک کاسه \n' +
        'بزرگ مخلوط کنید. هنگامی که آنها به خوبی ترکیب شده، کاسه را در فریزر چند دقیقه بگذارید تا مخلوط را کمی کم کنید.\n' +
        '\n' +
        'از پانل سرامیکی سرد خود را بیرون بیاورید و شروع به پخش یک لایه نازک از بستنی می کنید که در امتداد قسمت های داخلی قالب پلاستیکی \n' +
        'قرار دارد. کار را ادامه دهید تا بستنی شروع به نرم شدن کند و پس از آن 15 تا 20 دقیقه در فریزر هر دو قالب پلاستیکی و کاسه کار خود قرار \n' +
        'دهید.\n' +
        '\n' +
        'تکرار این فرآیند تا زمانی که دو طرف در حدود یک اینچ ضخامت دارند، سپس بقیه یخ را به انتهای تابه اضافه کنید و آن را صاف کنید. سعی \n' +
        'کنید همه چیز را تا حدی که ممکن است انجام دهید زیرا این لایه بالا خواهد بود.\n' +
        '\n' +
        'خامه آن را تا زمانی که پایدار باشد. در حالی که آن را سرد، اجازه دهید یک درجه دوم از بستنی نشستن و گرم شدن.'
    }
  ]
};

export let blogSingleNewsArticle={
  id: 11,
  category: 'news',
  title: '۲۵ راز آشپزی برای خوش طعم کردن غذا',
  image: '/assets/images/blog-news.png',
  alias: 'ashpazi-deser-ba-bastani-zaferooni',
  author: 'مجله دوستان',
  likeNumber: 48,
  viewNumber: 342,
  created_date: 1539514982000,
  comments: [
    {
      author: 'مهرداد حلمی',
      text: 'اگر از بستنی دارچینی استفاده می کنید، دارچین را از رسپی حذف کنید. اگر از بستنی مغزدار استفاده می کنید، مغزهای کاراملی شده را حذف کنید. خلاصه این که هرچند تهیه دسر بستنی باقلوا مراحل مختلفی دارد، اما اگر وقت زیادی نداشته باشید هم می‌توانید با کمی تغییر آن را سریع آماده کنید.',
      created_date: 1543135834000
    },
    {
      author: 'کاوه کاظمی',
      text: 'خیلی آموزش خوبی بود ممنون.میخواستم بپرسم این دسر برای چند نفره؟لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      created_date: 1543838642000
    },
    {
      author: 'سارا صفایی',
      text: 'من متوجه مراحل نشدم، لطف میکنید یکبار دیگه توضیح بدید یا حضوری بیاید شرکت ما؟کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
      created_date: 1543489382000
    }
  ],
  recommended_articles: [
    {
      id: 4,
      image: '/assets/images/recommended-blog/r1.jpg',
      title: 'کیک شیر با وانیل',
      alias: 'keyke-shir-ba-vanil',
      viewNumber: 455,
      likeNumber: 48
    },
    {
      id: 4,
      image: '/assets/images/recommended-blog/r2.jpg',
      title: 'کیک شیر با وانیل',
      alias: 'keyke-shir-ba-vanil',
      viewNumber: 455,
      likeNumber: 48
    },
    {
      id: 4,
      image: '/assets/images/recommended-blog/r3.jpg',
      title: 'کیک شیر با وانیل',
      alias: 'keyke-shir-ba-vanil',
      viewNumber: 455,
      likeNumber: 48
    }
  ],
  summary: 'آشپزی مانند هر مهارت دیگری با تمرین و تکرار به تکامل می‌رسد و هر آشپزی در طول فعالیت خود به نکاتی دست پیدا می‌کند که او را از بقیه متمایز می‌کند.\n' +
    'راهکار‌هایی که به راحتی در اختیار دیگران قرار می‌گیرد، حاصل سال‌ها تلاش و ممارست آشپزهاست.\n' +
    'در ادامه با آخرین خبر همراه باشید تا چند ترفند و راز آشپزی برای داشتن یک دستپخت خوشمزه را یاد بگیرید.\n' +
    '۱-برای از بین بردن تلخی کاهو کافی است چند دقیقه‌ای آن را داخل محلول آب سرد و نمک قرار بدهید.\n' +
    '۲-میوه‌های قرمز رنگ را قبل از شستن حتما چند ساعت در یخچال قرار دهید تا مدت بیشتری سالم بماند و له نشود.\n' +
    '۳-سیب را داخل نایلون پلاستیکی درباز در یخچال قرار دهید. سیب، گازی از خود متصاعد می‌کند که به بهتر رسیدن دیگر میوه‌ها و سبزی‌ها کمک می‌کند، بنابراین اگر میوه نرسیده‌ای دارید، از سیب برای رسیدن سریع‌تر آن استفاده کنید.\n' +
    '۴-هنگام سرخ کردن مواد غذایی، حرارت را از ۱۸۰ درجه سانتی گراد بالاتر نبرید. بعد از هر بار سرخ کردن، روغن درون ظرف را خالی و با دستمال آن را پاک کنید و دوباره روغن بریزید و مواد غذایی را سرخ کنید، اما بعد از هشت بار حتما ظرف را بشویید. مواد غذایی سرخ شده را روی حوله کاغذی بگذارید تا روغن‌شان خوب گرفته شود.',
  summaryImage: '/assets/images/news-article/oi1.jpg',
  sections: [
    {
      image: '/assets/images/news-article/oi2.jpg',
      description: '۸- اگر به غذا بیش از حد فلفل زده‌اید و خیلی تند شده است، چند دقیقه قبل از برداشتن از روی حرارت آب یک عدد لیمو ترش تازه را در آن بریزید و خوب هم بزنید.\n' +
        '۹-برای گرفتن بوی پیاز قبل از خرد کردن آن در غذا اجازه دهید پنج دقیقه در آبجوش قل بزند، حتی می‌توانید پیاز را برش بزنید و چند ساعتی در آب، روغن یا آب لیمو قرار دهید.\n' +
        '۱۰-برای گرفتن بوی کلم در غذا می‌توانید از تکه‌ای نان خشک یا یک قاشق سوپ خوری آرد استفاده کنید.\n' +
        '۱۱- برای ترد شدن کلم قرمز، مقداری آب داخل ظرف بریزید و روی اجاق بگذارید و دو قاشق غذاخوری سرکه به آن اضافه کنید. کلم‌ها را خرد کنید و داخل آب جوش و سرکه بریزید. بعد از مدت کمی آن‌ها را آبکش کنید. اگر کلم خردشده را در ظرف فلزی بریزید و چنددقیقه داخل فریزر قرار دهید، هم بسیار ترد خواهد شد.\n' +
        '۱۲-برای سرخ شدن سریع‌تر پیازها، نصف قاشق چای خوری نمک به روغن درون تابه اضافه کنید. با این کار پیاز‌ها سریع‌تر سرخ می‌شود و طعم بهتری پیدا خواهد کرد.\n' +
        '۱۳-به جای شکستن تخم‌مرغ با لبه ظرف، از سطحی صاف استفاده کنید. به این ترتیب هرگز پوسته تخم مرغ وارد غذا نمی‌شود.\n' +
        '۱۴-برای این که پنیر پیتزای شما خوب کش بیاید، قبل از این که پیتزا را داخل فر بگذارید روی آن آب اسپری کنید.\n' +
        '۱۵-برای این که آش رشته لعاب داشته باشد و خوشمزه‌تر شود، کمی بلغور گندم همراه حبوبات خیس کنید و با هم بپزید.'
    },
    {
      image: '/assets/images/news-article/oi3.jpg',
      description: 'از برگه لواشک، نواری به اندازه دور ظرف مورد نظر به ارتفاع شش تا هفت سانتی‌متر می‌بریم، بعد با کاتر موردنظر که ما در اینجا از کاتر قلب استفاده کردیم، دو عدد قلب در می‌آوریم.\n' +
        'ابتدا یکی از قلب‌ها را در ته ظرف گذاشته، بعد نواری که به اندازه دور تا دور لبه ظرف برش زدیم را روی تکه زیر که لواشک گذاشتیم، قرار داده و با یک برس مقداری رب آلوچه به لبه‌ها و ته ظرف که لواشک گذاشتیم، می‌زنیم. مقداری لواشک خرد شده، آلوچه، آلوی جنگلی، برگه زردآلو، آلبالو خشک و ذغال اخته را با هم مخلوط کرده، مقداری رب آلوچه به مخلوط اضافه می‌کنیم و درون کیک لواشک‌ را با این مخلوط پر می‌کنیم. چند خلال دندان که به ارتفاع دیواره کیک بریده‌ایم، به فاصله مساوی درون کیک نزدیک دیواره می‌زنیم و لایه رویه را روی کیک می‌گذاریم طوری که خلال‌های دندان لواشک رویه کیک را نگه دارد، بعد دوباره با برس از رب آلوچه روی کیک می‌زنیم. از چند تا آلبالو خشک و گل که از لواشک درست کرده‌ایم، برای تزیین کیک استفاده می‌کنیم.'
    }
  ]
};

export let homeDominoBookArticle=[
  {
    category: 'آشپزی',
    category_alias: 'cooking',
    title: '۲۵ راز در آشپزی',
    description: 'در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
    alias: 'cooking',
    image_link: '../../assets/images/blog-cooking.png'
  },
  {
    category: 'اخبار',
    category_alias: 'news',
    title: 'محصولات جدید دومینو',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    alias: 'new-domino-products',
    image_link: '../../assets/images/blog-news.png'
  },
  {
    category: 'کمپین',
    category_alias: 'campaign',
    title: 'مسابقه دسر قاشقی دومینو',
    description: 'از افتخارات دومینو ساخت و بهره برداری از دومین دستگاه تولیدی بستنی بر اساس تحقیقات و ایده پردازی تیم تحقیق و توسعه و فنی شرکت و تولید بزرگترین تولید گنندگان و شرکت دومینو محفوظ باقی خواهد ماند.',
    alias: 'spoon-desert-contest',
    image_link: '../../assets/images/blog-campaign.png'
  }
];

export let homeSlides=[
  {
    caption: `با ما در کمپین خـلاقیت<br>در آشپزی با دسر قاشقی<br>دومیــنــــــو همراه شوید.`,
    button_caption: 'مشاهده شرایط مسابقه',
    button_link: '/blog/campaign-conditions',
    images: [
      '../../assets/images/slider-test/2/1.png',
      '../../assets/images/slider-test/2/2.png',
      '../../assets/images/slider-test/2/3.png'
    ]
  },
  {
    caption: `محصولات جدید دومینو<br>به زودی به بازار<br>عرضه میگردد.`,
    button_caption: 'مشاهده خبر',
    button_link: '/blog/new-products',
    images: [
      '../../assets/images/slider-test/1/1.png',
      '../../assets/images/slider-test/1/2.png',
      '../../assets/images/slider-test/1/3.png'
    ]
  },
  {
    caption: `طرز تهیه دسر طالبی<br>به همراه مسابقه جذاب<br>در وبلاگ دومینو.`,
    button_caption: 'مشاهده آموزش',
    button_link: '/blog/cooking',
    images: [
      '../../assets/images/slider-test/2/1.png',
      '../../assets/images/slider-test/2/2.png',
      '../../assets/images/slider-test/2/3.png'
    ]
  },
];

export let productGridList=[
  {
    logo:'../../../assets/images/product-grid/stickbar-logo.png',
    image:'../../../assets/images/product-grid/stickbar.png',
    subProducts:[
      'کاکائو با روکش شکلات شیری و بادام',
      'قهوه با روکش شکلات شیری و بادام',
      'زعفرانی با روکش زعفران'
    ],
    brandColor:'#FEAE62'
  },
  {
    logo:'../../../assets/images/product-grid/friuty-logo.png',
    image:'../../../assets/images/product-grid/friuty.png',
    subProducts:[
      'آناناس',
      'طالبی',
      'توت‌فرنگی',
      'انگور',
      'هندوانه'
    ],
    brandColor:'#D53F56'
  },{
    logo:'../../../assets/images/product-grid/crispy-logo.png',
    image:'../../../assets/images/product-grid/crispy.png',
    subProducts:[
      'کاکائویی با روکش کاکائو و برنجک',
      'قهوه با روکش شکلات شیری و بادام'
    ],
    brandColor:'#909090'
  }
];

export let productSingleArticles=[
  {
    thumbnail: '../../../assets/images/recom-blog/a1.png',
    title: 'کیک با شیر وانیلی',
    alias: 'cake-with-vanila-milk',
  },
  {
    thumbnail: '../../../assets/images/recom-blog/a2.png',
    title: 'کیک با شیر قهوه',
    alias: 'cake-with-coffe-milk',
  },
  {
    thumbnail: '../../../assets/images/recom-blog/a3.png',
    title: 'کیک با شیر سفید',
    alias: 'cake-with-regular-milk',
  }
];

export let aboutCircleImages = [
  '../../../assets/images/static-pages/about-us-3.jpg',
  '../../../assets/images/static-pages/about-bg-2.jpg',
  '../../../assets/images/static-pages/about-bg-1.jpg'
];

export let surveyQuestionsList = {
  productQuestion: [
    {
      id:0,
      text:'سوهان بستنی',
      answer:null
    },
    {
      id:1,
      text:'گز بستنی',
      answer:null
    },
    {
      id:2,
      text:'بیسکو بستنی',
      answer:null
    },
    {
      id:3,
      text:'شیر پاستوریزه (کامل / پرچرب / کم چرب و …) ',
      answer:null
    },
    {
      id:4,
      text:'بستنی لیوان پذیرایی (وانیل/نسکافه/توت فرنگی/شکلاتی و …)',
      answer:null
    },
    {
      id:5,
      text:'بستنی لیوان معمولی(وانیل / شکلات / توت فرنگی/ زعفرانی و …)',
      answer:null
    },
    {
      id:6,
      text:'بستنی آلپیرال ( زعفرانی / شکلاتی / رابی آناناس / رابی پرتقال و …)',
      answer:null
    },
    {
      id:7,
      text:'بستنی مگنولیا ( کلاسیک / دارک / دابل چاکلت / موزی و …)',
      answer:null
    },
    {
      id:8,
      text:'بستنی شیری (شیری / شکلاتی-شیری موزی و… )',
      answer:null
    },
    {
      id:9,
      text:'بستنی معجون',
      answer:null
    },
    {
      id:10,
      text:'بستنی چوبی تکی( قهوه / البالو / پرتقال / توت فرنگی / هلو و …)',
      answer:null
    },
    {
      id:11,
      text:'بستنی سالینو ( پرتقال / توت فرنگی / هلو و …)',
      answer:null
    },
    {
      id:12,
      text:'بستنی رابی ( آناناس / هلو / پرتقال و …)',
      answer:null
    },
    {
      id:13,
      text:'بستنی پوش آپ',
      answer:null
    },
    {
      id:14,
      text:'بستنی دورادو ( شکلاتی / توت فرنگی / وانیلی و …)',
      answer:null
    },
    {
      id:15,
      text:'بستنی ساندویچی مگنولیا',
      answer:null
    },
    {
      id:16,
      text:'بستنی یخی (لواشکی / زرشک / شاتوت-تمشک و …)',
      answer:null
    },
    {
      id:17,
      text:'بستنی دومینیتا',
      answer:null
    },
    {
      id:18,
      text:'بستنی ویفرنا ( زعفرانی / شکلاتی / توت فرنگی و …)',
      answer:null
    },
    {
      id:19,
      text:'بستنی عروسکی',
      answer:null
    },
    {
      id:20,
      text:'شیر استریلیزه 200 سی سی (پرچرب / کاکائو / موز / نسکافه /عسل/توت فرنگی و …) ',
      answer:null
    },
    {
      id:21,
      text:'شیر استریلیزه یک لیتری (پرچرب / کاکائو / کم چرب و …)',
      answer:null
    }
  ],
  otherQuestions: [
    {
      id:22,
      text:'کیفیت انواع لبنیات و بستنی تولیدی ما در چه سطحی ارزیابی می کنید ؟',
      answer:null
    },
    {
      id:23,
      text:'يكنواختي در تولید انواع لبنیات و بستنی را چگونه می بینید؟',
      answer:null
    },
    {
      id:24,
      text:'کیفیت بسته بندي محصولات ما در چه سطحی است؟',
      answer:null
    },
    {
      id:25,
      text:'میزان تاثیر کیفیت محصولات این شرکت در خرید مجدد شما چقدر است؟',
      answer:null
    },
    {
      id:26,
      text:'نحوه برخورد همکاران و نحوه پاسخگویی آنها را چگونه ارزیابی می کنید ؟',
      answer:null
    }
  ]
};

export let surveyAnswersList=[
  {
    id:0,
    value:4,
    text:'عالی'
  },
  {
    id:2,
    value:3,
    text:'خوب'
  },
  {
    id:3,
    value:2,
    text:'متوسط'
  },
  {
    id:4,
    value:1,
    text:'ضعیف'
  }
];

export let menuProductsList=[
  {
    name:'ice-cream',
    fa_name:'بستنی',
    children:[
      {
        name:'choobi',
        fa_name:'چوبی',
        children:[
          {
            name:'gaz-bastani',
            fa_name:'گز بستنی',
            img:'../../assets/images/product-list/ice-cream/choobi/gaz-bastani.png',
          },
          {
            name:'sohan-bastani',
            fa_name:'سوهان بستنی',
            img:'../../assets/images/product-list/ice-cream/choobi/sohan-bastani.png',
          },
          {
            name:'solo-orange',
            fa_name:'سولو پرتقالی',
            img:'../../assets/images/product-list/ice-cream/choobi/solo-orange.png',
          },
          {
            name:'hendevane',
            fa_name:'هندوانه‌ای',
            img:'../../assets/images/product-list/ice-cream/choobi/hendevane.png',
          },
          {
            name:'talebi',
            fa_name:'طالبی',
            img:'../../assets/images/product-list/ice-cream/choobi/talebi.png',
          },
        ]
      },
      {
        name:'ghifi',
        fa_name:'قیفی',
        children:[
          {
            name:'carnino-chocklate-suace',
            fa_name:'کارنینو وانیل  با سس شکلات',
            img:'../../assets/images/product-list/ice-cream/ghifi/carnino-chocklate-suace.png',
          },
          {
            name:'carnino-strawberry-suace',
            fa_name:'کارنینو وانیل  با سس توت فرنگی',
            img:'../../assets/images/product-list/ice-cream/ghifi/carnino-strawberry-suace.png',
          },
          {
            name:'carnino-zaferan',
            fa_name:'کارنینو زعفران',
            img:'../../assets/images/product-list/ice-cream/ghifi/carnino-zaferan.png',
          },
          {
            name:'carnino-strawberry',
            fa_name:'کارنینو توت فرنگی',
            img:'../../assets/images/product-list/ice-cream/ghifi/carnino-strawberry.png',
          },
          {
            name:'carnino-chocklate',
            fa_name:'کارنینو کاکائو',
            img:'../../assets/images/product-list/ice-cream/ghifi/carnino-chocklate.png',
          },

        ]
      },
      {
        name:'yakhi',
        fa_name:'یخی',
        children:[
          {
            name:'calipo-shatoot',
            fa_name:'کالیپو شاتوت',
            img:'../../assets/images/product-list/ice-cream/yakhi/calipo-shatoot.png',
          },
          {
            name:'calipo-orange',
            fa_name:'کالیپو پرتقال',
            img:'../../assets/images/product-list/ice-cream/yakhi/calipo-orange.png',
          },
          {
            name:'calipo-albaloo',
            fa_name:'کالیپو آلبالو',
            img:'../../assets/images/product-list/ice-cream/yakhi/calipo-albaloo.png',
          },
          {
            name:'calipo-anar',
            fa_name:'کالیپو انار',
            img:'../../assets/images/product-list/ice-cream/yakhi/calipo-anar.png',
          },
          {
            name:'calipo-limoo-nana',
            fa_name:'کالیپو لیمو نعناع',
            img:'../../assets/images/product-list/ice-cream/yakhi/calipo-limoo-nana.png',
          },

        ]
      },
      {
        name:'nooni',
        fa_name:'نونی',
        children:[
          {
            name:'wafer-zaferan-vanil',
            fa_name:'ویفر زعفران وانیل شکلات',
            img:'../../assets/images/product-list/ice-cream/nooni/wafer-zaferan-vanil.png',
          },
          {
            name:'wafer-zaferan',
            fa_name:'ویفر زعفران',
            img:'../../assets/images/product-list/ice-cream/nooni/wafer-zaferan.png',
          },
          {
            name:'wafer-strawberry',
            fa_name:'ویفر توت فرنگی',
            img:'../../assets/images/product-list/ice-cream/nooni/wafer-strawberry.png',
          },
          {
            name:'wafer-chocklate',
            fa_name:'ویفر شکلاتی',
            img:'../../assets/images/product-list/ice-cream/nooni/wafer-chocklate.png',
          },

        ]
      },
    ]
  },
  {
    name:'dairy',
    fa_name:'لبنیات',
    children:[]
  }
];
