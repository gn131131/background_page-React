(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{vvVX:function(a,e,t){"use strict";t.r(e);t("IzEo");var n=t("bx4M"),r=(t("Znn+"),t("ZTPi")),i=(t("14J3"),t("BMrR")),l=(t("jCWc"),t("kPKH")),c=t("9kvl"),s=t("q1tI"),d=t.n(s),o=t("ucLW"),m=t("Hq6x"),p=t("UXoT"),y=t.n(p),g=function(a){var e=a.data,t=a.currentTabKey;return d.a.createElement(i["a"],{gutter:8,style:{width:138,margin:"8px 0"},type:"flex"},d.a.createElement(l["a"],{span:12},d.a.createElement(m["a"],{title:e.name,subTitle:d.a.createElement(c["a"],{id:"dashboardandanalysis.analysis.conversion-rate",defaultMessage:"Conversion Rate"}),gap:2,total:"".concat(100*e.cvr,"%"),theme:t!==e.name?"light":void 0})),d.a.createElement(l["a"],{span:12,style:{paddingTop:36}},d.a.createElement(o["g"],{animate:!1,inner:.55,tooltip:!1,margin:[0,0,0,0],percent:100*e.cvr,height:64})))},h=r["a"].TabPane,u=function(a){var e=a.activeKey,t=a.loading,i=a.offlineData,l=a.offlineChartData,s=a.handleTabChange;return d.a.createElement(n["a"],{loading:t,className:y.a.offlineCard,bordered:!1,style:{marginTop:32}},d.a.createElement(r["a"],{activeKey:e,onChange:s},i.map((function(a){return d.a.createElement(h,{tab:d.a.createElement(g,{data:a,currentTabKey:e}),key:a.name},d.a.createElement("div",{style:{padding:"0 24px"}},d.a.createElement(o["h"],{height:400,data:l,titleMap:{y1:Object(c["c"])({id:"dashboardandanalysis.analysis.traffic"}),y2:Object(c["c"])({id:"dashboardandanalysis.analysis.payments"})}})))}))))};e["default"]=u}}]);