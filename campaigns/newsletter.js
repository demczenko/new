import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import {
  Line,
  Category,
  GetCode,
  Intro,
  Paragraph,
  ImageWithLink,
  Space,
  Freebies,
  Product,
  ProductWithSize,
} from "../components/index.js";
import { computeValue } from "../helpers/computeValue.js";
import { priceFree } from "../helpers/index.js";

export async function newsletter({
  links,
  getProductByName,
  getProductById,
  getCategory,
  queries,
  getField,
  id,
  origin,
  country,
  type,
}) {
  const categories = [
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240513_04.jpg",
      },
      href: getCategory("https://www.beliani.ch/living-room-furniture/"),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240513_05.jpg",
      },
      href: getCategory("https://www.beliani.ch/bedroom-furniture/"),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240513_06.jpg",
      },
      href: getCategory("https://www.beliani.ch/dining-room-furniture/"),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240513_07.jpg",
      },
      href: getCategory("https://www.beliani.ch/office-furniture/"),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240513_08.jpg",
      },
      href: getCategory("https://www.beliani.ch/bathroom-furniture/"),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240513_09.jpg",
      },
      href: getCategory("https://www.beliani.ch/garden-furniture/"),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240513_10.jpg",
      },
      href: getCategory("https://www.beliani.ch/lighting/"),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240513_11.jpg",
      },
      href: getCategory("https://www.beliani.ch/textiles/"),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240513_12.jpg",
      },
      href: getCategory("https://www.beliani.ch/home-accessories/"),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240513_13.jpg",
      },
      href: getCategory("https://www.beliani.ch/new/"),
    },
  ];

  return `
  ${Header(
    {
      id,
      assembly: {
        src: getField(queries.header, "Header asembly src"),
      },
      webVersion: {
        troubleViewing: getField(queries.header, "Trouble viewing"),
        troubleViewingHrefText: getField(
          queries.header,
          "Trouble viewing href text"
        ),
      },
      whiteList: {
        addBeliani: getField(queries.header, "Add Beliani to your"),
        whiteList: getField(queries.header, "Whitelist"),
        whitelistHref: getField(queries.header, "Whitelist href"),
      },
      advantages: {
        freeDelivery: getField(queries.header, "Free Delivery"),
        daysReturn: getField(queries.header, "365-Day Return"),
      },
      topImage: {
        src: getField(queries.header, "Top image src"),
        href: getField(queries.header, "Top image href"),
      },
      firstCategory: {
        src: getField(queries.header, "Header Category 1 src"),
        href: getField(queries.header, "Header Category 1 href"),
      },
      secondCategory: {
        src: getField(queries.header, "Header Category 2 src"),
        href: getField(queries.header, "Header Category 2 href"),
      },
      thirdCategory: {
        src: getField(queries.header, "Header Category 3 src"),
        href: getField(queries.header, "Header Category 3 href"),
      },
    },
    { country, type }
  )}
  ${
    country === "UK"
      ? `
      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ffccb7; color: #000;" >
        <tbody>
          <tr>
            <td>
              <img loading="lazy" src=${getField(
                queries.header,
                "Header asembly src"
              )} style="display: block; max-width: 100%;">
            </td>
          </tr>
        </tbody>
      </table>
              `
      : ""
  }
      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ffccb7; color: #000;" >
          <tbody>
              <tr>
                  <td align="center">
                    ${ImageWithLink(links[0], links[1])}
                  </td>
              </tr>
              <tr>
                  <td align="center">
                    ${ImageWithLink(links[2], links[3])}
                  </td>
              </tr>

              <tr>
                <td style="background-color: #ffccb7; ">
                  ${Space()}
                </td>
              </tr>

              <tr>
                <td class="newsletterContainer"style="background-color: #ffccb7; ">
                  <table cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tbody>
                          <tr>
                              <td align="center">
                                  <span class="newsletterTitleNew">
                                      ${queries.intro}
                                  </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="background-color: #ffccb7;">
                  ${Space("newsletterBottom80px")}
                </td>
              </tr>

              <tr>
                <td style="background-color: #ffccb7;">
                  <table cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tbody>
                          ${categories
                            .map((item) => {
                              const computed = computeValue(item);
                              return `
                            <tr>
                                <td align="center">
                                  <a href="${computed.href}">
                                    <img alt="" src="${computed.src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                                  </a>
                                </td>
                            </tr>
                            `;
                            })
                            .join("")}
                      </tbody>
                  </table>
                </td>
              </tr>

              <tr>
                <td align="center">
                  <a href="${getField(queries.youtubeHref, "Href")}">
                    <img alt="" src="https://upload.pictureserver.net/static/2024/20240513dog.jpg" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                  </a>
                </td>
              </tr>

              <tr>
                <td class="newsletterBottom35px" >
                </td>
              </tr>
              <tr>
                <td align="center">
                  <a href="${getField(queries.youtubeHref, "Href")}" style="color:#000; text-decoration: underline;">
                    <span class="newsletterCta">${queries.watchNow}</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="newsletterBottom80px" >
                </td>
              </tr>

          <tbody>
      </table>

      <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;">
          <tbody>
              <tr>
                  <td align="left">
                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                          <tr>
                            <td class="newsletterBottom35px" >
                              ${Line()}
                            </td>
                          </tr>
                              <tr>
                                  <td align="left" class="newsletterBottom35px">
                                      <span class="newsletterSoonEndingTitle">${
                                        queries.soonEnding
                                      }</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="left" class="newsletterBottom20px">
                                      <a href=${links[4]}>
                                          <img loading="lazy" src=${
                                            links[5]
                                          } style="display: block;" width="100%">
                                      </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="left" class="newsletterBottom35px">
                                      <a href=${links[6]}>
                                          <img loading="lazy" src=${
                                            links[7]
                                          } style="display: block;" width="100%">
                                      </a>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
              ${
                country === "UK"
                  ? `
              <tr>
                <td class="newsletterBottom35px" >
                  ${Line()}
                </td>
              </tr>
                <tr>
                <td >
                  <img loading="lazy" src=${getField(
                    queries.footer,
                    "Asembly src"
                  )} style="display: block; max-width: 100%;">
                </td>
              </tr>
              <tr>
                <td class="newsletterBottom35px" >
                </td>
              </tr>
              `
                  : ""
              }
          </tbody>
      </table>
      ${Footer(
        {
          id,
          assembly: {
            src: getField(queries.footer, "Asembly src"),
          },
          firstCategory: {
            src: getField(queries.footer, "Category src 1"),
            href: getField(queries.footer, "Category href 1"),
          },
          secondCategory: {
            src: getField(queries.footer, "Category src 2"),
            href: getField(queries.footer, "Category href 2"),
          },
          thirdCategory: {
            src: getField(queries.footer, "Category src 3"),
            href: getField(queries.footer, "Category href 3"),
          },
          foutrthCategory: {
            src: getField(queries.footer, "Category src 4"),
            href: getField(queries.footer, "Category href 4"),
          },
          fifthCategory: {
            src: getField(queries.footer, "Category src 5"),
            href: getField(queries.footer, "Category href 5"),
          },
          sixthCategory: {
            src: getField(queries.footer, "Category src 6"),
            href: getField(queries.footer, "Category href 6"),
          },
          seventhCategory: {
            src: getField(queries.footer, "Category src 7"),
            href: getField(queries.footer, "Category href 7"),
          },
          eigthCategory: {
            src: getField(queries.footer, "Category src 8"),
            href: getField(queries.footer, "Category href 8"),
          },
          klarna: {
            src: getField(queries.footer, "Klarna src"),
            href: getField(queries.footer, "Klarna href"),
          },
          socials: {
            title: getField(queries.footer, "Socials Title"),
            instagram: {
              src: getField(queries.footer, "Instagram src"),
              href: getField(queries.footer, "Instagram href"),
            },
            facebook: {
              src: getField(queries.footer, "Facebook src"),
              href: getField(queries.footer, "Facebook href"),
            },
            youtube: {
              src: getField(queries.footer, "Youtube src"),
              href: getField(queries.footer, "Youtube href"),
            },
            pinterest: {
              src: getField(queries.footer, "Pinterest src"),
              href: getField(queries.footer, "Pinterest href"),
            },
          },
          firstAdvantage: {
            src: getField(queries.footer, "Advantages src 1"),
            href: getField(queries.footer, "Advantages href 1"),
          },
          secondAdvantage: {
            src: getField(queries.footer, "Advantages src 2"),
            href: getField(queries.footer, "Advantages href 2"),
          },
          thirdAdvantage: {
            src: getField(queries.footer, "Advantages src 3"),
            href: getField(queries.footer, "Advantages href 3"),
          },
          fourthAdvantage: {
            src: getField(queries.footer, "Advantages src 4"),
            href: getField(queries.footer, "Advantages href 4"),
          },
          companyDetails: {
            title: getField(queries.footer, "Company Details"),
            address: getField(queries.footer, "Address"),
            mobileNumber: getField(queries.footer, "Mobile number"),
            emailAddress: getField(queries.footer, "Email address"),
            mailTo: getField(queries.footer, "Mail to"),
            email: getField(queries.footer, "Email"),
            commercialRegister: getField(queries.footer, "Commercial register"),
            vat: getField(queries.footer, "VAT"),
          },
          title: getField(queries.footer, "Title"),
          conditionsTitle: getField(queries.footer, "Conditions title"),
          conditionsText: queries.condition[0] + " " + queries.condition[1],
          unsubscribeTitle: getField(queries.footer, "Unsubscribe title"),
        },
        { country, type }
      )}
    `;
}
