$(function(){if(!$(".footnotes").length)return;function t(){var t=$(".fn-content").removeAttr("style");if($(window).width()<640)t.css("width",$(window).width()/2);else t.css("width",340);t.each(function(){var t=$(this).children(".fn-text").outerWidth();$(this).css({width:t,"margin-left":t/-2})})}$(".footnote-ref").each(function(){var t=$($(this).children("a").attr("href")),e=$("<span>",{"class":"fn-content"}),n=$("<span>",{"class":"fn-text"});t.find(".footnote-backref").remove();$(this).append(e.append(n.html(t.html())))});t();$(window).resize(t);var e=$(".fn-content");$(document).click(function(t){var n=$(t.target);if(e.is(n)||e.has(n).length)t.stopPropagation();else{var i=n.parents(".footnote-ref"),o=$(".footnote-ref.active");if(!o.is(i))o.removeClass("active");if(i.length)i.toggleClass("active")}})});