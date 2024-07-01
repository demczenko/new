const normalizeTranslations = (translations) => {
    return translations.map(item => item.length===0 ? "" : item).flat().map((t) => t.replaceAll("\n", "<br />"));
};

export default normalizeTranslations;
