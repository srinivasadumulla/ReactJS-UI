const fonts = {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
    htmlFontSize: 16,
    weight: {
        light: 300,
        regular: 400,
        medium:500,
        semiBold: 600,
        bold: 700
    }
};

const h1 = {
    fontSize: '2.25rem',//36px
    fontWeight:fonts.weight.light,
    lineHeight: '2.625rem', //42px
    letterSpacing: '-1.5px'
};

const h2 = {
    fontSize: '1.5rem',//24px
    fontWeight:fonts.weight.light,
    lineHeight: '1.75rem', //28px
    letterSpacing: '-0.5px'
};

const h3 = {
    fontSize: '1.25rem',//36px
    fontWeight:fonts.weight.light,
    lineHeight: '1.4375rem' //23px
};

const h4 = {
    fontSize: '1.125rem',//18px
    fontWeight:fonts.weight.regular,
    lineHeight: '1.3125rem', //21px
    letterSpacing: '0.25px'
};


const h5 = {
    fontSize: '1rem',//16px
    fontWeight:fonts.weight.medium,
    lineHeight: '1.1875rem' //19px
};

const h6 = {
    fontSize: '0.875rem',//14px
    fontWeight:fonts.weight.bold,
    lineHeight: '1rem', //16px
    letterSpacing: '0.15px'
};

const body1 = {
    fontSize: '0.875rem',//14px
    fontWeight:fonts.weight.regular,
    lineHeight: '1.75rem', //28px
    letterSpacing: '0.5px'
};

const body2 = {
    fontSize: '0.75rem',//12px
    fontWeight:fonts.weight.regular,
    lineHeight: '1.25rem', //20px
    letterSpacing: '0.25px'
};

const smallLabel = {
    fontSize: '0.6255rem',//10px
    fontWeight:fonts.weight.regular,
    lineHeight: '0.875rem', //14px
    letterSpacing: '0.25px'
};

const paragraph = {
    fontSize: '0.75rem',//12px
    fontWeight:fonts.weight.regular,
    lineHeight: '1.25rem', //20px
    letterSpacing: '0.25px'
};

export default {
...fonts,
h1,
h2,
h3,
h4,
h5,
h6,
body1,
body2,
smallLabel,
paragraph
}