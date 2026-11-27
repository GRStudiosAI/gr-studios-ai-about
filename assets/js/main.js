const button=document.getElementById('toggle');const nav=document.getElementById('nav');const mq=matchMedia('(max-width:650px)');function sync(){button.hidden=!mq.matches;nav.hidden=mq.matches;button.setAttribute('aria-expanded',String(!nav.hidden));}button.addEventListener('click',()=>{nav.hidden=!nav.hidden;button.setAttribute('aria-expanded',String(!nav.hidden));});mq.addEventListener('change',sync);sync();

// BEGIN PERMANENT HEADER HEIGHT SYNC

(function () {
    function initializeFixedHeader() {
        const header = document.querySelector("header");

        if (!header) return;

        function updateHeaderHeight() {
            document.documentElement.style.setProperty(
                "--header-height",
                Math.ceil(header.getBoundingClientRect().height) + "px"
            );
        }

        updateHeaderHeight();

        window.addEventListener("resize", updateHeaderHeight);
        window.addEventListener("load", updateHeaderHeight);

        if ("ResizeObserver" in window) {
            const observer = new ResizeObserver(updateHeaderHeight);
            observer.observe(header);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeFixedHeader
        );
    } else {
        initializeFixedHeader();
    }
})();

// END PERMANENT HEADER HEIGHT SYNC
