! function(n, t, e) {
    var o = {
        init: function(e) {
            o.select2(), o.stellar(), o.carousel(), o.portfolio(), o.lightCase(), o.sideNav(), o.counter(), o.skills(), o.aos(), o.navbarChange();
        },
        select2: function() {
            n(e).ready(function() {
                n("select").select2();
            });
        },
        stellar: function() {
            var e = n(t).width();
            767 <= e && (n(".bg-fixed").attr("data-stellar-background-ratio", "0.8"), n.stellar({
                horizontalScrolling: !1,
                responsive: !0,
                parallaxBackgrounds: !0,
                scrollProperty: "scroll"
            }));
        },
        carousel: function() {
            n(".testi-carousel").owlCarousel({
                loop: !0,
                margin: 10,
                nav: !1,
                dots: !0,
                dotSpeed: 1e3,
                autoplay: !0,
                autoplaySpeed: 1e3,
                items: 1
            }), n(".client-slider").owlCarousel({
                loop: !0,
                margin: 10,
                nav: !0,
                navSpeed: 1e3,
                dots: !1,
                autoplay: !0,
                autoplaySpeed: 1e3,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1e3: {
                        items: 6
                    }
                }
            });
        },
        portfolio: function() {
            var t = n(".grid-portfolio").isotope({
                itemSelector: ".grid-item",
                masonry: {
                    gutter: ".gutter-sizer",
                    columnWidth: ".grid-sizer"
                },
                percentPosition: !0
            });
            return n(".filter-button-group").on("click", "a", function() {
                var e = n(this).attr("data-filter");
                t.isotope({
                    filter: e
                });
            }), n(".btn-filter a.is-checked").addClass("active"), n(".btn-filter a").on("click", function() {
                n(".btn-filter a").removeClass("active"), n(this).addClass("active");
            }), !1;
        },
        lightCase: function() {
            jQuery(e).ready(function(e) {
                e("a[data-rel^=lightcase]").lightcase();
            });
        },
        sideNav: function() {
            n("#side-nav-open").click(function() {
                n("#side-nav").css("width", "300"), setTimeout(function() {
                    n("body").addClass("sidenav-open");
                }, 200), setTimeout(function() {
                    n("body").addClass("in");
                }, 400);
            }), n("#side-nav-close, #canvas-overlay").click(function() {
                setTimeout(function() {
                    n("body").removeClass("in");
                }, 200), setTimeout(function() {
                    n("body").removeClass("sidenav-open"), n("#side-nav").css("width", "0");
                }, 400);
            }), n("#side-search-open").click(function() {
                n("#side-search").css("width", "300"), setTimeout(function() {
                    n("body").addClass("sidesearch-open");
                }, 200), setTimeout(function() {
                    n("body").addClass("in");
                }, 300);
            }), n("#side-search-close, #canvas-overlay").click(function() {
                setTimeout(function() {
                    n("body").removeClass("in");
                }, 200), setTimeout(function() {
                    n("body").removeClass("sidesearch-open"), n("#side-search").css("width", "0");
                }, 300);
            });
        },
        counter: function() {
            n("#counter").each(function() {
                n(this).waypoint({
                    handler: function(e) {
                        n(".number").countTo({
                            speed: 1e3
                        }), this.destroy();
                    },
                    offset: "80%"
                });
            });
        },
        skills: function() {
            n("#skills").each(function() {
                return n(this).waypoint({
                    handler: function(e) {
                        n(".progress").each(function() {
                            console.log(n(this).attr("data-percent")), n(this).find(".progress-bar").delay(1e4).css({
                                width: n(this).attr("data-percent")
                            });
                        });
                    },
                    offset: "80%"
                }), !1;
            });
        },
        aos: function() {
            AOS.init({
                once: !0
            });
        },
        navbarChange: function() {
            n(t).scroll(function() {
                var e = n(t).scrollTop();
                return 150 < e ? (n("#header-navbar").removeClass("navbar-transparent"), n("body").addClass("not-on-top")) : (n("body").removeClass("not-on-top"), n("#header-navbar").addClass("navbar-transparent")), !1;
            });
        }
    };
    n(e).ready(function() {
        o.init(n);
    });
}(window.jQuery, window, document);

function clearSelections(){
     let targets = document.querySelectorAll('[data-cats]');
    for (let index = 0; index < targets.length; ++index) {
        let x = targets[index].parentElement.parentElement.parentElement.parentElement.parentElement;
        if (x.style.display === "none") {
            x.style.display = "block";
        }
    }
}

function langDropdown() {
  var x = document.getElementById("langDropdown");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}

function toggleBlogItems(category) {
    console.log("blog item toggle for " + category);
    let targets = document.querySelectorAll('[data-cats]');
    for (let index = 0; index < targets.length; ++index) {
        let x = targets[index].parentElement.parentElement.parentElement.parentElement.parentElement;
        if (x.style.display === "none") {
            x.style.display = "block";
        }
    }
    let newTargets = [];
    for (let index = 0; index < targets.length; ++index) {
        const element = targets[index];
        if (element.innerText.toLowerCase().includes(category.toLowerCase())) {} else {

            newTargets.push(element);
        }
    }
    for (let index = 0; index < newTargets.length; ++index) {
        let x = newTargets[index].parentElement.parentElement.parentElement.parentElement.parentElement;
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}