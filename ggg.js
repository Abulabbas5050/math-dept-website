document.addEventListener('DOMContentLoaded', function() {

    // --- JavaScript for Courses Page (courses.html) ---
    const coursesLevelFilter = document.getElementById('level-filter');
    const coursesSemesterFilter = document.getElementById('semester-filter');
    const coursesSearchBar = document.getElementById('course-search-bar');
    const courseLevelSections = document.querySelectorAll('.course-level-section');
    const allCourseCards = document.querySelectorAll('.course-card');

    if (coursesLevelFilter && coursesSemesterFilter && coursesSearchBar && allCourseCards.length > 0) {
        function applyCourseFilters() {
            const selectedLevel = coursesLevelFilter.value;
            const selectedSemester = coursesSemesterFilter.value;
            const searchTerm = coursesSearchBar.value.toLowerCase();

            allCourseCards.forEach(card => {
                card.style.display = 'none';
            });

            allCourseCards.forEach(card => {
                const cardLevel = card.dataset.level;
                const cardSemester = card.dataset.semester;
                const cardCode = card.dataset.code.toLowerCase();
                const cardTitle = card.dataset.title.toLowerCase();
                const cardDescription = card.querySelector('.course-description').textContent.toLowerCase();

                const levelMatch = (selectedLevel === 'all' || cardLevel === selectedLevel);
                const semesterMatch = (selectedSemester === 'all' || cardSemester === selectedSemester);
                const searchMatch = (
                    searchTerm === '' ||
                    cardCode.includes(searchTerm) ||
                    cardTitle.includes(searchTerm) ||
                    cardDescription.includes(searchTerm)
                );

                if (levelMatch && semesterMatch && searchMatch) {
                    card.style.display = 'flex';
                }
            });

            courseLevelSections.forEach(levelSection => {
                let levelSectionHasVisibleCourses = false;
                levelSection.querySelectorAll('.semester-section').forEach(semesterSection => {
                    let semesterSectionHasVisibleCourses = true;
                    if (semesterSection.id === 'first-semester-courses' && selectedSemester === 'second') {
                        semesterSectionHasVisibleCourses = false;
                    }
                    if (semesterSection.id === 'second-semester-courses' && selectedSemester === 'first') {
                        semesterSectionHasVisibleCourses = false;
                    }

                    let anyCardVisibleInSemester = false;
                    semesterSection.querySelectorAll('.course-card').forEach(card => {
                        if (card.style.display !== 'none') {
                            anyCardVisibleInSemester = true;
                        }
                    });

                    if (semesterSectionHasVisibleCourses && anyCardVisibleInSemester) {
                        semesterSection.style.display = 'block';
                        levelSectionHasVisibleCourses = true;
                    } else {
                        semesterSection.style.display = 'none';
                    }
                });
                if (levelSectionHasVisibleCourses) {
                    levelSection.style.display = 'block';
                } else {
                    levelSection.style.display = 'none';
                }
            });
        }

        coursesLevelFilter.addEventListener('change', applyCourseFilters);
        coursesSemesterFilter.addEventListener('change', applyCourseFilters);
        coursesSearchBar.addEventListener('keyup', applyCourseFilters);
        applyCourseFilters();
    }


    // --- JavaScript for Past Questions Page (past-question.html) ---
    const pqLevelFilter = document.getElementById('pq-level-filter');
    const pqSemesterFilter = document.getElementById('pq-semester-filter');
    const pqSearchBar = document.getElementById('pq-search-bar');
    const pqLevelSections = document.querySelectorAll('.pq-level-section');
    const allPqCards = document.querySelectorAll('.pq-card');

    if (pqLevelFilter && pqSemesterFilter && pqSearchBar && allPqCards.length > 0) {
        function applyPqFilters() {
            const selectedLevel = pqLevelFilter.value;
            const selectedSemester = pqSemesterFilter.value;
            const searchTerm = pqSearchBar.value.toLowerCase();

            allPqCards.forEach(card => {
                card.style.display = 'none';
            });

            allPqCards.forEach(card => {
                const cardLevel = card.dataset.level;
                const cardSemester = card.dataset.semester;
                const cardCode = card.dataset.code.toLowerCase();
                const cardTitle = card.dataset.title.toLowerCase();
                const cardYear = card.dataset.year;
                const cardDescription = card.querySelector('.pq-description').textContent.toLowerCase();

                const levelMatch = (selectedLevel === 'all' || cardLevel === selectedLevel);
                const semesterMatch = (selectedSemester === 'all' || cardSemester === selectedSemester);
                const searchMatch = (
                    searchTerm === '' ||
                    cardCode.includes(searchTerm) ||
                    cardTitle.includes(searchTerm) ||
                    cardYear.includes(searchTerm) ||
                    cardDescription.includes(searchTerm)
                );

                if (levelMatch && semesterMatch && searchMatch) {
                    card.style.display = 'flex';
                }
            });

            pqLevelSections.forEach(levelSection => {
                let levelSectionHasVisiblePQs = false;
                levelSection.querySelectorAll('.semester-section').forEach(semesterSection => {
                    let semesterSectionHasVisiblePQs = true;
                    if (semesterSection.id === 'first-semester-past-questions' && selectedSemester === 'second') {
                        semesterSectionHasVisiblePQs = false;
                    }
                    if (semesterSection.id === 'second-semester-past-questions' && selectedSemester === 'first') {
                        semesterSectionHasVisiblePQs = false;
                    }

                    let anyCardVisibleInSemester = false;
                    semesterSection.querySelectorAll('.pq-card').forEach(card => {
                        if (card.style.display !== 'none') {
                            anyCardVisibleInSemester = true;
                        }
                    });

                    if (semesterSectionHasVisiblePQs && anyCardVisibleInSemester) {
                        semesterSection.style.display = 'block';
                        levelSectionHasVisiblePQs = true;
                    } else {
                        semesterSection.style.display = 'none';
                    }
                });
                if (levelSectionHasVisiblePQs) {
                    levelSection.style.display = 'block';
                } else {
                    levelSection.style.display = 'none';
                }
            });
        }

        pqLevelFilter.addEventListener('change', applyPqFilters);
        pqSemesterFilter.addEventListener('change', applyPqFilters);
        pqSearchBar.addEventListener('keyup', applyPqFilters);
        applyPqFilters();
    }


    // --- JavaScript for Home Page Global Search (index.html/ggg.html) ---
    const globalSearchBar = document.getElementById('global-search-bar');
    const searchSuggestionsDiv = document.getElementById('search-suggestions'); // This will now act as the results container

    if (globalSearchBar && searchSuggestionsDiv) {

        // Your new searchable items data
        const searchableItems = [
            { title: "MTH 101: Sets and Number System", type: "Course", link: "courses.html" },
            { title: "MTH 103: Trigonometry and Coordinate Geometry", type: "Course", link: "courses.html" },
            { title: "MTH 105: Differential and Integral Calculus", type: "Course", link: "courses.html" },
            { title: "MTH 102: Algebra", type: "Course", link: "courses.html" },
            { title: "MTH 104: Conic Sections and Applications of Calculus", type: "Course", link: "courses.html" },
            { title: "MTH 106: Vectors and Dynamics", type: "Course", link: "courses.html" },
            { title: "MTH 201: Mathematical Methods I", type: "Course", link: "courses.html" },
            { title: "MTH 202: Elementary Differential Equations", type: "Courses", link: "courses.html" },
            { title: "MTH 203: Real Analysis I", type: "Courses", link: "courses.html" },
            { title: "MTH 205: Abstract Algebra I", type: "Courses", link: "courses.html" },
            { title: "MTH 204: Real Analysis II", type: "Courses", link: "courses.html" },
            { title: "MTH 207: Linear Algebra I", type: "Courses", link: "courses.html" },
            { title: "MTH 206: Abstract Algebra II", type: "Courses", link: "courses.html" },
            { title: "MTH 208: Linear Algebra II", type: "Courses", link: "courses.html" },
            { title: "MTH 209: Numerical Analysis I", type: "Courses", link: "courses.html" },
            { title: "MTH 301: Mathematical Methods II", type: "Courses", link: "courses.html" },
            { title: "MTH 303: Advanced Real Analysis", type: "Courses", link: "courses.html" },
            { title: "MTH 305: Theory of Rings and Fields", type: "Courses", link: "courses.html" },
            { title: "MTH 307: Complex Analysis I", type: "Courses", link: "courses.html" },
            { title: "MTH 309: Analytical Dynamics I", type: "Courses", link: "courses.html" },
            { title: "MTH 311: Mathematical Modelling", type: "Courses", link: "courses.html" },
            { title: "MTH 317: Numerical Analysis II", type: "Courses", link: "courses.html" },
            { title: "MTH 300: SIWES", type: "Courses", link: "courses.html" },


            { title: "MTH 401: Differential Equations", type: "Courses", link: "courses.html" },
            { title: "MTH 402 - Functional Analysis", type: "courses", link: "courses.html" },
            { title: "MTH 403 - General Topology", type: "courses", link: "courses.html" },
            { title: "MTH 405 - Theory of Finite Groups", type: "courses", link: "courses.html" },
            { title: "MTH 407: Advanced Real Analysis II", type: "Courses", link: "courses.html" },
            { title: "MTH 413: Hydrodynamics I", type: "Courses", link: "courses.html" },
            { title: "MTH 425: Graph Theory and Combinatories", type: "Courses", link: "courses.html" },


            { title: "MTH 101 - Past Question 2022", type: "Past Question", link: "past-question.html" },
            { title: "MTH 202 - Past Question 2021", type: "Past Question", link: "past-question.html" },
            { title: "MTH 301 - Past Question 2020", type: "Past Question", link: "past-question.html" },
            { title: "MTH 401 - Past Question 2022", type: "Past Question", link: "past-question.html" },
            { title: "Abbas Onimisi Salihu", type: "Team", link: "team.html" },
            { title: "Dauda Raji", type: "Team", link: "team.html" },
            { title: "Adepoju Ibrahim", type: "Team", link: "team.html" },
            { title: "Rachel", type: "Team", link: "team.html" },
            { title: "Saeed Ibrahim", type: "Team", link: "team.html" },

            { title: "Prof.I.A Fulatan", type: "lecturer", link: "lecturer.html" },
            { title: "Prof. B. Sani", type: "lecturer", link: "lecturer.html" },
            { title: "Prof. A.A. Tijani", type: "lecturer", link: "lecturer.html" },
            { title: "Prof. Jha", type: "lecturer", link: "lecturer.html" },
            { title: "Prof. Jagadish", type: "lecturer", link: "lecturer.html" },
            { title: "Prof. H.M. Jibril", type: "lecturer", link: "lecturer.html" },
            { title: "Prof. A.O. Ajibade", type: "lecturer", link: "lecturer.html" },
            { title: "Prof. Abdul", type: "lecturer", link: "lecturer.html" },
            { title: "Prof. Y.M. Baraya", type: "lecturer", link: "lecturer.html" },
            { title: "Prof. Aisha Umar", type: "lecturer", link: "lecturer.html" },
            { title: "Mrs. Yakubu", type: "lecturer", link: "lecturer.html" },
            { title: "Dr. A.T Imam", type: "lecturer", link: "lecturer.html" },
            { title: "Dr. Shagari", type: "lecturer", link: "lecturer.html" },
            { title: "Dr. Oni", type: "lecturer", link: "lecturer.html" },
            { title: "Prof.G.U Garba", type: "lecturer", link: "lecturer.html" },


            // Add more items here as needed!
        ];

        let highlightedIndex = -1; // For keyboard navigation

        // Function to filter and display search results
        function filterSuggestions() {
            const query = globalSearchBar.value.toLowerCase().trim();
            searchSuggestionsDiv.innerHTML = ""; // Clear previous results
            highlightedIndex = -1; // Reset highlight

            if (query === "") { // If search bar is empty, show no results
                searchSuggestionsDiv.classList.remove('active'); // Hide the container
                return;
            }

            const filtered = searchableItems.filter(item =>
                item.title.toLowerCase().includes(query)
            );

            if (filtered.length === 0) {
                // Display "No results found" message
                const noResultsPara = document.createElement("p");
                noResultsPara.classList.add('no-results'); // Add a class for styling
                noResultsPara.textContent = "No results found.";
                searchSuggestionsDiv.appendChild(noResultsPara);
                searchSuggestionsDiv.classList.add('active'); // Still show container for the message
                return;
            }

            filtered.forEach(item => {
                const div = document.createElement("div");
                div.className = "result-item"; // Add a class for styling individual results
                // Use a download attribute for PDFs, or remove it for direct navigation
                div.innerHTML = `<strong>${item.type}:</strong> <a href="${item.link}" ${item.link.endsWith('.pdf') ? 'download' : ''}>${item.title}</a>`;
                searchSuggestionsDiv.appendChild(div);
            });

            searchSuggestionsDiv.classList.add('active'); // Show the results container
        }

        // Function to handle keyboard navigation (Arrow Up/Down, Enter)
        function handleKeydown(e) {
            // Select all visible result items for navigation
            const visibleResults = Array.from(searchSuggestionsDiv.querySelectorAll('.result-item'));
            if (visibleResults.length === 0) return; // No items to navigate

            if (e.key === 'ArrowDown') {
                e.preventDefault(); // Prevent page scroll
                highlightedIndex = (highlightedIndex + 1) % visibleResults.length;
                updateHighlight(visibleResults);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault(); // Prevent page scroll
                highlightedIndex = (highlightedIndex - 1 + visibleResults.length) % visibleResults.length;
                updateHighlight(visibleResults);
            } else if (e.key === 'Enter') {
                e.preventDefault(); // Prevent form submission
                if (highlightedIndex !== -1) {
                    // Click the <a> tag inside the highlighted div
                    const linkElement = visibleResults[highlightedIndex].querySelector('a');
                    if (linkElement) {
                        linkElement.click();
                    }
                } else {
                    // If no item is highlighted but Enter is pressed, click the first result's link
                    if (visibleResults.length > 0) {
                        const linkElement = visibleResults[0].querySelector('a');
                        if (linkElement) {
                            linkElement.click();
                        }
                    }
                }
            }
        }

        // Function to update the 'highlighted' class on result items
        function updateHighlight(items) {
            items.forEach((el, i) => {
                el.classList.toggle('highlighted', i === highlightedIndex);
            });
            // Scroll highlighted item into view if necessary
            if (highlightedIndex !== -1) {
                items[highlightedIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        }

        // Event Listeners for the global search bar
        globalSearchBar.addEventListener('input', filterSuggestions);
        globalSearchBar.addEventListener('keydown', handleKeydown);
        globalSearchBar.addEventListener('focus', filterSuggestions); // Show nothing initially if empty

        // Hide results when clicking outside the search bar or results container
        document.addEventListener('click', function(e) {
            if (!globalSearchBar.contains(e.target) && !searchSuggestionsDiv.contains(e.target)) {
                searchSuggestionsDiv.classList.remove('active');
            }
        });
    }

    // --- Daily Insight Logic ---
    const dailyFacts = [ // Renamed from dailyInsights to dailyFacts
    "Mathematics is the language in which God has written the universe. – Galileo Galilei",
    "The only way to learn mathematics is to do mathematics. – Paul Halmos",
    "Without mathematics, there's nothing you can do. Everything around you is mathematics. Everything around you is numbers. – Shakuntala Devi",
    "Pure mathematics is, in its way, the poetry of logical ideas. – Albert Einstein",
    "The essence of mathematics lies in its freedom. – Georg Cantor",
    "Mathematics is the queen of the sciences. – Carl Friedrich Gauss",
    "The laws of nature are but the mathematical thoughts of God. – Euclid",
    "Do not worry about your difficulties in mathematics; I can assure you that mine are still greater. – Albert Einstein", // Updated phrasing
    "The study of mathematics, like the Nile, begins in minuteness but ends in magnificence. – Charles Caleb Colton",
    "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. – William Paul Thurston",
    "The highest form of pure thought is in mathematics. – Plato",
    "Mathematics is a game played according to certain simple rules with meaningless marks on paper. – David Hilbert",
    "As far as the laws of mathematics refer to reality, they are not certain; and as far as they are certain, they do not refer to reality. – Albert Einstein",
    "Logic is the anatomy of thought. – John Locke",
    "Numbers have a way of taking a man by the hand and leading him down the path of reason. – Pythagoras",
    "The science of pure mathematics, in its modern developments, may claim to be the most original creation of the human spirit. – Alfred North Whitehead",
    "Mathematics is the door and key to the sciences. – Roger Bacon",
    "The greatest mathematicians, like Archimedes, Newton, and Gauss, always united theory and applications in a graceful way. – David Mumford",
    "Mathematics is the music of reason. – James Joseph Sylvester",
    "The mathematical sciences particularly exhibit order, symmetry, limitation; and these are the greatest forms of the beautiful. – Aristotle",
    "The only way to discover the limits of the possible is to go beyond them into the impossible. – Arthur C. Clarke",
    "There is no branch of mathematics, however abstract, which may not someday be applied to phenomena of the real world. – Nikolai Lobachevsky",
    "Mathematics is not a careful march down a well-cleared highway, but a journey into a strange wilderness, where the explorers often get lost. – W.S. Anglin",
    "The power of mathematics is often to make the complex simple. – Unknown",
    "The book of nature is written in the language of mathematics. – Richard Feynman",
    "Mathematics consists of proving the most obvious thing in the least obvious way. – George Pólya",
    "The mathematician's patterns, like the painter's or the poet's, must be beautiful; the ideas, like the colours or the words, must fit together in a harmonious way. – G.H. Hardy",
    "Mathematics is a wonderful tool for describing the world. – Stephen Hawking",
    "An equation for me has no meaning unless it expresses a thought of God. – Srinivasa Ramanujan",
    "The more I study science, the more I believe in God. – Albert Einstein",
    "The universe cannot be read until we have learned the language and become familiar with the characters in which it is written. It is written in mathematical language. – Galileo Galilei",
    "It is impossible to be a mathematician without being a poet in soul. – Sofya Kovalevskaya",
    "The chief aim of all investigations of the external world should be to discover the rational order and harmony which has been imposed on it by God and which He revealed to us in the language of mathematics. – Johannes Kepler",
    "Mathematics is the art of giving the same name to different things. – Henri Poincaré",
    "The world is a book and those who do not travel read only one page. – Saint Augustine",
    "The science of mathematics is the most precise and definite of all sciences. – David Hilbert",
    "Mathematics is the study of analogies between analogies. – Gian-Carlo Rota",
    "The only way to learn mathematics is to do mathematics. – Paul Halmos",
    "The true spirit of delight, the exhilaration, the sense of being more than Man, which is the touchstone of the highest excellence, is to be found in mathematics as surely as in poetry. – Bertrand Russell",
    "What we know is a drop, what we don't know is an ocean. – Isaac Newton",
    "Mathematics is the most beautiful and most powerful creation of the human spirit. – Stefan Banach",
    "The object of mathematics is to understand the universe. – David Hilbert",
    "Mathematics is the supreme science. – Benjamin Franklin",
    "The whole of science is nothing more than a refinement of everyday thinking. – Albert Einstein",
    "Mathematics is the art of pure thought. – Unknown",
    "The great book of nature can be read only by those who know the mathematical language. – Galileo Galilei", // Updated phrasing
    "Mathematics is the queen of the sciences, and number theory is the queen of mathematics. – Carl Friedrich Gauss",
    "The mathematician does not study pure mathematics because it is useful; he studies it because he delights in it and he delights in it because it is beautiful. – Henri Poincaré",
    "Numbers speak for themselves. – Unknown",
    "The essence of mathematics is not to make simple things complicated, but to make complicated things simple. – S. Gudder",
    "Mathematics is a place where you can do things which you can't do in the real world. – Marcus du Sautoy",
    "The science of mathematics is the most precise and definite of all sciences. – David Hilbert",
    "Mathematics reveals its secrets only to those who approach it with pure love, for its own beauty. – Archimedes",
    "The only way to learn mathematics is to do mathematics. – Paul Halmos",
    "Mathematics is a grand, beautiful, and sometimes terrifying intellectual adventure. – Unknown",
    "The universe is a grand book which cannot be understood unless one first learns to comprehend the language and interpret the characters in which it is written. It is written in the language of mathematics. – Galileo Galilei",
    "Mathematics is the language of the universe. – Pythagoras",
    "The more I learn about mathematics, the more I marvel at its simplicity. – Unknown",
    "Mathematics is the most beautiful and most powerful creation of the human spirit. – Stefan Banach",
    "The laws of nature are but the mathematical thoughts of God. – Euclid",
    "Mathematics is a staircase to the stars. – Unknown",
    "The true value of a human being is determined primarily by the measure and the sense in which he has attained liberation from the self. – Albert Einstein",
    "Mathematics is the ultimate in common sense. – Unknown",
    "The great book of nature is written in mathematical symbols. – Galileo Galilei",
    "Mathematics is the language of science. – Unknown",
    "The mathematician's pattern, like the painter's or the poet's, must be beautiful. – G.H. Hardy",
    "Mathematics is a way of thinking. – Unknown",
    "The essence of mathematics is not to make simple things complicated, but to make complicated things simple. – S. Gudder",
    "Mathematics is a language that helps us describe the world. – Unknown",
    "The laws of nature are but the mathematical thoughts of God. – Johannes Kepler",
    "Mathematics is the most beautiful and most powerful creation of the human spirit. – Stefan Banach",
    "The only way to learn mathematics is to do mathematics. – Paul Halmos",
    "Mathematics is the queen of the sciences, and number theory is the queen of mathematics. – Carl Friedrich Gauss",
    "The true spirit of delight, the exhilaration, the sense of being more than Man, which is the touchstone of the highest excellence, is to be found in mathematics as surely as in poetry. – Bertrand Russell",
    "What we know is a drop, what we don't know is an ocean. – Isaac Newton",
    "Mathematics is the most beautiful and most powerful creation of the human spirit. – Stefan Banach",
    "The object of mathematics is to understand the universe. – David Hilbert",
    "Mathematics is the supreme science. – Benjamin Franklin",
    "The whole of science is nothing more than a refinement of everyday thinking. – Albert Einstein",
    "Mathematics is the art of pure thought. – Unknown",
    "The great book of nature can be read only by those who know the language in which it was written. And this language is mathematics. – Galileo Galilei",
    "Mathematics is the queen of the sciences, and number theory is the queen of mathematics. – Carl Friedrich Gauss",
    "The mathematician does not study pure mathematics because it is useful; he studies it because he delights in it and he delights in it because it is beautiful. – Henri Poincaré",
    "Numbers speak for themselves. – Unknown",
    "The essence of mathematics is not to make simple things complicated, but to make complicated things simple. – S. Gudder",
    "Mathematics is a place where you can do things which you can't do in the real world. – Marcus du Sautoy",
    "The science of mathematics is the most precise and definite of all sciences. – David Hilbert",
    "Mathematics reveals its secrets only to those who approach it with pure love, for its own beauty. – Archimedes",
    "The only way to learn mathematics is to do mathematics. – Paul Halmos",
    "Mathematics is a grand, beautiful, and sometimes terrifying intellectual adventure. – Unknown",
    "The universe is a grand book which cannot be understood unless one first learns to comprehend the language and interpret the characters in which it is written. It is written in the language of mathematics. – Galileo Galilei",
    "Mathematics is the language of the universe. – Pythagoras",
    "The more I learn about mathematics, the more I marvel at its simplicity. – Unknown",
    "Mathematics is the most beautiful and most powerful creation of the human spirit. – Stefan Banach",
    "The laws of nature are but the mathematical thoughts of God. – Euclid",
    "Mathematics is a staircase to the stars. – Unknown",
    "The true value of a human being is determined primarily by the measure and the sense in which he has attained liberation from the self. – Albert Einstein",
    "Mathematics is the ultimate in common sense. – Unknown",
    "The great book of nature is written in mathematical symbols. – Galileo Galilei",
    "Mathematics is the language of science. – Unknown",
    "The mathematician's pattern, like the painter's or the poet's, must be beautiful. – G.H. Hardy",
    "Mathematics is a way of thinking. – Unknown",
    "The essence of mathematics is not to make simple things complicated, but to make complicated things simple. – S. Gudder",
    "Mathematics is a language that helps us describe the world. – Unknown",
    "The laws of nature are but the mathematical thoughts of God. – Johannes Kepler",
    "We will always have STEM with us. Some things will never change. – Buzz Aldrin" // Newly added quote
];


    const dailyFactElement = document.getElementById('daily-fact');

    if (dailyFactElement) {
        // Get current date (day of the year) to pick a fact
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Use modulo to cycle through facts based on day of year
        const factIndex = dayOfYear % dailyFacts.length;
        dailyFactElement.textContent = dailyFacts[factIndex];
    }

    // --- Math Puzzle of the Week Logic (Now on Student Hub Page, math-challenge.html) ---
    // This logic will only run if the elements exist on the current page.
    const toggleAnswerBtn = document.getElementById('toggle-answer-btn');
    const puzzleAnswer = document.getElementById('puzzle-answer');

    if (toggleAnswerBtn && puzzleAnswer) {
        toggleAnswerBtn.addEventListener('click', () => {
            puzzleAnswer.classList.toggle('hidden');
            if (puzzleAnswer.classList.contains('hidden')) {
                toggleAnswerBtn.textContent = 'Show Answer';
            } else {
                toggleAnswerBtn.textContent = 'Hide Answer';
            }
        });

        const mathPuzzles = [
    {
        question: "I am an odd number. Take away one letter and I become even. What number am I?",
        answer: "Seven (take away 's' and it becomes 'even')."
    },
    {
        question: "What has an infinite number of faces and a back?",
        answer: "A mirror."
    },
    {
        question: "A man looks at a painting and says, \"Brothers and sisters I have none, but that man's father is my father's son.\" Who is the man in the painting?",
        answer: "His son."
    },
    {
        question: "What is the smallest positive integer that is divisible by all the integers from 1 to 10, inclusive?",
        answer: "2520"
    },
    {
        question: "I am a three-digit number. My second digit is four times as big as the third digit. My first digit is three less than my second digit. What number am I?",
        answer: "141"
    },
    {
        question: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, 13, ...?",
        answer: "21 (Fibonacci sequence)"
    },
    {
        question: "If you multiply this number by any other number, the answer will always be the same. What number is it?",
        answer: "Zero"
    },
    {
        question: "What is the sum of all integers from 1 to 100?",
        answer: "5050"
    },
    {
        question: "A number has three digits. The product of the digits is 216. The sum of the digits is 19. What is the number? (Hint: Consider permutations)",
        answer: "666 (or 496, 649, 946, 964, 469, 694 if order matters, but 666 is the most straightforward)"
    },
    {
        question: "What is the only prime number that is even?",
        answer: "2"
    },
    {
        question: "What is the smallest number that, when divided by 2, 3, 4, 5, and 6, leaves a remainder of 1?",
        answer: "61 (LCM of 2,3,4,5,6 is 60, plus 1)"
    },
    {
        question: "Using only addition, how can you add eight 8s to get the number 1,000?",
        answer: "888 + 88 + 8 + 8 + 8 = 1,000"
    },
    {
        question: "I am a number. If you add 1 to me, I become a perfect square. If you subtract 1 from me, I become a perfect cube. What number am I?",
        answer: "26 (26+1=27, which is 3^3; 26-1=25, which is 5^2)"
    },
    {
        question: "What is the largest prime factor of 100?",
        answer: "5"
    },
    {
        question: "What is the smallest positive integer that is divisible by 3, 4, and 5?",
        answer: "60"
    },
    {
        question: "If x + y = 5 and x - y = 3, what is the value of x?",
        answer: "x = 4"
    },
    {
        question: "I am thinking of a number. If you multiply it by 7 and subtract 5, you get 23. What is the number?",
        answer: "4"
    },
    {
        question: "If 2x + 3 = 11, what is x?",
        answer: "x = 4"
    },
    {
        question: "A father is 30 years older than his son. In 5 years, the father will be twice as old as his son. How old is the son now?",
        answer: "The son is 25 years old."
    },
    {
        question: "The sum of two numbers is 10. Their product is 24. What are the two numbers?",
        answer: "4 and 6"
    },
    {
        question: "If 3a - 7 = 2a + 5, what is a?",
        answer: "a = 12"
    },
    {
        question: "A certain number, when doubled and then increased by 10, equals 40. What is the number?",
        answer: "15"
    },
    {
        question: "If x^2 = 16, what are the possible values of x?",
        answer: "x = 4 or x = -4"
    },
    {
        question: "The perimeter of a rectangle is 20 cm. If its length is 6 cm, what is its width?",
        answer: "4 cm"
    },
    {
        question: "If 5(x-2) = 20, what is x?",
        answer: "x = 6"
    },
    {
        question: "A square has a perimeter of 36 cm. What is its area?",
        answer: "81 cm^2"
    },
    {
        question: "How many sides does a nonagon have?",
        answer: "9"
    },
    {
        question: "If a circle has a radius of 5 cm, what is its circumference? (Use π ≈ 3.14)",
        answer: "31.4 cm"
    },
    {
        question: "A triangle has angles measuring 45° and 60°. What is the measure of the third angle?",
        answer: "75°"
    },
    {
        question: "What is the volume of a cube with side length 4 cm?",
        answer: "64 cm^3"
    },
    {
        question: "How many degrees are in a straight angle?",
        answer: "180°"
    },
    {
        question: "The area of a rectangle is 48 cm^2. If its width is 6 cm, what is its length?",
        answer: "8 cm"
    },
    {
        question: "What type of triangle has all three sides of different lengths?",
        answer: "Scalene triangle"
    },
    {
        question: "If a square has an area of 100 cm^2, what is the length of one of its sides?",
        answer: "10 cm"
    },
    {
        question: "How many faces does a triangular prism have?",
        answer: "5 faces (2 triangles, 3 rectangles)"
    },
    {
        question: "A baker bakes 20 cakes. He sells half of them. How many cakes does he have left?",
        answer: "10 cakes"
    },
    {
        question: "You have 10 apples and you give away 3. How many do you have left?",
        answer: "7 apples"
    },
    {
        question: "A train travels at 60 miles per hour. How far will it travel in 3 hours?",
        answer: "180 miles"
    },
    {
        question: "If a shirt costs $25 and is on sale for 20% off, what is the sale price?",
        answer: "$20"
    },
    {
        question: "A recipe calls for 2 cups of flour for every 1 cup of sugar. If you use 3 cups of sugar, how much flour do you need?",
        answer: "6 cups of flour"
    },
    {
        question: "You are running a race and you overtake the person in second place. What position are you in now?",
        answer: "Second place"
    },
    {
        question: "A clock strikes 6 times in 5 seconds. How many times will it strike in 10 seconds?",
        answer: "11 times (The first strike is at 0 seconds, then 5 more strikes at 1-second intervals. So, in 10 seconds, it will strike at 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 seconds, which is 11 times)."
    },
    {
        question: "There are 12 birds on a branch. A hunter shoots 3 of them. How many birds are left on the branch?",
        answer: "None (the rest fly away)"
    },
    {
        question: "A farmer has 17 sheep. All but 9 die. How many sheep are left?",
        answer: "9 sheep"
    },
    {
        question: "What is the probability of rolling a 7 with two standard six-sided dice?",
        answer: "1/6 (There are 6 ways to roll a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) out of 36 total combinations)."
    },
    {
        question: "If you have a basket with 5 apples, and you take away 2, how many apples do you have?",
        answer: "2 apples (you took them)"
    },
    {
        question: "A librarian has 10 books. She arranges them on a shelf. How many different ways can she arrange them?",
        answer: "3,628,800 (10 factorial or 10!)"
    },
    {
        question: "A car travels at an average speed of 50 km/h. How long will it take to travel 200 km?",
        answer: "4 hours"
    },
    {
        question: "You buy an item for $10 and sell it for $20. Then you buy it back for $30 and sell it for $40. How much profit did you make?",
        answer: "$20 profit (($20 - $10) + ($40 - $30) = $10 + $10 = $20)"
    },
    {
        question: "What number comes next in the sequence: 1, 4, 9, 16, 25, ...?",
        answer: "36 (These are perfect squares: 1^2, 2^2, 3^2, 4^2, 5^2, 6^2)"
    },
    {
        question: "What is the smallest number that is a multiple of 7 and also a multiple of 11?",
        answer: "77"
    },
    {
        question: "If you have 3 red marbles, 4 blue marbles, and 5 green marbles in a bag, what is the probability of picking a blue marble?",
        answer: "4/12 or 1/3"
    },
    {
        question: "What is the value of $5!$ (5 factorial)?",
        answer: "120 ($5 \times 4 \times 3 \times 2 \times 1$)"
    },
    {
        question: "A clock loses 5 minutes every hour. If it is set correctly at 12 PM, what time will it show at 3 PM the same day?",
        answer: "2:45 PM"
    },
    {
        question: "What is the sum of the first 10 prime numbers?",
        answer: "129 (2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 + 29)"
    },
    {
        question: "If a baker can bake 10 cakes in 2 hours, how many hours will it take him to bake 25 cakes?",
        answer: "5 hours"
    },
    {
        question: "What is the area of a triangle with a base of 10 cm and a height of 8 cm?",
        answer: "40 cm^2"
    },
    {
        question: "I have a box with 10 pairs of socks. If I randomly pick socks one by one, how many socks do I need to pick to guarantee I have a matching pair?",
        answer: "11 socks"
    },
    {
        question: "What is the square root of 225?",
        answer: "15"
    },
    {
        question: "If a car travels at an average speed of 80 km/h, how long will it take to travel 240 km?",
        answer: "3 hours"
    },
    {
        question: "What is the next letter in the series: O, T, T, F, F, S, S, E, N, ...?",
        answer: "T (One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten)"
    },
    {
        question: "A man has 50 chickens. All but 10 die. How many chickens are left?",
        answer: "10 chickens"
    },
    {
        question: "What is the average of 10, 20, and 30?",
        answer: "20"
    },
    {
        question: "If you have a pizza cut into 8 slices and you eat 3, what fraction of the pizza is left?",
        answer: "5/8"
    },
    {
        question: "What is the largest two-digit prime number?",
        answer: "97"
    },
    {
        question: "A shop sells apples at $0.50 each. If you buy 10 apples, how much will it cost?",
        answer: "$5.00"
    },
    {
        question: "What is the perimeter of a regular octagon with side length 7 cm?",
        answer: "56 cm"
    },
    {
        question: "If a bottle is half full, what percentage of it is empty?",
        answer: "50%"
    },
    {
        question: "What is the sum of the interior angles of a quadrilateral?",
        answer: "360 degrees"
    },
    {
        question: "I am a number between 1 and 100. I am a multiple of 9 and 6. What number am I?",
        answer: "18, 36, 54, 72, 90 (or 18 if asking for the smallest)"
    },
    {
        question: "A farmer has 19 pigs. All but 7 escape. How many pigs are left?",
        answer: "7 pigs"
    },
    {
        question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
        answer: "32 (powers of 2)"
    },
    {
        question: "If you have a deck of 52 playing cards, what is the probability of drawing a King?",
        answer: "4/52 or 1/13"
    },
    {
        question: "What is the value of $0!$ (0 factorial)?",
        answer: "1"
    },
    {
        question: "A car consumes 1 liter of fuel for every 10 km. How much fuel is needed to travel 150 km?",
        answer: "15 liters"
    },
    {
        question: "What is the smallest number that is divisible by both 4 and 6?",
        answer: "12"
    },
    {
        question: "If a circle has a diameter of 10 cm, what is its area? (Use π ≈ 3.14)",
        answer: "78.5 cm^2"
    },
    {
        question: "What is the sum of the first 5 odd numbers?",
        answer: "25 (1 + 3 + 5 + 7 + 9)"
    },
    {
        question: "A class has 30 students. 60% of them are girls. How many girls are in the class?",
        answer: "18 girls"
    },
    {
        question: "What is the largest number you can make using the digits 1, 2, 3, 4, 5 once?",
        answer: "54321"
    },
    {
        question: "If a bus leaves at 8:00 AM and arrives at 10:30 AM, how long was the journey?",
        answer: "2 hours and 30 minutes"
    },
    {
        question: "What is the product of all integers from -5 to 5?",
        answer: "0 (because it includes 0)"
    },
    {
        question: "How many days are in a leap year?",
        answer: "366 days"
    },
    {
        question: "What is the value of $10^3$?",
        answer: "1000"
    },
    {
        question: "A rectangle has a length of 12 cm and a width of 5 cm. What is its perimeter?",
        answer: "34 cm"
    },
    {
        question: "If a bag contains 5 red balls and 5 green balls, what is the probability of picking a red ball?",
        answer: "5/10 or 1/2"
    },
    {
        question: "What is the smallest three-digit number?",
        answer: "100"
    },
    {
        question: "If you divide 30 by half and add 10, what do you get?",
        answer: "70 (30 / 0.5 = 60; 60 + 10 = 70)"
    },
    {
        question: "What is the next number in the sequence: 100, 95, 90, 85, ...?",
        answer: "80"
    },
    {
        question: "How many minutes are in a week?",
        answer: "10080 minutes (7 days * 24 hours/day * 60 minutes/hour)"
    },
    {
        question: "What is the sum of the angles in a pentagon?",
        answer: "540 degrees"
    },
    {
        question: "If a book costs $15 and you get a 10% discount, how much do you pay?",
        answer: "$13.50"
    },
    {
        question: "What is the largest number that can be written with three digits?",
        answer: "999"
    },
    {
        question: "A train leaves station A at 9:00 AM and arrives at station B at 1:00 PM. How long was the journey?",
        answer: "4 hours"
    },
    {
        question: "What is the smallest prime number?",
        answer: "2"
    },
    {
        question: "If a recipe requires 3 eggs for 6 servings, how many eggs are needed for 10 servings?",
        answer: "5 eggs"
    },
    {
        question: "What is the value of $(2+3) \times 4 - 5$?",
        answer: "15"
    },
    {
        question: "How many sides does a hexagon have?",
        answer: "6"
    },
    {
        question: "What is the next number in the sequence: 1, 8, 27, 64, ...?",
        answer: "125 (perfect cubes: 1^3, 2^3, 3^3, 4^3, 5^3)"
    },
    {
        question: "If you have 10 apples and you eat half of them, how many are left?",
        answer: "5 apples"
    },
    {
        question: "What is the sum of the even numbers between 1 and 10 (inclusive)?",
        answer: "30 (2 + 4 + 6 + 8 + 10)"
    },
    {
        question: "A square has an area of 64 square meters. What is the length of its diagonal?",
        answer: "8√2 meters (approximately 11.31 meters)"
    },
    {
        question: "If a car travels 120 km in 2 hours, what is its average speed?",
        answer: "60 km/h"
    },
    {
        question: "What is the result of $100 \div 20 \times 3 + 5$?",
        answer: "20"
    },
    {
        question: "How many seconds are in a day?",
        answer: "86400 seconds"
    },
    {
        question: "What is the largest number that is a multiple of both 3 and 7, and less than 50?",
        answer: "42"
    },
    {
        question: "If you have 5 red balls and 5 blue balls, and you pick two balls without replacement, what is the probability that both are red?",
        answer: "2/9 ( (5/10) * (4/9) = 20/90 = 2/9 )"
    },
    {
        question: "What is the value of $2^5$?",
        answer: "32"
    },
    {
        question: "A baker makes 100 cookies. He sells 75% of them. How many cookies did he sell?",
        answer: "75 cookies"
    }
];


        function setDailyPuzzle() {
            const puzzleQuestionElem = document.getElementById('puzzle-question');
            const puzzleAnswerElem = document.getElementById('puzzle-answer');
            // No need to re-get toggleAnswerBtn here as it's already in scope

            if (puzzleQuestionElem && puzzleAnswerElem) {
                const randomIndex = Math.floor(Math.random() * mathPuzzles.length);
                const selectedPuzzle = mathPuzzles[randomIndex];

                puzzleQuestionElem.textContent = selectedPuzzle.question;
                puzzleAnswerElem.innerHTML = selectedPuzzle.answer;
                puzzleAnswerElem.classList.add('hidden'); // Ensure it's hidden initially
                toggleAnswerBtn.textContent = 'Show Answer'; // Reset button text
            }
        }

        setDailyPuzzle(); // Call setDailyPuzzle when the DOM is loaded for this page
    }
});
