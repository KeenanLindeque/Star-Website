#!/bin/bash
LOGO_DIR="/Users/keenanlindeque/Library/Mobile Documents/com~apple~CloudDocs/Desktop/Star new web/star-website/public/logos"
cd "$LOGO_DIR"

svg_create() {
  local file="$1"
  local text="$2"
  local width="${3:-200}"
  local cx=$((width / 2))
  cat > "$file" << SVGEOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} 60" fill="none">
  <text x="${cx}" y="30" text-anchor="middle" dominant-baseline="middle" fill="#1a1a2e" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="600">${text}</text>
</svg>
SVGEOF
}

svg_create "neom.svg" "NEOM" 120
svg_create "aramco.svg" "aramco" 150
svg_create "red-sea-global.svg" "Red Sea Global" 260
svg_create "pif.svg" "PIF" 100
svg_create "sabic.svg" "SABIC" 130
svg_create "qiddiya.svg" "Qiddiya" 160
svg_create "kaust.svg" "KAUST" 130
svg_create "siemens.svg" "SIEMENS" 160
svg_create "mdlbeast.svg" "MDLBEAST" 180
svg_create "stc.svg" "stc" 80
svg_create "almarai.svg" "Almarai" 160
svg_create "deloitte.svg" "Deloitte." 200
svg_create "pwc.svg" "PwC" 90
svg_create "oxford.svg" "University of Oxford" 380
svg_create "monash.svg" "Monash University" 320
svg_create "unesco.svg" "UNESCO" 150
svg_create "british-council.svg" "British Council" 320
svg_create "imperial.svg" "Imperial College" 320
svg_create "gems.svg" "GEMS Education" 280
svg_create "ahlei.svg" "AHLEI" 130
svg_create "coursera.svg" "Coursera" 180
svg_create "pearson.svg" "Pearson" 160
svg_create "tvtc.svg" "TVTC" 120
svg_create "hrdf.svg" "HRDF" 120
svg_create "ncaaa.svg" "NCAAA" 130
svg_create "etec.svg" "ETEC" 120
svg_create "sta.svg" "Saudi Tourism Authority" 420
svg_create "wef.svg" "World Economic Forum" 400
svg_create "formula-e.svg" "Formula E" 200
svg_create "diriyah.svg" "Diriyah Gate" 240
svg_create "roshn.svg" "ROSHN" 130
svg_create "acwa-power.svg" "ACWA Power" 220
svg_create "lucid.svg" "Lucid Motors" 240

echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 60" fill="none">
  <text x="130" y="30" text-anchor="middle" dominant-baseline="middle" fill="#1a1a2e" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="600">City &amp; Guilds</text>
</svg>' > "city-guilds.svg"

echo "Created 34 logo files"
