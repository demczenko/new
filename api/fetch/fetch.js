import { getState } from "../../main/initApp.js";
import { utils } from "../../utils/index.js";

export const fetchTranslations = async ({ tableQueries, tableColumns }) => {
  const country = getState("country");

  const promises = [];
  for (const query of tableQueries) {
    const queryWithAdjustedRange = utils.adjustTableRangeToCountry(
      query,
      tableColumns[country]
    );
    promises.push(queryWithAdjustedRange);
  }

  const promisesResult = await Promise.allSettled(
    promises.map((queryWithAdjustedRange) =>
      getTranslations(queryWithAdjustedRange, getState("token"))
    )
  );

  const computedPromise = [];
  for (const { value } of promisesResult) {
    if (value.error) {
      computedPromise.push({
        data: value.error.message,
        name: value.name,
      });
      continue;
    }
    if ("values" in value && value.values.length > 0) {
      computedPromise.push({
        data:
          value.majorDimension === "COLUMNS"
            ? value.values
            : utils.normalizeTranslations(value.values),
        name: value.name,
      });
    } else {
      computedPromise.push({
        data: undefined,
        name: value.name,
      });
    }
  }

  return computedPromise;
};

async function getTranslations(
  { tableId, tableName, tableRange, name },
  token
) {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${tableId}/values/${tableName}${tableRange}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await response.json();
    return { ...data, name };
  } catch (error) {
    console.log(error);
  }
}
