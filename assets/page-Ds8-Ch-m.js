import { r as e } from "./rolldown-runtime-S-ySWqyJ.js";
import { i as t, n, r } from "./framework-CXnKph_e.js";
var i = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  a = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  o = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  s = (e) => {
    let t = o(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  c = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  l = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  u = e(t(), 1),
  d = (0, u.createContext)({}),
  f = () => (0, u.useContext)(d),
  p = (0, u.forwardRef)(
    (
      {
        color: e,
        size: t,
        strokeWidth: n,
        absoluteStrokeWidth: r,
        className: a = ``,
        children: o,
        iconNode: s,
        ...d
      },
      p,
    ) => {
      let {
          size: m = 24,
          strokeWidth: h = 2,
          absoluteStrokeWidth: g = !1,
          color: _ = `currentColor`,
          className: v = ``,
        } = f() ?? {},
        ee = (r ?? g) ? (Number(n ?? h) * 24) / Number(t ?? m) : (n ?? h);
      return (0, u.createElement)(
        `svg`,
        {
          ref: p,
          ...c,
          width: t ?? m ?? c.width,
          height: t ?? m ?? c.height,
          stroke: e ?? _,
          strokeWidth: ee,
          className: i(`lucide`, v, a),
          ...(!o && !l(d) && { "aria-hidden": `true` }),
          ...d,
        },
        [
          ...s.map(([e, t]) => (0, u.createElement)(e, t)),
          ...(Array.isArray(o) ? o : [o]),
        ],
      );
    },
  ),
  m = (e, t) => {
    let n = (0, u.forwardRef)(({ className: n, ...r }, o) =>
      (0, u.createElement)(p, {
        ref: o,
        iconNode: t,
        className: i(`lucide-${a(s(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return (n.displayName = s(e)), n;
  },
  h = m(`arrow-up-right`, [
    [`path`, { d: `M7 7h10v10`, key: `1tivn9` }],
    [`path`, { d: `M7 17 17 7`, key: `1vkiza` }],
  ]),
  g = m(`camera`, [
    [
      `path`,
      {
        d: `M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,
        key: `18u6gg`,
      },
    ],
    [`circle`, { cx: `12`, cy: `13`, r: `3`, key: `1vg3eu` }],
  ]),
  _ = m(`circle-check`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  v = m(`eye`, [
    [
      `path`,
      {
        d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
        key: `1nclc0`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  ee = m(`mail`, [
    [`path`, { d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`, key: `132q7q` }],
    [
      `rect`,
      { x: `2`, y: `4`, width: `20`, height: `16`, rx: `2`, key: `izxlao` },
    ],
  ]),
  y = m(`message-circle`, [
    [
      `path`,
      {
        d: `M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,
        key: `1sd12s`,
      },
    ],
  ]),
  te = m(`search`, [
    [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
  ]),
  b = m(`sparkles`, [
    [
      `path`,
      {
        d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
        key: `1s2grr`,
      },
    ],
    [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
    [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
    [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
  ]),
  ne = m(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]);
function x(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = x(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function S() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = x(e)) && (r && (r += ` `), (r += t));
  return r;
}
var re = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  ie = S,
  ae = (e, t) => (n) => {
    if (t?.variants == null) return ie(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = re(t) || re(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return r === void 0 || (e[n] = r), e;
        }, {});
    return ie(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n)
            ? n.includes({ ...i, ...o }[t])
            : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className,
    );
  },
  oe = Object.defineProperty,
  se = (e, t) => oe(e, `name`, { value: t, configurable: !0 });
function C(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
se(C, `setRef`);
function w(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = C(e, t);
        return !n && typeof r == `function` && (n = !0), r;
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : C(e[t], null);
        }
      };
  };
}
se(w, `composeRefs`);
function T(...e) {
  return u.useCallback(w(...e), e);
}
se(T, `useComposedRefs`);
var ce = Object.defineProperty,
  E = (e, t) => ce(e, `name`, { value: t, configurable: !0 });
function D(e) {
  let t = u.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    me(r) && typeof j == `function` && (r = j(r._payload)),
      u.Children.forEach(r, (e) => {
        if (k(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          me(n) && typeof j == `function` && (n = j(n._payload)),
            (a = de(t, n)),
            s.push(a?.props?.children);
        } else s.push(e);
      }),
      a
        ? (a = u.cloneElement(a, void 0, s))
        : !o && u.Children.count(r) === 1 && u.isValidElement(r) && (a = r);
    let c = a ? O(a) : void 0,
      l = T(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? ge(e) : he(e));
      return r;
    }
    let d = fe(i, a.props ?? {});
    return a.type !== u.Fragment && (d.ref = n ? l : c), u.cloneElement(a, d);
  });
  return (t.displayName = `${e}.Slot`), t;
}
E(D, `createSlot`);
var le = Symbol.for(`radix.slottable`);
function ue(e) {
  let t = E(
    (e) => (`child` in e ? e.children(e.child) : e.children),
    `Slottable`,
  );
  return (t.displayName = `${e}.Slottable`), (t.__radixId = le), t;
}
E(ue, `createSlottable`);
var de = E((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return u.isValidElement(t)
      ? u.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return u.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function fe(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return i(...e), t;
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
E(fe, `mergeProps`);
function O(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
E(O, `getElementRef`);
function k(e) {
  return (
    u.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === le
  );
}
E(k, `isSlottable`);
var pe = Symbol.for(`react.lazy`);
function me(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === pe &&
    `_payload` in e &&
    A(e._payload)
  );
}
E(me, `isLazyComponent`);
function A(e) {
  return typeof e == `object` && !!e && `then` in e;
}
E(A, `isPromiseLike`);
var he = E(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`,
  ),
  ge = E(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`,
  ),
  j = u.use,
  _e = e(n(), 1),
  M = r(),
  ve = Object.defineProperty,
  ye = (e, t) => ve(e, `name`, { value: t, configurable: !0 }),
  be = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`,
  ].reduce((e, t) => {
    let n = D(`Primitive.${t}`),
      r = u.forwardRef((e, r) => {
        let { asChild: i, ...a } = e,
          o = i ? n : t;
        return (
          typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
          (0, M.jsx)(o, { ...a, ref: r })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function xe(e, t) {
  e && _e.flushSync(() => e.dispatchEvent(t));
}
ye(xe, `dispatchDiscreteCustomEvent`);
var Se = Object.defineProperty,
  N = (e, t) => Se(e, `name`, { value: t, configurable: !0 });
function Ce(e, t) {
  let n = u.createContext(t);
  n.displayName = e + `Context`;
  let r = N((e) => {
    let { children: t, ...r } = e,
      i = u.useMemo(() => r, Object.values(r));
    return (0, M.jsx)(n.Provider, { value: i, children: t });
  }, `Provider`);
  r.displayName = e + `Provider`;
  function i(r, i = {}) {
    let { optional: a = !1 } = i,
      o = u.useContext(n);
    if (o) return o;
    if (t !== void 0) return t;
    if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
  }
  return N(i, `useContext`), [r, i];
}
N(Ce, `createContext`);
function we(e, t = []) {
  let n = [];
  function r(t, r) {
    let i = u.createContext(r);
    i.displayName = t + `Context`;
    let a = n.length;
    n = [...n, r];
    let o = N((t) => {
      let { scope: n, children: r, ...o } = t,
        s = n?.[e]?.[a] || i,
        c = u.useMemo(() => o, Object.values(o));
      return (0, M.jsx)(s.Provider, { value: c, children: r });
    }, `Provider`);
    o.displayName = t + `Provider`;
    function s(n, o, s = {}) {
      let { optional: c = !1 } = s,
        l = o?.[e]?.[a] || i,
        d = u.useContext(l);
      if (d) return d;
      if (r !== void 0) return r;
      if (!c) throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return N(s, `useContext`), [o, s];
  }
  N(r, `createContext`);
  let i = N(() => {
    let t = n.map((e) => u.createContext(e));
    return N(function (n) {
      let r = n?.[e] || t;
      return u.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    }, `useScope`);
  }, `createScope`);
  return (i.scopeName = e), [r, Te(i, ...t)];
}
N(we, `createContextScope`);
function Te(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = N(() => {
    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return N(function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`];
        return { ...t, ...i };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    }, `useComposedScopes`);
  }, `createScope`);
  return (n.scopeName = t.scopeName), n;
}
N(Te, `composeContextScopes`);
var Ee = Object.defineProperty,
  De = (e, t) => Ee(e, `name`, { value: t, configurable: !0 }),
  Oe = !!(
    typeof window < `u` &&
    window.document &&
    window.document.createElement
  );
function ke(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return De(function (r) {
    if ((e?.(r), n === !1 || !r || !r.defaultPrevented)) return t?.(r);
  }, `handleEvent`);
}
De(ke, `composeEventHandlers`);
function Ae(e) {
  if (!Oe) throw Error(`Cannot access window outside of the DOM`);
  return e?.ownerDocument?.defaultView ?? window;
}
De(Ae, `getOwnerWindow`);
function je(e) {
  if (!Oe) throw Error(`Cannot access document outside of the DOM`);
  return e?.ownerDocument ?? document;
}
De(je, `getOwnerDocument`);
function Me(e, t = !1) {
  let { activeElement: n } = je(e);
  if (!n?.nodeName) return null;
  if (Ne(n) && n.contentDocument) return Me(n.contentDocument.body, t);
  if (t) {
    let e = n.getAttribute(`aria-activedescendant`);
    if (e) {
      let t = je(n).getElementById(e);
      if (t) return t;
    }
  }
  return n;
}
De(Me, `getActiveElement`);
function Ne(e) {
  return e.tagName === `IFRAME`;
}
De(Ne, `isFrame`);
var Pe = globalThis?.document ? u.useLayoutEffect : () => {},
  Fe = Object.defineProperty,
  Ie = (e, t) => Fe(e, `name`, { value: t, configurable: !0 }),
  Le = u.useEffectEvent,
  Re = u.useInsertionEffect;
function ze(e) {
  if (typeof Le == `function`) return Le(e);
  let t = u.useRef(() => {
    throw Error(`Cannot call an event handler while rendering.`);
  });
  return (
    typeof Re == `function`
      ? Re(() => {
          t.current = e;
        })
      : Pe(() => {
          t.current = e;
        }),
    u.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
Ie(ze, `useEffectEvent`);
var Be = Object.defineProperty,
  Ve = (e, t) => Be(e, `name`, { value: t, configurable: !0 }),
  He = u.useInsertionEffect || Pe;
function Ue({
  prop: e,
  defaultProp: t,
  onChange: n = Ve(() => {}, `onChange`),
  caller: r,
}) {
  let [i, a, o] = We({ defaultProp: t, onChange: n }),
    s = e !== void 0;
  return [
    s ? e : i,
    u.useCallback(
      (t) => {
        if (s) {
          let n = Ge(t) ? t(e) : t;
          n !== e && o.current?.(n);
        } else a(t);
      },
      [s, e, a, o],
    ),
  ];
}
Ve(Ue, `useControllableState`);
function We({ defaultProp: e, onChange: t }) {
  let [n, r] = u.useState(e),
    i = u.useRef(n),
    a = u.useRef(t);
  return (
    He(() => {
      a.current = t;
    }, [t]),
    u.useEffect(() => {
      i.current !== n && (a.current?.(n), (i.current = n));
    }, [n, i]),
    [n, r, a]
  );
}
Ve(We, `useUncontrolledState`);
function Ge(e) {
  return typeof e == `function`;
}
Ve(Ge, `isFunction`);
var Ke = Symbol(`RADIX:SYNC_STATE`);
function qe(e, t, n, r) {
  let { prop: i, defaultProp: a, onChange: o, caller: s } = t,
    c = i !== void 0,
    l = ze(o),
    d = [{ ...n, state: a }];
  r && d.push(r);
  let [f, p] = u.useReducer(
      (t, n) => {
        if (n.type === Ke) return { ...t, state: n.state };
        let r = e(t, n);
        return c && !Object.is(r.state, t.state) && l(r.state), r;
      },
      ...d,
    ),
    m = f.state,
    h = u.useRef(m);
  u.useEffect(() => {
    h.current !== m && ((h.current = m), c || l(m));
  }, [m, h, c]);
  let g = u.useMemo(() => (i === void 0 ? f : { ...f, state: i }), [f, i]);
  return (
    u.useEffect(() => {
      c && !Object.is(i, f.state) && p({ type: Ke, state: i });
    }, [i, f.state, c]),
    [g, p]
  );
}
Ve(qe, `useControllableStateReducer`);
var Je = Object.defineProperty,
  P = (e, t) => Je(e, `name`, { value: t, configurable: !0 });
function Ye(e, t) {
  return u.useReducer((e, n) => t[e][n] ?? e, e);
}
P(Ye, `useStateMachine`);
var Xe = P((e) => {
  let { present: t, children: n } = e,
    r = Ze(t),
    i =
      typeof n == `function` ? n({ present: r.isPresent }) : u.Children.only(n),
    a = $e(r.ref, tt(i));
  return typeof n == `function` || r.isPresent
    ? u.cloneElement(i, { ref: a })
    : null;
}, `Presence`);
function Ze(e) {
  let [t, n] = u.useState(),
    r = u.useRef(null),
    i = u.useRef(e),
    a = u.useRef(`none`),
    o = u.useRef(void 0),
    [s, c] = Ye(e ? `mounted` : `unmounted`, {
      mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` },
      unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
      unmounted: { MOUNT: `mounted` },
    });
  return (
    u.useEffect(() => {
      s === `mounted`
        ? ((a.current = o.current ?? et(r.current)), (o.current = void 0))
        : (a.current = `none`);
    }, [s]),
    Pe(() => {
      let t = r.current,
        n = i.current;
      if (n !== e) {
        let r = a.current,
          s = et(t);
        e
          ? ((o.current = s), c(`MOUNT`))
          : s === `none` || t?.display === `none`
            ? c(`UNMOUNT`)
            : c(n && r !== s ? `ANIMATION_OUT` : `UNMOUNT`),
          (i.current = e);
      }
    }, [e, c]),
    Pe(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          o = P((a) => {
            let o = et(r.current).includes(CSS.escape(a.animationName));
            if (a.target === t && o && (c(`ANIMATION_END`), !i.current)) {
              let r = t.style.animationFillMode;
              (t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` &&
                    (t.style.animationFillMode = r);
                }));
            }
          }, `handleAnimationEnd`),
          s = P((e) => {
            e.target === t && (a.current = et(r.current));
          }, `handleAnimationStart`);
        return (
          t.addEventListener(`animationstart`, s),
          t.addEventListener(`animationcancel`, o),
          t.addEventListener(`animationend`, o),
          () => {
            n.clearTimeout(e),
              t.removeEventListener(`animationstart`, s),
              t.removeEventListener(`animationcancel`, o),
              t.removeEventListener(`animationend`, o);
          }
        );
      } else c(`ANIMATION_END`);
    }, [t, c]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(s),
      ref: u.useCallback((e) => {
        if (e) {
          let t = getComputedStyle(e);
          (r.current = t), (o.current = et(t));
        } else r.current = null;
        n(e);
      }, []),
    }
  );
}
P(Ze, `usePresence`);
function Qe(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
P(Qe, `setRef`);
function $e(...e) {
  let t = u.useRef(e);
  return (
    (t.current = e),
    u.useCallback((e) => {
      let n = t.current,
        r = !1,
        i = n.map((t) => {
          let n = Qe(t, e);
          return !r && typeof n == `function` && (r = !0), n;
        });
      if (r)
        return () => {
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            typeof t == `function` ? t() : Qe(n[e], null);
          }
        };
    }, [])
  );
}
P($e, `useStableComposedRefs`);
function et(e) {
  return e?.animationName || `none`;
}
P(et, `getAnimationName`);
function tt(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
P(tt, `getElementRef`);
var nt = Object.defineProperty,
  rt = (e, t) => nt(e, `name`, { value: t, configurable: !0 }),
  it = u.useId || (() => void 0),
  at = 0;
function ot(e) {
  let [t, n] = u.useState(it());
  return (
    Pe(() => {
      e || n((e) => e ?? String(at++));
    }, [e]),
    e || (t ? `radix-${t}` : ``)
  );
}
rt(ot, `useId`);
var st = Object.defineProperty,
  ct = (e, t) => st(e, `name`, { value: t, configurable: !0 });
function lt(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
ct(lt, `setRef`);
function ut(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = lt(e, t);
        return !n && typeof r == `function` && (n = !0), r;
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : lt(e[t], null);
        }
      };
  };
}
ct(ut, `composeRefs`);
function dt(...e) {
  return u.useCallback(ut(...e), e);
}
ct(dt, `useComposedRefs`);
var ft = Object.defineProperty,
  pt = (e, t) => ft(e, `name`, { value: t, configurable: !0 });
function mt(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
pt(mt, `setRef`);
function ht(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = mt(e, t);
        return !n && typeof r == `function` && (n = !0), r;
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : mt(e[t], null);
        }
      };
  };
}
pt(ht, `composeRefs`);
function gt(...e) {
  return u.useCallback(ht(...e), e);
}
pt(gt, `useComposedRefs`);
var _t = Object.defineProperty,
  vt = (e, t) => _t(e, `name`, { value: t, configurable: !0 });
function yt(e) {
  let t = u.useRef(e);
  return (
    u.useEffect(() => {
      t.current = e;
    }),
    u.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
vt(yt, `useCallbackRef`);
var bt = Object.defineProperty,
  F = (e, t) => bt(e, `name`, { value: t, configurable: !0 }),
  xt = `dismissableLayer.update`,
  St = `dismissableLayer.pointerDownOutside`,
  Ct = `dismissableLayer.focusOutside`,
  wt,
  Tt = u.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  Et = u.forwardRef(
    F(function (e, t) {
      let {
          disableOutsidePointerEvents: n = !1,
          deferPointerDownOutside: r = !1,
          onEscapeKeyDown: i,
          onPointerDownOutside: a,
          onFocusOutside: o,
          onInteractOutside: s,
          onDismiss: c,
          ...l
        } = e,
        d = u.useContext(Tt),
        [f, p] = u.useState(null),
        m = f?.ownerDocument ?? globalThis?.document,
        [, h] = u.useState({}),
        g = gt(t, p),
        _ = Array.from(d.layers),
        [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
        ee = v ? _.indexOf(v) : -1,
        y = f ? _.indexOf(f) : -1,
        te = d.layersWithOutsidePointerEventsDisabled.size > 0,
        b = y >= ee,
        ne = u.useRef(!1),
        x = kt(
          (e) => {
            a?.(e), s?.(e), e.defaultPrevented || c?.();
          },
          {
            ownerDocument: m,
            deferPointerDownOutside: r,
            isDeferredPointerDownOutsideRef: ne,
            dismissableSurfaces: d.dismissableSurfaces,
            shouldHandlePointerDownOutside: u.useCallback(
              (e) => {
                if (!(e instanceof Node)) return !1;
                let t = [...d.branches].some((t) => t.contains(e));
                return b && !t;
              },
              [d.branches, b],
            ),
          },
        ),
        S = At((e) => {
          if (r && ne.current) return;
          let t = e.target;
          [...d.branches].some((e) => e.contains(t)) ||
            (o?.(e), s?.(e), e.defaultPrevented || c?.());
        }, m),
        re = f ? y === _.length - 1 : !1,
        ie = yt((e) => {
          e.key === `Escape` &&
            (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
        });
      return (
        u.useEffect(() => {
          if (re)
            return (
              m.addEventListener(`keydown`, ie, { capture: !0 }),
              () => m.removeEventListener(`keydown`, ie, { capture: !0 })
            );
        }, [m, re, ie]),
        u.useEffect(() => {
          if (f)
            return (
              n &&
                (d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((wt = m.body.style.pointerEvents),
                  (m.body.style.pointerEvents = `none`)),
                d.layersWithOutsidePointerEventsDisabled.add(f)),
              d.layers.add(f),
              jt(),
              () => {
                n &&
                  (d.layersWithOutsidePointerEventsDisabled.delete(f),
                  d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    (m.body.style.pointerEvents = wt));
              }
            );
        }, [f, m, n, d]),
        u.useEffect(
          () => () => {
            f &&
              (d.layers.delete(f),
              d.layersWithOutsidePointerEventsDisabled.delete(f),
              jt());
          },
          [f, d],
        ),
        u.useEffect(() => {
          let e = F(() => h({}), `handleUpdate`);
          return (
            document.addEventListener(xt, e),
            () => document.removeEventListener(xt, e)
          );
        }, []),
        (0, M.jsx)(be.div, {
          ...l,
          ref: g,
          style: {
            pointerEvents: te ? (b ? `auto` : `none`) : void 0,
            ...e.style,
          },
          onFocusCapture: ke(e.onFocusCapture, S.onFocusCapture),
          onBlurCapture: ke(e.onBlurCapture, S.onBlurCapture),
          onPointerDownCapture: ke(
            e.onPointerDownCapture,
            x.onPointerDownCapture,
          ),
        })
      );
    }, `DismissableLayer`),
  );
function Dt() {
  let e = u.useContext(Tt),
    [t, n] = u.useState(null);
  return (
    u.useEffect(() => {
      if (t)
        return (
          e.dismissableSurfaces.add(t),
          () => {
            e.dismissableSurfaces.delete(t);
          }
        );
    }, [t, e.dismissableSurfaces]),
    n
  );
}
F(Dt, `useDismissableLayerSurface`);
var Ot = F(() => !0, `IS_TRUE`);
function kt(e, t) {
  let {
      ownerDocument: n = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: i,
      dismissableSurfaces: a,
      shouldHandlePointerDownOutside: o = Ot,
    } = t,
    s = yt(e),
    c = u.useRef(!1),
    l = u.useRef(!1),
    d = u.useRef(new Map()),
    f = u.useRef(() => {});
  return (
    u.useEffect(() => {
      function e() {
        (l.current = !1), (i.current = !1), d.current.clear();
      }
      F(e, `resetOutsideInteraction`);
      function t() {
        return Array.from(d.current.values()).some(Boolean);
      }
      F(t, `isOutsideInteractionIntercepted`);
      function u(e) {
        if (!l.current) return;
        let t = e.target;
        (t instanceof Node && [...a].some((e) => e.contains(t))) ||
          d.current.set(e.type, !0),
          e.type === `click` &&
            window.setTimeout(() => {
              l.current && f.current();
            }, 0);
      }
      F(u, `handleInteractionCapture`);
      function p(e) {
        l.current && d.current.set(e.type, !1);
      }
      F(p, `handleInteractionBubble`);
      let m = F((a) => {
          if (a.target && !c.current) {
            let u = function () {
              n.removeEventListener(`click`, f.current);
              let r = t();
              e(), r || Mt(St, s, p, { discrete: !0 });
            };
            if (
              (F(u, `handleAndDispatchPointerDownOutsideEvent`), !o(a.target))
            ) {
              n.removeEventListener(`click`, f.current), e(), (c.current = !1);
              return;
            }
            let p = { originalEvent: a };
            (l.current = !0),
              (i.current = r && a.button === 0),
              d.current.clear(),
              !r || a.button !== 0
                ? u()
                : (n.removeEventListener(`click`, f.current),
                  (f.current = u),
                  n.addEventListener(`click`, f.current, { once: !0 }));
          } else n.removeEventListener(`click`, f.current), e();
          c.current = !1;
        }, `handlePointerDown`),
        h = [
          `pointerup`,
          `mousedown`,
          `mouseup`,
          `touchstart`,
          `touchend`,
          `click`,
        ];
      for (let e of h) n.addEventListener(e, u, !0), n.addEventListener(e, p);
      let g = window.setTimeout(() => {
        n.addEventListener(`pointerdown`, m);
      }, 0);
      return () => {
        window.clearTimeout(g),
          n.removeEventListener(`pointerdown`, m),
          n.removeEventListener(`click`, f.current);
        for (let e of h)
          n.removeEventListener(e, u, !0), n.removeEventListener(e, p);
      };
    }, [n, s, r, i, a, o]),
    { onPointerDownCapture: F(() => (c.current = !0), `onPointerDownCapture`) }
  );
}
F(kt, `usePointerDownOutside`);
function At(e, t = globalThis?.document) {
  let n = yt(e),
    r = u.useRef(!1);
  return (
    u.useEffect(() => {
      let e = F((e) => {
        e.target &&
          !r.current &&
          Mt(Ct, n, { originalEvent: e }, { discrete: !1 });
      }, `handleFocus`);
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      );
    }, [t, n]),
    {
      onFocusCapture: F(() => (r.current = !0), `onFocusCapture`),
      onBlurCapture: F(() => (r.current = !1), `onBlurCapture`),
    }
  );
}
F(At, `useFocusOutside`);
function jt() {
  let e = new CustomEvent(xt);
  document.dispatchEvent(e);
}
F(jt, `dispatchUpdate`);
function Mt(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? xe(i, a) : i.dispatchEvent(a);
}
F(Mt, `handleAndDispatchCustomEvent`);
var Nt = Object.defineProperty,
  Pt = (e, t) => Nt(e, `name`, { value: t, configurable: !0 });
function Ft(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
Pt(Ft, `setRef`);
function It(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = Ft(e, t);
        return !n && typeof r == `function` && (n = !0), r;
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : Ft(e[t], null);
        }
      };
  };
}
Pt(It, `composeRefs`);
function Lt(...e) {
  return u.useCallback(It(...e), e);
}
Pt(Lt, `useComposedRefs`);
var Rt = Object.defineProperty,
  I = (e, t) => Rt(e, `name`, { value: t, configurable: !0 }),
  zt = `focusScope.autoFocusOnMount`,
  Bt = `focusScope.autoFocusOnUnmount`,
  Vt = { bubbles: !1, cancelable: !0 },
  Ht = u.forwardRef(
    I(function (e, t) {
      let {
          loop: n = !1,
          trapped: r = !1,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          ...o
        } = e,
        [s, c] = u.useState(null),
        l = yt(i),
        d = yt(a),
        f = u.useRef(null),
        p = Lt(t, c),
        m = u.useRef({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      u.useEffect(() => {
        if (r) {
          let e = function (e) {
              if (m.paused || !s) return;
              let t = e.target;
              s.contains(t) ? (f.current = t) : L(f.current, { select: !0 });
            },
            t = function (e) {
              if (m.paused || !s) return;
              let t = e.relatedTarget;
              t !== null && (s.contains(t) || L(f.current, { select: !0 }));
            },
            n = function (e) {
              if (document.activeElement === document.body)
                for (let t of e) t.removedNodes.length > 0 && L(s);
            };
          I(e, `handleFocusIn`),
            I(t, `handleFocusOut`),
            I(n, `handleMutations`),
            document.addEventListener(`focusin`, e),
            document.addEventListener(`focusout`, t);
          let r = new MutationObserver(n);
          return (
            s && r.observe(s, { childList: !0, subtree: !0 }),
            () => {
              document.removeEventListener(`focusin`, e),
                document.removeEventListener(`focusout`, t),
                r.disconnect();
            }
          );
        }
      }, [r, s, m.paused]),
        u.useEffect(() => {
          if (s) {
            Yt.add(m);
            let e = document.activeElement;
            if (!s.contains(e)) {
              let t = new CustomEvent(zt, Vt);
              s.addEventListener(zt, l),
                s.dispatchEvent(t),
                t.defaultPrevented ||
                  (Ut(Qt(Gt(s)), { select: !0 }),
                  document.activeElement === e && L(s));
            }
            return () => {
              s.removeEventListener(zt, l),
                setTimeout(() => {
                  let t = new CustomEvent(Bt, Vt);
                  s.addEventListener(Bt, d),
                    s.dispatchEvent(t),
                    t.defaultPrevented || L(e ?? document.body, { select: !0 }),
                    s.removeEventListener(Bt, d),
                    Yt.remove(m);
                }, 0);
            };
          }
        }, [s, l, d, m]);
      let h = u.useCallback(
        (e) => {
          if ((!n && !r) || m.paused) return;
          let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
            i = document.activeElement;
          if (t && i) {
            let t = e.currentTarget,
              [r, a] = Wt(t);
            r && a
              ? !e.shiftKey && i === a
                ? (e.preventDefault(), n && L(r, { select: !0 }))
                : e.shiftKey &&
                  i === r &&
                  (e.preventDefault(), n && L(a, { select: !0 }))
              : i === t && e.preventDefault();
          }
        },
        [n, r, m.paused],
      );
      return (0, M.jsx)(be.div, { tabIndex: -1, ...o, ref: p, onKeyDown: h });
    }, `FocusScope`),
  );
function Ut(e, { select: t = !1 } = {}) {
  let n = document.activeElement;
  for (let r of e)
    if ((L(r, { select: t }), document.activeElement !== n)) return;
}
I(Ut, `focusFirst`);
function Wt(e) {
  let t = Gt(e);
  return [Kt(t, e), Kt(t.reverse(), e)];
}
I(Wt, `getTabbableEdges`);
function Gt(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: I((e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      }, `acceptNode`),
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
I(Gt, `getTabbableCandidates`);
function Kt(e, t) {
  let n =
    typeof t.checkVisibility == `function` &&
    t.checkVisibility({ checkVisibilityCSS: !0 });
  for (let r of e)
    if (
      !(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : qt(r, { upTo: t }))
    )
      return r;
}
I(Kt, `findVisible`);
function qt(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === `hidden`) return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === `none`) return !0;
    e = e.parentElement;
  }
  return !1;
}
I(qt, `isHidden`);
function Jt(e) {
  return e instanceof HTMLInputElement && `select` in e;
}
I(Jt, `isSelectableInput`);
function L(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Jt(e) && t && e.select();
  }
}
I(L, `focus`);
var Yt = Xt();
function Xt() {
  let e = [];
  return {
    add(t) {
      let n = e[0];
      t !== n && n?.pause(), (e = Zt(e, t)), e.unshift(t);
    },
    remove(t) {
      (e = Zt(e, t)), e[0]?.resume();
    },
  };
}
I(Xt, `createFocusScopesStack`);
function Zt(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
I(Zt, `arrayRemove`);
function Qt(e) {
  return e.filter((e) => e.tagName !== `A`);
}
I(Qt, `removeLinks`);
var $t = Object.defineProperty,
  en = u.forwardRef(
    ((e, t) => $t(e, `name`, { value: t, configurable: !0 }))(function (e, t) {
      let { container: n, ...r } = e,
        [i, a] = u.useState(!1);
      Pe(() => a(!0), []);
      let o = n || (i && globalThis?.document?.body);
      return o
        ? _e.createPortal((0, M.jsx)(be.div, { ...r, ref: t }), o)
        : null;
    }, `Portal`),
  ),
  tn = Object.defineProperty,
  nn = (e, t) => tn(e, `name`, { value: t, configurable: !0 }),
  rn = 0,
  an = null;
function on(e) {
  return sn(), e.children;
}
nn(on, `FocusGuards`);
function sn() {
  u.useEffect(() => {
    an ||= { start: cn(), end: cn() };
    let { start: e, end: t } = an;
    return (
      document.body.firstElementChild !== e &&
        document.body.insertAdjacentElement(`afterbegin`, e),
      document.body.lastElementChild !== t &&
        document.body.insertAdjacentElement(`beforeend`, t),
      rn++,
      () => {
        rn === 1 && (an?.start.remove(), an?.end.remove(), (an = null)),
          (rn = Math.max(0, rn - 1));
      }
    );
  }, []);
}
nn(sn, `useFocusGuards`);
function cn() {
  let e = document.createElement(`span`);
  return (
    e.setAttribute(`data-radix-focus-guard`, ``),
    (e.tabIndex = 0),
    (e.style.outline = `none`),
    (e.style.opacity = `0`),
    (e.style.position = `fixed`),
    (e.style.pointerEvents = `none`),
    e
  );
}
nn(cn, `createFocusGuard`);
var R = function () {
  return (
    (R =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in ((t = arguments[n]), t))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }),
    R.apply(this, arguments)
  );
};
function ln(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function un(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) &&
        ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var dn = `right-scroll-bar-position`,
  fn = `width-before-scroll-bar`,
  pn = `with-scroll-bars-hidden`,
  mn = `--removed-body-scroll-bar-size`;
function hn(e, t) {
  return typeof e == `function` ? e(t) : e && (e.current = t), e;
}
function gn(e, t) {
  var n = (0, u.useState)(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(e) {
          var t = n.value;
          t !== e && ((n.value = e), n.callback(e, t));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var _n = typeof window < `u` ? u.useLayoutEffect : u.useEffect,
  vn = new WeakMap();
function yn(e, t) {
  var n = gn(t || null, function (t) {
    return e.forEach(function (e) {
      return hn(e, t);
    });
  });
  return (
    _n(
      function () {
        var t = vn.get(n);
        if (t) {
          var r = new Set(t),
            i = new Set(e),
            a = n.current;
          r.forEach(function (e) {
            i.has(e) || hn(e, null);
          }),
            i.forEach(function (e) {
              r.has(e) || hn(e, a);
            });
        }
        vn.set(n, e);
      },
      [e],
    ),
    n
  );
}
function bn(e) {
  return e;
}
function xn(e, t) {
  t === void 0 && (t = bn);
  var n = [],
    r = !1;
  return {
    read: function () {
      if (r)
        throw Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
        );
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (e) {
      var i = t(e, r);
      return (
        n.push(i),
        function () {
          n = n.filter(function (e) {
            return e !== i;
          });
        }
      );
    },
    assignSyncMedium: function (e) {
      for (r = !0; n.length; ) {
        var t = n;
        (n = []), t.forEach(e);
      }
      n = {
        push: function (t) {
          return e(t);
        },
        filter: function () {
          return n;
        },
      };
    },
    assignMedium: function (e) {
      r = !0;
      var t = [];
      if (n.length) {
        var i = n;
        (n = []), i.forEach(e), (t = n);
      }
      var a = function () {
          var n = t;
          (t = []), n.forEach(e);
        },
        o = function () {
          return Promise.resolve().then(a);
        };
      o(),
        (n = {
          push: function (e) {
            t.push(e), o();
          },
          filter: function (e) {
            return (t = t.filter(e)), n;
          },
        });
    },
  };
}
function Sn(e) {
  e === void 0 && (e = {});
  var t = xn(null);
  return (t.options = R({ async: !0, ssr: !1 }, e)), t;
}
var Cn = function (e) {
  var t = e.sideCar,
    n = ln(e, [`sideCar`]);
  if (!t)
    throw Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw Error(`Sidecar medium not found`);
  return u.createElement(r, R({}, n));
};
Cn.isSideCarExport = !0;
function wn(e, t) {
  return e.useMedium(t), Cn;
}
var Tn = Sn(),
  En = function () {},
  Dn = u.forwardRef(function (e, t) {
    var n = u.useRef(null),
      r = u.useState({
        onScrollCapture: En,
        onWheelCapture: En,
        onTouchMoveCapture: En,
      }),
      i = r[0],
      a = r[1],
      o = e.forwardProps,
      s = e.children,
      c = e.className,
      l = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      p = e.sideCar,
      m = e.noRelative,
      h = e.noIsolation,
      g = e.inert,
      _ = e.allowPinchZoom,
      v = e.as,
      ee = v === void 0 ? `div` : v,
      y = e.gapMode,
      te = ln(e, [
        `forwardProps`,
        `children`,
        `className`,
        `removeScrollBar`,
        `enabled`,
        `shards`,
        `sideCar`,
        `noRelative`,
        `noIsolation`,
        `inert`,
        `allowPinchZoom`,
        `as`,
        `gapMode`,
      ]),
      b = p,
      ne = yn([n, t]),
      x = R(R({}, te), i);
    return u.createElement(
      u.Fragment,
      null,
      d &&
        u.createElement(b, {
          sideCar: Tn,
          removeScrollBar: l,
          shards: f,
          noRelative: m,
          noIsolation: h,
          inert: g,
          setCallbacks: a,
          allowPinchZoom: !!_,
          lockRef: n,
          gapMode: y,
        }),
      o
        ? u.cloneElement(u.Children.only(s), R(R({}, x), { ref: ne }))
        : u.createElement(ee, R({}, x, { className: c, ref: ne }), s),
    );
  });
(Dn.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (Dn.classNames = { fullWidth: fn, zeroRight: dn });
var On,
  kn = function () {
    if (On) return On;
    if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__;
  };
function An() {
  if (!document) return null;
  var e = document.createElement(`style`);
  e.type = `text/css`;
  var t = kn();
  return t && e.setAttribute(`nonce`, t), e;
}
function jn(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Mn(e) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e);
}
var Nn = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = An()) && (jn(t, n), Mn(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Pn = function () {
    var e = Nn();
    return function (t, n) {
      u.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  Fn = function () {
    var e = Pn();
    return function (t) {
      var n = t.styles,
        r = t.dynamic;
      return e(n, r), null;
    };
  },
  In = { left: 0, top: 0, right: 0, gap: 0 },
  Ln = function (e) {
    return parseInt(e || ``, 10) || 0;
  },
  Rn = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
      r = t[e === `padding` ? `paddingTop` : `marginTop`],
      i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [Ln(n), Ln(r), Ln(i)];
  },
  zn = function (e) {
    if ((e === void 0 && (e = `margin`), typeof window > `u`)) return In;
    var t = Rn(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Bn = Fn(),
  Vn = `data-scroll-locked`,
  Hn = function (e, t, n, r) {
    var i = e.left,
      a = e.top,
      o = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = `margin`),
      `
  .${pn} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Vn}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
      t && `position: relative ${r};`,
      n === `margin` &&
        `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
      n === `padding` && `padding-right: ${s}px ${r};`,
    ]
      .filter(Boolean)
      .join(``)}
  }
  
  .${dn} {
    right: ${s}px ${r};
  }
  
  .${fn} {
    margin-right: ${s}px ${r};
  }
  
  .${dn} .${dn} {
    right: 0 ${r};
  }
  
  .${fn} .${fn} {
    margin-right: 0 ${r};
  }
  
  body[${Vn}] {
    ${mn}: ${s}px;
  }
`
    );
  },
  Un = function () {
    var e = parseInt(
      document.body.getAttribute(`data-scroll-locked`) || `0`,
      10,
    );
    return isFinite(e) ? e : 0;
  },
  Wn = function () {
    u.useEffect(function () {
      return (
        document.body.setAttribute(Vn, (Un() + 1).toString()),
        function () {
          var e = Un() - 1;
          e <= 0
            ? document.body.removeAttribute(Vn)
            : document.body.setAttribute(Vn, e.toString());
        }
      );
    }, []);
  },
  Gn = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? `margin` : r;
    Wn();
    var a = u.useMemo(
      function () {
        return zn(i);
      },
      [i],
    );
    return u.createElement(Bn, { styles: Hn(a, !t, i, n ? `` : `!important`) });
  },
  Kn = !1;
if (typeof window < `u`)
  try {
    var qn = Object.defineProperty({}, `passive`, {
      get: function () {
        return (Kn = !0), !0;
      },
    });
    window.addEventListener(`test`, qn, qn),
      window.removeEventListener(`test`, qn, qn);
  } catch {
    Kn = !1;
  }
var Jn = Kn ? { passive: !1 } : !1,
  Yn = function (e) {
    return e.tagName === `TEXTAREA`;
  },
  Xn = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== `hidden` &&
      !(n.overflowY === n.overflowX && !Yn(e) && n[t] === `visible`)
    );
  },
  Zn = function (e) {
    return Xn(e, `overflowY`);
  },
  Qn = function (e) {
    return Xn(e, `overflowX`);
  },
  $n = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (
        (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host),
        nr(e, r))
      ) {
        var i = rr(e, r);
        if (i[1] > i[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  er = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight];
  },
  tr = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth];
  },
  nr = function (e, t) {
    return e === `v` ? Zn(t) : Qn(t);
  },
  rr = function (e, t) {
    return e === `v` ? er(t) : tr(t);
  },
  ir = function (e, t) {
    return e === `h` && t === `rtl` ? -1 : 1;
  },
  ar = function (e, t, n, r, i) {
    var a = ir(e, window.getComputedStyle(t).direction),
      o = a * r,
      s = n.target,
      c = t.contains(s),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      if (!s) break;
      var p = rr(e, s),
        m = p[0],
        h = p[1] - p[2] - a * m;
      (m || h) && nr(e, s) && ((d += h), (f += m));
      var g = s.parentNode;
      s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
    } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
    return (
      ((u && ((i && Math.abs(d) < 1) || (!i && o > d))) ||
        (!u && ((i && Math.abs(f) < 1) || (!i && -o > f)))) &&
        (l = !0),
      l
    );
  },
  or = function (e) {
    return `changedTouches` in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  sr = function (e) {
    return [e.deltaX, e.deltaY];
  },
  cr = function (e) {
    return e && `current` in e ? e.current : e;
  },
  lr = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  ur = function (e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
  },
  dr = 0,
  fr = [];
function pr(e) {
  var t = u.useRef([]),
    n = u.useRef([0, 0]),
    r = u.useRef(),
    i = u.useState(dr++)[0],
    a = u.useState(Fn)[0],
    o = u.useRef(e);
  u.useEffect(
    function () {
      o.current = e;
    },
    [e],
  ),
    u.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add(`block-interactivity-${i}`);
          var t = un([e.lockRef.current], (e.shards || []).map(cr), !0).filter(
            Boolean,
          );
          return (
            t.forEach(function (e) {
              return e.classList.add(`allow-interactivity-${i}`);
            }),
            function () {
              document.body.classList.remove(`block-interactivity-${i}`),
                t.forEach(function (e) {
                  return e.classList.remove(`allow-interactivity-${i}`);
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var s = u.useCallback(function (e, t) {
      if (
        (`touches` in e && e.touches.length === 2) ||
        (e.type === `wheel` && e.ctrlKey)
      )
        return !o.current.allowPinchZoom;
      var i = or(e),
        a = n.current,
        s = `deltaX` in e ? e.deltaX : a[0] - i[0],
        c = `deltaY` in e ? e.deltaY : a[1] - i[1],
        l,
        u = e.target,
        d = Math.abs(s) > Math.abs(c) ? `h` : `v`;
      if (`touches` in e && d === `h` && u.type === `range`) return !1;
      var f = window.getSelection(),
        p = f && f.anchorNode;
      if (p && (p === u || p.contains(u))) return !1;
      var m = $n(d, u);
      if (!m) return !0;
      if ((m ? (l = d) : ((l = d === `v` ? `h` : `v`), (m = $n(d, u))), !m))
        return !1;
      if (
        (!r.current && `changedTouches` in e && (s || c) && (r.current = l), !l)
      )
        return !0;
      var h = r.current || l;
      return ar(h, t, e, h === `h` ? s : c, !0);
    }, []),
    c = u.useCallback(function (e) {
      var n = e;
      if (!(!fr.length || fr[fr.length - 1] !== a)) {
        var r = `deltaY` in n ? sr(n) : or(n),
          i = t.current.filter(function (e) {
            return (
              e.name === n.type &&
              (e.target === n.target || n.target === e.shadowParent) &&
              lr(e.delta, r)
            );
          })[0];
        if (i && i.should) {
          n.cancelable && n.preventDefault();
          return;
        }
        if (!i) {
          var c = (o.current.shards || [])
            .map(cr)
            .filter(Boolean)
            .filter(function (e) {
              return e.contains(n.target);
            });
          (c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) &&
            n.cancelable &&
            n.preventDefault();
        }
      }
    }, []),
    l = u.useCallback(function (e, n, r, i) {
      var a = { name: e, delta: n, target: r, should: i, shadowParent: mr(r) };
      t.current.push(a),
        setTimeout(function () {
          t.current = t.current.filter(function (e) {
            return e !== a;
          });
        }, 1);
    }, []),
    d = u.useCallback(function (e) {
      (n.current = or(e)), (r.current = void 0);
    }, []),
    f = u.useCallback(function (t) {
      l(t.type, sr(t), t.target, s(t, e.lockRef.current));
    }, []),
    p = u.useCallback(function (t) {
      l(t.type, or(t), t.target, s(t, e.lockRef.current));
    }, []);
  u.useEffect(function () {
    return (
      fr.push(a),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: p,
      }),
      document.addEventListener(`wheel`, c, Jn),
      document.addEventListener(`touchmove`, c, Jn),
      document.addEventListener(`touchstart`, d, Jn),
      function () {
        (fr = fr.filter(function (e) {
          return e !== a;
        })),
          document.removeEventListener(`wheel`, c, Jn),
          document.removeEventListener(`touchmove`, c, Jn),
          document.removeEventListener(`touchstart`, d, Jn);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    h = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    h ? u.createElement(a, { styles: ur(i) }) : null,
    m
      ? u.createElement(Gn, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function mr(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
var hr = wn(Tn, pr),
  gr = u.forwardRef(function (e, t) {
    return u.createElement(Dn, R({}, e, { ref: t, sideCar: hr }));
  });
gr.classNames = Dn.classNames;
var _r = function (e) {
    return typeof document > `u`
      ? null
      : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
  },
  vr = new WeakMap(),
  yr = new WeakMap(),
  br = {},
  xr = 0,
  Sr = function (e) {
    return e && (e.host || Sr(e.parentNode));
  },
  Cr = function (e, t) {
    return t
      .map(function (t) {
        if (e.contains(t)) return t;
        var n = Sr(t);
        return n && e.contains(n)
          ? n
          : (console.error(
              `aria-hidden`,
              t,
              `in not contained inside`,
              e,
              `. Doing nothing`,
            ),
            null);
      })
      .filter(function (e) {
        return !!e;
      });
  },
  wr = function (e, t, n, r) {
    var i = Cr(t, Array.isArray(e) ? e : [e]);
    br[n] || (br[n] = new WeakMap());
    var a = br[n],
      o = [],
      s = new Set(),
      c = new Set(i),
      l = function (e) {
        !e || s.has(e) || (s.add(e), l(e.parentNode));
      };
    i.forEach(l);
    var u = function (e) {
      !e ||
        c.has(e) ||
        Array.prototype.forEach.call(e.children, function (e) {
          if (s.has(e)) u(e);
          else
            try {
              var t = e.getAttribute(r),
                i = t !== null && t !== `false`,
                c = (vr.get(e) || 0) + 1,
                l = (a.get(e) || 0) + 1;
              vr.set(e, c),
                a.set(e, l),
                o.push(e),
                c === 1 && i && yr.set(e, !0),
                l === 1 && e.setAttribute(n, `true`),
                i || e.setAttribute(r, `true`);
            } catch (t) {
              console.error(`aria-hidden: cannot operate on `, e, t);
            }
        });
    };
    return (
      u(t),
      s.clear(),
      xr++,
      function () {
        o.forEach(function (e) {
          var t = vr.get(e) - 1,
            i = a.get(e) - 1;
          vr.set(e, t),
            a.set(e, i),
            t || (yr.has(e) || e.removeAttribute(r), yr.delete(e)),
            i || e.removeAttribute(n);
        }),
          xr--,
          xr ||
            ((vr = new WeakMap()),
            (vr = new WeakMap()),
            (yr = new WeakMap()),
            (br = {}));
      }
    );
  },
  Tr = function (e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || _r(e);
    return i
      ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))),
        wr(r, i, n, `aria-hidden`))
      : function () {
          return null;
        };
  },
  Er = Object.defineProperty,
  z = (e, t) => Er(e, `name`, { value: t, configurable: !0 });
function Dr(e) {
  let t = u.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    Fr(r) && typeof zr == `function` && (r = zr(r._payload)),
      u.Children.forEach(r, (e) => {
        if (Nr(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          Fr(n) && typeof zr == `function` && (n = zr(n._payload)),
            (a = Ar(t, n)),
            s.push(a?.props?.children);
        } else s.push(e);
      }),
      a
        ? (a = u.cloneElement(a, void 0, s))
        : !o && u.Children.count(r) === 1 && u.isValidElement(r) && (a = r);
    let c = a ? Mr(a) : void 0,
      l = dt(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? Rr(e) : Lr(e));
      return r;
    }
    let d = jr(i, a.props ?? {});
    return a.type !== u.Fragment && (d.ref = n ? l : c), u.cloneElement(a, d);
  });
  return (t.displayName = `${e}.Slot`), t;
}
z(Dr, `createSlot`);
var Or = Symbol.for(`radix.slottable`);
function kr(e) {
  let t = z(
    (e) => (`child` in e ? e.children(e.child) : e.children),
    `Slottable`,
  );
  return (t.displayName = `${e}.Slottable`), (t.__radixId = Or), t;
}
z(kr, `createSlottable`);
var Ar = z((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return u.isValidElement(t)
      ? u.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return u.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function jr(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return i(...e), t;
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
z(jr, `mergeProps`);
function Mr(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
z(Mr, `getElementRef`);
function Nr(e) {
  return (
    u.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === Or
  );
}
z(Nr, `isSlottable`);
var Pr = Symbol.for(`react.lazy`);
function Fr(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === Pr &&
    `_payload` in e &&
    Ir(e._payload)
  );
}
z(Fr, `isLazyComponent`);
function Ir(e) {
  return typeof e == `object` && !!e && `then` in e;
}
z(Ir, `isPromiseLike`);
var Lr = z(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`,
  ),
  Rr = z(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`,
  ),
  zr = u.use,
  Br = Object.defineProperty,
  B = (e, t) => Br(e, `name`, { value: t, configurable: !0 }),
  Vr = `Dialog`,
  [Hr, Ur] = we(Vr),
  [Wr, V] = Hr(Vr),
  Gr = B((e) => {
    let {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        modal: o = !0,
      } = e,
      s = u.useRef(null),
      c = u.useRef(null),
      [l, d] = Ue({ prop: r, defaultProp: i ?? !1, onChange: a, caller: Vr }),
      [f, p] = u.useState(0),
      [m, h] = u.useState(0);
    return (0, M.jsx)(Wr, {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: ot(),
      titleId: ot(),
      descriptionId: ot(),
      titlePresent: f > 0,
      descriptionPresent: m > 0,
      setTitleCount: p,
      setDescriptionCount: h,
      open: l,
      onOpenChange: d,
      onOpenToggle: u.useCallback(() => d((e) => !e), [d]),
      modal: o,
      children: n,
    });
  }, `Dialog`),
  Kr = `DialogPortal`,
  [qr, Jr] = Hr(Kr, { forceMount: void 0 }),
  Yr = B((e) => {
    let { __scopeDialog: t, forceMount: n, children: r, container: i } = e,
      a = V(Kr, t);
    return (0, M.jsx)(qr, {
      scope: t,
      forceMount: n,
      children: u.Children.map(r, (e) =>
        (0, M.jsx)(Xe, {
          present: n || a.open,
          children: (0, M.jsx)(en, { asChild: !0, container: i, children: e }),
        }),
      ),
    });
  }, `DialogPortal`),
  Xr = `DialogOverlay`,
  Zr = u.forwardRef(
    B(function (e, t) {
      let n = Jr(Xr, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = V(Xr, e.__scopeDialog);
      return a.modal
        ? (0, M.jsx)(Xe, {
            present: r || a.open,
            children: (0, M.jsx)($r, { ...i, ref: t }),
          })
        : null;
    }, `DialogOverlay`),
  ),
  Qr = Dr(`DialogOverlay.RemoveScroll`),
  $r = u.forwardRef(
    B(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = V(Xr, n),
        a = dt(t, Dt());
      return (0, M.jsx)(gr, {
        as: Qr,
        allowPinchZoom: !0,
        shards: [i.contentRef],
        children: (0, M.jsx)(be.div, {
          "data-state": di(i.open),
          ...r,
          ref: a,
          style: { pointerEvents: `auto`, ...r.style },
        }),
      });
    }, `DialogOverlayImpl`),
  ),
  ei = `DialogContent`,
  ti = u.forwardRef(
    B(function (e, t) {
      let n = Jr(ei, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = V(ei, e.__scopeDialog);
      return (0, M.jsx)(Xe, {
        present: r || a.open,
        children: a.modal
          ? (0, M.jsx)(ni, { ...i, ref: t })
          : (0, M.jsx)(ri, { ...i, ref: t }),
      });
    }, `DialogContent`),
  ),
  ni = u.forwardRef(
    B(function (e, t) {
      let n = V(ei, e.__scopeDialog),
        r = u.useRef(null),
        i = dt(t, n.contentRef, r);
      return (
        u.useEffect(() => {
          let e = r.current;
          if (e) return Tr(e);
        }, []),
        (0, M.jsx)(ii, {
          ...e,
          ref: i,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          onCloseAutoFocus: ke(e.onCloseAutoFocus, (e) => {
            e.preventDefault(), n.triggerRef.current?.focus();
          }),
          onPointerDownOutside: ke(e.onPointerDownOutside, (e) => {
            let t = e.detail.originalEvent,
              n = t.button === 0 && t.ctrlKey === !0;
            (t.button === 2 || n) && e.preventDefault();
          }),
          onFocusOutside: ke(e.onFocusOutside, (e) => e.preventDefault()),
        })
      );
    }, `DialogContentModal`),
  ),
  ri = u.forwardRef(
    B(function (e, t) {
      let n = V(ei, e.__scopeDialog),
        r = u.useRef(!1),
        i = u.useRef(!1);
      return (0, M.jsx)(ii, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          e.onCloseAutoFocus?.(t),
            t.defaultPrevented ||
              (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
            (r.current = !1),
            (i.current = !1);
        },
        onInteractOutside: (t) => {
          e.onInteractOutside?.(t),
            t.defaultPrevented ||
              ((r.current = !0),
              t.detail.originalEvent.type === `pointerdown` &&
                (i.current = !0));
          let a = t.target;
          n.triggerRef.current?.contains(a) && t.preventDefault(),
            t.detail.originalEvent.type === `focusin` &&
              i.current &&
              t.preventDefault();
        },
      });
    }, `DialogContentNonModal`),
  ),
  ii = u.forwardRef(
    B(function (e, t) {
      let {
          __scopeDialog: n,
          trapFocus: r,
          onOpenAutoFocus: i,
          onCloseAutoFocus: a,
          ...o
        } = e,
        s = V(ei, n);
      return (
        sn(),
        (0, M.jsx)(M.Fragment, {
          children: (0, M.jsx)(Ht, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            children: (0, M.jsx)(Et, {
              role: `dialog`,
              id: s.contentId,
              "aria-describedby": s.descriptionPresent
                ? s.descriptionId
                : void 0,
              "aria-labelledby": s.titlePresent ? s.titleId : void 0,
              "data-state": di(s.open),
              ...o,
              ref: t,
              deferPointerDownOutside: !0,
              onDismiss: () => s.onOpenChange(!1),
            }),
          }),
        })
      );
    }, `DialogContentImpl`),
  ),
  ai = `DialogTitle`,
  oi = u.forwardRef(
    B(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = V(ai, n),
        { setTitleCount: a } = i;
      return (
        Pe(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, M.jsx)(be.h2, { id: i.titleId, ...r, ref: t })
      );
    }, `DialogTitle`),
  ),
  si = `DialogDescription`,
  ci = u.forwardRef(
    B(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = V(si, n),
        { setDescriptionCount: a } = i;
      return (
        Pe(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, M.jsx)(be.p, { id: i.descriptionId, ...r, ref: t })
      );
    }, `DialogDescription`),
  ),
  li = `DialogClose`,
  ui = u.forwardRef(
    B(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = V(li, n);
      return (0, M.jsx)(be.button, {
        type: `button`,
        ...r,
        ref: t,
        onClick: ke(e.onClick, () => i.onOpenChange(!1)),
      });
    }, `DialogClose`),
  );
function di(e) {
  return e ? `open` : `closed`;
}
B(di, `getState`);
var fi = Object.defineProperty,
  pi = (e, t) => fi(e, `name`, { value: t, configurable: !0 });
function mi(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
pi(mi, `setRef`);
function hi(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = mi(e, t);
        return !n && typeof r == `function` && (n = !0), r;
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : mi(e[t], null);
        }
      };
  };
}
pi(hi, `composeRefs`);
function gi(...e) {
  return u.useCallback(hi(...e), e);
}
pi(gi, `useComposedRefs`);
var _i = Object.defineProperty,
  H = (e, t) => _i(e, `name`, { value: t, configurable: !0 });
function vi(e) {
  let t = u.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    Di(r) && typeof ji == `function` && (r = ji(r._payload)),
      u.Children.forEach(r, (e) => {
        if (Ti(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          Di(n) && typeof ji == `function` && (n = ji(n._payload)),
            (a = Si(t, n)),
            s.push(a?.props?.children);
        } else s.push(e);
      }),
      a
        ? (a = u.cloneElement(a, void 0, s))
        : !o && u.Children.count(r) === 1 && u.isValidElement(r) && (a = r);
    let c = a ? wi(a) : void 0,
      l = gi(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? Ai(e) : ki(e));
      return r;
    }
    let d = Ci(i, a.props ?? {});
    return a.type !== u.Fragment && (d.ref = n ? l : c), u.cloneElement(a, d);
  });
  return (t.displayName = `${e}.Slot`), t;
}
H(vi, `createSlot`);
var yi = vi(`Slot`),
  bi = Symbol.for(`radix.slottable`);
function xi(e) {
  let t = H(
    (e) => (`child` in e ? e.children(e.child) : e.children),
    `Slottable`,
  );
  return (t.displayName = `${e}.Slottable`), (t.__radixId = bi), t;
}
H(xi, `createSlottable`);
var Si = H((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return u.isValidElement(t)
      ? u.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return u.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function Ci(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return i(...e), t;
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
H(Ci, `mergeProps`);
function wi(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
H(wi, `getElementRef`);
function Ti(e) {
  return (
    u.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === bi
  );
}
H(Ti, `isSlottable`);
var Ei = Symbol.for(`react.lazy`);
function Di(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === Ei &&
    `_payload` in e &&
    Oi(e._payload)
  );
}
H(Di, `isLazyComponent`);
function Oi(e) {
  return typeof e == `object` && !!e && `then` in e;
}
H(Oi, `isPromiseLike`);
var ki = H(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`,
  ),
  Ai = H(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`,
  ),
  ji = u.use,
  Mi = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  Ni = (e, t) => ({ classGroupId: e, validator: t }),
  Pi = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  Fi = `-`,
  Ii = [],
  Li = `arbitrary..`,
  Ri = (e) => {
    let t = Vi(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Bi(e);
        let n = e.split(Fi);
        return zi(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? Mi(i, t) : t) : i || Ii;
        }
        return n[e] || Ii;
      },
    };
  },
  zi = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = zi(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(Fi) : e.slice(t).join(Fi),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Bi = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? Li + r : void 0;
        })(),
  Vi = (e) => {
    let { theme: t, classGroups: n } = e;
    return Hi(n, t);
  },
  Hi = (e, t) => {
    let n = Pi();
    for (let r in e) {
      let i = e[r];
      Ui(i, n, r, t);
    }
    return n;
  },
  Ui = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      Wi(i, t, n, r);
    }
  },
  Wi = (e, t, n, r) => {
    if (typeof e == `string`) {
      Gi(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      Ki(e, t, n, r);
      return;
    }
    qi(e, t, n, r);
  },
  Gi = (e, t, n) => {
    let r = e === `` ? t : Ji(t, e);
    r.classGroupId = n;
  },
  Ki = (e, t, n, r) => {
    if (Yi(e)) {
      Ui(e(r), t, n, r);
      return;
    }
    t.validators === null && (t.validators = []), t.validators.push(Ni(n, e));
  },
  qi = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      Ui(o, Ji(t, a), n, r);
    }
  },
  Ji = (e, t) => {
    let n = e,
      r = t.split(Fi),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      i || ((i = Pi()), n.nextPart.set(t, i)), (n = i);
    }
    return n;
  },
  Yi = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  Xi = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        (n[i] = a), t++, t > e && ((t = 0), (r = n), (n = Object.create(null)));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return i(e, t), t;
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Zi = `!`,
  Qi = `:`,
  $i = [],
  ea = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  ta = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Qi) {
              t.push(e.slice(i, s)), (i = s + 1);
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
              ? n--
              : o === `(`
                ? r++
                : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Zi)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Zi) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return ea(t, l, c, u);
      };
    if (t) {
      let e = t + Qi,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : ea($i, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  na = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return r.length > 0 && (r.sort(), n.push(...r)), n;
      }
    );
  },
  ra = (e) => ({
    cache: Xi(e.cacheSize),
    parseClassName: ta(e),
    sortModifiers: na(e),
    postfixLookupClassGroupIds: ia(e),
    ...Ri(e),
  }),
  ia = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  aa = /\s+/,
  oa = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(aa),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        v = f ? _ + Zi : _,
        ee = v + g;
      if (s.indexOf(ee) > -1) continue;
      s.push(ee);
      let y = i(g, h);
      for (let e = 0; e < y.length; ++e) {
        let t = y[e];
        s.push(v + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  sa = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length; )
      (n = e[t++]) && (r = ca(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  ca = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = ca(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  la = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = ra(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = oa(e, n);
        return i(e, a), a;
      };
    return (a = o), (...e) => a(sa(...e));
  },
  ua = [],
  U = (e) => {
    let t = (t) => t[e] || ua;
    return (t.isThemeGetter = !0), t;
  },
  da = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  fa = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  pa = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  ma = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ha =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  ga = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  _a = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  va =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  W = (e) => pa.test(e),
  G = (e) => !!e && !Number.isNaN(Number(e)),
  K = (e) => !!e && Number.isInteger(Number(e)),
  ya = (e) => e.endsWith(`%`) && G(e.slice(0, -1)),
  q = (e) => ma.test(e),
  ba = () => !0,
  xa = (e) => ha.test(e) && !ga.test(e),
  Sa = () => !1,
  Ca = (e) => _a.test(e),
  wa = (e) => va.test(e),
  Ta = (e) => !J(e) && !Y(e),
  Ea = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  Da = (e) => X(e, Ga, Sa),
  J = (e) => da.test(e),
  Oa = (e) => X(e, Ka, xa),
  ka = (e) => X(e, qa, G),
  Aa = (e) => X(e, Ya, ba),
  ja = (e) => X(e, Ja, Sa),
  Ma = (e) => X(e, Ua, Sa),
  Na = (e) => X(e, Wa, wa),
  Pa = (e) => X(e, Xa, Ca),
  Y = (e) => fa.test(e),
  Fa = (e) => Ha(e, Ka),
  Ia = (e) => Ha(e, Ja),
  La = (e) => Ha(e, Ua),
  Ra = (e) => Ha(e, Ga),
  za = (e) => Ha(e, Wa),
  Ba = (e) => Ha(e, Xa, !0),
  Va = (e) => Ha(e, Ya, !0),
  X = (e, t, n) => {
    let r = da.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Ha = (e, t, n = !1) => {
    let r = fa.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  Ua = (e) => e === `position` || e === `percentage`,
  Wa = (e) => e === `image` || e === `url`,
  Ga = (e) => e === `length` || e === `size` || e === `bg-size`,
  Ka = (e) => e === `length`,
  qa = (e) => e === `number`,
  Ja = (e) => e === `family-name`,
  Ya = (e) => e === `number` || e === `weight`,
  Xa = (e) => e === `shadow`,
  Za = la(() => {
    let e = U(`color`),
      t = U(`font`),
      n = U(`text`),
      r = U(`font-weight`),
      i = U(`tracking`),
      a = U(`leading`),
      o = U(`breakpoint`),
      s = U(`container`),
      c = U(`spacing`),
      l = U(`radius`),
      u = U(`shadow`),
      d = U(`inset-shadow`),
      f = U(`text-shadow`),
      p = U(`drop-shadow`),
      m = U(`blur`),
      h = U(`perspective`),
      g = U(`aspect`),
      _ = U(`ease`),
      v = U(`animate`),
      ee = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      y = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      te = () => [...y(), Y, J],
      b = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      ne = () => [`auto`, `contain`, `none`],
      x = () => [Y, J, c],
      S = () => [W, `full`, `auto`, ...x()],
      re = () => [K, `none`, `subgrid`, Y, J],
      ie = () => [`auto`, { span: [`full`, K, Y, J] }, K, Y, J],
      ae = () => [K, `auto`, Y, J],
      oe = () => [`auto`, `min`, `max`, `fr`, Y, J],
      se = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      C = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      w = () => [`auto`, ...x()],
      T = () => [
        W,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...x(),
      ],
      ce = () => [
        W,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...x(),
      ],
      E = () => [
        W,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...x(),
      ],
      D = () => [e, Y, J],
      le = () => [...y(), La, Ma, { position: [Y, J] }],
      ue = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      de = () => [`auto`, `cover`, `contain`, Ra, Da, { size: [Y, J] }],
      fe = () => [ya, Fa, Oa],
      O = () => [``, `none`, `full`, l, Y, J],
      k = () => [``, G, Fa, Oa],
      pe = () => [`solid`, `dashed`, `dotted`, `double`],
      me = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      A = () => [G, ya, La, Ma],
      he = () => [``, `none`, m, Y, J],
      ge = () => [`none`, G, Y, J],
      j = () => [`none`, G, Y, J],
      _e = () => [G, Y, J],
      M = () => [W, `full`, ...x()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [q],
        breakpoint: [q],
        color: [ba],
        container: [q],
        "drop-shadow": [q],
        ease: [`in`, `out`, `in-out`],
        font: [Ta],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [q],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [q],
        shadow: [q],
        spacing: [`px`, G],
        text: [q],
        "text-shadow": [q],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, W, J, Y, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, Y, J] }],
        "container-named": [Ea],
        columns: [{ columns: [G, J, Y, s] }],
        "break-after": [{ "break-after": ee() }],
        "break-before": [{ "break-before": ee() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: te() }],
        overflow: [{ overflow: b() }],
        "overflow-x": [{ "overflow-x": b() }],
        "overflow-y": [{ "overflow-y": b() }],
        overscroll: [{ overscroll: ne() }],
        "overscroll-x": [{ "overscroll-x": ne() }],
        "overscroll-y": [{ "overscroll-y": ne() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: S() }],
        "inset-x": [{ "inset-x": S() }],
        "inset-y": [{ "inset-y": S() }],
        start: [{ "inset-s": S(), start: S() }],
        end: [{ "inset-e": S(), end: S() }],
        "inset-bs": [{ "inset-bs": S() }],
        "inset-be": [{ "inset-be": S() }],
        top: [{ top: S() }],
        right: [{ right: S() }],
        bottom: [{ bottom: S() }],
        left: [{ left: S() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [K, `auto`, Y, J] }],
        basis: [{ basis: [W, `full`, `auto`, s, ...x()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [G, W, `auto`, `initial`, `none`, J] }],
        grow: [{ grow: [``, G, Y, J] }],
        shrink: [{ shrink: [``, G, Y, J] }],
        order: [{ order: [K, `first`, `last`, `none`, Y, J] }],
        "grid-cols": [{ "grid-cols": re() }],
        "col-start-end": [{ col: ie() }],
        "col-start": [{ "col-start": ae() }],
        "col-end": [{ "col-end": ae() }],
        "grid-rows": [{ "grid-rows": re() }],
        "row-start-end": [{ row: ie() }],
        "row-start": [{ "row-start": ae() }],
        "row-end": [{ "row-end": ae() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": oe() }],
        "auto-rows": [{ "auto-rows": oe() }],
        gap: [{ gap: x() }],
        "gap-x": [{ "gap-x": x() }],
        "gap-y": [{ "gap-y": x() }],
        "justify-content": [{ justify: [...se(), `normal`] }],
        "justify-items": [{ "justify-items": [...C(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...C()] }],
        "align-content": [{ content: [`normal`, ...se()] }],
        "align-items": [{ items: [...C(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...C(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": se() }],
        "place-items": [{ "place-items": [...C(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...C()] }],
        p: [{ p: x() }],
        px: [{ px: x() }],
        py: [{ py: x() }],
        ps: [{ ps: x() }],
        pe: [{ pe: x() }],
        pbs: [{ pbs: x() }],
        pbe: [{ pbe: x() }],
        pt: [{ pt: x() }],
        pr: [{ pr: x() }],
        pb: [{ pb: x() }],
        pl: [{ pl: x() }],
        m: [{ m: w() }],
        mx: [{ mx: w() }],
        my: [{ my: w() }],
        ms: [{ ms: w() }],
        me: [{ me: w() }],
        mbs: [{ mbs: w() }],
        mbe: [{ mbe: w() }],
        mt: [{ mt: w() }],
        mr: [{ mr: w() }],
        mb: [{ mb: w() }],
        ml: [{ ml: w() }],
        "space-x": [{ "space-x": x() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": x() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: T() }],
        "inline-size": [{ inline: [`auto`, ...ce()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...ce()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...ce()] }],
        "block-size": [{ block: [`auto`, ...E()] }],
        "min-block-size": [{ "min-block": [`auto`, ...E()] }],
        "max-block-size": [{ "max-block": [`none`, ...E()] }],
        w: [{ w: [s, `screen`, ...T()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...T()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...T()] },
        ],
        h: [{ h: [`screen`, `lh`, ...T()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...T()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...T()] }],
        "font-size": [{ text: [`base`, n, Fa, Oa] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Va, Aa] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              ya,
              J,
            ],
          },
        ],
        "font-family": [{ font: [Ia, ja, t] }],
        "font-features": [{ "font-features": [J] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, Y, J] }],
        "line-clamp": [{ "line-clamp": [G, `none`, Y, ka] }],
        leading: [{ leading: [a, ...x()] }],
        "list-image": [{ "list-image": [`none`, Y, J] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, Y, J] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: D() }],
        "text-color": [{ text: D() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...pe(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [G, `from-font`, `auto`, Y, Oa] },
        ],
        "text-decoration-color": [{ decoration: D() }],
        "underline-offset": [{ "underline-offset": [G, `auto`, Y, J] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: x() }],
        "tab-size": [{ tab: [K, Y, J] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              Y,
              J,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, Y, J] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: le() }],
        "bg-repeat": [{ bg: ue() }],
        "bg-size": [{ bg: de() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  K,
                  Y,
                  J,
                ],
                radial: [``, Y, J],
                conic: [K, Y, J],
              },
              za,
              Na,
            ],
          },
        ],
        "bg-color": [{ bg: D() }],
        "gradient-from-pos": [{ from: fe() }],
        "gradient-via-pos": [{ via: fe() }],
        "gradient-to-pos": [{ to: fe() }],
        "gradient-from": [{ from: D() }],
        "gradient-via": [{ via: D() }],
        "gradient-to": [{ to: D() }],
        rounded: [{ rounded: O() }],
        "rounded-s": [{ "rounded-s": O() }],
        "rounded-e": [{ "rounded-e": O() }],
        "rounded-t": [{ "rounded-t": O() }],
        "rounded-r": [{ "rounded-r": O() }],
        "rounded-b": [{ "rounded-b": O() }],
        "rounded-l": [{ "rounded-l": O() }],
        "rounded-ss": [{ "rounded-ss": O() }],
        "rounded-se": [{ "rounded-se": O() }],
        "rounded-ee": [{ "rounded-ee": O() }],
        "rounded-es": [{ "rounded-es": O() }],
        "rounded-tl": [{ "rounded-tl": O() }],
        "rounded-tr": [{ "rounded-tr": O() }],
        "rounded-br": [{ "rounded-br": O() }],
        "rounded-bl": [{ "rounded-bl": O() }],
        "border-w": [{ border: k() }],
        "border-w-x": [{ "border-x": k() }],
        "border-w-y": [{ "border-y": k() }],
        "border-w-s": [{ "border-s": k() }],
        "border-w-e": [{ "border-e": k() }],
        "border-w-bs": [{ "border-bs": k() }],
        "border-w-be": [{ "border-be": k() }],
        "border-w-t": [{ "border-t": k() }],
        "border-w-r": [{ "border-r": k() }],
        "border-w-b": [{ "border-b": k() }],
        "border-w-l": [{ "border-l": k() }],
        "divide-x": [{ "divide-x": k() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": k() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...pe(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...pe(), `hidden`, `none`] }],
        "border-color": [{ border: D() }],
        "border-color-x": [{ "border-x": D() }],
        "border-color-y": [{ "border-y": D() }],
        "border-color-s": [{ "border-s": D() }],
        "border-color-e": [{ "border-e": D() }],
        "border-color-bs": [{ "border-bs": D() }],
        "border-color-be": [{ "border-be": D() }],
        "border-color-t": [{ "border-t": D() }],
        "border-color-r": [{ "border-r": D() }],
        "border-color-b": [{ "border-b": D() }],
        "border-color-l": [{ "border-l": D() }],
        "divide-color": [{ divide: D() }],
        "outline-style": [{ outline: [...pe(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [G, Y, J] }],
        "outline-w": [{ outline: [``, G, Fa, Oa] }],
        "outline-color": [{ outline: D() }],
        shadow: [{ shadow: [``, `none`, u, Ba, Pa] }],
        "shadow-color": [{ shadow: D() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Ba, Pa] }],
        "inset-shadow-color": [{ "inset-shadow": D() }],
        "ring-w": [{ ring: k() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: D() }],
        "ring-offset-w": [{ "ring-offset": [G, Oa] }],
        "ring-offset-color": [{ "ring-offset": D() }],
        "inset-ring-w": [{ "inset-ring": k() }],
        "inset-ring-color": [{ "inset-ring": D() }],
        "text-shadow": [{ "text-shadow": [`none`, f, Ba, Pa] }],
        "text-shadow-color": [{ "text-shadow": D() }],
        opacity: [{ opacity: [G, Y, J] }],
        "mix-blend": [
          { "mix-blend": [...me(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": me() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [G] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": A() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": A() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": D() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": D() }],
        "mask-image-t-from-pos": [{ "mask-t-from": A() }],
        "mask-image-t-to-pos": [{ "mask-t-to": A() }],
        "mask-image-t-from-color": [{ "mask-t-from": D() }],
        "mask-image-t-to-color": [{ "mask-t-to": D() }],
        "mask-image-r-from-pos": [{ "mask-r-from": A() }],
        "mask-image-r-to-pos": [{ "mask-r-to": A() }],
        "mask-image-r-from-color": [{ "mask-r-from": D() }],
        "mask-image-r-to-color": [{ "mask-r-to": D() }],
        "mask-image-b-from-pos": [{ "mask-b-from": A() }],
        "mask-image-b-to-pos": [{ "mask-b-to": A() }],
        "mask-image-b-from-color": [{ "mask-b-from": D() }],
        "mask-image-b-to-color": [{ "mask-b-to": D() }],
        "mask-image-l-from-pos": [{ "mask-l-from": A() }],
        "mask-image-l-to-pos": [{ "mask-l-to": A() }],
        "mask-image-l-from-color": [{ "mask-l-from": D() }],
        "mask-image-l-to-color": [{ "mask-l-to": D() }],
        "mask-image-x-from-pos": [{ "mask-x-from": A() }],
        "mask-image-x-to-pos": [{ "mask-x-to": A() }],
        "mask-image-x-from-color": [{ "mask-x-from": D() }],
        "mask-image-x-to-color": [{ "mask-x-to": D() }],
        "mask-image-y-from-pos": [{ "mask-y-from": A() }],
        "mask-image-y-to-pos": [{ "mask-y-to": A() }],
        "mask-image-y-from-color": [{ "mask-y-from": D() }],
        "mask-image-y-to-color": [{ "mask-y-to": D() }],
        "mask-image-radial": [{ "mask-radial": [Y, J] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": A() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": A() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": D() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": D() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": y() }],
        "mask-image-conic-pos": [{ "mask-conic": [G] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": A() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": A() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": D() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": D() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: le() }],
        "mask-repeat": [{ mask: ue() }],
        "mask-size": [{ mask: de() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, Y, J] }],
        filter: [{ filter: [``, `none`, Y, J] }],
        blur: [{ blur: he() }],
        brightness: [{ brightness: [G, Y, J] }],
        contrast: [{ contrast: [G, Y, J] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, Ba, Pa] }],
        "drop-shadow-color": [{ "drop-shadow": D() }],
        grayscale: [{ grayscale: [``, G, Y, J] }],
        "hue-rotate": [{ "hue-rotate": [G, Y, J] }],
        invert: [{ invert: [``, G, Y, J] }],
        saturate: [{ saturate: [G, Y, J] }],
        sepia: [{ sepia: [``, G, Y, J] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, Y, J] }],
        "backdrop-blur": [{ "backdrop-blur": he() }],
        "backdrop-brightness": [{ "backdrop-brightness": [G, Y, J] }],
        "backdrop-contrast": [{ "backdrop-contrast": [G, Y, J] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, G, Y, J] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [G, Y, J] }],
        "backdrop-invert": [{ "backdrop-invert": [``, G, Y, J] }],
        "backdrop-opacity": [{ "backdrop-opacity": [G, Y, J] }],
        "backdrop-saturate": [{ "backdrop-saturate": [G, Y, J] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, G, Y, J] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": x() }],
        "border-spacing-x": [{ "border-spacing-x": x() }],
        "border-spacing-y": [{ "border-spacing-y": x() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              Y,
              J,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [G, `initial`, Y, J] }],
        ease: [{ ease: [`linear`, `initial`, _, Y, J] }],
        delay: [{ delay: [G, Y, J] }],
        animate: [{ animate: [`none`, v, Y, J] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, Y, J] }],
        "perspective-origin": [{ "perspective-origin": te() }],
        rotate: [{ rotate: ge() }],
        "rotate-x": [{ "rotate-x": ge() }],
        "rotate-y": [{ "rotate-y": ge() }],
        "rotate-z": [{ "rotate-z": ge() }],
        scale: [{ scale: j() }],
        "scale-x": [{ "scale-x": j() }],
        "scale-y": [{ "scale-y": j() }],
        "scale-z": [{ "scale-z": j() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: _e() }],
        "skew-x": [{ "skew-x": _e() }],
        "skew-y": [{ "skew-y": _e() }],
        transform: [{ transform: [Y, J, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: te() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: M() }],
        "translate-x": [{ "translate-x": M() }],
        "translate-y": [{ "translate-y": M() }],
        "translate-z": [{ "translate-z": M() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [K, Y, J] }],
        accent: [{ accent: D() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: D() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              Y,
              J,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": D() }],
        "scrollbar-track-color": [{ "scrollbar-track": D() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": x() }],
        "scroll-mx": [{ "scroll-mx": x() }],
        "scroll-my": [{ "scroll-my": x() }],
        "scroll-ms": [{ "scroll-ms": x() }],
        "scroll-me": [{ "scroll-me": x() }],
        "scroll-mbs": [{ "scroll-mbs": x() }],
        "scroll-mbe": [{ "scroll-mbe": x() }],
        "scroll-mt": [{ "scroll-mt": x() }],
        "scroll-mr": [{ "scroll-mr": x() }],
        "scroll-mb": [{ "scroll-mb": x() }],
        "scroll-ml": [{ "scroll-ml": x() }],
        "scroll-p": [{ "scroll-p": x() }],
        "scroll-px": [{ "scroll-px": x() }],
        "scroll-py": [{ "scroll-py": x() }],
        "scroll-ps": [{ "scroll-ps": x() }],
        "scroll-pe": [{ "scroll-pe": x() }],
        "scroll-pbs": [{ "scroll-pbs": x() }],
        "scroll-pbe": [{ "scroll-pbe": x() }],
        "scroll-pt": [{ "scroll-pt": x() }],
        "scroll-pr": [{ "scroll-pr": x() }],
        "scroll-pb": [{ "scroll-pb": x() }],
        "scroll-pl": [{ "scroll-pl": x() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, Y, J] },
        ],
        fill: [{ fill: [`none`, ...D()] }],
        "stroke-w": [{ stroke: [G, Fa, Oa, ka] }],
        stroke: [{ stroke: [`none`, ...D()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function Qa(...e) {
  return Za(S(e));
}
var $a = ae(
  `inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
  {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground hover:bg-primary/90`,
        destructive: `bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40`,
        outline: `border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,
        secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80`,
        ghost: `hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`,
        link: `text-primary underline-offset-4 hover:underline`,
      },
      size: {
        default: `h-9 px-4 py-2 has-[>svg]:px-3`,
        xs: `h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3`,
        sm: `h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5`,
        lg: `h-10 rounded-md px-6 has-[>svg]:px-4`,
        icon: `size-9`,
        "icon-xs": `size-6 rounded-md [&_svg:not([class*='size-'])]:size-3`,
        "icon-sm": `size-8`,
        "icon-lg": `size-10`,
      },
    },
    defaultVariants: { variant: `default`, size: `default` },
  },
);
function Z({
  className: e,
  variant: t = `default`,
  size: n = `default`,
  asChild: r = !1,
  ...i
}) {
  return (0, M.jsx)(r ? yi : `button`, {
    "data-slot": `button`,
    "data-variant": t,
    "data-size": n,
    className: Qa($a({ variant: t, size: n, className: e })),
    ...i,
  });
}
function eo({ className: e, type: t, ...n }) {
  return (0, M.jsx)(`input`, {
    type: t,
    "data-slot": `input`,
    className: Qa(
      `h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30`,
      `focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50`,
      `aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40`,
      e,
    ),
    ...n,
  });
}
function to({ ...e }) {
  return (0, M.jsx)(Gr, { "data-slot": `dialog`, ...e });
}
function no({ ...e }) {
  return (0, M.jsx)(Yr, { "data-slot": `dialog-portal`, ...e });
}
function ro({ className: e, ...t }) {
  return (0, M.jsx)(Zr, {
    "data-slot": `dialog-overlay`,
    className: Qa(
      `fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0`,
      e,
    ),
    ...t,
  });
}
function io({ className: e, children: t, showCloseButton: n = !0, ...r }) {
  return (0, M.jsxs)(no, {
    "data-slot": `dialog-portal`,
    children: [
      (0, M.jsx)(ro, {}),
      (0, M.jsxs)(ti, {
        "data-slot": `dialog-content`,
        className: Qa(
          `fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg`,
          e,
        ),
        ...r,
        children: [
          t,
          n &&
            (0, M.jsxs)(ui, {
              "data-slot": `dialog-close`,
              className: `absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
              children: [
                (0, M.jsx)(ne, {}),
                (0, M.jsx)(`span`, { className: `sr-only`, children: `Close` }),
              ],
            }),
        ],
      }),
    ],
  });
}
function ao({ className: e, ...t }) {
  return (0, M.jsx)(`div`, {
    "data-slot": `dialog-header`,
    className: Qa(`flex flex-col gap-2 text-center sm:text-left`, e),
    ...t,
  });
}
function oo({ className: e, ...t }) {
  return (0, M.jsx)(oi, {
    "data-slot": `dialog-title`,
    className: Qa(`text-lg leading-none font-semibold`, e),
    ...t,
  });
}
function so({ className: e, ...t }) {
  return (0, M.jsx)(ci, {
    "data-slot": `dialog-description`,
    className: Qa(`text-sm text-muted-foreground`, e),
    ...t,
  });
}
var co = `919151188341`,
  lo = [
    {
      category: `Gift & Personal`,
      short: `Gift`,
      format: `Responsive personal website`,
      price: 799,
      accent: `peach`,
      names: [
        `Our Story Timeline`,
        `Digital Love Letter`,
        `Birthday Memory Lane`,
        `Anniversary Chapter`,
        `Best Friend Scrapbook`,
        `Proposal Reveal`,
        `Long-Distance Diary`,
        `Family Celebration`,
        `Wedding Countdown`,
        `Baby Welcome Page`,
        `Graduation Tribute`,
        `Thank You Story`,
        `Farewell Memory Book`,
        `Travel Memories`,
        `Pet Memory Page`,
        `Festival Greeting`,
        `Interactive Photo Album`,
        `Music Dedication`,
        `Open When Letters`,
        `Milestone Celebration`,
        `Personal Portfolio Gift`,
      ],
    },
    {
      category: `Websites & Landing Pages`,
      short: `Web`,
      format: `Responsive website template`,
      price: 1499,
      accent: `blue`,
      names: [
        `Modern Agency`,
        `Dental Clinic`,
        `Boutique Hotel`,
        `Restaurant Launch`,
        `Fitness Coach`,
        `Real Estate Listing`,
        `Salon & Spa`,
        `Local Consultant`,
        `Online Course`,
        `SaaS Product`,
        `Event Registration`,
        `Photography Studio`,
        `Architecture Firm`,
        `Interior Designer`,
        `Legal Practice`,
        `Travel Planner`,
        `Medical Specialist`,
        `Cafe & Bakery`,
        `Personal Portfolio`,
        `Product Waitlist`,
        `Nonprofit Campaign`,
      ],
    },
    {
      category: `Social Media`,
      short: `Social`,
      format: `Editable social media pack`,
      price: 499,
      accent: `violet`,
      names: [
        `Minimal Product Launch`,
        `Restaurant Menu Posts`,
        `Real Estate Carousel`,
        `Beauty Brand Stories`,
        `Fitness Challenge`,
        `Educational Carousel`,
        `Festival Campaign`,
        `Testimonial Series`,
        `New Collection Drop`,
        `Service Price List`,
        `Founder Story`,
        `Before & After`,
        `Event Countdown`,
        `Hiring Announcement`,
        `Podcast Promotion`,
        `Travel Highlights`,
        `Clinic Awareness`,
        `Sale Campaign`,
        `Quote Collection`,
        `YouTube Thumbnail Set`,
        `Monthly Content Kit`,
      ],
    },
    {
      category: `Forms & Business Documents`,
      short: `Forms`,
      format: `Editable document pack`,
      price: 399,
      accent: `green`,
      names: [
        `Client Onboarding`,
        `Project Brief`,
        `Website Discovery`,
        `Service Proposal`,
        `Professional Invoice`,
        `Quotation Pack`,
        `Feedback Survey`,
        `Event Registration`,
        `Job Application`,
        `Customer Intake`,
        `Consultation Form`,
        `Order Request`,
        `Brand Questionnaire`,
        `Content Planner`,
        `Meeting Notes`,
        `Expense Tracker`,
        `Vendor Registration`,
        `Consent Form`,
        `Service Agreement`,
        `Lead Qualification`,
        `Project Handover`,
      ],
    },
    {
      category: `PowerPoint & Pitch Decks`,
      short: `Slides`,
      format: `Editable presentation deck`,
      price: 899,
      accent: `amber`,
      names: [
        `Startup Investor Pitch`,
        `Agency Credentials`,
        `Sales Proposal`,
        `Company Profile`,
        `Product Launch`,
        `Marketing Strategy`,
        `Business Plan`,
        `Annual Review`,
        `Project Proposal`,
        `Real Estate Pitch`,
        `Healthcare Overview`,
        `Education Workshop`,
        `Restaurant Franchise`,
        `Personal Portfolio`,
        `Research Presentation`,
        `Training Deck`,
        `Event Sponsorship`,
        `Consulting Report`,
        `Case Study Deck`,
        `Creative Moodboard`,
        `Social Media Report`,
      ],
    },
  ],
  uo = lo.flatMap((e, t) =>
    e.names.map((n, r) => ({
      id: `WC-${String(t + 1).padStart(2, `0`)}-${String(r + 1).padStart(2, `0`)}`,
      name: n,
      category: e.category,
      short: e.short,
      format: e.format,
      price: e.price + (r % 3) * 100,
      accent: e.accent,
      variant: r % 4,
    })),
  );
function fo(e) {
  let t = Number(e.id.slice(-2)) - 1,
    n = ((Number(e.id.slice(3, 5)) - 1) * 67 + t * 19 + 8) % 360;
  return {
    "--cover-hue": n,
    "--cover-hue-two": (n + 34 + e.variant * 11) % 360,
  };
}
function po({ template: e }) {
  return e.category === `Gift & Personal`
    ? (0, M.jsxs)(`div`, {
        className: `cover-art cover-gift`,
        children: [
          (0, M.jsxs)(`div`, {
            className: `gift-orbit`,
            children: [
              (0, M.jsx)(`i`, {}),
              (0, M.jsx)(`i`, {}),
              (0, M.jsx)(`i`, {}),
            ],
          }),
          (0, M.jsx)(`small`, { children: `A DIGITAL KEEPSAKE` }),
          (0, M.jsx)(`strong`, { children: e.name }),
          (0, M.jsx)(`span`, { children: `Made for one special story` }),
        ],
      })
    : e.category === `Websites & Landing Pages`
      ? (0, M.jsxs)(`div`, {
          className: `cover-art cover-web`,
          children: [
            (0, M.jsxs)(`div`, {
              className: `mini-nav`,
              children: [
                (0, M.jsx)(`i`, {}),
                (0, M.jsx)(`i`, {}),
                (0, M.jsx)(`i`, {}),
                (0, M.jsx)(`span`, {}),
              ],
            }),
            (0, M.jsxs)(`div`, {
              className: `mini-web-copy`,
              children: [
                (0, M.jsx)(`small`, { children: e.name.split(` `)[0] }),
                (0, M.jsx)(`strong`, { children: mo(e.name).headline }),
                (0, M.jsx)(`i`, {}),
              ],
            }),
            (0, M.jsx)(`div`, {
              className: `mini-web-image`,
              children: (0, M.jsx)(`span`, {
                children: String(e.variant + 1).padStart(2, `0`),
              }),
            }),
          ],
        })
      : e.category === `Social Media`
        ? (0, M.jsxs)(`div`, {
            className: `cover-art cover-social`,
            children: [
              (0, M.jsxs)(`div`, {
                className: `social-stack`,
                children: [
                  (0, M.jsx)(`i`, {}),
                  (0, M.jsx)(`i`, {}),
                  (0, M.jsx)(`i`, {}),
                  (0, M.jsx)(`i`, {}),
                ],
              }),
              (0, M.jsxs)(`div`, {
                children: [
                  (0, M.jsx)(`small`, { children: `CONTENT SYSTEM` }),
                  (0, M.jsx)(`strong`, { children: e.name }),
                  (0, M.jsx)(`span`, {
                    children: `Posts · Carousels · Stories`,
                  }),
                ],
              }),
            ],
          })
        : e.category === `Forms & Business Documents`
          ? (0, M.jsxs)(`div`, {
              className: `cover-art cover-form`,
              children: [
                (0, M.jsxs)(`div`, {
                  className: `paper-sheet`,
                  children: [
                    (0, M.jsx)(`small`, { children: `THE WHITECRAFT` }),
                    (0, M.jsx)(`strong`, { children: e.name }),
                    (0, M.jsx)(`i`, {}),
                    (0, M.jsx)(`i`, {}),
                    (0, M.jsx)(`i`, {}),
                    (0, M.jsx)(`span`, {}),
                  ],
                }),
                (0, M.jsx)(`div`, {
                  className: `paper-tab`,
                  children: `EDITABLE`,
                }),
              ],
            })
          : (0, M.jsx)(`div`, {
              className: `cover-art cover-slides`,
              children: (0, M.jsxs)(`div`, {
                className: `slide-stack`,
                children: [
                  (0, M.jsx)(`i`, {}),
                  (0, M.jsx)(`i`, {}),
                  (0, M.jsxs)(`div`, {
                    children: [
                      (0, M.jsx)(`small`, { children: `01 / 06` }),
                      (0, M.jsx)(`strong`, { children: e.name }),
                      (0, M.jsx)(`span`, { children: vo(e.name).eyebrow }),
                    ],
                  }),
                ],
              }),
            });
}
function Q(e) {
  let t = e
    ? `Hello The Whitecraft team, I want to order the ${e.name} template (${e.id}). Please share the customisation options, final price and delivery time.`
    : `Hello The Whitecraft team, I want help choosing a template. Please guide me.`;
  return `https://wa.me/${co}?text=${encodeURIComponent(t)}`;
}
function mo(e) {
  return /Dental|Medical|Clinic|Healthcare/i.test(e)
    ? {
        eyebrow: `EXPERT CARE, CLEARLY PRESENTED`,
        headline: `Care that feels human. Expertise you can trust.`,
        support: `A calm, credible patient experience designed to answer questions and make booking easier.`,
        cta: `Book an appointment`,
        services: [`Specialist care`, `Patient guidance`, `Easy appointments`],
      }
    : /Hotel|Travel/i.test(e)
      ? {
          eyebrow: `A BETTER WAY TO ARRIVE`,
          headline: `Stay somewhere worth remembering.`,
          support: `Immersive destination storytelling with a direct path from inspiration to enquiry or booking.`,
          cta: `Plan your stay`,
          services: [`Signature stays`, `Local experiences`, `Direct booking`],
        }
      : /Restaurant|Cafe|Bakery/i.test(e)
        ? {
            eyebrow: `GOOD FOOD, BEAUTIFULLY SERVED`,
            headline: `A place people taste before they arrive.`,
            support: `A warm digital front door for menus, reservations, signature dishes and the atmosphere behind them.`,
            cta: `Reserve a table`,
            services: [`Seasonal menu`, `Private dining`, `Reservations`],
          }
        : /Fitness/i.test(e)
          ? {
              eyebrow: `BUILD YOUR STRONGER ROUTINE`,
              headline: `Coaching built around progress you can feel.`,
              support: `A focused fitness experience for programmes, transformation stories and consultation enquiries.`,
              cta: `Start your programme`,
              services: [
                `Personal coaching`,
                `Training plans`,
                `Progress reviews`,
              ],
            }
          : /Real Estate|Architecture|Interior/i.test(e)
            ? {
                eyebrow: `SPACES WITH A POINT OF VIEW`,
                headline: `Thoughtful spaces. Lasting value.`,
                support: `A visual portfolio that balances large imagery, project detail and a clear enquiry journey.`,
                cta: `Explore projects`,
                services: [
                  `Selected work`,
                  `Our approach`,
                  `Project enquiries`,
                ],
              }
            : /Photography|Portfolio/i.test(e)
              ? {
                  eyebrow: `SELECTED WORK`,
                  headline: `Images and ideas that deserve room to breathe.`,
                  support: `An editorial portfolio designed to keep attention on the work and make enquiries effortless.`,
                  cta: `View the portfolio`,
                  services: [
                    `Featured work`,
                    `Creative direction`,
                    `Availability`,
                  ],
                }
              : /SaaS|Product|Course|Waitlist/i.test(e)
                ? {
                    eyebrow: `A SMARTER WAY FORWARD`,
                    headline: `Turn curiosity into confident action.`,
                    support: `A conversion-led launch experience that explains the product, proves the benefit and removes friction.`,
                    cta: `Get early access`,
                    services: [`Core benefits`, `How it works`, `Get started`],
                  }
                : /Nonprofit/i.test(e)
                  ? {
                      eyebrow: `A CAUSE WORTH ACTING ON`,
                      headline: `Make every visit move the mission forward.`,
                      support: `Human stories, clear impact and direct paths to donate, volunteer or support the campaign.`,
                      cta: `Support the mission`,
                      services: [`Our mission`, `Real impact`, `Take action`],
                    }
                  : {
                      eyebrow: `STRATEGY, DESIGN, RESULTS`,
                      headline: `${e}—presented with clarity and confidence.`,
                      support: `A trust-first business website that communicates value, explains the offer and turns attention into enquiries.`,
                      cta: `Start a conversation`,
                      services: [
                        `Signature service`,
                        `Customer experience`,
                        `Ongoing support`,
                      ],
                    };
}
function ho(e) {
  return /Birthday/i.test(e)
    ? {
        eyebrow: `A BIRTHDAY SURPRISE`,
        headline: `Another year of you.`,
        chapter: `The moments that made this year special`,
        final: `Make a birthday wish`,
      }
    : /Anniversary/i.test(e)
      ? {
          eyebrow: `OUR ANNIVERSARY`,
          headline: `Still choosing you.`,
          chapter: `Every chapter brought us closer`,
          final: `Here’s to what comes next`,
        }
      : /Friend/i.test(e)
        ? {
            eyebrow: `FOR MY FAVOURITE PERSON`,
            headline: `Life is better with you in it.`,
            chapter: `The chaos, laughter and memories`,
            final: `One more thing, bestie`,
          }
        : /Proposal/i.test(e)
          ? {
              eyebrow: `OUR NEXT CHAPTER`,
              headline: `I have one question.`,
              chapter: `Every road led me to this moment`,
              final: `Will you marry me?`,
            }
          : /Long-Distance/i.test(e)
            ? {
                eyebrow: `MILES APART, STILL TOGETHER`,
                headline: `Distance never changed us.`,
                chapter: `The calls, countdowns and reunions`,
                final: `Until I see you again`,
              }
            : /Wedding/i.test(e)
              ? {
                  eyebrow: `WE’RE GETTING MARRIED`,
                  headline: `The countdown begins.`,
                  chapter: `Our story and the celebration ahead`,
                  final: `Save our date`,
                }
              : /Baby/i.test(e)
                ? {
                    eyebrow: `A LITTLE LOVE HAS ARRIVED`,
                    headline: `Welcome to the world.`,
                    chapter: `Tiny moments, treasured forever`,
                    final: `Meet our little one`,
                  }
                : /Graduation/i.test(e)
                  ? {
                      eyebrow: `YOU DID IT`,
                      headline: `A chapter worth celebrating.`,
                      chapter: `The work, growth and proud moments`,
                      final: `The future starts here`,
                    }
                  : /Farewell/i.test(e)
                    ? {
                        eyebrow: `NOT GOODBYE, JUST SEE YOU LATER`,
                        headline: `You’ll always be part of this story.`,
                        chapter: `The memories we’re taking with us`,
                        final: `One last message`,
                      }
                    : /Pet Memory/i.test(e)
                      ? {
                          eyebrow: `FOREVER PART OF THE FAMILY`,
                          headline: `Small paws. A lifetime of love.`,
                          chapter: `The days that made home happier`,
                          final: `Always remembered`,
                        }
                      : {
                          eyebrow: `A PERSONAL DIGITAL KEEPSAKE`,
                          headline: e,
                          chapter: `The moments that brought this story to life`,
                          final: `One last surprise`,
                        };
}
function go(e) {
  return /Invoice|Quotation|Expense/i.test(e)
    ? {
        intro: `A clean financial document with itemised details, totals and payment information.`,
        first: `Client and billing details`,
        second: `Items, costs and totals`,
        fields: [
          `Client / company`,
          `Billing address`,
          `Reference number`,
          `Issue date`,
        ],
      }
    : /Application|Registration|Intake|Onboarding/i.test(e)
      ? {
          intro: `A structured intake flow that collects essential information without overwhelming the person completing it.`,
          first: `Applicant information`,
          second: `Background and requirements`,
          fields: [
            `Full name`,
            `Organisation`,
            `Email address`,
            `Phone number`,
          ],
        }
      : /Agreement|Consent|Handover/i.test(e)
        ? {
            intro: `A clear confirmation document designed to record scope, responsibilities and approval.`,
            first: `Parties and project`,
            second: `Terms and confirmation`,
            fields: [
              `Client name`,
              `Project title`,
              `Effective date`,
              `Reference`,
            ],
          }
        : /Feedback|Survey/i.test(e)
          ? {
              intro: `A concise feedback experience that combines ratings with useful open-ended responses.`,
              first: `Your experience`,
              second: `Ratings and comments`,
              fields: [
                `Name (optional)`,
                `Service used`,
                `Date`,
                `Overall rating`,
              ],
            }
          : {
              intro: `A complete ${e.toLowerCase()} structure with editable fields, clear hierarchy and custom brand styling.`,
              first: `Essential information`,
              second: `Project details`,
              fields: [
                `Full name`,
                `Company or organisation`,
                `Email address`,
                `Phone number`,
              ],
            };
}
function _o(e) {
  return /Restaurant|Beauty|Collection|Product/i.test(e)
    ? {
        headline: `Make the product impossible to scroll past.`,
        tiles: [
          `New arrival`,
          `The details`,
          `Why it stands out`,
          `Customer favourite`,
          `Limited offer`,
          `Shop now`,
        ],
      }
    : /Real Estate|Travel/i.test(e)
      ? {
          headline: `Turn every destination into a reason to enquire.`,
          tiles: [
            `Featured place`,
            `The experience`,
            `Key details`,
            `Why choose it`,
            `Availability`,
            `Enquire now`,
          ],
        }
      : /Fitness|Clinic|Educational/i.test(e)
        ? {
            headline: `Useful information, designed to earn attention.`,
            tiles: [
              `Start here`,
              `What to know`,
              `Common mistake`,
              `Expert guidance`,
              `Quick recap`,
              `Take action`,
            ],
          }
        : /Testimonial|Founder|Before/i.test(e)
          ? {
              headline: `Build trust one honest story at a time.`,
              tiles: [
                `The beginning`,
                `The challenge`,
                `What changed`,
                `The result`,
                `In their words`,
                `Your next step`,
              ],
            }
          : /Event|Hiring|Podcast|YouTube/i.test(e)
            ? {
                headline: `Create anticipation before the main moment.`,
                tiles: [
                  `Announcement`,
                  `Meet the people`,
                  `What to expect`,
                  `Save the date`,
                  `Reminder`,
                  `Join now`,
                ],
              }
            : /Sale|Price|Campaign/i.test(e)
              ? {
                  headline: `Make the offer clear without making it look cheap.`,
                  tiles: [
                    `The offer`,
                    `What’s included`,
                    `Top benefit`,
                    `Proof`,
                    `Last chance`,
                    `Claim now`,
                  ],
                }
              : {
                  headline: `${e}, built as one consistent visual story.`,
                  tiles: [
                    `Hook`,
                    `Context`,
                    `Detail`,
                    `Proof`,
                    `Offer`,
                    `Action`,
                  ],
                };
}
function vo(e) {
  return /Investor|Business Plan|Startup/i.test(e)
    ? {
        eyebrow: `THE OPPORTUNITY`,
        statement: `A compelling business deserves a story investors understand.`,
        agenda: [`Problem`, `Market`, `Solution`, `Traction`, `Ask`],
      }
    : /Research|Report|Annual/i.test(e)
      ? {
          eyebrow: `THE FINDINGS`,
          statement: `Turn detailed evidence into conclusions people remember.`,
          agenda: [`Objective`, `Method`, `Evidence`, `Finding`, `Action`],
        }
      : /Training|Workshop|Education/i.test(e)
        ? {
            eyebrow: `THE LEARNING JOURNEY`,
            statement: `Make every lesson easier to follow and apply.`,
            agenda: [`Goal`, `Concept`, `Example`, `Practice`, `Recap`],
          }
        : /Proposal|Agency|Sales|Consulting/i.test(e)
          ? {
              eyebrow: `THE RECOMMENDATION`,
              statement: `Connect the client’s challenge to one clear way forward.`,
              agenda: [
                `Context`,
                `Challenge`,
                `Approach`,
                `Proof`,
                `Next step`,
              ],
            }
          : /Portfolio|Moodboard|Case Study/i.test(e)
            ? {
                eyebrow: `THE CREATIVE STORY`,
                statement: `Give the strongest work the space and sequence it deserves.`,
                agenda: [
                  `Direction`,
                  `Inspiration`,
                  `Process`,
                  `Outcome`,
                  `Reflection`,
                ],
              }
            : {
                eyebrow: `THE BIG IDEA`,
                statement: `${e}—structured to inform, persuade and move the room forward.`,
                agenda: [`Context`, `Opportunity`, `Approach`, `Proof`, `Plan`],
              };
}
function $(e) {
  document
    .querySelector(`.preview-scroll ${e}`)
    ?.scrollIntoView({ behavior: `smooth`, block: `start` });
}
function yo({ template: e }) {
  let [t, n] = (0, u.useState)(`classic`),
    [r, i] = (0, u.useState)(!1),
    [a, o] = (0, u.useState)(`posts`),
    [s, c] = (0, u.useState)(!1),
    [l, d] = (0, u.useState)(0),
    f;
  if (e.category === `Gift & Personal`) {
    let t = ho(e.name);
    f = (0, M.jsxs)(`div`, {
      className: `demo-canvas gift-demo demo-${e.accent} layout-${e.variant}`,
      children: [
        (0, M.jsxs)(`section`, {
          className: `demo-hero`,
          children: [
            (0, M.jsx)(`span`, { children: t.eyebrow }),
            (0, M.jsx)(`h2`, { children: t.headline }),
            (0, M.jsx)(`p`, {
              children: `A beautiful place for photographs, meaningful words, music and the moments that matter most.`,
            }),
            (0, M.jsx)(`button`, {
              type: `button`,
              onClick: () => $(`.memory-grid`),
              children: `Begin the story ↓`,
            }),
          ],
        }),
        (0, M.jsxs)(`section`, {
          className: `memory-grid`,
          children: [
            (0, M.jsx)(`div`, { className: `memory-photo tall` }),
            (0, M.jsxs)(`div`, {
              children: [
                (0, M.jsx)(`small`, { children: `CHAPTER ONE` }),
                (0, M.jsx)(`h3`, { children: `Where it all began` }),
                (0, M.jsx)(`p`, {
                  children: `Your real photographs and story will replace this preview content. The final page is customised around the person and occasion.`,
                }),
              ],
            }),
            (0, M.jsxs)(`div`, {
              children: [
                (0, M.jsx)(`small`, { children: `CHAPTER TWO` }),
                (0, M.jsx)(`h3`, { children: t.chapter }),
                (0, M.jsx)(`p`, {
                  children: `A flexible timeline for memories, milestones, messages and everything worth remembering.`,
                }),
              ],
            }),
            (0, M.jsx)(`div`, { className: `memory-photo` }),
          ],
        }),
        (0, M.jsxs)(`section`, {
          className: `love-note`,
          children: [
            (0, M.jsx)(`small`, { children: `A NOTE FROM THE HEART` }),
            (0, M.jsx)(`blockquote`, {
              children: `“Some stories deserve more than a message. They deserve a place of their own.”`,
            }),
          ],
        }),
        (0, M.jsx)(`section`, {
          className: `memory-gallery`,
          children: [1, 2, 3, 4, 5, 6].map((t) =>
            (0, M.jsx)(
              `button`,
              {
                type: `button`,
                onClick: () => i(!0),
                children: (0, M.jsxs)(`span`, {
                  children: [e.name, ` · Memory `, t],
                }),
              },
              t,
            ),
          ),
        }),
        (0, M.jsxs)(`section`, {
          className: `demo-final ${r ? `is-revealed` : ``}`,
          children: [
            (0, M.jsx)(`span`, { children: `MADE ESPECIALLY FOR YOU` }),
            (0, M.jsx)(`h3`, {
              children: r ? t.final : `There is one last surprise…`,
            }),
            (0, M.jsx)(`p`, {
              children: r
                ? `This reveal can contain a private message, proposal, video, song or final photo.`
                : `Use the button to test the interactive reveal.`,
            }),
            (0, M.jsx)(`button`, {
              type: `button`,
              onClick: () => i((e) => !e),
              children: r ? `Hide the message` : `Open the final message`,
            }),
          ],
        }),
      ],
    });
  } else if (e.category === `Websites & Landing Pages`) {
    let t = mo(e.name);
    f = (0, M.jsxs)(`div`, {
      className: `demo-canvas website-demo demo-${e.accent} layout-${e.variant}`,
      children: [
        (0, M.jsxs)(`div`, {
          className: `demo-browser`,
          children: [
            (0, M.jsx)(`i`, {}),
            (0, M.jsx)(`i`, {}),
            (0, M.jsx)(`i`, {}),
            (0, M.jsxs)(`span`, {
              children: [e.name.toLowerCase().replaceAll(` `, `-`), `.in`],
            }),
          ],
        }),
        (0, M.jsxs)(`header`, {
          className: `site-demo-nav`,
          children: [
            (0, M.jsx)(`b`, { children: e.name }),
            (0, M.jsxs)(`nav`, {
              children: [
                (0, M.jsx)(`button`, {
                  type: `button`,
                  onClick: () => $(`.site-demo-hero`),
                  children: `About`,
                }),
                (0, M.jsx)(`button`, {
                  type: `button`,
                  onClick: () => $(`.site-demo-services`),
                  children: `Services`,
                }),
                (0, M.jsx)(`button`, {
                  type: `button`,
                  onClick: () => $(`.site-demo-contact`),
                  children: `Contact`,
                }),
              ],
            }),
            (0, M.jsx)(`button`, {
              type: `button`,
              onClick: () => $(`.site-demo-contact`),
              children: t.cta,
            }),
          ],
        }),
        (0, M.jsxs)(`section`, {
          className: `site-demo-hero`,
          children: [
            (0, M.jsxs)(`div`, {
              children: [
                (0, M.jsx)(`small`, { children: t.eyebrow }),
                (0, M.jsx)(`h2`, { children: t.headline }),
                (0, M.jsx)(`p`, { children: t.support }),
                (0, M.jsx)(`button`, {
                  type: `button`,
                  onClick: () => $(`.site-demo-services`),
                  children: `Explore what’s included →`,
                }),
              ],
            }),
            (0, M.jsx)(`div`, {
              className: `site-demo-visual`,
              children: (0, M.jsx)(`span`, { children: e.name.split(` `)[0] }),
            }),
          ],
        }),
        (0, M.jsxs)(`section`, {
          className: `site-demo-stats`,
          children: [
            (0, M.jsxs)(`div`, {
              children: [
                (0, M.jsx)(`strong`, { children: `01` }),
                (0, M.jsx)(`span`, { children: `Clear positioning` }),
              ],
            }),
            (0, M.jsxs)(`div`, {
              children: [
                (0, M.jsx)(`strong`, { children: `02` }),
                (0, M.jsx)(`span`, { children: `Trust-led design` }),
              ],
            }),
            (0, M.jsxs)(`div`, {
              children: [
                (0, M.jsx)(`strong`, { children: `03` }),
                (0, M.jsx)(`span`, { children: `Mobile responsive` }),
              ],
            }),
          ],
        }),
        (0, M.jsxs)(`section`, {
          className: `site-demo-services`,
          children: [
            (0, M.jsx)(`small`, { children: `WHAT WE DO` }),
            (0, M.jsxs)(`h3`, {
              children: [
                `Everything important,`,
                (0, M.jsx)(`br`, {}),
                `presented with purpose.`,
              ],
            }),
            (0, M.jsx)(`div`, {
              children: t.services.map((e, t) =>
                (0, M.jsxs)(
                  `article`,
                  {
                    children: [
                      (0, M.jsxs)(`span`, { children: [`0`, t + 1] }),
                      (0, M.jsx)(`h4`, { children: e }),
                      (0, M.jsx)(`p`, {
                        children: `Focused detail and customer benefit written specifically for this business category.`,
                      }),
                      (0, M.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => $(`.site-demo-contact`),
                        children: [`Enquire about `, e],
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
        (0, M.jsxs)(`section`, {
          className: `site-demo-feature`,
          children: [
            (0, M.jsx)(`div`, { className: `feature-image` }),
            (0, M.jsxs)(`div`, {
              children: [
                (0, M.jsx)(`small`, { children: `CATEGORY-SPECIFIC FLOW` }),
                (0, M.jsx)(`h3`, {
                  children: `Built around the decision your customer needs to make.`,
                }),
                (0, M.jsx)(`p`, {
                  children: `Booking, enquiry, reservation, registration or lead capture is selected according to the template’s real purpose.`,
                }),
                (0, M.jsx)(`button`, {
                  type: `button`,
                  onClick: () => $(`.site-demo-contact`),
                  children: `Test the action`,
                }),
              ],
            }),
          ],
        }),
        (0, M.jsxs)(`section`, {
          className: `site-demo-cta site-demo-contact`,
          children: [
            (0, M.jsx)(`h3`, { children: t.headline }),
            (0, M.jsx)(`p`, {
              children: `This preview connects the final action directly to The Whitecraft for customisation.`,
            }),
            (0, M.jsxs)(`a`, {
              className: `demo-action-link`,
              href: Q(e),
              target: `_blank`,
              rel: `noreferrer`,
              children: [(0, M.jsx)(y, { size: 17 }), t.cta, ` on WhatsApp`],
            }),
          ],
        }),
        (0, M.jsxs)(`footer`, {
          className: `site-demo-footer`,
          children: [
            (0, M.jsx)(`b`, { children: e.name }),
            (0, M.jsx)(`span`, {
              children: `Working navigation · Purpose-built CTA · Responsive structure`,
            }),
          ],
        }),
      ],
    });
  } else if (e.category === `Social Media`) {
    let t = _o(e.name);
    f = (0, M.jsxs)(`div`, {
      className: `demo-canvas social-demo demo-${e.accent} layout-${e.variant}`,
      children: [
        (0, M.jsxs)(`section`, {
          className: `social-intro`,
          children: [
            (0, M.jsx)(`small`, { children: `EDITABLE SOCIAL MEDIA PACK` }),
            (0, M.jsx)(`h2`, { children: e.name }),
            (0, M.jsxs)(`p`, {
              children: [
                t.headline,
                ` Switch formats below to inspect how the content system adapts.`,
              ],
            }),
            (0, M.jsxs)(`div`, {
              className: `format-switch`,
              children: [
                (0, M.jsx)(`button`, {
                  type: `button`,
                  className: a === `posts` ? `active` : ``,
                  onClick: () => o(`posts`),
                  children: `Post & carousel`,
                }),
                (0, M.jsx)(`button`, {
                  type: `button`,
                  className: a === `stories` ? `active` : ``,
                  onClick: () => o(`stories`),
                  children: `Stories`,
                }),
              ],
            }),
          ],
        }),
        a === `posts`
          ? (0, M.jsx)(`section`, {
              className: `social-grid functional-panel`,
              children: t.tiles.map((n, r) =>
                (0, M.jsxs)(
                  `article`,
                  {
                    className: `social-tile tile-${r + 1}`,
                    children: [
                      (0, M.jsxs)(`small`, {
                        children: [`0`, r + 1, ` / `, e.short],
                      }),
                      (0, M.jsx)(`h3`, { children: r === 0 ? e.name : n }),
                      (0, M.jsx)(`p`, {
                        children:
                          r % 2 == 0
                            ? t.headline
                            : `Editable copy, colours and call to action.`,
                      }),
                      (0, M.jsx)(`span`, {
                        children:
                          r === 5
                            ? `${n.toUpperCase()} →`
                            : `CUSTOM TEMPLATE BY THE WHITECRAFT`,
                      }),
                    ],
                  },
                  n,
                ),
              ),
            })
          : (0, M.jsx)(`section`, {
              className: `story-preview functional-panel`,
              children: [0, 2, 5].map((e) =>
                (0, M.jsxs)(
                  `div`,
                  {
                    children: [
                      (0, M.jsxs)(`small`, { children: [`STORY 0`, e + 1] }),
                      (0, M.jsx)(`h3`, { children: t.tiles[e] }),
                      (0, M.jsx)(`button`, {
                        type: `button`,
                        onClick: () => $(`.social-order-action`),
                        children: e === 5 ? `Message now` : `Continue`,
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
        (0, M.jsxs)(`section`, {
          className: `social-order-action demo-functional-cta`,
          children: [
            (0, M.jsxs)(`div`, {
              children: [
                (0, M.jsx)(`small`, { children: `EDITABLE DELIVERY` }),
                (0, M.jsx)(`h3`, {
                  children: `Change the copy, palette, imagery and platform sizes.`,
                }),
              ],
            }),
            (0, M.jsxs)(`a`, {
              href: Q(e),
              target: `_blank`,
              rel: `noreferrer`,
              children: [(0, M.jsx)(y, { size: 17 }), ` Customise this pack`],
            }),
          ],
        }),
      ],
    });
  } else if (e.category === `Forms & Business Documents`) {
    let t = go(e.name);
    f = (0, M.jsx)(`div`, {
      className: `demo-canvas form-demo demo-${e.accent} layout-${e.variant}`,
      children: (0, M.jsxs)(`form`, {
        className: `document-page functional-form`,
        onSubmit: (e) => {
          e.preventDefault(), c(!0);
        },
        children: [
          (0, M.jsxs)(`header`, {
            children: [
              (0, M.jsxs)(`div`, {
                children: [
                  (0, M.jsx)(`small`, { children: `INTERACTIVE DEMO` }),
                  (0, M.jsx)(`h2`, { children: e.name }),
                ],
              }),
              (0, M.jsx)(`span`, { children: e.id }),
            ],
          }),
          (0, M.jsxs)(`p`, {
            className: `document-intro`,
            children: [
              t.intro,
              ` Try the editable fields below; this demo does not send or store any information.`,
            ],
          }),
          (0, M.jsxs)(`section`, {
            children: [
              (0, M.jsxs)(`h3`, { children: [`01. `, t.first] }),
              (0, M.jsx)(`div`, {
                className: `form-fields`,
                children: t.fields.map((e, t) =>
                  (0, M.jsxs)(
                    `label`,
                    {
                      children: [
                        e,
                        (0, M.jsx)(`input`, {
                          required: t < 2,
                          placeholder: `Enter ${e.toLowerCase()}`,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
          (0, M.jsxs)(`section`, {
            children: [
              (0, M.jsxs)(`h3`, { children: [`02. `, t.second] }),
              (0, M.jsxs)(`div`, {
                className: `form-fields`,
                children: [
                  (0, M.jsxs)(`label`, {
                    children: [
                      `Primary requirement`,
                      (0, M.jsx)(`input`, {
                        placeholder: `Describe the main requirement`,
                      }),
                    ],
                  }),
                  (0, M.jsxs)(`label`, {
                    children: [
                      `Preferred timeline`,
                      (0, M.jsxs)(`select`, {
                        defaultValue: ``,
                        children: [
                          (0, M.jsx)(`option`, {
                            value: ``,
                            disabled: !0,
                            children: `Select timeline`,
                          }),
                          (0, M.jsx)(`option`, { children: `Within 3 days` }),
                          (0, M.jsx)(`option`, { children: `Within 1 week` }),
                          (0, M.jsx)(`option`, { children: `Flexible` }),
                        ],
                      }),
                    ],
                  }),
                  (0, M.jsxs)(`label`, {
                    children: [
                      `Estimated budget`,
                      (0, M.jsx)(`input`, {
                        inputMode: `numeric`,
                        placeholder: `₹ Budget`,
                      }),
                    ],
                  }),
                  (0, M.jsxs)(`label`, {
                    className: `full`,
                    children: [
                      `Additional information`,
                      (0, M.jsx)(`textarea`, {
                        placeholder: `Add useful details`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, M.jsxs)(`section`, {
            children: [
              (0, M.jsx)(`h3`, { children: `03. Confirmation` }),
              (0, M.jsxs)(`label`, {
                className: `check-row`,
                children: [
                  (0, M.jsx)(`input`, { type: `checkbox`, required: !0 }),
                  ` I confirm this is only a preview submission.`,
                ],
              }),
              s &&
                (0, M.jsxs)(`p`, {
                  className: `demo-success`,
                  children: [
                    (0, M.jsx)(_, { size: 18 }),
                    ` Demo completed successfully. Nothing was sent or stored.`,
                  ],
                }),
              (0, M.jsxs)(`div`, {
                className: `form-demo-actions`,
                children: [
                  (0, M.jsx)(`button`, {
                    type: `submit`,
                    children: `Test this form`,
                  }),
                  (0, M.jsxs)(`a`, {
                    href: Q(e),
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: [
                      (0, M.jsx)(y, { size: 17 }),
                      ` Order on WhatsApp`,
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, M.jsx)(`footer`, {
            children: `Editable fields · Validation included · WhatsApp action · Delivered digitally`,
          }),
        ],
      }),
    });
  } else {
    let t = vo(e.name),
      n = [
        (0, M.jsxs)(
          `section`,
          {
            className: `slide slide-cover`,
            children: [
              (0, M.jsx)(`small`, {
                children: `THE WHITECRAFT PRESENTATION TEMPLATE`,
              }),
              (0, M.jsx)(`h2`, { children: e.name }),
              (0, M.jsx)(`p`, {
                children: `A premium editable deck for a clear, confident presentation.`,
              }),
              (0, M.jsx)(`span`, { children: `01 / 06` }),
            ],
          },
          `cover`,
        ),
        (0, M.jsxs)(
          `section`,
          {
            className: `slide slide-agenda`,
            children: [
              (0, M.jsx)(`small`, { children: `THE OVERVIEW` }),
              (0, M.jsx)(`h3`, { children: `A story with structure.` }),
              (0, M.jsx)(`div`, {
                children: t.agenda.map((e, t) =>
                  (0, M.jsxs)(
                    `p`,
                    {
                      children: [
                        (0, M.jsxs)(`b`, { children: [`0`, t + 1] }),
                        e,
                      ],
                    },
                    e,
                  ),
                ),
              }),
              (0, M.jsx)(`span`, { children: `02 / 06` }),
            ],
          },
          `agenda`,
        ),
        (0, M.jsxs)(
          `section`,
          {
            className: `slide slide-statement`,
            children: [
              (0, M.jsx)(`small`, { children: t.eyebrow }),
              (0, M.jsxs)(`blockquote`, { children: [`“`, t.statement, `”`] }),
              (0, M.jsx)(`span`, { children: `03 / 06` }),
            ],
          },
          `statement`,
        ),
        (0, M.jsxs)(
          `section`,
          {
            className: `slide slide-data`,
            children: [
              (0, M.jsxs)(`div`, {
                children: [
                  (0, M.jsx)(`small`, { children: `THE NUMBERS` }),
                  (0, M.jsx)(`h3`, {
                    children: `Evidence made easier to understand.`,
                  }),
                  (0, M.jsx)(`p`, {
                    children: `Replace sample values with verified presentation data.`,
                  }),
                ],
              }),
              (0, M.jsxs)(`div`, {
                className: `data-bars`,
                children: [
                  (0, M.jsx)(`i`, { style: { height: `48%` } }),
                  (0, M.jsx)(`i`, { style: { height: `72%` } }),
                  (0, M.jsx)(`i`, { style: { height: `91%` } }),
                  (0, M.jsx)(`i`, { style: { height: `64%` } }),
                ],
              }),
              (0, M.jsx)(`span`, { children: `04 / 06` }),
            ],
          },
          `data`,
        ),
        (0, M.jsxs)(
          `section`,
          {
            className: `slide slide-plan`,
            children: [
              (0, M.jsx)(`small`, { children: `THE PLAN` }),
              (0, M.jsx)(`h3`, { children: `From idea to outcome.` }),
              (0, M.jsx)(`div`, {
                children: t.agenda
                  .slice(0, 3)
                  .map((e, t) =>
                    (0, M.jsxs)(
                      `article`,
                      {
                        children: [
                          (0, M.jsxs)(`b`, { children: [`0`, t + 1] }),
                          (0, M.jsx)(`h4`, { children: e }),
                          (0, M.jsx)(`p`, {
                            children: `Editable supporting explanation for this stage.`,
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
              }),
              (0, M.jsx)(`span`, { children: `05 / 06` }),
            ],
          },
          `plan`,
        ),
        (0, M.jsxs)(
          `section`,
          {
            className: `slide slide-end`,
            children: [
              (0, M.jsx)(`small`, { children: `NEXT STEPS` }),
              (0, M.jsx)(`h3`, { children: `Thank you.` }),
              (0, M.jsx)(`p`, {
                children: `Your details · your@email.com · +91 00000 00000`,
              }),
              (0, M.jsx)(`span`, { children: `06 / 06` }),
            ],
          },
          `end`,
        ),
      ];
    f = (0, M.jsxs)(`div`, {
      className: `demo-canvas slides-demo interactive-deck demo-${e.accent} layout-${e.variant}`,
      children: [
        (0, M.jsx)(`div`, { className: `deck-stage`, children: n[l] }),
        (0, M.jsxs)(`div`, {
          className: `deck-controls`,
          children: [
            (0, M.jsx)(`button`, {
              type: `button`,
              onClick: () => d((e) => Math.max(0, e - 1)),
              disabled: l === 0,
              children: `← Previous`,
            }),
            (0, M.jsx)(`div`, {
              children: n.map((e, t) =>
                (0, M.jsx)(
                  `button`,
                  {
                    type: `button`,
                    className: l === t ? `active` : ``,
                    onClick: () => d(t),
                    "aria-label": `Go to slide ${t + 1}`,
                    children: t + 1,
                  },
                  t,
                ),
              ),
            }),
            (0, M.jsx)(`button`, {
              type: `button`,
              onClick: () => d((e) => Math.min(n.length - 1, e + 1)),
              disabled: l === n.length - 1,
              children: `Next →`,
            }),
          ],
        }),
        (0, M.jsxs)(`a`, {
          className: `deck-whatsapp`,
          href: Q(e),
          target: `_blank`,
          rel: `noreferrer`,
          children: [(0, M.jsx)(y, { size: 17 }), ` Customise this deck`],
        }),
      ],
    });
  }
  return (0, M.jsxs)(`div`, {
    className: `functional-preview preview-theme-${t}`,
    children: [
      (0, M.jsxs)(`div`, {
        className: `customisation-bar`,
        children: [
          (0, M.jsxs)(`div`, {
            children: [
              (0, M.jsx)(`small`, { children: `LIVE CUSTOMISATION` }),
              (0, M.jsx)(`strong`, { children: `Try a presentation style` }),
            ],
          }),
          (0, M.jsx)(`div`, {
            children: [`classic`, `bold`, `minimal`].map((e) =>
              (0, M.jsx)(
                `button`,
                {
                  type: `button`,
                  className: t === e ? `active` : ``,
                  onClick: () => n(e),
                  children: e,
                },
                e,
              ),
            ),
          }),
        ],
      }),
      f,
    ],
  });
}
function bo() {
  let [e, t] = (0, u.useState)(`All templates`),
    [n, r] = (0, u.useState)(``),
    [i, a] = (0, u.useState)(12),
    [o, s] = (0, u.useState)(null),
    c = (0, u.useMemo)(() => {
      let t = n.trim().toLowerCase();
      return uo.filter(
        (n) =>
          (e === `All templates` || n.category === e) &&
          (!t ||
            `${n.name} ${n.category} ${n.format}`.toLowerCase().includes(t)),
      );
    }, [e, n]),
    l = (e) => {
      t(e), a(12);
    };
  return (0, M.jsxs)(`main`, {
    children: [
      (0, M.jsxs)(`nav`, {
        className: `nav-shell`,
        "aria-label": `Primary navigation`,
        children: [
          (0, M.jsxs)(`a`, {
            className: `brand`,
            href: `#top`,
            "aria-label": `The Whitecraft home`,
            children: [
              (0, M.jsx)(`span`, { className: `brand-mark`, children: `WC` }),
              (0, M.jsx)(`span`, { children: `THE WHITECRAFT` }),
            ],
          }),
          (0, M.jsxs)(`div`, {
            className: `nav-links`,
            children: [
              (0, M.jsx)(`a`, { href: `#templates`, children: `Templates` }),
              (0, M.jsx)(`a`, { href: `#process`, children: `Process` }),
              (0, M.jsx)(`a`, { href: `#studio`, children: `Studio` }),
            ],
          }),
          (0, M.jsx)(Z, {
            asChild: !0,
            className: `nav-cta`,
            children: (0, M.jsxs)(`a`, {
              href: Q(),
              target: `_blank`,
              rel: `noreferrer`,
              children: [`WhatsApp us `, (0, M.jsx)(h, { size: 16 })],
            }),
          }),
        ],
      }),
      (0, M.jsxs)(`section`, {
        className: `hero`,
        id: `top`,
        children: [
          (0, M.jsx)(`div`, { className: `hero-grid` }),
          (0, M.jsxs)(`div`, {
            className: `eyebrow`,
            children: [
              (0, M.jsx)(b, { size: 15 }),
              ` Independent digital studio · India`,
            ],
          }),
          (0, M.jsx)(`h1`, {
            children: `Websites, templates and digital work built to be remembered.`,
          }),
          (0, M.jsx)(`p`, {
            children: `The Whitecraft creates premium websites and made-to-order digital templates for businesses, creators and meaningful personal moments.`,
          }),
          (0, M.jsxs)(`div`, {
            className: `hero-actions`,
            children: [
              (0, M.jsx)(Z, {
                asChild: !0,
                size: `lg`,
                children: (0, M.jsxs)(`a`, {
                  href: `#templates`,
                  children: [`Explore 105 templates `, (0, M.jsx)(h, {})],
                }),
              }),
              (0, M.jsx)(Z, {
                asChild: !0,
                size: `lg`,
                variant: `outline`,
                children: (0, M.jsx)(`a`, {
                  href: `#process`,
                  children: `How ordering works`,
                }),
              }),
            ],
          }),
          (0, M.jsxs)(`div`, {
            className: `hero-proof`,
            "aria-label": `The Whitecraft commitments`,
            children: [
              (0, M.jsxs)(`span`, {
                children: [
                  (0, M.jsx)(`strong`, { children: `105` }),
                  ` design directions`,
                ],
              }),
              (0, M.jsxs)(`span`, {
                children: [
                  (0, M.jsx)(`strong`, { children: `5` }),
                  ` useful categories`,
                ],
              }),
              (0, M.jsxs)(`span`, {
                children: [
                  (0, M.jsx)(`strong`, { children: `1:1` }),
                  ` WhatsApp support`,
                ],
              }),
              (0, M.jsxs)(`span`, {
                children: [
                  (0, M.jsx)(`strong`, { children: `100%` }),
                  ` clear before payment`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, M.jsxs)(`section`, {
        className: `store-section`,
        id: `templates`,
        children: [
          (0, M.jsxs)(`div`, {
            className: `section-heading`,
            children: [
              (0, M.jsxs)(`div`, {
                children: [
                  (0, M.jsx)(`span`, {
                    className: `section-number`,
                    children: `01 — TEMPLATE STORE`,
                  }),
                  (0, M.jsxs)(`h2`, {
                    children: [
                      `Start with a direction.`,
                      (0, M.jsx)(`br`, {}),
                      `Make it yours.`,
                    ],
                  }),
                ],
              }),
              (0, M.jsx)(`p`, {
                children: `Every listing is a made-to-order design direction—not a fake instant download. We confirm the customisation, final price and delivery time with you on WhatsApp before payment.`,
              }),
            ],
          }),
          (0, M.jsxs)(`div`, {
            className: `store-controls`,
            children: [
              (0, M.jsxs)(`div`, {
                className: `search-wrap`,
                children: [
                  (0, M.jsx)(te, { size: 18 }),
                  (0, M.jsx)(eo, {
                    value: n,
                    onChange: (e) => {
                      r(e.target.value), a(12);
                    },
                    placeholder: `Search templates, formats or categories`,
                    "aria-label": `Search templates`,
                  }),
                ],
              }),
              (0, M.jsx)(`div`, {
                className: `category-row`,
                "aria-label": `Template categories`,
                children: [`All templates`, ...lo.map((e) => e.category)].map(
                  (t) =>
                    (0, M.jsx)(
                      Z,
                      {
                        type: `button`,
                        variant: e === t ? `default` : `outline`,
                        onClick: () => l(t),
                        children: t,
                      },
                      t,
                    ),
                ),
              }),
            ],
          }),
          (0, M.jsxs)(`div`, {
            className: `results-line`,
            children: [
              (0, M.jsxs)(`span`, {
                children: [c.length, ` design directions`],
              }),
              (0, M.jsx)(`span`, {
                children: `Made to order · Delivered digitally`,
              }),
            ],
          }),
          (0, M.jsx)(`div`, {
            className: `template-grid`,
            children: c
              .slice(0, i)
              .map((e) =>
                (0, M.jsxs)(
                  `article`,
                  {
                    className: `template-card card-layout-${e.variant}`,
                    style: fo(e),
                    children: [
                      (0, M.jsxs)(`button`, {
                        className: `template-cover`,
                        onClick: () => s(e),
                        "aria-label": `Preview ${e.name}`,
                        children: [
                          (0, M.jsx)(`span`, { children: e.short }),
                          (0, M.jsx)(po, { template: e }),
                          (0, M.jsx)(`small`, { children: e.id }),
                          (0, M.jsxs)(`em`, {
                            children: [
                              (0, M.jsx)(v, { size: 16 }),
                              ` Preview template`,
                            ],
                          }),
                        ],
                      }),
                      (0, M.jsxs)(`div`, {
                        className: `template-body`,
                        children: [
                          (0, M.jsxs)(`div`, {
                            className: `template-meta`,
                            children: [
                              (0, M.jsx)(`span`, { children: e.category }),
                              (0, M.jsxs)(`span`, {
                                children: [`From ₹`, e.price],
                              }),
                            ],
                          }),
                          (0, M.jsx)(`h3`, { children: e.name }),
                          (0, M.jsxs)(`p`, {
                            children: [
                              e.format,
                              `. Customised after your order is confirmed.`,
                            ],
                          }),
                          (0, M.jsxs)(`div`, {
                            className: `template-actions`,
                            children: [
                              (0, M.jsxs)(Z, {
                                type: `button`,
                                onClick: () => s(e),
                                children: [
                                  (0, M.jsx)(v, { size: 17 }),
                                  ` Full preview`,
                                ],
                              }),
                              (0, M.jsx)(Z, {
                                asChild: !0,
                                variant: `outline`,
                                children: (0, M.jsxs)(`a`, {
                                  href: Q(e),
                                  target: `_blank`,
                                  rel: `noreferrer`,
                                  children: [
                                    (0, M.jsx)(y, { size: 17 }),
                                    ` Order`,
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
          }),
          c.length === 0 &&
            (0, M.jsxs)(`div`, {
              className: `empty-state`,
              children: [
                (0, M.jsx)(`h3`, { children: `No matching direction yet.` }),
                (0, M.jsx)(`p`, {
                  children: `Message us and we can discuss a custom template for your exact use.`,
                }),
                (0, M.jsx)(Z, {
                  asChild: !0,
                  children: (0, M.jsx)(`a`, {
                    href: Q(),
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: `Ask The Whitecraft`,
                  }),
                }),
              ],
            }),
          i < c.length &&
            (0, M.jsx)(`div`, {
              className: `load-more`,
              children: (0, M.jsx)(Z, {
                size: `lg`,
                variant: `outline`,
                onClick: () => a((e) => e + 12),
                children: `Show more templates`,
              }),
            }),
        ],
      }),
      (0, M.jsxs)(`section`, {
        className: `truth-strip`,
        children: [
          (0, M.jsx)(_, {}),
          (0, M.jsxs)(`div`, {
            children: [
              (0, M.jsx)(`strong`, {
                children: `No fake inventory. No surprise payment.`,
              }),
              (0, M.jsx)(`span`, {
                children: `These are customisable design directions. We confirm what you receive, how long it will take and the final amount before you pay.`,
              }),
            ],
          }),
        ],
      }),
      (0, M.jsxs)(`section`, {
        className: `process-section`,
        id: `process`,
        children: [
          (0, M.jsxs)(`div`, {
            className: `section-heading light-heading`,
            children: [
              (0, M.jsxs)(`div`, {
                children: [
                  (0, M.jsx)(`span`, {
                    className: `section-number`,
                    children: `02 — HOW IT WORKS`,
                  }),
                  (0, M.jsxs)(`h2`, {
                    children: [
                      `From first mockup`,
                      (0, M.jsx)(`br`, {}),
                      `to final delivery.`,
                    ],
                  }),
                ],
              }),
              (0, M.jsx)(`p`, {
                children: `A simple human process keeps every order clear. You speak directly with The Whitecraft instead of purchasing an unknown file from an anonymous marketplace.`,
              }),
            ],
          }),
          (0, M.jsxs)(`div`, {
            className: `process-cards`,
            children: [
              (0, M.jsxs)(`article`, {
                children: [
                  (0, M.jsx)(`img`, {
                    src: `/process-design.png`,
                    alt: `The Whitecraft design and mockup workspace`,
                  }),
                  (0, M.jsxs)(`div`, {
                    children: [
                      (0, M.jsx)(`span`, { children: `01` }),
                      (0, M.jsx)(`h3`, { children: `Choose & mock up` }),
                      (0, M.jsx)(`p`, {
                        children: `Select a direction and share your content. We agree on layout, colours, customisation and final scope.`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, M.jsxs)(`article`, {
                children: [
                  (0, M.jsx)(`img`, {
                    src: `/process-development.png`,
                    alt: `The Whitecraft development workspace`,
                  }),
                  (0, M.jsxs)(`div`, {
                    children: [
                      (0, M.jsx)(`span`, { children: `02` }),
                      (0, M.jsx)(`h3`, { children: `Design & develop` }),
                      (0, M.jsx)(`p`, {
                        children: `We prepare the editable template or responsive website and keep you updated through WhatsApp.`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, M.jsxs)(`article`, {
                children: [
                  (0, M.jsx)(`img`, {
                    src: `/process-delivery.png`,
                    alt: `The Whitecraft responsive website delivery`,
                  }),
                  (0, M.jsxs)(`div`, {
                    children: [
                      (0, M.jsx)(`span`, { children: `03` }),
                      (0, M.jsx)(`h3`, { children: `Review & deliver` }),
                      (0, M.jsx)(`p`, {
                        children: `You review the finished work. After agreed corrections, we deliver the final files or launch-ready website.`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, M.jsxs)(`section`, {
        className: `studio-section`,
        id: `studio`,
        children: [
          (0, M.jsxs)(`div`, {
            className: `studio-card`,
            children: [
              (0, M.jsx)(`span`, {
                className: `section-number`,
                children: `03 — WHERE WE STAND`,
              }),
              (0, M.jsxs)(`h2`, {
                children: [
                  `A new studio,`,
                  (0, M.jsx)(`br`, {}),
                  `presented honestly.`,
                ],
              }),
              (0, M.jsx)(`p`, {
                children: `The Whitecraft is building its first client portfolio. We do not present fictional brands or uncommissioned work as completed client projects. Real case studies will be added only after genuine work is completed and approved for display.`,
              }),
              (0, M.jsxs)(`div`, {
                className: `studio-points`,
                children: [
                  (0, M.jsxs)(`span`, {
                    children: [(0, M.jsx)(_, {}), ` Scope agreed first`],
                  }),
                  (0, M.jsxs)(`span`, {
                    children: [(0, M.jsx)(_, {}), ` Final price confirmed`],
                  }),
                  (0, M.jsxs)(`span`, {
                    children: [
                      (0, M.jsx)(_, {}),
                      ` Delivery explained clearly`,
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, M.jsxs)(`div`, {
            className: `contact-card`,
            children: [
              (0, M.jsx)(`span`, {
                className: `section-number`,
                children: `START A CONVERSATION`,
              }),
              (0, M.jsx)(`h3`, { children: `Tell us what you want to make.` }),
              (0, M.jsx)(`p`, {
                children: `Share a template code or describe your idea. We will reply with the next practical step.`,
              }),
              (0, M.jsx)(Z, {
                asChild: !0,
                size: `lg`,
                children: (0, M.jsxs)(`a`, {
                  href: Q(),
                  target: `_blank`,
                  rel: `noreferrer`,
                  children: [(0, M.jsx)(y, {}), ` Message on WhatsApp`],
                }),
              }),
              (0, M.jsxs)(`div`, {
                className: `contact-links`,
                children: [
                  (0, M.jsxs)(`a`, {
                    href: `mailto:thewhitecraft.studio@gmail.com`,
                    "aria-label": `Email The Whitecraft`,
                    children: [(0, M.jsx)(ee, {}), ` Email The Whitecraft`],
                  }),
                  (0, M.jsxs)(`a`, {
                    href: `https://instagram.com/thewhitecraft.studio`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    "aria-label": `The Whitecraft on Instagram`,
                    children: [
                      (0, M.jsx)(g, {}),
                      ` The Whitecraft on Instagram`,
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, M.jsxs)(`footer`, {
        children: [
          (0, M.jsxs)(`a`, {
            className: `brand`,
            href: `#top`,
            children: [
              (0, M.jsx)(`span`, { className: `brand-mark`, children: `WC` }),
              (0, M.jsx)(`span`, { children: `THE WHITECRAFT` }),
            ],
          }),
          (0, M.jsx)(`p`, { children: `Design · Develop · Deliver` }),
          (0, M.jsx)(`p`, { children: `© 2026 The Whitecraft` }),
        ],
      }),
      (0, M.jsx)(to, {
        open: !!o,
        onOpenChange: (e) => {
          e || s(null);
        },
        children:
          o &&
          (0, M.jsxs)(io, {
            className: `preview-dialog`,
            children: [
              (0, M.jsx)(ao, {
                className: `preview-header`,
                children: (0, M.jsxs)(`div`, {
                  children: [
                    (0, M.jsxs)(`span`, {
                      children: [o.id, ` · `, o.category],
                    }),
                    (0, M.jsx)(oo, { children: o.name }),
                    (0, M.jsx)(so, {
                      children: `Interactive representative preview. Try the controls, then order a customised version.`,
                    }),
                  ],
                }),
              }),
              (0, M.jsx)(`div`, {
                className: `preview-scroll`,
                children: (0, M.jsx)(yo, { template: o }, o.id),
              }),
              (0, M.jsxs)(`div`, {
                className: `preview-footer`,
                children: [
                  (0, M.jsxs)(`div`, {
                    children: [
                      (0, M.jsx)(`span`, { children: `Made to order` }),
                      (0, M.jsxs)(`strong`, {
                        children: [`Starting from ₹`, o.price],
                      }),
                    ],
                  }),
                  (0, M.jsx)(Z, {
                    asChild: !0,
                    size: `lg`,
                    children: (0, M.jsxs)(`a`, {
                      href: Q(o),
                      target: `_blank`,
                      rel: `noreferrer`,
                      children: [(0, M.jsx)(y, {}), ` Order this template`],
                    }),
                  }),
                ],
              }),
            ],
          }),
      }),
    ],
  });
}
export { bo as default };
