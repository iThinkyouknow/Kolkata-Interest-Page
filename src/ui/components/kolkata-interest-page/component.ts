import Component, {tracked} from "@glimmer/component";
import moment from 'moment'
const {log, clear} = console;
//todo
/**
 * Data
 * Real Data
 * *PR, Updates, photos - Random Order, landscape -> portrait√
 * Handle menu icon,√
 * scroll√
 * Fellowship section image appear √
 * responsive: orientation, tablets, monitor,
 * * The fellowship images
 * * gallery images
 ** Make a friend image
 * **/

const missionaryData = {
  name: `Rev Emmanuel Singh`,
  age: 35,
  birthday: '1982-02-17',
  wife: 'Mrs Sonnali Singh',
  text: [`Rev Emmanuel Singh is the Missionary Pastor of Covenant Evangelical Reformed Church (CERC).`,
  `He is currently working in the mission field of Kolkata, and Lord Willing, instituted the mission field as a church there`],
  imgArray: [
    'assets/emmanuel-wo-bg.png',
    'assets/emmanuel-and-sonali-singh-kolkota.png'
  ],
  link: `https://cksaltshakers.wordpress.com/2017/04/01/interview-with-rev-emmanuel-singh-i/`
}
  //`Rev Emmanuel Singh`;

const sectionItems = [
  'CERC',
  'Main',
  'History',
  'The Fellowship',
  'Sermon Outlines',
  'The Missionary',
  'Letters',
  'Make a Friend',
  'Prayer Requests',
  'How We Can Help',
  'Updates',
  'Birthdays',
  'Encourage Program',
  'Kolkata'
];


let historySectionData = {
  img: `assets/fellowship-image-main.jpg`,
  text: [`In 2009, Rev Emmanuel was connected to PRCA ministers while he was working for Para-church organizations “Operation Mobilisation” (OM) and “Back to the Bible” Radio Broadcast. 
  During this time Rev Emmanuel was sharing the Reformed Gospel to the Bengali people in Kolkata as well as in the village’s area. 
  As a result of the preaching of the gospel, many responded to the Reformed faith to learn more about Reformed doctrines. 
  Rev Emmanuel then started Bible cell Groups so that through regular teaching a Church may be instituted.`,
  `Until 2010, Rev Emmanuel was worshiping with “Brethren Assembly” but after coming to the Reformed faith, he did not find any reformed church in the Kolkata area. 
  While there was one Mizo Presbyterian Church, they do not hold the Reformed Confessions (such as the Three Forms of Unity) or the Westminster Larger/Shorter Catechism. 
  They were thus doing Bible study on the Lord’s Day. 
  In 2013 they started to worship the Lord as a fellowship. 
  From 2015 onwards, CERC Singapore started to oversee the work in Kolkata and now they are growing be an instituted church, Lord willing, in the next few years.`]
};

let fellowshipData = [
  'Location:',
  'Stayan Park, Joka, Kolkata, (southern part of Kolkata)',
  'Activities:',
  'Sunday evening at 5:30 PM',
  'Pre-confession Class to start soon',
  'Friday Night Bible studies',
  'Gospel tracts distribution',
  'Meeting individuals for personal Evangelism',
  'Visiting members’ house for cottage meeting',
  'Gospel Preaching Seminar',
  'Translation of Reformed Confessions',
  'Joys:',
  'to worship the Lord based on Reformed principles',
  'good unity among them',
  'willing to share the Gospel',
  'Struggles:',
  'having a meeting place'
];

let sermonsData = {
  '2017-04-04|0': {
    date: '10.04.2017',
    className: null,
    sermonTitle: 'The Incarnation of the Son of God',
    scriptureText: '',
    sermonText: 'B.C. Article 18',
    sermonPoints: [
      'The Climax of History',
      'The Reality of the Incarnation',
      'He is Truly Both Man & God',
      'Rejection of Errors - Anabaptists Heresy Concerning Christ\'s Incarnation'
    ]
  },
  '2017-06-11|0': {
    date: '17.04.2017',
    className: null,
    sermonTitle: 'WHERE HAS THE POWER GONE? (PENTECOST)',
    scriptureText: 'Acts 1:8, 2 Timothy 1:7, Colossian 1:11',
    sermonText: 'Judges 6: 12-13',
    sermonPoints: [
      'The Early Christian Had Great Spiritual Power',
      'Why Do We Not have Such Power Today? Some Reasons For Current Lack',
      'Conclusion: Evaluate Ourselves (2 Cor 10:12)'
    ]
  },
  '2017-06-18|0': {
    date: '24.04.2017',
    className: null,
    sermonTitle: 'THE ESSENCE OF KINGDOM LIFE',
    scriptureText: '',
    sermonText: 'John 3:1-10, Matthew 6:33, Matthew 6:9',
    sermonPoints: [
      'Seeing The the Kingdom of God - Regenerated by God',
      'Seeking the the Kingdom of God - As a Supreme Priority in Our Life',
      'Praying for the Kingdom of God - Our Calling to Pray'
    ]
  }
};

let personsData = {
  'Avijit Sirkar': {
    birthday: '05-12',
    name: 'Avijit Sirkar',
    familyPos: '',
    img: 'assets/Sirkar-Avijit-circle.jpg',
    imgFamily: 'assets/Sirkar-family-circle.jpg',
    text: [`Avijit Sirkar comes from an orthodox Christian family. He has been with CERC Kolkata Fellowship for the past three years. 
    His brother is married to Tandra Sirkar. 
    He has two children: Julia and Joel. Avijit works for an insurance company as an agent.`,
    `Rev Emmanuel met Avijit in 2012 while Rev Emmanuel was preaching in a small family gathering in the Kobordanga area. 
    Since that time, Rev Emmanuel has developed a good relationship with him. 
    He is also proactive in helping out with the evangelism work of Rev Emmanuel. 
    They mostly go together for outreach and evangelism to make friendship with new contacts. 
    This family is very friendly and loves the Reformed faith.`
    ],
    familyMembers: [
      'Tandra Sirkar',
      'Julia Avisikta Sirkar',
      'Joel Rickjeet Sirkar'
    ]
  },
  'Tandra Sirkar': {
    birthday: '23-02',
    name: 'Tandra Sirkar',
    familyPos: 'wife',
    img: 'assets/Sirkar-Tandra-circle.jpg',
    imgFamily: '',
    text: [``],
    familyMembers: [
      'Avijit Sirkar',
      'Julia Avisikta Sirkar',
      'Joel Rickjeet Sirkar'
    ]
  },
  'Julia Avisikta Sirkar': {
    birthday: '08-08',
    name: 'Julia Avisikta Sirkar',
    familyPos: 'daughter',
    img: 'assets/Sirkar-Julia-Avisikta-circle.jpg',
    imgFamily: '',
    text: [``],
    familyMembers: [
      'Tandra Sirkar',
      'Avijit Sirkar',
      'Joel Rickjeet Sirkar'
    ]
  },
  'Joel Rickjeet Sirkar': {
    birthday: '14-04',
    name: 'Joel Rickjeet Sirkar',
    familyPos: 'son',
    img: 'assets/Sirkar-Joel-Rickjeet-circle.jpg',
    imgFamily: '',
    text: [``],
    familyMembers: [
      'Tandra Sirkar',
      'Avijit Sirkar',
      'Julia Avisikta Sirkar',
    ]
  },
  'Bikash Chandra Seth': {
    birthday: '06-01',
    name: 'Bikash Chandra Seth',
    familyPos: '',
    img: 'assets/Seth-Bikash-Chandra-circle.jpg',
    imgFamily: 'assets/Seth-family-circle.jpg',
    text: [`Bikash Chandra Seth and Mrs Jaya Rani Seth came from a Hindu background. 
    Rev Emmanuel has been instructing them in the Reformed Faith for the past two years. 
    They originally came to know about christianity from the “New Apostolic Church” which is very much a cult like the “Jehovah’s Witnesses”. 
    This family was introduce to the fellowship by Sudip Halder. We often have Bible studies in their home when they are free. 
    They are attending the Baptism class. God willing, the family will be baptized.`,
      `The family has one son - Mohan who is sixteen years old. He has just completed schooling this year.`,
      `Bikash works in a firm as a daily Labourer.`
    ],
    familyMembers: [
      'Jaya Rani Seth',
      'Mohan Seth'
    ]
  },
  'Jaya Rani Seth': {
    birthday: '24-03',
    name: 'Jaya Rani Seth',
    familyPos: 'wife',
    img: 'assets/Seth-Jaya-Rani-circle.jpg',
    imgFamily: '',
    text: [``],
    familyMembers: [
      'Bikash Chandra Seth',
      'Mohan Seth'
    ]
  },
  'Mohan Seth': {
    birthday: '10-04',
    name: 'Mohan Seth',
    familyPos: 'son',
    img: '',
    imgFamily: '',
    text: [``],
    familyMembers: [
      'Bikash Chandra Seth',
      'Jaya Rani Seth'
    ]
  }
};

let personsKeys = Object.keys(personsData);


let ourLettersData = {
  '2017-02': {
    date: '2017-02',
    letterContent: [`Dearly beloved saints in Kolkata, India:`,
`Greetings in the name of our Lord and Savior, Jesus Christ, whose precious blood has redeemed us from all our sin!`,
`We thank God for your faith in Jesus Christ, and for your love of the gospel, which is the power of God unto salvation. 
Rev. Emmanuel Singh has told us about your desire to learn Reformed doctrine, and about your gratitude for the faithful preaching of the Scriptures. 
We pray that God will continue to give you this holy desire, and that He will fill your hearts with the knowledge and love of Him as you receive the instruction of His Word.`,
`We are sending you this letter to encourage you in your faith, and to keep you informed of our plans. 
CERC in Singapore has appointed a Foreign Mission Committee (FMC) to work with Rev. Singh. 
Pastor Emmanuel and the FMC will be communicating regularly, and he will keep you up to date on our various plans. 
Nevertheless, we also would like to write to you from time to time in order to encourage you as brothers and sisters in Christ.`,
`The most recent news from Singapore is the calling of Rev. Emmanuel Singh as missionary- pastor to Kolkata. 
With gratitude to God, CERC installed Rev. Singh into the ministry of the gospel on 8 January 2017. 
We are thankful to God for calling this brother to be His servant in Kolkata, and we pray that God will bless Pastor Emmanuel’s ministry among you. 
Through the faithful preaching of the gospel, God saves His church, and nourishes our souls to everlasting life. 
May God bless your fellowship through His servant.`,
`We also are eagerly looking forward to the Kolkata Church Camp, with a target date in April 2017. 
Brother Sudip is chairing the committee that is planning the camp, and a few of us from Singapore are assisting in the planning, along with Rev. Singh. 
We pray that God will give us a time of spiritual profit as we study together what the Bible says about the church.`,
`The topic of the church is important for us to study, because the next goal that we have in Kolkata is the organization of your fellowship as a church. 
Although we do not know how long this will take; we are committed to working with you in following the principle of God’s Word regarding organization. 
We will continue discussing with you at the upcoming Kolkata Church Camp as well as in future letters. 
The most important thing is for the fellowship to be committed to the truth of the Bible, which is the revelation of God in Jesus Christ. 
Through Rev. Singh’s preaching, through the Kolkata Church Camp, through your Bible Studies, and through your own personal study, God will immerse you in the Reformed faith. 
We encourage you to study hard and to persevere in your learning, as God establishes a Reformed church in Kolkata through you.`,
`Our church prays for you every Sunday in Singapore during our worship service. Many of our members also pray for you individually in our homes. We thank God for you, and may our faithful Father continue to bless you as you worship His holy name.`,
`In Christ’s love,`,
`Foreign Mission Committee of CERC Singapore`],
    pdfLink: ''
  },
  '2017-03': {
    date: '2017-03',
    letterContent: [
      `Dearly beloved saints in Kolkata, India:`,
      `Greetings in the name of Jesus Christ, whose blood washes away all our sins.`,
      `Each time the Foreign Mission Committee of CERC meets, we begin with devotions. 
      Today, our reading of God's Word included Acts 2:47 – "And the Lord added daily to the church such as should be saved." 
      We would like to share some thoughts from this passage for your encouragement as we serve the Lord together.`,
      `This verse records the growth of the church after Pentecost. 
      Those must have been exciting days, as more and more people joined the church. 
      In fact, every day, new people were being added, for the Lord added daily such as should be saved. We still live in exciting days today. 
      Even though God does not usually add so many new people at one time anymore, He still brings new people to His church. 
      Perhaps you have experienced this, as visitors join your worship services, and some of them return each week to hear the gospel. 
      Be encouraged that God will make you grow and add new members in His own perfect time and according to His own perfect will.`,
      `This verse also teaches us that God is sovereign in the gathering of His church. 
      We are not able to reach peoples' hearts by our power, or make them understand and believe the gospel by our wisdom. 
      Only God is able to do this, for we read, "The Lord added to the church...." 
      God knows exactly how many He wants to add, and exactly whom He has chosen to add, for these are His chosen elect. 
      They are "such as should be saved." 
      What a great comfort for us as Christ's church! 
      The gathering of the church depends on God, who is mighty to save His people! 
      If our growth is fast or slow, this is all part of the sovereign work of God. 
      Therefore, beloved saints, do not worry or fret about your rate of growth, but put your trust in God, and He will add such as should be saved.`,
      `Finally, we learn from this verse that God uses the means of the gospel to save His people and add to His church. 
      Acts 2 describes what happened at Pentecost, and most of the chapter is Peter's sermon about salvation through Jesus Christ. 
      This sermon was the glorious gospel that God used to save His people in those days, and the good news of salvation in Jesus Christ is still how God gathers His church today.`,
      `Therefore, preach the gospel! 
      Rev. Singh, be faithful in preaching and teaching the truth. 
      Fellow saints, be faithful in receiving the truth, and sharing it with others in your life as you have opportunity. 
      Be faithful in evangelism for this is the chief calling of a Reformed church. 
      Through this means, God will add to the church such as should be saved.`,
      `We continue to pray for you, giving thanks to God for your love of the truth and your faithfulness in the gospel. 
      We look forward to seeing you soon during your church camp in April.`,
      `May God bless you and keep you through Jesus Christ our Lord.`,
      `Your servants in Christ's love,`,
      `The Foreign Mission Committee of CERC Singapore`
    ],
    pdfLink: ''
  },
  '2017-05': {
    date: '2017-05',
    letterContent: [
      `Dearly beloved saints of CERC Kolkata,`,
      `Greetings from Singapore in the name of the Lamb of God, who has cleansed us from all our sin!`,
      `Elder Leong, Uncle Ishu, Uncle Boon, and Pastor Lanning returned home a few weeks ago. 
      They reported that they enjoyed your fellowship at the church camp, and that the church camp seemed to be a good success. 
      We thank God that they were able to fellowship with you in the Word of God and study the precious truth of the church.`,
      `In CERC Singapore, we have begun a series of sermons from the Epistle of Paul to the Galatians. 
      We would like to encourage you from Galatians 1:11 – 
      “But I certify you, brethren, that the gospel which was preached of me is not after man.” 
      Paul teaches that the gospel he preached did not come from man, but from Jesus Christ Himself. 
      This is a great encouragement to God’s people, because we can be sure that truth of the Bible is not our word, but God’s. 
      When we hear that Word, we are hearing God Himself!`,
      `As God’s Word, the Bible is powerful. 
      In another place, Paul calls the gospel “the power of God unto salvation to everyone that believeth” (Romans 1:16). 
      This gospel, as the powerful Word of God, calls sinners unto eternal life. 
      This is our experience and your experience as we sit under the preaching of the gospel together. 
      We, who are sinners, are saved by Jesus Christ, proclaimed in the gospel! 
      This gospel is also the power to deliver others in our neighborhoods, in our families, in our workplaces from their sin and death. 
      The gospel of Jesus Christ is God’s power to save.`,
      `Therefore, we urge you, brethren: Preach the gospel. 
      By this means, God will continue to build you up in His grace. 
      And by this means, God will continue to add to you such as should be saved.`,
      `We are glad for your faithfulness to the gospel of God. We pray that He will continue to give you and us His precious Word.`,
      `We still pray for you every week in our worship services. We love you in the Lord, and think of you often.`,
      `Warmly in Christ,`,
      `The Foreign Mission Committee of Covenant Evangelical Reformed Church in Singapore`
    ],
    pdfLink: ''
  },
  '2017-07': {
    date: '2017-07',
    letterContent: [
      `Dearly beloved saints of Covenant Evangelical Reformed Church (Fellowship) in Kolkata,`,
      `Greetings from Singapore in the name of our Saviour, Jesus Christ, who gathers His church from all nations.`,
      `We pray that you are enjoying our heavenly Father’s blessings on your Fellowship as you continue to worship our covenant God. 
      We remember you in prayer each week during our worship services in CERC Singapore, and we are confident that God will continue to bless you and keep you by His gospel.`,
      `In the last few months, the Session of CERC Singapore has made some decisions regarding the work in Kolkata. We would like to use this letter to keep you informed of our plans.`,
      `First, our overall goal is to organize CERC (Fellowship) Kolkata as an instituted church in about one year’s time. 
      We observe that you have studied the Reformed faith for several years now, you have completed one round of the Heidelberg Catechism, you are nearing the completion of the Belgic Confession, and you have studied the five points of Calvinism (TULIP). 
      In addition, you have received the faithful Reformed preaching of Rev. Singh for several years. 
      We also heard from our delegation to your Church Camp in April that you desire to be organized as a church, so that there can be a Reformed presence in Kolkata for many generations to come. 
      We rejoice with you in this goal, and we pray that God will bring our plans to completion.`,
      `That means this next year is very important for your Fellowship, because there are two important steps to take to prepare for organization. 
      The first step is to complete the Membership Class that Rev. Singh is teaching. 
      Everyone who wants to be a member of CERC Kolkata should complete this class over the next year, so that everyone can join the church with the same doctrinal understanding of the truth of God’s Word, as taught in the Reformed confessions. 
      After you complete the class, you will be able to join the church through an interview and a public Confession of Faith. 
      Those who have not yet been baptized will also receive the sacrament of baptism at that occasion. 
      By this, you will become the first (charter) members of the CERC Kolkata when it is organized next year, Lord willing.`,
      `The second step is to complete the Office-bearer’s Class that Rev. Singh will be teaching. 
      This class will prepare men to be chosen as elders and deacons to serve the church when it is organized. It is very important that the office-bearers are committed to the Reformed faith, so that they can lead the church in maintaining and promoting the truth of God’s Word. 
      This class will be open to everyone to attend, so that the entire Fellowship can see in more detail what is the work and calling of an elder, deacon, and minister in Christ’s church.`,
      `We encourage you to study hard in these classes, and to pray earnestly. 
      In this way, God will finish preparing you to be organized as a faithful Reformed church.`,
      `We encourage you to study hard in these classes, and to pray earnestly. 
      In this way, God will finish preparing you to be organized as a faithful Reformed church.`,
      `Although these are our plans, we must also acknowledge that God alone is in control of all things. 
      Therefore, we submit ourselves to His perfect will, praying that He will bring these things to pass in His perfect time.`,
      `We thank God for your fellowship in the gospel. 
      May our gracious Lord continue to bless you and keep you in His sovereign hand.`,
      `Warmly in Christ,`,
      `The Foreign Mission Committee of Covenant Evangelical Reformed Church in Singapore`
    ],
    pdfLink: 'December'
  }
};


let theirLettersData = {
  // '2017-03': {
  //   date: '2017-03',
  //   letterContent: [''],
  //   pdfLink: ''
  // }
};

let imageGalleryData = [
  'assets/Abhijeet-0.jpg',
  'assets/Barui-Pradip-0.jpg',
  'assets/Biswas-0.jpg',
  'assets/Children-activity-1.jpg',
  'assets/Daily-life-1.jpg',
  'assets/Daily-life-2.jpg',
  'assets/Daily-life-3.jpg',
  'assets/Discussion-0.jpg',
  'assets/Discussion-1.jpg',
  'assets/Discussion-2.jpg',
  'assets/Discussion-3.jpg',
  'assets/Discussion-4.jpg',
  'assets/Discussion-5.jpg',
  'assets/Emmanuel-preaching-0.jpg',
  'assets/Food-0.jpg',
  'assets/Group-Photo-0.jpg',
  'assets/Group-Photo-1.jpg',
  'assets/Group-Photo-2.jpg',
  'assets/Infant-0.jpg',
  'assets/Jitesh-0.jpg',
  'assets/Julia-and-Joel-0.jpg',
  'assets/Kashi-Nath-Hui-0.jpg',
  'assets/Motorcycle-0.jpg',
  'assets/Obed-and-Priyodip.jpg',
  'assets/Outing-0.jpg',
  'assets/Outing-1.jpg',
  'assets/Person-0.jpg',
  'assets/Person-1.jpg',
  'assets/Person-2.jpg',
  'assets/Person-3.jpg',
  'assets/Person-4.jpg',
  'assets/Person-5.jpg',
  'assets/Person-6.jpg',
  'assets/Person-7.jpg',
  'assets/Person-8.jpg',
  'assets/Person-9.jpg',
  'assets/Reading-0.jpg',
  'assets/Seminar-0.jpg',
  'assets/Shibram-0.jpg',
  'assets/Sirkar-Family-1.jpg',
  'assets/Worship-0.jpg',
  'assets/Worship-2.jpg',
  'assets/Worship-3.jpg',
  'assets/Worship-4.jpg'
];


let prayerRequestsData = {
  constant: [
    {
      content: 'Pray for them',
      valid: true,
      date: '2017-08-04'
    }, {
      content: 'That the Lord may bless their labors',
      valid: true,
      date: '2017-08-04'
    }
  ],
  adHoc: [
    {
      content: 'That they may have a place to worship',
      valid: true,
      date: '2017-08-04'
    }
  ]
  //end of array
};


let updatesData = {
  constant: [],
  adHoc: [
    // {
    //   content: 'Prayer Requests ad-hoc 1',
    //   valid: true,
    //   date: '2017-07-21'
    // }
  ]
  //end of array
};


let helpDesiredData = {
  constant: [
    {
      content: 'Advice and Prayers',
      valid: true,
      date: '2017-08-04'
    }
  ],
  adHoc: [
    {
      content: 'Someone who can teach the young people how to play the Psalters on piano',
      valid: true,
      date: '2017-08-04'
    }, {
      content: 'Setting up of Church Order',
      valid: true,
      date: '2017-08-04'
    }
  ]
  //end of array
};




  //////////data end

const dasherizedTitle = (title) => {
  const trimmedTitle = title.trim().toLowerCase();
  const theLessTitle = trimmedTitle.replace(/^(the\s)/ig, '');
  const dashedTitle = theLessTitle.replace(/\s/g, '-');
  return dashedTitle;
};

const treatedMenuItems = (array) => {
  return array.map((section, index) => {
    const lowerCaseSection = (typeof section === 'string') ? section.toLowerCase() : section;

    switch(lowerCaseSection) {
      case `cerc`:
        return {
          id: lowerCaseSection,
          link: `https://www.cerc.org.sg`,
          class: ``,
          title: section,
          shortTitle: section,
        };
        break;
      case `main`:
        return {
          id: 'header',
          link: ``,
          class: `header-section`,
          title: `The Fellowship of Kolkata`,
          shortTitle: section,
        };
        break;
      case `the missionary`:
        return {
          id: dasherizedTitle(section),
          link: ``,
          class: `${dasherizedTitle(section)}-section`,
          title: missionaryData.name,
          shortTitle: section,
        };
      case `letters`:
        return {
          id: `our-letters`,
          link: ``,
          class: `${dasherizedTitle(section)}-section`,
          title: section,
          shortTitle: section,
        };
      case `encourage program`:
        return {
          id: `encourage`,
          link: ``,
          class: `${dasherizedTitle(section)}-section`,
          title: `Encourage Rev Emmanuel Singh`,
          shortTitle: section,
        };
        break;
      default:
        return {
          id: dasherizedTitle(section),
          link: ``,
          class: `${dasherizedTitle(section)}-section`,
          title: section,
          shortTitle: section,
        };
    }
  });
};


const idMapGenerator = (array) => {
  if (!Array.isArray(array)) return {array: array};
  return array.reduce((acc, item, index) => {
    if (item.id === undefined || item.id === null) return Object.assign(acc, {index: item});
    return Object.assign(acc, {[item.id]: item});
  }, {});
};

const compose = (acc, fn) => {
  if (typeof fn !== 'function') return acc;
  return fn(acc);
};


const singlePropertyCallback = (property) => (x) => {
  if (x[property] !== undefined && x[property] !== null) {
    return x[property];
  };
};

const validPropCB = singlePropertyCallback('valid');
const contentPropCB = singlePropertyCallback('content');

const filterSliceMap = (array) => ([startIndex, endIndex]) => {
  return array.filter(validPropCB).slice(startIndex, endIndex).map(contentPropCB);
};

const getListData = (maxNum) => (list) => {

  const maxNumber = maxNum; //need to change based on screen size
  const constantArray = filterSliceMap(list.constant)([-maxNumber]);
  const adHocSliceStartIndex = (maxNumber - constantArray.length) * -1;
  const adHocArray = filterSliceMap(list.adHoc)([adHocSliceStartIndex]);
  return [...constantArray, ...adHocArray];
};


const familyPosChooser = (_personsData) => (person) => (fMember) => {
  if (person.name === fMember) return {};

  if (person.familyPos.trim() === '') {
    if (_personsData[fMember].familyPos === 'wife') {
      return {Wife: [fMember]};
    } else if (_personsData[fMember].familyPos === 'son') {
      return {Sons: fMember};
    } else if (_personsData[fMember].familyPos === 'daughter') {
      return {Daughters: fMember};
    } else {
      return {};
    }
  } else if (person.familyPos.trim() === 'wife') {
    if (_personsData[fMember].familyPos === '') {
      return {Husband: [fMember]};
    } else if (_personsData[fMember].familyPos === 'son') {
      return {Sons: fMember};
    } else if (_personsData[fMember].familyPos === 'daughter') {
      return {Daughters: fMember};
    } else {
      return {};
    }
  } else if (person.familyPos.trim() === 'son' || person.familyPos.trim() === 'daughter') {
    if (_personsData[fMember].familyPos === '') {
      return {Father: [fMember]};
    } else if (_personsData[fMember].familyPos === 'wife') {
      return {Mother: [fMember]};

    } else if (_personsData[fMember].familyPos === 'son') {
      return {Brothers: fMember};
    } else if (_personsData[fMember].familyPos === 'daughter') {
      return {Sisters: fMember};
    } else {
      return {};
    }
  } else {
    return {};
  }
};

const familyObjBuilder = (acc, obj) => {
  const familyPosChecker = (type) => (accc) => (object) => {
    return (object[type] !== undefined && object[type] !== null);
  };

  const sonsPresent = familyPosChecker('Sons')(acc)(obj);
  const daughtersPresent = familyPosChecker('Daughters')(acc)(obj);
  const brothersPresent = familyPosChecker('Brothers')(acc)(obj);
  const sistersPresent = familyPosChecker('Sisters')(acc)(obj);

  if (sonsPresent) {
    if (Array.isArray(acc['Sons']) && acc['Sons'].length > 0) {
      return {...acc, Sons: [...acc['Sons'], obj['Sons']]};
    } else {
      return {...acc, Sons: [obj['Sons']]};
    }
  } else if (daughtersPresent) {
    if (Array.isArray(acc['Daughters']) && acc['Daughters'].length > 0) {
      return {...acc, daughters: [...acc['Daughters'], obj['Daughters']]};
    } else {
      return {...acc, Daughters: [obj['Daughters']]};
    }
  } else if (brothersPresent) {
    if (Array.isArray(acc['Brothers']) && acc['Brothers'].length > 0) {
      return {...acc, Brothers: [...acc['Brothers'], obj['Brothers']]};
    } else {
      return {...acc, Brothers: [obj['Brothers']]};
    }
  } else if (sistersPresent) {
    if (Array.isArray(acc['Sisters']) && acc['Sisters'].length > 0) {
      return {...acc, Sisters: [...acc['Sisters'], obj['Sisters']]};
    } else {
      return {...acc, Sisters: [obj['Sisters']]};
    }
  } else {
    return {...acc, ...obj};
  }
};

const getDimensions = (elements /**children**/) => (id = '') => {
  if (!elements || !id || (typeof id !== 'string' && isNaN(id))) return [];
  const section = elements[id];
  if (section === undefined || section === null) return [];

  const {offsetTop, offsetHeight} = section;
  const array = [offsetTop, offsetTop + offsetHeight];

  return array;
};

const getListingSection = (list_of_dimensions) => (id1) => (id2) => (id3) => {
  const invalidId = (_id) => {
    return (!_id || (typeof _id !== 'string' && isNaN(_id)));
  }

  if (invalidId(id1) || invalidId(id2) || invalidId(id3)) return [];

  const prayerSection = list_of_dimensions[id1] || [];
  const updateSection = list_of_dimensions[id2] || [];
  const helpSection = list_of_dimensions[id3] || [];

  const prayerSectionExists = (Array.isArray(prayerSection) && prayerSection.length);
  const updateSectionExists = (Array.isArray(updateSection) && updateSection.length);
  const helpSectionExists = (Array.isArray(helpSection) && helpSection.length);

  let topValue = 0;
  if (prayerSectionExists) {
    topValue = prayerSection[0];
  } else if (updateSectionExists) {
    topValue = updateSection[0];
  } else if (helpSectionExists) {
    topValue = helpSection[0];
  }

  let bottomValue = 0;
  if (helpSectionExists) {
    bottomValue = helpSection[1];
  } else if (updateSectionExists) {
    bottomValue = updateSection[1];
  } else if (prayerSectionExists) {
    bottomValue = prayerSection[1];
  }

  return [topValue, bottomValue];
};

function debounce(func, wait, immediate) {
  var timeout;
  return function() {

    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const scroll_timeout_Fn = requestAnimationFrame ||
  webkitRequestAnimationFrame ||
  mozRequestAnimationFrame ||
  function(callback) {
    setTimeout(callback, 1000 / 60);
  };

const scrollToY = (targetY, duration, curve) => {
  let time = 0;
  const cur_pos_y = pageYOffset;

  const scroll_cb = () => {
    if (time === 0) time = performance.now();
    const progress = performance.now() - time;

    const scroll_to_pos = cur_pos_y + (progress / duration) * (targetY - cur_pos_y);

    const position_reached = Math.floor(targetY - scroll_to_pos);
    if (progress <= duration && position_reached !== 0) {
      scrollTo(0, scroll_to_pos);
      scroll_timeout_Fn(scroll_cb);
    } else {
      scrollTo(0, targetY);
    }
  };
  scroll_timeout_Fn(scroll_cb);
};




/********************************************
 *
 *
 *
 ********************************************/

export default class KolkataInterestPage extends Component {
  @tracked gray = '';
  @tracked grayMenuIconElements = [];
  @tracked all_elements_top_bottom_w_Ids = {};
  @tracked top_position = `0px`;




  mainHeader = 'The Mission Field of Kolkata';


  get sections() {
    return treatedMenuItems(sectionItems);
  }

  scrollHandler(e) {
    const y_pos = window.pageYOffset;
    const result = this.grayMenuIconElements.reduce((init, [top, bottom]) => {
      if ((y_pos >= top && y_pos <= bottom)) return init + 1;
      return init;
    }, 0);

    this.gray = (result === 0) ? 'gray' : '';

  }

  setGrayPositions() {
    const {children} = this.element;
    const getDimWChildren = getDimensions(children);

    const dimensions_array = ['header', 'gallery', 'encourage', 'kolkata'].map(section_id => this.all_elements_top_bottom_w_Ids[section_id]);
    const listing_section_dimensions_array = getListingSection(this.all_elements_top_bottom_w_Ids)('prayer-requests')('updates')('how-we-can-help');
    this.grayMenuIconElements = [...dimensions_array, listing_section_dimensions_array];
  }

  set_all_elements_top_bottom_w_Ids() {
    const {children} = this.element;

    this.all_elements_top_bottom_w_Ids = [...children].reduce((acc, child) => {
      if (typeof child.id === 'string') {
        if (child.id.length < 1) return;
        const {offsetTop, offsetHeight} = child;

        return {...acc, [child.id]: [offsetTop, offsetTop + offsetHeight]};

      } else if (!isNaN(child.id)) {
        const {offsetTop, offsetHeight} = child;
        return {...acc, [child.id]: [offsetTop, offsetTop + offsetHeight]};
      }
    }, {});
  }

  @tracked orientation = 'portrait';


  setDimensions() {
    log(`resize happened`);
    log(window.matchMedia("(orientation: portrait)"));
    this.set_all_elements_top_bottom_w_Ids();
    this.setGrayPositions();

    const getOrientationLabel = (bool) => {
      const portrait = 'portrait';
      const landscape = 'landscape';
      return bool ? portrait : landscape;
    }

    this.orientation = getOrientationLabel(matchMedia("(orientation: portrait)").matches);
    log(`this.orientation`);
    log(this.orientation);

  }

  didInsertElement() {
    setTimeout(() => {
      this.setDimensions();
    }, 0);
    window.addEventListener('resize', debounce(this.setDimensions.bind(this), 100));

    window.addEventListener('scroll', debounce(this.scrollHandler.bind(this), 300));


  }


  scroll_to_by_id([id]) {
    const top_position = (this.all_elements_top_bottom_w_Ids[id] !== undefined) ? this.all_elements_top_bottom_w_Ids[id][0] : undefined;
    const scrollDuration = 500;

    if (top_position !== undefined) scrollToY(top_position, scrollDuration, 'easeInOutQuint');
  }

  actionHandler(action, params) {
    if (typeof action !== 'string') return console.error(`please pass in action as type of string`);
    this[action]([...arguments].slice(1));
  }

  historySectionData = historySectionData;

  get photosDataForAboutSection() {
    const personsArray = personsKeys
      .filter((person) => personsData[person].img)
      .map((person) => personsData[person].img);

    return personsArray;
  }

  missionaryData = missionaryData;

  sermonsData = sermonsData;

  fellowshipData = fellowshipData;

  theirLetters = {data: theirLettersData, length: Object.keys(theirLettersData).length};
  ourLetters = {data: ourLettersData, length: Object.keys(ourLettersData).length};
  imageGalleryData = imageGalleryData;

  get personsDataForFriendSection() {
    const personsWFamilyArray = personsKeys
      .filter((person) => personsData[person].text[0])
      .reverse()
      .reduce((acc, key) => acc.concat(personsData[key]), [])
      .map(person => {
        const familyMembers = person.familyMembers
          .map(familyPosChooser(personsData)(person))
          .reduce(familyObjBuilder, {});
        return {...person, familyMembers}
      });

    return personsWFamilyArray;
  };

  get personsDataForBirthdaySection() {
    const keysArray = Object.keys(personsData);
    const dataArray = keysArray.map(key => personsData[key]);
    return dataArray;
  }

  maxNumber = () => {
    return 8;
  };

  getListDataWMaxNum = getListData(this.maxNumber());

  prayerRequestsArray = this.getListDataWMaxNum(prayerRequestsData);
  updatesArray = this.getListDataWMaxNum(updatesData);
  helpDesiredArray = this.getListDataWMaxNum(helpDesiredData);
}
