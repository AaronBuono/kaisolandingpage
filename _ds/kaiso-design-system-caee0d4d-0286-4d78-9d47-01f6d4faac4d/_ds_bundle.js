/* @ds-bundle: {"format":4,"namespace":"KaisoDesignSystem_caee0d","components":[{"name":"ExpertNote","sourcePath":"components/brand/ExpertNote.jsx"},{"name":"KEY_GRAPHICS","sourcePath":"components/brand/KeyGraphic.jsx"},{"name":"KeyGraphic","sourcePath":"components/brand/KeyGraphic.jsx"},{"name":"KOBI_EXPRESSIONS","sourcePath":"components/brand/Kobi.jsx"},{"name":"Kobi","sourcePath":"components/brand/Kobi.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Radio","sourcePath":"components/core/Radio.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ReadinessMeter","sourcePath":"components/feedback/ReadinessMeter.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"}],"sourceHashes":{"components/brand/ExpertNote.jsx":"4a8b534a2a45","components/brand/KeyGraphic.jsx":"a2fbb380e500","components/brand/Kobi.jsx":"6db1026470f7","components/brand/Logo.jsx":"09a3842986d8","components/core/Badge.jsx":"c8691aa8bde1","components/core/Button.jsx":"e2881c4378c1","components/core/Card.jsx":"18a97b9b5bda","components/core/Checkbox.jsx":"72fd7d6771ed","components/core/IconButton.jsx":"96adb5dacf02","components/core/Input.jsx":"8b7023dbf9a4","components/core/Radio.jsx":"2fbe5a8da261","components/core/Select.jsx":"e2deaf78a033","components/core/Switch.jsx":"18367407620f","components/core/Tabs.jsx":"926bcd1e0274","components/core/Tag.jsx":"0416f6b89e6d","components/feedback/Dialog.jsx":"3f6d4abada20","components/feedback/ReadinessMeter.jsx":"7012a3419a42","components/feedback/Toast.jsx":"11e4baaf8c18","components/feedback/Tooltip.jsx":"e1d364480cdd","ui_kits/app/AppShell.jsx":"35760330a479","ui_kits/app/AuditPrep.jsx":"e57993a0915d","ui_kits/app/Dashboard.jsx":"c16831cce3e2","ui_kits/app/Documents.jsx":"d803ca8136df","ui_kits/app/GapAnalysis.jsx":"f29584fe38ff","ui_kits/app/Login.jsx":"2e3da5a8140f","ui_kits/site/Hero.jsx":"a10500ecf12d","ui_kits/site/ReadinessCheck.jsx":"82ae7be78ce8","ui_kits/site/Sections.jsx":"19ad589419b6","ui_kits/site/SiteChrome.jsx":"987e4e9c1fdc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KaisoDesignSystem_caee0d = window.KaisoDesignSystem_caee0d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ExpertNote.jsx
try { (() => {
function ExpertNote({
  children,
  state = 'verified',
  expert,
  when,
  style
}) {
  const S = {
    verified: {
      label: 'Verified by a Kaiso ISO expert',
      bg: 'var(--hivis-100)',
      bar: 'var(--hivis-400)'
    },
    pending: {
      label: 'With a Kaiso expert for review',
      bg: 'var(--ink-50)',
      bar: 'var(--ink-300)'
    },
    drafted: {
      label: 'AI draft — not yet reviewed',
      bg: 'var(--white)',
      bar: 'var(--ink-900)'
    }
  };
  const s = S[state] || S.verified;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      background: s.bg,
      border: '1.5px solid var(--ink-900)',
      clipPath: 'polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 4,
      alignSelf: 'stretch',
      background: s.bar
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--ink-900)'
    }
  }, s.label), children ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-600)'
    }
  }, children) : null, expert || when ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--ink-500)'
    }
  }, [expert, when].filter(Boolean).join(' · ')) : null));
}
Object.assign(__ds_scope, { ExpertNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ExpertNote.jsx", error: String((e && e.message) || e) }); }

// components/brand/KeyGraphic.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KEY_GRAPHICS = ['box', 'bullseye', 'check-mark', 'clock', 'controller', 'conveyor-and-stuff', 'conveyor-belt', 'conveyor-scene', 'documents', 'electrical-outlet', 'forklift', 'gear-1', 'gear-2', 'growth', 'iso-bullseye', 'iso-button', 'iso-documents', 'iso-gears', 'iso-gears-2', 'iso-lightbulb', 'iso-lock', 'lightbulb', 'lock', 'magnifying-glass', 'road-sign', 'rocket', 'task-list', 'toilet-roll', 'traffic-light'];
function KeyGraphic({
  name = 'rocket',
  size = 120,
  basePath = 'assets',
  plate = false,
  alt,
  style,
  ...rest
}) {
  const img = /*#__PURE__*/React.createElement("img", {
    src: basePath + '/illustrations/' + name + '.svg',
    alt: alt || name.replace(/-/g, ' '),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  });
  if (!plate) return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      ...style
    }
  }, rest), img);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      padding: size * 0.14,
      background: 'var(--hivis-400)',
      clipPath: 'polygon(29.3% 0,70.7% 0,100% 29.3%,100% 70.7%,70.7% 100%,29.3% 100%,0 70.7%,0 29.3%)',
      ...style
    }
  }, rest), img);
}
Object.assign(__ds_scope, { KEY_GRAPHICS, KeyGraphic });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/KeyGraphic.jsx", error: String((e && e.message) || e) }); }

// components/brand/Kobi.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KOBI_EXPRESSIONS = ["default", "happy", "wink", "curious", "confused", "questions", "loading", "error", "shock", "surprised", "sad", "sadness", "angry", "asleep", "exhausted", "giggles", "in-love", "in-love-2", "spacing-out", "unimpressed"];
function Kobi({
  expression = 'default',
  size = 64,
  basePath = 'assets',
  title,
  style,
  ...rest
}) {
  const src = basePath + '/kobi/kobi-' + expression + '.svg';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    width: size,
    height: size,
    alt: title || 'Kobi — ' + expression,
    style: {
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { KOBI_EXPRESSIONS, Kobi });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Kobi.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Path data is the supplied KAISO wordmark (Theme=Light, Logo Type=Text.svg), recoloured with currentColor. */
function Logo({
  height = 32,
  color = 'var(--ink-900)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 99 32",
    height: height,
    width: height * 99 / 32,
    role: "img",
    "aria-label": "Kaiso",
    style: {
      color,
      display: 'block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M19.2991 4.96881H15.644L6.19817 15.5376V4.96881H1.21102V27.0092H6.19817V22.8917C6.19817 22.8477 9.90826 18.378 9.90826 18.378L16.0954 27.0092H19.9706V23.8275L13.4422 14.6239L19.3101 8.13945L19.2991 4.96881Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.8349 9.27341H45.1817V22.6826H41.8349V27.0092H53.5046V22.6826H50.2129V9.27341H53.5046V4.97983H41.8349V9.27341Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M34.9101 4.96881H26.7743L21.8532 9.85688V27.0312L27.4679 27.0092V20.7009H34.2826V27.0092H39.8532V9.85688L34.9101 4.96881ZM30.8587 17.0679C28.7009 17.0679 26.9615 15.3174 26.9615 13.1706C26.9615 11.145 28.5138 9.47156 30.4954 9.29542C30.5284 9.29542 30.5615 9.28441 30.5835 9.28441C30.6716 9.2734 30.7706 9.2734 30.8587 9.2734C30.9468 9.2734 31.0459 9.2734 31.134 9.28441C31.167 9.28441 31.2 9.28441 31.222 9.29542C33.2037 9.48257 34.756 11.145 34.756 13.1706C34.767 15.3174 33.0165 17.0679 30.8587 17.0679Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M81.9192 4.96881H91.0679L97.5413 11.4312V20.5688L91.0789 27.0312H81.9303L75.4569 20.5688V11.4312L81.9192 4.96881ZM86.5431 22.1762C83.1853 22.1762 80.466 19.4239 80.466 16.022C80.466 12.6202 83.1853 9.86789 86.5431 9.86789C89.9009 9.86789 92.6202 12.6202 92.6202 16.022C92.6092 19.4239 89.8899 22.1762 86.5431 22.1762Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M73.4862 13.4789V9.8789L68.5762 4.96881H60.4294L55.4752 9.8789V14.9541L57.9083 15.9119L68.0257 19.9413C67.6514 21.5376 66.2312 22.7156 64.5248 22.7156C62.5321 22.7156 60.9248 21.0973 60.9248 19.1156C60.9248 19.0936 60.9248 18.5211 60.9248 18.5211H55.4862V22.1101L60.3523 27.0202H68.4991L73.5083 22.0991V17.0459L61.0018 12.0917C61.3651 10.4954 62.7963 9.29542 64.5138 9.29542C66.5064 9.29542 68.1138 10.9138 68.1138 12.8954V13.4789H73.4862Z",
    fill: "currentColor"
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  pass: {
    background: 'var(--status-pass-bg)',
    color: 'var(--status-pass-fg)',
    dot: 'var(--status-pass-dot)'
  },
  attention: {
    background: 'var(--status-attention-bg)',
    color: 'var(--status-attention-fg)',
    dot: 'var(--status-attention-dot)'
  },
  gap: {
    background: 'var(--status-gap-bg)',
    color: 'var(--status-gap-fg)',
    dot: 'var(--status-gap-dot)'
  },
  info: {
    background: 'var(--status-info-bg)',
    color: 'var(--status-info-fg)',
    dot: 'var(--status-info-dot)'
  },
  verified: {
    background: 'var(--status-verified-bg)',
    color: 'var(--status-verified-fg)',
    dot: 'var(--ink-900)'
  },
  neutral: {
    background: 'var(--ink-100)',
    color: 'var(--ink-700)',
    dot: 'var(--ink-400)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  dot = true,
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 9px',
      background: t.background,
      color: t.color,
      font: 'var(--type-label)',
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: t.dot
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CH = 'polygon(7px 0,100% 0,100% calc(100% - 7px),calc(100% - 7px) 100%,0 100%,0 7px)';
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 12px',
    fontSize: 'var(--text-xs)'
  },
  md: {
    height: 'var(--control-h-md)',
    padding: '0 18px',
    fontSize: 'var(--text-sm)'
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 24px',
    fontSize: 'var(--text-md)'
  }
};
const VARIANTS = {
  primary: {
    rest: {
      background: 'var(--ink-900)',
      color: 'var(--white)',
      border: '1.5px solid var(--ink-900)'
    },
    hover: {
      background: 'var(--hivis-400)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--ink-900)'
    }
  },
  accent: {
    rest: {
      background: 'var(--hivis-400)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--ink-900)',
      boxShadow: 'var(--shadow-hard-sm)'
    },
    hover: {
      background: 'var(--hivis-500)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--ink-900)',
      boxShadow: 'var(--shadow-hard-sm)'
    }
  },
  secondary: {
    rest: {
      background: 'var(--white)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--ink-900)'
    },
    hover: {
      background: 'var(--ink-50)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--ink-900)'
    }
  },
  quiet: {
    rest: {
      background: 'transparent',
      color: 'var(--ink-700)',
      border: '1.5px solid var(--ink-200)'
    },
    hover: {
      background: 'var(--ink-50)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--ink-300)'
    }
  },
  ghost: {
    rest: {
      background: 'transparent',
      color: 'var(--ink-700)',
      border: '1.5px solid transparent'
    },
    hover: {
      background: 'var(--ink-100)',
      color: 'var(--ink-900)',
      border: '1.5px solid transparent'
    }
  },
  danger: {
    rest: {
      background: 'var(--red-500)',
      color: 'var(--white)',
      border: '1.5px solid var(--red-500)'
    },
    hover: {
      background: 'var(--red-700)',
      color: 'var(--white)',
      border: '1.5px solid var(--red-700)'
    }
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconRight,
  disabled = false,
  full = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: '-0.005em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    clipPath: CH,
    width: full ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    transition: 'background-color var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),transform var(--dur-instant) var(--ease-standard)',
    transform: down && !disabled ? 'translate(1px,1px)' : 'none',
    opacity: disabled ? 0.4 : 1,
    ...SIZES[size],
    ...(hover && !disabled ? v.hover : v.rest),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false)
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      width: 16,
      height: 16
    }
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      width: 16,
      height: 16
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  title,
  eyebrow,
  action,
  tone = 'default',
  chamfer = true,
  hoverable = false,
  padding = '20px',
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const TONES = {
    default: {
      background: 'var(--white)',
      border: '1.5px solid var(--ink-200)'
    },
    sunken: {
      background: 'var(--ink-50)',
      border: '1.5px solid var(--ink-100)'
    },
    ink: {
      background: 'var(--ink-900)',
      border: '1.5px solid var(--ink-900)',
      color: 'var(--white)'
    },
    accent: {
      background: 'var(--hivis-100)',
      border: '1.5px solid var(--ink-900)'
    },
    outline: {
      background: 'var(--white)',
      border: '1.5px solid var(--ink-900)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: title || eyebrow ? 12 : 0,
      padding,
      borderRadius: 'var(--radius-xs)',
      clipPath: chamfer ? 'polygon(14px 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%,0 14px)' : 'none',
      boxShadow: hoverable && hover ? 'var(--shadow-hard-sm)' : 'none',
      transform: hoverable && hover ? 'translate(-1px,-1px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard)',
      cursor: onClick ? 'pointer' : 'default',
      ...TONES[tone],
      ...style
    }
  }, rest), eyebrow || title || action ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      padding: padding === '0' || padding === 0 ? '16px 18px 0' : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: tone === 'ink' ? 'var(--hivis-400)' : 'var(--ink-500)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      color: tone === 'ink' ? 'var(--white)' : 'var(--ink-900)'
    }
  }, title) : null), action) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flex: '0 0 auto',
      width: 18,
      height: 18,
      marginTop: 1,
      background: checked ? 'var(--ink-900)' : 'var(--white)',
      border: '1.5px solid var(--ink-900)',
      borderRadius: 'var(--radius-xs)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }), checked ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 9,
      height: 5,
      borderLeft: '2px solid var(--hivis-400)',
      borderBottom: '2px solid var(--hivis-400)',
      transform: 'rotate(-45deg) translateY(-1px)'
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-900)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  children,
  label,
  size = 'md',
  variant = 'quiet',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  const V = {
    quiet: {
      background: hover ? 'var(--ink-100)' : 'transparent',
      color: 'var(--ink-700)',
      border: '1.5px solid transparent'
    },
    outline: {
      background: hover ? 'var(--ink-50)' : 'var(--white)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--ink-900)'
    },
    solid: {
      background: hover ? 'var(--hivis-400)' : 'var(--ink-900)',
      color: hover ? 'var(--ink-900)' : 'var(--white)',
      border: '1.5px solid var(--ink-900)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      clipPath: 'polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px)',
      transition: 'background-color var(--dur-fast) var(--ease-standard)',
      ...V[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = 'text',
  prefix,
  suffix,
  disabled = false,
  multiline = false,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useMemo(() => 'in-' + Math.random().toString(36).slice(2, 7), []);
  const border = error ? 'var(--red-500)' : focus ? 'var(--ink-900)' : 'var(--ink-200)';
  const field = {
    flex: 1,
    minWidth: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    font: 'var(--type-body-sm)',
    color: 'var(--ink-900)',
    padding: 0,
    resize: 'vertical'
  };
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-label)',
      color: 'var(--ink-700)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center',
      gap: 8,
      minHeight: multiline ? 'auto' : 'var(--control-h-md)',
      padding: multiline ? '10px 12px' : '0 12px',
      background: disabled ? 'var(--ink-50)' : 'var(--white)',
      border: '1.5px solid ' + border,
      borderRadius: 'var(--radius-xs)',
      boxShadow: focus ? 'inset 0 0 0 1px var(--ink-900)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard)'
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--ink-400)'
    }
  }, prefix) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    id: inputId,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--ink-400)',
      font: 'var(--type-mono)'
    }
  }, suffix) : null), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--red-700)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    const on = value === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        width: 18,
        height: 18,
        borderRadius: 'var(--radius-pill)',
        border: '1.5px solid var(--ink-900)',
        background: 'var(--white)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: on,
      value: val,
      onChange: onChange,
      disabled: disabled,
      style: {
        position: 'absolute',
        inset: 0,
        opacity: 0,
        margin: 0,
        cursor: 'inherit'
      }
    }), on ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--ink-900)'
      }
    }) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--ink-900)'
      }
    }, lab));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Radio.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  onChange,
  hint,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || React.useMemo(() => 'sel-' + Math.random().toString(36).slice(2, 7), []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      font: 'var(--type-label)',
      color: 'var(--ink-700)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 34px 0 12px',
      appearance: 'none',
      background: disabled ? 'var(--ink-50)' : 'var(--white)',
      border: '1.5px solid ' + (focus ? 'var(--ink-900)' : 'var(--ink-200)'),
      borderRadius: 'var(--radius-xs)',
      font: 'var(--type-body-sm)',
      color: 'var(--ink-900)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-60%) rotate(45deg)',
      width: 7,
      height: 7,
      borderRight: '1.5px solid var(--ink-700)',
      borderBottom: '1.5px solid var(--ink-700)',
      pointerEvents: 'none'
    }
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      gap: 10,
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 40,
      height: 22,
      background: checked ? 'var(--ink-900)' : 'var(--ink-200)',
      border: '1.5px solid ' + (checked ? 'var(--ink-900)' : 'var(--ink-300)'),
      borderRadius: 'var(--radius-pill)',
      transition: 'background-color var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 14,
      height: 14,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--hivis-400)' : 'var(--white)',
      transition: 'left var(--dur-fast) var(--ease-standard)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-900)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1.5px solid var(--ink-200)',
      ...style
    }
  }, tabs.map(t => {
    const val = typeof t === 'string' ? t : t.value;
    const lab = typeof t === 'string' ? t : t.label;
    const count = typeof t === 'object' ? t.count : undefined;
    const on = value === val;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(val),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '10px 14px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        font: 'var(--type-label)',
        fontSize: 'var(--text-sm)',
        color: on ? 'var(--ink-900)' : 'var(--ink-500)',
        borderBottom: '3px solid ' + (on ? 'var(--ink-900)' : 'transparent'),
        marginBottom: -1.5,
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, lab, count !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-mono)',
        color: on ? 'var(--ink-500)' : 'var(--ink-400)'
      }
    }, count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  mono = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 8px',
      border: '1.5px solid var(--ink-200)',
      background: 'var(--white)',
      color: 'var(--ink-700)',
      font: mono ? 'var(--type-mono)' : 'var(--type-label)',
      borderRadius: 'var(--radius-xs)',
      ...style
    }
  }, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--ink-500)',
      padding: 0,
      lineHeight: 1,
      fontSize: 14
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 520,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'var(--scrim)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--white)',
      border: '1.5px solid var(--ink-900)',
      boxShadow: 'var(--shadow-hard-lg)',
      clipPath: 'polygon(18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%,0 18px)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-500)'
    }
  }, description) : null), children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      paddingTop: 4
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ReadinessMeter.jsx
try { (() => {
function ReadinessMeter({
  value = 0,
  label = 'Readiness',
  segments = 20,
  caption,
  size = 'md',
  style
}) {
  const pct = Math.max(0, Math.min(100, value));
  const filled = Math.round(segments * pct / 100);
  const tone = pct >= 85 ? 'var(--green-500)' : pct >= 55 ? 'var(--hivis-400)' : 'var(--amber-500)';
  const h = size === 'sm' ? 10 : size === 'lg' ? 22 : 16;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--ink-700)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      fontSize: size === 'lg' ? 'var(--text-2xl)' : 'var(--text-xl)',
      color: 'var(--ink-900)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3
    }
  }, Array.from({
    length: segments
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: h,
      background: i < filled ? tone : 'var(--ink-100)',
      border: '1px solid ' + (i < filled ? 'var(--ink-900)' : 'var(--ink-200)')
    }
  }))), caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { ReadinessMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ReadinessMeter.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'info',
  title,
  children,
  onDismiss,
  style
}) {
  const BAR = {
    info: 'var(--teal-500)',
    pass: 'var(--green-500)',
    attention: 'var(--amber-500)',
    gap: 'var(--red-500)',
    verified: 'var(--hivis-400)'
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      minWidth: 300,
      maxWidth: 420,
      padding: '14px 16px',
      background: 'var(--ink-900)',
      color: 'var(--white)',
      boxShadow: 'var(--shadow-soft-md)',
      clipPath: 'polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 4,
      alignSelf: 'stretch',
      background: BAR[tone]
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--text-sm)',
      color: 'var(--white)'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-300)'
    }
  }, children) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      marginLeft: 'auto',
      border: 'none',
      background: 'transparent',
      color: 'var(--ink-300)',
      cursor: 'pointer',
      fontSize: 16,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  side = 'top',
  style
}) {
  const [on, setOn] = React.useState(false);
  const pos = side === 'top' ? {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : side === 'bottom' ? {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : side === 'left' ? {
    right: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : {
    left: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    onFocus: () => setOn(true),
    onBlur: () => setOn(false)
  }, children, on ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 40,
      ...pos,
      padding: '6px 9px',
      background: 'var(--ink-900)',
      color: 'var(--white)',
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-2xs)',
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-xs)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
const NAV = [['dashboard', 'layout-dashboard', 'Dashboard'], ['documents', 'file-text', 'Documents'], ['gaps', 'search', 'Gap analysis'], ['audit', 'calendar-check', 'Audit prep'], ['evidence', 'paperclip', 'Evidence'], ['settings', 'settings', 'Settings']];
function AppShell({
  view,
  setView,
  title,
  crumb,
  children
}) {
  const {
    Logo,
    Kobi,
    Badge
  } = window.KaisoDesignSystem_caee0d;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--ink-50)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-w)',
      flex: '0 0 var(--sidebar-w)',
      background: 'var(--ink-900)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 16px',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 6px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 26,
    color: "var(--white)"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, NAV.map(([k, ic, label]) => {
    const on = view === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setView(k),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 10px',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'var(--type-label)',
        fontSize: 'var(--text-sm)',
        color: on ? 'var(--ink-900)' : 'var(--ink-300)',
        background: on ? 'var(--hivis-400)' : 'transparent',
        clipPath: on ? 'polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": ic,
      style: {
        width: 16,
        height: 16
      }
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      border: '1.5px solid var(--ink-700)',
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Kobi, {
    expression: "happy",
    size: 32,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--white)'
    }
  }, "Ridgeline Fabrication"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--ink-400)'
    }
  }, "3 standards \xB7 41 staff"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--topbar-h)',
      flex: '0 0 var(--topbar-h)',
      background: 'var(--white)',
      borderBottom: '1.5px solid var(--ink-200)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, crumb ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--ink-400)'
    }
  }, crumb) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      fontSize: 'var(--text-lg)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 12px',
      border: '1.5px solid var(--ink-200)',
      minWidth: 230,
      color: 'var(--ink-400)',
      font: 'var(--type-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 14,
      height: 14
    }
  }), "Search clauses, documents\u2026"), /*#__PURE__*/React.createElement(Badge, {
    tone: "attention"
  }, "Surveillance audit in 46 days"))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, children)));
}
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AuditPrep.jsx
try { (() => {
function AuditPrep() {
  const {
    Card,
    Badge,
    Button,
    Checkbox,
    ExpertNote,
    KeyGraphic,
    Tag
  } = window.KaisoDesignSystem_caee0d;
  const [done, setDone] = React.useState([true, true, false, false, false]);
  const steps = [['Confirm your scope and sites', 'Two sites, 41 staff', 'pass'], ['Collect evidence for 64 clauses', '58 of 64 attached', 'attention'], ['Close the two open corrective actions', 'Owner: Dana Whitmore', 'attention'], ['Book your surveillance audit', 'JAS-ANZ accredited body', 'neutral'], ['Walk your team through the manual', '30-minute briefing pack', 'neutral']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Surveillance audit \u2014 29 September 2026",
    eyebrow: "46 days out",
    padding: "20px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, steps.map(([label, meta, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      paddingBottom: 14,
      borderBottom: i < steps.length - 1 ? '1.5px solid var(--ink-100)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: done[i],
    onChange: () => setDone(d => d.map((v, j) => j === i ? !v : v)),
    label: label,
    description: meta
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    style: {
      marginLeft: 'auto'
    }
  }, tone === 'pass' ? 'Done' : tone === 'attention' ? 'In progress' : 'Not started')))), /*#__PURE__*/React.createElement(Button, {
    style: {
      alignSelf: 'flex-start'
    }
  }, "Generate the auditor pack")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "20px",
    style: {
      alignItems: 'center',
      textAlign: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(KeyGraphic, {
    name: "clock",
    size: 104,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)'
    }
  }, "You're 12 days ahead of last year"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-500)'
    }
  }, "Last year's pack took three weeks of evenings. This one has been building itself since January.")), /*#__PURE__*/React.createElement(Card, {
    title: "Who's reviewing",
    padding: "20px"
  }, /*#__PURE__*/React.createElement(ExpertNote, {
    state: "verified",
    expert: "Sam Okafor, Lead Auditor",
    when: "14 Aug 2026"
  }, "Signed off 22 of your 38 documents this quarter."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "ISO 9001"), /*#__PURE__*/React.createElement(Tag, null, "ISO 14001"), /*#__PURE__*/React.createElement(Tag, null, "ISO 45001"), /*#__PURE__*/React.createElement(Tag, {
    mono: true
  }, "JAS-ANZ"))))));
}
Object.assign(window, {
  AuditPrep
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AuditPrep.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Dashboard.jsx
try { (() => {
function Dashboard({
  onOpenDoc
}) {
  const {
    Card,
    Badge,
    Button,
    ReadinessMeter,
    KeyGraphic,
    ExpertNote,
    Tag
  } = window.KaisoDesignSystem_caee0d;
  const actions = [['Upload your calibration records', 'ISO 9001 · Clause 7.1.5', 'gap', 'Due 12 Sep'], ['Approve the AI-drafted induction procedure', 'ISO 45001 · Clause 7.2', 'attention', 'Waiting on you'], ['Record the July toolbox talk', 'ISO 45001 · Clause 7.4', 'attention', 'Due 30 Aug'], ['Close out the internal audit finding', 'ISO 9001 · Clause 9.2', 'pass', 'Verified 12 Aug']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, [['ISO 9001', 'Quality', 86, 'Two clauses need evidence before your surveillance audit.'], ['ISO 14001', 'Environment', 72, 'Waste records for the Dandenong site are missing.'], ['ISO 45001', 'Safety', 54, 'Nine gaps found. Three are quick document fixes.']].map(([std, name, val, cap]) => /*#__PURE__*/React.createElement(Card, {
    key: std,
    eyebrow: name,
    title: std,
    padding: "18px"
  }, /*#__PURE__*/React.createElement(ReadinessMeter, {
    value: val,
    label: "Readiness",
    segments: 12,
    caption: cap
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "What needs you this week",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "quiet",
      size: "sm"
    }, "View all 14"),
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, actions.map(([label, meta, tone, due], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: onOpenDoc,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 18px',
      borderTop: i ? '1.5px solid var(--ink-100)' : 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    dot: true
  }, due), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-900)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--ink-400)'
    }
  }, meta)), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 16,
      height: 16,
      marginLeft: 'auto',
      color: 'var(--ink-400)'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    padding: "18px",
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(KeyGraphic, {
    name: "magnifying-glass",
    size: 78,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      fontSize: 'var(--text-md)'
    }
  }, "Run a gap check on your safety system"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-600)'
    }
  }, "Takes about two minutes. An expert reviews anything it drafts."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Start gap check"))), /*#__PURE__*/React.createElement(Card, {
    title: "Activity log",
    padding: "18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ExpertNote, {
    state: "verified",
    expert: "Sam Okafor, Lead Auditor",
    when: "14 Aug, 9:42am AEST"
  }, "Approved your document control procedure."), /*#__PURE__*/React.createElement(ExpertNote, {
    state: "pending",
    when: "14 Aug, 8:15am AEST"
  }, "Induction procedure, drafted from your site rules."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    mono: true
  }, "DOC-QMS-014"), /*#__PURE__*/React.createElement(Tag, {
    mono: true
  }, "Clause 7.5.3"), /*#__PURE__*/React.createElement(Tag, {
    mono: true
  }, "rev 3")))))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Documents.jsx
try { (() => {
function Documents() {
  const {
    Card,
    Badge,
    Button,
    Tabs,
    Tag,
    ExpertNote,
    Input,
    Dialog,
    Toast,
    IconButton
  } = window.KaisoDesignSystem_caee0d;
  const [tab, setTab] = React.useState('all');
  const [sel, setSel] = React.useState(1);
  const [dialog, setDialog] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const docs = [['Quality manual', 'DOC-QMS-001', 'verified', 'Expert verified', 'rev 4 · 2 Aug 2026'], ['Site induction procedure', 'DOC-WHS-014', 'attention', 'With an expert', 'rev 1 · 14 Aug 2026'], ['Document control procedure', 'DOC-QMS-014', 'verified', 'Expert verified', 'rev 3 · 12 Aug 2026'], ['Waste management plan', 'DOC-ENV-006', 'gap', 'AI draft', 'rev 0 · 14 Aug 2026'], ['Internal audit schedule', 'DOC-QMS-022', 'verified', 'Expert verified', 'rev 2 · 28 Jul 2026'], ['Emergency response plan', 'DOC-WHS-003', 'attention', 'Review due', 'rev 2 · 3 Feb 2026']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: 'all',
      label: 'All documents',
      count: 38
    }, {
      value: 'mine',
      label: 'Needs you',
      count: 4
    }, {
      value: 'drafts',
      label: 'AI drafts',
      count: 3
    }, {
      value: 'archive',
      label: 'Superseded'
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, docs.map(([name, id, tone, label, meta], i) => /*#__PURE__*/React.createElement("div", {
    key: id,
    onClick: () => setSel(i),
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: '13px 16px',
      borderTop: i ? '1.5px solid var(--ink-100)' : 'none',
      background: sel === i ? 'var(--ink-50)' : 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "file-text",
    style: {
      width: 16,
      height: 16,
      color: 'var(--ink-500)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-900)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--ink-400)'
    }
  }, id, " \xB7 ", meta)), /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    style: {
      marginLeft: 'auto'
    }
  }, label))))), /*#__PURE__*/React.createElement(Card, {
    padding: "20px",
    title: docs[sel][0],
    eyebrow: docs[sel][1],
    action: /*#__PURE__*/React.createElement(IconButton, {
      label: "Download"
    }, "\u2193")
  }, /*#__PURE__*/React.createElement(ExpertNote, {
    state: docs[sel][2] === 'verified' ? 'verified' : docs[sel][2] === 'gap' ? 'drafted' : 'pending',
    expert: docs[sel][2] === 'verified' ? 'Sam Okafor, Lead Auditor' : undefined,
    when: docs[sel][2] === 'verified' ? '12 Aug 2026, 4:05pm AEST' : undefined
  }, docs[sel][2] === 'verified' ? 'Meets clause 7.5 for document control.' : 'A Kaiso expert reviews this before it counts as evidence.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    mono: true
  }, "Clause 7.5.3"), /*#__PURE__*/React.createElement(Tag, {
    mono: true
  }, docs[sel][1]), /*#__PURE__*/React.createElement(Tag, null, "Warehouse")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-700)',
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--type-label)',
      display: 'block',
      marginBottom: 6
    }
  }, "1. Purpose"), "This procedure sets out how Ridgeline Fabrication controls documented information \u2014 who approves it, where it lives, and how staff know they are reading the current version.", /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--type-label)',
      display: 'block',
      margin: '12px 0 6px'
    }
  }, "2. Scope"), "Applies to the Dandenong workshop and the Laverton store, and to all documents required by ISO 9001, ISO 14001 and ISO 45001."), /*#__PURE__*/React.createElement(Input, {
    label: "Ask Kaiso to change something",
    placeholder: "e.g. add our Laverton store to the scope"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => setDialog(true)
  }, "Send for expert review"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "Save draft")))), /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    title: "Send this draft for expert review?",
    description: "A Kaiso ISO expert checks it before it lands in your manual \u2014 usually within one business day.",
    onClose: () => setDialog(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDialog(false)
    }, "Not yet"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setDialog(false);
        setToast(true);
        setTimeout(() => setToast(false), 3500);
      }
    }, "Send for review"))
  }), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 24,
      bottom: 24,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "pass",
    title: "Sent to Sam Okafor",
    onDismiss: () => setToast(false)
  }, "You'll get an email when it's verified.")) : null);
}
Object.assign(window, {
  Documents
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Documents.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/GapAnalysis.jsx
try { (() => {
function GapAnalysis() {
  const {
    Card,
    Badge,
    Button,
    Tag,
    ReadinessMeter,
    KeyGraphic,
    Select
  } = window.KaisoDesignSystem_caee0d;
  const rows = [['4.1', 'Understanding the organisation and its context', 'pass', 'Verified', 'Context register, Jul 2026'], ['6.1.2', 'Hazard identification and risk assessment', 'gap', 'Gap found', 'No risk register for the Laverton store'], ['7.1.5', 'Monitoring and measuring resources', 'gap', 'Gap found', 'Calibration records missing since Mar 2026'], ['7.2', 'Competence', 'attention', 'Draft ready', 'AI drafted an induction procedure'], ['7.4', 'Communication', 'attention', 'Evidence due', 'Toolbox talk minutes for July'], ['8.1', 'Operational planning and control', 'pass', 'Verified', 'Job cards and inspection sheets'], ['9.2', 'Internal audit', 'pass', 'Verified', 'Audit closed out 12 Aug 2026'], ['10.2', 'Non-conformance and corrective action', 'attention', 'Evidence due', 'Two actions still open']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "outline",
    padding: "20px",
    style: {
      gap: 16,
      boxShadow: 'var(--shadow-hard-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(KeyGraphic, {
    name: "traffic-light",
    size: 72,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)'
    }
  }, "ISO 45001 gap check"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--ink-500)'
    }
  }, "Run 14 Aug 2026 \xB7 64 clauses checked"))), /*#__PURE__*/React.createElement(ReadinessMeter, {
    value: 54,
    label: "Readiness",
    segments: 16,
    caption: "Nine gaps. Three are document fixes Kaiso can draft today."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm"
  }, "Draft the three documents"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Export for auditor"))), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      padding: '12px 16px',
      borderBottom: '1.5px solid var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['All clauses', 'Gaps only', 'Evidence due'],
    style: {
      minWidth: 150
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Dandenong"), /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Laverton"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, rows.map(([cl, name, tone, label, note], i) => /*#__PURE__*/React.createElement("div", {
    key: cl,
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1fr 120px',
      gap: 12,
      alignItems: 'center',
      padding: '12px 16px',
      borderTop: i ? '1.5px solid var(--ink-100)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--ink-600)'
    }
  }, cl), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-900)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)'
    }
  }, note)), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, label)))))));
}
Object.assign(window, {
  GapAnalysis
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/GapAnalysis.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Login.jsx
try { (() => {
function Login({
  onEnter
}) {
  const {
    Card,
    Button,
    Input,
    Logo,
    Kobi
  } = window.KaisoDesignSystem_caee0d;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      background: 'var(--ink-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-900)',
      padding: 48,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 28,
    color: "var(--white)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h1)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--white)',
      letterSpacing: 'var(--tracking-tightest)'
    }
  }, "Stay audit-ready year-round \u2014 without the annual scramble."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--ink-300)'
    }
  }, "Your evidence, due dates and audit records in one place. AI does the heavy lifting; Kaiso's ISO experts verify the work.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Kobi, {
    expression: "wink",
    size: 40,
    basePath: "../../assets",
    style: {
      filter: 'invert(1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--ink-400)'
    }
  }, "ISO 9001 \xB7 14001 \xB7 45001"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 48
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "28px",
    style: {
      width: '100%',
      maxWidth: 400,
      gap: 16,
      border: '1.5px solid var(--ink-900)',
      boxShadow: 'var(--shadow-hard-md)'
    },
    title: "Sign in"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "you@ridgeline.com.au"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    full: true,
    onClick: onEnter
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)'
    }
  }, "No account yet? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onEnter();
    }
  }, "Check your readiness first"), " \u2014 it takes two minutes."))));
}
Object.assign(window, {
  Login
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Hero.jsx
try { (() => {
function Hero({
  onCheck
}) {
  const {
    Button,
    KeyGraphic,
    Badge,
    Kobi
  } = window.KaisoDesignSystem_caee0d;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1.5px solid var(--ink-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 24px 64px',
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-eyebrow"
  }, "ISO 9001 \xB7 ISO 14001 \xB7 ISO 45001"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display)',
      fontSize: 'var(--text-5xl)',
      letterSpacing: 'var(--tracking-tightest)'
    }
  }, "The faster, more affordable path to the certification your tenders demand."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-lg)',
      color: 'var(--ink-600)',
      maxWidth: '52ch'
    }
  }, "Kaiso drafts your documents, finds your gaps and preps your audit. Kaiso's own ISO experts verify every change before it lands \u2014 so what you show an auditor holds up."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onCheck
  }, "Check your readiness"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "See how it works")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "verified"
  }, "Every change expert-verified"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--ink-500)'
    }
  }, "Two minutes \xB7 no credit card"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(KeyGraphic, {
    name: "iso-gears",
    size: 380,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement(Kobi, {
    expression: "wink",
    size: 72,
    basePath: "../../assets",
    style: {
      position: 'absolute',
      right: 0,
      bottom: 8
    }
  }))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ReadinessCheck.jsx
try { (() => {
function ReadinessCheck({
  onClose
}) {
  const {
    Card,
    Button,
    Radio,
    ReadinessMeter,
    Kobi,
    Badge,
    ExpertNote,
    Tag
  } = window.KaisoDesignSystem_caee0d;
  const [step, setStep] = React.useState(0);
  const QS = [['What are you certifying?', ['One site, one standard', 'Multiple sites, one standard', 'Multiple standards']], ['Do you have documented procedures today?', ['Nothing written down', 'Some documents, out of date', 'A full manual we maintain']], ['Why now?', ['A tender asks for it', 'A client asked for it', 'A surveillance audit is coming']]];
  const [ans, setAns] = React.useState(['', '', '']);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 70,
      background: 'var(--scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "28px",
    style: {
      gap: 18,
      border: '1.5px solid var(--ink-900)',
      boxShadow: 'var(--shadow-hard-lg)'
    }
  }, step < QS.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Kobi, {
    expression: "questions",
    size: 44,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-eyebrow"
  }, "Readiness check \xB7 question ", step + 1, " of 3"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)'
    }
  }, QS[step][0]))), /*#__PURE__*/React.createElement(Radio, {
    name: 'q' + step,
    value: ans[step],
    options: QS[step][1],
    onChange: e => setAns(a => a.map((v, i) => i === step ? e.target.value : v))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setStep(step + 1)
  }, step === QS.length - 1 ? 'See my readiness' : 'Next'), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Close"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Kobi, {
    expression: "happy",
    size: 44,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "k-eyebrow"
  }, "Your result"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)'
    }
  }, "You're closer than most first-timers."))), /*#__PURE__*/React.createElement(ReadinessMeter, {
    value: 38,
    label: "ISO 9001 readiness",
    size: "lg",
    caption: "Nine of 24 required documents already exist in some form. Kaiso drafts the rest; an expert verifies each one."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "pass"
  }, "Scope is clear"), /*#__PURE__*/React.createElement(Badge, {
    tone: "attention"
  }, "Records need a home"), /*#__PURE__*/React.createElement(Badge, {
    tone: "gap"
  }, "No internal audit process")), /*#__PURE__*/React.createElement(ExpertNote, {
    state: "drafted"
  }, "That took two minutes. Imagine your whole compliance system working like this."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Email me this result"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Back to the site")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    mono: true
  }, "ISO 9001"), /*#__PURE__*/React.createElement(Tag, {
    mono: true
  }, "24 documents"))))));
}
Object.assign(window, {
  ReadinessCheck
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ReadinessCheck.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Sections.jsx
try { (() => {
function HowItWorks() {
  const {
    KeyGraphic
  } = window.KaisoDesignSystem_caee0d;
  const steps = [['magnifying-glass', '1. Tell Kaiso how you work', 'Answer plain-English questions about your sites, staff and jobs. No clause numbers required.'], ['iso-documents', '2. AI drafts your system', 'Manual, procedures, registers and records — written from your answers, not a generic template.'], ['check-mark', '3. An ISO expert verifies it', 'A Kaiso auditor reviews every document before it lands. You get their name and the date.'], ['clock', '4. Stay ready year-round', 'Reminders, evidence collection and an activity log your auditor can follow.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-50)',
      borderBottom: '1.5px solid var(--ink-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      maxWidth: '26ch',
      marginBottom: 32
    }
  }, "Four steps, and the last one never stops."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, steps.map(([g, h, b]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      background: 'var(--white)',
      border: '1.5px solid var(--ink-200)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      clipPath: 'polygon(14px 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%,0 14px)'
    }
  }, /*#__PURE__*/React.createElement(KeyGraphic, {
    name: g,
    size: 84,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      fontSize: 'var(--text-md)'
    }
  }, h), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-600)'
    }
  }, b))))));
}
function ProofStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 24px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, [['$25K', 'typical cost of consultant-led certification'], ['$1,800', 'a consultant day rate you stop paying'], ['46 days', 'average time from signup to Stage 2 audit'], ['100%', 'of AI output reviewed by a Kaiso ISO expert']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h1)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--hivis-400)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-300)',
      maxWidth: '26ch'
    }
  }, l)))));
}
function ExpertBand() {
  const {
    KeyGraphic,
    ExpertNote
  } = window.KaisoDesignSystem_caee0d;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1.5px solid var(--ink-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-eyebrow"
  }, "Platform plus people"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)'
    }
  }, "AI does the heavy lifting. Kaiso's ISO experts verify the work."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--ink-600)'
    }
  }, "Nothing reaches your management system on the strength of a model's confidence. A Kaiso auditor reads every draft, names themselves against it and dates the approval \u2014 which is exactly what your certification body will ask for."), /*#__PURE__*/React.createElement(ExpertNote, {
    state: "verified",
    expert: "Sam Okafor, Lead Auditor",
    when: "14 Aug 2026, 9:42am AEST"
  }, "Approved your site induction procedure against ISO 45001 clause 7.2.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(KeyGraphic, {
    name: "conveyor-and-stuff",
    size: 420,
    basePath: "../../assets"
  }))));
}
function Pricing() {
  const {
    Button,
    Badge
  } = window.KaisoDesignSystem_caee0d;
  const tiers = [['Get certified', '$390', 'per month, 12-month term', 'For businesses starting from scratch', ['Guided setup for one standard', 'AI-drafted starter documents', 'Expert review on every document', 'Readiness view and audit pack'], false], ['Stay certified', '$290', 'per month', 'For businesses already certified', ['Live clause coverage', 'Evidence collection and reminders', 'Activity log for your auditor', 'Two expert reviews a month'], true], ['Multi-standard', '$690', 'per month', 'For integrated 9001 / 14001 / 45001', ['Everything in Stay certified', 'All three standards in one system', 'Unlimited expert reviews', 'Multi-site scope'], false]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      marginBottom: 8
    }
  }, "Priced against a consultant, not a spreadsheet."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--ink-600)',
      marginBottom: 32
    }
  }, "All prices in AUD, excluding GST. Certification body fees are paid to your auditor, not to Kaiso."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      alignItems: 'start'
    }
  }, tiers.map(([name, price, per, who, items, feature]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      background: 'var(--white)',
      border: '1.5px solid ' + (feature ? 'var(--ink-900)' : 'var(--ink-200)'),
      boxShadow: feature ? 'var(--shadow-hard-md)' : 'none',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      clipPath: 'polygon(18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%,0 18px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      fontSize: 'var(--text-lg)'
    }
  }, name), feature ? /*#__PURE__*/React.createElement(Badge, {
    tone: "verified",
    dot: false
  }, "Most chosen") : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h1)',
      fontSize: 'var(--text-3xl)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-500)'
    }
  }, " ", per)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--ink-600)'
    }
  }, who), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingTop: 6,
      borderTop: '1.5px solid var(--ink-100)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-500)'
    }
  }, "\u2713"), i))), /*#__PURE__*/React.createElement(Button, {
    full: true,
    variant: feature ? 'primary' : 'secondary'
  }, "Check your readiness"))))));
}
function CtaBand({
  onCheck
}) {
  const {
    Button,
    Kobi
  } = window.KaisoDesignSystem_caee0d;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--hivis-400)',
      borderTop: '1.5px solid var(--ink-900)',
      borderBottom: '1.5px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '52px 24px',
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Kobi, {
    expression: "giggles",
    size: 84,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)'
    }
  }, "Find out how ready you actually are."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--ink-800)',
      maxWidth: '54ch'
    }
  }, "Answer 12 questions about how you work. You'll see your clause coverage before you give us a credit card.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      marginLeft: 'auto'
    },
    onClick: onCheck
  }, "Start the readiness check")));
}
Object.assign(window, {
  HowItWorks,
  ProofStrip,
  ExpertBand,
  Pricing,
  CtaBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteChrome.jsx
try { (() => {
function SiteHeader({
  onNav
}) {
  const {
    Logo,
    Button
  } = window.KaisoDesignSystem_caee0d;
  const links = ['How it works', 'Standards', 'Pricing', 'About'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--white)',
      borderBottom: '1.5px solid var(--ink-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 26
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav(l);
    },
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--text-sm)',
      textDecoration: 'none',
      color: 'var(--ink-700)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm"
  }, "Check your readiness"))));
}
function SiteFooter() {
  const {
    Logo,
    Kobi
  } = window.KaisoDesignSystem_caee0d;
  const cols = [['Platform', ['Document control', 'Gap analysis', 'Audit prep', 'Evidence library']], ['Standards', ['ISO 9001 — quality', 'ISO 14001 — environment', 'ISO 45001 — safety']], ['Company', ['About Kaiso', 'Our ISO experts', 'Pricing', 'Contact']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--ink-300)',
      padding: '56px 24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3,1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 26,
    color: "var(--white)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      maxWidth: 280
    }
  }, "An integrated management system for Australian businesses getting certified and staying that way. Built in Melbourne."), /*#__PURE__*/React.createElement(Kobi, {
    expression: "default",
    size: 36,
    basePath: "../../assets",
    style: {
      filter: 'invert(1)'
    }
  })), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--hivis-400)'
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-300)',
      textDecoration: 'none'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '32px auto 0',
      paddingTop: 20,
      borderTop: '1.5px solid var(--ink-700)',
      display: 'flex',
      gap: 16,
      font: 'var(--type-mono)',
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Kaiso Pty Ltd"), /*#__PURE__*/React.createElement("span", null, "ABN 00 000 000 000"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, "Prices in AUD")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ExpertNote = __ds_scope.ExpertNote;

__ds_ns.KEY_GRAPHICS = __ds_scope.KEY_GRAPHICS;

__ds_ns.KeyGraphic = __ds_scope.KeyGraphic;

__ds_ns.KOBI_EXPRESSIONS = __ds_scope.KOBI_EXPRESSIONS;

__ds_ns.Kobi = __ds_scope.Kobi;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ReadinessMeter = __ds_scope.ReadinessMeter;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
