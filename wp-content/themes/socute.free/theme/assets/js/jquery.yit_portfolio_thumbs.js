String.prototype.stripslashes=function(){return(this+"").replace(/\\(.?)/g,function(e,b){switch(b){case "\\":return"\\";case "0":return"\x00";case "":return"";default:return b}})}; (function(e,b){b.yit_portfolio_thumbs=function(a,c){this.element=b(c);this._init(a)};b.yit_portfolio_thumbs.defaults={elements:{thumb:".work-thumbnail",thumbs:".work-projects ul:first",content:".work-content",meta:".work-meta",loading:"div.work-loading",title:".work-title"},pagination:{pageSize:9,pagerStyle:"arrows"},slider:!1,json:null,url:null,overlay:!1,type:"portfolio"};b.yit_portfolio_thumbs.prototype={_init:function(a){this.options=b.extend(!0,{},b.yit_portfolio_thumbs.defaults,a);if(null== this.options.url||null==this.options.json||null==this._parseJson())return!1;this.loading=this.element.find(this.options.elements.loading);this._initEvents()},_parseJson:function(){var a=null;try{a=b.parseJSON(this.options.json),this.options.works=a}catch(c){console.error(c),a=null}return null!==a},_initEvents:function(){var a=this.options.elements,c=this;!1!==this.options.pagination&&this._pagination();!1!==this.options.slider&&this._slider();c.element.find(a.thumbs).on("click","a",function(d){d.preventDefault(); c.element.find(a.thumbs).find("a").removeClass("active");d=b(this).addClass("active").data("item");c._loadItem(d)}).find("a:first").click();"portfolio"==this.options.type&&(this._mobileSolution(),b(e).resize(function(){c._mobileSolution()}))},_pagination:function(){b.yit_pagination&&this.element.find(this.options.elements.thumbs).yit_pagination(this.options.pagination)},_slider:function(){var a=this;this.element.find(this.options.elements.thumbs).imagesLoaded(function(){a.element.find(a.options.elements.thumbs).carouFredSel(a.options.slider)})}, _loadItem:function(a){var c=this;this.current=a;this._loading();b.ajax({type:"POST",url:c.options.url,data:{work:c.options.works[a],action:"yit_portfolio_thumbs",overlay:c.options.overlay,type:c.options.type},success:function(a){a=b.parseJSON(a);var g=c.element.find(c.options.elements.thumb),f=c.element.find(c.options.elements.content),e=c.element.find(c.options.elements.meta);c.element.find(c.options.elements.title).html(a.title);g.html("").append(a.thumb).fadeIn();"portfolio"==c.options.type?f.html("").append(a.content).fadeIn(): f.find(".content").html("").append(a.content).fadeIn();e.html("").append(a.meta).fadeIn();c._initLightboxSlider()},error:function(a,b,c){console.log(b,c)}})},_loading:function(){this.element.find(this.options.elements.thumb).html(this.loading)},_initLightboxSlider:function(){b(".extra-images-slider").flexslider({controlNav:!1});b(".work-thumbnail a[rel=lightbox_thumbs]").colorbox({transition:"elastic",rel:"lightbox_thumbs",fixed:!0,maxWidth:"80%",maxHeight:"80%",opacity:0.7});b(".picture_overlay").hover(function(){var a= b(this).find(".overlay div").innerWidth(),c=b(this).find(".overlay div").innerHeight();b(this).find(".overlay div").css({"margin-top":-c/2,"margin-left":-a/2});YIT_Browser.isIE8()&&b(this).find(".overlay > div").show()},function(){YIT_Browser.isIE8()&&b(this).find(".overlay > div").hide()}).each(function(){var a=b(this).find(".overlay div").innerWidth(),c=b(this).find(".overlay div").innerHeight();b(this).find(".overlay div").css({"margin-top":-c/2,"margin-left":-a/2})})},_mobileSolution:function(){var a= this.element,c=a.find(this.options.elements.thumbs).parents("div.work-projects"),a=a.find(this.options.elements.content).parents("div.work-content-wrapper"),d=b("body").outerWidth();768<=d&&0>=b(".work-projects+.work-content-wrapper").length?c.after(a):768>d&&0<b(".work-projects+.work-content-wrapper").length&&c.before(a)}};b.fn.yit_portfolio_thumbs=function(a){if("string"===typeof a){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"yit_portfolio_thumbs");d?!b.isFunction(d[a])|| "_"===a.charAt(0)?console.error("no such method '"+a+"' for yit_portfolio_thumbs instance"):d[a].apply(d,c):console.error("cannot call methods on yit_checkout prior to initialization; attempted to call method '"+a+"'")})}else this.each(function(){b.data(this,"yit_portfolio_thumbs")||b.data(this,"yit_portfolio_thumbs",new b.yit_portfolio_thumbs(a,this))});return this}})(window,jQuery);