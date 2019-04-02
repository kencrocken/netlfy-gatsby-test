import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Slabo 27px',
      styles: [
        '700',
        '400'
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
    {
      name: 'IBM Plex Mono',
      styles: [
        '400',
        '400i',
        '700',
        '700i'
      ]
    }
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.618,
  scaleRatio: 2.336,
  headerFontFamily: ['Slabo 27px', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      backgroundColor: "#8c8c8c",
      color: "#ebebeb"
    },
    a: {
        color: "rgba(255,165,0,.8)",
        textDecoration: "none",
        transition: "color .1s linear"
    },
    "a:hover,a:active": {
        color: "rgba(255,165,0,1)",
    },
    "h1,h2,h3,h4,h5,h6": {
      color: "#595959",
      letterSpacing: ".5px"
    },
    blockquote: {
      color: "#D0D0D0",
      borderLeft: '5px solid rgba(255,165,0,.6)',
      marginLeft: 0,
      paddingLeft: '2.5rem',
      fontStyle: 'italic'
    },
    code: {
      fontFamily: ["IBM Plex Mono", "monospace"].join(',')
    }
  })
})


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}
typography.plugins = [
    new CodePlugin()
]

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
