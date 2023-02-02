	// Get the input elements
    var s1 = document.getElementById("source1");
    var s2 = document.getElementById("source2");

    // Create Typed object
    var typeData = new Typed(".role", {
        strings: [
            "Nehru Place",
            "Raj Bagh",
            "Kalkaji",
            "Hauz Khas",
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
    });

    // Add event listeners to the input elements
    s1.addEventListener("input", function () {
        handleInputChange();
    });
    s2.addEventListener("input", function () {
        handleInputChange();
    });
    function handleInputChange() {
        if (s2.value !== "") {
            document.querySelector(".role").textContent = s2.value;
            typeData.stop();
        }
        else if (s1.value !== "") {
            document.querySelector(".role").textContent = s1.value;
            typeData.stop();
        }
        else {
            typeData.start();
        }
    }
