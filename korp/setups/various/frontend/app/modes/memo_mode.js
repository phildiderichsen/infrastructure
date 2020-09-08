settings.primaryColor = "#F7D1E4";
settings.primaryLight = "#FFEBF5";
settings.autocomplete = false;
settings.lemgramSelect = false;
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};
settings.preselectedCorpora = ["memotestcorpusfull"];

settings.corporafolders.memotest = {
    title : "MEMO test",
    contents : ["memotestcorpusfull"],
    description : "Testkorpusser fra Measuring Modernity-projektet: Samtlige romaner fra Det Moderne Gennembrud."
};

/*
 * Positional attributes for test corpus.
 */

var memocorpAttrs = {};  

memocorpAttrs.pos = {
    label : "pos",
    dataset : {
        "sb" : "sb",
"pron" : "pron",
"v" : "v",
"adv" : "adv",
"ZD" : "ZD",
"præp" : "præp",
"adj" : "adj",
"konj" : "konj",
"ZP" : "ZP",
"propr" : "propr",
"præt" : "præt",
"ATI" : "ATI",
"XF" : "XF",
"num" : "num",
"ZI" : "ZI",
"part" : "part",
"ZQ" : "ZQ",
"TEGN" : "TEGN",
"V" : "V",
"PRON" : "PRON",
"ubestpron" : "ubestpron",
"N" : "N",
"interj" : "interj",
"EGEN" : "EGEN",
"ADV" : "ADV",
"ADJ" : "ADJ",
"PRÆP" : "PRÆP",
"ZH" : "ZH",
"ENDING" : "ENDING",
"ZA" : "ZA",
"XS" : "XS",
"SKONJ" : "SKONJ",
"UNIK" : "UNIK",
"UKONJ" : "UKONJ",
"NUM" : "NUM",
"LEXICAL" : "LEXICAL",
"ZS" : "ZS",
"INTERJ" : "INTERJ",
"XX" : "XX",
"UL" : "UL",
"FORK" : "FORK",
"SYMBOL" : "SYMBOL",
"NO" : "NO",
"FORM" : "FORM",
"'" : "'",
"//" : "//",
"»" : "»"
    },
    opts : liteOptions,
    // Changed from selectType [sg]
    extendedComponent: "datasetSelect",
    escape: false
}


var memocorpAttrs = {
    pos : memocorpAttrs.pos,
    lemma : attrs.baseform
};

$("#lemgram_list_item").remove();


/*
 * CORPORA
 */

settings.corpora.memotestcorpusfull = {
    id : "memotestcorpusfull",
    title : "MEMO testkorpus samlet",
    description : "MEMO testkorpus som én samlet fil.",
    within : { "sentence": "sentence" },
    context : defaultContext,
    attributes : memocorpAttrs, //modernAttrs,
    structAttributes : {
        text_title : {label : "Titel"},
        text_author : {label : "Forfatter"},
        text_pseudonym : {label : "Pseudonym"},
        text_date : {label : "Dato"},
        text_datefrom : {label : "Datofra"},
        text_dateto : {label : "Datotil"},
        text_timefrom : {label : "Tidfra"},
        text_timeto : {label : "Tidtil"},
        text_gender : {label : "Køn"},
        text_source : {label : "Kilde"},
        text_nationality : {label : "Nationalitet"},
        text_subtitle : {label : "Undertitel"},
        text_pages : {label : "Sider"},
        text_illustrations : {label : "Illustrationer"},
        text_typeface : {label : "Skriftsnit"},
        text_publisher : {label : "Udgiver"},
        text_price : {label : "Pris"}
    }
};

settings.corpusListing = new CorpusListing(settings.corpora);
