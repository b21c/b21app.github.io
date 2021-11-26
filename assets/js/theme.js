! function (r) {
    "use strict";
    var a = {
        init: () => {
            a.stickyHeader(), a.dropdownAnimation(), a.headerButtons(), a.anchorSmoothScroll(), a.backgroundImage(), a.progressBar(), a.pageProgress()
        },
        stickyHeader: () => {
            r(".navbar").length && new Headhesive(".navbar", {
                offset: 350,
                offsetSide: "top",
                classes: {
                    clone: "banner--clone fixed ",
                    stick: "banner--stick",
                    unstick: "banner--unstick"
                },
                onStick: function () {
                    r(r.SmartMenus.Bootstrap.init), r(".navbar:not(.fixed) .language-select .dropdown-menu").removeClass("show")
                },
                onUnstick: function () {
                    r(".navbar.fixed .language-select .dropdown-menu").removeClass("show")
                }
            })
        },
        dropdownAnimation: () => {
            r(".navbar .navbar-nav:not(.navbar-nav-other)").bind({
                "show.smapi": function (e, a) {
                    r(a).removeClass("hide-animation").addClass("show-animation")
                },
                "hide.smapi": function (e, a) {
                    r(a).removeClass("show-animation").addClass("hide-animation")
                }
            }).on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", "ul", function (e) {
                r(this).removeClass("show-animation hide-animation"), e.stopPropagation()
            })
        },
        headerButtons: () => {
            var a = r(".hamburger.animate"),
                t = (r(".language-select .dropdown-menu"), r(".offcanvas-nav")),
                e = r('[data-toggle="offcanvas-nav"]'),
                o = r(".offcanvas-nav-close"),
                n = r(".offcanvas-info"),
                i = r(".offcanvas-info-close"),
                s = r('[data-toggle="offcanvas-info"]');
            a.on("click", function () {
                a.toggleClass("active")
            }), e.on("click", function (e) {
                e.stopPropagation(), t.toggleClass("open")
            }), t.on("click", function (e) {
                e.stopPropagation()
            }), o.on("click", function (e) {
                t.removeClass("open"), a.removeClass("active")
            }), s.on("click", function (e) {
                e.stopPropagation(), n.toggleClass("open")
            }), n.on("click", function (e) {
                e.stopPropagation()
            }), r(document).on("click", function () {
                t.removeClass("open"), n.removeClass("open"), a.removeClass("active")
            }), i.on("click", function (e) {
                n.removeClass("open")
            }), r(".onepage .navbar li a.scroll").on("click", function () {
                t.removeClass("open"), a.removeClass("active")
            })
        },
        anchorSmoothScroll: () => {
            r(function () {
                setTimeout(function () {
                    var e;
                    location.hash && (window.scrollTo(0, 0), e = location.hash.split("#"), a(r("#" + e[1])))
                }, 1), r('a.scroll[href*="#"]:not([href="#"])').on("click", function () {
                    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) return a(r(this.hash)), !1
                })
            })
        },
        backgroundImage: () => {
            r(".bg-image").css("background-image", function () {
                return "url(" + r(this).data("image-src") + ")"
            })
        },
        progressBar: () => {
            var o = r(".progressbar.line");
            o.each(function (e) {
                var a = new ProgressBar.Line(this, {
                        strokeWidth: 3,
                        trailWidth: 3,
                        duration: 3e3,
                        easing: "easeInOut",
                        text: {
                            style: {
                                color: "inherit",
                                position: "absolute",
                                right: "0",
                                top: "-30px",
                                padding: 0,
                                margin: 0,
                                transform: null
                            },
                            autoStyleContainer: !1
                        },
                        step: function (e, a, t) {
                            a.setText(Math.round(100 * a.value()) + " %")
                        }
                    }),
                    t = r(this).attr("data-value") / 100;
                o.waypoint(function () {
                    a.animate(t)
                }, {
                    offset: "100%"
                })
            })
        },
        pageProgress: () => {
            var t, o, e;
            r(".progress-wrap").length && (t = document.querySelector(".progress-wrap path"), o = t.getTotalLength(), t.style.transition = t.style.WebkitTransition = "none", t.style.strokeDasharray = o + " " + o, t.style.strokeDashoffset = o, t.getBoundingClientRect(), t.style.transition = t.style.WebkitTransition = "stroke-dashoffset 10ms linear", (e = function () {
                var e = r(window).scrollTop(),
                    a = r(document).height() - r(window).height();
                t.style.strokeDashoffset = o - e * o / a
            })(), r(window).scroll(e), jQuery(window).on("scroll", function () {
                50 < jQuery(this).scrollTop() ? jQuery(".progress-wrap").addClass("active-progress") : jQuery(".progress-wrap").removeClass("active-progress")
            }), jQuery(".progress-wrap").on("click", function (e) {
                return e.preventDefault(), jQuery("html, body").animate({
                    scrollTop: 0
                }, 550), !1
            }))
        }
    };
    a.init()
}(jQuery);