settings.primaryColor = "#F7D1E4";
settings.primaryLight = "#FFEBF5";
settings.autocomplete = false;
settings.lemgramSelect = false;
settings.wordpicture = false;

settings.corpora = {};
settings.corporafolders = {};
settings.preselectedCorpora = ["lanchart"];

settings.corporafolders.lanchart = {
    title : "LANCHART",
    contents : ["lanchart"],
    description : "LANCHART-korpusset (in spe)."
};

/*
 * Positional attributes for test corpus.
 */

var testcorpAttrs = {};  

testcorpAttrs.nul1 = {
    label: "nul1",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.nul2 = {
    label: "nul2",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.nul3 = {
    label: "nul3",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.nul4 = {
    label: "nul4",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.nul5 = {
    label: "nul5",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.nul6 = {
    label: "nul6",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.nul7 = {
    label: "nul7",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.nul8 = {
    label: "nul8",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.nul9 = {
    label: "nul9",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.nul10 = {
    label: "nul10",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.nul11 = {
    label: "nul11",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.nul12 = {
    label: "nul12",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.nul13 = {
    label: "nul13",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.nul14 = {
    label: "nul14",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.phoneme = {
    label: "phoneme",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.ipa = {
    label: "ipa",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.Mmmm = {
    label: "Mmmm",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.Ssss = {
    label: "ipa",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.Aaaa = {
    label: "Aaaa",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.xmin = {
    label: "xmin",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};

testcorpAttrs.xmax = {
    label: "xmax",
    type: "set",
    opts: settings.defaultOptions,
    extendedTemplate: "<input ng-model='model' >",
    order: 1
};



var testcorpAttrs = {
    nul1 : testcorpAttrs.nul1,
    nul2 : testcorpAttrs.nul2,
    nul3 : testcorpAttrs.nul3,
    nul4 : testcorpAttrs.nul4,
    nul5 : testcorpAttrs.nul5,
    nul6 : testcorpAttrs.nul6,
    nul7 : testcorpAttrs.nul7,
    nul8 : testcorpAttrs.nul8,
    nul9 : testcorpAttrs.nul9,
    nul10 : testcorpAttrs.nul10,
    nul11 : testcorpAttrs.nul11,
    nul12 : testcorpAttrs.nul12,
    nul13 : testcorpAttrs.nul13,
    nul14 : testcorpAttrs.nul14,
    phoneme : testcorpAttrs.phoneme,
    pos : testcorpAttrs.pos,
    pos2 : testcorpAttrs.pos2,
    ipa : testcorpAttrs.ipa,
    Mmmm : testcorpAttrs.Mmmm,
    Ssss : testcorpAttrs.Ssss,
    Aaaa : testcorpAttrs.Aaaa,
    xmin : testcorpAttrs.xmin,
    xmax : testcorpAttrs.xmax
};

$("#lemgram_list_item").remove();


/*
 * CORPORA
 */

settings.corpora.lanchart = {
    id : "lanchart",
    title : "LANCHART ...",
    description : "LANCHART-korpusset in spe ...",
    within : {"turn": "turn"}, //defaultWithin,
    context : {"1 turn": "1 turn"}, //defaultContext,
    attributes : testcorpAttrs, //modernAttrs,
    structAttributes : {
        turn_speaker : {label : "speaker"},
        text_xmin : {label : "textxmin"},
        text_xmax : {label : "textxmax"},
        text_size : {label : "textsize"},
        text_tiers : {label : "tiers"}
    }
};

settings.corpusListing = new CorpusListing(settings.corpora);