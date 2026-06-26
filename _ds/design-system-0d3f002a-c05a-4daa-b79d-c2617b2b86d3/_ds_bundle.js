/* @ds-bundle: {"format":3,"namespace":"DesignSystem_0d3f00","components":[],"sourceHashes":{"catalog-app.jsx":"1b83c6e3aeb1","components.jsx":"21ca5d0fe461","detail-page.jsx":"60108147f0db","shell.jsx":"162cf197b6bd","tweaks-panel.jsx":"a1107c630a56"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_0d3f00 = window.DesignSystem_0d3f00 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// catalog-app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, ReactDOM */
const {
  useState,
  useEffect,
  useMemo
} = React;

/* ─────────── Section data ─────────── */
const NAV = [{
  id: "intro",
  label: "Overview",
  icon: "logo"
}, {
  id: "colors",
  label: "Colors",
  icon: "image"
}, {
  id: "typography",
  label: "Typography",
  icon: "edit"
}, {
  id: "spacing",
  label: "Spacing & Radius",
  icon: "settings"
}, {
  id: "elevation",
  label: "Elevation",
  icon: "folder"
}, {
  id: "buttons",
  label: "Buttons",
  icon: "play"
}, {
  id: "forms",
  label: "Form controls",
  icon: "check"
}, {
  id: "feedback",
  label: "Feedback",
  icon: "bell"
}, {
  id: "data-display",
  label: "Data display",
  icon: "user"
}, {
  id: "navigation",
  label: "Navigation",
  icon: "menu"
}, {
  id: "patterns",
  label: "Patterns",
  icon: "ai"
}];

/* ─────────── Color tokens grouped ─────────── */
const COLOR_GROUPS = [{
  title: "Brand",
  desc: "주요 액션, CTA, 선택 상태에 사용. 한 화면에 Primary는 1개만.",
  swatches: [{
    name: "brand-primary-default",
    hex: "#21AFBF",
    role: "기본 브랜드 컬러"
  }, {
    name: "brand-primary-accessible",
    hex: "#1c95a2",
    role: "작은 텍스트 (AA)"
  }, {
    name: "brand-primary-background",
    hex: "#e7f9fb",
    role: "연한 배경"
  }, {
    name: "brand-primary-surface",
    hex: "#21afbf1a",
    role: "투명 surface"
  }, {
    name: "brand-secondary-default",
    hex: "#405bbf",
    role: "보조 액션"
  }, {
    name: "brand-secondary-background",
    hex: "#eceff9",
    role: "연한 배경"
  }]
}, {
  title: "Neutral · Contents",
  desc: "텍스트 계층. 콘트라스트(WCAG AA) 4.5:1 이상 유지하세요.",
  swatches: [{
    name: "contents-default",
    hex: "#23242a",
    role: "헤딩, 주요 본문"
  }, {
    name: "contents-sub",
    hex: "#515462",
    role: "보조 설명, 레이블"
  }, {
    name: "contents-additional",
    hex: "#73788C",
    role: "메타데이터"
  }, {
    name: "contents-placeholder",
    hex: "#8f93a3",
    role: "Placeholder"
  }]
}, {
  title: "Neutral · Background",
  desc: "레이어 표현은 색상 차이로. 다크모드에서 elevation은 그림자 대신 명도로.",
  swatches: [{
    name: "background-default",
    hex: "#ffffff",
    role: "기본 페이지"
  }, {
    name: "background-sunken",
    hex: "#f1f2f3",
    role: "사이드바, 패널"
  }, {
    name: "border-default",
    hex: "#23242a26",
    role: "기본 테두리"
  }, {
    name: "border-light",
    hex: "#23242a1a",
    role: "약한 구분선"
  }]
}, {
  title: "Semantic",
  desc: "상태 전달. 의미가 명확할 때만 사용 — 장식 목적 X.",
  swatches: [{
    name: "positive",
    hex: "#33CC95",
    role: "성공·완료"
  }, {
    name: "negative",
    hex: "#E54A1A",
    role: "에러·삭제"
  }, {
    name: "warning",
    hex: "#E5C51A",
    role: "주의·임시"
  }, {
    name: "info",
    hex: "#3355CC",
    role: "안내·힌트"
  }]
}, {
  title: "Visualization",
  desc: "차트·태그·카테고리에 — 11색 팔레트.",
  swatches: [{
    name: "viz-blue",
    hex: "#3355CC"
  }, {
    name: "viz-green",
    hex: "#33CC95"
  }, {
    name: "viz-yellow",
    hex: "#E5C51A"
  }, {
    name: "viz-orange",
    hex: "#f8820d"
  }, {
    name: "viz-red",
    hex: "#E54A1A"
  }, {
    name: "viz-purple",
    hex: "#A026D9"
  }, {
    name: "viz-magenta",
    hex: "#df2070"
  }, {
    name: "viz-charteuse",
    hex: "#aed629"
  }, {
    name: "viz-cyan",
    hex: "#0fbbf0"
  }, {
    name: "viz-neutral",
    hex: "#73788C"
  }, {
    name: "viz-neutralDeep",
    hex: "#23242a"
  }]
}];
const TYPE_SCALE = [{
  name: "display-xl",
  className: "t-display-xl",
  sample: "Display XL",
  spec: "64 / 96 · 700 · -0.04em"
}, {
  name: "display-m",
  className: "t-display-m",
  sample: "Display M",
  spec: "48 / 64 · 700 · -0.04em"
}, {
  name: "display-xs",
  className: "t-display-xs",
  sample: "Display XS",
  spec: "32 / 42 · 700 · -0.03em"
}, {
  name: "title-xl",
  className: "t-title-xl",
  sample: "페이지 타이틀",
  spec: "24 / 32 · 600"
}, {
  name: "title-l",
  className: "t-title-l",
  sample: "섹션 헤딩",
  spec: "20 / 28 · 600"
}, {
  name: "title-m",
  className: "t-title-m",
  sample: "카드 타이틀",
  spec: "18 / 26 · 600"
}, {
  name: "title-s",
  className: "t-title-s",
  sample: "소제목",
  spec: "16 / 24 · 600"
}, {
  name: "body-l",
  className: "t-body-l",
  sample: "본문에 사용되는 가장 보편적인 사이즈입니다.",
  spec: "16 / 24 · 400"
}, {
  name: "body-m",
  className: "t-body-m",
  sample: "일반 본문, UI 텍스트, 폼 레이블에 적합합니다.",
  spec: "14 / 20 · 400"
}, {
  name: "body-s",
  className: "t-body-s",
  sample: "캡션과 메타데이터에 사용합니다.",
  spec: "12 / 16 · 400"
}];
const RADIUS_TOKENS = [{
  name: "xs",
  value: 4
}, {
  name: "s",
  value: 6
}, {
  name: "m",
  value: 8
}, {
  name: "l",
  value: 10
}, {
  name: "xl",
  value: 12
}, {
  name: "full",
  value: 999
}];
const SPACING_TOKENS = [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64];

/* ─────────── Section primitives ─────────── */
const SectionHeader = ({
  eyebrow,
  title,
  desc
}) => /*#__PURE__*/React.createElement("header", {
  style: {
    marginBottom: 32
  }
}, eyebrow && /*#__PURE__*/React.createElement("div", {
  className: "t-body-strong-m",
  style: {
    color: "var(--s-color-brand-primary-accessible)",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    fontSize: "0.75rem"
  }
}, eyebrow), /*#__PURE__*/React.createElement("h2", {
  className: "t-display-xs",
  style: {
    margin: 0,
    marginBottom: 8
  }
}, title), desc && /*#__PURE__*/React.createElement("p", {
  className: "t-body-l",
  style: {
    margin: 0,
    color: "var(--s-color-neutral-contents-sub)",
    maxWidth: 720
  }
}, desc));
const SubsectionHeader = ({
  title,
  desc,
  action,
  detailHref
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 16,
    marginTop: 32,
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  className: "t-title-l",
  style: {
    margin: 0
  }
}, title), desc && /*#__PURE__*/React.createElement("p", {
  className: "t-body-m",
  style: {
    margin: "4px 0 0",
    color: "var(--s-color-neutral-contents-sub)"
  }
}, desc)), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8
  }
}, action, detailHref && /*#__PURE__*/React.createElement("a", {
  href: detailHref,
  style: {
    fontSize: 13,
    fontWeight: 500,
    textDecoration: "none",
    color: "var(--s-color-brand-primary-accessible)",
    padding: "6px 10px",
    borderRadius: 6,
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    border: "1px solid var(--s-color-neutral-divider-default)",
    background: "var(--s-color-neutral-background-default)"
  }
}, "\uC0C1\uC138 \uBCF4\uAE30 \u2192")));
const Code = ({
  children
}) => /*#__PURE__*/React.createElement("code", {
  style: {
    fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
    fontSize: "0.75rem",
    padding: "2px 6px",
    background: "var(--s-color-neutral-surface-lightness)",
    borderRadius: 4,
    color: "var(--s-color-neutral-contents-sub)"
  }
}, children);

/* ─────────── Color section ─────────── */
const ColorsSection = ({
  display
}) => {
  const [copied, setCopied] = useState(null);
  const copy = text => {
    navigator.clipboard?.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1200);
  };
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Foundation",
    title: "Colors",
    desc: "\uC2DC\uB9E8\uD2F1 \uD1A0\uD070\uC744 \uD1B5\uD574 \uB77C\uC774\uD2B8/\uB2E4\uD06C \uD14C\uB9C8\uAC00 \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4. \uC6D0\uC2DC hex \uB300\uC2E0 var(--s-color-*)\uB97C \uC0AC\uC6A9\uD558\uC138\uC694."
  }), COLOR_GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.title,
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: g.title,
    desc: g.desc
  }), display === "swatch" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: 12
    }
  }, g.swatches.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    onClick: () => copy(`var(--s-color-${s.name})`),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 84,
      background: s.hex,
      borderRadius: 8,
      border: "1px solid var(--s-color-neutral-divider-default)",
      backgroundImage: s.hex.length === 9 ? "linear-gradient(45deg, #00000010 25%, transparent 25%, transparent 75%, #00000010 75%), linear-gradient(45deg, #00000010 25%, transparent 25%, transparent 75%, #00000010 75%)" : undefined,
      backgroundSize: "12px 12px",
      backgroundPosition: "0 0, 6px 6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: s.hex,
      borderRadius: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-body-strong-m",
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, s.name), s.role && /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      color: "var(--s-color-neutral-contents-additional)",
      marginTop: 2
    }
  }, s.role)), /*#__PURE__*/React.createElement(Code, null, s.hex)), copied === `var(--s-color-${s.name})` && /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      color: "var(--s-color-semantic-positive-accessible)",
      marginTop: 4
    }
  }, "\uBCF5\uC0AC\uB428")))), display === "table" && /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, g.swatches.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    onClick: () => copy(`var(--s-color-${s.name})`),
    style: {
      display: "grid",
      gridTemplateColumns: "48px 2fr 2fr 1fr",
      alignItems: "center",
      gap: 16,
      padding: "12px 16px",
      cursor: "pointer",
      borderTop: i ? "1px solid var(--s-color-neutral-divider-default)" : "none",
      background: "var(--s-color-neutral-background-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      background: s.hex,
      borderRadius: 6,
      border: "1px solid var(--s-color-neutral-divider-default)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "t-body-strong-m"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "t-body-m",
    style: {
      color: "var(--s-color-neutral-contents-sub)"
    }
  }, s.role || "—"), /*#__PURE__*/React.createElement(Code, null, s.hex)))))));
};

/* ─────────── Typography section ─────────── */
const TypographySection = () => /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
  eyebrow: "Foundation",
  title: "Typography",
  desc: "Pretendard Variable\uC774 \uAE30\uBCF8. \uD55C\uAD6D\uC5B4 \uAC00\uB3C5\uC131\uC744 \uC6B0\uC120\uD558\uACE0, Figtree\xB7IBM Plex Sans JP\uAC00 \uD3F4\uBC31\uC785\uB2C8\uB2E4."
}), /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--s-color-neutral-background-default)",
    border: "1px solid var(--s-color-neutral-divider-default)",
    borderRadius: 12,
    overflow: "hidden"
  }
}, TYPE_SCALE.map((t, i) => /*#__PURE__*/React.createElement("div", {
  key: t.name,
  style: {
    display: "grid",
    gridTemplateColumns: "180px 1fr 200px",
    gap: 24,
    padding: "20px 24px",
    alignItems: "center",
    borderTop: i ? "1px solid var(--s-color-neutral-divider-default)" : "none"
  }
}, /*#__PURE__*/React.createElement(Code, null, t.name), /*#__PURE__*/React.createElement("div", {
  className: t.className,
  style: {
    color: "var(--s-color-neutral-contents-default)"
  }
}, t.sample), /*#__PURE__*/React.createElement("div", {
  className: "t-body-s",
  style: {
    color: "var(--s-color-neutral-contents-additional)",
    textAlign: "right"
  }
}, t.spec)))), /*#__PURE__*/React.createElement(Banner, {
  kind: "info",
  title: "\uC6D0\uCE59"
}, "\uD55C \uD654\uBA74\uC5D0 \uAD75\uAE30\uB294 2\uAC1C \uC774\uD558. Display\uB294 \uD5E4\uB529 \uC804\uC6A9 \u2014 \uBCF8\uBB38\uC774\uB098 \uBC84\uD2BC\uC5D0 \uC0AC\uC6A9\uD558\uC9C0 \uB9C8\uC138\uC694. \uD589\uAC04\uC740 \uC2A4\uCF00\uC77C\uBCC4 \uACE0\uC815\uAC12\uC785\uB2C8\uB2E4."));

/* ─────────── Spacing & Radius ─────────── */
const SpacingSection = () => /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
  eyebrow: "Foundation",
  title: "Spacing & Radius",
  desc: "4px \uAE30\uBCF8 \uB2E8\uC704\uC758 4pt grid. \uBAA8\uB4E0 \uD328\uB529\xB7\uB9C8\uC9C4\xB7gap\uC740 \uC774 \uD1A0\uD070\uB9CC \uC0AC\uC6A9\uD569\uB2C8\uB2E4."
}), /*#__PURE__*/React.createElement(SubsectionHeader, {
  title: "Spacing scale"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gap: 8
  }
}, SPACING_TOKENS.map(s => /*#__PURE__*/React.createElement("div", {
  key: s,
  style: {
    display: "grid",
    gridTemplateColumns: "80px 1fr 80px",
    alignItems: "center",
    gap: 16,
    padding: "10px 16px",
    background: "var(--s-color-neutral-background-default)",
    borderRadius: 8,
    border: "1px solid var(--s-color-neutral-divider-default)"
  }
}, /*#__PURE__*/React.createElement(Code, null, "spacing.", s), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 16,
    width: s,
    background: "var(--s-color-brand-primary-default)",
    borderRadius: 2
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "t-body-s",
  style: {
    color: "var(--s-color-neutral-contents-additional)",
    textAlign: "right"
  }
}, s, "px")))), /*#__PURE__*/React.createElement(SubsectionHeader, {
  title: "Radius scale",
  desc: "\uCE74\uB4DC\uC640 \uB0B4\uBD80 \uBC84\uD2BC\uC740 \uCD5C\uC18C 2px \uC774\uC0C1 \uCC28\uC774\uB97C \uB450\uC138\uC694."
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: 16
  }
}, RADIUS_TOKENS.map(r => /*#__PURE__*/React.createElement("div", {
  key: r.name,
  style: {
    padding: 20,
    background: "var(--s-color-neutral-background-default)",
    border: "1px solid var(--s-color-neutral-divider-default)",
    borderRadius: 12,
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 80,
    height: 80,
    margin: "0 auto",
    background: "var(--s-color-brand-primary-background)",
    border: "2px solid var(--s-color-brand-primary-default)",
    borderRadius: r.value
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "t-body-strong-m",
  style: {
    marginTop: 12
  }
}, "radius.", r.name), /*#__PURE__*/React.createElement("div", {
  className: "t-body-s",
  style: {
    color: "var(--s-color-neutral-contents-additional)",
    marginTop: 2
  }
}, r.value === 999 ? "999px (full)" : `${r.value}px`)))));

/* ─────────── Elevation ─────────── */
const ElevationSection = () => /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
  eyebrow: "Foundation",
  title: "Elevation",
  desc: "\uB808\uC774\uC5B4 \uD45C\uD604\uC740 \uBC30\uACBD\uC0C9\uACFC \uADF8\uB9BC\uC790\uB85C. \uB2E4\uD06C\uBAA8\uB4DC\uB294 \uADF8\uB9BC\uC790 \uB300\uC2E0 \uBC30\uACBD \uBA85\uB3C4\uB85C \uAE4A\uC774\uB97C \uD45C\uD604\uD569\uB2C8\uB2E4."
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16
  }
}, [{
  name: "Ground",
  token: "background-sunken",
  shadow: "none",
  desc: "사이드바, 설정 패널"
}, {
  name: "Default",
  token: "background-default",
  shadow: "none",
  desc: "카드, 패널 기본"
}, {
  name: "Elevation 01",
  token: "background-elevation01",
  shadow: "0 2px 8px rgba(30,27,75,0.06)",
  desc: "드롭다운, 툴팁"
}, {
  name: "Elevation 02",
  token: "background-elevation02",
  shadow: "0 8px 24px rgba(30,27,75,0.12)",
  desc: "모달, 다이얼로그"
}].map(l => /*#__PURE__*/React.createElement("div", {
  key: l.name,
  style: {
    padding: 24,
    height: 160,
    borderRadius: 12,
    background: `var(--s-color-neutral-${l.token})`,
    boxShadow: l.shadow,
    border: "1px solid var(--s-color-neutral-divider-default)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "t-title-s"
}, l.name), /*#__PURE__*/React.createElement("div", {
  className: "t-body-s",
  style: {
    color: "var(--s-color-neutral-contents-additional)",
    marginTop: 4
  }
}, l.desc)), /*#__PURE__*/React.createElement(Code, null, l.token)))));

/* ─────────── Buttons section ─────────── */
const ButtonsSection = ({
  playground
}) => {
  const [size, setSize] = useState("M");
  const [shape, setShape] = useState("square");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const allKinds = ["primary", "secondary", "tertiary", "outline", "danger"];
  const allSizes = ["2XS", "XS", "S", "M", "L", "XL"];
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Components",
    title: "Buttons",
    desc: "6 sizes (2XS~XL), 5 kinds, 2 shapes. \uD55C \uD654\uBA74\uC5D0 Primary\uB294 1\uAC1C\uB9CC \u2014 \uB450 \uBC88\uC9F8 CTA\uB294 secondary\uB098 tertiary\uB85C."
  }), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Kinds",
    detailHref: "components/Button.html"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12,
      display: "flex",
      flexWrap: "wrap",
      gap: 12
    }
  }, allKinds.map(k => /*#__PURE__*/React.createElement(Button, {
    key: k,
    kind: k
  }, "Button ", k)), /*#__PURE__*/React.createElement(Button, {
    kind: "primary",
    disabled: true
  }, "Disabled"), /*#__PURE__*/React.createElement(Button, {
    kind: "primary",
    loading: true
  }, "Loading")), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Sizes"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 12
    }
  }, allSizes.map(s => /*#__PURE__*/React.createElement(Button, {
    key: s,
    size: s
  }, s))), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Icon buttons"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    })
  }, "\uC0C8\uB85C \uB9CC\uB4E4\uAE30"), /*#__PURE__*/React.createElement(Button, {
    kind: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 16
    })
  }, "\uB2E4\uC6B4\uB85C\uB4DC"), /*#__PURE__*/React.createElement(Button, {
    kind: "tertiary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "share",
      size: 16
    })
  }, "\uACF5\uC720"), /*#__PURE__*/React.createElement(Button, {
    shape: "round",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "settings",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(Button, {
    shape: "round",
    kind: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "more",
      size: 16
    })
  })), playground && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Playground"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 24,
      alignItems: "center",
      marginBottom: 24,
      paddingBottom: 16,
      borderBottom: "1px solid var(--s-color-neutral-divider-default)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      color: "var(--s-color-neutral-contents-sub)",
      marginBottom: 6
    }
  }, "Size"), /*#__PURE__*/React.createElement(Tabs, {
    kind: "pill",
    items: allSizes.map(s => ({
      id: s,
      label: s
    })),
    active: size,
    onChange: setSize
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      color: "var(--s-color-neutral-contents-sub)",
      marginBottom: 6
    }
  }, "Shape"), /*#__PURE__*/React.createElement(Tabs, {
    kind: "pill",
    items: [{
      id: "square",
      label: "Square"
    }, {
      id: "round",
      label: "Round"
    }],
    active: shape,
    onChange: setShape
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    size: "S",
    checked: disabled,
    onChange: setDisabled
  }), " ", /*#__PURE__*/React.createElement("span", {
    className: "t-body-m"
  }, "Disabled")), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    size: "S",
    checked: loading,
    onChange: setLoading
  }), " ", /*#__PURE__*/React.createElement("span", {
    className: "t-body-m"
  }, "Loading"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12
    }
  }, allKinds.map(k => /*#__PURE__*/React.createElement(Button, {
    key: k,
    kind: k,
    size: size,
    shape: shape,
    disabled: disabled,
    loading: loading
  }, k))))));
};

/* ─────────── Forms ─────────── */
const FormsSection = () => {
  const [name, setName] = useState("");
  const [check, setCheck] = useState({
    a: true,
    b: false,
    c: false
  });
  const [radio, setRadio] = useState("medium");
  const [sw, setSw] = useState(true);
  const [vol, setVol] = useState(64);
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Components",
    title: "Form controls",
    desc: "Input, Switch, Checkbox, Radio, Slider. \uC989\uAC01\uC801\uC778 on/off\uC5D0\uB294 Switch, \uB2E4\uC911 \uC120\uD0DD\uC5D0\uB294 Checkbox."
  }), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Input",
    detailHref: "components/Input.html"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12,
      display: "grid",
      gap: 16,
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
    }
  }, ["XS", "S", "M", "L"].map(sz => /*#__PURE__*/React.createElement("div", {
    key: sz
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      color: "var(--s-color-neutral-contents-sub)",
      marginBottom: 6
    }
  }, "Size ", sz), /*#__PURE__*/React.createElement(Input, {
    size: sz,
    placeholder: `Size ${sz} placeholder`,
    value: name,
    onChange: e => setName(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      color: "var(--s-color-neutral-contents-sub)",
      marginBottom: 6
    }
  }, "With prefix"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "\uAC80\uC0C9",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16,
      color: "var(--s-color-neutral-contents-additional)"
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      color: "var(--s-color-neutral-contents-sub)",
      marginBottom: 6
    }
  }, "Error state"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "\uC774\uBA54\uC77C",
    error: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      color: "var(--s-color-neutral-contents-sub)",
      marginBottom: 6
    }
  }, "Disabled"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "\uC218\uC815 \uBD88\uAC00",
    disabled: true
  }))), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Switch \xB7 Checkbox \xB7 Radio",
    detailHref: "components/Switch.html"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12,
      display: "grid",
      gap: 24,
      gridTemplateColumns: "repeat(3, 1fr)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-title-xs",
    style: {
      marginBottom: 12
    }
  }, "Switch"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-m"
  }, "\uC54C\uB9BC \uBC1B\uAE30"), /*#__PURE__*/React.createElement(Switch, {
    checked: sw,
    onChange: setSw
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-m"
  }, "\uC790\uB3D9 \uC800\uC7A5"), /*#__PURE__*/React.createElement(Switch, {
    checked: !sw,
    onChange: v => setSw(!v)
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-m"
  }, "\uC77D\uC9C0 \uC54A\uC74C (disabled)"), /*#__PURE__*/React.createElement(Switch, {
    checked: false,
    disabled: true
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-title-xs",
    style: {
      marginBottom: 12
    }
  }, "Checkbox"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: check.a,
    onChange: v => setCheck({
      ...check,
      a: v
    }),
    label: "\uC774\uC6A9\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: check.b,
    onChange: v => setCheck({
      ...check,
      b: v
    }),
    label: "\uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0 \uB3D9\uC758 (\uC120\uD0DD)"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    indeterminate: true,
    label: "\uC77C\uBD80 \uC120\uD0DD"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: false,
    disabled: true,
    label: "\uC7A0\uAE34 \uC635\uC158"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-title-xs",
    style: {
      marginBottom: 12
    }
  }, "Radio"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, ["small", "medium", "large"].map(v => /*#__PURE__*/React.createElement(Radio, {
    key: v,
    checked: radio === v,
    onChange: () => setRadio(v),
    label: v.charAt(0).toUpperCase() + v.slice(1)
  }))))), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Slider"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-body-m",
    style: {
      marginBottom: 8,
      color: "var(--s-color-neutral-contents-sub)"
    }
  }, "\uBCFC\uB968: ", vol), /*#__PURE__*/React.createElement(Slider, {
    value: vol,
    onChange: setVol
  })));
};

/* ─────────── Feedback ─────────── */
const FeedbackSection = () => {
  const [modal, setModal] = useState(false);
  const [toasts, setToasts] = useState([]);
  const showToast = kind => {
    const id = Date.now();
    setToasts(t => [...t, {
      id,
      kind
    }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3000);
  };
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Components",
    title: "Feedback",
    desc: "\uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC0C1\uD0DC\uB97C \uC54C\uB9AC\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uB4E4. \uAC15\uC81C\uC131\uC774 \uAC00\uC7A5 \uC57D\uD55C \uAC83\uBD80\uD130: Banner \u2192 Toast \u2192 Modal."
  }), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Banner",
    detailHref: "components/Banner.html"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    kind: "info",
    title: "\uC0C8 \uAE30\uB2A5 \uC548\uB0B4"
  }, "AI Shorts Creator\uAC00 \uBCA0\uD0C0 \uCD9C\uC2DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uBC14\uB85C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694."), /*#__PURE__*/React.createElement(Banner, {
    kind: "positive",
    title: "\uC800\uC7A5 \uC644\uB8CC"
  }, "\uBCC0\uACBD\uC0AC\uD56D\uC774 \uC790\uB3D9 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Banner, {
    kind: "warning",
    title: "\uC6A9\uB7C9 \uBD80\uC871"
  }, "\uB0A8\uC740 \uC800\uC7A5 \uACF5\uAC04\uC774 200MB \uBBF8\uB9CC\uC785\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Banner, {
    kind: "negative",
    title: "\uC624\uB958 \uBC1C\uC0DD"
  }, "\uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.")), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Toast",
    detailHref: "components/Toast.html"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12,
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    kind: "secondary",
    onClick: () => showToast("info")
  }, "Info Toast"), /*#__PURE__*/React.createElement(Button, {
    kind: "secondary",
    onClick: () => showToast("positive")
  }, "Positive Toast"), /*#__PURE__*/React.createElement(Button, {
    kind: "secondary",
    onClick: () => showToast("warning")
  }, "Warning Toast"), /*#__PURE__*/React.createElement(Button, {
    kind: "secondary",
    onClick: () => showToast("negative")
  }, "Negative Toast")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 24,
      right: 24,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      zIndex: 90
    }
  }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, {
    key: t.id,
    kind: t.kind,
    onClose: () => setToasts(s => s.filter(x => x.id !== t.id))
  }, t.kind, " \uBA54\uC2DC\uC9C0\uAC00 \uD45C\uC2DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."))), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Modal",
    detailHref: "components/Modal.html"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setModal(true)
  }, "\uBAA8\uB2EC \uC5F4\uAE30")), /*#__PURE__*/React.createElement(Modal, {
    open: modal,
    onClose: () => setModal(false),
    title: "\uD504\uB85C\uC81D\uD2B8 \uC0AD\uC81C",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      kind: "tertiary",
      onClick: () => setModal(false)
    }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement(Button, {
      kind: "danger",
      onClick: () => setModal(false)
    }, "\uC0AD\uC81C"))
  }, "\uC774 \uD504\uB85C\uC81D\uD2B8\uB97C \uC815\uB9D0 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? \uC774 \uC791\uC5C5\uC740 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Progress \xB7 Spinner \xB7 Skeleton"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12,
      display: "grid",
      gap: 24,
      gridTemplateColumns: "1fr 1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-title-xs",
    style: {
      marginBottom: 12
    }
  }, "Progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "\uC5C5\uB85C\uB4DC \uC911",
    value: 32
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "\uC0DD\uC131 \uC911",
    value: 68,
    kind: "positive"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "\uC6A9\uB7C9 \uC0AC\uC6A9\uB7C9",
    value: 92,
    kind: "warning"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-title-xs",
    style: {
      marginBottom: 12
    }
  }, "Spinner"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Spinner, {
    size: "XS"
  }), /*#__PURE__*/React.createElement(Spinner, {
    size: "S"
  }), /*#__PURE__*/React.createElement(Spinner, {
    size: "M"
  }), /*#__PURE__*/React.createElement(Spinner, {
    size: "L"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-title-xs",
    style: {
      marginBottom: 12
    }
  }, "Skeleton"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    width: "60%",
    height: 20,
    radius: 6
  }), /*#__PURE__*/React.createElement(Skeleton, {
    height: 12
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: "80%",
    height: 12
  })))));
};

/* ─────────── Data display ─────────── */
const DataDisplaySection = () => /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
  eyebrow: "Components",
  title: "Data display",
  desc: "Badge, Tag, Avatar, Card \u2014 \uC815\uBCF4 \uB2E8\uC704\uB97C \uBCF4\uC5EC\uC8FC\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uB4E4."
}), /*#__PURE__*/React.createElement(SubsectionHeader, {
  title: "Badge",
  detailHref: "components/Badge.html"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 24,
    background: "var(--s-color-neutral-background-default)",
    border: "1px solid var(--s-color-neutral-divider-default)",
    borderRadius: 12,
    display: "grid",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center"
  }
}, ["primary", "secondary", "positive", "negative", "warning", "info", "neutral"].map(k => /*#__PURE__*/React.createElement(Badge, {
  key: k,
  kind: k,
  variant: "light"
}, k))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center"
  }
}, ["primary", "positive", "negative", "warning", "info", "neutral"].map(k => /*#__PURE__*/React.createElement(Badge, {
  key: k,
  kind: k,
  variant: "solid"
}, k))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement(Badge, {
  kind: "primary",
  shape: "round"
}, "NEW"), /*#__PURE__*/React.createElement(Badge, {
  kind: "warning",
  shape: "round"
}, "BETA"), /*#__PURE__*/React.createElement(Badge, {
  kind: "positive",
  icon: "check"
}, "\uC644\uB8CC"), /*#__PURE__*/React.createElement(Badge, {
  kind: "negative",
  icon: "error"
}, "\uC5D0\uB7EC"), /*#__PURE__*/React.createElement(Badge, {
  kind: "positive",
  dot: true
}), /*#__PURE__*/React.createElement("span", {
  className: "t-body-m"
}, "\uC628\uB77C\uC778"))), /*#__PURE__*/React.createElement(SubsectionHeader, {
  title: "Tag",
  detailHref: "components/Tag.html"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 24,
    background: "var(--s-color-neutral-background-default)",
    border: "1px solid var(--s-color-neutral-divider-default)",
    borderRadius: 12,
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Tag, {
  kind: "primary"
}, "\uB514\uC790\uC778"), /*#__PURE__*/React.createElement(Tag, {
  kind: "secondary"
}, "\uD504\uB808\uC820\uD14C\uC774\uC158"), /*#__PURE__*/React.createElement(Tag, {
  kind: "positive",
  icon: "check"
}, "\uC2B9\uC778\uB428"), /*#__PURE__*/React.createElement(Tag, {
  kind: "warning"
}, "\uAC80\uD1A0 \uD544\uC694"), /*#__PURE__*/React.createElement(Tag, {
  kind: "neutral",
  onClose: () => {}
}, "\uD55C\uAD6D\uC5B4"), /*#__PURE__*/React.createElement(Tag, {
  kind: "info",
  icon: "info"
}, "\uBCA0\uD0C0")), /*#__PURE__*/React.createElement(SubsectionHeader, {
  title: "Avatar",
  detailHref: "components/Avatar.html"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 24,
    background: "var(--s-color-neutral-background-default)",
    border: "1px solid var(--s-color-neutral-divider-default)",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    gap: 12
  }
}, ["XS", "S", "M", "L", "XL", "2XL"].map((s, i) => /*#__PURE__*/React.createElement(Avatar, {
  key: s,
  size: s,
  name: ["김", "이", "박", "최", "정", "한"][i],
  color: ["viz-cyan", "viz-purple", "viz-orange", "viz-green", "viz-magenta", "viz-blue"][i]
}))), /*#__PURE__*/React.createElement(SubsectionHeader, {
  title: "Card",
  detailHref: "components/Card.html"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16
  }
}, /*#__PURE__*/React.createElement(Card, {
  interactive: true
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 12
  }
}, /*#__PURE__*/React.createElement(Avatar, {
  size: "M",
  name: "\uC774",
  color: "viz-cyan"
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "t-title-s"
}, "\uC774\uC218\uC9C4"), /*#__PURE__*/React.createElement("div", {
  className: "t-body-s",
  style: {
    color: "var(--s-color-neutral-contents-additional)"
  }
}, "2\uC2DC\uAC04 \uC804 \uC218\uC815"))), /*#__PURE__*/React.createElement("div", {
  className: "t-title-m",
  style: {
    marginBottom: 6
  }
}, "2026 \uBE0C\uB79C\uB4DC \uC804\uB7B5"), /*#__PURE__*/React.createElement("div", {
  className: "t-body-m",
  style: {
    color: "var(--s-color-neutral-contents-sub)",
    marginBottom: 12
  }
}, "\uC804\uB7B5 \uC6CC\uD06C\uC20D\uC5D0\uC11C \uB3C4\uCD9C\uD55C \uD3EC\uC9C0\uC154\uB2DD\uACFC \uD575\uC2EC \uBA54\uC2DC\uC9C0\uB97C \uC815\uB9AC\uD55C \uBB38\uC11C."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 6
  }
}, /*#__PURE__*/React.createElement(Tag, {
  kind: "primary"
}, "\uC804\uB7B5"), /*#__PURE__*/React.createElement(Tag, {
  kind: "neutral"
}, "\uAE30\uD68D"))), /*#__PURE__*/React.createElement(Card, {
  interactive: true
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: 120,
    background: "linear-gradient(135deg, var(--s-color-viz-cyan), var(--s-color-brand-primary-default))",
    borderRadius: 8,
    marginBottom: 12
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "t-title-m",
  style: {
    marginBottom: 4
  }
}, "AI \uD504\uB808\uC820\uD14C\uC774\uC158 \uB9CC\uB4E4\uAE30"), /*#__PURE__*/React.createElement("div", {
  className: "t-body-m",
  style: {
    color: "var(--s-color-neutral-contents-sub)"
  }
}, "\uC8FC\uC81C\uB9CC \uC785\uB825\uD558\uBA74 \uC790\uB3D9 \uC0DD\uC131")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
  className: "t-body-s",
  style: {
    color: "var(--s-color-neutral-contents-additional)",
    marginBottom: 4
  }
}, "\uC774\uBC88 \uB2EC \uC0AC\uC6A9\uB7C9"), /*#__PURE__*/React.createElement("div", {
  className: "t-display-xs",
  style: {
    marginBottom: 8
  }
}, "4,128 ", /*#__PURE__*/React.createElement("span", {
  className: "t-title-m",
  style: {
    color: "var(--s-color-neutral-contents-additional)"
  }
}, "/ 5,000")), /*#__PURE__*/React.createElement(ProgressBar, {
  value: 82,
  kind: "primary"
}))));

/* ─────────── Navigation ─────────── */
const NavigationSection = () => {
  const [tab, setTab] = useState("overview");
  const [pillTab, setPillTab] = useState("week");
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Components",
    title: "Navigation",
    desc: "Tabs, Tooltip \u2014 \uD654\uBA74 \uB0B4\uC5D0\uC11C \uC704\uCE58\uB97C \uC54C\uB9AC\uACE0 \uB3C4\uC6C0\uC744 \uC8FC\uB294 \uCEF4\uD3EC\uB10C\uD2B8."
  }), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Tabs \xB7 Underline",
    detailHref: "components/Tabs.html"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: "overview",
      label: "개요"
    }, {
      id: "templates",
      label: "템플릿"
    }, {
      id: "ai",
      label: "AI 도구"
    }, {
      id: "settings",
      label: "설정"
    }],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    className: "t-body-m",
    style: {
      color: "var(--s-color-neutral-contents-sub)",
      marginTop: 16
    }
  }, "\uD604\uC7AC \uD0ED: ", /*#__PURE__*/React.createElement(Code, null, tab))), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Tabs \xB7 Pill"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    kind: "pill",
    items: [{
      id: "day",
      label: "일간"
    }, {
      id: "week",
      label: "주간"
    }, {
      id: "month",
      label: "월간"
    }, {
      id: "year",
      label: "연간"
    }],
    active: pillTab,
    onChange: setPillTab
  })), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "Tooltip",
    detailHref: "components/Tooltip.html"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12,
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "\uC0C8 \uD504\uB85C\uC81D\uD2B8"
  }, /*#__PURE__*/React.createElement(Button, {
    shape: "round",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    })
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "\uC124\uC815 (\u2318 + ,)"
  }, /*#__PURE__*/React.createElement(Button, {
    shape: "round",
    kind: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "settings",
      size: 16
    })
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "\uACF5\uC720"
  }, /*#__PURE__*/React.createElement(Button, {
    shape: "round",
    kind: "tertiary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "share",
      size: 16
    })
  }))));
};

/* ─────────── Patterns (composed) ─────────── */
const PatternsSection = () => {
  const [aiInput, setAiInput] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState("");
  const askAi = async () => {
    if (!aiInput.trim() || aiLoading) return;
    setAiLoading(true);
    setAiOutput("");
    try {
      const result = await window.claude.complete(`다음 주제로 프레젠테이션 슬라이드 3장의 짧은 개요를 한국어로 만들어줘. 각 슬라이드는 한 줄 제목 + 한 줄 핵심 메시지로. 주제: ${aiInput}`);
      setAiOutput(result);
    } catch (e) {
      setAiOutput("죄송합니다. 응답을 생성할 수 없었습니다.");
    } finally {
      setAiLoading(false);
    }
  };
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Patterns",
    title: "\uD569\uC131 \uD328\uD134",
    desc: "\uC5EC\uB7EC \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC870\uD569\uD55C \uC2E4\uC81C \uD654\uBA74 \uC608\uC2DC. \uBBF8\uB9AC\uCE94\uBC84\uC2A4 \uC81C\uD488\uC5D0\uC11C \uC790\uC8FC \uB4F1\uC7A5\uD558\uB294 \uD615\uD0DC\uC785\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "AI \uC785\uB825 \uD328\uB110",
    desc: "Input + Button + \uC751\uB2F5 \uCE74\uB4DC"
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      background: "linear-gradient(135deg, var(--s-color-brand-primary-background) 0%, var(--s-color-neutral-background-default) 60%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ai",
    size: 20,
    color: "var(--s-color-brand-primary-default)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-title-m"
  }, "AI\uB85C \uC2AC\uB77C\uC774\uB4DC \uB9CC\uB4E4\uAE30"), /*#__PURE__*/React.createElement(Badge, {
    kind: "primary",
    shape: "round"
  }, "BETA")), /*#__PURE__*/React.createElement("div", {
    className: "t-body-m",
    style: {
      color: "var(--s-color-neutral-contents-sub)",
      marginBottom: 16
    }
  }, "\uC8FC\uC81C\uB9CC \uC785\uB825\uD558\uBA74 \uC790\uB3D9\uC73C\uB85C \uAC1C\uC694\uB97C \uB9CC\uB4E4\uC5B4 \uB4DC\uB824\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "L",
    placeholder: "\uC608: \uC2E0\uC785\uC0AC\uC6D0 \uC628\uBCF4\uB529 \uD504\uB85C\uADF8\uB7A8",
    value: aiInput,
    onChange: e => setAiInput(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    size: "L",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 16,
      color: "white"
    }),
    onClick: askAi,
    loading: aiLoading,
    disabled: !aiInput.trim()
  }, "\uC0DD\uC131")), (aiOutput || aiLoading) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 16,
      background: "var(--s-color-neutral-background-default)",
      borderRadius: 8,
      border: "1px solid var(--s-color-neutral-divider-default)"
    }
  }, aiLoading ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    width: "40%",
    height: 16
  }), /*#__PURE__*/React.createElement(Skeleton, {
    height: 12
  }), /*#__PURE__*/React.createElement(Skeleton, {
    height: 12
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: "80%",
    height: 12
  })) : /*#__PURE__*/React.createElement("div", {
    className: "t-body-m",
    style: {
      whiteSpace: "pre-wrap",
      color: "var(--s-color-neutral-contents-default)"
    }
  }, aiOutput))), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "\uD15C\uD50C\uB9BF \uCE74\uB4DC \uADF8\uB9AC\uB4DC"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: 16
    }
  }, [{
    color: "viz-purple",
    label: "프레젠테이션",
    count: 124
  }, {
    color: "viz-cyan",
    label: "포스터",
    count: 87
  }, {
    color: "viz-orange",
    label: "SNS 콘텐츠",
    count: 213
  }, {
    color: "viz-green",
    label: "카드뉴스",
    count: 56
  }].map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.label,
    interactive: true,
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 3",
      background: `var(--s-color-${t.color})`,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    kind: "neutral",
    variant: "solid"
  }, t.count))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-title-s"
  }, t.label), /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      color: "var(--s-color-neutral-contents-additional)",
      marginTop: 2
    }
  }, t.count, "\uAC1C \uD15C\uD50C\uB9BF"))))), /*#__PURE__*/React.createElement(SubsectionHeader, {
    title: "\uC124\uC815 \uB9AC\uC2A4\uD2B8"
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, [{
    title: "이메일 알림",
    desc: "주요 활동에 대해 이메일을 받습니다",
    value: true
  }, {
    title: "데스크탑 알림",
    desc: "브라우저 푸시 알림을 받습니다",
    value: false
  }, {
    title: "주간 요약",
    desc: "매주 월요일 활동 요약을 받습니다",
    value: true
  }].map((s, i) => /*#__PURE__*/React.createElement(SettingsRow, _extends({
    key: s.title
  }, s, {
    divider: i > 0
  })))));
};
const SettingsRow = ({
  title,
  desc,
  value,
  divider
}) => {
  const [v, setV] = useState(value);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 24px",
      borderTop: divider ? "1px solid var(--s-color-neutral-divider-default)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-title-xs"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      color: "var(--s-color-neutral-contents-additional)",
      marginTop: 2
    }
  }, desc)), /*#__PURE__*/React.createElement(Switch, {
    checked: v,
    onChange: setV
  }));
};

/* ─────────── Intro / Overview ─────────── */
const IntroSection = ({
  onJump
}) => /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "48px 40px",
    borderRadius: 16,
    background: "linear-gradient(135deg, var(--s-color-brand-primary-background) 0%, var(--s-color-brand-secondary-background) 100%)",
    marginBottom: 32,
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: -40,
    right: -40,
    width: 240,
    height: 240,
    borderRadius: "50%",
    background: "var(--s-color-brand-primary-surface)",
    filter: "blur(20px)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    bottom: -60,
    right: 80,
    width: 160,
    height: 160,
    borderRadius: "50%",
    background: "var(--s-color-brand-secondary-surface)",
    filter: "blur(16px)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
    padding: "6px 12px",
    background: "var(--s-color-neutral-background-default)",
    borderRadius: 999,
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "var(--s-color-brand-primary-accessible)"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "logo",
  size: 14
}), " Miricanvas Design System \xB7 v1.0"), /*#__PURE__*/React.createElement("h1", {
  className: "t-display-m",
  style: {
    margin: 0,
    marginBottom: 12,
    maxWidth: 720
  }
}, "\uCE5C\uADFC\uD558\uB418 \uC804\uBB38\uC801\uC778, ", /*#__PURE__*/React.createElement("br", null), "\uD55C\uAD6D\uC5B4 \uC911\uC2EC\uC758 \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C"), /*#__PURE__*/React.createElement("p", {
  className: "t-body-l",
  style: {
    margin: 0,
    color: "var(--s-color-neutral-contents-sub)",
    maxWidth: 600
  }
}, "Pretendard \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uC640 Teal #21AFBF \uBE0C\uB79C\uB4DC \uCEEC\uB7EC\uB97C \uAE30\uBC18\uC73C\uB85C, \uC2DC\uB9E8\uD2F1 \uD1A0\uD070 \uCCB4\uACC4\uB97C \uD1B5\uD574 \uB77C\uC774\uD2B8/\uB2E4\uD06C \uD14C\uB9C8\uB97C \uC790\uB3D9 \uC804\uD658\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 8,
    marginTop: 24
  }
}, /*#__PURE__*/React.createElement(Button, {
  size: "L",
  onClick: () => onJump("colors"),
  iconRight: /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "white"
  })
}, "\uD1A0\uD070 \uC0B4\uD3B4\uBCF4\uAE30"), /*#__PURE__*/React.createElement(Button, {
  size: "L",
  kind: "secondary",
  onClick: () => onJump("buttons")
}, "\uCEF4\uD3EC\uB10C\uD2B8 \uBCF4\uAE30")))), /*#__PURE__*/React.createElement(SubsectionHeader, {
  title: "3\uAC00\uC9C0 \uC6D0\uCE59"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16
  }
}, [{
  num: "01",
  title: "친근하되 전문적",
  desc: "Teal은 신뢰와 창의성을 동시에 전달합니다. 채도와 명도를 조율해 차갑거나 기업적으로 느껴지지 않도록 했습니다."
}, {
  num: "02",
  title: "한국어 중심",
  desc: "Pretendard Variable이 기본. 영문은 Figtree, 일본어는 IBM Plex Sans JP로 폴백되어 다국어 환경에서도 일관됩니다."
}, {
  num: "03",
  title: "시맨틱 토큰",
  desc: "원시 hex 대신 var(--s-color-*)를 씁니다. 라이트/다크 전환은 토큰 레이어에서 자동 처리됩니다."
}].map(p => /*#__PURE__*/React.createElement(Card, {
  key: p.num
}, /*#__PURE__*/React.createElement("div", {
  className: "t-display-xs",
  style: {
    color: "var(--s-color-brand-primary-default)",
    fontFamily: "ui-monospace, monospace",
    fontWeight: 700,
    marginBottom: 12
  }
}, p.num), /*#__PURE__*/React.createElement("div", {
  className: "t-title-m",
  style: {
    marginBottom: 8
  }
}, p.title), /*#__PURE__*/React.createElement("div", {
  className: "t-body-m",
  style: {
    color: "var(--s-color-neutral-contents-sub)"
  }
}, p.desc)))), /*#__PURE__*/React.createElement(SubsectionHeader, {
  title: "\uBAA9\uCC28"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 8
  }
}, NAV.slice(1).map(n => /*#__PURE__*/React.createElement("button", {
  type: "button",
  key: n.id,
  onClick: () => onJump(n.id),
  style: {
    textAlign: "left",
    padding: 16,
    background: "var(--s-color-neutral-background-default)",
    border: "1px solid var(--s-color-neutral-divider-default)",
    borderRadius: 8,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 12,
    color: "var(--s-color-neutral-contents-default)",
    transition: "border-color 120ms, background 120ms"
  },
  onMouseEnter: e => {
    e.currentTarget.style.borderColor = "var(--s-color-brand-primary-default)";
  },
  onMouseLeave: e => {
    e.currentTarget.style.borderColor = "var(--s-color-neutral-divider-default)";
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: "var(--s-color-brand-primary-background)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: n.icon,
  size: 18,
  color: "var(--s-color-brand-primary-default)"
})), /*#__PURE__*/React.createElement("span", {
  className: "t-body-strong-m"
}, n.label), /*#__PURE__*/React.createElement(Icon, {
  name: "chevron-right",
  size: 14,
  color: "var(--s-color-neutral-contents-additional)",
  style: {
    marginLeft: "auto"
  }
})))));

/* ─────────── App shell ─────────── */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "navStyle": "side",
  "colorDisplay": "swatch",
  "showPlayground": true,
  "compact": false
} /*EDITMODE-END*/;
function useTweaks(initial) {
  const [t, setT] = useState(initial);
  const set = (k, v) => {
    if (typeof k === "object") {
      setT(prev => ({
        ...prev,
        ...k
      }));
      window.parent?.postMessage({
        type: "__edit_mode_set_keys",
        edits: k
      }, "*");
    } else {
      setT(prev => ({
        ...prev,
        [k]: v
      }));
      window.parent?.postMessage({
        type: "__edit_mode_set_keys",
        edits: {
          [k]: v
        }
      }, "*");
    }
  };
  return [t, set];
}
const App = () => {
  const [active, setActive] = useState("intro");
  const [theme, setTheme] = useState("light");
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [showTweaks, setShowTweaks] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
    const handler = e => {
      if (e.data?.type === "__activate_edit_mode") setShowTweaks(true);
      if (e.data?.type === "__deactivate_edit_mode") setShowTweaks(false);
    };
    window.addEventListener("message", handler);
    window.parent?.postMessage({
      type: "__edit_mode_available"
    }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);
  const renderSection = () => {
    switch (active) {
      case "intro":
        return /*#__PURE__*/React.createElement(IntroSection, {
          onJump: setActive
        });
      case "colors":
        return /*#__PURE__*/React.createElement(ColorsSection, {
          display: tweaks.colorDisplay
        });
      case "typography":
        return /*#__PURE__*/React.createElement(TypographySection, null);
      case "spacing":
        return /*#__PURE__*/React.createElement(SpacingSection, null);
      case "elevation":
        return /*#__PURE__*/React.createElement(ElevationSection, null);
      case "buttons":
        return /*#__PURE__*/React.createElement(ButtonsSection, {
          playground: tweaks.showPlayground
        });
      case "forms":
        return /*#__PURE__*/React.createElement(FormsSection, null);
      case "feedback":
        return /*#__PURE__*/React.createElement(FeedbackSection, null);
      case "data-display":
        return /*#__PURE__*/React.createElement(DataDisplaySection, null);
      case "navigation":
        return /*#__PURE__*/React.createElement(NavigationSection, null);
      case "patterns":
        return /*#__PURE__*/React.createElement(PatternsSection, null);
      default:
        return null;
    }
  };
  const isTopNav = tweaks.navStyle === "top";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: isTopNav ? "block" : "flex"
    }
  }, !isTopNav && /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flexShrink: 0,
      background: "var(--s-color-neutral-background-default)",
      borderRight: "1px solid var(--s-color-neutral-divider-default)",
      padding: "20px 12px",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      position: "sticky",
      top: 0,
      height: "100vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 12px 16px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "logo",
    size: 28
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-title-s",
    style: {
      lineHeight: 1.2
    }
  }, "Miricanvas"), /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      color: "var(--s-color-neutral-contents-additional)"
    }
  }, "Design System"))), NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    type: "button",
    onClick: () => setActive(n.id),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 12px",
      border: "none",
      borderRadius: 6,
      background: active === n.id ? "var(--s-color-brand-primary-background)" : "transparent",
      color: active === n.id ? "var(--s-color-brand-primary-accessible)" : "var(--s-color-neutral-contents-sub)",
      cursor: "pointer",
      textAlign: "left",
      fontSize: "0.875rem",
      fontWeight: active === n.id ? 600 : 500,
      transition: "background 120ms, color 120ms"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n.icon,
    size: 16
  }), n.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "12px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      justifyContent: "space-between",
      background: "var(--s-color-neutral-surface-extra-light)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--s-color-neutral-contents-sub)",
      fontSize: "0.8125rem"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === "light" ? "sun" : "moon",
    size: 14
  }), theme === "light" ? "Light" : "Dark"), /*#__PURE__*/React.createElement(Switch, {
    size: "S",
    checked: theme === "dark",
    onChange: v => setTheme(v ? "dark" : "light")
  }))), isTopNav && /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--s-color-neutral-background-default)",
      borderBottom: "1px solid var(--s-color-neutral-divider-default)",
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "logo",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-title-s"
  }, "Miricanvas DS")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 24,
      overflowX: "auto"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    type: "button",
    onClick: () => setActive(n.id),
    style: {
      padding: "6px 10px",
      border: "none",
      borderRadius: 6,
      background: active === n.id ? "var(--s-color-brand-primary-background)" : "transparent",
      color: active === n.id ? "var(--s-color-brand-primary-accessible)" : "var(--s-color-neutral-contents-sub)",
      cursor: "pointer",
      fontSize: "0.8125rem",
      fontWeight: 600,
      whiteSpace: "nowrap"
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    kind: "tertiary",
    shape: "round",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: theme === "light" ? "moon" : "sun",
      size: 16
    }),
    onClick: () => setTheme(theme === "light" ? "dark" : "light")
  }))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      padding: tweaks.compact ? "24px 32px" : "40px 48px",
      maxWidth: 1100,
      margin: isTopNav ? "0 auto" : undefined,
      width: "100%"
    }
  }, renderSection()), showTweaks && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 24,
      right: 24,
      width: 280,
      zIndex: 200,
      background: "var(--s-color-neutral-background-elevation02)",
      borderRadius: 12,
      boxShadow: "var(--s-shadow-modal)",
      padding: 16,
      border: "1px solid var(--s-color-neutral-divider-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-title-s"
  }, "Tweaks"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setShowTweaks(false);
      window.parent?.postMessage({
        type: "__edit_mode_dismissed"
      }, "*");
    },
    style: {
      border: "none",
      background: "transparent",
      color: "var(--s-color-neutral-contents-sub)",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      marginBottom: 6,
      color: "var(--s-color-neutral-contents-sub)"
    }
  }, "Navigation"), /*#__PURE__*/React.createElement(Tabs, {
    kind: "pill",
    items: [{
      id: "side",
      label: "Side"
    }, {
      id: "top",
      label: "Top"
    }],
    active: tweaks.navStyle,
    onChange: v => setTweak("navStyle", v)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      marginBottom: 6,
      color: "var(--s-color-neutral-contents-sub)"
    }
  }, "Color display"), /*#__PURE__*/React.createElement(Tabs, {
    kind: "pill",
    items: [{
      id: "swatch",
      label: "Swatch"
    }, {
      id: "table",
      label: "Table"
    }],
    active: tweaks.colorDisplay,
    onChange: v => setTweak("colorDisplay", v)
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-m"
  }, "Button playground"), /*#__PURE__*/React.createElement(Switch, {
    size: "S",
    checked: tweaks.showPlayground,
    onChange: v => setTweak("showPlayground", v)
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-body-m"
  }, "Compact padding"), /*#__PURE__*/React.createElement(Switch, {
    size: "S",
    checked: tweaks.compact,
    onChange: v => setTweak("compact", v)
  })))));
};
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "catalog-app.jsx", error: String((e && e.message) || e) }); }

// components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
/* Miricanvas DS — lightweight catalog implementations
   Mirrors @ui/design-system surface (Button, Badge, Input, Switch, etc.)
   using semantic tokens directly. NOT for production — catalog only. */

const {
  useState,
  useRef,
  useEffect,
  useCallback
} = React;

/* ─────────── Icons ─────────── */
const Icon = ({
  name,
  size = 16,
  color = "currentColor",
  strokeWidth = 1.6
}) => {
  const s = size;
  const common = {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  switch (name) {
    case "search":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "11",
        cy: "11",
        r: "7"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m20 20-3.5-3.5"
      }));
    case "close":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M6 6l12 12M18 6 6 18"
      }));
    case "check":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M5 12.5 9.5 17 19 7"
      }));
    case "chevron-down":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "m6 9 6 6 6-6"
      }));
    case "chevron-right":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "m9 6 6 6-6 6"
      }));
    case "chevron-left":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "m15 6-6 6 6 6"
      }));
    case "plus":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M12 5v14M5 12h14"
      }));
    case "settings":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      }));
    case "user":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "8",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4 21a8 8 0 0 1 16 0"
      }));
    case "bell":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
      }));
    case "trash":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"
      }));
    case "edit":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"
      }));
    case "info":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 16v-4M12 8h.01"
      }));
    case "warning":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 9v4M12 17h.01"
      }));
    case "error":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M15 9l-6 6M9 9l6 6"
      }));
    case "success":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m9 11 3 3L22 4"
      }));
    case "send":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M22 2 11 13M22 2l-7 20-4-9-9-4Z"
      }));
    case "ai":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "m12 3 2.4 5.6L20 11l-5.6 2.4L12 19l-2.4-5.6L4 11l5.6-2.4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19 4v3M21 5h-4"
      }));
    case "image":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "9",
        cy: "9",
        r: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m21 15-3.6-3.6a2 2 0 0 0-2.8 0L3 21"
      }));
    case "folder":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2Z"
      }));
    case "play":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M5 3 19 12 5 21Z"
      }));
    case "menu":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M3 6h18M3 12h18M3 18h18"
      }));
    case "filter":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M22 3H2l8 9.46V19l4 2v-8.54Z"
      }));
    case "moon":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
      }));
    case "sun":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      }));
    case "copy":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "9",
        y: "9",
        width: "13",
        height: "13",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
      }));
    case "download":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
      }));
    case "share":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "18",
        cy: "5",
        r: "3"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "6",
        cy: "12",
        r: "3"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "18",
        cy: "19",
        r: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m8.59 13.51 6.83 3.98M15.41 6.51 8.59 10.49"
      }));
    case "heart":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
      }));
    case "star":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z"
      }));
    case "more":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "5",
        cy: "12",
        r: "1.5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "1.5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "19",
        cy: "12",
        r: "1.5"
      }));
    case "logo":
      return /*#__PURE__*/React.createElement("svg", {
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "none"
      }, /*#__PURE__*/React.createElement("rect", {
        x: "2",
        y: "2",
        width: "20",
        height: "20",
        rx: "6",
        fill: "var(--s-color-brand-primary-default)"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7 16V8h2.2L12 13l2.8-5H17v8h-1.8v-5l-2.5 4.4h-1.4L8.8 11v5z",
        fill: "white"
      }));
    default:
      return null;
  }
};

/* ─────────── Button ─────────── */
const buttonHeights = {
  "2XS": 24,
  "XS": 28,
  S: 32,
  M: 40,
  L: 48,
  XL: 56
};
const buttonPaddings = {
  "2XS": "0 8px",
  "XS": "0 10px",
  S: "0 12px",
  M: "0 16px",
  L: "0 20px",
  XL: "0 24px"
};
const buttonFonts = {
  "2XS": "0.6875rem",
  "XS": "0.75rem",
  S: "0.8125rem",
  M: "0.875rem",
  L: "1rem",
  XL: "1.0625rem"
};
const buttonRadius = {
  "2XS": 6,
  "XS": 6,
  S: 8,
  M: 8,
  L: 10,
  XL: 12
};
const Button = ({
  kind = "primary",
  size = "M",
  shape = "square",
  disabled,
  loading,
  icon,
  iconRight,
  children,
  onClick,
  type = "button",
  style = {},
  ...rest
}) => {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const h = buttonHeights[size];
  const r = shape === "round" ? 999 : buttonRadius[size];
  const palette = (() => {
    if (disabled) return {
      bg: "var(--s-color-neutral-surface-lightness)",
      color: "var(--s-color-neutral-contents-disabled)",
      border: "transparent"
    };
    if (kind === "primary") return {
      bg: pressed || hover ? "var(--s-color-brand-primary-accessible)" : "var(--s-color-brand-primary-default)",
      color: "var(--s-color-brand-primary-on-container)",
      border: "transparent"
    };
    if (kind === "secondary") return {
      bg: hover ? "var(--s-color-neutral-surface-light)" : "var(--s-color-neutral-surface-lightness)",
      color: "var(--s-color-neutral-contents-default)",
      border: "transparent"
    };
    if (kind === "tertiary") return {
      bg: hover ? "var(--s-color-neutral-surface-lightness)" : "transparent",
      color: "var(--s-color-neutral-contents-default)",
      border: "transparent"
    };
    if (kind === "outline") return {
      bg: hover ? "var(--s-color-neutral-surface-lightness)" : "transparent",
      color: "var(--s-color-neutral-contents-default)",
      border: "var(--s-color-neutral-border-default)"
    };
    if (kind === "danger") return {
      bg: hover ? "var(--s-color-semantic-negative-accessible)" : "var(--s-color-semantic-negative-default)",
      color: "var(--s-color-semantic-negative-on-container)",
      border: "transparent"
    };
    return {
      bg: "transparent",
      color: "var(--s-color-neutral-contents-default)",
      border: "transparent"
    };
  })();
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      height: h,
      padding: shape === "round" && !children ? 0 : buttonPaddings[size],
      width: shape === "round" && !children ? h : undefined,
      background: palette.bg,
      color: palette.color,
      border: `1px solid ${palette.border}`,
      borderRadius: r,
      fontSize: buttonFonts[size],
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-0.01em",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: size === "2XS" || size === "XS" ? 4 : 6,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background 120ms ease, color 120ms ease, border-color 120ms ease, transform 80ms ease",
      transform: pressed ? "translateY(1px)" : "none",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(Spinner, {
    size: size === "2XS" || size === "XS" ? "XS" : "S",
    color: palette.color
  }) : icon, children, iconRight);
};

/* ─────────── Spinner ─────────── */
const spinnerSizes = {
  XS: 16,
  S: 20,
  M: 24,
  L: 40,
  XL: 48
};
const Spinner = ({
  size = "M",
  color = "var(--s-color-brand-primary-default)"
}) => {
  const s = spinnerSizes[size];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: s,
      height: s,
      border: `${size === "XS" || size === "S" ? 2 : 3}px solid var(--s-color-neutral-surface-light)`,
      borderTopColor: color,
      borderRadius: "50%",
      animation: "miri-spin 700ms linear infinite"
    }
  });
};

/* ─────────── Badge ─────────── */
const badgePalettes = {
  primary: {
    solid: ["var(--s-color-brand-primary-default)", "var(--s-color-brand-primary-on-container)"],
    light: ["var(--s-color-brand-primary-background)", "var(--s-color-brand-primary-accessible)"]
  },
  secondary: {
    solid: ["var(--s-color-brand-secondary-default)", "var(--s-color-brand-secondary-on-container)"],
    light: ["var(--s-color-brand-secondary-background)", "var(--s-color-brand-secondary-accessible)"]
  },
  positive: {
    solid: ["var(--s-color-semantic-positive-default)", "var(--s-color-semantic-positive-on-container)"],
    light: ["var(--s-color-semantic-positive-background)", "var(--s-color-semantic-positive-accessible)"]
  },
  negative: {
    solid: ["var(--s-color-semantic-negative-default)", "var(--s-color-semantic-negative-on-container)"],
    light: ["var(--s-color-semantic-negative-background)", "var(--s-color-semantic-negative-accessible)"]
  },
  warning: {
    solid: ["var(--s-color-semantic-warning-default)", "var(--s-color-semantic-warning-on-container)"],
    light: ["var(--s-color-semantic-warning-background)", "var(--s-color-semantic-warning-accessible)"]
  },
  info: {
    solid: ["var(--s-color-semantic-info-default)", "var(--s-color-semantic-info-on-container)"],
    light: ["var(--s-color-semantic-info-background)", "var(--s-color-semantic-info-accessible)"]
  },
  neutral: {
    solid: ["var(--s-color-neutral-surface-medium)", "var(--s-color-neutral-contents-on-brand)"],
    light: ["var(--s-color-neutral-surface-lightness)", "var(--s-color-neutral-contents-default)"]
  }
};
const badgeHeights = {
  "2XS": 16,
  XS: 18,
  S: 20,
  M: 24
};
const badgeFonts = {
  "2XS": "0.625rem",
  XS: "0.6875rem",
  S: "0.75rem",
  M: "0.8125rem"
};
const Badge = ({
  kind = "primary",
  variant = "light",
  size = "S",
  shape = "square",
  icon,
  dot,
  children
}) => {
  const palette = badgePalettes[kind] || badgePalettes.neutral;
  const [bg, color] = palette[variant];
  const h = badgeHeights[size];
  if (dot) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: 999,
        background: bg
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: h,
      minWidth: h,
      padding: icon || children ? "0 6px" : 0,
      background: bg,
      color,
      borderRadius: shape === "round" ? 999 : 4,
      fontSize: badgeFonts[size],
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-0.01em"
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: h - 8,
    color: color
  }), children);
};

/* ─────────── Input ─────────── */
const inputHeights = {
  XS: 28,
  S: 32,
  M: 40,
  L: 48
};
const inputFonts = {
  XS: "0.8125rem",
  S: "0.8125rem",
  M: "0.875rem",
  L: "1rem"
};
const Input = ({
  size = "M",
  placeholder,
  value,
  onChange,
  disabled,
  error,
  prefix,
  suffix,
  type = "text",
  style = {}
}) => {
  const [focus, setFocus] = useState(false);
  const h = inputHeights[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: h,
      padding: "0 12px",
      gap: 8,
      background: disabled ? "var(--s-color-neutral-surface-lightness)" : "var(--s-color-neutral-background-default)",
      border: `1px solid ${error ? "var(--s-color-semantic-negative-default)" : focus ? "var(--s-color-brand-primary-default)" : "var(--s-color-neutral-border-default)"}`,
      borderRadius: 8,
      transition: "border-color 120ms ease",
      opacity: disabled ? 0.7 : 1,
      ...style
    }
  }, prefix, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--s-color-neutral-contents-default)",
      fontSize: inputFonts[size],
      fontFamily: "inherit",
      padding: 0,
      lineHeight: 1.4
    }
  }), suffix);
};

/* ─────────── Switch ─────────── */
const switchSizes = {
  S: {
    w: 28,
    h: 16,
    k: 12
  },
  M: {
    w: 36,
    h: 20,
    k: 16
  },
  L: {
    w: 44,
    h: 24,
    k: 20
  }
};
const Switch = ({
  size = "M",
  checked,
  onChange,
  disabled
}) => {
  const cfg = switchSizes[size];
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: cfg.w,
      height: cfg.h,
      padding: 2,
      border: "none",
      background: checked ? "var(--s-color-brand-primary-default)" : "var(--s-color-neutral-surface-light)",
      borderRadius: 999,
      cursor: disabled ? "not-allowed" : "pointer",
      position: "relative",
      transition: "background 120ms ease",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: cfg.k,
      height: cfg.k,
      background: "var(--s-color-neutral-background-default)",
      borderRadius: "50%",
      transform: `translateX(${checked ? cfg.w - cfg.k - 4 : 0}px)`,
      transition: "transform 160ms cubic-bezier(.4,0,.2,1)",
      boxShadow: "0 1px 3px rgba(0,0,0,0.18)"
    }
  }));
};

/* ─────────── Checkbox / Radio ─────────── */
const Checkbox = ({
  checked,
  onChange,
  label,
  disabled,
  indeterminate
}) => /*#__PURE__*/React.createElement("label", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    cursor: disabled ? "not-allowed" : "pointer",
    color: "var(--s-color-neutral-contents-default)",
    fontSize: "0.875rem"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 18,
    height: 18,
    borderRadius: 4,
    background: checked || indeterminate ? "var(--s-color-brand-primary-default)" : "var(--s-color-neutral-background-default)",
    border: `1.5px solid ${checked || indeterminate ? "var(--s-color-brand-primary-default)" : "var(--s-color-neutral-border-deep)"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 120ms"
  }
}, checked && /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 12,
  color: "white",
  strokeWidth: 3
}), indeterminate && !checked && /*#__PURE__*/React.createElement("span", {
  style: {
    width: 8,
    height: 2,
    background: "white"
  }
})), /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  checked: checked,
  onChange: () => onChange && onChange(!checked),
  disabled: disabled,
  style: {
    display: "none"
  }
}), label);
const Radio = ({
  checked,
  onChange,
  label,
  disabled
}) => /*#__PURE__*/React.createElement("label", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    cursor: disabled ? "not-allowed" : "pointer",
    color: "var(--s-color-neutral-contents-default)",
    fontSize: "0.875rem"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    background: "var(--s-color-neutral-background-default)",
    border: `2px solid ${checked ? "var(--s-color-brand-primary-default)" : "var(--s-color-neutral-border-deep)"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, checked && /*#__PURE__*/React.createElement("span", {
  style: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "var(--s-color-brand-primary-default)"
  }
})), /*#__PURE__*/React.createElement("input", {
  type: "radio",
  checked: checked,
  onChange: onChange,
  disabled: disabled,
  style: {
    display: "none"
  }
}), label);

/* ─────────── Avatar ─────────── */
const avatarSizes = {
  XS: 20,
  S: 24,
  M: 32,
  L: 40,
  XL: 48,
  "2XL": 64
};
const Avatar = ({
  size = "M",
  src,
  name,
  color = "viz-cyan"
}) => {
  const s = avatarSizes[size];
  const initial = name ? name.slice(0, 1).toUpperCase() : "?";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s,
      height: s,
      borderRadius: "50%",
      background: src ? `url(${src}) center/cover` : `var(--s-color-${color})`,
      color: "white",
      fontWeight: 600,
      fontSize: s * 0.4,
      flexShrink: 0
    }
  }, !src && initial);
};

/* ─────────── Tag ─────────── */
const Tag = ({
  children,
  kind = "neutral",
  onClose,
  icon
}) => {
  const palette = badgePalettes[kind] || badgePalettes.neutral;
  const [bg, color] = palette.light;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 8px",
      height: 24,
      background: bg,
      color,
      borderRadius: 6,
      fontSize: "0.8125rem",
      fontWeight: 500,
      lineHeight: 1
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 12,
    color: color
  }), children, onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: 0,
      border: "none",
      background: "transparent",
      color,
      cursor: "pointer",
      marginLeft: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 12,
    color: color,
    strokeWidth: 2
  })));
};

/* ─────────── Card ─────────── */
const Card = ({
  children,
  padding = 24,
  interactive,
  style = {},
  onClick
}) => {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12,
      padding,
      transition: "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
      cursor: interactive ? "pointer" : "default",
      boxShadow: hover ? "var(--s-shadow-card)" : "none",
      transform: hover ? "translateY(-2px)" : "none",
      ...style
    }
  }, children);
};

/* ─────────── Tooltip ─────────── */
const Tooltip = ({
  content,
  children,
  placement = "top"
}) => {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: placement === "top" ? "calc(100% + 6px)" : undefined,
      top: placement === "bottom" ? "calc(100% + 6px)" : undefined,
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--s-color-neutral-background-default-inverse)",
      color: "var(--s-color-neutral-contents-on-brand)",
      padding: "4px 8px",
      borderRadius: 4,
      fontSize: "0.75rem",
      whiteSpace: "nowrap",
      zIndex: 50,
      pointerEvents: "none"
    }
  }, content));
};

/* ─────────── ProgressBar ─────────── */
const ProgressBar = ({
  value = 0,
  max = 100,
  label,
  kind = "primary"
}) => {
  const colorMap = {
    primary: "var(--s-color-brand-primary-default)",
    positive: "var(--s-color-semantic-positive-default)",
    warning: "var(--s-color-semantic-warning-default)",
    negative: "var(--s-color-semantic-negative-default)"
  };
  const pct = Math.min(100, Math.max(0, value / max * 100));
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6,
      fontSize: "0.75rem",
      color: "var(--s-color-neutral-contents-sub)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "var(--s-color-neutral-surface-lightness)",
      borderRadius: 999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: colorMap[kind],
      borderRadius: 999,
      transition: "width 320ms ease"
    }
  })));
};

/* ─────────── Skeleton ─────────── */
const Skeleton = ({
  width = "100%",
  height = 16,
  radius = 4,
  style = {}
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "block",
    width,
    height,
    borderRadius: radius,
    background: "linear-gradient(90deg, var(--s-color-neutral-surface-lightness) 0%, var(--s-color-neutral-surface-light) 50%, var(--s-color-neutral-surface-lightness) 100%)",
    backgroundSize: "200% 100%",
    animation: "miri-shimmer 1.4s ease-in-out infinite",
    ...style
  }
});

/* ─────────── Tabs ─────────── */
const Tabs = ({
  items = [],
  active,
  onChange,
  kind = "underline"
}) => {
  if (kind === "pill") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        padding: 4,
        background: "var(--s-color-neutral-surface-lightness)",
        borderRadius: 8,
        gap: 2
      }
    }, items.map(it => /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onChange(it.id),
      style: {
        padding: "6px 12px",
        border: "none",
        background: active === it.id ? "var(--s-color-neutral-background-default)" : "transparent",
        color: active === it.id ? "var(--s-color-neutral-contents-default)" : "var(--s-color-neutral-contents-sub)",
        borderRadius: 6,
        cursor: "pointer",
        fontSize: "0.8125rem",
        fontWeight: 600,
        boxShadow: active === it.id ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
        transition: "background 120ms"
      }
    }, it.label)));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: "1px solid var(--s-color-neutral-divider-default)",
      gap: 4
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    type: "button",
    onClick: () => onChange(it.id),
    style: {
      padding: "10px 12px",
      border: "none",
      background: "transparent",
      color: active === it.id ? "var(--s-color-neutral-contents-default)" : "var(--s-color-neutral-contents-sub)",
      cursor: "pointer",
      fontSize: "0.875rem",
      fontWeight: 600,
      position: "relative",
      marginBottom: -1,
      borderBottom: `2px solid ${active === it.id ? "var(--s-color-brand-primary-default)" : "transparent"}`,
      transition: "color 120ms, border-color 120ms"
    }
  }, it.label)));
};

/* ─────────── Modal ─────────── */
const Modal = ({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480
}) => {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(15, 17, 22, 0.5)",
      backdropFilter: "blur(2px)",
      animation: "miri-fade 160ms ease"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "calc(100vw - 32px)",
      background: "var(--s-color-neutral-background-elevation02)",
      borderRadius: 12,
      boxShadow: "var(--s-shadow-modal)",
      animation: "miri-rise 200ms ease",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: "20px 24px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "t-title-l",
    style: {
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      padding: 4,
      color: "var(--s-color-neutral-contents-sub)",
      cursor: "pointer",
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 24px 16px",
      color: "var(--s-color-neutral-contents-sub)",
      fontSize: "0.875rem",
      lineHeight: 1.5
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "12px 24px 20px",
      display: "flex",
      gap: 8,
      justifyContent: "flex-end"
    }
  }, footer)));
};

/* ─────────── Banner ─────────── */
const Banner = ({
  kind = "info",
  title,
  children,
  onClose,
  action
}) => {
  const map = {
    info: {
      bg: "var(--s-color-semantic-info-background)",
      color: "var(--s-color-semantic-info-accessible)",
      icon: "info"
    },
    positive: {
      bg: "var(--s-color-semantic-positive-background)",
      color: "var(--s-color-semantic-positive-accessible)",
      icon: "success"
    },
    warning: {
      bg: "var(--s-color-semantic-warning-background)",
      color: "var(--s-color-semantic-warning-accessible)",
      icon: "warning"
    },
    negative: {
      bg: "var(--s-color-semantic-negative-background)",
      color: "var(--s-color-semantic-negative-accessible)",
      icon: "error"
    }
  };
  const cfg = map[kind];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      padding: 16,
      background: cfg.bg,
      borderRadius: 8,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: cfg.icon,
    size: 20,
    color: cfg.color
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: cfg.color,
      fontSize: "0.875rem",
      marginBottom: 2
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--s-color-neutral-contents-sub)",
      fontSize: "0.875rem",
      lineHeight: 1.5
    }
  }, children)), action, onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      color: "var(--s-color-neutral-contents-sub)",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 16
  })));
};

/* ─────────── Slider ─────────── */
const Slider = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1
}) => /*#__PURE__*/React.createElement("input", {
  type: "range",
  min: min,
  max: max,
  step: step,
  value: value,
  onChange: e => onChange && onChange(Number(e.target.value)),
  style: {
    width: "100%",
    height: 4,
    accentColor: "var(--s-color-brand-primary-default)"
  }
});

/* ─────────── Toast (instance) ─────────── */
const Toast = ({
  kind = "info",
  children,
  onClose
}) => {
  const map = {
    info: ["var(--s-color-semantic-info-default)", "info"],
    positive: ["var(--s-color-semantic-positive-default)", "success"],
    warning: ["var(--s-color-semantic-warning-default)", "warning"],
    negative: ["var(--s-color-semantic-negative-default)", "error"]
  };
  const [bg, icon] = map[kind];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 16px",
      background: bg,
      color: "white",
      borderRadius: 8,
      boxShadow: "var(--s-shadow-popover)",
      fontSize: "0.875rem",
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: "white"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      color: "white",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 16
  })));
};

/* expose globals */
Object.assign(window, {
  Icon,
  Button,
  Spinner,
  Badge,
  Input,
  Switch,
  Checkbox,
  Radio,
  Avatar,
  Tag,
  Card,
  Tooltip,
  ProgressBar,
  Skeleton,
  Tabs,
  Modal,
  Banner,
  Slider,
  Toast
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components.jsx", error: String((e && e.message) || e) }); }

// detail-page.jsx
try { (() => {
/* global React */
/* Detail page primitives — Hero, AnatomyDiagram, ExampleGrid, PropsTable, etc.
   Each component detail page composes these. */

const {
  useState
} = React;

/* ─────────── Generic ─────────── */
const Code = ({
  children,
  block
}) => block ? /*#__PURE__*/React.createElement("pre", {
  style: {
    fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
    fontSize: "0.8125rem",
    lineHeight: 1.6,
    padding: "16px 20px",
    background: "var(--s-color-neutral-background-defaultInverse, #16171c)",
    color: "#e9eaf0",
    borderRadius: 8,
    overflow: "auto",
    margin: 0
  }
}, /*#__PURE__*/React.createElement("code", null, children)) : /*#__PURE__*/React.createElement("code", {
  style: {
    fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
    fontSize: "0.8125rem",
    padding: "1px 6px",
    background: "var(--s-color-neutral-surface-lightness)",
    borderRadius: 4,
    color: "var(--s-color-neutral-contents-default)"
  }
}, children);
const SectionTitle = ({
  id,
  eyebrow,
  title,
  desc
}) => /*#__PURE__*/React.createElement("header", {
  id: id,
  style: {
    marginBottom: 20,
    marginTop: 56,
    scrollMarginTop: 24
  }
}, eyebrow && /*#__PURE__*/React.createElement("div", {
  style: {
    color: "var(--s-color-brand-primary-accessible)",
    fontSize: "0.6875rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 6
  }
}, eyebrow), /*#__PURE__*/React.createElement("h2", {
  className: "t-title-xl",
  style: {
    margin: 0,
    marginBottom: desc ? 6 : 0
  }
}, title), desc && /*#__PURE__*/React.createElement("p", {
  className: "t-body-l",
  style: {
    margin: 0,
    color: "var(--s-color-neutral-contents-sub)",
    maxWidth: 720
  }
}, desc));

/* ─────────── Hero ─────────── */
const DetailHero = ({
  name,
  tagline,
  importPath,
  status,
  preview
}) => /*#__PURE__*/React.createElement("header", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 32,
    alignItems: "stretch",
    marginBottom: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 12
  }
}, /*#__PURE__*/React.createElement("h1", {
  className: "t-display-xs",
  style: {
    margin: 0
  }
}, name), status && /*#__PURE__*/React.createElement(Badge, {
  kind: status === "stable" ? "positive" : status === "beta" ? "warning" : "neutral",
  variant: "light"
}, status)), /*#__PURE__*/React.createElement("p", {
  className: "t-body-l",
  style: {
    margin: 0,
    marginBottom: 20,
    color: "var(--s-color-neutral-contents-sub)"
  }
}, tagline), importPath && /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "10px 14px",
    borderRadius: 8,
    background: "var(--s-color-neutral-surface-extra-light)",
    border: "1px solid var(--s-color-neutral-divider-default)",
    fontFamily: "ui-monospace, monospace",
    fontSize: "0.8125rem",
    color: "var(--s-color-neutral-contents-default)",
    display: "flex",
    alignItems: "center",
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "folder",
  size: 14,
  color: "var(--s-color-neutral-contents-additional)"
}), importPath)), /*#__PURE__*/React.createElement("div", {
  style: {
    borderRadius: 16,
    background: "linear-gradient(135deg, var(--s-color-brand-primary-background) 0%, var(--s-color-brand-secondary-background) 100%)",
    border: "1px solid var(--s-color-neutral-divider-default)",
    padding: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 220
  }
}, preview));

/* ─────────── Demo block ─────────── */
const Demo = ({
  title,
  desc,
  children,
  padding = 32,
  background,
  layout = "center"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 16
  }
}, (title || desc) && /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 12
  }
}, title && /*#__PURE__*/React.createElement("div", {
  className: "t-title-s",
  style: {
    marginBottom: desc ? 4 : 0
  }
}, title), desc && /*#__PURE__*/React.createElement("div", {
  className: "t-body-m",
  style: {
    color: "var(--s-color-neutral-contents-sub)"
  }
}, desc)), /*#__PURE__*/React.createElement("div", {
  style: {
    padding,
    background: background || "var(--s-color-neutral-background-default)",
    border: "1px solid var(--s-color-neutral-divider-default)",
    borderRadius: 12,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: layout === "center" ? "center" : "flex-start",
    gap: 12,
    minHeight: 100
  }
}, children));
const ExampleGrid = ({
  children,
  cols = 2
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: 16
  }
}, children);

/* ─────────── Anatomy diagram ─────────── */
/* parts: [{ key, label, description }]  -- numbered annotations
   children: the visual itself, with data-anatomy={key} on annotated parts */
const Anatomy = ({
  children,
  parts
}) => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 24,
      alignItems: "stretch",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      background: "var(--s-color-neutral-background-sunken)",
      borderRadius: 12,
      border: "1px solid var(--s-color-neutral-divider-default)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, children), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      background: "var(--s-color-neutral-background-default)",
      border: "1px solid var(--s-color-neutral-divider-default)",
      borderRadius: 12,
      padding: 20
    }
  }, parts.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: p.key,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "var(--s-color-brand-primary-default)",
      color: "var(--s-color-brand-primary-onContainer)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.75rem",
      fontWeight: 700
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-body-strong-m"
  }, p.label), /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      color: "var(--s-color-neutral-contents-sub)",
      marginTop: 2
    }
  }, p.description))))));
};

/* ─────────── Props table ─────────── */
const PropsTable = ({
  rows
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    border: "1px solid var(--s-color-neutral-divider-default)",
    borderRadius: 12,
    overflow: "hidden",
    background: "var(--s-color-neutral-background-default)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "180px 220px 140px 1fr",
    padding: "12px 20px",
    background: "var(--s-color-neutral-background-sunken)",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "var(--s-color-neutral-contents-sub)",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", null, "Prop"), /*#__PURE__*/React.createElement("div", null, "Type"), /*#__PURE__*/React.createElement("div", null, "Default"), /*#__PURE__*/React.createElement("div", null, "Description")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
  key: r.prop,
  style: {
    display: "grid",
    gridTemplateColumns: "180px 220px 140px 1fr",
    padding: "14px 20px",
    gap: 16,
    alignItems: "start",
    borderTop: "1px solid var(--s-color-neutral-divider-default)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "ui-monospace, monospace",
    fontSize: "0.8125rem",
    color: "var(--s-color-neutral-contents-default)",
    fontWeight: 600
  }
}, r.prop, r.required && /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--s-color-semantic-negative-default)"
  }
}, "*")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "ui-monospace, monospace",
    fontSize: "0.75rem",
    color: "var(--s-color-brand-primary-accessible)"
  }
}, r.type), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "ui-monospace, monospace",
    fontSize: "0.75rem",
    color: "var(--s-color-neutral-contents-sub)"
  }
}, r.default || "—"), /*#__PURE__*/React.createElement("div", {
  className: "t-body-m",
  style: {
    color: "var(--s-color-neutral-contents-sub)"
  }
}, r.description))));

/* ─────────── Do / Don't ─────────── */
const DoDont = ({
  items
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 16
  }
}, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    padding: 20,
    borderRadius: 12,
    border: `1px solid ${it.kind === "do" ? "var(--s-color-semantic-positive-background)" : "var(--s-color-semantic-negative-background)"}`,
    background: "var(--s-color-neutral-background-default)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    background: it.kind === "do" ? "var(--s-color-semantic-positive-default)" : "var(--s-color-semantic-negative-default)",
    color: "white",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.75rem",
    fontWeight: 700
  }
}, it.kind === "do" ? "✓" : "✕"), /*#__PURE__*/React.createElement("span", {
  className: "t-body-strong-m",
  style: {
    color: it.kind === "do" ? "var(--s-color-semantic-positive-accessible)" : "var(--s-color-semantic-negative-accessible)",
    textTransform: "uppercase",
    fontSize: "0.75rem",
    letterSpacing: "0.06em"
  }
}, it.kind === "do" ? "Do" : "Don't")), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 16,
    borderRadius: 8,
    background: "var(--s-color-neutral-background-sunken)",
    marginBottom: 12,
    minHeight: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, it.preview), /*#__PURE__*/React.createElement("div", {
  className: "t-body-m",
  style: {
    color: "var(--s-color-neutral-contents-sub)"
  }
}, it.description))));

/* ─────────── Token reference ─────────── */
const TokenList = ({
  tokens
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    border: "1px solid var(--s-color-neutral-divider-default)",
    borderRadius: 12,
    overflow: "hidden"
  }
}, tokens.map((t, i) => /*#__PURE__*/React.createElement("div", {
  key: t.token,
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 80px",
    padding: "12px 20px",
    gap: 16,
    alignItems: "center",
    borderTop: i ? "1px solid var(--s-color-neutral-divider-default)" : "none",
    background: "var(--s-color-neutral-background-default)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "ui-monospace, monospace",
    fontSize: "0.8125rem",
    color: "var(--s-color-neutral-contents-default)"
  }
}, t.token), /*#__PURE__*/React.createElement("div", {
  className: "t-body-m",
  style: {
    color: "var(--s-color-neutral-contents-sub)"
  }
}, t.purpose), t.swatch && /*#__PURE__*/React.createElement("div", {
  style: {
    width: 32,
    height: 32,
    borderRadius: 6,
    background: t.swatch,
    border: "1px solid var(--s-color-neutral-divider-default)",
    justifySelf: "end"
  }
}))));

/* ─────────── A11y bullets ─────────── */
const A11yList = ({
  items
}) => /*#__PURE__*/React.createElement("ul", {
  style: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "grid",
    gap: 12
  }
}, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  style: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    padding: "12px 16px",
    background: "var(--s-color-neutral-background-default)",
    border: "1px solid var(--s-color-neutral-divider-default)",
    borderRadius: 8
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "check",
  size: 18,
  color: "var(--s-color-semantic-positive-default)",
  style: {
    flexShrink: 0,
    marginTop: 2
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "t-body-m",
  style: {
    color: "var(--s-color-neutral-contents-default)"
  }
}, it))));

/* ─────────── On this page (right rail) ─────────── */
const OnThisPage = ({
  items
}) => /*#__PURE__*/React.createElement("nav", {
  style: {
    position: "sticky",
    top: 24,
    alignSelf: "start",
    padding: "16px 0",
    width: 200
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "t-body-s",
  style: {
    fontWeight: 600,
    color: "var(--s-color-neutral-contents-sub)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    fontSize: "0.6875rem",
    marginBottom: 10
  }
}, "On this page"), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 6,
    borderLeft: "1px solid var(--s-color-neutral-divider-default)"
  }
}, items.map(it => /*#__PURE__*/React.createElement("li", {
  key: it.id
}, /*#__PURE__*/React.createElement("a", {
  href: `#${it.id}`,
  style: {
    padding: "4px 12px",
    marginLeft: -1,
    display: "block",
    textDecoration: "none",
    fontSize: "0.8125rem",
    color: "var(--s-color-neutral-contents-sub)",
    borderLeft: "1px solid transparent"
  }
}, it.label)))));
Object.assign(window, {
  Code,
  SectionTitle,
  DetailHero,
  Demo,
  ExampleGrid,
  Anatomy,
  PropsTable,
  DoDont,
  TokenList,
  A11yList,
  OnThisPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "detail-page.jsx", error: String((e && e.message) || e) }); }

// shell.jsx
try { (() => {
/* global React */
/* Shared app shell — sidebar + theme toggle + page frame.
   Used by both the catalog index and individual component detail pages. */

const {
  useState,
  useEffect
} = React;
const NAV_GROUPS = [{
  title: "Foundations",
  items: [{
    id: "colors",
    label: "Colors",
    href: "foundations/Colors.html",
    icon: "image"
  }, {
    id: "typography",
    label: "Typography",
    href: "foundations/Typography.html",
    icon: "edit"
  }, {
    id: "spacing",
    label: "Spacing & Radius",
    href: "foundations/Spacing.html",
    icon: "settings"
  }, {
    id: "elevation",
    label: "Elevation",
    href: "foundations/Elevation.html",
    icon: "folder"
  }]
}, {
  title: "Components",
  items: [{
    id: "button",
    label: "Button",
    href: "components/Button.html",
    icon: "play"
  }, {
    id: "input",
    label: "Input",
    href: "components/Input.html",
    icon: "edit"
  }, {
    id: "badge",
    label: "Badge",
    href: "components/Badge.html",
    icon: "star"
  }, {
    id: "card",
    label: "Card",
    href: "components/Card.html",
    icon: "folder"
  }, {
    id: "modal",
    label: "Modal",
    href: "components/Modal.html",
    icon: "info"
  }, {
    id: "tabs",
    label: "Tabs",
    href: "components/Tabs.html",
    icon: "menu"
  }, {
    id: "banner",
    label: "Banner",
    href: "components/Banner.html",
    icon: "bell"
  }, {
    id: "switch",
    label: "Switch",
    href: "components/Switch.html",
    icon: "settings"
  }]
}, {
  title: "Patterns",
  items: [{
    id: "patterns",
    label: "All patterns",
    href: "patterns/index.html",
    icon: "ai"
  }]
}];
const HOME_HREF = "Design System Catalog.html";
function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("miri-ds-theme") || "light";
    } catch {
      return "light";
    }
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("miri-ds-theme", theme);
    } catch {}
  }, [theme]);
  return [theme, setTheme];
}
function getActiveId() {
  const path = window.location.pathname;
  const file = decodeURIComponent(path.split("/").pop() || "");
  if (file === "" || file === "Design System Catalog.html" || file === "index.html") return "home";
  for (const g of NAV_GROUPS) {
    for (const it of g.items) {
      if (it.href.endsWith(file)) return it.id;
    }
  }
  return null;
}

/* path prefix helper — pages in subfolders need ../ to reach root */
function rootPrefix() {
  const path = window.location.pathname;
  const segments = path.split("/").filter(Boolean);
  // last segment is the file, preceding segments are directories under project root
  const fileIndex = segments.length - 1;
  const dirsAfterRoot = segments.slice(0, fileIndex).length;
  // We assume HTML files live either at project root (Design System Catalog.html)
  // or one level down (components/X.html, foundations/X.html, patterns/X.html).
  // If running off a single-page-style URL we just check if filename has "/" prefix in segments.
  // Heuristic: if last directory name is one of components/foundations/patterns, prepend ../
  const lastDir = segments[segments.length - 2];
  if (lastDir === "components" || lastDir === "foundations" || lastDir === "patterns") return "../";
  return "";
}
function useIsCompact(threshold = 900) {
  const [compact, setCompact] = useState(() => typeof window !== "undefined" && window.innerWidth < threshold);
  useEffect(() => {
    const onResize = () => setCompact(window.innerWidth < threshold);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [threshold]);
  return compact;
}
const Sidebar = ({
  activeId,
  theme,
  setTheme
}) => {
  const prefix = rootPrefix();
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flexShrink: 0,
      background: "var(--s-color-neutral-background-default)",
      borderRight: "1px solid var(--s-color-neutral-divider-default)",
      padding: "20px 12px 16px",
      display: "flex",
      flexDirection: "column",
      position: "sticky",
      top: 0,
      height: "100vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: prefix + HOME_HREF,
    style: {
      textDecoration: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 12px 16px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "logo",
    size: 28
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-title-s",
    style: {
      lineHeight: 1.2
    }
  }, "Miricanvas"), /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      color: "var(--s-color-neutral-contents-additional)"
    }
  }, "Design System")))), /*#__PURE__*/React.createElement("a", {
    href: prefix + HOME_HREF,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 12px",
      borderRadius: 6,
      background: activeId === "home" ? "var(--s-color-brand-primary-background)" : "transparent",
      color: activeId === "home" ? "var(--s-color-brand-primary-accessible)" : "var(--s-color-neutral-contents-sub)",
      fontSize: "0.875rem",
      fontWeight: activeId === "home" ? 600 : 500,
      textDecoration: "none",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "logo",
    size: 16
  }), " Overview"), NAV_GROUPS.map(group => /*#__PURE__*/React.createElement("div", {
    key: group.title,
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-body-s",
    style: {
      padding: "4px 12px",
      color: "var(--s-color-neutral-contents-additional)",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      fontSize: "0.6875rem"
    }
  }, group.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      marginTop: 4
    }
  }, group.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: prefix + it.href,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "7px 12px",
      borderRadius: 6,
      background: activeId === it.id ? "var(--s-color-brand-primary-background)" : "transparent",
      color: activeId === it.id ? "var(--s-color-brand-primary-accessible)" : "var(--s-color-neutral-contents-default)",
      fontSize: "0.875rem",
      fontWeight: activeId === it.id ? 600 : 500,
      textDecoration: "none",
      transition: "background 120ms"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 15,
    color: "currentColor"
  }), it.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "12px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      justifyContent: "space-between",
      background: "var(--s-color-neutral-surface-extra-light)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--s-color-neutral-contents-sub)",
      fontSize: "0.8125rem"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === "light" ? "sun" : "moon",
    size: 14
  }), theme === "light" ? "Light" : "Dark"), /*#__PURE__*/React.createElement(Switch, {
    size: "S",
    checked: theme === "dark",
    onChange: v => setTheme(v ? "dark" : "light")
  })));
};
const PageBreadcrumb = ({
  trail = []
}) => /*#__PURE__*/React.createElement("nav", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 16
  }
}, trail.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: i
}, i > 0 && /*#__PURE__*/React.createElement(Icon, {
  name: "chevron-right",
  size: 12,
  color: "var(--s-color-neutral-contents-additional)"
}), t.href ? /*#__PURE__*/React.createElement("a", {
  href: t.href,
  className: "t-body-s",
  style: {
    color: "var(--s-color-neutral-contents-additional)",
    textDecoration: "none"
  }
}, t.label) : /*#__PURE__*/React.createElement("span", {
  className: "t-body-s",
  style: {
    color: "var(--s-color-neutral-contents-default)",
    fontWeight: 600
  }
}, t.label))));
const Shell = ({
  activeId,
  breadcrumb,
  children
}) => {
  const [theme, setTheme] = useTheme();
  const compact = useIsCompact(900);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex"
    }
  }, !compact && /*#__PURE__*/React.createElement(Sidebar, {
    activeId: activeId,
    theme: theme,
    setTheme: setTheme
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      padding: compact ? "20px 24px 60px" : "32px 48px 80px",
      maxWidth: 1120,
      width: "100%",
      minWidth: 0
    }
  }, compact && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
      paddingBottom: 12,
      borderBottom: "1px solid var(--s-color-neutral-divider-default)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: rootPrefix() + HOME_HREF,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      textDecoration: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "logo",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-title-s",
    style: {
      fontSize: "0.9375rem"
    }
  }, "Miricanvas DS")), /*#__PURE__*/React.createElement(Switch, {
    size: "S",
    checked: theme === "dark",
    onChange: v => setTheme(v ? "dark" : "light")
  })), breadcrumb && /*#__PURE__*/React.createElement(PageBreadcrumb, {
    trail: breadcrumb
  }), children));
};
Object.assign(window, {
  Shell,
  NAV_GROUPS,
  useTheme,
  rootPrefix
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "shell.jsx", error: String((e && e.message) || e) }); }

// tweaks-panel.jsx
try { (() => {
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  noDeckControls = false,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(() => typeof document !== 'undefined' && !!document.querySelector('deck-stage'), []);
  // Hide the toggle until the host has actually enabled the rail (the
  // __omelette_rail_enabled window message, posted only when the
  // omelette_deck_rail_enabled flag is on for this user). The initial read
  // covers TweaksPanel mounting after the message already arrived; the
  // listener covers the common case of mounting first.
  const [railEnabled, setRailEnabled] = React.useState(() => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled);
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = e => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try {
      return localStorage.getItem('deck-stage.railVisible') !== '0';
    } catch (e) {
      return true;
    }
  });
  const toggleRail = on => {
    setRailVisible(on);
    window.postMessage({
      type: '__deck_rail_visible',
      on
    }, '*');
  };
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children, hasDeckStage && railEnabled && !noDeckControls && /*#__PURE__*/React.createElement(TweakSection, {
    label: "Deck"
  }, /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Thumbnail rail",
    value: railVisible,
    onChange: toggleRail
  })))));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "tweaks-panel.jsx", error: String((e && e.message) || e) }); }

})();
