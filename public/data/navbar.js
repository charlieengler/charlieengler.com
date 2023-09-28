// This sets the background color of the currently selected navbar button, but only on desktop(ish) displays
const activeBackground = window.innerWidth >= 768 ? 'background-color:var(--background);' : '';

// These set the color of the navbar buttons depending on the page that's open
const indexBackground = window.location.href.includes("index.html") ? activeBackground : "";
const projectsBackground = window.location.href.includes("projects.html") ? activeBackground : "";
const resumeBackground = window.location.href.includes("resume.html") ? activeBackground : "";
const educationBackground = window.location.href.includes("education.html") ? activeBackground : "";
const referencesBackground = window.location.href.includes("references.html") ? activeBackground : "";
const contactBackground = window.location.href.includes("contact.html") ? activeBackground : "";

// This writes the script used to display the waffle menu on mobile and the rest of the navbar on desktop
document.write(`
    <script type="text/javascript">
        function toggleWaffle()
        {
            const waffleMenu = document.getElementById("waffle-menu");
            const waffleMenuBackground = document.getElementById("waffle-menu-background");
            const waffleMenuButton = document.getElementById("waffle-menu-button");
            const displayMode = waffleMenu.style.display;

            if(displayMode == "block")
            {
                const waffleMenuHeight = (-waffleMenu.offsetHeight).toString() + "px";

                waffleMenu.animate([
                    { transform: "translateY(0)" },
                    { transform: "translateY(" + waffleMenuHeight + ")" }
                ], {
                    duration: 500,
                    iterations: 1,
                    easing: "ease-in-out"
                }).addEventListener("finish", () => {
                    waffleMenu.style.display = "none";
                    waffleMenuBackground.style.display = "none";
                    waffleMenuButton.style.backgroundColor = "rgba(0, 0, 0, 0)";
                });
            }
            else
            {
                waffleMenu.style.display = "block";

                const waffleMenuHeight = (-waffleMenu.offsetHeight).toString() + "px";

                waffleMenuBackground.style.display = "block";
                waffleMenuButton.style.backgroundColor = "var(--primary)";

                waffleMenu.animate([
                    { transform: "translateY(" + waffleMenuHeight + ")" },
                    { transform: "translateY(0)" }
                ], {
                    duration: 500,
                    iterations: 1,
                    easing: "ease-in-out"
                });
            }
        }
    </script>

    <div class="navbar">
        <button onclick="window.location.href='./index.html'" style="` + indexBackground + `" class="navbar-home-button">HOME</button>

        <button onclick="toggleWaffle()" id="waffle-menu-button" class="navbar-waffle-menu-button">&equiv;</button>

        <button onclick="window.location.href='./projects.html'" style="` + projectsBackground + `" class="navbar-subsection-button">PROJECTS</button>
        <button onclick="window.location.href='./resume.html'" style="` + resumeBackground + `" class="navbar-subsection-button">RÉSUMÉ</button>
        <button onclick="window.location.href='./education.html'" style="` + educationBackground + `" class="navbar-subsection-button">EDUCATION</button>
        <!--<button onclick="window.location.href='./references.html'" style="` + referencesBackground + `" class="navbar-subsection-button">REFERENCES</button>-->

        <button onclick="window.location.href='./contact.html'" style="float:right;` + contactBackground + `" class="navbar-subsection-button">CONTACT ME</button>

        <div onclick="toggleWaffle()" id="waffle-menu-background" class="navbar-waffle-menu-background"></div>
        <div id="waffle-menu" class="navbar-waffle-menu">
            <button onclick="window.location.href='./projects.html'" class="navbar-waffle-menu-entry">PROJECTS</button>
            <button onclick="window.location.href='./resume.html'" class="navbar-waffle-menu-entry">RÉSUMÉ</button>
            <button onclick="window.location.href='./education.html'" class="navbar-waffle-menu-entry">EDUCATION</button>
            <!--<button onclick="window.location.href='./references.html'" class="navbar-waffle-menu-entry">REFERENCES</button>-->
            <button onclick="window.location.href='./contact.html'" class="navbar-waffle-menu-entry">CONTACT ME</button>
        </div>
    </div>
`);