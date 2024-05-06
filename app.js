import { newsletter } from "./campaigns/newsletter.js";
import { landing } from "./campaigns/landing.js";
import { initApp } from "./main/initApp.js";


initApp({
  optimizeImg: true,
  token:
    "ya29.a0AXooCguJ59A7EnX9-IKiWv1VYr-Eskw8rGW76-IAdUqtTYxp5jLZUZZyi2SuNggIAbDdsuiMBonCo9QxeP1Xtphid8fWZQCD_to9tcofku1hCy1hMDeAOqsjmQEdzb3foQKf5cUXhJNrwkJNGnEnj8o_ZmppnmV41dzMaCgYKAW0SARMSFQHGX2MiLnHrotwwqqm0nTN9-2Dxdw0171",
  campaigns: [
    {
      startId: "23584",
      name: "May peak reminder",
      templates: [
        {
          name: "May peak reminder - Newsletter",
          type: "newsletter",
          template: newsletter,
          links: [
            {
              value: (origin, country) => origin + "content/lp24-05-13",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}20240513_01.jpg`,
            },
            {
              value: (origin, country) => origin + "content/lp24-05-13",
              query: true,
            },
            {
              value: () =>
                "https://upload.pictureserver.net/static/2024/20240513gif.gif",
            },
            {
              value: (origin, country) => origin + "content/lp24-05-06",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}20240506b.png`,
            },
            {
              value: (origin, country) => origin + "content/lp24-05-02",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}20240502b.png`,
            },
          ],
          tableQueries: [
            {
              tableId: "1KoKsWCt6D2vu20KrCyqxx6U2zbYaviQZJQKc2wOrw6o",
              tableName: "Sheet80",
              tableRange: "?majorDimension=COLUMNS",
              tableColumns: false,
              name: "youtubeHref",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "13.05.24 - May Peak reminder!",
              tableRange: "13",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "13.05.24 - May Peak reminder!",
              tableRange: "27",
              name: "watchNow",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "13.05.24 - May Peak reminder!",
              tableRange: "29",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "13.05.24 - May Peak reminder!",
              tableRange: "31:32",
              name: "condition",
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
        },
        {
          name: "May peak reminder - Landing",
          type: "landing",
          template: landing,
          links: [
            {
              value: (origin, country) => origin + "content/lp24-04-01",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}240401_01.jpg`,
            },
            {
              value: (origin, country) => origin + "content/lp24-04-01",
              query: true,
            },
            {
              value: () =>
                "https://upload.pictureserver.net/static/2024/20240513gif.gif",
            },
            {
              value: (origin, country) => origin + "content/lp24-03-22",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://beliani.info/newsletter/2024/${country}20240322b.png`,
            },
            {
              value: (origin, country) => origin + "content/lp24-03-21",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://beliani.info/newsletter/2024/${country}20240321b.png`,
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "13.05.24 - May Peak reminder!",
              tableRange: "19:23",
              name: "offer",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "13.05.24 - May Peak reminder!",
              tableRange: "24:25",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "13.05.24 - May Peak reminder!",
              tableRange: "26:29",
              name: "category",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "13.05.24 - May Peak reminder!",
              tableRange: "30",
              name: "code",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "13.05.24 - May Peak reminder!",
              tableRange: "33",
              name: "shopNow",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "13.05.24 - May Peak reminder!",
              tableRange: "36",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "13.05.24 - May Peak reminder!",
              tableRange: "38:39",
              name: "condition",
            },
            // {
            //   tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
            //   tableName: "Categories",
            //   tableRange: "A:JW?majorDimension=COLUMNS",
            //   name: "categories",
            //   tableColumns: false,
            // }
          ],
        },
      ],
    },
  ],
  tableColumns: {
    UK: "F",
    PL: "H",
    DE: "J",
    AT: "L",
    CHDE: "N",
    NL: "P",
    FR: "R",
    CHFR: "T",
    ES: "V",
    PT: "X",
    IT: "Z",
    DK: "AB",
    NO: "AD",
    FI: "AF",
    SE: "AH",
    CZ: "AJ",
    SK: "AL",
    HU: "AN",
  },
});
