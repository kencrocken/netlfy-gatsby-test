import Typography from 'typography'
import FunstonTheme from 'typography-theme-funston'


FunstonTheme.baseFontSize = '18px'
FunstonTheme.baseLineHeight = 1.618
FunstonTheme.scaleRatio = 1.618
FunstonTheme.overrideThemeStyles = () => ({
  body: {
      letterSpacing: ".05em",
  }
})
const typography = new Typography(FunstonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
