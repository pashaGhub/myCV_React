const en = {
  profile: {
    title: "Profile",
    text:
      "Ice cream marzipan marzipan lollipop. Donut apple pie gummies pastry sweet roll ice cream soufflé. Wafer cookie pie powder chocolate marshmallow. Topping brownie chocolate cake marshmallow powder. Gingerbread caramels marzipan brownie. Candy gingerbread gingerbread jelly beans pudding danish. Chocolate chocolate bar cookie. Sesame snaps pudding chocolate cake bear claw sweet candy."
  },
  contacts: {
    title: "Contacts",
    content: [
      [
        { tag: "label", children: "Phone" },
        { tag: "a", children: "+370656565", href: "tel:370656565" }
      ],
      [
        { tag: "label", children: "Email" },
        {
          tag: "a",
          children: "pawelsucharew@gmail.com",
          href: "mailto:pawelsucharew@gmail.com?subject=Hello from Web"
        }
      ],
      [
        { tag: "label", children: "GitHub" },
        {
          tag: "a",
          children: "pashaGhub",
          href: "https://github.com/pashaGhub",
          target: "_blank"
        }
      ],
      [
        { tag: "label", children: "Linkedin" },
        {
          tag: "a",
          children: "Pavel Sucharev",
          href: "https://www.linkedin.com/in/pavel-sucharev/",
          target: "_blank"
        }
      ]
    ]
  },
  skills: {
    title: "Skills",
    content: [
      [
        { tag: "span", children: "IT Recruitment Sourcer" },
        { tag: "span", children: "Advanced" }
      ],
      [
        { tag: "span", children: "HTML/CSS(SASS)" },
        { tag: "span", children: "Advanced" }
      ],
      [
        { tag: "span", children: "JavaScript" },
        { tag: "span", children: "Intermediate" }
      ],
      [
        { tag: "span", children: "React / Node.js" },
        { tag: "span", children: "Beginner" }
      ],
      [
        { tag: "span", children: "Git" },
        { tag: "span", children: "Intermediate" }
      ]
    ]
  },
  education: {
    title: "Education",
    content: [
      [
        { tag: "p", children: "Code Academy - 2019" },
        { tag: "p", children: "Front-end Developer" }
      ],
      [
        { tag: "p", children: "Code Academy - 2019" },
        { tag: "p", children: "Front-end Developer" }
      ],
      [
        { tag: "p", children: "Code Academy - 2019" },
        { tag: "p", children: "Front-end Developer" }
      ]
    ]
  },
  experience: {
    title: "Experience",
    content: [
      [
        { tag: "p", children: "Western Union • 2019.03 - now" },
        { tag: "p", children: "Recruitment Sourcer" }
      ],
      [
        {
          tag: "p",
          children: "Strategic Staffing Solution • 2017.11 - 2019.01"
        },
        { tag: "p", children: "IT Sourcer" }
      ],
      [
        { tag: "p", children: "Hard Rock Hotel & Cassino • 2017.6 - 2017.9" },
        { tag: "p", children: "Security Officer" }
      ]
    ]
  }
};

const lt = {
  profile: {
    title: "Profilis",
    text:
      "Marcipano marcipanų ledinukas. Spurga obuolių pyragas gummies konditerijos saldaus ritinio ledai. Vaflinių sausainių pyragas miltelių šokoladinis zefyras. Blynelių šokoladinių pyragų miltelių milteliai. Meduolių karamelės marcipanų pyragas. Meduoliai su saldainiais, meduoliai su pipirais. Šokolado šokolado šokolado slapukas. Sezamo snaps pudingas šokoladinis pyragas padengia nagų saldainį."
  },
  contacts: {
    title: "Kontaktai",
    content: [
      [
        { tag: "label", children: "Mobilusis Numeris" },
        { tag: "a", children: "+370656565", href: "tel:370656565" }
      ],
      [
        { tag: "label", children: "Elektroninis paštas" },
        {
          tag: "a",
          children: "pawelsucharew@gmail.com",
          href: "mailto:pawelsucharew@gmail.com?subject=Hello from Web"
        }
      ],
      [
        { tag: "label", children: "GitHub" },
        {
          tag: "a",
          children: "pashaGhub",
          href: "https://github.com/pashaGhub",
          target: "_blank"
        }
      ],
      [
        { tag: "label", children: "Linkedin" },
        {
          tag: "a",
          children: "Pavel Sucharev",
          href: "https://www.linkedin.com/in/pavel-sucharev/",
          target: "_blank"
        }
      ]
    ]
  },
  skills: {
    title: "Įgūdžiai",
    content: [
      [
        { tag: "span", children: "IT Recruitment Sourcer" },
        { tag: "span", children: "Pažengęs" }
      ],
      [
        { tag: "span", children: "HTML/CSS(SASS)" },
        { tag: "span", children: "Pažengęs" }
      ],
      [
        { tag: "span", children: "JavaScript" },
        { tag: "span", children: "Vidutinis" }
      ],
      [
        { tag: "span", children: "React / Node.js" },
        { tag: "span", children: "Pradedantysis" }
      ],
      [{ tag: "span", children: "Git" }, { tag: "span", children: "Vidutinis" }]
    ]
  },
  education: {
    title: "Išsilavinimas",
    content: [
      [
        { tag: "p", children: "Code Academy - 2019" },
        { tag: "p", children: "Front-end Programuotojas" }
      ],
      [
        { tag: "p", children: "Code Academy - 2019" },
        { tag: "p", children: "Front-end Programuotoja" }
      ],
      [
        { tag: "p", children: "Code Academy - 2019" },
        { tag: "p", children: "Front-end Programuotoja" }
      ]
    ]
  },
  experience: {
    title: "Patirtis",
    content: [
      [
        { tag: "p", children: "Western Union • 2019.03 - now" },
        { tag: "p", children: "Recruitment Sourcer" }
      ],
      [
        {
          tag: "p",
          children: "Strategic Staffing Solution • 2017.11 - 2019.01"
        },
        { tag: "p", children: "IT Sourcer" }
      ],
      [
        { tag: "p", children: "Hard Rock Hotel & Cassino • 2017.6 - 2017.9" },
        { tag: "p", children: "Sargybinis" }
      ]
    ]
  }
};

export default { en, lt };
