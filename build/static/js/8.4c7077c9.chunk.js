(this.webpackJsonpthree_p_world=this.webpackJsonpthree_p_world||[]).push([[8],{38:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(9),s=t(10),c=t(12),i=t(11),m=t(1),o=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={image:[],imageID:n.props.imageID},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;0!==this.state.imageID&&fetch("http://localhost:5000/geTiMagE/".concat(this.state.imageID)).then((function(a){e.setState({image:a})}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.price,r=e.offer,s=e.id;return l.a.createElement("div",null,null!==this.state.image.url?l.a.createElement(n.Suspense,{fallback:l.a.createElement("p",null,"...")},l.a.createElement(m.b,{image:this.state.image,to:"/SingleProduct/".concat(s),className:"card"},l.a.createElement("div",null,l.a.createElement("img",{className:"card-img",src:this.state.image.url,alt:""}),l.a.createElement("p",{className:"pdnm"},a),l.a.createElement("p",{className:"ofr-price"},"TK: ",t),l.a.createElement("p",{className:"offerprice"},"TK : ",Math.floor(t-t*r/100)),l.a.createElement("p",{className:"offerprice ofrprcnt"},r,"% off")))):l.a.createElement(n.Suspense,{fallback:l.a.createElement("p",null,"...")},l.a.createElement("div",null)))}}]),t}(n.Component);a.a=function(e){var a=e.robots;return l.a.createElement("div",null,a.map((function(e){return l.a.createElement("div",{className:"opscard"},l.a.createElement(o,{id:e._id,name:e.iteam,price:e.price,offer:e.offer,imageID:e.imageID}))})))}},70:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t(0),l=t.n(n),r=t(9),s=t(10),c=t(12),i=t(11),m=t(67),o=t(50),u=t(51),p=t(68),d=t(52);t(44);m.a.use([o.a,u.a]);var f=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"slider-main"},l.a.createElement(p.a,{effect:"fade",spaceBetween:30,loop:!0,slidesPerView:1,autoplay:{delay:3e3,disableOnInteraction:!1}},l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("a",null,l.a.createElement("img",{className:"slider-img",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/17/baba2c89-c706-44b1-a7d8-abbad4649fe41597683284959-women-footwear-dk.jpg",alt:"company-logo"})))),l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("a",null,l.a.createElement("img",{className:"slider-img",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/17/1b9af71b-64ee-4736-9ee7-1209740a3f4b1597683284668-MnH_Desk.jpg",alt:"company-logo"}))))))}}]),t}(n.Component),b=t(1);m.a.use([o.a,u.a]);var E=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"slider-main"},l.a.createElement(p.a,{className:"swiperSlider",effect:"fade",spaceBetween:30,loop:!0,slidesPerView:1,autoplay:{delay:3e3,disableOnInteraction:!1}},l.a.createElement(d.a,null,l.a.createElement(b.b,{to:""},l.a.createElement("div",{className:"slider-slider-albl"},l.a.createElement("img",{className:"offer-slider",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/14/563014d8-2c85-495f-9b61-9b4ae4ea09b41597417752779-Freecharge_desktop-strips.jpg",alt:""})))),l.a.createElement(d.a,null,l.a.createElement(b.b,{to:""},l.a.createElement("div",{className:"slider-slider-albl"},l.a.createElement("img",{className:"offer-slider",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/14/65f8c96e-2c3d-412a-904c-06435a10662a1597381975341-fedral-bank.jpg",alt:""}))))))}}]),t}(n.Component),g=t(38),v=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(r.a)(this,t),(e=a.call(this)).state={robots:[]},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/AllProduct").then((function(e){return e.json()})).then((function(a){e.setState({robots:a})}))}}]),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"fpd"},l.a.createElement("h2",{className:"fp"},"Feature Products"),this.state.robots.length>0?l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"Loading...")},l.a.createElement(g.a,{robots:this.state.robots})):l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"Loading...")},l.a.createElement("div",null,"Loading...")))}}]),t}(n.Component);function h(){return l.a.createElement("div",{className:"swiperSlider"},l.a.createElement("div",null,l.a.createElement(f,null)),l.a.createElement(E,null),l.a.createElement(v,null))}}}]);
//# sourceMappingURL=8.4c7077c9.chunk.js.map